(function () {
    var sysId = $sp.getParameter('sys_id') || '';
    data.sys_id = sysId;
    data.found = false;
    data.license = null;
    data.checklist = [];
    data.evidence = [];
    data.alerts = [];

    if (!sysId) return;

    if (input && input.action === 'toggle_checklist' && input.row_sys_id) {
        var tg = new GlideRecord('x_1998335_health_l_form_checklist');
        if (tg.get(input.row_sys_id)) {
            var nowCompleted = !(tg.x_1998335_health_l_is_completed + '' === 'true');
            tg.x_1998335_health_l_is_completed = nowCompleted;
            if (nowCompleted) {
                tg.x_1998335_health_l_completed_at = new GlideDateTime();
                tg.x_1998335_health_l_completed_by = gs.getUserID();
            } else {
                tg.x_1998335_health_l_completed_at = '';
                tg.x_1998335_health_l_completed_by = '';
            }
            tg.update();
        }
    }

    var lic = new GlideRecord('x_1998335_health_l_license');
    if (!lic.get(sysId)) return;
    data.found = true;
    data.license = {
        sys_id: lic.sys_id.toString(),
        license_number: lic.x_1998335_health_l_license_number.toString(),
        facility: lic.x_1998335_health_l_facility_id.x_1998335_health_l_name.toString(),
        license_type: lic.x_1998335_health_l_license_type.getDisplayValue(),
        issue_date: lic.x_1998335_health_l_issue_date.getDisplayValue(),
        expiry_date: lic.x_1998335_health_l_expiry_date.getDisplayValue(),
        days_before_expiry: parseInt(lic.x_1998335_health_l_days_before_expiry, 10),
        status: lic.x_1998335_health_l_status.getDisplayValue(),
        status_value: lic.x_1998335_health_l_status.toString(),
        renewal_stage: lic.x_1998335_health_l_renewal_stage.getDisplayValue(),
        checklist_pct: parseInt(lic.x_1998335_health_l_checklist_pct, 10) || 0,
        notes: lic.x_1998335_health_l_notes.toString(),
    };

    var ck = new GlideRecord('x_1998335_health_l_form_checklist');
    ck.addQuery('x_1998335_health_l_license_id', sysId);
    ck.orderBy('x_1998335_health_l_form_name');
    ck.query();
    while (ck.next()) {
        data.checklist.push({
            sys_id: ck.sys_id.toString(),
            form_name: ck.x_1998335_health_l_form_name.toString(),
            purpose: ck.x_1998335_health_l_purpose.toString(),
            completed: ck.x_1998335_health_l_is_completed + '' === 'true',
            completed_at: ck.x_1998335_health_l_completed_at.getDisplayValue() + '',
            completed_by: ck.x_1998335_health_l_completed_by.getDisplayValue() + '',
        });
    }

    var ev = new GlideRecord('x_1998335_health_l_evidence_file');
    ev.addQuery('x_1998335_health_l_license_id', sysId);
    ev.orderByDesc('x_1998335_health_l_uploaded_at');
    ev.query();
    while (ev.next()) {
        var attachmentId = ev.x_1998335_health_l_attachment_sys_id.toString();
        data.evidence.push({
            sys_id: ev.sys_id.toString(),
            file_name: ev.x_1998335_health_l_file_name.toString(),
            file_type: ev.x_1998335_health_l_file_type.getDisplayValue(),
            uploaded_by: ev.x_1998335_health_l_uploaded_by.getDisplayValue() + '',
            uploaded_on: ev.x_1998335_health_l_uploaded_at.getDisplayValue(),
            attachment_sys_id: attachmentId,
            download_url: attachmentId ? '/sys_attachment.do?sys_id=' + attachmentId : '',
        });
    }

    var al = new GlideRecord('x_1998335_health_l_alert');
    al.addQuery('x_1998335_health_l_license_id', sysId);
    al.orderByDesc('x_1998335_health_l_sent_at');
    al.query();
    while (al.next()) {
        data.alerts.push({
            sys_id: al.sys_id.toString(),
            threshold: al.x_1998335_health_l_days_before_expiry.toString(),
            channel: al.x_1998335_health_l_channel.getDisplayValue(),
            status: al.x_1998335_health_l_status.getDisplayValue(),
            sent_at: al.x_1998335_health_l_sent_at.getDisplayValue(),
        });
    }
})();
