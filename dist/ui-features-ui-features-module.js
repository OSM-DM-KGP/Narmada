(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-features-ui-features-module"],{

/***/ "./src/app/pages/ui-features/buttons/action-groups/action-groups.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/action-groups/action-groups.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-body>\n    <div class=\"action-groups-header\">\n      Action Groups\n    </div>\n    <nb-actions size=\"medium\">\n      <nb-action icon=\"nb-menu\"></nb-action>\n      <nb-action icon=\"nb-search\"></nb-action>\n      <nb-action icon=\"nb-email\"></nb-action>\n      <nb-action disabled icon=\"nb-notifications\"></nb-action>\n      <nb-action>\n        <nb-user name=\"Han Solo\"></nb-user>\n      </nb-action>\n      <nb-action icon=\"nb-gear\"></nb-action>\n    </nb-actions>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/action-groups/action-groups.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/action-groups/action-groups.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host nb-card-body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.nb-theme-default :host .action-groups-header{-ms-flex-preferred-size:20%;flex-basis:20%;color:#2a2a2a;font-family:Exo;font-size:1.125rem;font-weight:600}.nb-theme-default :host .nb-actions{-ms-flex-preferred-size:80%;flex-basis:80%}@media (max-width: 767.98px){.nb-theme-default :host nb-card-body{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:0.75rem}[dir=ltr] .nb-theme-default :host nb-card-body .action-groups-header{margin:0 0 0.5rem 0.25rem}[dir=rtl] .nb-theme-default :host nb-card-body .action-groups-header{margin:0 0.25rem 0.5rem 0}.nb-theme-default :host nb-action{padding:0 0.5rem}.nb-theme-default :host nb-action /deep/ .control-icon{font-size:1.75rem}.nb-theme-default :host nb-user /deep/ .user-container{font-size:0.875rem}.nb-theme-default :host nb-user /deep/ .user-picture{height:1.75rem;width:1.75rem}}@media (max-width: 399.98px){.nb-theme-default :host nb-action{padding:0 0.375rem}.nb-theme-default :host nb-action /deep/ .control-icon{font-size:1.5rem}.nb-theme-default :host nb-user /deep/ .user-container{font-size:0.75rem}.nb-theme-default :host nb-user /deep/ .user-picture{height:1.5rem;width:1.5rem}.nb-theme-default :host nb-card-body{padding-left:0;padding-right:0}}.nb-theme-cosmic :host nb-card-body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.nb-theme-cosmic :host .action-groups-header{-ms-flex-preferred-size:20%;flex-basis:20%;color:#fff;font-family:Exo;font-size:1.125rem;font-weight:500}.nb-theme-cosmic :host .nb-actions{-ms-flex-preferred-size:80%;flex-basis:80%}@media (max-width: 767.98px){.nb-theme-cosmic :host nb-card-body{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:0.75rem}[dir=ltr] .nb-theme-cosmic :host nb-card-body .action-groups-header{margin:0 0 0.5rem 0.25rem}[dir=rtl] .nb-theme-cosmic :host nb-card-body .action-groups-header{margin:0 0.25rem 0.5rem 0}.nb-theme-cosmic :host nb-action{padding:0 0.5rem}.nb-theme-cosmic :host nb-action /deep/ .control-icon{font-size:1.75rem}.nb-theme-cosmic :host nb-user /deep/ .user-container{font-size:0.875rem}.nb-theme-cosmic :host nb-user /deep/ .user-picture{height:1.75rem;width:1.75rem}}@media (max-width: 399.98px){.nb-theme-cosmic :host nb-action{padding:0 0.375rem}.nb-theme-cosmic :host nb-action /deep/ .control-icon{font-size:1.5rem}.nb-theme-cosmic :host nb-user /deep/ .user-container{font-size:0.75rem}.nb-theme-cosmic :host nb-user /deep/ .user-picture{height:1.5rem;width:1.5rem}.nb-theme-cosmic :host nb-card-body{padding-left:0;padding-right:0}}.nb-theme-corporate :host nb-card-body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.nb-theme-corporate :host .action-groups-header{-ms-flex-preferred-size:20%;flex-basis:20%;color:#181818;font-family:Exo;font-size:1.125rem;font-weight:600}.nb-theme-corporate :host .nb-actions{-ms-flex-preferred-size:80%;flex-basis:80%}@media (max-width: 767.98px){.nb-theme-corporate :host nb-card-body{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:0.75rem}[dir=ltr] .nb-theme-corporate :host nb-card-body .action-groups-header{margin:0 0 0.5rem 0.25rem}[dir=rtl] .nb-theme-corporate :host nb-card-body .action-groups-header{margin:0 0.25rem 0.5rem 0}.nb-theme-corporate :host nb-action{padding:0 0.5rem}.nb-theme-corporate :host nb-action /deep/ .control-icon{font-size:1.75rem}.nb-theme-corporate :host nb-user /deep/ .user-container{font-size:0.875rem}.nb-theme-corporate :host nb-user /deep/ .user-picture{height:1.75rem;width:1.75rem}}@media (max-width: 399.98px){.nb-theme-corporate :host nb-action{padding:0 0.375rem}.nb-theme-corporate :host nb-action /deep/ .control-icon{font-size:1.5rem}.nb-theme-corporate :host nb-user /deep/ .user-container{font-size:0.75rem}.nb-theme-corporate :host nb-user /deep/ .user-picture{height:1.5rem;width:1.5rem}.nb-theme-corporate :host nb-card-body{padding-left:0;padding-right:0}}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/action-groups/action-groups.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/action-groups/action-groups.component.ts ***!
  \************************************************************************************/
/*! exports provided: ActionGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionGroupsComponent", function() { return ActionGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ActionGroupsComponent = /** @class */ (function () {
    function ActionGroupsComponent() {
    }
    ActionGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-action-groups',
            styles: [__webpack_require__(/*! ./action-groups.component.scss */ "./src/app/pages/ui-features/buttons/action-groups/action-groups.component.scss")],
            template: __webpack_require__(/*! ./action-groups.component.html */ "./src/app/pages/ui-features/buttons/action-groups/action-groups.component.html"),
        })
    ], ActionGroupsComponent);
    return ActionGroupsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Block Level Buttons</nb-card-header>\n  <nb-card-body>\n    <div class=\"row block-level-buttons\">\n      <div class=\"col-md-12\">\n        <div class=\"btn-group btn-group-full-width\" role=\"group\">\n          <button type=\"button\" class=\"btn btn-primary btn-group-icon btn-group-divider btn-fixed\">\n            <i class=\"nb-home\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\">Icon Block Button</button>\n        </div>\n        <button type=\"button\" class=\"btn btn-outline-primary btn-block\">Block Button</button>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BlockLevelButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockLevelButtonsComponent", function() { return BlockLevelButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlockLevelButtonsComponent = /** @class */ (function () {
    function BlockLevelButtonsComponent() {
    }
    BlockLevelButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-block-level-buttons',
            template: __webpack_require__(/*! ./block-level-buttons.component.html */ "./src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.html"),
        })
    ], BlockLevelButtonsComponent);
    return BlockLevelButtonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/buttons/button-groups/button-groups.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/button-groups/button-groups.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Button Groups</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"example-container toggle-types\">\n          <div class=\"container-title\">Toggle Types</div>\n          <div [(ngModel)]=\"radioModel\" ngbRadioGroup\n               class=\"btn-group btn-group-toggle btn-outline-toggle-group btn-group-full-width btn-toggle-radio-group\">\n            <label ngbButtonLabel class=\"btn btn-outline-primary\">\n              <input ngbButton type=\"radio\" value=\"left\"> Left\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-primary\">\n              <input ngbButton type=\"radio\" value=\"middle\"> Middle\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-primary\">\n              <input ngbButton type=\"radio\" value=\"right\"> Right\n            </label>\n          </div>\n          <div class=\"btn-group btn-group-toggle btn-group-full-width\" data-toggle=\"buttons\">\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"checkboxModel.left\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"checkboxModel.left\"> Left\n            </label>\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"checkboxModel.middle\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"checkboxModel.middle\"> Middle\n            </label>\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"checkboxModel.right\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"checkboxModel.right\"> Right\n            </label>\n          </div>\n        </div>\n        <div class=\"example-container toolbars-container\">\n          <div class=\"pagination-container\">\n            <div class=\"container-title\">Pagination</div>\n            <div class=\"btn-group btn-group-toggle btn-outline-toggle-group\" data-toggle=\"buttons\"\n                 [(ngModel)]=\"paginationModel\" ngbRadioGroup>\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\n                <input ngbButton type=\"radio\" [value]=\"1\"> 1\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\n                <input ngbButton type=\"radio\" [value]=\"2\"> 2\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\n                <input ngbButton type=\"radio\" [value]=\"3\"> 3\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\n                <input ngbButton type=\"radio\" [value]=\"4\"> 4\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\n                <input ngbButton type=\"radio\" [value]=\"5\"> 5\n              </label>\n            </div>\n          </div>\n\n          <div class=\"icon-toolbar-container\">\n            <div class=\"container-title\">Icon Toolbar</div>\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.one\">\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.one\"> 1\n              </label>\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.two\">\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.two\"> 2\n              </label>\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.three\">\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.three\"> 3\n              </label>\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.four\">\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.four\"> 4\n              </label>\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.five\">\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.five\"> 5\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div class=\"container-title divided-button-group\">Divided Button Group</div>\n          <div class=\"btn-group btn-group-toggle btn-divided-group btn-outline-divided-group btn-group-full-width btn-divided-checkbox-group \"\n            data-toggle=\"buttons\">\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.monday\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.monday\"> <i\n              class=\"nb-arrow-thin-down\"></i>\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.tuesday\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.tuesday\"> <i\n              class=\"nb-arrow-thin-up\"></i>\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.wednesday\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.wednesday\"> <i class=\"nb-arrow-thin-left\"></i>\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.thursday\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.thursday\"> <i\n              class=\"nb-arrow-thin-right\"></i>\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.friday\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.friday\"> <i class=\"nb-arrow-left\"></i>\n            </label>\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.saturday\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.saturday\"> <i\n              class=\"nb-arrow-right\"></i>\n            </label>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div class=\"container-title\">Divided Button Group</div>\n          <div class=\"row\">\n            <div [(ngModel)]=\"dividedButtonGroupOne\" ngbRadioGroup\n                 class=\"btn-group btn-group-toggle btn-divided-group btn-outline-divided-group btn-group-full-width col-md-12\">\n              <label ngbButtonLabel class=\"btn btn-outline-primary\">\n                <input ngbButton type=\"radio\" value=\"left\"> Left\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-primary\">\n                <input ngbButton type=\"radio\" value=\"middle\"> Middle\n              </label>\n              <label ngbButtonLabel class=\"btn btn-outline-primary\">\n                <input ngbButton type=\"radio\" value=\"right\"> Right\n              </label>\n            </div>\n          </div>\n          <div class=\"btn-group btn-group-toggle btn-divided-group btn-group-full-width\" data-toggle=\"buttons\">\n            <label ngbButtonLabel\n                   class=\"btn btn-primary\"\n                   [class.active]=\"dividedButtonGroupTwo.left\"\n                   [class.focus]=\"dividedButtonGroupTwo.left\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedButtonGroupTwo.left\"> Left\n            </label>\n            <label ngbButtonLabel\n                   class=\"btn btn-primary\"\n                   [class.active]=\"dividedButtonGroupTwo.middle\"\n                   [class.focus]=\"dividedButtonGroupTwo.middle\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedButtonGroupTwo.middle\"> Middle\n            </label>\n            <label ngbButtonLabel\n                   class=\"btn btn-primary\"\n                   [class.active]=\"dividedButtonGroupTwo.right\"\n                   [class.focus]=\"dividedButtonGroupTwo.right\">\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedButtonGroupTwo.right\"> Right\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/button-groups/button-groups.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/button-groups/button-groups.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host .toolbars-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[dir=ltr] .nb-theme-default :host .pagination-container{margin-right:1rem}[dir=rtl] .nb-theme-default :host .pagination-container{margin-left:1rem}.nb-theme-default :host .pagination-container .btn-group>.btn{padding-left:1.125rem;padding-right:1.125rem}.nb-theme-default :host .icon-toolbar-container .btn-group>.btn{padding-left:1.125rem;padding-right:1.125rem}.nb-theme-default :host .toggle-types .btn-toggle-radio-group{margin-bottom:1rem}.nb-theme-default :host .divided-button-group .btn-divided-checkbox-group{margin-bottom:1rem;-ms-flex-wrap:wrap;flex-wrap:wrap}.nb-theme-default :host .example-container:not(:last-child){margin-bottom:1.5rem}.nb-theme-default :host .example-container>div:not(:last-child){margin-bottom:1rem}.nb-theme-default :host .example-container>.btn-divided-checkbox-group{-ms-flex-wrap:wrap;flex-wrap:wrap}.nb-theme-default :host .example-container>.btn-divided-checkbox-group>label{-ms-flex-preferred-size:10%;flex-basis:10%}[dir=ltr] .nb-theme-default :host .example-container>.btn-divided-checkbox-group>label{margin:0 0.25rem 0.5rem 0}[dir=rtl] .nb-theme-default :host .example-container>.btn-divided-checkbox-group>label{margin:0 0 0.5rem 0.25rem}@media (max-width: 767.98px){.nb-theme-default :host .btn{padding:0.75rem 0.7rem}}.nb-theme-cosmic :host .toolbars-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[dir=ltr] .nb-theme-cosmic :host .pagination-container{margin-right:1rem}[dir=rtl] .nb-theme-cosmic :host .pagination-container{margin-left:1rem}.nb-theme-cosmic :host .pagination-container .btn-group>.btn{padding-left:1.125rem;padding-right:1.125rem}.nb-theme-cosmic :host .icon-toolbar-container .btn-group>.btn{padding-left:1.125rem;padding-right:1.125rem}.nb-theme-cosmic :host .toggle-types .btn-toggle-radio-group{margin-bottom:1rem}.nb-theme-cosmic :host .divided-button-group .btn-divided-checkbox-group{margin-bottom:1rem;-ms-flex-wrap:wrap;flex-wrap:wrap}.nb-theme-cosmic :host .example-container:not(:last-child){margin-bottom:1.5rem}.nb-theme-cosmic :host .example-container>div:not(:last-child){margin-bottom:1rem}.nb-theme-cosmic :host .example-container>.btn-divided-checkbox-group{-ms-flex-wrap:wrap;flex-wrap:wrap}.nb-theme-cosmic :host .example-container>.btn-divided-checkbox-group>label{-ms-flex-preferred-size:10%;flex-basis:10%}[dir=ltr] .nb-theme-cosmic :host .example-container>.btn-divided-checkbox-group>label{margin:0 0.25rem 0.5rem 0}[dir=rtl] .nb-theme-cosmic :host .example-container>.btn-divided-checkbox-group>label{margin:0 0 0.5rem 0.25rem}@media (max-width: 767.98px){.nb-theme-cosmic :host .btn{padding:0.75rem 0.7rem}}.nb-theme-corporate :host .toolbars-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[dir=ltr] .nb-theme-corporate :host .pagination-container{margin-right:1rem}[dir=rtl] .nb-theme-corporate :host .pagination-container{margin-left:1rem}.nb-theme-corporate :host .pagination-container .btn-group>.btn{padding-left:1.125rem;padding-right:1.125rem}.nb-theme-corporate :host .icon-toolbar-container .btn-group>.btn{padding-left:1.125rem;padding-right:1.125rem}.nb-theme-corporate :host .toggle-types .btn-toggle-radio-group{margin-bottom:1rem}.nb-theme-corporate :host .divided-button-group .btn-divided-checkbox-group{margin-bottom:1rem;-ms-flex-wrap:wrap;flex-wrap:wrap}.nb-theme-corporate :host .example-container:not(:last-child){margin-bottom:1.5rem}.nb-theme-corporate :host .example-container>div:not(:last-child){margin-bottom:1rem}.nb-theme-corporate :host .example-container>.btn-divided-checkbox-group{-ms-flex-wrap:wrap;flex-wrap:wrap}.nb-theme-corporate :host .example-container>.btn-divided-checkbox-group>label{-ms-flex-preferred-size:10%;flex-basis:10%}[dir=ltr] .nb-theme-corporate :host .example-container>.btn-divided-checkbox-group>label{margin:0 0.25rem 0.5rem 0}[dir=rtl] .nb-theme-corporate :host .example-container>.btn-divided-checkbox-group>label{margin:0 0 0.5rem 0.25rem}@media (max-width: 767.98px){.nb-theme-corporate :host .btn{padding:0.75rem 0.7rem}}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/button-groups/button-groups.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/button-groups/button-groups.component.ts ***!
  \************************************************************************************/
