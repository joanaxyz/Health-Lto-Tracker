import { ClientScript } from '@servicenow/sdk/core'

// CS-02: Show confirmation when renewal_stage changes to "Released"
ClientScript({
    $id: Now.ID['cs_license_stage_released_confirm'],
    name: 'LTO — Confirm Expiry Date Update on Stage Released',
    table: 'x_1998335_health_l_license',
    type: 'onChange',
    field: 'x_1998335_health_l_renewal_stage',
    active: true,
    script: `
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue === '') return;
    if (newValue === 'released') {
        var confirmed = confirm(
            'You are marking this license as Released.\\n\\n' +
            'Have you updated the Expiry Date to the new license validity date?\\n\\n' +
            'Click OK to confirm, or Cancel to go back and update the Expiry Date first.'
        );
        if (!confirmed) {
            g_form.setValue('x_1998335_health_l_renewal_stage', oldValue);
        }
    }
}
`,
})
