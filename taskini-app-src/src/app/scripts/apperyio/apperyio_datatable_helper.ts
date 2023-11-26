import {
    Injectable
} from '@angular/core';
import { DataTableOptions, DataTableHelperService } from "./datatable_helper";

@Injectable()
export class ApperyioDataTableHelperService {

    constructor(private DataTableHelper: DataTableHelperService) { }

    private _getTableOptions(component, tableName: string) {
        if (!component.$aio_dataTables || !component.$aio_dataTables[tableName] || !component[component.$aio_dataTables[tableName]]) {
            throw `Table ${tableName} was not found`;
        }
        let tableOptions: DataTableOptions = component[component.$aio_dataTables[tableName]];
        return tableOptions;
    }

    update(component, tableName: string) {
        let tableOptions: DataTableOptions = this._getTableOptions(component, tableName);
        this.DataTableHelper.dataTableOnUpdate(tableOptions);
    }

    clear(component, tableName: string) {
        let tableOptions: DataTableOptions = this._getTableOptions(component, tableName);
        this.DataTableHelper.clearData(tableOptions);
    }

    getSelected(component, tableName: string) {
        let tableOptions: DataTableOptions = this._getTableOptions(component, tableName);
        return [...tableOptions.el.selected];
    }

    getRows(component, tableName: string) {
        let tableOptions: DataTableOptions = this._getTableOptions(component, tableName);
        return [...tableOptions.rows];
    }

    getCount(component, tableName: string) {
        let tableOptions: DataTableOptions = this._getTableOptions(component, tableName);
        return tableOptions.count;
    }

    getLimit(component, tableName: string) {
        let tableOptions: DataTableOptions = this._getTableOptions(component, tableName);
        return tableOptions.limit;
    }

    getOffset(component, tableName: string) {
        let tableOptions: DataTableOptions = this._getTableOptions(component, tableName);
        return tableOptions.offset;
    }

    setRows(component, tableName: string, newValue) {
        let tableOptions: DataTableOptions = this._getTableOptions(component, tableName);
        this.DataTableHelper.updateDataTableProperty(tableOptions, "rows", newValue);
    }

    setCount(component, tableName: string, newValue) {
        let tableOptions: DataTableOptions = this._getTableOptions(component, tableName);
        this.DataTableHelper.updateDataTableProperty(tableOptions, "count", newValue);
    }

    setLimit(component, tableName: string, newValue) {
        let tableOptions: DataTableOptions = this._getTableOptions(component, tableName);
        this.DataTableHelper.updateDataTableProperty(tableOptions, "limit", newValue);
    }

    setOffset(component, tableName: string, newValue) {
        let tableOptions: DataTableOptions = this._getTableOptions(component, tableName);
        this.DataTableHelper.updateDataTableProperty(tableOptions, "offset", newValue);
    }

    goToPage(component, tableName: string, page: number) {
        let tableOptions: DataTableOptions = this._getTableOptions(component, tableName);
        let newOffset = page - 1;
        let oldOffset = tableOptions.el.offset;
        this.DataTableHelper.updateDataTableProperty(tableOptions, "offset", newOffset);
        if (oldOffset !== tableOptions.el.offset) {
            tableOptions.el.page.emit({
                count: tableOptions.count,
                pageSize: tableOptions.limit,
                limit: tableOptions.limit,
                offset: tableOptions.offset
            });
            setTimeout(() => tableOptions.el.recalculate, 10);
        }
    }
}