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
    Tasks
} from '../scripts/interfaces';
@Component({
    templateUrl: 'AllTasks.html',
    selector: 'page-all-tasks',
    styleUrls: ['AllTasks.css', 'AllTasks.scss']
})
export class AllTasks {
    public slideOpt: any;
    public currentDeleteId: string;
    @ViewChild('slider', {
        static: false
    }) public slider: any;
    public currentTasks: Tasks;
    public allTasks: Tasks;
    public days: any;
    public currentDateISO: string;
    public currentDate: any;
    public didInit: boolean;
    @ViewChild('picker', {
        static: false
    }) public picker: any;
    public timeFormat: any;
    @ViewChild('slidingItem', {
        static: false
    }) public slidingItem: any;
    public isCurrentDateIsPastDay: boolean;
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
    async selectDateOnSlideChange(): Promise < any > {
        const activeIndex = await this.slider.getActiveIndex();
        this.selectDate(this.days[activeIndex]);
    }
    async selectDate(selectedDay, selectedDayIndex?): Promise < any > {
        // we use 'await' for waiting until sliding ends
        if (selectedDayIndex != null) {
            await this.slider.slideTo(selectedDayIndex, undefined, false);
        }
        this.currentTasks = [];
        // update the current day number
        this.currentDate.setDate(selectedDay.date);
        // update displayed tasks
        this.refreshCurrentTasks();
    }
    getDaysByMonth(month): any {
        const currentYear = this.currentDate.getFullYear();
        const daysInMonth = new Date(currentYear, month, 0).getDate();
        const days = [];
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(currentYear, month - 1, i);
            const day = {
                date: i,
                weekday: date.toLocaleDateString('en-US', {
                    weekday: 'short'
                })
            };
            days.push(day);
        }
        return (days);
    }
    initSliderOptions(initialSlideIndex): any {
        this.slideOpt = {
            loop: false,
            centeredSlides: true,
            watchOverflow: true,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 5,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 6,
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 7,
                }
            },
            updateOnWindowResize: true,
            autoplay: false,
            slidesPerView: 7,
            autoplayDisableOnInteraction: true,
            initialSlide: initialSlideIndex
        };
    }
    refreshCurrentTasks(): any {
        this.isCurrentDateIsPastDay = !moment(this.currentDate).isSameOrAfter(new Date(), 'day');
        this.currentTasks = this.allTasks.slice().filter((task) => {
            const dueDate = new Date(task.taskDueDate);
            return dueDate.getDate() === this.currentDate.getDate() && dueDate.getMonth() === this.currentDate.getMonth() && dueDate.getFullYear() === this.currentDate.getFullYear();
        });
    }
    async updateTask(updatedTask): Promise < any > {
        const allTasks = this.allTasks.slice();
        const selectedTaskIndex = allTasks.findIndex((task) => task._id === updatedTask._id);
        // replace existing task with updated
        allTasks[selectedTaskIndex] = updatedTask;
        // we need this for angular change detection
        this.allTasks = allTasks;
        // update tasks for reminders
        await this.Apperyio.data.setStorage("allTasks", this.allTasks);
        this.refreshCurrentTasks();
    }
    async toggleDone(task, event): Promise < any > {
        const isDone = !task.isDone;
        const service = await this.Apperyio.getService("checkList_tasks_update_service");
        if (!service) {
            console.log("Error. Service was not found.");
            return;
        }
        await service.execute({
            data: {
                isDone
            },
            params: {
                _id: task._id
            },
            headers: {}
        }).toPromise();
        await this.updateTask({
            ...task,
            isDone
        });
        // Update reminder according to the status of task
        if (task.reminderId && task.reminderId.length) {
            if (isDone) {
                await this.reminderService.deleteReminder(task.reminderId);
            } else {
                await this.reminderService.setReminder(task.taskName, task.taskDescription, task.taskDueDate, task.reminderId);
            }
        }
    }
    daysUpdate(event): any {
        const currentDay = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        const month = this.currentDate.getMonth() + 1;
        this.days = this.getDaysByMonth(month);
        if (month === currentMonth) {
            this.slider.slideTo(currentDay - 1);
            this.refreshCurrentTasks();
        } else {
            const initialSlideIndex = 1;
            this.slider.slideTo(0);
            this.currentDate.setDate(initialSlideIndex);
            this.refreshCurrentTasks();
        }
    }
    async timeChange(event): Promise < any > {
        const currentTask = event.target.pickerOptions.item;
        const currentTaskDueDate = moment(currentTask.taskDueDate);
        const updatedTaskDueDate = moment(event.detail.value)
            .set({
                year: currentTaskDueDate.get('year'),
                month: currentTaskDueDate.get('month'),
                date: currentTaskDueDate.get('date'),
                second: 0
            })
            .toISOString();
        if (!moment(updatedTaskDueDate).isSameOrAfter(new Date())) {
            // show ion toast alert('Task can not ne created with a reminder in the past. Please, update reminder time.');
            this.Apperyio.getController("ToastController").create({
                message: 'Task can not be updated with a reminder in the past. Please, update reminder time.',
                color: 'danger',
                duration: 3000,
                position: 'middle'
            }).then(toast => toast.present());
        } else {
            const reminderId = await this.reminderService.updateReminder(currentTask.reminderId, currentTask.taskName, currentTask.taskDescription, updatedTaskDueDate);
            const service = await this.Apperyio.getService("checkList_tasks_update_service");
            if (!service) {
                console.log("Error. Service was not found.");
                return;
            }
            await service.execute({
                data: {
                    taskDueDate: updatedTaskDueDate,
                    reminderId
                },
                params: {
                    _id: event.target.pickerOptions.id
                },
                headers: {}
            }).toPromise();
            await this.updateDueDate(currentTask, updatedTaskDueDate, reminderId);
        }
        if (this.slidingItem.el.parentElement) {
            this.slidingItem.el.parentElement.closeOpened();
        }
    }
    async updateDueDate(currentTask, taskDueDate, reminderId): Promise < any > {
        if (currentTask) {
            this.updateTask({
                ...currentTask,
                taskDueDate,
                reminderId
            });
        }
    }
    async deleteTaskAction(currentItem): Promise < any > {
        const sliding = this.slidingItem.el.parentElement;
        const controller = this.Apperyio.getController("AlertController");
        const alert = await controller.create({
            cssClass: 'alert-component',
            header: 'Confirm deletion',
            message: ' Are you sure you want to permanently remove this task? ',
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                    if (sliding) {
                        sliding.closeOpened();
                    }
                }
            }, {
                text: 'Delete',
                cssClass: 'text-color-red',
                handler: (alertData) => {
                    const reminderId = currentItem.itemData.reminderId;
                    this.currentDeleteId = currentItem.itemData._id;
                    this.invokeService_deleteTask();
                    if (sliding) {
                        sliding.closeOpened();
                    }
                    //Delete reminder
                    if (reminderId && reminderId.length) {
                        this.reminderService.deleteReminder(reminderId);
                    }
                }
            }]
        });
        (await alert).present();
    }
    async updateReminderTaskAction(currentItem): Promise < any > {
        this.picker.pickerOptions = {
            id: currentItem.itemData._id,
            item: currentItem.itemData
        };
        this.picker.open();
    }
    async showLoading(): Promise < any > {
        const loading = await this.Apperyio.getController("LoadingController").create({
            spinner: 'crescent',
            cssClass: 'waiting-spinner'
        });
        loading.present();
    }
    hideLoading(): any {
        this.Apperyio.getController("LoadingController").dismiss();
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public reminderService: ReminderService) {
        this.slideOpt = {};
        this.currentTasks = [];
        this.allTasks = [];
        this.days = [];
        this.didInit = false;
        this.timeFormat = '12';
        this.isCurrentDateIsPastDay = false;
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ngOnInit() {
        this.pageNgOnInit__j_0();
    }
    ionViewWillEnter() {
        this.pageIonViewWillEnter__j_0();
    }
    ionViewDidEnter() {
        this.pageIonViewDidEnter__j_0();
    }
    async pageIonViewWillEnter__j_0(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        // init time format for pipe
        this.timeFormat = await this.Apperyio.data.getStorage("timeFormat");
    }
    async pageNgOnInit__j_0(event?, currentItem?) {
        let mappingData: any = {};
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        this.currentDate = new Date();
        // datetime takes values as ISO date string
        this.currentDateISO = this.currentDate.toISOString();
        const days = this.getDaysByMonth(this.currentDate.getMonth() + 1);
        // used for *ngFor of slider
        this.days = days;
        // init slider options
        const initialSlideIndex = this.currentDate.getDate() - 1;
        this.initSliderOptions(initialSlideIndex);
        /* Invoke data service */
        this.invokeService_getAllTasks();
        /* Mapping */
        (() => {
            let mappingDataj_23 = typeof mappingData.j_23 === "function"?
            mappingData.j_23(): [];
            mappingData.j_23 = () => {
                let parentArray = this.$aio_mappingHelper.getSubdata(this.currentTasks, [], []);
                mappingDataj_23.splice(parentArray.length);
                parentArray.forEach((v, i) => {
                    mappingDataj_23[i] = mappingDataj_23[i] || {};
                    let result__j_23: any = mappingDataj_23[i];
                    result__j_23.itemData = v;
                    result__j_23.itemDataParent = parentArray;
                });
                return mappingDataj_23;
            };
        })();
        /* Run TypeScript */
        this.didInit = true;
        this.mappingData = { ...this.mappingData,
            ...mappingData
        };
    }
    async pageIonViewDidEnter__j_0(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        // Update calculation of slides to set correct view on devices
        this.slider.update();
    }
    async menubuttonClick__j_6(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigation.forward('Settings');
    }
    async menubuttondarkClick__j_7(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigation.forward('Settings');
    }
    async currentmonthdatetimeIonChange__j_12(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        this.currentDate = new Date(this.currentDateISO);
        this.daysUpdate(event);
    }
    async deleteitemoptionsIonSwipe__j_34(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        this.deleteTaskAction(currentItem);
    }
    async deleteitemoptionClick__j_35(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        this.deleteTaskAction(currentItem);
    }
    async clockitemoptionsIonSwipe__j_36(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        if (!this.isCurrentDateIsPastDay) {
            this.updateReminderTaskAction(currentItem);
        }
    }
    async clockitemoptionClick__j_37(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigation.forward('ModifyTask');
    }
    async createbuttonClick__j_41(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        if (!this.isCurrentDateIsPastDay) {
            this.Apperyio.showModal("CreateNewTask", {
                    componentProps: {
                        reminderData: {
                            currentDate: this.currentDate
                        }
                    },
                    showBackdrop: true,
                    backdropDismiss: true,
                    cssClass: 'modal-custom',
                    animated: true,
                    keyboardClose: true,
                    swipeToClose: true,
                })
                .then(modal => {
                    modal.present();
                    modal.onDidDismiss().then(({
                        data
                    }) => {
                        if (data && data.action === 'ok') {
                            this.Apperyio.execDataService(this, "getAllTasks");
                        }
                    });
                });
        }
    }
    private $aio_dataServices = {
        "getAllTasks": "invokeService_getAllTasks",
        "deleteTask": "invokeService_deleteTask"
    }
    invokeService_getAllTasks(cb?: Function) {
        this.Apperyio.getService("checkList_tasks_list_service").then(
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
                /* Run TypeScript */
                await this.showLoading();
                /* Mapping */
                params = this.$aio_mappingHelper.updateData(params, ['where'], ((value) => {
                    value = value || 'not_specified';
                    return JSON.stringify({
                        userDeviceID: value
                    });
                })(__aio_tmp_val__ = this.$aio_mappingHelper.getServiceDataValue("deviceID", [])));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        this.allTasks = this.$aio_mappingHelper.updateData(this.allTasks, [], this.$aio_mappingHelper.getSubdata(res, []));
                        /* Run TypeScript */
                        // store tasks for reminders
                        await this.Apperyio.data.setStorage("allTasks", this.allTasks);
                        // update displayed tasks
                        this.refreshCurrentTasks();
                        this.hideLoading();
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    /* onerror */
                    async (err: any) => {
                        /* Run TypeScript */
                        this.hideLoading();
                    }
                )
            }
        );
    }
    invokeService_deleteTask(cb?: Function) {
        this.Apperyio.getService("checkList_tasks_delete_service").then(
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
                /* Mapping */
                params = this.$aio_mappingHelper.updateData(params, ['_id'], this.$aio_mappingHelper.getSubdata(this.currentDeleteId, []));
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        /* Invoke data service */
                        this.invokeService_getAllTasks();
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