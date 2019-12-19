webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/echarts/echarts-area-stack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsAreaStackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsAreaStackComponent = (function () {
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
    return EchartsAreaStackComponent;
}());
EchartsAreaStackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-area-stack',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */]) === "function" && _a || Object])
], EchartsAreaStackComponent);

var _a;
//# sourceMappingURL=echarts-area-stack.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/echarts/echarts-bar-animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsBarAnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsBarAnimationComponent = (function () {
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
                        animationDelay: function (idx) {
                            return idx * 10;
                        },
                    },
                    {
                        name: 'bar2',
                        type: 'bar',
                        data: data2,
                        animationDelay: function (idx) {
                            return idx * 10 + 100;
                        },
                    },
                ],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) {
                    return idx * 5;
                },
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
    return EchartsBarAnimationComponent;
}());
EchartsBarAnimationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-bar-animation',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */]) === "function" && _a || Object])
], EchartsBarAnimationComponent);

var _a;
//# sourceMappingURL=echarts-bar-animation.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/echarts/echarts-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsBarComponent = (function () {
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
    return EchartsBarComponent;
}());
EchartsBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-bar',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */]) === "function" && _a || Object])
], EchartsBarComponent);

var _a;
//# sourceMappingURL=echarts-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/echarts/echarts-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsLineComponent = (function () {
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
    return EchartsLineComponent;
}());
EchartsLineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-line',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */]) === "function" && _a || Object])
], EchartsLineComponent);

var _a;
//# sourceMappingURL=echarts-line.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/echarts/echarts-multiple-xaxis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsMultipleXaxisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsMultipleXaxisComponent = (function () {
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
    return EchartsMultipleXaxisComponent;
}());
EchartsMultipleXaxisComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-multiple-xaxis',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */]) === "function" && _a || Object])
], EchartsMultipleXaxisComponent);

var _a;
//# sourceMappingURL=echarts-multiple-xaxis.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/echarts/echarts-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsPieComponent = (function () {
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
    return EchartsPieComponent;
}());
EchartsPieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-pie',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */]) === "function" && _a || Object])
], EchartsPieComponent);

var _a;
//# sourceMappingURL=echarts-pie.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/echarts/echarts-radar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsRadarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsRadarComponent = (function () {
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
    return EchartsRadarComponent;
}());
EchartsRadarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-radar',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["n" /* NbThemeService */]) === "function" && _a || Object])
], EchartsRadarComponent);

var _a;
//# sourceMappingURL=echarts-radar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/echarts/echarts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__echarts_component__ = __webpack_require__("../../../../../src/app/pages/echarts/echarts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__echarts_component__["a" /* EchartsComponent */],
    }];
var EchartsRoutingModule = (function () {
    function EchartsRoutingModule() {
    }
    return EchartsRoutingModule;
}());
EchartsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], EchartsRoutingModule);

