(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChartjsBarHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsBarHorizontalComponent", function() { return ChartjsBarHorizontalComponent; });
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


var ChartjsBarHorizontalComponent = /** @class */ (function () {
    function ChartjsBarHorizontalComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                        label: 'Dataset 1',
                        backgroundColor: colors.infoLight,
                        borderWidth: 1,
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                    }, {
                        label: 'Dataset 2',
                        backgroundColor: colors.successLight,
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                    },
                ],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    position: 'right',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsBarHorizontalComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsBarHorizontalComponent.prototype.random = function () {
        return Math.round(Math.random() * 100);
    };
    ChartjsBarHorizontalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs-bar-horizontal',
            template: "\n    <chart type=\"horizontalBar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ChartjsBarHorizontalComponent);
    return ChartjsBarHorizontalComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: ChartjsBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsBarComponent", function() { return ChartjsBarComponent; });
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


var ChartjsBarComponent = /** @class */ (function () {
    function ChartjsBarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
                datasets: [{
                        data: [65, 59, 80, 81, 56, 55, 40],
                        label: 'Series A',
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.primaryLight, 0.8),
                    }, {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        label: 'Series B',
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.infoLight, 0.8),
                    }],
            };
            _this.options = {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
            };
        });
    }
    ChartjsBarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs-bar',
            template: "\n    <chart type=\"bar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ChartjsBarComponent);
    return ChartjsBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs-line.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-line.component.ts ***!
  \****************************************************************/
/*! exports provided: ChartjsLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsLineComponent", function() { return ChartjsLineComponent; });
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


var ChartjsLineComponent = /** @class */ (function () {
    function ChartjsLineComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                        data: [65, 59, 80, 81, 56, 55, 40],
                        label: 'Series A',
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.primary, 0.3),
                        borderColor: colors.primary,
                    }, {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        label: 'Series B',
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.danger, 0.3),
                        borderColor: colors.danger,
                    }, {
                        data: [18, 48, 77, 9, 100, 27, 40],
                        label: 'Series C',
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.info, 0.3),
                        borderColor: colors.info,
                    },
                ],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsLineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs-line',
            template: "\n    <chart type=\"line\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ChartjsLineComponent);
    return ChartjsLineComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChartjsMultipleXaxisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsMultipleXaxisComponent", function() { return ChartjsMultipleXaxisComponent; });
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


var ChartjsMultipleXaxisComponent = /** @class */ (function () {
    function ChartjsMultipleXaxisComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                        label: 'dataset - big points',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.primary,
                        backgroundColor: colors.primary,
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - individual point sizes',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.dangerLight,
                        backgroundColor: colors.dangerLight,
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - large pointHoverRadius',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.info,
                        backgroundColor: colors.info,
                        fill: false,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }, {
                        label: 'dataset - large pointHitRadius',
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                        borderColor: colors.success,
                        backgroundColor: colors.success,
                        fill: false,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    }],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                hover: {
                    mode: 'index',
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month',
                            },
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value',
                            },
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
            };
        });
    }
    ChartjsMultipleXaxisComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsMultipleXaxisComponent.prototype.random = function () {
        return Math.round(Math.random() * 100);
    };
    ChartjsMultipleXaxisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs-multiple-xaxis',
            template: "\n    <chart type=\"line\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ChartjsMultipleXaxisComponent);
    return ChartjsMultipleXaxisComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs-pie.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-pie.component.ts ***!
  \***************************************************************/
