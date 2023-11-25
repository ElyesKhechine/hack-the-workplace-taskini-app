import {
    Directive
} from '@angular/core';
import {
    HostListener
} from '@angular/core';
import {
    NgModel
} from '@angular/forms';

/**
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
    selector: '[aioMarkAsTouched]' // Attribute selector
})

export default class ApperyioMarkAsTouchDirective {

    constructor(private model: NgModel) {}

    @HostListener('markAsTouched', ['$event'])
    onShowErrorEvent(event: any): void {
        this.model.control.markAsTouched();
    }

}