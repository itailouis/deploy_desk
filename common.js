(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/business/service/Admin/Auth/user.service.ts":
/*!*********************************************************!*\
  !*** ./src/business/service/Admin/Auth/user.service.ts ***!
  \*********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Global */ "./src/Global.ts");




var UserService = /** @class */ (function () {
    function UserService(http, global) {
        this.http = http;
        this.global = global;
        this.baseUrl = this.global.baseUrl + '/api/admin/user/';
        this.saveStaffUrl = this.baseUrl + 'save/staff';
        this.getAllUrl = this.baseUrl + 'get-all';
        this.saveItemUrl = this.baseUrl + 'save';
        this.setDepartmentUrl = this.baseUrl + 'set-department';
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.getAllUrl);
    };
    UserService.prototype.saveUser = function (item) {
        return this.http.post(this.saveItemUrl, item);
    };
    UserService.prototype.saveStaff = function (item) {
        return this.http.get(this.saveStaffUrl, { params: {
                firstName: item.firstName,
                lastName: item.lastName,
                userName: item.email
            } });
    };
    UserService.prototype.setDepartment = function (userName, departmentName) {
        return this.http.get(this.setDepartmentUrl, { params: {
                userName: userName,
                departmentName: departmentName
            }
        });
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _Global__WEBPACK_IMPORTED_MODULE_3__["Global"] }
    ]; };
    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Global__WEBPACK_IMPORTED_MODULE_3__["Global"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/business/service/Admin/SystemConfig/category.service.ts":
/*!*********************************************************************!*\
  !*** ./src/business/service/Admin/SystemConfig/category.service.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Global */ "./src/Global.ts");




var CategoryService = /** @class */ (function () {
    function CategoryService(http, global) {
        this.http = http;
        this.global = global;
        this.baseUrl = this.global.baseUrl + '/api/category/';
        this.saveCategoryUrl = this.baseUrl + 'save';
        this.getAllUrl = this.baseUrl + 'get-all';
    }
    CategoryService.prototype.saveCategory = function (category) {
        return this.http.post(this.saveCategoryUrl, category);
    };
    CategoryService.prototype.getAll = function () {
        return this.http.get(this.getAllUrl);
    };
    CategoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _Global__WEBPACK_IMPORTED_MODULE_3__["Global"] }
    ]; };
    CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Global__WEBPACK_IMPORTED_MODULE_3__["Global"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/business/service/Admin/SystemConfig/department.service.ts":
/*!***********************************************************************!*\
  !*** ./src/business/service/Admin/SystemConfig/department.service.ts ***!
  \***********************************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Global */ "./src/Global.ts");




var DepartmentService = /** @class */ (function () {
    function DepartmentService(http, global) {
        this.http = http;
        this.global = global;
        this.baseUrl = this.global.baseUrl + '/api/department/';
        this.saveDepartmentUrl = this.baseUrl + 'save';
        this.getAllUrl = this.baseUrl + 'get-all';
    }
    DepartmentService.prototype.saveItem = function (item) {
        return this.http.post(this.saveDepartmentUrl, item);
    };
    DepartmentService.prototype.getAll = function () {
        return this.http.get(this.getAllUrl);
    };
    DepartmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _Global__WEBPACK_IMPORTED_MODULE_3__["Global"] }
    ]; };
    DepartmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Global__WEBPACK_IMPORTED_MODULE_3__["Global"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/business/service/Admin/SystemConfig/priority.service.ts":
/*!*********************************************************************!*\
  !*** ./src/business/service/Admin/SystemConfig/priority.service.ts ***!
  \*********************************************************************/
/*! exports provided: PriorityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityService", function() { return PriorityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Global */ "./src/Global.ts");




var PriorityService = /** @class */ (function () {
    function PriorityService(http, global) {
        this.http = http;
        this.global = global;
        this.baseUrl = this.global.baseUrl + '/api/priority/';
        this.savePriorityUrl = this.baseUrl + 'save';
        this.getAllUrl = this.baseUrl + 'get-all';
    }
    PriorityService.prototype.savePriority = function (priority) {
        return this.http.post(this.savePriorityUrl, priority);
    };
    PriorityService.prototype.getAll = function () {
        return this.http.get(this.getAllUrl);
    };
    PriorityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _Global__WEBPACK_IMPORTED_MODULE_3__["Global"] }
    ]; };
    PriorityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Global__WEBPACK_IMPORTED_MODULE_3__["Global"]])
    ], PriorityService);
    return PriorityService;
}());



/***/ }),

/***/ "./src/business/service/Admin/SystemConfig/status.service.ts":
/*!*******************************************************************!*\
  !*** ./src/business/service/Admin/SystemConfig/status.service.ts ***!
  \*******************************************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Global */ "./src/Global.ts");




var StatusService = /** @class */ (function () {
    function StatusService(http, global) {
        this.http = http;
        this.global = global;
        this.baseUrl = this.global.baseUrl + '/api/status/';
        this.saveStatusUrl = this.baseUrl + 'save';
        this.getAllUrl = this.baseUrl + 'get-all';
    }
    StatusService.prototype.saveStatus = function (status) {
        return this.http.post(this.saveStatusUrl, status);
    };
    StatusService.prototype.getAll = function () {
        return this.http.get(this.getAllUrl);
    };
    StatusService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _Global__WEBPACK_IMPORTED_MODULE_3__["Global"] }
    ]; };
    StatusService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Global__WEBPACK_IMPORTED_MODULE_3__["Global"]])
    ], StatusService);
    return StatusService;
}());



/***/ }),

/***/ "./src/business/service/ticket.service.ts":
/*!************************************************!*\
  !*** ./src/business/service/ticket.service.ts ***!
  \************************************************/
/*! exports provided: TicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketService", function() { return TicketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Global */ "./src/Global.ts");




var TicketService = /** @class */ (function () {
    function TicketService(http, global) {
        this.http = http;
        this.global = global;
        this.baseUrl = this.global.baseUrl + '/api/ticket/';
        this.saveTicketUrl = this.baseUrl + 'save';
        this.getAllUrl = this.baseUrl + 'get-all';
        this.getItemUrl = this.baseUrl + 'get-item';
        this.getByUserUrl = this.baseUrl + 'get-by-user';
    }
    TicketService.prototype.saveTicket = function (ticket) {
        return this.http.post(this.saveTicketUrl, ticket);
    };
    TicketService.prototype.getAll = function () {
        return this.http.get(this.getAllUrl);
    };
    TicketService.prototype.getTicket = function (id) {
        return this.http.get(this.getItemUrl, { params: {
                id: id
            } });
    };
    TicketService.prototype.getTicketByUser = function () {
        console.log("called.subscribe()");
        return this.http.get(this.getByUserUrl);
    };
    TicketService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _Global__WEBPACK_IMPORTED_MODULE_3__["Global"] }
    ]; };
    TicketService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _Global__WEBPACK_IMPORTED_MODULE_3__["Global"]])
    ], TicketService);
    return TicketService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map