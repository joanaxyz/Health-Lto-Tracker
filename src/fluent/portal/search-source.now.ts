import { Record } from '@servicenow/sdk/core'

// Search source: Licenses (by license number, facility name, license type label)
Record({
    $id: Now.ID['lto_search_source_licenses'],
    table: 'sp_search_source',
    data: {
        id: 'lto_licenses',
        name: 'Licenses',
        enabled: true,
        order: 100,
        search_limit: 20,
        data_fetch_script: `
(function() {
    var q = String(search_term || '').trim();
    if (!q) { data = { list: [] }; return; }

    var gr = new GlideRecord('x_1998335_health_l_license');
    var enc = 'x_1998335_health_l_license_numberLIKE' + q +
              '^ORx_1998335_health_l_facility_id.x_1998335_health_l_nameLIKE' + q +
              '^ORx_1998335_health_l_license_typeLIKE' + q;
    gr.addEncodedQuery(enc);
    gr.setLimit(20);
    gr.query();

    var out = [];
    while (gr.next()) {
        out.push({
            label: gr.x_1998335_health_l_license_number.toString(),
            sublabel: gr.x_1998335_health_l_facility_id.x_1998335_health_l_name.toString() +
                      ' — ' + gr.x_1998335_health_l_license_type.getDisplayValue(),
            url: '?id=lto_license_detail&sys_id=' + gr.sys_id.toString(),
        });
    }
    data = { list: out };
})();
`,
    },
})

// Search source: Facilities
Record({
    $id: Now.ID['lto_search_source_facilities'],
    table: 'sp_search_source',
    data: {
        id: 'lto_facilities',
        name: 'Facilities',
        enabled: true,
        order: 200,
        search_limit: 20,
        data_fetch_script: `
(function() {
    var q = String(search_term || '').trim();
    if (!q) { data = { list: [] }; return; }

    var gr = new GlideRecord('x_1998335_health_l_facility');
    var enc = 'x_1998335_health_l_nameLIKE' + q +
              '^ORx_1998335_health_l_doh_license_numberLIKE' + q +
              '^ORx_1998335_health_l_addressLIKE' + q;
    gr.addEncodedQuery(enc);
    gr.setLimit(20);
    gr.query();

    var out = [];
    while (gr.next()) {
        out.push({
            label: gr.x_1998335_health_l_name.toString(),
            sublabel: 'DOH #' + gr.x_1998335_health_l_doh_license_number.toString() +
                      ' — ' + gr.x_1998335_health_l_facility_type.getDisplayValue(),
            url: '?id=form&table=x_1998335_health_l_facility&sys_id=' + gr.sys_id.toString(),
        });
    }
    data = { list: out };
})();
`,
    },
})
