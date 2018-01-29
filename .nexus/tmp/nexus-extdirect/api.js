Ext.namespace( 'NX.direct.api');
Ext.namespace( 'NX.direct');

NX.direct.api.PROVIDER_BASE_URL=window.location.protocol + '//' + window.location.host + '/' + (window.location.pathname.split('/').length>2 ? window.location.pathname.replace(/^\/|\/$/g, '') + '/' : '')  + 'service/extdirect';

NX.direct.api.POLLING_URLS = {
  rapture_State_get : NX.direct.api.PROVIDER_BASE_URL + '/poll/rapture_State_get' , 
  coreui_Repository_readStatus : NX.direct.api.PROVIDER_BASE_URL + '/poll/coreui_Repository_readStatus' 
}

NX.direct.api.REMOTING_API = {
  url: NX.direct.api.PROVIDER_BASE_URL,
  type: 'remoting',
  namespace: NX.direct,
  actions: {
    nuget_NuGetApiKey: [
      {
        name: 'readKey',
        len: 1,
        formHandler: false
      },
      {
        name: 'resetKey',
        len: 1,
        formHandler: false
      }
    ],
    coreui_Webhook: [
      {
        name: 'listWithTypeRepository',
        len: 0,
        formHandler: false
      },
      {
        name: 'listWithTypeGlobal',
        len: 0,
        formHandler: false
      }
    ],
    capability_Capability: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'enable',
        len: 1,
        formHandler: false
      },
      {
        name: 'disable',
        len: 1,
        formHandler: false
      },
      {
        name: 'updateNotes',
        len: 1,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      },
      {
        name: 'create',
        len: 1,
        formHandler: false
      },
      {
        name: 'readTypes',
        len: 0,
        formHandler: false
      },
      {
        name: 'remove',
        len: 1,
        formHandler: false
      }
    ],
    coreui_Role: [
      {
        name: 'readFromSource',
        len: 1,
        formHandler: false
      },
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'readReferences',
        len: 0,
        formHandler: false
      },
      {
        name: 'readSources',
        len: 0,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      },
      {
        name: 'create',
        len: 1,
        formHandler: false
      },
      {
        name: 'remove',
        len: 1,
        formHandler: false
      }
    ],
    rapture_State: [
    ],
    coreui_Blobstore: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'defaultWorkDirectory',
        len: 0,
        formHandler: false
      },
      {
        name: 'create',
        len: 1,
        formHandler: false
      },
      {
        name: 'readTypes',
        len: 0,
        formHandler: false
      },
      {
        name: 'remove',
        len: 1,
        formHandler: false
      }
    ],
    analytics_Settings: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      }
    ],
    migration_Assistant: [
      {
        name: 'cancel',
        len: 0,
        formHandler: false
      },
      {
        name: 'prepare',
        len: 0,
        formHandler: false
      },
      {
        name: 'abort',
        len: 0,
        formHandler: false
      },
      {
        name: 'finish',
        len: 0,
        formHandler: false
      },
      {
        name: 'configure',
        len: 1,
        formHandler: false
      },
      {
        name: 'done',
        len: 0,
        formHandler: false
      },
      {
        name: 'sync',
        len: 0,
        formHandler: false
      },
      {
        name: 'syncStatus',
        len: 0,
        formHandler: false
      },
      {
        name: 'stopWaiting',
        len: 0,
        formHandler: false
      },
      {
        name: 'connect',
        len: 3,
        formHandler: false
      },
      {
        name: 'status',
        len: 0,
        formHandler: false
      }
    ],
    coreui_Component: [
      {
        name: 'readAsset',
        len: 2,
        formHandler: false
      },
      {
        name: 'readAssets',
        len: 1,
        formHandler: false
      },
      {
        name: 'read',
        len: 1,
        formHandler: false
      },
      {
        name: 'readComponentAssets',
        len: 1,
        formHandler: false
      },
      {
        name: 'deleteComponent',
        len: 2,
        formHandler: false
      },
      {
        name: 'previewAssets',
        len: 1,
        formHandler: false
      },
      {
        name: 'deleteAsset',
        len: 2,
        formHandler: false
      },
      {
        name: 'readComponent',
        len: 2,
        formHandler: false
      }
    ],
    coreui_Task: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'stop',
        len: 1,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      },
      {
        name: 'create',
        len: 1,
        formHandler: false
      },
      {
        name: 'readTypes',
        len: 0,
        formHandler: false
      },
      {
        name: 'run',
        len: 1,
        formHandler: false
      },
      {
        name: 'remove',
        len: 1,
        formHandler: false
      }
    ],
    outreach_Outreach: [
      {
        name: 'readStatus',
        len: 0,
        formHandler: false
      }
    ],
    healthcheck_Info: [
      {
        name: 'read',
        len: 1,
        formHandler: false
      }
    ],
    coreui_DatabaseFreeze: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      }
    ],
    coreui_Selector: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'readReferences',
        len: 0,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      },
      {
        name: 'create',
        len: 1,
        formHandler: false
      },
      {
        name: 'remove',
        len: 1,
        formHandler: false
      }
    ],
    coreui_User: [
      {
        name: 'read',
        len: 1,
        formHandler: false
      },
      {
        name: 'readAccount',
        len: 0,
        formHandler: false
      },
      {
        name: 'readSources',
        len: 0,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      },
      {
        name: 'create',
        len: 1,
        formHandler: false
      },
      {
        name: 'updateRoleMappings',
        len: 1,
        formHandler: false
      },
      {
        name: 'updateAccount',
        len: 1,
        formHandler: false
      },
      {
        name: 'remove',
        len: 2,
        formHandler: false
      },
      {
        name: 'changePassword',
        len: 3,
        formHandler: false
      }
    ],
    coreui_HttpSettings: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      }
    ],
    rapture_LogEvent: [
      {
        name: 'recordEvent',
        len: 1,
        formHandler: false
      }
    ],
    rapture_Security: [
      {
        name: 'authenticate',
        len: 2,
        formHandler: false
      },
      {
        name: 'getUser',
        len: 0,
        formHandler: false
      },
      {
        name: 'getPermissions',
        len: 0,
        formHandler: false
      },
      {
        name: 'authenticationToken',
        len: 2,
        formHandler: false
      }
    ],
    licensing_Licensing: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'readLicenseUsers',
        len: 0,
        formHandler: false
      },
      {
        name: 'uninstall',
        len: 1,
        formHandler: false
      },
      {
        name: 'install',
        len: 1,
        formHandler: true
      }
    ],
    logging_Loggers: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      },
      {
        name: 'reset',
        len: 0,
        formHandler: false
      },
      {
        name: 'remove',
        len: 1,
        formHandler: false
      }
    ],
    migration_Repository: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'defaults',
        len: 0,
        formHandler: false
      }
    ],
    analytics_Events: [
      {
        name: 'exportAll',
        len: 0,
        formHandler: false
      },
      {
        name: 'read',
        len: 1,
        formHandler: false
      },
      {
        name: 'submit',
        len: 1,
        formHandler: false
      },
      {
        name: 'clear',
        len: 0,
        formHandler: false
      }
    ],
    migration_Progress: [
      {
        name: 'read',
        len: 1,
        formHandler: false
      },
      {
        name: 'detail',
        len: 1,
        formHandler: false
      }
    ],
    audit_Audit: [
      {
        name: 'read',
        len: 1,
        formHandler: false
      },
      {
        name: 'clear',
        len: 0,
        formHandler: false
      }
    ],
    coreui_Search: [
      {
        name: 'read',
        len: 1,
        formHandler: false
      }
    ],
    healthcheck_Status: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'enableAll',
        len: 1,
        formHandler: false
      },
      {
        name: 'update',
        len: 3,
        formHandler: false
      },
      {
        name: 'readForRepository',
        len: 1,
        formHandler: false
      }
    ],
    coreui_AnonymousSettings: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      }
    ],
    coreui_Privilege: [
      {
        name: 'read',
        len: 1,
        formHandler: false
      },
      {
        name: 'readReferences',
        len: 0,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      },
      {
        name: 'create',
        len: 1,
        formHandler: false
      },
      {
        name: 'readTypes',
        len: 0,
        formHandler: false
      },
      {
        name: 'remove',
        len: 1,
        formHandler: false
      }
    ],
    ldap_LdapServer: [
      {
        name: 'verifyLogin',
        len: 3,
        formHandler: false
      },
      {
        name: 'verifyConnection',
        len: 1,
        formHandler: false
      },
      {
        name: 'verifyUserMapping',
        len: 1,
        formHandler: false
      },
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'readTemplates',
        len: 0,
        formHandler: false
      },
      {
        name: 'readReferences',
        len: 0,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      },
      {
        name: 'create',
        len: 1,
        formHandler: false
      },
      {
        name: 'clearCache',
        len: 0,
        formHandler: false
      },
      {
        name: 'changeOrder',
        len: 1,
        formHandler: false
      },
      {
        name: 'remove',
        len: 1,
        formHandler: false
      }
    ],
    ssl_Certificate: [
      {
        name: 'details',
        len: 1,
        formHandler: false
      },
      {
        name: 'retrieveFromHost',
        len: 3,
        formHandler: false
      }
    ],
    atlas_SupportZip: [
      {
        name: 'create',
        len: 1,
        formHandler: false
      }
    ],
    proui_Database: [
      {
        name: 'resetQuorum',
        len: 1,
        formHandler: false
      }
    ],
    ssl_TrustStore: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'create',
        len: 1,
        formHandler: false
      },
      {
        name: 'remove',
        len: 1,
        formHandler: false
      }
    ],
    coreui_Repository: [
      {
        name: 'getBrowseableFormats',
        len: 0,
        formHandler: false
      },
      {
        name: 'readReferencesAddingEntriesForAllFormats',
        len: 1,
        formHandler: false
      },
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'rebuildIndex',
        len: 1,
        formHandler: false
      },
      {
        name: 'invalidateCache',
        len: 1,
        formHandler: false
      },
      {
        name: 'readReferences',
        len: 1,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      },
      {
        name: 'create',
        len: 1,
        formHandler: false
      },
      {
        name: 'readReferencesAddingEntryForAll',
        len: 1,
        formHandler: false
      },
      {
        name: 'readRecipes',
        len: 0,
        formHandler: false
      },
      {
        name: 'remove',
        len: 1,
        formHandler: false
      }
    ],
    logging_Log: [
      {
        name: 'mark',
        len: 1,
        formHandler: false
      }
    ],
    coreui_Email: [
      {
        name: 'sendVerification',
        len: 2,
        formHandler: false
      },
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      }
    ],
    coreui_Bundle: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      }
    ],
    ahc_Component: [
      {
        name: 'getPredefinedValues',
        len: 2,
        formHandler: false
      },
      {
        name: 'analyzeAsset',
        len: 6,
        formHandler: false
      },
      {
        name: 'acceptTermsOfService',
        len: 0,
        formHandler: false
      }
    ],
    node_NodeAccess: [
      {
        name: 'nodes',
        len: 0,
        formHandler: false
      }
    ],
    coreui_RealmSettings: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      },
      {
        name: 'update',
        len: 1,
        formHandler: false
      },
      {
        name: 'readRealmTypes',
        len: 0,
        formHandler: false
      }
    ],
    atlas_SystemInformation: [
      {
        name: 'read',
        len: 0,
        formHandler: false
      }
    ]
  }
}

