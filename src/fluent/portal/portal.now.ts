import { Record } from '@servicenow/sdk/core'

// LTO Tracker Service Portal
Record({
    $id: Now.ID['lto_portal'],
    table: 'sp_portal',
    data: {
        title: 'LTO Compliance Tracker',
        url_suffix: 'lto_tracker',
        homepage: '8ead4198fa134de083304226de9c38f8',
        default_search: Now.ID['lto_search_source_licenses'],
        kb_knowledge_base: '',
    },
})
