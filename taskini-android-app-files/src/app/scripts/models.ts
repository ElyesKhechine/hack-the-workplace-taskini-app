/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
export var models = {
    "Task": {
        "type": "object",
        "properties": {
            "isDone": {
                "type": "boolean"
            },
            "reminderId": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "title": {
                "type": "string"
            },
            "time": {
                "type": "any"
            },
            "_id": {
                "type": "string"
            },
            "taskDueDate": {
                "type": "any"
            }
        }
    },
    "Tasks": {
        "type": "array",
        "items": [{
            "type": "Task"
        }]
    },
    "String": {
        "type": "string"
    },
    "Number": {
        "type": "number"
    },
    "Any": {
        "type": "any"
    },
    "Function": {
        "type": "Function"
    },
    "Promise": {
        "type": "Promise"
    },
    "Boolean": {
        "type": "boolean"
    },
    "Observable": {
        "type": "Observable"
    },
    "checkList_tasks_list_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tasks"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "where": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{checkList_settings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "array",
                                "items": [{
                                    "type": "object",
                                    "properties": {
                                        "taskName": {
                                            "type": "string"
                                        },
                                        "_updatedAt": {
                                            "type": "string"
                                        },
                                        "acl": {
                                            "type": "object",
                                            "properties": {
                                                "*": {
                                                    "type": "object",
                                                    "properties": {
                                                        "read": {
                                                            "type": "boolean",
                                                            "default": true
                                                        },
                                                        "write": {
                                                            "type": "boolean",
                                                            "default": true
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "isDone": {
                                            "type": "boolean",
                                            "default": null
                                        },
                                        "taskDescription": {
                                            "type": "string"
                                        },
                                        "taskDueDate": {
                                            "type": "string"
                                        },
                                        "_createdAt": {
                                            "type": "string"
                                        },
                                        "reminderId": {
                                            "type": "string"
                                        },
                                        "_id": {
                                            "type": "string"
                                        }
                                    }
                                }]
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "checkList_tasks_read_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tasks/{_id}"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{checkList_settings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "reminderId": {
                                        "type": "string"
                                    },
                                    "_createdAt": {
                                        "type": "string"
                                    },
                                    "_id": {
                                        "type": "string"
                                    },
                                    "_updatedAt": {
                                        "type": "string"
                                    },
                                    "taskDescription": {
                                        "type": "string"
                                    },
                                    "isDone": {
                                        "type": "boolean",
                                        "default": null
                                    },
                                    "taskDueDate": {
                                        "type": "string"
                                    },
                                    "acl": {
                                        "type": "object",
                                        "properties": {
                                            "*": {
                                                "type": "object",
                                                "properties": {
                                                    "write": {
                                                        "type": "boolean",
                                                        "default": true
                                                    },
                                                    "read": {
                                                        "type": "boolean",
                                                        "default": true
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "taskName": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "checkList_tasks_create_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tasks"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "taskDescription": {
                                "type": "string"
                            },
                            "userDeviceID": {
                                "type": "string"
                            },
                            "taskDueDate": {
                                "type": "string"
                            },
                            "isDone": {
                                "type": "boolean",
                                "default": null
                            },
                            "acl": {
                                "type": "object",
                                "properties": {
                                    "*": {
                                        "type": "object",
                                        "properties": {
                                            "write": {
                                                "type": "boolean",
                                                "default": true
                                            },
                                            "read": {
                                                "type": "boolean",
                                                "default": true
                                            }
                                        }
                                    }
                                }
                            },
                            "reminderId": {
                                "type": "string"
                            },
                            "taskName": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "full_object": {
                                "type": "string",
                                "default": "false"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{checkList_settings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            },
                            "_createdAt": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "checkList_tasks_delete_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tasks/{_id}"
            },
            "method": {
                "type": "string",
                "default": "delete"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{checkList_settings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {}
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "checkList_tasks_update_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/tasks/{_id}"
            },
            "method": {
                "type": "string",
                "default": "put"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "taskDescription": {
                                "type": "string"
                            },
                            "isDone": {
                                "type": "boolean",
                                "default": null
                            },
                            "reminderId": {
                                "type": "string"
                            },
                            "taskName": {
                                "type": "string"
                            },
                            "acl": {
                                "type": "object",
                                "properties": {
                                    "*": {
                                        "type": "object",
                                        "properties": {
                                            "write": {
                                                "type": "boolean",
                                                "default": true
                                            },
                                            "read": {
                                                "type": "boolean",
                                                "default": true
                                            }
                                        }
                                    }
                                }
                            },
                            "taskDueDate": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "full_object": {
                                "type": "string",
                                "default": "false"
                            },
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{checkList_settings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_updatedAt": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    }
};
/**
 * Data storage
 */
export const _aioDefStorageValues = {
    variables: {
    },
    storages: {
    }
}