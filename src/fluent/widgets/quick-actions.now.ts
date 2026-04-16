import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['widget_lto_quick_actions'],
    name: 'LTO — Quick Actions',
    id: 'lto-quick-actions',
    serverScript: Now.include('./quick-actions.server.js'),
    clientScript: Now.include('./quick-actions.client.js'),
    htmlTemplate: Now.include('./quick-actions.html'),
    customCss: Now.include('./quick-actions.scss'),
    hasPreview: false,
    demoData: {
        data: {
            tiles: [],
        },
    },
})
