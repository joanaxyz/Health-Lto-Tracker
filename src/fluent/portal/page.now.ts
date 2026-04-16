import { SPPage } from '@servicenow/sdk/core'

// LTO Dashboard page — 5-row layout with hero, quick actions, KPIs, tables, and alerts
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
            width: 'container-fluid',
            order: 100,
            rows: [
                // Row 1 — Hero Banner (full width)
                {
                    $id: Now.ID['lto_row_hero'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['lto_col_hero'],
                            size: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['lto_instance_hero'],
                                    widget: 'lto-hero-banner',
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $id: Now.ID['lto_dashboard_container_main'],
            name: 'LTO Dashboard Main',
            width: 'container',
            order: 200,
            rows: [
                // Row 2 — Quick Action Tiles (full width)
                {
                    $id: Now.ID['lto_row_quick_actions'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['lto_col_quick_actions'],
                            size: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['lto_instance_quick_actions'],
                                    widget: 'lto-quick-actions',
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
                // Row 3 — KPI Status Cards (full width)
                {
                    $id: Now.ID['lto_row_status_summary'],
                    order: 200,
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
                // Row 4 — Expiring Licenses (col-8) + Checklist Progress (col-4)
                {
                    $id: Now.ID['lto_row_expiring_checklist'],
                    order: 300,
                    columns: [
                        {
                            $id: Now.ID['lto_col_expiring'],
                            size: 8,
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
                        {
                            $id: Now.ID['lto_col_checklist'],
                            size: 4,
                            order: 200,
                            instances: [
                                {
                                    $id: Now.ID['lto_instance_checklist_progress'],
                                    widget: 'lto-checklist-progress',
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
                // Row 5 — Recent Alerts (full width)
                {
                    $id: Now.ID['lto_row_alerts_v2'],
                    order: 400,
                    columns: [
                        {
                            $id: Now.ID['lto_col_alerts_v2'],
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