/*! exports provided: ButtonGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupsComponent", function() { return ButtonGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonGroupsComponent = /** @class */ (function () {
    function ButtonGroupsComponent() {
        this.radioModel = 'left';
        this.checkboxModel = {
            left: false,
            middle: false,
            right: false,
        };
        this.dividedCheckboxModel = {
            monday: true,
            tuesday: true,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
        };
        this.paginationModel = 1;
        this.iconToolbarModel = {
            one: false,
            two: false,
            three: true,
            four: false,
            five: false,
        };
        this.dividedButtonGroupOne = 'left';
        this.dividedButtonGroupTwo = {
            left: false,
            middle: false,
            right: false,
        };
    }
    ButtonGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-button-groups',
            styles: [__webpack_require__(/*! ./button-groups.component.scss */ "./src/app/pages/ui-features/buttons/button-groups/button-groups.component.scss")],
            template: __webpack_require__(/*! ./button-groups.component.html */ "./src/app/pages/ui-features/buttons/button-groups/button-groups.component.html"),
        })
    ], ButtonGroupsComponent);
    return ButtonGroupsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/buttons/buttons.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/buttons.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <ngx-hero-buttons></ngx-hero-buttons>\n  </div>\n  <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n    <ngx-shape-buttons></ngx-shape-buttons>\n    <ngx-action-groups></ngx-action-groups>\n    <ngx-labeled-actions-group></ngx-labeled-actions-group>\n\n    <div class=\"row\">\n      <div class=\"col-lg-5\">\n        <ngx-dropdown-buttons></ngx-dropdown-buttons>\n        <ngx-icon-buttons></ngx-icon-buttons>\n      </div>\n      <div class=\"col-lg-7\">\n        <ngx-button-groups></ngx-button-groups>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\n    <ngx-size-buttons></ngx-size-buttons>\n    <ngx-default-buttons></ngx-default-buttons>\n    <ngx-block-level-buttons></ngx-block-level-buttons>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/buttons.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/buttons.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host /deep/ .container-title{color:#a4abb3;font-family:Exo;margin-bottom:0.5rem}.nb-theme-default :host /deep/ .header{font-size:0.875rem}.nb-theme-default :host /deep/ .subheader{font-size:0.75rem;font-weight:300;color:#a4abb3}.nb-theme-default :host /deep/ .btn-demo{width:180px}.nb-theme-default :host /deep/ .state-container{display:-webkit-box;display:-ms-flexbox;display:flex}.nb-theme-default :host /deep/ .state-container:not(:last-child){margin-bottom:1rem}.nb-theme-default :host /deep/ .state-container .state-value{width:50px;height:50px;border-radius:.375rem}.nb-theme-default :host /deep/ .state-container .state-details{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:1rem;margin-right:1rem;height:50px}[dir=ltr] .nb-theme-default :host /deep/ .example-container{padding-right:0}[dir=rtl] .nb-theme-default :host /deep/ .example-container{padding-left:0}.nb-theme-default :host /deep/ .example-container .container-btn{margin-bottom:1.5rem}.nb-theme-default :host /deep/ .block-level-buttons .btn-group{margin-bottom:1rem}@media (max-width: 575.98px){.nb-theme-default :host ngx-default-buttons /deep/ nb-card-header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:left;-ms-flex-align:left;align-items:left}.nb-theme-default :host ngx-default-buttons /deep/ nb-card-header span{margin-bottom:1rem}}@media (max-width: 399.98px){[dir=ltr] .nb-theme-default :host /deep/.icon-buttons .icon-button-examples button{margin-right:1rem}[dir=rtl] .nb-theme-default :host /deep/.icon-buttons .icon-button-examples button{margin-left:1rem}.nb-theme-default :host ngx-default-buttons /deep/ nb-card-header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:0.5rem}.nb-theme-default :host ngx-block-level-buttons /deep/ .btn-primary{padding:0.75rem 1rem}}.nb-theme-cosmic :host /deep/ .container-title{color:#a1a1e5;font-family:Exo;margin-bottom:0.5rem}.nb-theme-cosmic :host /deep/ .header{font-size:0.875rem}.nb-theme-cosmic :host /deep/ .subheader{font-size:0.75rem;font-weight:300;color:#a1a1e5}.nb-theme-cosmic :host /deep/ .btn-demo{width:180px}.nb-theme-cosmic :host /deep/ .state-container{display:-webkit-box;display:-ms-flexbox;display:flex}.nb-theme-cosmic :host /deep/ .state-container:not(:last-child){margin-bottom:1rem}.nb-theme-cosmic :host /deep/ .state-container .state-value{width:50px;height:50px;border-radius:.5rem}.nb-theme-cosmic :host /deep/ .state-container .state-details{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:1rem;margin-right:1rem;height:50px}[dir=ltr] .nb-theme-cosmic :host /deep/ .example-container{padding-right:0}[dir=rtl] .nb-theme-cosmic :host /deep/ .example-container{padding-left:0}.nb-theme-cosmic :host /deep/ .example-container .container-btn{margin-bottom:1.5rem}.nb-theme-cosmic :host /deep/ .block-level-buttons .btn-group{margin-bottom:1rem}@media (max-width: 575.98px){.nb-theme-cosmic :host ngx-default-buttons /deep/ nb-card-header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:left;-ms-flex-align:left;align-items:left}.nb-theme-cosmic :host ngx-default-buttons /deep/ nb-card-header span{margin-bottom:1rem}}@media (max-width: 399.98px){[dir=ltr] .nb-theme-cosmic :host /deep/.icon-buttons .icon-button-examples button{margin-right:1rem}[dir=rtl] .nb-theme-cosmic :host /deep/.icon-buttons .icon-button-examples button{margin-left:1rem}.nb-theme-cosmic :host ngx-default-buttons /deep/ nb-card-header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:0.5rem}.nb-theme-cosmic :host ngx-block-level-buttons /deep/ .btn-primary{padding:0.75rem 1rem}}.nb-theme-corporate :host /deep/ .container-title{color:#a4abb3;font-family:Exo;margin-bottom:0.5rem}.nb-theme-corporate :host /deep/ .header{font-size:0.875rem}.nb-theme-corporate :host /deep/ .subheader{font-size:0.75rem;font-weight:300;color:#a4abb3}.nb-theme-corporate :host /deep/ .btn-demo{width:180px}.nb-theme-corporate :host /deep/ .state-container{display:-webkit-box;display:-ms-flexbox;display:flex}.nb-theme-corporate :host /deep/ .state-container:not(:last-child){margin-bottom:1rem}.nb-theme-corporate :host /deep/ .state-container .state-value{width:50px;height:50px;border-radius:.75rem;border-radius:.75rem}.nb-theme-corporate :host /deep/ .state-container .state-details{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:1rem;margin-right:1rem;height:50px}[dir=ltr] .nb-theme-corporate :host /deep/ .example-container{padding-right:0}[dir=rtl] .nb-theme-corporate :host /deep/ .example-container{padding-left:0}.nb-theme-corporate :host /deep/ .example-container .container-btn{margin-bottom:1.5rem}.nb-theme-corporate :host /deep/ .block-level-buttons .btn-group{margin-bottom:1rem}@media (max-width: 575.98px){.nb-theme-corporate :host ngx-default-buttons /deep/ nb-card-header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:left;-ms-flex-align:left;align-items:left}.nb-theme-corporate :host ngx-default-buttons /deep/ nb-card-header span{margin-bottom:1rem}}@media (max-width: 399.98px){[dir=ltr] .nb-theme-corporate :host /deep/.icon-buttons .icon-button-examples button{margin-right:1rem}[dir=rtl] .nb-theme-corporate :host /deep/.icon-buttons .icon-button-examples button{margin-left:1rem}.nb-theme-corporate :host ngx-default-buttons /deep/ nb-card-header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:0.5rem}.nb-theme-corporate :host ngx-block-level-buttons /deep/ .btn-primary{padding:0.75rem 1rem}}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/buttons.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/buttons.component.ts ***!
  \****************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-buttons',
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/pages/ui-features/buttons/buttons.component.scss")],
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/pages/ui-features/buttons/buttons.component.html"),
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/buttons/buttons.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/buttons.module.ts ***!
  \*************************************************************/
