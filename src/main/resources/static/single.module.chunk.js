webpackJsonp(["single.module"],{

/***/ "../../../../../src/app/pages/single/application/application.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>\r\n    <div class=\"summary-wrapper summary-wrapper-data-link\">\r\n      <div id=\"Summary\" class=\"summary-container\">\r\n        <table class=\"summary data-link\">\r\n          <tbody>\r\n          <tr>\r\n            <td data-id=\"new_user_count\" data-idx=\"0\" *ngFor=\"let user of users\" (click)=\"onSelect(user)\"\r\n                [class.selected]=\"user === selectedUser\">\r\n              <div class=\"summary-item\"><span class=\"text\">{{user.name}}</span><span class=\"value\">{{user.data}}</span>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div echarts [options]=\"options\" theme=\"light\" class=\"echart test\"></div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<nb-card>\r\n  <nb-card-header>\r\n    版本应用情况分析指标说明\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/single/application/application.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\nnb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.bg {\n  font-size: 1rem;\n  background: #ffffff;\n  margin-left: 15px;\n  margin-bottom: 1.5rem;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  font-weight: 400;\n  padding: 1.5rem 1rem; }\n\n.bg h4 {\n  margin-bottom: 0;\n  font-size: 20px;\n  color: #000000;\n  padding: 0 1rem;\n  padding-bottom: 0.5rem; }\n\n.bg div {\n  padding-left: 1rem;\n  padding-top: 0; }\n\ntable, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit; }\n\n.summary-wrapper {\n  position: relative;\n  min-height: 100px;\n  padding: 1.25rem; }\n\n.summary-wrapper .summary-container {\n  overflow: auto;\n  padding: 20px 0; }\n\n.summary-wrapper .summary-container {\n  padding: 0;\n  overflow: hidden;\n  position: relative; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntable.summary {\n  table-layout: fixed;\n  width: 100%; }\n\ntable.summary {\n  border-collapse: separate; }\n\n.summary-wrapper .summary-container .summary {\n  width: 100%;\n  margin-left: 0;\n  table-layout: fixed; }\n\n.summary-wrapper .summary-container .summary td {\n  cursor: default;\n  border-right: none;\n  padding: 0;\n  width: 156px;\n  text-align: center;\n  vertical-align: center; }\n\n.summary-wrapper .summary-container .summary.data-link td, .summary-wrapper .summary-container .summary.data-link td .summary-item span {\n  cursor: pointer; }\n\n.summary-wrapper .summary-container .summary td .summary-item {\n  height: 100%;\n  margin-right: 10px;\n  border-top: 2px solid transparent; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  text-align: left;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.summary-wrapper .summary-container .summary td .summary-item span:first-child {\n  padding-top: 25px; }\n\n.summary-wrapper .summary-container .summary td .summary-item span.text {\n  font-size: 12px;\n  color: #7f8392; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center; }\n\n.selected {\n  border-top: 2px solid #396fff; }\n  .selected .text {\n    color: #396fff !important; }\n  .selected .value {\n    color: #396fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/single/application/application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/pages/single/application/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__single_table_service__ = __webpack_require__("../../../../../src/app/pages/single/single-table.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApplicationComponent = (function () {
    function ApplicationComponent(service, singleService) {
        this.service = service;
        this.options = {};
        this.users = __WEBPACK_IMPORTED_MODULE_3__user__["a" /* USERS */];
        this.selectedUser = __WEBPACK_IMPORTED_MODULE_3__user__["a" /* USERS */][0];
        this.settings = {
            actions: false,
            hideSubHeader: true,
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                },
                firstName: {
                    title: '日期',
                    type: 'string',
                },
                lastName: {
                    title: '启动用户',
                    type: 'number',
                },
                username: {
                    title: '日活跃度',
                    type: 'string',
                },
                email: {
                    title: '周活跃用户',
                    type: 'number',
                },
                age: {
                    title: '周活跃度',
                    type: 'string',
                },
                mon: {
                    title: '月活跃用户',
                    type: 'number',
                },
                month: {
                    title: '月活跃度',
                    type: 'string',
                },
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        var data = this.service.getData();
        this.source.load(data);
    }
    ApplicationComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    ApplicationComponent.prototype.ngOnInit = function () {
        this.options = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)',
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['版本2.1', '版本2.2', '版本2.3', '版本2.4', '版本2.5', '版本2.6', '版本2.7', '版本2.8', '版本2.9', '版本2.10'],
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                        normal: {
                            position: 'inner',
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    data: [
                        { value: 335, name: '版本2.1', selected: true },
                        { value: 679, name: '版本2.2' },
                        { value: 1548, name: '版本2.3' },
                    ],
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center',
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0,
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33,
                                },
                                per: {
                                    /* color: '#eee',*/
                                    /*backgroundColor: '#334455',*/
                                    padding: [2, 4],
                                    borderRadius: 2,
                                },
                            },
                        },
                    },
                    data: [
                        { value: 335, name: '版本2.1' },
                        { value: 310, name: '版本2.2' },
                        { value: 234, name: '版本2.3' },
                        { value: 135, name: '版本2.4' },
                        { value: 1048, name: '版本2.5' },
                        { value: 251, name: '版本2.6' },
                        { value: 147, name: '版本2.7' },
                        { value: 102, name: '版本2.8' },
                    ],
                },
            ],
        };
    };
    return ApplicationComponent;
}());
ApplicationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-application',
        template: __webpack_require__("../../../../../src/app/pages/single/application/application.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/single/application/application.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__single_table_service__["a" /* SingleTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__single_table_service__["a" /* SingleTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */]) === "function" && _b || Object])
], ApplicationComponent);

var _a, _b;
//# sourceMappingURL=application.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/application/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USERS; });
var User = (function () {
    function User() {
    }
    return User;
}());

var USERS = [
    { id: 1, name: '新用户', data: '1092' },
    { id: 2, name: '新用户占比', data: '70.91%' },
    { id: 3, name: '老用户', data: '448' },
    { id: 4, name: '老用户占比', data: '29.09%' },
    { id: 5, name: '启动用户', data: '1540' },
    { id: 6, name: '启动次数', data: '8722' },
    { id: 7, name: '每次使用时长', data: '00:02:08' },
];
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/daytime/daytime.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-right: 15px\">\r\n  <div class=\"col-md-12 bg\" style=\"padding-left: 0\">\r\n    <h4>{{title}}日使用时长分析</h4>\r\n    <div>\r\n      <input type=\"text\" id=\"startEndTime\" name=\"startEndTime\" placeholder=\"日期\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}日使用时长分析指标\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div echarts [options]=\"options\" theme=\"macarons\" (chartInit)=\"chartInit($event)\" class=\"echart test\"></div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}日使用时长分析指标说明\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/single/daytime/daytime.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\nnb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.bg {\n  font-size: 1rem;\n  background: #ffffff;\n  margin-left: 15px;\n  margin-bottom: 1.5rem;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  font-weight: 400;\n  padding: 1.5rem 1rem; }\n\n.bg h4 {\n  margin-bottom: 0;\n  font-size: 20px;\n  color: #000000;\n  padding: 0 1rem;\n  padding-bottom: 0.5rem; }\n\n.bg div {\n  padding-left: 1rem;\n  padding-top: 0; }\n\ntable, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit; }\n\n.summary-wrapper {\n  position: relative;\n  min-height: 100px;\n  padding: 1.25rem; }\n\n.summary-wrapper .summary-container {\n  overflow: auto;\n  padding: 20px 0; }\n\n.summary-wrapper .summary-container {\n  padding: 0;\n  overflow: hidden;\n  position: relative; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntable.summary {\n  table-layout: fixed;\n  width: 100%; }\n\ntable.summary {\n  border-collapse: separate; }\n\n.summary-wrapper .summary-container .summary {\n  width: 100%;\n  margin-left: 0;\n  table-layout: fixed; }\n\n.summary-wrapper .summary-container .summary td {\n  cursor: default;\n  border-right: none;\n  padding: 0;\n  width: 156px;\n  text-align: center;\n  vertical-align: center; }\n\n.summary-wrapper .summary-container .summary.data-link td, .summary-wrapper .summary-container .summary.data-link td .summary-item span {\n  cursor: pointer; }\n\n.summary-wrapper .summary-container .summary td .summary-item {\n  height: 100%;\n  margin-right: 10px;\n  border-top: 2px solid transparent; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  text-align: left;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.summary-wrapper .summary-container .summary td .summary-item span:first-child {\n  padding-top: 25px; }\n\n.summary-wrapper .summary-container .summary td .summary-item span.text {\n  font-size: 12px;\n  color: #7f8392; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center; }\n\n.selected {\n  border-top: 2px solid #396fff; }\n  .selected .text {\n    color: #396fff !important; }\n  .selected .value {\n    color: #396fff; }\n\ninput {\n  border: none;\n  font-size: 0.9em;\n  color: #6a6f77;\n  -web-kit-appearance: none;\n  -moz-appearance: none;\n  display: block;\n  outline: 0;\n  padding: 0;\n  text-decoration: none;\n  width: 100%;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/down.svg") + ") no-repeat scroll 75px 2px transparent; }\n\ninput:focus {\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/single/daytime/daytime.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaytimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_table_service__ = __webpack_require__("../../../../../src/app/pages/single/single-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single__ = __webpack_require__("../../../../../src/app/pages/single/single.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DaytimeComponent = (function () {
    function DaytimeComponent(service, singleService) {
        var _this = this;
        this.service = service;
        this.singleService = singleService;
        this.options = {};
        this.seriesData = __WEBPACK_IMPORTED_MODULE_5__single__["c" /* SERIESDATA */];
        this.labelFromatter = {
            normal: {
                label: {
                    formatter: function (params) {
                        return params.value + '%';
                    },
                    textStyle: {
                        baseline: 'top',
                    },
                },
            },
        };
        this.settings = {
            actions: false,
            hideSubHeader: true,
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                },
                firstName: {
                    title: '日期',
                    type: 'string',
                },
                lastName: {
                    title: '启动用户',
                    type: 'number',
                },
                username: {
                    title: '日活跃度',
                    type: 'string',
                },
                email: {
                    title: '周活跃用户',
                    type: 'number',
                },
                age: {
                    title: '周活跃度',
                    type: 'string',
                },
                mon: {
                    title: '月活跃用户',
                    type: 'number',
                },
                month: {
                    title: '月活跃度',
                    type: 'string',
                },
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.title = this.singleService.getReqData().appName;
        var data = this.service.getData();
        this.source.load(data);
        this.singleService.getDateSubject().subscribe(function (x) {
            _this.singleService.getDayTime(x).then(function (z) {
                _this.seriesData = z;
                _this.options.legend.data = _this.seriesData.time;
                var k = 0;
                for (var _i = 0, _a = _this.seriesData.data; _i < _a.length; _i++) {
                    var se = _a[_i];
                    _this.options.series[k].data = se;
                    k++;
                }
                _this.mInstance.setOption(_this.options);
            });
        });
    }
    DaytimeComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
        /*const date = new Date();
        const pipe = new DatePipe('en-US');
        this.reqData.reqTime = pipe.transform(date, 'yyyy-MM-dd');
        this.singleService.changeDate(this.reqData);*/
        this.singleService.changeDate(this.singleService.getReqData());
    };
    DaytimeComponent.prototype.ngOnInit = function () {
        this.dateRangePicker();
        var radius = [40, 55];
        this.options = {
            tooltip: {
                formatter: function (params) {
                    return params.name + ':' + params.value + '%\n';
                },
            },
            legend: {
                x: 'center',
                y: '20%',
                data: this.seriesData.time,
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                width: '20%',
                                height: '30%',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            formatter: function (params) {
                                                return 'other\n' + params.value + '%\n';
                                            },
                                            textStyle: {
                                                baseline: 'middle',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            series: [
                {
                    type: 'pie',
                    center: ['10%', '50%'],
                    radius: radius,
                    x: '0%',
                    itemStyle: this.labelFromatter,
                    data: this.seriesData.data[0],
                },
                {
                    type: 'pie',
                    center: ['30%', '50%'],
                    radius: radius,
                    x: '20%',
                    itemStyle: this.labelFromatter,
                    data: this.seriesData.data[4],
                },
                {
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: radius,
                    x: '40%',
                    itemStyle: this.labelFromatter,
                    data: this.seriesData.data[1],
                },
                {
                    type: 'pie',
                    center: ['70%', '50%'],
                    radius: radius,
                    x: '60%',
                    itemStyle: this.labelFromatter,
                    data: this.seriesData.data[2],
                },
                {
                    type: 'pie',
                    center: ['90%', '50%'],
                    radius: radius,
                    x: '80%',
                    itemStyle: this.labelFromatter,
                    data: this.seriesData.data[3],
                },
            ],
        };
    };
    DaytimeComponent.prototype.dateRangePicker = function () {
        var _this = this;
        var picker = $('#startEndTime');
        var dataRageOption = {
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                applyClass: 'btn-green',
                applyLabel: '确定',
                cancelLabel: '取消',
                daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                firstDay: 1,
                monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                format: 'YYYY-MM-DD',
            },
            maxDate: __WEBPACK_IMPORTED_MODULE_3_moment__(),
        };
        picker.daterangepicker(dataRageOption, function (start, end, label) {
            console.info("start:" + start.format('YYYY-MM-DD') + ", end:" + end + ", label:" + label);
            var reqData = new __WEBPACK_IMPORTED_MODULE_5__single__["b" /* ReqData */]();
            reqData.reqTime = start.format('YYYY-MM-DD');
            _this.singleService.changeDate(reqData);
        });
    };
    return DaytimeComponent;
}());
DaytimeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-daytime',
        template: __webpack_require__("../../../../../src/app/pages/single/daytime/daytime.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/single/daytime/daytime.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__single_table_service__["a" /* SingleTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__single_table_service__["a" /* SingleTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__single_service__["a" /* SingleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__single_service__["a" /* SingleService */]) === "function" && _b || Object])
], DaytimeComponent);

