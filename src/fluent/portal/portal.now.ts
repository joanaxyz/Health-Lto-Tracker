import { Record } from '@servicenow/sdk/core'

// LTO Tracker Service Portal
Record({
    $id: Now.ID['lto_portal'],
    table: 'sp_portal',
    data: {
        title: 'LTO Compliance Tracker',
        url_suffix: 'lto_tracker',
        homepage: '8ead4198fa134de083304226de9c38f8',
        kb_knowledge_base: '',
    },
})
