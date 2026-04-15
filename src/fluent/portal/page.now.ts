import { SPPage } from '@servicenow/sdk/core'

// LTO Dashboard page with all three widget instances laid out in rows
SPPage({
    pageId: 'lto_dashboard',
    title: 'LTO Compliance Dashboard',
    category: 'custom',
    draft: false,
    internal: false,
    public: false,
    containers: [
        {
            $id: Now.ID['lto_dashboard_container'],
            name: 'LTO Dashboard Container',
            width: 'container',
            order: 100,
            rows: [
                // Row 1 — Status Summary
                {
                    $id: Now.ID['lto_row_status_summary'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['lto_col_status_summary'],
                            size: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['lto_instance_status_summary'],
                                    widget: 'lto-status-summary',
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
                // Row 2 — Expiring Licenses Table
                {
                    $id: Now.ID['lto_row_expiring_licenses'],
                    order: 200,
                    columns: [
                        {
                            $id: Now.ID['lto_col_expiring_licenses'],
                            size: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['lto_instance_expiring_licenses'],
                                    widget: 'lto-expiring-licenses',
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
                // Row 3 — Recent Alerts
                {
                    $id: Now.ID['lto_row_recent_alerts'],
                    order: 300,
                    columns: [
                        {
                            $id: Now.ID['lto_col_recent_alerts'],
                            size: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['lto_instance_recent_alerts'],
                                    widget: 'lto-recent-alerts',
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