var _a, _b;
//# sourceMappingURL=daytime.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/retention/retention.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-right: 15px\">\r\n  <div class=\"col-md-12 bg\" style=\"padding-left: 0\">\r\n    <h4>{{title}}保留率分析</h4>\r\n    <div>\r\n      <input type=\"text\" id=\"startEndTime\" name=\"startEndTime\" placeholder=\"日期\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}保留率分析指标\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div echarts [options]=\"options\" (chartInit)=\"chartInit($event)\" theme=\"macarons\" class=\"echart test\"></div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}保留率分析指标说明\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/single/retention/retention.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\nnb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.bg {\n  font-size: 1rem;\n  background: #ffffff;\n  margin-left: 15px;\n  margin-bottom: 1.5rem;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  font-weight: 400;\n  padding: 1.5rem 1rem; }\n\n.bg h4 {\n  margin-bottom: 0;\n  font-size: 20px;\n  color: #000000;\n  padding: 0 1rem;\n  padding-bottom: 0.5rem; }\n\n.bg div {\n  padding-left: 1rem;\n  padding-top: 0; }\n\ntable, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit; }\n\n.summary-wrapper {\n  position: relative;\n  min-height: 100px;\n  padding: 1.25rem; }\n\n.summary-wrapper .summary-container {\n  overflow: auto;\n  padding: 20px 0; }\n\n.summary-wrapper .summary-container {\n  padding: 0;\n  overflow: hidden;\n  position: relative; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntable.summary {\n  table-layout: fixed;\n  width: 100%; }\n\ntable.summary {\n  border-collapse: separate; }\n\n.summary-wrapper .summary-container .summary {\n  width: 100%;\n  margin-left: 0;\n  table-layout: fixed; }\n\n.summary-wrapper .summary-container .summary td {\n  cursor: default;\n  border-right: none;\n  padding: 0;\n  width: 156px;\n  text-align: center;\n  vertical-align: center; }\n\n.summary-wrapper .summary-container .summary.data-link td, .summary-wrapper .summary-container .summary.data-link td .summary-item span {\n  cursor: pointer; }\n\n.summary-wrapper .summary-container .summary td .summary-item {\n  height: 100%;\n  margin-right: 10px;\n  border-top: 2px solid transparent; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  text-align: left;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.summary-wrapper .summary-container .summary td .summary-item span:first-child {\n  padding-top: 25px; }\n\n.summary-wrapper .summary-container .summary td .summary-item span.text {\n  font-size: 12px;\n  color: #7f8392; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center; }\n\n.selected {\n  border-top: 2px solid #396fff; }\n  .selected .text {\n    color: #396fff !important; }\n  .selected .value {\n    color: #396fff; }\n\ninput {\n  border: none;\n  font-size: 0.9em;\n  color: #6a6f77;\n  -web-kit-appearance: none;\n  -moz-appearance: none;\n  display: block;\n  outline: 0;\n  padding: 0;\n  text-decoration: none;\n  width: 100%;\n  padding-right: 18px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/down.svg") + ") no-repeat scroll 168px 2px transparent; }\n\ninput:focus {\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/single/retention/retention.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetentionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_table_service__ = __webpack_require__("../../../../../src/app/pages/single/single-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__retention__ = __webpack_require__("../../../../../src/app/pages/single/retention/retention.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RetentionComponent = (function () {
    function RetentionComponent(service, singleService) {
        this.service = service;
        this.singleService = singleService;
        this.options = {};
        this.retention = __WEBPACK_IMPORTED_MODULE_4__retention__["a" /* RENTENTION */];
        this.settings = {
            actions: false,
            hideSubHeader: true,
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                },
                firstName: {
                    title: '日期',
                    type: 'string',
                },
                lastName: {
                    title: '启动用户',
                    type: 'number',
                },
                username: {
                    title: '日活跃度',
                    type: 'string',
                },
                email: {
                    title: '周活跃用户',
                    type: 'number',
                },
                age: {
                    title: '周活跃度',
                    type: 'string',
                },
                mon: {
                    title: '月活跃用户',
                    type: 'number',
                },
                month: {
                    title: '月活跃度',
                    type: 'string',
                },
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.title = this.singleService.getTimeStamp().appName;
        var data = this.service.getData();
        this.source.load(data);
    }
    RetentionComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
        this.singleService.changeActiveData(this.singleService.getTimeStamp());
    };
    RetentionComponent.prototype.ngOnInit = function () {
        this.dateRangePicker();
        this.options = {
            /*selected: {
              text: '多个背景颜色图',
              x: 'left',
            },*/
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false,
                },
                formatter: function (params) {
                    return params[0].name + '<br/>'
                        + '保留率 : ' + params[0].value + ' %<br/>';
                },
            },
            legend: {
                data: ['流量'],
                x: 'left',
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none',
                    },
                    restore: {},
                    saveAsImage: {},
                },
            },
            axisPointer: {
                link: {
                    xAxisIndex: 'all',
                },
            },
            dataZoom: [{
                    show: true,
                    realtime: true,
                    start: 30,
                    end: 70,
                    xAxisIndex: [0, 1],
                }, {
                    type: 'inside',
                    realtime: true,
                    start: 30,
                    end: 70,
                    xAxisIndex: [0, 1],
                }],
            grid: [{
                    left: 40,
                    right: 40,
                }, {
                    left: 40,
                    right: 40,
                }],
            xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        onZero: true,
                    },
                    data: this.retention.data,
                }, {
                    gridIndex: 1,
                }],
            yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                }, {
                    gridIndex: 1,
                }],
            series: [{
                    name: '数值',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 9,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1,
                        },
                    },
                    markPoint: {
                        data: [{
                                type: 'max',
                                name: '最大值',
                            }, {
                                type: 'min',
                                name: '最小值',
                            }],
                    },
                    markArea: {
                        silent: true,
                        label: {
                            normal: {
                                position: ['10%', '50%'],
                            },
                        },
                    },
                    data: this.retention.seriesData,
                }],
        };
    };
    RetentionComponent.prototype.dateRangePicker = function () {
        var picker = $('#startEndTime');
        var dataRageOption = {
            locale: {
                applyClass: 'btn-green',
                applyLabel: '确定',
                cancelLabel: '取消',
                fromLabel: '开始',
                format: 'YYYY/MM/DD',
                toLabel: '到',
                customRangeLabel: '自定义时间',
                daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                firstDay: 1,
                monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            },
            startDate: __WEBPACK_IMPORTED_MODULE_5_moment__().startOf('month'),
            endDate: __WEBPACK_IMPORTED_MODULE_5_moment__(),
            maxDate: __WEBPACK_IMPORTED_MODULE_5_moment__(),
            // minDate: moment().subtract(90, 'days'),
            'ranges': {
                '今日': [
                    __WEBPACK_IMPORTED_MODULE_5_moment__(),
                    __WEBPACK_IMPORTED_MODULE_5_moment__(),
                ],
                '昨日': [
                    __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'days'),
                    __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'days'),
                ],
                '本周': [__WEBPACK_IMPORTED_MODULE_5_moment__().subtract(7, 'days'), __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'days')],
                '最近30天': [__WEBPACK_IMPORTED_MODULE_5_moment__().subtract(30, 'days'), __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'days')],
                '本月': [__WEBPACK_IMPORTED_MODULE_5_moment__().startOf('month'), __WEBPACK_IMPORTED_MODULE_5_moment__().endOf('month')],
                '上个月': [__WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'month').startOf('month'), __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'month').endOf('month')],
            },
            'alwaysShowCalendars': true,
            'showCustomRangeLabel': false,
        };
        picker.daterangepicker(dataRageOption, function (start, end, label) {
            console.info("start:" + start.format('YYYY/MM/DD') + ", end:" + end + ", label:" + label);
        });
    };
    return RetentionComponent;
}());
RetentionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-retention',
        template: __webpack_require__("../../../../../src/app/pages/single/retention/retention.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/single/retention/retention.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__single_table_service__["a" /* SingleTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__single_table_service__["a" /* SingleTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */]) === "function" && _b || Object])
], RetentionComponent);

var _a, _b;
//# sourceMappingURL=retention.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/retention/retention.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Retention */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RENTENTION; });
var Retention = (function () {
    function Retention() {
    }
    return Retention;
}());

var RENTENTION = {
    data: ['2018/03/06', '2018/03/07', '2018/03/08', '2018/03/09', '2018/03/10', '2018/03/11', '2018/03/12',
        '2018/03/13', '2018/03/14', '2018/03/15', '2018/03/07', '2018/03/08', '2018/03/09',
        '2018/03/10', '2018/03/11', '2018/03/12',
        '2018/03/13', '2018/03/14', '2018/03/15'],
    seriesData: [12, 20, 15, 80, 70, 30, 13, 19, 31, 24, 20, 15, 80, 70, 30, 13, 19, 31, 24],
};
//# sourceMappingURL=retention.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/single-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_component__ = __webpack_require__("../../../../../src/app/pages/single/single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__versionevo_versionevo_component__ = __webpack_require__("../../../../../src/app/pages/single/versionevo/versionevo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__application_application_component__ = __webpack_require__("../../../../../src/app/pages/single/application/application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__daytime_daytime_component__ = __webpack_require__("../../../../../src/app/pages/single/daytime/daytime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__retention_retention_component__ = __webpack_require__("../../../../../src/app/pages/single/retention/retention.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__useractive_useractive_component__ = __webpack_require__("../../../../../src/app/pages/single/useractive/useractive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__usertime_usertime_component__ = __webpack_require__("../../../../../src/app/pages/single/usertime/usertime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__singlehome_singlehome_component__ = __webpack_require__("../../../../../src/app/pages/single/singlehome/singlehome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__trend_trend_component__ = __webpack_require__("../../../../../src/app/pages/single/trend/trend.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__single_component__["a" /* SingleComponent */],
        children: [
            {
                path: 'singlehome',
                component: __WEBPACK_IMPORTED_MODULE_9__singlehome_singlehome_component__["a" /* SinglehomeComponent */],
            },
            {
                path: 'versionevo',
                component: __WEBPACK_IMPORTED_MODULE_3__versionevo_versionevo_component__["a" /* VersionevoComponent */],
            },
            {
                path: 'application',
                component: __WEBPACK_IMPORTED_MODULE_4__application_application_component__["a" /* ApplicationComponent */],
            },
            {
                path: 'daytime',
                component: __WEBPACK_IMPORTED_MODULE_5__daytime_daytime_component__["a" /* DaytimeComponent */],
            },
            {
                path: 'retention',
                component: __WEBPACK_IMPORTED_MODULE_6__retention_retention_component__["a" /* RetentionComponent */],
            },
            {
                path: 'useractive',
                component: __WEBPACK_IMPORTED_MODULE_7__useractive_useractive_component__["a" /* UseractiveComponent */],
            },
            {
                path: 'usertime',
                component: __WEBPACK_IMPORTED_MODULE_8__usertime_usertime_component__["a" /* UsertimeComponent */],
            },
            {
                path: 'trend',
                component: __WEBPACK_IMPORTED_MODULE_10__trend_trend_component__["a" /* TrendComponent */],
            }
        ],
    }];
var SingleRoutingModule = (function () {
    function SingleRoutingModule() {
    }
    return SingleRoutingModule;
}());
SingleRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], SingleRoutingModule);