/*! exports provided: ButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _default_buttons_default_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-buttons/default-buttons.component */ "./src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.ts");
/* harmony import */ var _hero_buttons_hero_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-buttons/hero-buttons.component */ "./src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.ts");
/* harmony import */ var _shape_buttons_shape_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shape-buttons/shape-buttons.component */ "./src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.ts");
/* harmony import */ var _size_buttons_size_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./size-buttons/size-buttons.component */ "./src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.ts");
/* harmony import */ var _buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons.component */ "./src/app/pages/ui-features/buttons/buttons.component.ts");
/* harmony import */ var _action_groups_action_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action-groups/action-groups.component */ "./src/app/pages/ui-features/buttons/action-groups/action-groups.component.ts");
/* harmony import */ var _dropdown_buttons_dropdown_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown-buttons/dropdown-button.component */ "./src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.ts");
/* harmony import */ var _block_level_buttons_block_level_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block-level-buttons/block-level-buttons.component */ "./src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.ts");
/* harmony import */ var _button_groups_button_groups_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./button-groups/button-groups.component */ "./src/app/pages/ui-features/buttons/button-groups/button-groups.component.ts");
/* harmony import */ var _icon_buttons_icon_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icon-buttons/icon-buttons.component */ "./src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.ts");
/* harmony import */ var _labeled_actions_group_labeled_actions_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./labeled-actions-group/labeled-actions-group.component */ "./src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var components = [
    _buttons_component__WEBPACK_IMPORTED_MODULE_6__["ButtonsComponent"],
    _default_buttons_default_buttons_component__WEBPACK_IMPORTED_MODULE_2__["DefaultButtonsComponent"],
    _hero_buttons_hero_buttons_component__WEBPACK_IMPORTED_MODULE_3__["HeroButtonComponent"],
    _shape_buttons_shape_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ShapeButtonsComponent"],
    _size_buttons_size_buttons_component__WEBPACK_IMPORTED_MODULE_5__["SizeButtonsComponent"],
    _action_groups_action_groups_component__WEBPACK_IMPORTED_MODULE_7__["ActionGroupsComponent"],
    _dropdown_buttons_dropdown_button_component__WEBPACK_IMPORTED_MODULE_8__["DropdownButtonsComponent"],
    _block_level_buttons_block_level_buttons_component__WEBPACK_IMPORTED_MODULE_9__["BlockLevelButtonsComponent"],
    _button_groups_button_groups_component__WEBPACK_IMPORTED_MODULE_10__["ButtonGroupsComponent"],
    _icon_buttons_icon_buttons_component__WEBPACK_IMPORTED_MODULE_11__["IconButtonsComponent"],
    _labeled_actions_group_labeled_actions_group_component__WEBPACK_IMPORTED_MODULE_12__["LabeledActionsGroupComponent"],
];
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
            ],
            exports: components.slice(),
            declarations: components.slice(),
            providers: [],
        })
    ], ButtonsModule);
    return ButtonsModule;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    <span>Default Buttons</span>\n    <div class=\"dropdown\" ngbDropdown>\n      <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\n        {{ selectedView.title }}\n      </button>\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\n        <li class=\"dropdown-item\" *ngFor=\"let v of buttonsViews\" (click)=\"this.selectedView = v\">{{ v.title }}</li>\n      </ul>\n    </div>\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"example-container col-md-4\" *ngFor=\"let b of buttons[selectedView.key]\">\n        <div class=\"container-title\">\n          <span>{{ b.containerTitle }}</span>\n        </div>\n        <div class=\"container-btn\">\n          <button class=\"btn {{ b.class }} btn-demo\">{{ b.title }}</button>\n        </div>\n        <div class=\"{{ b.container }}\">\n          <div class=\"state-container\">\n            <div class=\"state-value original\"></div>\n            <div class=\"state-details\">\n              <span class=\"header\">Default</span>\n              <span class=\"subheader\">{{ b.default }}</span>\n            </div>\n          </div>\n          <div class=\"state-container\">\n            <div class=\"state-value hover\"></div>\n            <div class=\"state-details\">\n              <span class=\"header\">Hover</span>\n              <span class=\"subheader\">14% white</span>\n            </div>\n          </div>\n          <div class=\"state-container\">\n            <div class=\"state-value active\"></div>\n            <div class=\"state-details\">\n              <span class=\"header\">Active</span>\n              <span class=\"subheader\">14% black</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host nb-card-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nb-theme-default :host nb-card-header .dropdown{-ms-flex-preferred-size:30%;flex-basis:30%;min-width:220px}.nb-theme-default :host nb-card-body{padding-bottom:0}.nb-theme-default :host .example-container{margin-bottom:1.5rem}.nb-theme-default :host .primary-container .original{background-color:#8a7fff}.nb-theme-default :host .primary-container .hover:hover,.nb-theme-default :host .primary-container .hover.hover{color:#fff;background-color:#9a91ff;border-color:transparent}.nb-theme-default :host .primary-container .active:active,.nb-theme-default :host .primary-container .active.active,.nb-theme-default :host .primary-container .active:active:focus{color:#fff;background-color:#776ddb;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-default :host .primary-container.outline .original{background-color:transparent;border:2px solid #8a7fff}.nb-theme-default :host .success-container .original{background-color:#40dc7e}.nb-theme-default :host .success-container .hover:hover,.nb-theme-default :host .success-container .hover.hover{color:#fff;background-color:#5be190;border-color:transparent}.nb-theme-default :host .success-container .active:active,.nb-theme-default :host .success-container .active.active,.nb-theme-default :host .success-container .active:active:focus{color:#fff;background-color:#37bd6c;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-default :host .success-container.outline .original{background-color:transparent;border:2px solid #40dc7e}.nb-theme-default :host .warning-container .original{background-color:#ffa100}.nb-theme-default :host .warning-container .hover:hover,.nb-theme-default :host .warning-container .hover.hover{color:#fff;background-color:#ffae24;border-color:transparent}.nb-theme-default :host .warning-container .active:active,.nb-theme-default :host .warning-container .active.active,.nb-theme-default :host .warning-container .active:active:focus{color:#fff;background-color:#db8a00;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-default :host .warning-container.outline .original{background-color:transparent;border:2px solid #ffa100}.nb-theme-default :host .info-container .original{background-color:#4ca6ff}.nb-theme-default :host .info-container .hover:hover,.nb-theme-default :host .info-container .hover.hover{color:#fff;background-color:#65b2ff;border-color:transparent}.nb-theme-default :host .info-container .active:active,.nb-theme-default :host .info-container .active.active,.nb-theme-default :host .info-container .active:active:focus{color:#fff;background-color:#418fdb;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-default :host .info-container.outline .original{background-color:transparent;border:2px solid #4ca6ff}.nb-theme-default :host .danger-container .original{background-color:#ff4c6a}.nb-theme-default :host .danger-container .hover:hover,.nb-theme-default :host .danger-container .hover.hover{color:#fff;background-color:#ff657f;border-color:transparent}.nb-theme-default :host .danger-container .active:active,.nb-theme-default :host .danger-container .active.active,.nb-theme-default :host .danger-container .active:active:focus{color:#fff;background-color:#db415b;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-default :host .danger-container.outline .original{background-color:transparent;border:2px solid #ff4c6a}.nb-theme-default :host .secondary-container .original{border:2px solid #dadfe6}.nb-theme-default :host .secondary-container .hover:hover,.nb-theme-default :host .secondary-container .hover.hover{color:#fff;background-color:#dfe3ea;border-color:transparent}.nb-theme-default :host .secondary-container .active:active,.nb-theme-default :host .secondary-container .active.active,.nb-theme-default :host .secondary-container .active:active:focus{color:#fff;background-color:#bbc0c6;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-default :host .secondary-container.outline .original{background-color:transparent;border:2px solid #dadfe6}.nb-theme-cosmic :host nb-card-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nb-theme-cosmic :host nb-card-header .dropdown{-ms-flex-preferred-size:30%;flex-basis:30%;min-width:220px}.nb-theme-cosmic :host nb-card-body{padding-bottom:0}.nb-theme-cosmic :host .example-container{margin-bottom:1.5rem}.nb-theme-cosmic :host .primary-container .original{background-color:#7659ff}.nb-theme-cosmic :host .primary-container .hover:hover,.nb-theme-cosmic :host .primary-container .hover.hover{color:#fff;background-color:#8970ff;border-color:transparent}.nb-theme-cosmic :host .primary-container .active:active,.nb-theme-cosmic :host .primary-container .active.active,.nb-theme-cosmic :host .primary-container .active:active:focus{color:#fff;background-color:#654ddb;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-cosmic :host .primary-container.outline .original{background-color:transparent;border:2px solid #7659ff}.nb-theme-cosmic :host .success-container .original{background-color:#00d977}.nb-theme-cosmic :host .success-container .hover:hover,.nb-theme-cosmic :host .success-container .hover.hover{color:#fff;background-color:#24de8a;border-color:transparent}.nb-theme-cosmic :host .success-container .active:active,.nb-theme-cosmic :host .success-container .active.active,.nb-theme-cosmic :host .success-container .active:active:focus{color:#fff;background-color:#0b6;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-cosmic :host .success-container.outline .original{background-color:transparent;border:2px solid #00d977}.nb-theme-cosmic :host .warning-container .original{background-color:#ffa100}.nb-theme-cosmic :host .warning-container .hover:hover,.nb-theme-cosmic :host .warning-container .hover.hover{color:#fff;background-color:#ffae24;border-color:transparent}.nb-theme-cosmic :host .warning-container .active:active,.nb-theme-cosmic :host .warning-container .active.active,.nb-theme-cosmic :host .warning-container .active:active:focus{color:#fff;background-color:#db8a00;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-cosmic :host .warning-container.outline .original{background-color:transparent;border:2px solid #ffa100}.nb-theme-cosmic :host .info-container .original{background-color:#08f}.nb-theme-cosmic :host .info-container .hover:hover,.nb-theme-cosmic :host .info-container .hover.hover{color:#fff;background-color:#2499ff;border-color:transparent}.nb-theme-cosmic :host .info-container .active:active,.nb-theme-cosmic :host .info-container .active.active,.nb-theme-cosmic :host .info-container .active:active:focus{color:#fff;background-color:#0075db;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-cosmic :host .info-container.outline .original{background-color:transparent;border:2px solid #08f}.nb-theme-cosmic :host .danger-container .original{background-color:#ff386a}.nb-theme-cosmic :host .danger-container .hover:hover,.nb-theme-cosmic :host .danger-container .hover.hover{color:#fff;background-color:#ff547f;border-color:transparent}.nb-theme-cosmic :host .danger-container .active:active,.nb-theme-cosmic :host .danger-container .active.active,.nb-theme-cosmic :host .danger-container .active:active:focus{color:#fff;background-color:#db305b;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-cosmic :host .danger-container.outline .original{background-color:transparent;border:2px solid #ff386a}.nb-theme-cosmic :host .secondary-container .original{border:2px solid #7659ff}.nb-theme-cosmic :host .secondary-container .hover:hover,.nb-theme-cosmic :host .secondary-container .hover.hover{color:#fff;background-color:#8970ff;border-color:transparent}.nb-theme-cosmic :host .secondary-container .active:active,.nb-theme-cosmic :host .secondary-container .active.active,.nb-theme-cosmic :host .secondary-container .active:active:focus{color:#fff;background-color:#654ddb;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-cosmic :host .secondary-container.outline .original{background-color:transparent;border:2px solid #7659ff}.nb-theme-corporate :host nb-card-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nb-theme-corporate :host nb-card-header .dropdown{-ms-flex-preferred-size:30%;flex-basis:30%;min-width:220px}.nb-theme-corporate :host nb-card-body{padding-bottom:0}.nb-theme-corporate :host .example-container{margin-bottom:1.5rem}.nb-theme-corporate :host .primary-container .original{background-color:#73a1ff}.nb-theme-corporate :host .primary-container .hover:hover,.nb-theme-corporate :host .primary-container .hover.hover{color:#fff;background-color:#87aeff;border-color:transparent}.nb-theme-corporate :host .primary-container .active:active,.nb-theme-corporate :host .primary-container .active.active,.nb-theme-corporate :host .primary-container .active:active:focus{color:#fff;background-color:#638adb;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-corporate :host .primary-container.outline .original{background-color:transparent;border:2px solid #73a1ff}.nb-theme-corporate :host .success-container .original{background-color:#5dcfe3}.nb-theme-corporate :host .success-container .hover:hover,.nb-theme-corporate :host .success-container .hover.hover{color:#fff;background-color:#74d6e7;border-color:transparent}.nb-theme-corporate :host .success-container .active:active,.nb-theme-corporate :host .success-container .active.active,.nb-theme-corporate :host .success-container .active:active:focus{color:#fff;background-color:#50b2c3;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-corporate :host .success-container.outline .original{background-color:transparent;border:2px solid #5dcfe3}.nb-theme-corporate :host .warning-container .original{background-color:#ffa36b}.nb-theme-corporate :host .warning-container .hover:hover,.nb-theme-corporate :host .warning-container .hover.hover{color:#fff;background-color:#ffb080;border-color:transparent}.nb-theme-corporate :host .warning-container .active:active,.nb-theme-corporate :host .warning-container .active.active,.nb-theme-corporate :host .warning-container .active:active:focus{color:#fff;background-color:#db8c5c;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-corporate :host .warning-container.outline .original{background-color:transparent;border:2px solid #ffa36b}.nb-theme-corporate :host .info-container .original{background-color:#ba7fec}.nb-theme-corporate :host .info-container .hover:hover,.nb-theme-corporate :host .info-container .hover.hover{color:#fff;background-color:#c491ef;border-color:transparent}.nb-theme-corporate :host .info-container .active:active,.nb-theme-corporate :host .info-container .active.active,.nb-theme-corporate :host .info-container .active:active:focus{color:#fff;background-color:#a06dcb;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-corporate :host .info-container.outline .original{background-color:transparent;border:2px solid #ba7fec}.nb-theme-corporate :host .danger-container .original{background-color:#ff6b83}.nb-theme-corporate :host .danger-container .hover:hover,.nb-theme-corporate :host .danger-container .hover.hover{color:#fff;background-color:#ff8094;border-color:transparent}.nb-theme-corporate :host .danger-container .active:active,.nb-theme-corporate :host .danger-container .active.active,.nb-theme-corporate :host .danger-container .active:active:focus{color:#fff;background-color:#db5c71;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-corporate :host .danger-container.outline .original{background-color:transparent;border:2px solid #ff6b83}.nb-theme-corporate :host .secondary-container .original{border:2px solid #edf2f5}.nb-theme-corporate :host .secondary-container .hover:hover,.nb-theme-corporate :host .secondary-container .hover.hover{color:#fff;background-color:#f0f4f6;border-color:transparent}.nb-theme-corporate :host .secondary-container .active:active,.nb-theme-corporate :host .secondary-container .active.active,.nb-theme-corporate :host .secondary-container .active:active:focus{color:#fff;background-color:#ccd0d3;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.nb-theme-corporate :host .secondary-container.outline .original{background-color:transparent;border:2px solid #edf2f5}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DefaultButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultButtonsComponent", function() { return DefaultButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DefaultButtonsComponent = /** @class */ (function () {
    function DefaultButtonsComponent() {
        this.buttonsViews = [{
                title: 'Default Buttons',
                key: 'default',
            }, {
                title: 'Outline Buttons',
                key: 'outline',
            }];
        this.selectedView = this.buttonsViews[0];
        this.buttons = {
            'default': [
                {
                    class: 'btn-primary',
                    container: 'primary-container',
                    containerTitle: 'Primary Button',
                    title: 'Primary',
                    default: '#7659ff',
                }, {
                    class: 'btn-warning',
                    container: 'warning-container',
                    containerTitle: 'Warning Button',
                    title: 'Warning',
                    default: '#ffcb17',
                }, {
                    class: 'btn-success',
                    container: 'success-container',
                    containerTitle: 'Success Button',
                    title: 'Success',
                    default: '#00d977',
                }, {
                    class: 'btn-info',
                    container: 'info-container',
                    containerTitle: 'Info Button',
                    title: 'Info',
                    default: '#0088ff',
                }, {
                    class: 'btn-danger',
                    container: 'danger-container',
                    containerTitle: 'Danger Button',
                    title: 'Danger',
                    default: '#ff386a',
                }, {
                    class: 'btn-secondary',
                    container: 'secondary-container',
                    containerTitle: 'Default Button',
                    title: 'Default',
                    default: '#bdbaff',
                },
            ],
            'outline': [
                {
                    class: 'btn-outline-primary',
                    container: 'primary-container outline',
                    containerTitle: 'Primary Button',
                    title: 'Primary',
                    default: '#7659ff',
                }, {
                    class: 'btn-outline-warning',
                    container: 'warning-container outline',
                    containerTitle: 'Warning Button',
                    title: 'Warning',
                    default: '#ffcb17',
                }, {
                    class: 'btn-outline-success',
                    container: 'success-container outline',
                    containerTitle: 'Success Button',
                    title: 'Success',
                    default: '#00d977',
                }, {
                    class: 'btn-outline-info',
                    container: 'info-container',
                    containerTitle: 'Info Button',
                    title: 'Info',
                    default: '#0088ff',
                }, {
                    class: 'btn-outline-danger',
                    container: 'danger-container outline',
                    containerTitle: 'Danger Button',
                    title: 'Danger',
                    default: '#ff386a',
                }, {
                    class: 'btn-outline-secondary',
                    container: 'secondary-container outline',
                    containerTitle: 'Default Button',
                    title: 'Default',
                    default: '#bdbaff',
                },
            ],
        };
    }
    DefaultButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-default-buttons',
            styles: [__webpack_require__(/*! ./default-buttons.component.scss */ "./src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.scss")],
            template: __webpack_require__(/*! ./default-buttons.component.html */ "./src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.html"),
        })
    ], DefaultButtonsComponent);
    return DefaultButtonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Button Dropdowns</nb-card-header>\n  <nb-card-body>\n    <div class=\"dropdown btn-group\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-primary\">Dropdown</button>\n      <button type=\"button\" class=\"btn btn-primary\" ngbDropdownToggle></button>\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\n        <li class=\"dropdown-item\">Icon Button</li>\n        <li class=\"dropdown-item\">Hero Button</li>\n        <li class=\"dropdown-item\">Default</li>\n      </ul>\n    </div>\n    <div class=\"dropdown\" ngbDropdown>\n      <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\n        Dropdown\n      </button>\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\n        <li class=\"dropdown-item\">Icon Button</li>\n        <li class=\"dropdown-item\">Hero Button</li>\n        <li class=\"dropdown-item\">Default</li>\n      </ul>\n    </div>\n    <div class=\"dropdown\" placement=\"top\" ngbDropdown>\n      <button class=\"btn btn-outline-primary\" type=\"button\" ngbDropdownToggle>\n        Dropup\n      </button>\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\n        <li class=\"dropdown-item\">Icon Button</li>\n        <li class=\"dropdown-item\">Hero Button</li>\n        <li class=\"dropdown-item\">Default</li>\n      </ul>\n    </div>\n    <div class=\"dropdown ghost-dropdown\" ngbDropdown>\n      <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\n        Dropdown\n      </button>\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\n        <li class=\"dropdown-item\">Icon Button</li>\n        <li class=\"dropdown-item\">Hero Button</li>\n        <li class=\"dropdown-item\">Default</li>\n      </ul>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host{text-align:center}.nb-theme-default :host .dropdown,.nb-theme-default :host .dropup,.nb-theme-default :host .btn-group{margin-bottom:1rem}.nb-theme-default :host nb-card-body{overflow:visible}.nb-theme-cosmic :host{text-align:center}.nb-theme-cosmic :host .dropdown,.nb-theme-cosmic :host .dropup,.nb-theme-cosmic :host .btn-group{margin-bottom:1rem}.nb-theme-cosmic :host nb-card-body{overflow:visible}.nb-theme-corporate :host{text-align:center}.nb-theme-corporate :host .dropdown,.nb-theme-corporate :host .dropup,.nb-theme-corporate :host .btn-group{margin-bottom:1rem}.nb-theme-corporate :host nb-card-body{overflow:visible}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DropdownButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownButtonsComponent", function() { return DropdownButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DropdownButtonsComponent = /** @class */ (function () {
    function DropdownButtonsComponent() {
    }
    DropdownButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-dropdown-buttons',
            styles: [__webpack_require__(/*! ./dropdown-button.component.scss */ "./src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.scss")],
            template: __webpack_require__(/*! ./dropdown-button.component.html */ "./src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.html"),
        })
    ], DropdownButtonsComponent);
    return DropdownButtonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Hero Buttons</nb-card-header>\n  <nb-card-body>\n    <div class=\"row\">\n      <div class=\"example-container col-sm-6 col-md-4 col-xl-3 col-xxxl-2\" *ngFor=\"let hb of settings\">\n        <div class=\"container-title\">\n          <span>{{ hb.title }}</span>\n        </div>\n        <div class=\"container-btn\">\n          <button class=\"btn {{ hb.class }} btn-demo\">{{ hb.buttonTitle }}</button>\n        </div>\n        <div class=\"{{ hb.container }}\">\n          <div class=\"state-container\" *ngIf=\"hb[themeName].border\">\n            <div class=\"state-value border\"></div>\n            <div class=\"state-details\">\n              <span class=\"header\">Border</span>\n              <span class=\"subheader\">{{ hb[themeName].border }}</span>\n            </div>\n          </div>\n          <div class=\"state-container\" *ngIf=\"hb[themeName].color\">\n            <div class=\"state-value color\"></div>\n            <div class=\"state-details\">\n              <span class=\"header\">Color</span>\n              <span class=\"subheader\">{{ hb[themeName].color }}</span>\n            </div>\n          </div>\n          <div class=\"state-container\" *ngIf=\"hb[themeName].gradientLeft\">\n            <div class=\"state-value gradient\"></div>\n            <div class=\"state-details\">\n              <span class=\"header\">Linear Gradient</span>\n              <span class=\"subheader\">{{ hb[themeName].gradientLeft }}</span>\n              <span class=\"subheader\">{{ hb[themeName].gradientRight }}</span>\n            </div>\n          </div>\n          <div class=\"state-container\">\n            <div class=\"state-value bevel\" [ngClass]=\"{ 'none': !hb[themeName].bevel }\"></div>\n            <div class=\"state-details\" *ngIf=\"hb[themeName].bevel\">\n              <span class=\"header\">Bevel</span>\n              <span class=\"subheader\">0 3px 0 0</span>\n              <span class=\"subheader\">{{ hb[themeName].bevel }}</span>\n            </div>\n            <div class=\"state-details\" *ngIf=\"!hb[themeName].bevel\">\n              <span class=\"header\">No Bevel</span>\n            </div>\n          </div>\n          <div class=\"state-container\">\n            <div class=\"state-value shadow\" [ngClass]=\"{ 'none': !hb[themeName].shadow }\"></div>\n            <div class=\"state-details\" *ngIf=\"hb[themeName].shadow\">\n              <span class=\"header\">Shadow</span>\n              <span class=\"subheader\">0 4px 10px 0</span>\n              <span class=\"subheader\">{{ hb[themeName].shadow }}</span>\n            </div>\n            <div class=\"state-details\" *ngIf=\"!hb[themeName].shadow\">\n              <span class=\"header\">No Shadow</span>\n            </div>\n          </div>\n          <div class=\"state-container\">\n            <div class=\"state-value glow\" [ngClass]=\"{ 'none': !hb[themeName].glow }\"></div>\n            <div class=\"state-details\" *ngIf=\"hb[themeName].glow\">\n              <span class=\"header\">Glow</span>\n              <span class=\"subheader\">{{ hb[themeName].glow.params }}</span>\n              <span class=\"subheader\">{{ hb[themeName].glow.color }}</span>\n            </div>\n            <div class=\"state-details\" *ngIf=\"!hb[themeName].glow\">\n              <span class=\"header\">No Glow</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host nb-card-body{padding-bottom:0}.nb-theme-default :host .none{position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.nb-theme-default :host .none::before,.nb-theme-default :host .none::after{position:absolute;content:'';background:#dadfe6}.nb-theme-default :host .none::before{left:50%;top:10%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:1px;height:80%}.nb-theme-default :host .none::after{top:50%;left:10%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:1px;width:80%}.nb-theme-default :host .shadow{-webkit-box-shadow:none;box-shadow:none}.nb-theme-default :host .primary-container .color{background-color:#8a7fff}.nb-theme-default :host .primary-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#b57fff), to(#8a7fff));background-image:linear-gradient(to right, #b57fff, #8a7fff)}.nb-theme-default :host .primary-container .glow{-webkit-box-shadow:0 0 0 0 #9f7fff;box-shadow:0 0 0 0 #9f7fff}.nb-theme-default :host .primary-container .bevel{-webkit-box-shadow:0 0 0 0 #896ddb;box-shadow:0 0 0 0 #896ddb}.nb-theme-default :host .warning-container .color{background-color:#ffa100}.nb-theme-default :host .warning-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#fc0), to(#ffa100));background-image:linear-gradient(to right, #fc0, #ffa100)}.nb-theme-default :host .warning-container .glow{-webkit-box-shadow:0 0 0 0 #ffb600;box-shadow:0 0 0 0 #ffb600}.nb-theme-default :host .warning-container .bevel{-webkit-box-shadow:0 0 0 0 #db9d00;box-shadow:0 0 0 0 #db9d00}.nb-theme-default :host .success-container .color{background-color:#40dc7e}.nb-theme-default :host .success-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#40dcb2), to(#40dc7e));background-image:linear-gradient(to right, #40dcb2, #40dc7e)}.nb-theme-default :host .success-container .glow{-webkit-box-shadow:0 0 0 0 #40dc98;box-shadow:0 0 0 0 #40dc98}.nb-theme-default :host .success-container .bevel{-webkit-box-shadow:0 0 0 0 #37bd83;box-shadow:0 0 0 0 #37bd83}.nb-theme-default :host .info-container .color{background-color:#4ca6ff}.nb-theme-default :host .info-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#4cc4ff), to(#4ca6ff));background-image:linear-gradient(to right, #4cc4ff, #4ca6ff)}.nb-theme-default :host .info-container .glow{-webkit-box-shadow:0 0 0 0 #4cb5ff;box-shadow:0 0 0 0 #4cb5ff}.nb-theme-default :host .info-container .bevel{-webkit-box-shadow:0 0 0 0 #419cdb;box-shadow:0 0 0 0 #419cdb}.nb-theme-default :host .danger-container .color{background-color:#ff4c6a}.nb-theme-default :host .danger-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#ff4ca6), to(#ff4c6a));background-image:linear-gradient(to right, #ff4ca6, #ff4c6a)}.nb-theme-default :host .danger-container .glow{-webkit-box-shadow:0 0 0 0 #ff4c88;box-shadow:0 0 0 0 #ff4c88}.nb-theme-default :host .danger-container .bevel{-webkit-box-shadow:0 0 0 0 #db4175;box-shadow:0 0 0 0 #db4175}.nb-theme-default :host .secondary-container .color{background-color:rgba(0,0,0,0)}.nb-theme-default :host .secondary-container .border{border:2px solid #dadfe6}.nb-theme-default :host .secondary-container .glow{-webkit-box-shadow:0 0 0 0 #dadde6;box-shadow:0 0 0 0 #dadde6}.nb-theme-default :host .secondary-container .bevel{-webkit-box-shadow:0 0 0 0 #bbbec6;box-shadow:0 0 0 0 #bbbec6}.nb-theme-default :host .example-container{margin-bottom:1.5rem}.nb-theme-cosmic :host nb-card-body{padding-bottom:0}.nb-theme-cosmic :host .none{position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.nb-theme-cosmic :host .none::before,.nb-theme-cosmic :host .none::after{position:absolute;content:'';background:#342e73}.nb-theme-cosmic :host .none::before{left:50%;top:10%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:1px;height:80%}.nb-theme-cosmic :host .none::after{top:50%;left:10%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:1px;width:80%}.nb-theme-cosmic :host .shadow{-webkit-box-shadow:0 4px 10px 0 rgba(33,7,77,0.5);box-shadow:0 4px 10px 0 rgba(33,7,77,0.5)}.nb-theme-cosmic :host .primary-container .color{background-color:#7659ff}.nb-theme-cosmic :host .primary-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#ad59ff), to(#7659ff));background-image:linear-gradient(to right, #ad59ff, #7659ff)}.nb-theme-cosmic :host .primary-container .glow{-webkit-box-shadow:0 2px 8px 0 #9259ff;box-shadow:0 2px 8px 0 #9259ff}.nb-theme-cosmic :host .primary-container .bevel{-webkit-box-shadow:0 3px 0 0 #7e4ddb;box-shadow:0 3px 0 0 #7e4ddb}.nb-theme-cosmic :host .warning-container .color{background-color:#ffa100}.nb-theme-cosmic :host .warning-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#fc0), to(#ffa100));background-image:linear-gradient(to right, #fc0, #ffa100)}.nb-theme-cosmic :host .warning-container .glow{-webkit-box-shadow:0 2px 8px 0 #ffb600;box-shadow:0 2px 8px 0 #ffb600}.nb-theme-cosmic :host .warning-container .bevel{-webkit-box-shadow:0 3px 0 0 #db9d00;box-shadow:0 3px 0 0 #db9d00}.nb-theme-cosmic :host .success-container .color{background-color:#00d977}.nb-theme-cosmic :host .success-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#00d9bf), to(#00d977));background-image:linear-gradient(to right, #00d9bf, #00d977)}.nb-theme-cosmic :host .success-container .glow{-webkit-box-shadow:0 2px 8px 0 #00d99b;box-shadow:0 2px 8px 0 #00d99b}.nb-theme-cosmic :host .success-container .bevel{-webkit-box-shadow:0 3px 0 0 #00bb85;box-shadow:0 3px 0 0 #00bb85}.nb-theme-cosmic :host .info-container .color{background-color:#08f}.nb-theme-cosmic :host .info-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#00b3ff), to(#08f));background-image:linear-gradient(to right, #00b3ff, #08f)}.nb-theme-cosmic :host .info-container .glow{-webkit-box-shadow:0 2px 8px 0 #009dff;box-shadow:0 2px 8px 0 #009dff}.nb-theme-cosmic :host .info-container .bevel{-webkit-box-shadow:0 3px 0 0 #0087db;box-shadow:0 3px 0 0 #0087db}.nb-theme-cosmic :host .danger-container .color{background-color:#ff386a}.nb-theme-cosmic :host .danger-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#ff38ac), to(#ff386a));background-image:linear-gradient(to right, #ff38ac, #ff386a)}.nb-theme-cosmic :host .danger-container .glow{-webkit-box-shadow:0 2px 8px 0 #ff388b;box-shadow:0 2px 8px 0 #ff388b}.nb-theme-cosmic :host .danger-container .bevel{-webkit-box-shadow:0 3px 0 0 #db3078;box-shadow:0 3px 0 0 #db3078}.nb-theme-cosmic :host .secondary-container .color{background-color:rgba(0,0,0,0)}.nb-theme-cosmic :host .secondary-container .border{border:2px solid #7659ff}.nb-theme-cosmic :host .secondary-container .glow{-webkit-box-shadow:0 2px 8px 0 #9259ff;box-shadow:0 2px 8px 0 #9259ff}.nb-theme-cosmic :host .secondary-container .bevel{-webkit-box-shadow:0 3px 0 0 #7e4ddb;box-shadow:0 3px 0 0 #7e4ddb}.nb-theme-cosmic :host .example-container{margin-bottom:1.5rem}.nb-theme-corporate :host nb-card-body{padding-bottom:0}.nb-theme-corporate :host .none{position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.nb-theme-corporate :host .none::before,.nb-theme-corporate :host .none::after{position:absolute;content:'';background:#dadfe6}.nb-theme-corporate :host .none::before{left:50%;top:10%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:1px;height:80%}.nb-theme-corporate :host .none::after{top:50%;left:10%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:1px;width:80%}.nb-theme-corporate :host .shadow{-webkit-box-shadow:none;box-shadow:none}.nb-theme-corporate :host .primary-container .color{background-color:#73a1ff}.nb-theme-corporate :host .primary-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#73a1ff), to(#73a1ff));background-image:linear-gradient(to right, #73a1ff, #73a1ff)}.nb-theme-corporate :host .primary-container .glow{-webkit-box-shadow:0 0 20px 0 #73a1ff;box-shadow:0 0 20px 0 #73a1ff}.nb-theme-corporate :host .primary-container .bevel{-webkit-box-shadow:0 0 0 0 #638adb;box-shadow:0 0 0 0 #638adb}.nb-theme-corporate :host .warning-container .color{background-color:#ffa36b}.nb-theme-corporate :host .warning-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#ffa36b), to(#ffa36b));background-image:linear-gradient(to right, #ffa36b, #ffa36b)}.nb-theme-corporate :host .warning-container .glow{-webkit-box-shadow:0 0 20px 0 #ffa36b;box-shadow:0 0 20px 0 #ffa36b}.nb-theme-corporate :host .warning-container .bevel{-webkit-box-shadow:0 0 0 0 #db8c5c;box-shadow:0 0 0 0 #db8c5c}.nb-theme-corporate :host .success-container .color{background-color:#5dcfe3}.nb-theme-corporate :host .success-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#5dcfe3), to(#5dcfe3));background-image:linear-gradient(to right, #5dcfe3, #5dcfe3)}.nb-theme-corporate :host .success-container .glow{-webkit-box-shadow:0 0 20px 0 #5dcfe3;box-shadow:0 0 20px 0 #5dcfe3}.nb-theme-corporate :host .success-container .bevel{-webkit-box-shadow:0 0 0 0 #50b2c3;box-shadow:0 0 0 0 #50b2c3}.nb-theme-corporate :host .info-container .color{background-color:#ba7fec}.nb-theme-corporate :host .info-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#ba7fec), to(#ba7fec));background-image:linear-gradient(to right, #ba7fec, #ba7fec)}.nb-theme-corporate :host .info-container .glow{-webkit-box-shadow:0 0 20px 0 #ba7fec;box-shadow:0 0 20px 0 #ba7fec}.nb-theme-corporate :host .info-container .bevel{-webkit-box-shadow:0 0 0 0 #a06dcb;box-shadow:0 0 0 0 #a06dcb}.nb-theme-corporate :host .danger-container .color{background-color:#ff6b83}.nb-theme-corporate :host .danger-container .gradient{background-image:-webkit-gradient(linear, left top, right top, from(#ff6b83), to(#ff6b83));background-image:linear-gradient(to right, #ff6b83, #ff6b83)}.nb-theme-corporate :host .danger-container .glow{-webkit-box-shadow:0 0 20px 0 #ff6b83;box-shadow:0 0 20px 0 #ff6b83}.nb-theme-corporate :host .danger-container .bevel{-webkit-box-shadow:0 0 0 0 #db5c71;box-shadow:0 0 0 0 #db5c71}.nb-theme-corporate :host .secondary-container .color{background-color:#edf2f5}.nb-theme-corporate :host .secondary-container .border{border:2px solid #edf2f5}.nb-theme-corporate :host .secondary-container .glow{-webkit-box-shadow:0 0 0 0 #edf2f5;box-shadow:0 0 0 0 #edf2f5}.nb-theme-corporate :host .secondary-container .bevel{-webkit-box-shadow:0 0 0 0 #ccd0d3;box-shadow:0 0 0 0 #ccd0d3}.nb-theme-corporate :host .example-container{margin-bottom:1.5rem}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.ts ***!
  \**********************************************************************************/
