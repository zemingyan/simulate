webpackJsonp(["terminal.module"],{

/***/ "../../../../../src/app/pages/terminal/brand/brand.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isShow\">\r\n  <div class=\"col-md-3\">\r\n    <nb-card>\r\n      <nb-card-header>移动设备品牌排名</nb-card-header>\r\n      <nb-card-body>\r\n        <div style=\"overflow-x: auto; overflow-y: auto; height: 456px;\">\r\n          <table height=\"auto\">\r\n            <tbody>\r\n            <tr *ngFor=\"let terminal of terminals\" (click)=\"onSelect(terminal)\"\r\n                [class.selected]=\"terminal ===  selectedTerminal\" class=\"dtr\">\r\n              <td class=\"dtd1\">\r\n                <span>{{terminal.name}}</span>\r\n              </td>\r\n              <td class=\"dtd2\">\r\n                <span class=\"tz\" [ngStyle]=\"{width: terminal.show+'%'}\" style=\"min-width: 1px;\"></span>\r\n              </td>\r\n              <td class=\"dtd3\">\r\n                <span class=\"dy\">{{terminal.average}}%</span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <nb-card>\r\n      <nb-card-header>{{name}}覆盖率变化趋势</nb-card-header>\r\n      <nb-card-body>\r\n        <div echarts [options]=\"options\" (chartInit)=\"chartInit($event)\" class=\"echart test\"></div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/terminal/brand/brand.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n/*\r\n.test {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.echart {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n*/\n.selected {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.heroes {\n  margin-top: 0;\n  margin-right: 0;\n  margin-left: 0;\n  margin-bottom: 2em;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n\n.heroes li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em; }\n\n.heroes li.selected:hover {\n  background-color: #bbd8dc !important;\n  color: white; }\n\n.heroes .text {\n  position: relative;\n  top: -3px; }\n\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding-top: 0.8em;\n  padding-right: 0.7em;\n  padding-left: 0.7em;\n  padding-bottom: 0;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px; }\n\n.drank {\n  height: 456px;\n  overflow-x: auto;\n  overflow-y: auto; }\n\ntd, th {\n  padding: 0; }\n\ntd, th {\n  display: table-cell;\n  vertical-align: inherit; }\n\n.tz {\n  height: 8px;\n  line-height: 30px;\n  display: block;\n  background-color: #5d72ec; }\n\ntr {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit; }\n\n.dtr:hover {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.dtr {\n  height: 28px;\n  font-size: 14px;\n  border-bottom: solid 1px #eeeeee;\n  border-spacing: 10px;\n  outline: none; }\n\n.dtd1 {\n  width: 110px;\n  max-width: 110px;\n  font-size: 100%;\n  padding-left: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.dtd2 {\n  position: relative;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: transparent;\n  width: 105px;\n  display: table-cell;\n  vertical-align: middle; }\n\n.dtd3 {\n  width: 70px;\n  max-width: 70px;\n  font-size: 100%;\n  padding-right: 20px; }\n\n.dy {\n  float: right !important;\n  margin-left: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/terminal/brand/brand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terminal__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminal_service__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrandComponent = (function () {
    function BrandComponent(terminalService) {
        var _this = this;
        this.options = {};
        this.terminals = __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* TERMINAL */];
        this.isShow = true;
        this.selectedTerminal = __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* TERMINAL */][0];
        this.name = this.selectedTerminal.name;
        terminalService.changeTitle('移动设备品牌');
        terminalService.getNotify().subscribe(function (x) {
            terminalService.getBrand(x).then(function (z) {
                _this.isShow = true;
                _this.options.xAxis[0].data = z['date'];
                _this.terminals = z['phoneBrandDTOS'];
                _this.onSelect(_this.terminals[0]);
            });
        });
        terminalService.getDateSubject().subscribe(function (x) {
            terminalService.getBrand(x).then(function (z) {
                _this.options.xAxis[0].data = z['date'];
                _this.terminals = z['phoneBrandDTOS'];
                console.log(z['phoneBrandDTOS']);
                console.log(_this.terminals);
                _this.onSelect(_this.terminals[0]);
            });
        });
    }
    BrandComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
    };
    BrandComponent.prototype.onSelect = function (terminal) {
        this.selectedTerminal = terminal;
        this.name = terminal.name;
        this.options.series[0].data = this.selectedTerminal.degree;
        this.mInstance.setOption(this.options);
    };
    BrandComponent.prototype.ngOnInit = function () {
        this.options = {
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0].name + '<br/>'
                        + params[0].seriesName + ' : ' + params[0].value + ' %<br/>';
                },
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2016-06', '2016-08', '2016-10', '2016-12', '2017-02', '2017-04', '2017-06'],
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                },
            ],
            series: [
                {
                    name: '用户规模:',
                    type: 'line',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                    data: this.selectedTerminal.degree,
                    itemStyle: {
                        normal: {
                            color: '#5d72ec',
                        },
                    },
                    lineStyle: {
                        normal: {
                            color: '#5d72ec',
                        },
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' },
                        ],
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' },
                        ],
                    },
                },
            ],
        };
    };
    return BrandComponent;
}());
BrandComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-brand',
        template: __webpack_require__("../../../../../src/app/pages/terminal/brand/brand.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/terminal/brand/brand.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__terminal_service__["a" /* TerminalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__terminal_service__["a" /* TerminalService */]) === "function" && _a || Object])
], BrandComponent);