//# sourceMappingURL=single-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/single-table.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleTableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SingleTableService = (function () {
    function SingleTableService() {
        this.userAcitveData = [
            {
                id: 1,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 2,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 3,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 4,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 5,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 6,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 7,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 8,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 9,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 10,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 11,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 12,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 13,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 14,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 15,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
            {
                id: 16,
                date: '2018/03/07',
                dayUser: 18,
                dayActive: '12.3%',
                dayMonth: '23.5%',
                monthUser: 29,
                monthActive: '16.9%',
                monthSilentUser: 78,
                monthSlice: '34.5%',
                leaveUser: 345,
            },
        ];
        this.versionData = [
            {
                id: 1,
                application: '2.3.1',
                updateUser: 18,
                newUser: 12,
                startNumber: 6,
                startUser: '29(12.5%)',
                startTime: '00:02:03',
            },
            {
                id: 2,
                application: '2.3.1',
                updateUser: 18,
                newUser: 12,
                startNumber: 6,
                startUser: '29(12.5%)',
                startTime: '00:02:03',
            },
            {
                id: 3,
                application: '2.3.1',
                updateUser: 18,
                newUser: 12,
                startNumber: 6,
                startUser: '29(12.5%)',
                startTime: '00:02:03',
            },
            {
                id: 4,
                application: '2.3.1',
                updateUser: 18,
                newUser: 12,
                startNumber: 6,
                startUser: '29(12.5%)',
                startTime: '00:02:03',
            },
            {
                id: 5,
                application: '2.3.1',
                updateUser: 18,
                newUser: 12,
                startNumber: 6,
                startUser: '29(12.5%)',
                startTime: '00:02:03',
            },
            {
                id: 6,
                application: '2.3.1',
                updateUser: 18,
                newUser: 12,
                startNumber: 6,
                startUser: '29(12.5%)',
                startTime: '00:02:03',
            },
            {
                id: 7,
                application: '2.3.1',
                updateUser: 18,
                newUser: 12,
                startNumber: 6,
                startUser: '29(12.5%)',
                startTime: '00:02:03',
            },
            {
                id: 8,
                application: '2.3.1',
                updateUser: 18,
                newUser: 12,
                startNumber: 6,
                startUser: '29(12.5%)',
                startTime: '00:02:03',
            },
            {
                id: 9,
                application: '2.3.1',
                updateUser: 18,
                newUser: 12,
                startNumber: 6,
                startUser: '29(12.5%)',
                startTime: '00:02:03',
            },
            {
                id: 10,
                application: '2.3.1',
                updateUser: 18,
                newUser: 12,
                startNumber: 6,
                startUser: '29(12.5%)',
                startTime: '00:02:03',
            },
        ];
        this.trendData = [
            {
                id: 1,
                date: '2018/03/07',
                newUser: 18,
                newProp: '12.3%',
                oldUser: 29,
                oldProp: '16.9%',
                startUser: 78,
                startNumber: 345,
                avgTime: '34.5%',
            },
            {
                id: 2,
                date: '2018/03/07',
                newUser: 18,
                newProp: '12.3%',
                oldUser: 29,
                oldProp: '16.9%',
                startUser: 78,
                startNumber: 345,
                avgTime: '34.5%',
            },
            {
                id: 3,
                date: '2018/03/07',
                newUser: 18,
                newProp: '12.3%',
                oldUser: 29,
                oldProp: '16.9%',
                startUser: 78,
                startNumber: 345,
                avgTime: '34.5%',
            },
            {
                id: 4,
                date: '2018/03/07',
                newUser: 18,
                newProp: '12.3%',
                oldUser: 29,
                oldProp: '16.9%',
                startUser: 78,
                startNumber: 345,
                avgTime: '34.5%',
            },
            {
                id: 5,
                date: '2018/03/07',
                newUser: 18,
                newProp: '12.3%',
                oldUser: 29,
                oldProp: '16.9%',
                startUser: 78,
                startNumber: 345,
                avgTime: '34.5%',
            },
            {
                id: 6,
                date: '2018/03/07',
                newUser: 18,
                newProp: '12.3%',
                oldUser: 29,
                oldProp: '16.9%',
                startUser: 78,
                startNumber: 345,
                avgTime: '34.5%',
            },
            {
                id: 7,
                date: '2018/03/07',
                newUser: 18,
                newProp: '12.3%',
                oldUser: 29,
                oldProp: '16.9%',
                startUser: 78,
                startNumber: 345,
                avgTime: '34.5%',
            },
            {
                id: 8,
                date: '2018/03/07',
                newUser: 18,
                newProp: '12.3%',
                oldUser: 29,
                oldProp: '16.9%',
                startUser: 78,
                startNumber: 345,
                avgTime: '34.5%',
            },
            {
                id: 9,
                date: '2018/03/07',
                newUser: 18,
                newProp: '12.3%',
                oldUser: 29,
                oldProp: '16.9%',
                startUser: 78,
                startNumber: 345,
                avgTime: '34.5%',
            },
            {
                id: 10,
                date: '2018/03/07',
                newUser: 18,
                newProp: '12.3%',
                oldUser: 29,
                oldProp: '16.9%',
                startUser: 78,
                startNumber: 345,
                avgTime: '34.5%',
            },
            {
                id: 11,
                date: '2018/03/07',
                newUser: 18,
                newProp: '12.3%',
                oldUser: 29,
                oldProp: '16.9%',
                startUser: 78,
                startNumber: 345,
                avgTime: '34.5%',
            },
        ];
        this.testData = [
            {
                id: '1',
                number: 1,
                province: '湖南',
                city: '衡阳',
                name: 'jack',
            },
            {
                id: '2',
                number: 2,
                province: '湖南',
                city: '长沙',
                name: 'jack',
            },
            {
                id: '3',
                number: 3,
                province: '湖南',
                city: '张家界',
                name: 'jack',
            },
        ];
        this.data = [
            {
                id: 1,
                firstName: '2018/03/07',
                lastName: 18,
                username: '12.3%',
                email: 29,
                age: '16.9%',
                mon: 78,
                month: '34.5%',
            }, {
                id: 2,
                firstName: '2018/03/07',
                lastName: 18,
                username: '12.3%',
                email: 29,
                age: '16.9%',
                mon: 78,
                month: '34.5%',
            }, {
                id: 3,
                firstName: '2018/03/07',
                lastName: 18,
                username: '12.3%',
                email: 29,
                age: '16.9%',
                mon: 78,
                month: '34.5%',
            }, {
                id: 4,
                firstName: '2018/03/07',
                lastName: 18,
                username: '12.3%',
                email: 29,
                age: '16.9%',
                mon: 78,
                month: '34.5%',
            }, {
                id: 5,
                firstName: '2018/03/07',
                lastName: 18,
                username: '12.3%',
                email: 29,
                age: '16.9%',
                mon: 78,
                month: '34.5%',
            }, {
                id: 6,
                firstName: '2018/03/07',
                lastName: 18,
                username: '12.3%',
                email: 29,
                age: '16.9%',
                mon: 78,
                month: '34.5%',
            }, {
                id: 7,
                firstName: '2018/03/07',
                lastName: 18,
                username: '12.3%',
                email: 29,
                age: '16.9%',
                mon: 78,
                month: '34.5%',
            }, {
                id: 8,
                firstName: '2018/03/07',
                lastName: 18,
                username: '12.3%',
                email: 29,
                age: '16.9%',
                mon: 78,
                month: '34.5%',
            }, {
                id: 9,
                firstName: '2018/03/07',
                lastName: 18,
                username: '12.3%',
                email: 29,
                age: '16.9%',
                mon: 78,
                month: '34.5%',
            }, {
                id: 10,
                firstName: '2018/03/07',
                lastName: 18,
                username: '12.3%',
                email: 29,
                age: '16.9%',
                mon: 78,
                month: '34.5%',
            }, {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38',
                mon: 78,
                month: '34.5%',
            }, {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48',
                mon: 78,
                month: '34.5%',
            }, {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48',
            }, {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40',
            }, {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32',
            }, {
                'id': 16,
                'firstName': 'Francisca',
                'lastName': 'Brady',
                'username': '@Gibson',
                'email': 'franciscagibson@comtours.com',
                'age': 11,
            }, {
                'id': 17,
                'firstName': 'Tillman',
                'lastName': 'Figueroa',
                'username': '@Snow',
                'email': 'tillmansnow@comtours.com',
                'age': 34,
            }, {
                'id': 18,
                'firstName': 'Jimenez',
                'lastName': 'Morris',
                'username': '@Bryant',
                'email': 'jimenezbryant@comtours.com',
                'age': 45,
            }, {
                'id': 19,
                'firstName': 'Sandoval',
                'lastName': 'Jacobson',
                'username': '@Mcbride',
                'email': 'sandovalmcbride@comtours.com',
                'age': 32,
            }, {
                'id': 20,
                'firstName': 'Griffin',
                'lastName': 'Torres',
                'username': '@Charles',
                'email': 'griffincharles@comtours.com',
                'age': 19,
            }, {
                'id': 21,
                'firstName': 'Cora',
                'lastName': 'Parker',
                'username': '@Caldwell',
                'email': 'coracaldwell@comtours.com',
                'age': 27,
            }, {
                'id': 22,
                'firstName': 'Cindy',
                'lastName': 'Bond',
                'username': '@Velez',
                'email': 'cindyvelez@comtours.com',
                'age': 24,
            }, {
                'id': 23,
                'firstName': 'Frieda',
                'lastName': 'Tyson',
                'username': '@Craig',
                'email': 'friedacraig@comtours.com',
                'age': 45,
            }, {
                'id': 24,
                'firstName': 'Cote',
                'lastName': 'Holcomb',
                'username': '@Rowe',
                'email': 'coterowe@comtours.com',
                'age': 20,
            }, {
                'id': 25,
                'firstName': 'Trujillo',
                'lastName': 'Mejia',
                'username': '@Valenzuela',
                'email': 'trujillovalenzuela@comtours.com',
                'age': 16,
            }, {
                'id': 26,
                'firstName': 'Pruitt',
                'lastName': 'Shepard',
                'username': '@Sloan',
                'email': 'pruittsloan@comtours.com',
                'age': 44,
            }, {
                'id': 27,
                'firstName': 'Sutton',
                'lastName': 'Ortega',
                'username': '@Black',
                'email': 'suttonblack@comtours.com',
                'age': 42,
            }, {
                'id': 28,
                'firstName': 'Marion',
                'lastName': 'Heath',
                'username': '@Espinoza',
                'email': 'marionespinoza@comtours.com',
                'age': 47,
            }, {
                'id': 29,
                'firstName': 'Newman',
                'lastName': 'Hicks',
                'username': '@Keith',
                'email': 'newmankeith@comtours.com',
                'age': 15,
            }, {
                'id': 30,
                'firstName': 'Boyle',
                'lastName': 'Larson',
                'username': '@Summers',
                'email': 'boylesummers@comtours.com',
                'age': 32,
            }, {
                'id': 31,
                'firstName': 'Haynes',
                'lastName': 'Vinson',
                'username': '@Mckenzie',
                'email': 'haynesmckenzie@comtours.com',
                'age': 15,
            }, {
                'id': 32,
                'firstName': 'Miller',
                'lastName': 'Acosta',
                'username': '@Young',
                'email': 'milleryoung@comtours.com',
                'age': 55,
            }, {
                'id': 33,
                'firstName': 'Johnston',
                'lastName': 'Brown',
                'username': '@Knight',
                'email': 'johnstonknight@comtours.com',
                'age': 29,
            }, {
                'id': 34,
                'firstName': 'Lena',
                'lastName': 'Pitts',
                'username': '@Forbes',
                'email': 'lenaforbes@comtours.com',
                'age': 25,
            }, {
                'id': 35,
                'firstName': 'Terrie',
                'lastName': 'Kennedy',
                'username': '@Branch',
                'email': 'terriebranch@comtours.com',
                'age': 37,
            }, {
                'id': 36,
                'firstName': 'Louise',
                'lastName': 'Aguirre',
                'username': '@Kirby',
                'email': 'louisekirby@comtours.com',
                'age': 44,
            }, {
                'id': 37,
                'firstName': 'David',
                'lastName': 'Patton',
                'username': '@Sanders',
                'email': 'davidsanders@comtours.com',
                'age': 26,
            }, {
                'id': 38,
                'firstName': 'Holden',
                'lastName': 'Barlow',
                'username': '@Mckinney',
                'email': 'holdenmckinney@comtours.com',
                'age': 11,
            }, {
                'id': 39,
                'firstName': 'Baker',
                'lastName': 'Rivera',
                'username': '@Montoya',
                'email': 'bakermontoya@comtours.com',
                'age': 47,
            }, {
                'id': 40,
                'firstName': 'Belinda',
                'lastName': 'Lloyd',
                'username': '@Calderon',
                'email': 'belindacalderon@comtours.com',
                'age': 21,
            }, {
                'id': 41,
                'firstName': 'Pearson',
                'lastName': 'Patrick',
                'username': '@Clements',
                'email': 'pearsonclements@comtours.com',
                'age': 42,
            }, {
                'id': 42,
                'firstName': 'Alyce',
                'lastName': 'Mckee',
                'username': '@Daugherty',
                'email': 'alycedaugherty@comtours.com',
                'age': 55,
            }, {
                'id': 43,
                'firstName': 'Valencia',
                'lastName': 'Spence',
                'username': '@Olsen',
                'email': 'valenciaolsen@comtours.com',
                'age': 20,
            }, {
                'id': 44,
                'firstName': 'Leach',
                'lastName': 'Holcomb',
                'username': '@Humphrey',
                'email': 'leachhumphrey@comtours.com',
                'age': 28,
            }, {
                'id': 45,
                'firstName': 'Moss',
                'lastName': 'Baxter',
                'username': '@Fitzpatrick',
                'email': 'mossfitzpatrick@comtours.com',
                'age': 51,
            }, {
                'id': 46,
                'firstName': 'Jeanne',
                'lastName': 'Cooke',
                'username': '@Ward',
                'email': 'jeanneward@comtours.com',
                'age': 59,
            }, {
                'id': 47,
                'firstName': 'Wilma',
                'lastName': 'Briggs',
                'username': '@Kidd',
                'email': 'wilmakidd@comtours.com',
                'age': 53,
            }, {
                'id': 48,
                'firstName': 'Beatrice',
                'lastName': 'Perry',
                'username': '@Gilbert',
                'email': 'beatricegilbert@comtours.com',
                'age': 39,
            }, {
                'id': 49,
                'firstName': 'Whitaker',
                'lastName': 'Hyde',
                'username': '@Mcdonald',
                'email': 'whitakermcdonald@comtours.com',
                'age': 35,
            }, {
                'id': 50,
                'firstName': 'Rebekah',
                'lastName': 'Duran',
                'username': '@Gross',
                'email': 'rebekahgross@comtours.com',
                'age': 40,
            }, {
                'id': 51,
                'firstName': 'Earline',
                'lastName': 'Mayer',
                'username': '@Woodward',
                'email': 'earlinewoodward@comtours.com',
                'age': 52,
            }, {
                'id': 52,
                'firstName': 'Moran',
                'lastName': 'Baxter',
                'username': '@Johns',
                'email': 'moranjohns@comtours.com',
                'age': 20,
            }, {
                'id': 53,
                'firstName': 'Nanette',
                'lastName': 'Hubbard',
                'username': '@Cooke',
                'email': 'nanettecooke@comtours.com',
                'age': 55,
            }, {
                'id': 54,
                'firstName': 'Dalton',
                'lastName': 'Walker',
                'username': '@Hendricks',
                'email': 'daltonhendricks@comtours.com',
                'age': 25,
            }, {
                'id': 55,
                'firstName': 'Bennett',
                'lastName': 'Blake',
                'username': '@Pena',
                'email': 'bennettpena@comtours.com',
                'age': 13,
            }, {
                'id': 56,
                'firstName': 'Kellie',
                'lastName': 'Horton',
                'username': '@Weiss',
                'email': 'kellieweiss@comtours.com',
                'age': 48,
            }, {
                'id': 57,
                'firstName': 'Hobbs',
                'lastName': 'Talley',
                'username': '@Sanford',
                'email': 'hobbssanford@comtours.com',
                'age': 28,
            }, {
                'id': 58,
                'firstName': 'Mcguire',
                'lastName': 'Donaldson',
                'username': '@Roman',
                'email': 'mcguireroman@comtours.com',
                'age': 38,
            }, {
                'id': 59,
                'firstName': 'Rodriquez',
                'lastName': 'Saunders',
                'username': '@Harper',
                'email': 'rodriquezharper@comtours.com',
                'age': 20,
            }, {
                'id': 60,
                'firstName': 'Lou',
                'lastName': 'Conner',
                'username': '@Sanchez',
                'email': 'lousanchez@comtours.com',
                'age': 16,
            },
        ];
    }
    SingleTableService.prototype.getUserActiveData = function () {
        return this.userAcitveData;
    };
    SingleTableService.prototype.getVersionData = function () {
        return this.versionData;
    };
    SingleTableService.prototype.getTrendData = function () {
        return this.trendData;
    };
    SingleTableService.prototype.getTestData = function () {
        return this.testData;
    };
    SingleTableService.prototype.getData = function () {
        return this.data;
    };
    return SingleTableService;
}());
SingleTableService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SingleTableService);

//# sourceMappingURL=single-table.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/single.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\" style=\"margin-right: 15px\">\r\n  <div class=\"col-md-12 bg\" style=\"padding-left: 0\">\r\n    <h4>{{selected}}</h4>\r\n    <div>\r\n      <input type=\"text\"  id=\"startEndTime\"\r\n             name=\"startEndTime\" placeholder=\"开始-结束时间\">\r\n    </div>\r\n  </div>\r\n</div>-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/single/single.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\nnb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.bg {\n  font-size: 1rem;\n  background: #ffffff;\n  margin-left: 15px;\n  margin-bottom: 1.5rem;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  font-weight: 400;\n  padding: 1.5rem 1rem; }\n\n.bg h4 {\n  margin-bottom: 0;\n  font-size: 20px;\n  color: #000000;\n  padding: 0 1rem;\n  padding-bottom: 0.5rem; }\n\n.bg div {\n  padding-left: 1rem;\n  padding-top: 0; }\n\ntable, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit; }\n\n.summary-wrapper {\n  position: relative;\n  min-height: 100px;\n  padding: 1.25rem; }\n\n.summary-wrapper .summary-container {\n  overflow: auto;\n  padding: 20px 0; }\n\n.summary-wrapper .summary-container {\n  padding: 0;\n  overflow: hidden;\n  position: relative; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntable.summary {\n  table-layout: fixed;\n  width: 100%; }\n\ntable.summary {\n  border-collapse: separate; }\n\n.summary-wrapper .summary-container .summary {\n  width: 100%;\n  margin-left: 0;\n  table-layout: fixed; }\n\n.summary-wrapper .summary-container .summary td {\n  cursor: default;\n  border-right: none;\n  padding: 0;\n  width: 156px;\n  text-align: center;\n  vertical-align: center; }\n\n.summary-wrapper .summary-container .summary.data-link td, .summary-wrapper .summary-container .summary.data-link td .summary-item span {\n  cursor: pointer; }\n\n.summary-wrapper .summary-container .summary td .summary-item {\n  height: 100%;\n  margin-right: 10px;\n  border-top: 2px solid transparent; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  text-align: left;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.summary-wrapper .summary-container .summary td .summary-item span:first-child {\n  padding-top: 25px; }\n\n.summary-wrapper .summary-container .summary td .summary-item span.text {\n  font-size: 12px;\n  color: #7f8392; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center; }\n\n.selected {\n  border-top: 2px solid #396fff; }\n  .selected .text {\n    color: #396fff !important; }\n  .selected .value {\n    color: #396fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/single/single.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleComponent = (function () {
    function SingleComponent(singleService) {
        this.title = '单个APP概览';
    }
    return SingleComponent;
}());
SingleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-single',
        template: __webpack_require__("../../../../../src/app/pages/single/single.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/single/single.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__single_service__["a" /* SingleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__single_service__["a" /* SingleService */]) === "function" && _a || Object])
], SingleComponent);

