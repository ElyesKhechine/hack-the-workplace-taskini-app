import {
    NgModule
} from '@angular/core';
import {
    IonicModule
} from '@ionic/angular';
import {
    ExportedClass as timePipe
} from './custom/timePipe';
@NgModule({
    declarations: [
        timePipe,
    ],
    imports: [IonicModule],
    exports: [
        timePipe,
    ]
})
export class PipesModule {}