(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helps/DateTimeFormatPipe.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/_helps/DateTimeFormatPipe.pipe.ts ***!
  \***************************************************/
/*! exports provided: DateTimeFormatPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFormatPipePipe", function() { return DateTimeFormatPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _util_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Constants */ "./src/app/util/Constants.ts");




var DateTimeFormatPipePipe = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DateTimeFormatPipePipe, _super);
    function DateTimeFormatPipePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateTimeFormatPipePipe.prototype.transform = function (value, args) {
        return _super.prototype.transform.call(this, value, _util_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DATE_TIME_FMT);
    };
    DateTimeFormatPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'DateTimeFormatPipe'
        })
    ], DateTimeFormatPipePipe);
    return DateTimeFormatPipePipe;
}(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]));



/***/ }),

/***/ "./src/app/_models/Evento.ts":
/*!***********************************!*\
  !*** ./src/app/_models/Evento.ts ***!
  \***********************************/
/*! exports provided: Evento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evento", function() { return Evento; });
var Evento = /** @class */ (function () {
    function Evento() {
    }
    return Evento;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:5000/api/user/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http
            .post(this.baseURL + "login", model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
                sessionStorage.setItem('username', _this.decodedToken.unique_name);
            }
        }));
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(this.baseURL + "register", model);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/evento.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/evento.service.ts ***!
  \*********************************************/
/*! exports provided: EventoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoService", function() { return EventoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EventoService = /** @class */ (function () {
    function EventoService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:5000/api/evento';
    }
    EventoService.prototype.getAllEvento = function () {
        return this.http.get(this.baseURL);
    };
    EventoService.prototype.getEventoByTema = function (tema) {
        return this.http.get(this.baseURL + "/getByTema/" + tema);
    };
    EventoService.prototype.getEventoById = function (id) {
        return this.http.get(this.baseURL + "/" + id);
    };
    EventoService.prototype.postUpload = function (file, name) {
        var fileToUplaod = file[0];
        var formData = new FormData();
        formData.append('file', fileToUplaod, name);
        return this.http.post(this.baseURL + "/upload", formData);
    };
    EventoService.prototype.postEvento = function (evento) {
        return this.http.post(this.baseURL, evento);
    };
    EventoService.prototype.putEvento = function (evento) {
        return this.http.put(this.baseURL + "/" + evento.id, evento);
    };
    EventoService.prototype.deleteEvento = function (id) {
        return this.http.delete(this.baseURL + "/" + id);
    };
    EventoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventoService);
    return EventoService;
}());



/***/ }),

/***/ "./src/app/_shared/titulo/titulo.component.css":
/*!*****************************************************!*\
  !*** ./src/app/_shared/titulo/titulo.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZWQvdGl0dWxvL3RpdHVsby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/_shared/titulo/titulo.component.html":
/*!******************************************************!*\
  !*** ./src/app/_shared/titulo/titulo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  {{ titulo }}\n</h2>\n<hr> \n"

/***/ }),

/***/ "./src/app/_shared/titulo/titulo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_shared/titulo/titulo.component.ts ***!
  \****************************************************/