var _a;
//# sourceMappingURL=single.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/single.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleModule", function() { return SingleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__single_component__ = __webpack_require__("../../../../../src/app/pages/single/single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single_routing_module__ = __webpack_require__("../../../../../src/app/pages/single/single-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__versionevo_versionevo_component__ = __webpack_require__("../../../../../src/app/pages/single/versionevo/versionevo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__application_application_component__ = __webpack_require__("../../../../../src/app/pages/single/application/application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__daytime_daytime_component__ = __webpack_require__("../../../../../src/app/pages/single/daytime/daytime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__retention_retention_component__ = __webpack_require__("../../../../../src/app/pages/single/retention/retention.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__useractive_useractive_component__ = __webpack_require__("../../../../../src/app/pages/single/useractive/useractive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__usertime_usertime_component__ = __webpack_require__("../../../../../src/app/pages/single/usertime/usertime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__singlehome_singlehome_component__ = __webpack_require__("../../../../../src/app/pages/single/singlehome/singlehome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__singlehome_singhome_module__ = __webpack_require__("../../../../../src/app/pages/single/singlehome/singhome.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__single_table_service__ = __webpack_require__("../../../../../src/app/pages/single/single-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__trend_trend_component__ = __webpack_require__("../../../../../src/app/pages/single/trend/trend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_4__single_component__["a" /* SingleComponent */],
    __WEBPACK_IMPORTED_MODULE_6__versionevo_versionevo_component__["a" /* VersionevoComponent */],
    __WEBPACK_IMPORTED_MODULE_7__application_application_component__["a" /* ApplicationComponent */],
    __WEBPACK_IMPORTED_MODULE_8__daytime_daytime_component__["a" /* DaytimeComponent */],
    __WEBPACK_IMPORTED_MODULE_9__retention_retention_component__["a" /* RetentionComponent */],
    __WEBPACK_IMPORTED_MODULE_10__useractive_useractive_component__["a" /* UseractiveComponent */],
    __WEBPACK_IMPORTED_MODULE_11__usertime_usertime_component__["a" /* UsertimeComponent */],
    __WEBPACK_IMPORTED_MODULE_12__singlehome_singlehome_component__["a" /* SinglehomeComponent */],
    __WEBPACK_IMPORTED_MODULE_16__trend_trend_component__["a" /* TrendComponent */],
];
var SingleModule = (function () {
    function SingleModule() {
    }
    return SingleModule;
}());
SingleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_5__single_routing_module__["a" /* SingleRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_13__singlehome_singhome_module__["a" /* SinghomeModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_echarts__["a" /* NgxEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["b" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
        ],
        declarations: routedComponents.slice(),
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__single_table_service__["a" /* SingleTableService */],
            __WEBPACK_IMPORTED_MODULE_14__single_service__["a" /* SingleService */],
        ],
    })
], SingleModule);

//# sourceMappingURL=single.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/single.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single__ = __webpack_require__("../../../../../src/app/pages/single/single.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SingleService = (function () {
    function SingleService(http) {
        this.http = http;
        this.BaseUrl = 'http://10.0.0.30:8000/';
        this.dateSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.dataSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.timeStamp = new __WEBPACK_IMPORTED_MODULE_3__single__["d" /* TimeStamp */]();
        this.timeStamp.startTime = __WEBPACK_IMPORTED_MODULE_4_moment__().startOf('month').format('YYYY-MM-DD');
        this.timeStamp.endTime = __WEBPACK_IMPORTED_MODULE_4_moment__().format('YYYY-MM-DD');
        this.timeStamp.appName = '王者荣耀';
        this.reqData = new __WEBPACK_IMPORTED_MODULE_3__single__["b" /* ReqData */]();
        this.reqData.reqTime = __WEBPACK_IMPORTED_MODULE_4_moment__().format('YYYY-MM-DD');
        this.reqData.appName = '王者荣耀';
    }
    SingleService.prototype.getTimeStamp = function () {
        return this.timeStamp;
    };
    SingleService.prototype.getReqData = function () {
        return this.reqData;
    };
    SingleService.prototype.getAppNames = function () {
        var url = this.BaseUrl + 'listAllAppName';
        return this.http.get(url).toPromise();
    };
    SingleService.prototype.changeApp = function (app) {
        this.timeStamp.appName = app;
        this.reqData.appName = app;
        this.dataSubject.next(this.timeStamp);
        this.dateSubject.next(this.reqData);
    };
    SingleService.prototype.changeDate = function (req) {
        this.reqData.reqTime = req.reqTime;
        this.dateSubject.next(this.reqData);
    };
    SingleService.prototype.getDateSubject = function () {
        return this.dateSubject;
    };
    SingleService.prototype.changeActiveData = function (timeStamp) {
        this.timeStamp.startTime = timeStamp.startTime;
        this.timeStamp.endTime = timeStamp.endTime;
        this.dataSubject.next(this.timeStamp);
    };
    SingleService.prototype.getActiveSubject = function () {
        return this.dataSubject;
    };
    SingleService.prototype.getDayTime = function (reqData) {
        var url = this.BaseUrl + 'listDayUseFrequencyByApp';
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpParams */]().set('appName', reqData.appName).append('day', reqData.reqTime);
        var options = { params: params };
        return this.http.get(url, options).toPromise();
    };
    SingleService.prototype.getUserTime = function (reqData) {
        var url = this.BaseUrl + 'getSingleAppOnceHourCountByPacketAndDate';
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpParams */]().set('appName', reqData.appName).append('day', reqData.reqTime);
        var options = { params: params };
        return this.http.get(url, options).toPromise();
    };
    SingleService.prototype.getUserActive = function (timeStamp) {
        var url = this.BaseUrl + 'listLivenessByAppAndDate';
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpParams */]().set('appName', timeStamp.appName).append('start', timeStamp.startTime)
            .append('end', timeStamp.endTime);
        var options = { params: params };
        return this.http.get(url, options).toPromise();
    };
    SingleService.prototype.getVersion = function (timeStamp) {
        var url = this.BaseUrl + 'getAppVersionMsgByAppAndDate';
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpParams */]().set('appName', timeStamp.appName).append('start', timeStamp.startTime)
            .append('end', timeStamp.endTime);
        var options = { params: params };
        return this.http.get(url, options).toPromise();
    };
    return SingleService;
}());
SingleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], SingleService);

var _a;
//# sourceMappingURL=single.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/single.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReqData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REQDATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TimeStamp; });
/* unused harmony export TIMESTAMP */
/* unused harmony export DayData */
/* unused harmony export SeriesData */
/* unused harmony export DAYDATA */
/* unused harmony export SHOWDATA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SERIESDATA; });
/* unused harmony export UserTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return USERTIME; });
/* unused harmony export UserActive */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return USERACTIVE; });
var ReqData = (function () {
    function ReqData() {
    }
    return ReqData;
}());

var REQDATA = {
    reqTime: '2017-12-15',
    appName: '王者荣耀',
};
var TimeStamp = (function () {
    function TimeStamp() {
    }
    return TimeStamp;
}());

var TIMESTAMP = {
    startTime: '2018-01-01',
    endTime: '2018-01-10',
    appName: '微信',
};
/*使用时长分析*/
var DayData = (function () {
    function DayData() {
    }
    return DayData;
}());

var SeriesData = (function () {
    function SeriesData() {
    }
    return SeriesData;
}());

var DAYDATA = [
    [
        { name: '其他', value: 65 },
        { name: '0-1分钟', value: 35 },
    ],
    [
        { name: '其他', value: 76 },
        { name: '1-3分钟', value: 24 },
    ],
    [
        { name: '其他', value: 86 },
        { name: '3-10分钟', value: 14 },
    ],
    [
        { name: '其他', value: 89 },
        { name: '10-30分钟', value: 11 },
    ],
    [
        { name: '其他', value: 73 },
        { name: '30分钟以上', value: 27 },
    ],
];
var SHOWDATA = [
    { value: 335, name: '1-10分钟' },
    { value: 310, name: '10-30分钟' },
    { value: 234, name: '30-50分钟' },
    { value: 135, name: '50-90分钟' },
    { value: 1548, name: '90分钟以上' },
];
var SERIESDATA = {
    time: ['0-1分钟', '1-3分钟', '3-10分钟', '10-30分钟', '30分钟以上'],
    data: DAYDATA,
    appTime: SHOWDATA,
};
/*使用时段分析*/
var UserTime = (function () {
    function UserTime() {
    }
    return UserTime;
}());

var USERTIME = {
    fhours: ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a', '10a', '11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'],
    data: ['1', '2.8', '3', '4', '3', '5', '1', '1.6', '2', '3', '4', '3', '4', '3', '5', '1', '1',
        '2.1', '3.3', '4.2', '3', '1', '2.8', '3'],
};
/*用户活跃分析*/
var UserActive = (function () {
    function UserActive() {
    }
    return UserActive;
}());

var USERACTIVE = {
    date: ['2018/01/01', '2018/01/02', '2018/01/03', '2018/01/04', '2018/01/05', '2018/01/06', '2018/01/07',
        '2018/01/08', '2018/01/09', '2018/01/10', '2018/01/11', '2018/01/12', '2018/01/13', '2018/01/14',
        '2018/01/15', '2018/01/16', '2018/01/17', '2018/01/18', '2018/01/19', '2018/01/20', '2018/01/21',
        '2018/01/22', '2018/01/23', '2018/01/24', '2018/01/25', '2018/01/26', '2018/01/27', '2018/01/28',
        '2018/01/29', '2018/01/30', '2018/01/31'],
    clickNum: [12, 20, 15, 8, 7.2, 11, 13, 12, 20, 15, 8, 7, 11, 13, 12, 20, 15, 8, 7, 11, 13,
        12, 6, 15.5, 8, 7, 11, 13, 12, 20, 15],
};
//# sourceMappingURL=single.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/singlehome/singhome.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinghomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_active_component__ = __webpack_require__("../../../../../src/app/pages/single/singlehome/single-active.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__single_version_component__ = __webpack_require__("../../../../../src/app/pages/single/singlehome/single-version.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single_application_component__ = __webpack_require__("../../../../../src/app/pages/single/singlehome/single-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__single_day_component__ = __webpack_require__("../../../../../src/app/pages/single/singlehome/single-day.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__single_time_component__ = __webpack_require__("../../../../../src/app/pages/single/singlehome/single-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__single_retention_component__ = __webpack_require__("../../../../../src/app/pages/single/singlehome/single-retention.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__single_trend_component__ = __webpack_require__("../../../../../src/app/pages/single/singlehome/single-trend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var components = [
    __WEBPACK_IMPORTED_MODULE_4__single_version_component__["a" /* SingleVersionComponent */],
    __WEBPACK_IMPORTED_MODULE_3__single_active_component__["a" /* SingleActiveComponent */],
    __WEBPACK_IMPORTED_MODULE_5__single_application_component__["a" /* SingleApplicationComponent */],
    __WEBPACK_IMPORTED_MODULE_6__single_day_component__["a" /* SingleDayComponent */],
    __WEBPACK_IMPORTED_MODULE_7__single_time_component__["a" /* SingleTimeComponent */],
    __WEBPACK_IMPORTED_MODULE_8__single_retention_component__["a" /* SingleRetentionComponent */],
    __WEBPACK_IMPORTED_MODULE_9__single_trend_component__["a" /* SingleTrendComponent */],
];
var SinghomeModule = (function () {
    function SinghomeModule() {
    }
    return SinghomeModule;
}());
SinghomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */], __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* NgxEchartsModule */], __WEBPACK_IMPORTED_MODULE_10_ng2_search_filter__["a" /* Ng2SearchPipeModule */]],
        declarations: components.slice(),
        exports: components.slice(),
    })
], SinghomeModule);

//# sourceMappingURL=singhome.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/singlehome/single-active.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleActiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single__ = __webpack_require__("../../../../../src/app/pages/single/single.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleActiveComponent = (function () {
    function SingleActiveComponent(slService) {
        var _this = this;
        this.slService = slService;
        this.options = {};
        this.useractive = __WEBPACK_IMPORTED_MODULE_1__single__["e" /* USERACTIVE */];
        slService.getActiveSubject().subscribe(function (x) {
            slService.getUserActive(x).then(function (z) {
                _this.useractive = z;
                _this.options.xAxis.data = _this.useractive.date;
                _this.options.series[0].data = _this.useractive.clickNum;
                _this.mInstance.setOption(_this.options);
            });
        });
    }
    SingleActiveComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
        this.slService.changeActiveData(this.slService.getTimeStamp());
    };
    SingleActiveComponent.prototype.ngAfterViewInit = function () {
        this.options = {
            legend: {
                data: ['用户活跃分析'],
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0].name + '<br/>'
                        + '日活跃度 : ' + params[0].value + ' %<br/>';
                },
            },
            animation: true,
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'cubicInOut',
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.useractive.date,
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                    },
                },
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                    },
                },
                axisLabel: {
                    formatter: '{value} %',
                },
                scale: true,
            },
            toolbox: {
                show: true,
            },
            series: [{
                    name: '用户活跃分析',
                    data: this.useractive.clickNum,
                    type: 'line',
                    label: {
                        type: 'text',
                        normal: {
                            show: true,
                            formatter: function (param) {
                                return param.data.name;
                            },
                            position: 'top',
                        },
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(25, 100, 150, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                    offset: 0,
                                    color: 'rgb(129, 227, 238)',
                                }, {
                                    offset: 1,
                                    color: 'rgb(25, 183, 207)',
                                }]),
                        },
                    },
                }],
        };
    };
    return SingleActiveComponent;
}());
SingleActiveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-single-active',
        template: "\n    <div echarts [options]=\"options\" (chartInit)=\"chartInit($event)\" theme = \"light\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */]) === "function" && _a || Object])
], SingleActiveComponent);

var _a;
//# sourceMappingURL=single-active.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/singlehome/single-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SingleApplicationComponent = (function () {
    function SingleApplicationComponent() {
        this.options = {};
    }
    SingleApplicationComponent.prototype.ngAfterViewInit = function () {
        this.options = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)',
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他'],
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                        normal: {
                            position: 'inner',
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    data: [
                        { value: 335, name: '直达', selected: true },
                        { value: 679, name: '营销广告' },
                        { value: 1548, name: '搜索引擎' },
                    ],
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center',
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0,
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33,
                                },
                                per: {
                                    /* color: '#eee',*/
                                    /*backgroundColor: '#334455',*/
                                    padding: [2, 4],
                                    borderRadius: 2,
                                },
                            },
                        },
                    },
                    data: [
                        { value: 335, name: '直达' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1048, name: '百度' },
                        { value: 251, name: '谷歌' },
                        { value: 147, name: '必应' },
                        { value: 102, name: '其他' },
                    ],
                },
            ],
        };
    };
    return SingleApplicationComponent;
}());
SingleApplicationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-single-application',
        template: "\n    <div  echarts [options]=\"options\" theme = \"light\" class=\"echart\"></div>\n  ",
    })
], SingleApplicationComponent);

