import {
    Component,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import {
    NG_VALUE_ACCESSOR, ControlValueAccessor
} from '@angular/forms';
import {
    forwardRef, ViewChild
} from '@angular/core';

const DEF_NO_FILE_MSG = "No file chosen";
const DEF_FILES_MSG = "file(s)";

@Component({
    template: `
        <input 
            #inputEl
            type="file"
            (change)="onChange($event)"
            style="width: 0px!important;height: 0px!important;pointer-events: none;"
            accept="{{accept || ''}}"
            >
        <ion-button 
            *ngIf="type !== 'image'"
            [disabled]="disabled"
            (click)="onSelect()"
            >
            {{buttonText || "Select file"}}
        </ion-button>
        <img 
            *ngIf="type === 'image'"
            [ngClass]="{disabled: disabled}"
            [src]="imageSrc"
            (click)="onSelect()">
        <span 
            *ngIf="showCount === 'true'"
            [ngClass]="{disabled: disabled}"
            class="files-count"
            >
            {{ getFilesText() }}
        </span>
        <div 
            *ngIf="showFiles === 'true' && filesInfo.length"
            [ngClass]="{disabled: disabled}"
            class="files-list"
            >
            <div
                class="file-info"
                *ngFor="let fileInfo of filesInfo; let i = index"
            >
                <span>
                    {{fileInfo.name}} ({{fileInfo.size}})
                </span>
                <ion-icon
                    *ngIf="showRemoveIcon === 'true'"
                    class="remove-icon"
                    name="close-circle-outline"
                    size="{{iconSize}}"
                    (click)="removeFile(i)">
                </ion-icon>
            </div>
        </div>
    `,
    selector: 'aio-file-picker',
    styles: [`
        :host {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
        }
        :host img {
            cursor: pointer;
        }
        :host .disabled {
            opacity: .5;
        }
        :host .files-count {
            margin-left: 1em;
        }
        :host .files-list {
            width: 100%;
        }
        :host .file-info {
            align-items: center;
            display: flex;
        }
        :host .file-info span {
            padding: 4px;
            word-break: break-word;
        }
        :host .remove-icon {
            cursor: pointer;
            min-width: 40px;
        }
    `],
    providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ApperyioFilePicker),
            multi: true,
        },
    ],
})
export default class ApperyioFilePicker implements ControlValueAccessor {
     @ViewChild('inputEl', {
        static: true
    }) private inputEl: any;
    
    private _multiple = false;
    
    @Output('ionChange') change = new EventEmitter<any>();
     
    @Input() disabled: any = false;
    @Input() type: string;
    @Input() showCount: string;
    @Input() showFiles: string;
    @Input() showRemoveIcon: string;
    @Input() buttonText: string;
    @Input() noFilesText: string;
    @Input() filesText: string;
    @Input() iconSize: string;
    @Input() imageSrc: string;
    @Input() multiple: string;
    @Input() accept: string;
    @Input() value: any;

    private currValue: any = undefined;

    private _setValue(value) {
        this.currValue = value;
        this.refreshFilesList();
        this.ngModelOnChange && setTimeout(() => {
            this.ngModelOnChange(value);
        }, 0);
    }

    private _filesInfo = [];
    
    public get filesInfo() {
        return this._filesInfo;
    }

    public getValue() {
        return this.currValue;
    }

    private isFile(value) {
        return value instanceof File;
    }

    private setValue(value) {
        if (this._multiple) {
            if (!Array.isArray(value)) {
                value = this.isFile(value) ? [value] : [];
            }
            for (let i = 0; i < value.length; i++) {
                if (!this.isFile(value[i])) {
                    this._setValue([]);
                    return;
                }
            }
            if (!_.isEqual(this.currValue, value)) {
                this._setValue(value);
            }
        } else {
            if (!this.isFile(value)) {
                this._setValue(undefined);
                return;
            }
            if (!_.isEqual(this.currValue, value)) {
                this._setValue(value);
            }
        }
    }
    
    ngOnChanges(changes) {
        if (changes.multiple) {
            this._multiple = changes.multiple.currentValue === 'true' || changes.multiple.currentValue === true;
            if (this._multiple) {
                this.inputEl.nativeElement.setAttribute("multiple", "true");
            } else {
                this.inputEl.nativeElement.removeAttribute("multiple");
            }
        }
        if (changes.value) {
            this.setValue(changes.value.currentValue);
        }
    }
    
    private returnFileSize(number) {
        if (!number) return "-";
        if(number < 1024) {
            return number + 'bytes';
        } else if(number > 1024 && number < 1048576) {
            return (number/1024).toFixed(1) + 'KB';
        } else if(number > 1048576) {
            return (number/1048576).toFixed(1) + 'MB';
        }
    }
    
    getFilesText(): string {
        return !this._filesInfo.length ? (this.noFilesText || DEF_NO_FILE_MSG) : this._filesInfo.length + " " + (this.filesText || DEF_FILES_MSG)
    }
    
    private getFileInfo(file) {
        return {
            name: file.name,
            size: this.returnFileSize(file.size)
        }
    }
    
    private refreshFilesList() {
        const value = this.currValue;
        if (!value) {
            this._filesInfo = [];
            return;
        }
        if (!this._multiple) {
            this._filesInfo = [this.getFileInfo(value)];
        } else {
            this._filesInfo = value.map(value => this.getFileInfo(value));
        }
    }
    
    public removeFile(index) {
        if (this._multiple) {
            let value = this.currValue;
            value.splice(index, 1);
            this._setValue(value);
        } else {
            this._setValue(undefined);
        }
    }
    
    /**
     * A callback executed when the content of the editor changes. Part of the
     * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
     *
     * Note: Unset unless the component uses the `ngModel`.
     */
    private ngModelOnChange ? : (data: any) => void;
    /**
     * A callback executed when the editor has been blurred. Part of the
     * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
     *
     * Note: Unset unless the component uses the `ngModel`.
     */
    private ccOnTouched ? : () => void;
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    public writeValue(value: any | null): void {
        this.setValue(value);
        this.refreshFilesList();
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    public registerOnChange(callback: (data: any) => void): void {
        this.ngModelOnChange = callback;
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    public registerOnTouched(callback: () => void): void {
        this.ccOnTouched = callback;
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    public setDisabledState(isDisabled: boolean): void {}

    onChange($event): any {
        $event.stopPropagation();
        const value = this._multiple ? Array.from(this.inputEl.nativeElement.files) : this.inputEl.nativeElement.files[0];
        this._setValue(value);
        this.inputEl.nativeElement.value = "";
        this.change.emit(new CustomEvent("ionChange", {detail: {value: this.currValue}}));
    }
    
    onSelect() {
        if (this.disabled === true || (this.disabled.toLowerCase && this.disabled.toLowerCase() === "true")) return;
        this.inputEl.nativeElement.click();
    }
}
