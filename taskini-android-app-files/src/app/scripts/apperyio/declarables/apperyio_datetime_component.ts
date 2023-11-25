import { Component, forwardRef, ContentChild, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonDatetime } from '@ionic/angular';
import { Subscription } from 'rxjs';


@Component({
    template: `
        <ion-text [class.disabled]="disabled" *ngIf="!value" class="placeholder">{{placeholder || ('Select ' + (presentation === "time" ? 'time' : 'a date'))}}</ion-text>
        <ion-text [class.disabled]="disabled" *ngIf="value">{{formatDate(value)}}</ion-text>
        <button [disabled]="disabled" class="click-button" type="button" id="open-datetime{{id}}"></button>
        <ion-modal class="aio-datetime-modal presentation-{{presentation}}" trigger="open-datetime{{id}}" [keepContentsMounted]="true" (ionModalWillPresent)="onIonModalWillPresent()">
            <ng-template>
                <ion-content>
                    <ng-content></ng-content>
                </ion-content>
            </ng-template>
        </ion-modal>
    `,
    selector: 'aio-datetime',
    styles: [`
        :host {
            margin-top: var(--margin-top, 10px);
            margin-bottom: var(--margin-bottom, 9px);
            margin-left: var(--margin-start, 0px);
            margin-right: var(--margin-end, 0px);
        }
        
        :host ion-text {
            color: var(--placeholder-color);
        }
        :host ion-text.placeholder{
            opacity: var(--placeholder-opacity, 0.5);
        }
        
        :host .disabled {
            opacity: 0.3;
        }
        
        :host .click-button {
            left: 0px;
            top: 0px;
            margin: 0px;
            position: absolute;
            width: 100%;
            height: 100%;
            border: 0px;
            background: transparent;
            cursor: pointer;
            appearance: none;
            outline: none;
            z-index: 1;
        }
            
        .aio-datetime-modal {
            --border-radius: 8px;
            --width: 325px;
            --height: 434px;
        }
        .presentation-date {
            --height: 434px;
        }
        .presentation-date-time, .presentation-time-date {
            --height: 465px;
        }
        .presentation-month, .presentation-month-year, .presentation-time, .presentation-year {
            --height: 270px;
        }
    `],
    providers: [{ 
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ApperyioDatetime),
        multi: true
    }],
})
export default class ApperyioDatetime implements ControlValueAccessor {
    @ContentChild(IonDatetime) datetimeInput!: IonDatetime ;

    value!: string | string[];
    @Input() placeholder = "";
    @Input() presentation = "";
    @Input() formatOptions?: Object;
    @Input() locale = "";
    @Input() disabled = false;
    @Output() ionChange = new EventEmitter<CustomEvent>();
    @Output() ionBlur = new EventEmitter();
    @Output() ionCancel = new EventEmitter<CustomEvent>();
    @Output() ionFocus = new EventEmitter<CustomEvent>();
    
    subscriptions: Subscription[] = [];
    id = Math.random().toString();

    onIonModalWillPresent() {
        this.datetimeInput.reset(Array.isArray(this.value) ? this.value[0] : this.value);
    }

    ngAfterContentInit() {
        // contentChild is set
        this.subscriptions.push(this.datetimeInput.ionChange.subscribe((e: CustomEvent) => {
            this.value = e.detail.value;
            this.onChange(this.value);
            this.ionChange.emit(e);
            e.stopPropagation();
        }));
        this.subscriptions.push(this.datetimeInput.ionBlur.subscribe(() => {
            this._onTouched();
            this.ionBlur.emit();
        }));
        this.subscriptions.push(this.datetimeInput.ionCancel.subscribe(() => {
            this.ionCancel.emit();
        }));
        this.subscriptions.push(this.datetimeInput.ionFocus.subscribe(() => {
            this.ionFocus.emit();
        }));
        if (this.datetimeInput.value) {
            setTimeout( () => {
                this.value = <any>this.datetimeInput.value;
                this.onChange(this.value);
            }, 10);
        }
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    writeValue(value: any) {
        this.value = value;
        if (this.datetimeInput) {
            this.datetimeInput.value = this.value;
        }
    }

    registerOnChange(fn: (_: any) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this._onTouched = fn;
    }

    onChange(_: any) {}
    _onTouched() {}
    
    formatDate(value) {
        if (!value) {
            return "";
          }
        let options;
        if (!this.formatOptions) {
            switch (this.presentation) {
              case "date": 
                options = {dateStyle: "medium"}; 
                break;
              case "date-time":
                options = {dateStyle: "medium", timeStyle: "short"}; 
                break;
              case "month":
                options = {month: "long"}; 
                break;
              case "month-year":
                options = {year: "numeric", month: "long"}; 
                break;
              case "time":
                options = {timeStyle: "short"}; 
                break;
              case "time-date":
                options = {dateStyle: "medium", timeStyle: "short"}; 
                break;
              case "year":
                options = {year: "numeric"}; 
                break;
              default: 
                options = {dateStyle: "medium", timeStyle: "short"}; 
            }
        } else {
            options = this.formatOptions;
        }
        let res, locale;
        if (this.locale) {
            locale = this.locale;
        } else {
            try {
                locale = Intl.DateTimeFormat().resolvedOptions().locale || "en-US";
            } catch (e) {
                locale = "en-US"
            }
        }
        try {
            res = new Date(value).toLocaleString(locale, options);
        } catch (e) {
            console.log(e);
            res = value
        }
        return res;
    }
}
