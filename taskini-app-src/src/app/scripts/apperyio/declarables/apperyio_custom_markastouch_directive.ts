import {
    Directive, Input
} from '@angular/core';
import {
    NgModel
} from '@angular/forms';

@Directive({
    selector: '[aioCustomMarkAsTouched]' // Attribute selector
})

export default class ApperyioCustomMarkAsTouchDirective {
    
    @Input() aioCustomMarkAsTouched: string = '';

    constructor(private model: NgModel) {}
    
    ngOnInit() {
        const methodName = this.aioCustomMarkAsTouched || 'markAsTouched';
        const valueAccessor: any = this.model.valueAccessor;
        if (valueAccessor && valueAccessor[methodName]) {
            const markAsTouched = this.model.control.markAsTouched.bind(this.model.control);
            this.model.control.markAsTouched = (...params) => {
                markAsTouched(...params)
                valueAccessor[methodName](...params);
            }
        }
    }
}