var _a;
//# sourceMappingURL=brand.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/terminal/model/model.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isShow\">\r\n  <div class=\"col-md-3\">\r\n    <nb-card>\r\n      <nb-card-header>移动设备机型排名</nb-card-header>\r\n      <nb-card-body>\r\n        <div style=\"overflow-x: auto; overflow-y: auto; height: 456px;\">\r\n          <table height=\"auto\">\r\n            <tbody>\r\n            <tr *ngFor=\"let terminal of terminals\" (click)=\"onSelect(terminal)\"\r\n                [class.selected]=\"terminal ===  selectedTerminal\" class=\"dtr\">\r\n              <td class=\"dtd1\">\r\n                <span>{{terminal.name}}</span>\r\n              </td>\r\n              <td class=\"dtd2\">\r\n                <span class=\"tz\" [ngStyle]=\"{width: terminal.show+'%'}\" style=\"min-width: 1px;\"></span>\r\n              </td>\r\n              <td class=\"dtd3\">\r\n                <span class=\"dy\">{{terminal.average}}%</span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <nb-card>\r\n      <nb-card-header>{{name}}覆盖率变化趋势</nb-card-header>\r\n      <nb-card-body>\r\n        <div echarts [options]=\"options\" (chartInit)=\"chartInit($event)\" class=\"echart test\"></div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/terminal/model/model.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n/*\r\n.test {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.echart {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n*/\n.selected {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.heroes {\n  margin-top: 0;\n  margin-right: 0;\n  margin-left: 0;\n  margin-bottom: 2em;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n\n.heroes li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em; }\n\n.heroes li.selected:hover {\n  background-color: #bbd8dc !important;\n  color: white; }\n\n.heroes .text {\n  position: relative;\n  top: -3px; }\n\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding-top: 0.8em;\n  padding-right: 0.7em;\n  padding-left: 0.7em;\n  padding-bottom: 0;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px; }\n\n.drank {\n  height: 456px;\n  overflow: hidden;\n  overflow-x: hidden; }\n\ntd, th {\n  padding: 0; }\n\ntd, th {\n  display: table-cell;\n  vertical-align: inherit; }\n\n.tz {\n  height: 8px;\n  line-height: 30px;\n  display: block;\n  background-color: #5d72ec; }\n\ntr {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit; }\n\n.dtr:hover {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.dtr {\n  height: 28px;\n  font-size: 14px;\n  border-bottom: solid 1px #eeeeee;\n  border-spacing: 10px;\n  outline: none; }\n\n.dtd1 {\n  width: 110px;\n  max-width: 110px;\n  font-size: 100%;\n  padding-left: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.dtd2 {\n  position: relative;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: transparent;\n  width: 105px;\n  display: table-cell;\n  vertical-align: middle; }\n\n.dtd3 {\n  width: 70px;\n  max-width: 70px;\n  font-size: 100%;\n  padding-right: 20px; }\n\n.dy {\n  float: right !important;\n  margin-left: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/terminal/model/model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terminal__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminal_service__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelComponent = (function () {
    function ModelComponent(terminalService) {
        var _this = this;
        this.options = {};
        this.terminals = __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* TERMINAL */];
        this.isShow = true;
        this.selectedTerminal = __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* TERMINAL */][0];
        this.name = this.selectedTerminal.name;
        terminalService.changeTitle('移动设备机型');
        terminalService.getNotify().subscribe(function (x) {
            terminalService.getModel(x).then(function (z) {
                _this.isShow = true;
                _this.options.xAxis[0].data = z['date'];
                _this.terminals = z['phoneBrandDTOS'];
                _this.onSelect(_this.terminals[0]);
            });
        });
        terminalService.getDateSubject().subscribe(function (x) {
            terminalService.getModel(x).then(function (z) {
                _this.options.xAxis[0].data = z['date'];
                _this.terminals = z['phoneBrandDTOS'];
                console.log(z['phoneBrandDTOS']);
                console.log(_this.terminals);
                _this.onSelect(_this.terminals[0]);
            });
        });
    }
    ModelComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
    };
    ModelComponent.prototype.onSelect = function (terminal) {
        this.selectedTerminal = terminal;
        this.name = terminal.name;
        this.options.series[0].data = this.selectedTerminal.degree;
        this.mInstance.setOption(this.options);
    };
    ModelComponent.prototype.ngOnInit = function () {
        this.options = {
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0].name + '<br/>'
                        + params[0].seriesName + ' : ' + params[0].value + ' %<br/>';
                },
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2016-06', '2016-08', '2016-10', '2016-12', '2017-02', '2017-04', '2017-06'],
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                },
            ],
            series: [
                {
                    name: '用户规模:',
                    type: 'line',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                    data: this.selectedTerminal.degree,
                    itemStyle: {
                        normal: {
                            color: '#5d72ec',
                        },
                    },
                    lineStyle: {
                        normal: {
                            color: '#5d72ec',
                        },
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' },
                        ],
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' },
                        ],
                    },
                },
            ],
        };
    };
    return ModelComponent;
}());
ModelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-model',
        template: __webpack_require__("../../../../../src/app/pages/terminal/model/model.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/terminal/model/model.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__terminal_service__["a" /* TerminalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__terminal_service__["a" /* TerminalService */]) === "function" && _a || Object])
], ModelComponent);

