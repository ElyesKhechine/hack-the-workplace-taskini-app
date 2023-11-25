(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ProfileConfig_ProfileConfig_module_ts"],{

/***/ 25770:
/*!*******************************************************!*\
  !*** ./src/app/ProfileConfig/ProfileConfig.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileConfigPageModule": () => (/* binding */ ProfileConfigPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 93952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 11371);
/* harmony import */ var _ProfileConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileConfig */ 60230);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 56972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 43543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 22482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 34363);














let ProfileConfigPageModule = class ProfileConfigPageModule {};
ProfileConfigPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_ProfileConfig__WEBPACK_IMPORTED_MODULE_2__.ProfileConfig],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: '',
    component: _ProfileConfig__WEBPACK_IMPORTED_MODULE_2__.ProfileConfig
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_ProfileConfig__WEBPACK_IMPORTED_MODULE_2__.ProfileConfig]
})], ProfileConfigPageModule);


/***/ }),

/***/ 60230:
/*!************************************************!*\
  !*** ./src/app/ProfileConfig/ProfileConfig.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileConfig": () => (/* binding */ ProfileConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ProfileConfig_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileConfig.html?ngResource */ 4645);
/* harmony import */ var _ProfileConfig_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileConfig.css?ngResource */ 68194);
/* harmony import */ var _ProfileConfig_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProfileConfig_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProfileConfig_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileConfig.scss?ngResource */ 53613);
/* harmony import */ var _ProfileConfig_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProfileConfig_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 67845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 32535);
var _a, _b, _c;








let ProfileConfig = class ProfileConfig {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
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
  constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
    this.Apperyio = Apperyio;
    this.$aio_mappingHelper = $aio_mappingHelper;
    this.$aio_changeDetector = $aio_changeDetector;
    this.aioChangeDetector = this.$aio_changeDetector;
  }
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }];
};
ProfileConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  template: _ProfileConfig_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  selector: 'page-profile-config',
  styles: [(_ProfileConfig_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_ProfileConfig_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef) === "function" ? _c : Object])], ProfileConfig);


/***/ }),

/***/ 68194:
/*!************************************************************!*\
  !*** ./src/app/ProfileConfig/ProfileConfig.css?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Styles properties */", "",{"version":3,"sources":["webpack://./src/app/ProfileConfig/ProfileConfig.css"],"names":[],"mappings":";AACA,sBAAsB","sourcesContent":["\n/* Styles properties */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 53613:
/*!*************************************************************!*\
  !*** ./src/app/ProfileConfig/ProfileConfig.scss?ngResource ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom SCSS */", "",{"version":3,"sources":["webpack://./src/app/ProfileConfig/ProfileConfig.scss"],"names":[],"mappings":"AAIA,gBAAA","sourcesContent":["/* Custom SCSS */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4645:
/*!*************************************************************!*\
  !*** ./src/app/ProfileConfig/ProfileConfig.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header _aio-06109842>\n    <ion-toolbar _aio-D72AF901 #j_114>\n        <ion-title _aio-72056332 #j_116>\n            Toolbar title\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" _aio-D326870D>\n    <ion-item #j_85 _aio-39D2B899>\n        <ion-label _aio-0B0AB521 #j_86 position=\"stacked\">\n            First Name\n        </ion-label>\n        <ion-input _aio-E586F6AC #j_87 name=\"Input1\" placeholder=\"Enter text\">\n        </ion-input>\n    </ion-item>\n    <ion-item #j_88 _aio-981E1DCB>\n        <ion-label _aio-2793FE67 #j_89 position=\"stacked\">\n            Last Name\n        </ion-label>\n        <ion-input _aio-5FBD5C2A #j_90 name=\"Input2\" placeholder=\"Enter text\">\n        </ion-input>\n    </ion-item>\n    <ion-item #j_91 _aio-E2458E23>\n        <ion-label _aio-370CE9E5 #j_92 position=\"stacked\">\n            Last Name\n        </ion-label>\n        <ion-input _aio-445B8FB0 #j_93 name=\"Input2\" placeholder=\"Enter text\">\n        </ion-input>\n    </ion-item>\n    <ion-item #j_94 _aio-A3CF5902>\n        <ion-label _aio-27267C9B #j_95 position=\"stacked\">\n            Phone Number\n        </ion-label>\n        <ion-input _aio-DA579785 #j_96 name=\"Input4\" placeholder=\"Enter text\">\n        </ion-input>\n    </ion-item>\n    <ion-item #j_97 _aio-ECE87047>\n        <ion-label _aio-2AF124C4 #j_98 position=\"stacked\">\n            Company\n        </ion-label>\n        <ion-input _aio-1C360A48 #j_99 name=\"Input6\" placeholder=\"Enter text\">\n        </ion-input>\n    </ion-item>\n    <ion-item #j_100 _aio-268EB763>\n        <ion-label _aio-33A039C4 #j_101 position=\"stacked\">\n            Role\n        </ion-label>\n        <ion-select _aio-010A6169 #j_102 cancelText=\"CANCEL\" name=\"Select1\" okText=\"OK\"\n        placeholder=\"Select\">\n            <ion-select-option #j_103 value=\"value1\">\n                Employee\n            </ion-select-option>\n            <ion-select-option #j_104 value=\"value2\">\n                Employer\n            </ion-select-option>\n        </ion-select>\n    </ion-item>\n    <ion-item #j_105 _aio-193A6B8C>\n        <ion-label _aio-6E5D85A1 #j_106 position=\"stacked\">\n            Department\n        </ion-label>\n        <ion-input _aio-1E0924BD #j_107 name=\"Input5\" placeholder=\"Enter text\">\n        </ion-input>\n    </ion-item>\n    <ion-item #j_108 _aio-E64672DC>\n        <ion-label _aio-F322B05C #j_109>\n            Birth Date\n        </ion-label>\n        <aio-datetime _aio-65B8FEEC #j_110 placeholder=\"Select date\" name=\"Datetime1\" presentation=\"date\"\n        [formatOptions]=''>\n            <ion-datetime [showDefaultButtons]=\"true\" presentation=\"date\" firstDayOfWeek=\"0\">\n            </ion-datetime>\n        </aio-datetime>\n    </ion-item>\n    <ion-button _aio-DFDFFE79 #j_111 expand=\"block\" [routerLink]=\"['/alltasks']\">\n        Submit\n    </ion-button>\n    <ion-button _aio-83B65DF0 #j_112 expand=\"block\" [routerLink]=\"['/settings']\">\n        Back\n    </ion-button>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>\n<ion-footer _aio-BA769B74>\n    <ion-toolbar _aio-9E2499FD #j_118>\n        <ion-title _aio-96E3FC2A #j_120>\n            Toolbar title\n        </ion-title>\n    </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_ProfileConfig_ProfileConfig_module_ts.js.map