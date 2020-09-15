(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/angularx-social-login/fesm5/angularx-social-login.js":
/*!***************************************************************************!*\
  !*** ./node_modules/angularx-social-login/fesm5/angularx-social-login.js ***!
  \***************************************************************************/
/*! exports provided: AuthService, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule, SocialUser, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceConfig", function() { return AuthServiceConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginProvider", function() { return FacebookLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginProvider", function() { return GoogleLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginModule", function() { return SocialLoginModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialUser", function() { return SocialUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BaseLoginProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var AuthServiceConfig = /** @class */ (function () {
    function AuthServiceConfig(providers) {
        var _this = this;
        this.lazyLoad = false;
        this.providers = new Map();
        this._ready = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        if (Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(providers)) {
            providers.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (providerList) {
                _this.initialize(providerList);
            });
        }
        else {
            this.initialize(providers);
        }
    }
    AuthServiceConfig.prototype.initialize = function (providers) {
        for (var i = 0; i < providers.length; i++) {
            var element = providers[i];
            this.providers.set(element.id, element.provider);
            this.lazyLoad = this.lazyLoad || element.lazyLoad;
        }
        this._ready.next();
        this._ready.complete();
    };
    return AuthServiceConfig;
}());
var AuthService = /** @class */ (function () {
    function AuthService(config) {
        var _this = this;
        this._user = null;
        this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this._readyState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.initialized = false;
        config._ready.subscribe(function () {
            _this.providers = config.providers;
            if (!config.lazyLoad) {
                _this.initialize();
            }
        });
    }
    AuthService_1 = AuthService;
    Object.defineProperty(AuthService.prototype, "authState", {
        get: function () {
            return this._authState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "readyState", {
        /** Provides an array of provider ID's as they become ready */
        get: function () {
            return this._readyState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.initialize = function () {
        var _this = this;
        this.initialized = true;
        this.providers.forEach(function (provider, key) {
            provider.initialize().then(function () {
                var readyProviders = _this._readyState.getValue();
                readyProviders.push(key);
                _this._readyState.next(readyProviders);
                provider.getLoginStatus().then(function (user) {
                    user.provider = key;
                    _this._user = user;
                    _this._authState.next(user);
                }).catch(function (err) {
                    _this._authState.next(null);
                });
            });
        });
    };
    AuthService.prototype.signIn = function (providerId, opt) {
        var _this = this;
        if (!this.initialized) {
            this.initialize();
        }
        return new Promise(function (resolve, reject) {
            var providerObject = _this.providers.get(providerId);
            if (providerObject) {
                providerObject.signIn(opt).then(function (user) {
                    user.provider = providerId;
                    resolve(user);
                    _this._user = user;
                    _this._authState.next(user);
                }).catch(function (err) {
                    reject(err);
                });
            }
            else {
                reject(AuthService_1.ERR_LOGIN_PROVIDER_NOT_FOUND);
            }
        });
    };
    AuthService.prototype.signOut = function (revoke) {
        var _this = this;
        if (revoke === void 0) { revoke = false; }
        if (!this.initialized) {
            this.initialize();
        }
        return new Promise(function (resolve, reject) {
            if (!_this._user) {
                reject(AuthService_1.ERR_NOT_LOGGED_IN);
            }
            else {
                var providerId = _this._user.provider;
                var providerObject = _this.providers.get(providerId);
                if (providerObject) {
                    providerObject.signOut(revoke).then(function () {
                        resolve();
                        _this._user = null;
                        _this._authState.next(null);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
                else {
                    reject(AuthService_1.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
            }
        });
    };
    var AuthService_1;
    AuthService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
    AuthService.ERR_NOT_LOGGED_IN = 'Not logged in';
    AuthService.ctorParameters = function () { return [
        { type: AuthServiceConfig }
    ]; };
    AuthService = AuthService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());

function configFactory(config) {
    return config;
}
var SocialLoginModule = /** @class */ (function () {
    function SocialLoginModule(parentModule) {
        if (parentModule) {
            throw new Error('SocialLoginModule is already loaded. Import it in the AppModule only');
        }
    }
    SocialLoginModule_1 = SocialLoginModule;
    SocialLoginModule.initialize = function (config) {
        return {
            ngModule: SocialLoginModule_1,
            providers: [
                AuthService,
                {
                    provide: AuthServiceConfig,
                    useValue: config
                }
            ]
        };
    };
    var SocialLoginModule_1;
    SocialLoginModule.ctorParameters = function () { return [
        { type: SocialLoginModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    SocialLoginModule = SocialLoginModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
            ],
            providers: [
                AuthService
            ]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())
    ], SocialLoginModule);
    return SocialLoginModule;
}());

var SocialUser = /** @class */ (function () {
    function SocialUser() {
    }
    return SocialUser;
}());

var BaseLoginProvider = /** @class */ (function () {
    function BaseLoginProvider() {
        this._readyState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    BaseLoginProvider.prototype.onReady = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._readyState.subscribe(function (isReady) {
                if (isReady) {
                    resolve();
                }
            });
        });
    };
    BaseLoginProvider.prototype.loadScript = function (id, src, onload, async, inner_text_content) {
        if (async === void 0) { async = true; }
        if (inner_text_content === void 0) { inner_text_content = ''; }
        // get document if platform is only browser
        if (typeof document !== 'undefined' && !document.getElementById(id)) {
            var signInJS = document.createElement('script');
            signInJS.async = async;
            signInJS.src = src;
            signInJS.onload = onload;
            /*
            if (inner_text_content) // LinkedIn
                signInJS.text = inner_text_content;
            */
            document.head.appendChild(signInJS);
        }
    };
    return BaseLoginProvider;
}());

var GoogleLoginProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GoogleLoginProvider, _super);
    function GoogleLoginProvider(clientId, opt) {
        if (opt === void 0) { opt = { scope: 'email' }; }
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.opt = opt;
        return _this;
    }
    GoogleLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(GoogleLoginProvider.PROVIDER_ID, 'https://apis.google.com/js/platform.js', function () {
                gapi.load('auth2', function () {
                    _this.auth2 = gapi.auth2.init(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.opt), { client_id: _this.clientId }));
                    _this.auth2.then(function () {
                        _this._readyState.next(true);
                        resolve();
                    }).catch(function (err) {
                        reject(err);
                    });
                });
            });
        });
    };
    GoogleLoginProvider.prototype.getLoginStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.onReady().then(function () {
                if (_this.auth2.isSignedIn.get()) {
                    var user = new SocialUser();
                    var profile = _this.auth2.currentUser.get().getBasicProfile();
                    var token = _this.auth2.currentUser.get().getAuthResponse(true).access_token;
                    var backendToken = _this.auth2.currentUser.get().getAuthResponse(true).id_token;
                    user.id = profile.getId();
                    user.name = profile.getName();
                    user.email = profile.getEmail();
                    user.photoUrl = profile.getImageUrl();
                    user.firstName = profile.getGivenName();
                    user.lastName = profile.getFamilyName();
                    user.authToken = token;
                    user.idToken = backendToken;
                    resolve(user);
                }
                else {
                    reject('No user is currently logged in.');
                }
            });
        });
    };
    GoogleLoginProvider.prototype.signIn = function (opt) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.onReady().then(function () {
                var offlineAccess = (opt && opt.offline_access) || (_this.opt && _this.opt.offline_access);
                var promise = !offlineAccess ? _this.auth2.signIn(opt) : _this.auth2.grantOfflineAccess(opt);
                promise.then(function (response) {
                    var user = new SocialUser();
                    var profile = _this.auth2.currentUser.get().getBasicProfile();
                    var token = _this.auth2.currentUser.get().getAuthResponse(true).access_token;
                    var backendToken = _this.auth2.currentUser.get().getAuthResponse(true).id_token;
                    user.id = profile.getId();
                    user.name = profile.getName();
                    user.email = profile.getEmail();
                    user.photoUrl = profile.getImageUrl();
                    user.firstName = profile.getGivenName();
                    user.lastName = profile.getFamilyName();
                    user.authToken = token;
                    user.idToken = backendToken;
                    if (response && response.code) {
                        user.authorizationCode = response.code;
                    }
                    resolve(user);
                }, function (closed) {
                    reject('User cancelled login or did not fully authorize.');
                }).catch(function (err) {
                    reject(err);
                });
            });
        });
    };
    GoogleLoginProvider.prototype.signOut = function (revoke) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.onReady().then(function () {
                var signOutPromise;
                if (revoke) {
                    signOutPromise = _this.auth2.disconnect();
                }
                else {
                    signOutPromise = _this.auth2.signOut();
                }
                signOutPromise.then(function (err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                }).catch(function (err) {
                    reject(err);
                });
            });
        });
    };
    GoogleLoginProvider.PROVIDER_ID = 'GOOGLE';
    return GoogleLoginProvider;
}(BaseLoginProvider));

