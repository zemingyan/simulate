webpackJsonp(["multi.module"],{

/***/ "../../../../../src/app/pages/multi/compare/compare.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        APP数据排名\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div style=\"overflow-x: auto; overflow-y: auto; height: 400px;\">\r\n          <table height=\"auto\">\r\n            <tbody>\r\n            <tr *ngFor=\"let phone of phones\" class=\"dtr\">\r\n              <td class=\"dtd1\">\r\n                <span>{{phone.id}}.{{phone.name}}</span>\r\n              </td>\r\n              <td class=\"dtd2\">\r\n                <span class=\"tz\" [ngStyle]=\"{width: phone.avg}\" style=\"min-width: 1px;\"></span>\r\n              </td>\r\n              <td class=\"dtd3\">\r\n                <span class=\"dy\">{{phone.avg}}</span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        APP数据对比分析\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div echarts [options]=\"options\" theme=\"light\" class=\"echart demo\"></div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n<nb-card>\r\n  <nb-card-header>\r\n    APP数据对比指标说明\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/multi/compare/compare.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compare__ = __webpack_require__("../../../../../src/app/pages/multi/compare/compare.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__multi_service__ = __webpack_require__("../../../../../src/app/pages/multi/multi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompareComponent = (function () {
    function CompareComponent(service, multiService) {
        this.service = service;
        this.options = {};
        this.phones = __WEBPACK_IMPORTED_MODULE_3__compare__["b" /* PHONES */];
        this.dataCompare = __WEBPACK_IMPORTED_MODULE_3__compare__["a" /* DATACOMPARE */];
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
        multiService.changeTitle('APP数据对比');
        var data = this.service.getData();
        this.source.load(data);
    }
    CompareComponent.prototype.ngOnInit = function () {
        this.options = {
            title: [],
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                x: 300,
                top: '7%',
                textStyle: {
                    color: '#ffd285',
                },
                data: this.dataCompare.xdata,
            },
            grid: {
                left: '2%',
                right: '4%',
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
                data: this.dataCompare.data,
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
                    name: this.dataCompare.xdata[0],
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.dataCompare.detailData[0],
                }, {
                    name: this.dataCompare.xdata[1],
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.dataCompare.detailData[1],
                }, {
                    name: this.dataCompare.xdata[2],
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.dataCompare.detailData[2],
                }, {
                    name: this.dataCompare.xdata[3],
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.dataCompare.detailData[3],
                }, {
                    name: this.dataCompare.xdata[4],
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.dataCompare.detailData[4],
                }],
        };
    };
    return CompareComponent;
}());
CompareComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-compare',
        template: __webpack_require__("../../../../../src/app/pages/multi/compare/compare.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/multi/multi.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__multi_service__["a" /* MultiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__multi_service__["a" /* MultiService */]) === "function" && _b || Object])
], CompareComponent);

var _a, _b;
//# sourceMappingURL=compare.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/compare/compare.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Phone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PHONES; });
/* unused harmony export DETAILDATA */
/* unused harmony export DataCompare */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATACOMPARE; });
var Phone = (function () {
    function Phone() {
    }
    return Phone;
}());

var PHONES = [
    { id: 1, name: '微信', avg: '21%' },
    { id: 2, name: 'QQ腾讯', avg: '41%' },
    { id: 3, name: '王者荣耀', avg: '51%' },
    { id: 4, name: '网易云音乐', avg: '21%' },
    { id: 5, name: '百度', avg: '91%' },
    { id: 6, name: '美图秀秀', avg: '21%' },
    { id: 7, name: '支付宝', avg: '81%' },
];
var DETAILDATA = [
    [90, 50, 39, 50, 120, 82, 80],
    [70, 50, 50, 87, 90, 80, 70],
    [290, 200, 80, 62, 55, 200, 90],
    [200, 190, 120, 132, 15, 60, 90],
    [240, 160, 20, 192, 150, 160, 90],
];
var DataCompare = (function () {
    function DataCompare() {
    }
    return DataCompare;
}());

var DATACOMPARE = {
    xdata: ['微信', 'QQ', '王者荣耀', '淘宝', '支付宝'],
    data: ['2018/01/01', '2018/01/02', '2018/01/03', '2018/01/04', '2018/01/05', '2018/01/06', '2018/01/07'],
    detailData: DETAILDATA,
};
//# sourceMappingURL=compare.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        <a routerLink=\"/pages/multi/visit\">热门APP访问量排行</a>\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <a routerLink=\"/pages/multi/visit\">\r\n          <ngx-multi-visit></ngx-multi-visit>\r\n        </a>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        <a routerLink=\"/pages/multi/market\">APP市场占有率</a>\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <a routerLink=\"/pages/multi/market\">\r\n          <ngx-multi-market></ngx-multi-market>\r\n        </a>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        <a routerLink=\"/pages/multi/compare\">APP数据对比</a>\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <a routerLink=\"/pages/multi/compare\">\r\n          <ngx-multi-compare></ngx-multi-compare>\r\n        </a>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        <a routerLink=\"/pages/multi/type\">各类型APP占比</a>\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <a routerLink=\"/pages/multi/type\">\r\n          <ngx-multi-type></ngx-multi-type>\r\n        </a>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/multi/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  color: #000000; }\n\na:hover {\n  color: #559ff0;\n  text-decoration: none; }\n\na:focus {\n  color: #559ff0;\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/multi/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multi_service__ = __webpack_require__("../../../../../src/app/pages/multi/multi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(multiService) {
        this.options = {};
        multiService.changeTitle('首页');
    }
    DashboardComponent.prototype.ngOnInit = function () {
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
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-dashboard',
        template: __webpack_require__("../../../../../src/app/pages/multi/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/multi/dashboard/dashboard.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__multi_service__["a" /* MultiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__multi_service__["a" /* MultiService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/dashboard/multi-compare.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiCompareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compare_compare__ = __webpack_require__("../../../../../src/app/pages/multi/compare/compare.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MultiCompareComponent = (function () {
    function MultiCompareComponent() {
        this.options = {};
        this.dataCompare = __WEBPACK_IMPORTED_MODULE_1__compare_compare__["a" /* DATACOMPARE */];
    }
    MultiCompareComponent.prototype.ngAfterViewInit = function () {
        this.options = {
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                x: 100,
                top: '7%',
                textStyle: {
                    color: '#ffd285',
                },
                data: this.dataCompare.xdata,
            },
            grid: {
                left: '2%',
                right: '2%',
                top: '16%',
                bottom: '6%',
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                'axisTick': {
                    'show': false,
                },
                boundaryGap: false,
                data: this.dataCompare.data,
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
                    name: this.dataCompare.xdata[0],
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.dataCompare.detailData[0],
                }, {
                    name: this.dataCompare.xdata[1],
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.dataCompare.detailData[1],
                }, {
                    name: this.dataCompare.xdata[2],
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.dataCompare.detailData[2],
                }, {
                    name: this.dataCompare.xdata[3],
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.dataCompare.detailData[3],
                }, {
                    name: this.dataCompare.xdata[4],
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: this.dataCompare.detailData[4],
                }],
        };
    };
    return MultiCompareComponent;
}());
MultiCompareComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-multi-compare',
        template: "\n    <div echarts [options]=\"options\" theme=\"light\" class=\"echart\"></div>\n  ",
    })
], MultiCompareComponent);

