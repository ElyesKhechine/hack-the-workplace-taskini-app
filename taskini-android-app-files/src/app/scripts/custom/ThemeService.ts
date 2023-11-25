import {Injectable} from '@angular/core';
import {ApperyioHelperService} from '../apperyio/apperyio_helper';
import {ApperyioThemeHelperService} from '../apperyio/apperyio_theme_helper';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Platform} from '@ionic/angular';

/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
class ThemeService {

    private isDarkTheme = false;
    private readyPromise: Promise<void> = null;

    constructor(private Apperyio: ApperyioHelperService, private platform: Platform, private apperyioThemeHelperService: ApperyioThemeHelperService, private statusBar: StatusBar) {}

    private init(){
        this.readyPromise = this.Apperyio.data.getStorage('preferenceTheme').then(dark => {
            this.isDarkTheme = dark;
        });
        return this.readyPromise;
    }

    private getReadyPromise(){
        return this.readyPromise === null ? this.init() : this.readyPromise;
    }

    async initStatusBar(){
        return this.getReadyPromise().then(()=>{
            if(this.isDarkTheme){
                this.statusBar.overlaysWebView(true);
                this.statusBar.styleLightContent();
                this.statusBar.backgroundColorByHexString('#2D2D2D');
            } else {
                this.statusBar.overlaysWebView(true);
                this.statusBar.styleDefault();
                this.statusBar.backgroundColorByHexString('#f8f8f8');
            }
        });
    }

    async initTheme(){
        return this.getReadyPromise().then(()=>{document.body.classList.toggle('dark', this.isDarkTheme);});
    }

    async setTheme(isDark: boolean){
        if(this.isDarkTheme !== isDark) {
            this.isDarkTheme = isDark;
            await this.Apperyio.data.setStorage("preferenceTheme", isDark);
            await this.initStatusBar();
            await this.initTheme();
        }
    }

}

/*
    Service class should be exported as ExportedClass
*/
export { ThemeService as ExportedClass };