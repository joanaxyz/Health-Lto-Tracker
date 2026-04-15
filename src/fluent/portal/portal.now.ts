import { Record } from '@servicenow/sdk/core'

// LTO Tracker Service Portal
Record({
    $id: Now.ID['lto_portal'],
    table: 'sp_portal',
    data: {
        title: 'LTO Compliance Tracker',
        url_suffix: 'lto_tracker',
        homepage: 'lto_dashboard',
        kb_knowledge_base: '',
    },
})
