import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['cs_license_days_before_expiry'],
    name: 'LTO: Recompute Days Before Expiry on change',
    table: 'x_1998335_health_l_license',
    type: 'onChange',
    field: 'x_1998335_health_l_expiry_date',
    active: true,
    global: true,
    uiType: 'all',
    script: `
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) return;
    if (!newValue) {
        g_form.setValue('x_1998335_health_l_days_before_expiry', '');
        return;
    }
    var expiry = new Date(newValue + 'T00:00:00');
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var msPerDay = 1000 * 60 * 60 * 24;
    var days = Math.floor((expiry.getTime() - today.getTime()) / msPerDay);
    g_form.setValue('x_1998335_health_l_days_before_expiry', days);
}
`,
})
