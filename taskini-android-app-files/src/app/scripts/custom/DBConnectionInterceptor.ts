import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/internal/operators';
import {ToastController} from '@ionic/angular';

@Injectable()
export class DBConnectionInterceptor implements HttpInterceptor {

    private DB_CONNECTION_ERROR_USER_MESSAGE = 'Something went wrong. Please try again later or contact support';
    private DB_CONNECTION_ERROR_USER_MESSAGE_TOAST_DURATION = 5000;
    private DB_API_PATH = 'https://api.appery.io/rest/1/db';

    private DB_MAINTENANCE_ERROR = {
        httpStatus: 400,
        errorCodes: ['DBSL961', 'DBSG961', 'DBSC961', 'DBSU961', 'DBSM961', 'DBSD961', 'DBMD961', 'DBSQ961', 'DBSP961', 'DBSR961', 'DBSS961', 'DBSV961', 'DBSW']
    };

    private DB_NOT_FOUND_ERROR = {
        httpStatus: 404,
        errorCodes: ['DBSL014', 'DBSG014', 'DBSC014', 'DBSU014', 'DBSM014', 'DBSD014', 'DBMD014', 'DBSQ014', 'DBSP014', 'DBSR014', 'DBSS014', 'DBSV014', 'DBSW']
    };

    constructor(private toastController: ToastController) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((err, caught: Observable<HttpEvent<any>>) => {
                    if (err instanceof HttpErrorResponse
                        && err.url.startsWith(this.DB_API_PATH)
                        && ((err.status === this.DB_MAINTENANCE_ERROR.httpStatus && err.error && this.DB_MAINTENANCE_ERROR.errorCodes.indexOf(err.error.code) !== -1)
                            || (err.status === this.DB_NOT_FOUND_ERROR.httpStatus && err.error && this.DB_NOT_FOUND_ERROR.errorCodes.indexOf(err.error.code) !== -1)
                            || err.status === 500
                        )
                        ) {
                        this.showToast(this.DB_CONNECTION_ERROR_USER_MESSAGE, 'danger', this.DB_CONNECTION_ERROR_USER_MESSAGE_TOAST_DURATION);
                    }
                    throw err;
                })
            );
    }

    async showToast(message: string, color: string, duration = -1, showReload = false) {
        const buttons: any[] = [];

        if(showReload){
            buttons.push({
                text: 'Reload',
                handler: () => {
                    // reload page
                    document.location.reload();
                }
            });
        }

        const toastOpts: any = {
            message,
            position: 'top',
            color,
            buttons,
        };

        if (duration !== -1) {
            toastOpts.duration = duration;
        }

        const toast = await this.toastController.create(toastOpts);
        await toast.present();
        return Promise.resolve(toast);
    }

}