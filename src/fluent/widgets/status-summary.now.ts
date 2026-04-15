import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['widget_lto_status_summary'],
    name: 'LTO — License Status Summary',
    id: 'lto-status-summary',
    serverScript: Now.include('./status-summary.server.js'),
    clientScript: Now.include('./status-summary.client.js'),
    htmlTemplate: Now.include('./status-summary.html'),
    hasPreview: false,
    demoData: {
        data: {
            active: 5,
            expiring_soon: 3,
            expired: 1,
        },
    },
})
