;(function executeRule(current, previous) {
    var LICENSE_TABLE = 'x_1998335_health_l_license';
    var ALLOWED_EXTENSIONS = {
        pdf: true,
        jpg: true,
        jpeg: true,
        png: true,
        docx: true,
    };
    var MAX_SIZE_BYTES = 10 * 1024 * 1024;

    if ((current.table_name + '') !== LICENSE_TABLE) return;

    var fileName = current.file_name.toString();
    var ext = '';
    var lastDot = fileName.lastIndexOf('.');
    if (lastDot >= 0) {
        ext = fileName.substring(lastDot + 1).toLowerCase();
    }

    if (!ALLOWED_EXTENSIONS[ext]) {
        current.setAbortAction(true);
        gs.addErrorMessage(
            'File "' + fileName + '" is not allowed for license evidence. Allowed types: PDF, JPG, PNG, DOCX.'
        );
        return;
    }

    var sizeBytes = parseInt(current.size_bytes + '', 10);
    if (!isNaN(sizeBytes) && sizeBytes > MAX_SIZE_BYTES) {
        current.setAbortAction(true);
        gs.addErrorMessage(
            'File "' + fileName + '" exceeds the maximum allowed size of 10 MB. Please choose a smaller file.'
        );
    }
})(current, previous);
