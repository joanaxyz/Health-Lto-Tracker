import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['widget_lto_recent_alerts'],
    name: 'LTO — Recent Alerts',
    id: 'lto-recent-alerts',
    serverScript: Now.include('./recent-alerts.server.js'),
    clientScript: Now.include('./recent-alerts.client.js'),
    htmlTemplate: Now.include('./recent-alerts.html'),
    customCss: Now.include('./recent-alerts.scss'),
    hasPreview: false,
    demoData: {
        data: {
            alerts: [],
        },
    },
})
