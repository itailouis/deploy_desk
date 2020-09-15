(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SystemConfig-system-config-system-config-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/category/category.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/category/category.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <button type=\"button\" [routerLink]=\"['/gene/admin/system-config/new-category']\" class=\"btn btn-brand btn-lg bg-primary active mt-3 nav navbar-nav ml-auto\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Assigned</th>\n              <th>Created By</th>\n              <th>Created On</th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of rows\">\n              <td>{{item.name}}</td>\n              <td>{{item.description}}</td>\n              <td>{{item.assigned.displayName}}</td>\n              <td>{{item.createdByName}}</td>\n              <td>{{item.dateCreated}}</td>\n              <td>\n                <span class=\"badge badge-success\">Active</span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/department/department.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/department/department.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <button type=\"button\" [routerLink]=\"['/gene/admin/system-config/new-department']\" class=\"btn btn-brand btn-lg bg-primary active mt-3\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Created By</th>\n              <th>Created On</th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of rows\">\n              <td>{{item.name}}</td>\n              <td>{{item.description}}</td>\n              <td>{{item.createdByName}}</td>\n              <td>{{item.dateCreated}}</td>\n              <td>\n                <span class=\"badge badge-success\">Active</span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/new-category/new-category.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/new-category/new-category.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <form [formGroup]=\"newCategoryForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"card-header\">\n            <i class=\"icon-layers\"></i>  <strong>New Category</strong>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-8\">\n                <label for=\"name\"><strong>Name</strong></label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"Category Name\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-8\">\n                <label for=\"description\"><strong>Description</strong></label>\n                <textarea id=\"description\" name=\"description\" rows=\"9\" class=\"form-control\" formControlName=\"description\" placeholder=\"Describe The Category ...\"></textarea>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n            <div class=\"col-md-6\">\n              <label for=\"assigned\"><strong>Assign Technician</strong></label>\n              <select id=\"assigned\" formControlName=\"assigned\" [compareWith]=\"compareFn\" required name=\"assigned\" class=\"form-control\">\n                <option *ngFor=\"let item of technicianList\" [ngValue]=\"item\">{{item.displayName}}</option>\n              </select>\n            </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n            <button type=\"reset\" class=\"btn btn-danger\" (click)=\"cancel()\"><i class=\"fa fa-ban\"></i> Cancel</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/new-department/new-department.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/new-department/new-department.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <form [formGroup]=\"newDepartmentForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"card-header\">\n            <i class=\"icon-layers\"></i>  <strong>New Department</strong>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-8\">\n                <label for=\"name\"><strong>Name</strong></label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"Department Name\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <label for=\"description\"><strong>Description</strong></label>\n                <textarea id=\"description\" name=\"description\" rows=\"9\" class=\"form-control\" formControlName=\"description\" placeholder=\"Describe The Department ...\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n            <button type=\"reset\" class=\"btn btn-danger\" (click)=\"cancel()\"><i class=\"fa fa-ban\"></i> Cancel</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/new-priority/new-priority.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/new-priority/new-priority.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <form [formGroup]=\"newPriorityForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"card-header\">\n            <i class=\"icon-layers\"></i>  <strong>New Priority</strong>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-8\">\n                <label for=\"name\"><strong>Name</strong></label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"Priority Name\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <label for=\"description\"><strong>Description</strong></label>\n                <textarea id=\"description\" name=\"description\" rows=\"9\" class=\"form-control\" formControlName=\"description\" placeholder=\"Describe The Priority ...\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n            <button type=\"reset\" class=\"btn btn-danger\" (click)=\"cancel()\"><i class=\"fa fa-ban\"></i> Cancel</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/new-status/new-status.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/new-status/new-status.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <form [formGroup]=\"newStatusForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"card-header\">\n            <i class=\"icon-layers\"></i>  <strong>New Status</strong>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-8\">\n                <label for=\"name\"><strong>Name</strong></label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"Status Name\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <label for=\"description\"><strong>Description</strong></label>\n                <textarea id=\"description\" name=\"description\" rows=\"9\" class=\"form-control\" formControlName=\"description\" placeholder=\"Describe The Status ...\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n            <button type=\"reset\" class=\"btn btn-danger\" (click)=\"cancel()\"><i class=\"fa fa-ban\"></i> Cancel</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/priority/priority.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/priority/priority.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <button type=\"button\" [routerLink]=\"['/gene/admin/system-config/new-priority']\" class=\"btn btn-brand btn-lg bg-primary active mt-3\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Created By</th>\n              <th>Created On</th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of rows\">\n              <td>{{item.name}}</td>\n              <td>{{item.description}}</td>\n              <td>{{item.createdByName}}</td>\n              <td>{{item.dateCreated}}</td>\n              <td>\n                <span class=\"badge badge-success\">Active</span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/status/status.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/status/status.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <button type=\"button\" [routerLink]=\"['/gene/admin/system-config/new-status']\" class=\"btn btn-brand btn-lg bg-primary active mt-3\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th>Name</th>\n              <th>Description</th>\n              <th>Created By</th>\n              <th>Created On</th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of rows\">\n              <td>{{item.name}}</td>\n              <td>{{item.description}}</td>\n              <td>{{item.createdByName}}</td>\n              <td>{{item.dateCreated}}</td>\n              <td>\n                <span class=\"badge badge-success\">Active</span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/system-config-dashboard/system-config-dashboard.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/system-config-dashboard/system-config-dashboard.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/admin/system-config/category']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-facebook\">\n          <i class=\"fa fa-cogs\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">Category</div>\n            <div class=\"text-uppercase text-muted small\">System Configuration</div>\n          </div>\n        </div>\n      </div>\n    </a>\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/admin/system-config/priority']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-facebook\">\n          <i class=\"fa fa-cogs\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">Priority</div>\n            <div class=\"text-uppercase text-muted small\">System Configuration</div>\n          </div>\n        </div>\n      </div>\n    </a>\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/admin/system-config/status']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-facebook\">\n          <i class=\"fa fa-cogs\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">Status</div>\n            <div class=\"text-uppercase text-muted small\">System Configuration</div>\n          </div>\n        </div>\n      </div>\n    </a>\n    <a class=\"col-sm-6 col-lg-3 btn\" [routerLink]=\"['/gene/admin/system-config/department']\">\n      <div class=\"brand-card\">\n        <div class=\"brand-card-header bg-facebook\">\n          <i class=\"fa fa-cogs\"></i>\n        </div>\n        <div class=\"brand-card-body\">\n          <div>\n            <div class=\"text-value\">Department</div>\n            <div class=\"text-uppercase text-muted small\">System Configuration</div>\n          </div>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/category/category.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/category/category.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL1N5c3RlbUNvbmZpZy9zeXN0ZW0tY29uZmlnL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/category/category.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/category/category.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_service_Admin_SystemConfig_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/category.service */ "./src/business/service/Admin/SystemConfig/category.service.ts");



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService) {
        this.categoryService = categoryService;
        this.rows = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.fetchCategories();
    };
    CategoryComponent.prototype.fetchCategories = function () {
        var _this = this;
        this.categoryService.getAll().subscribe(function (data) {
            _this.rows = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    CategoryComponent.ctorParameters = function () { return [
        { type: _business_service_Admin_SystemConfig_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
    ]; };
    CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/category/category.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category.component.scss */ "./src/app/views/admin/SystemConfig/system-config/category/category.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_business_service_Admin_SystemConfig_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/department/department.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/department/department.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL1N5c3RlbUNvbmZpZy9zeXN0ZW0tY29uZmlnL2RlcGFydG1lbnQvZGVwYXJ0bWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/department/department.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/department/department.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_service_Admin_SystemConfig_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/department.service */ "./src/business/service/Admin/SystemConfig/department.service.ts");



var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(departmentService) {
        this.departmentService = departmentService;
        this.rows = [];
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.fetchPriorities();
    };
    DepartmentComponent.prototype.fetchPriorities = function () {
        var _this = this;
        this.departmentService.getAll().subscribe(function (data) {
            _this.rows = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    DepartmentComponent.ctorParameters = function () { return [
        { type: _business_service_Admin_SystemConfig_department_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"] }
    ]; };
    DepartmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-department',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./department.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/department/department.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./department.component.scss */ "./src/app/views/admin/SystemConfig/system-config/department/department.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_business_service_Admin_SystemConfig_department_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/new-category/new-category.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/new-category/new-category.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL1N5c3RlbUNvbmZpZy9zeXN0ZW0tY29uZmlnL25ldy1jYXRlZ29yeS9uZXctY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/new-category/new-category.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/new-category/new-category.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NewCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCategoryComponent", function() { return NewCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_service_Admin_SystemConfig_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/category.service */ "./src/business/service/Admin/SystemConfig/category.service.ts");
/* harmony import */ var _business_service_Admin_Auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../business/service/Admin/Auth/user.service */ "./src/business/service/Admin/Auth/user.service.ts");






var NewCategoryComponent = /** @class */ (function () {
    function NewCategoryComponent(router, formBuilder, categoryService, userService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.categoryService = categoryService;
        this.userService = userService;
        this.submitted = false;
        this.compareFn = this.compareByValue;
    }
    NewCategoryComponent.prototype.ngOnInit = function () {
        this.getAllTechnician();
        this.newCategoryForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            assigned: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    NewCategoryComponent.prototype.getAllTechnician = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            console.log(data);
            _this.technicianList = data;
        });
    };
    Object.defineProperty(NewCategoryComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.newCategoryForm.controls; },
        enumerable: true,
        configurable: true
    });
    NewCategoryComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        // if (this.newCategoryForm.invalid) {
        //   return;
        // }
        console.log(this.newCategoryForm.value);
        this.newCategory(this.newCategoryForm.value);
    };
    NewCategoryComponent.prototype.onReset = function () {
        this.submitted = false;
        this.newCategoryForm.reset();
    };
    NewCategoryComponent.prototype.newCategory = function (value) {
        var _this = this;
        this.categoryService.saveCategory(value).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        }, function () {
            _this.router.navigate(['/gene/admin/system-config/category']);
        });
    };
    NewCategoryComponent.prototype.cancel = function () {
        this.router.navigate(['/gene/admin/system-config/category']);
    };
    NewCategoryComponent.prototype.compareByValue = function (f1, f2) {
        return f1 && f2 && f1.id === f2.id;
    };
    NewCategoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _business_service_Admin_SystemConfig_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
        { type: _business_service_Admin_Auth_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    NewCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-category',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/new-category/new-category.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-category.component.scss */ "./src/app/views/admin/SystemConfig/system-config/new-category/new-category.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _business_service_Admin_SystemConfig_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _business_service_Admin_Auth_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], NewCategoryComponent);
    return NewCategoryComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/new-department/new-department.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/new-department/new-department.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL1N5c3RlbUNvbmZpZy9zeXN0ZW0tY29uZmlnL25ldy1kZXBhcnRtZW50L25ldy1kZXBhcnRtZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/new-department/new-department.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/new-department/new-department.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NewDepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDepartmentComponent", function() { return NewDepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_service_Admin_SystemConfig_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/department.service */ "./src/business/service/Admin/SystemConfig/department.service.ts");





var NewDepartmentComponent = /** @class */ (function () {
    function NewDepartmentComponent(router, formBuilder, departmentService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.departmentService = departmentService;
        this.submitted = false;
    }
    NewDepartmentComponent.prototype.ngOnInit = function () {
        this.newDepartmentForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(NewDepartmentComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.newDepartmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    NewDepartmentComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        // if (this.newDepartmentForm.invalid) {
        //   return;
        // }
        console.log(this.newDepartmentForm.value);
        this.newDepartment(this.newDepartmentForm.value);
    };
    NewDepartmentComponent.prototype.onReset = function () {
        this.submitted = false;
        this.newDepartmentForm.reset();
    };
    NewDepartmentComponent.prototype.newDepartment = function (value) {
        var _this = this;
        this.departmentService.saveItem(value).subscribe(function (data) {
            console.log(data);
        }, function (error) { }, function () {
            _this.router.navigate(['/gene/admin/system-config/department']);
        });
    };
    NewDepartmentComponent.prototype.cancel = function () {
        this.router.navigate(['/gene/admin/system-config/department']);
    };
    NewDepartmentComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _business_service_Admin_SystemConfig_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"] }
    ]; };
    NewDepartmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-department',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-department.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/new-department/new-department.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-department.component.scss */ "./src/app/views/admin/SystemConfig/system-config/new-department/new-department.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _business_service_Admin_SystemConfig_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]])
    ], NewDepartmentComponent);
    return NewDepartmentComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/new-priority/new-priority.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/new-priority/new-priority.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL1N5c3RlbUNvbmZpZy9zeXN0ZW0tY29uZmlnL25ldy1wcmlvcml0eS9uZXctcHJpb3JpdHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/new-priority/new-priority.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/new-priority/new-priority.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NewPriorityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPriorityComponent", function() { return NewPriorityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_service_Admin_SystemConfig_priority_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/priority.service */ "./src/business/service/Admin/SystemConfig/priority.service.ts");





var NewPriorityComponent = /** @class */ (function () {
    function NewPriorityComponent(router, formBuilder, priorityService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.priorityService = priorityService;
        this.submitted = false;
    }
    NewPriorityComponent.prototype.ngOnInit = function () {
        this.newPriorityForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(NewPriorityComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.newPriorityForm.controls; },
        enumerable: true,
        configurable: true
    });
    NewPriorityComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        // if (this.newPriorityForm.invalid) {
        //   return;
        // }
        console.log(this.newPriorityForm.value);
        this.newPriority(this.newPriorityForm.value);
    };
    NewPriorityComponent.prototype.onReset = function () {
        this.submitted = false;
        this.newPriorityForm.reset();
    };
    NewPriorityComponent.prototype.newPriority = function (value) {
        var _this = this;
        this.priorityService.savePriority(value).subscribe(function (data) {
            console.log(data);
        }, function (error) { }, function () {
            _this.router.navigate(['/gene/admin/system-config/priority']);
        });
    };
    NewPriorityComponent.prototype.cancel = function () {
        this.router.navigate(['/gene/admin/system-config/priority']);
    };
    NewPriorityComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _business_service_Admin_SystemConfig_priority_service__WEBPACK_IMPORTED_MODULE_4__["PriorityService"] }
    ]; };
    NewPriorityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-priority',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-priority.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/new-priority/new-priority.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-priority.component.scss */ "./src/app/views/admin/SystemConfig/system-config/new-priority/new-priority.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _business_service_Admin_SystemConfig_priority_service__WEBPACK_IMPORTED_MODULE_4__["PriorityService"]])
    ], NewPriorityComponent);
    return NewPriorityComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/new-status/new-status.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/new-status/new-status.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL1N5c3RlbUNvbmZpZy9zeXN0ZW0tY29uZmlnL25ldy1zdGF0dXMvbmV3LXN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/new-status/new-status.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/new-status/new-status.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NewStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewStatusComponent", function() { return NewStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_service_Admin_SystemConfig_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/status.service */ "./src/business/service/Admin/SystemConfig/status.service.ts");





