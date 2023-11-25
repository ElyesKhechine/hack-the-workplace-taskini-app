(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ModifyTask_ModifyTask_module_ts"],{

/***/ 35591:
/*!*************************************************!*\
  !*** ./src/app/ModifyTask/ModifyTask.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifyTaskPageModule": () => (/* binding */ ModifyTaskPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 93952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 11371);
/* harmony import */ var _ModifyTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModifyTask */ 53466);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 56972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 43543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 22482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 34363);














let ModifyTaskPageModule = class ModifyTaskPageModule {};
ModifyTaskPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_ModifyTask__WEBPACK_IMPORTED_MODULE_2__.ModifyTask],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: '',
    component: _ModifyTask__WEBPACK_IMPORTED_MODULE_2__.ModifyTask
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_ModifyTask__WEBPACK_IMPORTED_MODULE_2__.ModifyTask]
})], ModifyTaskPageModule);


/***/ }),

/***/ 53466:
/*!******************************************!*\
  !*** ./src/app/ModifyTask/ModifyTask.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifyTask": () => (/* binding */ ModifyTask)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ModifyTask_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModifyTask.html?ngResource */ 85935);
/* harmony import */ var _ModifyTask_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModifyTask.css?ngResource */ 90123);
/* harmony import */ var _ModifyTask_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ModifyTask_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModifyTask_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModifyTask.scss?ngResource */ 96949);
/* harmony import */ var _ModifyTask_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ModifyTask_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 67845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 32535);

var _a, _b, _c;








let ModifyTask = class ModifyTask {
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
  button1_copyClick__j_189(event, currentItem) {
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      window.open('https://agentgpt.reworkd.ai', '_blank');
    })();
  }
  button3Click__j_190(event, currentItem) {
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      window.open('https://app.wonderchat.io/chatbot/clir6lgva0b95mc0kiul88e6r', '_blank');
    })();
  }
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }];
};
ModifyTask = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  template: _ModifyTask_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  selector: 'page-modify-task',
  styles: [(_ModifyTask_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default()), (_ModifyTask_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef) === "function" ? _c : Object])], ModifyTask);


/***/ }),

/***/ 90123:
/*!******************************************************!*\
  !*** ./src/app/ModifyTask/ModifyTask.css?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Styles properties */\nion-button[_aio-20D5F1BD] {\n\tmargin-left: 70%;\n\twidth: 100px;\n}\nion-button[_aio-D7188054] {\n\tposition: sticky;\n\ttop: 100%;\n}\nion-button[_aio-3962EEBA] {\n\tposition: sticky;\n\ttop: 85%;\n}\nion-button[_aio-C811631F] {\n\tmargin-top: 80%;\n}", "",{"version":3,"sources":["webpack://./src/app/ModifyTask/ModifyTask.css"],"names":[],"mappings":";AACA,sBAAsB;AACtB;CACC,gBAAgB;CAChB,YAAY;AACb;AACA;CACC,gBAAgB;CAChB,SAAS;AACV;AACA;CACC,gBAAgB;CAChB,QAAQ;AACT;AACA;CACC,eAAe;AAChB","sourcesContent":["\n/* Styles properties */\nion-button[_aio-20D5F1BD] {\n\tmargin-left: 70%;\n\twidth: 100px;\n}\nion-button[_aio-D7188054] {\n\tposition: sticky;\n\ttop: 100%;\n}\nion-button[_aio-3962EEBA] {\n\tposition: sticky;\n\ttop: 85%;\n}\nion-button[_aio-C811631F] {\n\tmargin-top: 80%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 96949:
/*!*******************************************************!*\
  !*** ./src/app/ModifyTask/ModifyTask.scss?ngResource ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom SCSS */", "",{"version":3,"sources":["webpack://./src/app/ModifyTask/ModifyTask.scss"],"names":[],"mappings":"AAIA,gBAAA","sourcesContent":["/* Custom SCSS */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 85935:
/*!*******************************************************!*\
  !*** ./src/app/ModifyTask/ModifyTask.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header _aio-4104151D>\n    <ion-toolbar _aio-985D9F7D #j_193>\n        <ion-title _aio-7E5E6F49 #j_195>\n            Task\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" _aio-2330CFCB>\n    <ion-item #j_182 _aio-C6422438>\n        <ion-label _aio-47154DC8 #j_183 position=\"stacked\">\n            Add Details\n        </ion-label>\n        <ion-input _aio-F8C52B2D #j_184 name=\"Input1\" placeholder=\"Enter text\" [(ngModel)]=\"details\">\n        </ion-input>\n    </ion-item>\n    <ion-button _aio-20D5F1BD #j_185 expand=\"block\">\n        Add\n    </ion-button>\n    <ion-item #j_186 _aio-83256FB5>\n        <ion-label _aio-6ADDAEF5 #j_187>\n            Completed\n        </ion-label>\n        <ion-toggle _aio-14760643 #j_188 value=\"Toggle1_value\" name=\"Toggle1\">\n        </ion-toggle>\n    </ion-item>\n    <ion-button _aio-D7188054 #j_189 expand=\"block\" (click)=\"button1_copyClick__j_189($event, currentItem)\">\n        Generate Subtasks\n    </ion-button>\n    <ion-button _aio-3962EEBA #j_190 expand=\"block\" (click)=\"button3Click__j_190($event, currentItem)\">\n        AI assistance\n    </ion-button>\n    <ion-button _aio-C811631F #j_191 expand=\"block\" [routerLink]=\"['/alltasks']\">\n        Back\n    </ion-button>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>\n<ion-footer _aio-52219CC9>\n    <ion-toolbar _aio-0057C064 #j_197>\n        <ion-title _aio-CC8DC9A7 #j_199>\n            Toolbar title\n        </ion-title>\n    </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_ModifyTask_ModifyTask_module_ts.js.map