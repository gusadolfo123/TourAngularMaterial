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
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");






var routes = [
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: '', loadChildren: function () { return _main_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"]; } },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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

module.exports = "<router-outlet></router-outlet>\r\n"

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
        this.title = 'NewTourPage';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");



// rutas

// componentes

// angular material

// modulos personalizados


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  register works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/main/about/about.component.css":
/*!************************************************!*\
  !*** ./src/app/main/about/about.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.bg-image {\r\n  background: rgb(34, 34, 34);\r\n  background-image: url('https://s3.ap-south-1.amazonaws.com/dlab-html/triper/xhtml/images/background/bg1.jpg');\r\n  background-blend-mode: soft-light;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  color: white;\r\n}\r\n\r\n.btn-search {\r\n  background-color: #21ab64 !important;\r\n  font: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2R0FBNkc7RUFDN0csaUNBQWlDO0VBQ2pDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMzQsIDM0LCAzNCk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9kbGFiLWh0bWwvdHJpcGVyL3hodG1sL2ltYWdlcy9iYWNrZ3JvdW5kL2JnMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1zZWFyY2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWFiNjQgIWltcG9ydGFudDtcclxuICBmb250OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row mb-5 text-center bg-image py-5\">\r\n    <div class=\"col-md-12\">\r\n      <h1>Acerca de Nosotros</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container pb-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <h3>Titulo</h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores! Veritatis quas aliquam molestias quasi\r\n        maiores aspernatur dolores odio vero nam numquam? Tenetur, exercitationem nam? Eum obcaecati ex possimus\r\n        accusantium!\r\n      </p>\r\n      <p>\r\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores! Veritatis quas aliquam molestias\r\n        quasi\r\n        maiores aspernatur dolores odio vero nam numquam? Tenetur, exercitationem nam? Eum obcaecati ex possimus\r\n        accusantium!\r\n      </p>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <h3>Titulo</h3>\r\n      <div *ngFor=\"let image of album; let i=index\">\r\n        <img class=\"img-thumbnail\" [src]=\"image.thumb\" (click)=\"open(i)\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__);



var AboutComponent = /** @class */ (function () {
    function AboutComponent(lightbox) {
        this.lightbox = lightbox;
        this.album = [];
        var src = 'https://s3.ap-south-1.amazonaws.com/dlab-html/triper/xhtml/images/background/bg1.jpg';
        var caption = 'Image caption here';
        var thumb = 'https://s3.ap-south-1.amazonaws.com/dlab-html/triper/xhtml/images/background/bg1.jpg';
        var album = { src: src, caption: caption, thumb: thumb };
        this.album.push(album);
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent.prototype.open = function (index) {
        // open lightbox
        this.lightbox.open(this.album, index);
    };
    AboutComponent.prototype.close = function () {
        // close lightbox programmatically
        this.lightbox.close();
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/main/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/main/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["Lightbox"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/main/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/contact/contact.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form {\r\n  background: #fff;\r\n  width: 70%;\r\n}\r\n\r\n.contact-form .form-control {\r\n  border-radius: 1rem;\r\n}\r\n\r\n.contact-image {\r\n  text-align: center;\r\n}\r\n\r\n.contact-form h3 {\r\n  margin-bottom: 5%;\r\n  margin-top: 5%;\r\n  text-align: center;\r\n  color: #21ab64;\r\n}\r\n\r\n.contact-form .btnContact {\r\n  width: 50%;\r\n  border: none;\r\n  border-radius: 1rem;\r\n  padding: 1.5%;\r\n  background: #21ab64;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.btnContactSubmit {\r\n  width: 50%;\r\n  border-radius: 1rem;\r\n  padding: 1.5%;\r\n  color: #fff;\r\n  background-color: #21ab64;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  margin-top: 5px;\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWZvcm0ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4uY29udGFjdC1pbWFnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGgzIHtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyMWFiNjQ7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gLmJ0bkNvbnRhY3Qge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMS41JTtcclxuICBiYWNrZ3JvdW5kOiAjMjFhYjY0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuQ29udGFjdFN1Ym1pdCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDEuNSU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYWI2NDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contact-form my-5 pb-4\">\r\n  <div class=\"row my-5\">\r\n    <div class=\"col-md-12 col-sm-12 col-lg-6\">\r\n      <h3>Envia tu mensaje</h3>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" name=\"txtName\" class=\"form-control\" placeholder=\"Tu Nombre *\" value=\"\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" name=\"txtEmail\" class=\"form-control\" placeholder=\"Tu Email *\" value=\"\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" name=\"txtPhone\" class=\"form-control\" placeholder=\"Tu Numero Telefonico *\" value=\"\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button class=\"btnContact btn p-0\" mat-raised-button color=\"primary\">Enviar</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <textarea name=\"txtMsg\" class=\"form-control\" placeholder=\"Mensaje...\" style=\"width: 100%; height: 150px;\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-lg-6\">\r\n      <h3>Contactanos</h3>\r\n      <div class=\"row\">\r\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9458.792285301299!2d-74.13788800733958!3d4.60614985260966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1551656913662\"\r\n          width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n      </div>\r\n      <div class=\"row mt-2\">\r\n        <ul class=\"info-contact p-0 col-md-6\">\r\n          <li>\r\n            <span> <i class=\"fa fa-map-marker\t\"></i> Brodway Road 234, New York </span>\r\n          </li>\r\n          <li>\r\n            <span> <i class=\"fa fa-phone\"></i> Mobile: +00 1234 456789 <br />+10 1234 456789 </span>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"info-contact p-0 col-md-6\">\r\n          <li>\r\n            <span> <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> Mail: info@travel.com </span>\r\n          </li>\r\n          <li>\r\n            <span> <i class=\"fa fa-fax\"></i> Fax: 000 123 2294 089 </span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/main/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/main/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/main/index/card-package/card-package.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main/index/card-package/card-package.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: #21ab64 !important;\r\n}\r\n.price {\r\n  color: #21ab64 !important;\r\n  font: bold;\r\n  padding: 16px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbmRleC9jYXJkLXBhY2thZ2UvY2FyZC1wYWNrYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9pbmRleC9jYXJkLXBhY2thZ2UvY2FyZC1wYWNrYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWFiNjQgIWltcG9ydGFudDtcclxufVxyXG4ucHJpY2Uge1xyXG4gIGNvbG9yOiAjMjFhYjY0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udDogYm9sZDtcclxuICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/index/card-package/card-package.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/index/card-package/card-package.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <img mat-card-image src=\"https://mdbootstrap.com/img/Photos/Others/food.jpg\" alt=\"Photo of a Shiba Inu\" />\r\n  <mat-card-content>\r\n    <!--Text-->\r\n    <p class=\"font-small grey-dark-text mb-0 text-center font-weight-bold\">\r\n      Fin de semana Cundinamarca\r\n    </p>\r\n    <p>\r\n      La vega, Girardot\r\n    </p>\r\n  </mat-card-content>\r\n  <hr />\r\n  <mat-card-actions>\r\n    <ul class=\"list-unstyled list-inline font-small mt-3 text-left pl-3\">\r\n      <li class=\"list-inline-item pr-2\"><span class=\"fa fa-calendar pr-1\"></span>Dias 3</li>\r\n      <li class=\"list-inline-item pr-2\"><span class=\"fa fa-user pr-1\"></span>Personas: 1</li>\r\n    </ul>\r\n    <div class=\"d-flex align-content-between justify-content-between\">\r\n      <span class=\"d-flex justify-content-center align-items-center price\">$300</span>\r\n      <button class=\"rounded-pill m-2\" mat-raised-button color=\"primary\">Detalles</button>\r\n    </div>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/main/index/card-package/card-package.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/index/card-package/card-package.component.ts ***!
  \*******************************************************************/
/*! exports provided: CardPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPackageComponent", function() { return CardPackageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardPackageComponent = /** @class */ (function () {
    function CardPackageComponent() {
    }
    CardPackageComponent.prototype.ngOnInit = function () {
    };
    CardPackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-package',
            template: __webpack_require__(/*! ./card-package.component.html */ "./src/app/main/index/card-package/card-package.component.html"),
            styles: [__webpack_require__(/*! ./card-package.component.css */ "./src/app/main/index/card-package/card-package.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardPackageComponent);
    return CardPackageComponent;
}());



/***/ }),

/***/ "./src/app/main/index/card-site/card-site.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/index/card-site/card-site.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: #21ab64 !important;\r\n  border-radius: 0px !important;\r\n}\r\nmat-card-actions {\r\n  margin: 0 -16px 16px -16px;\r\n}\r\n.btn1 {\r\n  background-color: #1c8b52 !important;\r\n}\r\n.mat-card > .mat-card-actions:last-child {\r\n  margin-bottom: -18px !important;\r\n}\r\n.price {\r\n  position: relative;\r\n  background-color: #21ab64;\r\n  text-align: center;\r\n  left: -26px;\r\n  top: -70px;\r\n  color: azure;\r\n  width: 100px;\r\n}\r\n.price:before {\r\n  border-left: 10px solid rgba(0, 0, 0, 0);\r\n  border-right: 0 solid rgba(0, 0, 0, 0);\r\n  border-top: 7px solid #006e2c;\r\n  bottom: -7px;\r\n  content: '';\r\n  left: 0;\r\n  position: absolute;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbmRleC9jYXJkLXNpdGUvY2FyZC1zaXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxzQ0FBc0M7RUFDdEMsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4vaW5kZXgvY2FyZC1zaXRlL2NhcmQtc2l0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFhYjY0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgbWFyZ2luOiAwIC0xNnB4IDE2cHggLTE2cHg7XHJcbn1cclxuXHJcbi5idG4xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM4YjUyICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1jYXJkID4gLm1hdC1jYXJkLWFjdGlvbnM6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTE4cHggIWltcG9ydGFudDtcclxufVxyXG4ucHJpY2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFhYjY0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZWZ0OiAtMjZweDtcclxuICB0b3A6IC03MHB4O1xyXG4gIGNvbG9yOiBhenVyZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLnByaWNlOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICBib3JkZXItcmlnaHQ6IDAgc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgIzAwNmUyYztcclxuICBib3R0b206IC03cHg7XHJcbiAgY29udGVudDogJyc7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/index/card-site/card-site.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/index/card-site/card-site.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <div class=\"media-card\">\r\n    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\" />\r\n    <div class=\"price py-2\">\r\n      <span>1200 USD</span>\r\n    </div>\r\n  </div>\r\n  <mat-card-content>\r\n    <h4 class=\"text-center\">Bogota</h4>\r\n    <span>\r\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog\r\n      that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\r\n    </span>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button class=\"btn col-md-6 m-0\" mat-raised-button color=\"primary\">Bogota</button>\r\n    <button class=\"btn col-md-6 m-0 btn1\" mat-raised-button color=\"primary\">Share</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/main/index/card-site/card-site.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/index/card-site/card-site.component.ts ***!
  \*************************************************************/
/*! exports provided: CardSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSiteComponent", function() { return CardSiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardSiteComponent = /** @class */ (function () {
    function CardSiteComponent() {
    }
    CardSiteComponent.prototype.ngOnInit = function () {
    };
    CardSiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-site',
            template: __webpack_require__(/*! ./card-site.component.html */ "./src/app/main/index/card-site/card-site.component.html"),
            styles: [__webpack_require__(/*! ./card-site.component.css */ "./src/app/main/index/card-site/card-site.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardSiteComponent);
    return CardSiteComponent;
}());



/***/ }),

/***/ "./src/app/main/index/index.component.css":
/*!************************************************!*\
  !*** ./src/app/main/index/index.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: #21ab64 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFhYjY0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/index/index.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/index/index.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider></app-slider>\r\n<app-search></app-search>\r\n<div class=\"container pb-4\">\r\n  <div class=\"row text-center mt-4\">\r\n    <div class=\"col-12\">\r\n      <h1>MEJORES LUGARES</h1>\r\n      <span>MEJORES PAQUETES DE VIAJE DISPONIBLES</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4 align-items-center\">\r\n    <div class=\"col-md-8\">\r\n      <button class=\"btn btn-lg mr-2 my-2\" mat-raised-button color=\"primary\">Like</button>\r\n      <button class=\"btn btn-lg mr-2 my-2\" mat-raised-button color=\"primary\">Like</button>\r\n      <button class=\"btn btn-lg mr-2 my-2\" mat-raised-button color=\"primary\">Like</button>\r\n      <button class=\"btn btn-lg mr-2 my-2\" mat-raised-button color=\"primary\">Like</button>\r\n      <button class=\"btn btn-lg mr-2 my-2\" mat-raised-button color=\"primary\">Like</button>\r\n      <button class=\"btn btn-lg mr-2 my-2\" mat-raised-button color=\"primary\">Like</button>\r\n      <button class=\"btn btn-lg mr-2 my-2\" mat-raised-button color=\"primary\">Like</button>\r\n      <button class=\"btn btn-lg mr-2 my-2\" mat-raised-button color=\"primary\">Like</button>\r\n      <button class=\"btn btn-lg mr-2 my-2\" mat-raised-button color=\"primary\">Like</button>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <select formControlName=\"op2\" name=\"op2\" id=\"destino\" class=\"browser-default custom-select\">\r\n        <option selected>Open this select menu</option>\r\n        <option value=\"1\">One</option>\r\n        <option value=\"2\">Two</option>\r\n        <option value=\"3\">Three</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <app-card-site class=\"col-md-4 my-4\"></app-card-site>\r\n    <app-card-site class=\"col-md-4 my-4\"></app-card-site>\r\n    <app-card-site class=\"col-md-4 my-4\"></app-card-site>\r\n  </div>\r\n</div>\r\n\r\n<app-promotion></app-promotion>\r\n\r\n<div class=\"container pb-4\">\r\n  <div class=\"row text-center my-4\">\r\n    <div class=\"col-12\">\r\n      <h1>Paquetes</h1>\r\n      <span>MEJORES PAQUETES DE VIAJE</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <app-card-package class=\"col-lg-6 col-xl-3 col-sm-6 col-md-6 m-b30 my-2\"></app-card-package>\r\n    <app-card-package class=\"col-lg-6 col-xl-3 col-sm-6 col-md-6 m-b30 my-2\"></app-card-package>\r\n    <app-card-package class=\"col-lg-6 col-xl-3 col-sm-6 col-md-6 m-b30 my-2\"></app-card-package>\r\n    <app-card-package class=\"col-lg-6 col-xl-3 col-sm-6 col-md-6 m-b30 my-2\"></app-card-package>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/index/index.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/index/index.component.ts ***!
  \***********************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/main/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/main/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/main/index/promotion/promotion.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main/index/promotion/promotion.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: #21ab64 !important;\r\n}\r\n.body-content {\r\n  background: rgb(34, 34, 34);\r\n  background-blend-mode: soft-light;\r\n  font-weight: bold;\r\n  /* height: 350px !important; */\r\n  background-image: url('https://s3.ap-south-1.amazonaws.com/dlab-html/triper/xhtml/images/background/bg3.jpg');\r\n  /* background-size: cover; */\r\n  background-position: 0px -250px;\r\n  font-weight: bold;\r\n  color: azure;\r\n  font-size: 18px !important;\r\n  line-height: 28px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9pbmRleC9wcm9tb3Rpb24vcHJvbW90aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5Qiw2R0FBNkc7RUFDN0csNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2luZGV4L3Byb21vdGlvbi9wcm9tb3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYWI2NCAhaW1wb3J0YW50O1xyXG59XHJcbi5ib2R5LWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHJnYigzNCwgMzQsIDM0KTtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNvZnQtbGlnaHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLyogaGVpZ2h0OiAzNTBweCAhaW1wb3J0YW50OyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vZGxhYi1odG1sL3RyaXBlci94aHRtbC9pbWFnZXMvYmFja2dyb3VuZC9iZzMuanBnJyk7XHJcbiAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTI1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBhenVyZTtcclxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMjhweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/index/promotion/promotion.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/index/promotion/promotion.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-content\">\r\n  <div class=\"container py-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-12\">\r\n        <h1>Nombre</h1>\r\n        <h2>Sub Title</h2>\r\n        <p>\r\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, aut. Voluptatum ullam cupiditate molestiae\r\n          assumenda? Exercitationem, reiciendis. Cum id voluptate ut modi perferendis unde quia, nostrum delectus\r\n          repellat neque iusto.\r\n        </p>\r\n        <button class=\"btn col-md-6 m-0\" mat-raised-button color=\"primary\">Ir Detalle</button>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/index/promotion/promotion.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/index/promotion/promotion.component.ts ***!
  \*************************************************************/
/*! exports provided: PromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionComponent", function() { return PromotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PromotionComponent = /** @class */ (function () {
    function PromotionComponent() {
    }
    PromotionComponent.prototype.ngOnInit = function () {
    };
    PromotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotion',
            template: __webpack_require__(/*! ./promotion.component.html */ "./src/app/main/index/promotion/promotion.component.html"),
            styles: [__webpack_require__(/*! ./promotion.component.css */ "./src/app/main/index/promotion/promotion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromotionComponent);
    return PromotionComponent;
}());



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.routes */ "./src/app/main/main.routes.ts");





var routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: _main_routes__WEBPACK_IMPORTED_MODULE_4__["MainRoutes"],
    },
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar class=\"fixed-top\"></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.tiles = [
            { text: 'One', cols: 4, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 2, rows: 1, color: 'lightgreen' },
            { text: 'Three', cols: 2, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 4, rows: 1, color: '#DDBDF1' },
        ];
    }
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/main/index/index.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/main/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/main/about/about.component.ts");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _index_promotion_promotion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index/promotion/promotion.component */ "./src/app/main/index/promotion/promotion.component.ts");
/* harmony import */ var _places_places_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./places/places.component */ "./src/app/main/places/places.component.ts");
/* harmony import */ var _places_detail_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./places/detail/detail.component */ "./src/app/main/places/detail/detail.component.ts");
/* harmony import */ var _places_card_place_card_place_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./places/card-place/card-place.component */ "./src/app/main/places/card-place/card-place.component.ts");














var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _index_promotion_promotion_component__WEBPACK_IMPORTED_MODULE_10__["PromotionComponent"],
                _places_places_component__WEBPACK_IMPORTED_MODULE_11__["PlacesComponent"],
                _places_detail_detail_component__WEBPACK_IMPORTED_MODULE_12__["DetailComponent"],
                _places_card_place_card_place_component__WEBPACK_IMPORTED_MODULE_13__["CardPlaceComponent"],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_7__["MainRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]],
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/main.routes.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.routes.ts ***!
  \*************************************/
/*! exports provided: MainRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutes", function() { return MainRoutes; });
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ "./src/app/main/index/index.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/main/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/main/contact/contact.component.ts");
/* harmony import */ var _places_places_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./places/places.component */ "./src/app/main/places/places.component.ts");




var MainRoutes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"] },
    { path: 'places', component: _places_places_component__WEBPACK_IMPORTED_MODULE_3__["PlacesComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
];


/***/ }),

/***/ "./src/app/main/places/card-place/card-place.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/main/places/card-place/card-place.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n  font: bold;\r\n  color: #21ab64 !important;\r\n}\r\n\r\n.btn:hover {\r\n  color: white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wbGFjZXMvY2FyZC1wbGFjZS9jYXJkLXBsYWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9wbGFjZXMvY2FyZC1wbGFjZS9jYXJkLXBsYWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICBmb250OiBib2xkO1xyXG4gIGNvbG9yOiAjMjFhYjY0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/places/card-place/card-place.component.html":
/*!******************************************************************!*\
  !*** ./src/app/main/places/card-place/card-place.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <img mat-card-image src=\"https://mdbootstrap.com/img/Photos/Others/food.jpg\" alt=\"Photo of a Shiba Inu\" />\r\n  <mat-card-content class=\" text-center\">\r\n    <p class=\"font-small grey-dark-text mb-0 font-weight-bold\">\r\n      Fin de semana Cundinamarca\r\n    </p>\r\n    <p>\r\n      La vega, Girardot\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <div class=\"d-flex align-content-center justify-content-center\">\r\n      <a class=\"rounded-pill m-2 btn btn-outline-success\" mat-stroked-button color=\"primary\">Detalles</a>\r\n      <a class=\"rounded-pill m-2 btn btn-outline-success\" mat-stroked-button color=\"primary\">Detalles</a>\r\n    </div>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/main/places/card-place/card-place.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/places/card-place/card-place.component.ts ***!
  \****************************************************************/
/*! exports provided: CardPlaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPlaceComponent", function() { return CardPlaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardPlaceComponent = /** @class */ (function () {
    function CardPlaceComponent() {
    }
    CardPlaceComponent.prototype.ngOnInit = function () {
    };
    CardPlaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-place',
            template: __webpack_require__(/*! ./card-place.component.html */ "./src/app/main/places/card-place/card-place.component.html"),
            styles: [__webpack_require__(/*! ./card-place.component.css */ "./src/app/main/places/card-place/card-place.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardPlaceComponent);
    return CardPlaceComponent;
}());



/***/ }),

/***/ "./src/app/main/places/detail/detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/main/places/detail/detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcGxhY2VzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/places/detail/detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main/places/detail/detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/places/detail/detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main/places/detail/detail.component.ts ***!
  \********************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/main/places/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/main/places/detail/detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/main/places/places.component.css":
/*!**************************************************!*\
  !*** ./src/app/main/places/places.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item {\r\n  cursor: pointer;\r\n}\r\n.bg-image {\r\n  background: rgb(34, 34, 34);\r\n  background-image: url('https://s3.ap-south-1.amazonaws.com/dlab-html/triper/xhtml/images/background/bg1.jpg');\r\n  background-blend-mode: soft-light;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  color: white;\r\n}\r\n.btn-search {\r\n  background-color: #21ab64 !important;\r\n  font: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wbGFjZXMvcGxhY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsNkdBQTZHO0VBQzdHLGlDQUFpQztFQUNqQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL21haW4vcGxhY2VzL3BsYWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5iZy1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDM0LCAzNCwgMzQpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vZGxhYi1odG1sL3RyaXBlci94aHRtbC9pbWFnZXMvYmFja2dyb3VuZC9iZzEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bi1zZWFyY2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWFiNjQgIWltcG9ydGFudDtcclxuICBmb250OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/places/places.component.html":
/*!***************************************************!*\
  !*** ./src/app/main/places/places.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row mb-5 text-center bg-image py-5\">\r\n    <div class=\"col-md-12\">\r\n      <h1>Lugares</h1>\r\n      <span> Manténgase actualizado y revise las ofertas para estos destinos de tendencias. Es indescriptible.</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container my-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <h3 class=\"text-center\">Sitios</h3>\r\n      <div class=\"list-group\">\r\n        <a class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</a>\r\n        <a class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</a>\r\n        <a class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</a>\r\n        <a class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</a>\r\n        <a class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"input-group mb-3\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\"\r\n          aria-describedby=\"button-addon2\" />\r\n        <div class=\"input-group-append\">\r\n          <!-- <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\">Button</button> -->\r\n          <button class=\"btn btn-outline-secondary btn-search\" mat-raised-button color=\"primary\">Detalles</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <app-card-place class=\"col-md-6 col-sm-12 my-3\"></app-card-place>\r\n        <app-card-place class=\"col-md-6 col-sm-12 my-3\"></app-card-place>\r\n        <app-card-place class=\"col-md-6 col-sm-12 my-3\"></app-card-place>\r\n        <app-card-place class=\"col-md-6 col-sm-12 my-3\"></app-card-place>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/places/places.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/places/places.component.ts ***!
  \*************************************************/
/*! exports provided: PlacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesComponent", function() { return PlacesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlacesComponent = /** @class */ (function () {
    function PlacesComponent() {
    }
    PlacesComponent.prototype.ngOnInit = function () {
    };
    PlacesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-places',
            template: __webpack_require__(/*! ./places.component.html */ "./src/app/main/places/places.component.html"),
            styles: [__webpack_require__(/*! ./places.component.css */ "./src/app/main/places/places.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlacesComponent);
    return PlacesComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-hm-carousel */ "./node_modules/ngx-hm-carousel/fesm5/ngx-hm-carousel.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_1__["NgxHmCarouselModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_1__["NgxHmCarouselModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mat-toolbar {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  background-color: rgb(70, 69, 69);\r\n  color: azure;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n  font-size: 15px !important;\r\n}\r\n\r\n.separador {\r\n  height: 20px !important;\r\n  background-color: rgb(83, 82, 82);\r\n} */\r\n.bg-footer {\r\n  background-color: #121212;\r\n  color: #b0b0b0;\r\n}\r\nul {\r\n  list-style: none;\r\n  margin-top: 5px;\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n}\r\n.btn-fb {\r\n  background-color: #4B69A8;\r\n  color: white !important;\r\n}\r\n.btn-link {\r\n  background-color: #249DD7;\r\n  color: white !important;\r\n}\r\n.btn-tw {\r\n  background-color: #1EA1F3;\r\n  color: white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUNIO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBtYXQtdG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA2OSwgNjkpO1xyXG4gIGNvbG9yOiBhenVyZTtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZXBhcmFkb3Ige1xyXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgODIsIDgyKTtcclxufSAqL1xyXG4uYmctZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gIGNvbG9yOiAjYjBiMGIwO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5idG4tZmIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjY5QTg7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0OURENztcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi10dyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFQTFGMztcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\r\n<footer class=\"page-footer font-small special-color-dark pt-4  bg-footer\">\r\n  <!-- Footer Elements -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <ul class=\"list-unstyled list-inline text-center\">\r\n          <li class=\"list-inline-item\">\r\n            <a class=\"btn-floating btn-fb mx-1 btn-lg\" mdbWavesEffect>\r\n              <i class=\"fab fa-facebook-f\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"list-inline-item\">\r\n            <a class=\"btn-floating btn-tw mx-1 btn-lg\" mdbWavesEffect>\r\n              <i class=\"fab fa-twitter\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"list-inline-item\">\r\n            <a class=\"btn-floating btn-link mx-1 btn-lg\" mdbWavesEffect>\r\n              <i class=\"fab fa-linkedin-in\"></i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <div class=\"widget widget_getintuch\">\r\n          <ul class=\"info-contact\">\r\n            <li>\r\n              <span> <i class=\"fa fa-map-marker\t\"></i> Brodway Road 234, New York </span>\r\n            </li>\r\n\r\n            <li>\r\n              <span> <i class=\"fa fa-phone\"></i> Mobile: +00 1234 456789 <br />+10 1234 456789 </span>\r\n            </li>\r\n\r\n            <li>\r\n              <span> <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> Mail: info@travel.com </span>\r\n            </li>\r\n            <li>\r\n              <span> <i class=\"fa fa-fax\"></i> Fax: 000 123 2294 089 </span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Footer Elements -->\r\n\r\n  <!-- Copyright -->\r\n  <div class=\"footer-copyright text-center py-3\">\r\n    © 2018 Copyright\r\n    <a href=\"/\"> gmoreno</a>\r\n  </div>\r\n  <!-- Copyright -->\r\n</footer>\r\n<!-- Footer -->\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  -ms-flex: 1 1 auto;\r\n      flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar-row {\r\n  margin: 0px auto;\r\n  max-width: 1200px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBYztNQUFkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxubWF0LXRvb2xiYXItcm93IHtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3 px-md-4 bg-white border-bottom shadow-sm\">\r\n  <div class=\"container d-flex flex-column flex-md-row align-items-center\">\r\n    <h5 class=\"my-0 mr-md-auto font-weight-normal\"><img src=\"../../../assets/logo.png\" alt=\"\" /></h5>\r\n    <nav class=\"my-2 my-md-0 mr-md-3\">\r\n      <a [routerLink]=\"['/']\" routerLinkActive=\"active\" class=\"p-2 text-dark\">Inicio</a>\r\n      <a [routerLink]=\"['/places']\" routerLinkActive=\"active\" class=\"p-2 text-dark\">Lugares</a>\r\n      <a [routerLink]=\"['/about']\" routerLinkActive=\"active\" class=\"p-2 text-dark\">Acerca</a>\r\n      <a [routerLink]=\"['/contact']\" routerLinkActive=\"active\" class=\"p-2 text-dark\">Contacto</a>\r\n    </nav>\r\n\r\n    <button class=\"btn\" mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #menu=\"matMenu\">\r\n      <span mat-menu-item>\r\n        <a [routerLink]=\"['/login']\" routerLinkActive=\"active\">\r\n          <mat-icon>voicemail</mat-icon>\r\n          <span>Ingresar</span>\r\n        </a>\r\n      </span>\r\n\r\n      <span mat-menu-item>\r\n        <a [routerLink]=\"['/register']\" routerLinkActive=\"active\">\r\n          <mat-icon>voicemail</mat-icon>\r\n          <span>Registrarse</span>\r\n        </a>\r\n      </span>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n<!-- <mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <span>\r\n      <a [routerLink]=\"[ '/' ]\" routerLinkActive=\"active\"><img src=\"../../../assets/logo.png\" alt=\"\" /></a>\r\n    </span>\r\n    <span class=\"example-spacer\"></span>\r\n    <button mat-button><a [routerLink]=\"[ '/' ]\" routerLinkActive=\"active\">Index</a></button>\r\n    <button mat-button><a [routerLink]=\"[ '/about' ]\" routerLinkActive=\"active\">About</a></button>\r\n    <button mat-button><a [routerLink]=\"[ '/contact' ]\" routerLinkActive=\"active\">Contact</a></button>\r\n\r\n\r\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item>\r\n        <a [routerLink]=\"[ '/login' ]\" routerLinkActive=\"active\">\r\n          <mat-icon>voicemail</mat-icon>\r\n          <span>Login</span>\r\n        </a>\r\n      </button>\r\n\r\n      <button mat-menu-item>\r\n        <a [routerLink]=\"[ '/register' ]\" routerLinkActive=\"active\">\r\n          <mat-icon>voicemail</mat-icon>\r\n          <span>Register</span>\r\n        </a>\r\n      </button>\r\n    </mat-menu>\r\n\r\n  </mat-toolbar-row>\r\n</mat-toolbar> -->\r\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.index = '/';
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/search/search.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/search/search.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#searchContainer {\r\n  background: rgb(34, 34, 34);\r\n  background-image: url('https://s3.ap-south-1.amazonaws.com/dlab-html/triper/xhtml/images/background/bg1.jpg');\r\n  background-blend-mode: soft-light;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  font-weight: bold;\r\n}\r\n\r\nbutton {\r\n  background-color: #21ab64 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQiw2R0FBNkc7RUFDN0csaUNBQWlDO0VBQ2pDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2hDb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigzNCwgMzQsIDM0KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2RsYWItaHRtbC90cmlwZXIveGh0bWwvaW1hZ2VzL2JhY2tncm91bmQvYmcxLmpwZycpO1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc29mdC1saWdodDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYWI2NCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-light py-2\" id=\"searchContainer\">\r\n  <form [formGroup]=\"form\" class=\"container py-4\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <label for=\"actividad\" class=\"\">Actividad</label>\r\n        <select formControlName=\"op1\" name=\"op1\" id=\"actividad\" class=\"browser-default custom-select\">\r\n          <option selected>Open this select menu</option>\r\n          <option value=\"1\">One</option>\r\n          <option value=\"2\">Two</option>\r\n          <option value=\"3\">Three</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <label for=\"destino\" class=\"\">Destino</label>\r\n        <select formControlName=\"op2\" name=\"op2\" id=\"destino\" class=\"browser-default custom-select\">\r\n          <option selected>Open this select menu</option>\r\n          <option value=\"1\">One</option>\r\n          <option value=\"2\">Two</option>\r\n          <option value=\"3\">Three</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <label class=\"\">Fecha </label>\r\n        <mat-form-field class=\"form-control m-0 \">\r\n          <input matInput formControlName=\"fecha\" name=\"fecha\" [matDatepicker]=\"picker\" (dateInput)=\"addEvent($event)\"\r\n            (dateChange)=\"addEvent($event)\" />\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col\">\r\n        <label class=\"\">Busqueda</label>\r\n        <button class=\"form-control\" mat-raised-button color=\"primary\">Encontrar</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.activities = [{ value: 1, viewValue: 'Bicicleta' }, { value: 1, viewValue: 'Caminata' }, { value: 1, viewValue: 'Otro' }];
        this.destinies = [{ value: 1, viewValue: 'Bogota' }, { value: 2, viewValue: 'Medellin' }, { value: 3, viewValue: 'Cali' }];
        this.dataForm = { op1: '', op2: '', fecha: '' };
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date().toISOString());
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            op1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            op2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    SearchComponent.prototype.onSubmit = function () {
        console.log(this.date, this.dataForm);
    };
    SearchComponent.prototype.addEvent = function (event) {
        this.dataForm.fecha = event.value;
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/shared/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/shared/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/shared/slider/slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/shared/search/search.component.ts");
/* harmony import */ var _main_index_card_site_card_site_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../main/index/card-site/card-site.component */ "./src/app/main/index/card-site/card-site.component.ts");
/* harmony import */ var _main_index_card_package_card_package_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../main/index/card-package/card-package.component */ "./src/app/main/index/card-package/card-package.component.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_12__);













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_7__["SliderComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                _main_index_card_site_card_site_component__WEBPACK_IMPORTED_MODULE_10__["CardSiteComponent"],
                _main_index_card_package_card_package_component__WEBPACK_IMPORTED_MODULE_11__["CardPackageComponent"],
            ],
            exports: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_7__["SliderComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                _main_index_card_site_card_site_component__WEBPACK_IMPORTED_MODULE_10__["CardSiteComponent"],
                _main_index_card_package_card_package_component__WEBPACK_IMPORTED_MODULE_11__["CardPackageComponent"],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_12__["LightboxModule"]],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/slider/slider.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/slider/slider.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aniT {\r\n  transition: all 1s linear;\r\n}\r\n\r\n.transition {\r\n  transition: all 0.3s ease-in-out !important;\r\n}\r\n\r\n.carousel .content {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.carousel .content .item {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.carousel .content .item .img {\r\n  width: 100%;\r\n  max-height: 700px !important;\r\n  display: block;\r\n  background-size: cover;\r\n  background-position: center;\r\n  height: 0;\r\n  padding-bottom: 50%;\r\n}\r\n\r\n.carousel .item {\r\n  width: 100%;\r\n  display: block;\r\n  max-height: 700px !important;\r\n}\r\n\r\n.carousel .item .img {\r\n  width: 100%;\r\n  display: block;\r\n  background-size: cover;\r\n  background-position: center;\r\n  height: 0;\r\n  padding-bottom: 50%;\r\n}\r\n\r\n.carousel .ball {\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  background: black;\r\n  border: 2px solid;\r\n  opacity: 0.5;\r\n}\r\n\r\n.carousel .ball.visible {\r\n  opacity: 1;\r\n}\r\n\r\n.carousel .progress {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 0;\r\n  height: 5px;\r\n  background: #ff5252;\r\n}\r\n\r\n.carousel .click-area {\r\n  width: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.carousel .click-area i {\r\n  font-size: 3em;\r\n}\r\n\r\n.right-success {\r\n  background-color: #21ab64 !important;\r\n  color: whitesmoke !important;\r\n}\r\n\r\n.left-success {\r\n  background-color: #21ab64 !important;\r\n  color: whitesmoke !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuaVQge1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBsaW5lYXI7XHJcbn1cclxuXHJcbi50cmFuc2l0aW9uIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwgLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCAuY29udGVudCAuaXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCAuY29udGVudCAuaXRlbSAuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTAlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwgLml0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC1oZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCAuaXRlbSAuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwJTtcclxufVxyXG5cclxuLmNhcm91c2VsIC5iYWxsIHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmNhcm91c2VsIC5iYWxsLnZpc2libGUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCAucHJvZ3Jlc3Mge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmY1MjUyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwgLmNsaWNrLWFyZWEge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcm91c2VsIC5jbGljay1hcmVhIGkge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcblxyXG4ucmlnaHQtc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYWI2NCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZWZ0LXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWFiNjQgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGVzbW9rZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/slider/slider.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/slider/slider.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-hm-carousel\r\n  #carousel\r\n  [(ngModel)]=\"index\"\r\n  (ngModelChange)=\"indexChanged($event)\"\r\n  [autoplay-speed]=\"speed\"\r\n  [autoplay]=\"autoplay\"\r\n  [autoplay-direction]=\"direction\"\r\n  [infinite]=\"infinite\"\r\n  [between-delay]=\"5000\"\r\n  [mourse-enable]=\"true\"\r\n  [data]=\"avatars\"\r\n  [aniTime]=\"300\"\r\n  class=\"carousel c-accent\"\r\n>\r\n  <section ngx-hm-carousel-container class=\"content\">\r\n    <article class=\"item cursor-pointer\" ngx-hm-carousel-item *ngFor=\"let avatar of avatars\">\r\n      <div class=\"img\" [style.backgroundImage]=\"'url(' + avatar.url + ')'\"></div>\r\n    </article>\r\n    <ng-template #infiniteContainer></ng-template>\r\n  </section>\r\n\r\n  <ng-template #carouselContent let-avatar let-i=\"index\">\r\n    <article class=\"item cursor-pointer\">\r\n      <div class=\"img\" [style.backgroundImage]=\"'url(' + avatar.url + ')'\"></div>\r\n    </article>\r\n  </ng-template>\r\n\r\n  <ng-template #carouselPrev>\r\n    <div class=\"click-area\">\r\n      <i class=\"material-icons left-success\">keyboard_arrow_left</i>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #carouselNext>\r\n    <div class=\"click-area\">\r\n      <i class=\"material-icons right-success\">keyboard_arrow_right</i>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #carouselDot let-model>\r\n    <div class=\"ball bg-accent\" [class.visible]=\"model.index === model.currentIndex\"></div>\r\n  </ng-template>\r\n\r\n  <ng-template #carouselProgress>\r\n    <div class=\"progress\"></div>\r\n  </ng-template>\r\n</ngx-hm-carousel>\r\n"

/***/ }),

/***/ "./src/app/shared/slider/slider.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/slider/slider.component.ts ***!
  \***************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.follow = true;
        this.enablePan = true;
        this.index = 8;
        this.speed = 3000;
        this.infinite = true;
        this.direction = 'right';
        this.directionToggle = true;
        this.autoplay = true;
        this.avatars = '123456789'.split('').map(function (x, i) {
            var num = i;
            return {
                url: "https://picsum.photos/1000/600/?" + num,
                title: "" + num,
            };
        });
    }
    SliderComponent.prototype.indexChanged = function (index) {
        // console.log(index);
    };
    SliderComponent.prototype.toggleDirection = function ($event) {
        this.direction = this.directionToggle ? 'right' : 'left';
    };
    SliderComponent.prototype.a = function (i) {
        // console.log(i);
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/shared/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/shared/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Desarrollo Cursos\Angular\TourAngularMaterial\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map