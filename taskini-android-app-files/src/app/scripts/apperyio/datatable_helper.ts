import {
    Injectable
} from '@angular/core';

export interface SortingOptions {
    dir: string
    prop: string
}
export interface DataTableOptions {
    componentName: string,
    headerHeight?: number|string|boolean,
    rowHeight?: number|string,
    footerHeight?: number|string|boolean,
    limit?: number,
    rows: Array<any>,
    isLoading: boolean,
    dataServiceName?: string,
    mode: string,
    count?: number,
    offset?: number,
    dataService?: Function,
    el?: any,
    sorts?: SortingOptions,
    externalSorting: boolean,
    cssClasses?: any,
    messages?: any,
    isRowsMapping?: boolean
}

export const DATA_TABLE_MODES = {
    SERVER_INFINITE: "server-infinite",
    SERVER_PAGES: "server-pages",
    CLIENT_PAGES: "client-pages",
    CLIENT_INFINITE: "client-infinite"
}

@Injectable()
export class DataTableHelperService {
    
    private _invokeService(tableOptions: DataTableOptions, cb?: Function) {
        if (tableOptions.dataService) {
            tableOptions.isLoading = true;
            tableOptions.dataService(() => {
                tableOptions.isLoading = false;
                cb && cb();
            });
        }
    }

    initTableData(component, tableOptions: DataTableOptions) {
        if (tableOptions.dataServiceName && typeof component[tableOptions.dataServiceName] === "function") {
            tableOptions.dataService = component[tableOptions.dataServiceName].bind(component);
        }
        tableOptions.el = component[tableOptions.componentName];
    }

    getBodyElement(tableViewchildElement): HTMLElement {
        return tableViewchildElement.element.getElementsByTagName("datatable-body")[0]
    }

    dataTableOnScroll(e, tableOptions: DataTableOptions) {
        let bodyElement = this.getBodyElement(tableOptions.el);
        if (e && e.srcElement) {
            if (bodyElement.scrollHeight - bodyElement.scrollTop - bodyElement.clientHeight < 1) {
                if(!tableOptions.isLoading) {
                    this._invokeService(tableOptions);
                }
            }
        }
    }

    setPage(e, tableOptions: DataTableOptions) {
        tableOptions.offset = e.offset;
        this._invokeService(tableOptions);
    }

    dataTableOnSort(sorts: SortingOptions, tableOptions: DataTableOptions) {
        if (tableOptions.mode === DATA_TABLE_MODES.SERVER_PAGES || tableOptions.mode === DATA_TABLE_MODES.SERVER_INFINITE) {
            tableOptions.sorts = {
                dir: sorts.dir,
                prop: sorts.prop
            }
            if (tableOptions.externalSorting) {
                this._updateTableFromServer(tableOptions);
            }
        }
    }

    dataTableOnUpdate(tableOptions: DataTableOptions) {
        if (tableOptions.mode === DATA_TABLE_MODES.CLIENT_INFINITE || tableOptions.mode === DATA_TABLE_MODES.CLIENT_PAGES) {
            this._invokeService(tableOptions);
        } else {
            this._updateTableFromServer(tableOptions);
        }
    }

    private _updateTableFromServer(tableOptions: DataTableOptions) {
        if (tableOptions.mode === DATA_TABLE_MODES.SERVER_INFINITE) {
            this.dataTableInitialLoad(tableOptions);
        }
        if (tableOptions.mode === DATA_TABLE_MODES.SERVER_PAGES) {
            this._invokeService(tableOptions);
        }
    }

    dataTableInitialLoad(tableOptions: DataTableOptions) {
        function doLoad() {
            if (tableOptions.mode === DATA_TABLE_MODES.SERVER_PAGES) {
                this.setPage({offset: 0}, tableOptions);
                return;
            }
            if (!tableOptions.isLoading && tableOptions.dataService) {
                let tableBodyElement: HTMLElement = this.getBodyElement(tableOptions.el);
                let rowsLength = tableOptions.rows.length;
                this._invokeService(tableOptions, () => {
                    let pageSize;
                    if (typeof tableOptions.rowHeight === "number") {
                        pageSize = Math.ceil(tableBodyElement.clientHeight / tableOptions.rowHeight);
                    } else {
                        pageSize = Math.ceil(tableBodyElement.clientHeight / 50);
                    }
                    let addedRowsCount = tableOptions.rows.length - rowsLength;
                    if (tableOptions.mode === DATA_TABLE_MODES.SERVER_INFINITE && tableOptions.rows.length < pageSize && addedRowsCount > 0 && addedRowsCount === tableOptions.limit) {
                        doLoad.call(this);
                    }
                })
            }
        }
        this.clearData(tableOptions);
        doLoad.call(this)
    }

    private getMaxOffset(count, limit) {
        let maxOffset = Math.floor(count/limit);
        return isNaN(maxOffset) ? Infinity : maxOffset;
    }

    updateDataTableProperty(tableOptions: DataTableOptions, propName: string, newData: any) {
        switch (propName) {
            case "rows":
                tableOptions.rows = this.getNewRows(tableOptions, newData);
                if (tableOptions.mode === DATA_TABLE_MODES.CLIENT_PAGES) {
                    tableOptions.el.count = tableOptions.rows.length;
                    tableOptions.count = tableOptions.el.count;
                    let maxOffset = this.getMaxOffset(tableOptions.el.count, tableOptions.el.limit);
                    if (tableOptions.el.offset > maxOffset) {
                        tableOptions.el.offset = maxOffset;
                    }
                    tableOptions.offset = tableOptions.el.offset;
                }
                break;
            case "count":
                tableOptions.el.count = newData;
                tableOptions.count = newData;
                tableOptions.offset = tableOptions.el.offset;
                break;
            case "limit":
                tableOptions.el.limit = newData;
                tableOptions.limit = newData;
                tableOptions.offset = tableOptions.el.offset;
                break;
            case "offset":
                tableOptions.el.offset = newData;
                tableOptions.offset = tableOptions.el.offset;
                break;
        }
    }

    getNewRows(tableOptions: DataTableOptions, newData) {
        if (tableOptions.mode === DATA_TABLE_MODES.SERVER_INFINITE) {
            return [...tableOptions.rows, ...newData];
        } else {
            return [...newData];
        }
    }

    clearData(tableOptions: DataTableOptions) {
        tableOptions.rows = [];
        tableOptions.el.selected = [];
        tableOptions.offset = 0;
        tableOptions.el.offset = 0;
        tableOptions.count = 0;
    }

};