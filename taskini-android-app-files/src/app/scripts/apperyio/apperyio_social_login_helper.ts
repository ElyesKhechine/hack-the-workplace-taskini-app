import {
    Injectable
} from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
    HttpParams
} from '@angular/common/http';
import {
    Platform
} from '@ionic/angular';
@Injectable()
export class ApperyioSocialLoginHelperService {
    private defaultDB: string;
    private sessionTokens = {};
    private providers = {
        twitter: {
            id: "twitter",
            baseUrl: "https://api.twitter.com/oauth/authenticate"
        },
        facebook: {
            id: "facebook",
            baseUrl: "https://www.facebook.com/dialog/oauth"
        },
        google: {
            id: "google",
            baseUrl: "https://accounts.google.com/o/oauth2/auth"
        }
    };
    private statusNames = {
        unauthorized: "unauthorized",
        inProgress: "inProgress",
        authorized: "authorized",
        error: "error"
    };
    private eventNames = {
        dbLoginStart: "dbloginstart",
        dbLoginEnd: "dbloginend"
    };
    private host = "appery.io";
    private dbBaseUrl = "https://api." + this.host + "/rest/1/db/";
    private oauthUrl = this.dbBaseUrl + "oauth/";
    private oauthLoginUrl = this.oauthUrl + "login/";
    private oauthTokenUrl = this.oauthUrl + "token/";
    private oauthLogout = this.oauthUrl + "logout?provider=<provider>";
    private usersUrl = this.dbBaseUrl + "users/";
    private loginUrl = this.dbBaseUrl + "login/";
    private logoutUrl = this.dbBaseUrl + "logout/";
    private checkLoginUrl = this.usersUrl + "me/";
    private updateUserUrl = this.usersUrl + "<user_id>";
    constructor(private http: HttpClient, private platform: Platform) {
    }
    /**
     * Social login via google oauth provider.
     * @param {string} previewClientId  - Google client id, type "Web application".
     * @param {string} [callbackUrl]    - URL for redirecting after user grants access. Not required for login on device.
     * @param {string} [dbId]           - Database Id. Optional if default database id is set.
     * @returns {Promise}
     */
    loginGoogle(previewClientId: string, callbackUrl: string, dbId?: string) {
        return new Promise((resolve, reject) => {
            if (this.isPhoneGapApp()) {
                this.loginGoogleOnDevice(resolve, reject, dbId, previewClientId);
            } else {
                this.loginOauth2_0(resolve, reject, dbId, previewClientId, this.providers.google.baseUrl, callbackUrl,
                    this.providers.google.id, "profile", window);
            }
        });
    }
    /**
     * Social login via facebook oauth provider.
     * @param {string} clientId       - Social provider client id.
     * @param {string} callbackUrl    - URL for redirecting after user grants access.
     * @param {string} [dbId]         - Database Id. Optional if default database id is set.
     * @returns {Promise}
     */
    loginFB(clientId: string, callbackUrl: string, dbId?: string) {
        return new Promise((resolve, reject) => {
            if (this.isPhoneGapApp()) {
                this.loginFacebookOnDevice(resolve, reject, dbId, clientId);
            } else {
                this.loginOauth2_0(resolve, reject, dbId, clientId, this.providers.facebook.baseUrl, callbackUrl,
                    this.providers.facebook.id, "", window);
            }
        });
    }
    /**
     * Social login via twitter oauth provider.
     * @param {string} clientId       - Social provider client id.
     * @param {string} callbackUrl    - URL for redirecting after user grants access.
     * @param {string} [dbId]         - Database Id. Optional if default database id is set.
     * @returns {Promise}
     */
    loginTwitter(clientId: string, callbackUrl: string, dbId?: string) {
        return new Promise((resolve, reject) => {
            if (this.isPhoneGapApp()) {
                const cordova = ( < any > window).cordova;
                if (!cordova || !cordova.InAppBrowser) {
                    reject("InAppBrowser Cordova Plugin is not installed");
                } else {
                    this.loginOauth1_0a(resolve, reject, dbId, clientId, this.providers.twitter.baseUrl, callbackUrl,
                        this.providers.twitter.id, cordova.InAppBrowser);
                }
            } else {
                this.loginOauth1_0a(resolve, reject, dbId, clientId, this.providers.twitter.baseUrl, callbackUrl,
                    this.providers.twitter.id, window);
            }
        });
    }
    /**
     * Returns Appery.io database token.
     * @param {string} dbId - Database Id. Optional if default database id is set.
     * @returns {string|null}
     */
    getToken(dbId?: string) {
        dbId = this.getDB(dbId);
        if (this.sessionTokens[dbId]) {
            return this.sessionTokens[dbId].token;
        }
        return null;
    }
    /**
     * Returns Appery.io database User Id.
     * @param {string} dbId - Database Id. Optional if default database id is set.
     * @returns {string|null}
     */
    getUserId(dbId?: string) {
        dbId = this.getDB(dbId);
        if (this.sessionTokens[dbId]) {
            return this.sessionTokens[dbId].userId;
        }
        return null;
    }
    /**
     * Returns current login progress status.
     * @param {string} dbId - Database Id. Optional if default database id is set.
     * @returns {string}
     */
    getStatus(dbId?: string) {
        dbId = this.getDB(dbId);
        if (this.sessionTokens[dbId]) {
            return this.sessionTokens[dbId].status;
        }
        return this.statusNames.unauthorized;
    }
    /**
     * Sets default Database Id.
     * @param {string} dbId - Database Id.
     */
    setDefaultDB(dbId) {
        this.defaultDB = dbId;
    }
    /**
     * Creates user in Appery.io database.
     * @param {Object.<String, String>} options - Request data. Should contain at least "username" and "password" fields.
     * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
     * @returns {Object}
     */
    createUser(options, dbId?: string) {
        return new Promise((resolve, reject) => {
            this.internalLogin(resolve, reject, options, this.usersUrl, this.getDB(dbId), true);
        });
    }
    /**
     * Receives Appery.io database token.
     * @param {Object.<String, String>} options - Request parameters. Should contain "username" and "password" fields.
     * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
     * @returns {Object}
     */
    login(options, dbId?: string) {
        return new Promise((resolve, reject) => {
            this.internalLogin(resolve, reject, options, this.loginUrl, this.getDB(dbId), true);
        });
    }
    /**
     * Invalidates token in Appery.io database.
     * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
     * @returns {Object}
     */
    logout(dbId?: string) {
        return new Promise((resolve, reject) => {
            let httpOptions = this.getHttpOptions(dbId, {}, false);
            this.http.get(this.logoutUrl, httpOptions).subscribe(
                (res: any) => {
                    this.invalidate(dbId)
                    resolve(res);
                },
                reject)
        });
    }
    /**
     * Returns list of users in Appery.io database.
     * @param {Object.<String, String>} options - Request parameters.
     * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
     * @returns {Object}
     */
    findUsers(options, dbId?: string) {
        return new Promise((resolve, reject) => {
            let httpOptions = this.getHttpOptions(dbId, options, false);
            return this.http.get(this.usersUrl, httpOptions).subscribe(
                resolve,
                reject)
        });
    }
    /**
     * Checks if Appery.io database token is valid.
     * @param {Object.<String, String>} options - Request parameters.
     * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
     * @returns {Object}
     */
    isLogged(options, dbId?: string) {
        return new Promise((resolve, reject) => {
            let httpOptions = this.getHttpOptions(dbId, {}, false);
            return this.http.get(this.checkLoginUrl, httpOptions).subscribe(
                resolve,
                reject)
        });
    }
    /**
     * Updates Appery.io database user.
     * @param {Object.<String, String>} options - Request parameters.
     * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
     * @returns {Object}
     */
    updateUser(options, dbId?: string) {
        return new Promise((resolve, reject) => {
            let httpOptions = this.getHttpOptions(dbId, {}, false);
            let url = this.updateUserUrl.replace("<user_id>", this.getUserId(dbId));
            return this.http.put(url, options, httpOptions).subscribe(
                resolve,
                reject)
        });
    }
    /**
     * Deletes Appery.io database token. It doesn't invalidate token in Appery.io database.
     * Returns true if token existed.
     * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
     * @returns {boolean}
     */
    invalidate(dbId?: string) {
        dbId = this.getDB(dbId);
        if (this.sessionTokens[dbId]) {
            this.sessionTokens[dbId] = undefined;
            return true;
        }
        return false;
    }
    /**
     * Removes social id from Appery.io database.
     * @param {string}                  provider - Provider Id.
     * @param {string}                  [dbId]   - Database Id. Optional if default database id is set.
     * @returns {Object}
     */
    logoutOauth(provider, dbId?: string) {
        return new Promise((resolve, reject) => {
            let httpOptions = this.getHttpOptions(dbId, {}, false);
            let url = this.oauthLogout.replace("<provider>", provider);
            return this.http.delete(url, httpOptions).subscribe(
                resolve,
                reject)
        });
    }
    /**
     * If dbId is specified then returns dbId, if not then returns default database id.
     * @param {string} dbId - Database id. Optional if default database id is set.
     * @returns {string}
     */
    getDB(dbId: string) {
        if (dbId) {
            return dbId;
        } else {
            return this.defaultDB;
        }
    }
    /**
     * Social login via OAuth 2.0 Authorization Framework
     * @see {@link https://tools.ietf.org/html/rfc6749}
     * @param {function} resolve - function to resolve promise.
     * @param {function} reject  - function to reject promise.
     * @param {string} dbId           - Database id. Optional if default database id is set.
     * @param {string} clientId       - Social provider client id.
     * @param {string} baseUrl        - Social provider authorization URL.
     * @param {string} callbackUrl    - URL for redirecting after user grants access.
     * @param {string} socialnetwork  - Social provider id.
     * @param {string} scope          - Set of permissions that the application requests.
     * @param {object} window         - if in browser - should be global window object, if in cordova - should be cordova.InAppBrowser.
     */
    private loginOauth2_0(resolve: Function, reject: Function, dbId: string, clientId: string, baseUrl: string,
        callbackUrl: string, socialnetwork: string, scope: string, window) {
        let self = this;
        const state = Math.random().toString(36).substring(2);
        const url = baseUrl + "?client_id=" + clientId +
            "&redirect_uri=" + callbackUrl + "&scope=" + scope + "&response_type=code&state=" + state;
        let ref;
        if (this.isPhoneGapApp()) {
            ref = window.open(url, '_blank', 'location=yes');
            ref.addEventListener("loadstart", handleDevice);
        } else {
            ref = window.open(url, '_blank', 'location=yes,top=100, left=100, width=600, height=600');
            window.addEventListener('message', handlePreview);
        }

        function handleDevice(event) {
            if (event.type !== "loadstart" || event.url.indexOf(callbackUrl) !== 0) {
                return;
            }
            ref.close();
            getAccessToken(event.url);
        }

        function handlePreview(event) {
            if (event.data.type !== "social_login" || event.data.url.indexOf(callbackUrl) !== 0) {
                return;
            }
            ref.close();
            window.removeEventListener('message', handlePreview);
            getAccessToken(event.data.url);
        }

        function getAccessToken(url) {
            let params = ApperyioSocialLoginHelperService.extractParams(url);
            if (state !== params["state"]) {
                return;
            }
            if (params['code']) {
                self.externalLogin(resolve, reject, params['code'], "", dbId, clientId, socialnetwork, callbackUrl);
            } else {
                reject("Access not granted");
            }
        }
    }
    /**
     * Social login via OAuth 1.0a Authorization Framework
     * @see {@link http://oauth.net/core/1.0a}
     * @param {function} resolve - function to resolve promise.
     * @param {function} reject  - function to reject promise.
     * @param {string} dbId           - Database id. Optional if default database id is set.
     * @param {string} clientId       - Social provider client id.
     * @param {string} baseUrl        - Social provider authorization URL.
     * @param {string} callbackUrl    - URL for redirecting after user grants access.
     * @param {string} socialnetwork  - Social provider id.
     * @param {object} window         - if in browser - should be global window object, if in cordova - should be cordova.InAppBrowser.
     */
    private loginOauth1_0a(resolve: Function, reject: Function, dbId: string, clientId: string, baseUrl: string,
        callbackUrl: string, socialnetwork: string, window) {
        let ref;
        let self = this;
        const params = {
            provider: socialnetwork,
            appId: clientId,
            callback: callbackUrl
        };
        let httpOptions = this.getHttpOptions(dbId, params, true);
        this.http.get(this.oauthTokenUrl, httpOptions)
            .subscribe(extractToken,
                (error: HttpErrorResponse) => {
                    ApperyioSocialLoginHelperService.fireEvent(this.eventNames.dbLoginEnd);
                    this.setStatus(dbId, this.statusNames.error);
                    reject(error);
                });

        function extractToken(success) {
            const token = success.token;
            const url = baseUrl + "?oauth_token=" + token;
            if (self.isPhoneGapApp()) {
                ref = window.open(url, '_blank', 'location=yes');
                ref.addEventListener("loadstart", handleDevice);
            } else {
                ref = window.open(url, '_blank', 'location=yes,top=100, left=100, width=600, height=600');
                window.addEventListener('message', handlePreview);
            }
        }

        function handleDevice(event) {
            if (event.type !== "loadstart" || event.url.indexOf(callbackUrl) !== 0) {
                return;
            }
            ref.close();
            getVerifier(event.url);
        }

        function handlePreview(event) {
            if (event.data.type !== "social_login" || event.data.url.indexOf(callbackUrl) !== 0) {
                return;
            }
            ref.close();
            window.removeEventListener('message', handlePreview);
            getVerifier(event.data.url);
        }

        function getVerifier(url) {
            let params = ApperyioSocialLoginHelperService.extractParams(url);
            if (params['oauth_token'] && params['oauth_verifier']) {
                self.externalLogin(resolve, reject, params['oauth_verifier'], params['oauth_token'], dbId, clientId, socialnetwork);
            } else {
                reject("Access not granted");
            }
        }
    }
    /**
     * Social login via Facebook Connect Cordova Plugin
     * @param {function} resolve - function to resolve promise.
     * @param {function} reject  - function to reject promise.
     * @param {string} dbId           - Database id. Optional if default database id is set.
     * @param {string} clientId       - Social provider client id.
     */
    private loginFacebookOnDevice(resolve: Function, reject: Function, dbId: string, clientId: string) {
        let self = this;
        if (!window["facebookConnectPlugin"] || !window["facebookConnectPlugin"].login) {
            reject("Facebook Connect Cordova Plugin is not installed");
        }
        window["facebookConnectPlugin"].login(["public_profile"], (response) => {
                self.externalLogin(resolve, reject, "", "", dbId, clientId, "facebook", null, response.authResponse.accessToken);
            },
            reject
        );
    }
    /**
     * Social login via Google Sign-In Cordova Plugin
     * @see {@link https://github.com/EddyVerbruggen/cordova-plugin-googleplus}
     * @param {function} resolve    - function to resolve promise.
     * @param {function} reject     - function to reject promise.
     * @param {string} dbId         - Database id. Optional if default database id is set.
     * @param {string} webClientId  - Google web client id.
     */
    private loginGoogleOnDevice(resolve: Function, reject: Function, dbId: string, webClientId: string) {
        let self = this;
        if (!window["plugins"] || !window["plugins"].googleplus) {
            reject("Google Sign-In Cordova Plugin is not installed");
        }
        window["plugins"].googleplus.login({
                'scopes': "profile",
                'webClientId': webClientId
            },
            (response) => {
                self.externalLogin(resolve, reject, "", "", dbId, webClientId, "google", null, response.idToken);
            },
            (msg) => {
                reject("Access not granted: " + msg);
            }
        );
    }
    /**
     * Exchanges oauth provider token and verifier to Appery.io token.
     * @param {function} resolve - function to resolve promise.
     * @param {function} reject  - function to reject promise.
     * @param {string} verifier         - Oauth 1.0 verifier or Oauth 2.0 code.
     * @param {string} token            - Oauth 1.0 request token.
     * @param {string} dbId             - Database id. Optional if default database id is set.
     * @param {string} clientId         - Social provider client id.
     * @param {string} socialnetwork    - Social provider id.
     * @param {string} [callback]       - Callback URL. Only for OAuth 2.0.
     * @param {string} [accessToken]    - Access tokenif it's already known. Currently available only for Google
     */
    private externalLogin(resolve: Function, reject: Function, verifier: string, token: string, dbId: string, clientId: string, socialnetwork: string, callback?: string, accessToken?: string) {
        const data = {
            "verifier": verifier,
            "token": token,
            "provider": socialnetwork,
            "appId": clientId,
            "callback": callback,
            "accessToken": accessToken
        };
        this.internalLogin(resolve, reject, data, this.oauthLoginUrl, this.getDB(dbId), false);
    }
    private internalLogin(resolve: Function, reject: Function, data, url: string, dbId?: string, withoutToken?: boolean) {
        ApperyioSocialLoginHelperService.fireEvent(this.eventNames.dbLoginStart);
        this.setStatus(dbId, this.statusNames.inProgress);
        let httpOptions = this.getHttpOptions(dbId, {}, withoutToken);
        this.http.post(url, data, httpOptions).subscribe(
            (res: any) => {
                let token = this.handleToken(res, dbId)
                ApperyioSocialLoginHelperService.fireEvent(this.eventNames.dbLoginEnd);
                resolve(token);
            },
            (error: HttpErrorResponse) => {
                ApperyioSocialLoginHelperService.fireEvent(this.eventNames.dbLoginEnd);
                this.setStatus(dbId, this.statusNames.error);
                reject(error);
            });
    }
    /**
     * Creates HttpOptions object.
     * @param {string}                         dbId            - Database id. Optional if default database id is set.
     * @param {Object.<String, String>} params          - Request parameters.
     * @param {boolean}                        [withoutToken]  - Is token header should be omitted. Optional.
     * @returns {object}
     */
    private getHttpOptions(dbId: string, params, withoutToken?: boolean) {
        dbId = this.getDB(dbId);
        let headers = {
            'Content-Type': 'application/json',
            "X-Appery-Database-Id": dbId
        };
        if (!withoutToken && this.getToken(dbId)) {
            headers["X-Appery-Session-Token"] = this.getToken(dbId);
        }
        return {
            headers: new HttpHeaders(headers),
            params: new HttpParams({
                fromObject: params
            })
        };
    }
    /**
     * Sets current login progress status
     * @param {string} dbId - Database Id. Optional if default database id is set.
     * @param {string} status - Current login progress status.
     */
    private setStatus(dbId: string, status: string) {
        dbId = this.getDB(dbId);
        if (!dbId) {
            return;
        }
        if (this.sessionTokens[dbId]) {
            this.sessionTokens[dbId].status = status;
        } else {
            this.sessionTokens[dbId] = {
                status: status
            };
        }
    }
    /**
     * Extracts Appery.io database token from response
     * @param {Object.<String, String>} data     - Parsed response body.
     * @param {string}                  dbId     - Database id.
     */
    private handleToken(data, dbId: string) {
        this.sessionTokens[dbId] = {
            token: data.sessionToken,
            userId: data["_id"],
            status: this.statusNames.authorized
        };
        return data.sessionToken;
    }
    /**
     * Fires event
     * @param eventName
     */
    private static fireEvent(eventName: string) {
        const event = new Event(eventName, {
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(event);
    }
    /**
     * Extracts parameters from URL.
     * @see {@link http://tools.ietf.org/html/rfc3986#section-3.4}
     * @param {string} url
     * @returns {Object.<String, String>}
     */
    private static extractParams(url: string) {
        let params = {},
            search;
        if (url.indexOf("?") === -1) {
            return params;
        }
        if (url.indexOf("#") > -1) {
            search = url.slice(url.indexOf("?"), url.indexOf("#"));
        } else {
            search = url.slice(url.indexOf("?"));
        }
        if (search.length > 1) {
            for (var pairIndex = 0, pairs = search.substr(1).split("&"); pairIndex < pairs.length; pairIndex++) {
                var pair = pairs[pairIndex].split("=");
                params[pair[0]] = pair[1];
            }
        }
        return params;
    }
    /**
     * Determines if the app runs on device.
     * @returns {boolean}
     */
    private isPhoneGapApp() {
        return this.platform.is('cordova')
    }
    /**
     * Determines if the app runs on android.
     * @returns {boolean}
     */
    private isAndroid() {
        return this.platform.is('android')
    }
}