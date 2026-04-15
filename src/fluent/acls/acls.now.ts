import { Acl, Role } from '@servicenow/sdk/core'

// Roles
export const adminRole = Role({
    name: 'x_1998335_health_l.admin',
})

export const viewerRole = Role({
    name: 'x_1998335_health_l.viewer',
})

// ── Facility ─────────────────────────────────────────────────────────────────

Acl({
    $id: Now.ID['acl_facility_read'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    table: 'x_1998335_health_l_facility',
    roles: [adminRole, viewerRole],
})

Acl({
    $id: Now.ID['acl_facility_create'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    table: 'x_1998335_health_l_facility',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_facility_write'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    table: 'x_1998335_health_l_facility',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_facility_delete'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'delete',
    table: 'x_1998335_health_l_facility',
    roles: [adminRole],
})

// ── License ───────────────────────────────────────────────────────────────────

Acl({
    $id: Now.ID['acl_license_read'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    table: 'x_1998335_health_l_license',
    roles: [adminRole, viewerRole],
})

Acl({
    $id: Now.ID['acl_license_create'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    table: 'x_1998335_health_l_license',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_license_write'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    table: 'x_1998335_health_l_license',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_license_delete'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'delete',
    table: 'x_1998335_health_l_license',
    roles: [adminRole],
})

// ── Form Checklist ────────────────────────────────────────────────────────────

Acl({
    $id: Now.ID['acl_checklist_read'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    table: 'x_1998335_health_l_form_checklist',
    roles: [adminRole, viewerRole],
})

Acl({
    $id: Now.ID['acl_checklist_create'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    table: 'x_1998335_health_l_form_checklist',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_checklist_write'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    table: 'x_1998335_health_l_form_checklist',
    roles: [adminRole],
})

// ── Evidence File ─────────────────────────────────────────────────────────────

Acl({
    $id: Now.ID['acl_evidence_read'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    table: 'x_1998335_health_l_evidence_file',
    roles: [adminRole, viewerRole],
})

Acl({
    $id: Now.ID['acl_evidence_create'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    table: 'x_1998335_health_l_evidence_file',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_evidence_write'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    table: 'x_1998335_health_l_evidence_file',
    roles: [adminRole],
})

// ── Alert ─────────────────────────────────────────────────────────────────────

Acl({
    $id: Now.ID['acl_alert_read'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    table: 'x_1998335_health_l_alert',
    roles: [adminRole, viewerRole],
})

// Alert write/create is system-only (no role assigned)

// ── Audit Log ─────────────────────────────────────────────────────────────────

Acl({
    $id: Now.ID['acl_audit_log_read'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    table: 'x_1998335_health_l_audit_log',
    roles: [adminRole, viewerRole],
})

// Audit log write/delete: no roles — system only

// ── Incident Manager UI Page ──────────────────────────────────────────────────

// URL-level ACL restricting access to the incident manager UI page.
// Requires the app's admin role. The itil role cannot be used here because
// the SDK Role() function only accepts scoped role names.
Acl({
    $id: Now.ID['acl_incident_manager_url'],
    localOrExisting: 'Existing',
    type: 'url',
    operation: 'GET',
    name: 'x_1998335_health_l_incident_manager.do',
    roles: [adminRole],
})

// URL-level ACL for the LTO Dashboard — admin and viewer can both access it
Acl({
    $id: Now.ID['acl_lto_dashboard_url'],
    localOrExisting: 'Existing',
    type: 'url',
    operation: 'GET',
    name: 'x_1998335_health_l_lto_dashboard.do',
    roles: [adminRole, viewerRole],
})

// ── Field-Level ACLs (computed read-only fields — no one can write via form) ──

Acl({
    $id: Now.ID['acl_license_status_write'],
    localOrExisting: 'Existing',
    type: 'field',
    operation: 'write',
    table: 'x_1998335_health_l_license',
    field: 'x_1998335_health_l_status',
    condition: 'false',
})

Acl({
    $id: Now.ID['acl_license_days_write'],
    localOrExisting: 'Existing',
    type: 'field',
    operation: 'write',
    table: 'x_1998335_health_l_license',
    field: 'x_1998335_health_l_days_before_expiry',
    condition: 'false',
})

Acl({
    $id: Now.ID['acl_license_pct_write'],
    localOrExisting: 'Existing',
    type: 'field',
    operation: 'write',
    table: 'x_1998335_health_l_license',
    field: 'x_1998335_health_l_checklist_pct',
    condition: 'false',
})
