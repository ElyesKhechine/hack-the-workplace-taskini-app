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
    ExportedClass as ThemeService
} from '../scripts/custom/ThemeService';
import {
    ExportedClass as ReminderService
} from '../scripts/custom/ReminderService';
import {
    $aio_empty_object
} from '../scripts/interfaces';
@Component({
    templateUrl: 'Settings.html',
    selector: 'page-settings',
    styleUrls: ['Settings.css', 'Settings.scss']
})
export class Settings {
    public dark: boolean;
    public timeFormat: string;
    public reminder: boolean;
    public isInitialized: boolean;
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
    async themeToggle(event): Promise < any > {
        this.dark = event.detail.checked;
        this.themeService.setTheme(this.dark);
    }
    async timeToggle(event): Promise < any > {
        this.timeFormat = event.detail.value;
        if (this.timeFormat === '12') {
            await this.Apperyio.data.setStorage("timeFormat", true);
        } else {
            await this.Apperyio.data.setStorage("timeFormat", false);
        }
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public themeService: ThemeService, public reminderService: ReminderService) {
        this.dark = false;
        this.timeFormat = '12h';
        this.reminder = false;
        this.isInitialized = false;
        this.aioChangeDetector = this.$aio_changeDetector;
        this.initializeSettings();
    }
    async initializeSettings(): Promise < any > {
        this.dark = await this.Apperyio.data.getStorage("preferenceTheme");
        this.reminder = await this.Apperyio.data.getStorage("reminder");
        this.timeFormat = await this.Apperyio.data.getStorage("timeFormat")?
        '12': '24';
        this.isInitialized = true;
    }
    async remaindertoggleIonChange__j_61(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        await this.Apperyio.data.setStorage("reminder", event.target.checked);
        if (event.target.checked) {
            this.reminderService.restoreAllReminders();
        } else {
            this.reminderService.deleteAllReminders();
        }
    }
}