/*! exports provided: ChartjsPieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsPieComponent", function() { return ChartjsPieComponent; });
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


var ChartjsPieComponent = /** @class */ (function () {
    function ChartjsPieComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
                datasets: [{
                        data: [300, 500, 100],
                        backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
                    }],
            };
            _this.options = {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsPieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs-pie',
            template: "\n    <chart type=\"pie\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ChartjsPieComponent);
    return ChartjsPieComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs-radar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs-radar.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChartjsRadarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsRadarComponent", function() { return ChartjsRadarComponent; });
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


var ChartjsRadarComponent = /** @class */ (function () {
    function ChartjsRadarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [{
                        data: [65, 59, 90, 81, 56, 55, 40],
                        label: 'Series A',
                        borderColor: colors.danger,
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.dangerLight, 0.5),
                    }, {
                        data: [28, 48, 40, 19, 96, 27, 100],
                        label: 'Series B',
                        borderColor: colors.warning,
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbColorHelper"].hexToRgbA(colors.warningLight, 0.5),
                    }],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scaleFontColor: 'white',
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scale: {
                    pointLabels: {
                        fontSize: 14,
                        fontColor: chartjs.textColor,
                    },
                    gridLines: {
                        color: chartjs.axisLineColor,
                    },
                    angleLines: {
                        color: chartjs.axisLineColor,
                    },
                },
            };
        });
    }
    ChartjsRadarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsRadarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs-radar',
            template: "\n    <chart type=\"radar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], ChartjsRadarComponent);
    return ChartjsRadarComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Pie</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-pie></ngx-chartjs-pie>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Bar</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-bar></ngx-chartjs-bar>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Line</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-line></ngx-chartjs-line>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Multiple x-axis</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-multiple-xaxis></ngx-chartjs-multiple-xaxis>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Bar Horizontal</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-bar-horizontal></ngx-chartjs-bar-horizontal>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Radar</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-radar></ngx-chartjs-radar>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host ngx-chartjs-pie,.nb-theme-default :host ngx-chartjs-bar,.nb-theme-default :host ngx-chartjs-line,.nb-theme-default :host ngx-chartjs-multiple-xaxis,.nb-theme-default :host ngx-chartjs-bar-horizontal,.nb-theme-default :host ngx-chartjs-radar{display:block;height:456px;width:100%}.nb-theme-default :host ngx-chartjs-pie /deep/ chart,.nb-theme-default :host ngx-chartjs-bar /deep/ chart,.nb-theme-default :host ngx-chartjs-line /deep/ chart,.nb-theme-default :host ngx-chartjs-multiple-xaxis /deep/ chart,.nb-theme-default :host ngx-chartjs-bar-horizontal /deep/ chart,.nb-theme-default :host ngx-chartjs-radar /deep/ chart{display:block;height:100%;width:100%}.nb-theme-cosmic :host ngx-chartjs-pie,.nb-theme-cosmic :host ngx-chartjs-bar,.nb-theme-cosmic :host ngx-chartjs-line,.nb-theme-cosmic :host ngx-chartjs-multiple-xaxis,.nb-theme-cosmic :host ngx-chartjs-bar-horizontal,.nb-theme-cosmic :host ngx-chartjs-radar{display:block;height:456px;width:100%}.nb-theme-cosmic :host ngx-chartjs-pie /deep/ chart,.nb-theme-cosmic :host ngx-chartjs-bar /deep/ chart,.nb-theme-cosmic :host ngx-chartjs-line /deep/ chart,.nb-theme-cosmic :host ngx-chartjs-multiple-xaxis /deep/ chart,.nb-theme-cosmic :host ngx-chartjs-bar-horizontal /deep/ chart,.nb-theme-cosmic :host ngx-chartjs-radar /deep/ chart{display:block;height:100%;width:100%}.nb-theme-corporate :host ngx-chartjs-pie,.nb-theme-corporate :host ngx-chartjs-bar,.nb-theme-corporate :host ngx-chartjs-line,.nb-theme-corporate :host ngx-chartjs-multiple-xaxis,.nb-theme-corporate :host ngx-chartjs-bar-horizontal,.nb-theme-corporate :host ngx-chartjs-radar{display:block;height:456px;width:100%}.nb-theme-corporate :host ngx-chartjs-pie /deep/ chart,.nb-theme-corporate :host ngx-chartjs-bar /deep/ chart,.nb-theme-corporate :host ngx-chartjs-line /deep/ chart,.nb-theme-corporate :host ngx-chartjs-multiple-xaxis /deep/ chart,.nb-theme-corporate :host ngx-chartjs-bar-horizontal /deep/ chart,.nb-theme-corporate :host ngx-chartjs-radar /deep/ chart{display:block;height:100%;width:100%}\n"

/***/ }),

/***/ "./src/app/pages/charts/chartjs/chartjs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/charts/chartjs/chartjs.component.ts ***!
  \***********************************************************/
/*! exports provided: ChartjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsComponent", function() { return ChartjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartjsComponent = /** @class */ (function () {
    function ChartjsComponent() {
    }
    ChartjsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-chartjs',
            styles: [__webpack_require__(/*! ./chartjs.component.scss */ "./src/app/pages/charts/chartjs/chartjs.component.scss")],
            template: __webpack_require__(/*! ./chartjs.component.html */ "./src/app/pages/charts/chartjs/chartjs.component.html"),
        })
    ], ChartjsComponent);
    return ChartjsComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/charts-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/charts/charts-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChartsRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutingModule", function() { return ChartsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts.component */ "./src/app/pages/charts/charts.component.ts");
/* harmony import */ var _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./echarts/echarts.component */ "./src/app/pages/charts/echarts/echarts.component.ts");
/* harmony import */ var _d3_d3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./d3/d3.component */ "./src/app/pages/charts/d3/d3.component.ts");
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chartjs/chartjs.component */ "./src/app/pages/charts/chartjs/chartjs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        component: _charts_component__WEBPACK_IMPORTED_MODULE_2__["ChartsComponent"],
        children: [{
                path: 'echarts',
                component: _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_3__["EchartsComponent"],
            }, {
                path: 'd3',
                component: _d3_d3_component__WEBPACK_IMPORTED_MODULE_4__["D3Component"],
            }, {
                path: 'chartjs',
                component: _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__["ChartjsComponent"],
            }],
    }];
var ChartsRoutingModule = /** @class */ (function () {
    function ChartsRoutingModule() {
    }
    ChartsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ChartsRoutingModule);
    return ChartsRoutingModule;
}());

var routedComponents = [
    _charts_component__WEBPACK_IMPORTED_MODULE_2__["ChartsComponent"],
    _echarts_echarts_component__WEBPACK_IMPORTED_MODULE_3__["EchartsComponent"],
    _d3_d3_component__WEBPACK_IMPORTED_MODULE_4__["D3Component"],
    _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__["ChartjsComponent"],
];


/***/ }),

