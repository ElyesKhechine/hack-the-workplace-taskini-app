import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApperyioHelperService } from '../apperyio/apperyio_helper';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import * as moment from 'moment';
import {Platform} from '@ionic/angular';
/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
class ReminderService {
    constructor(
        private Apperyio: ApperyioHelperService,
        private localNotifications: LocalNotifications,
        private platform: Platform
    ) {}

    async setReminder(title: string, description: string, time: string, id?: string): Promise<string> {
        const reminderId = id ? parseInt(id) : Math.floor(Math.random() * 10000);
        const reminderSettings = await this.Apperyio.data.getStorage("reminder");

        if (reminderSettings) {
            this.localNotifications.schedule({
                id: reminderId,
                title: title,
                text: description,
                foreground: true,
                trigger: {
                    at: moment(time).toDate()
                }
            });
        }
        return reminderId.toString();
    }

    async updateReminder(reminderId: string, title: string, description: string, time: string) {
        if(reminderId){
            this.deleteReminder(reminderId);
        }
        return this.setReminder(title, description, time, reminderId);
    }

    deleteReminder(reminderId: string) {
        return this.localNotifications.cancel(parseInt(reminderId));
    }

    deleteAllReminders() {
        return this.localNotifications.cancelAll();
    }

    async restoreAllReminders() {
        if(this.platform.is('cordova')) {
            const allTasks = (await this.Apperyio.data.getStorage("allTasks")).filter(task => {
                return !task.isDone;
            });
            const sheduledNotificationsIds = await this.localNotifications.getScheduledIds();
            const triggeredNotificationsIds = await this.localNotifications.getTriggeredIds();
            if (allTasks && allTasks.length) {
                allTasks.forEach(task => {
                    if(task.reminderId && sheduledNotificationsIds.indexOf(parseInt(task.reminderId)) === -1 && triggeredNotificationsIds.indexOf(parseInt(task.reminderId)) === -1) {
                        this.setReminder(task.taskName, task.taskDescription, task.taskDueDate, task.reminderId);
                    }
                });
            }
        }
    }
}

/*
    Service class should be exported as ExportedClass
*/
export {
    ReminderService as ExportedClass
};