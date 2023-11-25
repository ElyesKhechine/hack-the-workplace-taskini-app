import {
    Injectable
} from '@angular/core';
@Injectable()
export class ModalScreensService {
    private modalScreens: {
        [name: string]: any
    } = {};
    async getModalScreen(screenName: string) {
        if (!this.modalScreens[screenName]) {
            let modalImport;
            switch (screenName) {
                case "CreateNewTask":
                    modalImport = await
                    import (`../../CreateNewTask/CreateNewTask`);
                    break;
            }
            if (modalImport) {
                this.modalScreens[screenName] = modalImport[screenName];
            }
        }
        return this.modalScreens[screenName]
    }
};