/*! exports provided: HeroButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroButtonComponent", function() { return HeroButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroButtonComponent = /** @class */ (function () {
    function HeroButtonComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.themeName = 'default';
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
        });
    }
    HeroButtonComponent.prototype.init = function (colors) {
        this.settings = [{
                class: 'btn-hero-primary',
                container: 'primary-container',
                title: 'Primary Button',
                buttonTitle: 'Primary',
                default: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                },
                corporate: {
                    color: colors.primary,
                    glow: {
                        params: '0 0 20px 0',
                        color: 'rgba (115, 161, 255, 0.5)',
                    },
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: {
                        params: '0 2px 12px 0',
                        color: "adjust-hue(" + colors.primary + ", 10deg)",
                    },
                },
            }, {
                class: 'btn-hero-warning',
                container: 'warning-container',
                title: 'Warning Button',
                buttonTitle: 'Warning',
                default: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                },
                corporate: {
                    color: colors.warning,
                    glow: {
                        params: '0 0 20px 0',
                        color: 'rgba (256, 163, 107, 0.5)',
                    },
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                    bevel: "shade(" + colors.warning + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: {
                        params: '0 2px 12px 0',
                        color: "adjust-hue(" + colors.warning + ", 5deg)",
                    },
                },
            }, {
                class: 'btn-hero-success',
                container: 'success-container',
                title: 'Success Button',
                buttonTitle: 'Success',
                default: {
                    gradientLeft: "adjust-hue(" + colors.success + ", 20deg)",
                    gradientRight: colors.success,
                },
                corporate: {
                    color: colors.success,
                    glow: {
                        params: '0 0 20px 0',
                        color: 'rgba (93, 207, 227, 0.5)',
                    },
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.success + ", 20deg)",
                    gradientRight: colors.success,
                    bevel: "shade(" + colors.success + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: {
                        params: '0 2px 12px 0',
                        color: "adjust-hue(" + colors.success + ", 10deg)",
                    },
                },
            }, {
                class: 'btn-hero-info',
                container: 'info-container',
                title: 'Info Button',
                buttonTitle: 'Info',
                default: {
                    gradientLeft: "adjust-hue(" + colors.info + ", -10deg)",
                    gradientRight: colors.info,
                },
                corporate: {
                    color: colors.info,
                    glow: {
                        params: '0 0 20px 0',
                        color: 'rgba (186, 127, 236, 0.5)',
                    },
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.info + ", -10deg)",
                    gradientRight: colors.info,
                    bevel: "shade(" + colors.info + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: {
                        params: '0 2px 12px 0',
                        color: "adjust-hue(" + colors.info + ", -5deg)",
                    },
                },
            }, {
                class: 'btn-hero-danger',
                container: 'danger-container',
                title: 'Danger Button',
                buttonTitle: 'Danger',
                default: {
                    gradientLeft: "adjust-hue(" + colors.danger + ", -20deg)",
                    gradientRight: colors.danger,
                },
                corporate: {
                    color: colors.danger,
                    glow: {
                        params: '0 0 20px 0',
                        color: 'rgba (255, 107, 131, 0.5)',
                    },
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.danger + ", -20deg)",
                    gradientRight: colors.danger,
                    bevel: "shade(" + colors.danger + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: {
                        params: '0 2px 12px 0',
                        color: "adjust-hue(" + colors.danger + ", -10deg)",
                    },
                },
            }, {
                class: 'btn-hero-secondary',
                container: 'secondary-container',
                title: 'Ghost Button',
                buttonTitle: 'Ghost',
                default: {
                    border: '#dadfe6',
                },
                corporate: {
                    color: '#edf2f5',
                },
                cosmic: {
                    border: colors.primary,
                    bevel: '#665ebd',
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: {
                        params: '0 2px 12px 0',
                        color: 'rgba (146, 141, 255, 1)',
                    },
                },
            }];
    };
    HeroButtonComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    HeroButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-hero-buttons',
            styles: [__webpack_require__(/*! ./hero-buttons.component.scss */ "./src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.scss")],
            template: __webpack_require__(/*! ./hero-buttons.component.html */ "./src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.html"),
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], HeroButtonComponent);
    return HeroButtonComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Icon buttons</nb-card-header>\n  <nb-card-body>\n    <div class=\"row icon-buttons\">\n      <div class=\"col-md-12\">\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-primary btn-group-icon btn-group-divider\">\n            <i class=\"nb-home\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\">Icon Button</button>\n        </div>\n        <div class=\"btn-with-icon-example\">\n          <button type=\"button\" class=\"btn btn-primary btn-with-icon\">\n            <i class=\"nb-home\"></i>\n            <span>Icon Button</span>\n          </button>\n        </div>\n        <div class=\"icon-button-examples\">\n          <button type=\"button\" class=\"btn btn-outline-primary btn-icon\">\n            <i class=\"nb-layout-centre\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-success btn-icon\">\n            <i class=\"nb-layout-default\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-outline-danger btn-icon\">\n            <i class=\"nb-layout-one-column\"></i>\n          </button>\n        </div>\n        <div class=\"icon-button-examples\">\n          <button type=\"button\" class=\"btn btn-primary btn-icon\">\n            <i class=\"nb-shuffle\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-success btn-icon\">\n            <i class=\"nb-skip-backward-outline\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-danger btn-icon\">\n            <i class=\"nb-skip-forward-outline\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nb-card-body div:not(:last-child){margin-bottom:1rem}.btn-with-icon-example{width:100%}.btn-with-icon-example .btn{width:100%}.btn-group:not(:last-child){margin-bottom:1rem}.icon-button-examples{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.icon-button-examples button{min-width:4rem}.icon-button-examples:not(:last-child){margin-bottom:1rem}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.ts ***!
  \**********************************************************************************/
