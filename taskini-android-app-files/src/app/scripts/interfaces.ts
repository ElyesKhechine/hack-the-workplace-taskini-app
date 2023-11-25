import _ from "lodash";
declare global {
    interface Window {
        [key: string]: any;
    }
    interface Navigator {
        camera: any
        notification: any
        device: any
        splashscreen: any
    }
    var device, cordova, Media, StatusBar, Camera, CameraPopoverOptions, CameraPopoverHandle;
    var _: _;
}
// Appery.io models
export interface $aio_empty_object {};
//
export interface Task {
    "isDone": boolean,
    "reminderId": string,
    "description": string,
    "title": string,
    "time": any,
    "_id": string,
    "taskDueDate": any
}
export interface Tasks extends Array < Task > {}
//
interface __checkList_tasks_list_serviceResponse_sub_003 {
    "read": boolean,
    "write": boolean
}
interface __checkList_tasks_list_serviceResponse_sub_002 {
    "*": __checkList_tasks_list_serviceResponse_sub_003
}
interface __checkList_tasks_list_serviceResponse_sub_001 {
    "taskName": string,
    "_updatedAt": string,
    "acl": __checkList_tasks_list_serviceResponse_sub_002,
    "isDone": boolean,
    "taskDescription": string,
    "taskDueDate": string,
    "_createdAt": string,
    "reminderId": string,
    "_id": string
}
export interface checkList_tasks_list_serviceResponse extends Array < __checkList_tasks_list_serviceResponse_sub_001 > {}
//
interface __checkList_tasks_read_serviceResponse_sub_002 {
    "write": boolean,
    "read": boolean
}
interface __checkList_tasks_read_serviceResponse_sub_001 {
    "*": __checkList_tasks_read_serviceResponse_sub_002
}
export interface checkList_tasks_read_serviceResponse {
    "reminderId": string,
    "_createdAt": string,
    "_id": string,
    "_updatedAt": string,
    "taskDescription": string,
    "isDone": boolean,
    "taskDueDate": string,
    "acl": __checkList_tasks_read_serviceResponse_sub_001,
    "taskName": string
}
//
export interface checkList_tasks_create_serviceResponse {
    "_id": string,
    "_createdAt": string
}
//
export interface checkList_tasks_delete_serviceResponse {}
//
export interface checkList_tasks_update_serviceResponse {
    "_updatedAt": string
}