//# sourceMappingURL=multi-compare.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/dashboard/multi-market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiMarketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_market__ = __webpack_require__("../../../../../src/app/pages/multi/market/market.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MultiMarketComponent = (function () {
    function MultiMarketComponent() {
        this.options = {};
        this.markerData = __WEBPACK_IMPORTED_MODULE_1__market_market__["a" /* MARKERPROP */];
    }
    MultiMarketComponent.prototype.ngAfterViewInit = function () {
        this.options = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: this.markerData.xdata,
            },
            series: [
                {
                    name: '市场占有率',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: this.markerData.data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        };
    };
    return MultiMarketComponent;
}());
MultiMarketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-multi-market',
        template: "\n    <div echarts [options]=\"options\" theme=\"light\" class=\"echart\"></div>\n  ",
    })
], MultiMarketComponent);

//# sourceMappingURL=multi-market.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/dashboard/multi-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_type__ = __webpack_require__("../../../../../src/app/pages/multi/type/type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MultiTypeComponent = (function () {
    function MultiTypeComponent() {
        this.options = {};
        this.typeData = __WEBPACK_IMPORTED_MODULE_1__type_type__["b" /* TYPEPROP */];
    }
    MultiTypeComponent.prototype.ngAfterViewInit = function () {
        this.options = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {d}%',
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: this.typeData.data,
            },
            calculable: true,
            series: [
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['50%', 200],
                    roseType: 'area',
                    x: '50%',
                    max: 40,
                    sort: 'ascending',
                    data: this.typeData.detailData,
                },
            ],
        };
    };
    return MultiTypeComponent;
}());
MultiTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-multi-type',
        template: "\n    <div echarts [options]=\"options\" theme=\"light\" class=\"echart\"></div>\n  ",
    })
], MultiTypeComponent);

//# sourceMappingURL=multi-type.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/dashboard/multi-visit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiVisitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visit_visit__ = __webpack_require__("../../../../../src/app/pages/multi/visit/visit.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MultiVisitComponent = (function () {
    function MultiVisitComponent() {
        this.options = {};
        this.pageView = __WEBPACK_IMPORTED_MODULE_1__visit_visit__["a" /* PAGEVIEW */];
    }
    MultiVisitComponent.prototype.ngAfterViewInit = function () {
        this.options = {
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
            legend: {
                data: ['APP访问量'],
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
            },
            yAxis: {
                type: 'category',
                data: this.pageView.yData,
            },
            series: [
                {
                    name: 'APP访问量',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight',
                        },
                    },
                    data: this.pageView.detailData,
                },
            ],
        };
    };
    return MultiVisitComponent;
}());
MultiVisitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-multi-visit',
        template: "\n    <div echarts [options]=\"options\" theme=\"light\" class=\"echart\"></div>\n  ",
    })
], MultiVisitComponent);

//# sourceMappingURL=multi-visit.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/market/market.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <nb-card>\r\n      <nb-card-header>APP市场占有率</nb-card-header>\r\n      <nb-card-body>\r\n        <div style=\"overflow-x: auto; overflow-y: auto; height: 400px;\">\r\n          <table height=\"auto\">\r\n            <tbody>\r\n            <tr *ngFor=\"let phone of phones\" class=\"dtr\">\r\n              <td class=\"dtd1\">\r\n                <span>{{phone.id}}.{{phone.name}}</span>\r\n              </td>\r\n              <td class=\"dtd2\">\r\n                <span class=\"tz\" [ngStyle]=\"{width: phone.avg}\" style=\"min-width: 1px;\"></span>\r\n              </td>\r\n              <td class=\"dtd3\">\r\n                <span class=\"dy\">{{phone.avg}}</span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <nb-card>\r\n      <nb-card-header>APP市场占有率图</nb-card-header>\r\n      <nb-card-body>\r\n        <div echarts [options]=\"options\" (chartInit)=\"chartInit($event)\" theme=\"light\" class=\"echart demo\"></div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n<nb-card>\r\n  <nb-card-header>\r\n    APP市场占有率指标说明\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/multi/market/market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__market__ = __webpack_require__("../../../../../src/app/pages/multi/market/market.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__multi_service__ = __webpack_require__("../../../../../src/app/pages/multi/multi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarketComponent = (function () {
    function MarketComponent(service, multiService) {
        this.service = service;
        this.options = {};
        this.phones = __WEBPACK_IMPORTED_MODULE_3__market__["b" /* PHONES */];
        this.markerData = __WEBPACK_IMPORTED_MODULE_3__market__["a" /* MARKERPROP */];
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
        multiService.changeTitle('APP市场占有率');
        var data = this.service.getData();
        this.source.load(data);
    }
    MarketComponent.prototype.chartInit = function (ev) {
        this.mInstance = ev;
        this.mInstance.on('updateAxisPointer', function (event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                ev.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)',
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension,
                        },
                    },
                });
            }
        });
    };
    MarketComponent.prototype.ngOnInit = function () {
        this.options = {
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false,
            },
            dataset: {
                source: this.markerData.detailData,
            },
            xAxis: { type: 'category' },
            yAxis: { gridIndex: 0 },
            grid: { top: '55%' },
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
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{b}: {@2018/03/01} ({d}%)',
                    },
                    encode: {
                        itemName: this.markerData.firstData[0],
                        value: this.markerData.firstData[1],
                        tooltip: this.markerData.firstData[1],
                    },
                },
            ],
        };
    };
    return MarketComponent;
}());
MarketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-market',
        template: __webpack_require__("../../../../../src/app/pages/multi/market/market.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/multi/multi.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__multi_service__["a" /* MultiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__multi_service__["a" /* MultiService */]) === "function" && _b || Object])
], MarketComponent);

var _a, _b;
//# sourceMappingURL=market.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/market/market.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Phone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PHONES; });
/* unused harmony export Apply */
/* unused harmony export DATA */
/* unused harmony export DETAILDATA */
/* unused harmony export MarketProp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MARKERPROP; });
var Phone = (function () {
    function Phone() {
    }
    return Phone;
}());

var PHONES = [
    { id: 1, name: '微信', avg: '21%' },
    { id: 2, name: 'QQ腾讯', avg: '41%' },
    { id: 3, name: '王者荣耀', avg: '51%' },
    { id: 4, name: '网易云音乐', avg: '21%' },
    { id: 5, name: '百度', avg: '91%' },
    { id: 6, name: '美图秀秀', avg: '21%' },
    { id: 7, name: '支付宝', avg: '81%' },
];
var Apply = (function () {
    function Apply() {
    }
    return Apply;
}());

var DATA = [
    { value: 335, name: '淘宝' },
    { value: 310, name: 'QQ' },
    { value: 234, name: '王者荣耀' },
    { value: 135, name: '微信' },
    { value: 1548, name: '支付宝' },
];
var DETAILDATA = [
    ['date', '2018/03/01', '2018/03/02', '2018/03/03', '2018/03/04', '2018/03/05', '2018/03/06', '2018/03/07'],
    ['QQ', '41.1', '30.4', '65.1', '53.3', '83.8', '98.7', '99.7'],
    ['淘宝', '86.5', '92.1', '85.7', '83.1', '73.4', '55.1', '45.7'],
    ['王者荣耀', '24.1', '67.2', '79.5', '86.4', '65.2', '82.5', '34.7'],
    ['支付宝', '55.2', '67.1', '69.2', '72.4', '53.9', '39.1', '21.7'],
    ['微信', '20.2', '39.1', '49.2', '72.4', '23.9', '34.1', '28.7'],
];
var MarketProp = (function () {
    function MarketProp() {
    }
    return MarketProp;
}());

var MARKERPROP = {
    detailData: DETAILDATA,
    firstData: ['date', '2018/03/01'],
    xdata: ['淘宝', 'QQ', '王者荣耀', '微信', '支付宝'],
    data: DATA,
};
//# sourceMappingURL=market.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/multi-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multi_component__ = __webpack_require__("../../../../../src/app/pages/multi/multi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/multi/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visit_visit_component__ = __webpack_require__("../../../../../src/app/pages/multi/visit/visit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__market_market_component__ = __webpack_require__("../../../../../src/app/pages/multi/market/market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__compare_compare_component__ = __webpack_require__("../../../../../src/app/pages/multi/compare/compare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__type_type_component__ = __webpack_require__("../../../../../src/app/pages/multi/type/type.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__multi_component__["a" /* MultiComponent */],
        children: [{
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
            }, {
                path: 'visit',
                component: __WEBPACK_IMPORTED_MODULE_4__visit_visit_component__["a" /* VisitComponent */],
            }, {
                path: 'market',
                component: __WEBPACK_IMPORTED_MODULE_5__market_market_component__["a" /* MarketComponent */],
            }, {
                path: 'compare',
                component: __WEBPACK_IMPORTED_MODULE_6__compare_compare_component__["a" /* CompareComponent */],
            }, {
                path: 'type',
                component: __WEBPACK_IMPORTED_MODULE_7__type_type_component__["a" /* TypeComponent */],
            }, {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }],
    }];
