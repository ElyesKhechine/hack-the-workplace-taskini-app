import {
    Injectable
} from '@angular/core';

@Injectable()
export class ApperyioPreloadHelperService {
    private _loadedComponents = [];
    private _loadedIcons = [];
    private _hiddenDiv;

    private createHiddenDiv() {
        if (!this._hiddenDiv) {
            this._hiddenDiv = document.createElement("div");
            this._hiddenDiv.style.display = "none";
            document.body.appendChild(this._hiddenDiv);
        }
    }

    components(components: string[]) {
        if (!this._hiddenDiv) {
            this.createHiddenDiv();
        }
        if (components && components.length) {
            let extraComponents = [];
            components.forEach((component) => {
                switch (component) {
                    case "ion-alert":
                    case "ion-modal":
                        extraComponents.push("ion-backdrop");
                        break;
                    case "ion-select":
                        extraComponents = extraComponents.concat(["ion-alert", "ion-backdrop"]);
                        break;
                    case "ion-loading":
                        extraComponents = extraComponents.concat(["ion-spinner", "ion-backdrop"]);
                        break;
                }
            })

            components = [...components, ...extraComponents];
            
            components.forEach((component) => {
                if (this._loadedComponents.indexOf(component) === -1) {
                    let newComponent = document.createElement(component);
                    this._hiddenDiv.appendChild(newComponent);
                    setTimeout(() => {this._hiddenDiv.removeChild(newComponent)}, 1);
                    this._loadedComponents.push(component);
                }
            });
        }
    }


    icons(icons: string[]) {
        if (!this._hiddenDiv) {
            this.createHiddenDiv();
        }
        if (icons && icons.length) {
            icons.forEach((icon) => {
                if (this._loadedIcons.indexOf(icon) === -1) {
                    let newComponent = <any>document.createElement("ion-icon");
                    newComponent.name = icon;
                    this._hiddenDiv.appendChild(newComponent);
                    setTimeout(() => {this._hiddenDiv.removeChild(newComponent)}, 1);
                    this._loadedIcons.push(icon);
                }
            });
        }
    }
};