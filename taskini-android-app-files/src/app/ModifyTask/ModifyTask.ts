import {
    Component
} from '@angular/core';
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    $aio_empty_object
} from '../scripts/interfaces';
@Component({
    templateUrl: 'ModifyTask.html',
    selector: 'page-modify-task',
    styleUrls: ['ModifyTask.css', 'ModifyTask.scss']
})
export class ModifyTask {
    public aioChangeDetector: ChangeDetectorRef;
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable?, isSelected?) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    public __isPropertyInMapping(_currentItem, property) {
        return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
    }
    public __setMapping(data: any = {}, keyName: string, propName?: string): void {
        const changes = data.detail || {};
        if (propName) {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        } else {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
        this.$aio_changeDetector.detectChanges();
    }
    public __bindedMethods: any = {};
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    async button1_copyClick__j_189(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        window.open('https://agentgpt.reworkd.ai', '_blank');
    }
    async button3Click__j_190(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        window.open('https://app.wonderchat.io/chatbot/clir6lgva0b95mc0kiul88e6r', '_blank');
    }
}