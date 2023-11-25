import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import ApperyioControlValidationDirective from './apperyio_control_validation_directive';
import ApperyioCustomMarkAsTouchDirective from './apperyio_custom_markastouch_directive';
import ApperyioMarkAsTouchDirective from './apperyio_markastouch_directive';
import ApperyioFormChangeDirective from './apperyio_form_change_directive';
import ApperyioPasswordShowDirective from './apperyio_password_show_directive';
import ApperyioDatatableResizerDirective from './apperyio_datatable_resizer_directive';
import ApperyioTesterButtons from './apperyio_tester_buttons_component';
import ApperyioFilePicker from './apperyio_file_picker_component';
import ApperyioDatetime from './apperyio_datetime_component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [
        ApperyioControlValidationDirective,
        ApperyioCustomMarkAsTouchDirective,
        ApperyioMarkAsTouchDirective,
        ApperyioFormChangeDirective,
        ApperyioPasswordShowDirective,
        ApperyioDatatableResizerDirective,
        ApperyioTesterButtons,
        ApperyioFilePicker,
        ApperyioDatetime,
    ],
    exports: [
        ApperyioControlValidationDirective,
        ApperyioCustomMarkAsTouchDirective,
        ApperyioMarkAsTouchDirective,
        ApperyioFormChangeDirective,
        ApperyioPasswordShowDirective,
        ApperyioDatatableResizerDirective,
        ApperyioTesterButtons,
        ApperyioFilePicker,
        ApperyioDatetime,
    ]
})
export class ApperyioDeclarablesModule {}
