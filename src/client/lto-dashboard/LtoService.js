const S = 'x_1998335_health_l'
const TABLE = (t) => `/api/now/table/${S}_${t}`

async function apiFetch(url) {
    const res = await fetch(url, {
        credentials: 'same-origin',
        headers: { Accept: 'application/json' },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    return (await res.json()).result
}

// Extract raw system value from a display_value=all field (used for logic/filtering)
export function v(rec, field) {
    const f = rec[field]
    if (f == null) return ''
    return typeof f === 'object' ? (f.value ?? '') : f
}

// Extract human-readable display label (used for rendering)
export function d(rec, field) {
    const f = rec[field]
    if (f == null) return ''
    return typeof f === 'object' ? (f.display_value ?? '') : f
}

export async function getLicenses() {
    const fields = [
        'sys_id',
        `${S}_license_number`,
        `${S}_facility_id`,
        `${S}_license_type`,
        `${S}_expiry_date`,
        `${S}_status`,
        `${S}_renewal_stage`,
        `${S}_days_before_expiry`,
        `${S}_checklist_pct`,
    ].join(',')

    const url =
        `${TABLE('license')}` +
        `?sysparm_query=ORDERBYASCx_1998335_health_l_days_before_expiry` +
        `&sysparm_fields=${fields}` +
        `&sysparm_display_value=all` +
        `&sysparm_limit=200`

    return apiFetch(url)
}

export async function getAlerts() {
    const fields = [
        'sys_id',
        `${S}_license_id`,
        `${S}_days_before_expiry`,
        `${S}_status`,
        `${S}_sent_at`,
        `${S}_channel`,
    ].join(',')

    const url =
        `${TABLE('alert')}` +
        `?sysparm_query=ORDERBYDESCx_1998335_health_l_sent_at` +
        `&sysparm_fields=${fields}` +
        `&sysparm_display_value=all` +
        `&sysparm_limit=30`

    return apiFetch(url)
}
