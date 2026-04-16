import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['widget_lto_expiring_licenses'],
    name: 'LTO — Expiring Licenses Table',
    id: 'lto-expiring-licenses',
    serverScript: Now.include('./expiring-licenses.server.js'),
    clientScript: Now.include('./expiring-licenses.client.js'),
    htmlTemplate: Now.include('./expiring-licenses.html'),
    customCss: Now.include('./expiring-licenses.scss'),
    hasPreview: false,
    demoData: {
        data: {
            licenses: [],
        },
    },
})
