import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['br_attachment_evidence_sync'],
    name: 'LTO: Sync Evidence Metadata from License Attachment',
    active: true,
    table: 'sys_attachment',
    when: 'after',
    action: ['insert', 'update'],
    script: Now.include('./br-attachment-evidence-sync.server.js'),
})