/***/ "./src/app/pages/charts/charts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/charts/charts.component.ts ***!
  \**************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
    }
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-charts',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/charts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/charts/charts.module.ts ***!
  \***********************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts-routing.module */ "./src/app/pages/charts/charts-routing.module.ts");
/* harmony import */ var _chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chartjs/chartjs-bar.component */ "./src/app/pages/charts/chartjs/chartjs-bar.component.ts");
/* harmony import */ var _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chartjs/chartjs-line.component */ "./src/app/pages/charts/chartjs/chartjs-line.component.ts");
/* harmony import */ var _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chartjs/chartjs-pie.component */ "./src/app/pages/charts/chartjs/chartjs-pie.component.ts");
/* harmony import */ var _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chartjs/chartjs-multiple-xaxis.component */ "./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts");
/* harmony import */ var _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chartjs/chartjs-bar-horizontal.component */ "./src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts");
/* harmony import */ var _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chartjs/chartjs-radar.component */ "./src/app/pages/charts/chartjs/chartjs-radar.component.ts");
/* harmony import */ var _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./d3/d3-bar.component */ "./src/app/pages/charts/d3/d3-bar.component.ts");
/* harmony import */ var _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./d3/d3-line.component */ "./src/app/pages/charts/d3/d3-line.component.ts");
/* harmony import */ var _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./d3/d3-pie.component */ "./src/app/pages/charts/d3/d3-pie.component.ts");
/* harmony import */ var _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./d3/d3-area-stack.component */ "./src/app/pages/charts/d3/d3-area-stack.component.ts");
/* harmony import */ var _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./d3/d3-polar.component */ "./src/app/pages/charts/d3/d3-polar.component.ts");
/* harmony import */ var _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./d3/d3-advanced-pie.component */ "./src/app/pages/charts/d3/d3-advanced-pie.component.ts");
/* harmony import */ var _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./echarts/echarts-line.component */ "./src/app/pages/charts/echarts/echarts-line.component.ts");
/* harmony import */ var _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./echarts/echarts-pie.component */ "./src/app/pages/charts/echarts/echarts-pie.component.ts");
/* harmony import */ var _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./echarts/echarts-bar.component */ "./src/app/pages/charts/echarts/echarts-bar.component.ts");
/* harmony import */ var _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./echarts/echarts-multiple-xaxis.component */ "./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts");
/* harmony import */ var _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./echarts/echarts-area-stack.component */ "./src/app/pages/charts/echarts/echarts-area-stack.component.ts");
/* harmony import */ var _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./echarts/echarts-bar-animation.component */ "./src/app/pages/charts/echarts/echarts-bar-animation.component.ts");
/* harmony import */ var _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./echarts/echarts-radar.component */ "./src/app/pages/charts/echarts/echarts-radar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var components = [
    _chartjs_chartjs_bar_component__WEBPACK_IMPORTED_MODULE_6__["ChartjsBarComponent"],
    _chartjs_chartjs_line_component__WEBPACK_IMPORTED_MODULE_7__["ChartjsLineComponent"],
    _chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_8__["ChartjsPieComponent"],
    _chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_9__["ChartjsMultipleXaxisComponent"],
    _chartjs_chartjs_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_10__["ChartjsBarHorizontalComponent"],
    _chartjs_chartjs_radar_component__WEBPACK_IMPORTED_MODULE_11__["ChartjsRadarComponent"],
    _d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_12__["D3BarComponent"],
    _d3_d3_line_component__WEBPACK_IMPORTED_MODULE_13__["D3LineComponent"],
    _d3_d3_pie_component__WEBPACK_IMPORTED_MODULE_14__["D3PieComponent"],
    _d3_d3_area_stack_component__WEBPACK_IMPORTED_MODULE_15__["D3AreaStackComponent"],
    _d3_d3_polar_component__WEBPACK_IMPORTED_MODULE_16__["D3PolarComponent"],
    _d3_d3_advanced_pie_component__WEBPACK_IMPORTED_MODULE_17__["D3AdvancedPieComponent"],
    _echarts_echarts_line_component__WEBPACK_IMPORTED_MODULE_18__["EchartsLineComponent"],
    _echarts_echarts_pie_component__WEBPACK_IMPORTED_MODULE_19__["EchartsPieComponent"],
    _echarts_echarts_bar_component__WEBPACK_IMPORTED_MODULE_20__["EchartsBarComponent"],
    _echarts_echarts_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_21__["EchartsMultipleXaxisComponent"],
    _echarts_echarts_area_stack_component__WEBPACK_IMPORTED_MODULE_22__["EchartsAreaStackComponent"],
    _echarts_echarts_bar_animation_component__WEBPACK_IMPORTED_MODULE_23__["EchartsBarAnimationComponent"],
    _echarts_echarts_radar_component__WEBPACK_IMPORTED_MODULE_24__["EchartsRadarComponent"],
];
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartsRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_1__["NgxEchartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__["ChartModule"]],
            declarations: _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["routedComponents"].concat(components),
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3-advanced-pie.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-advanced-pie.component.ts ***!
  \**************************************************************/
/*! exports provided: D3AdvancedPieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3AdvancedPieComponent", function() { return D3AdvancedPieComponent; });
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


var D3AdvancedPieComponent = /** @class */ (function () {
    function D3AdvancedPieComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.single = [
            {
                name: 'Germany',
                value: 8940000,
            },
            {
                name: 'USA',
                value: 5000000,
            },
            {
                name: 'France',
                value: 7200000,
            },
        ];
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3AdvancedPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3AdvancedPieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3-advanced-pie',
            template: "\n    <ngx-charts-advanced-pie-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"single\">\n    </ngx-charts-advanced-pie-chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], D3AdvancedPieComponent);
    return D3AdvancedPieComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3-area-stack.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-area-stack.component.ts ***!
  \************************************************************/
/*! exports provided: D3AreaStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3AreaStackComponent", function() { return D3AreaStackComponent; });
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


var D3AreaStackComponent = /** @class */ (function () {
    function D3AreaStackComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.multi = [{
                name: 'Germany',
                series: [{
                        name: '2010',
                        value: 7300000,
                    }, {
                        name: '2011',
                        value: 8940000,
                    }],
            }, {
                name: 'USA',
                series: [{
                        name: '2010',
                        value: 7870000,
                    }, {
                        name: '2011',
                        value: 8270000,
                    }],
            }, {
                name: 'France',
                series: [{
                        name: '2010',
                        value: 5000002,
                    }, {
                        name: '2011',
                        value: 5800000,
                    }],
            }];
        this.showLegend = true;
        this.autoScale = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3AreaStackComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3AreaStackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3-area-stack',
            template: "\n    <ngx-charts-area-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      [autoScale]=\"autoScale\">\n    </ngx-charts-area-chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], D3AreaStackComponent);
    return D3AreaStackComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: D3BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3BarComponent", function() { return D3BarComponent; });
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


var D3BarComponent = /** @class */ (function () {
    function D3BarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.results = [
            { name: 'Germany', value: 8940 },
            { name: 'USA', value: 5000 },
            { name: 'France', value: 7200 },
        ];
        this.showLegend = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.xAxisLabel = 'Country';
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3BarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3BarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3-bar',
            template: "\n    <ngx-charts-bar-vertical\n      [scheme]=\"colorScheme\"\n      [results]=\"results\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-bar-vertical>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], D3BarComponent);
    return D3BarComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3-line.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-line.component.ts ***!
  \******************************************************/
/*! exports provided: D3LineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3LineComponent", function() { return D3LineComponent; });
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


var D3LineComponent = /** @class */ (function () {
    function D3LineComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.multi = [
            {
                name: 'Germany',
                series: [
                    {
                        name: '2010',
                        value: 7300,
                    },
                    {
                        name: '2011',
                        value: 8940,
                    },
                ],
            },
            {
                name: 'USA',
                series: [
                    {
                        name: '2010',
                        value: 7870,
                    },
                    {
                        name: '2011',
                        value: 8270,
                    },
                ],
            },
            {
                name: 'France',
                series: [
                    {
                        name: '2010',
                        value: 5002,
                    },
                    {
                        name: '2011',
                        value: 5800,
                    },
                ],
            },
        ];
        this.showLegend = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3LineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3LineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3-line',
            template: "\n    <ngx-charts-line-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-line-chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], D3LineComponent);
    return D3LineComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3-pie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-pie.component.ts ***!
  \*****************************************************/
/*! exports provided: D3PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3PieComponent", function() { return D3PieComponent; });
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


var D3PieComponent = /** @class */ (function () {
    function D3PieComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.results = [
            { name: 'Germany', value: 8940 },
            { name: 'USA', value: 5000 },
            { name: 'France', value: 7200 },
        ];
        this.showLegend = true;
        this.showLabels = true;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3PieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3PieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3-pie',
            template: "\n    <ngx-charts-pie-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"results\"\n      [legend]=\"showLegend\"\n      [labels]=\"showLabels\">\n    </ngx-charts-pie-chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], D3PieComponent);
    return D3PieComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3-polar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/charts/d3/d3-polar.component.ts ***!
  \*******************************************************/
/*! exports provided: D3PolarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3PolarComponent", function() { return D3PolarComponent; });
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


var D3PolarComponent = /** @class */ (function () {
    function D3PolarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.multi = [
            {
                name: 'Germany',
                series: [
                    {
                        name: '1990',
                        value: 31476,
                    },
                    {
                        name: '2000',
                        value: 36953,
                    },
                    {
                        name: '2010',
                        value: 40632,
                    },
                ],
            },
            {
                name: 'USA',
                series: [
                    {
                        name: '1990',
                        value: 37060,
                    },
                    {
                        name: '2000',
                        value: 45986,
                    },
                    {
                        name: '2010',
                        value: 49737,
                    },
                ],
            },
            {
                name: 'France',
                series: [
                    {
                        name: '1990',
                        value: 29476,
                    },
                    {
                        name: '2000',
                        value: 34774,
                    },
                    {
                        name: '2010',
                        value: 36240,
                    },
                ],
            },
        ];
        this.showLegend = true;
        this.autoScale = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3PolarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3PolarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3-polar',
            template: "\n    <ngx-charts-polar-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      [autoScale]=\"autoScale\">\n    </ngx-charts-polar-chart>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], D3PolarComponent);
    return D3PolarComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/d3/d3.component.html":
/*!***************************************************!*\
  !*** ./src/app/pages/charts/d3/d3.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Pie</nb-card-header>\n      <nb-card-body>\n        <ngx-d3-pie></ngx-d3-pie>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Bar</nb-card-header>\n      <nb-card-body>\n        <ngx-d3-bar></ngx-d3-bar>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Line</nb-card-header>\n      <nb-card-body>\n        <ngx-d3-line></ngx-d3-line>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Advanced Pie</nb-card-header>\n      <nb-card-body>\n        <ngx-d3-advanced-pie></ngx-d3-advanced-pie>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Area Chart</nb-card-header>\n      <nb-card-body>\n        <ngx-d3-area-stack></ngx-d3-area-stack>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/charts/d3/d3.component.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/charts/d3/d3.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host ngx-d3-bar,.nb-theme-default :host ngx-d3-pie,.nb-theme-default :host ngx-d3-advanced-pie,.nb-theme-default :host ngx-d3-area-stack,.nb-theme-default :host ngx-d3-line,.nb-theme-default :host ngx-d3-polar{display:block;width:100%;height:456px}.nb-theme-default :host ngx-d3-bar /deep/ .pie-label,.nb-theme-default :host ngx-d3-pie /deep/ .pie-label,.nb-theme-default :host ngx-d3-advanced-pie /deep/ .pie-label,.nb-theme-default :host ngx-d3-area-stack /deep/ .pie-label,.nb-theme-default :host ngx-d3-line /deep/ .pie-label,.nb-theme-default :host ngx-d3-polar /deep/ .pie-label{fill:#2a2a2a}.nb-theme-default :host ngx-d3-bar /deep/ .grid-line-path,.nb-theme-default :host ngx-d3-pie /deep/ .grid-line-path,.nb-theme-default :host ngx-d3-advanced-pie /deep/ .grid-line-path,.nb-theme-default :host ngx-d3-area-stack /deep/ .grid-line-path,.nb-theme-default :host ngx-d3-line /deep/ .grid-line-path,.nb-theme-default :host ngx-d3-polar /deep/ .grid-line-path{stroke:#ebeef2}.nb-theme-default :host ngx-d3-bar /deep/ text,.nb-theme-default :host ngx-d3-pie /deep/ text,.nb-theme-default :host ngx-d3-advanced-pie /deep/ text,.nb-theme-default :host ngx-d3-area-stack /deep/ text,.nb-theme-default :host ngx-d3-line /deep/ text,.nb-theme-default :host ngx-d3-polar /deep/ text{fill:#2a2a2a}.nb-theme-default :host ngx-d3-bar /deep/ .chart-legend .legend-labels,.nb-theme-default :host ngx-d3-pie /deep/ .chart-legend .legend-labels,.nb-theme-default :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-labels,.nb-theme-default :host ngx-d3-area-stack /deep/ .chart-legend .legend-labels,.nb-theme-default :host ngx-d3-line /deep/ .chart-legend .legend-labels,.nb-theme-default :host ngx-d3-polar /deep/ .chart-legend .legend-labels{background:#fff}.nb-theme-default :host ngx-d3-bar /deep/ .chart-legend .legend-label,.nb-theme-default :host ngx-d3-pie /deep/ .chart-legend .legend-label,.nb-theme-default :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label,.nb-theme-default :host ngx-d3-area-stack /deep/ .chart-legend .legend-label,.nb-theme-default :host ngx-d3-line /deep/ .chart-legend .legend-label,.nb-theme-default :host ngx-d3-polar /deep/ .chart-legend .legend-label{color:#2a2a2a}.nb-theme-default :host ngx-d3-bar /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-default :host ngx-d3-pie /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-default :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-default :host ngx-d3-area-stack /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-default :host ngx-d3-line /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-default :host ngx-d3-polar /deep/ .chart-legend .legend-label .active .legend-label-text{color:#2a2a2a}.nb-theme-cosmic :host ngx-d3-bar,.nb-theme-cosmic :host ngx-d3-pie,.nb-theme-cosmic :host ngx-d3-advanced-pie,.nb-theme-cosmic :host ngx-d3-area-stack,.nb-theme-cosmic :host ngx-d3-line,.nb-theme-cosmic :host ngx-d3-polar{display:block;width:100%;height:456px}.nb-theme-cosmic :host ngx-d3-bar /deep/ .pie-label,.nb-theme-cosmic :host ngx-d3-pie /deep/ .pie-label,.nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .pie-label,.nb-theme-cosmic :host ngx-d3-area-stack /deep/ .pie-label,.nb-theme-cosmic :host ngx-d3-line /deep/ .pie-label,.nb-theme-cosmic :host ngx-d3-polar /deep/ .pie-label{fill:#fff}.nb-theme-cosmic :host ngx-d3-bar /deep/ .grid-line-path,.nb-theme-cosmic :host ngx-d3-pie /deep/ .grid-line-path,.nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .grid-line-path,.nb-theme-cosmic :host ngx-d3-area-stack /deep/ .grid-line-path,.nb-theme-cosmic :host ngx-d3-line /deep/ .grid-line-path,.nb-theme-cosmic :host ngx-d3-polar /deep/ .grid-line-path{stroke:#342e73}.nb-theme-cosmic :host ngx-d3-bar /deep/ text,.nb-theme-cosmic :host ngx-d3-pie /deep/ text,.nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ text,.nb-theme-cosmic :host ngx-d3-area-stack /deep/ text,.nb-theme-cosmic :host ngx-d3-line /deep/ text,.nb-theme-cosmic :host ngx-d3-polar /deep/ text{fill:#fff}.nb-theme-cosmic :host ngx-d3-bar /deep/ .chart-legend .legend-labels,.nb-theme-cosmic :host ngx-d3-pie /deep/ .chart-legend .legend-labels,.nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-labels,.nb-theme-cosmic :host ngx-d3-area-stack /deep/ .chart-legend .legend-labels,.nb-theme-cosmic :host ngx-d3-line /deep/ .chart-legend .legend-labels,.nb-theme-cosmic :host ngx-d3-polar /deep/ .chart-legend .legend-labels{background:#3d3780}.nb-theme-cosmic :host ngx-d3-bar /deep/ .chart-legend .legend-label,.nb-theme-cosmic :host ngx-d3-pie /deep/ .chart-legend .legend-label,.nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label,.nb-theme-cosmic :host ngx-d3-area-stack /deep/ .chart-legend .legend-label,.nb-theme-cosmic :host ngx-d3-line /deep/ .chart-legend .legend-label,.nb-theme-cosmic :host ngx-d3-polar /deep/ .chart-legend .legend-label{color:#fff}.nb-theme-cosmic :host ngx-d3-bar /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-cosmic :host ngx-d3-pie /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-cosmic :host ngx-d3-area-stack /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-cosmic :host ngx-d3-line /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-cosmic :host ngx-d3-polar /deep/ .chart-legend .legend-label .active .legend-label-text{color:#fff}.nb-theme-corporate :host ngx-d3-bar,.nb-theme-corporate :host ngx-d3-pie,.nb-theme-corporate :host ngx-d3-advanced-pie,.nb-theme-corporate :host ngx-d3-area-stack,.nb-theme-corporate :host ngx-d3-line,.nb-theme-corporate :host ngx-d3-polar{display:block;width:100%;height:456px}.nb-theme-corporate :host ngx-d3-bar /deep/ .pie-label,.nb-theme-corporate :host ngx-d3-pie /deep/ .pie-label,.nb-theme-corporate :host ngx-d3-advanced-pie /deep/ .pie-label,.nb-theme-corporate :host ngx-d3-area-stack /deep/ .pie-label,.nb-theme-corporate :host ngx-d3-line /deep/ .pie-label,.nb-theme-corporate :host ngx-d3-polar /deep/ .pie-label{fill:#181818}.nb-theme-corporate :host ngx-d3-bar /deep/ .grid-line-path,.nb-theme-corporate :host ngx-d3-pie /deep/ .grid-line-path,.nb-theme-corporate :host ngx-d3-advanced-pie /deep/ .grid-line-path,.nb-theme-corporate :host ngx-d3-area-stack /deep/ .grid-line-path,.nb-theme-corporate :host ngx-d3-line /deep/ .grid-line-path,.nb-theme-corporate :host ngx-d3-polar /deep/ .grid-line-path{stroke:#cdd5dc}.nb-theme-corporate :host ngx-d3-bar /deep/ text,.nb-theme-corporate :host ngx-d3-pie /deep/ text,.nb-theme-corporate :host ngx-d3-advanced-pie /deep/ text,.nb-theme-corporate :host ngx-d3-area-stack /deep/ text,.nb-theme-corporate :host ngx-d3-line /deep/ text,.nb-theme-corporate :host ngx-d3-polar /deep/ text{fill:#181818}.nb-theme-corporate :host ngx-d3-bar /deep/ .chart-legend .legend-labels,.nb-theme-corporate :host ngx-d3-pie /deep/ .chart-legend .legend-labels,.nb-theme-corporate :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-labels,.nb-theme-corporate :host ngx-d3-area-stack /deep/ .chart-legend .legend-labels,.nb-theme-corporate :host ngx-d3-line /deep/ .chart-legend .legend-labels,.nb-theme-corporate :host ngx-d3-polar /deep/ .chart-legend .legend-labels{background:#fff}.nb-theme-corporate :host ngx-d3-bar /deep/ .chart-legend .legend-label,.nb-theme-corporate :host ngx-d3-pie /deep/ .chart-legend .legend-label,.nb-theme-corporate :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label,.nb-theme-corporate :host ngx-d3-area-stack /deep/ .chart-legend .legend-label,.nb-theme-corporate :host ngx-d3-line /deep/ .chart-legend .legend-label,.nb-theme-corporate :host ngx-d3-polar /deep/ .chart-legend .legend-label{color:#181818}.nb-theme-corporate :host ngx-d3-bar /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-corporate :host ngx-d3-pie /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-corporate :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-corporate :host ngx-d3-area-stack /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-corporate :host ngx-d3-line /deep/ .chart-legend .legend-label .active .legend-label-text,.nb-theme-corporate :host ngx-d3-polar /deep/ .chart-legend .legend-label .active .legend-label-text{color:#181818}\n"

/***/ }),

/***/ "./src/app/pages/charts/d3/d3.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/charts/d3/d3.component.ts ***!
  \*************************************************/
/*! exports provided: D3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3Component", function() { return D3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var D3Component = /** @class */ (function () {
    function D3Component() {
    }
    D3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-d3',
            styles: [__webpack_require__(/*! ./d3.component.scss */ "./src/app/pages/charts/d3/d3.component.scss")],
            template: __webpack_require__(/*! ./d3.component.html */ "./src/app/pages/charts/d3/d3.component.html"),
        })
    ], D3Component);
    return D3Component;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-area-stack.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-area-stack.component.ts ***!
  \**********************************************************************/
/*! exports provided: EchartsAreaStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsAreaStackComponent", function() { return EchartsAreaStackComponent; });
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


var EchartsAreaStackComponent = /** @class */ (function () {
    function EchartsAreaStackComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsAreaStackComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: echarts.tooltipBackgroundColor,
                        },
                    },
                },
                legend: {
                    data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Mail marketing',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [120, 132, 101, 134, 90, 230, 210],
                    },
                    {
                        name: 'Affiliate advertising',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [220, 182, 191, 234, 290, 330, 310],
                    },
                    {
                        name: 'Video ad',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [150, 232, 201, 154, 190, 330, 410],
                    },
                    {
                        name: 'Direct interview',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [320, 332, 301, 334, 390, 330, 320],
                    },
                    {
                        name: 'Search engine',
                        type: 'line',
                        stack: 'Total amount',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                    },
                ],
            };
        });
    };
    EchartsAreaStackComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsAreaStackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-area-stack',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsAreaStackComponent);
    return EchartsAreaStackComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-bar-animation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-bar-animation.component.ts ***!
  \*************************************************************************/
/*! exports provided: EchartsBarAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsBarAnimationComponent", function() { return EchartsBarAnimationComponent; });
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


var EchartsBarAnimationComponent = /** @class */ (function () {
    function EchartsBarAnimationComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsBarAnimationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var xAxisData = [];
            var data1 = [];
            var data2 = [];
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight, colors.infoLight],
                legend: {
                    data: ['bar', 'bar2'],
                    align: 'left',
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        data: xAxisData,
                        silent: false,
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'bar',
                        type: 'bar',
                        data: data1,
                        animationDelay: function (idx) { return idx * 10; },
                    },
                    {
                        name: 'bar2',
                        type: 'bar',
                        data: data2,
                        animationDelay: function (idx) { return idx * 10 + 100; },
                    },
                ],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) { return idx * 5; },
            };
            for (var i = 0; i < 100; i++) {
                xAxisData.push('Category ' + i);
                data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
            }
        });
    };
    EchartsBarAnimationComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsBarAnimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-bar-animation',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsBarAnimationComponent);
    return EchartsBarAnimationComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: EchartsBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsBarComponent", function() { return EchartsBarComponent; });
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


