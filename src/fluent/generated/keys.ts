import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    acl_alert_read: {
                        table: 'sys_security_acl'
                        id: '6b482d14e8e64f589781b43129e3a153'
                    }
                    acl_audit_log_read: {
                        table: 'sys_security_acl'
                        id: '5af726f030954a8cb30fd80bf745a948'
                    }
                    acl_checklist_create: {
                        table: 'sys_security_acl'
                        id: '9bea982511d54c1abf1c8f3ac7e1bfd8'
                    }
                    acl_checklist_read: {
                        table: 'sys_security_acl'
                        id: '9c0df6102e13454a91d66f58de9ce7fb'
                    }
                    acl_checklist_write: {
                        table: 'sys_security_acl'
                        id: '58ef4c88c5574f2c922f77a7deb90e1e'
                    }
                    acl_evidence_create: {
                        table: 'sys_security_acl'
                        id: 'd800384ffb2b44819b1f06d8c50dbd4a'
                    }
                    acl_evidence_read: {
                        table: 'sys_security_acl'
                        id: '8a5081d69d2a4ca8b3e8d720d345a0fe'
                    }
                    acl_evidence_write: {
                        table: 'sys_security_acl'
                        id: '1c11771b9e484c13b092db10f3b4355b'
                    }
                    acl_facility_create: {
                        table: 'sys_security_acl'
                        id: 'a577319decc6468ebd6b4c2ed80a141e'
                    }
                    acl_facility_delete: {
                        table: 'sys_security_acl'
                        id: 'd0978d0d9b1642bb8d464c307be3de36'
                    }
                    acl_facility_read: {
                        table: 'sys_security_acl'
                        id: '190552a61ff1427a8cd2d2ab7eb17bd4'
                    }
                    acl_facility_write: {
                        table: 'sys_security_acl'
                        id: 'ff2b5cb028c74f7fa90320b0b1f8b5fd'
                    }
                    acl_incident_manager_url: {
                        table: 'sys_security_acl'
                        id: 'cd52a454ff60490fbe900da3ad5196b1'
                    }
                    acl_license_create: {
                        table: 'sys_security_acl'
                        id: 'c8e665ffd07b40ec9d40433309daed43'
                    }
                    acl_license_days_write: {
                        table: 'sys_security_acl'
                        id: '61865d14fe804301b6ace5d414384d1f'
                    }
                    acl_license_delete: {
                        table: 'sys_security_acl'
                        id: '0d3d915efc3941b49e11f8095f79e3b3'
                    }
                    acl_license_pct_write: {
                        table: 'sys_security_acl'
                        id: 'f870a9c39ea9413eb25738684bdd3e7e'
                    }
                    acl_license_read: {
                        table: 'sys_security_acl'
                        id: '76d16082928c4834a61c5c469557c3b2'
                    }
                    acl_license_status_write: {
                        table: 'sys_security_acl'
                        id: 'fce7bd0183774b5f9ac1d17c02972d96'
                    }
                    acl_license_write: {
                        table: 'sys_security_acl'
                        id: 'd588d05eeb2847fc959a8db72d271f7b'
                    }
                    acl_lto_dashboard_url: {
                        table: 'sys_security_acl'
                        id: '551cda40ac6d4da78765713e899066d8'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'c3994767be2f42e6a3def5e438105e0a'
                    }
                    br_checklist_completed_timestamp: {
                        table: 'sys_script'
                        id: '3b99aa6766cf4a368b48d1b9195ae93a'
                    }
                    br_checklist_pct_recompute: {
                        table: 'sys_script'
                        id: '9f498943a4a745df9f42aa6e94d17d2e'
                    }
                    br_facility_duplicate_check: {
                        table: 'sys_script'
                        id: 'a16065177e474de8a114533d6dc1247a'
                    }
                    br_license_compute_status: {
                        table: 'sys_script'
                        id: '44004cf5fca349d79c70106600f8dedf'
                    }
                    br_license_create_checklist: {
                        table: 'sys_script'
                        id: '5b45857a6bfc445896a8a4b1a7714c7d'
                    }
                    br_license_stage_audit_log: {
                        table: 'sys_script'
                        id: '7d39c5b3ab0749779dc6cbf83beafa1c'
                    }
                    br_license_stage_block_backward: {
                        table: 'sys_script'
                        id: 'ffd856e7e5d2430d93165c7e5d25e502'
                    }
                    br_license_stage_released_validate: {
                        table: 'sys_script'
                        id: '4d7a28647b0f499f819946d4cdc9ea5b'
                    }
                    cs_evidence_file_size: {
                        table: 'sys_script_client'
                        id: '799fafa306e1441a9d029792d29c9b23'
                    }
                    cs_license_stage_released_confirm: {
                        table: 'sys_script_client'
                        id: '4654ff930a614ab1ab4645aa0f887569'
                    }
                    email_notification_expiry_alert: {
                        table: 'sysevent_emailaction'
                        id: '619eb3bf73424001b726e27287a58dfe'
                    }
                    form_section_facility_info: {
                        table: 'sys_ui_section'
                        id: '608182d9db4844e6b8d1ac261f9d6133'
                    }
                    form_section_facility_licenses: {
                        table: 'sys_ui_section'
                        id: 'cfe20124077a4c128697bff3e6818cbe'
                    }
                    form_section_license_identity: {
                        table: 'sys_ui_section'
                        id: '3eb49e5844414a6a9686fdfd7b9b8431'
                    }
                    form_section_license_related: {
                        table: 'sys_ui_section'
                        id: '99e30a6bd64947f49b6429687eaf0e84'
                    }
                    form_section_license_status: {
                        table: 'sys_ui_section'
                        id: '972538bc5258477bb7ec82c4e074b774'
                    }
                    lto_app_menu: {
                        table: 'sys_app_application'
                        id: '84352c5b1995445e9b7438f02ce92b15'
                    }
                    lto_col_expiring_licenses: {
                        table: 'sp_column'
                        id: 'dff346ef9e0648c0a62474ad0cf53dd9'
                    }
                    lto_col_recent_alerts: {
                        table: 'sp_column'
                        id: '07ed0572a3884330be12600d2c9211df'
                    }
                    lto_col_status_summary: {
                        table: 'sp_column'
                        id: 'b94aabd7f3a645918c563888e5adfa4c'
                    }
                    lto_dashboard_container: {
                        table: 'sp_container'
                        id: 'aacfd7467b434be78a98509e1067f1d1'
                    }
                    lto_instance_expiring_licenses: {
                        table: 'sp_instance'
                        id: 'b02df4d6174442d582a7f0a3bf40e6ed'
                    }
                    lto_instance_recent_alerts: {
                        table: 'sp_instance'
                        id: '545e0e8eca5844798e2fa6cca7dbdfd6'
                    }
                    lto_instance_status_summary: {
                        table: 'sp_instance'
                        id: '62d47fc44ae643f2b56843ba54e4a758'
                    }
                    lto_portal: {
                        table: 'sp_portal'
                        id: 'a217364ec76640908f0245b2c2d9ac91'
                    }
                    lto_row_expiring_licenses: {
                        table: 'sp_row'
                        id: 'e0b3adfc16bc48f79f839812267c41e7'
                    }
                    lto_row_recent_alerts: {
                        table: 'sp_row'
                        id: 'f00006dc2616434a863998668b29c899'
                    }
                    lto_row_status_summary: {
                        table: 'sp_row'
                        id: '7581e5b635b746df8bfb315001432d57'
                    }
                    lto_sys_app_menu_link: {
                        table: 'sys_app'
                        id: '8fad201d6f3e4230a60efb5b3a1d639e'
                        deleted: true
                    }
                    module_alerts_sep: {
                        table: 'sys_app_module'
                        id: '5b6886651ae5415dbe0da60a77666f4c'
                    }
                    module_all_alerts: {
                        table: 'sys_app_module'
                        id: 'f49f6eba404b48449ebf531db336c16f'
                    }
                    module_all_audit: {
                        table: 'sys_app_module'
                        id: 'b3c657e1db654e6bb68d87cc3b2bb4fe'
                    }
                    module_all_facilities: {
                        table: 'sys_app_module'
                        id: '1e671a2d391f4bd79245f725fade6a94'
                    }
                    module_all_licenses: {
                        table: 'sys_app_module'
                        id: '226647de0a9949b7a242b8a97b03cb24'
                    }
                    module_audit_sep: {
                        table: 'sys_app_module'
                        id: 'e0ad0409b15e46259a535f940e365a5f'
                    }
                    module_dashboard: {
                        table: 'sys_app_module'
                        id: 'b8f635878c5d491d880f00b412473785'
                    }
                    module_expired: {
                        table: 'sys_app_module'
                        id: '88128edfb4624924bc54e488b0e990e9'
                    }
                    module_expiring_soon: {
                        table: 'sys_app_module'
                        id: '31641fe8ca914b19906ef8698b06811b'
                    }
                    module_facilities_sep: {
                        table: 'sys_app_module'
                        id: 'c2834830beae4e5f9452e1e9542c4efb'
                    }
                    module_licenses_sep: {
                        table: 'sys_app_module'
                        id: 'fe6fdd18a3004859ae70764a1b4f3bd0'
                    }
                    module_new_facility: {
                        table: 'sys_app_module'
                        id: 'cdabee3bde2e415ca27c2a9f72fb4ee1'
                    }
                    module_new_license: {
                        table: 'sys_app_module'
                        id: '2a9487b279da4b339bc9fc075408d92d'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '73c70044b5d64d6a98f9b4737e07c149'
                    }
                    scheduled_job_daily_alert: {
                        table: 'sysauto_script'
                        id: '141ceb059ca345348eefa294b6a3d11f'
                    }
                    widget_lto_expiring_licenses: {
                        table: 'sp_widget'
                        id: '030bacad6a1644089fd79364f8f19baf'
                    }
                    widget_lto_recent_alerts: {
                        table: 'sp_widget'
                        id: 'd7d528ac24bf44f9aec70622add49e54'
                    }
                    widget_lto_status_summary: {
                        table: 'sp_widget'
                        id: '6d26e64df28844c4b2d05cd384894c8b'
                    }
                }
                composite: [
                    {
                        table: 'sys_ux_lib_asset'
                        id: '00659fdb707b41a5ae17ac1e15e42bd0'
                        key: {
                            name: 'x_1998335_health_l/main'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03aa2417591e4550ac776304c4917f76'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_facility_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '04004f63e5c6497ea4f2e587f541adef'
                        key: {
                            sys_security_acl: 'c8e665ffd07b40ec9d40433309daed43'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '049d2b9a7e1249d3bc212c5af0d7dfcb'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_doh_license_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '04bc5ec5c088416b84f6a38703d4cbd9'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'x_1998335_health_l_completed_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '059f3539e9954e4184f17803262f38e9'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'x_1998335_health_l_license_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05f32a9cac8b4c67a73b404584d7bcea'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0669f30abab24eae8bf11aeacf057903'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_checklist_pct'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '082f63bf93a84b58967460fed2bed067'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '09c0281fdb984556a56d533988be257d'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_renewal_stage'
                            value: 'under_evaluation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09efd3cbbfd2498eb1e0f716a10ff58c'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_uploaded_at'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '09f8aaff133946de9c293a8387a733b4'
                        deleted: true
                        key: {
                            application_file: '00659fdb707b41a5ae17ac1e15e42bd0'
                            source_artifact: '3582e4fe50d44ff2b5dd73f9715348d1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b8e09a93fe849d49b14b4a3b70f2e29'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_license_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e1109ddbecd40b59668186a27199dc5'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_facility_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e59ce91f11045b0938bf678d41ac49b'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_file_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1080649f98ba455db171c56711fde279'
                        key: {
                            name: 'x_1998335_health_l_alert'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1216296f4df847c1b99d3fce29ea0c93'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_uploaded_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '13b9350107b24cd5933ceeb850d97ac7'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_license_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '14b7521baa9c4723bb9a811a432921c9'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_doh_license_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '168ec1e382704a7e948bafda943cc637'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_new_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16f6e186de724cb8a4f0e12edd1d90b6'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_days_before_expiry'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '197e26d12b464904af5389c704b54e6a'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_checklist_pct'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1be046c47164425e8a85db3aa6423976'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_channel'
                            value: 'in_app'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1e03a8b1b1c2490795d61e30930d11df'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1e1475bfc6584a1da81de7097d7fa229'
                        key: {
                            sys_security_acl: 'cd52a454ff60490fbe900da3ad5196b1'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ecd496223be4d888f0bbc75971ab896'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1f2604d6d91d4d7d9e3b57c50ef153dd'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_renewal_stage'
                            value: 'released'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '229cb3cb0b864a7183468969fe4444a6'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '231cd839058c4e6b8710f7eef73d5cfd'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_facility_type'
                            value: 'hospital'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '258f6a94235147f7802811d107663f9f'
                        key: {
                            table: 'x_1998335_health_l_form_checklist'
                            short_description: 'Completed At and Completed By are read-only'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '263147c494634c6abe861460a3542199'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '275420bdcea942a1b7e679367a5736ff'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '285b8d0a82a948bb8659905296c38e4b'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2a08291026c54295b3fdcc94e3b323f6'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_status'
                            value: 'expiring_soon'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a30681d68604e059bf7ea17406817b5'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_channel'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2b8ac9cd57cc46c394b52fea6164babe'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_compliance_officer_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2bd094740be44a53b98dc3e6ebd1cee9'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2dcb3cc6ccd24665833ba40b5d8cf5f9'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '30db11ba4f9c4f1dba28acee7c7954ef'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_expiry_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3287be2c232b443aad8f8a7272be070a'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '32fe0066b2fd49129dc31ef91f9c762f'
                        key: {
                            sys_security_acl: '1c11771b9e484c13b092db10f3b4355b'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '338562fe70f84c048efaaae2ec51587f'
                        key: {
                            list_id: {
                                id: '8541925f135e44eab1138f9010ae0db8'
                                key: {
                                    name: 'x_1998335_health_l_alert'
                                    view: {
                                        id: '6077ae37e19249438a106c9e70878184'
                                        key: {
                                            name: 'default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_1998335_health_l_license_id'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '33ed0c868c054eb89db13269af3d49f4'
                        key: {
                            sys_security_acl: '5af726f030954a8cb30fd80bf745a948'
                            sys_user_role: {
                                id: '99d98d11f03d43689597be815ceeb245'
                                key: {
                                    name: 'x_1998335_health_l.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '3582e4fe50d44ff2b5dd73f9715348d1'
                        deleted: true
                        key: {
                            name: 'x_1998335_health_l_incident_manager.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '364d872fd6184aeb93bb41388317cbc3'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3733e54015794970b76e549f01d2d3b6'
                        key: {
                            sys_security_acl: '9bea982511d54c1abf1c8f3ac7e1bfd8'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '375fdec925544fc4ad2e7f4f1713a9e0'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '38e8dfb0df094389b0d44c72f5e320a2'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_status'
                            value: 'failed'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '397e1c3a4dfe4de3a5689f0716219049'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3a35cad3f5894ed4bdf3f1a463417b03'
                        key: {
                            sys_security_acl: '8a5081d69d2a4ca8b3e8d720d345a0fe'
                            sys_user_role: {
                                id: '99d98d11f03d43689597be815ceeb245'
                                key: {
                                    name: 'x_1998335_health_l.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3cd262fbe4ca43abae8522c43de84977'
                        key: {
                            name: 'x_1998335_health_l_facility'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3dd9780abc754187bf86e4d444edb948'
                        key: {
                            list_id: {
                                id: '429b41d3565a4108bc48accd9a9e98b1'
                                key: {
                                    name: 'x_1998335_health_l_license'
                                    view: {
                                        id: '3e40a7ec77444980bfadd8cc141201f0'
                                        key: {
                                            name: 'default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_1998335_health_l_facility_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e48e0cd75f34bc382b56665d65be85e'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_old_value'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3f78c826d51b40b4b2eeed2b56c425bc'
                        key: {
                            sys_security_acl: '190552a61ff1427a8cd2d2ab7eb17bd4'
                            sys_user_role: {
                                id: '99d98d11f03d43689597be815ceeb245'
                                key: {
                                    name: 'x_1998335_health_l.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '40824fc14e0449ef9a1937e62f090954'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_channel'
                            value: 'email'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '429b41d3565a4108bc48accd9a9e98b1'
                        key: {
                            name: 'x_1998335_health_l_license'
                            view: {
                                id: '4dcd141dff8542bb854634c603763f33'
                                key: {
                                    name: 'default'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '42d57ec6be0a4613895ea9d50c56f4de'
                        key: {
                            name: 'x_1998335_health_l_alert'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '446b43fbfcd14661819a95edd9b1e9d7'
                        key: {
                            sys_security_acl: '190552a61ff1427a8cd2d2ab7eb17bd4'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4532d72c526b4d5db9b3c9c1dc43faec'
                        key: {
                            list_id: {
                                id: '429b41d3565a4108bc48accd9a9e98b1'
                                key: {
                                    name: 'x_1998335_health_l_license'
                                    view: {
                                        id: '4d942b41696040dcbdf795f2266a58a2'
                                        key: {
                                            name: 'default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_1998335_health_l_renewal_stage'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4817522841ec482596918bba028d5d93'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_facility_type'
                            value: 'radiology_center'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49c1bb2924fa4f099a2308c9b43fcecd'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_field_changed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a3f249dd1e2426f95f2a9139545ab09'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_license_id'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4b0e22ec32f04a9c873f17cc07791000'
                        key: {
                            sys_security_acl: '6b482d14e8e64f589781b43129e3a153'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '507af27e1e72461287063ca9fc53cd2c'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_status'
                            value: 'sent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51fb95ca3d4149d09700ea480671933d'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5364d35899fa492e93b7baf756f67476'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'x_1998335_health_l_license_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '53667a3b002f443ea248adb3985051c4'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_license_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55564fbc4af142409ea0f2c6254156e9'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_expiry_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '557d3b552fba4666ae32e58c663d2121'
                        key: {
                            sys_security_acl: '5af726f030954a8cb30fd80bf745a948'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5680c4401403427297611d972d6a918a'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_file_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57786981b8964b28a544751174d4cba0'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_facility_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '595a899fb3934145bfaef7791dc109b3'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_field_changed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '595d65df17c64be4a27b7d45a1fe843b'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_old_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '59bf4a258afc4d25a284dcf5d76341fa'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5da1b5032a184cc3ae4ec0f1e1f27aef'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_renewal_stage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e36c61bf6f84c17b5e76447e29e7a95'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'x_1998335_health_l_is_completed'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '5f25df144c9a42e093bf27532a8db8d6'
                        key: {
                            ui_policy: {
                                id: '5f3549d863e144739ad1b31e9d41efa1'
                                key: {
                                    table: 'x_1998335_health_l_license'
                                    short_description: 'Computed fields are read-only'
                                }
                            }
                            field: 'x_1998335_health_l_days_before_expiry'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '5f3549d863e144739ad1b31e9d41efa1'
                        key: {
                            table: 'x_1998335_health_l_license'
                            short_description: 'Computed fields are read-only'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '62a31540319e440081b87d8379394c68'
                        key: {
                            name: 'x_1998335_health_l/lto-dashboard/main'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '665f6031c70f4a7689ba2a419381574c'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'x_1998335_health_l_is_completed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '69f2b78794354fb2bbac9c477491bc5d'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_renewal_stage'
                            value: 'not_started'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a387e121b3d4f73a2928353902533b4'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_file_name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6a57cc7a325543ca8189f8b73a8e44df'
                        key: {
                            list_id: {
                                id: '429b41d3565a4108bc48accd9a9e98b1'
                                key: {
                                    name: 'x_1998335_health_l_license'
                                    view: {
                                        id: 'c90db36fba0440819535620e983c47f9'
                                        key: {
                                            name: 'default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_1998335_health_l_checklist_pct'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6b323af0e52f4664b326d016351e2e7e'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_license_type'
                            value: 'olrs_radiology'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6b6e6d3b206343c584c276ce0bff729e'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_status'
                            value: 'under_renewal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c0766b04b5941839f5163429169e07a'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6c0cbc698efb477883d4a409c6c77c45'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_renewal_stage'
                            value: 'documents_gathering'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6cd65eb5276b4536bb7cf9cfff74a1ee'
                        key: {
                            sys_security_acl: '58ef4c88c5574f2c922f77a7deb90e1e'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6dc5ce39dfe64acf81722979fc3536fa'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6dca12e250bb4280ad9a19540b0fca6c'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_alert_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f3fcc9541a84799a9bd41d8785c895b'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_uploaded_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6fe8138e9f2b4772b085aa8b0ff0a2cd'
                        key: {
                            sys_security_acl: '76d16082928c4834a61c5c469557c3b2'
                            sys_user_role: {
                                id: '99d98d11f03d43689597be815ceeb245'
                                key: {
                                    name: 'x_1998335_health_l.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '775a72005cb6455295e465b49686c346'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_uploaded_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77d84c7541504f32a166a03edb5d0a35'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_name'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '794576958b1f40f8b67db8a42b500fb8'
                        key: {
                            name: 'x_1998335_health_l/lto-dashboard/main.js.map'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7b11f09b899a4f92972aef791a5de841'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_channel'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7b207042df6042a5a01632a6eba5d5b9'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7b782a9e1baf43299ef1d241984c6175'
                        key: {
                            sys_security_acl: '0d3d915efc3941b49e11f8095f79e3b3'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d3c93bd99b24c269798e2355bc82c7a'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_sent_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7da6985102384a0898d19a1d9ca6bc16'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_compliance_officer_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7e48038a282e46ea840025e47ba4895b'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f71cd323aad450684495afba221c44c'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8015ede29a9d4c69beb6995a4a929846'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_renewal_stage'
                            value: 'submitted_to_doh'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '802d2bf56daf48ada84c821f4a1dcfa5'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_alert_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8051624345c24351b8930f6709751067'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_file_type'
                            value: 'inspection_report'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '843f4e265c4c487ea34c02c60ac35655'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_file_type'
                            value: 'form'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '84acedbff7b84ae38b9a5c8e00bc2298'
                        key: {
                            name: 'x_1998335_health_l_license'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8531cbb62b0b45f7a74c5254597c54eb'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_facility_type'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '8541925f135e44eab1138f9010ae0db8'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            view: {
                                id: '72eb2d779de344a98b02b1630f6571b5'
                                key: {
                                    name: 'default'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '883c8dec46d24e20a6df9c7c1badfef4'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_license_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8a212befdc8a4415bc18c57c185785e9'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_days_before_expiry'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a50a18ebb2f412787b806b8cda1cd13'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8c58f4c030f14d2e8f297cb89770f0df'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_status'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '8ead4198fa134de083304226de9c38f8'
                        key: {
                            id: 'lto_dashboard'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ec60eb7050e4db1abc609727e7ab8d9'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8ef856384334455180d8fa954a0c3d95'
                        key: {
                            name: 'x_1998335_health_l_license'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '926e4581c6944a2795360e16bd210fc7'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_file_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9372795f1849464aac770b8ad5f19d6f'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_facility_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '95a53c0fe8204ba0a558951c02b446f8'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_license_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '970e7ca7c58c4260aa29f6c50bde88fe'
                        key: {
                            sys_security_acl: '6b482d14e8e64f589781b43129e3a153'
                            sys_user_role: {
                                id: '99d98d11f03d43689597be815ceeb245'
                                key: {
                                    name: 'x_1998335_health_l.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '97438bc300c8456dbfe8bdd0ce476001'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '977800087af840fb82713b1b65d9642d'
                        key: {
                            name: 'x_1998335_health_l/____insertStyle.js.map'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9788ce658f2c414c8f0632f53ed76104'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_action'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '982dc773133e4d6fb3ee0c8101e07edc'
                        key: {
                            sys_security_acl: 'ff2b5cb028c74f7fa90320b0b1f8b5fd'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98600e39bb2d4e73a9b3e414f6729172'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_license_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '99d98d11f03d43689597be815ceeb245'
                        key: {
                            name: 'x_1998335_health_l.viewer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99e7b359b9b14c4e923c8240430296b0'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_user_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a7705f0450c47b4a1c5cdfd267dee77'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_attachment_sys_id'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9cc73200c92844cab4e5b5d418f80800'
                        key: {
                            list_id: {
                                id: '8541925f135e44eab1138f9010ae0db8'
                                key: {
                                    name: 'x_1998335_health_l_alert'
                                    view: {
                                        id: '8bf9054c318b485785eb5053ea9486a5'
                                        key: {
                                            name: 'default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_1998335_health_l_sent_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e23ba8fcc984cbb83d0671cbf57f1a0'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'x_1998335_health_l_form_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f4810cb37814eda8f685a8d214e95eb'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f658d4b98144694bff2ccaf198bb281'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a05d34b9e6934a099580a84859b74a3e'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_file_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a0b4ca72f84c4702999c89f3acc3e81a'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'x_1998335_health_l_completed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a2938956faae4845a63e30046ee2f854'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_file_type'
                            value: 'receipt'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a2ae513efbb4484ea5374f5f42d0baed'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a90f56a195cd4cb7b61127a8af1231a4'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_sent_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a952eef5b48a40829199f685427ea05d'
                        key: {
                            sys_security_acl: '9c0df6102e13454a91d66f58de9ce7fb'
                            sys_user_role: {
                                id: '99d98d11f03d43689597be815ceeb245'
                                key: {
                                    name: 'x_1998335_health_l.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'aafa38a420354f499d7b774a8c91e18e'
                        key: {
                            ui_policy: {
                                id: '258f6a94235147f7802811d107663f9f'
                                key: {
                                    table: 'x_1998335_health_l_form_checklist'
                                    short_description: 'Completed At and Completed By are read-only'
                                }
                            }
                            field: 'x_1998335_health_l_completed_by'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ab7953015acd4638a3639acdbf9477d8'
                        key: {
                            list_id: {
                                id: '8541925f135e44eab1138f9010ae0db8'
                                key: {
                                    name: 'x_1998335_health_l_alert'
                                    view: {
                                        id: '55fccac931ff4f13bc8bc14304a95d79'
                                        key: {
                                            name: 'default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_1998335_health_l_days_before_expiry'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'acb0409a81104a8889552fecfe2aec51'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'x_1998335_health_l_purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'af77316a7e5a42598b9a10a851adfe22'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_file_type'
                            value: 'certificate'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b00bdfb9655b4ca4a36ead40e6f1f4a8'
                        key: {
                            list_id: {
                                id: '429b41d3565a4108bc48accd9a9e98b1'
                                key: {
                                    name: 'x_1998335_health_l_license'
                                    view: {
                                        id: 'a7d48367980b4a42b2b4a239d927aeb5'
                                        key: {
                                            name: 'default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_1998335_health_l_license_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b083c249a5474ad6827e6165dde22fd0'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_active'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'b0a2f4cded6e4a9887e10920896c603d'
                        deleted: true
                        key: {
                            application_file: 'db722f88d3454b72a44a2f9de09423b7'
                            source_artifact: '3582e4fe50d44ff2b5dd73f9715348d1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b348cd86d2f240bfb0948420f7cfd485'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_days_before_expiry'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'b35217e2988f480caca88dac40661de3'
                        key: {
                            ui_policy: {
                                id: '258f6a94235147f7802811d107663f9f'
                                key: {
                                    table: 'x_1998335_health_l_form_checklist'
                                    short_description: 'Completed At and Completed By are read-only'
                                }
                            }
                            field: 'x_1998335_health_l_completed_at'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'b460ec2a356149138b29ad55caef5b81'
                        key: {
                            ui_policy: {
                                id: '5f3549d863e144739ad1b31e9d41efa1'
                                key: {
                                    table: 'x_1998335_health_l_license'
                                    short_description: 'Computed fields are read-only'
                                }
                            }
                            field: 'x_1998335_health_l_checklist_pct'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b840e5e765bf40d4962a80ba48bdf660'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_license_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba3af8a15b5047198d83dcc8e3d744f6'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_facility_id'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bb1118b5f2994f1da68579e160506f4d'
                        key: {
                            sys_security_acl: '8a5081d69d2a4ca8b3e8d720d345a0fe'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bb29d2395f1842539a4322e77b370180'
                        key: {
                            sys_security_acl: '551cda40ac6d4da78765713e899066d8'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'bddcf31d05d84485ac045d78e8918b27'
                        key: {
                            list_id: {
                                id: '429b41d3565a4108bc48accd9a9e98b1'
                                key: {
                                    name: 'x_1998335_health_l_license'
                                    view: {
                                        id: 'b059771eb3394df895e21fba8711c51a'
                                        key: {
                                            name: 'default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_1998335_health_l_license_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bedc56eee7814fd09938e2f7d36a8044'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_address'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bf773830bb924a9dbbcdc170fb99981e'
                        key: {
                            sys_security_acl: 'd800384ffb2b44819b1f06d8c50dbd4a'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c1d04739eb9f4f668ae6fff52065104b'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'x_1998335_health_l_purpose'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c292a1f1eaeb4de89c670bdf462e911f'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_facility_type'
                            value: 'dialysis_center'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c376999e1ecd489998898c44d4e507d8'
                        key: {
                            sys_security_acl: '76d16082928c4834a61c5c469557c3b2'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c437e128a953428b9769cab5cf207c91'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_changed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c639f534654e42589dc396658e6a44ff'
                        key: {
                            list_id: {
                                id: '429b41d3565a4108bc48accd9a9e98b1'
                                key: {
                                    name: 'x_1998335_health_l_license'
                                    view: {
                                        id: '2ef24842f7e54df78bb1bb547f773507'
                                        key: {
                                            name: 'default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_1998335_health_l_days_before_expiry'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c8a4d7c7094748bcb265551e426a8457'
                        key: {
                            sys_security_acl: 'd0978d0d9b1642bb8d464c307be3de36'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ccff0e082207437c9b42b65f82ad8216'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_license_type'
                            value: 'doh_lto_main'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd8b7b1672f9419baf47bbff3fca70c9'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_attachment_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ce877259e3b9430d8f2d024ee2690f63'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_license_type'
                            value: 'olrs_pharmacy'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd1e5945faf9849e6baed96c9dcaec19d'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_license_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd45ddd93edb44810bda881d6fe1fe9cf'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_notes'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd46493b7f8c6474b817542d309e91a79'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_renewal_stage'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                        key: {
                            name: 'x_1998335_health_l.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd4cf3304df244eca816ac01428eab923'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_facility_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'd5224c59d743465b808d15beab49feaf'
                        key: {
                            endpoint: 'x_1998335_health_l_lto_dashboard.do'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd566c1738c3b46b4875e265c46ef0872'
                        key: {
                            sys_security_acl: '551cda40ac6d4da78765713e899066d8'
                            sys_user_role: {
                                id: '99d98d11f03d43689597be815ceeb245'
                                key: {
                                    name: 'x_1998335_health_l.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd5fe7d53324b4d799224d73109cfbc52'
                        key: {
                            list_id: {
                                id: '429b41d3565a4108bc48accd9a9e98b1'
                                key: {
                                    name: 'x_1998335_health_l_license'
                                    view: {
                                        id: '4b77750b7c0e4634a6a7375cc466773b'
                                        key: {
                                            name: 'default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_1998335_health_l_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd66a6c04d2b249c3bb061977fd63b505'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'd70c93f4caf84150abd54fda7ce0feb3'
                        key: {
                            name: 'x_1998335_health_l/____insertStyle'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd7cde648760e44e09498f88c5783999f'
                        key: {
                            name: 'x_1998335_health_l_facility'
                            element: 'x_1998335_health_l_facility_type'
                            value: 'clinical_lab'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'd92d0ab9d5fd414db44892c600922461'
                        deleted: true
                        key: {
                            application_file: 'e38579c4aa3249edb7ff6cf8bd5a9f00'
                            source_artifact: '3582e4fe50d44ff2b5dd73f9715348d1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd957824e5eba41c18727097c3a13c260'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'db722f88d3454b72a44a2f9de09423b7'
                        key: {
                            endpoint: 'x_1998335_health_l_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dbcdf336b9b94964af310e517f1e0803'
                        key: {
                            sys_security_acl: '9c0df6102e13454a91d66f58de9ce7fb'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e1e93fe527c3447087149ab020d2f3ff'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_changed_at'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'e38579c4aa3249edb7ff6cf8bd5a9f00'
                        key: {
                            name: 'x_1998335_health_l/main.js.map'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7717a15b355420b9f6dc839ec84c12a'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'x_1998335_health_l_completed_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7f3e0f5629c4e938c8f9b1c061c2e67'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_days_before_expiry'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eaa6bfcec2a64ae285243feb581c0bce'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_issue_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'eaa726c684fc4a519eab486ff5e9d019'
                        key: {
                            ui_policy: {
                                id: '5f3549d863e144739ad1b31e9d41efa1'
                                key: {
                                    table: 'x_1998335_health_l_license'
                                    short_description: 'Computed fields are read-only'
                                }
                            }
                            field: 'x_1998335_health_l_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'edb957a12a524cf7a441760e524309ad'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_issue_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1b297d44c574f5f8374484e132026cb'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f382da532ba247fca21dec3eb9f8f154'
                        key: {
                            name: 'x_1998335_health_l_facility'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4db1b2c2da2497da37d91fddbc88b08'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_license_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f4e9cb34ed3343e183924f6d9bf27510'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f59b6da0b0454736a7c5d86ce671314f'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'x_1998335_health_l_completed_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f5b0779bf83a4afca429a0e77ea3cc29'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_renewal_stage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8c37a5607c74d858f48fc7c5eee4a27'
                        key: {
                            name: 'x_1998335_health_l_license'
                            element: 'x_1998335_health_l_license_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f9d5c9f1834d45d5a26ae0adb4aed66f'
                        key: {
                            sys_security_acl: 'a577319decc6468ebd6b4c2ed80a141e'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f9d962eeb5064fd69b7c07a3eddd2a0e'
                        key: {
                            list_id: {
                                id: '429b41d3565a4108bc48accd9a9e98b1'
                                key: {
                                    name: 'x_1998335_health_l_license'
                                    view: {
                                        id: '98b275e885784e0f9779b5692b3e7392'
                                        key: {
                                            name: 'default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_1998335_health_l_expiry_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa3a9faa2c454061b201531f61fd3760'
                        key: {
                            name: 'x_1998335_health_l_evidence_file'
                            element: 'x_1998335_health_l_file_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'fa47b89d180b462995abf1051011a182'
                        key: {
                            list_id: {
                                id: '8541925f135e44eab1138f9010ae0db8'
                                key: {
                                    name: 'x_1998335_health_l_alert'
                                    view: {
                                        id: 'edd070443e81431a9f052d30be63b5a8'
                                        key: {
                                            name: 'default'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'x_1998335_health_l_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd7746d6fded46ffa9ac0b799fb19d21'
                        key: {
                            name: 'x_1998335_health_l_audit_log'
                            element: 'x_1998335_health_l_new_value'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ff1215122567419b871cef9f7c9c5586'
                        key: {
                            name: 'x_1998335_health_l_alert'
                            element: 'x_1998335_health_l_channel'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ff1e4620f90542ae940c34114c729df7'
                        key: {
                            sys_security_acl: 'd588d05eeb2847fc959a8db72d271f7b'
                            sys_user_role: {
                                id: 'd4bb24c4a30d4ad4891c1c5efd398144'
                                key: {
                                    name: 'x_1998335_health_l.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ff2166251f2744c5b97c0c9117f0b41f'
                        key: {
                            name: 'x_1998335_health_l_form_checklist'
                            element: 'x_1998335_health_l_form_name'
                        }
                    },
                ]
            }
        }
    }
}