var _a;
//# sourceMappingURL=model.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/terminal/network/network.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isShow\">\r\n  <div class=\"col-md-3\">\r\n    <nb-card>\r\n      <nb-card-header>移动设备联网排名</nb-card-header>\r\n      <nb-card-body>\r\n        <div style=\"overflow-x: auto; overflow-y: auto; height: 456px;\">\r\n          <table height=\"auto\">\r\n            <tbody>\r\n            <tr *ngFor=\"let terminal of terminals\" (click)=\"onSelect(terminal)\"\r\n                [class.selected]=\"terminal ===  selectedTerminal\" class=\"dtr\">\r\n              <td class=\"dtd1\">\r\n                <span>{{terminal.name}}</span>\r\n              </td>\r\n              <td class=\"dtd2\">\r\n                <span class=\"tz\" [ngStyle]=\"{width: terminal.show+'%'}\" style=\"min-width: 1px;\"></span>\r\n              </td>\r\n              <td class=\"dtd3\">\r\n                <span class=\"dy\">{{terminal.average}}%</span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <nb-card>\r\n      <nb-card-header>{{name}}覆盖率变化趋势</nb-card-header>\r\n      <nb-card-body>\r\n        <div echarts [options]=\"options\" (chartInit)=\"chartInit($event)\" class=\"echart test\"></div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/terminal/network/network.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n/*\r\n.test {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.echart {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n*/\n.selected {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.heroes {\n  margin-top: 0;\n  margin-right: 0;\n  margin-left: 0;\n  margin-bottom: 2em;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n\n.heroes li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em; }\n\n.heroes li.selected:hover {\n  background-color: #bbd8dc !important;\n  color: white; }\n\n.heroes .text {\n  position: relative;\n  top: -3px; }\n\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding-top: 0.8em;\n  padding-right: 0.7em;\n  padding-left: 0.7em;\n  padding-bottom: 0;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px; }\n\n.drank {\n  height: 456px;\n  overflow: hidden;\n  overflow-x: hidden; }\n\ntd, th {\n  padding: 0; }\n\ntd, th {\n  display: table-cell;\n  vertical-align: inherit; }\n\n.tz {\n  height: 8px;\n  line-height: 30px;\n  display: block;\n  background-color: #5d72ec; }\n\ntr {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit; }\n\n.dtr:hover {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.dtr {\n  height: 28px;\n  font-size: 14px;\n  border-bottom: solid 1px #eeeeee;\n  border-spacing: 10px;\n  outline: none; }\n\n.dtd1 {\n  width: 110px;\n  max-width: 110px;\n  font-size: 100%;\n  padding-left: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.dtd2 {\n  position: relative;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: transparent;\n  width: 105px;\n  display: table-cell;\n  vertical-align: middle; }\n\n.dtd3 {\n  width: 70px;\n  max-width: 70px;\n  font-size: 100%;\n  padding-right: 20px; }\n\n.dy {\n  float: right !important;\n  margin-left: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/terminal/network/network.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terminal__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminal_service__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkComponent = (function () {
    function NetworkComponent(terminalService) {
        var _this = this;
        this.options = {};
        this.terminals = __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* TERMINAL */];
        this.isShow = true;
        this.selectedTerminal = __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* TERMINAL */][0];
        this.name = this.selectedTerminal.name;
        terminalService.changeTitle('移动设备联网状态');
        terminalService.getNotify().subscribe(function (x) {
            terminalService.getNetwork(x).then(function (z) {
                _this.isShow = true;
                _this.options.xAxis[0].data = z['date'];
                _this.terminals = z['phoneBrandDTOS'];
                _this.onSelect(_this.terminals[0]);
            });
        });
        terminalService.getDateSubject().subscribe(function (x) {
            terminalService.getNetwork(x).then(function (z) {
                _this.options.xAxis[0].data = z['date'];
                _this.terminals = z['phoneBrandDTOS'];
                console.log(z['phoneBrandDTOS']);
                console.log(_this.terminals);
                _this.onSelect(_this.terminals[0]);
            });
        });
    }
    NetworkComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
    };
    NetworkComponent.prototype.onSelect = function (terminal) {
        this.selectedTerminal = terminal;
        this.name = terminal.name;
        this.options.series[0].data = this.selectedTerminal.degree;
        this.mInstance.setOption(this.options);
    };
    NetworkComponent.prototype.ngOnInit = function () {
        this.options = {
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0].name + '<br/>'
                        + params[0].seriesName + ' : ' + params[0].value + ' %<br/>';
                },
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2016-06', '2016-08', '2016-10', '2016-12', '2017-02', '2017-04', '2017-06'],
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                },
            ],
            series: [
                {
                    name: '用户规模:',
                    type: 'line',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                    data: this.selectedTerminal.degree,
                    itemStyle: {
                        normal: {
                            color: '#5d72ec',
                        },
                    },
                    lineStyle: {
                        normal: {
                            color: '#5d72ec',
                        },
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' },
                        ],
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' },
                        ],
                    },
                },
            ],
        };
    };
    return NetworkComponent;
}());
NetworkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-nerwork',
        template: __webpack_require__("../../../../../src/app/pages/terminal/network/network.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/terminal/network/network.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__terminal_service__["a" /* TerminalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__terminal_service__["a" /* TerminalService */]) === "function" && _a || Object])
], NetworkComponent);