var EchartsBarComponent = /** @class */ (function () {
    function EchartsBarComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Score',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220],
                    },
                ],
            };
        });
    };
    EchartsBarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-bar',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsBarComponent);
    return EchartsBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-line.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-line.component.ts ***!
  \****************************************************************/
/*! exports provided: EchartsLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsLineComponent", function() { return EchartsLineComponent; });
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


var EchartsLineComponent = /** @class */ (function () {
    function EchartsLineComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsLineComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.primary, colors.info],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}',
                },
                legend: {
                    left: 'left',
                    data: ['Line 1', 'Line 2', 'Line 3'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'log',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                series: [
                    {
                        name: 'Line 1',
                        type: 'line',
                        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
                    },
                    {
                        name: 'Line 2',
                        type: 'line',
                        data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
                    },
                    {
                        name: 'Line 3',
                        type: 'line',
                        data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
                    },
                ],
            };
        });
    };
    EchartsLineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-line',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsLineComponent);
    return EchartsLineComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts ***!
  \**************************************************************************/
/*! exports provided: EchartsMultipleXaxisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsMultipleXaxisComponent", function() { return EchartsMultipleXaxisComponent; });
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


var EchartsMultipleXaxisComponent = /** @class */ (function () {
    function EchartsMultipleXaxisComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsMultipleXaxisComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.success, colors.info],
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross',
                    },
                },
                legend: {
                    data: ['2015 Precipitation', '2016 Precipitation'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    top: 70,
                    bottom: 50,
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors.info,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return ('Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : ''));
                                },
                            },
                        },
                        data: [
                            '2016-1',
                            '2016-2',
                            '2016-3',
                            '2016-4',
                            '2016-5',
                            '2016-6',
                            '2016-7',
                            '2016-8',
                            '2016-9',
                            '2016-10',
                            '2016-11',
                            '2016-12',
                        ],
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors.success,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return ('Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : ''));
                                },
                            },
                        },
                        data: [
                            '2015-1',
                            '2015-2',
                            '2015-3',
                            '2015-4',
                            '2015-5',
                            '2015-6',
                            '2015-7',
                            '2015-8',
                            '2015-9',
                            '2015-10',
                            '2015-11',
                            '2015-12',
                        ],
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: '2015 Precipitation',
                        type: 'line',
                        xAxisIndex: 1,
                        smooth: true,
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    },
                    {
                        name: '2016 Precipitation',
                        type: 'line',
                        smooth: true,
                        data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
                    },
                ],
            };
        });
    };
    EchartsMultipleXaxisComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsMultipleXaxisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-multiple-xaxis',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsMultipleXaxisComponent);
    return EchartsMultipleXaxisComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-pie.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-pie.component.ts ***!
  \***************************************************************/
