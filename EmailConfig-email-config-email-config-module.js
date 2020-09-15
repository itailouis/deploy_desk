(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EmailConfig-email-config-email-config-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/email-accounts/email-accounts.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/email-accounts/email-accounts.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>email-accounts works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/email-config-dashboard/email-config-dashboard.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/email-config-dashboard/email-config-dashboard.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/admin/email-config/email-setting']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-github\">\n          <i class=\"fa fa-cogs\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">Email Settings</div>\n            <div class=\"text-uppercase text-muted small\">Email Configuration</div>\n          </div>\n        </div>\n      </div>\n    </a>\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/admin/email-config/email-type']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-github\">\n          <i class=\"fa fa-cogs\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">Email Types</div>\n            <div class=\"text-uppercase text-muted small\">Email Configuration</div>\n          </div>\n        </div>\n      </div>\n    </a>\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/admin/email-config/email-account']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-github\">\n          <i class=\"fa fa-cogs\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">Email Accounts</div>\n            <div class=\"text-uppercase text-muted small\">Email Configuration</div>\n          </div>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/email-setting/email-setting.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/email-setting/email-setting.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <button type=\"button\" [routerLink]=\"['/gene/admin/email-config/new-email-setting']\" class=\"btn btn-brand btn-lg bg-primary active mt-3 nav navbar-nav ml-auto\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th>Account Name</th>\n              <th>Email</th>\n              <th>Account Type</th>\n              <th>Host</th>\n              <th>Port</th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of rows\">\n              <td>{{item.accName}}</td>\n              <td>{{item.email}}</td>\n              <td>{{item.emailAccountType}}</td>\n              <td>{{item.host}}</td>\n              <td>{{item.port}}</td>\n              <td>\n                <span class=\"badge badge-success\">Active</span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/email-type/email-type.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/email-type/email-type.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>email-type works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/new-email-setting/new-email-setting.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/new-email-setting/new-email-setting.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <form [formGroup]=\"newEmailSettingForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"card-header\">\n            <i class=\"icon-layers\"></i>  <strong>New Ticket</strong>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-6\">\n                <label for=\"host\"><strong>Host</strong></label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"host\" required id=\"host\" placeholder=\"Host\">\n              </div>\n              <div class=\"col-md-6\">\n                <label for=\"port\"><strong>Port</strong></label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"port\" required id=\"port\" placeholder=\"Port\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label for=\"accName\"><strong>Account Name</strong></label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"accName\" required id=\"accName\" placeholder=\"Account Name\">\n              </div>\n              <div class=\"col-md-6\">\n                <label for=\"email\"><strong>Email</strong></label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"email\" required id=\"email\" placeholder=\"Email\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label for=\"password\"><strong>Password</strong></label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"password\" required id=\"password\" placeholder=\"Password\">\n              </div>\n              <div class=\"col-md-6\">\n                <label for=\"emailAccountType\"><strong>Email Account Type</strong></label>\n                <select id=\"emailAccountType\" formControlName=\"emailAccountType\" [compareWith]=\"compareFn\" required name=\"emailAccountType\" class=\"form-control\">\n                  <option value=\"0\">Support Email</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n            <button type=\"reset\" class=\"btn btn-danger\"><i class=\"fa fa-ban\"></i> Cancel</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/new-email-type/new-email-type.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/new-email-type/new-email-type.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>new-email-type works!</p>\n");

/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/email-accounts/email-accounts.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/email-accounts/email-accounts.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL0VtYWlsQ29uZmlnL2VtYWlsLWNvbmZpZy9lbWFpbC1hY2NvdW50cy9lbWFpbC1hY2NvdW50cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/email-accounts/email-accounts.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/email-accounts/email-accounts.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EmailAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAccountsComponent", function() { return EmailAccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailAccountsComponent = /** @class */ (function () {
    function EmailAccountsComponent() {
    }
    EmailAccountsComponent.prototype.ngOnInit = function () {
    };
    EmailAccountsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-accounts',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email-accounts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/email-accounts/email-accounts.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./email-accounts.component.scss */ "./src/app/views/admin/EmailConfig/email-config/email-accounts/email-accounts.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], EmailAccountsComponent);
    return EmailAccountsComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/email-config-dashboard/email-config-dashboard.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/email-config-dashboard/email-config-dashboard.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL0VtYWlsQ29uZmlnL2VtYWlsLWNvbmZpZy9lbWFpbC1jb25maWctZGFzaGJvYXJkL2VtYWlsLWNvbmZpZy1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/email-config-dashboard/email-config-dashboard.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/email-config-dashboard/email-config-dashboard.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: EmailConfigDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailConfigDashboardComponent", function() { return EmailConfigDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailConfigDashboardComponent = /** @class */ (function () {
    function EmailConfigDashboardComponent() {
    }
    EmailConfigDashboardComponent.prototype.ngOnInit = function () {
    };
    EmailConfigDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-config-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email-config-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/email-config-dashboard/email-config-dashboard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./email-config-dashboard.component.scss */ "./src/app/views/admin/EmailConfig/email-config/email-config-dashboard/email-config-dashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], EmailConfigDashboardComponent);
    return EmailConfigDashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/email-config-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/email-config-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EmailConfigRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailConfigRoutingModule", function() { return EmailConfigRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_config_dashboard_email_config_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-config-dashboard/email-config-dashboard.component */ "./src/app/views/admin/EmailConfig/email-config/email-config-dashboard/email-config-dashboard.component.ts");
