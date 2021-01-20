(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-solutions-solutions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/solutions/solutions/solutions.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/solutions/solutions/solutions.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>solutions works!</p>\n");

/***/ }),

/***/ "./src/app/views/solutions/solutions-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/solutions/solutions-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SolutionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionsRoutingModule", function() { return SolutionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solutions_solutions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solutions/solutions.component */ "./src/app/views/solutions/solutions/solutions.component.ts");




var routes = [
    {
        path: '',
        data: {
            title: 'Solutions'
        },
        children: [
            {
                path: '',
                redirectTo: 'solutions'
            },
            {
                path: 'solutions',
                component: _solutions_solutions_component__WEBPACK_IMPORTED_MODULE_3__["SolutionsComponent"],
                data: {
                    title: 'Solutions'
                }
            }
        ]
    }
];
var SolutionsRoutingModule = /** @class */ (function () {
    function SolutionsRoutingModule() {
    }
    SolutionsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SolutionsRoutingModule);
    return SolutionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/solutions/solutions.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/solutions/solutions.module.ts ***!
  \*****************************************************/
/*! exports provided: SolutionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionsModule", function() { return SolutionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _solutions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solutions-routing.module */ "./src/app/views/solutions/solutions-routing.module.ts");
/* harmony import */ var _solutions_solutions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solutions/solutions.component */ "./src/app/views/solutions/solutions/solutions.component.ts");





var SolutionsModule = /** @class */ (function () {
    function SolutionsModule() {
    }
    SolutionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_4__["SolutionsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _solutions_routing_module__WEBPACK_IMPORTED_MODULE_3__["SolutionsRoutingModule"]
            ]
        })
    ], SolutionsModule);
    return SolutionsModule;
}());



/***/ }),

/***/ "./src/app/views/solutions/solutions/solutions.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/solutions/solutions/solutions.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NvbHV0aW9ucy9zb2x1dGlvbnMvc29sdXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/solutions/solutions/solutions.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/solutions/solutions/solutions.component.ts ***!
  \******************************************************************/
/*! exports provided: SolutionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionsComponent", function() { return SolutionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SolutionsComponent = /** @class */ (function () {
    function SolutionsComponent() {
    }
    SolutionsComponent.prototype.ngOnInit = function () {
    };
    SolutionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-solutions',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./solutions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/solutions/solutions/solutions.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./solutions.component.scss */ "./src/app/views/solutions/solutions/solutions.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SolutionsComponent);
    return SolutionsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-solutions-solutions-module.js.map