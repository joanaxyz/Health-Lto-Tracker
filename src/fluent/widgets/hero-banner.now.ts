import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['widget_lto_hero_banner'],
    name: 'LTO — Hero Banner',
    id: 'lto-hero-banner',
    serverScript: Now.include('./hero-banner.server.js'),
    clientScript: Now.include('./hero-banner.client.js'),
    htmlTemplate: Now.include('./hero-banner.html'),
    customCss: Now.include('./hero-banner.scss'),
    hasPreview: false,
    demoData: {
        data: {
            user_name: 'Compliance Officer',
            today: 'April 16, 2026',
            active: 12,
            expiring_soon: 4,
            expired: 1,
        },
    },
})