//# sourceMappingURL=single-application.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/singlehome/single-day.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleDayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single__ = __webpack_require__("../../../../../src/app/pages/single/single.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleDayComponent = (function () {
    function SingleDayComponent(slService) {
        var _this = this;
        this.slService = slService;
        this.options = {};
        this.seriesData = __WEBPACK_IMPORTED_MODULE_1__single__["c" /* SERIESDATA */];
        this.reqData = __WEBPACK_IMPORTED_MODULE_1__single__["a" /* REQDATA */];
        this.singleService = slService;
        this.slService.getDateSubject().subscribe(function (x) {
            _this.slService.getDayTime(x).then(function (z) {
                _this.seriesData = z;
                _this.options.series[0].data = _this.seriesData.appTime;
                _this.mInstance.setOption(_this.options);
            });
        });
    }
    SingleDayComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
        /*const date = new Date();
        const pipe = new DatePipe('en-US');
        console.log(pipe.transform(date, 'yyyy-MM-dd'));
        this.reqData.reqTime = pipe.transform(date, 'yyyy-MM-dd');*/
        this.singleService.changeDate(this.reqData);
    };
    SingleDayComponent.prototype.ngAfterViewInit = function () {
        this.options = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {d}%',
            },
            legend: {
                orient: 'vertical',
                x: 'left',
            },
            toolbox: {
                show: true,
            },
            series: [
                {
                    name: '日使用手机时长分析',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    labelLine: {
                        normal: {
                            show: true,
                        },
                    },
                    data: this.seriesData.appTime,
                },
            ],
        };
    };
    return SingleDayComponent;
}());
SingleDayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-single-day',
        template: "\n    <div echarts [options]=\"options\" (chartInit)=\"chartInit($event)\" theme=\"macarons\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */]) === "function" && _a || Object])
], SingleDayComponent);

var _a;
//# sourceMappingURL=single-day.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/singlehome/single-retention.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleRetentionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__retention_retention__ = __webpack_require__("../../../../../src/app/pages/single/retention/retention.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SingleRetentionComponent = (function () {
    function SingleRetentionComponent() {
        this.options = {};
        this.retention = __WEBPACK_IMPORTED_MODULE_1__retention_retention__["a" /* RENTENTION */];
    }
    SingleRetentionComponent.prototype.ngAfterViewInit = function () {
        this.options = {
            /*selected: {
              text: '多个背景颜色图',
              x: 'left',
            },*/
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false,
                },
                formatter: function (params) {
                    return params[0].name + '<br/>'
                        + '保留率 : ' + params[0].value + ' %<br/>';
                },
            },
            legend: {
                data: ['流量'],
                x: 'left',
            },
            /*toolbox: {
              feature: {
                dataZoom: {
                  yAxisIndex: 'none',
                },
                restore: {},
                saveAsImage: {},
              },
            },*/
            axisPointer: {
                link: {
                    xAxisIndex: 'all',
                },
            },
            grid: [{
                    left: 40,
                    right: 40,
                }, {
                    left: 40,
                    right: 40,
                }],
            xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        onZero: true,
                    },
                    data: this.retention.data,
                }, {
                    gridIndex: 1,
                }],
            yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                }, {
                    gridIndex: 1,
                }],
            series: [{
                    name: '保留率',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 9,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1,
                        },
                    },
                    markPoint: {
                        data: [{
                                type: 'max',
                                name: '最大值',
                            }, {
                                type: 'min',
                                name: '最小值',
                            }],
                    },
                    markArea: {
                        silent: true,
                        label: {
                            normal: {
                                position: ['10%', '50%'],
                            },
                        },
                    },
                    data: this.retention.seriesData,
                }],
        };
    };
    return SingleRetentionComponent;
}());
SingleRetentionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-single-retention',
        template: "\n    <div echarts [options]=\"options\" theme = \"light\" class=\"echart\"></div>\n  ",
    })
], SingleRetentionComponent);

//# sourceMappingURL=single-retention.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/singlehome/single-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single__ = __webpack_require__("../../../../../src/app/pages/single/single.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleTimeComponent = (function () {
    function SingleTimeComponent(slService) {
        var _this = this;
        this.slService = slService;
        this.options = {};
        this.userTime = __WEBPACK_IMPORTED_MODULE_1__single__["f" /* USERTIME */];
        this.reqData = __WEBPACK_IMPORTED_MODULE_1__single__["a" /* REQDATA */];
        this.singleService = slService;
        this.slService.getDateSubject().subscribe(function (x) {
            _this.slService.getUserTime(x).then(function (z) {
                _this.userTime = z;
                _this.options.series[0].data = _this.userTime.data;
                _this.mInstance.setOption(_this.options);
            });
        });
    }
    SingleTimeComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
        var date = new Date();
        var pipe = new __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]('en-US');
        this.reqData.reqTime = pipe.transform(date, 'yyyy-MM-dd');
        this.singleService.changeDate(this.reqData);
    };
    SingleTimeComponent.prototype.ngAfterViewInit = function () {
        this.options = {
            legend: {
                data: ['使用时段分析'],
                left: 'right',
                show: true,
            },
            polar: {},
            tooltip: {
                formatter: '{a} <br/>{b} :  {c}%',
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            angleAxis: {
                type: 'category',
                data: ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
                    '7a', '8a', '9a', '10a', '11a',
                    '12p', '1p', '2p', '3p', '4p', '5p',
                    '6p', '7p', '8p', '9p', '10p', '11p'],
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#999',
                        type: 'dashed',
                    },
                },
                axisLine: {
                    show: false,
                },
            },
            radiusAxis: {},
            toolbox: {
                show: true,
            },
            series: [{
                    name: '用户使用手机时段',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                        },
                    },
                    coordinateSystem: 'polar',
                    data: this.userTime.data,
                }],
        };
    };
    return SingleTimeComponent;
}());
SingleTimeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-single-time',
        template: "\n    <div echarts [options]=\"options\"  (chartInit)=\"chartInit($event)\" theme = \"macarons\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */]) === "function" && _a || Object])
], SingleTimeComponent);

var _a;
//# sourceMappingURL=single-time.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/singlehome/single-trend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleTrendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trend_trend__ = __webpack_require__("../../../../../src/app/pages/single/trend/trend.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SingleTrendComponent = (function () {
    function SingleTrendComponent() {
        this.options = {};
        this.trend = __WEBPACK_IMPORTED_MODULE_1__trend_trend__["a" /* TREND */];
    }
    SingleTrendComponent.prototype.ngAfterViewInit = function () {
        this.options = {
            title: [],
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                x: 150,
                top: '7%',
                textStyle: {
                    color: '#ffd285',
                },
                data: ['新用户', '老用户', '启动用户'],
            },
            grid: {
                left: '2%',
                top: '16%',
                bottom: '6%',
                containLabel: true,
            },
            toolbox: {
                'show': false,
                feature: {
                    saveAsImage: {},
                },
            },
            xAxis: {
                type: 'category',
                'axisTick': {
                    'show': false,
                },
                boundaryGap: false,
                data: this.trend.data,
            },
            yAxis: {
                splitLine: {
                    show: true,
                },
                'axisTick': {
                    'show': false,
                },
                type: 'value',
                axisLabel: {
                    formatter: '{value} 人',
                },
            },
            series: [{
                    name: '新用户',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.trend.detailData[0],
                }, {
                    name: '老用户',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.trend.detailData[1],
                }, {
                    name: '启动用户',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.trend.detailData[2],
                }],
        };
    };
    return SingleTrendComponent;
}());
SingleTrendComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-single-trend',
        template: "\n    <div  echarts [options]=\"options\" theme = \"light\" class=\"echart\"></div>\n  ",
    })
], SingleTrendComponent);

//# sourceMappingURL=single-trend.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/singlehome/single-version.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleVersionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__versionevo_version__ = __webpack_require__("../../../../../src/app/pages/single/versionevo/version.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SingleVersionComponent = (function () {
    function SingleVersionComponent() {
        this.options = {};
        this.seriesData = __WEBPACK_IMPORTED_MODULE_1__versionevo_version__["a" /* SERIESDATA */];
    }
    SingleVersionComponent.prototype.ngAfterViewInit = function () {
        this.options = {
            backgroundColor: '#fff',
            title: {
                text: '版本应用情况',
                // subtext: '2016年',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 16,
                },
            },
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)',
            },
            legend: {
                orient: 'horizontal',
                bottom: '0%',
                data: this.seriesData.allVersionString,
            },
            series: [{
                    type: 'pie',
                    selectedMode: 'single',
                    radius: ['25%', '58%'],
                    // color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],
                    label: {
                        normal: {
                            position: 'inner',
                            formatter: '{d}%',
                            textStyle: {
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 14,
                            },
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    data: this.seriesData.versionNumber,
                }, {
                    type: 'pie',
                    radius: ['58%', '83%'],
                    itemStyle: {
                        normal: {
                            color: '#F2F2F2',
                        },
                        emphasis: {
                            color: '#ADADAD',
                        },
                    },
                    label: {
                        normal: {
                            position: 'inner',
                            formatter: '{c}人',
                            textStyle: {
                                color: '#777777',
                                fontWeight: 'bold',
                                fontSize: 14,
                            },
                        },
                    },
                    data: this.seriesData.versionNumber,
                }],
        };
    };
    return SingleVersionComponent;
}());
SingleVersionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-single-version',
        template: "\n    <div echarts [options]=\"options\" theme = \"macarons\" class=\"echart\"></div>\n  ",
    })
], SingleVersionComponent);

//# sourceMappingURL=single-version.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/singlehome/singlehome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-right: 15px\">\r\n  <div class=\"col-md-12 bg\" style=\"padding-left: 0\">\r\n    <h4 style=\"float: left\">APP概览({{selected}})</h4>\r\n    <div class=\"dropdown search\" style=\"float: right;margin-right:30px\">\r\n      <form class=\"searchform\">\r\n        <input id=\"search\" name=\"search\" type=\"text\" autocomplete=\"off\" value=\"\" class=\"search-keyword\"\r\n               (focusout)=\"focusOut()\"\r\n               (focus)=\"focus()\" [ngModel]=\"content\" (ngModelChange)=\"change($event)\">\r\n        <span class=\"search-submit\"></span>\r\n      </form>\r\n      <div class=\"dropdown-menu\" *ngIf=\"show\"\r\n           style=\"display: block !important; color: #000;overflow-x: auto; overflow-y: auto; height: 290px;\">\r\n        <ul class=\"bilibili-suggest\" height=\"auto\">\r\n          <li class=\"kw\"><a>\r\n            <div class=\"b-line\"><p><span>关键词</span></p></div>\r\n          </a>\r\n          </li>\r\n          <li class=\"suggest-item\" (click)=\"click(item)\" *ngFor=\"let item of items |filter:content\">{{item}}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        <a routerLink=\"/pages/single/useractive\">用户活跃分析</a>\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <a routerLink=\"/pages/single/useractive\">\r\n          <ngx-single-active></ngx-single-active>\r\n        </a>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        <a routerLink=\"/pages/single/trend\">用户趋势分析</a>\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <a routerLink=\"/pages/single/trend\">\r\n          <ngx-single-trend></ngx-single-trend>\r\n        </a>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        <a routerLink=\"/pages/single/retention\">保留率分析</a>\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <a routerLink=\"/pages/single/retention\">\r\n          <ngx-single-retention></ngx-single-retention>\r\n        </a>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        <a routerLink=\"/pages/single/daytime\">日使用时长分析</a>\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <a routerLink=\"/pages/single/daytime\">\r\n          <ngx-single-day></ngx-single-day>\r\n        </a>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        <a routerLink=\"/pages/single/usertime\">使用时段分析</a>\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <a routerLink=\"/pages/single/usertime\">\r\n          <ngx-single-time></ngx-single-time>\r\n        </a>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        <a (click)=\"goDetail()\">版本分析</a>\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <a routerLink=\"/pages/single/versionevo\">\r\n          <ngx-single-version></ngx-single-version>\r\n        </a>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/single/singlehome/singlehome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.bg {\n  font-size: 1rem;\n  background: #ffffff;\n  margin-left: 15px;\n  margin-bottom: 1.5rem;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  font-weight: 400;\n  padding: 1.5rem 1rem; }\n\n.bg h4 {\n  margin-bottom: 0;\n  font-size: 20px;\n  color: #000000;\n  padding: 0 1rem; }\n\n.bg div {\n  padding-left: 0;\n  padding-top: 0; }\n\na {\n  color: #000000; }\n\na:hover {\n  color: #559ff0;\n  text-decoration: none; }\n\na:focus {\n  color: #559ff0;\n  text-decoration: none; }\n\n/*input {\r\n  width: 180px;\r\n  height: 30px;\r\n  color: #000000;\r\n  line-height: 20px;\r\n  padding: 5px 15px;\r\n  padding-left: 0.5rem;\r\n  outline: none;\r\n  border: 1px solid #4791ff;\r\n  background: #fafcfd;\r\n   border-radius: 0.375rem;\r\n}\r\n\r\n.search-item {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n\r\n.search-item li {\r\n  padding-left: 0.5rem;\r\n  padding-top: 0.25rem;\r\n  padding-bottom: 0.25rem;\r\n  !* border-bottom: 1px solid #dddddd;*!\r\n}\r\n\r\n.search-item li:hover {\r\n  background: #4cc0ff;\r\n}*/\n/*新作搜索界面*/\n.search {\n  position: absolute;\n  bottom: 20px;\n  right: 0;\n  width: 222px;\n  height: 30px;\n  padding: 2px 2px 2px 72px;\n  background-color: #e5e9ef;\n  background-color: rgba(0, 0, 0, 0.12);\n  border-radius: 0.375rem;\n  border: 1px solid #4791ff;\n  font-size: 12px;\n  z-index: 10; }\n\n.search .searchform {\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.88);\n  display: block;\n  height: 27px;\n  border-radius: 4px;\n  transition: background-color 0.2s; }\n\n.search-keyword {\n  float: left;\n  width: 184px;\n  color: #222;\n  font-size: 14px;\n  overflow: hidden;\n  height: 27px;\n  line-height: 27px;\n  padding: 0 12px;\n  border: 0;\n  box-shadow: none;\n  background-color: transparent;\n  outline: none; }\n\n.search-submit {\n  display: block;\n  position: absolute;\n  right: 0;\n  width: 48px;\n  min-width: 0;\n  cursor: pointer;\n  height: 27px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/search.svg") + ") 10px 0px no-repeat;\n  margin: 0;\n  padding: 0;\n  border: 0; }\n\n.bilibili-suggest {\n  position: relative;\n  border: 1px solid #e5e9ef;\n  margin-top: 4px;\n  background: #fff;\n  z-index: 99999;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n  padding-bottom: 5px;\n  font-size: 12px;\n  padding-left: 0; }\n\nul {\n  list-style: none; }\n\na, a:hover {\n  text-decoration: none; }\n\n.bilibili-suggest .b-line {\n  border-top: 1px solid #e5e9ef;\n  position: relative;\n  height: 10px;\n  margin: 10px 10px 0; }\n\n.bilibili-suggest .b-line p {\n  margin-top: -10px;\n  text-align: center; }\n\n.bilibili-suggest .b-line span {\n  display: inline-block;\n  padding: 0 10px;\n  height: 18px;\n  text-align: center;\n  cursor: pointer;\n  color: #99a2aa;\n  background: #fff; }\n\n.bilibili-suggest .suggest-item {\n  padding: 6px 10px;\n  cursor: pointer;\n  word-wrap: break-word;\n  word-break: break-all;\n  display: block;\n  color: #222;\n  position: relative; }\n\n.bilibili-suggest .suggest-item a {\n  color: #222;\n  display: block;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.bilibili-suggest .suggest-item:hover {\n  background-color: #e5e9ef; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/single/singlehome/singlehome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinglehomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_search_filter_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SinglehomeComponent = (function () {
    function SinglehomeComponent(router, singleService) {
        var _this = this;
        this.router = router;
        this.singleService = singleService;
        this.options = {};
        this.content = '';
        this.show = false;
        this.filter = new __WEBPACK_IMPORTED_MODULE_2_ng2_search_filter_ng2_search_filter__["a" /* Ng2SearchPipe */]();
        this.items = [];
        this.selected = singleService.getTimeStamp().appName;
        singleService.getAppNames().then(function (apps) {
            _this.items = apps;
        });
    }
    SinglehomeComponent.prototype.goDetail = function () {
        this.router.navigate(['/pages/single/versionevo']);
    };
    SinglehomeComponent.prototype.change = function (content) {
        this.show = true;
        this.content = content;
        if (this.filter.transform(this.items, this.content).length === 0)
            this.show = false;
    };
    SinglehomeComponent.prototype.click = function (value) {
        this.selected = value;
        this.show = false;
        this.singleService.changeApp(value);
        this.content = '';
    };
    SinglehomeComponent.prototype.focus = function () {
        if (this.filter.transform(this.items, this.content).length !== 0)
            this.show = true;
    };
    SinglehomeComponent.prototype.focusOut = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].timer(200).subscribe(function (x) { return _this.show = false; });
    };
    return SinglehomeComponent;
}());
SinglehomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts',
        styles: [__webpack_require__("../../../../../src/app/pages/single/singlehome/singlehome.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/single/singlehome/singlehome.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__single_service__["a" /* SingleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__single_service__["a" /* SingleService */]) === "function" && _b || Object])
], SinglehomeComponent);

