import { SPPage } from '@servicenow/sdk/core'

// License detail portal page — accessed via ?id=lto_license_detail&sys_id=<license sys_id>
SPPage({
    pageId: 'lto_license_detail',
    title: 'License Detail',
    category: 'custom',
    draft: false,
    internal: false,
    public: false,
    containers: [
        {
            $id: Now.ID['lto_license_detail_container'],
            name: 'License Detail Container',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['lto_license_detail_row'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['lto_license_detail_col'],
                            size: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['lto_license_detail_instance'],
                                    widget: 'lto-license-detail',
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
