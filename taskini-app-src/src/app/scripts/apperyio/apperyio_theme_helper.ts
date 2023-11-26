import {
    Injectable
} from '@angular/core';

@Injectable()
export class ApperyioThemeHelperService {

    getCurrent(): string {
        return window.document.body.dataset.themeName || "";
    }

    set(themeName: string = "") {
        let currTheme = window.document.body.dataset.themeName || "";
        currTheme && window.document.body.classList.remove(currTheme);

        window.document.body.dataset.themeName = themeName;
        themeName && window.document.body.classList.add(themeName);
    }
};