var _a, _b;
//# sourceMappingURL=singlehome.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/trend/trend.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-right: 15px\">\r\n  <div class=\"col-md-12 bg\" style=\"padding-left: 0\">\r\n    <h4>{{title}}用户趋势分析</h4>\r\n    <div>\r\n      <input type=\"text\" id=\"startEndTime\" name=\"startEndTime\" placeholder=\"日期\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}用户趋势分析指标\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div echarts [options]=\"options\" theme=\"shine\" (chartInit)=\"chartInit($event)\" class=\"echart test\"></div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}用户趋势分析指标说明\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/single/trend/trend.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\nnb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.bg {\n  font-size: 1rem;\n  background: #ffffff;\n  margin-left: 15px;\n  margin-bottom: 1.5rem;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  font-weight: 400;\n  padding: 1.5rem 1rem; }\n\n.bg h4 {\n  margin-bottom: 0;\n  font-size: 20px;\n  color: #000000;\n  padding: 0 1rem;\n  padding-bottom: 0.5rem; }\n\n.bg div {\n  padding-left: 1rem;\n  padding-top: 0; }\n\ntable, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit; }\n\n.summary-wrapper {\n  position: relative;\n  min-height: 100px;\n  padding: 1.25rem; }\n\n.summary-wrapper .summary-container {\n  overflow: auto;\n  padding: 20px 0; }\n\n.summary-wrapper .summary-container {\n  padding: 0;\n  overflow: hidden;\n  position: relative; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntable.summary {\n  table-layout: fixed;\n  width: 100%; }\n\ntable.summary {\n  border-collapse: separate; }\n\n.summary-wrapper .summary-container .summary {\n  width: 100%;\n  margin-left: 0;\n  table-layout: fixed; }\n\n.summary-wrapper .summary-container .summary td {\n  cursor: default;\n  border-right: none;\n  padding: 0;\n  width: 156px;\n  text-align: center;\n  vertical-align: center; }\n\n.summary-wrapper .summary-container .summary.data-link td, .summary-wrapper .summary-container .summary.data-link td .summary-item span {\n  cursor: pointer; }\n\n.summary-wrapper .summary-container .summary td .summary-item {\n  height: 100%;\n  margin-right: 10px;\n  border-top: 2px solid transparent; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  text-align: left;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.summary-wrapper .summary-container .summary td .summary-item span:first-child {\n  padding-top: 25px; }\n\n.summary-wrapper .summary-container .summary td .summary-item span.text {\n  font-size: 12px;\n  color: #7f8392; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center; }\n\n.selected {\n  border-top: 2px solid #396fff; }\n  .selected .text {\n    color: #396fff !important; }\n  .selected .value {\n    color: #396fff; }\n\ninput {\n  border: none;\n  font-size: 0.9em;\n  color: #6a6f77;\n  -web-kit-appearance: none;\n  -moz-appearance: none;\n  display: block;\n  outline: 0;\n  padding: 0;\n  text-decoration: none;\n  width: 100%;\n  padding-right: 18px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/down.svg") + ") no-repeat scroll 168px 2px transparent; }\n\ninput:focus {\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/single/trend/trend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_table_service__ = __webpack_require__("../../../../../src/app/pages/single/single-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trend__ = __webpack_require__("../../../../../src/app/pages/single/trend/trend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrendComponent = (function () {
    function TrendComponent(service, singleService) {
        this.service = service;
        this.singleService = singleService;
        this.options = {};
        this.trend = __WEBPACK_IMPORTED_MODULE_4__trend__["a" /* TREND */];
        this.settings = {
            actions: false,
            hideSubHeader: true,
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                },
                date: {
                    title: '日期',
                    type: 'string',
                },
                newUser: {
                    title: '新用户',
                    type: 'number',
                },
                newProp: {
                    title: '新用户占比',
                    type: 'string',
                },
                oldUser: {
                    title: '老用户',
                    type: 'number',
                },
                oldProp: {
                    title: '老用户占比',
                    type: 'string',
                },
                startUser: {
                    title: '启动用户',
                    type: 'number',
                },
                startNumber: {
                    title: '启动次数',
                    type: 'number',
                },
                avgTime: {
                    title: '人均使用时长',
                    type: 'string',
                },
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.title = singleService.getTimeStamp().appName;
        var data = this.service.getTrendData();
        this.source.load(data);
    }
    TrendComponent.prototype.chartInit = function (ev) {
        var _this = this;
        this.mInstance = ev;
        this.singleService.changeActiveData(this.singleService.getTimeStamp());
        this.mInstance.on('updateAxisPointer', function (event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                _this.options.series[3].data[0].value = _this.trend.propData[event.dataIndex];
                _this.options.series[3].data[1].value = 100 - _this.trend.propData[event.dataIndex];
                _this.mInstance.setOption(_this.options);
            }
        });
    };
    TrendComponent.prototype.ngOnInit = function () {
        this.dateRangePicker();
        this.options = {
            title: [
                {
                    text: '新老用户占比',
                    left: '92%',
                    top: '13%',
                    textAlign: 'center',
                }
            ],
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                x: 500,
                top: '7%',
                textStyle: {
                    color: '#ffd285',
                },
                data: ['新用户', '老用户', '启动用户'],
            },
            grid: {
                left: '2%',
                right: '18%',
                top: '16%',
                bottom: '6%',
                containLabel: true,
            },
            toolbox: {
                'show': false,
                feature: {
                    saveAsImage: {},
                },
            },
            xAxis: {
                type: 'category',
                'axisTick': {
                    'show': false,
                },
                boundaryGap: false,
                data: this.trend.data,
            },
            yAxis: {
                splitLine: {
                    show: true,
                },
                'axisTick': {
                    'show': false,
                },
                type: 'value',
                axisLabel: {
                    formatter: '{value} 人',
                },
            },
            dataZoom: [{
                    textStyle: {
                        color: '#8392A5',
                    },
                    handleSize: '80%',
                    dataBackground: {
                        areaStyle: {
                            color: '#8392A5',
                        },
                        lineStyle: {
                            opacity: 0.8,
                            color: '#8392A5',
                        },
                    },
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2,
                    },
                }, {
                    type: 'inside',
                }],
            series: [{
                    name: '新用户',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.trend.detailData[0],
                }, {
                    name: '老用户',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.trend.detailData[1],
                }, {
                    name: '启动用户',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.trend.detailData[2],
                }, {
                    type: 'pie',
                    center: ['93%', '40%'],
                    radius: ['25%', '30%'],
                    label: {
                        normal: {
                            position: 'center',
                        },
                    },
                    data: [{
                            value: this.trend.propData[0],
                            name: '新老用户占比',
                            itemStyle: {
                                normal: {
                                    color: '#ffd285',
                                },
                            },
                            label: {
                                normal: {
                                    formatter: '{d} %',
                                    textStyle: {
                                        color: '#ffd285',
                                        fontSize: 20,
                                    },
                                },
                            },
                        }, {
                            value: 100 - this.trend.propData[0],
                            name: '占比',
                            tooltip: {
                                show: false,
                            },
                            itemStyle: {
                                normal: {
                                    color: '#87CEFA',
                                },
                            },
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#ffd285',
                                    },
                                    formatter: '\n新用户占比',
                                },
                            },
                        }],
                }],
        };
        /*this.options = {
          legend: {
            data: ['用户趋势分析'],
          },
          tooltip: {
            trigger: 'axis',
            formatter: '{b}<br/>新用户 : {c}',
          },
          animation: true,
          animationDurationUpdate: 1000,
          animationEasingUpdate: 'cubicInOut',
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.trend.xdata,
            splitLine: {
              lineStyle: {
                type: 'dashed',
              },
            },
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                type: 'dashed',
              },
            },
            axisLabel: {
              formatter: '{value} 人',
            },
            scale: true,
          },
          dataZoom: [{
            textStyle: {
              color: '#8392A5',
            },
            handleSize: '80%',
            dataBackground: {
              areaStyle: {
                color: '#8392A5',
              },
              lineStyle: {
                opacity: 0.8,
                color: '#8392A5',
              },
            },
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
          }, {
            type: 'inside',
          }],
          toolbox: {
            show: true,
            orient: 'vertical',
            feature: {
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true},
            },
          },
          series: [{
            name: '用户趋势分析',
            data: this.trend.seriesData,
            type: 'line',
            smooth: true,
            label: {
              type: 'text',
              normal: {
                show: true,
                formatter: function (param) {
                  return param.data.name;
                },
                position: 'top',
              },
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                  offset: 0,
                  color: 'rgb(129, 227, 238)',
                }, {
                  offset: 1,
                  color: 'rgb(25, 183, 207)',
                }]),
              },
            },
          }],
        };*/
    };
    TrendComponent.prototype.dateRangePicker = function () {
        var picker = $('#startEndTime');
        var dataRageOption = {
            locale: {
                applyClass: 'btn-green',
                applyLabel: '确定',
                cancelLabel: '取消',
                fromLabel: '开始',
                format: 'YYYY/MM/DD',
                toLabel: '到',
                customRangeLabel: '自定义时间',
                daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                firstDay: 1,
                monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            },
            maxDate: __WEBPACK_IMPORTED_MODULE_5_moment__(),
            startDate: __WEBPACK_IMPORTED_MODULE_5_moment__().startOf('month'),
            endDate: __WEBPACK_IMPORTED_MODULE_5_moment__(),
            // minDate: moment().subtract(90, 'days'),
            'ranges': {
                '今日': [
                    __WEBPACK_IMPORTED_MODULE_5_moment__(),
                    __WEBPACK_IMPORTED_MODULE_5_moment__(),
                ],
                '昨日': [
                    __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'days'),
                    __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'days'),
                ],
                '本周': [__WEBPACK_IMPORTED_MODULE_5_moment__().subtract(7, 'days'), __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'days')],
                '最近30天': [__WEBPACK_IMPORTED_MODULE_5_moment__().subtract(30, 'days'), __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'days')],
                '本月': [__WEBPACK_IMPORTED_MODULE_5_moment__().startOf('month'), __WEBPACK_IMPORTED_MODULE_5_moment__().endOf('month')],
                '上个月': [__WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'month').startOf('month'), __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'month').endOf('month')],
            },
            'alwaysShowCalendars': true,
            'showCustomRangeLabel': false,
        };
        picker.daterangepicker(dataRageOption, function (start, end, label) {
            console.info("start:" + start.format('YYYY/MM/DD') + ", end:" + end + ", label:" + label);
        });
    };
    return TrendComponent;
}());
TrendComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-trend',
        template: __webpack_require__("../../../../../src/app/pages/single/trend/trend.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/single/trend/trend.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__single_table_service__["a" /* SingleTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__single_table_service__["a" /* SingleTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */]) === "function" && _b || Object])
], TrendComponent);

var _a, _b;
//# sourceMappingURL=trend.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/trend/trend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TRENDDATA */
/* unused harmony export Trend */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TREND; });
var TRENDDATA = [
    [90, 50, 39, 50, 120, 82, 80],
    [70, 50, 50, 87, 90, 80, 70],
    [290, 200, 20, 132, 15, 200, 90],
];
var Trend = (function () {
    function Trend() {
    }
    return Trend;
}());

