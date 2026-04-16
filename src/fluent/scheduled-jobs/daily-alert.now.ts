import { Record } from '@servicenow/sdk/core'

// Scheduled Job: Daily Expiry Alert Generator (runs at 06:00 PH time = 22:00 UTC)
Record({
    $id: Now.ID['scheduled_job_daily_alert'],
    table: 'sysauto_script',
    data: {
        name: 'LTO: Daily Expiry Alert Job',
        active: true,
        run_type: 'daily',
        run_time: '22:00:00',  // 22:00 UTC = 06:00 PHT (UTC+8)
        script: Now.include('./daily-alert.server.js'),
    },
})
