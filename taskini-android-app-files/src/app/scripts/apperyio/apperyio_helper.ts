import {
    Injectable,
    Injector
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    ActionSheetController,
    AlertController,
    PickerController,
    MenuController,
    ModalController,
    PopoverController,
    LoadingController,
    ToastController,
    Platform
} from '@ionic/angular';
import {
    routes,
    projectInfo
} from '../constants';
import {
    EntityApiService
} from './entityapi_service';
import {
    ApperyioDataHelperService
} from './apperyio_data_helper';
import {
    ApperyioNativeHelperService
} from './apperyio_native_helper';
import {
    ApperyioPreloadHelperService
} from './apperyio_preload_helper';
import {
    ApperyioThemeHelperService
} from './apperyio_theme_helper';
import {
    ApperyioHotPushHelperService
} from './apperyio_hot_push_helper';
import {
    ApperyioDateTimeHelperService
} from './apperyio_datetime_helper';
import {
    ApperyioConfigService
} from './config_service';
import {
    ModalScreensService
} from './modal_screens_service';
import {
    DomSanitizer
} from '@angular/platform-browser';
import {
    ApperyioNavigationHelperService
} from './apperyio_navigation_helper';
import {
    ApperyioSocialLoginHelperService
} from './apperyio_social_login_helper';
import {
    TranslateService // Connected if Internationalization is enabled in App settings
} from '@ngx-translate/core';
import _ from "lodash";
interface Controllers {
    actionSheetController: ActionSheetController,
        alertController: AlertController,
        pickerController: PickerController,
        menuController: MenuController,
        modalController: ModalController,
        popoverController: PopoverController,
        loadingController: LoadingController,
        toastController: ToastController
}
@Injectable()
export class ApperyioHelperService {
    private servicesMap: {
        [name: string]: any
    };
    private _services: {
        [name: string]: any
    } = {};
    private controllers: Controllers = < Controllers > {};
    public projectInfo = projectInfo;
    public vars: {
        [name: string]: any
    } = {};
    constructor(
        private injector: Injector,
        private router: Router,
        private entityAPI: EntityApiService,
        private modalScreensSrv: ModalScreensService,
        private sanitizer: DomSanitizer,
        public data: ApperyioDataHelperService,
        public native: ApperyioNativeHelperService,
        public preload: ApperyioPreloadHelperService,
        public theme: ApperyioThemeHelperService,
        public user: ApperyioSocialLoginHelperService,
        public hotPush: ApperyioHotPushHelperService,
        public dateTime: ApperyioDateTimeHelperService,
        public platform: Platform,
        public navigation: ApperyioNavigationHelperService,
        public config: ApperyioConfigService,
        public translate: TranslateService
    ) {
        this._addSourcesErrorCheck();
        this._disableDefaultSanitizer();
        ( < any > window)._ = _;
    }
    /** 
     * for preview add check when preview sources are unavailable (when app was changed and rebuild is needed)
     */
    private _addSourcesErrorCheck() {
        if (window.location.href.includes("appery.io/app/view/")) { // it's preview
            var id = "aio_reload_popup_" + ("" + Math.random()).substring(3, 10),
                popupHTML = `<style>.disablepagediv {z-index: 9999999999;position: absolute;top: 0;left: 0;bottom:0;right:0;background-color: rgba(0,0,0,0.5);}.masterpopup {width: 270px;position: absolute;color: #000000;background-color: #ffffff;top: 100px;left: 50%;margin-left: -135px;border: 1px solid rgb(124, 153, 193);font-size:16px;}</style><div id="popDiv" class="disablepagediv"><div class="masterpopup"><div style="height:25px;line-height:25px;background-color:var(--ion-color-primary, #3880ff);color:var(--ion-color-primary-contrast, #ffffff);padding-left:10px;">Warning!</div><div style="padding:20px;text-align:center;">Sources loading failed. Probably app was changed. Reload app?<br/><br/><input type="button" style="margin:5px" onClick="document.getElementById('${id}').remove()" value="Cancel" /><input type="button" style="margin:5px" onClick="window.location.reload()" value="OK" /></div></div></div>`;
            var errorFn = console.error;
            console.error = function(err) {
                var isChunkLoadError = false;
                for (var i = 0; i < arguments.length; i++) {
                    var err = arguments[i];
                    if (err && (
                            err.name === "ChunkLoadError" ||
                            err.message && err.message.indexOf &&
                            (/Loading chunk ?.+ failed/.test(err.message) || err.message.indexOf("ChunkLoadError") !== -1)
                        )) {
                        isChunkLoadError = true;
                        break;
                    }
                }
                if (isChunkLoadError) {
                    if (!document.getElementById(id)) {
                        var div = document.createElement("div");
                        div.id = id;
                        div.innerHTML = popupHTML;
                        document.body.append(div);
                        document.documentElement.classList.add("hydrated");
                    }
                }
                errorFn.apply(console, arguments);
            }
        }
    }
    /** 
     * DompurifySanitizer is used in the project
     */
    private _disableDefaultSanitizer() {
        this.sanitizer.bypassSecurityTrustResourceUrl = (val) => val;
    }
    private async _importServices() {
        let services = await
        import ('../services');
        this.servicesMap = services.services;
    }
    // router/navigation
    navigateTo(...options: any[]): Promise < any > {
        if (routes[options[0]]) {
            let url = < string > routes[options[0]];
            if (url[0] !== "." && url[0] !== "/") {
                url = "/" + url;
            }
            let optionalIndex = url.indexOf("/:");
            if (optionalIndex !== -1) {
                url = url.substring(0, optionalIndex);
            }
            options[0] = url;
        }
        return this.router.navigate(options);
    }
    getRouteParam(paramName: string) {
        return this.router.routerState.snapshot.root.firstChild.params[paramName];
    }
    getQueryParam(paramName: string) {
        return this.router.routerState.snapshot.root.queryParams[paramName];
    }
    // services
    async getService(name: string): Promise < any > {
        if (!this.servicesMap) {
            await this._importServices();
        }
        if (!this._services[name] && this.servicesMap[name]) {
            this._services[name] = this.injector.get < any > (this.servicesMap[name]);
        }
        return this._services[name];
    }
    // controllers
    getController(name: string): any {
        if (this.controllers[name]) {
            return this.controllers[name];
        }
        switch (name) {
            case "ActionSheetController":
                this.controllers[name] = this.injector.get < ActionSheetController > (ActionSheetController);
                break;
            case "AlertController":
                this.controllers[name] = this.injector.get < AlertController > (AlertController);
                break;
            case "PickerController":
                this.controllers[name] = this.injector.get < PickerController > (PickerController);
                break;
            case "MenuController":
                this.controllers[name] = this.injector.get < MenuController > (MenuController);
                break;
            case "ModalController":
                this.controllers[name] = this.injector.get < ModalController > (ModalController);
                break;
            case "PopoverController":
                this.controllers[name] = this.injector.get < PopoverController > (PopoverController);
                break;
            case "LoadingController":
                this.controllers[name] = this.injector.get < LoadingController > (LoadingController);
                break;
            case "ToastController":
                this.controllers[name] = this.injector.get < ToastController > (ToastController);
                break;
            default:
                console.log(`ApperyioService. Controller ${name} not supported`)
                return;
        }
        return this.controllers[name];
    }
    // modal
    async showModal(screenName: string, options?: any): Promise < any > {
        if (!options) {
            options = {};
        }
        if (!screenName && !options.component) {
            console.log("ApperyioService showModal method: screenName missed");
            return
        }
        if (!options.component && screenName) {
            options.component = await this.modalScreensSrv.getModalScreen(screenName);
        }
        if (!options.component) {
            console.log("ApperyioService showModal method: nonexistent modal component");
            return
        }
        options.cssClass = (options.cssClass?(options.cssClass + " "): "") + "aio_modal_" + screenName;
        const modalController = this.getController("ModalController");
        const modal = await modalController.create(options);
        return modal;
    }
    entityAPIGet(name: string, defaults?: any, default_undefined?: boolean, skip_empty_objects?: boolean): any {
        return this.entityAPI.get(name, defaults, default_undefined, skip_empty_objects);
    }
    execDataService(context: any, serviceName: string, cb?: Function): void {
        let func = context.$aio_dataServices[serviceName];
        if (func) {
            context[func](cb);
        } else {
            console.log("Service \"" + serviceName + "\" not found");
        }
    }
    async getGSNameByImpl(srv: any): Promise < string > {
        if (!srv) return;
        let srvClass = srv.constructor || srv;
        if (!this.servicesMap) {
            await this._importServices();
        }
        if (this.servicesMap) {
            let keys = Object.keys(this.servicesMap);
            for (let i = 0; i < keys.length; i++) {
                if (this.servicesMap[keys[i]] === srvClass) {
                    return keys[i];
                }
            }
        }
    }
    isAndroid(): boolean {
        return this.platform.is('android');
    }
    isIOS(): boolean {
        return this.platform.is('ios');
    }
    isMobile(): boolean {
        return this.platform.is('cordova');
    }
    isBrowser(): boolean {
        return !this.isMobile();
    }
};