var _a;
//# sourceMappingURL=network.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/terminal/resolution/resolution.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isShow\">\r\n  <div class=\"col-md-3\">\r\n    <nb-card>\r\n      <nb-card-header>移动设备分辨率排名</nb-card-header>\r\n      <nb-card-body>\r\n        <div style=\"overflow-x: auto; overflow-y: auto; height: 456px;\">\r\n          <table height=\"auto\">\r\n            <tbody>\r\n            <tr *ngFor=\"let terminal of terminals\" (click)=\"onSelect(terminal)\"\r\n                [class.selected]=\"terminal ===  selectedTerminal\" class=\"dtr\">\r\n              <td class=\"dtd1\">\r\n                <span>{{terminal.name}}</span>\r\n              </td>\r\n              <td class=\"dtd2\">\r\n                <span class=\"tz\" [ngStyle]=\"{width: terminal.show+'%'}\" style=\"min-width: 1px;\"></span>\r\n              </td>\r\n              <td class=\"dtd3\">\r\n                <span class=\"dy\">{{terminal.average}}%</span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <nb-card>\r\n      <nb-card-header>{{name}}覆盖率变化趋势</nb-card-header>\r\n      <nb-card-body>\r\n        <div echarts [options]=\"options\" (chartInit)=\"chartInit($event)\" class=\"echart test\"></div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/terminal/resolution/resolution.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n/*\r\n.test {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.echart {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n*/\n.selected {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.heroes {\n  margin-top: 0;\n  margin-right: 0;\n  margin-left: 0;\n  margin-bottom: 2em;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n\n.heroes li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em; }\n\n.heroes li.selected:hover {\n  background-color: #bbd8dc !important;\n  color: white; }\n\n.heroes .text {\n  position: relative;\n  top: -3px; }\n\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding-top: 0.8em;\n  padding-right: 0.7em;\n  padding-left: 0.7em;\n  padding-bottom: 0;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px; }\n\n.drank {\n  height: 456px;\n  overflow: hidden;\n  overflow-x: hidden; }\n\ntd, th {\n  padding: 0; }\n\ntd, th {\n  display: table-cell;\n  vertical-align: inherit; }\n\n.tz {\n  height: 8px;\n  line-height: 30px;\n  display: block;\n  background-color: #5d72ec; }\n\ntr {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit; }\n\n.dtr:hover {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.dtr {\n  height: 28px;\n  font-size: 14px;\n  border-bottom: solid 1px #eeeeee;\n  border-spacing: 10px;\n  outline: none; }\n\n.dtd1 {\n  width: 110px;\n  max-width: 110px;\n  font-size: 100%;\n  padding-left: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.dtd2 {\n  position: relative;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: transparent;\n  width: 105px;\n  display: table-cell;\n  vertical-align: middle; }\n\n.dtd3 {\n  width: 70px;\n  max-width: 70px;\n  font-size: 100%;\n  padding-right: 20px; }\n\n.dy {\n  float: right !important;\n  margin-left: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/terminal/resolution/resolution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolutionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terminal__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminal_service__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResolutionComponent = (function () {
    function ResolutionComponent(terminalService) {
        var _this = this;
        this.options = {};
        this.terminals = __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* TERMINAL */];
        this.isShow = true;
        this.selectedTerminal = __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* TERMINAL */][0];
        this.name = this.selectedTerminal.name;
        terminalService.changeTitle('移动设备分辨率');
        terminalService.getNotify().subscribe(function (x) {
            terminalService.getResolution(x).then(function (z) {
                _this.isShow = true;
                _this.options.xAxis[0].data = z['date'];
                _this.terminals = z['phoneBrandDTOS'];
                _this.onSelect(_this.terminals[0]);
            });
        });
        terminalService.getDateSubject().subscribe(function (x) {
            terminalService.getResolution(x).then(function (z) {
                _this.options.xAxis[0].data = z['date'];
                _this.terminals = z['phoneBrandDTOS'];
                console.log(z['phoneBrandDTOS']);
                console.log(_this.terminals);
                _this.onSelect(_this.terminals[0]);
            });
        });
    }
    ResolutionComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
    };
    ResolutionComponent.prototype.onSelect = function (terminal) {
        this.selectedTerminal = terminal;
        this.name = terminal.name;
        this.options.series[0].data = this.selectedTerminal.degree;
        this.mInstance.setOption(this.options);
    };
    ResolutionComponent.prototype.ngOnInit = function () {
        this.options = {
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0].name + '<br/>'
                        + params[0].seriesName + ' : ' + params[0].value + ' %<br/>';
                },
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2016-06', '2016-08', '2016-10', '2016-12', '2017-02', '2017-04', '2017-06'],
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                },
            ],
            series: [
                {
                    name: '用户规模:',
                    type: 'line',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                    data: this.selectedTerminal.degree,
                    itemStyle: {
                        normal: {
                            color: '#5d72ec',
                        },
                    },
                    lineStyle: {
                        normal: {
                            color: '#5d72ec',
                        },
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' },
                        ],
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' },
                        ],
                    },
                },
            ],
        };
    };
    return ResolutionComponent;
}());
ResolutionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-resolution',
        template: __webpack_require__("../../../../../src/app/pages/terminal/resolution/resolution.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/terminal/resolution/resolution.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__terminal_service__["a" /* TerminalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__terminal_service__["a" /* TerminalService */]) === "function" && _a || Object])
], ResolutionComponent);