/*! exports provided: IconButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButtonsComponent", function() { return IconButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconButtonsComponent = /** @class */ (function () {
    function IconButtonsComponent() {
    }
    IconButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-icon-buttons',
            styles: [__webpack_require__(/*! ./icon-buttons.component.scss */ "./src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.scss")],
            template: __webpack_require__(/*! ./icon-buttons.component.html */ "./src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.html"),
        })
    ], IconButtonsComponent);
    return IconButtonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-body>\n    <nb-actions size=\"medium\" fullWidth>\n      <nb-action>\n        <i class=\"nb-pause-outline\"></i><span>Pause</span>\n      </nb-action>\n      <nb-action>\n        <i class=\"nb-list\"></i><span>Logs</span>\n      </nb-action>\n      <nb-action>\n        <i class=\"nb-search\"></i><span>Search</span>\n      </nb-action>\n      <nb-action>\n        <i class=\"nb-gear\"></i><span>Setup</span>\n      </nb-action>\n    </nb-actions>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host nb-actions>nb-action{padding:0}.nb-theme-default :host nb-action i{color:#a4abb3;font-size:2.5rem}[dir=ltr] .nb-theme-default :host nb-action i{margin-right:1rem}[dir=rtl] .nb-theme-default :host nb-action i{margin-left:1rem}.nb-theme-default :host nb-action span{font-family:Exo;font-weight:600;color:#2a2a2a;text-transform:uppercase}@media (max-width: 991.98px){.nb-theme-default :host nb-actions nb-action{padding:0 0.75rem}}@media (max-width: 767.98px){.nb-theme-default :host nb-card-body{padding:1rem}.nb-theme-default :host nb-action{font-size:0.75rem}.nb-theme-default :host nb-action i{font-size:2rem}[dir=ltr] .nb-theme-default :host nb-action i{margin-right:.5rem}[dir=rtl] .nb-theme-default :host nb-action i{margin-left:.5rem}}@media (max-width: 575.98px){.nb-theme-default :host nb-action i{font-size:1.75rem;margin:0}.nb-theme-default :host span{display:none}}.nb-theme-cosmic :host nb-actions>nb-action{padding:0}.nb-theme-cosmic :host nb-action i{color:#a1a1e5;font-size:2.5rem}[dir=ltr] .nb-theme-cosmic :host nb-action i{margin-right:1rem}[dir=rtl] .nb-theme-cosmic :host nb-action i{margin-left:1rem}.nb-theme-cosmic :host nb-action span{font-family:Exo;font-weight:600;color:#fff;text-transform:uppercase}@media (max-width: 991.98px){.nb-theme-cosmic :host nb-actions nb-action{padding:0 0.75rem}}@media (max-width: 767.98px){.nb-theme-cosmic :host nb-card-body{padding:1rem}.nb-theme-cosmic :host nb-action{font-size:0.75rem}.nb-theme-cosmic :host nb-action i{font-size:2rem}[dir=ltr] .nb-theme-cosmic :host nb-action i{margin-right:.5rem}[dir=rtl] .nb-theme-cosmic :host nb-action i{margin-left:.5rem}}@media (max-width: 575.98px){.nb-theme-cosmic :host nb-action i{font-size:1.75rem;margin:0}.nb-theme-cosmic :host span{display:none}}.nb-theme-corporate :host nb-actions>nb-action{padding:0}.nb-theme-corporate :host nb-action i{color:#a4abb3;font-size:2.5rem;color:#d3dbe5}[dir=ltr] .nb-theme-corporate :host nb-action i{margin-right:1rem}[dir=rtl] .nb-theme-corporate :host nb-action i{margin-left:1rem}.nb-theme-corporate :host nb-action span{font-family:Exo;font-weight:600;color:#181818;text-transform:uppercase}@media (max-width: 991.98px){.nb-theme-corporate :host nb-actions nb-action{padding:0 0.75rem}}@media (max-width: 767.98px){.nb-theme-corporate :host nb-card-body{padding:1rem}.nb-theme-corporate :host nb-action{font-size:0.75rem}.nb-theme-corporate :host nb-action i{font-size:2rem}[dir=ltr] .nb-theme-corporate :host nb-action i{margin-right:.5rem}[dir=rtl] .nb-theme-corporate :host nb-action i{margin-left:.5rem}}@media (max-width: 575.98px){.nb-theme-corporate :host nb-action i{font-size:1.75rem;margin:0}.nb-theme-corporate :host span{display:none}}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: LabeledActionsGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabeledActionsGroupComponent", function() { return LabeledActionsGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LabeledActionsGroupComponent = /** @class */ (function () {
    function LabeledActionsGroupComponent() {
    }
    LabeledActionsGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-labeled-actions-group',
            styles: [__webpack_require__(/*! ./labeled-actions-group.component.scss */ "./src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.scss")],
            template: __webpack_require__(/*! ./labeled-actions-group.component.html */ "./src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.html"),
        })
    ], LabeledActionsGroupComponent);
    return LabeledActionsGroupComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Button Shapes</nb-card-header>\n  <nb-card-body>\n    <div class=\"shape-container\">\n      <div class=\"container-title\">\n        <span>Rectangle Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>Border radius:</span>\n        <span>4px</span>\n      </div>\n      <div>\n        <button class=\"btn btn-success btn-rectangle btn-demo\">Rectangle</button>\n      </div>\n    </div>\n\n    <div class=\"shape-container\">\n      <div class=\"container-title\">\n        <span>Semi-round Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>Border radius:</span>\n        <span>12px</span>\n      </div>\n      <div>\n        <button class=\"btn btn-success btn-semi-round btn-demo\">Semi-round</button>\n      </div>\n    </div>\n\n    <div class=\"shape-container\">\n      <div class=\"container-title\">\n        <span>Rounded Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>Border radius:</span>\n        <span>round</span>\n      </div>\n      <div>\n        <button class=\"btn btn-success btn-round btn-demo\">Round</button>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host nb-card-body{padding:0 0 29px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nb-theme-default :host .shape-container{margin:1.25rem 1.25rem 0}.nb-theme-default :host .container-title{margin-bottom:0.25rem}.nb-theme-default :host .subheader{margin-bottom:1rem;font-size:0.875rem}.nb-theme-default :host .subheader span:nth-child(2){color:#2a2a2a;font-weight:600}.nb-theme-cosmic :host nb-card-body{padding:0 0 29px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nb-theme-cosmic :host .shape-container{margin:1.25rem 1.25rem 0}.nb-theme-cosmic :host .container-title{margin-bottom:0.25rem}.nb-theme-cosmic :host .subheader{margin-bottom:1rem;font-size:0.875rem}.nb-theme-cosmic :host .subheader span:nth-child(2){color:#fff;font-weight:600}.nb-theme-corporate :host nb-card-body{padding:0 0 29px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nb-theme-corporate :host .shape-container{margin:1.25rem 1.25rem 0}.nb-theme-corporate :host .container-title{margin-bottom:0.25rem}.nb-theme-corporate :host .subheader{margin-bottom:1rem;font-size:0.875rem}.nb-theme-corporate :host .subheader span:nth-child(2){color:#181818;font-weight:600}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.ts ***!
  \************************************************************************************/
