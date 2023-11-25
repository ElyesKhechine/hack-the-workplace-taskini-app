import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
    FormsModule
} from '@angular/forms';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    IonicModule
} from '@ionic/angular';
import {
    IonicStorageModule
} from '@ionic/storage';
import {
    ApperyioModule
} from './scripts/apperyio/apperyio.module';
import {
    ApperyioDeclarablesModule
} from './scripts/apperyio/declarables/apperyio.declarables.module';
import {
    PipesModule
} from './scripts/pipes.module';
import {
    DirectivesModule
} from './scripts/directives.module';
import {
    ComponentsModule
} from './scripts/components.module';
import {
    CustomComponentsModule
} from './scripts/custom-components.module';
import {
    CustomModulesModule
} from './scripts/custom-modules.module';
import {
    Sanitizer
} from '@angular/core';
import {
    NgDompurifySanitizer
} from '@tinkoff/ng-dompurify';
import {
    createTranslateLoader
} from './scripts/apperyio/translate_module';
import {
    TranslateModule
} from '@ngx-translate/core';
import {
    TranslateLoader
} from '@ngx-translate/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    app
} from './app';
import {
    AppRoutingModule
} from './app-routing.module';
import {
    CreateNewTask
} from './CreateNewTask/CreateNewTask';
import {
    ExportedClass as checkList_tasks_create_service
} from './scripts/services/checkList_tasks_create_service';
import {
    ExportedClass as checkList_tasks_read_service
} from './scripts/services/checkList_tasks_read_service';
import {
    ExportedClass as checkList_tasks_list_service
} from './scripts/services/checkList_tasks_list_service';
import {
    ExportedClass as checkList_tasks_delete_service
} from './scripts/services/checkList_tasks_delete_service';
import {
    ExportedClass as checkList_tasks_update_service
} from './scripts/services/checkList_tasks_update_service';
import {
    ExportedClass as NetworkToastService
} from './scripts/custom/NetworkToastService';
import {
    ExportedClass as ThemeService
} from './scripts/custom/ThemeService';
import {
    ExportedClass as ReminderService
} from './scripts/custom/ReminderService';
import {
    Network
} from '@ionic-native/network/ngx';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    Keyboard
} from '@ionic-native/keyboard/ngx';
import {
    ScreenOrientation
} from '@ionic-native/screen-orientation/ngx';
import {
    LocalNotifications
} from '@ionic-native/local-notifications/ngx';
import {
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
    DBConnectionInterceptor
} from './scripts/custom/DBConnectionInterceptor';
( < any > NgDompurifySanitizer.prototype)._sanitize_fn = NgDompurifySanitizer.prototype.sanitize;
NgDompurifySanitizer.prototype.sanitize = function(...args) {
    let value: any = args[1];
    if (value && value.hasOwnProperty("changingThisBreaksApplicationSecurity")) {
        args[1] = value.changingThisBreaksApplicationSecurity
    }
    return this._sanitize_fn(...args);
}
var getIonicModuleConfig, getIonicStorageModuleConfig;
@NgModule({
    declarations: [
        app, CreateNewTask
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        IonicModule.forRoot((typeof getIonicModuleConfig === "function")? getIonicModuleConfig(): undefined),
        HttpClientModule,
        ApperyioModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        ApperyioDeclarablesModule,
        CustomComponentsModule,
        CustomModulesModule,
        IonicStorageModule.forRoot((typeof getIonicStorageModuleConfig === "function")? getIonicStorageModuleConfig(): undefined),
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    bootstrap: [
        app
    ],
    entryComponents: [
        //app
        CreateNewTask
    ],
    providers: [
        StatusBar,
        SplashScreen,
        WebView,
        Device,
        Keyboard,
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
        Network,
        ScreenOrientation,
        checkList_tasks_create_service,
        checkList_tasks_read_service,
        checkList_tasks_list_service,
        checkList_tasks_delete_service,
        checkList_tasks_update_service,
        NetworkToastService,
        ThemeService,
        ReminderService,
        ScreenOrientation, LocalNotifications, {
            provide: HTTP_INTERCEPTORS,
            useClass: DBConnectionInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}