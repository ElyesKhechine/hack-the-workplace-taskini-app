import {
    Injectable
} from '@angular/core';

@Injectable()
export class ApperyioDateTimeHelperService {

    zoneOffset = (new Date()).getTimezoneOffset()
    utcToLocal(dateStr: string | Date): string {
        if (!dateStr) return "";
        try {
            let date = new Date(dateStr);
            date.setSeconds(-this.zoneOffset * 60);
            return date.toISOString().slice(0, -1);
        } catch(e) {
            console.error(e);
            return ""
        }
    }

    localToUtc(dateStr: string | Date): string {
        if (!dateStr) return "";
        try {
            let date = new Date(dateStr);
            return date.toISOString();
        } catch(e) {
            console.error(e);
            return ""
        }
    }
};
