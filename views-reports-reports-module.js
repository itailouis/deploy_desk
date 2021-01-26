(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-reports-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/category-report/category-report.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/category-report/category-report.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-layers\"></i>  <strong>Category Report</strong>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th class=\"text-center\">Category</th>\n              <th class=\"text-center\">Tickets</th>\n              <th class=\"text-center\">Open</th>\n              <th class=\"text-center\">Closed</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of rows$\">\n              <td class=\"text-center\">\n                <strong>{{item.category}}</strong>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"clearfix\">\n                  <strong>{{item?.tickets}}</strong>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"clearfix\">\n                  <strong>{{item?.open}}</strong>\n                </div>\n              </td>\n            <td class=\"text-center\">\n                <div class=\"clearfix\">\n                  <strong>{{item?.closed}}</strong>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n\t<div class=\"col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-layers\"></i>  <strong>Category Report Graph</strong>\n        </div>\n        <div class=\"card-body\">\n           <div class=\" chart-area\"><canvas id=\"chartBig1\"> </canvas></div>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/reports/reports.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/reports/reports.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/reports/category-report']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-success\">\n          <i class=\"fa fa-cogs\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">Category Report</div>\n            <div class=\"text-uppercase text-muted small\">Admin</div>\n          </div>\n        </div>\n      </div>\n    </a>\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/reports/subject-report']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-success\">\n          <i class=\"fa fa-envelope\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">Subject Report</div>\n            <div class=\"text-uppercase text-muted small\">Admin</div>\n          </div>\n        </div>\n      </div>\n    </a>\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/reports/user-report']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-success\">\n          <i class=\"fa fa-envelope\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">User Report</div>\n            <div class=\"text-uppercase text-muted small\">Admin</div>\n          </div>\n        </div>\n      </div>\n    </a>\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/reports/usage-report']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-success\">\n          <i class=\"fa fa-envelope\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">Usage Report</div>\n            <div class=\"text-uppercase text-muted small\">Admin</div>\n          </div>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/subject-report/subject-report.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/subject-report/subject-report.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-layers\"></i>  <strong>Category Report</strong>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th class=\"text-center\">Subject</th>\n              <th class=\"text-center\">Category</th>\n              <th class=\"text-center\">Tickets</th>\n              <th class=\"text-center\">Open</th>\n              <th class=\"text-center\">Closed</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of rows \">\n              <td class=\"text-center\">\n                <strong>{{item.subject}}</strong>\n              </td>\n              <td class=\"text-center\">\n                <strong>{{item.category}}</strong>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"clearfix\">\n                  <strong>{{item?.tickets}}</strong>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"clearfix\">\n                  <strong>{{item?.open}}</strong>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <div class=\"clearfix\">\n                  <strong>{{item?.closed}}</strong>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n\t\t  \n\t\t  <div class=\"d-flex justify-content-between p-2\">\n   <!-- <ngb-pagination\n      [collectionSize]=\"(total$ | async)!\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\">\n    </ngb-pagination> \n\n     <select class=\"custom-select\" style=\"width: auto\" name=\"pageSize\" [(ngModel)]=\"service.pageSize\">\n      <option [ngValue]=\"10\">10 items per page</option>\n      <option [ngValue]=\"15\">15 items per page</option>\n      <option [ngValue]=\"25\">25 items per page</option>\n    </select> -->\n  </div>\n\t\t  \n\t\t  \n        </div>\n      </div>\n    </div>\n\t<div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-layers\"></i>  <strong>Category Report Graph</strong>\n        </div>\n        <div class=\"card-body\">\n           <div class=\" chart-area\"><canvas id=\"chartBig1\"> </canvas></div>\n        </div>\n      </div>\n    </div><!--/.col-->\n \n  </div><!--/.row-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/usage-report/usage-report.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/usage-report/usage-report.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>usage-report works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/user-report/user-report.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/user-report/user-report.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"icon-layers\"></i>  <strong>User Report</strong>\n          </div>\n          <div class=\"card-body\">\n            <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\n              <thead class=\"thead-light\">\n              <tr>\n                <th class=\"text-center\">Category</th>\n                <th class=\"text-center\">Tickets</th>\n                <th class=\"text-center\">Open</th>\n                <th class=\"text-center\">Closed</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let item of rows\">\n                <td class=\"text-center\">\n                  <strong></strong>\n                </td>\n                <td class=\"text-center\">\n                  <div class=\"clearfix\">\n                    <strong></strong>\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  <div class=\"clearfix\">\n                    <strong></strong>\n                  </div>\n                </td>\n              <td class=\"text-center\">\n                  <div class=\"clearfix\">\n                    <strong></strong>\n                  </div>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"icon-layers\"></i>  <strong>User Report Graph</strong>\n          </div>\n          <div class=\"card-body\">\n             <div class=\" chart-area\"><canvas id=\"chartBig1\"> </canvas></div>\n          </div>\n        </div>\n      </div><!--/.col-->\n    </div><!--/.row-->\n  </div>\n  ");

/***/ }),

