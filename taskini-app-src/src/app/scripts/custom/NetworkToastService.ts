import { Injectable } from '@angular/core';
import { ApperyioHelperService } from '../apperyio/apperyio_helper';

import { ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';

@Injectable()
class NetworkToastService {
    private disconnectSubscription: any;
    private connectSubscription: any;
    private disconnectToast: any;
    private disconnected: any = null;

    private CONNECT_MESSAGE = 'Internet connection is restored';
    private DISCONNECT_MESSAGE = "You're offline. Check your internet connection.";
    private CONNECT_MESSAGE_DURATION = 1000;
    private RECONNECTION_TIMEOUT = 3000;

    constructor(
        private Apperyio: ApperyioHelperService,
        private network: Network,
        private toastController: ToastController
    ) {}

    init() {
        // watch network for a disconnection
        this.disconnectSubscription = this.network.onDisconnect().subscribe( async () => {
            await this.dismissDisconnectToast();
            this.disconnectToast = await this.showToast(this.DISCONNECT_MESSAGE, 'danger');
            this.disconnected = true;
            console.log('network was disconnected');
        });

        // watch network for a connection
        this.connectSubscription = this.network.onConnect().subscribe(() => {
            if (this.disconnected === true) {
                setTimeout(async () => {
                    await this.dismissDisconnectToast();
                    this.showToast(this.CONNECT_MESSAGE, 'success', this.CONNECT_MESSAGE_DURATION);
                    this.resetDisconnected();
                    console.log('network connected');
                }, this.RECONNECTION_TIMEOUT);
            }
        });
    }

    destruct() {
        this.connectSubscription && this.connectSubscription.unsubscribe();
        this.disconnectSubscription && this.disconnectSubscription.unsubscribe();
    }

    async showToast(message: string, color: string, duration?: number) {
        let buttons: any[] = [{
            text: 'Reload',
            handler: () => {
                // reload page
                document.location.reload();
            }
        }];

        const toastOpts: any = {
            message,
            position: 'top',
            color,
            buttons,
        };

        if (duration) {
            toastOpts['duration'] = duration;
        }

        const toast = await this.toastController.create(toastOpts);
        await toast.present();
        return Promise.resolve(toast);
    }

    async dismissDisconnectToast() {
        if (this.disconnectToast) {
            return this.disconnectToast.dismiss();
        }
    }

    resetDisconnected() {
        this.disconnected = null;
    }
}

/*
    Service class should be exported as ExportedClass
*/
export { NetworkToastService as ExportedClass };