var MultiRoutingModule = (function () {
    function MultiRoutingModule() {
    }
    return MultiRoutingModule;
}());
MultiRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], MultiRoutingModule);

//# sourceMappingURL=multi-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/multi.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-right: 15px\">\r\n  <div class=\"col-md-12 bg\" style=\"padding-left: 0\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\">\r\n        <h4>{{title}}</h4>\r\n        <div class=\"row\">\r\n          <div style=\"float: left\">\r\n            <input type=\"text\" id=\"startEndTime\" name=\"startEndTime\" placeholder=\"开始-结束时间\">\r\n          </div>\r\n          <div style=\"float: left;padding-top:-20px;padding-right: 2px;\">\r\n            <select>\r\n              <option *ngFor=\"let date of dates\" [value]='date'>{{date}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\" style=\"padding-top: 10px\">\r\n        <angular2-multiselect [data]=\"itemList\"\r\n                              [(ngModel)]=\"selectedItems\"\r\n                              [settings]=\"settings\"\r\n                              (onSelect)=\"onItemSelect($event)\"\r\n                              (onDeSelect)=\"OnItemDeSelect($event)\">\r\n        </angular2-multiselect>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/multi/multi.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\n  font-size: 1rem;\n  background: #ffffff;\n  margin-left: 15px;\n  margin-bottom: 1.5rem;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  font-weight: 400;\n  padding: 1.5rem 1rem; }\n\n.bg h4 {\n  margin-bottom: 0;\n  font-size: 20px;\n  color: #000000;\n  padding: 0 1rem;\n  padding-bottom: 0.5rem; }\n\n.bg div {\n  padding-left: 1rem;\n  padding-top: 0; }\n\ninput {\n  border: none;\n  font-size: 0.9em;\n  color: #6a6f77;\n  -web-kit-appearance: none;\n  -moz-appearance: none;\n  display: block;\n  outline: 0;\n  padding: 0;\n  text-decoration: none;\n  width: 100%;\n  padding-right: 18px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/down.svg") + ") no-repeat scroll 168px 2px transparent; }\n\ninput:focus {\n  border: none; }\n\ntd, th {\n  padding: 0; }\n\ntd, th {\n  display: table-cell;\n  vertical-align: inherit; }\n\n.tz {\n  height: 8px;\n  line-height: 30px;\n  display: block;\n  background-color: #5d72ec; }\n\ntr {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit; }\n\n.dtr:hover {\n  background: rgba(91, 110, 239, 0.3);\n  color: #5b6eef; }\n\n.dtr {\n  height: 28px;\n  font-size: 14px;\n  border-bottom: solid 1px #eeeeee;\n  border-spacing: 10px;\n  outline: none; }\n\n.dtd1 {\n  width: 110px;\n  max-width: 110px;\n  font-size: 100%;\n  padding-left: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.dtd2 {\n  position: relative;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: transparent;\n  width: 105px;\n  display: table-cell;\n  vertical-align: middle; }\n\n.dtd3 {\n  width: 70px;\n  max-width: 70px;\n  font-size: 100%;\n  padding-right: 20px; }\n\n.dy {\n  float: right !important;\n  margin-left: 15px; }\n\nselect {\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/down.svg") + ") no-repeat scroll 36px 2px transparent;\n  padding-right: 33px;\n  border: none;\n  color: #6a6f77; }\n\nselect:focus {\n  outline: none; }\n\nselect::-ms-expand {\n  display: none; }\n\n.custom-class-example {\n  color: #ccc; }\n\n.custom-class-example .c-token {\n  background: #38d574 !important; }\n\n.custom-class-example .pure-checkbox label::before {\n  border-color: #38d574 !important; }\n\n.custom-class-example .pure-checkbox input[type=\"checkbox\"]:checked + label[_ngcontent-c1]:before {\n  background: #38d574 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/multi/multi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multi_service__ = __webpack_require__("../../../../../src/app/pages/multi/multi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultiComponent = (function () {
    function MultiComponent(multiService) {
        var _this = this;
        this.title = '首页';
        this.dates = [
            '全部', '社交', '游戏', '工具', '购物', '音乐', '新闻',
        ];
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        multiService.getTitleSubject().subscribe(function (title) { return _this.title = title; });
    }
    MultiComponent.prototype.ngOnInit = function () {
        this.dateRangePicker();
        this.itemList = [
            { 'id': 1, 'itemName': '微信' },
            { 'id': 2, 'itemName': 'QQ' },
            { 'id': 3, 'itemName': '淘宝' },
            { 'id': 4, 'itemName': '王者荣耀' },
            { 'id': 5, 'itemName': '网易云音乐' },
            { 'id': 6, 'itemName': '相机' },
            { 'id': 7, 'itemName': '支付宝' },
            { 'id': 8, 'itemName': '相机' },
            { 'id': 9, 'itemName': '图库' },
        ];
        /*  this.selectedItems = [
            {'id': 1, 'itemName': '王者荣耀'},
            {'id': 2, 'itemName': '支付宝'},
            {'id': 3, 'itemName': '淘宝'},
            {'id': 4, 'itemName': '图库'}];*/
        this.settings = {
            singleSelection: false,
            text: '各种APP对比选择',
            enableCheckAll: false,
            limitSelection: 5,
            enableSearchFilter: true,
            searchPlaceholderText: 'APP搜索',
            badgeShowLimit: 3,
            classes: 'myclass custom-class-example',
        };
    };
    MultiComponent.prototype.onItemSelect = function (item) {
        /*console.log(item);*/
        console.log(this.selectedItems);
    };
    MultiComponent.prototype.OnItemDeSelect = function (item) {
        /* console.log(item);*/
        console.log(this.selectedItems);
    };
    MultiComponent.prototype.dateRangePicker = function () {
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
            maxDate: __WEBPACK_IMPORTED_MODULE_1_moment__(),
            // minDate: moment().subtract(90, 'days'),
            'ranges': {
                '今日': [
                    __WEBPACK_IMPORTED_MODULE_1_moment__(),
                    __WEBPACK_IMPORTED_MODULE_1_moment__(),
                ],
                '昨日': [
                    __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'days'),
                    __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'days'),
                ],
                '本周': [__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(7, 'days'), __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'days')],
                '最近30天': [__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(30, 'days'), __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'days')],
                '本月': [__WEBPACK_IMPORTED_MODULE_1_moment__().startOf('month'), __WEBPACK_IMPORTED_MODULE_1_moment__().endOf('month')],
                '上个月': [__WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'month').startOf('month'), __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, 'month').endOf('month')],
            },
            'alwaysShowCalendars': true,
            'showCustomRangeLabel': false,
        };
        picker.daterangepicker(dataRageOption, function (start, end, label) {
            console.info("start:" + start.format('YYYY/MM/DD') + ", end:" + end + ", label:" + label);
        });
    };
    return MultiComponent;
}());
MultiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-demo',
        template: __webpack_require__("../../../../../src/app/pages/multi/multi.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/multi/multi.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__multi_service__["a" /* MultiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__multi_service__["a" /* MultiService */]) === "function" && _a || Object])
], MultiComponent);

