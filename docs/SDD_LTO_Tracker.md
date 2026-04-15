# System Design Document (SDD)
## Health Online LTO & Ancillary Licensing Tracker
### ServiceNow Application — PRBCS00032

**Prepared By:** [Development Team]
**Version:** 1.0
**Date:** April 12, 2026
**Status:** Draft — For AI-Assisted Development

---

## REVISION HISTORY

| Version | Date | Author | Changes Made | Status |
|---------|------|--------|--------------|--------|
| 0.1 | Apr 12, 2026 | Team | Initial SDD draft | Draft |
| 1.0 | Apr 12, 2026 | Team | Full specification for development | Draft |
| 1.1 | Apr 15, 2026 | Team | Updated scope to actual value `x_1998335_health_l`; updated all table/role names accordingly; changed `file_url` to `attachment_sys_id` in Evidence File table; documented companion Incident Management app in Appendix B | Updated |

---

## TABLE OF CONTENTS

1. Executive Summary
2. Introduction
3. Functional Requirements Specification
4. Non-Functional Requirements
5. ServiceNow Platform Architecture
6. Data Model (Tables & Fields)
7. Business Rules & Automation
8. UI/UX Design — ServiceNow Portals & Forms
9. Integration Points
10. Roles & Access Control
11. Development Plan & Implementation Order

---

## 1. EXECUTIVE SUMMARY

### 1.1 Project Overview

**Project Name:** Health Online LTO & Ancillary Licensing Tracker
**Project ID:** PRBCS00032
**Platform:** ServiceNow Personal Developer Instance (PDI)
**Domain:** Healthcare Regulatory Compliance — Philippines DOH
**Primary Users:** Hospital Compliance Officers, Compliance Viewers

The Health Online LTO & Ancillary Licensing Tracker is a ServiceNow application built to help Philippine hospitals manage Department of Health (DOH) License to Operate (LTO) renewals and Online Licensing and Registration System (OLRS) ancillary variations. Hospitals are legally required to maintain active DOH licenses for their main operations and for ancillary services such as radiology (x-ray) and pharmacy.

The application provides a centralized registry of facility licenses, automated due-date alerting, a per-license documentary checklist, evidence file attachments, renewal pipeline tracking, and an audit log — all within the ServiceNow platform.

### 1.2 Objectives

1. Eliminate missed DOH license renewal deadlines through automated multi-stage alerts
2. Provide a single registry of all facility licenses and their current renewal status
3. Track required DOH forms per license type and let compliance officers check them off
4. Allow scanned documentary evidence to be attached directly to each license record
5. Log all record changes for internal accountability
6. Implement the complete application within a ServiceNow PDI using native platform capabilities

### 1.3 Scope

**Included in MVP:**
- Facility profile records
- License registry (DOH LTO main + OLRS variations for x-ray and pharmacy)
- Automated email and in-app alerts at 90, 60, 30, and 7 days before expiry
- Color-coded compliance dashboard
- Required forms checklist per license type
- Evidence file upload and attachment
- Renewal stage pipeline (manual update)
- Basic audit log

**Excluded from MVP:**
- Direct DOH OLRS portal API integration
- Automated form submission to DOH
- Payment processing
- Multi-branch / network-level management
- Role-based access beyond Admin and Viewer
- Mobile-specific native app (ServiceNow mobile web is supported natively)

---

## 2. INTRODUCTION

### 2.1 Purpose of This Document

This SDD is the authoritative specification for the ServiceNow LTO Tracker application. Every table, field, business rule, workflow, UI element, role, and scheduled job described here is to be implemented exactly as specified. This document is intended to be handed to an AI coding assistant (Claude) to generate all ServiceNow artifacts: table definitions, form layouts, UI policies, business rules, scheduled jobs, email notifications, ACLs, and portal widgets.

### 2.2 Background

Philippine hospitals are required by the DOH to hold a valid LTO for their main facility. Hospitals with ancillary services (radiology, pharmacy) must additionally maintain OLRS variation licenses. Renewals follow fixed annual or multi-year schedules. Each license type has a defined set of required documentary forms. Non-renewal results in facility shutdown orders. Compliance officers currently manage these deadlines manually using spreadsheets, resulting in missed renewals and disorganized documentary trails.

### 2.3 Stakeholders

| Role | Responsibility |
|------|---------------|
| Compliance Officer (Admin) | Manages facility and license records, updates renewal stages, uploads evidence |
| Compliance Viewer | Read-only access to license records and dashboards |
| System Administrator | ServiceNow instance administration |

### 2.4 Technology Stack

| Layer | Technology |
|-------|-----------|
| Platform | ServiceNow (Personal Developer Instance) |
| Application Scope | Scoped Application: `x_1998335_health_l` |
| Data Storage | ServiceNow Tables (extends Task where appropriate, custom tables otherwise) |
| Automation | Business Rules, Scheduled Jobs, Flow Designer Flows |
| Notifications | ServiceNow Email Notifications |
| UI | Service Portal (widgets), Form Designer, List Views |
| AI Assistance | Claude (Anthropic) — used to generate all code artifacts |
| Reporting | ServiceNow Reports and Dashboards |

---

## 3. FUNCTIONAL REQUIREMENTS SPECIFICATION

### 3.1 Feature List

| ID | Feature | Priority |
|----|---------|----------|
| F-01 | Facility Profile Management | Must Have |
| F-02 | License Registry | Must Have |
| F-03 | Automated Due-Date Alerts | Must Have |
| F-04 | Color-Coded Compliance Dashboard | Must Have |
| F-05 | Required Forms Checklist | Must Have |
| F-06 | Evidence File Upload | Must Have |
| F-07 | Renewal Stage Pipeline | Must Have |
| F-08 | Audit Log | Must Have |
| F-09 | Role-Based Access Control | Must Have |