/*! exports provided: EchartsPieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsPieComponent", function() { return EchartsPieComponent; });
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


var EchartsPieComponent = /** @class */ (function () {
    function EchartsPieComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsPieComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                series: [
                    {
                        name: 'Countries',
                        type: 'pie',
                        radius: '80%',
                        center: ['50%', '50%'],
                        data: [
                            { value: 335, name: 'Germany' },
                            { value: 310, name: 'France' },
                            { value: 234, name: 'Canada' },
                            { value: 135, name: 'Russia' },
                            { value: 1548, name: 'USA' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: echarts.itemHoverShadowColor,
                            },
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: echarts.axisLineColor,
                                },
                            },
                        },
                    },
                ],
            };
        });
    };
    EchartsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsPieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-pie',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsPieComponent);
    return EchartsPieComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts-radar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts-radar.component.ts ***!
  \*****************************************************************/
/*! exports provided: EchartsRadarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsRadarComponent", function() { return EchartsRadarComponent; });
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


var EchartsRadarComponent = /** @class */ (function () {
    function EchartsRadarComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsRadarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.warning],
                tooltip: {},
                legend: {
                    data: ['Allocated Budget', 'Actual Spending'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                radar: {
                    name: {
                        textStyle: {
                            color: echarts.textColor,
                        },
                    },
                    indicator: [
                        { name: 'Sales', max: 6500 },
                        { name: 'Administration', max: 16000 },
                        { name: 'Information Techology', max: 30000 },
                        { name: 'Customer Support', max: 38000 },
                        { name: 'Development', max: 52000 },
                        { name: 'Marketing', max: 25000 },
                    ],
                    splitArea: {
                        areaStyle: {
                            color: 'transparent',
                        },
                    },
                },
                series: [
                    {
                        name: 'Budget vs Spending',
                        type: 'radar',
                        data: [
                            {
                                value: [4300, 10000, 28000, 35000, 50000, 19000],
                                name: 'Allocated Budget',
                            },
                            {
                                value: [5000, 14000, 28000, 31000, 42000, 21000],
                                name: 'Actual Spending',
                            },
                        ],
                    },
                ],
            };
        });
    };
    EchartsRadarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsRadarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts-radar',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], EchartsRadarComponent);
    return EchartsRadarComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Pie</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-pie></ngx-echarts-pie>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Bar</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-bar></ngx-echarts-bar>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Line</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-line></ngx-echarts-line>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Multiple x-axis</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-multiple-xaxis></ngx-echarts-multiple-xaxis>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Area Stack</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-area-stack></ngx-echarts-area-stack>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Bar Animation</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-bar-animation></ngx-echarts-bar-animation>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Radar</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-radar></ngx-echarts-radar>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nb-theme-default :host ngx-echarts-pie,.nb-theme-default :host ngx-echarts-bar,.nb-theme-default :host ngx-echarts-line,.nb-theme-default :host ngx-echarts-multiple-xaxis,.nb-theme-default :host ngx-echarts-area-stack,.nb-theme-default :host ngx-echarts-bar-animation,.nb-theme-default :host ngx-echarts-radar{display:block;height:456px;width:100%}.nb-theme-default :host /deep/ .echart{height:100%;width:100%}.nb-theme-cosmic :host ngx-echarts-pie,.nb-theme-cosmic :host ngx-echarts-bar,.nb-theme-cosmic :host ngx-echarts-line,.nb-theme-cosmic :host ngx-echarts-multiple-xaxis,.nb-theme-cosmic :host ngx-echarts-area-stack,.nb-theme-cosmic :host ngx-echarts-bar-animation,.nb-theme-cosmic :host ngx-echarts-radar{display:block;height:456px;width:100%}.nb-theme-cosmic :host /deep/ .echart{height:100%;width:100%}.nb-theme-corporate :host ngx-echarts-pie,.nb-theme-corporate :host ngx-echarts-bar,.nb-theme-corporate :host ngx-echarts-line,.nb-theme-corporate :host ngx-echarts-multiple-xaxis,.nb-theme-corporate :host ngx-echarts-area-stack,.nb-theme-corporate :host ngx-echarts-bar-animation,.nb-theme-corporate :host ngx-echarts-radar{display:block;height:456px;width:100%}.nb-theme-corporate :host /deep/ .echart{height:100%;width:100%}\n"

/***/ }),

/***/ "./src/app/pages/charts/echarts/echarts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/charts/echarts/echarts.component.ts ***!
  \***********************************************************/
/*! exports provided: EchartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsComponent", function() { return EchartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EchartsComponent = /** @class */ (function () {
    function EchartsComponent() {
    }
    EchartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-echarts',
            styles: [__webpack_require__(/*! ./echarts.component.scss */ "./src/app/pages/charts/echarts/echarts.component.scss")],
            template: __webpack_require__(/*! ./echarts.component.html */ "./src/app/pages/charts/echarts/echarts.component.html"),
        })
    ], EchartsComponent);
    return EchartsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=charts-charts-module.js.map