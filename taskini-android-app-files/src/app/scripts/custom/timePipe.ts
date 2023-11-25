import {
    Pipe,
    PipeTransform
} from '@angular/core';
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';
import * as moment from 'moment';
/**
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
    name: 'timePipe',
})

class TimePipePipe implements PipeTransform {
    /**
     * Takes a value and makes it lowercase.
     * 
     */
    constructor(private Apperyio: ApperyioHelperService) {

    }

    transform(value: string, timeFormat: string, ...args) {
        if (timeFormat) {
            return moment(value).format('hh:mm A');
        } else {
            return moment(value).format('HH:mm');
        }
    }
}
/*
    Pipe class should be exported as ExportedClass
*/
export {
    TimePipePipe as ExportedClass
};