### 3.2 Feature Descriptions

#### F-01: Facility Profile Management

The system shall allow Admin users to create, read, update, and delete Facility records. Each facility represents one hospital or ancillary service location. A facility has a name, DOH license number, facility type, address, and an assigned compliance officer (linked to a User record).

**Acceptance Criteria:**
- Admin can create a facility with all required fields
- Facility type is a dropdown limited to: Hospital, Dialysis Center, Clinical Laboratory, Radiology Center
- Compliance officer field links to a ServiceNow user with the Compliance Officer role
- Duplicate DOH license numbers are blocked by a business rule

#### F-02: License Registry

Each facility can have multiple license records. A license record represents one DOH LTO or OLRS variation license. The system stores the license number, license type, issue date, expiry date, status, renewal stage, and a computed days-to-expiry field.

**License Types:**
- DOH LTO (Main)
- OLRS Variation — Radiology (X-Ray)
- OLRS Variation — Pharmacy

**Statuses (auto-computed):**
- Active (expiry > 90 days away)
- Expiring Soon (expiry within 1–90 days)
- Expired (expiry date is past today)
- Under Renewal (renewal stage is not "Not Started" and not "Released")

**Acceptance Criteria:**
- Admin can add multiple license records per facility
- Status field is read-only and computed automatically by a business rule on save and by a nightly scheduled job
- Days Before Expiry is a computed integer field (expiry_date minus today)
- License number must be unique across the system

#### F-03: Automated Due-Date Alerts

The system shall send alerts when a license is approaching its expiry date. Alerts are sent at 90, 60, 30, and 7 days before expiry. Alerts are sent via ServiceNow email notification to the assigned compliance officer's email address. An Alert record is also created in the ALERT table for in-app visibility.

**Alert Trigger Logic:**
- A scheduled job runs daily at 6:00 AM (PH timezone, UTC+8)
- For each license where status is not "Expired" and not "Released":
  - If days_before_expiry is exactly 90, 60, 30, or 7 → create Alert record + send email
  - Prevent duplicate alerts: check if an alert for that license and that threshold already exists today

**Alert Channels:** Email (primary), In-App Alert record (secondary)

**Acceptance Criteria:**
- Alerts are created for all qualifying licenses daily
- No duplicate alerts per license per threshold per day
- Email contains: facility name, license type, license number, expiry date, days remaining, link to license record

#### F-04: Color-Coded Compliance Dashboard

The system shall provide a homepage dashboard visible to all authenticated users showing:
- Count of Active licenses (green)
- Count of Expiring Soon licenses (yellow/orange)
- Count of Expired licenses (red)
- A list of licenses expiring within the next 90 days, sorted by expiry date ascending
- A list of all recent alerts (last 30 days)

The dashboard is implemented as a ServiceNow Service Portal page with widgets, accessible via the application navigator.