var TREND = {
    data: ['2018/01/01', '2018/01/02', '2018/01/03', '2018/01/04', '2018/01/05', '2018/01/06', '2018/01/07'],
    detailData: TRENDDATA,
    propData: [60, 20, 25, 45, 36, 60, 82],
};
//# sourceMappingURL=trend.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/useractive/useractive.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-right: 15px\">\r\n  <div class=\"col-md-12 bg\" style=\"padding-left: 0\">\r\n    <h4>{{title}}用户活跃分析</h4>\r\n    <div>\r\n      <input type=\"text\" id=\"startEndTime\" name=\"startEndTime\" placeholder=\"日期\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}用户活跃分析指标\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div echarts [options]=\"options\" theme=\"shine\" (chartInit)=\"chartInit($event)\" class=\"echart test\"></div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}用户活跃分析指标说明\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\r\n    </ng2-smart-table>\r\n    <div class=\"row\">\r\n      <ngb-pagination  size=\"md\" style=\"margin: 0 auto;margin-top: 1.5rem\" [pageSize]=\"10\" [collectionSize]=\"pageSize\" (pageChange)=\"changePage($event)\" [(page)]=\"page\" [maxSize]=\"maxSize\" [rotate]=\"true\" ></ngb-pagination>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/single/useractive/useractive.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\nnb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.bg {\n  font-size: 1rem;\n  background: #ffffff;\n  margin-left: 15px;\n  margin-bottom: 1.5rem;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  font-weight: 400;\n  padding: 1.5rem 1rem; }\n\n.bg h4 {\n  margin-bottom: 0;\n  font-size: 20px;\n  color: #000000;\n  padding: 0 1rem;\n  padding-bottom: 0.5rem; }\n\n.bg div {\n  padding-left: 1rem;\n  padding-top: 0; }\n\ntable, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit; }\n\n.summary-wrapper {\n  position: relative;\n  min-height: 100px;\n  padding: 1.25rem; }\n\n.summary-wrapper .summary-container {\n  overflow: auto;\n  padding: 20px 0; }\n\n.summary-wrapper .summary-container {\n  padding: 0;\n  overflow: hidden;\n  position: relative; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntable.summary {\n  table-layout: fixed;\n  width: 100%; }\n\ntable.summary {\n  border-collapse: separate; }\n\n.summary-wrapper .summary-container .summary {\n  width: 100%;\n  margin-left: 0;\n  table-layout: fixed; }\n\n.summary-wrapper .summary-container .summary td {\n  cursor: default;\n  border-right: none;\n  padding: 0;\n  width: 156px;\n  text-align: center;\n  vertical-align: center; }\n\n.summary-wrapper .summary-container .summary.data-link td, .summary-wrapper .summary-container .summary.data-link td .summary-item span {\n  cursor: pointer; }\n\n.summary-wrapper .summary-container .summary td .summary-item {\n  height: 100%;\n  margin-right: 10px;\n  border-top: 2px solid transparent; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  text-align: left;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.summary-wrapper .summary-container .summary td .summary-item span:first-child {\n  padding-top: 25px; }\n\n.summary-wrapper .summary-container .summary td .summary-item span.text {\n  font-size: 12px;\n  color: #7f8392; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center; }\n\n.selected {\n  border-top: 2px solid #396fff; }\n  .selected .text {\n    color: #396fff !important; }\n  .selected .value {\n    color: #396fff; }\n\ninput {\n  border: none;\n  font-size: 0.9em;\n  color: #6a6f77;\n  -web-kit-appearance: none;\n  -moz-appearance: none;\n  display: block;\n  outline: 0;\n  padding: 0;\n  text-decoration: none;\n  width: 100%;\n  padding-right: 18px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/down.svg") + ") no-repeat scroll 168px 2px transparent; }\n\ninput:focus {\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/single/useractive/useractive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UseractiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_table_service__ = __webpack_require__("../../../../../src/app/pages/single/single-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single__ = __webpack_require__("../../../../../src/app/pages/single/single.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UseractiveComponent = (function () {
    function UseractiveComponent(service, singleService) {
        var _this = this;
        this.service = service;
        this.singleService = singleService;
        this.options = {};
        this.useractive = __WEBPACK_IMPORTED_MODULE_5__single__["e" /* USERACTIVE */];
        this.page = 1;
        this.pageSize = 10;
        this.maxSize = 3;
        this.settings = {
            actions: false,
            hideSubHeader: true,
            pager: {
                display: false,
            },
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                },
                date: {
                    title: '日期',
                    type: 'string',
                },
                dayUser: {
                    title: '启动用户',
                    type: 'number',
                },
                dayActive: {
                    title: '日活跃度',
                    type: 'string',
                },
                dayMonth: {
                    title: '日活/月活',
                    type: 'string',
                },
                monthUser: {
                    title: '月活跃用户',
                    type: 'number',
                },
                monthActive: {
                    title: '月活跃度',
                    type: 'string',
                },
                monthSilentUser: {
                    title: '月沉默用户',
                    type: 'number',
                },
                monthSlice: {
                    title: '月沉默率',
                    type: 'string',
                },
                leaveUser: {
                    title: '流失用户',
                    type: 'number',
                },
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.title = this.singleService.getTimeStamp().appName;
        var data = this.service.getUserActiveData();
        this.source.load(data);
        singleService.getActiveSubject().subscribe(function (x) {
            singleService.getUserActive(x).then(function (z) {
                _this.useractive = z;
                _this.options.xAxis.data = _this.useractive.date;
                _this.options.series[0].data = _this.useractive.clickNum;
                _this.mInstance.setOption(_this.options);
            });
        });
    }
    UseractiveComponent.prototype.changePage = function (page) {
        console.log(page);
    };
    UseractiveComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
        this.singleService.changeActiveData(this.singleService.getTimeStamp());
    };
    UseractiveComponent.prototype.ngOnInit = function () {
        this.dateRangePicker();
        this.options = {
            legend: {
                data: ['用户活跃分析'],
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0].name + '<br/>'
                        + '日活跃度 : ' + params[0].value + '<br/>';
                },
            },
            animation: true,
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'cubicInOut',
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.useractive.date,
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                    },
                },
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                    },
                },
                axisLabel: {
                    formatter: '{value}',
                },
                scale: true,
            },
            dataZoom: [{
                    textStyle: {
                        color: '#8392A5',
                    },
                    handleSize: '80%',
                    dataBackground: {
                        areaStyle: {
                            color: '#8392A5',
                        },
                        lineStyle: {
                            opacity: 0.8,
                            color: '#8392A5',
                        },
                    },
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2,
                    },
                }, {
                    type: 'inside',
                }],
            toolbox: {
                show: true,
                orient: 'vertical',
                feature: {
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            series: [{
                    name: '用户活跃分析',
                    data: this.useractive.clickNum,
                    type: 'line',
                    label: {
                        type: 'text',
                        normal: {
                            show: true,
                            formatter: function (param) {
                                return param.data.name;
                            },
                            position: 'top',
                        },
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(25, 100, 150, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                    offset: 0,
                                    color: 'rgb(129, 227, 238)',
                                }, {
                                    offset: 1,
                                    color: 'rgb(25, 183, 207)',
                                }]),
                        },
                    },
                }],
        };
    };
    UseractiveComponent.prototype.dateRangePicker = function () {
        var _this = this;
        var picker = $('#startEndTime');
        var dataRageOption = {
            locale: {
                applyClass: 'btn-green',
                applyLabel: '确定',
                cancelLabel: '取消',
                fromLabel: '开始',
                format: 'YYYY/MM/DD',
                toLabel: '到',
                customRangeLabel: '自定义时间',
                daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                firstDay: 1,
                monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            },
            startDate: __WEBPACK_IMPORTED_MODULE_4_moment__().startOf('month'),
            endDate: __WEBPACK_IMPORTED_MODULE_4_moment__(),
            maxDate: __WEBPACK_IMPORTED_MODULE_4_moment__(),
            // minDate: moment().subtract(90, 'days'),
            'ranges': {
                '今日': [
                    __WEBPACK_IMPORTED_MODULE_4_moment__(),
                    __WEBPACK_IMPORTED_MODULE_4_moment__(),
                ],
                '昨日': [
                    __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(1, 'days'),
                    __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(1, 'days'),
                ],
                '本周': [__WEBPACK_IMPORTED_MODULE_4_moment__().subtract(7, 'days'), __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(1, 'days')],
                '最近30天': [__WEBPACK_IMPORTED_MODULE_4_moment__().subtract(30, 'days'), __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(1, 'days')],
                '本月': [__WEBPACK_IMPORTED_MODULE_4_moment__().startOf('month'), __WEBPACK_IMPORTED_MODULE_4_moment__().endOf('month')],
                '上个月': [__WEBPACK_IMPORTED_MODULE_4_moment__().subtract(1, 'month').startOf('month'), __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(1, 'month').endOf('month')],
            },
            'alwaysShowCalendars': true,
            'showCustomRangeLabel': false,
        };
        picker.daterangepicker(dataRageOption, function (start, end, label) {
            console.info("start:" + start.format('YYYY-MM-DD') + ", end:" + end + ", label:" + label);
            var timeStamp = new __WEBPACK_IMPORTED_MODULE_5__single__["d" /* TimeStamp */]();
            timeStamp.startTime = start.format('YYYY-MM-DD');
            timeStamp.endTime = end.format('YYYY-MM-DD');
            _this.singleService.changeActiveData(timeStamp);
        });
    };
    return UseractiveComponent;
}());
UseractiveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-useractive',
        template: __webpack_require__("../../../../../src/app/pages/single/useractive/useractive.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/single/useractive/useractive.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__single_table_service__["a" /* SingleTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__single_table_service__["a" /* SingleTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */]) === "function" && _b || Object])
], UseractiveComponent);

var _a, _b;
//# sourceMappingURL=useractive.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/usertime/usertime.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-right: 15px\">\r\n  <div class=\"col-md-12 bg\" style=\"padding-left: 0\">\r\n    <h4>{{title}}使用时段分析</h4>\r\n    <div>\r\n      <input type=\"text\" id=\"startEndTime\"\r\n             name=\"startEndTime\" placeholder=\"开始-结束时间\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}使用时段分析指标\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div echarts [options]=\"options\" (chartInit)=\"chartInit($event)\" theme=\"macarons\" class=\"echart test\"></div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}使用时段分析指标说明\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/single/usertime/usertime.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\nnb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.bg {\n  font-size: 1rem;\n  background: #ffffff;\n  margin-left: 15px;\n  margin-bottom: 1.5rem;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  font-weight: 400;\n  padding: 1.5rem 1rem; }\n\n.bg h4 {\n  margin-bottom: 0;\n  font-size: 20px;\n  color: #000000;\n  padding: 0 1rem;\n  padding-bottom: 0.5rem; }\n\n.bg div {\n  padding-left: 1rem;\n  padding-top: 0; }\n\ntable, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit; }\n\n.summary-wrapper {\n  position: relative;\n  min-height: 100px;\n  padding: 1.25rem; }\n\n.summary-wrapper .summary-container {\n  overflow: auto;\n  padding: 20px 0; }\n\n.summary-wrapper .summary-container {\n  padding: 0;\n  overflow: hidden;\n  position: relative; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntable.summary {\n  table-layout: fixed;\n  width: 100%; }\n\ntable.summary {\n  border-collapse: separate; }\n\n.summary-wrapper .summary-container .summary {\n  width: 100%;\n  margin-left: 0;\n  table-layout: fixed; }\n\n.summary-wrapper .summary-container .summary td {\n  cursor: default;\n  border-right: none;\n  padding: 0;\n  width: 156px;\n  text-align: center;\n  vertical-align: center; }\n\n.summary-wrapper .summary-container .summary.data-link td, .summary-wrapper .summary-container .summary.data-link td .summary-item span {\n  cursor: pointer; }\n\n.summary-wrapper .summary-container .summary td .summary-item {\n  height: 100%;\n  margin-right: 10px;\n  border-top: 2px solid transparent; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  text-align: left;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.summary-wrapper .summary-container .summary td .summary-item span:first-child {\n  padding-top: 25px; }\n\n.summary-wrapper .summary-container .summary td .summary-item span.text {\n  font-size: 12px;\n  color: #7f8392; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center; }\n\n.selected {\n  border-top: 2px solid #396fff; }\n  .selected .text {\n    color: #396fff !important; }\n  .selected .value {\n    color: #396fff; }\n\ninput {\n  border: none;\n  font-size: 0.9em;\n  color: #6a6f77;\n  -web-kit-appearance: none;\n  -moz-appearance: none;\n  display: block;\n  outline: 0;\n  padding: 0;\n  text-decoration: none;\n  width: 100%;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/down.svg") + ") no-repeat scroll 75px 2px transparent; }\n\ninput:focus {\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/single/usertime/usertime.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsertimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_table_service__ = __webpack_require__("../../../../../src/app/pages/single/single-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single__ = __webpack_require__("../../../../../src/app/pages/single/single.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__usertime__ = __webpack_require__("../../../../../src/app/pages/single/usertime/usertime.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UsertimeComponent = (function () {
    function UsertimeComponent(service, singleService, http) {
        var _this = this;
        this.service = service;
        this.singleService = singleService;
        this.http = http;
        this.BaseUrl = 'http://10.0.0.30:8000/';
        this.options = {};
        this.userTime = __WEBPACK_IMPORTED_MODULE_5__single__["f" /* USERTIME */];
        this.testData = __WEBPACK_IMPORTED_MODULE_7__usertime__["a" /* TESTDATA */];
        this.settings = {
            actions: false,
            hideSubHeader: true,
            columns: {
                number: {
                    title: 'ID',
                    type: 'number',
                },
                province: {
                    title: '省份',
                    type: 'string',
                },
                city: {
                    title: '城市',
                    type: 'string',
                },
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.title = this.singleService.getReqData().appName;
        var url = this.BaseUrl + 'listAll';
        http.get(url).toPromise().then(function (x) {
            _this.testData = x;
            console.log(_this.testData);
            _this.source.load(_this.testData);
        });
        singleService.getDateSubject().subscribe(function (x) {
            singleService.getUserTime(x).then(function (z) {
                _this.userTime = z;
                _this.options.series[0].data = _this.userTime.data;
                _this.mInstance.setOption(_this.options);
            });
        });
    }
    UsertimeComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
        this.singleService.changeDate(this.singleService.getReqData());
    };
    UsertimeComponent.prototype.ngOnInit = function () {
        this.dateRangePicker();
        this.options = {
            legend: {
                data: ['使用时段分析'],
                left: 'right',
                show: true,
            },
            polar: {},
            tooltip: {
                formatter: '{a} <br/>{b} :  {c}%',
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            angleAxis: {
                type: 'category',
                data: ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
                    '7a', '8a', '9a', '10a', '11a',
                    '12p', '1p', '2p', '3p', '4p', '5p',
                    '6p', '7p', '8p', '9p', '10p', '11p'],
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#999',
                        type: 'dashed',
                    },
                },
                axisLine: {
                    show: false,
                },
            },
            radiusAxis: {},
            toolbox: {
                show: true,
                orient: 'vertical',
                top: 'center',
                feature: {
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            dataZoom: [{
                    textStyle: {
                        color: '#8392A5',
                    },
                    handleSize: '80%',
                    dataBackground: {
                        areaStyle: {
                            color: '#8392A5',
                        },
                        lineStyle: {
                            opacity: 0.8,
                            color: '#8392A5',
                        },
                    },
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2,
                    },
                }, {
                    type: 'inside',
                }],
            series: [{
                    name: '用户使用手机时段',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                        },
                    },
                    coordinateSystem: 'polar',
                    data: this.userTime.data,
                }],
        };
    };
    UsertimeComponent.prototype.dateRangePicker = function () {
        var _this = this;
        var picker = $('#startEndTime');
        var dataRageOption = {
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                applyClass: 'btn-green',
                applyLabel: '确定',
                cancelLabel: '取消',
                daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                firstDay: 1,
                monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                format: 'YYYY-MM-DD',
            },
            maxDate: __WEBPACK_IMPORTED_MODULE_4_moment__(),
        };
        picker.daterangepicker(dataRageOption, function (start, end, label) {
            console.info("start:" + start.format('YYYY-MM-DD') + ", end:" + end + ", label:" + label);
            var reqData = new __WEBPACK_IMPORTED_MODULE_5__single__["b" /* ReqData */]();
            reqData.reqTime = start.format('YYYY-MM-DD');
            _this.singleService.changeDate(reqData);
        });
    };
    return UsertimeComponent;
}());
UsertimeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-usertime',
        template: __webpack_require__("../../../../../src/app/pages/single/usertime/usertime.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/single/usertime/usertime.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__single_table_service__["a" /* SingleTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__single_table_service__["a" /* SingleTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
], UsertimeComponent);