/***/ "./src/app/views/reports/category-report/category-report.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/views/reports/category-report/category-report.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcG9ydHMvY2F0ZWdvcnktcmVwb3J0L2NhdGVnb3J5LXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/reports/category-report/category-report.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/reports/category-report/category-report.component.ts ***!
  \****************************************************************************/
/*! exports provided: CategoryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryReportComponent", function() { return CategoryReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _business_service_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../business/service/report.service */ "./src/business/service/report.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

//import { Component, OnInit } from '@angular/core';



var CategoryReportComponent = /** @class */ (function () {
    function CategoryReportComponent(reportService) {
        this.reportService = reportService;
    }
    CategoryReportComponent.prototype.ngOnInit = function () {
        this.getCategoryReport();
    };
    CategoryReportComponent.prototype.getCategoryReport = function () {
        var _this = this;
        this.reportService.getCategoryReport().subscribe(function (resultsData) {
            _this.rows$ = resultsData;
            //console.log(resultsData.category);
            var values = [];
            var valuesTwo = [];
            var labels = [];
            var borderColor = [];
            var backgroundColor = [];
            var backgroundColorTwo = [];
            resultsData.forEach(function (element) {
                console.log(element.category);
                labels.push(element.category);
                values.push(parseInt("" + element.open));
                valuesTwo.push(parseInt("" + element.closed));
                backgroundColor.push('rgba(255, 99, 132, 1)');
                backgroundColorTwo.push('rgba(75, 192, 192, 1)');
                borderColor.push('rgba(255, 99, 132, 0.2)');
            });
            _this.canvas = document.getElementById("chartBig1");
            _this.ctx = _this.canvas.getContext("2d");
            var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(_this.ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                            label: '# of Open Tickets',
                            data: values,
                            backgroundColor: backgroundColor,
                            borderColor: borderColor,
                            borderWidth: 1
                        }, {
                            label: '# of Closed Tickets',
                            data: valuesTwo,
                            backgroundColor: backgroundColorTwo,
                            borderColor: borderColor,
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                                stacked: true,
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                        xAxes: [{
                                stacked: true
                            }]
                    }
                }
            });
        });
    };
    CategoryReportComponent.ctorParameters = function () { return [
        { type: _business_service_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"] }
    ]; };
    CategoryReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-category-report',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/category-report/category-report.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-report.component.css */ "./src/app/views/reports/category-report/category-report.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_business_service_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], CategoryReportComponent);
    return CategoryReportComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/reports-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/reports/reports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/views/reports/reports/reports.component.ts");
/* harmony import */ var _category_report_category_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-report/category-report.component */ "./src/app/views/reports/category-report/category-report.component.ts");
/* harmony import */ var _subject_report_subject_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject-report/subject-report.component */ "./src/app/views/reports/subject-report/subject-report.component.ts");
/* harmony import */ var _user_report_user_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-report/user-report.component */ "./src/app/views/reports/user-report/user-report.component.ts");







var routes = [
    {
        path: '',
        data: {
            title: 'Reports'
        },
        children: [
            {
                path: '',
                redirectTo: 'reports'
            },
            {
                path: 'reports',
                component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"],
                data: {
                    title: 'Reports'
                }
            },
            {
                path: 'category-report',
                component: _category_report_category_report_component__WEBPACK_IMPORTED_MODULE_4__["CategoryReportComponent"],
                data: {
                    title: 'Category Report'
                }
            },
            {
                path: 'subject-report',
                component: _subject_report_subject_report_component__WEBPACK_IMPORTED_MODULE_5__["SubjectReportComponent"],
                data: {
                    title: 'Subject Report'
                }
            },
            {
                path: 'user-report',
                component: _user_report_user_report_component__WEBPACK_IMPORTED_MODULE_6__["UserReportComponent"],
                data: {
                    title: 'User Report'
                }
            },
            {
                path: 'usage-report',
                component: _user_report_user_report_component__WEBPACK_IMPORTED_MODULE_6__["UserReportComponent"],
                data: {
                    title: 'usage Report'
                }
            }
        ]
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/reports/reports.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/views/reports/reports-routing.module.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/views/reports/reports/reports.component.ts");
/* harmony import */ var _subject_report_subject_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subject-report/subject-report.component */ "./src/app/views/reports/subject-report/subject-report.component.ts");
/* harmony import */ var _category_report_category_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-report/category-report.component */ "./src/app/views/reports/category-report/category-report.component.ts");
/* harmony import */ var _user_report_user_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-report/user-report.component */ "./src/app/views/reports/user-report/user-report.component.ts");
/* harmony import */ var _usage_report_usage_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./usage-report/usage-report.component */ "./src/app/views/reports/usage-report/usage-report.component.ts");









var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_reports_reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"], _subject_report_subject_report_component__WEBPACK_IMPORTED_MODULE_5__["SubjectReportComponent"], _category_report_category_report_component__WEBPACK_IMPORTED_MODULE_6__["CategoryReportComponent"], _user_report_user_report_component__WEBPACK_IMPORTED_MODULE_7__["UserReportComponent"], _usage_report_usage_report_component__WEBPACK_IMPORTED_MODULE_8__["UsageReportComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"]
            ]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ }),

