(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./src/app/pages/forms/form-inputs/form-inputs.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/forms/form-inputs/form-inputs.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Default Inputs</nb-card-header>\n      <nb-card-body>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Project\" class=\"form-control\"/>\n        </div>\n        <div class=\"row full-name-inputs\">\n          <div class=\"col-sm-6 input-group\">\n            <input type=\"text\" placeholder=\"Nick\" class=\"form-control\"/>\n          </div>\n          <div class=\"col-sm-6 input-group\">\n            <input type=\"text\" placeholder=\"Last Name\" class=\"form-control\"/>\n          </div>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"password\" placeholder=\"Password\" class=\"form-control\"/>\n        </div>\n        <div class=\"input-group has-person-icon\">\n          <input type=\"text\" placeholder=\"With Icon\" class=\"form-control\"/>\n        </div>\n        <div class=\"input-group input-group-rounded\">\n          <input type=\"text\" placeholder=\"Rounded border\" class=\"form-control\"/>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Project\" class=\"form-control\"/>\n          <small class=\"form-text\">A block of help text that breaks into a new line and may extend beyond one line.\n          </small>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Disabled input\" class=\"form-control\" disabled/>\n        </div>\n        <div class=\"input-group\">\n          <textarea rows=\"5\" placeholder=\"Text Area\" class=\"form-control\"></textarea>\n        </div>\n        <div class=\"input-group input-group-sm\">\n          <input type=\"text\" placeholder=\"Small Input\" class=\"form-control\"/>\n        </div>\n        <div class=\"input-group input-group-lg\">\n          <input type=\"text\" placeholder=\"Large Input\" class=\"form-control\"/>\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Input Groups</nb-card-header>\n      <nb-card-body>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon success\">@</span>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\"/>\n        </div>\n\n        <div class=\"input-group mail-btn-group\">\n          <span class=\"input-group-prepend\">\n            <button class=\"btn btn-primary btn-icon input-group-text\">\n              <i class=\"ion-ios-email-outline\"></i>\n            </button>\n          </span>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-primary input-group-text\">\n              @example.com\n            </button>\n          </span>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-danger input-group-text\">\n              Search\n            </button>\n          </span>\n        </div>\n        <div class=\"input-group\">\n          <div class=\"dropdown input-group-prepend input-group-btn\" ngbDropdown>\n            <button type=\"button\" class=\"btn btn-success dropdown-toggle\" ngbDropdownToggle>\n              Action\n            </button>\n            <ul class=\"dropdown-menu\" ngbDropdownMenu>\n              <li class=\"dropdown-item\">Action</li>\n              <li class=\"dropdown-item\">Another action</li>\n              <li class=\"dropdown-item\">Something else here</li>\n              <div role=\"separator\" class=\"dropdown-divider\"></div>\n              <li class=\"dropdown-item\">Separated link</li>\n            </ul>\n          </div>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Selects</nb-card-header>\n      <nb-card-body>\n        <div class=\"form-group\">\n          <label>Simple Select</label>\n          <select class=\"form-control\">\n            <option>Minsk</option>\n            <option>Gomel</option>\n            <option>Brest</option>\n            <option>Grodno</option>\n            <option>Mogilev</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Multiple Select</label>\n          <select multiple class=\"form-control\">\n            <option>Item 1</option>\n            <option>Item 2</option>\n            <option>Item 3</option>\n            <option>Item 4</option>\n            <option>Item 5</option>\n          </select>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Input Styles</nb-card-header>\n      <nb-card-body>\n        <div class=\"input-group input-group-border-only\">\n          <input type=\"text\" placeholder=\"Border Only\" class=\"form-control\"/>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Default Input\" class=\"form-control\">\n        </div>\n        <div class=\"input-group input-group-fill-only\">\n          <input type=\"text\" placeholder=\"Fill Only\" class=\"form-control\">\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Validation States</nb-card-header>\n      <nb-card-body>\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Input with Success\" class=\"form-control form-control-success\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Input with Warning\" class=\"form-control form-control-warning\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Input with Danger\" class=\"form-control form-control-danger\">\n        </div>\n        <div class=\"form-group validation-checkboxes row\">\n          <nb-checkbox status=\"success\" class=\"col-sm-4\">Checkbox with Success</nb-checkbox>\n          <nb-checkbox status=\"warning\" class=\"col-sm-4\">Checkbox with Warning</nb-checkbox>\n          <nb-checkbox status=\"danger\" class=\"col-sm-4\">Checkbox with Danger</nb-checkbox>\n        </div>\n        <div class=\"form-group has-success\">\n          <input type=\"text\" placeholder=\"Input with Success Icon\" class=\"form-control form-control-success\">\n        </div>\n        <div class=\"form-group has-warning\">\n          <input type=\"text\" placeholder=\"Input with Warning Icon\" class=\"form-control form-control-warning\">\n        </div>\n        <div class=\"form-group has-danger\">\n          <input type=\"text\" placeholder=\"Input with Danger Icon\" class=\"form-control form-control-danger\">\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Checkboxes & Radios</nb-card-header>\n      <nb-card-body>\n        <div class=\"row demo-checkboxes-radio\">\n          <div class=\"demo-checkboxes col-sm-4\">\n            <nb-checkbox>Checkbox 1</nb-checkbox>\n            <nb-checkbox [value]=\"true\">Checkbox 2</nb-checkbox>\n\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"b-checkbox\">\n              <label class=\"custom-control-label\" for=\"b-checkbox\">Bootstrap Checkbox</label>\n            </div>\n          </div>\n          <div class=\"demo-radio col-sm-4\">\n            <label class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\">\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">Radio 1</span>\n            </label>\n            <label class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\" checked>\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">Radio 2</span>\n            </label>\n            <label class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" name=\"customRadio\">\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">Radio 3</span>\n            </label>\n          </div>\n          <div class=\"demo-disabled-checkbox-radio col-sm-4\">\n            <nb-checkbox disabled>Disabled Checkbox</nb-checkbox>\n            <label class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" disabled>\n              <span class=\"custom-control-indicator\"></span>\n              <span class=\"custom-control-description\">Disabled Radio</span>\n            </label>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-body class=\"demo-rating\">\n        <span class=\"rating-header\">Rating</span>\n        <div>\n          <ngb-rating [(rate)]=\"starRate\" max=5>\n            <ng-template let-fill=\"fill\">\n              <span class=\"star fill\" [class.filled]=\"fill === 100\">\n                <i class=\"ion-android-star\" *ngIf=\"fill === 100\"></i>\n                <i class=\"ion-android-star-outline\" *ngIf=\"fill !== 100\"></i>\n              </span>\n            </ng-template>\n          </ngb-rating>\n          <span class=\"current-rate\">{{ starRate }}</span>\n        </div>\n        <div>\n          <ngb-rating [(rate)]=\"heartRate\" max=5>\n            <ng-template let-fill=\"fill\">\n              <span class=\"star fill\" [class.filled]=\"fill === 100\">\n                <i class=\"ion-ios-heart\" *ngIf=\"fill === 100\"></i>\n                <i class=\"ion-ios-heart-outline\" *ngIf=\"fill !== 100\"></i>\n              </span>\n            </ng-template>\n          </ngb-rating>\n          <span class=\"current-rate\">{{ heartRate }}</span>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/forms/form-inputs/form-inputs.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/forms/form-inputs/form-inputs.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host nb-card-body{overflow:visible}.nb-theme-default :host .input-group{margin-bottom:1rem}.nb-theme-default :host .validation-checkboxes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nb-theme-default :host .validation-checkboxes .custom-control{margin-left:1rem}.nb-theme-default :host .demo-checkboxes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem}.nb-theme-default :host .demo-radio{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem}.nb-theme-default :host .demo-disabled-checkbox-radio{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem}.nb-theme-default :host .demo-checkboxes-radio{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nb-theme-default :host .demo-rating{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap}.nb-theme-default :host .star{font-size:1.5rem;color:#a4abb3}.nb-theme-default :host .filled{color:#a4abb3}.nb-theme-default :host .rating-header{line-height:2rem;font-size:1.25rem;font-family:Exo;font-weight:500;color:#2a2a2a}.nb-theme-default :host .current-rate{font-size:1.5rem;color:#2a2a2a}[dir=ltr] .nb-theme-default :host .current-rate{padding-left:1rem}[dir=rtl] .nb-theme-default :host .current-rate{padding-right:1rem}.nb-theme-default :host .full-name-inputs{display:-webkit-box;display:-ms-flexbox;display:flex}.nb-theme-default :host .input-group.has-person-icon{position:relative}.nb-theme-default :host .input-group.has-person-icon .form-control{padding-left:3rem}.nb-theme-default :host .input-group.has-person-icon::before{content:'\\F47D';font-family:'Ionicons';font-size:2rem;position:absolute;z-index:100;left:1rem;top:0.25rem}.nb-theme-default :host .dropdown{min-width:7rem}.nb-theme-default :host .dropdown-menu{width:auto}.nb-theme-default :host .form-group label{padding:0 0 0.75rem}.nb-theme-default :host ngb-rating{outline:none}.nb-theme-default :host ngb-rating i{color:#40dc7e}@media (max-width: 399.98px){.nb-theme-default :host button:not(.btn-icon){padding:0.75rem 1rem;font-size:0.75rem}}.nb-theme-cosmic :host nb-card-body{overflow:visible}.nb-theme-cosmic :host .input-group{margin-bottom:1rem}.nb-theme-cosmic :host .validation-checkboxes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nb-theme-cosmic :host .validation-checkboxes .custom-control{margin-left:1rem}.nb-theme-cosmic :host .demo-checkboxes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem}.nb-theme-cosmic :host .demo-radio{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem}.nb-theme-cosmic :host .demo-disabled-checkbox-radio{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem}.nb-theme-cosmic :host .demo-checkboxes-radio{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nb-theme-cosmic :host .demo-rating{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap}.nb-theme-cosmic :host .star{font-size:1.5rem;color:#a1a1e5}.nb-theme-cosmic :host .filled{color:#a1a1e5}.nb-theme-cosmic :host .rating-header{line-height:2rem;font-size:1.25rem;font-family:Exo;font-weight:500;color:#fff}.nb-theme-cosmic :host .current-rate{font-size:1.5rem;color:#fff}[dir=ltr] .nb-theme-cosmic :host .current-rate{padding-left:1rem}[dir=rtl] .nb-theme-cosmic :host .current-rate{padding-right:1rem}.nb-theme-cosmic :host .full-name-inputs{display:-webkit-box;display:-ms-flexbox;display:flex}.nb-theme-cosmic :host .input-group.has-person-icon{position:relative}.nb-theme-cosmic :host .input-group.has-person-icon .form-control{padding-left:3rem}.nb-theme-cosmic :host .input-group.has-person-icon::before{content:'\\F47D';font-family:'Ionicons';font-size:2rem;position:absolute;z-index:100;left:1rem;top:0.25rem}.nb-theme-cosmic :host .dropdown{min-width:7rem}.nb-theme-cosmic :host .dropdown-menu{width:auto}.nb-theme-cosmic :host .form-group label{padding:0 0 0.75rem}.nb-theme-cosmic :host ngb-rating{outline:none}.nb-theme-cosmic :host ngb-rating i{color:#00d977;color:#7659ff}@media (max-width: 399.98px){.nb-theme-cosmic :host button:not(.btn-icon){padding:0.75rem 1rem;font-size:0.75rem}}.nb-theme-corporate :host nb-card-body{overflow:visible}.nb-theme-corporate :host .input-group{margin-bottom:1rem}.nb-theme-corporate :host .validation-checkboxes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nb-theme-corporate :host .validation-checkboxes .custom-control{margin-left:1rem}.nb-theme-corporate :host .demo-checkboxes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem}.nb-theme-corporate :host .demo-radio{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem}.nb-theme-corporate :host .demo-disabled-checkbox-radio{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:1rem}.nb-theme-corporate :host .demo-checkboxes-radio{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.nb-theme-corporate :host .demo-rating{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap}.nb-theme-corporate :host .star{font-size:1.5rem;color:#a4abb3}.nb-theme-corporate :host .filled{color:#a4abb3}.nb-theme-corporate :host .rating-header{line-height:2rem;font-size:1.25rem;font-family:Exo;font-weight:500;color:#181818}.nb-theme-corporate :host .current-rate{font-size:1.5rem;color:#181818}[dir=ltr] .nb-theme-corporate :host .current-rate{padding-left:1rem}[dir=rtl] .nb-theme-corporate :host .current-rate{padding-right:1rem}.nb-theme-corporate :host .full-name-inputs{display:-webkit-box;display:-ms-flexbox;display:flex}.nb-theme-corporate :host .input-group.has-person-icon{position:relative}.nb-theme-corporate :host .input-group.has-person-icon .form-control{padding-left:3rem}.nb-theme-corporate :host .input-group.has-person-icon::before{content:'\\F47D';font-family:'Ionicons';font-size:2rem;position:absolute;z-index:100;left:1rem;top:0.25rem}.nb-theme-corporate :host .dropdown{min-width:7rem}.nb-theme-corporate :host .dropdown-menu{width:auto}.nb-theme-corporate :host .form-group label{padding:0 0 0.75rem}.nb-theme-corporate :host ngb-rating{outline:none}.nb-theme-corporate :host ngb-rating i{color:#5dcfe3}@media (max-width: 399.98px){.nb-theme-corporate :host button:not(.btn-icon){padding:0.75rem 1rem;font-size:0.75rem}}\n"

/***/ }),