var _a;
//# sourceMappingURL=resolution.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/terminal/seller/seller.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isShow\">\r\n  <div class=\"col-md-3\">\r\n    <nb-card>\r\n      <nb-card-header>移动设备运营商排名</nb-card-header>\r\n      <nb-card-body>\r\n        <div style=\"overflow-x: auto; overflow-y: auto; height: 456px;\">\r\n          <table height=\"auto\">\r\n            <tbody>\r\n            <tr *ngFor=\"let terminal of terminals\" (click)=\"onSelect(terminal)\"\r\n                [class.selected]=\"terminal ===  selectedTerminal\" class=\"dtr\">\r\n              <td class=\"dtd1\">\r\n                <span>{{terminal.name}}</span>\r\n              </td>\r\n              <td class=\"dtd2\">\r\n                <span class=\"tz\" [ngStyle]=\"{width: terminal.show+'%'}\" style=\"min-width: 1px;\"></span>\r\n              </td>\r\n              <td class=\"dtd3\">\r\n                <span class=\"dy\">{{terminal.average}}%</span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <nb-card>\r\n      <nb-card-header>{{name}}覆盖率变化趋势</nb-card-header>\r\n      <nb-card-body>\r\n        <div echarts [options]=\"options\" (chartInit)=\"chartInit($event)\" class=\"echart test\"></div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/terminal/seller/seller.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n/*\r\n.test {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.echart {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n*/\n.selected {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.heroes {\n  margin-top: 0;\n  margin-right: 0;\n  margin-left: 0;\n  margin-bottom: 2em;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n\n.heroes li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em; }\n\n.heroes li.selected:hover {\n  background-color: #bbd8dc !important;\n  color: white; }\n\n.heroes .text {\n  position: relative;\n  top: -3px; }\n\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding-top: 0.8em;\n  padding-right: 0.7em;\n  padding-left: 0.7em;\n  padding-bottom: 0;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px; }\n\n.drank {\n  height: 456px;\n  overflow: hidden;\n  overflow-x: hidden; }\n\ntd, th {\n  padding: 0; }\n\ntd, th {\n  display: table-cell;\n  vertical-align: inherit; }\n\n.tz {\n  height: 8px;\n  line-height: 30px;\n  display: block;\n  background-color: #5d72ec; }\n\ntr {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit; }\n\n.dtr:hover {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.dtr {\n  height: 28px;\n  font-size: 14px;\n  border-bottom: solid 1px #eeeeee;\n  border-spacing: 10px;\n  outline: none; }\n\n.dtd1 {\n  width: 110px;\n  max-width: 110px;\n  font-size: 100%;\n  padding-left: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.dtd2 {\n  position: relative;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: transparent;\n  width: 105px;\n  display: table-cell;\n  vertical-align: middle; }\n\n.dtd3 {\n  width: 70px;\n  max-width: 70px;\n  font-size: 100%;\n  padding-right: 20px; }\n\n.dy {\n  float: right !important;\n  margin-left: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/terminal/seller/seller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terminal__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminal_service__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SellerComponent = (function () {
    function SellerComponent(terminalService) {
        var _this = this;
        this.options = {};
        this.terminals = __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* TERMINAL */];
        this.isShow = true;
        this.selectedTerminal = __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* TERMINAL */][0];
        this.name = this.selectedTerminal.name;
        terminalService.changeTitle('移动设备运行商');
        terminalService.getNotify().subscribe(function (x) {
            terminalService.getSeller(x).then(function (z) {
                _this.isShow = true;
                _this.options.xAxis[0].data = z['date'];
                _this.terminals = z['phoneBrandDTOS'];
                _this.onSelect(_this.terminals[0]);
            });
        });
        terminalService.getDateSubject().subscribe(function (x) {
            terminalService.getSeller(x).then(function (z) {
                _this.options.xAxis[0].data = z['date'];
                _this.terminals = z['phoneBrandDTOS'];
                console.log(z['phoneBrandDTOS']);
                console.log(_this.terminals);
                _this.onSelect(_this.terminals[0]);
            });
        });
    }
    SellerComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
    };
    SellerComponent.prototype.onSelect = function (terminal) {
        this.selectedTerminal = terminal;
        this.name = terminal.name;
        this.options.series[0].data = this.selectedTerminal.degree;
        this.mInstance.setOption(this.options);
    };
    SellerComponent.prototype.ngOnInit = function () {
        this.options = {
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0].name + '<br/>'
                        + params[0].seriesName + ' : ' + params[0].value + ' %<br/>';
                },
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2016-06', '2016-08', '2016-10', '2016-12', '2017-02', '2017-04', '2017-06'],
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                },
            ],
            series: [
                {
                    name: '用户规模:',
                    type: 'line',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                    data: this.selectedTerminal.degree,
                    itemStyle: {
                        normal: {
                            color: '#5d72ec',
                        },
                    },
                    lineStyle: {
                        normal: {
                            color: '#5d72ec',
                        },
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' },
                        ],
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' },
                        ],
                    },
                },
            ],
        };
    };
    return SellerComponent;
}());
SellerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-seller',
        template: __webpack_require__("../../../../../src/app/pages/terminal/seller/seller.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/terminal/seller/seller.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__terminal_service__["a" /* TerminalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__terminal_service__["a" /* TerminalService */]) === "function" && _a || Object])
], SellerComponent);