/*! exports provided: ShapeButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeButtonsComponent", function() { return ShapeButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShapeButtonsComponent = /** @class */ (function () {
    function ShapeButtonsComponent() {
    }
    ShapeButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-shape-buttons',
            styles: [__webpack_require__(/*! ./shape-buttons.component.scss */ "./src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.scss")],
            template: __webpack_require__(/*! ./shape-buttons.component.html */ "./src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.html"),
        })
    ], ShapeButtonsComponent);
    return ShapeButtonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Button Sizes</nb-card-header>\n\n  <nb-card-body>\n    <div class=\"size-container\">\n      <div class=\"container-title\">\n        <span>Large Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>0.875rem 1.75rem</span>\n      </div>\n      <div>\n        <button class=\"btn btn-primary btn-lg\">Large Button</button>\n      </div>\n    </div>\n    <div class=\"size-container\">\n      <div class=\"container-title\">\n        <span>Medium Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>0.75rem 1.5rem</span>\n      </div>\n      <div>\n        <button class=\"btn btn-primary btn-md\">Medium Button</button>\n      </div>\n    </div>\n    <div class=\"size-container\">\n      <div class=\"container-title\">\n        <span>Small Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>0.675rem 1.5rem</span>\n      </div>\n      <div>\n        <button class=\"btn btn-primary btn-sm\">Small Button</button>\n      </div>\n    </div>\n    <div class=\"size-container\">\n      <div class=\"container-title\">\n        <span>X-Small Button</span>\n      </div>\n      <div class=\"subheader\">\n        <span>0.5rem 1.25rem</span>\n      </div>\n      <div>\n        <button class=\"btn btn-primary btn-xs\">X-Small Button</button>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host nb-card-body{padding:0 1.25rem 1.25rem 0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.nb-theme-default :host .container-title{margin-bottom:0.25rem}.nb-theme-default :host .size-container{margin:1.25rem 0 0 1.25rem}.nb-theme-default :host .subheader{margin-bottom:0.75rem;font-size:0.875rem;font-weight:500;color:#2a2a2a}.nb-theme-cosmic :host nb-card-body{padding:0 1.25rem 1.25rem 0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.nb-theme-cosmic :host .container-title{margin-bottom:0.25rem}.nb-theme-cosmic :host .size-container{margin:1.25rem 0 0 1.25rem}.nb-theme-cosmic :host .subheader{margin-bottom:0.75rem;font-size:0.875rem;font-weight:500;color:#fff}.nb-theme-corporate :host nb-card-body{padding:0 1.25rem 1.25rem 0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.nb-theme-corporate :host .container-title{margin-bottom:0.25rem}.nb-theme-corporate :host .size-container{margin:1.25rem 0 0 1.25rem}.nb-theme-corporate :host .subheader{margin-bottom:0.75rem;font-size:0.875rem;font-weight:500;color:#181818}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SizeButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeButtonsComponent", function() { return SizeButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SizeButtonsComponent = /** @class */ (function () {
    function SizeButtonsComponent() {
    }
    SizeButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-size-buttons',
            styles: [__webpack_require__(/*! ./size-buttons.component.scss */ "./src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.scss")],
            template: __webpack_require__(/*! ./size-buttons.component.html */ "./src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.html"),
        })
    ], SizeButtonsComponent);
    return SizeButtonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/grid/grid.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/ui-features/grid/grid.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-header>\n        Grid System\n      </nb-card-header>\n      <nb-card-body>\n        <h5 class=\"grid-h\">Stacked to horizontal</h5>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-8\">\n            <div>.col-md-8</div>\n          </div>\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-6\">\n            <div>.col-md-6</div>\n          </div>\n          <div class=\"col-md-6\">\n            <div>.col-md-6</div>\n          </div>\n        </div>\n\n        <h5 class=\"grid-h\">Mobile and desktop</h5>\n        <div class=\"row show-grid\">\n          <div class=\"col-12 col-md-8\">\n            <div>.col-12 .col-md-8</div>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <div>.col-6 .col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-6 col-md-4\">\n            <div>.col-6 .col-md-4</div>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <div>col-6 .col-md-4</div>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <div>.col-6 .col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-6\">\n            <div>.col-6</div>\n          </div>\n          <div class=\"col-6\">\n            <div>.col-6</div>\n          </div>\n        </div>\n\n        <h5 class=\"grid-h\">Mobile, tablet, desktop</h5>\n        <div class=\"row show-grid\">\n          <div class=\"col-12 col-sm-6 col-md-8\">\n            <div>.col-12 .col-sm-6 .col-md-8</div>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <div>.col-6 .col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-6 col-sm-4\">\n            <div>.col-6 .col-sm-4</div>\n          </div>\n          <div class=\"col-6 col-sm-4\">\n            <div>.col-6 .col-sm-4</div>\n          </div>\n          <div class=\"col-6 col-sm-4\">\n            <div>.col-6 .col-sm-4</div>\n          </div>\n        </div>\n\n        <h5 class=\"grid-h\">Column wrapping</h5>\n        <div class=\"row show-grid\">\n          <div class=\"col-9\">\n            <div>.col-9</div>\n          </div>\n          <div class=\"col-4\">\n            <div>.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div>.col-6<br>Subsequent columns continue along the new line.</div>\n          </div>\n        </div>\n\n        <h5 class=\"grid-h\">Responsive column resets</h5>\n        <div class=\"row show-grid\">\n          <div class=\"col-6 col-sm-3\">\n            <div>.col-6 .col-sm-3\n              <p>Resize your viewport or check it out on your phone for an example.</p>\n            </div>\n          </div>\n          <div class=\"col-6 col-sm-3\">\n            <div>.col-6 .col-sm-3</div>\n          </div>\n          <div class=\"col-6 col-sm-3\">\n            <div>.col-6 .col-sm-3</div>\n          </div>\n          <div class=\"col-6 col-sm-3\">\n            <div>.col-6 .col-sm-3</div>\n          </div>\n        </div>\n\n        <h5 class=\"grid-h\">Offsetting columns</h5>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n          <div class=\"col-md-4 offset-md-4\">\n            <div>.col-md-4 .offset-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-3 offset-md-3\">\n            <div>.col-md-3 .offset-md-3</div>\n          </div>\n          <div class=\"col-md-3 offset-md-3\">\n            <div>.col-md-3 .offset-md-3</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div>.col-md-6 .offset-md-3</div>\n          </div>\n        </div>\n\n        <h5 class=\"grid-h\">Grid options</h5>\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th></th>\n                <th> Extra small devices\n                  <small>Phones (&lt;576px)</small>\n                </th>\n                <th> Small devices\n                  <small>Tablets (≥576px)</small>\n                </th>\n                <th> Medium devices\n                  <small>Desktops (≥768px)</small>\n                </th>\n                <th> Large devices\n                  <small>Desktops (≥992px)</small>\n                </th>\n                <th> Large devices\n                  <small>Desktops (≥1200px)</small>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Grid behavior</th>\n                <td>Horizontal at all times</td>\n                <td colspan=\"4\">Collapsed to start, horizontal above breakpoints</td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Container width</th>\n                <td>None (auto)</td>\n                <td>540px</td>\n                <td>720px</td>\n                <td>960px</td>\n                <td>1140px</td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Class prefix</th>\n                <td><code>.col-</code></td>\n                <td><code>.col-sm-</code></td>\n                <td><code>.col-md-</code></td>\n                <td><code>.col-lg-</code></td>\n                <td><code>.col-xl-</code></td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\"># of columns</th>\n                <td colspan=\"5\">12</td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Gutter width</th>\n                <td colspan=\"5\">1.875rem / 30px (15px on each side of a column)</td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Nestable</th>\n                <td colspan=\"5\">Yes</td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Offsets</th>\n                <td colspan=\"5\">Yes</td>\n              </tr>\n              <tr>\n                <th class=\"text-nowrap\" scope=\"row\">Column ordering</th>\n                <td colspan=\"5\">Yes</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/grid/grid.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/ui-features/grid/grid.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host .show-grid .row{margin:-0.5rem}.nb-theme-default :host .show-grid div[class^=col-]{padding:0.5rem;-webkit-box-sizing:border-box;box-sizing:border-box}.nb-theme-default :host .show-grid div[class^=col-] div{text-align:center;background-color:#e9edf2;padding:0.75rem 0.25rem;border-radius:0.25rem}.nb-theme-default :host .grid-h{margin-top:1.5rem}.nb-theme-default :host .grid-h:first-child{margin-top:0}.nb-theme-default :host .table-responsive{margin-top:1rem}.nb-theme-cosmic :host .show-grid .row{margin:-0.5rem}.nb-theme-cosmic :host .show-grid div[class^=col-]{padding:0.5rem;-webkit-box-sizing:border-box;box-sizing:border-box}.nb-theme-cosmic :host .show-grid div[class^=col-] div{text-align:center;background-color:#494299;padding:0.75rem 0.25rem;border-radius:0.25rem}.nb-theme-cosmic :host .grid-h{margin-top:1.5rem}.nb-theme-cosmic :host .grid-h:first-child{margin-top:0}.nb-theme-cosmic :host .table-responsive{margin-top:1rem}.nb-theme-corporate :host .show-grid .row{margin:-0.5rem}.nb-theme-corporate :host .show-grid div[class^=col-]{padding:0.5rem;-webkit-box-sizing:border-box;box-sizing:border-box}.nb-theme-corporate :host .show-grid div[class^=col-] div{text-align:center;background-color:#e9edf2;padding:0.75rem 0.25rem;border-radius:0.25rem}.nb-theme-corporate :host .grid-h{margin-top:1.5rem}.nb-theme-corporate :host .grid-h:first-child{margin-top:0}.nb-theme-corporate :host .table-responsive{margin-top:1rem}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/grid/grid.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/ui-features/grid/grid.component.ts ***!
  \**********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-grid',
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/pages/ui-features/grid/grid.component.scss")],
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/pages/ui-features/grid/grid.component.html"),
        })
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/icons/icons.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/ui-features/icons/icons.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-6\">\n    <nb-card class=\"nb-icons\">\n      <nb-card-header>\n        Nebular\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"icon\"\n             *ngFor=\"let icon of icons.nebular\">\n          <i class=\"{{ icon }}\" [nbPopover]=\"icon\"></i>\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>\n        Font awesome icons\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"icon\"\n             *ngFor=\"let icon of icons.fontAwesome\">\n          <i class=\"{{ icon }}\" [nbPopover]=\"icon\"></i>\n        </div>\n      </nb-card-body>\n      <nb-card-footer>\n        <a href=\"http://fortawesome.github.io/Font-Awesome/icons/\" target=\"_blank\">\n          See all Font Awesome icons\n        </a>\n      </nb-card-footer>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-12 col-lg-6\">\n    <nb-card>\n      <nb-card-header>\n        Ionicons\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"icon\" *ngFor=\"let icon of icons.ionicons\">\n          <i class=\"{{ icon }}\" [nbPopover]=\"icon\"></i>\n        </div>\n      </nb-card-body>\n      <nb-card-footer>\n        <a href=\"http://ionicons.com/\" target=\"_blank\">See all ionicons icons</a>\n      </nb-card-footer>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/icons/icons.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/ui-features/icons/icons.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon{display:inline-block;width:4rem;padding:1.25rem 0;text-align:center;font-size:1.25rem}.icon i:hover{opacity:0.8;cursor:pointer}.nb-icons .icon{padding:0.75rem 0;font-size:1.75rem}nb-card-body{padding:0}nb-card-footer{text-align:right}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/icons/icons.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/ui-features/icons/icons.component.ts ***!
  \************************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
        this.icons = {
            nebular: ['nb-alert', 'nb-angle-double-left', 'nb-angle-double-right',
                'nb-arrow-down', 'nb-arrow-dropdown', 'nb-arrow-dropleft',
                'nb-arrow-dropright', 'nb-arrow-dropup', 'nb-arrow-left', 'nb-arrow-retweet', 'nb-arrow-right',
                'nb-arrow-thin-down', 'nb-arrow-thin-left', 'nb-arrow-thin-right', 'nb-arrow-thin-up',
                'nb-arrow-up', 'nb-audio', 'nb-bar-chart', 'nb-checkmark', 'nb-chevron-down',
                'nb-chevron-down-outline', 'nb-chevron-left', 'nb-chevron-left-outline', 'nb-chevron-right',
                'nb-chevron-right-outline', 'nb-chevron-up', 'nb-chevron-up-outline', 'nb-close',
                'nb-close-circled', 'nb-cloudy', 'nb-coffee-maker', 'nb-compose', 'nb-edit', 'nb-email',
                'nb-flame-circled', 'nb-gear', 'nb-grid-a', 'nb-grid-a-outline', 'nb-grid-b', 'nb-grid-b-outline',
                'nb-heart', 'nb-home', 'nb-keypad', 'nb-layout-centre', 'nb-layout-default', 'nb-layout-one-column',
                'nb-layout-sidebar-left', 'nb-layout-sidebar-right', 'nb-layout-two-column', 'nb-lightbulb',
                'nb-list', 'nb-location', 'nb-locked', 'nb-loop', 'nb-loop-circled', 'nb-menu', 'nb-notifications',
                'nb-paper-plane', 'nb-partlysunny', 'nb-pause', 'nb-pause-outline', 'nb-person', 'nb-phone',
                'nb-play', 'nb-play-outline', 'nb-plus', 'nb-plus-circled', 'nb-power', 'nb-power-circled',
                'nb-rainy', 'nb-roller-shades', 'nb-search', 'nb-shuffle', 'nb-skip-backward',
                'nb-skip-backward-outline', 'nb-skip-forward', 'nb-skip-forward-outline', 'nb-snowy-circled',
                'nb-square', 'nb-square-outline', 'nb-star', 'nb-sunny', 'nb-sunny-circled', 'nb-tables', 'nb-title',
                'nb-trash', 'nb-volume-high', 'nb-volume-mute', 'nb-drop', 'nb-drops', 'nb-info', 'nb-expand', 'nb-collapse',
                'nb-e-commerce'],
            ionicons: [
                'ion-ionic', 'ion-arrow-right-b', 'ion-arrow-down-b', 'ion-arrow-left-b', 'ion-arrow-up-c', 'ion-arrow-right-c',
                'ion-arrow-down-c', 'ion-arrow-left-c', 'ion-arrow-return-right', 'ion-arrow-return-left', 'ion-arrow-swap',
                'ion-arrow-shrink', 'ion-arrow-expand', 'ion-arrow-move', 'ion-arrow-resize', 'ion-chevron-up',
                'ion-chevron-right', 'ion-chevron-down', 'ion-chevron-left', 'ion-navicon-round', 'ion-navicon',
                'ion-drag', 'ion-log-in', 'ion-log-out', 'ion-checkmark-round', 'ion-checkmark', 'ion-checkmark-circled',
                'ion-close-round', 'ion-plus-round', 'ion-minus-round', 'ion-information', 'ion-help',
                'ion-backspace-outline', 'ion-help-buoy', 'ion-asterisk', 'ion-alert', 'ion-alert-circled',
                'ion-refresh', 'ion-loop', 'ion-shuffle', 'ion-home', 'ion-search', 'ion-flag', 'ion-star',
                'ion-heart', 'ion-heart-broken', 'ion-gear-a', 'ion-gear-b', 'ion-toggle-filled', 'ion-toggle',
                'ion-settings', 'ion-wrench', 'ion-hammer', 'ion-edit', 'ion-trash-a', 'ion-trash-b',
                'ion-document', 'ion-document-text', 'ion-clipboard', 'ion-scissors', 'ion-funnel',
                'ion-bookmark', 'ion-email', 'ion-email-unread', 'ion-folder', 'ion-filing', 'ion-archive',
                'ion-reply', 'ion-reply-all', 'ion-forward',
            ],
            fontAwesome: [
                'fa fa-adjust', 'fa fa-anchor', 'fa fa-archive', 'fa fa-chart-area', 'fa fa-arrows-alt', 'fa fa-arrows-alt-h',
                'fa fa-arrows-alt-v', 'fa fa-asterisk', 'fa fa-at', 'fa fa-car', 'fa fa-ban', 'fa fa-university',
                'fa fa-chart-bar', 'far fa-chart-bar', 'fa fa-barcode', 'fa fa-bars', 'fa fa-bed', 'fa fa-beer',
                'fa fa-bell', 'far fa-bell', 'fa fa-bell-slash', 'far fa-bell-slash', 'fa fa-bicycle', 'fa fa-binoculars',
                'fa fa-birthday-cake', 'fa fa-bolt', 'fa fa-bomb', 'fa fa-book', 'fa fa-bookmark', 'far fa-bookmark',
                'fa fa-briefcase', 'fa fa-bug', 'fa fa-building', 'far fa-building', 'fa fa-bullhorn', 'fas fa-bolt',
            ],
        };
    }
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-icons',
            styles: [__webpack_require__(/*! ./icons.component.scss */ "./src/app/pages/ui-features/icons/icons.component.scss")],
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/pages/ui-features/icons/icons.component.html"),
        })
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/modals/modal/modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ui-features/modals/modal/modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.modalContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy\n    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis\n    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.";
    }
    ModalComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-modal',
            template: "\n    <div class=\"modal-header\">\n      <span>{{ modalHeader }}</span>\n      <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      {{ modalContent }}\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-md btn-primary\" (click)=\"closeModal()\">Save changes</button>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/modals/modals.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/ui-features/modals/modals.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-header>Modals</nb-card-header>\n      <nb-card-body>\n        <button class=\"btn btn-success\" (click)=\"showLargeModal()\">Large modal</button>\n        <button class=\"btn btn-warning\" (click)=\"showSmallModal()\">Small modal</button>\n        <button class=\"btn btn-primary\" (click)=\"showStaticModal()\">Static modal</button>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/modals/modals.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/ui-features/modals/modals.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[dir=ltr] :host button{margin:0 0.75rem 2rem 0}[dir=rtl] :host button{margin:0 0 2rem 0.75rem}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/modals/modals.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/ui-features/modals/modals.component.ts ***!
  \**************************************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/pages/ui-features/modals/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalsComponent = /** @class */ (function () {
    function ModalsComponent(modalService) {
        this.modalService = modalService;
    }
    ModalsComponent.prototype.showLargeModal = function () {
        var activeModal = this.modalService.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Large Modal';
    };
    ModalsComponent.prototype.showSmallModal = function () {
        var activeModal = this.modalService.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], { size: 'sm', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Small Modal';
    };
    ModalsComponent.prototype.showStaticModal = function () {
        var activeModal = this.modalService.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], {
            size: 'sm',
            backdrop: 'static',
            container: 'nb-layout',
        });
        activeModal.componentInstance.modalHeader = 'Static modal';
        activeModal.componentInstance.modalContent = "This is static modal, backdrop click\n                                                    will not close it. Click \u00D7 or confirmation button to close modal.";
    };
    ModalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-modals',
            styles: [__webpack_require__(/*! ./modals.component.scss */ "./src/app/pages/ui-features/modals/modals.component.scss")],
            template: __webpack_require__(/*! ./modals.component.html */ "./src/app/pages/ui-features/modals/modals.component.html"),
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/popovers/popover-examples.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/ui-features/popovers/popover-examples.component.ts ***!
  \**************************************************************************/
/*! exports provided: NgxPopoverTabsComponent, NgxPopoverFormComponent, NgxPopoverCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPopoverTabsComponent", function() { return NgxPopoverTabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPopoverFormComponent", function() { return NgxPopoverFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPopoverCardComponent", function() { return NgxPopoverCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgxPopoverTabsComponent = /** @class */ (function () {
    function NgxPopoverTabsComponent() {
    }
    NgxPopoverTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-popover-tabs',
            template: "\n    <nb-tabset>\n      <nb-tab tabTitle=\"What's up?\">\n        <div class=\"p-4\">\n          Such a wonderful day!\n        </div>\n      </nb-tab>\n      <nb-tab tabTitle=\"Second Tab\">\n        <div class=\"p-4\">\n          Indeed!\n        </div>\n      </nb-tab>\n    </nb-tabset>\n  ",
        })
    ], NgxPopoverTabsComponent);
    return NgxPopoverTabsComponent;
}());

var NgxPopoverFormComponent = /** @class */ (function () {
    function NgxPopoverFormComponent() {
    }
    NgxPopoverFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-popover-form',
            template: "\n    <div class=\"p-4\">\n      <form>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary w-100\">Send</button>\n      </form>\n    </div>\n  ",
        })
    ], NgxPopoverFormComponent);
    return NgxPopoverFormComponent;
}());

var NgxPopoverCardComponent = /** @class */ (function () {
    function NgxPopoverCardComponent() {
    }
    NgxPopoverCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-popover-card',
            template: "\n    <nb-card class=\"popover-card\">\n      <nb-card-header status=\"warning\">\n        Hello!\n      </nb-card-header>\n      <nb-card-body>\n        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\n        there live the blind texts.\n        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\n      </nb-card-body>\n    </nb-card>\n  ",
        })
    ], NgxPopoverCardComponent);
    return NgxPopoverCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/popovers/popovers.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/ui-features/popovers/popovers.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card size=\"small\">\n      <nb-card-header>Popover Position</nb-card-header>\n      <nb-card-body>\n        <p>When popover has not enough space based on the configured placement, it will adjust accordingly trying to fit the screen.</p>\n        <button class=\"btn btn-danger with-margins\" nbPopover=\"Hello, how are you today?\" nbPopoverMode=\"hint\" nbPopoverPlacement=\"left\">Left</button>\n        <button class=\"btn btn-danger with-margins\" nbPopover=\"Hello, how are you today?\" nbPopoverMode=\"hint\" nbPopoverPlacement=\"top\">Top</button>\n        <button class=\"btn btn-danger with-margins\" nbPopover=\"Hello, how are you today?\" nbPopoverMode=\"hint\" nbPopoverPlacement=\"bottom\">Bottom</button>\n        <button class=\"btn btn-danger with-margins\" nbPopover=\"Hello, how are you today?\" nbPopoverMode=\"hint\" nbPopoverPlacement=\"right\">Right</button>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <nb-card size=\"small\">\n      <nb-card-header>Simple Popovers</nb-card-header>\n      <nb-card-body>\n        <p>In a simples form popover can take a string of text to render.</p>\n        <button class=\"btn btn-success with-margins\" nbPopover=\"Hello, how are you today?\">on click</button>\n        <button class=\"btn btn-success with-margins\" nbPopover=\"Hello, how are you today?\" nbPopoverMode=\"hover\">on hover</button>\n        <button class=\"btn btn-success with-margins\" nbPopover=\"Hello, how are you today?\" nbPopoverMode=\"hint\">on hint</button>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n\n    <ng-template #tabs>\n      <nb-tabset>\n        <nb-tab tabTitle=\"What's up?\">\n          <div class=\"p-4\">\n            Such a wonderful day!\n          </div>\n        </nb-tab>\n        <nb-tab tabTitle=\"Second Tab\">\n          <div class=\"p-4\">\n            Indeed!\n          </div>\n        </nb-tab>\n      </nb-tabset>\n    </ng-template>\n\n    <ng-template #form>\n      <div class=\"p-4\">\n        <form>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary w-100\">Send</button>\n        </form>\n      </div>\n    </ng-template>\n\n    <ng-template #card>\n      <nb-card class=\"popover-card\">\n        <nb-card-header status=\"warning\">\n          Hello!\n        </nb-card-header>\n        <nb-card-body>\n          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.\n          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\n        </nb-card-body>\n      </nb-card>\n    </ng-template>\n\n    <nb-card size=\"small\">\n      <nb-card-header>Template Popovers</nb-card-header>\n      <nb-card-body>\n        <p>You can pass a refference to `ng-template` to be rendered.</p>\n        <button class=\"btn btn-warning with-margins\" [nbPopover]=\"tabs\">With tabs</button>\n        <button class=\"btn btn-warning with-margins\" [nbPopover]=\"form\">With form</button>\n        <button class=\"btn btn-warning with-margins\" [nbPopover]=\"card\">With card</button>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <nb-card size=\"small\">\n      <nb-card-header>Component Popovers</nb-card-header>\n      <nb-card-body>\n        <p>Same way popover can render any angular compnoent.</p>\n        <button class=\"btn btn-warning with-margins\" [nbPopover]=\"tabsComponent\">With tabs</button>\n        <button class=\"btn btn-warning with-margins\" [nbPopover]=\"formComponent\">With form</button>\n        <button class=\"btn btn-warning with-margins\" [nbPopover]=\"cardComponent\">With card</button>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-header>Event Debouncing</nb-card-header>\n      <nb-card-body>\n        <p>Quickly move mouse cursor over the buttons, only the last popover will be created. It allows us to avoid excess white improving page performance.</p>\n\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\n          show hint\n        </button>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/popovers/popovers.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/ui-features/popovers/popovers.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ nb-card.popover-card{margin-bottom:0;width:300px;-webkit-box-shadow:none;box-shadow:none}[dir=ltr] :host button.with-margins{margin:0 0.75rem 2rem 0}[dir=rtl] :host button.with-margins{margin:0 0 2rem 0.75rem}[dir=ltr] :host /deep/ .btn-outline-secondary{margin:0 0.5rem 0.5rem 0}[dir=rtl] :host /deep/ .btn-outline-secondary{margin:0 0 0.5rem 0.5rem}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/popovers/popovers.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/ui-features/popovers/popovers.component.ts ***!
  \******************************************************************/
