import React, { useState, useEffect } from 'react'
import { getLicenses, getAlerts, v, d } from './LtoService.js'
import './App.css'

// ─── Display metadata maps ────────────────────────────────────────────────────

const STAGE_META = {
    not_started:         { label: 'Not Started',    color: '#6b7280', bg: '#f3f4f6' },
    documents_gathering: { label: 'Docs Gathering', color: '#1d6fa8', bg: '#e0f0fa' },
    submitted_to_doh:    { label: 'Submitted',      color: '#6741d9', bg: '#f0ebff' },
    under_evaluation:    { label: 'Under Eval',     color: '#b45309', bg: '#fef3c7' },
    released:            { label: 'Released',       color: '#166534', bg: '#dcfce7' },
}

const TYPE_ABBR = {
    doh_lto_main:   'DOH LTO',
    olrs_radiology: 'OLRS Rad.',
    olrs_pharmacy:  'OLRS Pharm.',
}

// ─── Colour helpers ───────────────────────────────────────────────────────────

function daysStyle(rawDays) {
    const n = parseInt(rawDays, 10)
    if (isNaN(n) || n < 0) return { color: '#991b1b', bg: '#fef2f2' }
    if (n <= 7)             return { color: '#991b1b', bg: '#fef2f2' }
    if (n <= 30)            return { color: '#92400e', bg: '#fff7ed' }
    if (n <= 90)            return { color: '#854d0e', bg: '#fefce8' }
    return                         { color: '#166534', bg: '#f0fdf4' }
}

function pctColor(pct) {
    const n = parseInt(pct, 10) || 0
    if (n >= 100) return '#16a34a'
    if (n >= 50)  return '#d97706'
    return              '#dc2626'
}

// ─── Atomic components ────────────────────────────────────────────────────────

function Badge({ label, color, bg }) {
    return (
        <span className="badge" style={{ color, background: bg }}>
            {label}
        </span>
    )
}

function DaysBadge({ rawDays }) {
    const n = parseInt(rawDays, 10)
    const { color, bg } = daysStyle(rawDays)
    const label = isNaN(n) ? '—' : n < 0 ? `${Math.abs(n)}d over` : `${n}d`
    return (
        <span className="days-badge" style={{ color, background: bg }}>
            {label}
        </span>
    )
}

function ChecklistBar({ rawPct }) {
    const pct = Math.min(100, Math.max(0, parseInt(rawPct, 10) || 0))
    return (
        <div className="lto-progress-wrap">
            <div className="lto-progress-track">
                <div
                    className="lto-progress-fill"
                    style={{ width: `${pct}%`, background: pctColor(pct) }}
                />
            </div>
            <span className="lto-progress-pct">{pct}%</span>
        </div>
    )
}

function StatCard({ label, count, color, bg, icon }) {
    return (
        <div className="stat-card" style={{ '--card-color': color, '--card-bg': bg }}>
            <div className="stat-card-header">
                <span className="stat-card-label">{label}</span>
                <span className="stat-card-icon">{icon}</span>
            </div>
            <div className="stat-card-count">{count}</div>
        </div>
    )
}

function TabBtn({ label, active, onClick }) {
    return (
        <button className={`lto-tab${active ? ' active' : ''}`} onClick={onClick}>
            {label}
        </button>
    )
}

// ─── License table ────────────────────────────────────────────────────────────

const COL_HEADS = ['License #', 'Facility', 'Type', 'Expiry Date', 'Days Left', 'Stage', 'Checklist', '']