var _a, _b, _c;
//# sourceMappingURL=usertime.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/usertime/usertime.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TestData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TESTDATA; });
var TestData = (function () {
    function TestData() {
    }
    return TestData;
}());

var TESTDATA = [
    {
        id: '1',
        number: 1,
        province: '湖南',
        city: '衡阳',
        name: 'jack',
    },
    {
        id: '2',
        number: 2,
        province: '湖南',
        city: '长沙',
        name: 'jack',
    },
    {
        id: '3',
        number: 3,
        province: '湖南',
        city: '张家界',
        name: 'jack',
    },
    {
        id: '4',
        number: 4,
        province: '湖南',
        city: '张家界',
        name: 'jack',
    },
    {
        id: '4',
        number: 4,
        province: '湖南',
        city: '张家界',
        name: 'jack',
    },
    {
        id: '4',
        number: 4,
        province: '湖南',
        city: '张家界',
        name: 'jack',
    },
    {
        id: '4',
        number: 4,
        province: '湖南',
        city: '张家界',
        name: 'jack',
    },
    {
        id: '4',
        number: 4,
        province: '湖南',
        city: '张家界',
        name: 'jack',
    },
    {
        id: '4',
        number: 4,
        province: '湖南',
        city: '张家界',
        name: 'jack',
    },
    {
        id: '4',
        number: 4,
        province: '湖南',
        city: '张家界',
        name: 'jack',
    },
    {
        id: '4',
        number: 4,
        province: '湖南',
        city: '张家界',
        name: 'jack',
    },
    {
        id: '12',
        number: 12,
        province: '湖南',
        city: '张家界',
        name: 'jack',
    },
];
//# sourceMappingURL=usertime.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/versionevo/version.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EVODATA */
/* unused harmony export Apply */
/* unused harmony export DETAILDATA */
/* unused harmony export Version */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERIESDATA; });
var EVODATA = [
    [10, 12, 10, 5, 9, 3, 2],
    [2, 8, 9, 14, 12, 8, 11],
    [15, 12, 10, 14, 19, 13, 9],
    [10, 13, 7, 10, 9, 8, 3],
    [8, 12, 9, 9, 12, 10, 13],
    [8, 9, 6, 12, 15, 13, 11],
];
var Apply = (function () {
    function Apply() {
    }
    return Apply;
}());

var DETAILDATA = [{
        value: 3661,
        name: '版本2.1',
    }, {
        value: 5713,
        name: '版本2.2',
    }, {
        value: 9938,
        name: '版本2.3',
    }, {
        value: 17623,
        name: '版本2.4',
    }, {
        value: 3299,
        name: '版本2.5',
    }];
var Version = (function () {
    function Version() {
    }
    return Version;
}());

var SERIESDATA = {
    allVersionString: ['版本2.1', '版本2.2', '版本2.3', '版本2.4', '版本2.5'],
    versionNumber: DETAILDATA,
    allVersion: ['2.1', '2.2', '2.3', '2.4', '2.5'],
    date: ['2018/03/06', '2018/03/07', '2018/03/08', '2018/03/09', '2018/03/10', '2018/03/11', '2018/03/12'],
    everyDayVersion: EVODATA,
};
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "../../../../../src/app/pages/single/versionevo/versionevo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-right: 15px\">\r\n  <div class=\"col-md-12 bg\" style=\"padding-left: 0\">\r\n    <h4>{{title}}版本分析</h4>\r\n    <div>\r\n      <input type=\"text\" id=\"startEndTime\" name=\"startEndTime\" placeholder=\"日期\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}版本应用情况分析\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div echarts [options]=\"options1\" theme=\"macarons\" class=\"echart test\"></div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}版本演化分析\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div echarts [options]=\"options\" (chartInit)=\"chartInit($event)\" theme=\"macarons\" class=\"echart test\"></div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n\r\n<nb-card>\r\n  <nb-card-header>\r\n    {{title}}版本演化分析指标说明\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/single/versionevo/versionevo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .test {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\nnb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.bg {\n  font-size: 1rem;\n  background: #ffffff;\n  margin-left: 15px;\n  margin-bottom: 1.5rem;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  font-weight: 400;\n  padding: 1.5rem 1rem; }\n\n.bg h4 {\n  margin-bottom: 0;\n  font-size: 20px;\n  color: #000000;\n  padding: 0 1rem;\n  padding-bottom: 0.5rem; }\n\n.bg div {\n  padding-left: 1rem;\n  padding-top: 0; }\n\ntable, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit; }\n\n.summary-wrapper {\n  position: relative;\n  min-height: 100px;\n  padding: 1.25rem; }\n\n.summary-wrapper .summary-container {\n  overflow: auto;\n  padding: 20px 0; }\n\n.summary-wrapper .summary-container {\n  padding: 0;\n  overflow: hidden;\n  position: relative; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntable.summary {\n  table-layout: fixed;\n  width: 100%; }\n\ntable.summary {\n  border-collapse: separate; }\n\n.summary-wrapper .summary-container .summary {\n  width: 100%;\n  margin-left: 0;\n  table-layout: fixed; }\n\n.summary-wrapper .summary-container .summary td {\n  cursor: default;\n  border-right: none;\n  padding: 0;\n  width: 156px;\n  text-align: center;\n  vertical-align: center; }\n\n.summary-wrapper .summary-container .summary.data-link td, .summary-wrapper .summary-container .summary.data-link td .summary-item span {\n  cursor: pointer; }\n\n.summary-wrapper .summary-container .summary td .summary-item {\n  height: 100%;\n  margin-right: 10px;\n  border-top: 2px solid transparent; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  text-align: left;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.summary-wrapper .summary-container .summary td .summary-item span:first-child {\n  padding-top: 25px; }\n\n.summary-wrapper .summary-container .summary td .summary-item span.text {\n  font-size: 12px;\n  color: #7f8392; }\n\n.summary-wrapper .summary-container .summary td .summary-item span {\n  cursor: default;\n  margin-bottom: 20px;\n  line-height: 1;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center; }\n\n.selected {\n  border-top: 2px solid #396fff; }\n  .selected .text {\n    color: #396fff !important; }\n  .selected .value {\n    color: #396fff; }\n\ninput {\n  border: none;\n  font-size: 0.9em;\n  color: #6a6f77;\n  -web-kit-appearance: none;\n  -moz-appearance: none;\n  display: block;\n  outline: 0;\n  padding: 0;\n  text-decoration: none;\n  width: 100%;\n  padding-right: 18px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/down.svg") + ") no-repeat scroll 168px 2px transparent; }\n\ninput:focus {\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/single/versionevo/versionevo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionevoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_service__ = __webpack_require__("../../../../../src/app/pages/single/single.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_table_service__ = __webpack_require__("../../../../../src/app/pages/single/single-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__version__ = __webpack_require__("../../../../../src/app/pages/single/versionevo/version.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__single__ = __webpack_require__("../../../../../src/app/pages/single/single.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VersionevoComponent = (function () {
    function VersionevoComponent(service, singleService) {
        var _this = this;
        this.service = service;
        this.singleService = singleService;
        this.options = {};
        this.options1 = {};
        this.seriesData = __WEBPACK_IMPORTED_MODULE_4__version__["a" /* SERIESDATA */];
        this.settings = {
            actions: false,
            hideSubHeader: true,
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                },
                application: {
                    title: '版本',
                    type: 'string',
                },
                updateUser: {
                    title: '升级用户',
                    type: 'number',
                },
                newUser: {
                    title: '新用户',
                    type: 'number',
                },
                startNumber: {
                    title: '启动次数',
                    type: 'number',
                },
                startUser: {
                    title: '启动用户(分布)',
                    type: 'string',
                },
                startTime: {
                    title: '平均使用时长',
                    type: 'string',
                },
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.title = this.singleService.getTimeStamp().appName;
        var data = this.service.getVersionData();
        this.source.load(data);
        singleService.getActiveSubject().subscribe(function (x) {
            singleService.getVersion(x).then(function (z) {
                _this.seriesData = z;
                console.log('演化分析数据');
                console.log(_this.seriesData);
                _this.options.legend.data = _this.seriesData.allVersion;
                _this.options.xAxis[0].data = _this.seriesData.date;
                var k = 0;
                for (var _i = 0, _a = _this.seriesData.everyDayVersion; _i < _a.length; _i++) {
                    var s = _a[_i];
                    _this.options.series[k].data = s;
                    k++;
                }
                var i = 0;
                for (var _b = 0, _c = _this.seriesData.allVersion; _b < _c.length; _b++) {
                    var s = _c[_b];
                    _this.options.series[i].name = s;
                    i++;
                }
                _this.mInstance.setOption(_this.options);
            });
        });
    }
    VersionevoComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
        this.singleService.changeActiveData(this.singleService.getTimeStamp());
    };
    VersionevoComponent.prototype.ngOnInit = function () {
        this.dateRangePicker();
        this.options1 = {
            backgroundColor: '#fff',
            title: {
                text: '版本应用情况',
                // subtext: '2016年',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 16,
                },
            },
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)',
            },
            legend: {
                orient: 'horizontal',
                bottom: '0%',
                data: this.seriesData.allVersionString,
            },
            series: [{
                    type: 'pie',
                    selectedMode: 'single',
                    radius: ['25%', '58%'],
                    // color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],
                    label: {
                        normal: {
                            position: 'inner',
                            formatter: '{d}%',
                            textStyle: {
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 14,
                            },
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    data: this.seriesData.versionNumber,
                }, {
                    type: 'pie',
                    radius: ['58%', '83%'],
                    itemStyle: {
                        normal: {
                            color: '#F2F2F2',
                        },
                        emphasis: {
                            color: '#ADADAD',
                        },
                    },
                    label: {
                        normal: {
                            position: 'inner',
                            formatter: '{c}人',
                            textStyle: {
                                color: '#777777',
                                fontWeight: 'bold',
                                fontSize: 14,
                            },
                        },
                    },
                    data: this.seriesData.versionNumber,
                }],
        };
        this.options = {
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: this.seriesData.allVersion,
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: this.seriesData.date,
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 人',
                    },
                },
            ],
            dataZoom: [{
                    textStyle: {
                        color: '#8392A5',
                    },
                    handleSize: '80%',
                    dataBackground: {
                        areaStyle: {
                            color: '#8392A5',
                        },
                        lineStyle: {
                            opacity: 0.8,
                            color: '#8392A5',
                        },
                    },
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2,
                    },
                }, {
                    type: 'inside',
                }],
            series: [
                {
                    name: this.seriesData.allVersion[0],
                    type: 'line',
                    stack: '总量',
                    data: this.seriesData.everyDayVersion[0],
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTop',
                        },
                    },
                },
                {
                    name: this.seriesData.allVersion[1],
                    type: 'line',
                    stack: '总量',
                    data: this.seriesData.everyDayVersion[1],
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTop',
                        },
                    },
                },
                {
                    name: this.seriesData.allVersion[2],
                    type: 'line',
                    stack: '总量',
                    data: this.seriesData.everyDayVersion[2],
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTop',
                        },
                    },
                },
                {
                    name: this.seriesData.allVersion[3],
                    type: 'line',
                    stack: '总量',
                    data: this.seriesData.everyDayVersion[3],
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTop',
                        },
                    },
                },
                {
                    name: this.seriesData.allVersion[4],
                    type: 'line',
                    stack: '总量',
                    data: this.seriesData.everyDayVersion[4],
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTop',
                        },
                    },
                },
            ],
        };
    };
    VersionevoComponent.prototype.dateRangePicker = function () {
        var _this = this;
        var picker = $('#startEndTime');
        var dataRageOption = {
            locale: {
                applyClass: 'btn-green',
                applyLabel: '确定',
                cancelLabel: '取消',
                fromLabel: '开始',
                format: 'YYYY/MM/DD',
                toLabel: '到',
                customRangeLabel: '自定义时间',
                daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                firstDay: 1,
                monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            },
            startDate: __WEBPACK_IMPORTED_MODULE_5_moment__().startOf('month'),
            endDate: __WEBPACK_IMPORTED_MODULE_5_moment__().endOf('month'),
            maxDate: __WEBPACK_IMPORTED_MODULE_5_moment__(),
            // minDate: moment().subtract(90, 'days'),
            'ranges': {
                '今日': [
                    __WEBPACK_IMPORTED_MODULE_5_moment__(),
                    __WEBPACK_IMPORTED_MODULE_5_moment__(),
                ],
                '昨日': [
                    __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'days'),
                    __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'days'),
                ],
                '本周': [__WEBPACK_IMPORTED_MODULE_5_moment__().subtract(7, 'days'), __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'days')],
                '最近30天': [__WEBPACK_IMPORTED_MODULE_5_moment__().subtract(30, 'days'), __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'days')],
                '本月': [__WEBPACK_IMPORTED_MODULE_5_moment__().startOf('month'), __WEBPACK_IMPORTED_MODULE_5_moment__().endOf('month')],
                '上个月': [__WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'month').startOf('month'), __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(1, 'month').endOf('month')],
            },
            'alwaysShowCalendars': true,
            'showCustomRangeLabel': false,
        };
        picker.daterangepicker(dataRageOption, function (start, end, label) {
            console.info("start:" + start.format('YYYY-MM-DD') + ", end:" + end + ", label:" + label);
            var timeStamp = new __WEBPACK_IMPORTED_MODULE_6__single__["d" /* TimeStamp */]();
            timeStamp.startTime = start.format('YYYY-MM-DD');
            timeStamp.endTime = end.format('YYYY-MM-DD');
            _this.singleService.changeActiveData(timeStamp);
        });
    };
    return VersionevoComponent;
}());
VersionevoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-versionevo',
        template: __webpack_require__("../../../../../src/app/pages/single/versionevo/versionevo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/single/versionevo/versionevo.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__single_table_service__["a" /* SingleTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__single_table_service__["a" /* SingleTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__single_service__["a" /* SingleService */]) === "function" && _b || Object])
], VersionevoComponent);

var _a, _b;
//# sourceMappingURL=versionevo.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/search.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "search.1088c9d72b23f12f657b.svg";

/***/ }),

/***/ "../../../../ng2-search-filter/ng2-search-filter.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2SearchPipeModule; });
/* unused harmony export Ng2SearchPipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var Ng2SearchPipe = /** @class */ (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        return items.filter(function (item) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null) {
                    continue;
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = /** @class */ (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


/***/ }),

/***/ "../../../../ng2-search-filter/ng2-search-filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ng2SearchPipeModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");


class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        return items.filter(function (item) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null) {
                    continue;
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        });
    }
}
Ng2SearchPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng2-search-filter.js.map


/***/ })

});
//# sourceMappingURL=single.module.chunk.js.map