/***/ "./src/app/pages/forms/form-inputs/form-inputs.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/forms/form-inputs/form-inputs.component.ts ***!
  \******************************************************************/
/*! exports provided: FormInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputsComponent", function() { return FormInputsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormInputsComponent = /** @class */ (function () {
    function FormInputsComponent() {
        this.starRate = 2;
        this.heartRate = 4;
    }
    FormInputsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-form-inputs',
            styles: [__webpack_require__(/*! ./form-inputs.component.scss */ "./src/app/pages/forms/form-inputs/form-inputs.component.scss")],
            template: __webpack_require__(/*! ./form-inputs.component.html */ "./src/app/pages/forms/form-inputs/form-inputs.component.html"),
        })
    ], FormInputsComponent);
    return FormInputsComponent;
}());



/***/ }),

/***/ "./src/app/pages/forms/form-layouts/form-layouts.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/forms/form-layouts/form-layouts.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card class=\"inline-form-card\">\n      <nb-card-header>Inline form</nb-card-header>\n      <nb-card-body>\n        <form class=\"form-inline\">\n          <input type=\"text\" class=\"form-control full-width\" placeholder=\"Jane Doe\">\n          <div class=\"input-group full-width\">\n            <div class=\"input-group-addon\">@</div>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n          </div>\n          <nb-checkbox>Remember me</nb-checkbox>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>Using the Grid</nb-card-header>\n      <nb-card-body>\n        <form>\n          <div class=\"form-group row\">\n            <label for=\"inputEmail1\" class=\"col-sm-3 col-form-label\">Email</label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail1\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputPassword2\" class=\"col-sm-3 col-form-label\">Password</label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3\">Radios</label>\n            <div class=\"col-sm-9\">\n              <div class=\"form-check\">\n                <label class=\"custom-control custom-radio\">\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\" checked>\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">Option one is this and that&mdash;be sure to include why it's great</span>\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"custom-control custom-radio\">\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\">\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">Option two can be something else and selecting it will deselect option one</span>\n                </label>\n              </div>\n              <div class=\"form-check disabled\">\n                <label class=\"custom-control custom-radio\">\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\" disabled>\n                  <span class=\"custom-control-indicator\"></span>\n                  <span class=\"custom-control-description\">Option three is disabled</span>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"offset-sm-3 col-sm-9\">\n              <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n            </div>\n          </div>\n        </form>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Form without labels</nb-card-header>\n      <nb-card-body>\n        <form>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Send</button>\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>Basic form</nb-card-header>\n      <nb-card-body>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n          </div>\n          <div class=\"form-group\">\n            <nb-checkbox>Check me out</nb-checkbox>\n          </div>\n          <button type=\"submit\" class=\"btn btn-danger\">Submit</button>\n        </form>\n      </nb-card-body>\n    </nb-card>\n\n    <nb-card>\n      <nb-card-header>Block form</nb-card-header>\n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputFirstName\">First Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputLastName\">Last Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputEmail\">Email</label>\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputWebsite\">Website</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputWebsite\" placeholder=\"Website\">\n            </div>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>Horizontal form</nb-card-header>\n      <nb-card-body>\n        <form class=\"form-horizontal\">\n          <div class=\"form-group row\">\n            <label for=\"inputEmail3\" class=\"col-sm-3 form-control-label\">Email</label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputPassword3\" class=\"col-sm-3 form-control-label\">Password</label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"offset-sm-3 col-sm-9\">\n              <div class=\"checkbox\">\n                <nb-checkbox>Remember me</nb-checkbox>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"offset-sm-3 col-sm-9\">\n              <button type=\"submit\" class=\"btn btn-warning\">Sign in</button>\n            </div>\n          </div>\n        </form>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/forms/form-layouts/form-layouts.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/forms/form-layouts/form-layouts.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host .full-width{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:220px}.nb-theme-default :host nb-checkbox{margin-bottom:1rem}[dir=ltr] .nb-theme-default :host .form-inline>*{margin:0 1.5rem 1.5rem 0}[dir=rtl] .nb-theme-default :host .form-inline>*{margin:0 0 1.5rem 1.5rem}.nb-theme-default :host nb-card.inline-form-card nb-card-body{padding-bottom:0}.nb-theme-cosmic :host .full-width{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:220px}.nb-theme-cosmic :host nb-checkbox{margin-bottom:1rem}[dir=ltr] .nb-theme-cosmic :host .form-inline>*{margin:0 1.5rem 1.5rem 0}[dir=rtl] .nb-theme-cosmic :host .form-inline>*{margin:0 0 1.5rem 1.5rem}.nb-theme-cosmic :host nb-card.inline-form-card nb-card-body{padding-bottom:0}.nb-theme-corporate :host .full-width{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:220px}.nb-theme-corporate :host nb-checkbox{margin-bottom:1rem}[dir=ltr] .nb-theme-corporate :host .form-inline>*{margin:0 1.5rem 1.5rem 0}[dir=rtl] .nb-theme-corporate :host .form-inline>*{margin:0 0 1.5rem 1.5rem}.nb-theme-corporate :host nb-card.inline-form-card nb-card-body{padding-bottom:0}\n"