var NewStatusComponent = /** @class */ (function () {
    function NewStatusComponent(router, formBuilder, statusService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusService = statusService;
        this.submitted = false;
    }
    NewStatusComponent.prototype.ngOnInit = function () {
        this.newStatusForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(NewStatusComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.newStatusForm.controls; },
        enumerable: true,
        configurable: true
    });
    NewStatusComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        // if (this.newStatusForm.invalid) {
        //   return;
        // }
        console.log(this.newStatusForm.value);
        this.newStatus(this.newStatusForm.value);
    };
    NewStatusComponent.prototype.onReset = function () {
        this.submitted = false;
        this.newStatusForm.reset();
    };
    NewStatusComponent.prototype.newStatus = function (value) {
        var _this = this;
        this.statusService.saveStatus(value).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        }, function () {
            _this.router.navigate(['/gene/admin/system-config/status']);
        });
    };
    NewStatusComponent.prototype.cancel = function () {
        this.router.navigate(['/gene/admin/system-config/status']);
    };
    NewStatusComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _business_service_Admin_SystemConfig_status_service__WEBPACK_IMPORTED_MODULE_4__["StatusService"] }
    ]; };
    NewStatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-status',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/new-status/new-status.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-status.component.scss */ "./src/app/views/admin/SystemConfig/system-config/new-status/new-status.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _business_service_Admin_SystemConfig_status_service__WEBPACK_IMPORTED_MODULE_4__["StatusService"]])
    ], NewStatusComponent);
    return NewStatusComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/priority/priority.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/priority/priority.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL1N5c3RlbUNvbmZpZy9zeXN0ZW0tY29uZmlnL3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/priority/priority.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/priority/priority.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PriorityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityComponent", function() { return PriorityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_service_Admin_SystemConfig_priority_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/priority.service */ "./src/business/service/Admin/SystemConfig/priority.service.ts");