/*! exports provided: TituloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TituloComponent", function() { return TituloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TituloComponent = /** @class */ (function () {
    function TituloComponent() {
    }
    TituloComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TituloComponent.prototype, "titulo", void 0);
    TituloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-titulo',
            template: __webpack_require__(/*! ./titulo.component.html */ "./src/app/_shared/titulo/titulo.component.html"),
            styles: [__webpack_require__(/*! ./titulo.component.css */ "./src/app/_shared/titulo/titulo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TituloComponent);
    return TituloComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventos/eventos.component */ "./src/app/eventos/eventos.component.ts");
/* harmony import */ var _eventos_eventoEdit_eventoEdit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventos/eventoEdit/eventoEdit.component */ "./src/app/eventos/eventoEdit/eventoEdit.component.ts");
/* harmony import */ var _palestrantes_palestrantes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./palestrantes/palestrantes.component */ "./src/app/palestrantes/palestrantes.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _contatos_contatos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contatos/contatos.component */ "./src/app/contatos/contatos.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");












var routes = [
    {
        path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
        children: [
            { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
            { path: 'registration', component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"] }
        ]
    },
    { path: 'eventos', component: _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_3__["EventosComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'evento/:id/edit', component: _eventos_eventoEdit_eventoEdit_component__WEBPACK_IMPORTED_MODULE_4__["EventoEditComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'palestrantes', component: _palestrantes_palestrantes_component__WEBPACK_IMPORTED_MODULE_5__["PalestrantesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'contatos', component: _contatos_contatos_component__WEBPACK_IMPORTED_MODULE_7__["ContatosComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n\n<div class=\"container\">  \n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_evento_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/evento.service */ "./src/app/_services/evento.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./eventos/eventos.component */ "./src/app/eventos/eventos.component.ts");
/* harmony import */ var _eventos_eventoEdit_eventoEdit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./eventos/eventoEdit/eventoEdit.component */ "./src/app/eventos/eventoEdit/eventoEdit.component.ts");
/* harmony import */ var _palestrantes_palestrantes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./palestrantes/palestrantes.component */ "./src/app/palestrantes/palestrantes.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _contatos_contatos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contatos/contatos.component */ "./src/app/contatos/contatos.component.ts");
/* harmony import */ var _shared_titulo_titulo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_shared/titulo/titulo.component */ "./src/app/_shared/titulo/titulo.component.ts");
/* harmony import */ var _helps_DateTimeFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_helps/DateTimeFormatPipe.pipe */ "./src/app/_helps/DateTimeFormatPipe.pipe.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_14__["EventosComponent"],
                _eventos_eventoEdit_eventoEdit_component__WEBPACK_IMPORTED_MODULE_15__["EventoEditComponent"],
                _palestrantes_palestrantes_component__WEBPACK_IMPORTED_MODULE_16__["PalestrantesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _contatos_contatos_component__WEBPACK_IMPORTED_MODULE_18__["ContatosComponent"],
                _shared_titulo_titulo_component__WEBPACK_IMPORTED_MODULE_19__["TituloComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_21__["UserComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_23__["RegistrationComponent"],
                _helps_DateTimeFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_20__["DateTimeFormatPipePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
                ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"].forRoot(),
                ngx_currency__WEBPACK_IMPORTED_MODULE_9__["NgxCurrencyModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    preventDuplicates: true,
                    progressBar: true
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [
                _services_evento_service__WEBPACK_IMPORTED_MODULE_11__["EventoService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token') !== null) {
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/tap */ "./node_modules/rxjs/internal/operators/tap.js");
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3__);




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (localStorage.getItem('token') !== null) {
            var cloneReq = req.clone({
                headers: req.headers.set('Authorization', "Bearer " + localStorage.getItem('token'))
            });
            return next.handle(cloneReq).pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (succ) { }, function (err) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('user/login');
                }
            }));
        }
        else {
            return next.handle(req.clone());
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/contatos/contatos.component.css":
/*!*************************************************!*\
  !*** ./src/app/contatos/contatos.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhdG9zL2NvbnRhdG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contatos/contatos.component.html":
/*!**************************************************!*\
  !*** ./src/app/contatos/contatos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-titulo [titulo]=\"titulo\"></app-titulo>\n<p>\n  contatos works!\n</p>\n"

/***/ }),

/***/ "./src/app/contatos/contatos.component.ts":
/*!************************************************!*\
  !*** ./src/app/contatos/contatos.component.ts ***!
  \************************************************/
/*! exports provided: ContatosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatosComponent", function() { return ContatosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContatosComponent = /** @class */ (function () {
    function ContatosComponent() {
        this.titulo = 'Contatos';
    }
    ContatosComponent.prototype.ngOnInit = function () {
    };
    ContatosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contatos',
            template: __webpack_require__(/*! ./contatos.component.html */ "./src/app/contatos/contatos.component.html"),
            styles: [__webpack_require__(/*! ./contatos.component.css */ "./src/app/contatos/contatos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContatosComponent);
    return ContatosComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/eventos/eventoEdit/eventoEdit.component.css":
/*!*************************************************************!*\
  !*** ./src/app/eventos/eventoEdit/eventoEdit.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n    font-size: 25px;\n}\n\n.iconesSociais a {\n    color: rgb(94, 94, 94);\n}\n\n.capitalize {\n  text-transform: capitalize;\n  border-bottom: 1px solid silver;\n}\n\n.tab-pane {\n  padding: 20px 8px 8px;\n  border-top: 0px;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n  border-left: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRvcy9ldmVudG9FZGl0L2V2ZW50b0VkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2V2ZW50b3MvZXZlbnRvRWRpdC9ldmVudG9FZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5pY29uZXNTb2NpYWlzIGEge1xuICAgIGNvbG9yOiByZ2IoOTQsIDk0LCA5NCk7XG59XG5cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzaWx2ZXI7XG59XG5cbi50YWItcGFuZSB7XG4gIHBhZGRpbmc6IDIwcHggOHB4IDhweDtcbiAgYm9yZGVyLXRvcDogMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/eventos/eventoEdit/eventoEdit.component.html":
/*!**************************************************************!*\
  !*** ./src/app/eventos/eventoEdit/eventoEdit.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-titulo [titulo]=\"titulo\"></app-titulo>\n<form [formGroup]=\"registerForm\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <tabset>\n        <tab heading=\"Evento\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n              <label>Tema</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"evento.tema\"\n                [ngClass]=\"{'is-invalid': registerForm.get('tema').errors && registerForm.get('tema').touched}\"\n                formControlName=\"tema\" placeholder=\"Insira o Tema\">\n              <div *ngIf=\"registerForm.get('tema').hasError('required')\n              && registerForm.get('tema').touched\" class=\"invalid-feedback\">\n                Tema é obrigatório.\n              </div>\n              <div *ngIf=\"registerForm.get('tema').hasError('minlength')\n            && registerForm.get('tema').touched\" class=\"invalid-feedback\">\n                Tema deve ter no mínimo 4 Caracters.\n              </div>\n              <div *ngIf=\"registerForm.get('tema').hasError('maxlength')\n          && registerForm.get('tema').touched\" class=\"invalid-feedback\">\n                Tema deve ter no máximo 50 Caracters.\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-8\">\n              <label>Local</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"evento.local\" [ngClass]=\"{'is-invalid': registerForm.get('local').errors \n              && registerForm.get('local').touched}\" formControlName=\"local\" placeholder=\"\">\n              <div *ngIf=\"registerForm.get('local').hasError('required')\n              && registerForm.get('local').touched\" class=\"invalid-feedback\">\n                Local é obrigatório.\n              </div>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label>Data e Hora</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"evento.dataEvento\" bsDatepicker\n                value=\"{{evento.dataEvento | DateTimeFormatPipe}}\" [(ngModel)]=\"dataEvento\"\n                [bsConfig]=\"{ dateInputFormat : 'DD/MM/YYYY hh:mm' }\" [ngClass]=\"{'is-invalid': registerForm.get('dataEvento').errors \n            && registerForm.get('dataEvento').touched}\" formControlName=\"dataEvento\" placeholder=\"\">\n              <div *ngIf=\"registerForm.get('dataEvento').hasError('required')\n            && registerForm.get('dataEvento').touched\" class=\"invalid-feedback\">\n                Data e hora é obrigatório.\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2\">\n              <label>Qtd Pessoas</label>\n              <input type=\"text\" [(ngModel)]=\"evento.qtdPessoas\" [ngClass]=\"{'is-invalid': registerForm.get('qtdPessoas').errors \n              && registerForm.get('qtdPessoas').touched}\" class=\"form-control is-invalid\" formControlName=\"qtdPessoas\"\n                placeholder=\"\">\n              <div *ngIf=\"registerForm.get('qtdPessoas').hasError('required')\n              && registerForm.get('qtdPessoas').touched\" class=\"invalid-feedback\">\n                Qtd Pessoas é obrigatório.\n              </div>\n              <div *ngIf=\"registerForm.get('qtdPessoas').hasError('max')\n            && registerForm.get('qtdPessoas').touched\" class=\"invalid-feedback\">\n                Qtd Pessoas deve ser menor que 120000.\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-4\">\n              <label>Telefone</label>\n              <input type=\"text\" mask=\"(000) 0000-0000\" class=\"form-control\" [(ngModel)]=\"evento.telefone\" [ngClass]=\"{'is-invalid': registerForm.get('telefone').errors \n            && registerForm.get('telefone').touched}\" formControlName=\"telefone\" placeholder=\"(000) 90000-0000\">\n              <div *ngIf=\"registerForm.get('telefone').hasError('required')\n            && registerForm.get('telefone').touched\" class=\"invalid-feedback\">\n                Telefone é obrigatório.\n              </div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>Email</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"evento.email\" [ngClass]=\"{'is-invalid': registerForm.get('email').errors \n            && registerForm.get('email').touched}\" formControlName=\"email\" placeholder=\"e-mail\">\n              <div *ngIf=\"registerForm.get('email').hasError('required')\n            && registerForm.get('email').touched\" class=\"invalid-feedback\">\n                Email é obrigatório.\n              </div>\n              <div *ngIf=\"registerForm.get('email').hasError('email')\n          && registerForm.get('email').touched\" class=\"invalid-feedback\">\n                Deve ser um e-mail válido.\n              </div>\n            </div>\n          </div>\n        </tab>\n        <tab heading=\"Lotes\">\n          <div>\n            <div formArrayName=\"lotes\" *ngFor=\"let lote of lotes.controls; let i=index\">\n              <fieldset [formGroupName]=\"i\" class=\"form-group\">\n                <legend class=\"d-flex justify-content-between capitalize\">\n                  {{ lotes.get(i+'.nome').value === '' ?\n                    'Lotes' :\n                    lotes.get(i+'.nome').value\n                  }}\n                  <button class=\"btn btn-sm btn-warning mb-1\" (click)=\"removerLote(i)\">remove</button>\n                </legend>\n                <div class=\"row\">\n                  <div class=\"form-group col-md-4\">\n                    <label>Nome</label>\n                    <input type=\"text\" class=\"form-control\"\n                      [ngClass]=\"{'is-invalid': lotes.get(i+'.nome').errors && lotes.get(i+'.nome').touched}\"\n                      formControlName=\"nome\" placeholder=\"Lote\">\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <label>Quantidade</label>\n                    <input type=\"text\" class=\"form-control\"\n                      [ngClass]=\"{'is-invalid': lotes.get(i+'.quantidade').errors && lotes.get(i+'.quantidade').touched}\"\n                      formControlName=\"quantidade\" placeholder=\"000\">\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <label>Preço</label>\n                    <input type=\"text\" currencyMask\n                      [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }\"\n                      class=\"form-control\"\n                      [ngClass]=\"{'is-invalid': lotes.get(i+'.preco').errors && lotes.get(i+'.preco').touched}\"\n                      formControlName=\"preco\" placeholder=\"R$ 0,00\">\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <label>Data Início</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"dataInicio\" placeholder=\"01/01/2019\">\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <label>Data Fim</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"dataFim\" placeholder=\"01/01/2019\">\n                  </div>\n\n                </div>\n              </fieldset>\n            </div>\n            <button (click)=\"adicionarLote()\" class=\"btn btn-outline-primary\">\n              Adicionar Lote\n            </button>\n          </div>\n        </tab>\n        <tab heading=\"Redes Sociais\">\n          <div formArrayName=\"redesSociais\" *ngFor=\"let redeSocial of redesSociais.controls; let j=index\">\n            <fieldset [formGroupName]=\"j\" class=\"form-group\">\n              <legend class=\"d-flex justify-content-between capitalize\">\n                {{ redesSociais.get(j+'.nome').value == '' ?\n                    'Redes Sociais' :\n                    redesSociais.get(j+'.nome').value?.replace('fab fa-', '')\n                  }}\n                <button class=\"btn btn-sm btn-warning mb-1\" (click)=\"removerRedeSocial(j)\">remove</button>\n              </legend>\n              <div class=\"row\">\n                <div class=\"form-group col-md-4\">\n                  <label>Nome</label>\n                  <select class=\"form-control\"\n                    [ngClass]=\"{'is-invalid': redesSociais.get(j+'.nome').errors && redesSociais.get(j+'.nome').touched}\"\n                    formControlName=\"nome\">\n                    <option value=\"\">Selecione</option>\n                    <option value=\"fab fa-youtube\">Youtube</option>\n                    <option value=\"fab fa-instagram\">Instagram</option>\n                    <option value=\"fab fa-facebook\">Facebook</option>\n                    <option value=\"fab fa-twitter\">Twitter</option>\n                    <option value=\"fab fa-google\">Google</option>\n                    <option value=\"fab fa-linkedin\">Linkedin</option>\n                    <option value=\"fab fa-pinterest\">Pinterest</option>\n                    <option value=\"fab fa-whatsapp\">Whatsapp</option>\n                    <option value=\"fab fa-telegram\">Telegram</option>\n                    <option value=\"fab fa-skype\">Skype</option>\n                    <option value=\"fab fa-vimeo\">Vimeo</option>\n                  </select>\n                </div>\n                <div class=\"form-group col-md-8\">\n                  <label>Link</label>\n                  <input type=\"text\" prefix=\"http://\" mask=\"\"\n                    [ngClass]=\"{'is-invalid': redesSociais.get(j+'.url').errors && redesSociais.get(j+'.url').touched}\"\n                    formControlName=\"url\" class=\"form-control\" placeholder=\"URL\">\n                </div>\n              </div>\n            </fieldset>\n          </div>\n          <button (click)=\"adicionarRedeSocial()\" class=\"btn btn-outline-primary\">\n            Adicionar Rede Social\n          </button>\n        </tab>\n      </tabset>\n      <div class=\"row\">\n        <div class=\"col-md-12 d-flex justify-content-end\">\n          <!-- {{registerForm.value | json}} -->\n          <button [disabled]=\"!registerForm.valid\" class=\"btn btn-success my-2\" (click)=\"salvarEvento()\">Salvar\n            Alterações</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-9\">\n          <input type=\"file\" #file (change)=\"onFileChange($event, $event.target.files)\" class=\"form-control is-invalid\"\n            formControlName=\"imagemURL\" placeholder=\"\" style=\"display: none\">\n        </div>\n      </div>\n      <div class=\"card profile-card-2\">\n        <div class=\"card-img-block\">\n          <img [src]=\"imagemURL\" class=\"img-fluid\" (click)=\"file.click()\" style=\"cursor: pointer; width: 350px;\"\n            alt=\"Card image cap\" />\n        </div>\n        <div class=\"card-body pt-3\">\n          <h4>{{evento.tema}}</h4>\n          <p class=\"card-text\">\n            <b>Local:</b> {{evento.local}}\n            <br>\n            <b>Data:</b> {{evento.dataEvento | DateTimeFormatPipe}}\n          </p>\n          <hr>\n          <p class=\"card-text\">\n            <b>Contatos</b><br>\n            <small class=\"text-muted\">Telefone: {{evento.telefone | mask: '(000) 00000-0000'}}</small>\n            <br>\n            <small class=\"text-muted\">e-mail: {{evento.email}}</small>\n          </p>\n          <p class=\"card-text\">\n            Capacidade:\n            <small class=\"text-muted\">{{evento.qtdPessoas}}</small>\n          </p>\n          <div class=\"row\">\n            <div class=\"icon-block col-md-8 iconesSociais\">\n              <a href=\"{{redesSociais.get(l+'.url').value}}\"\n                *ngFor=\"let redeSocial of redesSociais.controls; let l=index;\" class=\"mr-3\" target=\"_blank\">\n                <i class=\"{{redesSociais.get(l+'.nome').value}}\"></i>\n              </a>\n            </div>\n            <!--div class=\"col-md-4 d-flex justify-content-center\">  \n              <a href=\"#\" class=\"btn btn-outline-primary\">Participar</a>\n            </div-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/eventos/eventoEdit/eventoEdit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/eventos/eventoEdit/eventoEdit.component.ts ***!
  \************************************************************/
/*! exports provided: EventoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoEditComponent", function() { return EventoEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_evento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/evento.service */ "./src/app/_services/evento.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_models_Evento__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_models/Evento */ "./src/app/_models/Evento.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var EventoEditComponent = /** @class */ (function () {
    function EventoEditComponent(eventoService, fb, localeService, toastr, router) {
        this.eventoService = eventoService;
        this.fb = fb;
        this.localeService = localeService;
        this.toastr = toastr;
        this.router = router;
        this.titulo = 'Editar Evento';
        this.evento = new src_app_models_Evento__WEBPACK_IMPORTED_MODULE_6__["Evento"]();
        this.imagemURL = 'assets/img/upload.png';
        this.dataAtual = '';
        this.localeService.use('pt-br');
    }
    Object.defineProperty(EventoEditComponent.prototype, "lotes", {
        get: function () {
            return this.registerForm.get('lotes');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventoEditComponent.prototype, "redesSociais", {
        get: function () {
            return this.registerForm.get('redesSociais');
        },
        enumerable: true,
        configurable: true
    });
    EventoEditComponent.prototype.ngOnInit = function () {
        this.validation();
        this.carregarEvento();
    };
    EventoEditComponent.prototype.carregarEvento = function () {
        var _this = this;
        var idEvento = +this.router.snapshot.paramMap.get('id');
        this.eventoService.getEventoById(idEvento)
            .subscribe(function (evento) {
            _this.evento = Object.assign({}, evento);
            _this.fileNameToUpdate = evento.imagemURL.toString();
            _this.imagemURL = "http://localhost:5000/resources/images/" + _this.evento.imagemURL + "?_ts=" + _this.dataAtual;
            _this.evento.imagemURL = '';
            _this.registerForm.patchValue(_this.evento);
            _this.evento.lotes.forEach(function (lote) {
                _this.lotes.push(_this.criaLote(lote));
            });
            _this.evento.redesSociais.forEach(function (redeSocial) {
                _this.redesSociais.push(_this.criaRedeSocial(redeSocial));
            });
        });
    };
    EventoEditComponent.prototype.validation = function () {
        this.registerForm = this.fb.group({
            id: [],
            tema: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            local: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataEvento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            imagemURL: [''],
            qtdPessoas: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(120000)]],
            telefone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            lotes: this.fb.array([]),
            redesSociais: this.fb.array([])
        });
    };
    EventoEditComponent.prototype.criaLote = function (lote) {
        return this.fb.group({
            id: [lote.id],
            nome: [lote.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            quantidade: [lote.quantidade, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            preco: [lote.preco, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataInicio: [lote.dataInicio],
            dataFim: [lote.dataFim]
        });
    };
    EventoEditComponent.prototype.criaRedeSocial = function (redeSocial) {
        return this.fb.group({
            id: [redeSocial.id],
            nome: [redeSocial.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            url: [redeSocial.url, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    EventoEditComponent.prototype.adicionarLote = function () {
        this.lotes.push(this.criaLote({ id: 0 }));
    };
    EventoEditComponent.prototype.adicionarRedeSocial = function () {
        this.redesSociais.push(this.criaRedeSocial({ id: 0 }));
    };
    EventoEditComponent.prototype.removerLote = function (id) {
        this.lotes.removeAt(id);
    };
    EventoEditComponent.prototype.removerRedeSocial = function (id) {
        this.redesSociais.removeAt(id);
    };
    EventoEditComponent.prototype.onFileChange = function (evento, file) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (event) { return _this.imagemURL = event.target.result; };
        this.file = evento.target.files;
        reader.readAsDataURL(file[0]);
    };
    EventoEditComponent.prototype.salvarEvento = function () {
        var _this = this;
        this.evento = Object.assign({ id: this.evento.id }, this.registerForm.value);
        this.evento.imagemURL = this.fileNameToUpdate;
        this.uploadImagem();
        this.eventoService.putEvento(this.evento).subscribe(function () {
            _this.toastr.success('Editado com Sucesso!');
        }, function (error) {
            _this.toastr.error("Erro ao Editar: " + error);
        });
    };
    EventoEditComponent.prototype.uploadImagem = function () {
        var _this = this;
        if (this.registerForm.get('imagemURL').value !== '') {
            this.eventoService.postUpload(this.file, this.fileNameToUpdate)
                .subscribe(function () {
                _this.dataAtual = new Date().getMilliseconds().toString();
                _this.imagemURL = "http://localhost:5000/resources/images/" + _this.evento.imagemURL + "?_ts=" + _this.dataAtual;
            });
        }
    };
    EventoEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-evento-edit',
            template: __webpack_require__(/*! ./eventoEdit.component.html */ "./src/app/eventos/eventoEdit/eventoEdit.component.html"),
            styles: [__webpack_require__(/*! ./eventoEdit.component.css */ "./src/app/eventos/eventoEdit/eventoEdit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_evento_service__WEBPACK_IMPORTED_MODULE_2__["EventoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsLocaleService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], EventoEditComponent);
    return EventoEditComponent;
}());



/***/ }),

/***/ "./src/app/eventos/eventos.component.css":
/*!***********************************************!*\
  !*** ./src/app/eventos/eventos.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50b3MvZXZlbnRvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/eventos/eventos.component.html":
/*!************************************************!*\
  !*** ./src/app/eventos/eventos.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-titulo [titulo]=\"titulo\"></app-titulo>\n<div class=\"d-flex\">\n  <div class=\"form-inline mr-auto\">\n    <div class=\"form-group mb-2\">\n      <label class=\"mr-2\">Filtro:</label> <input type=\"text\" class=\"form-control mr-2\" placeholder=\"buscar\"\n        [(ngModel)]=\"filtroLista\">\n    </div>\n  </div>\n  <div>\n    <button class=\"btn btn-outline-primary\" (click)=\"novoEvento(template)\">\n      <i class=\"fa fa-plus-circle\"></i>&nbsp;\n      Novo Evento\n    </button>\n  </div>\n</div>\n<h3>Filtro: {{filtroLista}}</h3>\n<table class=\"table table-striped\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th>\n        <button class=\"btn btn-outline-primary\" (click)=\"alternarImagem()\">\n          <i class=\"{{mostrarImagem ? 'fa fa-eye-slash' : 'fa fa-eye'}}\"></i>\n        </button>\n      </th>\n      <th>#</th>\n      <th>Tema</th>\n      <th>Local</th>\n      <th>Data</th>\n      <th>Qtd Pessoas</th>\n      <th>Lote</th>\n      <th colspan=\"2\">Opções</th>\n    </tr>\n  </thead>\n  <tbody *ngIf=\"eventos && eventos.length\">\n    <tr *ngFor=\"let evento of eventosFiltrados\">\n      <td>\n        <img *ngIf=\"mostrarImagem\" src=\"http://localhost:5000/resources/images/{{evento.imagemURL}}?_ts={{dataAtual}}\"\n          [style.width.px]=\"imagemLargura\" [style.margin.px]=\"imagemMargem\">\n      </td>\n      <td>{{evento.id}}</td>\n      <td>{{evento.tema}}</td>\n      <td>{{evento.local}}</td>\n      <td>{{evento.dataEvento | DateTimeFormatPipe}}</td>\n      <td>{{evento.qtdPessoas}}</td>\n      <td>\n        <div *ngIf=\"!evento.lotes.length\">\n          Não Informado\n        </div>\n        <div *ngIf=\"evento.lotes.length\">\n          {{evento.lotes[0].nome | uppercase}}\n        </div>\n      </td>\n      <td>\n        <div class=\"btn-group\">\n          <button class=\"btn btn-sm btn-success\" tooltip=\"Editar\" (click)=\"editarEvento(evento, template)\">\n            <i class=\"fa fa-edit\"></i>\n          </button>\n          <button class=\"btn btn-sm btn-danger\" tooltip=\"Excluir\" (click)=\"excluirEvento(evento, confirm)\">\n            <i class=\"fa fa-eraser\"></i>\n          </button>\n        </div>\n      </td>\n      <td>\n        <a [routerLink]=\"['/evento', evento.id, 'edit']\" tooltip=\"Edição Detalhada\" class=\"btn btn-sm btn-warning\">\n          <i class=\"fa fa-edit\"></i>\n        </a>\n      </td>\n    </tr>\n  </tbody>\n  <tfoot *ngIf=\"!eventos\">\n    <tr>\n      <td colspan=\"7\" class=\"text-center\">\n        <h4>\n          Nenhum evento encontrado!\n        </h4>\n      </td>\n    </tr>\n  </tfoot>\n</table>\n\n<div bsModal #template=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Large modal</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"template.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"registerForm\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n              <label>Tema</label>\n              <input type=\"text\" class=\"form-control\"\n                [ngClass]=\"{'is-invalid': registerForm.get('tema').errors && registerForm.get('tema').touched}\"\n                formControlName=\"tema\" placeholder=\"Insira o Tema\">\n              <div *ngIf=\"registerForm.get('tema').hasError('required')\n            && registerForm.get('tema').touched\" class=\"invalid-feedback\">\n                Tema é obrigatório.\n              </div>\n              <div *ngIf=\"registerForm.get('tema').hasError('minlength')\n          && registerForm.get('tema').touched\" class=\"invalid-feedback\">\n                Tema deve ter no mínimo 4 Caracters.\n              </div>\n              <div *ngIf=\"registerForm.get('tema').hasError('maxlength')\n        && registerForm.get('tema').touched\" class=\"invalid-feedback\">\n                Tema deve ter no máximo 50 Caracters.\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-8\">\n              <label>Local</label>\n              <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': registerForm.get('local').errors \n      && registerForm.get('local').touched}\" formControlName=\"local\" placeholder=\"\">\n              <div *ngIf=\"registerForm.get('local').hasError('required')\n      && registerForm.get('local').touched\" class=\"invalid-feedback\">\n                Local é obrigatório.\n              </div>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label>Data e Hora</label>\n              <input type=\"text\" class=\"form-control\" bsDatepicker value=\"{{dataEvento | DateTimeFormatPipe}}\"\n                [(ngModel)]=\"dataEvento\" [bsConfig]=\"{ dateInputFormat : 'DD/MM/YYYY hh:mm' }\" [ngClass]=\"{'is-invalid': registerForm.get('dataEvento').errors \n    && registerForm.get('dataEvento').touched}\" formControlName=\"dataEvento\" placeholder=\"\">\n              <div *ngIf=\"registerForm.get('dataEvento').hasError('required')\n    && registerForm.get('dataEvento').touched\" class=\"invalid-feedback\">\n                Data e hora é obrigatório.\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-3\">\n              <label>Qtd Pessoas</label>\n              <input type=\"text\" [ngClass]=\"{'is-invalid': registerForm.get('qtdPessoas').errors \n    && registerForm.get('qtdPessoas').touched}\" class=\"form-control is-invalid\" formControlName=\"qtdPessoas\"\n                placeholder=\"\">\n              <div *ngIf=\"registerForm.get('qtdPessoas').hasError('required')\n    && registerForm.get('qtdPessoas').touched\" class=\"invalid-feedback\">\n                Qtd Pessoas é obrigatório.\n              </div>\n              <div *ngIf=\"registerForm.get('qtdPessoas').hasError('max')\n  && registerForm.get('qtdPessoas').touched\" class=\"invalid-feedback\">\n                Qtd Pessoas deve ser menor que 120000.\n              </div>\n            </div>\n            <div class=\"form-group col-md-9\">\n              <label>Imagem</label>\n              <table>\n                <tr>\n                  <td>\n                    <button class=\"btn btn-success\" (click)=\"file.click()\">\n                      Enviar Imagem\n                    </button>\n                    <input type=\"file\" #file [ngClass]=\"{'is-invalid': registerForm.get('imagemURL').errors \n        && registerForm.get('imagemURL').touched}\" (change)=\"onFileChange($event)\" class=\"form-control is-invalid\"\n                      formControlName=\"imagemURL\" placeholder=\"\" style=\"display: none\">\n                  </td>\n                </tr>\n              </table>\n              <div *ngIf=\"registerForm.get('imagemURL').hasError('required')\n  && registerForm.get('imagemURL').touched\" class=\"invalid-feedback\">\n                Imagem é obrigatório.\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-4\">\n              <label>Telefone</label>\n              <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': registerForm.get('telefone').errors \n    && registerForm.get('telefone').touched}\" formControlName=\"telefone\" placeholder=\"\">\n              <div *ngIf=\"registerForm.get('telefone').hasError('required')\n    && registerForm.get('telefone').touched\" class=\"invalid-feedback\">\n                Telefone é obrigatório.\n              </div>\n            </div>\n            <div class=\"form-group col-md-8\">\n              <label>Email</label>\n              <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': registerForm.get('email').errors \n  && registerForm.get('email').touched}\" formControlName=\"email\" placeholder=\"\">\n              <div *ngIf=\"registerForm.get('email').hasError('required')\n  && registerForm.get('email').touched\" class=\"invalid-feedback\">\n                Email é obrigatório.\n              </div>\n              <div *ngIf=\"registerForm.get('email').hasError('email')\n&& registerForm.get('email').touched\" class=\"invalid-feedback\">\n                Deve ser um e-mail válido.\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer d-flex\">\n        <button class=\"btn btn-secondary\" (click)=\"template.hide()\">\n          Fechar\n        </button>\n        <button class=\"btn btn-primary ml-auto\" [disabled]=\"!registerForm.valid\" (click)=\"salvarAlteracao(template)\">\n          Salvar Alterações\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div bsModal #confirm=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">\n          Deletando Evento\n        </h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"confirm.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{bodyDeletarEvento}}</p>\n      </div>\n      <div class=\"modal-footer btn-group d-flex\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"confirm.hide()\">\n          CENCELAR\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"confirmeDelete(confirm)\">\n          DELETAR\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/eventos/eventos.component.ts":
/*!**********************************************!*\
  !*** ./src/app/eventos/eventos.component.ts ***!
  \**********************************************/
/*! exports provided: EventosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosComponent", function() { return EventosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_evento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/evento.service */ "./src/app/_services/evento.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ptBrLocale"]);
var EventosComponent = /** @class */ (function () {
    function EventosComponent(eventoService, modalService, fb, localeService, toastr) {
        this.eventoService = eventoService;
        this.modalService = modalService;
        this.fb = fb;
        this.localeService = localeService;
        this.toastr = toastr;
        this.titulo = 'Eventos';
        this.modoSalvar = 'post';
        this.imagemLargura = 50;
        this.imagemMargem = 2;
        this.mostrarImagem = false;
        this.bodyDeletarEvento = '';
        this._filtroLista = '';
        this.localeService.use('pt-br');
    }
    Object.defineProperty(EventosComponent.prototype, "filtroLista", {
        get: function () {
            return this._filtroLista;
        },
        set: function (value) {
            this._filtroLista = value;
            this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
        },
        enumerable: true,
        configurable: true
    });
    EventosComponent.prototype.editarEvento = function (evento, template) {
        this.modoSalvar = 'put';
        this.openModal(template);
        this.evento = Object.assign({}, evento);
        this.fileNameToUpdate = evento.imagemURL.toString();
        this.evento.imagemURL = '';
        this.registerForm.patchValue(this.evento);
    };
    EventosComponent.prototype.novoEvento = function (template) {
        this.modoSalvar = 'post';
        this.openModal(template);
    };
    EventosComponent.prototype.excluirEvento = function (evento, template) {
        this.openModal(template);
        this.evento = evento;
        this.bodyDeletarEvento = "Tem certeza que deseja excluir o Evento: " + evento.tema + ", C\u00F3digo: " + evento.id;
    };
    EventosComponent.prototype.confirmeDelete = function (template) {
        var _this = this;
        this.eventoService.deleteEvento(this.evento.id).subscribe(function () {
            template.hide();
            _this.getEventos();
            _this.toastr.success('Deletado com Sucesso');
        }, function (error) {
            _this.toastr.error('Erro ao tentar Deletar');
            console.log(error);
        });
    };
    EventosComponent.prototype.openModal = function (template) {
        this.registerForm.reset();
        template.show();
    };
    EventosComponent.prototype.ngOnInit = function () {
        this.validation();
        this.getEventos();
    };
    EventosComponent.prototype.filtrarEventos = function (filtrarPor) {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        return this.eventos.filter(function (evento) { return evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1; });
    };
    EventosComponent.prototype.alternarImagem = function () {
        this.mostrarImagem = !this.mostrarImagem;
    };
    EventosComponent.prototype.validation = function () {
        this.registerForm = this.fb.group({
            tema: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            local: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataEvento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            imagemURL: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qtdPessoas: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(120000)]],
            telefone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
        });
    };
    EventosComponent.prototype.onFileChange = function (event) {
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            this.file = event.target.files;
            console.log(this.file);
        }
    };
    EventosComponent.prototype.uploadImagem = function () {
        var _this = this;
        if (this.modoSalvar === 'post') {
            var nomeArquivo = this.evento.imagemURL.split('\\', 3);
            this.evento.imagemURL = nomeArquivo[2];
            this.eventoService.postUpload(this.file, nomeArquivo[2])
                .subscribe(function () {
                _this.dataAtual = new Date().getMilliseconds().toString();
                _this.getEventos();
            });
        }
        else {
            this.evento.imagemURL = this.fileNameToUpdate;
            this.eventoService.postUpload(this.file, this.fileNameToUpdate)
                .subscribe(function () {
                _this.dataAtual = new Date().getMilliseconds().toString();
                _this.getEventos();
            });
        }
    };
    EventosComponent.prototype.salvarAlteracao = function (template) {
        var _this = this;
        if (this.registerForm.valid) {
            if (this.modoSalvar === 'post') {
                this.evento = Object.assign({}, this.registerForm.value);
                this.uploadImagem();
                this.eventoService.postEvento(this.evento).subscribe(function (novoEvento) {
                    template.hide();
                    _this.getEventos();
                    _this.toastr.success('Inserido com Sucesso!');
                }, function (error) {
                    _this.toastr.error("Erro ao Inserir: " + error);
                });
            }
            else {
                this.evento = Object.assign({ id: this.evento.id }, this.registerForm.value);
                this.uploadImagem();
                this.eventoService.putEvento(this.evento).subscribe(function () {
                    template.hide();
                    _this.getEventos();
                    _this.toastr.success('Editado com Sucesso!');
                }, function (error) {
                    _this.toastr.error("Erro ao Editar: " + error);
                });
            }
        }
    };
    EventosComponent.prototype.getEventos = function () {
        var _this = this;
        this.dataAtual = new Date().getMilliseconds().toString();
        this.eventoService.getAllEvento().subscribe(function (_eventos) {
            _this.eventos = _eventos;
            _this.eventosFiltrados = _this.eventos;
            console.log(_this.eventos);
        }, function (error) {
            _this.toastr.error("Erro ao tentar Carregar eventos: " + error);
        });
    };
    EventosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventos',
            template: __webpack_require__(/*! ./eventos.component.html */ "./src/app/eventos/eventos.component.html"),
            styles: [__webpack_require__(/*! ./eventos.component.css */ "./src/app/eventos/eventos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_evento_service__WEBPACK_IMPORTED_MODULE_2__["EventoService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsLocaleService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], EventosComponent);
    return EventosComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"dashboard\">ProAgil</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n      aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div *ngIf=\"loggedIn()\" class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"eventos\">Eventos</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"palestrantes\">Palestrantes</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"contatos\">Contatos</a>\n        </li>\n      </ul>\n    </div>\n\n    <ul *ngIf=\"loggedIn()\" class=\"navbar-nav\">\n      <li class=\"nav-item dropdown\" dropdown>\n        <a dropdownToggle class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\" style=\"cursor: pointer; text-transform: capitalize;\">\n          {{userName()}}\n        </a>\n        <div *dropdownMenu class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\">\n            Perfil\n          </a>\n          <div role=\"separator\" class=\"divider\"></div>\n          <a class=\"dropdown-item\" (click)=\"logout()\" style=\"cursor: pointer\">\n            Sair\n          </a>\n        </div>\n      </li>\n    </ul>\n\n    <button *ngIf=\"!loggedIn()\" class=\"btn btn-success\" (click)=\"entrar()\">Entrar</button>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var NavComponent = /** @class */ (function () {
    function NavComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.entrar = function () {
        this.router.navigate(['/user/login']);
    };
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.toastr.show('Log Out');
        this.router.navigate(['/user/login']);
    };
    NavComponent.prototype.userName = function () {
        return sessionStorage.getItem('username');
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/palestrantes/palestrantes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/palestrantes/palestrantes.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbGVzdHJhbnRlcy9wYWxlc3RyYW50ZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/palestrantes/palestrantes.component.html":
/*!**********************************************************!*\
  !*** ./src/app/palestrantes/palestrantes.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-titulo [titulo]=\"titulo\"></app-titulo>\n<p>\n  palestrantes works!\n</p>\n"

/***/ }),

/***/ "./src/app/palestrantes/palestrantes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/palestrantes/palestrantes.component.ts ***!
  \********************************************************/
/*! exports provided: PalestrantesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalestrantesComponent", function() { return PalestrantesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PalestrantesComponent = /** @class */ (function () {
    function PalestrantesComponent() {
        this.titulo = 'Palestrantes';
    }
    PalestrantesComponent.prototype.ngOnInit = function () {
    };
    PalestrantesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-palestrantes',
            template: __webpack_require__(/*! ./palestrantes.component.html */ "./src/app/palestrantes/palestrantes.component.html"),
            styles: [__webpack_require__(/*! ./palestrantes.component.css */ "./src/app/palestrantes/palestrantes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PalestrantesComponent);
    return PalestrantesComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .checkbox {\n  font-weight: 400;\n}\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn1cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-titulo [titulo]=\"titulo\"></app-titulo>\n\n<body class=\"text-center\" data-gr-c-s-loaded=\"true\">\n  <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n    <img class=\"mb-4\" src=\"\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Por favor</h1>\n    <label for=\"username\" class=\"sr-only\">Usuário</label>\n    <input type=\"email\" id=\"username\" class=\"form-control\" placeholder=\"Usuário\" name=\"username\" required\n      [(ngModel)]=\"model.username\">\n    <label for=\"password\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Senha\" name=\"password\" required\n      [(ngModel)]=\"model.password\">\n    <!--div class=\"checkbox mb-3\">\n      <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n    </div-->\n    <button [disabled]=\"!loginForm.valid\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Entrar</button>\n    <p class=\"mt-5 mb-3 text-muted\">Não tem login? Cadastre-se abaixo</p>\n    <button class=\"btn btn-lg btn-link btn-block\" (click)=\"router.navigate(['/user/registration'])\">Quero me\n      cadastrar</button>\n  </form>\n\n</body>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.titulo = 'Login';
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model)
            .subscribe(function () {
            _this.router.navigate(['/dashboard']);
            _this.toastr.success('Logado com Sucesso');
        }, function (error) {
            _this.toastr.error('Falha ao tentar Logar');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/registration/registration.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/registration/registration.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/registration/registration.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/registration/registration.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4\">\n  <div class=\"col-md-6\" style=\"height: 450px;\">\n    <div class=\"row col-md-12 my-auto side-heder\">\n      <h1>Cadastro de Usuário</h1>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <form [formGroup]=\"registerForm\">\n      <div class=\"form-group required\">\n        <label for=\"\">Nome Completo:</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"fullName\" [ngClass]=\"{'is-invalid': registerForm.get('fullName').errors &&\n                                  registerForm.get('fullName').touched }\" placeholder=\"Insira o Nome Completo\" />\n        <div *ngIf=\"registerForm.get('fullName').hasError('required') &&\n                    registerForm.get('fullName').touched\" class=\"invalid-feedback\">\n          Nome Completo é obrigatório.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Email:</label>\n        <input class=\"form-control\" type=\"text\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': registerForm.get('email').errors && \n                                     registerForm.get('email').touched}\" placeholder=\"Insira o Nome Completo\" />\n        <div *ngIf=\"registerForm.get('email').hasError('required') &&\n                    registerForm.get('email').touched\" class=\"invalid-feedback\">\n          email é obrigatório.\n        </div>\n        <div *ngIf=\"registerForm.get('email').hasError('email')\n        && registerForm.get('email').touched\" class=\"invalid-feedback\">\n          Deve ser um e-mail válido.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Usuario:</label>\n        <input class=\"form-control\" type=\"text\" formControlName=\"userName\" [ngClass]=\"{'is-invalid': registerForm.get('userName').errors &&\n                                    registerForm.get('userName').touched}\" placeholder=\"Insira o nome de Usuário\" />\n        <div *ngIf=\"registerForm.get('userName').hasError('required') &&\n                    registerForm.get('userName').touched\" class=\"invalid-feedback\">\n          Usuário é obrigatório.\n        </div>\n      </div>\n      <div formGroupName=\"passwords\">\n        <div class=\"form-group\">\n          <label for=\"\">Senha:</label>\n          <input class=\"form-control\" type=\"password\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': registerForm.get('passwords.password').errors &&\n                                       registerForm.get('passwords.password').touched}\"\n            placeholder=\"Digite uma Senha\" />\n          <div *ngIf=\"registerForm.get('passwords.password').hasError('minlength') &&\n            registerForm.get('passwords.password').touched\" class=\"invalid-feedback\">\n            Deve conter no mínimo 4 caracters\n          </div>\n          <div *ngIf=\"registerForm.get('passwords.password').hasError('required') &&\n                      registerForm.get('passwords.password').touched\" class=\"invalid-feedback\">\n            Senha é obrigatório.\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Confirmar Senha:</label>\n          <input class=\"form-control\" type=\"password\" formControlName=\"confirmPassword\" [ngClass]=\"{ 'is-invalid': registerForm.get('passwords.confirmPassword').errors \n                         && registerForm.get('passwords.confirmPassword').touched \n                         ||registerForm.get('passwords.confirmPassword').hasError('mismatch') \n                         && registerForm.get('passwords.confirmPassword').touched }\" placeholder=\"Confirme a Senha\" />\n          <div *ngIf=\"registerForm.get('passwords.confirmPassword').hasError('required') &&\n                      registerForm.get('passwords.confirmPassword').touched\" class=\"invalid-feedback\">\n            Confirme a Senha\n          </div>\n          <div *ngIf=\"registerForm.get('passwords.confirmPassword').hasError('mismatch') \n                      && registerForm.get('passwords.confirmPassword').touched\" class=\"invalid-feedback\">\n            Confirmação não confere\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-8 offset-md-2\">\n          <button class=\"btn btn-lg btn-success btn-block\" [disabled]=\"!registerForm.valid\"\n            (click)=\"cadastrarUsuario()\">Registar</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(authService, router, fb, toastr) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.validation();
    };
    RegistrationComponent.prototype.validation = function () {
        this.registerForm = this.fb.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passwords: this.fb.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }, { validator: this.compararSenhas })
        });
    };
    RegistrationComponent.prototype.compararSenhas = function (fb) {
        var confirmSenhaCtrl = fb.get('confirmPassword');
        if (confirmSenhaCtrl.errors == null || 'mismatch' in confirmSenhaCtrl.errors) {
            if (fb.get('password').value !== confirmSenhaCtrl.value) {
                confirmSenhaCtrl.setErrors({ mismatch: true });
            }
            else {
                confirmSenhaCtrl.setErrors(null);
            }
        }
    };
    RegistrationComponent.prototype.cadastrarUsuario = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({ password: this.registerForm.get('passwords.password').value }, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.router.navigate(['/user/login']);
                _this.toastr.success('Cadastro Realizado');
            }, function (error) {
                var erro = error.error;
                erro.forEach(function (element) {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            _this.toastr.error('Cadastro Duplicado!');
                            break;
                        default:
                            _this.toastr.error("Erro no Cadatro! CODE: " + element.code);
                            break;
                    }
                });
            });
        }
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/user/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/user/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-8 offset-md-2\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/util/Constants.ts":
/*!***********************************!*\
  !*** ./src/app/util/Constants.ts ***!
  \***********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.DATE_FMT = 'dd/MM/yyyy';
    Constants.DATE_TIME_FMT = Constants.DATE_FMT + " hh:mm";
    return Constants;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\leona\Downloads\ProAgil\ProAgil-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map