/***/ }),

/***/ "./src/app/pages/forms/form-layouts/form-layouts.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/forms/form-layouts/form-layouts.component.ts ***!
  \********************************************************************/
/*! exports provided: FormLayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayoutsComponent", function() { return FormLayoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormLayoutsComponent = /** @class */ (function () {
    function FormLayoutsComponent() {
    }
    FormLayoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-form-layouts',
            styles: [__webpack_require__(/*! ./form-layouts.component.scss */ "./src/app/pages/forms/form-layouts/form-layouts.component.scss")],
            template: __webpack_require__(/*! ./form-layouts.component.html */ "./src/app/pages/forms/form-layouts/form-layouts.component.html"),
        })
    ], FormLayoutsComponent);
    return FormLayoutsComponent;
}());



/***/ }),

/***/ "./src/app/pages/forms/forms-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/forms/forms-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FormsRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.component */ "./src/app/pages/forms/forms.component.ts");
/* harmony import */ var _form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-inputs/form-inputs.component */ "./src/app/pages/forms/form-inputs/form-inputs.component.ts");
/* harmony import */ var _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-layouts/form-layouts.component */ "./src/app/pages/forms/form-layouts/form-layouts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: _forms_component__WEBPACK_IMPORTED_MODULE_2__["FormsComponent"],
        children: [{
                path: 'inputs',
                component: _form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_3__["FormInputsComponent"],
            }, {
                path: 'layouts',
                component: _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_4__["FormLayoutsComponent"],
            }],
    }];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ],
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());

var routedComponents = [
    _forms_component__WEBPACK_IMPORTED_MODULE_2__["FormsComponent"],
    _form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_3__["FormInputsComponent"],
    _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_4__["FormLayoutsComponent"],
];


/***/ }),

/***/ "./src/app/pages/forms/forms.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/forms/forms.component.ts ***!
  \************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-form-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/pages/forms/forms.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/forms/forms.module.ts ***!
  \*********************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/pages/forms/forms-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"],
            ],
            declarations: _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"].slice(),
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map