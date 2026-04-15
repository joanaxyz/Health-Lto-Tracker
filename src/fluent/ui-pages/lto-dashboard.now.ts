import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import ltoDashboard from '../../client/lto-dashboard/index.html'

UiPage({
    $id: Now.ID['lto-dashboard-page'],
    endpoint: 'x_1998335_health_l_lto_dashboard.do',
    description: 'Health LTO Tracker — Compliance Dashboard',
    category: 'general',
    html: ltoDashboard,
    direct: true,
})
