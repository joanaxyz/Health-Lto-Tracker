;(function executeRule(current, previous) {
    var evidence = new GlideRecord('x_1998335_health_l_evidence_file');
    evidence.addQuery('x_1998335_health_l_attachment_sys_id', current.sys_id.toString());
    evidence.query();
    while (evidence.next()) {
        evidence.deleteRecord();
    }
})(current, previous);