/***/ "./src/app/views/reports/reports/reports.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/reports/reports/reports.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcG9ydHMvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/reports/reports/reports.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/reports/reports/reports.component.ts ***!
  \************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/reports/reports.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reports.component.scss */ "./src/app/views/reports/reports/reports.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/subject-report/subject-report.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/reports/subject-report/subject-report.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcG9ydHMvc3ViamVjdC1yZXBvcnQvc3ViamVjdC1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/reports/subject-report/subject-report.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/reports/subject-report/subject-report.component.ts ***!
  \**************************************************************************/
/*! exports provided: SubjectReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectReportComponent", function() { return SubjectReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_service_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../business/service/report.service */ "./src/business/service/report.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




var SubjectReportComponent = /** @class */ (function () {
    function SubjectReportComponent(reportService) {
        this.reportService = reportService;
    }
    SubjectReportComponent.prototype.ngOnInit = function () {
        this.getSubjectReport();
    };
    SubjectReportComponent.prototype.getSubjectReport = function () {
        var _this = this;
        this.reportService.getSubjectReport().subscribe(function (resultsData) {
            _this.rows = resultsData;
            //this.total$ = resultsData.length
            //console.log(resultsData.category);
            var values = [];
            var valuesTwo = [];
            var labels = [];
            var borderColor = [];
            var backgroundColor = [];
            var backgroundColorTwo = [];
            resultsData.forEach(function (element) {
                console.log(element.category);
                labels.push(element.category);
                values.push(parseInt("" + element.open));
                valuesTwo.push(parseInt("" + element.closed));
                backgroundColor.push('rgba(255, 99, 132, 1)');
                backgroundColorTwo.push('rgba(75, 192, 192, 1)');
                borderColor.push('rgba(255, 99, 132, 0.2)');
            });
            _this.canvas = document.getElementById("chartBig1");
            _this.ctx = _this.canvas.getContext("2d");
            var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(_this.ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                            label: '# of Open Tickets',
                            data: values,
                            backgroundColor: backgroundColor,
                            borderColor: borderColor,
                            borderWidth: 1
                        }, {
                            label: '# of Closed Tickets',
                            data: valuesTwo,
                            backgroundColor: backgroundColorTwo,
                            borderColor: borderColor,
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                                stacked: true,
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                        xAxes: [{
                                stacked: true
                            }]
                    }
                }
            });
        });
    };
    SubjectReportComponent.ctorParameters = function () { return [
        { type: _business_service_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"] }
    ]; };
    SubjectReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject-report',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./subject-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/subject-report/subject-report.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./subject-report.component.css */ "./src/app/views/reports/subject-report/subject-report.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_business_service_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"]])
    ], SubjectReportComponent);
    return SubjectReportComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/usage-report/usage-report.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/reports/usage-report/usage-report.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcG9ydHMvdXNhZ2UtcmVwb3J0L3VzYWdlLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/reports/usage-report/usage-report.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/reports/usage-report/usage-report.component.ts ***!
  \**********************************************************************/
/*! exports provided: UsageReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageReportComponent", function() { return UsageReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsageReportComponent = /** @class */ (function () {
    function UsageReportComponent() {
    }
    UsageReportComponent.prototype.ngOnInit = function () {
    };
    UsageReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usage-report',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./usage-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/usage-report/usage-report.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./usage-report.component.css */ "./src/app/views/reports/usage-report/usage-report.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UsageReportComponent);
    return UsageReportComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/user-report/user-report.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/reports/user-report/user-report.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlcG9ydHMvdXNlci1yZXBvcnQvdXNlci1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/reports/user-report/user-report.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/reports/user-report/user-report.component.ts ***!
  \********************************************************************/
/*! exports provided: UserReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReportComponent", function() { return UserReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserReportComponent = /** @class */ (function () {
    function UserReportComponent() {
    }
    UserReportComponent.prototype.ngOnInit = function () {
    };
    UserReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-report',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/user-report/user-report.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-report.component.css */ "./src/app/views/reports/user-report/user-report.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UserReportComponent);
    return UserReportComponent;
}());



/***/ }),

/***/ "./src/business/service/report.service.ts":
/*!************************************************!*\
  !*** ./src/business/service/report.service.ts ***!
  \************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Global */ "./src/Global.ts");




var ReportService = /** @class */ (function () {
    function ReportService(http, global) {
        this.http = http;
        this.global = global;
        this.baseUrl = this.global.baseUrl + '/api/report/';
        this.getSubjectReportUrl = this.baseUrl + 'get-subject-report';
        this.getCategoryReportUrl = this.baseUrl + 'get-category-report';
    }
    ReportService.prototype.getSubjectReport = function () {
        return this.http.get(this.getSubjectReportUrl);
    };
    ReportService.prototype.getCategoryReport = function () {
        return this.http.get(this.getCategoryReportUrl);
    };
    ReportService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _Global__WEBPACK_IMPORTED_MODULE_3__["Global"] }
    ]; };
    ReportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Global__WEBPACK_IMPORTED_MODULE_3__["Global"]])
    ], ReportService);
    return ReportService;
}());



/***/ })

}]);
//# sourceMappingURL=views-reports-reports-module.js.map