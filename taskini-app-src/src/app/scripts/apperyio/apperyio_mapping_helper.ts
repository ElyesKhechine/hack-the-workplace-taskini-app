import {
    Injectable
} from '@angular/core';
import {
    IGNORED_VALUE
} from '../constants';
import {
    ApperyioDataHelperService
} from './apperyio_data_helper';
import _ from "lodash";
@Injectable()
export class ApperyioMappingHelperService {
    constructor(private $aio_dataHelper: ApperyioDataHelperService) {}
    get IGNORED_VALUE() {
        return IGNORED_VALUE;
    }
    /**
     * element - ViewChild element
     * elementType - componentBeanName ("ion4button", "ion4input", "ion4card"...)
     * propertyName - property name ("value", "text", "label")
     **/
    getComponentPropValue(variableName: string, elementType: string, propertyName: string) {
        function getInnerText(element) {
            var el = element.el || element.nativeElement;
            if (el) {
                return Array.prototype.reduce.call(el.childNodes, (a, b) => {
                    return a + (b.nodeType === b.TEXT_NODE? b.textContent.trim(): '');
                }, '');
            }
            return '';
        }
        // get the element from a variable of the screen component
        let element = null;
        if (variableName) {
            element = this[variableName] || this[variableName + "_el"] || null;
        }
        if (!element) {
            return;
        }
        if (!propertyName) {
            return element;
        }
        if (propertyName === "className" || propertyName.endsWith(".className")) {
            var classList;
            if (element) {
                if (element.el) { // for Ionic 4 components
                    classList = element.el.classList;
                } else if (element.nativeElement) { // for native html components
                    classList = element.nativeElement.classList;
                } else if (element._elem && element._elem.nativeElement) { // for Google Map component
                    classList = element._elem.nativeElement.classList;
                } else if (element.constructor && (element.constructor.name === "NgForm" || element.constructor.name === "NgModel")) {
                    // for Angular form and controls
                    element = this[variableName + "_el"];
                    if (element) {
                        classList = element.nativeElement.classList;
                    }
                }
            }
            return classList? classList.toString(): "";
        }
        let propValue;
        switch (elementType) {
            case "ionic5button":
                switch (propertyName) {
                    case "text":
                        propValue = element.el.textContent.trim();
                        break;
                    case "icon.name":
                        propValue = element && element.name? element.name: "";
                        break;
                    case "icon.customIcon":
                        propValue = element && element.src? element.src: "";
                        break;
                }
                break;
            case "ionic5carditem":
                propValue = getInnerText(element);
                break;
            case "ionic5carditemtitle":
                propValue = element? element.el.textContent.trim(): "";
                break;
            case "ionic5googlemap":
                propValue = element[propertyName.split('.')[1]].toString();
                break;
            case "ionic5googlemapmarker":
                propValue = element.nativeElement.getAttribute('ng-reflect-' + propertyName.split('.')[1]);
                break;
            case "ionic5html":
                propValue = element.nativeElement.innerHTML;
                break;
            case "ionic5icon":
                switch (propertyName) {
                    case "customIcon":
                        propValue = element.src? element.src: "";
                        break;
                    case "style":
                        propValue = element.name? element.name: "";
                        break;
                }
                break;
            case "ionic5label":
                switch (propertyName) {
                    case "text":
                        propValue = element? element.el.textContent.trim(): "";
                        break;
                }
                break;
            case "ionic5itemicon":
                switch (propertyName) {
                    case "name":
                        propValue = element && element.name? element.name: "";
                        break;
                    case "customIcon":
                        propValue = element && element.src? element.src: "";
                        break;
                }
                break;
            case "ionic5image":
                element = element.el || element.nativeElement || null;
                switch (propertyName) {
                    case "altText":
                        propValue = element && element.alt? element.alt: "";
                        break;
                    case "imageSrc":
                        propValue = element && element.src? element.src: "";
                        break;
                }
                break;
            case "ionic5inputitem":
                switch (propertyName) {
                    case "value":
                        if (element.type === "file") {
                            propValue = element.multiple? element.el.children[0].files: element.el.children[0].files[0];
                        } else {
                            propValue = element.value || "";
                        }
                        break;
                }
                break;
            case "ionic5textareaitem":
                switch (propertyName) {
                    case "value":
                        propValue = element.value || "";
                        break;
                }
                break;
            case "ionic5itemlabel":
                propValue = element? element.el.textContent.trim(): "";
                break;
            case "ionic5selectitem":
                switch (propertyName) {
                    case "value":
                        propValue = element.value || "";
                        break;
                    case "selectedText":
                        propValue = element.selectedText || "";
                        break;
                }
                break;
            case "ionic5selectoption":
                switch (propertyName) {
                    case "selected":
                        propValue = element.selected;
                        break;
                    case "text":
                        propValue = element.el.textContent.trim();
                        break;
                    case "value":
                        propValue = element.value;
                        break;
                }
                break;
            case "ionic5spinner":
                propValue = element.name? element.name: "";
                break;
            case "ionic5text":
                switch (propertyName) {
                    case "wrapper":
                        propValue = element.el.tagName;
                        break;
                    case "text":
                        propValue = getInnerText(element);
                        break;
                }
                break;
            case "ionic5search":
                propValue = element[propertyName];
                break;
            case "ionic5radiobuttonitem":
                switch (propertyName) {
                    case "value":
                        propValue = element.value;
                        break;
                    case "checked":
                        propValue = element.checked;
                        break;
                }
                break;
            case "ionic5checkboxitem":
                switch (propertyName) {
                    case "value":
                        propValue = element.value;
                        break;
                    case "checked":
                        propValue = element.checked;
                        break;
                }
                break;
            case "ionic5toolbartitle":
                propValue = element? element.el.textContent.trim(): "";
                break;
            case "ionic5form":
                switch (propertyName) {
                    case "formData":
                        propValue = element && element.value? element.value: {};
                        break;
                    case "isValid":
                        propValue = element.valid;
                        break;
                    case "isInvalid":
                        propValue = element.invalid;
                        break;
                }
                break;
            case "ionic5radiogroup":
                propValue = element? element.value: '';
                break;
            case "ionic5radiogroupheader":
                propValue = element? element.el.textContent.trim(): '';
                break;
            case "ionic5datetimeitem":
                switch (propertyName) {
                    case "value":
                        propValue = element && element.value? element.value: "";
                        break;
                }
                break;
            case "ionic5datatable":
                switch (propertyName) {
                    case "count":
                    case "offset":
                        propValue = element && element[propertyName]? element[propertyName]: 0;
                        break;
                    case "limit":
                        propValue = element && element.limit? element.limit: undefined;
                        break;
                    case "rows":
                        propValue = element && element.rows? element.rows: [];
                        break;
                }
                break;
            case "ionic5link":
                element = element.el || element.nativeElement || null;
                switch (propertyName) {
                    case "href":
                        propValue = element? element.href: "";
                        break;
                    case "text":
                        propValue = element? element.textContent.trim(): "";
                        break;
                }
                break;
            case "listitemoption":
                {
                    switch (propertyName) {
                        case "icon.name":
                            propValue = element && element.name? element.name: "";
                            break;
                        case "icon.customIcon":
                            propValue = element && element.src? element.src: "";
                            break;
                    }
                }
                break;
            case "ionic5toggleitem":
                switch (propertyName) {
                    case "checked":
                        propValue = element.checked;
                        break;
                    case "value":
                        propValue = element.value;
                        break;
                }
                break;
            case "ionic5rangeitem":
                switch (propertyName) {
                    case "value":
                        propValue = element.value;
                        break;
                }
                break;
            case "ionic5filepicker":
                switch (propertyName) {
                    case "value":
                        propValue = element.getValue();
                        break;
                }
                break;
            case "ionic5card":
            case "ionic5googlemapwindow":
            case "ionic5grid":
            case "ionic5gridcell":
            case "ionic5gridrow":
            case "indexscreen":
            case "ionic5menu":
            case "ionic5menucontent":
            case "ionic5menufooter":
            case "ionic5menuheader":
            case "ionic5splitpane":
            case "ionic5list":
            case "ionic5listitem":
            case "listitemoptions":
            case "ionic5content":
            case "ionic5footer":
            case "ionic5header":
            case "ionic5tabbar":
            case "ionic5tabbutton":
            case "ionic5tabs":
            case "screen":
            case "ionic5toolbar":
            case "ionic5toolbarbuttons":
                break;
        }
        return propValue;
    }
    getDataTableMapping(data, property: string, defaultValue) {
        const nestedObject = property.indexOf('.') != -1? property.split('.'): '',
            dataItem = nestedObject? data[nestedObject[0]][nestedObject[1]]: data[property];
        if (data.isRowsMapping) {
            return dataItem;
        }
        if (defaultValue) {
            return defaultValue;
        }
        return dataItem;
    }
    isPropertyInMapping(mappingData, currentItem, property) {
        return property in (currentItem || mappingData || {});
    }
    getMapping(_mappingData, _currentItem, property, defaultValue, isVariable?, isSelected?) {
        const mappingData = _currentItem || _mappingData;
        let mappingValue;
        if (_.isObject(_currentItem) && property in _currentItem) {
            mappingValue = _.isFunction(_currentItem[property])? _currentItem[property](): _currentItem[property];
            return isSelected?!!mappingValue: mappingValue;
        } else {
            if (_.isObject(_mappingData) && property in _mappingData) {
                mappingValue = _.isFunction(_mappingData[property])? _mappingData[property](): _mappingData[property];
                return isSelected?!!mappingValue: mappingValue;
            }
        }
        if (mappingData && _currentItem) {
            return isSelected?!!_currentItem: _currentItem;
        }
        if ((defaultValue !== "" && defaultValue !== undefined && defaultValue !== null) || isVariable) {
            if (typeof defaultValue == 'string') {
                return defaultValue.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
            }
            return defaultValue;
        }
        if (isSelected) {
            return false;
        }
        return '';
    }
    private _getSubdata(data, path) {
        if (data && path && path.length) {
            try {
                let res = data;
                for (var i = 0; i < path.length; i++) {
                    if (res) {
                        res = res[path[i]];
                    } else {
                        return undefined;
                    }
                }
                return res;
            } catch (e) {
                return undefined;
            }
        }
        return data;
    }
    getSubdata(data, path, defaultValue?) {
        var value = this._getSubdata(data, path);
        if (value === null && defaultValue !== undefined) {
            return defaultValue;
        }
        return value !== undefined? value: defaultValue;
    }
    async getStorageValue(varName, path) {
        var data = await this.$aio_dataHelper.getStorage(varName);
        return this._getSubdata(data, path);
    }
    getServiceDataValue(varName, path) {
        var data = this.$aio_dataHelper.getVariable(varName);
        return this._getSubdata(data, path);
    }
    private _updateData(data, path, value) {
        if (path && path.length) {
            if (!data || typeof data !== "object") {
                data = {};
            }
            if (path.length == 1) {
                data[path[0]] = value;
            } else {
                let res = data;
                for (var i = 0; i < path.length - 1; i++) {
                    if (!res[path[i]] || typeof res[path[i]] !== "object") {
                        if (Number.isInteger(path[i + 1])) {
                            res[path[i]] = [];
                        } else {
                            res[path[i]] = {};
                        }
                    }
                    res = res[path[i]];
                }
                res[path[path.length - 1]] = value;
            }
        } else {
            data = value;
        }
        return data;
    }
    updateData(data, path, value) {
        return this._updateData(data, path, value);
    }
    async setStorageValue(varName, path, value) {
        var data = await this.$aio_dataHelper.getStorage(varName);
        await this.$aio_dataHelper.setStorage(varName, this._updateData(data, path, value));
    }
    async setServiceDataValue(varName, path, value) {
        var data = this.$aio_dataHelper.getVariable(varName);
        this.$aio_dataHelper.setVariable(varName, this._updateData(data, path, value));
    }
};