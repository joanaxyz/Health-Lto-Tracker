import { UiPolicy } from '@servicenow/sdk/core'

// UI Policies per SDD §8.6

// Status, Days Before Expiry, and Checklist % are always read-only (computed by BR)
UiPolicy({
    $id: Now.ID['uipolicy_license_computed_readonly'],
    table: 'x_1998335_health_l_license',
    shortDescription: 'Computed fields are read-only',
    active: true,
    onLoad: true,
    reverseIfFalse: false,
    actions: [
        {
            field: 'x_1998335_health_l_status',
            readOnly: true,
            mandatory: false,
        },
        {
            field: 'x_1998335_health_l_days_before_expiry',
            readOnly: true,
            mandatory: false,
        },
        {
            field: 'x_1998335_health_l_checklist_pct',
            readOnly: true,
            mandatory: false,
        },
    ],
})

// Completed At and Completed By on Form Checklist are always read-only
UiPolicy({
    $id: Now.ID['uipolicy_checklist_completed_readonly'],
    table: 'x_1998335_health_l_form_checklist',
    shortDescription: 'Completed At and Completed By are read-only',
    active: true,
    onLoad: true,
    reverseIfFalse: false,
    actions: [
        {
            field: 'x_1998335_health_l_completed_at',
            readOnly: true,
            mandatory: false,
        },
        {
            field: 'x_1998335_health_l_completed_by',
            readOnly: true,
            mandatory: false,
        },
    ],
})

// Evidence File metadata is attachment-synced; only file type remains editable
UiPolicy({
    $id: Now.ID['uipolicy_evidence_synced_readonly'],
    table: 'x_1998335_health_l_evidence_file',
    shortDescription: 'Synced evidence metadata is read-only',
    active: true,
    onLoad: true,
    reverseIfFalse: false,
    actions: [
        {
            field: 'x_1998335_health_l_license_id',
            readOnly: true,
            mandatory: false,
        },
        {
            field: 'x_1998335_health_l_file_name',
            readOnly: true,
            mandatory: false,
        },
        {
            field: 'x_1998335_health_l_attachment_sys_id',
            readOnly: true,
            mandatory: false,
        },
        {
            field: 'x_1998335_health_l_uploaded_by',
            readOnly: true,
            mandatory: false,
        },
        {
            field: 'x_1998335_health_l_uploaded_at',
            readOnly: true,
            mandatory: false,
        },
    ],
})