var _a;
//# sourceMappingURL=multi.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/multi.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiModule", function() { return MultiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__multi_component__ = __webpack_require__("../../../../../src/app/pages/multi/multi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__multi_routing_module__ = __webpack_require__("../../../../../src/app/pages/multi/multi-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/multi/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__visit_visit_component__ = __webpack_require__("../../../../../src/app/pages/multi/visit/visit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_multi_visit_component__ = __webpack_require__("../../../../../src/app/pages/multi/dashboard/multi-visit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_multi_market_component__ = __webpack_require__("../../../../../src/app/pages/multi/dashboard/multi-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_multi_compare_component__ = __webpack_require__("../../../../../src/app/pages/multi/dashboard/multi-compare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_multi_type_component__ = __webpack_require__("../../../../../src/app/pages/multi/dashboard/multi-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__type_type_component__ = __webpack_require__("../../../../../src/app/pages/multi/type/type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__compare_compare_component__ = __webpack_require__("../../../../../src/app/pages/multi/compare/compare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__market_market_component__ = __webpack_require__("../../../../../src/app/pages/multi/market/market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__multi_service__ = __webpack_require__("../../../../../src/app/pages/multi/multi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var homes = [
    __WEBPACK_IMPORTED_MODULE_10__dashboard_multi_visit_component__["a" /* MultiVisitComponent */],
    __WEBPACK_IMPORTED_MODULE_11__dashboard_multi_market_component__["a" /* MultiMarketComponent */],
    __WEBPACK_IMPORTED_MODULE_12__dashboard_multi_compare_component__["a" /* MultiCompareComponent */],
    __WEBPACK_IMPORTED_MODULE_13__dashboard_multi_type_component__["a" /* MultiTypeComponent */],
];
var components = [
    __WEBPACK_IMPORTED_MODULE_4__multi_component__["a" /* MultiComponent */],
    __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
    __WEBPACK_IMPORTED_MODULE_9__visit_visit_component__["a" /* VisitComponent */],
    __WEBPACK_IMPORTED_MODULE_14__type_type_component__["a" /* TypeComponent */],
    __WEBPACK_IMPORTED_MODULE_15__compare_compare_component__["a" /* CompareComponent */],
    __WEBPACK_IMPORTED_MODULE_16__market_market_component__["a" /* MarketComponent */],
];
var MultiModule = (function () {
    function MultiModule() {
    }
    return MultiModule;
}());
MultiModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */], __WEBPACK_IMPORTED_MODULE_5__multi_routing_module__["a" /* MultiRoutingModule */], __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* NgxEchartsModule */], __WEBPACK_IMPORTED_MODULE_8_ng2_smart_table__["b" /* Ng2SmartTableModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* TabsModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_18_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */], __WEBPACK_IMPORTED_MODULE_19__angular_forms__["b" /* FormsModule */]],
        declarations: components.concat(homes),
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__core_data_smart_table_service__["a" /* SmartTableService */],
            __WEBPACK_IMPORTED_MODULE_17__multi_service__["a" /* MultiService */],
        ],
    })
], MultiModule);

//# sourceMappingURL=multi.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/multi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MultiService = (function () {
    function MultiService() {
        this.titleSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    MultiService.prototype.getTitleSubject = function () {
        return this.titleSubject;
    };
    MultiService.prototype.changeTitle = function (title) {
        this.titleSubject.next(title);
    };
    return MultiService;
}());
MultiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MultiService);

//# sourceMappingURL=multi.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/type/type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        APP占比排名\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div style=\"overflow-x: auto; overflow-y: auto; height: 400px;\">\r\n          <table height=\"auto\">\r\n            <tbody>\r\n            <tr *ngFor=\"let phone of phones\" class=\"dtr\">\r\n              <td class=\"dtd1\">\r\n                <span>{{phone.id}}.{{phone.name}}</span>\r\n              </td>\r\n              <td class=\"dtd2\">\r\n                <span class=\"tz\" [ngStyle]=\"{width: phone.avg}\" style=\"min-width: 1px;\"></span>\r\n              </td>\r\n              <td class=\"dtd3\">\r\n                <span class=\"dy\">{{phone.avg}}</span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        APP占比分析\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div echarts [options]=\"options\" theme=\"light\" class=\"echart demo\"></div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n<nb-card>\r\n  <nb-card-header>\r\n    各类型APP占比指标说明\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/multi/type/type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type__ = __webpack_require__("../../../../../src/app/pages/multi/type/type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__multi_service__ = __webpack_require__("../../../../../src/app/pages/multi/multi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TypeComponent = (function () {
    function TypeComponent(service, multiService) {
        this.service = service;
        this.options = {};
        this.phones = __WEBPACK_IMPORTED_MODULE_3__type__["a" /* PHONES */];
        this.typeData = __WEBPACK_IMPORTED_MODULE_3__type__["b" /* TYPEPROP */];
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
        multiService.changeTitle('各类型APP占比');
        var data = this.service.getData();
        this.source.load(data);
    }
    TypeComponent.prototype.ngOnInit = function () {
        this.options = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {d}%',
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: this.typeData.data,
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                    },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            calculable: true,
            series: [
                {
                    name: '类型占比',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['50%', 200],
                    roseType: 'area',
                    x: '50%',
                    max: 40,
                    sort: 'ascending',
                    data: this.typeData.detailData,
                },
            ],
        };
    };
    return TypeComponent;
}());
TypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-type',
        template: __webpack_require__("../../../../../src/app/pages/multi/type/type.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/multi/multi.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__multi_service__["a" /* MultiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__multi_service__["a" /* MultiService */]) === "function" && _b || Object])
], TypeComponent);