var FacebookLoginProvider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FacebookLoginProvider, _super);
    function FacebookLoginProvider(clientId, opt, locale, fields, version) {
        if (opt === void 0) { opt = { scope: 'email,public_profile' }; }
        if (locale === void 0) { locale = 'en_US'; }
        if (fields === void 0) { fields = 'name,email,picture,first_name,last_name'; }
        if (version === void 0) { version = 'v4.0'; }
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.opt = opt;
        _this.locale = locale;
        _this.fields = fields;
        _this.version = version;
        return _this;
    }
    FacebookLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(FacebookLoginProvider.PROVIDER_ID, "//connect.facebook.net/" + _this.locale + "/sdk.js", function () {
                FB.init({
                    appId: _this.clientId,
                    autoLogAppEvents: true,
                    cookie: true,
                    xfbml: true,
                    version: _this.version
                });
                // FB.AppEvents.logPageView(); #FIX for #18
                _this._readyState.next(true);
                resolve();
            });
        });
    };
    FacebookLoginProvider.prototype.getLoginStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.onReady().then(function () {
                FB.getLoginStatus(function (response) {
                    if (response.status === 'connected') {
                        var authResponse_1 = response.authResponse;
                        FB.api("/me?fields=" + _this.fields, function (fbUser) {
                            var user = new SocialUser();
                            user.id = fbUser.id;
                            user.name = fbUser.name;
                            user.email = fbUser.email;
                            user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
                            user.firstName = fbUser.first_name;
                            user.lastName = fbUser.last_name;
                            user.authToken = authResponse_1.accessToken;
                            user.facebook = fbUser;
                            resolve(user);
                        });
                    }
                    else {
                        reject('No user is currently logged in.');
                    }
                });
            });
        });
    };
    FacebookLoginProvider.prototype.signIn = function (opt) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.onReady().then(function () {
                FB.login(function (response) {
                    if (response.authResponse) {
                        var authResponse_2 = response.authResponse;
                        FB.api("/me?fields=" + _this.fields, function (fbUser) {
                            var user = new SocialUser();
                            user.id = fbUser.id;
                            user.name = fbUser.name;
                            user.email = fbUser.email;
                            user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
                            user.firstName = fbUser.first_name;
                            user.lastName = fbUser.last_name;
                            user.authToken = authResponse_2.accessToken;
                            user.facebook = fbUser;
                            resolve(user);
                        });
                    }
                    else {
                        reject('User cancelled login or did not fully authorize.');
                    }
                }, _this.opt);
            });
        });
    };
    FacebookLoginProvider.prototype.signOut = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.onReady().then(function () {
                FB.logout(function (response) {
                    resolve();
                });
            });
        });
    };
    FacebookLoginProvider.PROVIDER_ID = 'FACEBOOK';
    return FacebookLoginProvider;
}(BaseLoginProvider));

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=angularx-social-login.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/assign-department/assign-department.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/assign-department/assign-department.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <form [formGroup]=\"assignDepartmentForm\" (ngSubmit)=\"onSubmit()\">\n                  <h1>Set Up Your Account</h1>\n                  <p class=\"text-muted\">Please Select Your Department</p>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-people\"></i></span>\n                    </div>\n                    <select type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Departments\" formControlName=\"department\" autocomplete=\"department\" required>\n                      <option *ngFor=\"let item of departmentList\" [ngValue]=\"item\">{{item.name}}</option>\n                    </select>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-lg px-4\">Set</button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                  <h1>Login</h1>\n                  <p class=\"text-muted\">Sign In to your account</p>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\" autocomplete=\"username\" required>\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" autocomplete=\"current-password\" required>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"submit\" class=\"btn btn-primary px-4\">Login</button>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                      <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"card text-white bg-dark py-5 d-md-down-none\" style=\"width:44%\">\n              <div class=\"card-body text-center\">\n                <div>\n                  <img src=\"assets/img/brand/geneinsure-logo1.png\" class=\"col-md-11\">\n                  <br>\n                  <span>\n                    <br>\n                  </span>\n                  <span>\n                    <br>\n                  </span>\n                  <span>\n                    <br>\n                  </span>\n                  <button (click)=\"signInWithGoogle()\" type=\"button\" class=\"btn btn-brand btn-lg btn-google-plus active mt-3\">\n                    <i class=\"fa fa-google-plus\"></i>\n                    <span>Google+</span>\n                    </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "./src/app/login/assign-department/assign-department.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/login/assign-department/assign-department.component.ts ***!
  \************************************************************************/
