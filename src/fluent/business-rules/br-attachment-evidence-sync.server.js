;(function executeRule(current, previous) {
    var LICENSE_TABLE = 'x_1998335_health_l_license';
    var EVIDENCE_TABLE = 'x_1998335_health_l_evidence_file';
    var ATTACHMENT_FIELD = 'x_1998335_health_l_attachment_sys_id';
    var FILE_TYPE_FIELD = 'x_1998335_health_l_file_type';
    var LOG_SOURCE = 'LTO Evidence Sync';

    function deleteByAttachmentId(attachmentId) {
        if (!attachmentId) return;

        var stale = new GlideRecord(EVIDENCE_TABLE);
        stale.addQuery(ATTACHMENT_FIELD, attachmentId);
        stale.query();
        while (stale.next()) {
            stale.deleteRecord();
        }
    }

    function findEvidenceByAttachmentId(attachmentId) {
        var evidence = new GlideRecord(EVIDENCE_TABLE);
        evidence.addQuery(ATTACHMENT_FIELD, attachmentId);
        evidence.setLimit(1);
        evidence.query();
        return evidence.next() ? evidence : null;
    }

    function findLegacyStub(licenseId, fileName) {
        var stub = new GlideRecord(EVIDENCE_TABLE);
        stub.addQuery('x_1998335_health_l_license_id', licenseId);
        stub.addQuery('x_1998335_health_l_file_name', fileName);
        var blankAttachment = stub.addNullQuery(ATTACHMENT_FIELD);
        blankAttachment.addOrCondition(ATTACHMENT_FIELD, '');
        stub.orderByDesc('x_1998335_health_l_uploaded_at');
        stub.setLimit(1);
        stub.query();
        return stub.next() ? stub : null;
    }

    function resolveUserId(userName) {
        if (userName) {
            var user = new GlideRecord('sys_user');
            user.addQuery('user_name', userName);
            user.setLimit(1);
            user.query();
            if (user.next()) {
                return user.sys_id.toString();
            }

            gs.warn(
                '[' + LOG_SOURCE + '] Could not resolve attachment creator "' + userName + '" to sys_user. Falling back to current user.'
            );
        }

        return gs.getUserID();
    }

    function upsertEvidenceFromAttachment(attachment) {
        var attachmentId = attachment.sys_id.toString();
        var licenseId = attachment.table_sys_id.toString();

        if (!licenseId) {
            deleteByAttachmentId(attachmentId);
            return;
        }

        var license = new GlideRecord(LICENSE_TABLE);
        if (!license.get(licenseId)) {
            gs.warn(
                '[' + LOG_SOURCE + '] Skipping attachment ' + attachmentId + ' because license ' + licenseId + ' was not found.'
            );
            deleteByAttachmentId(attachmentId);
            return;
        }

        var evidence = findEvidenceByAttachmentId(attachmentId);
        var isNew = false;
        if (!evidence) {
            evidence = findLegacyStub(licenseId, attachment.file_name.toString());
        }
        if (!evidence) {
            evidence = new GlideRecord(EVIDENCE_TABLE);
            evidence.initialize();
            isNew = true;
        }

        var existingType = evidence[FILE_TYPE_FIELD].toString();
        evidence.x_1998335_health_l_license_id = licenseId;
        evidence.x_1998335_health_l_file_name = attachment.file_name.toString();
        evidence[ATTACHMENT_FIELD] = attachmentId;
        evidence.x_1998335_health_l_uploaded_at =
            attachment.getValue('sys_created_on') ||
            attachment.getValue('sys_updated_on') ||
            gs.nowDateTime();
        evidence.x_1998335_health_l_uploaded_by = resolveUserId(attachment.sys_created_by.toString());
        evidence[FILE_TYPE_FIELD] = existingType || 'other';

        if (isNew) {
            evidence.insert();
        } else {
            evidence.update();
        }
    }

    var currentTable = current.table_name.toString();
    if (currentTable !== LICENSE_TABLE) {
        if (previous && previous.table_name && previous.table_name.toString() === LICENSE_TABLE) {
            deleteByAttachmentId(current.sys_id.toString());
        }
        return;
    }

    upsertEvidenceFromAttachment(current);
})(current, previous);
