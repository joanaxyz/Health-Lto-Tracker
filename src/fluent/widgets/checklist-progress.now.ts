import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['widget_lto_checklist_progress'],
    name: 'LTO — Checklist Progress',
    id: 'lto-checklist-progress',
    serverScript: Now.include('./checklist-progress.server.js'),
    clientScript: Now.include('./checklist-progress.client.js'),
    htmlTemplate: Now.include('./checklist-progress.html'),
    customCss: Now.include('./checklist-progress.scss'),
    hasPreview: false,
    demoData: {
        data: {
            licenses: [],
        },
    },
})