var _a, _b;
//# sourceMappingURL=type.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/type/type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Phone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PHONES; });
/* unused harmony export Apply */
/* unused harmony export DETAILDATA */
/* unused harmony export TypeProp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TYPEPROP; });
var Phone = (function () {
    function Phone() {
    }
    return Phone;
}());

var PHONES = [
    { id: 1, name: '微信', avg: '21%' },
    { id: 2, name: 'QQ腾讯', avg: '41%' },
    { id: 3, name: '王者荣耀', avg: '51%' },
    { id: 4, name: '网易云音乐', avg: '21%' },
    { id: 5, name: '百度', avg: '91%' },
    { id: 6, name: '美图秀秀', avg: '21%' },
    { id: 7, name: '支付宝', avg: '81%' },
];
var Apply = (function () {
    function Apply() {
    }
    return Apply;
}());

var DETAILDATA = [
    { value: 10, name: 'QQ' },
    { value: 5, name: '微信' },
    { value: 15, name: '网易云音乐' },
    { value: 25, name: '王者荣耀' },
    { value: 20, name: '百度' },
];
var TypeProp = (function () {
    function TypeProp() {
    }
    return TypeProp;
}());

var TYPEPROP = {
    detailData: DETAILDATA,
    data: ['QQ', '微信', '网易云音乐', '王者荣耀', '百度'],
};
//# sourceMappingURL=type.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/visit/visit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <nb-card>\r\n      <nb-card-header>APP访问量排名</nb-card-header>\r\n      <nb-card-body>\r\n        <div style=\"overflow-x: auto; overflow-y: auto; height: 400px;\">\r\n          <table height=\"auto\">\r\n            <tbody>\r\n            <tr *ngFor=\"let phone of phones\" class=\"dtr\">\r\n              <td class=\"dtd1\">\r\n                <span>{{phone.id}}.{{phone.name}}</span>\r\n              </td>\r\n              <td class=\"dtd2\">\r\n                <span class=\"tz\" [ngStyle]=\"{width: phone.avg}\" style=\"min-width: 1px;\"></span>\r\n              </td>\r\n              <td class=\"dtd3\">\r\n                <span class=\"dy\">{{phone.avg}}</span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <nb-card>\r\n      <nb-card-header>热门APP访问量分析</nb-card-header>\r\n      <nb-card-body>\r\n        <div echarts [options]=\"options\" theme=\"light\" class=\"echart demo\"></div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n<nb-card>\r\n  <nb-card-header>\r\n    热门APP访问量排行指标说明\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/multi/visit/visit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visit__ = __webpack_require__("../../../../../src/app/pages/multi/visit/visit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__multi_service__ = __webpack_require__("../../../../../src/app/pages/multi/multi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VisitComponent = (function () {
    function VisitComponent(service, multiService) {
        this.service = service;
        this.options = {};
        this.phones = __WEBPACK_IMPORTED_MODULE_3__visit__["b" /* PHONES */];
        this.pageView = __WEBPACK_IMPORTED_MODULE_3__visit__["a" /* PAGEVIEW */];
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
        multiService.changeTitle('热门APP访问量');
        var data = this.service.getData();
        this.source.load(data);
    }
    VisitComponent.prototype.ngOnInit = function () {
        this.options = {
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
            legend: {
                data: ['APP访问量'],
            },
            toolbox: {
                show: true,
                feature: {
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
            },
            yAxis: {
                type: 'category',
                data: this.pageView.yData,
            },
            series: [
                {
                    name: 'APP访问量',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight',
                        },
                    },
                    data: this.pageView.detailData,
                },
            ],
        };
    };
    return VisitComponent;
}());
VisitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-visit',
        template: __webpack_require__("../../../../../src/app/pages/multi/visit/visit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/multi/multi.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__multi_service__["a" /* MultiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__multi_service__["a" /* MultiService */]) === "function" && _b || Object])
], VisitComponent);

var _a, _b;
//# sourceMappingURL=visit.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/multi/visit/visit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Phone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PHONES; });
/* unused harmony export PageView */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAGEVIEW; });
var Phone = (function () {
    function Phone() {
    }
    return Phone;
}());

var PHONES = [
    { id: 1, name: '微信', avg: '21%' },
    { id: 2, name: 'QQ腾讯', avg: '41%' },
    { id: 3, name: '王者荣耀', avg: '51%' },
    { id: 4, name: '网易云音乐', avg: '21%' },
    { id: 5, name: '百度', avg: '91%' },
    { id: 6, name: '美图秀秀', avg: '21%' },
    { id: 7, name: '支付宝', avg: '81%' },
];
var PageView = (function () {
    function PageView() {
    }
    return PageView;
}());

var PAGEVIEW = {
    yData: ['QQ', '微信', '网易云音乐', '王者荣耀', '淘宝'],
    detailData: [88203, 73489, 69034, 104970, 131744],
};
//# sourceMappingURL=visit.js.map

/***/ }),

/***/ "../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiselect_component__ = __webpack_require__("../../../../angular2-multiselect-dropdown/multiselect.component.js");
/* unused harmony reexport AngularMultiSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clickOutside__ = __webpack_require__("../../../../angular2-multiselect-dropdown/clickOutside.js");
/* unused harmony reexport ClickOutsideDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_filter__ = __webpack_require__("../../../../angular2-multiselect-dropdown/list-filter.js");
/* unused harmony reexport ListFilterPipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_item__ = __webpack_require__("../../../../angular2-multiselect-dropdown/menu-item.js");
/* unused harmony reexport Item */
/* unused harmony reexport TemplateRenderer */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__multiselect_component__["a"]; });






//# sourceMappingURL=angular2-multiselect-dropdown.js.map

/***/ }),

/***/ "../../../../angular2-multiselect-dropdown/clickOutside.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return styleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    ClickOutsideDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[clickOutside]'
                },] },
    ];
    /** @nocollapse */
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    ClickOutsideDirective.propDecorators = {
        'clickOutside': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['document:click', ['$event', '$event.target'],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['document:touchstart', ['$event', '$event.target'],] },],
    };
    return ClickOutsideDirective;
}());

var ScrollDirective = /** @class */ (function () {
    function ScrollDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.scroll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ScrollDirective.prototype.onClick = function (event, targetElement) {
        this.scroll.emit(event);
    };
    ScrollDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[scroll]'
                },] },
    ];
    /** @nocollapse */
    ScrollDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    ScrollDirective.propDecorators = {
        'scroll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['scroll', ['$event'],] },],
    };
    return ScrollDirective;
}());

var styleDirective = /** @class */ (function () {
    function styleDirective(el) {
        this.el = el;
    }
    styleDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.top = this.styleVal;
    };
    styleDirective.prototype.ngOnChanges = function () {
        this.el.nativeElement.style.top = this.styleVal;
    };
    styleDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[styleProp]'
                },] },
    ];
    /** @nocollapse */
    styleDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    styleDirective.propDecorators = {
        'styleVal': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['styleProp',] },],
    };
    return styleDirective;
}());

//# sourceMappingURL=clickOutside.js.map

/***/ }),

/***/ "../../../../angular2-multiselect-dropdown/list-filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe() {
    }
    ListFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    ListFilterPipe.prototype.applyFilter = function (item, filter) {
        var found = false;
        for (var prop in item) {
            if (filter) {
                if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                    found = true;
                }
            }
            else
                found = true;
        }
        return found;
    };
    ListFilterPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'listFilter',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    ListFilterPipe.ctorParameters = function () { return []; };
    return ListFilterPipe;
}());

//# sourceMappingURL=list-filter.js.map

/***/ }),

/***/ "../../../../angular2-multiselect-dropdown/menu-item.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TemplateRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var Item = /** @class */ (function () {
    function Item() {
    }
    Item.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'c-item',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Item.ctorParameters = function () { return []; };
    Item.propDecorators = {
        'template': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],] },],
    };
    return Item;
}());

