// Health LTO Tracker — Fluent entry point

// Tables
import './tables/facility.now'
import './tables/license.now'
import './tables/alert.now'
import './tables/form-checklist.now'
import './tables/evidence-file.now'
import './tables/audit-log.now'

// Business Rules
import './business-rules/br-facility-duplicate.now'
import './business-rules/br-attachment-evidence-validate.now'
import './business-rules/br-attachment-evidence-sync.now'
import './business-rules/br-attachment-evidence-delete.now'
import './business-rules/br-license-status.now'
import './business-rules/br-license-checklist-create.now'
import './business-rules/br-license-expiry-alert.now'
import './business-rules/br-license-stage-block.now'
import './business-rules/br-license-stage-released.now'
import './business-rules/br-license-stage-audit.now'
import './business-rules/br-checklist-completed.now'
import './business-rules/br-checklist-pct.now'

// ACLs & Roles
import './acls/acls.now'

// Scheduled Jobs
import './scheduled-jobs/daily-alert.now'

// Email Notifications
import './notifications/expiry-alert.now'

// Application Menu
import './app-menu/app-menu.now'

// Form Layouts
import './forms/facility-form.now'
import './forms/license-form.now'
import './forms/license-related-lists.now'

// List Views
import './lists/license-list.now'
import './lists/alert-list.now'
import './lists/facility-list.now'
import './lists/form-checklist-list.now'
import './lists/evidence-file-list.now'

// UI Policies
import './ui-policies/license-policies.now'

// Client Scripts
import './client-scripts/cs-evidence-file-size.now'
import './client-scripts/cs-license-stage-confirm.now'
import './client-scripts/cs-license-days-before-expiry.now'

// Service Portal
import './portal/portal.now'
import './portal/page.now'
import './portal/license-detail-page.now'
import './portal/search-source.now'

// Widgets
import './widgets/hero-banner.now'
import './widgets/quick-actions.now'
import './widgets/checklist-progress.now'
import './widgets/status-summary.now'
import './widgets/expiring-licenses.now'
import './widgets/recent-alerts.now'
import './widgets/license-detail.now'

// UI Pages
import './ui-pages/lto-dashboard.now'