/* harmony import */ var _email_setting_email_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-setting/email-setting.component */ "./src/app/views/admin/EmailConfig/email-config/email-setting/email-setting.component.ts");
/* harmony import */ var _email_accounts_email_accounts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-accounts/email-accounts.component */ "./src/app/views/admin/EmailConfig/email-config/email-accounts/email-accounts.component.ts");
/* harmony import */ var _email_type_email_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-type/email-type.component */ "./src/app/views/admin/EmailConfig/email-config/email-type/email-type.component.ts");
/* harmony import */ var _new_email_setting_new_email_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-email-setting/new-email-setting.component */ "./src/app/views/admin/EmailConfig/email-config/new-email-setting/new-email-setting.component.ts");








var routes = [
    {
        path: '',
        data: {
            title: 'Email Configuration'
        },
        children: [
            {
                path: '',
                redirectTo: 'email-config'
            },
            {
                path: '',
                component: _email_config_dashboard_email_config_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["EmailConfigDashboardComponent"],
                data: {
                    title: 'Email Configuration'
                },
            },
            {
                path: 'email-setting',
                component: _email_setting_email_setting_component__WEBPACK_IMPORTED_MODULE_4__["EmailSettingComponent"],
                data: {
                    title: 'Email Setting'
                }
            },
            {
                path: 'new-email-setting',
                component: _new_email_setting_new_email_setting_component__WEBPACK_IMPORTED_MODULE_7__["NewEmailSettingComponent"],
                data: {
                    title: 'New Email Setting'
                }
            },
            {
                path: 'email-account',
                component: _email_accounts_email_accounts_component__WEBPACK_IMPORTED_MODULE_5__["EmailAccountsComponent"],
                data: {
                    title: 'Email Account'
                }
            },
            {
                path: 'email-type',
                component: _email_type_email_type_component__WEBPACK_IMPORTED_MODULE_6__["EmailTypeComponent"],
                data: {
                    title: 'Email Type'
                }
            },
        ]
    }
];
var EmailConfigRoutingModule = /** @class */ (function () {
    function EmailConfigRoutingModule() {
    }
    EmailConfigRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmailConfigRoutingModule);
    return EmailConfigRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/email-config.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/email-config.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EmailConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailConfigModule", function() { return EmailConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _email_config_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-config-routing.module */ "./src/app/views/admin/EmailConfig/email-config/email-config-routing.module.ts");
/* harmony import */ var _email_type_email_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-type/email-type.component */ "./src/app/views/admin/EmailConfig/email-config/email-type/email-type.component.ts");
/* harmony import */ var _new_email_type_new_email_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-email-type/new-email-type.component */ "./src/app/views/admin/EmailConfig/email-config/new-email-type/new-email-type.component.ts");
/* harmony import */ var _email_setting_email_setting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-setting/email-setting.component */ "./src/app/views/admin/EmailConfig/email-config/email-setting/email-setting.component.ts");
/* harmony import */ var _email_config_dashboard_email_config_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-config-dashboard/email-config-dashboard.component */ "./src/app/views/admin/EmailConfig/email-config/email-config-dashboard/email-config-dashboard.component.ts");
/* harmony import */ var _email_accounts_email_accounts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./email-accounts/email-accounts.component */ "./src/app/views/admin/EmailConfig/email-config/email-accounts/email-accounts.component.ts");
/* harmony import */ var _new_email_setting_new_email_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-email-setting/new-email-setting.component */ "./src/app/views/admin/EmailConfig/email-config/new-email-setting/new-email-setting.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var EmailConfigModule = /** @class */ (function () {
    function EmailConfigModule() {
    }
    EmailConfigModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_email_type_email_type_component__WEBPACK_IMPORTED_MODULE_4__["EmailTypeComponent"], _new_email_type_new_email_type_component__WEBPACK_IMPORTED_MODULE_5__["NewEmailTypeComponent"], _email_setting_email_setting_component__WEBPACK_IMPORTED_MODULE_6__["EmailSettingComponent"], _email_config_dashboard_email_config_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["EmailConfigDashboardComponent"], _email_accounts_email_accounts_component__WEBPACK_IMPORTED_MODULE_8__["EmailAccountsComponent"], _new_email_setting_new_email_setting_component__WEBPACK_IMPORTED_MODULE_9__["NewEmailSettingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _email_config_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailConfigRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
            ]
        })
    ], EmailConfigModule);
    return EmailConfigModule;
}());