var Badge = /** @class */ (function () {
    function Badge() {
    }
    Badge.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'c-badge',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Badge.ctorParameters = function () { return []; };
    Badge.propDecorators = {
        'template': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],] },],
    };
    return Badge;
}());

var TemplateRenderer = /** @class */ (function () {
    function TemplateRenderer(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TemplateRenderer.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.data.template, {
            '\$implicit': this.data,
            'item': this.item
        });
    };
    TemplateRenderer.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    TemplateRenderer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'c-templateRenderer',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    TemplateRenderer.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    ]; };
    TemplateRenderer.propDecorators = {
        'data': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'item': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return TemplateRenderer;
}());

//# sourceMappingURL=menu-item.js.map

/***/ }),

/***/ "../../../../angular2-multiselect-dropdown/multiselect.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DROPDOWN_CONTROL_VALUE_ACCESSOR */
/* unused harmony export DROPDOWN_CONTROL_VALIDATION */
/* unused harmony export AngularMultiSelect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMultiSelectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multiselect_model__ = __webpack_require__("../../../../angular2-multiselect-dropdown/multiselect.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clickOutside__ = __webpack_require__("../../../../angular2-multiselect-dropdown/clickOutside.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_filter__ = __webpack_require__("../../../../angular2-multiselect-dropdown/list-filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_item__ = __webpack_require__("../../../../angular2-multiselect-dropdown/menu-item.js");







var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return AngularMultiSelect; }),
    multi: true
};
var DROPDOWN_CONTROL_VALIDATION = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return AngularMultiSelect; }),
    multi: true,
};
var noop = function () {
};
var AngularMultiSelect = /** @class */ (function () {
    function AngularMultiSelect(_elementRef) {
        this._elementRef = _elementRef;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDeSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSelectAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDeSelectAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isActive = false;
        this.isSelectAll = false;
        this.chunkIndex = [];
        this.cachedItems = [];
        this.itemHeight = 41.6;
        this.defaultSettings = {
            singleSelection: false,
            text: 'Select',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            maxHeight: 300,
            badgeShowLimit: 999999999999,
            classes: '',
            disabled: false,
            searchPlaceholderText: 'Search',
            showCheckbox: true,
            noDataLabel: 'No Data Available',
            searchAutofocus: true,
            lazyLoading: false,
            labelKey: 'itemName'
        };
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    AngularMultiSelect.prototype.ngOnInit = function () {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        if (this.settings.groupBy) {
            this.groupedData = this.transformData(this.data, this.settings.groupBy);
        }
        this.totalRows = (this.data && this.data.length);
        this.cachedItems = this.data;
        this.screenItemsLen = Math.ceil(this.settings.maxHeight / this.itemHeight);
        this.cachedItemsLen = this.screenItemsLen * 3;
        this.totalHeight = this.itemHeight * this.totalRows;
        this.maxBuffer = this.screenItemsLen * this.itemHeight;
        this.lastScrolled = 0;
        this.renderChunk(0, this.cachedItemsLen / 2);
    };
    AngularMultiSelect.prototype.ngOnChanges = function (changes) {
        if (changes.data && !changes.data.firstChange) {
            if (this.settings.groupBy) {
                this.groupedData = this.transformData(this.data, this.settings.groupBy);
                if (this.data.length == 0) {
                    this.selectedItems = [];
                }
            }
        }
        if (changes.settings && !changes.settings.firstChange) {
            this.settings = Object.assign({}, this.defaultSettings, this.settings);
        }
    };
    AngularMultiSelect.prototype.ngDoCheck = function () {
        if (this.selectedItems) {
            if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
                this.isSelectAll = false;
            }
        }
    };
    AngularMultiSelect.prototype.ngAfterViewInit = function () {
        if (this.settings.lazyLoading) {
            this._elementRef.nativeElement.getElementsByClassName("lazyContainer")[0].addEventListener('scroll', this.onScroll.bind(this));
        }
    };
    AngularMultiSelect.prototype.onItemClick = function (item, index, evt) {
        if (this.settings.disabled) {
            return false;
        }
        var found = this.isSelected(item);
        var limit = this.selectedItems.length < this.settings.limitSelection ? true : false;
        if (!found) {
            if (this.settings.limitSelection) {
                if (limit) {
                    this.addSelected(item);
                    this.onSelect.emit(item);
                }
            }
            else {
                this.addSelected(item);
                this.onSelect.emit(item);
            }
        }
        else {
            this.removeSelected(item);
            this.onDeSelect.emit(item);
        }
        if (this.isSelectAll || this.data.length > this.selectedItems.length) {
            this.isSelectAll = false;
        }
        if (this.data.length == this.selectedItems.length) {
            this.isSelectAll = true;
        }
    };
    AngularMultiSelect.prototype.validate = function (c) {
        return null;
    };
    AngularMultiSelect.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            if (this.settings.singleSelection) {
                try {
                    if (value.length > 1) {
                        this.selectedItems = [value[0]];
                        throw new __WEBPACK_IMPORTED_MODULE_3__multiselect_model__["a" /* MyException */](404, { "msg": "Single Selection Mode, Selected Items cannot have more than one item." });
                    }
                    else {
                        this.selectedItems = value;
                    }
                }
                catch (e) {
                    console.error(e.body.msg);
                }
            }
            else {
                if (this.settings.limitSelection) {
                    this.selectedItems = value.splice(0, this.settings.limitSelection);
                }
                else {
                    this.selectedItems = value;
                }
                if (this.selectedItems.length === this.data.length && this.data.length > 0) {
                    this.isSelectAll = true;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
    };
    //From ControlValueAccessor interface
    AngularMultiSelect.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    AngularMultiSelect.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    AngularMultiSelect.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    AngularMultiSelect.prototype.isSelected = function (clickedItem) {
        var found = false;
        this.selectedItems && this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    };
    AngularMultiSelect.prototype.addSelected = function (item) {
        if (this.settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
            this.closeDropdown();
        }
        else
            this.selectedItems.push(item);
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    };
    AngularMultiSelect.prototype.removeSelected = function (clickedItem) {
        var _this = this;
        this.selectedItems && this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    };
    AngularMultiSelect.prototype.toggleDropdown = function (evt) {
        var _this = this;
        if (this.settings.disabled) {
            return false;
        }
        this.isActive = !this.isActive;
        if (this.isActive) {
            if (this.settings.searchAutofocus && this.settings.enableSearchFilter) {
                setTimeout(function () {
                    _this.searchInput.nativeElement.focus();
                }, 0);
            }
            this.onOpen.emit(true);
        }
        else {
            this.onClose.emit(false);
        }
        evt.preventDefault();
    };
    AngularMultiSelect.prototype.closeDropdown = function () {
        if (this.searchInput && this.settings.lazyLoading) {
            this.searchInput.nativeElement.value = "";
            this.data = [];
            this.data = this.cachedItems;
            this.totalHeight = this.itemHeight * this.data.length;
            this.totalRows = this.data.length;
            this.updateView(this.scrollTop);
        }
        if (this.searchInput) {
            this.searchInput.nativeElement.value = "";
        }
        this.filter = "";
        this.isActive = false;
        this.onClose.emit(false);
    };
    AngularMultiSelect.prototype.toggleSelectAll = function () {
        if (!this.isSelectAll) {
            this.selectedItems = [];
            this.selectedItems = this.data.slice();
            this.isSelectAll = true;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onSelectAll.emit(this.selectedItems);
        }
        else {
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onDeSelectAll.emit(this.selectedItems);
        }
    };
    AngularMultiSelect.prototype.transformData = function (arr, field) {
        var groupedObj = arr.reduce(function (prev, cur) {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        var tempArr = [];
        Object.keys(groupedObj).map(function (x) {
            tempArr.push({ key: x, value: groupedObj[x] });
        });
        return tempArr;
    };
    AngularMultiSelect.prototype.renderChunk = function (fromPos, howMany) {
        this.chunkArray = [];
        this.chunkIndex = [];
        var finalItem = fromPos + howMany;
        if (finalItem > this.totalRows)
            finalItem = this.totalRows;
        for (var i = fromPos; i < finalItem; i++) {
            this.chunkIndex.push((i * this.itemHeight) + 'px');
            this.chunkArray.push(this.data[i]);
        }
    };
    AngularMultiSelect.prototype.onScroll = function (e) {
        this.scrollTop = e.target.scrollTop;
        this.updateView(this.scrollTop);
    };
    AngularMultiSelect.prototype.updateView = function (scrollTop) {
        var scrollPos = scrollTop ? scrollTop : 0;
        var first = (scrollPos / this.itemHeight) - this.screenItemsLen;
        var firstTemp = "" + first;
        first = parseInt(firstTemp) < 0 ? 0 : parseInt(firstTemp);
        this.renderChunk(first, this.cachedItemsLen);
        this.lastRepaintY = scrollPos;
    };
    AngularMultiSelect.prototype.filterInfiniteList = function (evt) {
        var filteredElems = [];
        this.data = this.cachedItems.slice();
        if (evt.target.value.toString() != '') {
            this.data.filter(function (el) {
                for (var prop in el) {
                    if (el[prop].toString().toLowerCase().indexOf(evt.target.value.toString().toLowerCase()) >= 0) {
                        filteredElems.push(el);
                        break;
                    }
                }
            });
            //this.cachedItems = this.data;
            this.totalHeight = this.itemHeight * filteredElems.length;
            this.totalRows = filteredElems.length;
            this.data = [];
            this.data = filteredElems;
            this.updateView(this.scrollTop);
        }
        else if (evt.target.value.toString() == '' && this.cachedItems.length > 0) {
            this.data = [];
            this.data = this.cachedItems;
            this.totalHeight = this.itemHeight * this.data.length;
            this.totalRows = this.data.length;
            this.updateView(this.scrollTop);
        }
    };
    AngularMultiSelect.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'angular2-multiselect',
                    template: "\n      <div class=\"cuppa-dropdown\" (clickOutside)=\"closeDropdown()\">\n          <div class=\"selected-list\">\n              <div class=\"c-btn\" (click)=\"toggleDropdown($event)\" [ngClass]=\"{'disabled': settings.disabled}\">\n                  <span *ngIf=\"selectedItems?.length == 0\">{{settings.text}}</span>\n                  <span *ngIf=\"settings.singleSelection\">\n                      <span *ngFor=\"let item of selectedItems;trackBy: trackByFn;\">\n                          {{item[settings.labelKey]}}\n                      </span>\n                  </span>\n                  <div class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && !settings.singleSelection\">\n                      <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > settings.badgeShowLimit-1\">\n                          <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n                          <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                              <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                          </span>\n                          <span class=\"fa fa-remove\" (click)=\"onItemClick(item,k,$event)\"></span>\n                      </div>\n                  </div> \n                  <span class=\"countplaceholder\" *ngIf=\"selectedItems?.length > settings.badgeShowLimit\">+{{selectedItems?.length - settings.badgeShowLimit }}</span>\n                  <span class=\"fa\" [ngClass]=\"{'fa-angle-down': !isActive,'fa-angle-up':isActive}\"></span>\n              </div>      \n          </div>\n          <div class=\"dropdown-list\" [hidden]=\"!isActive\">\n          <div class=\"arrow-up arrow-2\"></div>\n          <div class=\"arrow-up\"></div>\n          <div class=\"list-area\">\n              <div class=\"pure-checkbox select-all\" *ngIf=\"settings.enableCheckAll && !settings.singleSelection && !settings.limitSelection\" (click)=\"toggleSelectAll()\">\n                  <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"/>\n                  <label>\n                      <span [hidden]=\"isSelectAll\">{{settings.selectAllText}}</span>\n                      <span [hidden]=\"!isSelectAll\">{{settings.unSelectAllText}}</span>\n                  </label>\n              </div>   \n              <div class=\"list-filter\" *ngIf=\"settings.enableSearchFilter && !settings.lazyLoading\">\n                  <span class=\"fa fa-search\"></span>\n                  <input #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\" [(ngModel)]=\"filter\">\n              </div> \n              <div class=\"list-filter\" *ngIf=\"settings.enableSearchFilter && settings.lazyLoading\">\n                  <span class=\"fa fa-search\"></span>\n                  <input #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\" (keyup)=\"filterInfiniteList($event)\">\n              </div>\n          <ul *ngIf=\"!settings.groupBy\" [style.maxHeight] = \"settings.maxHeight+'px'\" class=\"lazyContainer\" >\n              <span *ngIf=\"itemTempl\">\n                  <li *ngFor=\"let item of data | listFilter:filter; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\n                  <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\n                  <label></label>\n                  <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n              </li>\n              </span>\n              <span *ngIf=\"!itemTempl && !settings.lazyLoading\" >\n              <li *ngFor=\"let item of data | listFilter:filter; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\n                  <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\n                  <label>{{item[settings.labelKey]}}</label>\n              </li>\n              </span>\n              <span *ngIf=\"!itemTempl && settings.lazyLoading\" >\n                  <div [ngStyle]=\"{'height':totalHeight+'px'}\" style=\"position: relative;\">\n\n            \n              <li *ngFor=\"let item of chunkArray | listFilter:filter; let i = index;\" (click)=\"onItemClick(item,i,$event)\" style=\"position: absolute;width: 100%;\" class=\"pure-checkbox\" [styleProp]=\"chunkIndex[i]\">\n                  <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\n                  <label>{{item[settings.labelKey]}}</label>\n              </li>\n              </div>\n              </span>\n          </ul>\n          <div *ngIf=\"settings.groupBy\" [style.maxHeight] = \"settings.maxHeight+'px'\" style=\"overflow: auto;\">\n          <ul *ngFor=\"let obj of groupedData ; let i = index;\" class=\"list-grp\">\n              <h4 *ngIf=\"(obj.value | listFilter:filter ).length > 0\">{{obj.key}}</h4>\n              <span *ngIf=\"itemTempl\" >\n              <li *ngFor=\"let item of obj.value | listFilter:filter; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\n                  <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\n                  <label></label>\n                  <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n              </li>\n              </span>\n              <span *ngIf=\"!itemTempl\" >\n              <li *ngFor=\"let item of obj.value | listFilter:filter; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\n                  <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\n                  <label>{{item[settings.labelKey]}}</label>\n              </li>\n              </span>\n          </ul>\n          </div>\n          <h5 class=\"list-message\" *ngIf=\"data?.length == 0\">{{settings.noDataLabel}}</h5>\n          </div>\n          </div>\n      </div>\n    ",
                    host: { '[class]': 'defaultSettings.classes' },
                    styles: ["\n      .cuppa-dropdown{position:relative}.c-btn{display:inline-block;background:#fff;border:1px solid #ccc;border-radius:3px;font-size:14px;color:#333}.c-btn.disabled{background:#ccc}.c-btn:focus{outline:none}.selected-list .c-list{float:left;padding:0px;margin:0px;width:calc(100% - 20px)}.selected-list .c-list .c-token{list-style:none;padding:0px 5px;background:#0079FE;color:#fff;border-radius:2px;margin-right:4px;margin-top:2px;float:left}.selected-list .c-list .c-token .c-label{display:block;float:left}.selected-list .c-list .c-token .fa-remove{margin-left:1px;font-size:12px;z-index:100000000}.selected-list .fa-angle-down,.selected-list .fa-angle-up{font-size:15pt;position:absolute;right:10px;top:50%;transform:translateY(-50%)}.selected-list .countplaceholder{position:absolute;right:30px;top:50%;transform:translateY(-50%)}.selected-list .c-btn{width:100%;box-shadow:0px 1px 5px #959595;padding:10px;cursor:pointer;display:flex;position:relative}.dropdown-list{position:absolute;padding-top:14px;width:100%;z-index:9999}.dropdown-list ul{padding:0px;list-style:none;overflow:auto;margin:0px}.dropdown-list ul li{padding:10px 10px;cursor:pointer;text-align:left}.dropdown-list ul li:first-child{padding-top:10px}.dropdown-list ul li:last-child{padding-bottom:10px}.dropdown-list ul li:hover{background:#f5f5f5}.dropdown-list ::-webkit-scrollbar{width:8px}.dropdown-list ::-webkit-scrollbar-thumb{background:#cccccc;border-radius:5px}.dropdown-list ::-webkit-scrollbar-track{background:#f2f2f2}.arrow-up{width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-bottom:15px solid #fff;margin-left:15px;position:absolute;top:0}.arrow-2{border-bottom:15px solid #ccc;top:-1px}.list-area{border:1px solid #ccc;border-radius:3px;background:#fff;margin:0px;box-shadow:0px 1px 5px #959595}.select-all{padding:10px;border-bottom:1px solid #ccc;text-align:left}.list-filter{border-bottom:1px solid #ccc;position:relative}.list-filter input{border:0px;width:100%;height:35px;padding:0px 0px 0px 35px}.list-filter input:focus{outline:none}.list-filter .fa{position:absolute;top:10px;left:13px;color:#888}.pure-checkbox input[type=\"checkbox\"]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.pure-checkbox input[type=\"checkbox\"]:focus+label:before,.pure-checkbox input[type=\"checkbox\"]:hover+label:before{border-color:#0079FE;background-color:#f2f2f2}.pure-checkbox input[type=\"checkbox\"]:active+label:before{transition-duration:0s}.pure-checkbox input[type=\"checkbox\"]+label{position:relative;padding-left:2em;vertical-align:middle;user-select:none;cursor:pointer;margin:0px;color:#000;font-weight:300}.pure-checkbox input[type=\"checkbox\"]+label:before{box-sizing:content-box;content:'';color:#0079FE;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #0079FE;text-align:center;transition:all 0.4s ease}.pure-checkbox input[type=\"checkbox\"]+label:after{box-sizing:content-box;content:'';background-color:#0079FE;position:absolute;top:50%;left:4px;width:10px;height:10px;margin-top:-5px;transform:scale(0);transform-origin:50%;transition:transform 200ms ease-out}.pure-checkbox input[type=\"checkbox\"]:disabled+label:before{border-color:#cccccc}.pure-checkbox input[type=\"checkbox\"]:disabled:focus+label:before .pure-checkbox input[type=\"checkbox\"]:disabled:hover+label:before{background-color:inherit}.pure-checkbox input[type=\"checkbox\"]:disabled:checked+label:before{background-color:#cccccc}.pure-checkbox input[type=\"checkbox\"]+label:after{background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#ffffff;border-width:0 0 3px 3px;border-image:none;transform:rotate(-45deg) scale(0)}.pure-checkbox input[type=\"checkbox\"]:checked+label:after{content:'';transform:rotate(-45deg) scale(1);transition:transform 200ms ease-out}.pure-checkbox input[type=\"radio\"]:checked+label:before{background-color:white}.pure-checkbox input[type=\"radio\"]:checked+label:after{transform:scale(1)}.pure-checkbox input[type=\"radio\"]+label:before{border-radius:50%}.pure-checkbox input[type=\"checkbox\"]:checked+label:before{background:#0079FE}.pure-checkbox input[type=\"checkbox\"]:checked+label:after{transform:rotate(-45deg) scale(1)}.list-message{text-align:center}.list-grp{padding:0 15px !important}.list-grp h4{text-transform:capitalize;margin:15px 0px 0px 0px;font-size:14px;font-weight:700}.list-grp>li{padding-left:15px !important}\n    "],
                    providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION]
                },] },
    ];
    /** @nocollapse */
    AngularMultiSelect.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    AngularMultiSelect.propDecorators = {
        'data': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'settings': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onSelect',] },],
        'onDeSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onDeSelect',] },],
        'onSelectAll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onSelectAll',] },],
        'onDeSelectAll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onDeSelectAll',] },],
        'onOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onOpen',] },],
        'onClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onClose',] },],
        'itemTempl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_6__menu_item__["b" /* Item */],] },],
        'badgeTempl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_6__menu_item__["a" /* Badge */],] },],
        'searchInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['searchInput',] },],
    };
    return AngularMultiSelect;
}());

