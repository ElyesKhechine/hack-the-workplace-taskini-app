import { NgModule } from '@angular/core';
import { AppClientService } from './appclient_service';
import { AppClientGenericWrapperService } from './appclient_generic_wrapper_service';

@NgModule({
    providers: [
        AppClientService,
        AppClientGenericWrapperService
    ]
})
export class AppClientModule {}
