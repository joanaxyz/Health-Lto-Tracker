import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
    DateTimeColumn,
} from '@servicenow/sdk/core'

export const x_1998335_health_l_evidence_file = Table({
    name: 'x_1998335_health_l_evidence_file',
    label: 'Evidence File',
    schema: {
        x_1998335_health_l_license_id: ReferenceColumn({
            label: 'License',
            referenceTable: 'x_1998335_health_l_license',
            mandatory: true,
        }),
        x_1998335_health_l_file_name: StringColumn({
            label: 'File Name',
            maxLength: 300,
            mandatory: true,
        }),
        x_1998335_health_l_attachment_sys_id: StringColumn({
            label: 'Attachment',
            maxLength: 32,
        }),
        x_1998335_health_l_file_type: ChoiceColumn({
            label: 'File Type',
            mandatory: true,
            choices: {
                form:              { label: 'Form' },
                receipt:           { label: 'Receipt' },
                certificate:       { label: 'Certificate' },
                inspection_report: { label: 'Inspection Report' },
                other:             { label: 'Other' },
            },
        }),
        x_1998335_health_l_uploaded_by: ReferenceColumn({
            label: 'Uploaded By',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        x_1998335_health_l_uploaded_at: DateTimeColumn({
            label: 'Uploaded At',
            mandatory: true,
        }),
    },
})
