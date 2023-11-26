import {
    NgModule
} from '@angular/core';
import {
    HttpClientModule,
    HttpClientJsonpModule
} from '@angular/common/http';
import {
    AppClientModule
} from "./appclient/appclient.module";
import {
    ApperyioRestService
} from './apperyio_restservice';
import {
    ApperyioConfigService
} from './config_service';
import {
    EntityApiService
} from './entityapi_service';
import {
    ApperyioHelperService
} from './apperyio_helper';
import {
    ApperyioMappingHelperService
} from './apperyio_mapping_helper';
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
    ApperyioSocialLoginHelperService
} from './apperyio_social_login_helper';
import {
    ApperyioPushHelperService
} from './apperyio_push_helper';
import {
    ApperyioHotPushHelperService
} from './apperyio_hot_push_helper';
import {
    ApperyioDateTimeHelperService
} from './apperyio_datetime_helper';
import {
    ApperyioNavigationHelperService
} from './apperyio_navigation_helper';
import {
    ModalScreensService
} from './modal_screens_service';
@NgModule({
    imports: [
        HttpClientModule,
        HttpClientJsonpModule,
        AppClientModule
    ],
    providers: [
        ApperyioRestService, ApperyioConfigService, EntityApiService, ApperyioHelperService, ApperyioMappingHelperService, ApperyioDataHelperService, ApperyioNativeHelperService, ApperyioPreloadHelperService, ApperyioThemeHelperService, ApperyioSocialLoginHelperService, ApperyioPushHelperService, ApperyioHotPushHelperService, ApperyioDateTimeHelperService, ApperyioNavigationHelperService
        , ModalScreensService
    ]
})
export class ApperyioModule {}