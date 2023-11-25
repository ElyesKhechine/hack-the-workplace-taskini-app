import {
    Component
} from '@angular/core';
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from './scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from './scripts/apperyio/apperyio_mapping_helper';
import {
    MenuController
} from '@ionic/angular';
import {
    NavController
} from '@ionic/angular';
import {
    Platform
} from '@ionic/angular';
import {
    ViewChild
} from '@angular/core';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    ExportedClass as ThemeService
} from './scripts/custom/ThemeService';
import {
    ExportedClass as NetworkToastService
} from './scripts/custom/NetworkToastService';
import {
    ScreenOrientation
} from '@ionic-native/screen-orientation/ngx';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    v4 as uuidv4
} from 'uuid';
import {
    $aio_empty_object
} from './scripts/interfaces';
@Component({
    templateUrl: 'app.html',
    selector: 'app-root',
    styleUrls: ['app.css', 'app.scss']
})
export class app {
    public deviceType: string = 'web-browser';
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
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menuCtrl: MenuController, public themeService: ThemeService, public screenOrientation: ScreenOrientation, public device: Device, public networkToastService: NetworkToastService) {
        this.aioChangeDetector = this.$aio_changeDetector;
        this.deviceType = window.cordova? 'mobile': 'web-browser';
        // do not remove this code unless you know what you do
        this.platform.ready().then(async () => {
            let userDeviceId = this.device.uuid? this.device.uuid: await this.Apperyio.data.getStorage("deviceID");
            this.Apperyio.data.setVariable("deviceID", userDeviceId);
            if (this.platform.is("cordova")) {
                this.screenOrientation.lock('portrait');
            }
            await this.themeService.initStatusBar();
            await this.initializeDefaultSettings();
            this.splashScreen.hide();
            if (!this.statusBar.isVisible) {
                this.statusBar.show();
            }
            console.log(`User device id: ${userDeviceId}`);
            if (userDeviceId === null) {
                userDeviceId = uuidv4();
                this.Apperyio.data.setVariable("deviceID", userDeviceId);
                await this.Apperyio.data.setStorage("deviceID", userDeviceId);
            }
            this.Apperyio.data.setVariable("isNativeDevice", this.platform.is("cordova"));
            await this.Apperyio.data.setStorage("isNativeDevice", this.platform.is("cordova"));
            this.networkToastService.init();
        });
    }
    ngOnInit(): any {
        this.themeService.initTheme();
    }
    async initializeDefaultSettings(): Promise < any > {
        if ((await this.Apperyio.data.getStorage("firstRun")) === null) {
            //initialize default settings values during app first run
            await this.Apperyio.data.setStorage("reminder", true);
            await this.Apperyio.data.setStorage("firstRun", false);
        }
    }
}