var _a;
//# sourceMappingURL=seller.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/terminal/terminal-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminal_component__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__version_version_component__ = __webpack_require__("../../../../../src/app/pages/terminal/version/version.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network_network_component__ = __webpack_require__("../../../../../src/app/pages/terminal/network/network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_model_component__ = __webpack_require__("../../../../../src/app/pages/terminal/model/model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resolution_resolution_component__ = __webpack_require__("../../../../../src/app/pages/terminal/resolution/resolution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__brand_brand_component__ = __webpack_require__("../../../../../src/app/pages/terminal/brand/brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__seller_seller_component__ = __webpack_require__("../../../../../src/app/pages/terminal/seller/seller.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__terminal_component__["a" /* TerminalComponent */],
        children: [
            {
                path: 'version',
                component: __WEBPACK_IMPORTED_MODULE_3__version_version_component__["a" /* VersionComponent */],
            },
            {
                path: 'network',
                component: __WEBPACK_IMPORTED_MODULE_4__network_network_component__["a" /* NetworkComponent */],
            },
            {
                path: 'model',
                component: __WEBPACK_IMPORTED_MODULE_5__model_model_component__["a" /* ModelComponent */],
            },
            {
                path: 'brand',
                component: __WEBPACK_IMPORTED_MODULE_7__brand_brand_component__["a" /* BrandComponent */],
            },
            {
                path: 'resolution',
                component: __WEBPACK_IMPORTED_MODULE_6__resolution_resolution_component__["a" /* ResolutionComponent */],
            },
            {
                path: 'seller',
                component: __WEBPACK_IMPORTED_MODULE_8__seller_seller_component__["a" /* SellerComponent */],
            }
        ],
    }];
var TerminalRoutingModule = (function () {
    function TerminalRoutingModule() {
    }
    return TerminalRoutingModule;
}());
TerminalRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], TerminalRoutingModule);

//# sourceMappingURL=terminal-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/terminal/terminal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-right: 15px\">\r\n  <div class=\"col-md-12 bg\" style=\"padding-left: 0\">\r\n    <h4 style=\"float: left;\">{{title}}</h4>\r\n    <div style=\"float: right\">\r\n      <select [ngModel]=\"selected\" (ngModelChange)=\"selected=$event;handle(selected)\">\r\n        <option *ngFor=\"let date of dates\" [value]='date'>{{date}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/terminal/terminal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\n  font-size: 1rem;\n  background: #ffffff;\n  margin-left: 15px;\n  margin-bottom: 1.5rem;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  font-weight: 400; }\n\n.bg h4 {\n  margin-bottom: 0;\n  font-size: 20px;\n  color: #000000;\n  padding: 1.25rem; }\n\n.bg div {\n  padding: 1.25rem; }\n\nselect {\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/down.svg") + ") no-repeat scroll 62px 2px transparent;\n  padding-right: 22px;\n  border: none; }\n\nselect:focus {\n  outline: none; }\n\nselect::-ms-expand {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/terminal/terminal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terminal_service__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TerminalComponent = (function () {
    function TerminalComponent(terminalService) {
        var _this = this;
        this.title = '终端分析';
        this.dates = [
            '2018-03', '2018-02', '2018-01', '2017-12', '2016-11', '2017-10', '2017-09', '2017-08', '2017-07',
        ];
        this.terminalService = terminalService;
        terminalService.getTitleSubject().subscribe(function (title) { return _this.title = title; });
        terminalService.getDates().then(function (x) {
            _this.dates = x;
            console.log(_this.dates);
        });
    }
    TerminalComponent.prototype.handle = function (s) {
        this.terminalService.changeDate(s);
    };
    return TerminalComponent;
}());
TerminalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-terminal',
        template: __webpack_require__("../../../../../src/app/pages/terminal/terminal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/terminal/terminal.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__terminal_service__["a" /* TerminalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__terminal_service__["a" /* TerminalService */]) === "function" && _a || Object])
], TerminalComponent);

