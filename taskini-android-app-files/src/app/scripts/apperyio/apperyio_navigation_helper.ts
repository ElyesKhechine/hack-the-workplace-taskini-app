import {
    Injectable
} from '@angular/core';

import {
    NavController
} from '@ionic/angular';

import {
    routes
} from '../constants';

@Injectable()
export class ApperyioNavigationHelperService {

    constructor(
        private navController: NavController
    ) {}

    private getUrlByRouteName(routeName) {
        if (routeName) {
            if (routes[routeName]) {
                let url = < string > routes[routeName];
                if (url[0] !== "." && url[0] !== "/") {
                    url = "/" + url;
                }
                let optionalIndex = url.indexOf("/:");
                if (optionalIndex !== -1) {
                    url = url.substring(0, optionalIndex);
                }
                return url;
            }
            return routeName;
        }
        return "";
    }

    forward(routeName: string, routeParams: any[] = [], options: any = {}) {
        const url = [this.getUrlByRouteName(routeName)].concat(routeParams);
        return this.navController.navigateForward(url, options);
    }

    back(routeName: string, routeParams: any[] = [], options: any = {}) {
        const url = [this.getUrlByRouteName(routeName)].concat(routeParams);
        return this.navController.navigateBack(url, options);
    }

    root(routeName: string, routeParams: any[] = [], options: any = {}) {
        const url = [this.getUrlByRouteName(routeName)].concat(routeParams);
        return this.navController.navigateRoot(url, options);
    }

};