//# sourceMappingURL=echarts-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/echarts/echarts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>\n        <span>Pie</span>\n      </nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-pie></ngx-echarts-pie>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Bar</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-bar></ngx-echarts-bar>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Line</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-line></ngx-echarts-line>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Multiple x-axis</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-multiple-xaxis></ngx-echarts-multiple-xaxis>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Area Stack</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-area-stack></ngx-echarts-area-stack>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Bar Animation</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-bar-animation></ngx-echarts-bar-animation>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Radar</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-radar></ngx-echarts-radar>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/echarts/echarts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) ngx-echarts-pie,\n:host-context(.nb-theme-default) ngx-echarts-bar,\n:host-context(.nb-theme-default) ngx-echarts-line,\n:host-context(.nb-theme-default) ngx-echarts-multiple-xaxis,\n:host-context(.nb-theme-default) ngx-echarts-area-stack,\n:host-context(.nb-theme-default) ngx-echarts-bar-animation,\n:host-context(.nb-theme-default) ngx-echarts-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) ngx-echarts-pie,\n:host-context(.nb-theme-cosmic) ngx-echarts-bar,\n:host-context(.nb-theme-cosmic) ngx-echarts-line,\n:host-context(.nb-theme-cosmic) ngx-echarts-multiple-xaxis,\n:host-context(.nb-theme-cosmic) ngx-echarts-area-stack,\n:host-context(.nb-theme-cosmic) ngx-echarts-bar-animation,\n:host-context(.nb-theme-cosmic) ngx-echarts-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/echarts/echarts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsComponent = (function () {
    function EchartsComponent(router) {
        this.router = router;
    }
    EchartsComponent.prototype.gotoDetail = function () {
        console.log('dhdjh');
        this.router.navigate(['/pages/components/demo']);
    };
    return EchartsComponent;
}());
EchartsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts',
        styles: [__webpack_require__("../../../../../src/app/pages/echarts/echarts.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/echarts/echarts.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], EchartsComponent);

var _a;
//# sourceMappingURL=echarts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/echarts/echarts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__echarts_line_component__ = __webpack_require__("../../../../../src/app/pages/echarts/echarts-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__echarts_pie_component__ = __webpack_require__("../../../../../src/app/pages/echarts/echarts-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__echarts_bar_component__ = __webpack_require__("../../../../../src/app/pages/echarts/echarts-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__echarts_multiple_xaxis_component__ = __webpack_require__("../../../../../src/app/pages/echarts/echarts-multiple-xaxis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__echarts_area_stack_component__ = __webpack_require__("../../../../../src/app/pages/echarts/echarts-area-stack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__echarts_bar_animation_component__ = __webpack_require__("../../../../../src/app/pages/echarts/echarts-bar-animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__echarts_radar_component__ = __webpack_require__("../../../../../src/app/pages/echarts/echarts-radar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__echarts_component__ = __webpack_require__("../../../../../src/app/pages/echarts/echarts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__echarts_routing_module__ = __webpack_require__("../../../../../src/app/pages/echarts/echarts-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var components = [
    __WEBPACK_IMPORTED_MODULE_3__echarts_line_component__["a" /* EchartsLineComponent */],
    __WEBPACK_IMPORTED_MODULE_4__echarts_pie_component__["a" /* EchartsPieComponent */],
    __WEBPACK_IMPORTED_MODULE_5__echarts_bar_component__["a" /* EchartsBarComponent */],
    __WEBPACK_IMPORTED_MODULE_6__echarts_multiple_xaxis_component__["a" /* EchartsMultipleXaxisComponent */],
    __WEBPACK_IMPORTED_MODULE_7__echarts_area_stack_component__["a" /* EchartsAreaStackComponent */],
    __WEBPACK_IMPORTED_MODULE_8__echarts_bar_animation_component__["a" /* EchartsBarAnimationComponent */],
    __WEBPACK_IMPORTED_MODULE_9__echarts_radar_component__["a" /* EchartsRadarComponent */],
];
var EchartsModule = (function () {
    function EchartsModule() {
    }
    return EchartsModule;
}());
EchartsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */], __WEBPACK_IMPORTED_MODULE_11__echarts_routing_module__["a" /* EchartsRoutingModule */], __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* NgxEchartsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_10__echarts_component__["a" /* EchartsComponent */]].concat(components),
    })
], EchartsModule);

