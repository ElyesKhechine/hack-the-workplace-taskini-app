import {
    Directive,
    AfterViewInit
} from '@angular/core';
import {
    DatatableComponent
} from '@swimlane/ngx-datatable';

const maxAttempts = 100;

@Directive({
    selector: '[aioDatatableResizer]'
})
export default class ApperyioDatatableResizerDirective implements AfterViewInit {
    constructor(private table: DatatableComponent) {}
    fixWidth(attempt: number): void {
        if (
            !this.table.element.parentElement // element is not rendered (because of *ngIf, etc.)
            || attempt > maxAttempts // something went wrong, just stop it 
        ) {
            return;
        }
        setTimeout(() => {
            if (!this.table.element.clientWidth) { // table is not visible yet. no sense to recalculate width
                this.fixWidth(attempt + 1);
                return;
            }
            setTimeout(() => {
                if (this.table.element.parentElement) { // element is still rendered
                    const innerHeader =  this.table.element.querySelector(".datatable-header .datatable-header-inner");
                    if (!innerHeader || innerHeader.clientWidth !== this.table.element.clientWidth) {
                        // recalculate few times because of bug with recalculation in case of smaller column width
                        for (let i = 0; i < 10; i++) {
                            this.table.recalculateColumns();
                        }
                        this.table.recalculate(); // full recalculate (not only columns)
                        const column = this.table.headerComponent.getColumn(0);
                        if (column) {
                            this.table.onColumnResize({ // call resize on the first column to redraw table
                                column: column,
                                newValue: column.width
                            });
                        }
                    }
                }
            }, 300)
        }, 100);
    }
    ngAfterViewInit() {
        // check if this directive is compatible with the current @swimlane/ngx-datatable version api
        if (this.table.element &&
            this.table.recalculate &&
            this.table.recalculateColumns &&
            this.table.headerComponent &&
            this.table.headerComponent.getColumn &&
            this.table.onColumnResize
            ) {
            this.fixWidth(0);
        }
    }
}