var _a;
//# sourceMappingURL=terminal.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/terminal/terminal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalModule", function() { return TerminalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminal_component__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__version_version_component__ = __webpack_require__("../../../../../src/app/pages/terminal/version/version.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terminal_routing_module__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__network_network_component__ = __webpack_require__("../../../../../src/app/pages/terminal/network/network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_model_component__ = __webpack_require__("../../../../../src/app/pages/terminal/model/model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resolution_resolution_component__ = __webpack_require__("../../../../../src/app/pages/terminal/resolution/resolution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__brand_brand_component__ = __webpack_require__("../../../../../src/app/pages/terminal/brand/brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__seller_seller_component__ = __webpack_require__("../../../../../src/app/pages/terminal/seller/seller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__terminal_service__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__terminal_component__["a" /* TerminalComponent */],
    __WEBPACK_IMPORTED_MODULE_3__version_version_component__["a" /* VersionComponent */],
    __WEBPACK_IMPORTED_MODULE_6__network_network_component__["a" /* NetworkComponent */],
    __WEBPACK_IMPORTED_MODULE_9__brand_brand_component__["a" /* BrandComponent */],
    __WEBPACK_IMPORTED_MODULE_7__model_model_component__["a" /* ModelComponent */],
    __WEBPACK_IMPORTED_MODULE_8__resolution_resolution_component__["a" /* ResolutionComponent */],
    __WEBPACK_IMPORTED_MODULE_10__seller_seller_component__["a" /* SellerComponent */],
];
var TerminalModule = (function () {
    function TerminalModule() {
    }
    return TerminalModule;
}());
TerminalModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_4__terminal_routing_module__["a" /* TerminalRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_echarts__["a" /* NgxEchartsModule */],
        ],
        declarations: routedComponents.slice(),
        providers: [__WEBPACK_IMPORTED_MODULE_11__terminal_service__["a" /* TerminalService */]],
    })
], TerminalModule);

//# sourceMappingURL=terminal.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/terminal/terminal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TerminalService = (function () {
    function TerminalService(http) {
        var _this = this;
        this.http = http;
        this.BaseUrl = 'http://10.0.0.30:8000/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.notify = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (x) {
            _this.getDates().then(function (z) {
                x.next(z[0]);
                x.complete();
            });
        });
        this.dateSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.titleSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    TerminalService.prototype.getDates = function () {
        var url = this.BaseUrl + 'listAllMonths';
        return this.http.get(url).toPromise();
    };
    TerminalService.prototype.getNotify = function () {
        return this.notify;
    };
    TerminalService.prototype.getDateSubject = function () {
        return this.dateSubject;
    };
    TerminalService.prototype.getTitleSubject = function () {
        return this.titleSubject;
    };
    TerminalService.prototype.changeDate = function (date) {
        this.dateSubject.next(date);
    };
    TerminalService.prototype.changeTitle = function (title) {
        this.titleSubject.next(title);
    };
    TerminalService.prototype.getBrand = function (endTime) {
        var url = this.BaseUrl + 'getOneYearHbaseVO';
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]().set('end', endTime);
        var options = { params: params };
        return this.http.get(url, options).toPromise();
    };
    TerminalService.prototype.getModel = function (endTime) {
        var url = this.BaseUrl + 'getOneYearHbaseVO';
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]().set('end', endTime).append('column', '1');
        var options = { params: params };
        return this.http.get(url, options).toPromise();
    };
    TerminalService.prototype.getVersion = function (endTime) {
        var url = this.BaseUrl + 'getOneYearHbaseVO';
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]().set('end', endTime).append('column', '2');
        var options = { params: params };
        return this.http.get(url, options).toPromise();
    };
    TerminalService.prototype.getSeller = function (endTime) {
        var url = this.BaseUrl + 'getOneYearHbaseVO';
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]().set('end', endTime).append('column', '3');
        var options = { params: params };
        return this.http.get(url, options).toPromise();
    };
    TerminalService.prototype.getNetwork = function (endTime) {
        var url = this.BaseUrl + 'getOneYearHbaseVO';
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]().set('end', endTime).append('column', '4');
        var options = { params: params };
        return this.http.get(url, options).toPromise();
    };
    TerminalService.prototype.getResolution = function (endTime) {
        var url = this.BaseUrl + 'getOneYearHbaseVO';
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]().set('end', endTime).append('column', '5');
        var options = { params: params };
        return this.http.get(url, options).toPromise();
    };
    return TerminalService;
}());
TerminalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], TerminalService);

var _a;
//# sourceMappingURL=terminal.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/terminal/terminal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Terminal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TERMINAL; });
var Terminal = (function () {
    function Terminal() {
    }
    return Terminal;
}());

var TERMINAL = [
    { name: '华为', show: '21', average: '21', degree: [2, 12, 18, 9, 12, 8, 10] },
    { name: '三星', show: '41', average: '41', degree: [2, 1, 18, 13, 12, 8, 10] },
    { name: 'OPPO', show: '51', average: '51', degree: [2, 11, 15, 13, 12, 8, 10] },
    { name: '小米', show: '21', average: '21', degree: [2, 11, 15, 13, 12, 8, 10] },
    { name: '金立', show: '91', average: '91', degree: [2, 11, 15, 13, 12, 8, 10] },
    { name: '联想', show: '21', average: '21', degree: [2, 11, 12, 13, 12, 8, 10] },
    { name: '酷派', show: '81', average: '81', degree: [2, 11, 15, 13, 12, 8, 10] },
    { name: '乐视', show: '21', average: '21', degree: [2, 11, 15, 13, 12, 8, -1] },
    { name: '魅族', show: '24.5', average: '24.5', degree: [2, 11, 15, 13, 12, 8, 10] },
    { name: '海信', show: '22', average: '22', degree: [2, 11, 15, 13, 12, 8, 10] },
];
//# sourceMappingURL=terminal.js.map

/***/ }),