function LicenseTable({ licenses }) {
    if (!licenses.length) {
        return (
            <div className="lto-empty">
                <div className="lto-empty-icon">✓</div>
                <div className="lto-empty-title">Nothing needs attention right now</div>
                <div className="lto-empty-sub">All licenses are active and within safe thresholds.</div>
            </div>
        )
    }

    return (
        <div className="lto-table-wrap">
            <table className="lto-table">
                <thead>
                    <tr>
                        {COL_HEADS.map((h) => <th key={h}>{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {licenses.map((lic) => {
                        const sysId      = lic.sys_id
                        const licNum     = d(lic, 'x_1998335_health_l_license_number')
                        const facility   = d(lic, 'x_1998335_health_l_facility_id')
                        const typeKey    = v(lic, 'x_1998335_health_l_license_type')
                        const typeLabel  = TYPE_ABBR[typeKey] || d(lic, 'x_1998335_health_l_license_type')
                        const expiry     = d(lic, 'x_1998335_health_l_expiry_date')
                        const rawDays    = v(lic, 'x_1998335_health_l_days_before_expiry')
                        const stageKey   = v(lic, 'x_1998335_health_l_renewal_stage')
                        const stageMeta  = STAGE_META[stageKey] || STAGE_META.not_started
                        const rawPct     = v(lic, 'x_1998335_health_l_checklist_pct')
                        const recordUrl  = `/x_1998335_health_l_license.do?sys_id=${sysId}`

                        return (
                            <tr key={sysId}>
                                <td>
                                    <a href={recordUrl} className="lto-lic-link">
                                        {licNum || '—'}
                                    </a>
                                </td>
                                <td style={{ color: '#374151', fontWeight: 500 }}>
                                    {facility || '—'}
                                </td>
                                <td>
                                    <Badge label={typeLabel} color="#374151" bg="#f1f5f9" />
                                </td>
                                <td style={{ color: '#4b5563', whiteSpace: 'nowrap' }}>
                                    {expiry || '—'}
                                </td>
                                <td>
                                    <DaysBadge rawDays={rawDays} />
                                </td>
                                <td>
                                    <Badge
                                        label={stageMeta.label}
                                        color={stageMeta.color}
                                        bg={stageMeta.bg}
                                    />
                                </td>
                                <td>
                                    <ChecklistBar rawPct={rawPct} />
                                </td>
                                <td>
                                    <a href={recordUrl} className="lto-open-btn">
                                        Open →
                                    </a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

// ─── Alerts table ─────────────────────────────────────────────────────────────

const ALERT_HEADS = ['License', 'Threshold', 'Channel', 'Status', 'Sent At']

function AlertsTable({ alerts }) {
    if (!alerts.length) {
        return (
            <div className="lto-empty">
                <div className="lto-empty-icon">🔔</div>
                <div className="lto-empty-title">No alerts on record</div>
                <div className="lto-empty-sub">Alerts are created automatically by the daily scheduled job.</div>
            </div>
        )
    }

    return (
        <div className="lto-table-wrap">
            <table className="lto-table">
                <thead>
                    <tr>
                        {ALERT_HEADS.map((h) => <th key={h}>{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {alerts.map((a) => {
                        const threshold = v(a, 'x_1998335_health_l_days_before_expiry')
                        const { color, bg } = daysStyle(threshold)
                        const status = d(a, 'x_1998335_health_l_status')
                        const sentAt = d(a, 'x_1998335_health_l_sent_at')
                        const channel = d(a, 'x_1998335_health_l_channel')
                        const licLabel = d(a, 'x_1998335_health_l_license_id')

                        return (
                            <tr key={a.sys_id}>
                                <td style={{ fontWeight: 600, color: '#0f2744' }}>
                                    {licLabel || '—'}
                                </td>
                                <td>
                                    <span
                                        className="days-badge"
                                        style={{ color, background: bg, minWidth: 'unset', padding: '3px 10px', fontSize: 12 }}
                                    >
                                        {threshold} days
                                    </span>
                                </td>
                                <td>
                                    <Badge label={channel || 'Email'} color="#374151" bg="#f1f5f9" />
                                </td>
                                <td>
                                    <Badge
                                        label={status || 'Sent'}
                                        color="#166534"
                                        bg="#dcfce7"
                                    />
                                </td>
                                <td style={{ color: '#6b7280', whiteSpace: 'nowrap' }}>
                                    {sentAt || '—'}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
    const [licenses, setLicenses]   = useState([])
    const [alerts, setAlerts]       = useState([])
    const [loading, setLoading]     = useState(true)
    const [error, setError]         = useState(null)
    const [tab, setTab]             = useState('attention')

    useEffect(() => {
        Promise.all([getLicenses(), getAlerts()])
            .then(([lics, alts]) => {
                setLicenses(Array.isArray(lics) ? lics : [])
                setAlerts(Array.isArray(alts) ? alts : [])
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message || 'Unknown error')
                setLoading(false)
            })
    }, [])

    // Derived stats
    const count = (status) => licenses.filter((l) => v(l, 'x_1998335_health_l_status') === status).length

    const attentionLicenses = licenses.filter((l) => {
        const s = v(l, 'x_1998335_health_l_status')
        return s === 'expiring_soon' || s === 'expired'
    })

    const tabLicenses = tab === 'all' ? licenses : attentionLicenses

    const tabLabel = (key, base, n) =>
        n > 0 ? `${base} (${n})` : base

    return (
        <div className="lto-root">

            {/* ── Header ────────────────────────────────────────────────── */}
            <header className="lto-header">
                <div className="lto-header-inner">
                    <div className="lto-header-brand">
                        <div className="lto-header-brand-icon">🏥</div>
                        <span className="lto-header-brand-name">
                            Health LTO Tracker
                            <span className="lto-header-brand-sub">DOH Licensing</span>
                        </span>
                    </div>
                    <div className="lto-header-actions">
                        <a
                            href="/x_1998335_health_l_facility.do?sys_id=-1"
                            className="lto-btn-ghost"
                        >
                            + New Facility
                        </a>
                        <a
                            href="/x_1998335_health_l_license.do?sys_id=-1"
                            className="lto-btn-accent"
                        >
                            + New License
                        </a>
                    </div>
                </div>
            </header>

            {/* ── Main ──────────────────────────────────────────────────── */}
            <main className="lto-main">

                {/* Stats */}
                <div>
                    <div className="lto-section-label">Overview</div>
                    <div className="lto-stats">
                        <StatCard
                            label="Active"
                            count={count('active')}
                            color="#16a34a"
                            bg="#f0fdf4"
                            icon="✓"
                        />
                        <StatCard
                            label="Expiring Soon"
                            count={count('expiring_soon')}
                            color="#d97706"
                            bg="#fffbeb"
                            icon="⚠"
                        />
                        <StatCard
                            label="Expired"
                            count={count('expired')}
                            color="#dc2626"
                            bg="#fef2f2"
                            icon="✕"
                        />
                        <StatCard
                            label="Under Renewal"
                            count={count('under_renewal')}
                            color="#2563eb"
                            bg="#eff6ff"
                            icon="↻"
                        />
                    </div>
                </div>

                {/* Main panel */}
                <div>
                    <div className="lto-section-label">Licenses</div>
                    <div className="lto-panel">

                        {/* Tab bar */}
                        <div className="lto-tabs">
                            <TabBtn
                                label={tabLabel('attention', 'Needs Attention', attentionLicenses.length)}
                                active={tab === 'attention'}
                                onClick={() => setTab('attention')}
                            />
                            <TabBtn
                                label={tabLabel('all', 'All Licenses', licenses.length)}
                                active={tab === 'all'}
                                onClick={() => setTab('all')}
                            />
                            <TabBtn
                                label={tabLabel('alerts', 'Recent Alerts', alerts.length)}
                                active={tab === 'alerts'}
                                onClick={() => setTab('alerts')}
                            />
                        </div>

                        {/* Content */}
                        {loading && (
                            <div className="lto-loading">
                                <div className="lto-spinner" />
                                <span>Loading license data…</span>
                            </div>
                        )}

                        {!loading && error && (
                            <div className="lto-error">
                                <strong>Could not load data:</strong> {error}
                            </div>
                        )}

                        {!loading && !error && tab !== 'alerts' && (
                            <LicenseTable licenses={tabLicenses} />
                        )}

                        {!loading && !error && tab === 'alerts' && (
                            <AlertsTable alerts={alerts} />
                        )}

                    </div>
                </div>

            </main>
        </div>
    )
}
