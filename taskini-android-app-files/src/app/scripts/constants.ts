export const constants = {
    /**
     * checkList_settings
     * @property database_id       - 
     */
    checkList_settings: {
        "database_id": "64859a8a0f0d3120f7f0dc48"
    },
    /**
     * Settings
     */
    Settings: {}
};
export const routes = {
    "Settings": "settings",
    "CreateNewTask": "createnewtask",
    "AllTasks": "alltasks",
    "OrderBy": "orderby",
    "ModifyTask": "modifytask",
    "Notif": "notif",
    "ProfileConfig": "profileconfig",
};
export const pushSettings = {
    appID: '0b7d2f0c-652d-41ca-bbff-8aebd79708d1',
    baseUrl: 'https://api.appery.io/rest/push/reg',
    baseSendUrl: 'https://api.appery.io/rest/push/msg',
    initOptions: {}
};
export const projectInfo = {
    guid: '0b7d2f0c-652d-41ca-bbff-8aebd79708d1',
    name: 'hg',
    description: ''
};
export const IGNORED_VALUE = Symbol.for("AIO_REST_IGNORED_VALUE");