/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/email-setting/email-setting.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/email-setting/email-setting.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL0VtYWlsQ29uZmlnL2VtYWlsLWNvbmZpZy9lbWFpbC1zZXR0aW5nL2VtYWlsLXNldHRpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/email-setting/email-setting.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/email-setting/email-setting.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EmailSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSettingComponent", function() { return EmailSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_service_Admin_SystemConfig_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/category.service */ "./src/business/service/Admin/SystemConfig/category.service.ts");
/* harmony import */ var _business_service_Admin_SystemConfig_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/email.service */ "./src/business/service/Admin/SystemConfig/email.service.ts");




var EmailSettingComponent = /** @class */ (function () {
    function EmailSettingComponent(categoryService, emailService) {
        this.categoryService = categoryService;
        this.emailService = emailService;
        this.rows = [];
    }
    EmailSettingComponent.prototype.ngOnInit = function () {
        this.fetchEmailSetting();
    };
    EmailSettingComponent.prototype.fetchEmailSetting = function () {
        var _this = this;
        this.emailService.getAll().subscribe(function (data) {
            _this.rows = data;
            console.log(data);
        });
    };
    EmailSettingComponent.ctorParameters = function () { return [
        { type: _business_service_Admin_SystemConfig_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: _business_service_Admin_SystemConfig_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"] }
    ]; };
    EmailSettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-setting',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email-setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/email-setting/email-setting.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./email-setting.component.scss */ "./src/app/views/admin/EmailConfig/email-config/email-setting/email-setting.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_business_service_Admin_SystemConfig_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _business_service_Admin_SystemConfig_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]])
    ], EmailSettingComponent);
    return EmailSettingComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/email-type/email-type.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/email-type/email-type.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL0VtYWlsQ29uZmlnL2VtYWlsLWNvbmZpZy9lbWFpbC10eXBlL2VtYWlsLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/email-type/email-type.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/email-type/email-type.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EmailTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTypeComponent", function() { return EmailTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailTypeComponent = /** @class */ (function () {
    function EmailTypeComponent() {
    }
    EmailTypeComponent.prototype.ngOnInit = function () {
    };
    EmailTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-type',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./email-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/email-type/email-type.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./email-type.component.scss */ "./src/app/views/admin/EmailConfig/email-config/email-type/email-type.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], EmailTypeComponent);
    return EmailTypeComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/new-email-setting/new-email-setting.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/new-email-setting/new-email-setting.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL0VtYWlsQ29uZmlnL2VtYWlsLWNvbmZpZy9uZXctZW1haWwtc2V0dGluZy9uZXctZW1haWwtc2V0dGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/new-email-setting/new-email-setting.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/new-email-setting/new-email-setting.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: NewEmailSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmailSettingComponent", function() { return NewEmailSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_service_ticket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../business/service/ticket.service */ "./src/business/service/ticket.service.ts");
/* harmony import */ var _business_service_Admin_SystemConfig_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/category.service */ "./src/business/service/Admin/SystemConfig/category.service.ts");
/* harmony import */ var _business_service_Admin_SystemConfig_priority_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/priority.service */ "./src/business/service/Admin/SystemConfig/priority.service.ts");
/* harmony import */ var _business_service_Admin_SystemConfig_email_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/email.service */ "./src/business/service/Admin/SystemConfig/email.service.ts");








