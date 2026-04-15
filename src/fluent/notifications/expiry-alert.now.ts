import { Record } from '@servicenow/sdk/core'

// Email Notification: License Expiry Alert — fires when an Alert record is inserted
Record({
    $id: Now.ID['email_notification_expiry_alert'],
    table: 'sysevent_emailaction',
    data: {
        name: 'LTO Tracker — License Expiry Alert',
        active: true,
        collection: 'x_1998335_health_l_alert',
        event_name: '',
        // Trigger on record insert
        action_insert: true,
        action_update: false,
        action_delete: false,
        // Send to: script-resolved compliance officer email
        recipient_fields: '',
        recipient_users: '',
        recipient_groups: '',
        // Script provides recipient
        advanced: true,
        advanced_recipients_script: `
var licGR = new GlideRecord('x_1998335_health_l_license');
if (licGR.get(current.x_1998335_health_l_license_id)) {
    var facGR = new GlideRecord('x_1998335_health_l_facility');
    if (facGR.get(licGR.x_1998335_health_l_facility_id)) {
        var userGR = new GlideRecord('sys_user');
        if (userGR.get(facGR.x_1998335_health_l_compliance_officer_id)) {
            answer = userGR.email;
        }
    }
}
`,
        subject: '[LTO Tracker] Action Required: ${current.x_1998335_health_l_license_id.x_1998335_health_l_license_type.getDisplayValue()} for ${current.x_1998335_health_l_license_id.x_1998335_health_l_facility_id.x_1998335_health_l_name} expires in ${current.x_1998335_health_l_days_before_expiry} days',
        body_html: `<p>Dear \${current.x_1998335_health_l_license_id.x_1998335_health_l_facility_id.x_1998335_health_l_compliance_officer_id.first_name},</p>

<p>This is an automated reminder from the LTO Licensing Tracker.</p>

<table border="1" cellpadding="8" cellspacing="0">
  <tr><th>Facility</th><td>\${current.x_1998335_health_l_license_id.x_1998335_health_l_facility_id.x_1998335_health_l_name}</td></tr>
  <tr><th>License Type</th><td>\${current.x_1998335_health_l_license_id.x_1998335_health_l_license_type.getDisplayValue()}</td></tr>
  <tr><th>License Number</th><td>\${current.x_1998335_health_l_license_id.x_1998335_health_l_license_number}</td></tr>
  <tr><th>Expiry Date</th><td>\${current.x_1998335_health_l_license_id.x_1998335_health_l_expiry_date}</td></tr>
  <tr><th>Days Remaining</th><td><strong>\${current.x_1998335_health_l_days_before_expiry} days</strong></td></tr>
</table>

<p>Please log in to the LTO Tracker to review your checklist and renewal status.</p>
<p>This is an automated message. Do not reply to this email.</p>`,
    },
})
