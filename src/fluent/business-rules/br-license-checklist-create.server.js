;(function executeRule(current, previous) {
    /** @type {{name: string, purpose: string}[]} */
    var forms = [];
    var lt = current.x_1998335_health_l_license_type.toString();

    if (lt === 'doh_lto_main') {
        forms = [
            { name: 'DOH LTO Application Form', purpose: 'Primary application form for DOH License to Operate' },
            { name: 'Certificate of Compliance (COC) from PhilHealth', purpose: 'PhilHealth accreditation compliance certificate' },
            { name: 'Fire Safety Inspection Certificate (FSIC)', purpose: 'BFP-issued fire safety clearance' },
            { name: 'Sanitary Permit', purpose: 'LGU-issued sanitary permit' },
            { name: 'Building Permit / Occupancy Certificate', purpose: 'Proof of legal occupancy of facility premises' },
            { name: 'List of Medical Personnel with PRC IDs', purpose: 'Complete roster of licensed medical staff' },
            { name: 'Organizational Chart', purpose: 'Facility organizational structure' }
        ];
    } else if (lt === 'olrs_radiology') {
        forms = [
            { name: 'OLRS Radiology Application Form', purpose: 'OLRS application form for radiology variation' },
            { name: 'Radiation Safety Officer (RSO) Certificate', purpose: 'Certification of designated Radiation Safety Officer' },
            { name: 'Radiation Source Inventory', purpose: 'Complete list of radiation-emitting equipment' },
            { name: 'DOH Regional Office Inspection Report', purpose: 'Latest DOH regional inspection clearance' },
            { name: 'Equipment Registration Certificate', purpose: 'Registration of x-ray and imaging equipment' }
        ];
    } else if (lt === 'olrs_pharmacy') {
        forms = [
            { name: 'OLRS Pharmacy Application Form', purpose: 'OLRS application form for pharmacy variation' },
            { name: 'FDA Certificate of Product Registration', purpose: 'FDA clearance for pharmaceutical products handled' },
            { name: 'Pharmacist License (PRC ID)', purpose: 'Valid PRC ID of the responsible pharmacist' },
            { name: 'Drug Enforcement Agency (DEA) Registration', purpose: 'DEA registration for controlled substances' },
            { name: 'Pharmacy Layout / Floor Plan', purpose: 'Approved pharmacy floor plan and dispensing area layout' }
        ];
    }

    for (var i = 0; i < forms.length; i++) {
        var gr = new GlideRecord('x_1998335_health_l_form_checklist');
        gr.initialize();
        gr.x_1998335_health_l_license_id = current.sys_id;
        gr.x_1998335_health_l_form_name = forms[i].name;
        gr.x_1998335_health_l_purpose = forms[i].purpose;
        gr.x_1998335_health_l_is_completed = false;
        gr.insert();
    }
})(current, previous);
