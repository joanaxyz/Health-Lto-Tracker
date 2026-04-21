import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['br_attachment_evidence_delete'],
    name: 'LTO: Remove Evidence Metadata for Deleted Attachment',
    active: true,
    table: 'sys_attachment',
    when: 'after',
    action: ['delete'],
    script: Now.include('./br-attachment-evidence-delete.server.js'),
})