/***/ "../../../../../src/app/pages/terminal/version/version.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isShow\">\r\n  <div class=\"col-md-3\">\r\n    <nb-card>\r\n      <nb-card-header>移动设备系统排名</nb-card-header>\r\n      <nb-card-body>\r\n        <div style=\"overflow-x: auto; overflow-y: auto; height: 456px;\">\r\n          <table height=\"auto\">\r\n            <tbody>\r\n            <tr *ngFor=\"let terminal of terminals\" (click)=\"onSelect(terminal)\"\r\n                [class.selected]=\"terminal ===  selectedTerminal\" class=\"dtr\">\r\n              <td class=\"dtd1\">\r\n                <span>{{terminal.name}}</span>\r\n              </td>\r\n              <td class=\"dtd2\">\r\n                <span class=\"tz\" [ngStyle]=\"{width: terminal.show+'%'}\" style=\"min-width: 1px;\"></span>\r\n              </td>\r\n              <td class=\"dtd3\">\r\n                <span class=\"dy\">{{terminal.average}}%</span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <nb-card>\r\n      <nb-card-header>{{name}}覆盖率变化趋势</nb-card-header>\r\n      <nb-card-body>\r\n        <div echarts [options]=\"options\" (chartInit)=\"chartInit($event)\" class=\"echart test\"></div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/terminal/version/version.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n/*\r\n.test {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.echart {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n*/\n.selected {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.heroes {\n  margin-top: 0;\n  margin-right: 0;\n  margin-left: 0;\n  margin-bottom: 2em;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n\n.heroes li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em; }\n\n.heroes li.selected:hover {\n  background-color: #bbd8dc !important;\n  color: white; }\n\n.heroes .text {\n  position: relative;\n  top: -3px; }\n\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding-top: 0.8em;\n  padding-right: 0.7em;\n  padding-left: 0.7em;\n  padding-bottom: 0;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px; }\n\n.drank {\n  height: 456px;\n  overflow: hidden;\n  overflow-x: hidden; }\n\ntd, th {\n  padding: 0; }\n\ntd, th {\n  display: table-cell;\n  vertical-align: inherit; }\n\n.tz {\n  height: 8px;\n  line-height: 30px;\n  display: block;\n  background-color: #5d72ec; }\n\ntr {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit; }\n\n.dtr:hover {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.dtr {\n  height: 28px;\n  font-size: 14px;\n  border-bottom: solid 1px #eeeeee;\n  border-spacing: 10px;\n  outline: none; }\n\n.dtd1 {\n  width: 110px;\n  max-width: 110px;\n  font-size: 100%;\n  padding-left: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.dtd2 {\n  position: relative;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: transparent;\n  width: 105px;\n  display: table-cell;\n  vertical-align: middle; }\n\n.dtd3 {\n  width: 70px;\n  max-width: 70px;\n  font-size: 100%;\n  padding-right: 20px; }\n\n.dy {\n  float: right !important;\n  margin-left: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/terminal/version/version.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terminal__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminal_service__ = __webpack_require__("../../../../../src/app/pages/terminal/terminal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VersionComponent = (function () {
    function VersionComponent(terminalService) {
        var _this = this;
        this.options = {};
        this.terminals = __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* TERMINAL */];
        this.isShow = true;
        this.selectedTerminal = __WEBPACK_IMPORTED_MODULE_1__terminal__["a" /* TERMINAL */][0];
        this.name = this.selectedTerminal.name;
        terminalService.changeTitle('Android系统版本');
        terminalService.getNotify().subscribe(function (x) {
            terminalService.getVersion(x).then(function (z) {
                _this.isShow = true;
                _this.options.xAxis[0].data = z['date'];
                _this.terminals = z['phoneBrandDTOS'];
                _this.onSelect(_this.terminals[0]);
            });
        });
        terminalService.getDateSubject().subscribe(function (x) {
            terminalService.getVersion(x).then(function (z) {
                _this.options.xAxis[0].data = z['date'];
                _this.terminals = z['phoneBrandDTOS'];
                console.log(z['phoneBrandDTOS']);
                console.log(_this.terminals);
                _this.onSelect(_this.terminals[0]);
            });
        });
    }
    VersionComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
    };
    VersionComponent.prototype.onSelect = function (terminal) {
        this.selectedTerminal = terminal;
        this.name = terminal.name;
        this.options.series[0].data = this.selectedTerminal.degree;
        this.mInstance.setOption(this.options);
    };
    VersionComponent.prototype.ngOnInit = function () {
        this.options = {
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0].name + '<br/>'
                        + params[0].seriesName + ' : ' + params[0].value + ' %<br/>';
                },
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2016-06', '2016-08', '2016-10', '2016-12', '2017-02', '2017-04', '2017-06'],
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                },
            ],
            series: [
                {
                    name: '用户规模:',
                    type: 'line',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                    data: this.selectedTerminal.degree,
                    itemStyle: {
                        normal: {
                            color: '#5d72ec',
                        },
                    },
                    lineStyle: {
                        normal: {
                            color: '#5d72ec',
                        },
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' },
                        ],
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' },
                        ],
                    },
                },
            ],
        };
    };
    return VersionComponent;
}());
VersionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-version',
        template: __webpack_require__("../../../../../src/app/pages/terminal/version/version.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/terminal/version/version.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__terminal_service__["a" /* TerminalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__terminal_service__["a" /* TerminalService */]) === "function" && _a || Object])
], VersionComponent);

var _a;
//# sourceMappingURL=version.component.js.map

/***/ })

});
//# sourceMappingURL=terminal.module.chunk.js.map