**Acceptance Criteria:**
- Dashboard auto-refreshes data on each page load
- Color coding uses green (#28a745), yellow-orange (#fd7e14), red (#dc3545)
- Clicking any license row navigates to the full license record

#### F-05: Required Forms Checklist

Each license record has an associated list of form checklist items. The checklist is pre-populated when a license record is created, based on the license type. Compliance officers mark each form as completed.

**Forms per License Type:**

DOH LTO (Main):
1. DOH LTO Application Form
2. Certificate of Compliance (COC) from PhilHealth
3. Fire Safety Inspection Certificate (FSIC)
4. Sanitary Permit
5. Building Permit / Occupancy Certificate
6. List of Medical Personnel with PRC IDs
7. Organizational Chart

OLRS Variation — Radiology (X-Ray):
1. OLRS Radiology Application Form
2. Radiation Safety Officer (RSO) Certificate
3. Radiation Source Inventory
4. DOH Regional Office Inspection Report
5. Equipment Registration Certificate

OLRS Variation — Pharmacy:
1. OLRS Pharmacy Application Form
2. FDA Certificate of Product Registration
3. Pharmacist License (PRC ID)
4. Drug Enforcement Agency (DEA) Registration
5. Pharmacy Layout / Floor Plan

**Acceptance Criteria:**
- Checklist items are auto-created when a license record is saved for the first time
- Each checklist item has: form_name, purpose, is_completed (boolean), completed_at (timestamp)
- Compliance officers can check off individual items via the license form's related list
- Checklist completion percentage is displayed on the license form

#### F-06: Evidence File Upload

Each license record can have multiple evidence files attached. Evidence files represent scanned copies of submitted forms, official receipts, DOH certificates, and inspection reports.

An evidence file record stores: file_name, attachment_sys_id (sys_id of the corresponding sys_attachment record), file_type (dropdown: Form, Receipt, Certificate, Inspection Report, Other), uploaded_by (user reference), uploaded_at (timestamp).

ServiceNow native attachments (Attachment API) are used. Files are uploaded via the standard ServiceNow attachment mechanism on the license form, supplemented by an Evidence File related list for metadata.

**Acceptance Criteria:**
- Admin can upload multiple files per license record
- Allowed file types: PDF, JPG, PNG, DOCX (enforced by UI policy)
- Maximum individual file size: 10 MB (enforced by client script)
- Evidence list shows file name, type, uploader, and upload date
- Files are accessible to all users with read access to the license record

#### F-07: Renewal Stage Pipeline

Each license record has a renewal_stage field representing where the compliance officer is in the renewal process. This field is manually updated by the Admin.

**Stages (in order):**
1. Not Started
2. Documents Gathering
3. Submitted to DOH
4. Under Evaluation
5. Released

**Acceptance Criteria:**
- Renewal stage is a choice field (dropdown)
- Stage can only move forward (enforced by a business rule: cannot revert to an earlier stage)
- When stage is set to "Released," the system prompts the user to update the expiry date to the new license validity date
- Stage transitions are recorded in the audit log

#### F-08: Audit Log

Every change to a License record or Facility record is logged in the Audit Log table. Each log entry records: the user who made the change, the license or facility record affected, the field that changed, the old value, the new value, and the timestamp.

ServiceNow's built-in field history (History Sets) is used for standard field auditing. A custom AUDIT_LOG table is also maintained for reporting and for changes that trigger compliance-relevant events (e.g., stage transitions, status changes).

**Acceptance Criteria:**
- All field changes on License records are captured
- Stage transitions always write an AUDIT_LOG entry
- Admin users can view the full audit trail from the license record's related list
- Audit log entries are read-only (cannot be edited or deleted by any user)

#### F-09: Role-Based Access Control

| Role Name | Description | Permissions |
|-----------|-------------|-------------|
| `x_1998335_health_l.admin` | Compliance Officer | Full CRUD on Facility, License, Checklist, Evidence. Read on Audit Log. Can update renewal stage. |
| `x_1998335_health_l.viewer` | Read-only user | Read-only on all tables |
| `admin` (ServiceNow) | Instance admin | Full access |

**Acceptance Criteria:**
- Unauthenticated users cannot access any application records
- Viewers cannot create, update, or delete any records
- Audit log entries cannot be modified by any application role

---

## 4. NON-FUNCTIONAL REQUIREMENTS

| ID | Requirement | Specification |
|----|------------|---------------|
| NF-01 | Performance | All list views load within 3 seconds for up to 500 license records |
| NF-02 | Availability | Inherits ServiceNow platform SLA (99.9% uptime) |
| NF-03 | Security | All data access controlled by ServiceNow ACLs; no direct database access |
| NF-04 | Scalability | Supports up to 50 facilities and 200 license records at MVP; extensible |
| NF-05 | Usability | Forms must be usable without training using field labels and inline help text |
| NF-06 | Auditability | Every state change on License records is logged and immutable |
| NF-07 | Timezone | All scheduled jobs and timestamps in Philippine Standard Time (UTC+8) |
| NF-08 | Browser Support | Latest Chrome, Firefox, Edge (ServiceNow standard) |
| NF-09 | File Storage | Evidence files stored in ServiceNow attachment storage (no external CDN) |
| NF-10 | Notifications | Email delivery via ServiceNow SMTP configuration |

---

## 5. SERVICENOW PLATFORM ARCHITECTURE

### 5.1 Application Scope

All artifacts are created within a single Scoped Application:

- **Application Name:** Health LTO Tracker
- **Scope:** `x_1998335_health_l`
- **Application Menu Label:** LTO Tracker
- **Application Menu Category:** Compliance

### 5.2 Component Overview

The application is composed of the following ServiceNow artifact types:

| Artifact Type | Purpose |
|---------------|---------|
| Custom Tables (6) | Data storage for all entities |
| Application Menu + Modules | Navigation |
| Form Layouts | Data entry and display |
| List Views | Record browsing |
| Business Rules (Server-side) | Validation, auto-population, status computation |
| Client Scripts | Client-side validation, UI behavior |
| UI Policies | Show/hide/mandatory field rules |
| Scheduled Jobs | Daily alert generation |
| Email Notifications | Alert emails |
| ACLs | Row and field-level security |
| Service Portal Page + Widgets | Dashboard |
| Reports | License status summary |

### 5.3 Application Menu Structure

```
LTO Tracker (Application Menu)
├── Dashboard (Service Portal page)
├── Facilities
│   ├── All Facilities [List View]
│   └── Create New Facility [Form]
├── Licenses
│   ├── All Licenses [List View]
│   ├── Expiring Soon [Filtered List: status=Expiring Soon]
│   ├── Expired [Filtered List: status=Expired]
│   └── Create New License [Form]
├── Alerts
│   └── All Alerts [List View]
├── Audit Log
│   └── All Audit Entries [List View]
└── Administration (admin role only)
    └── All Users [List View]
```

### 5.4 Data Flow

```
[Scheduled Job: Daily Alert Checker]
       |
       | queries all License records
       v
[License Table] ──── related to ──── [Facility Table]
       |                                     |
       |── related list ──> [Alert Table]    └── compliance_officer → [User]
       |── related list ──> [Form Checklist Table]
       |── related list ──> [Evidence File Table]
       |── related list ──> [Audit Log Table]
       |
[Business Rules] compute status, days_before_expiry
[Email Notifications] triggered by Alert record creation
[Service Portal Dashboard] reads all tables for display
```

---

## 6. DATA MODEL (TABLES & FIELDS)

### 6.1 Table: x_1998335_health_l_facility

**Label:** Facility
**Extends:** (none — standalone table)
**Description:** Represents one hospital or ancillary facility registered in the system.

| Column Label | Column Name | Type | Max Length | Mandatory | Notes |
|---|---|---|---|---|---|
| Name | name | String | 200 | Yes | Facility's official registered name |
| DOH License Number | doh_license_number | String | 50 | Yes | Unique. DOH-assigned identifier |
| Facility Type | facility_type | Choice | — | Yes | Hospital, Dialysis Center, Clinical Laboratory, Radiology Center |
| Address | address | String | 500 | Yes | Complete street address |
| Compliance Officer | compliance_officer_id | Reference → sys_user | — | Yes | Must have role x_1998335_health_l.admin |
| Active | active | True/False | — | No | Default: true. Inactive facilities are hidden from dashboards |
| Created At | sys_created_on | (system) | — | — | Auto |
| Updated At | sys_updated_on | (system) | — | — | Auto |

**Business Rules on this table:**
- BR-F-01: Prevent duplicate DOH license numbers (before insert/update)

### 6.2 Table: x_1998335_health_l_license

**Label:** License
**Extends:** (none — standalone table)
**Description:** One DOH LTO or OLRS variation license record, linked to a facility.

| Column Label | Column Name | Type | Max Length | Mandatory | Notes |
|---|---|---|---|---|---|
| License Number | license_number | String | 100 | Yes | Unique. Official license number from DOH |
| Facility | facility_id | Reference → x_1998335_health_l_facility | — | Yes | Parent facility |
| License Type | license_type | Choice | — | Yes | DOH LTO (Main), OLRS Variation - Radiology, OLRS Variation - Pharmacy |
| Issue Date | issue_date | Date | — | Yes | |
| Expiry Date | expiry_date | Date | — | Yes | |
| Status | status | Choice | — | No | Auto-computed. Active, Expiring Soon, Expired, Under Renewal |
| Renewal Stage | renewal_stage | Choice | — | Yes | Default: Not Started |
| Days Before Expiry | days_before_expiry | Integer | — | No | Computed field: expiry_date − today |
| Checklist % Complete | checklist_pct | Integer | — | No | Computed. 0–100. Count(completed)/Count(all) × 100 |
| Notes | notes | String (full UTF-8) | 1000 | No | Free text notes |
| Created At | sys_created_on | (system) | — | — | Auto |
| Updated At | sys_updated_on | (system) | — | — | Auto |

**Choice Values — license_type:**
- `doh_lto_main` → DOH LTO (Main)
- `olrs_radiology` → OLRS Variation — Radiology (X-Ray)
- `olrs_pharmacy` → OLRS Variation — Pharmacy

**Choice Values — status:**
- `active` → Active
- `expiring_soon` → Expiring Soon
- `expired` → Expired
- `under_renewal` → Under Renewal

**Choice Values — renewal_stage:**
- `not_started` → Not Started
- `documents_gathering` → Documents Gathering
- `submitted_to_doh` → Submitted to DOH
- `under_evaluation` → Under Evaluation
- `released` → Released

**Business Rules on this table:**
- BR-L-01: Compute status and days_before_expiry on before insert/update
- BR-L-02: Auto-create form checklist items on first insert (after insert)
- BR-L-03: Prevent backward stage transitions (before update)
- BR-L-04: When renewal_stage = Released, validate that expiry_date has been updated to a future date
- BR-L-05: Write AUDIT_LOG entry on stage change (after update)
- BR-L-06: Recompute checklist_pct on after update of related FORM_CHECKLIST records (called from checklist business rule)

### 6.3 Table: x_1998335_health_l_alert

**Label:** Alert
**Extends:** (none)
**Description:** A generated alert record representing a notification sent for an upcoming license expiry.

| Column Label | Column Name | Type | Max Length | Mandatory | Notes |
|---|---|---|---|---|---|
| License | license_id | Reference → x_1998335_health_l_license | — | Yes | |
| Days Before Expiry | days_before_expiry | Integer | — | Yes | The threshold: 90, 60, 30, or 7 |
| Channel | channel | Choice | — | Yes | Email, In-App |
| Status | status | Choice | — | Yes | Sent, Failed |
| Sent At | sent_at | Date/Time | — | No | Auto-set on creation |
| Alert Date | alert_date | Date | — | Yes | The calendar date this alert was generated. Used for deduplication. |

**Deduplication Key:** license_id + days_before_expiry + alert_date must be unique.

### 6.4 Table: x_1998335_health_l_form_checklist

**Label:** Form Checklist
**Extends:** (none)
**Description:** One required form/document item within a license's documentary checklist.

| Column Label | Column Name | Type | Max Length | Mandatory | Notes |
|---|---|---|---|---|---|
| License | license_id | Reference → x_1998335_health_l_license | — | Yes | |
| Form Name | form_name | String | 300 | Yes | Name of the required DOH form or document |
| Purpose | purpose | String | 500 | No | Brief explanation of what this form is for |
| Is Completed | is_completed | True/False | — | No | Default: false |
| Completed At | completed_at | Date/Time | — | No | Auto-set when is_completed is toggled to true |
| Completed By | completed_by | Reference → sys_user | — | No | Auto-set when is_completed is toggled to true |

**Business Rules on this table:**
- BR-C-01: Auto-set completed_at and completed_by when is_completed changes to true (before update)
- BR-C-02: Clear completed_at and completed_by if is_completed is toggled back to false
- BR-C-03: After update, call the license record's checklist_pct recomputation

### 6.5 Table: x_1998335_health_l_evidence_file

**Label:** Evidence File
**Extends:** (none)
**Description:** Metadata record for a file attached as evidence to a license record. The actual file is stored as a ServiceNow Attachment (sys_attachment).

| Column Label | Column Name | Type | Max Length | Mandatory | Notes |
|---|---|---|---|---|---|
| License | license_id | Reference → x_1998335_health_l_license | — | Yes | |
| File Name | file_name | String | 300 | Yes | Display name of the file |
| Attachment | attachment_sys_id | String | 32 | No | sys_id of the corresponding sys_attachment record |
| File Type | file_type | Choice | — | Yes | Form, Receipt, Certificate, Inspection Report, Other |
| Uploaded By | uploaded_by | Reference → sys_user | — | Yes | Auto-set to current user |
| Uploaded At | uploaded_at | Date/Time | — | Yes | Auto-set on creation |

### 6.6 Table: x_1998335_health_l_audit_log

**Label:** Audit Log
**Extends:** (none)
**Description:** Immutable log of all significant changes to License and Facility records.

| Column Label | Column Name | Type | Max Length | Mandatory | Notes |
|---|---|---|---|---|---|
| Changed By | user_id | Reference → sys_user | — | Yes | User who made the change |
| License | license_id | Reference → x_1998335_health_l_license | — | No | Null if change is on Facility |
| Facility | facility_id | Reference → x_1998335_health_l_facility | — | No | Null if change is on License |
| Action | action | String | 100 | Yes | e.g., "Stage Updated", "Status Changed", "Field Modified" |
| Field Changed | field_changed | String | 100 | No | Field name that changed |
| Old Value | old_value | String | 1000 | No | Previous value |
| New Value | new_value | String | 1000 | No | New value |
| Changed At | changed_at | Date/Time | — | Yes | Auto-set on creation |

**ACL Note:** No user role (including admin) can update or delete audit log records. Insert is permitted only by system/business rules, not by end users.

---

## 7. BUSINESS RULES & AUTOMATION

### 7.1 Business Rules (Server-Side Scripts)

#### BR-L-01: Compute License Status and Days Before Expiry

- **Table:** x_1998335_health_l_license
- **When:** Before Insert, Before Update
- **Script logic:**

```javascript
// Compute days_before_expiry
var today = new GlideDateTime();
today.setDisplayValueInternal(gs.nowDateTime());
var expiryGDT = new GlideDateTime(current.expiry_date + ' 00:00:00');
var diffMs = expiryGDT.getNumericValue() - today.getNumericValue();
var daysLeft = Math.floor(diffMs / (1000 * 60 * 60 * 24));
current.days_before_expiry = daysLeft;

// Compute status
var stage = current.renewal_stage.toString();
if (stage !== 'not_started' && stage !== 'released') {
    current.status = 'under_renewal';
} else if (daysLeft < 0) {
    current.status = 'expired';
} else if (daysLeft <= 90) {
    current.status = 'expiring_soon';
} else {
    current.status = 'active';
}
```

#### BR-L-02: Auto-Create Form Checklist Items on Insert

- **Table:** x_1998335_health_l_license
- **When:** After Insert
- **Script logic:** Based on `current.license_type`, insert the predefined form checklist items into x_1998335_health_l_form_checklist. See Section 3.2 F-05 for the full list of forms per license type.

```javascript
var forms = [];
var lt = current.license_type.toString();

if (lt === 'doh_lto_main') {
    forms = [
        { name: 'DOH LTO Application Form', purpose: 'Primary application form for DOH License to Operate' },
        { name: 'Certificate of Compliance (COC) from PhilHealth', purpose: 'PhilHealth accreditation compliance certificate' },
        { name: 'Fire Safety Inspection Certificate (FSIC)', purpose: 'BFP-issued fire safety clearance' },
        { name: 'Sanitary Permit', purpose: 'LGU-issued sanitary permit' },
        { name: 'Building Permit / Occupancy Certificate', purpose: 'Proof of legal occupancy of facility premises' },
        { name: 'List of Medical Personnel with PRC IDs', purpose: 'Complete roster of licensed medical staff' },
        { name: 'Organizational Chart', purpose: 'Facility organizational structure' }
    ];
} else if (lt === 'olrs_radiology') {
    forms = [
        { name: 'OLRS Radiology Application Form', purpose: 'OLRS application form for radiology variation' },
        { name: 'Radiation Safety Officer (RSO) Certificate', purpose: 'Certification of designated Radiation Safety Officer' },
        { name: 'Radiation Source Inventory', purpose: 'Complete list of radiation-emitting equipment' },
        { name: 'DOH Regional Office Inspection Report', purpose: 'Latest DOH regional inspection clearance' },
        { name: 'Equipment Registration Certificate', purpose: 'Registration of x-ray and imaging equipment' }
    ];
} else if (lt === 'olrs_pharmacy') {
    forms = [
        { name: 'OLRS Pharmacy Application Form', purpose: 'OLRS application form for pharmacy variation' },
        { name: 'FDA Certificate of Product Registration', purpose: 'FDA clearance for pharmaceutical products handled' },
        { name: 'Pharmacist License (PRC ID)', purpose: 'Valid PRC ID of the responsible pharmacist' },
        { name: 'Drug Enforcement Agency (DEA) Registration', purpose: 'DEA registration for controlled substances' },
        { name: 'Pharmacy Layout / Floor Plan', purpose: 'Approved pharmacy floor plan and dispensing area layout' }
    ];
}

for (var i = 0; i < forms.length; i++) {
    var gr = new GlideRecord('x_1998335_health_l_form_checklist');
    gr.initialize();
    gr.license_id = current.sys_id;
    gr.form_name = forms[i].name;
    gr.purpose = forms[i].purpose;
    gr.is_completed = false;
    gr.insert();
}
```

#### BR-L-03: Prevent Backward Stage Transitions

- **Table:** x_1998335_health_l_license
- **When:** Before Update
- **Condition:** `current.renewal_stage.changesFrom(anything)` 
- **Script logic:**

```javascript
var stageOrder = {
    'not_started': 0,
    'documents_gathering': 1,
    'submitted_to_doh': 2,
    'under_evaluation': 3,
    'released': 4
};

var oldStage = previous.renewal_stage.toString();
var newStage = current.renewal_stage.toString();

if (stageOrder[newStage] < stageOrder[oldStage]) {
    current.setAbortAction(true);
    gs.addErrorMessage('Renewal stage cannot be moved backward. Current stage: ' + previous.renewal_stage.getDisplayValue());
}
```

#### BR-L-04: Warn When Released Without Updated Expiry

- **Table:** x_1998335_health_l_license
- **When:** Before Update
- **Condition:** `current.renewal_stage == 'released' && current.renewal_stage.changes()`
- **Script logic:** Check that the new expiry_date is in the future. If not, add an error message.

```javascript
if (current.renewal_stage.toString() === 'released' && current.renewal_stage.changes()) {
    var today = new GlideDate();
    today.setValue(gs.now());
    var expiry = new GlideDate();
    expiry.setValue(current.expiry_date);
    if (expiry.compareTo(today) <= 0) {
        current.setAbortAction(true);
        gs.addErrorMessage('Before marking as Released, please update the Expiry Date to the new license validity date (must be a future date).');
    }
}
```

#### BR-L-05: Write Audit Log on Stage Change

- **Table:** x_1998335_health_l_license
- **When:** After Update
- **Condition:** `current.renewal_stage.changes()`

```javascript
var log = new GlideRecord('x_1998335_health_l_audit_log');
log.initialize();
log.user_id = gs.getUserID();
log.license_id = current.sys_id;
log.action = 'Stage Updated';
log.field_changed = 'renewal_stage';
log.old_value = previous.renewal_stage.getDisplayValue();
log.new_value = current.renewal_stage.getDisplayValue();
log.changed_at = new GlideDateTime();
log.insert();
```

#### BR-F-01: Prevent Duplicate DOH License Numbers (Facility)

- **Table:** x_1998335_health_l_facility
- **When:** Before Insert, Before Update

```javascript
var gr = new GlideRecord('x_1998335_health_l_facility');
gr.addQuery('doh_license_number', current.doh_license_number);
if (!current.isNewRecord()) {
    gr.addQuery('sys_id', '!=', current.sys_id);
}
gr.query();
if (gr.next()) {
    current.setAbortAction(true);
    gs.addErrorMessage('A facility with DOH License Number ' + current.doh_license_number + ' already exists.');
}
```

#### BR-C-01: Auto-Set Completed Timestamp and User

- **Table:** x_1998335_health_l_form_checklist
- **When:** Before Update
- **Condition:** `current.is_completed.changes()`

```javascript
if (current.is_completed.toString() === 'true') {
    current.completed_at = new GlideDateTime();
    current.completed_by = gs.getUserID();
} else {
    current.completed_at = '';
    current.completed_by = '';
}
```

### 7.2 Scheduled Job: Daily Alert Generator

- **Name:** LTO Tracker — Daily Expiry Alert Job
- **Type:** Scheduled Script Execution
- **Run:** Daily at 06:00 AM (configure timezone offset for UTC+8 = 22:00 UTC previous day)
- **Script:**

```javascript
var thresholds = [90, 60, 30, 7];
var today = new GlideDate();
today.setValue(gs.now());

var licGR = new GlideRecord('x_1998335_health_l_license');
licGR.addQuery('status', '!=', 'expired');
licGR.addQuery('renewal_stage', '!=', 'released');
licGR.query();

while (licGR.next()) {
    var daysLeft = parseInt(licGR.days_before_expiry);
    
    for (var i = 0; i < thresholds.length; i++) {
        var threshold = thresholds[i];
        
        if (daysLeft !== threshold) continue;
        
        // Deduplication check
        var dupCheck = new GlideRecord('x_1998335_health_l_alert');
        dupCheck.addQuery('license_id', licGR.sys_id);
        dupCheck.addQuery('days_before_expiry', threshold);
        dupCheck.addQuery('alert_date', today.getValue());
        dupCheck.query();
        if (dupCheck.next()) continue; // Already alerted today for this threshold
        
        // Create Alert record
        var alert = new GlideRecord('x_1998335_health_l_alert');
        alert.initialize();
        alert.license_id = licGR.sys_id;
        alert.days_before_expiry = threshold;
        alert.channel = 'email';
        alert.status = 'sent';
        alert.sent_at = new GlideDateTime();
        alert.alert_date = today.getValue();
        alert.insert();
        
        // Email is triggered via Email Notification on alert insert (see Section 7.3)
        
        gs.log('LTO Alert created: License ' + licGR.license_number + ', ' + threshold + ' days before expiry.', 'LTO Tracker');
    }
}
```

### 7.3 Email Notification: License Expiry Alert

- **Name:** LTO Tracker — License Expiry Alert
- **Table:** x_1998335_health_l_alert
- **When to Send:** Record Inserted
- **Send to:** Script — resolve to the compliance officer email of the related facility

**Subject Template:**
```
[LTO Tracker] Action Required: {{license_id.license_type}} for {{license_id.facility_id.name}} expires in {{days_before_expiry}} days
```

**Body Template (HTML):**
```html
<p>Dear {{license_id.facility_id.compliance_officer_id.first_name}},</p>

<p>This is an automated reminder from the Health LTO Tracker.</p>

<table border="1" cellpadding="8" cellspacing="0">
  <tr><th>Facility</th><td>{{license_id.facility_id.name}}</td></tr>
  <tr><th>License Type</th><td>{{license_id.license_type}}</td></tr>
  <tr><th>License Number</th><td>{{license_id.license_number}}</td></tr>
  <tr><th>Expiry Date</th><td>{{license_id.expiry_date}}</td></tr>
  <tr><th>Days Remaining</th><td><strong>{{days_before_expiry}} days</strong></td></tr>
</table>

<p>Please log in to the LTO Tracker to review your checklist and renewal status:</p>
<p><a href="${gs.getProperty('glide.servlet.uri')}/lto_tracker">Open LTO Tracker</a></p>

<p>This is an automated message. Do not reply to this email.</p>
```

---

## 8. UI/UX DESIGN — FORMS, LISTS, AND PORTAL

### 8.1 Form: Facility Record

**Sections:**

Section 1 — Facility Information
- Name (full width)
- DOH License Number | Facility Type
- Address (full width)
- Compliance Officer | Active

Section 2 — Related Lists
- Licenses (x_1998335_health_l_license.facility_id) — columns: License Number, License Type, Status, Expiry Date, Renewal Stage, Days Before Expiry

### 8.2 Form: License Record

**Sections:**

Section 1 — License Identity
- License Number | License Type
- Facility (full width, read-only reference display)
- Issue Date | Expiry Date

Section 2 — Status & Progress
- Status (read-only) | Days Before Expiry (read-only)
- Renewal Stage | Checklist % Complete (read-only)
- Notes (full width)

Section 3 — Related Lists
- Form Checklist (x_1998335_health_l_form_checklist.license_id) — columns: Form Name, Purpose, Is Completed, Completed At
- Evidence Files (x_1998335_health_l_evidence_file.license_id) — columns: File Name, File Type, Uploaded By, Uploaded At
- Alerts (x_1998335_health_l_alert.license_id) — columns: Days Before Expiry, Channel, Status, Sent At
- Audit Log (x_1998335_health_l_audit_log.license_id) — columns: Action, Field Changed, Old Value, New Value, Changed By, Changed At

### 8.3 Form: Form Checklist Item

Fields visible on inline edit in the related list only:
- Form Name, Purpose, Is Completed

### 8.4 List View: Licenses (Default Columns)

License Number | Facility | License Type | Status | Expiry Date | Days Before Expiry | Renewal Stage | Checklist %

Default Sort: Days Before Expiry ASC (soonest expiry first)

### 8.5 List View: Alerts

License Number | Facility | License Type | Days Before Expiry | Status | Sent At

### 8.6 UI Policies

| Policy Name | Condition | Action |
|-------------|-----------|--------|
| Status Read-Only | Always | Set status field to read-only |
| Days Before Expiry Read-Only | Always | Set days_before_expiry to read-only |
| Checklist Pct Read-Only | Always | Set checklist_pct to read-only |
| Completed At Read-Only (Checklist) | Always | Set completed_at and completed_by to read-only |

### 8.7 Client Scripts

#### CS-01: File Size Validation (Evidence File Form)

- **Type:** onSubmit
- **Table:** x_1998335_health_l_evidence_file
- **Script:** Check that the attachment is not > 10 MB. Display alert and cancel submit if so.

#### CS-02: Renewal Stage Change Confirmation

- **Type:** onChange
- **Table:** x_1998335_health_l_license
- **Field:** renewal_stage
- **Script:** When stage changes to "Released," show a confirmation dialog: "Have you updated the new Expiry Date for this license? Click OK to confirm."

### 8.8 Service Portal Dashboard

**Page ID:** `lto_dashboard`
**Page Title:** LTO Compliance Dashboard

**Widget 1 — License Status Summary (3 stat boxes)**
- Green box: Active Licenses count
- Orange box: Expiring Soon count
- Red box: Expired Licenses count
- Each box is clickable and navigates to the filtered license list

**Widget 2 — Expiring Licenses Table**
- Columns: Facility, License Type, License Number, Expiry Date, Days Remaining, Renewal Stage
- Filtered to: Days Before Expiry between 0 and 90, sorted ascending
- Row colors: < 30 days = red background; 30–60 days = orange; 60–90 days = yellow

**Widget 3 — Recent Alerts (last 30 days)**
- Columns: License Number, Facility, License Type, Days Before Expiry, Sent At

---

## 9. INTEGRATION POINTS

At MVP, there are no external system integrations. All data is entered manually by compliance officers.

**Post-MVP Integration Candidates (documented for future reference):**

| System | Integration Type | Purpose |
|--------|-----------------|---------|
| DOH OLRS Portal | REST API (outbound) | Automatically fetch license status from DOH |
| PhilHealth COC Portal | REST API (outbound) | Verify COC certificate status |
| Hospital Email Server | SMTP | Custom SMTP relay (currently using ServiceNow default) |
| LGU Sanitary Permit System | REST API (outbound) | Sanitary permit verification |

---

## 10. ROLES & ACCESS CONTROL

### 10.1 Roles

| Role | Name | Description |
|------|------|-------------|
| Admin | `x_1998335_health_l.admin` | Compliance Officers — full CRUD |
| Viewer | `x_1998335_health_l.viewer` | Read-only staff |

### 10.2 ACL Matrix

| Table | Operation | x_1998335_health_l.admin | x_1998335_health_l.viewer |
|-------|-----------|--------------------|--------------------|
| Facility | Read | ✅ | ✅ |
| Facility | Write/Create | ✅ | ❌ |
| Facility | Delete | ✅ | ❌ |
| License | Read | ✅ | ✅ |
| License | Write/Create | ✅ | ❌ |
| License | Delete | ✅ | ❌ |
| Form Checklist | Read | ✅ | ✅ |
| Form Checklist | Write/Create | ✅ | ❌ |
| Evidence File | Read | ✅ | ✅ |
| Evidence File | Write/Create | ✅ | ❌ |
| Alert | Read | ✅ | ✅ |
| Alert | Write/Create | System only | ❌ |
| Audit Log | Read | ✅ | ✅ |
| Audit Log | Write/Create/Delete | ❌ (system only) | ❌ |

### 10.3 Field-Level ACLs

| Table | Field | Read | Write |
|-------|-------|------|-------|
| License | status | All | None (system computed) |
| License | days_before_expiry | All | None (system computed) |
| License | checklist_pct | All | None (system computed) |
| Audit Log | All fields | admin + viewer | None |

---

## 11. DEVELOPMENT PLAN & IMPLEMENTATION ORDER

The following order ensures that dependencies are satisfied at each step. An AI assistant implementing this application should follow this sequence exactly.

### Phase 1 — Application Scaffold (Step 1–2)

**Step 1:** Create the Scoped Application
- Name: Health LTO Tracker
- Scope: `x_1998335_health_l`
- Version: 1.0.0

**Step 2:** Create Application Roles
- `x_1998335_health_l.admin`
- `x_1998335_health_l.viewer`

### Phase 2 — Tables (Step 3–8)

Create tables in this order (respects foreign key dependencies):

**Step 3:** Create `x_1998335_health_l_facility` table with all fields from Section 6.1

**Step 4:** Create `x_1998335_health_l_license` table with all fields from Section 6.2

**Step 5:** Create `x_1998335_health_l_alert` table with all fields from Section 6.3

**Step 6:** Create `x_1998335_health_l_form_checklist` table with all fields from Section 6.4

**Step 7:** Create `x_1998335_health_l_evidence_file` table with all fields from Section 6.5

**Step 8:** Create `x_1998335_health_l_audit_log` table with all fields from Section 6.6

### Phase 3 — Business Rules (Step 9–15)

**Step 9:** BR-F-01 — Facility duplicate DOH license number check
**Step 10:** BR-L-01 — License status and days_before_expiry computation
**Step 11:** BR-L-02 — Auto-create checklist items on license insert
**Step 12:** BR-L-03 — Prevent backward stage transitions
**Step 13:** BR-L-04 — Validate expiry date when marking Released
**Step 14:** BR-L-05 — Write audit log on stage change
**Step 15:** BR-C-01 — Auto-set completed_at/completed_by on checklist toggle

### Phase 4 — Forms & Lists (Step 16–20)

**Step 16:** Configure Facility form layout per Section 8.1
**Step 17:** Configure License form layout per Section 8.2
**Step 18:** Configure default list views per Section 8.4 and 8.5
**Step 19:** Add UI Policies per Section 8.6
**Step 20:** Add Client Scripts per Section 8.7

### Phase 5 — Application Menu (Step 21)

**Step 21:** Create Application Menu and all Module entries per Section 5.3

### Phase 6 — ACLs (Step 22)

**Step 22:** Create all ACLs per Section 10.2 and 10.3

### Phase 7 — Scheduled Job & Email Notification (Step 23–24)

**Step 23:** Create Scheduled Job per Section 7.2
**Step 24:** Create Email Notification per Section 7.3

### Phase 8 — Service Portal Dashboard (Step 25–27)

**Step 25:** Create Service Portal page `lto_dashboard`
**Step 26:** Create and configure Widget 1 (Status Summary), Widget 2 (Expiring Licenses), Widget 3 (Recent Alerts)
**Step 27:** Link portal page to application menu module

### Phase 9 — Testing (Step 28–30)

**Step 28:** Create test Facility and License records; verify status computation
**Step 29:** Manually trigger Scheduled Job; verify Alert records and emails
**Step 30:** Verify ACLs: log in as viewer and confirm no write access

---

## APPENDIX A — Choice Field Reference

### Facility Type
| Value | Label |
|-------|-------|
| hospital | Hospital |
| dialysis_center | Dialysis Center |
| clinical_lab | Clinical Laboratory |
| radiology_center | Radiology Center |

### License Type
| Value | Label |
|-------|-------|
| doh_lto_main | DOH LTO (Main) |
| olrs_radiology | OLRS Variation — Radiology (X-Ray) |
| olrs_pharmacy | OLRS Variation — Pharmacy |

### License Status
| Value | Label |
|-------|-------|
| active | Active |
| expiring_soon | Expiring Soon |
| expired | Expired |
| under_renewal | Under Renewal |

### Renewal Stage
| Value | Label | Order |
|-------|-------|-------|
| not_started | Not Started | 0 |
| documents_gathering | Documents Gathering | 1 |
| submitted_to_doh | Submitted to DOH | 2 |
| under_evaluation | Under Evaluation | 3 |
| released | Released | 4 |

### Alert Channel
| Value | Label |
|-------|-------|
| email | Email |
| in_app | In-App |

---

## APPENDIX B — Companion Application: Incident Management UI

The repository includes a React-based client application in `src/client/` that provides an Incident Management UI against the ServiceNow native `incident` table. This companion app is **separate from the LTO Tracker** scope and tables.

| Item | Detail |
|------|--------|
| Location | `src/client/` |
| Framework | React (Vite) |
| Table | `incident` (ServiceNow ITSM native table) |
| Components | `IncidentForm.jsx`, `IncidentList.jsx` |
| Service | `IncidentService.js` — REST API calls to ServiceNow Table API |
| Roles | Uses ServiceNow built-in ITSM roles, not LTO Tracker roles |

This app is out of scope for the Health LTO Tracker feature set (PRBCS00032) but lives in the same repository. It is built and served separately via `src/client/index.html`.

### Alert Status
| Value | Label |
|-------|-------|
| sent | Sent |
| failed | Failed |

### Evidence File Type
| Value | Label |
|-------|-------|
| form | Form |
| receipt | Receipt |
| certificate | Certificate |
| inspection_report | Inspection Report |
| other | Other |

---

## APPENDIX B — Glossary

| Term | Definition |
|------|-----------|
| DOH | Department of Health — Philippine regulatory body for healthcare facilities |
| LTO | License to Operate — mandatory DOH license for all healthcare facilities |
| OLRS | Online Licensing and Registration System — DOH portal for ancillary service variations |
| PDI | Personal Developer Instance — ServiceNow free developer environment |
| Scoped Application | A ServiceNow application isolated in its own namespace (scope prefix) |
| Business Rule | Server-side JavaScript that executes on table record operations |
| ACL | Access Control List — ServiceNow's row and field-level security mechanism |
| Compliance Officer | Hospital staff member responsible for regulatory license compliance |
| Variation | An ancillary license under OLRS for services like radiology or pharmacy |
| GlideRecord | ServiceNow's server-side API for querying and manipulating table records |
| Flow Designer | ServiceNow's low-code workflow automation tool |
