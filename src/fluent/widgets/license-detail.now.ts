import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['widget_lto_license_detail'],
    name: 'LTO — License Detail',
    id: 'lto-license-detail',
    serverScript: Now.include('./license-detail.server.js'),
    clientScript: Now.include('./license-detail.client.js'),
    htmlTemplate: Now.include('./license-detail.html'),
    customCss: Now.include('./license-detail.scss'),
    hasPreview: false,
    demoData: {
        data: {
            found: false,
            license: null,
            checklist: [],
            evidence: [],
            alerts: [],
        },
    },
})