var AngularMultiSelectModule = /** @class */ (function () {
    function AngularMultiSelectModule() {
    }
    AngularMultiSelectModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */]],
                    declarations: [AngularMultiSelect, __WEBPACK_IMPORTED_MODULE_4__clickOutside__["a" /* ClickOutsideDirective */], __WEBPACK_IMPORTED_MODULE_4__clickOutside__["b" /* ScrollDirective */], __WEBPACK_IMPORTED_MODULE_4__clickOutside__["c" /* styleDirective */], __WEBPACK_IMPORTED_MODULE_5__list_filter__["a" /* ListFilterPipe */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["b" /* Item */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["c" /* TemplateRenderer */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["a" /* Badge */]],
                    exports: [AngularMultiSelect, __WEBPACK_IMPORTED_MODULE_4__clickOutside__["a" /* ClickOutsideDirective */], __WEBPACK_IMPORTED_MODULE_4__clickOutside__["b" /* ScrollDirective */], __WEBPACK_IMPORTED_MODULE_4__clickOutside__["c" /* styleDirective */], __WEBPACK_IMPORTED_MODULE_5__list_filter__["a" /* ListFilterPipe */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["b" /* Item */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["c" /* TemplateRenderer */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["a" /* Badge */]]
                },] },
    ];
    /** @nocollapse */
    AngularMultiSelectModule.ctorParameters = function () { return []; };
    return AngularMultiSelectModule;
}());

//# sourceMappingURL=multiselect.component.js.map

/***/ }),

/***/ "../../../../angular2-multiselect-dropdown/multiselect.model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ListItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyException; });
var ListItem = /** @class */ (function () {
    function ListItem() {
    }
    return ListItem;
}());

var MyException = /** @class */ (function () {
    function MyException(status, body) {
        this.status = status;
        this.body = body;
    }
    return MyException;
}());

//# sourceMappingURL=multiselect.model.js.map

/***/ })

});
//# sourceMappingURL=multi.module.chunk.js.map