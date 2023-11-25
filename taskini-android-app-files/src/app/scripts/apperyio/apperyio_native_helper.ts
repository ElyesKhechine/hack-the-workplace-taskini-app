import {
    Injectable
} from '@angular/core';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    Keyboard
} from '@ionic-native/keyboard/ngx';
import {
    Network
} from '@ionic-native/network/ngx';
import {
    ScreenOrientation
} from '@ionic-native/screen-orientation/ngx';
@Injectable()
export class ApperyioNativeHelperService {
    public audioinput;
    constructor(
        public webView: WebView, public device: Device, public splashScreen: SplashScreen, public statusBar: StatusBar, public keyboard: Keyboard, public network: Network, public screenOrientation: ScreenOrientation
    ) {
        this.audioinput = (window as any).audioinput;
    }
};