import { ClientScript } from '@servicenow/sdk/core'

// CS-01: Validate evidence file attachment size (max 10 MB) on submit
ClientScript({
    $id: Now.ID['cs_evidence_file_size'],
    name: 'LTO: Validate Evidence File Size',
    table: 'x_1998335_health_l_evidence_file',
    type: 'onSubmit',
    active: true,
    script: `
function onSubmit() {
    var fileInputs = document.querySelectorAll('input[type="file"]');
    for (var i = 0; i < fileInputs.length; i++) {
        var files = fileInputs[i].files;
        if (files && files.length > 0) {
            var file = files[0];
            var maxSize = 10 * 1024 * 1024; // 10 MB in bytes
            if (file.size > maxSize) {
                alert('File "' + file.name + '" exceeds the maximum allowed size of 10 MB. Please choose a smaller file.');
                return false;
            }
            var allowed = ['pdf', 'jpg', 'jpeg', 'png', 'docx'];
            var ext = file.name.split('.').pop().toLowerCase();
            if (allowed.indexOf(ext) === -1) {
                alert('File type ".' + ext + '" is not allowed. Allowed types: PDF, JPG, PNG, DOCX.');
                return false;
            }
        }
    }
    return true;
}
`,
})