var NewEmailSettingComponent = /** @class */ (function () {
    function NewEmailSettingComponent(router, formBuilder, ticketService, categoryService, priorityService, emailService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.ticketService = ticketService;
        this.categoryService = categoryService;
        this.priorityService = priorityService;
        this.emailService = emailService;
        this.submitted = false;
        this.compareFn = this.compareByValue;
    }
    NewEmailSettingComponent.prototype.ngOnInit = function () {
        this.fetchPriorities();
        this.fetchCategories();
        this.createForm();
    };
    NewEmailSettingComponent.prototype.createForm = function () {
        this.newEmailSettingForm = this.formBuilder.group({
            host: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            port: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emailAccountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    Object.defineProperty(NewEmailSettingComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.newEmailSettingForm.controls; },
        enumerable: true,
        configurable: true
    });
    NewEmailSettingComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.newEmailSettingForm.value);
        this.saveEmailSetting(this.newEmailSettingForm.value);
    };
    NewEmailSettingComponent.prototype.onReset = function () {
        this.submitted = false;
        this.newEmailSettingForm.reset();
    };
    NewEmailSettingComponent.prototype.newTicket = function (value) {
        var _this = this;
        this.ticketService.saveTicket(value).subscribe(function (data) {
            console.log(data);
        }, 
        // tslint:disable-next-line:no-shadowed-variable
        function (error) {
        }, function () {
            _this.router.navigate(['/tickets']);
        });
    };
    NewEmailSettingComponent.prototype.saveEmailSetting = function (item) {
        this.emailService.saveEmail(item).subscribe(function (data) {
            console.log(data);
        });
    };
    NewEmailSettingComponent.prototype.fetchCategories = function () {
        var _this = this;
        this.categoryService.getAll().subscribe(function (data) {
            _this.categoryList = data;
        });
    };
    NewEmailSettingComponent.prototype.fetchPriorities = function () {
        var _this = this;
        this.priorityService.getAll().subscribe(function (data) {
            _this.priorityList = data;
        });
    };
    NewEmailSettingComponent.prototype.compareByValue = function (f1, f2) {
        return f1 && f2 && f1.id === f2.id;
    };
    NewEmailSettingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _business_service_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"] },
        { type: _business_service_Admin_SystemConfig_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
        { type: _business_service_Admin_SystemConfig_priority_service__WEBPACK_IMPORTED_MODULE_6__["PriorityService"] },
        { type: _business_service_Admin_SystemConfig_email_service__WEBPACK_IMPORTED_MODULE_7__["EmailService"] }
    ]; };
    NewEmailSettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-email-setting',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-email-setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/new-email-setting/new-email-setting.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-email-setting.component.scss */ "./src/app/views/admin/EmailConfig/email-config/new-email-setting/new-email-setting.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _business_service_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"],
            _business_service_Admin_SystemConfig_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _business_service_Admin_SystemConfig_priority_service__WEBPACK_IMPORTED_MODULE_6__["PriorityService"],
            _business_service_Admin_SystemConfig_email_service__WEBPACK_IMPORTED_MODULE_7__["EmailService"]])
    ], NewEmailSettingComponent);
    return NewEmailSettingComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/new-email-type/new-email-type.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/new-email-type/new-email-type.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL0VtYWlsQ29uZmlnL2VtYWlsLWNvbmZpZy9uZXctZW1haWwtdHlwZS9uZXctZW1haWwtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/admin/EmailConfig/email-config/new-email-type/new-email-type.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/admin/EmailConfig/email-config/new-email-type/new-email-type.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: NewEmailTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmailTypeComponent", function() { return NewEmailTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewEmailTypeComponent = /** @class */ (function () {
    function NewEmailTypeComponent() {
    }
    NewEmailTypeComponent.prototype.ngOnInit = function () {
    };
    NewEmailTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-email-type',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-email-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/EmailConfig/email-config/new-email-type/new-email-type.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-email-type.component.scss */ "./src/app/views/admin/EmailConfig/email-config/new-email-type/new-email-type.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NewEmailTypeComponent);
    return NewEmailTypeComponent;
}());



/***/ }),

/***/ "./src/business/service/Admin/SystemConfig/email.service.ts":
/*!******************************************************************!*\
  !*** ./src/business/service/Admin/SystemConfig/email.service.ts ***!
  \******************************************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Global */ "./src/Global.ts");




var EmailService = /** @class */ (function () {
    function EmailService(http, global) {
        this.http = http;
        this.global = global;
        this.baseUrl = this.global.baseUrl + '/api/admin/email/';
        this.saveEmailUrl = this.baseUrl + 'save';
        this.getAllUrl = this.baseUrl + 'get-all';
    }
    EmailService.prototype.saveEmail = function (item) {
        return this.http.post(this.saveEmailUrl, item);
    };
    EmailService.prototype.getAll = function () {
        return this.http.get(this.getAllUrl);
    };
    EmailService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _Global__WEBPACK_IMPORTED_MODULE_3__["Global"] }
    ]; };
    EmailService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Global__WEBPACK_IMPORTED_MODULE_3__["Global"]])
    ], EmailService);
    return EmailService;
}());



/***/ })

}]);
//# sourceMappingURL=EmailConfig-email-config-email-config-module.js.map