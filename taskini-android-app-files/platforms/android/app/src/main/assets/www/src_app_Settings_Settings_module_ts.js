(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Settings_Settings_module_ts"],{

/***/ 13019:
/*!*********************************************!*\
  !*** ./src/app/Settings/Settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 93952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 11371);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings */ 58015);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 56972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 43543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 22482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 34363);














let SettingsPageModule = class SettingsPageModule {};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_Settings__WEBPACK_IMPORTED_MODULE_2__.Settings],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: '',
    component: _Settings__WEBPACK_IMPORTED_MODULE_2__.Settings
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_Settings__WEBPACK_IMPORTED_MODULE_2__.Settings]
})], SettingsPageModule);


/***/ }),

/***/ 58015:
/*!**************************************!*\
  !*** ./src/app/Settings/Settings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settings": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _Settings_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.html?ngResource */ 78178);
/* harmony import */ var _Settings_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.css?ngResource */ 44777);
/* harmony import */ var _Settings_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Settings_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Settings_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Settings.scss?ngResource */ 78282);
/* harmony import */ var _Settings_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Settings_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 67845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 32535);
/* harmony import */ var _scripts_custom_ThemeService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom/ThemeService */ 20375);
/* harmony import */ var _scripts_custom_ReminderService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom/ReminderService */ 25018);

var _a, _b, _c, _d, _e;










let Settings = class Settings {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  themeService;
  reminderService;
  dark;
  timeFormat;
  reminder;
  isInitialized;
  aioChangeDetector;
  currentItem = null;
  mappingData = {};
  __getMapping(_currentItem, property, defaultValue, isVariable, isSelected) {
    return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
  }
  __isPropertyInMapping(_currentItem, property) {
    return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
  }
  __setMapping(data = {}, keyName, propName) {
    const changes = data.detail || {};
    if (propName) {
      this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
    } else {
      this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
    }
    this.$aio_changeDetector.detectChanges();
  }
  __bindedMethods = {};
  themeToggle(event) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.dark = event.detail.checked;
      _this.themeService.setTheme(_this.dark);
    })();
  }
  timeToggle(event) {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.timeFormat = event.detail.value;
      if (_this2.timeFormat === '12') {
        yield _this2.Apperyio.data.setStorage("timeFormat", true);
      } else {
        yield _this2.Apperyio.data.setStorage("timeFormat", false);
      }
    })();
  }
  constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector, themeService, reminderService) {
    this.Apperyio = Apperyio;
    this.$aio_mappingHelper = $aio_mappingHelper;
    this.$aio_changeDetector = $aio_changeDetector;
    this.themeService = themeService;
    this.reminderService = reminderService;
    this.dark = false;
    this.timeFormat = '12h';
    this.reminder = false;
    this.isInitialized = false;
    this.aioChangeDetector = this.$aio_changeDetector;
    this.initializeSettings();
  }
  initializeSettings() {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.dark = yield _this3.Apperyio.data.getStorage("preferenceTheme");
      _this3.reminder = yield _this3.Apperyio.data.getStorage("reminder");
      _this3.timeFormat = (yield _this3.Apperyio.data.getStorage("timeFormat")) ? '12' : '24';
      _this3.isInitialized = true;
    })();
  }
  remaindertoggleIonChange__j_61(event, currentItem) {
    var _this4 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      yield _this4.Apperyio.data.setStorage("reminder", event.target.checked);
      if (event.target.checked) {
        _this4.reminderService.restoreAllReminders();
      } else {
        _this4.reminderService.deleteAllReminders();
      }
    })();
  }
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: _scripts_custom_ThemeService__WEBPACK_IMPORTED_MODULE_6__.ExportedClass
  }, {
    type: _scripts_custom_ReminderService__WEBPACK_IMPORTED_MODULE_7__.ExportedClass
  }];
};
Settings = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _Settings_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  selector: 'page-settings',
  styles: [(_Settings_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default()), (_Settings_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef) === "function" ? _c : Object, typeof (_d = typeof _scripts_custom_ThemeService__WEBPACK_IMPORTED_MODULE_6__.ExportedClass !== "undefined" && _scripts_custom_ThemeService__WEBPACK_IMPORTED_MODULE_6__.ExportedClass) === "function" ? _d : Object, typeof (_e = typeof _scripts_custom_ReminderService__WEBPACK_IMPORTED_MODULE_7__.ExportedClass !== "undefined" && _scripts_custom_ReminderService__WEBPACK_IMPORTED_MODULE_7__.ExportedClass) === "function" ? _e : Object])], Settings);


