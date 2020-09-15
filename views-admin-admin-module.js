(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/dashboard/dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/dashboard/dashboard.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/admin/system-config']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-success\">\n          <i class=\"fa fa-cogs\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">System Configuration</div>\n            <div class=\"text-uppercase text-muted small\">Admin</div>\n          </div>\n        </div>\n      </div>\n    </a>\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/admin/email-config']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-success\">\n          <i class=\"fa fa-envelope\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">Email Configuration</div>\n            <div class=\"text-uppercase text-muted small\">Admin</div>\n          </div>\n        </div>\n      </div>\n    </a>\n    <a class=\"col-sm-6 col-lg-3 btn\" >\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-success\">\n          <i class=\"fa fa-envelope\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">General Settings</div>\n            <div class=\"text-uppercase text-muted small\">Admin</div>\n          </div>\n        </div>\n      </div>\n    </a>\n    <a class=\"col-sm-6 col-lg-3 btn\" >\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-success\">\n          <i class=\"fa fa-envelope\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">HelpDesk Settings</div>\n            <div class=\"text-uppercase text-muted small\">Admin</div>\n          </div>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/views/admin/admin-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/admin/admin-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/views/admin/dashboard/dashboard.component.ts");




var routes = [
    {
        path: '',
        data: {
            title: 'Admin'
        },
        children: [
            {
                path: '',
                redirectTo: 'admin'
            },
            {
                path: 'admin',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                data: {
                    title: 'Admin'
                }
            },
            {
                path: 'system-config',
                loadChildren: function () { return Promise.all(/*! import() | SystemConfig-system-config-system-config-module */[__webpack_require__.e("common"), __webpack_require__.e("SystemConfig-system-config-system-config-module")]).then(__webpack_require__.bind(null, /*! ./SystemConfig/system-config/system-config.module */ "./src/app/views/admin/SystemConfig/system-config/system-config.module.ts")).then(function (m) { return m.SystemConfigModule; }); }
            },
            {
                path: 'email-config',
                loadChildren: function () { return Promise.all(/*! import() | EmailConfig-email-config-email-config-module */[__webpack_require__.e("common"), __webpack_require__.e("EmailConfig-email-config-email-config-module")]).then(__webpack_require__.bind(null, /*! ./EmailConfig/email-config/email-config.module */ "./src/app/views/admin/EmailConfig/email-config/email-config.module.ts")).then(function (m) { return m.EmailConfigModule; }); }
            },
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/admin/admin.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/admin/admin.module.ts ***!
  \*********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/views/admin/admin-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/views/admin/dashboard/dashboard.component.ts");





var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/views/admin/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/admin/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/admin/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/admin/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.redirect = function (value) {
        this.router.navigate([value]);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/dashboard/dashboard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/admin/dashboard/dashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-admin-module.js.map