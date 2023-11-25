import { Directive, ElementRef, Input } from '@angular/core';
import { ApperyioHelperService } from '../apperyio_helper';

/**
 * The directive allows to simply show/hide password
 * For using it add the aioPasswordShow directive to ion-item wrapper of input
 */

const DEF_SHOW_ICON_NAME = 'eye';
const DEF_HIDE_ICON_NAME = 'eye-off';

interface IOptions {
    hideIconName?: string;
    showIconName?: string;
}

interface IIconHTMLElement extends HTMLElement  {
  name: string;
}

@Directive({
    selector: '[aioPasswordShow]', // Attribute selector
})

export default class AioPasswordShowDirective {

    @Input() aioPasswordShow: IOptions = {};
    
    private iconEl: IIconHTMLElement;
    private inputEl: HTMLInputElement;
    private options: IOptions;
    private mode: "password"|"text" = "password";

    constructor(private el: ElementRef, private Apperyio: ApperyioHelperService) {
    }

    // ngAfterContentInit() {
    ngAfterViewInit() {
        this.options = this.aioPasswordShow && typeof this.aioPasswordShow === 'object' ? this.aioPasswordShow : {};
        this.iconEl = this.el.nativeElement.querySelector("ion-icon[data-action='show-hide']");
        if (!this.iconEl) {
            this.iconEl = this.el.nativeElement.querySelector("ion-icon[name='" + this.options.showIconName || DEF_SHOW_ICON_NAME + "']");
        }
        if (!this.iconEl) {
            this.iconEl = this.el.nativeElement.querySelector("ion-icon");
        }
        if (!this.iconEl) {
            return;
        }
        if (this.options.showIconName) {
            this.iconEl.name = this.options.showIconName;
        }
        this.iconEl.addEventListener("click", () => this.toggleMode());
        this.Apperyio.preload.icons([this.options.hideIconName || DEF_HIDE_ICON_NAME]);
    }

    toggleMode() {
        this.mode = this.mode === "password" ? "text" : "password";

        if (this.mode === "password") {
            this.iconEl.name = this.options.showIconName || DEF_SHOW_ICON_NAME;
        } else {
            this.iconEl.name = this.options.hideIconName || DEF_HIDE_ICON_NAME;
        }

        if (!this.inputEl) {
            this.inputEl = this.el.nativeElement.querySelector("input");
        }
        let selectionStart = this.inputEl.selectionStart,
            selectionEnd = this.inputEl.selectionEnd;
        this.inputEl.type = this.mode;
        // restore cursor position/selection
        setTimeout(() => {
            this.inputEl.selectionStart = selectionStart;
            this.inputEl.selectionEnd = selectionEnd;
        }, 0);
    }
}