/***/ }),

/***/ 44777:
/*!**************************************************!*\
  !*** ./src/app/Settings/Settings.css?ngResource ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Styles properties */\nion-col[_aio-D3CF1DA2] {\n\tpadding-top: 0px;\n\tpadding-right: 0px;\n\tpadding-bottom: 0px;\n\tpadding-left: 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/Settings/Settings.css"],"names":[],"mappings":";AACA,sBAAsB;AACtB;CACC,gBAAgB;CAChB,kBAAkB;CAClB,mBAAmB;CACnB,iBAAiB;AAClB","sourcesContent":["\n/* Styles properties */\nion-col[_aio-D3CF1DA2] {\n\tpadding-top: 0px;\n\tpadding-right: 0px;\n\tpadding-bottom: 0px;\n\tpadding-left: 0px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 78282:
/*!***************************************************!*\
  !*** ./src/app/Settings/Settings.scss?ngResource ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom SCSS */\n.card {\n  min-height: 54px;\n}\n\n.time-card {\n  min-height: 54px;\n}\n\n.back-button {\n  display: block;\n  margin-top: 5px;\n  width: 50px;\n  color: var(--ion-text-color);\n  --padding-start: 0;\n}\n\n.select-options .select-placeholder {\n  color: var(--ion-color-light) !important;\n  opacity: 1 !important;\n}\n.select-options .select-icon {\n  color: var(--ion-color-light) !important;\n  opacity: 1 !important;\n}\n\nion-select::part(icon) {\n  display: none !important;\n}\n\n.title {\n  font-size: 28px;\n  font-weight: 600;\n}\n\n.text {\n  font-size: 18px;\n  font-weight: 600;\n}\n\nion-select {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: var(--ion-color-primary) !important;\n  opacity: 1;\n}\n\nion-item {\n  --border-style: unset;\n}\n\n.select-text {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: var(--ion-color-primary) !important;\n}\n\n.padding-t-b-6 {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\n.padding-r-10 {\n  padding-right: 10px;\n}\n\n.margin-r-0 {\n  margin-right: 0;\n}\n\nion-toggle {\n  padding-right: 0px;\n}\n\nion-item {\n  --inner-padding-start:0;\n  --inner-padding-end:0;\n  --padding-start:0;\n}\n\n.wrapper-padding {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 4px;\n  padding-bottom: 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/Settings/Settings.scss"],"names":[],"mappings":"AAIA,gBAAA;AACA;EACI,gBAAA;AAHJ;;AAMA;EACI,gBAAA;AAHJ;;AAUA;EACI,cAAA;EACA,eAAA;EACA,WAAA;EACA,4BAAA;EACA,kBAAA;AAPJ;;AAWI;EACI,wCAAA;EACA,qBAAA;AARR;AAUI;EACI,wCAAA;EACA,qBAAA;AARR;;AAYA;EACE,wBAAA;AATF;;AAYA;EACE,eAAA;EACA,gBAAA;AATF;;AAYA;EACE,eAAA;EACA,gBAAA;AATF;;AAYA;EACG,0BAAA;EACA,2BAAA;EACA,0CAAA;EACA,UAAA;AATH;;AAYA;EACI,qBAAA;AATJ;;AAYA;EACI,0BAAA;EACA,2BAAA;EACA,0CAAA;AATJ;;AAYA;EACI,gBAAA;EACA,mBAAA;AATJ;;AAYA;EACI,mBAAA;AATJ;;AAYA;EACI,eAAA;AATJ;;AAYA;EACI,kBAAA;AATJ;;AAYA;EACI,uBAAA;EACA,qBAAA;EACA,iBAAA;AATJ;;AAYA;EACI,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AATJ","sourcesContent":["/* Custom SCSS */\n.card {\n  min-height: 54px;\n}\n\n.time-card {\n  min-height: 54px;\n}\n\n.back-button {\n  display: block;\n  margin-top: 5px;\n  width: 50px;\n  color: var(--ion-text-color);\n  --padding-start: 0;\n}\n\n.select-options .select-placeholder {\n  color: var(--ion-color-light) !important;\n  opacity: 1 !important;\n}\n.select-options .select-icon {\n  color: var(--ion-color-light) !important;\n  opacity: 1 !important;\n}\n\nion-select::part(icon) {\n  display: none !important;\n}\n\n.title {\n  font-size: 28px;\n  font-weight: 600;\n}\n\n.text {\n  font-size: 18px;\n  font-weight: 600;\n}\n\nion-select {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: var(--ion-color-primary) !important;\n  opacity: 1;\n}\n\nion-item {\n  --border-style: unset;\n}\n\n.select-text {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: var(--ion-color-primary) !important;\n}\n\n.padding-t-b-6 {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\n.padding-r-10 {\n  padding-right: 10px;\n}\n\n.margin-r-0 {\n  margin-right: 0;\n}\n\nion-toggle {\n  padding-right: 0px;\n}\n\nion-item {\n  --inner-padding-start:0;\n  --inner-padding-end:0;\n  --padding-start:0;\n}\n\n.wrapper-padding {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 4px;\n  padding-bottom: 0px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 78178:
/*!***************************************************!*\
  !*** ./src/app/Settings/Settings.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content _aio-4C1C9306>\n    <ion-grid _aio-27C7A4EF #j_47>\n        <ion-row _aio-E92C646C #j_48 class=\"header-row\">\n            <ion-col _aio-D3CF1DA2 #j_49 class=\"back-button ion-align-self-start\" size=\"4\">\n                <ion-back-button _aio-ADD283E9 #j_50 defaultHref=\"alltasks\" mode=\"md\" icon=\"chevron-back-outline\"\n                class=\"back-button\">\n                </ion-back-button>\n            </ion-col>\n            <ion-col _aio-7A4A7EB0 #j_51 class=\"ion-align-self-center ion-text-center\">\n                <ion-text _aio-D937E8C5 #j_52 class=\"title\">\n                    Settings\n                </ion-text>\n            </ion-col>\n            <ion-col _aio-DD3859BD #j_53>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-card _aio-14398764 #j_54 class=\"card\" *ngIf=\"isInitialized\">\n        <ion-item #j_55 _aio-8812C169 lines=\"none\" class=\"wrapper-padding\">\n            <ion-label _aio-B2182EDD #j_56 class=\"text\">\n                Dark Theme\n            </ion-label>\n            <ion-toggle _aio-E5DAB6A3 #j_57 value=\"\" name=\"Toggle1\" mode=\"ios\" slot=\"end\" checked=\"false\"\n            color=\"primary\" [(ngModel)]=\"this.dark\" (ionChange)=\"themeToggle($event)\">\n            </ion-toggle>\n        </ion-item>\n    </ion-card>\n    <ion-card _aio-4E9D1EB9 #j_58 class=\"card\" *ngIf=\"isInitialized\">\n        <ion-item #j_59 _aio-806DB943 lines=\"none\" class=\"wrapper-padding\">\n            <ion-label _aio-E28173C0 #j_60 class=\"text\">\n                Reminder\n            </ion-label>\n            <ion-toggle _aio-A2CA33E4 #j_61 value=\"Toggle1_value\" name=\"Toggle1\" mode=\"ios\"\n            slot=\"end\" checked=\"false\" color=\"primary\" (ionChange)=\"remaindertoggleIonChange__j_61($event, currentItem)\"\n            [(ngModel)]=\"reminder\">\n            </ion-toggle>\n        </ion-item>\n    </ion-card>\n    <ion-card _aio-E177342B #j_62 class=\"time-card no-padding\">\n        <ion-item #j_63 _aio-D5CBE294 lines=\"none\" class=\"select wrapper-padding\">\n            <ion-label _aio-19ABE32A #j_64 class=\"text\">\n                Time Format\n            </ion-label>\n            <ion-select _aio-A3BCFD38 #j_65 cancelText=\"CANCEL\" name=\"SelectItemWrapper\" okText=\"OK\"\n            placeholder=\"12h\" slot=\"end\" class=\"select-options margin-r-0\" [(ngModel)]=\"timeFormat\"\n            (ionChange)=\"timeToggle($event)\">\n                <ion-select-option #j_66 value=\"12\" class=\"option\">\n                    12 h\n                </ion-select-option>\n                <ion-select-option #j_67 value=\"24\" class=\"option\">\n                    24 h\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-card>\n    <ion-button _aio-DE07AC7D #j_68 expand=\"block\" [routerLink]=\"['/profileconfig']\">\n        <ion-icon _aio-DE07AC7D #j_68__icon name=\"man\">\n        </ion-icon>\n        Edit Profile\n    </ion-button>\n    <ion-button _aio-ACD094BF #j_69 expand=\"block\" routerDirection=\"forward\" [routerLink]=\"['/notif']\">\n        <ion-icon _aio-ACD094BF #j_69__icon name=\"notifications\">\n        </ion-icon>\n        Notifications\n    </ion-button>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>\n<ion-footer _aio-249F6910>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_Settings_Settings_module_ts.js.map