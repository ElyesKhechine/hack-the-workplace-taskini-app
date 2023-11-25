import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
import {
    IonicModule
} from '@ionic/angular';
import {
    PipesModule
} from './pipes.module';
import {
    DirectivesModule
} from './directives.module';
@NgModule({
    declarations: [],
    imports: [CommonModule, FormsModule, RouterModule, IonicModule, PipesModule, DirectivesModule],
    exports: [],
    entryComponents: []
})
export class ComponentsModule {}