/*! exports provided: PopoversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoversComponent", function() { return PopoversComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_examples_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-examples.component */ "./src/app/pages/ui-features/popovers/popover-examples.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PopoversComponent = /** @class */ (function () {
    function PopoversComponent() {
        this.tabsComponent = _popover_examples_component__WEBPACK_IMPORTED_MODULE_1__["NgxPopoverTabsComponent"];
        this.cardComponent = _popover_examples_component__WEBPACK_IMPORTED_MODULE_1__["NgxPopoverCardComponent"];
        this.formComponent = _popover_examples_component__WEBPACK_IMPORTED_MODULE_1__["NgxPopoverFormComponent"];
    }
    PopoversComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-popovers',
            styles: [__webpack_require__(/*! ./popovers.component.scss */ "./src/app/pages/ui-features/popovers/popovers.component.scss")],
            template: __webpack_require__(/*! ./popovers.component.html */ "./src/app/pages/ui-features/popovers/popovers.component.html"),
        })
    ], PopoversComponent);
    return PopoversComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/search-fields/search-fields.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/ui-features/search-fields/search-fields.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Layout Rotate Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"rotate-layout\" tag=\"rotate-layout\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Modal Zoomin Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"modal-zoomin\" tag=\"modal-zoomin\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Modal Move Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"modal-move\" tag=\"modal-move\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Modal Drop Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"modal-drop\" tag=\"modal-drop\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Modal Half Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"modal-half\" tag=\"modal-half\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Curtain Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"curtain\" tag=\"curtain\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Column Curtain Search\n      </nb-card-header>\n      <nb-card-body>\n        <nb-search type=\"column-curtain\" tag=\"column-curtain\"></nb-search>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/ui-features/search-fields/search-fields.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/ui-features/search-fields/search-fields.component.ts ***!
  \****************************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-search-fields',
            template: __webpack_require__(/*! ./search-fields.component.html */ "./src/app/pages/ui-features/search-fields/search-fields.component.html"),
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/tabs/tabs.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/ui-features/tabs/tabs.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-6\">\n    <nb-card size=\"small\">\n      <nb-tabset>\n        <nb-tab tabTitle=\"Simple Tab #1\">\n          <p>In 1975, the first general purpose home automation network technology, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/X10_(industry_standard)\" title=\"X10 (industry standard)\">X10</a>, was developed. It is a communication protocol for electronic devices. It primarily uses <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Electric_power_transmission\" title=\"Electric power transmission\">electric power transmission</a> wiring for signalling and control, where the signals involve brief <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Radio_frequency\" title=\"Radio frequency\">radio frequency</a> bursts of <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Digital_data\" title=\"Digital data\">digital data</a>, and remains the most widely available.<sup id=\"cite_ref-8\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-8\">[8]</a></sup> By 1978, X10 products included a 16 channel command console, a lamp module, and an appliance module. Soon after came the wall switch module and the first X10 timer.</p>\n        </nb-tab>\n        <nb-tab tabTitle=\"Simple Tab #2\">\n          <span>Content #2</span>\n        </nb-tab>\n        <nb-tab tabTitle=\"Simple Tab #3\">\n          <span>Content #3</span>\n        </nb-tab>\n      </nb-tabset>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6\">\n    <nb-card size=\"small\">\n      <nb-tabset fullWidth>\n        <nb-tab tabTitle=\"Full width tab #1\">\n          <p><b>Home automation</b> or <b>smart home</b><sup id=\"cite_ref-Smart_Home_1-0\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-Smart_Home-1\">[1]</a></sup> (also known as <b>domotics</b><sup id=\"cite_ref-t3_2-0\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-t3-2\">[2]</a></sup>) is <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Building_automation\" title=\"Building automation\">building automation</a> for the home. It involves the control and automation of lighting, heating (such as <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Smart_thermostat\" title=\"Smart thermostat\">smart thermostats</a>), ventilation, air conditioning (<a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/HVAC\" title=\"HVAC\">HVAC</a>), and security, as well as <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Home_appliance\" title=\"Home appliance\">home appliances</a> such as washer/dryers, ovens or refrigerators/freezers. <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Wi-Fi\" title=\"Wi-Fi\">Wi-Fi</a> is often used for remote monitoring and control. Home devices, when remotely monitored and controlled via the Internet, are an important constituent of the <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Internet_of_Things\" class=\"mw-redirect\" title=\"Internet of Things\">Internet of Things</a>. Modern systems generally consist of switches and sensors connected to a central hub sometimes called a \"gateway\" from which the system is controlled with a <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/User_interface\" title=\"User interface\">user interface</a> that is interacted either with a wall-mounted terminal, mobile phone software, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Tablet_computer\" title=\"Tablet computer\">tablet computer</a> or a web interface, often but not always via Internet cloud services.</p>\n          <p>While there are many competing vendors, there are very few worldwide accepted industry standards and the smart home space is heavily fragmented.<sup id=\"cite_ref-3\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-3\">[3]</a></sup> Popular <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Communications_protocol\" title=\"Communications protocol\">communications protocol</a> for products include <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/X10_(industry_standard)\" title=\"X10 (industry standard)\">X10</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Ethernet\" title=\"Ethernet\">Ethernet</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/RS-485\" title=\"RS-485\">RS-485</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/6LoWPAN\" title=\"6LoWPAN\">6LoWPAN</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Bluetooth_low_energy\" class=\"mw-redirect\" title=\"Bluetooth low energy\">Bluetooth LE (BLE)</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/ZigBee\" class=\"mw-redirect\" title=\"ZigBee\">ZigBee</a> and <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Z-Wave\" title=\"Z-Wave\">Z-Wave</a>, or other proprietary protocols all of which are incompatible with each other.<sup id=\"cite_ref-crhomephone_4-0\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-crhomephone-4\">[4]</a></sup> Manufacturers often prevent independent implementations by withholding documentation and by litigation.<sup id=\"cite_ref-5\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-5\">[5]</a></sup></p>\n        </nb-tab>\n        <nb-tab tabTitle=\"Full width tab #2\">\n          <span>Content #2</span>\n        </nb-tab>\n        <nb-tab tabTitle=\"Full width tab #3\">\n          <span>Content #3</span>\n        </nb-tab>\n      </nb-tabset>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6\">\n    <nb-card size=\"small\">\n      <nb-route-tabset [tabs]=\"tabs\"></nb-route-tabset>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/tabs/tabs.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/ui-features/tabs/tabs.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host nb-tabset{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.nb-theme-default :host nb-tab{padding:1.25rem}.nb-theme-default :host /deep/ ngx-tab1,.nb-theme-default :host /deep/ ngx-tab2{display:block;padding:1.25rem}@media (max-width: 399.98px){.nb-theme-default :host nb-tabset /deep/ ul{font-size:1rem;padding:0 0.25rem}}.nb-theme-cosmic :host nb-tabset{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.nb-theme-cosmic :host nb-tab{padding:1.25rem}.nb-theme-cosmic :host /deep/ ngx-tab1,.nb-theme-cosmic :host /deep/ ngx-tab2{display:block;padding:1.25rem}@media (max-width: 399.98px){.nb-theme-cosmic :host nb-tabset /deep/ ul{font-size:1rem;padding:0 0.25rem}}.nb-theme-corporate :host nb-tabset{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.nb-theme-corporate :host nb-tab{padding:1.25rem}.nb-theme-corporate :host /deep/ ngx-tab1,.nb-theme-corporate :host /deep/ ngx-tab2{display:block;padding:1.25rem}@media (max-width: 399.98px){.nb-theme-corporate :host nb-tabset /deep/ ul{font-size:1rem;padding:0 0.25rem}}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/tabs/tabs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/ui-features/tabs/tabs.component.ts ***!
  \**********************************************************/
/*! exports provided: Tab1Component, Tab2Component, TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Component", function() { return Tab1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Component", function() { return Tab2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Tab1Component = /** @class */ (function () {
    function Tab1Component() {
    }
    Tab1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-tab1',
            template: "\n    <p>Early home automation began with labor-saving machines. Self-contained electric or gas powered\n      <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Home_appliances\">home appliances</a>\n      became viable in the 1900s with the introduction of\n      <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Electric_power_distribution\">electric power distribution\n      </a> and led to the introduction of washing machines (1904), water heaters (1889), refrigerators, sewing machines,\n      dishwashers, and clothes dryers.\n    </p>\n  ",
        })
    ], Tab1Component);
    return Tab1Component;
}());