var PriorityComponent = /** @class */ (function () {
    function PriorityComponent(priorityService) {
        this.priorityService = priorityService;
        this.rows = [];
    }
    PriorityComponent.prototype.ngOnInit = function () {
        this.fetchPriorities();
    };
    PriorityComponent.prototype.fetchPriorities = function () {
        var _this = this;
        this.priorityService.getAll().subscribe(function (data) {
            _this.rows = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    PriorityComponent.ctorParameters = function () { return [
        { type: _business_service_Admin_SystemConfig_priority_service__WEBPACK_IMPORTED_MODULE_2__["PriorityService"] }
    ]; };
    PriorityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-priority',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./priority.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/priority/priority.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./priority.component.scss */ "./src/app/views/admin/SystemConfig/system-config/priority/priority.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_business_service_Admin_SystemConfig_priority_service__WEBPACK_IMPORTED_MODULE_2__["PriorityService"]])
    ], PriorityComponent);
    return PriorityComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/status/status.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/status/status.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL1N5c3RlbUNvbmZpZy9zeXN0ZW0tY29uZmlnL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/status/status.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/status/status.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_service_Admin_SystemConfig_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../business/service/Admin/SystemConfig/status.service */ "./src/business/service/Admin/SystemConfig/status.service.ts");



var StatusComponent = /** @class */ (function () {
    function StatusComponent(categoryService) {
        this.categoryService = categoryService;
        this.rows = [];
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.fetchCategories();
    };
    StatusComponent.prototype.fetchCategories = function () {
        var _this = this;
        this.categoryService.getAll().subscribe(function (data) {
            _this.rows = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    StatusComponent.ctorParameters = function () { return [
        { type: _business_service_Admin_SystemConfig_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"] }
    ]; };
    StatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/status/status.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./status.component.scss */ "./src/app/views/admin/SystemConfig/system-config/status/status.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_business_service_Admin_SystemConfig_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/system-config-dashboard/system-config-dashboard.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/system-config-dashboard/system-config-dashboard.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluL1N5c3RlbUNvbmZpZy9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWctZGFzaGJvYXJkL3N5c3RlbS1jb25maWctZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/system-config-dashboard/system-config-dashboard.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/system-config-dashboard/system-config-dashboard.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: SystemConfigDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemConfigDashboardComponent", function() { return SystemConfigDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SystemConfigDashboardComponent = /** @class */ (function () {
    function SystemConfigDashboardComponent() {
    }
    SystemConfigDashboardComponent.prototype.ngOnInit = function () {
    };
    SystemConfigDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system-config-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./system-config-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/SystemConfig/system-config/system-config-dashboard/system-config-dashboard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./system-config-dashboard.component.scss */ "./src/app/views/admin/SystemConfig/system-config/system-config-dashboard/system-config-dashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SystemConfigDashboardComponent);
    return SystemConfigDashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/system-config-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/system-config-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SystemConfigRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemConfigRoutingModule", function() { return SystemConfigRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _system_config_dashboard_system_config_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-config-dashboard/system-config-dashboard.component */ "./src/app/views/admin/SystemConfig/system-config/system-config-dashboard/system-config-dashboard.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "./src/app/views/admin/SystemConfig/system-config/category/category.component.ts");
/* harmony import */ var _new_category_new_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-category/new-category.component */ "./src/app/views/admin/SystemConfig/system-config/new-category/new-category.component.ts");
/* harmony import */ var _new_priority_new_priority_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-priority/new-priority.component */ "./src/app/views/admin/SystemConfig/system-config/new-priority/new-priority.component.ts");
/* harmony import */ var _priority_priority_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./priority/priority.component */ "./src/app/views/admin/SystemConfig/system-config/priority/priority.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./status/status.component */ "./src/app/views/admin/SystemConfig/system-config/status/status.component.ts");
/* harmony import */ var _new_status_new_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-status/new-status.component */ "./src/app/views/admin/SystemConfig/system-config/new-status/new-status.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./department/department.component */ "./src/app/views/admin/SystemConfig/system-config/department/department.component.ts");
/* harmony import */ var _new_department_new_department_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-department/new-department.component */ "./src/app/views/admin/SystemConfig/system-config/new-department/new-department.component.ts");












var routes = [
    {
        path: '',
        data: {
            title: 'System Configuration'
        },
        children: [
            {
                path: '',
                redirectTo: 'system-config'
            },
            {
                path: 'system-config',
                component: _system_config_dashboard_system_config_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["SystemConfigDashboardComponent"],
                data: {
                    title: 'System Configuration'
                }
            },
            {
                path: 'category',
                component: _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"],
                data: {
                    title: 'Category'
                }
            },
            {
                path: 'new-category',
                component: _new_category_new_category_component__WEBPACK_IMPORTED_MODULE_5__["NewCategoryComponent"],
                data: {
                    title: 'New Category'
                }
            },
            {
                path: 'department',
                component: _department_department_component__WEBPACK_IMPORTED_MODULE_10__["DepartmentComponent"],
                data: {
                    title: 'Department'
                }
            },
            {
                path: 'new-department',
                component: _new_department_new_department_component__WEBPACK_IMPORTED_MODULE_11__["NewDepartmentComponent"],
                data: {
                    title: 'New Department'
                }
            },
            {
                path: 'priority',
                component: _priority_priority_component__WEBPACK_IMPORTED_MODULE_7__["PriorityComponent"],
                data: {
                    title: 'Priority'
                }
            },
            {
                path: 'new-priority',
                component: _new_priority_new_priority_component__WEBPACK_IMPORTED_MODULE_6__["NewPriorityComponent"],
                data: {
                    title: 'New Priority'
                }
            },
            {
                path: 'status',
                component: _status_status_component__WEBPACK_IMPORTED_MODULE_8__["StatusComponent"],
                data: {
                    title: 'Status'
                }
            },
            {
                path: 'new-status',
                component: _new_status_new_status_component__WEBPACK_IMPORTED_MODULE_9__["NewStatusComponent"],
                data: {
                    title: 'New Status'
                }
            }
        ]
    }
];
var SystemConfigRoutingModule = /** @class */ (function () {
    function SystemConfigRoutingModule() {
    }
    SystemConfigRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SystemConfigRoutingModule);
    return SystemConfigRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/admin/SystemConfig/system-config/system-config.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/admin/SystemConfig/system-config/system-config.module.ts ***!
  \********************************************************************************/
/*! exports provided: SystemConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemConfigModule", function() { return SystemConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _system_config_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-config-routing.module */ "./src/app/views/admin/SystemConfig/system-config/system-config-routing.module.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "./src/app/views/admin/SystemConfig/system-config/category/category.component.ts");
/* harmony import */ var _new_category_new_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-category/new-category.component */ "./src/app/views/admin/SystemConfig/system-config/new-category/new-category.component.ts");
/* harmony import */ var _system_config_dashboard_system_config_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./system-config-dashboard/system-config-dashboard.component */ "./src/app/views/admin/SystemConfig/system-config/system-config-dashboard/system-config-dashboard.component.ts");
/* harmony import */ var _new_priority_new_priority_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-priority/new-priority.component */ "./src/app/views/admin/SystemConfig/system-config/new-priority/new-priority.component.ts");
/* harmony import */ var _priority_priority_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./priority/priority.component */ "./src/app/views/admin/SystemConfig/system-config/priority/priority.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _new_status_new_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-status/new-status.component */ "./src/app/views/admin/SystemConfig/system-config/new-status/new-status.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./status/status.component */ "./src/app/views/admin/SystemConfig/system-config/status/status.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./department/department.component */ "./src/app/views/admin/SystemConfig/system-config/department/department.component.ts");
/* harmony import */ var _new_department_new_department_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./new-department/new-department.component */ "./src/app/views/admin/SystemConfig/system-config/new-department/new-department.component.ts");














var SystemConfigModule = /** @class */ (function () {
    function SystemConfigModule() {
    }
    SystemConfigModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"], _new_category_new_category_component__WEBPACK_IMPORTED_MODULE_5__["NewCategoryComponent"], _system_config_dashboard_system_config_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["SystemConfigDashboardComponent"], _new_priority_new_priority_component__WEBPACK_IMPORTED_MODULE_7__["NewPriorityComponent"], _priority_priority_component__WEBPACK_IMPORTED_MODULE_8__["PriorityComponent"], _new_status_new_status_component__WEBPACK_IMPORTED_MODULE_10__["NewStatusComponent"], _status_status_component__WEBPACK_IMPORTED_MODULE_11__["StatusComponent"], _department_department_component__WEBPACK_IMPORTED_MODULE_12__["DepartmentComponent"], _new_department_new_department_component__WEBPACK_IMPORTED_MODULE_13__["NewDepartmentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _system_config_routing_module__WEBPACK_IMPORTED_MODULE_3__["SystemConfigRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            entryComponents: [_new_category_new_category_component__WEBPACK_IMPORTED_MODULE_5__["NewCategoryComponent"], _new_priority_new_priority_component__WEBPACK_IMPORTED_MODULE_7__["NewPriorityComponent"]]
        })
    ], SystemConfigModule);
    return SystemConfigModule;
}());



/***/ })

}]);
//# sourceMappingURL=SystemConfig-system-config-system-config-module.js.map