//# sourceMappingURL=echarts.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: '应用概览',
        icon: 'nb-home',
        link: '/pages/multi',
        home: true,
    },
    {
        title: '数据分析',
        group: true,
    },
    {
        title: '多个APP',
        icon: 'nb-bar-chart',
        children: [
            {
                title: '热门APP访问量',
                link: '/pages/multi/visit',
            },
            {
                title: 'APP市场占有率',
                link: '/pages/multi/market',
            },
            {
                title: 'APP数据对比',
                link: '/pages/multi/compare',
            },
            {
                title: '各类型APP占比',
                link: '/pages/multi/type',
            },
        ],
    },
    {
        title: '单个APP',
        icon: 'nb-keypad',
        link: '/pages/single',
        children: [
            {
                title: '单个APP概览',
                link: '/pages/single/singlehome',
            },
            {
                title: '用户活跃分析',
                link: '/pages/single/useractive',
            },
            {
                title: '用户趋势分析',
                link: '/pages/single/trend',
            },
            {
                title: '保留率分析',
                link: '/pages/single/retention',
            },
            {
                title: '日使用时长分析',
                link: '/pages/single/daytime',
            },
            {
                title: '使用时段分析',
                link: '/pages/single/usertime',
            },
            {
                title: '版本分析',
                link: '/pages/single/versionevo',
            },
        ],
    },
    {
        title: '用户分析',
        icon: 'nb-compose',
        children: [
            {
                title: '用户概览',
                link: '/pages/user/all',
            },
            {
                title: '日使用手机时长分析',
                link: '/pages/user/time',
            },
            {
                title: 'APP使用状况统计',
                link: '/pages/user/status',
            },
            {
                title: '日使用手机次数分析',
                link: '/pages/user/number',
            },
            {
                title: '兴趣分布分析',
                link: '/pages/user/interest',
            },
            {
                title: 'APP使用历史',
                link: '/pages/user/history',
            },
        ],
    },
    {
        title: '用户构成',
        icon: 'nb-gear',
        link: '/pages/users',
        children: [
            {
                title: '用户构成概览',
                link: '/pages/users/all',
            }, {
                title: '用户兴趣分布',
                link: '/pages/users/interest',
            }, {
                title: '用户地域分布',
                link: '/pages/users/area',
            }, {
                title: '用户使用手机时长分段',
                link: '/pages/users/segment',
            }, {
                title: '用户使用手机时段',
                link: '/pages/users/interval',
            },
        ],
    },
    {
        title: '接口信息',
        icon: 'nb-locked',
        children: [
            {
                title: 'PV',
                link: '/pages/interface/pv',
            },
            {
                title: 'UV',
                link: '/pages/interface/uv',
            },
            {
                title: '响应时间',
                link: '/pages/interface/response',
            },
        ],
    },
    {
        title: '终端分析',
        icon: 'nb-tables',
        children: [
            {
                title: 'Android系统版本',
                link: '/pages/terminal/version',
            },
            {
                title: '设备联网状态',
                link: '/pages/terminal/network',
            },
            {
                title: '设备品牌',
                link: '/pages/terminal/brand',
            },
            {
                title: '设备机型',
                link: '/pages/terminal/model',
            },
            {
                title: '设备分辨率',
                link: '/pages/terminal/resolution',
            },
            {
                title: '设备运营商',
                link: '/pages/terminal/seller',
            },
        ],
    },
];
//# sourceMappingURL=pages-menu.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */],
        children: [{
                path: 'multi',
                loadChildren: './multi/multi.module#MultiModule',
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule',
            }, {
                path: 'terminal',
                loadChildren: './terminal/terminal.module#TerminalModule',
            }, {
                path: 'single',
                loadChildren: './single/single.module#SingleModule',
            }, {
                path: 'users',
                loadChildren: './users-composition/users-composition.module#UsersCompositionModule',
            }, {
                path: 'user',
                loadChildren: './user-analysis/user-analysis.module#UserAnalysisModule',
            }, {
                path: 'interface',
                loadChildren: './interface/interface.module#InterfaceModule',
            }, {
                path: '',
                redirectTo: 'multi',
                pathMatch: 'full',
            }],
    }];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
    })
], PagesRoutingModule);

//# sourceMappingURL=pages-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu__ = __webpack_require__("../../../../../src/app/pages/pages-menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagesComponent = (function () {
    function PagesComponent() {
        this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["a" /* MENU_ITEMS */];
    }
    return PagesComponent;
}());
PagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-pages',
        template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  ",
    })
], PagesComponent);

//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__echarts_echarts_module__ = __webpack_require__("../../../../../src/app/pages/echarts/echarts.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PAGES_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */],
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__pages_routing_module__["a" /* PagesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_4__echarts_echarts_module__["a" /* EchartsModule */],
        ],
        declarations: PAGES_COMPONENTS.slice(),
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map