var Tab2Component = /** @class */ (function () {
    function Tab2Component() {
    }
    Tab2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-tab2',
            template: "\n    <p>Tab 2 works!</p>\n  ",
        })
    ], Tab2Component);
    return Tab2Component;
}());

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = [
            {
                title: 'Route tab #1',
                route: '/pages/ui-features/tabs/tab1',
            },
            {
                title: 'Route tab #2',
                route: '/pages/ui-features/tabs/tab2',
            },
        ];
    }
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-tabs',
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/pages/ui-features/tabs/tabs.component.scss")],
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/pages/ui-features/tabs/tabs.component.html"),
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/typography/typography.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/ui-features/typography/typography.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xxxl-8\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-xxl-7\">\n        <nb-card size=\"medium\">\n          <nb-card-header>\n            Used Fonts\n          </nb-card-header>\n          <nb-card-body>\n            <div class=\"font-row font-secondary\">\n              <div class=\"header\">\n                <div class=\"name bold\">Exo</div>\n\n                <div class=\"variants\">\n                  <span class=\"font-w-bold\">Bold</span>\n                  <span class=\"font-w-regular\">Regular</span>\n                  <span class=\"font-w-light\">Light</span>\n                </div>\n              </div>\n              <p>\n                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\n                there live the blind texts.\n                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\n              </p>\n            </div>\n\n            <div class=\"font-row font-main\">\n              <div class=\"header\">\n                <div class=\"name bold\">Roboto</div>\n\n                <div class=\"variants\">\n                  <span class=\"font-w-bold\">Bold</span>\n                  <span class=\"font-w-regular\">Regular</span>\n                  <span class=\"font-w-light\">Light</span>\n                </div>\n              </div>\n              <p>\n                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\n                there live the blind texts.\n                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\n              </p>\n            </div>\n          </nb-card-body>\n        </nb-card>\n\n        <nb-card size=\"small\">\n          <nb-card-header>\n            Article Example\n          </nb-card-header>\n          <nb-card-body>\n            <h4>So what's About the grammar?</h4>\n            <p class=\"text-indent\">\n              Far far away, behind the word mountains, far from the countries <strong>Vokalia</strong> and <strong>Consonantia</strong>,\n              there live the blind texts.\n              They live in <strong>Bookmarksgrove</strong>.\n            </p>\n            <p class=\"text-indent\">\n              A small <strong>river named Duden</strong> flows by their place and supplies it with the\n              necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly\n              into your mouth.\n              Even the all-powerful Pointing has no control about the blind texts it is an almost\n              unorthographic life One day however a small\n              line of blind text by the name of\n              <a href=\"http://google.com\" target=\"_blank\">Lorem Ipsum</a> decided to leave for\n              the far <strong>World of Grammar</strong>.\n            </p>\n          </nb-card-body>\n        </nb-card>\n      </div>\n      <div class=\"col-md-6 col-xxl-5\">\n        <nb-card size=\"medium\" class=\"headings-card\">\n          <nb-card-header>\n            Headings\n          </nb-card-header>\n          <nb-card-body>\n            <div class=\"header\">\n              <div>\n                <h1>H1. Heading</h1>\n              </div>\n\n              <div class=\"detail font-w-light\">\n                Demibold 2.5rem (40px)\n              </div>\n            </div>\n            <div class=\"header\">\n              <div>\n                <h2>H2. Heading</h2>\n              </div>\n\n              <div class=\"detail font-w-light\">\n                Demibold 2rem (32px)\n              </div>\n            </div>\n            <div class=\"header\">\n              <div>\n                <h3>H3. Heading</h3>\n              </div>\n\n              <div class=\"detail font-w-light\">\n                Demibold 1.75rem (28px)\n              </div>\n            </div>\n            <div class=\"header\">\n              <div>\n                <h4>H4. Heading</h4>\n              </div>\n\n              <div class=\"detail font-w-light\">\n                Demibold 1.5rem (24px)\n              </div>\n            </div>\n            <div class=\"header\">\n              <div>\n                <h5>H5. Heading</h5>\n              </div>\n\n              <div class=\"detail font-w-light\">\n                Demibold 1.25rem (20px)\n              </div>\n            </div>\n            <div class=\"header\">\n              <div>\n                <h6>H6. Heading</h6>\n              </div>\n\n              <div class=\"detail font-w-light\">\n                Demibold 1rem (16px)\n              </div>\n            </div>\n          </nb-card-body>\n        </nb-card>\n\n        <nb-card size=\"small\">\n          <nb-card-header>\n            Blockquotes\n          </nb-card-header>\n          <nb-card-body>\n            <blockquote class=\"blockquote\">\n              <p class=\"mb-0\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.\n            </blockquote>\n            <blockquote class=\"blockquote\">\n              <p class=\"mb-0\">Far far away, behind the word mountains, far from the countries.</p>\n              <footer class=\"blockquote-footer\">Vladimir Lugovsky</footer>\n            </blockquote>\n            <blockquote class=\"blockquote-reverse\">\n              <p class=\"mb-0\">Far far away, behind the word mountains.</p>\n              <footer class=\"blockquote-footer\">Vladimir Lugovsky</footer>\n            </blockquote>\n          </nb-card-body>\n        </nb-card>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6 col-xxxl-4\">\n    <nb-card [size]=\"breakpoint.width >= breakpoints.xxxl ? 'xxlarge' : 'large'\">\n      <nb-card-header>\n        Font Colors\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"colors\">\n          <div class=\"item text-heading\">\n            <div class=\"color bg-heading\"></div>\n            <div>\n              <h5 class=\"text-heading\">Heading Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-body\">\n            <div class=\"color bg-body\"></div>\n            <div>\n              <h5 class=\"text-body\">Body Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-hint\">\n            <div class=\"color bg-hint\"></div>\n            <div>\n              <h5 class=\"text-hint\">Hint Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-link\">\n            <div class=\"color bg-link\"></div>\n            <div>\n              <h5 class=\"text-link\">Link Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-primary\">\n            <div class=\"color bg-primary\"></div>\n            <div>\n              <h5 class=\"text-primary\">Primary Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-success\">\n            <div class=\"color bg-success\"></div>\n            <div>\n              <h5 class=\"text-success\">Success Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-info\">\n            <div class=\"color bg-info\"></div>\n            <div>\n              <h5 class=\"text-info\">Info Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-warning\">\n            <div class=\"color bg-warning\"></div>\n            <div>\n              <h5 class=\"text-warning\">Warning Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n          <div class=\"item text-danger\">\n            <div class=\"color bg-danger\"></div>\n            <div>\n              <h5 class=\"text-danger\">Danger Text</h5>\n              Far far away, behind the your awesomeness.\n            </div>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6 col-xxxl-4\">\n    <nb-card size=\"large\">\n      <nb-card-header>\n        Alerts\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"alert alert-primary\" role=\"alert\">\n          <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\n        </div>\n        <div class=\"alert alert-hint\" role=\"alert\">\n          <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\n        </div>\n        <div class=\"alert alert-success\" role=\"alert\">\n          <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\n        </div>\n        <div class=\"alert alert-info\" role=\"alert\">\n          <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\n        </div>\n        <div class=\"alert alert-warning\" role=\"alert\">\n          <strong>Warning!</strong> Better check yourself, you're <a href=\"#\" class=\"alert-link\">not looking too good</a>.\n        </div>\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6 col-xxxl-4\">\n    <nb-card size=\"large\">\n      <nb-card-header>\n        Text Types\n      </nb-card-header>\n      <nb-card-body>\n        <h4>Highlighted text</h4>\n        <p class=\"mb-5\">\n          Far far away, behind the word mountains, far from the countries\n          Vokalia and <mark>Consonantia, there live the blind texts.</mark>\n        </p>\n        <h4>Bold Text</h4>\n        <p class=\"mb-5\">\n          Far far away, behind the word mountains, far from the countries\n          Vokalia and <strong>Consonantia, there live the blind texts.</strong>\n        </p>\n        <h4>Link Text</h4>\n        <p class=\"mb-5\">\n          Far far away, behind the word mountains, far from the countries\n          Vokalia and <a href=\"http://google.com\" target=\"_blank\">Consonantia, there live the blind texts.</a>\n        </p>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6 col-xxxl-4\">\n    <nb-card size=\"large\">\n      <nb-card-header>\n        Lists\n      </nb-card-header>\n      <nb-card-body>\n        <h4>Ordered List</h4>\n        <ol class=\"mb-5\">\n          <li>Far far away, behind the word mountains</li>\n          <li>Far from the countries Vokalia and Consonantia</li>\n          <li>There live the blind texts.</li>\n          <li>Right at the coast of the Semantics.</li>\n          <li>A small river named Duden flows</li>\n        </ol>\n\n        <h4>Unordered List</h4>\n        <ul class=\"mb-5\">\n          <li>Far far away, behind the word mountains</li>\n          <li>Far from the countries Vokalia and Consonantia</li>\n          <li>There live the blind texts.</li>\n          <li>Right at the coast of the Semantics.</li>\n          <li>A small river named Duden flows</li>\n        </ul>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/ui-features/typography/typography.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/ui-features/typography/typography.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host .font-secondary .font-header .name{font-size:4.5rem;line-height:4rem;font-weight:600}.nb-theme-default :host .font-main .font-header .name{font-size:3rem;font-weight:600}.nb-theme-default :host .font-row:first-child{margin-bottom:2rem}.nb-theme-default :host .font-row .header{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.nb-theme-default :host .font-row p{margin:0}.nb-theme-default :host .headings-card nb-card-body{padding:1rem 1.25rem}.nb-theme-default :host .headings-card .header{padding-bottom:0.675rem;margin-bottom:0.675rem}.nb-theme-default :host .headings-card .header:last-child{padding-bottom:0;margin-bottom:0}.nb-theme-default :host .header{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #ebeef2;color:#2a2a2a}.nb-theme-default :host .header:last-child{border-bottom:none;padding:0;margin:0}.nb-theme-default :host .header div:first-child{-webkit-box-flex:2;flex:2;-ms-flex:2 1 auto;line-height:1;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.nb-theme-default :host .header div:first-child h1,.nb-theme-default :host .header div:first-child h2,.nb-theme-default :host .header div:first-child h3,.nb-theme-default :host .header div:first-child h4,.nb-theme-default :host .header div:first-child h5,.nb-theme-default :host .header div:first-child h6{margin-bottom:0}.nb-theme-default :host .header .variants{-webkit-box-flex:1;flex:1;-ms-flex:1 1 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.nb-theme-default :host .header .variants span{padding-right:1rem;padding-left:1rem;font-size:1.5rem}.nb-theme-default :host .header .detail{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;color:#a4abb3}.nb-theme-default :host .colors{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.nb-theme-default :host .colors .item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:1.25rem}.nb-theme-default :host .colors .item:last-child{margin-bottom:0}.nb-theme-default :host .colors .color{width:86px;height:60px;border-top-right-radius:1rem;border-bottom-left-radius:1rem}[dir=ltr] .nb-theme-default :host .colors .color{margin-right:1rem}[dir=rtl] .nb-theme-default :host .colors .color{margin-left:1rem}.nb-theme-default :host .colors h1,.nb-theme-default :host .colors h2,.nb-theme-default :host .colors h3,.nb-theme-default :host .colors h4,.nb-theme-default :host .colors h5,.nb-theme-default :host .colors h6{margin-bottom:0.25rem}.nb-theme-default :host .text-link{color:#3dcc6d}.nb-theme-default :host .bg-link{background:#3dcc6d}.nb-theme-cosmic :host .font-secondary .font-header .name{font-size:4.5rem;line-height:4rem;font-weight:600}.nb-theme-cosmic :host .font-main .font-header .name{font-size:3rem;font-weight:600}.nb-theme-cosmic :host .font-row:first-child{margin-bottom:2rem}.nb-theme-cosmic :host .font-row .header{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.nb-theme-cosmic :host .font-row p{margin:0}.nb-theme-cosmic :host .headings-card nb-card-body{padding:1rem 1.25rem}.nb-theme-cosmic :host .headings-card .header{padding-bottom:0.675rem;margin-bottom:0.675rem}.nb-theme-cosmic :host .headings-card .header:last-child{padding-bottom:0;margin-bottom:0}.nb-theme-cosmic :host .header{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #342e73;color:#fff}.nb-theme-cosmic :host .header:last-child{border-bottom:none;padding:0;margin:0}.nb-theme-cosmic :host .header div:first-child{-webkit-box-flex:2;flex:2;-ms-flex:2 1 auto;line-height:1;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.nb-theme-cosmic :host .header div:first-child h1,.nb-theme-cosmic :host .header div:first-child h2,.nb-theme-cosmic :host .header div:first-child h3,.nb-theme-cosmic :host .header div:first-child h4,.nb-theme-cosmic :host .header div:first-child h5,.nb-theme-cosmic :host .header div:first-child h6{margin-bottom:0}.nb-theme-cosmic :host .header .variants{-webkit-box-flex:1;flex:1;-ms-flex:1 1 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.nb-theme-cosmic :host .header .variants span{padding-right:1rem;padding-left:1rem;font-size:1.5rem}.nb-theme-cosmic :host .header .detail{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;color:#a1a1e5}.nb-theme-cosmic :host .colors{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.nb-theme-cosmic :host .colors .item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:1.25rem}.nb-theme-cosmic :host .colors .item:last-child{margin-bottom:0}.nb-theme-cosmic :host .colors .color{width:86px;height:60px;border-top-right-radius:1rem;border-bottom-left-radius:1rem}[dir=ltr] .nb-theme-cosmic :host .colors .color{margin-right:1rem}[dir=rtl] .nb-theme-cosmic :host .colors .color{margin-left:1rem}.nb-theme-cosmic :host .colors h1,.nb-theme-cosmic :host .colors h2,.nb-theme-cosmic :host .colors h3,.nb-theme-cosmic :host .colors h4,.nb-theme-cosmic :host .colors h5,.nb-theme-cosmic :host .colors h6{margin-bottom:0.25rem}.nb-theme-cosmic :host .text-link{color:#00f9a6}.nb-theme-cosmic :host .bg-link{background:#00f9a6}.nb-theme-corporate :host .font-secondary .font-header .name{font-size:4.5rem;line-height:4rem;font-weight:600}.nb-theme-corporate :host .font-main .font-header .name{font-size:3rem;font-weight:600}.nb-theme-corporate :host .font-row:first-child{margin-bottom:2rem}.nb-theme-corporate :host .font-row .header{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.nb-theme-corporate :host .font-row p{margin:0}.nb-theme-corporate :host .headings-card nb-card-body{padding:1rem 1.25rem}.nb-theme-corporate :host .headings-card .header{padding-bottom:0.675rem;margin-bottom:0.675rem}.nb-theme-corporate :host .headings-card .header:last-child{padding-bottom:0;margin-bottom:0}.nb-theme-corporate :host .header{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid #cdd5dc;color:#181818}.nb-theme-corporate :host .header:last-child{border-bottom:none;padding:0;margin:0}.nb-theme-corporate :host .header div:first-child{-webkit-box-flex:2;flex:2;-ms-flex:2 1 auto;line-height:1;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.nb-theme-corporate :host .header div:first-child h1,.nb-theme-corporate :host .header div:first-child h2,.nb-theme-corporate :host .header div:first-child h3,.nb-theme-corporate :host .header div:first-child h4,.nb-theme-corporate :host .header div:first-child h5,.nb-theme-corporate :host .header div:first-child h6{margin-bottom:0}.nb-theme-corporate :host .header .variants{-webkit-box-flex:1;flex:1;-ms-flex:1 1 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.nb-theme-corporate :host .header .variants span{padding-right:1rem;padding-left:1rem;font-size:1.5rem}.nb-theme-corporate :host .header .detail{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;color:#a4abb3}.nb-theme-corporate :host .colors{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.nb-theme-corporate :host .colors .item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:1.25rem}.nb-theme-corporate :host .colors .item:last-child{margin-bottom:0}.nb-theme-corporate :host .colors .color{width:86px;height:60px;border-top-right-radius:1rem;border-bottom-left-radius:1rem}[dir=ltr] .nb-theme-corporate :host .colors .color{margin-right:1rem}[dir=rtl] .nb-theme-corporate :host .colors .color{margin-left:1rem}.nb-theme-corporate :host .colors h1,.nb-theme-corporate :host .colors h2,.nb-theme-corporate :host .colors h3,.nb-theme-corporate :host .colors h4,.nb-theme-corporate :host .colors h5,.nb-theme-corporate :host .colors h6{margin-bottom:0.25rem}.nb-theme-corporate :host .text-link{color:#5dcfe3}.nb-theme-corporate :host .bg-link{background:#5dcfe3}\n"

/***/ }),

/***/ "./src/app/pages/ui-features/typography/typography.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/ui-features/typography/typography.component.ts ***!
  \**********************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent(themeService, breakpointService) {
        var _this = this;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeSubscription = this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
    }
    TypographyComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-typography',
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/pages/ui-features/typography/typography.component.scss")],
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/pages/ui-features/typography/typography.component.html"),
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMediaBreakpointsService"]])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/ui-features-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ui-features/ui-features-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UiFeaturesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiFeaturesRoutingModule", function() { return UiFeaturesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ui_features_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-features.component */ "./src/app/pages/ui-features/ui-features.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/pages/ui-features/buttons/buttons.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/pages/ui-features/grid/grid.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/pages/ui-features/icons/icons.component.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/pages/ui-features/modals/modals.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/pages/ui-features/typography/typography.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/pages/ui-features/tabs/tabs.component.ts");
/* harmony import */ var _search_fields_search_fields_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-fields/search-fields.component */ "./src/app/pages/ui-features/search-fields/search-fields.component.ts");
/* harmony import */ var _popovers_popovers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popovers/popovers.component */ "./src/app/pages/ui-features/popovers/popovers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [{
        path: '',
        component: _ui_features_component__WEBPACK_IMPORTED_MODULE_2__["UiFeaturesComponent"],
        children: [{
                path: 'buttons',
                component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
            }, {
                path: 'grid',
                component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"],
            }, {
                path: 'icons',
                component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__["IconsComponent"],
            }, {
                path: 'modals',
                component: _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__["ModalsComponent"],
            }, {
                path: 'popovers',
                component: _popovers_popovers_component__WEBPACK_IMPORTED_MODULE_10__["PopoversComponent"],
            }, {
                path: 'typography',
                component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__["TypographyComponent"],
            }, {
                path: 'search-fields',
                component: _search_fields_search_fields_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
            }, {
                path: 'tabs',
                component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"],
                children: [{
                        path: '',
                        redirectTo: 'tab1',
                        pathMatch: 'full',
                    }, {
                        path: 'tab1',
                        component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["Tab1Component"],
                    }, {
                        path: 'tab2',
                        component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["Tab2Component"],
                    }],
            }],
    }];
var UiFeaturesRoutingModule = /** @class */ (function () {
    function UiFeaturesRoutingModule() {
    }
    UiFeaturesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], UiFeaturesRoutingModule);
    return UiFeaturesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/ui-features.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/ui-features/ui-features.component.ts ***!
  \************************************************************/
/*! exports provided: UiFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiFeaturesComponent", function() { return UiFeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiFeaturesComponent = /** @class */ (function () {
    function UiFeaturesComponent() {
    }
    UiFeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-ui-features',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], UiFeaturesComponent);
    return UiFeaturesComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/ui-features.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ui-features/ui-features.module.ts ***!
  \*********************************************************/
/*! exports provided: UiFeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiFeaturesModule", function() { return UiFeaturesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/buttons.module */ "./src/app/pages/ui-features/buttons/buttons.module.ts");
/* harmony import */ var _ui_features_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-features-routing.module */ "./src/app/pages/ui-features/ui-features-routing.module.ts");
/* harmony import */ var _ui_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-features.component */ "./src/app/pages/ui-features/ui-features.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/pages/ui-features/grid/grid.component.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/pages/ui-features/modals/modals.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/pages/ui-features/icons/icons.component.ts");
/* harmony import */ var _modals_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/modal/modal.component */ "./src/app/pages/ui-features/modals/modal/modal.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/pages/ui-features/typography/typography.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/pages/ui-features/tabs/tabs.component.ts");
/* harmony import */ var _search_fields_search_fields_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-fields/search-fields.component */ "./src/app/pages/ui-features/search-fields/search-fields.component.ts");
/* harmony import */ var _popovers_popovers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popovers/popovers.component */ "./src/app/pages/ui-features/popovers/popovers.component.ts");
/* harmony import */ var _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popovers/popover-examples.component */ "./src/app/pages/ui-features/popovers/popover-examples.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var components = [
    _ui_features_component__WEBPACK_IMPORTED_MODULE_4__["UiFeaturesComponent"],
    _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"],
    _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__["ModalsComponent"],
    _icons_icons_component__WEBPACK_IMPORTED_MODULE_7__["IconsComponent"],
    _modals_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
    _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__["TypographyComponent"],
    _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["TabsComponent"],
    _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["Tab1Component"],
    _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["Tab2Component"],
    _search_fields_search_fields_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
    _popovers_popovers_component__WEBPACK_IMPORTED_MODULE_12__["PopoversComponent"],
    _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_13__["NgxPopoverCardComponent"],
    _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_13__["NgxPopoverFormComponent"],
    _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_13__["NgxPopoverTabsComponent"],
];
var UiFeaturesModule = /** @class */ (function () {
    function UiFeaturesModule() {
    }
    UiFeaturesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                _ui_features_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiFeaturesRoutingModule"],
                _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_2__["ButtonsModule"],
            ],
            declarations: components.slice(),
            entryComponents: [
                _modals_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
                _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_13__["NgxPopoverCardComponent"],
                _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_13__["NgxPopoverFormComponent"],
                _popovers_popover_examples_component__WEBPACK_IMPORTED_MODULE_13__["NgxPopoverTabsComponent"],
            ],
        })
    ], UiFeaturesModule);
    return UiFeaturesModule;
}());



/***/ })

}]);
//# sourceMappingURL=ui-features-ui-features-module.js.map