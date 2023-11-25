import {
    Component
} from '@angular/core';
@Component({
    template: `
    <ion-fab vertical="bottom" horizontal="end" slot="fixed" *ngIf="!hidden">
        <ion-fab-button color="light">
            <ion-icon name="share" src="assets/images/aio_tester_button.svg">
            </ion-icon>
        </ion-fab-button>
        <ion-fab-list side="start">
            <ion-fab-button (click)="goBack()" *ngIf="!hideBackButton">
                <ion-icon name="arrow-back-circle-outline">
                </ion-icon>
            </ion-fab-button>
            <ion-fab-button (click)="hide()">
                <ion-icon name="contract-outline">
                </ion-icon>
            </ion-fab-button>
            <ion-fab-button (click)="goToHomeScreen()">
                <ion-icon name="home-outline">
                </ion-icon>
            </ion-fab-button>
            <ion-fab-button (click)="reload()">
                <ion-icon name="reload-outline">
                </ion-icon>
            </ion-fab-button>
        </ion-fab-list>
    </ion-fab>
    `,
    selector: 'aio-tester-buttons',
    styles: [`
    :host {
        --ion-color-light: #ffffff;
        --ion-color-light-tint: var(--ion-color-light);
        --ion-color-light-shade: var(--ion-color-light);
        --button-color: var(--aio-tester-button-color, #09b300);
        position: fixed;
        right: 0px;
        bottom: 5px;
        z-index: 1000;
    }
    ion-fab-button {
        --color: var(--button-color);
        --ion-color-light-contrast: var(--button-color);
    }
    ion-fab-list {
        background: var(--ion-color-light);
        border-radius: 25px;
    }
    ion-icon {
        pointer-events: none;
    }
   `],
})
export default class ApperyioTesterButtons {
    public hidden = true;
    public hideBackButton = false;

    constructor() {
        if (location.href.includes("hot_reload=true") || location.href.includes("preview_build=true")) {
            if ((<any>window)._aioTesterButtonHidden !== true) {
                this.hidden = false;
            }
            if (location.href.includes("preview_build=true")) {
                this.hideBackButton = true;
            }
        }
    }
    
    reload() {
        window.location.reload();
    }

    goBack() {
        window.location.href = window.navigator.vendor.includes("Apple") ? 
            "ionic://localhost/"
            : "https://localhost/";
    }
    
    goToHomeScreen() {
        window.location.href = window.location.href.substr(0, window.location.href.indexOf("#"))
    }

    hide() {
        if (confirm(`Hide the Controls menu buttons? \nNote that you will need to restart ${location.href.includes("hot_reload=true") ? "Appery.io Tester" : "the application"} to view your project updates and unhide the app controls?`)) {
            (<any>window)._aioTesterButtonHidden = true;
            this.hidden = true;
        }
    }

    ngAfterContentChecked() {
        if (!this.hidden && ((<any>window)._aioTesterButtonHidden) === true) {
            this.hidden = true;
        }
    }
}
