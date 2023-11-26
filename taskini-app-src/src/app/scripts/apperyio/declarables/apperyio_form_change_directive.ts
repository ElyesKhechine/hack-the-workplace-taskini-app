import { Directive, Input, Output, EventEmitter, ViewContainerRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription, fromEvent } from "rxjs";
import { map } from "rxjs/operators";


interface EventTargetValue extends EventTarget {
    value: any;
}

class EventLike<T> {
    currentTarget: Partial<EventTargetValue>;
    target: Partial<EventTargetValue>;
    
    constructor(value: T) {
        this.currentTarget = { value };
        this.target = { value };
    }
}

type FormControlStatus = "VALID" | "INVALID" | "PENDING" | "DISABLED";


/**
 * Implements custom Angular outputs for the <form> element: (valueChange) and (statusChange)
 * Emits data in the same format for Angular and browser native forms:
 * { currentTarget: value, target: value }
 */

@Directive({
    selector: "[aioFormChange]" // Attribute selector
})
export default class AioFormChangeDirective {

    @Input("aioFormChange") private ngForm: NgForm;
    private nativeForm: HTMLFormElement;

    @Output() valueChange = new EventEmitter<EventLike<any>>();
    @Output() statusChange = new EventEmitter<EventLike<FormControlStatus>>();
    private subscriptions = new Subscription();

    constructor(private hostRef: ViewContainerRef) {
        this.nativeForm = this.hostRef.element.nativeElement;
    }

    ngOnInit() {
        this.subscriptions.add(
            this.createValueObservable().subscribe( (value) => {
                this.valueChange.emit(value);
            } )
        )
        this.subscriptions.add(
            this.createStatusObservable().subscribe( (status) => {
                this.statusChange.emit(status);
            } )
        )
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    /**
     * Returns true, if the form has native browser behavior
     */
    isNativeForm(): boolean {
        return !!this.nativeForm && this.nativeForm.hasAttribute("ngNoForm");
    }

    /**
     * Event source of the (valueChange) output
     */
    createValueObservable() {
        if ( this.isNativeForm() ) {
            return fromEvent(this.nativeForm, "change").pipe(
                map( (event: Event) => {
                    const formData = new FormData(<HTMLFormElement>event.currentTarget);
                    const value = this.formDataToJSON(formData);
                    return new EventLike<any>(value);
                } )
            );
        }
        return this.ngForm.valueChanges.pipe(
            map( (value: any) => ( new EventLike<any>(value) ) )
        );
    }

    /**
     * Event source of the (statusChange) output
     */
    createStatusObservable() {
        if ( this.isNativeForm() ) {
            return fromEvent(this.nativeForm, "change").pipe(
                map( (event: Event) => {
                    const nativeForm = <HTMLFormElement>event.currentTarget;
                    const status: FormControlStatus = nativeForm.checkValidity() ? "VALID" : "INVALID";
                    return new EventLike<FormControlStatus>(status);
                } )
            );
        }
        return this.ngForm.statusChanges.pipe(
            map( (status: FormControlStatus) => ( new EventLike<FormControlStatus>(status) ) )
        );
    }

    formDataToJSON(formData: FormData): any {
        let obj = {};
        formData.forEach( (value, key) => {
            obj[key] = value;
        } );
        return obj;
    }
}