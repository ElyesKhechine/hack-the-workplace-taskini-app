(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_OrderBy_OrderBy_module_ts"],{

/***/ 66317:
/*!*******************************************!*\
  !*** ./src/app/OrderBy/OrderBy.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderByPageModule": () => (/* binding */ OrderByPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 93952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 11371);
/* harmony import */ var _OrderBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderBy */ 19066);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 56972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 43543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 22482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 34363);














let OrderByPageModule = class OrderByPageModule {};
OrderByPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_OrderBy__WEBPACK_IMPORTED_MODULE_2__.OrderBy],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: '',
    component: _OrderBy__WEBPACK_IMPORTED_MODULE_2__.OrderBy
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_OrderBy__WEBPACK_IMPORTED_MODULE_2__.OrderBy]
})], OrderByPageModule);


/***/ }),

/***/ 19066:
/*!************************************!*\
  !*** ./src/app/OrderBy/OrderBy.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderBy": () => (/* binding */ OrderBy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _OrderBy_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderBy.html?ngResource */ 13670);
/* harmony import */ var _OrderBy_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderBy.css?ngResource */ 16627);
/* harmony import */ var _OrderBy_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_OrderBy_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OrderBy_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderBy.scss?ngResource */ 20398);
/* harmony import */ var _OrderBy_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_OrderBy_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 67845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 32535);
var _a, _b, _c;








let OrderBy = class OrderBy {
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
OrderBy = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  template: _OrderBy_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  selector: 'page-order-by',
  styles: [(_OrderBy_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_OrderBy_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef) === "function" ? _c : Object])], OrderBy);


/***/ }),

/***/ 16627:
/*!************************************************!*\
  !*** ./src/app/OrderBy/OrderBy.css?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Styles properties */\nion-button[_aio-FB83182E] {\n\tposition: sticky;\n\ttop: 100%;\n}", "",{"version":3,"sources":["webpack://./src/app/OrderBy/OrderBy.css"],"names":[],"mappings":";AACA,sBAAsB;AACtB;CACC,gBAAgB;CAChB,SAAS;AACV","sourcesContent":["\n/* Styles properties */\nion-button[_aio-FB83182E] {\n\tposition: sticky;\n\ttop: 100%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 20398:
/*!*************************************************!*\
  !*** ./src/app/OrderBy/OrderBy.scss?ngResource ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom SCSS */", "",{"version":3,"sources":["webpack://./src/app/OrderBy/OrderBy.scss"],"names":[],"mappings":"AAIA,gBAAA","sourcesContent":["/* Custom SCSS */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 13670:
/*!*************************************************!*\
  !*** ./src/app/OrderBy/OrderBy.html?ngResource ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header _aio-761B14F5>\n    <ion-toolbar _aio-6DE4CB1F #j_173>\n        <ion-title _aio-899F7BF7 #j_175>\n            Toolbar title\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" _aio-02B44855>\n    <ion-item #j_147 _aio-F5C6D25F>\n        <ion-label _aio-69C8F003 #j_148>\n            First come, First served\n        </ion-label>\n        <ion-toggle _aio-17A38781 #j_149 value=\"Toggle1_value\" name=\"Toggle1\">\n        </ion-toggle>\n    </ion-item>\n    <ion-item #j_150 _aio-462BED2A>\n        <ion-label _aio-5184ADEE #j_151>\n            Deadline\n        </ion-label>\n        <ion-toggle _aio-52DE9557 #j_152 value=\"Toggle2_value\" name=\"Toggle2\">\n        </ion-toggle>\n    </ion-item>\n    <ion-item #j_153 _aio-3D4EBE39>\n        <ion-label _aio-EE603101 #j_154>\n            Shortest Job First\n        </ion-label>\n        <ion-toggle _aio-4EBF0E21 #j_155 value=\"Toggle3_value\" name=\"Toggle3\">\n        </ion-toggle>\n    </ion-item>\n    <ion-item #j_156 _aio-023123B0>\n        <ion-label _aio-0AB5BAB7 #j_157>\n            Highest Priority First\n        </ion-label>\n        <ion-toggle _aio-DB76FFAF #j_158 value=\"Toggle4_value\" name=\"Toggle4\">\n        </ion-toggle>\n    </ion-item>\n    <ion-item #j_159 _aio-78C6CC3A>\n        <ion-label _aio-DD0CAE2D #j_160>\n            Shortest Remaining Time\n        </ion-label>\n        <ion-toggle _aio-23EFC661 #j_161 value=\"Toggle5_value\" name=\"Toggle5\">\n        </ion-toggle>\n    </ion-item>\n    <ion-item #j_162 _aio-2A3A3ED0>\n        <ion-label _aio-225D48BC #j_163>\n            Round Robin\n        </ion-label>\n        <ion-toggle _aio-D514427E #j_164 value=\"Toggle6_value\" name=\"Toggle6\">\n        </ion-toggle>\n    </ion-item>\n    <ion-item #j_165 _aio-8630D008>\n        <ion-label _aio-CDAA257A #j_166>\n            Earliest Deadline First\n        </ion-label>\n        <ion-toggle _aio-A77962AB #j_167 value=\"Toggle7_value\" name=\"Toggle7\">\n        </ion-toggle>\n    </ion-item>\n    <ion-item #j_168 _aio-9BD16267>\n        <ion-label _aio-D5949AB6 #j_169>\n            Manual Ordering\n        </ion-label>\n        <ion-toggle _aio-D8E6569F #j_170 value=\"Toggle8_value\" name=\"Toggle8\">\n        </ion-toggle>\n    </ion-item>\n    <ion-button _aio-FB83182E #j_171 expand=\"block\" [routerLink]=\"['/alltasks']\">\n        Back\n    </ion-button>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>\n<ion-footer _aio-EB90E99B>\n    <ion-toolbar _aio-70147DF7 #j_177>\n        <ion-title _aio-E03D239F #j_179>\n            Toolbar title\n        </ion-title>\n    </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_OrderBy_OrderBy_module_ts.js.map