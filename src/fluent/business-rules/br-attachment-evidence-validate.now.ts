import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['br_attachment_evidence_validate'],
    name: 'LTO: Validate License Evidence Attachment',
    active: true,
    table: 'sys_attachment',
    when: 'before',
    action: ['insert', 'update'],
    script: Now.include('./br-attachment-evidence-validate.server.js'),
})
