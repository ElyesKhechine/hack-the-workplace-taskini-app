import {
    Component
} from '@angular/core';
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    ViewChild
} from '@angular/core';
import {
    ExportedClass as ReminderService
} from '../scripts/custom/ReminderService';
import * as moment from 'moment';
import {
    $aio_empty_object
} from '../scripts/interfaces';
@Component({
    templateUrl: 'CreateNewTask.html',
    selector: 'page-create-new-task',
    styleUrls: ['CreateNewTask.css', 'CreateNewTask.scss']
})
export class CreateNewTask {
    public title: string;
    public reminderId: string;
    public reminderData: any;
    public time: string;
    public description: string;
    public timeFormat: boolean;
    public aioChangeDetector: ChangeDetectorRef;
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable?, isSelected?) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    public __isPropertyInMapping(_currentItem, property) {
        return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
    }
    public __setMapping(data: any = {}, keyName: string, propName?: string): void {
        const changes = data.detail || {};
        if (propName) {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        } else {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
        this.$aio_changeDetector.detectChanges();
    }
    public __bindedMethods: any = {};
    @ViewChild('j_128', {
        static: false
    }) public j_128;
    @ViewChild('j_132', {
        static: false
    }) public j_132;
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public reminderService: ReminderService) {
        this.timeFormat = true;
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ionViewWillEnter() {
        this.pageIonViewWillEnter__j_121();
    }
    async pageIonViewWillEnter__j_121(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        this.timeFormat = await this.Apperyio.data.getStorage("timeFormat");
    }
    async savebuttonClick__j_143(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        if (this.time) {
            // checking reminder time
            const taskDueDateTime = moment(this.time)
                .set({
                    year: this.reminderData.currentDate.getFullYear(),
                    month: this.reminderData.currentDate.getMonth(),
                    date: this.reminderData.currentDate.getDate(),
                    second: 0
                });
            if (!taskDueDateTime.isSameOrAfter(new Date())) {
                this.Apperyio.getController("ToastController").create({
                    message: 'Task can not be created with a reminder in the past. Please, update reminder time.',
                    color: 'danger',
                    duration: 3000,
                    position: 'middle'
                }).then(toast => toast.present());
                return;
            }
            this.reminderId = await this.reminderService.setReminder(this.title, this.description, taskDueDateTime.toISOString());
        } else {
            this.reminderId = null;
        }
        this.Apperyio.execDataService(this, "createTask");
        event.target.disabled = true;
    }
    private $aio_dataServices = {
        "createTask": "invokeService_createTask"
    }
    invokeService_createTask(cb?: Function) {
        this.Apperyio.getService("checkList_tasks_create_service").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {};
                let params = {};
                let headers = {};
                let __aio_tmp_val__: any;
                this.$aio_changeDetector.detectChanges();
                data = this.$aio_mappingHelper.updateData(data, ["isDone"], false);
                /* Mapping */
                data = this.$aio_mappingHelper.updateData(data, ["taskName"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_128', 'ionic5inputitem', 'value'));
                data = this.$aio_mappingHelper.updateData(data, ["taskDescription"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_132', 'ionic5inputitem', 'value'));
                data = this.$aio_mappingHelper.updateData(data, ["taskDueDate"], ((value) => {
                    if (value) {
                        return moment(value)
                            .set({
                                year: this.reminderData.currentDate.getFullYear(),
                                month: this.reminderData.currentDate.getMonth(),
                                date: this.reminderData.currentDate.getDate(),
                                second: 0
                            }).toISOString();
                    } else {
                        return this.reminderData.currentDate.toISOString();
                    }
                })(this.$aio_mappingHelper.getSubdata(this.time, [])));
                data = this.$aio_mappingHelper.updateData(data, ["userDeviceID"], __aio_tmp_val__ = this.$aio_mappingHelper.getServiceDataValue("deviceID", []));
                data = this.$aio_mappingHelper.updateData(data, ["reminderId"], this.$aio_mappingHelper.getSubdata(this.reminderId, []));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        /* Run TypeScript */
                        // close the modal with data to update tasks on the page
                        this.Apperyio.getController("ModalController").dismiss({
                            action: "ok",
                            data: res,
                        });
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
}