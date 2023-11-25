import {
    NgModule
} from '@angular/core';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    TranslateModule,
    TranslateLoader
} from '@ngx-translate/core';
import {
    TranslateHttpLoader
} from '@ngx-translate/http-loader';
import {
    HttpClient
} from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        HttpClientModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    exports: [
        TranslateModule
    ] 
})
export class ApperyioTranslateModule {}