/*! exports provided: AssignDepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignDepartmentComponent", function() { return AssignDepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_service_Admin_Auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../business/service/Admin/Auth/user.service */ "./src/business/service/Admin/Auth/user.service.ts");
/* harmony import */ var _business_service_Admin_SystemConfig_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../business/service/Admin/SystemConfig/department.service */ "./src/business/service/Admin/SystemConfig/department.service.ts");
/* harmony import */ var _business_service_Admin_Auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../business/service/Admin/Auth/authentication.service */ "./src/business/service/Admin/Auth/authentication.service.ts");
/* harmony import */ var _core_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/token-storage.service */ "./src/app/core/token-storage.service.ts");








var AssignDepartmentComponent = /** @class */ (function () {
    function AssignDepartmentComponent(router, formBuilder, userService, departmentService, tokenStorage, authenticationService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.departmentService = departmentService;
        this.tokenStorage = tokenStorage;
        this.authenticationService = authenticationService;
    }
    AssignDepartmentComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getDepartments();
    };
    AssignDepartmentComponent.prototype.createForm = function () {
        this.assignDepartmentForm = this.formBuilder.group({
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AssignDepartmentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.setDepartment(localStorage.getItem('email'), this.assignDepartmentForm.value.department.name).subscribe(function (data) {
            console.log(data);
        }, function (error) { }, function () {
            var value = {
                username: localStorage.getItem('email'),
                password: 'Pass1234'
            };
            _this.authenticate(value);
        });
    };
    AssignDepartmentComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getAll().subscribe(function (data) {
            _this.departmentList = data;
            console.log(data);
        }, function (error) { }, function () {
        });
    };
    AssignDepartmentComponent.prototype.authenticate = function (value) {
        var _this = this;
        this.authenticationService.authenticate(value.username, value.password).subscribe(function (data) {
            localStorage.setItem('userRoles', JSON.stringify(data.user.userRoles));
            localStorage.setItem('email', data.user.userName);
            localStorage.setItem('name', data.user.displayName);
            _this.tokenStorage.saveToken(data.token);
            _this.item = data;
        }, function (error) {
        }, function () {
            _this.router.navigate(['/gene/home']);
        });
    };
    AssignDepartmentComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _business_service_Admin_Auth_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _business_service_Admin_SystemConfig_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"] },
        { type: _core_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"] },
        { type: _business_service_Admin_Auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    AssignDepartmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assign-department.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/assign-department/assign-department.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _business_service_Admin_Auth_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _business_service_Admin_SystemConfig_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"],
            _core_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"],
            _business_service_Admin_Auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], AssignDepartmentComponent);
    return AssignDepartmentComponent;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _assign_department_assign_department_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assign-department/assign-department.component */ "./src/app/login/assign-department/assign-department.component.ts");





var routes = [
    {
        path: '',
        data: {
            title: 'Login'
        },
        children: [
            {
                path: '',
                redirectTo: 'login'
            },
            {
                path: 'login',
                component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                data: {
                    title: 'Login'
                }
            },
            {
                path: 'assign-department',
                component: _assign_department_assign_department_component__WEBPACK_IMPORTED_MODULE_4__["AssignDepartmentComponent"],
                data: {
                    title: 'Assign Department'
                }
            }
        ]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/fesm5/angularx-social-login.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_service_Admin_Auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../business/service/Admin/Auth/authentication.service */ "./src/business/service/Admin/Auth/authentication.service.ts");
/* harmony import */ var _core_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/token-storage.service */ "./src/app/core/token-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _business_service_Admin_Auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../business/service/Admin/Auth/user.service */ "./src/business/service/Admin/Auth/user.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, authenticationService, tokenStorage, router, formBuilder, userService) {
        this.authService = authService;
        this.authenticationService = authenticationService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.submitted = false;
    }
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this.user = userData;
            localStorage.setItem('userData', JSON.stringify(userData));
            if (userData !== null || userData !== undefined) {
                _this.userService.saveStaff(_this.user).subscribe(function (data) {
                    console.log(data);
                    _this.message = data.message;
                    _this.loggedUser = data;
                    localStorage.setItem('email', userData.email);
                    localStorage.setItem('name', userData.name);
                    localStorage.setItem('photoUrl', userData.photoUrl);
                }, function (error) {
                    console.log(error);
                }, function () {
                    if (_this.message === 'Validation error?' && _this.loggedUser.user.department !== null) {
                        var value = {
                            username: userData.email,
                            password: 'Pass1234'
                        };
                        _this.authenticate(value);
                    }
                    else {
                        _this.router.navigate(['/login/assign-department']);
                    }
                });
            }
        });
    };
    LoginComponent.prototype.signInWithFB = function () {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID);
    };
    LoginComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.clear();
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.authenticate(this.loginForm.value);
    };
    LoginComponent.prototype.onReset = function () {
        this.submitted = false;
        this.loginForm.reset();
    };
    LoginComponent.prototype.authenticate = function (value) {
        var _this = this;
        console.log(value.username);
        this.authenticationService.authenticate(value.username, value.password).subscribe(function (data) {
            localStorage.setItem('userRoles', JSON.stringify(data.user.userRoles));
            localStorage.setItem('email', data.user.userName);
            localStorage.setItem('name', data.user.displayName);
            _this.tokenStorage.saveToken(data.token);
            _this.item = data;
            console.log('supposed to push**********');
        }, function (error) {
        }, function () {
            console.log('supposed to push');
            _this.router.navigate(['/gene/home']);
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _business_service_Admin_Auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _core_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _business_service_Admin_Auth_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _business_service_Admin_Auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _core_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _business_service_Admin_Auth_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: provideConfig, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/fesm5/angularx-social-login.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _assign_department_assign_department_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assign-department/assign-department.component */ "./src/app/login/assign-department/assign-department.component.ts");








var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID,
        //provider: new GoogleLoginProvider("436558656003-ir0vocf8p76nunlr5cahfb4lha93tfqc.apps.googleusercontent.com")
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"]("331766081826-rc4on5rhpo6g7phsm883vu2l53r3tvvi.apps.googleusercontent.com")
    }
]);
function provideConfig() {
    return config;
}
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _assign_department_assign_department_component__WEBPACK_IMPORTED_MODULE_7__["AssignDepartmentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["SocialLoginModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map