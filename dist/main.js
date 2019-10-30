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

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'app';
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
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/service.module */ "./src/app/service/service.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");



// Rutas



// import { AccountSettingComponent } from './pages/account-setting/account-setting.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { FooterComponent } from './shared/footer/footer.component';
// import { PagesComponent } from './pages/pages.component';
// import { RegisterComponent } from './login/register.component';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["APP_ROUTES"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _service_service_module__WEBPACK_IMPORTED_MODULE_7__["ServiceModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pages_nopagesfound_nopagesfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/nopagesfound/nopagesfound.component */ "./src/app/pages/nopagesfound/nopagesfound.component.ts");



var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    //  { path: 'register', component: RegisterComponent },
    { path: '', component: _pages_nopagesfound_nopagesfound_component__WEBPACK_IMPORTED_MODULE_2__["NopagesfoundComponent"] }
];
var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/components/modal-upload/modalupload.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/modal-upload/modalupload.service.ts ***!
  \****************************************************************/
/*! exports provided: ModaluploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModaluploadService", function() { return ModaluploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ModaluploadService = /** @class */ (function () {
    function ModaluploadService() {
        this.oculto = 'oculto';
        this.notificacion = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log('Modal upload listo');
    }
    ModaluploadService.prototype.ocultarModal = function () {
        this.oculto = 'oculto';
        this.tipo = null;
        this.id = null;
    };
    ModaluploadService.prototype.mostrarModal = function (tipo, id) {
        this.oculto = '';
        this.id = id;
        this.tipo = tipo;
    };
    ModaluploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModaluploadService);
    return ModaluploadService;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: URL_SERVICIO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SERVICIO", function() { return URL_SERVICIO; });
var URL_SERVICIO = 'http://localhost:3000';


/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset=\"utf-8\">\n    <style>\n        .login-form input[type=\"password\"],\n        .login-form input[type=\"text\"] {\n            width: 100%;\n            padding: 15px;\n            border: 1px solid #dddddd;\n            margin-bottom: 15px;\n            box-sizing: border-box;\n        }\n    </style>\n</head>\n\n<body>\n\n\n    <div class=\"limiter\">\n        <div class=\"container-login100\">\n            <div class=\"wrap-login100 p-t-50 p-b-90\">\n                <h2 class=\"text-center\">Bienvenido Dr.</h2>\n                <form ngNativeValidate #f=\"ngForm\" (ngSubmit)=\"ingresar( f )\">\n                    <input ngModel name=\"nombre\" type=\"text\" placeholder=\"Nombre\" required>\n                    <input ngModel name=\"password\" type=\"password\" placeholder=\"Password\" required>\n                    <div class=\"form-group text-center m-t-20\">\n                        <div class=\"col-xs-12\">\n                            <button class=\"btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Bienvenido</button>\n                        </div>\n                    </div>\n                </form>\n                <!-- <a href=\"#/dashboard\"><button style=\"margin: 3rem auto; font-size: 2rem; display: block; width: 80%\" class=\"btn btn-primary text-center\">Bienvenido</button></a> -->\n            </div>\n        </div>\n    </div>\n</body>\n\n</html>\n\n<!-- <!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\t\t<title>Login Form Tutorial</title>\n\t\t<style>\n\t\t.login-form {\n\t\t\twidth: 300px;\n\t\t\tmargin: 0 auto;\n\t\t\tfont-family: Tahoma, Geneva, sans-serif;\n\t\t}\n\t\t.login-form h1 {\n\t\t\ttext-align: center;\n\t\t\tcolor: #4d4d4d;\n\t\t\tfont-size: 24px;\n\t\t\tpadding: 20px 0 20px 0;\n\t\t}\n\t\t.login-form input[type=\"password\"],\n\t\t.login-form input[type=\"text\"] {\n\t\t\twidth: 100%;\n\t\t\tpadding: 15px;\n\t\t\tborder: 1px solid #dddddd;\n\t\t\tmargin-bottom: 15px;\n\t\t\tbox-sizing:border-box;\n\t\t}\n\t\t.login-form input[type=\"submit\"] {\n\t\t\twidth: 100%;\n\t\t\tpadding: 15px;\n\t\t\tbackground-color: #535b63;\n\t\t\tborder: 0;\n\t\t\tbox-sizing: border-box;\n\t\t\tcursor: pointer;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #ffffff;\n\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"login-form\">\n\t\t\t<h1>Login Form</h1>\n\t\t\t<form action=\"auth\" method=\"POST\">\n\t\t\t\t<input type=\"text\" name=\"username\" placeholder=\"Username\" required>\n\t\t\t\t<input type=\"password\" name=\"password\" placeholder=\"Password\" required>\n\t\t\t\t<input type=\"submit\">\n\t\t\t</form>\n\t\t</div>\n\t</body>\n</html -->"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service.index */ "./src/app/service/service.index.ts");
/* harmony import */ var _models_usuarios_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/usuarios.model */ "./src/app/models/usuarios.model.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _usuarioService) {
        this.router = router;
        this._usuarioService = _usuarioService;
        this.recuerdame = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.email = localStorage.getItem('email') || '';
        if (this.email.length > 1) {
            this.recuerdame = true;
        }
    };
    LoginComponent.prototype.ingresar = function (forma) {
        // if ( forma.invalid ) {
        //   return;
        // }
        var _this = this;
        // const usuario = new Usuario(null, forma.value.email, forma.value.password);
        // this._usuarioService.login(usuario, forma.value.recuerdame)
        //         // .subscribe( resp => {
        //         //   console.log(resp);
        //         // } );
        //          .subscribe( correto =>  this.router.navigate(['/dashboard']) );
        var usuario = new _models_usuarios_model__WEBPACK_IMPORTED_MODULE_4__["Usuario"](null, forma.value.nombre, forma.value.password);
        this._usuarioService.VerifiUsuario(usuario).subscribe(function (correto) { return _this.router.navigate(['/dashboard']); });
        console.log(forma.value);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_service_index__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/Otoscopia.ts":
/*!*************************************!*\
  !*** ./src/app/models/Otoscopia.ts ***!
  \*************************************/
/*! exports provided: OtoscopiaEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtoscopiaEx", function() { return OtoscopiaEx; });
var OtoscopiaEx = /** @class */ (function () {
    function OtoscopiaEx(Normal, AlteracionCongenita, Ausente, caeNormal, Colapsado, Congenita, Cerumen, CerumenP, CerumenT, CerumenI, CerumenIP, CerumenIT, Extraccion, MembrNacaNor, MembrNacaPerD, MembrNacaRetD, MembrNacaMonoD, MembrNacaPerI, MembrNacaRetI, MembrNacaMonoI, Otorragia, Otorrea, Otitis, hallazgos, cedula, Idotoscopia) {
        this.Normal = Normal;
        this.AlteracionCongenita = AlteracionCongenita;
        this.Ausente = Ausente;
        this.caeNormal = caeNormal;
        this.Colapsado = Colapsado;
        this.Congenita = Congenita;
        this.Cerumen = Cerumen;
        this.CerumenP = CerumenP;
        this.CerumenT = CerumenT;
        this.CerumenI = CerumenI;
        this.CerumenIP = CerumenIP;
        this.CerumenIT = CerumenIT;
        this.Extraccion = Extraccion;
        this.MembrNacaNor = MembrNacaNor;
        this.MembrNacaPerD = MembrNacaPerD;
        this.MembrNacaRetD = MembrNacaRetD;
        this.MembrNacaMonoD = MembrNacaMonoD;
        this.MembrNacaPerI = MembrNacaPerI;
        this.MembrNacaRetI = MembrNacaRetI;
        this.MembrNacaMonoI = MembrNacaMonoI;
        this.Otorragia = Otorragia;
        this.Otorrea = Otorrea;
        this.Otitis = Otitis;
        this.hallazgos = hallazgos;
        this.cedula = cedula;
        this.Idotoscopia = Idotoscopia;
    }
    return OtoscopiaEx;
}());



/***/ }),

/***/ "./src/app/models/audiograma.ts":
/*!**************************************!*\
  !*** ./src/app/models/audiograma.ts ***!
  \**************************************/
/*! exports provided: AudiogramaEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiogramaEx", function() { return AudiogramaEx; });
var AudiogramaEx = /** @class */ (function () {
    function AudiogramaEx(NDconperfilplano, NDdescendente, NDascendente, NDbatea, NDcampana, NDmixto, NIconperfilplano, NIdescendente, NIascendente, NIbatea, NIcampana, NImixto, PDsuperficial, PDmoderada, PDmoderadas, PDsevera, PDprofunda, PDperfilp, PDdescendente, PDascendente, PDbatea, PDcampana, PDmixto, PDcaracterC, PDsensorial, PDmixto2, PIsuperficial, PImoderada, PImoderadas, PIsevera, PIprofunda, PIperfilp, PIdescendente, PIascendente, PIbatea, PIcampana, PImixto, PIcaracterC, PIsensorial, PImixto2, MuescaOD, MuescaOI, FNhallazgos, cedula, Idaudiograma) {
        this.NDconperfilplano = NDconperfilplano;
        this.NDdescendente = NDdescendente;
        this.NDascendente = NDascendente;
        this.NDbatea = NDbatea;
        this.NDcampana = NDcampana;
        this.NDmixto = NDmixto;
        this.NIconperfilplano = NIconperfilplano;
        this.NIdescendente = NIdescendente;
        this.NIascendente = NIascendente;
        this.NIbatea = NIbatea;
        this.NIcampana = NIcampana;
        this.NImixto = NImixto;
        this.PDsuperficial = PDsuperficial;
        this.PDmoderada = PDmoderada;
        this.PDmoderadas = PDmoderadas;
        this.PDsevera = PDsevera;
        this.PDprofunda = PDprofunda;
        this.PDperfilp = PDperfilp;
        this.PDdescendente = PDdescendente;
        this.PDascendente = PDascendente;
        this.PDbatea = PDbatea;
        this.PDcampana = PDcampana;
        this.PDmixto = PDmixto;
        this.PDcaracterC = PDcaracterC;
        this.PDsensorial = PDsensorial;
        this.PDmixto2 = PDmixto2;
        this.PIsuperficial = PIsuperficial;
        this.PImoderada = PImoderada;
        this.PImoderadas = PImoderadas;
        this.PIsevera = PIsevera;
        this.PIprofunda = PIprofunda;
        this.PIperfilp = PIperfilp;
        this.PIdescendente = PIdescendente;
        this.PIascendente = PIascendente;
        this.PIbatea = PIbatea;
        this.PIcampana = PIcampana;
        this.PImixto = PImixto;
        this.PIcaracterC = PIcaracterC;
        this.PIsensorial = PIsensorial;
        this.PImixto2 = PImixto2;
        this.MuescaOD = MuescaOD;
        this.MuescaOI = MuescaOI;
        this.FNhallazgos = FNhallazgos;
        this.cedula = cedula;
        this.Idaudiograma = Idaudiograma;
    }
    return AudiogramaEx;
}());



/***/ }),

/***/ "./src/app/models/ayerH.ts":
/*!*********************************!*\
  !*** ./src/app/models/ayerH.ts ***!
  \*********************************/
/*! exports provided: AyerH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyerH", function() { return AyerH; });
var AyerH = /** @class */ (function () {
    function AyerH(Moto, Bus, Gripe, RFSinProt, Fiesta, Otros, Cedula, IdAyerH) {
        this.Moto = Moto;
        this.Bus = Bus;
        this.Gripe = Gripe;
        this.RFSinProt = RFSinProt;
        this.Fiesta = Fiesta;
        this.Otros = Otros;
        this.Cedula = Cedula;
        this.IdAyerH = IdAyerH;
    }
    return AyerH;
}());

// IdAyerH
// Moto
// Bus
// Gripe
// RFSinProt
// Fiesta
// Otros


/***/ }),

/***/ "./src/app/models/duranteV.ts":
/*!************************************!*\
  !*** ./src/app/models/duranteV.ts ***!
  \************************************/
/*! exports provided: DureanteVida */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DureanteVida", function() { return DureanteVida; });
var DureanteVida = /** @class */ (function () {
    function DureanteVida(Fiebre, ConsultoO, OperacionO, PerdidaC, Paperas, Escarlatina, Sarampion, Meningitis, Diabetes, ERinones, Alergias, InstrumentosM, SFamilia, ServicioM, MRCasaHoras, MFuerte, PasatiempoR, ArmasF, Cohetes, Gentamicina, Quinina, Quimicos, TrabajoAnt, Cedula, IdDuranteV) {
        this.Fiebre = Fiebre;
        this.ConsultoO = ConsultoO;
        this.OperacionO = OperacionO;
        this.PerdidaC = PerdidaC;
        this.Paperas = Paperas;
        this.Escarlatina = Escarlatina;
        this.Sarampion = Sarampion;
        this.Meningitis = Meningitis;
        this.Diabetes = Diabetes;
        this.ERinones = ERinones;
        this.Alergias = Alergias;
        this.InstrumentosM = InstrumentosM;
        this.SFamilia = SFamilia;
        this.ServicioM = ServicioM;
        this.MRCasaHoras = MRCasaHoras;
        this.MFuerte = MFuerte;
        this.PasatiempoR = PasatiempoR;
        this.ArmasF = ArmasF;
        this.Cohetes = Cohetes;
        this.Gentamicina = Gentamicina;
        this.Quinina = Quinina;
        this.Quimicos = Quimicos;
        this.TrabajoAnt = TrabajoAnt;
        this.Cedula = Cedula;
        this.IdDuranteV = IdDuranteV;
    }
    return DureanteVida;
}());

// IdDuranteV
// Fiebre
// ConsultoO
// OperacionO
// PerdidaC
// Paperas
// Escarlatina
// Sarampion
// Meningitis
// Diabetes
// ERiñones
// Alergias
// InstrumentosM
// SFamilia
// ServicioM
// MRCasaHoras
// MFuerte
// PasatiempoR
// Cohetes
// Gentamicina
// Quinina
// Quimicos
// TrabajoAnt


/***/ }),

/***/ "./src/app/models/examen.ts":
/*!**********************************!*\
  !*** ./src/app/models/examen.ts ***!
  \**********************************/
/*! exports provided: Exan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exan", function() { return Exan; });
var Exan = /** @class */ (function () {
    function Exan(Audiometro, Tipo, RuidoDba, Fecha, Cedula, Proteccion, TipoProteccion, OtrosProteccion, Molestia, MolestiaDetalle, IdExamen) {
        this.Audiometro = Audiometro;
        this.Tipo = Tipo;
        this.RuidoDba = RuidoDba;
        this.Fecha = Fecha;
        this.Cedula = Cedula;
        this.Proteccion = Proteccion;
        this.TipoProteccion = TipoProteccion;
        this.OtrosProteccion = OtrosProteccion;
        this.Molestia = Molestia;
        this.MolestiaDetalle = MolestiaDetalle;
        this.IdExamen = IdExamen;
    }
    return Exan;
}());

// IdExamen
// Tipo
// Fecha
// IdEmpleado
// IdProteccion
// IdMolestia
// IdHistoriaCl
// IdEmpresa
// IdAudiometro


/***/ }),

/***/ "./src/app/models/foros.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/foros.model.ts ***!
  \***************************************/
/*! exports provided: Foro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foro", function() { return Foro; });
var Foro = /** @class */ (function () {
    function Foro(titulo, detalle, fecha, categoria, usuario, _id) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.fecha = fecha;
        this.categoria = categoria;
        this.usuario = usuario;
        this._id = _id;
    }
    return Foro;
}());



/***/ }),

/***/ "./src/app/models/paciente.ts":
/*!************************************!*\
  !*** ./src/app/models/paciente.ts ***!
  \************************************/
/*! exports provided: Paciente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paciente", function() { return Paciente; });
var Paciente = /** @class */ (function () {
    function Paciente(Nombre, Cedula, Edad, Genero, F_Contratacion, Puesto, Turno, NHoras, empresa, img, IdEmpleado) {
        this.Nombre = Nombre;
        this.Cedula = Cedula;
        this.Edad = Edad;
        this.Genero = Genero;
        this.F_Contratacion = F_Contratacion;
        this.Puesto = Puesto;
        this.Turno = Turno;
        this.NHoras = NHoras;
        this.empresa = empresa;
        this.img = img;
        this.IdEmpleado = IdEmpleado;
    }
    return Paciente;
}());



/***/ }),

/***/ "./src/app/models/servicio.ts":
/*!************************************!*\
  !*** ./src/app/models/servicio.ts ***!
  \************************************/
/*! exports provided: Servicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Servicio", function() { return Servicio; });
var Servicio = /** @class */ (function () {
    function Servicio(asunto, detalle, fecha, usuario, img, _id) {
        this.asunto = asunto;
        this.detalle = detalle;
        this.fecha = fecha;
        this.usuario = usuario;
        this.img = img;
        this._id = _id;
    }
    return Servicio;
}());



/***/ }),

/***/ "./src/app/models/ultimosM.ts":
/*!************************************!*\
  !*** ./src/app/models/ultimosM.ts ***!
  \************************************/
/*! exports provided: UltimoMeses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimoMeses", function() { return UltimoMeses; });
var UltimoMeses = /** @class */ (function () {
    function UltimoMeses(DolorO, SupuracionS, RuidoTZ, MareoV, SorderaS, SorderaF, TapadoML, DolorMR, GolpesCO, PAA, MedicamentosP, Cedula, IdUltimosM) {
        this.DolorO = DolorO;
        this.SupuracionS = SupuracionS;
        this.RuidoTZ = RuidoTZ;
        this.MareoV = MareoV;
        this.SorderaS = SorderaS;
        this.SorderaF = SorderaF;
        this.TapadoML = TapadoML;
        this.DolorMR = DolorMR;
        this.GolpesCO = GolpesCO;
        this.PAA = PAA;
        this.MedicamentosP = MedicamentosP;
        this.Cedula = Cedula;
        this.IdUltimosM = IdUltimosM;
    }
    return UltimoMeses;
}());

// IdUltimosM
// DolorO
// SupuracionS
// RuidoTZ
// MareoV
// SorderaS
// SorderaF
// TapadoML
// DolorMR
// GolpesCO
// PAA
// MedicamentosP


/***/ }),

/***/ "./src/app/models/usuarios.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/usuarios.model.ts ***!
  \******************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(email, nombre, password, img, role, google, _id) {
        this.email = email;
        this.nombre = nombre;
        this.password = password;
        this.img = img;
        this.role = role;
        this.google = google;
        this._id = _id;
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/pages/account-setting/account-setting.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/account-setting/account-setting.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-login100 p-t-50 p-b-90\">\n\n    <form ngNativeValidate #f=\"ngForm\" (ngSubmit)=\"guardar( f.value )\" class=\"login100-form validate-form flex-sb flex-w\">\n\n        <!-- <div class=\"wrap-input100 validate-input m-b-16\">\n            <input [ngModel]=\"usuario.nombre\" name=\"nombre\" class=\"input100\" type=\"text\" required placeholder=\"Nombre del Usuario\">\n            <span class=\"focus-input100\"></span>\n        </div>\n\n\n        <div class=\"wrap-input100 validate-input m-b-16\">\n            <input [ngModel]=\"usuario.email\" name=\"email\" [disabled]=\"usuario.google\" class=\"input100\" type=\"text\" required placeholder=\"La Contraceña de Usuario\">\n            <span class=\"focus-input100\"></span>\n        </div>\n\n\n        <div class=\"container-login100-form-btn m-t-17\">\n            <button class=\"login100-form-btn\" type=\"submit\">\n\t\t\t\t\t\tSalvar\n\t\t\t\t\t\t</button>\n        </div> -->\n\n        <div class=\"form-group\">\n            <label>Usuario</label>\n            <input [ngModel]=\"usuario.nombre\" name=\"nombre\" type=\"text\" class=\"form-control\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input [ngModel]=\"usuario.email\" name=\"email\" [disabled]=\"usuario.google\" type=\"email\" class=\"form-control\" required>\n        </div>\n\n        <div class=\"container\">\n\n            <button type=\"submit\" class=\"btn btn-primary\">Subir</button>\n\n        </div>\n\n    </form>\n</div>\n\n<div class=\"col-md-5 p-3 mb-2 bg-light text-dark \" align=\"center\">\n\n    <br>\n    <img *ngIf=\"!imagenTemp\" [src]=\"usuario.img | imagen\" class=\"w150\">\n    <img *ngIf=\"imagenTemp\" [src]=\"imagenTemp\" class=\"w150\">\n    <input type=\"file\" (change)=\"seleccionImage($event.target.files[0])\">\n\n    <br>\n    <p></p>\n\n    <div class=\"form-group row\">\n        <div class=\"col-sm-10 \">\n            <button (click)=\"cambiarImagen()\" [disabled]=\"!imagenSubir\" type=\"submit \" class=\"btn btn-primary \"> <i class=\"fa fa-save\"></i> Actualizar Foto</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/account-setting/account-setting.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/account-setting/account-setting.component.ts ***!
  \********************************************************************/
/*! exports provided: AccountSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingComponent", function() { return AccountSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.index */ "./src/app/service/service.index.ts");



var AccountSettingComponent = /** @class */ (function () {
    function AccountSettingComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.usuario = this._usuarioService.usuario;
    }
    AccountSettingComponent.prototype.ngOnInit = function () {
    };
    AccountSettingComponent.prototype.guardar = function (usuario) {
        this.usuario.nombre = usuario.nombre;
        if (!this.usuario.google) {
            this.usuario.email = usuario.email;
        }
        this._usuarioService.actualizarUsuario(this.usuario)
            .subscribe(function (resp) {
            console.log(resp);
        });
    };
    AccountSettingComponent.prototype.seleccionImage = function (archivo) {
        var _this = this;
        if (!archivo) {
            this.imagenSubir = null;
            return;
        }
        if (archivo.type.indexOf('image') < 0) {
            //  swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
            this.imagenSubir = null;
            return;
        }
        this.imagenSubir = archivo;
        // codigo javascript
        var reader = new FileReader();
        var urlImagenTemp = reader.readAsDataURL(archivo);
        reader.onloadend = function () { return _this.imagenTemp = reader.result; };
    };
    AccountSettingComponent.prototype.cambiarImagen = function () {
        this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);
    };
    AccountSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-setting',
            template: __webpack_require__(/*! ./account-setting.component.html */ "./src/app/pages/account-setting/account-setting.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service_index__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], AccountSettingComponent);
    return AccountSettingComponent;
}());



/***/ }),

/***/ "./src/app/pages/computadora/computadora.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/computadora/computadora.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  computadora works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/computadora/computadora.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/computadora/computadora.component.ts ***!
  \************************************************************/
/*! exports provided: ComputadoraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputadoraComponent", function() { return ComputadoraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComputadoraComponent = /** @class */ (function () {
    function ComputadoraComponent() {
    }
    ComputadoraComponent.prototype.ngOnInit = function () {
    };
    ComputadoraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-computadora',
            template: __webpack_require__(/*! ./computadora.component.html */ "./src/app/pages/computadora/computadora.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComputadoraComponent);
    return ComputadoraComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-holder {\r\n    background: url('img05.png');\r\n    width: 25rem;\r\n    height: 25rem;\r\n    margin: 3rem 5rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQWtDO0lBQ2xDLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWhvbGRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaW1hZ2VzL2ltZzA1LnBuZyk7XHJcbiAgICB3aWR0aDogMjVyZW07XHJcbiAgICBoZWlnaHQ6IDI1cmVtO1xyXG4gICAgbWFyZ2luOiAzcmVtIDVyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\n    <div id=\"page-bgtop\">\n        <div id=\"page-bgbtm\">\n\n            <div class=\"image-holder\">\n            </div>\n        </div>\n    </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
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
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/empresas/empresas.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/empresas/empresas.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcHJlc2FzL2VtcHJlc2FzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/empresas/empresas.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/empresas/empresas.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  empresas works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/empresas/empresas.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/empresas/empresas.component.ts ***!
  \******************************************************/
/*! exports provided: EmpresasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasComponent", function() { return EmpresasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmpresasComponent = /** @class */ (function () {
    function EmpresasComponent() {
    }
    EmpresasComponent.prototype.ngOnInit = function () {
    };
    EmpresasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empresas',
            template: __webpack_require__(/*! ./empresas.component.html */ "./src/app/pages/empresas/empresas.component.html"),
            styles: [__webpack_require__(/*! ./empresas.component.css */ "./src/app/pages/empresas/empresas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmpresasComponent);
    return EmpresasComponent;
}());



/***/ }),

/***/ "./src/app/pages/ingpaciente/ingpaciente.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/ingpaciente/ingpaciente.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZ3BhY2llbnRlL2luZ3BhY2llbnRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ingpaciente/ingpaciente.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/ingpaciente/ingpaciente.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ingpaciente works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/ingpaciente/ingpaciente.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/ingpaciente/ingpaciente.component.ts ***!
  \************************************************************/
/*! exports provided: IngpacienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngpacienteComponent", function() { return IngpacienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IngpacienteComponent = /** @class */ (function () {
    function IngpacienteComponent() {
    }
    IngpacienteComponent.prototype.ngOnInit = function () {
    };
    IngpacienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ingpaciente',
            template: __webpack_require__(/*! ./ingpaciente.component.html */ "./src/app/pages/ingpaciente/ingpaciente.component.html"),
            styles: [__webpack_require__(/*! ./ingpaciente.component.css */ "./src/app/pages/ingpaciente/ingpaciente.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IngpacienteComponent);
    return IngpacienteComponent;
}());



/***/ }),

/***/ "./src/app/pages/listarpaceinte/listarpaceinte.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/listarpaceinte/listarpaceinte.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pacientesLista {\r\n    display: inline-block;\r\n    width: 41rem;\r\n}\r\n\r\nlabel {\r\n    line-height: 2;\r\n}\r\n\r\n.table {\r\n    margin-top: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdGFycGFjZWludGUvbGlzdGFycGFjZWludGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3RhcnBhY2VpbnRlL2xpc3RhcnBhY2VpbnRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFjaWVudGVzTGlzdGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQxcmVtO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/listarpaceinte/listarpaceinte.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/listarpaceinte/listarpaceinte.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-vw\">\n    <div class=\"container pacientesLista\">\n        <form action=\"\">\n            <div class=\"form-group\">\n                <label for=\"Cedula\">Numero de Cedula</label>\n                <input #input type=\"text\" class=\"form-control\" id=\"Cedula\" aria-describedby=\"emailHelp\" placeholder=\"Ingrese numero de cedula\">\n                <button (click)=\"buscarPacientes( input.value )\" class=\"btn btn-primary\" style=\"margin-top:1rem\">Buscar</button>\n            </div>\n        </form>\n    </div>\n    <div class=\"container pacientesLista\">\n        <div class=\"row justify-content-center container-row\">\n            <h3 class=\"\">Reporteria de datos personales de paciente</h3>\n        </div>\n        <table class=\"table table-bordered \">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th>Nombre del Paciente</th>\n                    <th>Empresa</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let pacientes of paciente\">\n                    <td>\n                        Nombre del Paciente\n                    </td>\n                    <td>\n                        {{ pacientes.Nombre }}\n                    </td>\n                    <td>\n                </tr>\n                <tr *ngFor=\"let pacientes of paciente\">\n                    <td>\n                        Nombre de la Empresa\n                    </td>\n                    <td>\n                        {{ pacientes.empresa }}\n                    </td>\n                    <td>\n                </tr>\n                <tr *ngFor=\"let pacientes of paciente\">\n                    <td>\n                        Edad del Paciente\n                    </td>\n                    <td>\n                        {{ pacientes.Edad }}\n                    </td>\n                    <td>\n                </tr>\n                <tr *ngFor=\"let pacientes of paciente\">\n                    <td>\n                        Puesto en la Empresa\n                    </td>\n                    <td>\n                        {{ pacientes.Puesto }}\n                    </td>\n                    <td>\n                </tr>\n                <tr *ngFor=\"let pacientes of paciente\">\n                    <td>\n                        Turno en que Labora\n                    </td>\n                    <td>\n                        {{ pacientes.Turno }}\n                    </td>\n                    <td>\n                </tr>\n                <tr *ngFor=\"let pacientes of paciente\">\n                    <td>\n                        Numero de Horas Laborales\n                    </td>\n                    <td>\n                        {{ pacientes.NHoras }}\n                    </td>\n                    <td>\n                </tr>\n                <tr *ngFor=\"let pacientes of paciente\">\n                    <td>\n                        Fecha en que fue Contratado\n                    </td>\n                    <td>\n                        {{ pacientes.F_Contratacion }}\n                    </td>\n                    <td>\n                </tr>\n\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/listarpaceinte/listarpaceinte.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/listarpaceinte/listarpaceinte.component.ts ***!
  \******************************************************************/
/*! exports provided: ListarpaceinteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarpaceinteComponent", function() { return ListarpaceinteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/pacientes/paciente.service */ "./src/app/service/pacientes/paciente.service.ts");
/* harmony import */ var _service_examen_examen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/examen/examen.service */ "./src/app/service/examen/examen.service.ts");




var ListarpaceinteComponent = /** @class */ (function () {
    function ListarpaceinteComponent(_pacienteService, _examenService) {
        this._pacienteService = _pacienteService;
        this._examenService = _examenService;
        this.fecha = new Date();
        this.fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();
        this.paciente = [];
    }
    ListarpaceinteComponent.prototype.ngOnInit = function () {
    };
    ListarpaceinteComponent.prototype.buscarPacientes = function (termino) {
        var _this = this;
        console.log('Cedula Enviada: ' + termino);
        if (termino.length <= 0) {
            return;
        }
        this._pacienteService.buscarPacientes(termino)
            .subscribe(function (resp) {
            _this.paciente = resp;
            console.log(_this.paciente);
        });
        //   console.log('Resultados: ' + this.paciente);   //  [routerLink]="['/otoscopia', pacientes.Cedula]"
        // });
        this.buscarExamen(termino);
    };
    ListarpaceinteComponent.prototype.buscarExamen = function (termino) {
        //   this._examenService.buscarExamen( termino )
        //           .subscribe( ( resp: any ) =>  {
        //             this.paciente = resp;
        //           });
        //           //   console.log(this.paciente);
        //           //   console.log('Resultados: ' + this.paciente);   //  [routerLink]="['/otoscopia', pacientes.Cedula]"
        //         // });
    };
    ListarpaceinteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listarpaceinte',
            template: __webpack_require__(/*! ./listarpaceinte.component.html */ "./src/app/pages/listarpaceinte/listarpaceinte.component.html"),
            styles: [__webpack_require__(/*! ./listarpaceinte.component.css */ "./src/app/pages/listarpaceinte/listarpaceinte.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"], _service_examen_examen_service__WEBPACK_IMPORTED_MODULE_3__["ExamenService"]])
    ], ListarpaceinteComponent);
    return ListarpaceinteComponent;
}());



/***/ }),

/***/ "./src/app/pages/nopagesfound/nopagesfound.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/nopagesfound/nopagesfound.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nopagesfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/nopagesfound/nopagesfound.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/nopagesfound/nopagesfound.component.ts ***!
  \**************************************************************/
/*! exports provided: NopagesfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NopagesfoundComponent", function() { return NopagesfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NopagesfoundComponent = /** @class */ (function () {
    function NopagesfoundComponent() {
    }
    NopagesfoundComponent.prototype.ngOnInit = function () {
    };
    NopagesfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nopagesfound',
            template: __webpack_require__(/*! ./nopagesfound.component.html */ "./src/app/pages/nopagesfound/nopagesfound.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NopagesfoundComponent);
    return NopagesfoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/otoscopia/otoscopia.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/otoscopia/otoscopia.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n    background-color: white;\r\n}\r\n\r\n.container-row {\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n.form-group {\r\n    border-bottom: 1px solid #dddddd;\r\n    line-height: 2;\r\n}\r\n\r\n.porcentage-div label {\r\n    margin-right: 5px;\r\n}\r\n\r\nlabel {\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n}\r\n\r\n.form-check-label {\r\n    padding-left: .25rem;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.inline-content {\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3Rvc2NvcGlhL290b3Njb3BpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdG9zY29waWEvb3Rvc2NvcGlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250YWluZXItcm93IHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbn1cclxuXHJcbi5wb3JjZW50YWdlLWRpdiBsYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogLjI1cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG4uaW5saW5lLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/otoscopia/otoscopia.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/otoscopia/otoscopia.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-vw\">\n    <div class=\"container form-container\">\n        <div class=\"row justify-content-center container-row\">\n            <h3 class=\"\">INFORME</h3>\n        </div>\n        <form [formGroup]=\"forma\" (ngSubmit)=\"GuardarOtoscopia()\">\n            <h4 class=\" text-center \">Otoscopia</h4>\n            <div class=\"form-group \">\n\n                <h5>Oreja</h5>\n                <div class=\"col-3 inline-content\">\n                    <label>Normal: </label>\n                    <!-- <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"NormalD\" name=\"NormalD\" class=\"form-check-input\" type=\"checkbox\" id=\"orejaChkNormal-D\" value=\"SI\">\n                        <label class=\"form-check-label \" for=\"orejaChkNormal-D\">D</label>\n                    </div>\n                    <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"NormalI\" name=\"NormalI\" class=\"form-check-input\" type=\"checkbox\" id=\"orejaChkNormal-I\" value=\"SI\">\n                        <label class=\"form-check-label \" for=\"orejaChkNormal-I\">I</label>\n                    </div> -->\n                    <select formControlName=\"Normal\" name=\"Normal\" id=\"orejaSelNormal\" class=\"form-control\">\n                        <option value=\"No\" selected>Ninguna</option>\n                        <option value=\"Si-D\">Si D</option>\n                        <option value=\"Si-I\">Si I</option>\n                        <option value=\"Ambas\">Ambas</option>\n                    </select>\n                </div>\n                <div class=\"col-3 inline-content\">\n                    <label>Alteracion Congenita</label>\n                    <!-- <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"AlteracionCongenitaD\" name=\"AlteracionCongenitaD\" class=\"form-check-input \" type=\"checkbox\" id=\"orejaAlteracionCongenita-D\" value=\"SI\">\n                        <label class=\"form-check-label \" for=\"orejaAlteracionCongenita-D\">D</label>\n                    </div>\n                    <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"AlteracionCongenitaI\" name=\"AlteracionCongenitaI\" class=\"form-check-input \" type=\"checkbox\" id=\"orejaAlteracionCongenita-I\" value=\"SI\">\n                        <label class=\"form-check-label \" for=\"orejaAlteracionCongenita-I \">I</label>\n                    </div> -->\n                    <select formControlName=\"AlteracionCongenita\" name=\"AlteracionCongenita\" id=\"orejaSelAlteracionCongenita\" class=\"form-control\">\n                        <option value=\"No\" selected>Ninguna</option>\n                        <option value=\"Si-D\">Si D</option>\n                        <option value=\"Si-I\">Si I</option>\n                        <option value=\"Ambas\">Ambas</option>\n                    </select>\n                </div>\n                <div class=\"col-2 inline-content\">\n                    <label>Ausente</label>\n                    <!-- <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"AusenteD\" name=\"AusenteD\" class=\"form-check-input \" type=\"checkbox\" id=\"orejaAusente-D \" value=\"X\">\n                        <label class=\"form-check-label \" for=\"orejaAusente-D \">D</label>\n                    </div>\n                    <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"AusenteI\" name=\"AusenteI\" class=\"form-check-input \" type=\"checkbox\" id=\"orejaAusente-I \" value=\"X\">\n                        <label class=\"form-check-label \" for=\"orejaAusente-I \">I</label>\n                    </div> -->\n                    <select formControlName=\"Ausente\" name=\"Ausente\" id=\"orejaSelAusente\" class=\"form-control\">\n                        <option value=\"No\" selected>Ninguna</option>\n                        <option value=\"Si-D\">Si D</option>\n                        <option value=\"Si-I\">Si I</option>\n                        <option value=\"Ambas\">Ambas</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group \">\n                <h5>Conducto Auditivo Externo</h5>\n                <div class=\"col-3 inline-content\">\n                    <label>Normal</label>\n                    <!-- <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"caeNormalD\" name=\"caeNormalD\" class=\"form-check-input \" type=\"checkbox\" id=\"caeNormal-D \" value=\"1\">\n                        <label class=\"form-check-label \" for=\"caeNormal-D \">D</label>\n                    </div>\n                    <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"caeNormalI\" name=\"caeNormalI\" class=\"form-check-input \" type=\"checkbox\" id=\"caeNormal-I \" value=\"1\">\n                        <label class=\"form-check-label \" for=\"caeNormal-I \">I</label>\n                    </div> -->\n                    <select formControlName=\"caeNormal\" name=\"caeNormal\" id=\"orejaSelcaeNormal\" class=\"form-control\">\n                        <option value=\"No\" selected>Ninguna</option>\n                        <option value=\"Si-D\">Si D</option>\n                        <option value=\"Si-I\">Si I</option>\n                        <option value=\"Ambas\">Ambas</option>\n                    </select>\n                </div>\n\n                <div class=\"col-3 inline-content\">\n                    <label>Colapsado</label>\n                    <!-- <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"ColapsadoD\" name=\"ColapsadoD\" class=\"form-check-input \" type=\"checkbox\" id=\"caeColapsado-D \" value=\"option2 \">\n                        <label class=\"form-check-label \" for=\"caeColapsado-D \">D</label>\n                    </div>\n                    <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"ColapsadoI\" name=\"ColapsadoI\" class=\"form-check-input \" type=\"checkbox\" id=\"caeColapsado-I \" value=\"option2 \">\n                        <label class=\"form-check-label \" for=\"caeColapsado-I \">I</label>\n                    </div> -->\n                    <select formControlName=\"Colapsado\" name=\"Colapsado\" id=\"orejaSelColapsado\" class=\"form-control\">\n                        <option value=\"No\" selected>Ninguna</option>\n                        <option value=\"Si-D\">Si D</option>\n                        <option value=\"Si-I\">Si I</option>\n                        <option value=\"Ambas\">Ambas</option>\n                    </select>\n                </div>\n\n                <div class=\"col-2 inline-content\">\n                    <label>Alteracion Congenita</label>\n                    <!-- <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"CongenitaD\" name=\"CongenitaD\" class=\"form-check-input \" type=\"checkbox\" id=\"caeca-D \" value=\"option2 \">\n                        <label class=\"form-check-label \" for=\"caeca-D \">D</label>\n                    </div>\n                    <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"CongenitaI\" name=\"CongenitaI\" class=\"form-check-input \" type=\"checkbox\" id=\"caeca-I \" value=\"option2 \">\n                        <label class=\"form-check-label \" for=\"caeca-I \">I</label>\n                    </div> -->\n                    <select formControlName=\"Congenita\" name=\"Congenita\" id=\"orejaSelCongenita\" class=\"form-control\">\n                        <option value=\"No\" selected>Ninguna</option>\n                        <option value=\"Si-D\">Si D</option>\n                        <option value=\"Si-I\">Si I</option>\n                        <option value=\"Ambas\">Ambas</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group \">\n                <h5>Cerumen</h5>\n                <div class=\"col-3 inline-content\">\n                    <label><strong>D.</strong></label>\n                    <!-- <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"CerumenDN\" name=\"CerumenDN\" class=\"form-check-input \" type=\"checkbox\" id=\"cerumenNo-D \" value=\"option2 \">\n                        <label class=\"form-check-label \" for=\"cerumenD-D \">No</label>\n                    </div>\n                    <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"CerumenDS\" name=\"CerumenDS\" class=\"form-check-input \" type=\"checkbox\" id=\"cerumenSi-D \" value=\"option2 \">\n                        <label class=\"form-check-label \" for=\"cerumenSi-D \">Si</label>\n                    </div> -->\n                    <select formControlName=\"Cerumen\" name=\"Cerumen\" id=\"orejaSelCerumen\" class=\"form-control\">\n                        <option value=\"Si-D\">Si</option>\n                        <option value=\"No-D\">No</option>\n                    </select>\n                </div>\n                <label>Parcial</label>\n                <div class=\"form-check form-check-inline \">\n                    <div class=\"input-group mb-3 \">\n                        <input formControlName=\"CerumenP\" name=\"CerumenP\" type=\"text\" class=\"form-control cerumenParcialD-input \" placeholder=\"Percentage \">\n                        <div class=\"input-group-append \">\n                            <span class=\"input-group-text \" id=\"basic-addon2 \">%</span>\n                        </div>\n                    </div>\n                </div>\n                <label>Total</label>\n                <div class=\"form-check form-check-inline \">\n                    <div class=\"input-group mb-3 \">\n                        <input formControlName=\"CerumenT\" name=\"CerumenT\" type=\"text\" class=\"form-control cerumenTotalD-input \" placeholder=\"Total \">\n                    </div>\n                </div>\n                <div class=\"col-3 inline-content\">\n                    <label><strong>I.</strong></label>\n                    <!-- <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"CerumenIN\" name=\"CerumenIN\" class=\"form-check-input \" type=\"checkbox\" id=\"cerumenNo-I\" value=\"option2 \">\n                        <label class=\"form-check-label \" for=\"cerumenNo-I \">No</label>\n                    </div>\n                    <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"CerumenIS\" name=\"CerumenIS\" class=\"form-check-input \" type=\"checkbox\" id=\"cerumenSi-I\" value=\"option2 \">\n                        <label class=\"form-check-label \" for=\"cerumenSi-I \">Si</label>\n                    </div> -->\n                    <select formControlName=\"CerumenI\" name=\"CerumenI\" id=\"orejaSelCerumenI\" class=\"form-control\">\n                        <option value=\"Si-I\">Si</option>\n                        <option value=\"No-I\">No</option>\n                   \n                    </select>\n                </div>\n                <label>Parcial</label>\n                <div class=\"form-check form-check-inline porcentage-div \">\n                    <div class=\"input-group mb-3 \">\n                        <input formControlName=\"CerumenIP\" name=\"CerumenIP\" type=\"text \" class=\"form-control cerumenParcialI-input\" placeholder=\"Percentage \">\n                        <div class=\"input-group-append \">\n                            <span class=\"input-group-text \" id=\"basic-addon2 \">%</span>\n                        </div>\n                    </div>\n                </div>\n                <label>Total</label>\n                <div class=\"form-check form-check-inline porcentage-div \">\n                    <div class=\"input-group mb-3 \">\n                        <input formControlName=\"CerumenIT\" name=\"CerumenIT\" type=\"text \" class=\"form-control cerumenTotalI-input\" placeholder=\"Total \">\n                    </div>\n                </div>\n                <label>Extraccion</label>\n                <div class=\"col-3 inline-content\">\n                    <!-- <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"ExtraccionN\" name=\"ExtraccionN\" class=\"form-check-input \" type=\"checkbox\" id=\"cerumentExtraccionNo\" value=\"option2 \">\n                        <label class=\"form-check-label \" for=\"cerumentExtraccionNo \">No</label>\n                    </div>\n                    <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"ExtraccionS\" name=\"ExtraccionS\" class=\"form-check-input \" type=\"checkbox\" id=\"cerumentExtraccionSi\" value=\"option2 \">\n                        <label class=\"form-check-label \" for=\"cerumentExtraccionSi \">Si</label>\n                    </div> -->\n                    <select formControlName=\"Extraccion\" name=\"Extraccion\" id=\"orejaSelcerumentExtraccion\" class=\"form-control\">\n                        <option value=\"No\" selected>No</option>\n                        <option value=\"Si\">Si</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group \">\n                <h5>Membrana Timpanica</h5>\n                <div class=\"col-3 inline-content\">\n                    <label>Opciones</label>\n                    <!-- <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"MembrNacaNorD\" name=\"MembrNacaNorD\" class=\"form-check-input \" type=\"checkbox\" id=\"mtNNormal-D \" value=\"option2 \">\n                        <label class=\"form-check-label \" for=\"mtNNormal-D \">D</label>\n                    </div>\n                    <div class=\"form-check form-check-inline \">\n                        <input formControlName=\"MembrNacaNorI\" name=\"MembrNacaNorI\" class=\"form-check-input \" type=\"checkbox\" id=\"mtNNormal-I \" value=\"option2 \">\n                        <label class=\"form-check-label \" for=\"mtNNormal-I \">I</label>\n                    </div> -->\n                    <select formControlName=\"MembrNacaNor\" name=\"MembrNacaNor\" id=\"orejaSelMembrNacaNor\" class=\"form-control\">\n                        <option value=\"Marcada Normal\" selected>Nacarada Normal</option>\n                        <option value=\"Roja\">Roja</option>\n                        <option value=\"Opaca\">Opaca</option>\n                    </select>\n                </div>\n\n                <!-- <div class=\"col-3 inline-content\">\n                    <label>Roja</label>\n                    <select formControlName=\"MembrNacaRoj\" name=\"MembrNacaRoj\" id=\"orejaSelMembrRoj\" class=\"form-control\">\n                        <option value=\"No\" selected>Ninguna</option>\n                        <option value=\"Si-D\">Si D</option>\n                        <option value=\"Si-I\">Si I</option>\n                        <option value=\"Ambas\">Ambas</option>\n                    </select>\n                </div>\n                <div class=\"col-3 inline-content\">\n                    <label>Opaca</label>\n                    <select formControlName=\"MembrNacaOpc\" name=\"MembrNacaOpc\" id=\"orejaSelMembrOpc\" class=\"form-control\">\n                        <option value=\"No\" selected>Ninguna</option>\n                        <option value=\"Si-D\">Si D</option>\n                        <option value=\"Si-I\">Si I</option>\n                        <option value=\"Ambas\">Ambas</option>\n                    </select>\n                </div> -->\n                <label>Perforada</label>\n                <div class=\"form-check form-check-inline porcentage-div \">\n                    <label>D</label>\n                    <div class=\"input-group mb-3\">\n                        <input formControlName=\"MembrNacaPerD\" name=\"MembrNacaPerD\" type=\"text \" class=\"form-control mtPerforadaD-input\" placeholder=\"Percentage\">\n                        <div class=\"input-group-append \">\n                            <span class=\"input-group-text \" id=\"basic-addon2 \">%</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-check form-check-inline porcentage-div \">\n                    <label>I</label>\n                    <div class=\"input-group mb-3 \">\n                        <input formControlName=\"MembrNacaPerI\" name=\"MembrNacaPerI\" type=\"text \" class=\"form-control mtPerforadaI-input \" placeholder=\"Percentage \">\n                        <div class=\"input-group-append \">\n                            <span class=\"input-group-text \" id=\"basic-addon2 \">%</span>\n                        </div>\n                    </div>\n                </div>\n                <label>Retraida</label>\n                <div class=\"form-check form-check-inline porcentage-div \">\n                    <label>D</label>\n                    <div class=\"input-group mb-3 \">\n                        <input formControlName=\"MembrNacaRetD\" name=\"MembrNacaRetD\" type=\"text \" class=\"form-control mtRetraidaD-input \" placeholder=\"Percentage \">\n                        <div class=\"input-group-append \">\n                            <span class=\"input-group-text \" id=\"basic-addon2 \">%</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-check form-check-inline porcentage-div \">\n                    <label>I</label>\n                    <div class=\"input-group mb-3 \">\n                        <input formControlName=\"MembrNacaRetI\" name=\"MembrNacaRetI\" type=\"text \" class=\"form-control mtRetraidaI-input \" placeholder=\"Percentage \">\n                        <div class=\"input-group-append \">\n                            <span class=\"input-group-text \" id=\"basic-addon2 \">%</span>\n                        </div>\n                    </div>\n                </div>\n                <label>Monomerica</label>\n                <div class=\"form-check form-check-inline porcentage-div \">\n                    <label>D</label>\n                    <div class=\"input-group mb-3 \">\n                        <input formControlName=\"MembrNacaMonoD\" name=\"MembrNacaMonoD\" type=\"text \" class=\"form-control mtMonomericaD-input \" placeholder=\"Percentage \">\n                        <div class=\"input-group-append \">\n                            <span class=\"input-group-text \" id=\"basic-addon2 \">%</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-check form-check-inline porcentage-div \">\n                    <label>I</label>\n                    <div class=\"input-group mb-3 \">\n                        <input formControlName=\"MembrNacaMonoI\" name=\"MembrNacaMonoI\" type=\"text \" class=\"form-control mtMonomericaI-input \" placeholder=\"Percentage \">\n                        <div class=\"input-group-append \">\n                            <span class=\"input-group-text \" id=\"basic-addon2 \">%</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group \">\n                <h5>Otorragia</h5>\n                <div class=\"input-group col-5 \">\n                    <div class=\"input-group-prepend \">\n                        <label class=\"input-group-text \" for=\"mtOtorragia \">Opciones</label>\n                    </div>\n                    <select formControlName=\"Otorragia\" name=\"Otorragia\" class=\"custom-select \" id=\"mtOtorragia \">\n                          <option selected value=\"Ninguno \">Ninguno</option>\n                          <option value=\"Izquierdo \">Izquierdo</option>\n                          <option value=\"Derecho \">Derecho</option>\n                          <option value=\"Ambos \">Ambos</option>\n                        </select>\n                </div>\n            </div>\n            <div class=\"form-group \">\n                <h5>Otorrea</h5>\n                <div class=\"input-group col-5 \">\n                    <div class=\"input-group-prepend \">\n                        <label class=\"input-group-text \" for=\"mtOtorrea \">Opciones</label>\n                    </div>\n                    <select formControlName=\"Otorrea\" name=\"Otorrea\" class=\"custom-select\" id=\"mtOtorrea \">\n                          <option selected value=\"Ninguno \">Ninguno</option>\n                          <option value=\"Izquierdo \">Izquierdo</option>\n                          <option value=\"Derecho \">Derecho</option>\n                          <option value=\"Ambos \">Ambos</option>\n                        </select>\n                </div>\n            </div>\n            <div class=\"form-group \">\n                <h5>Otitis 1/2 serosa</h5>\n                <div class=\"input-group col-5 \">\n                    <div class=\"input-group-prepend \">\n                        <label class=\"input-group-text \" for=\"mtOtitis \">Opciones</label>\n                    </div>\n                    <select formControlName=\"Otitis\" name=\"Otitis\" class=\"custom-select \" id=\"mtOtitis \">\n                          <option selected value=\"Ninguno \">Ninguno</option>\n                          <option value=\"Izquierdo \">Izquierdo</option>\n                          <option value=\"Derecho \">Derecho</option>\n                          <option value=\"Ambos \">Ambos</option>\n                        </select>\n                </div>\n            </div>\n            <div class=\"form-group \">\n                <label for=\"exampleFormControlTextarea1 \"><h5>Otros hallazgos</h5></label>\n                <textarea formControlName=\"hallazgos\" name=\"hallazgos\" class=\"form-control otitistxtArea \" id=\"exampleFormControlTextarea1 \" rows=\"2 \"></textarea>\n            </div>\n            <br>\n            <h4 class=\"text-center \">Audiograma</h4>\n            <div class=\"form-group \">\n                <h5>Normal D</h5>\n                <label>Con perfil plano</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"NDconperfilplano\" name=\"NDconperfilplano\" class=\"custom-select\" class=\"form-check-input \" type=\"checkbox\" id=\"perfilPlano-D \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NDconperfilplano\" name=\"NDconperfilplano\" class=\"form-check-input\" type=\"radio\" name=\"NDconperfilplano\" id=\"perfilPlano-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"perfilPlano-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NDconperfilplano\" name=\"NDconperfilplano\" class=\"form-check-input\" type=\"radio\" name=\"NDconperfilplano\" id=\"perfilPlano-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"perfilPlano-D-no\">No</label>\n                </div>\n                <label>Descendente</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"NDdescendente\" name=\"NDdescendente\" class=\"custom-select\" class=\"form-check-input \" type=\"checkbox\" id=\"descendente-D \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NDdescendente\" name=\"NDdescendente\" class=\"form-check-input\" type=\"radio\" name=\"NDdescendente\" id=\"descendente-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"descendente-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NDdescendente\" name=\"NDdescendente\" class=\"form-check-input\" type=\"radio\" name=\"NDdescendente\" id=\"descendente-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"descendente-D-no\">No</label>\n                </div>\n                <label>Ascendente</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"NDascendente\" name=\"NDascendente\" class=\"form-check-input \" type=\"checkbox\" id=\"ascendente-D\" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NDascendente\" name=\"NDascendente\" class=\"form-check-input\" type=\"radio\" name=\"NDascendente\" id=\"ascendente-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"ascendente-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NDascendente\" name=\"NDascendente\" class=\"form-check-input\" type=\"radio\" name=\"NDascendente\" id=\"ascendente-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"ascendente-D-no\">No</label>\n                </div>\n                <label>Batea</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"NDbatea\" name=\"NDbatea\" class=\"form-check-input \" type=\"checkbox\" id=\"batea-D \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NDbatea\" name=\"NDbatea\" class=\"form-check-input\" type=\"radio\" name=\"NDbatea\" id=\"batea-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"batea-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NDbatea\" name=\"NDbatea\" class=\"form-check-input\" type=\"radio\" name=\"NDbatea\" id=\"batea-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"batea-D-no\">No</label>\n                </div>\n                <label>Campana</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"NDcampana\" name=\"NDcampana\" class=\"form-check-input \" type=\"checkbox\" id=\"campana-D \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NDcampana\" name=\"NDcampana\" class=\"form-check-input\" type=\"radio\" name=\"NDcampana\" id=\"campana-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"campana-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NDcampana\" name=\"NDcampana\" class=\"form-check-input\" type=\"radio\" name=\"NDcampana\" id=\"campana-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"campana-D-no\">No</label>\n                </div>\n                <label>Mixto</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"NDmixto\" name=\"NDmixto\" class=\"form-check-input \" type=\"checkbox\" id=\"mixto-D \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NDmixto\" name=\"NDmixto\" class=\"form-check-input\" type=\"radio\" name=\"NDmixto\" id=\"mixto-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"mixto-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NDmixto\" name=\"NDmixto\" class=\"form-check-input\" type=\"radio\" name=\"NDmixto\" id=\"mixto-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"mixto-D-no\">No</label>\n                </div>\n            </div>\n            <div class=\"form-group \">\n                <h5>Normal I</h5>\n                <label>Con perfil plano</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"NIconperfilplano\" name=\"NIconperfilplano\" class=\"form-check-input\" type=\"checkbox\" id=\"perfilPlano-I\" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NIconperfilplano\" name=\"NIconperfilplano\" class=\"form-check-input\" type=\"radio\" name=\"NIconperfilplano\" id=\"perfilPlano-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"perfilPlano-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NIconperfilplano\" name=\"NIconperfilplano\" class=\"form-check-input\" type=\"radio\" name=\"NIconperfilplano\" id=\"perfilPlano-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"perfilPlano-I-no\">No</label>\n                </div>\n                <label>Descendente</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"NIdescendente\" name=\"NIdescendente\" class=\"form-check-input \" type=\"checkbox\" id=\"descendente-I\" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NIdescendente\" name=\"NIdescendente\" class=\"form-check-input\" type=\"radio\" name=\"NIdescendente\" id=\"descendente-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"descendente-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NIdescendente\" name=\"NIdescendente\" class=\"form-check-input\" type=\"radio\" name=\"NIdescendente\" id=\"descendente-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"descendente-I-no\">No</label>\n                </div>\n                <label>Ascendente</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"NIascendente\" name=\"NIascendente\" class=\"form-check-input \" type=\"checkbox\" id=\"ascendente-I\" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NIascendente\" name=\"NIascendente\" class=\"form-check-input\" type=\"radio\" name=\"NIascendente\" id=\"ascendente-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"ascendente-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NIascendente\" name=\"NIascendente\" class=\"form-check-input\" type=\"radio\" name=\"NIascendente\" id=\"ascendente-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"ascendente-I-no\">No</label>\n                </div>\n                <label>Batea</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"NIbatea\" name=\"NIbatea\" class=\"form-check-input \" type=\"checkbox\" id=\"batea-I\" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NIbatea\" name=\"NIbatea\" class=\"form-check-input\" type=\"radio\" name=\"NIbatea\" id=\"batea-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"batea-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NIbatea\" name=\"NIbatea\" class=\"form-check-input\" type=\"radio\" name=\"NIbatea\" id=\"batea-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"batea-I-no\">No</label>\n                </div>\n                <label>Campana</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"NIcampana\" name=\"NIcampana\" class=\"form-check-input \" type=\"checkbox\" id=\"campana-I \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NIcampana\" name=\"NIcampana\" class=\"form-check-input\" type=\"radio\" name=\"NIcampana\" id=\"campana-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"campana-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NIcampana\" name=\"NIcampana\" class=\"form-check-input\" type=\"radio\" name=\"NIcampana\" id=\"campana-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"campana-I-no\">No</label>\n                </div>\n                <label>Mixto</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"NImixto\" name=\"NImixto\" class=\"form-check-input \" type=\"checkbox\" id=\"mixto-I \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NImixto\" name=\"NImixto\" class=\"form-check-input\" type=\"radio\" name=\"NImixto\" id=\"mixto-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"mixto-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"NImixto\" name=\"NImixto\" class=\"form-check-input\" type=\"radio\" name=\"NImixto\" id=\"mixto-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"mixto-I-no\">No</label>\n                </div>\n            </div>\n            <div class=\"form-group \">\n                <h5>Perdida D</h5>\n                <label>Superficial</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDsuperficial\" name=\"PDsuperficial\" class=\"form-check-input\" type=\"checkbox\" id=\"superficial-D \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDsuperficial\" name=\"PDsuperficial\" class=\"form-check-input\" type=\"radio\" name=\"PDsuperficial\" id=\"superficial-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"superficial-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDsuperficial\" name=\"PDsuperficial\" class=\"form-check-input\" type=\"radio\" name=\"PDsuperficial\" id=\"superficial-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"superficial-D-no\">No</label>\n                </div>\n                <label>Moderada</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDmoderada\" name=\"PDmoderada\" class=\"form-check-input \" type=\"checkbox\" id=\"moderada-D \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDmoderada\" name=\"PDmoderada\" class=\"form-check-input\" type=\"radio\" name=\"PDmoderada\" id=\"moderada-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"moderada-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDmoderada\" name=\"PDmoderada\" class=\"form-check-input\" type=\"radio\" name=\"PDmoderada\" id=\"moderada-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"moderada-D-no\">No</label>\n                </div>\n                <label>Moderada severa</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDmoderadas\" name=\"PDmoderadas\" class=\"form-check-input \" type=\"checkbox\" id=\"moderadaSevera-D \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDmoderadas\" name=\"PDmoderadas\" class=\"form-check-input\" type=\"radio\" name=\"PDmoderadas\" id=\"moderadaSevera-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"moderadaSevera-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDmoderadas\" name=\"PDmoderadas\" class=\"form-check-input\" type=\"radio\" name=\"PDmoderadas\" id=\"moderadaSevera-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"moderadaSevera-D-no\">No</label>\n                </div>\n                <label>Severa</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDsevera\" name=\"PDsevera\" class=\"form-check-input \" type=\"checkbox\" id=\"Severa-D \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDsevera\" name=\"PDsevera\" class=\"form-check-input\" type=\"radio\" name=\"PDsevera\" id=\"Severa-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"Severa-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDsevera\" name=\"PDsevera\" class=\"form-check-input\" type=\"radio\" name=\"PDsevera\" id=\"Severa-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"Severa-D-no\">No</label>\n                </div>\n                <label>Profunda</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDprofunda\" name=\"PDprofunda\" class=\"form-check-input \" type=\"checkbox\" id=\"PDprofunda-D \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDprofunda\" name=\"PDprofunda\" class=\"form-check-input\" type=\"radio\" name=\"PDprofunda\" id=\"PDprofunda-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PDprofunda-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDprofunda\" name=\"PDprofunda\" class=\"form-check-input\" type=\"radio\" name=\"PDprofunda\" id=\"PDprofunda-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PDprofunda-D-no\">No</label>\n                </div>\n                <label><strong>Perfil plano</strong></label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDperfilp\" name=\"PDperfilp\" class=\"form-check-input \" type=\"checkbox\" id=\"PDperfilp-D \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDperfilp\" name=\"PDperfilp\" class=\"form-check-input\" type=\"radio\" name=\"PDperfilp\" id=\"PDperfilp-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PDperfilp-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDperfilp\" name=\"PDperfilp\" class=\"form-check-input\" type=\"radio\" name=\"PDperfilp\" id=\"PDperfilp-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PDperfilp-D-no\">No</label>\n                </div>\n                <label>Descendente</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDdescendente\" name=\"PDdescendente\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDdescendente\" name=\"PDdescendente\" class=\"form-check-input\" type=\"radio\" name=\"PDdescendente\" id=\"PDdescendente-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PDdescendente-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDdescendente\" name=\"PDdescendente\" class=\"form-check-input\" type=\"radio\" name=\"PDdescendente\" id=\"PDdescendente-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PDdescendente-D-no\">No</label>\n                </div>\n                <label>Ascendente</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDascendente\" name=\"PDascendente\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDascendente\" name=\"PDascendente\" class=\"form-check-input\" type=\"radio\" name=\"PDascendente\" id=\"PDascendente-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PDascendente-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDascendente\" name=\"PDascendente\" class=\"form-check-input\" type=\"radio\" name=\"PDascendente\" id=\"PDascendente-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PDascendente-D-no\">No</label>\n                </div>\n                <label>Batea</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDbatea\" name=\"PDbatea\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDbatea\" name=\"PDbatea\" class=\"form-check-input\" type=\"radio\" name=\"PDbatea\" id=\"PDbatea-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PDbatea-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDbatea\" name=\"PDbatea\" class=\"form-check-input\" type=\"radio\" name=\"PDbatea\" id=\"PDbatea-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PDbatea-D-no\">No</label>\n                </div>\n                <label>Campana</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDcampana\" name=\"PDcampana\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDcampana\" name=\"PDcampana\" class=\"form-check-input\" type=\"radio\" name=\"PDcampana\" id=\"PDcampana-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PDcampana-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDcampana\" name=\"PDcampana\" class=\"form-check-input\" type=\"radio\" name=\"PDcampana\" id=\"PDcampana-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PDcampana-D-no\">No</label>\n                </div>\n                <label>Mixto</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDmixto\" name=\"PDmixto\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDmixto\" name=\"PDmixto\" class=\"form-check-input\" type=\"radio\" name=\"PDmixto\" id=\"PDmixto-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PDmixto-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDmixto\" name=\"PDmixto\" class=\"form-check-input\" type=\"radio\" name=\"PDmixto\" id=\"PDmixto-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PDmixto-D-no\">No</label>\n                </div>\n                <label><strong>Caracter:</strong> Conductivo</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDcaracterC\" name=\"PDcaracterC\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDcaracterC\" name=\"PDcaracterC\" class=\"form-check-input\" type=\"radio\" name=\"PDcaracterC\" id=\"PDcaracterC-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PDcaracterC-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDcaracterC\" name=\"PDcaracterC\" class=\"form-check-input\" type=\"radio\" name=\"PDcaracterC\" id=\"PDcaracterC-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PDcaracterC-D-no\">No</label>\n                </div>\n                <label>Sensorial</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDsensorial\" name=\"PDsensorial\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDsensorial\" name=\"PDsensorial\" class=\"form-check-input\" type=\"radio\" name=\"PDsensorial\" id=\"PDsensorial-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PDsensorial-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDsensorial\" name=\"PDsensorial\" class=\"form-check-input\" type=\"radio\" name=\"PDsensorial\" id=\"PDsensorial-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PDsensorial-D-no\">No</label>\n                </div>\n                <label>Mixto</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PDmixto2\" name=\"PDmixto2\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDmixto2\" name=\"PDmixto2\" class=\"form-check-input\" type=\"radio\" name=\"PDmixto2\" id=\"PDmixto2-D-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PDmixto2-D-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PDmixto2\" name=\"PDmixto2\" class=\"form-check-input\" type=\"radio\" name=\"PDmixto2\" id=\"PDmixto2-D-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PDmixto2-D-no\">No</label>\n                </div>\n            </div>\n            <div class=\"form-group \">\n                <h5>Perdida I</h5>\n                <label>Superficial</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PIsuperficial\" name=\"PIsuperficial\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIsuperficial\" name=\"PIsuperficial\" class=\"form-check-input\" type=\"radio\" name=\"PIsuperficial\" id=\"PIsuperficial-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PIsuperficial-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIsuperficial\" name=\"PIsuperficial\" class=\"form-check-input\" type=\"radio\" name=\"PIsuperficial\" id=\"PIsuperficial-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PIsuperficial-I-no\">No</label>\n                </div>\n                <label>Moderada</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PImoderada\" name=\"PImoderada\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PImoderada\" name=\"PImoderada\" class=\"form-check-input\" type=\"radio\" name=\"PImoderada\" id=\"PImoderada-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PImoderada-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PImoderada\" name=\"PImoderada\" class=\"form-check-input\" type=\"radio\" name=\"PImoderada\" id=\"PImoderada-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PImoderada-I-no\">No</label>\n                </div>\n                <label>Moderada severa</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PImoderadas\" name=\"PImoderadas\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PImoderadas\" name=\"PImoderadas\" class=\"form-check-input\" type=\"radio\" name=\"PImoderadas\" id=\"PImoderadas-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PImoderadas-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PImoderadas\" name=\"PImoderadas\" class=\"form-check-input\" type=\"radio\" name=\"PImoderadas\" id=\"PImoderadas-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PImoderadas-I-no\">No</label>\n                </div>\n                <label>Severa</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PIsevera\" name=\"PIsevera\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIsevera\" name=\"PIsevera\" class=\"form-check-input\" type=\"radio\" name=\"PIsevera\" id=\"PIsevera-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PIsevera-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIsevera\" name=\"PIsevera\" class=\"form-check-input\" type=\"radio\" name=\"PIsevera\" id=\"PIsevera-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PIsevera-I-no\">No</label>\n                </div>\n                <label>Profunda</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PIprofunda\" name=\"PIprofunda\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIprofunda\" name=\"PIprofunda\" class=\"form-check-input\" type=\"radio\" name=\"PIprofunda\" id=\"PIprofunda-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PIprofunda-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIprofunda\" name=\"PIprofunda\" class=\"form-check-input\" type=\"radio\" name=\"PIprofunda\" id=\"PIprofunda-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PIprofunda-I-no\">No</label>\n                </div>\n                <label><strong>Perfil plano</strong></label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PIperfilp\" name=\"PIperfilp\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIperfilp\" name=\"PIperfilp\" class=\"form-check-input\" type=\"radio\" name=\"PIperfilp\" id=\"PIperfilp-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PIperfilp-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIperfilp\" name=\"PIperfilp\" class=\"form-check-input\" type=\"radio\" name=\"PIperfilp\" id=\"PIperfilp-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PIperfilp-I-no\">No</label>\n                </div>\n                <label>Descendente</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PIdescendente\" name=\"PIdescendente\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIdescendente\" name=\"PIdescendente\" class=\"form-check-input\" type=\"radio\" name=\"PIdescendente\" id=\"PIdescendente-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PIdescendente-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIdescendente\" name=\"PIdescendente\" class=\"form-check-input\" type=\"radio\" name=\"PIdescendente\" id=\"PIdescendente-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PIdescendente-I-no\">No</label>\n                </div>\n                <label>Ascendente</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PIascendente\" name=\"PIascendente\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIascendente\" name=\"PIascendente\" class=\"form-check-input\" type=\"radio\" name=\"PIascendente\" id=\"PIascendente-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PIascendente-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIascendente\" name=\"PIascendente\" class=\"form-check-input\" type=\"radio\" name=\"PIascendente\" id=\"PIascendente-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PIascendente-I-no\">No</label>\n                </div>\n                <label>Batea</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PIbatea\" name=\"PIbatea\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIbatea\" name=\"PIbatea\" class=\"form-check-input\" type=\"radio\" name=\"PIbatea\" id=\"PIbatea-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PIbatea-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIbatea\" name=\"PIbatea\" class=\"form-check-input\" type=\"radio\" name=\"PIbatea\" id=\"PIbatea-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PIbatea-I-no\">No</label>\n                </div>\n                <label>Campana</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PIcampana\" name=\"PIcampana\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIcampana\" name=\"PIcampana\" class=\"form-check-input\" type=\"radio\" name=\"PIcampana\" id=\"PIcampana-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PIcampana-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIcampana\" name=\"PIcampana\" class=\"form-check-input\" type=\"radio\" name=\"PIcampana\" id=\"PIcampana-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PIcampana-I-no\">No</label>\n                </div>\n                <label>Mixto</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PImixto\" name=\"PImixto\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PImixto\" name=\"PImixto\" class=\"form-check-input\" type=\"radio\" name=\"PImixto\" id=\"PImixto-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PImixto-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PImixto\" name=\"PImixto\" class=\"form-check-input\" type=\"radio\" name=\"PImixto\" id=\"PImixto-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PImixto-I-no\">No</label>\n                </div>\n                <label><strong>Caracter:</strong> Conductivo</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PIcaracterC\" name=\"PIcaracterC\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIcaracterC\" name=\"PIcaracterC\" class=\"form-check-input\" type=\"radio\" name=\"PIcaracterC\" id=\"PIcaracterC-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PIcaracterC-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIcaracterC\" name=\"PIcaracterC\" class=\"form-check-input\" type=\"radio\" name=\"PIcaracterC\" id=\"PIcaracterC-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PIcaracterC-I-no\">No</label>\n                </div>\n                <label>Sensorial</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PIsensorial\" name=\"PIsensorial\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIsensorial\" name=\"PIsensorial\" class=\"form-check-input\" type=\"radio\" name=\"PIsensorial\" id=\"PIsensorial-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PIsensorial-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PIsensorial\" name=\"PIsensorial\" class=\"form-check-input\" type=\"radio\" name=\"PIsensorial\" id=\"PIsensorial-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PIsensorial-I-no\">No</label>\n                </div>\n                <label>Mixto</label>\n                <!-- <div class=\"form-check form-check-inline \">\n                    <input formControlName=\"PImixto2\" name=\"PImixto2\" class=\"form-check-input \" type=\"checkbox\" id=\"inlineCheckbox2 \" value=\"option2 \">\n                </div> -->\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PImixto2\" name=\"PImixto2\" class=\"form-check-input\" type=\"radio\" name=\"PImixto2\" id=\"PImixto2-I-si\" value=\"Si\">\n                    <label class=\"form-check-label\" for=\"PImixto2-I-si\">Si</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input formControlName=\"PImixto2\" name=\"PImixto2\" class=\"form-check-input\" type=\"radio\" name=\"PImixto2\" id=\"PImixto2-I-no\" value=\"No\">\n                    <label class=\"form-check-label\" for=\"PImixto2-I-no\">No</label>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <h5>Muescas OD</h5>\n                <label for=\"DMuescas-D\">Escriba las frecuencas</label>\n                <input formControlName=\"MuescaOD\" name=\"MuescaOD\" type=\"text\" class=\"form-control\" id=\"DMuescas-D\" placeholder=\"Frecuencias\">\n                <small>Separe las frecuencias con ,</small>\n            </div>\n            <div class=\"form-group\">\n                <h5>Muescas OI</h5>\n                <label for=\"DMuescas-I\">Escriba las frecuencas</label>\n                <input formControlName=\"MuescaOI\" name=\"MuescaOI\" type=\"text\" class=\"form-control\" id=\"DMuescas-I\" placeholder=\"Frecuencias\">\n                <small>Separe las frecuencias con ,</small>\n            </div>\n            <div class=\"form-group \">\n                <label for=\"FNhallazgos \"><h5>Otros hallazgos</h5></label>\n                <textarea formControlName=\"FNhallazgos\" name=\"FNhallazgos\" class=\"form-control otitistxtArea \" id=\"FNhallazgos \" rows=\"2 \"></textarea>\n            </div>\n            <div class=\"container\">\n                <br>\n                <!-- <img *ngIf=\"!imagenTemp\" [src]=\"paciente.img | imagen\" class=\"w150\"> -->\n                <img *ngIf=\"imagenTemp\" [src]=\"imagenTemp\" class=\"w150\">\n                <input type=\"file\" (change)=\"seleccionImage($event.target.files[0])\">\n\n                <br>\n                <p></p>\n                <a style=\"font-size: 25px\" href=\"http://audsim.com/audgen/AudGen.html\" target=\"_blank\">Examen de Audiologia</a>\n                <button (click)=\"cambiarImagen()\" [disabled]=\"!imagenSubir\" style=\"margin-left: 3rem\" class=\"btn btn-primary\">Subir examen</button>\n            </div>\n\n            <div class=\"container\" style=\"margin-top: 5rem\">\n                <button type=\"submit\" class=\"btn btn-primary\">Subir</button>\n                <!-- onclick=\" this.disabled=true; this.value='Enviado' ; this.form.submit() \" -->\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/otoscopia/otoscopia.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/otoscopia/otoscopia.component.ts ***!
  \********************************************************/
/*! exports provided: OtoscopiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtoscopiaComponent", function() { return OtoscopiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/pacientes/paciente.service */ "./src/app/service/pacientes/paciente.service.ts");
/* harmony import */ var _models_Otoscopia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/Otoscopia */ "./src/app/models/Otoscopia.ts");
/* harmony import */ var _models_audiograma__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/audiograma */ "./src/app/models/audiograma.ts");
/* harmony import */ var _service_otoscopia_otoscopia_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/otoscopia/otoscopia.service */ "./src/app/service/otoscopia/otoscopia.service.ts");
/* harmony import */ var _service_audiograma_audiograma_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/audiograma/audiograma.service */ "./src/app/service/audiograma/audiograma.service.ts");









var OtoscopiaComponent = /** @class */ (function () {
    function OtoscopiaComponent(_otoscopia, _audiograma, _paciente, activatedRoute, router) {
        var _this = this;
        this._otoscopia = _otoscopia;
        this._audiograma = _audiograma;
        this._paciente = _paciente;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.fecha = new Date();
        this.fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();
        this.otoscopia = [];
        this.audiograma = [];
        activatedRoute.params.subscribe(function (params) {
            var cedula = params['Cedula'];
            _this.cedulas = cedula;
            if (cedula !== 'nuevo') {
                //   console.log('El Numero de Cedula es ');
                _this.cargarPaciente(cedula);
            }
        });
    }
    OtoscopiaComponent.prototype.ngOnInit = function () {
        // this.pacientes = this._paciente.paciente;
        // console.log(this.paciente.Nombre);
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Normal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            AlteracionCongenita: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Ausente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            caeNormal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Colapsado: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Congenita: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Cerumen: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            CerumenP: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            CerumenT: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            CerumenI: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            CerumenIP: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            CerumenIT: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Otorragia: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Otorrea: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Otitis: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            hallazgos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Extraccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            //////////////////////////////////////////
            MembrNacaNor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ////////////////////////
            MembrNacaPerD: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            MembrNacaPerI: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            MembrNacaRetD: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            MembrNacaRetI: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            MembrNacaMonoD: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            MembrNacaMonoI: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            NDconperfilplano: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            NDdescendente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            NDascendente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            NDbatea: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            NDcampana: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            NDmixto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            NIconperfilplano: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            NIdescendente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            NIascendente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            NIbatea: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            NIcampana: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            NImixto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDsuperficial: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDmoderada: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDmoderadas: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDsevera: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDprofunda: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDperfilp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDdescendente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDascendente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDbatea: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDcampana: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDmixto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDcaracterC: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDsensorial: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PDmixto2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PIsuperficial: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PImoderada: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PImoderadas: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PIsevera: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PIprofunda: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PIperfilp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PIdescendente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PIascendente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PIbatea: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PIcampana: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PImixto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PIcaracterC: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PIsensorial: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PImixto2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            MuescaOD: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            MuescaOI: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            FNhallazgos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    OtoscopiaComponent.prototype.GuardarOtoscopia = function () {
        var otoscopia = new _models_Otoscopia__WEBPACK_IMPORTED_MODULE_5__["OtoscopiaEx"](this.forma.value.Normal, this.forma.value.AlteracionCongenita, this.forma.value.Ausente, this.forma.value.caeNormal, this.forma.value.Colapsado, this.forma.value.Congenita, this.forma.value.Cerumen, this.forma.value.CerumenP, this.forma.value.CerumenT, this.forma.value.CerumenI, this.forma.value.CerumenIP, this.forma.value.CerumenIT, this.forma.value.Extraccion, this.forma.value.MembrNacaNor, this.forma.value.MembrNacaPerD, this.forma.value.MembrNacaPerI, this.forma.value.MembrNacaRetD, this.forma.value.MembrNacaRetI, this.forma.value.MembrNacaMonoD, this.forma.value.MembrNacaMonoI, this.forma.value.Otorragia, this.forma.value.Otorrea, this.forma.value.Otitis, this.forma.value.hallazgos, this.cedulas);
        this._otoscopia.VerificarOtoscopia(this.cedulas, otoscopia).subscribe();
        // this._otoscopia.crearOtoscopia( otoscopia)
        //      .subscribe((resp: any) => {
        //     console.log( resp );
        // });
        console.log(otoscopia);
        this.GuardarAudiograma();
    };
    OtoscopiaComponent.prototype.GuardarAudiograma = function () {
        var audiograma = new _models_audiograma__WEBPACK_IMPORTED_MODULE_6__["AudiogramaEx"](this.forma.value.NDconperfilplano, this.forma.value.NDdescendente, this.forma.value.NDascendente, this.forma.value.NDbatea, this.forma.value.NDcampana, this.forma.value.NDmixto, this.forma.value.NIconperfilplano, this.forma.value.NIdescendente, this.forma.value.NIascendente, this.forma.value.NIbatea, this.forma.value.NIcampana, this.forma.value.NImixto, this.forma.value.PDsuperficial, this.forma.value.PDmoderada, this.forma.value.PDmoderadas, this.forma.value.PDsevera, this.forma.value.PDprofunda, this.forma.value.PDperfilp, this.forma.value.PDdescendente, this.forma.value.PDascendente, this.forma.value.PDbatea, this.forma.value.PDcampana, this.forma.value.PDmixto, this.forma.value.PDcaracterC, this.forma.value.PDsensorial, this.forma.value.PDmixto2, this.forma.value.PIsuperficial, this.forma.value.PImoderada, this.forma.value.PImoderadas, this.forma.value.PIsevera, this.forma.value.PIprofunda, this.forma.value.PIperfilp, this.forma.value.PIdescendente, this.forma.value.PIascendente, this.forma.value.PIbatea, this.forma.value.PIcampana, this.forma.value.PImixto, this.forma.value.PIcaracterC, this.forma.value.PIsensorial, this.forma.value.PImixto2, this.forma.value.MuescaOD, this.forma.value.MuescaOI, this.forma.value.FNhallazgos, this.cedulas);
        this._audiograma.VerificarAudiograma(this.cedulas, audiograma).subscribe();
        console.log(audiograma);
        //  this._audiograma.crearAudiograma(audiograma)
        //  .subscribe((resp: any) => {
        //  console.log( resp );
        // this.router.navigate(['/pacientes']);
        //    });
    };
    OtoscopiaComponent.prototype.seleccionImage = function (archivo) {
        var _this = this;
        console.log(event);
        if (!archivo) {
            this.imagenSubir = null;
            return;
        }
        if (archivo.type.indexOf('image') < 0) {
            //  swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
            this.imagenSubir = null;
            return;
        }
        this.imagenSubir = archivo;
        // codigo javascript
        var reader = new FileReader();
        var urlImagenTemp = reader.readAsDataURL(archivo);
        reader.onloadend = function () { return _this.imagenTemp = reader.result; };
    };
    OtoscopiaComponent.prototype.cambiarImagen = function () {
        this._paciente.cambiarImagen(this.imagenSubir, this.cedulas);
    };
    OtoscopiaComponent.prototype.cargarPaciente = function (cedula) {
        console.log('La cedula Capturada es ' + cedula);
        // this._paciente.buscarPacientes( cedula )
        // .subscribe( pacientes =>  this.paciente = pacientes );
    };
    OtoscopiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otoscopia',
            template: __webpack_require__(/*! ./otoscopia.component.html */ "./src/app/pages/otoscopia/otoscopia.component.html"),
            styles: [__webpack_require__(/*! ./otoscopia.component.css */ "./src/app/pages/otoscopia/otoscopia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_otoscopia_otoscopia_service__WEBPACK_IMPORTED_MODULE_7__["OtoscopiaService"], _service_audiograma_audiograma_service__WEBPACK_IMPORTED_MODULE_8__["AudiogramaService"], _service_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_4__["PacienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OtoscopiaComponent);
    return OtoscopiaComponent;
}());



/***/ }),

/***/ "./src/app/pages/pacientes/pacientes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/pacientes/pacientes.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n    background-color: white;\r\n}\r\n\r\nlabel,\r\ninput {\r\n    display: inline-block;\r\n}\r\n\r\n.date-input {\r\n    display: inline-block;\r\n}\r\n\r\n.date-label {\r\n    display: block !important;\r\n}\r\n\r\n.check-div {\r\n    display: inline-block;\r\n}\r\n\r\n.input-inline {\r\n    display: inline-block;\r\n}\r\n\r\n.form-group {\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 15px 0;\r\n    margin-bottom: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFjaWVudGVzL3BhY2llbnRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0NBQzNCOztBQUVEOztJQUVJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFjaWVudGVzL3BhY2llbnRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5sYWJlbCxcclxuaW5wdXQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZGF0ZS1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kYXRlLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGVjay1kaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaW5wdXQtaW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/pacientes/pacientes.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/pacientes/pacientes.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrap-login100 p-t-50 p-b-90\">\n\n    <form [formGroup]=\"forma\" class=\"login100-form validate-form flex-sb flex-w\" (ngSubmit)=\"guardarempresa()\">\n\n        <div class=\"form-group\">\n            <label>Nombre de la Empresa</label>\n            <input formControlName=\"nombre\" name=\"nombre\" type=\"text\" class=\"form-control\" required>\n        </div>\n\n        <!-- <div class=\"form-group\">\n            <label>Detalle</label>\n            <textarea [ngModel]=\"detalle\" name=\"detalle\" class=\"form-control\" rows=\"8\"></textarea>\n        </div> -->\n\n\n<!-- <div class=\"container\">\n\n            <button type=\"submit\" class=\"btn btn-primary\">Subir</button>\n\n        </div>\n\n\n\n    </form> -->\n\n<!-- </div> -->\n\n<div class=\"form-vw\">\n\n    <div class=\"container form-container\">\n        <form [formGroup]=\"forma2\" (ngSubmit)=\"GuardarPacientes()\">\n            <div class=\"row justify-content-center container-row\">\n                <h3 class=\"\">FORMULARIO</h3>\n            </div>\n\n            <h4 class=\"text-center\">AUDILOGIA INICIAL</h4>\n            <!-- <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <label for=\"examenIngreso\">Ingreso</label>\n                        <input type=\"text\" class=\"form-control\" id=\"examenIngreso\" placeholder=\"Ingreso\">\n                    </div>\n                    <div class=\"col-3\">\n                        <label for=\"examenIngreso\">Tipo de Examen</label>\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <select id=\"inputState\" class=\"form-control\">\n                                    <option selected>Semanal</option>\n                                    <option>Mensual</option>\n                                    <option>Anual</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-3\">\n                        <label for=\"examenIngreso\">Por STS</label>\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <select id=\"inputState\" class=\"form-control\">\n                                    <option selected>No</option>\n                                    <option>Si</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <label for=\"examenotros\">Otros</label>\n                        <input type=\"text\" class=\"form-control\" id=\"examenotros\" placeholder=\"Otros\">\n                    </div>\n                    <div class=\"col\">\n                        <label class=\"date-label\" for=\"examenFecha\">Fecha</label>\n                        <input type=\"date\" class=\"form-control date-input\" id=\"examenFecha\">\n                    </div>\n                </div>\n            </div> -->\n            <div>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <label for=\"examenNombre\">Nombre</label>\n                        <input formControlName=\"Nombre\" name=\"Nombre\" type=\"text\" class=\"form-control\" id=\"examenNombre\">\n                    </div>\n                    <div class=\"col\">\n                        <label for=\"examenCedula\">Cedula</label>\n                        <input formControlName=\"Cedula\" name=\"Cedula\" type=\"text\" class=\"form-control\" id=\"examenCedula\">\n                    </div>\n                    <div class=\"col\">\n                        <label for=\"examenEdad\">Edad</label>\n                        <input formControlName=\"Edad\" name=\"Edad\" type=\"number\" class=\"form-control\" id=\"examenEdad\" placeholder=\"Edad\">\n                    </div>\n                    <div class=\"col-2\">\n                        <label for=\"examenIngreso\">Genero</label>\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <select formControlName=\"Genero\" name=\"Genero\" id=\"generoSelect\" class=\"form-control\">\n                                    <option value=\"M\" selected>M</option>\n                                    <option value=\"F\">F</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <label class=\"date-label\" for=\"examenFechaContratacion\">Fecha de contratacion</label>\n                        <input formControlName=\"F_Contratacion\" name=\"F_Contratacion\" type=\"date\" class=\"form-control date-input\" id=\"examenFechaContratacion\">\n                    </div>\n                    <div class=\"col\">\n                        <label for=\"examenPuestoTrabajo\">Puesto de trabajo</label>\n                        <input formControlName=\"Puesto\" name=\"Puesto\" type=\"text\" class=\"form-control\" id=\"examenPuestoTrabajo\" placeholder=\"Puesto de trabajo\">\n                    </div>\n                    <div class=\"col-3\">\n                        <label for=\"examenTurno\">Turno</label>\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <select formControlName=\"Turno\" name=\"Turno\" id=\"examenTurno\" class=\"form-control\">\n                                    <option value=\"D\" selected>Diurno</option>\n                                    <option value=\"N\">Nocturno</option>\n                                    <option value=\"M\">Mixto</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <label for=\"exameNumHoras\">Numero de horas</label>\n                        <input formControlName=\"NHoras\" name=\"NHoras\" type=\"number\" class=\"form-control\" id=\"exameNumHoras\" placeholder=\"Numero de horas\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-3\">\n                        <label for=\"nombreEmpresa\">Nombre de la empresa </label>\n                        <input formControlName=\"empresa\" name=\"empresa\" type=\"text\" class=\"form-control\" id=\"nombreEmpresa\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <label for=\"examenNombre\">Nivel de ruido dBA</label>\n                        <input formControlName=\"RuidoDba\" name=\"RuidoDba\" type=\"text\" class=\"form-control\" id=\"exameNivRuidoDBA\">\n                    </div>\n                    <div class=\"col\">\n                        <label for=\"exameNivRuidoDBA\">Tipo de ruido dBA</label>\n                        <input formControlName=\"Tipo\" name=\"Tipo\" type=\"text\" class=\"form-control\" id=\"exameNivRuidoDBA\" placeholder=\"Tipo de RuidoDba\">\n                        <!-- <div class=\"form-check form-check-inline\">\n                            <input formControlName=\"Tipo\" name=\"Tipo\" class=\"form-check-input\" type=\"checkbox\" id=\"exameNivRuidoDBA-noSe\" value=\"No-se\">\n                            <label class=\"form-check-label\" for=\"exameNivRuidoDBA-noSe\">No se</label>\n                        </div> -->\n                    </div>\n                    <div class=\"col\">\n                        <label for=\"examenProtAuditivos\">Usa protectores auditivos</label>\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <select formControlName=\"Proteccion\" name=\"Proteccion\" id=\"examenProtAuditivos\" class=\"form-control\">\n                                    <option value=\"No\" selected>No</option>\n                                    <option value=\"Si\">Si</option>\n                                </select>\n                            </div>\n                            <div class=\"col-12\">\n                                <label for=\"examenProteccion\">Protectores Auditivos</label>\n                                <input formControlName=\"TipoProteccion\" name=\"TipoProteccion\" type=\"text\" class=\"form-control\" id=\"examenProteccion\">\n                            </div>\n                            <div class=\"col-12\">\n                                <label for=\"examenOtrosProtAuditivos\">Otros</label>\n                                <input formControlName=\"OtrosProteccion\" name=\"OtrosProteccion\" type=\"text\" class=\"form-control input-inline\" id=\"examenotros\" placeholder=\"Otros\">\n                            </div>\n                            <div class=\"col-12\">\n                                <div class=\"form-check form-check-inline\">\n                                    <label for=\"examenProtAuditivosMolestan \">Le molestan</label>\n                                    <input formControlName=\"Molestia\" name=\"Molestia\" type=\"text \" class=\"form-control input-inline \" id=\"examenProtAuditivosMolestan \" placeholder=\"Escriba Si o No \">\n                                </div>\n                            </div>\n                            <div class=\"col-12 \">\n                                <div class=\"form-check form-check-inline \">\n                                    <label for=\"examenProtAuditivosMolestias\">Molestias</label>\n                                    <input formControlName=\"MolestiasDetalle\" name=\"MolestiasDetalle\" type=\"text\" class=\"form-control input-inline\" id=\"examenProtAuditivosMolestias\" placeholder=\"Escriba las molestias\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"ExamenAudiometro\">Audiometro</label>\n                    <textarea formControlName=\"Audiometro\" name=\"Audiometro\" class=\"form-control\" id=\"ExamenAudiometro\" placeholder=\"Aqui se pondra la marca, el modelo y Serie con su calibracion Anual\"></textarea>\n                </div>\n            </div>\n\n            <div class=\"container\">\n\n                <button type=\"submit\" class=\"btn btn-primary\">Subir</button>\n\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/pacientes/pacientes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/pacientes/pacientes.component.ts ***!
  \********************************************************/
/*! exports provided: PacientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientesComponent", function() { return PacientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/pacientes/paciente.service */ "./src/app/service/pacientes/paciente.service.ts");
/* harmony import */ var _models_paciente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/paciente */ "./src/app/models/paciente.ts");
/* harmony import */ var _models_examen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/examen */ "./src/app/models/examen.ts");
/* harmony import */ var _service_examen_examen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/examen/examen.service */ "./src/app/service/examen/examen.service.ts");







var PacientesComponent = /** @class */ (function () {
    function PacientesComponent(_pacienteService, _examenService) {
        this._pacienteService = _pacienteService;
        this._examenService = _examenService;
        this.fecha = new Date();
        this.fecha2 = this.fecha.getFullYear() + '-' + this.fecha.getMonth() + '-' + this.fecha.getDate();
        this.empresas = [];
    }
    PacientesComponent.prototype.ngOnInit = function () {
        // this.cargarEmpresa();
        this.forma2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Genero: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            F_Contratacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Puesto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Turno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            NHoras: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            RuidoDba: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Proteccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            TipoProteccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            OtrosProteccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Molestia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            MolestiasDetalle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Audiometro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            empresa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    PacientesComponent.prototype.cargarPaciente = function () {
        this._pacienteService.cargarPacientes()
            .subscribe(function (resp) {
            console.log(resp);
            // this.totalRegistros = resp.total;
            // this.usuarios = resp.usuarios;
            // this.cargando = false;
        });
    };
    PacientesComponent.prototype.GuardarPacientes = function () {
        var paciente = new _models_paciente__WEBPACK_IMPORTED_MODULE_4__["Paciente"](this.forma2.value.Nombre, this.forma2.value.Cedula, this.forma2.value.Edad, this.forma2.value.Genero, this.forma2.value.F_Contratacion, this.forma2.value.Puesto, this.forma2.value.Turno, this.forma2.value.NHoras, this.forma2.value.empresa);
        console.log(paciente);
        this._pacienteService.VerificarPaciente(this.forma2.value.Cedula, paciente)
            .subscribe();
        this.GuardarExamen();
    };
    PacientesComponent.prototype.GuardarExamen = function () {
        var examen = new _models_examen__WEBPACK_IMPORTED_MODULE_5__["Exan"](this.forma2.value.Audiometro, this.forma2.value.Tipo, this.forma2.value.RuidoDba, this.forma2.value.F_Contratacion, this.forma2.value.Cedula, this.forma2.value.Proteccion, this.forma2.value.TipoProteccion, this.forma2.value.OtrosProteccion, this.forma2.value.Molestia, this.forma2.value.MolestiasDetalle);
        console.log(examen);
        this._examenService.VerificarExamen(this.forma2.value.Cedula, examen).subscribe();
        // this._examenService.crearExamen( examen )
        //           .subscribe((resp: any) => {
        //             console.log( resp );
        //           });
        //    console.log(examen);
        // }
    };
    PacientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pacientes',
            template: __webpack_require__(/*! ./pacientes.component.html */ "./src/app/pages/pacientes/pacientes.component.html"),
            styles: [__webpack_require__(/*! ./pacientes.component.css */ "./src/app/pages/pacientes/pacientes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_3__["PacienteService"], _service_examen_examen_service__WEBPACK_IMPORTED_MODULE_6__["ExamenService"]])
    ], PacientesComponent);
    return PacientesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pacientes2/pacientes2.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/pacientes2/pacientes2.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pacientesLista {\r\n    display: inline-block;\r\n    width: 41rem;\r\n}\r\n\r\nlabel {\r\n    line-height: 2;\r\n}\r\n\r\n.table {\r\n    margin-top: 2rem;\r\n}\r\n\r\n.listar-btn {\r\n    margin: 0 0.5rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFjaWVudGVzMi9wYWNpZW50ZXMyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWNpZW50ZXMyL3BhY2llbnRlczIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWNpZW50ZXNMaXN0YSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDFyZW07XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLmxpc3Rhci1idG4ge1xyXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pacientes2/pacientes2.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/pacientes2/pacientes2.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-vw\">\n    <div class=\"container pacientesLista\">\n        <form action=\"\">\n            <div class=\"form-group\">\n                <label for=\"Cedula\">Numero de Cedula</label>\n                <input #input type=\"text\" class=\"form-control\" id=\"Cedula\" aria-describedby=\"emailHelp\" placeholder=\"Ingrese numero de cedula\">\n                <button (click)=\"buscarPacientes( input.value )\" class=\"btn btn-primary\" style=\"margin-top:1rem\">Buscar</button>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"container pacientesLista\">\n        <div class=\"row justify-content-center container-row\">\n            <h3 class=\"\">Lista de empleados</h3>\n        </div>\n        <table class=\"table table-bordered \">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th>#</th>\n                    <th>Nombre</th>\n                    <th>Acciones</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let pacientes of paciente\">\n                    <td>\n                        {{ pacientes.Cedula }}\n                    </td>\n                    <td>\n                        {{ pacientes.Nombre }}\n                    </td>\n                    <td>\n                        <button [routerLink]=\"['/otoscopia', pacientes.Cedula ]\" class=\"btn btn-primary listar-btn\">  \n                                <i class=\"fa fa-edit\"></i>\n                              </button>\n\n                        <!-- <button (click)=\"\" class=\"btn btn-danger\">\n                                <i class=\"fa fa-trash-o\"></i>\n                              </button> -->\n                        <button [routerLink]=\"['/tablas', pacientes.Cedula ]\" class=\"btn btn-success listar-btn\">  \n                                <i class=\"fa fa-edit\"></i>\n                              </button>\n                    </td>\n                    <td>\n                        <button (click)=\"borrarPaciente(pacientes.Cedula)\" class=\"btn btn-danger listar-btn\">  \n                                    <i class=\"fa fa-edit\"></i>\n                                  </button>\n                    </td>\n\n                </tr>\n\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/pacientes2/pacientes2.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/pacientes2/pacientes2.component.ts ***!
  \**********************************************************/
/*! exports provided: Pacientes2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pacientes2Component", function() { return Pacientes2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/pacientes/paciente.service */ "./src/app/service/pacientes/paciente.service.ts");
/* harmony import */ var _service_examen_examen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/examen/examen.service */ "./src/app/service/examen/examen.service.ts");
/* harmony import */ var _service_otoscopia_otoscopia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/otoscopia/otoscopia.service */ "./src/app/service/otoscopia/otoscopia.service.ts");
/* harmony import */ var _service_audiograma_audiograma_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/audiograma/audiograma.service */ "./src/app/service/audiograma/audiograma.service.ts");
/* harmony import */ var _service_ayerhoy_ayerh_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/ayerhoy/ayerh.service */ "./src/app/service/ayerhoy/ayerh.service.ts");
/* harmony import */ var _service_durantevida_durantevida_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/durantevida/durantevida.service */ "./src/app/service/durantevida/durantevida.service.ts");
/* harmony import */ var _service_ultimomeses_ultimomeses_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/ultimomeses/ultimomeses.service */ "./src/app/service/ultimomeses/ultimomeses.service.ts");









var Pacientes2Component = /** @class */ (function () {
    function Pacientes2Component(_pacienteService, _examenService, _otoscopiaService, _audiogramaService, _ayerhService, _durantevService, _ultimomService) {
        this._pacienteService = _pacienteService;
        this._examenService = _examenService;
        this._otoscopiaService = _otoscopiaService;
        this._audiogramaService = _audiogramaService;
        this._ayerhService = _ayerhService;
        this._durantevService = _durantevService;
        this._ultimomService = _ultimomService;
        this.fecha = new Date();
        this.fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();
        this.paciente = [];
    }
    Pacientes2Component.prototype.ngOnInit = function () {
        this.cargarPaciente();
        // console.log(this.paciente);
    };
    Pacientes2Component.prototype.cargarPaciente = function () {
        var _this = this;
        this._pacienteService.cargarPacientes()
            .subscribe(function (resp) {
            // this.totalRegistros = resp.total;
            _this.paciente = resp;
            //   console.log(this.paciente);
            // this.cargando = false;
        });
    };
    Pacientes2Component.prototype.buscarPacientes = function (termino) {
        var _this = this;
        console.log('Cedula Enviada: ' + termino);
        if (termino.length <= 0) {
            this.cargarPaciente();
            return;
        }
        this._pacienteService.buscarPacientes(termino)
            .subscribe(function (resp) {
            _this.paciente = resp;
        });
        console.log(this.paciente);
        //   console.log('Resultados: ' + this.paciente);   //  [routerLink]="['/otoscopia', pacientes.Cedula]"
        // });
    };
    Pacientes2Component.prototype.borrarPaciente = function (termino) {
        var _this = this;
        this._examenService.borrarExamen(termino).subscribe();
        this._otoscopiaService.borrarOtoscopia(termino).subscribe();
        this._audiogramaService.borrarAudiograma(termino).subscribe();
        this._ayerhService.borrarayerh(termino).subscribe();
        this._durantevService.borrarDurantev(termino).subscribe();
        this._ultimomService.borrarultimosMeses(termino).subscribe();
        this._pacienteService.borrarPacientes(termino).subscribe(function (resp) {
            return _this.cargarPaciente();
        });
    };
    Pacientes2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pacientes2',
            template: __webpack_require__(/*! ./pacientes2.component.html */ "./src/app/pages/pacientes2/pacientes2.component.html"),
            styles: [__webpack_require__(/*! ./pacientes2.component.css */ "./src/app/pages/pacientes2/pacientes2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"], _service_examen_examen_service__WEBPACK_IMPORTED_MODULE_3__["ExamenService"],
            _service_otoscopia_otoscopia_service__WEBPACK_IMPORTED_MODULE_4__["OtoscopiaService"], _service_audiograma_audiograma_service__WEBPACK_IMPORTED_MODULE_5__["AudiogramaService"],
            _service_ayerhoy_ayerh_service__WEBPACK_IMPORTED_MODULE_6__["AyerhService"], _service_durantevida_durantevida_service__WEBPACK_IMPORTED_MODULE_7__["DurantevidaService"],
            _service_ultimomeses_ultimomeses_service__WEBPACK_IMPORTED_MODULE_8__["UltimomesesService"]])
    ], Pacientes2Component);
    return Pacientes2Component;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <app-header></app-header>\n    <app-sidebar></app-sidebar>\n\n    <router-outlet></router-outlet>\n\n</div>\n\n<!-- <app-modal-upload></app-modal-upload> -->"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.routes */ "./src/app/pages/pages.routes.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-setting/account-setting.component */ "./src/app/pages/account-setting/account-setting.component.ts");
/* harmony import */ var _nopagesfound_nopagesfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nopagesfound/nopagesfound.component */ "./src/app/pages/nopagesfound/nopagesfound.component.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pruebadb_pruebadb_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pruebadb/pruebadb.component */ "./src/app/pages/pruebadb/pruebadb.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
/* harmony import */ var _computadora_computadora_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./computadora/computadora.component */ "./src/app/pages/computadora/computadora.component.ts");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/pages/usuario/usuario.component.ts");
/* harmony import */ var _salas_salacomputadoras_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./salas/salacomputadoras.component */ "./src/app/pages/salas/salacomputadoras.component.ts");
/* harmony import */ var _salas_salalaptos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./salas/salalaptos.component */ "./src/app/pages/salas/salalaptos.component.ts");
/* harmony import */ var _salas_salaimpresoras_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./salas/salaimpresoras.component */ "./src/app/pages/salas/salaimpresoras.component.ts");
/* harmony import */ var _servicios_serviciopage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./servicios/serviciopage.component */ "./src/app/pages/servicios/serviciopage.component.ts");
/* harmony import */ var _premium_premium_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./premium/premium.component */ "./src/app/pages/premium/premium.component.ts");
/* harmony import */ var _pacientes_pacientes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pacientes/pacientes.component */ "./src/app/pages/pacientes/pacientes.component.ts");
/* harmony import */ var _resulanalisis_resulanalisis_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./resulanalisis/resulanalisis.component */ "./src/app/pages/resulanalisis/resulanalisis.component.ts");
/* harmony import */ var _regclinico_regclinico_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./regclinico/regclinico.component */ "./src/app/pages/regclinico/regclinico.component.ts");
/* harmony import */ var _otoscopia_otoscopia_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./otoscopia/otoscopia.component */ "./src/app/pages/otoscopia/otoscopia.component.ts");
/* harmony import */ var _pacientes2_pacientes2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pacientes2/pacientes2.component */ "./src/app/pages/pacientes2/pacientes2.component.ts");
/* harmony import */ var _ingpaciente_ingpaciente_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ingpaciente/ingpaciente.component */ "./src/app/pages/ingpaciente/ingpaciente.component.ts");
/* harmony import */ var _tablas_tablas_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tablas/tablas.component */ "./src/app/pages/tablas/tablas.component.ts");
/* harmony import */ var _reporteria_reporteria_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./reporteria/reporteria.component */ "./src/app/pages/reporteria/reporteria.component.ts");
/* harmony import */ var _listarpaceinte_listarpaceinte_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./listarpaceinte/listarpaceinte.component */ "./src/app/pages/listarpaceinte/listarpaceinte.component.ts");
/* harmony import */ var _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./empresas/empresas.component */ "./src/app/pages/empresas/empresas.component.ts");















// import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _pages_routes__WEBPACK_IMPORTED_MODULE_4__["PAGES_ROUTES"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_12__["PipeModule"]
            ],
            exports: [
                _pages_component__WEBPACK_IMPORTED_MODULE_8__["PagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _nopagesfound_nopagesfound_component__WEBPACK_IMPORTED_MODULE_7__["NopagesfoundComponent"]
            ],
            providers: [_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_12__["PipeModule"]],
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_8__["PagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_6__["AccountSettingComponent"],
                _nopagesfound_nopagesfound_component__WEBPACK_IMPORTED_MODULE_7__["NopagesfoundComponent"],
                _pruebadb_pruebadb_component__WEBPACK_IMPORTED_MODULE_10__["PruebadbComponent"],
                _computadora_computadora_component__WEBPACK_IMPORTED_MODULE_13__["ComputadoraComponent"],
                _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_14__["UsuarioComponent"],
                // ModalUploadComponent,
                _salas_salacomputadoras_component__WEBPACK_IMPORTED_MODULE_15__["SalacomputadorasComponent"],
                _salas_salalaptos_component__WEBPACK_IMPORTED_MODULE_16__["SalalaptosComponent"],
                _salas_salaimpresoras_component__WEBPACK_IMPORTED_MODULE_17__["SalaimpresorasComponent"],
                _servicios_serviciopage_component__WEBPACK_IMPORTED_MODULE_18__["ServiciopageComponent"],
                _premium_premium_component__WEBPACK_IMPORTED_MODULE_19__["PremiumComponent"],
                _pacientes_pacientes_component__WEBPACK_IMPORTED_MODULE_20__["PacientesComponent"],
                _resulanalisis_resulanalisis_component__WEBPACK_IMPORTED_MODULE_21__["ResulanalisisComponent"],
                _regclinico_regclinico_component__WEBPACK_IMPORTED_MODULE_22__["RegclinicoComponent"],
                _otoscopia_otoscopia_component__WEBPACK_IMPORTED_MODULE_23__["OtoscopiaComponent"],
                _pacientes2_pacientes2_component__WEBPACK_IMPORTED_MODULE_24__["Pacientes2Component"],
                _ingpaciente_ingpaciente_component__WEBPACK_IMPORTED_MODULE_25__["IngpacienteComponent"],
                _tablas_tablas_component__WEBPACK_IMPORTED_MODULE_26__["TablasComponent"],
                _reporteria_reporteria_component__WEBPACK_IMPORTED_MODULE_27__["ReporteriaComponent"],
                _listarpaceinte_listarpaceinte_component__WEBPACK_IMPORTED_MODULE_28__["ListarpaceinteComponent"],
                _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_29__["EmpresasComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routes.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.routes.ts ***!
  \***************************************/
/*! exports provided: PAGES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES_ROUTES", function() { return PAGES_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service.index */ "./src/app/service/service.index.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _computadora_computadora_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./computadora/computadora.component */ "./src/app/pages/computadora/computadora.component.ts");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/pages/usuario/usuario.component.ts");
/* harmony import */ var _salas_salacomputadoras_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salas/salacomputadoras.component */ "./src/app/pages/salas/salacomputadoras.component.ts");
/* harmony import */ var _salas_salaimpresoras_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./salas/salaimpresoras.component */ "./src/app/pages/salas/salaimpresoras.component.ts");
/* harmony import */ var _salas_salalaptos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./salas/salalaptos.component */ "./src/app/pages/salas/salalaptos.component.ts");
/* harmony import */ var _servicios_serviciopage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicios/serviciopage.component */ "./src/app/pages/servicios/serviciopage.component.ts");
/* harmony import */ var _premium_premium_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./premium/premium.component */ "./src/app/pages/premium/premium.component.ts");
/* harmony import */ var _otoscopia_otoscopia_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./otoscopia/otoscopia.component */ "./src/app/pages/otoscopia/otoscopia.component.ts");
/* harmony import */ var _pacientes_pacientes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pacientes/pacientes.component */ "./src/app/pages/pacientes/pacientes.component.ts");
/* harmony import */ var _pacientes2_pacientes2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pacientes2/pacientes2.component */ "./src/app/pages/pacientes2/pacientes2.component.ts");
/* harmony import */ var _tablas_tablas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tablas/tablas.component */ "./src/app/pages/tablas/tablas.component.ts");
/* harmony import */ var _reporteria_reporteria_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reporteria/reporteria.component */ "./src/app/pages/reporteria/reporteria.component.ts");
/* harmony import */ var _listarpaceinte_listarpaceinte_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./listarpaceinte/listarpaceinte.component */ "./src/app/pages/listarpaceinte/listarpaceinte.component.ts");
/* harmony import */ var _resulanalisis_resulanalisis_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resulanalisis/resulanalisis.component */ "./src/app/pages/resulanalisis/resulanalisis.component.ts");



// pages















var pagesRouter = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        canActivate: [_service_service_index__WEBPACK_IMPORTED_MODULE_2__["LoginGuardGuard"]],
        children: [
            //  { path: 'account', component: AccountSettingComponent },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
            // Foros Servicios Especializados
            { path: 'computadora', component: _computadora_computadora_component__WEBPACK_IMPORTED_MODULE_4__["ComputadoraComponent"], data: { titulo: 'Servicio Computadoras' } },
            { path: 'salacomputadoras', component: _salas_salacomputadoras_component__WEBPACK_IMPORTED_MODULE_6__["SalacomputadorasComponent"], data: { titulo: 'Sala Computadoras' } },
            { path: 'salaimpresoras', component: _salas_salaimpresoras_component__WEBPACK_IMPORTED_MODULE_7__["SalaimpresorasComponent"], data: { titulo: 'Sala Impresoras' } },
            { path: 'salalaptos', component: _salas_salalaptos_component__WEBPACK_IMPORTED_MODULE_8__["SalalaptosComponent"], data: { titulo: 'Sala Laptos' } },
            { path: 'premium', component: _premium_premium_component__WEBPACK_IMPORTED_MODULE_10__["PremiumComponent"], data: { titulo: 'Usuario Premiun' } },
            { path: 'otoscopia/:Cedula', component: _otoscopia_otoscopia_component__WEBPACK_IMPORTED_MODULE_11__["OtoscopiaComponent"], data: { titulo: 'Formulario Otoscopia' } },
            { path: 'paciente', component: _pacientes_pacientes_component__WEBPACK_IMPORTED_MODULE_12__["PacientesComponent"], data: { titulo: 'Formulario de Pacientes' } },
            { path: 'pacientes', component: _pacientes2_pacientes2_component__WEBPACK_IMPORTED_MODULE_13__["Pacientes2Component"], data: { titulo: 'Busqueda de Pacientes' } },
            { path: 'tablas/:Cedula', component: _tablas_tablas_component__WEBPACK_IMPORTED_MODULE_14__["TablasComponent"], data: { titulo: 'Formularios' } },
            { path: 'reportes', component: _reporteria_reporteria_component__WEBPACK_IMPORTED_MODULE_15__["ReporteriaComponent"], data: { titulo: 'Reportes' } },
            { path: 'verpaciente', component: _listarpaceinte_listarpaceinte_component__WEBPACK_IMPORTED_MODULE_16__["ListarpaceinteComponent"], data: { titulo: 'Ver Pacientes' } },
            { path: 'resultados', component: _resulanalisis_resulanalisis_component__WEBPACK_IMPORTED_MODULE_17__["ResulanalisisComponent"], data: { titulo: 'Ver Pacientes' } },
            // para Administrador
            { path: 'usuarios', component: _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioComponent"], canActivate: [_service_service_index__WEBPACK_IMPORTED_MODULE_2__["AdminGuardGuard"]], data: { titulo: 'Servicio de Usuarios' } },
            { path: 'solicitud', component: _servicios_serviciopage_component__WEBPACK_IMPORTED_MODULE_9__["ServiciopageComponent"], data: { titulo: 'Solicitud de Servicios' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
];
var PAGES_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(pagesRouter);


/***/ }),

/***/ "./src/app/pages/premium/premium.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/premium/premium.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #f=\"ngForm\" (submit)=\"ver( f )\">\n        <div>\n\n            <h5>Usuario: {{usuario.nombre}}</h5>\n\n            <h5>Correo: {{usuario.email}}</h5>\n\n\n        </div>\n\n        <div class=\"entry\">\n            <h6>Acuerdo de Uso: </h6>\n            <p>La pagina FIXALL reconoce expresamente a los usuarios la plena y exclusiva titularidad y propiedad de todos y cada uno de los foros creados en esta plataforma. Dicho contenido que se muestra en la plataforma sera monitoreado que cumpla con\n                todas las normativas de los derechos de autor, y que no se vea reflejado, contenido obseno o violento que pueda perjudicar a los demas usuarios\n            </p>\n\n\n\n            <div class=\"flex-sb-m w-full p-t-3 p-b-24\">\n                <div class=\"contact100-form-checkbox\">\n                    <input [(ngModel)]=\"acepto\" name=\"acepto\" value=\"acepto\" class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\">\n                    <label class=\"label-checkbox100\" for=\"ckb1\">\n    Acepto los Acuerdos\n    </label>\n                </div>\n\n            </div>\n            <div class=\"container-login100-form-btn m-t-17\">\n                <button (click)=\"salvarUsuario(usuario)\" [disabled]=\"!acepto\" class=\"btn btn-primary\" type=\"submit\">\n    Acepto\n    </button>\n            </div>\n\n        </div>\n\n\n\n\n\n    </form>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/premium/premium.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/premium/premium.component.ts ***!
  \****************************************************/
/*! exports provided: PremiumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumComponent", function() { return PremiumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.index */ "./src/app/service/service.index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





var PremiumComponent = /** @class */ (function () {
    function PremiumComponent(_usuarioService, router) {
        this._usuarioService = _usuarioService;
        this.router = router;
        this.usuarios = [];
    }
    PremiumComponent.prototype.ngOnInit = function () {
        this.usuario = this._usuarioService.usuario;
    };
    PremiumComponent.prototype.ver = function (forma) {
        this.acepto = forma.value.acepto;
        console.log(this.acepto);
    };
    PremiumComponent.prototype.salvarUsuario = function (usuario) {
        var _this = this;
        this.usuario.role = 'ADMIN';
        // console.log(usuario);
        // console.log(usuario);
        this._usuarioService.actualizarUsuario(usuario)
            .subscribe(function (resp) {
            console.log(resp);
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Exelente', 'Ya eres Premium!!', 'success');
            _this.router.navigate(['/dashboard']);
        });
        // this._usuarioService.actualizarUsuario( )
        // .subscribe();
    };
    PremiumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-premium',
            template: __webpack_require__(/*! ./premium.component.html */ "./src/app/pages/premium/premium.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service_index__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PremiumComponent);
    return PremiumComponent;
}());



/***/ }),

/***/ "./src/app/pages/pruebadb/pruebadb.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/pruebadb/pruebadb.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pruebadb works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/pruebadb/pruebadb.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/pruebadb/pruebadb.component.ts ***!
  \******************************************************/
/*! exports provided: PruebadbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebadbComponent", function() { return PruebadbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PruebadbComponent = /** @class */ (function () {
    function PruebadbComponent() {
    }
    PruebadbComponent.prototype.ngOnInit = function () {
    };
    PruebadbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pruebadb',
            template: __webpack_require__(/*! ./pruebadb.component.html */ "./src/app/pages/pruebadb/pruebadb.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PruebadbComponent);
    return PruebadbComponent;
}());



/***/ }),

/***/ "./src/app/pages/regclinico/regclinico.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/regclinico/regclinico.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2NsaW5pY28vcmVnY2xpbmljby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/regclinico/regclinico.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/regclinico/regclinico.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/regclinico/regclinico.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/regclinico/regclinico.component.ts ***!
  \**********************************************************/
/*! exports provided: RegclinicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegclinicoComponent", function() { return RegclinicoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegclinicoComponent = /** @class */ (function () {
    function RegclinicoComponent() {
    }
    RegclinicoComponent.prototype.ngOnInit = function () {
    };
    RegclinicoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regclinico',
            template: __webpack_require__(/*! ./regclinico.component.html */ "./src/app/pages/regclinico/regclinico.component.html"),
            styles: [__webpack_require__(/*! ./regclinico.component.css */ "./src/app/pages/regclinico/regclinico.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegclinicoComponent);
    return RegclinicoComponent;
}());



/***/ }),

/***/ "./src/app/pages/reporteria/reporteria.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/reporteria/reporteria.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pacientesLista {\r\n    display: inline-block;\r\n    width: 41rem;\r\n}\r\n\r\nlabel {\r\n    line-height: 2;\r\n}\r\n\r\n.table {\r\n    margin-top: 2rem;\r\n}\r\n\r\ntr {\r\n    border: 0 0 1px 0 solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0ZXJpYS9yZXBvcnRlcmlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSw4QkFBOEI7Q0FDakMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBvcnRlcmlhL3JlcG9ydGVyaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWNpZW50ZXNMaXN0YSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDFyZW07XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxudHIge1xyXG4gICAgYm9yZGVyOiAwIDAgMXB4IDAgc29saWQgYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/reporteria/reporteria.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/reporteria/reporteria.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-vw\">\n    <div class=\"container pacientesLista\">\n        <form action=\"\">\n            <div class=\"form-group\">\n                <label for=\"Cedula\">Numero de Cedula</label>\n                <input #input type=\"text\" class=\"form-control\" id=\"Cedula\" aria-describedby=\"emailHelp\" placeholder=\"Ingrese numero de cedula\">\n                <button (click)=\"cargarOtoscopia( input.value )\" class=\"btn btn-primary\" style=\"margin-top:1rem\">Buscar</button>\n            </div>\n        </form>\n    </div>\n    <div class=\"container pacientesLista\">\n        <div class=\"row justify-content-center container-row\">\n            <h3 class=\"\">Reporteria general de paciente</h3>\n        </div>\n        <table class=\"table table-bordered \">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th>Campo</th>\n                    <th>Valor</th>\n                </tr>\n            </thead>\n            <tbody>\n\n                <h4>OTOSCOPIA</h4>\n\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Oreja Normal\n\n                    </td>\n                    <td>\n                        {{otos.Normal}}\n                    </td>\n\n                </tr>\n\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Oreja Alteracion Congenita\n                    </td>\n                    <td>\n                        {{otos.AlteracionCongenita}}\n                    </td>\n\n                </tr>\n\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Oreja Ausente\n                    </td>\n                    <td>\n                        {{otos.Ausente}}\n                    </td>\n\n                </tr>\n\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Conducto Auditivo Externo Normal\n\n                    </td>\n                    <td>\n                        {{otos.caeNormal}}\n                    </td>\n\n                </tr>\n\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Colapsado\n                    </td>\n                    <td>\n                        {{otos.Colapsado}}\n                    </td>\n\n                </tr>\n\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Alteracion Congenita\n\n                    </td>\n                    <td>\n                        {{otos.Congenita}}\n                    </td>\n\n                </tr>\n\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Cerumen D.\n\n                    </td>\n                    <td>\n                        {{otos.Cerumen}}\n                    </td>\n\n                </tr>\n\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Cerumen Parcial\n                    </td>\n                    <td>\n                        {{otos.CerumenP}}\n                    </td>\n\n                </tr>\n\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Cerumen Total\n\n                    </td>\n                    <td>\n                        {{otos.CerumenT}}\n                    </td>\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Cerumen I.\n                    </td>\n\n                    <td>\n                        {{otos.CerumenI}}\n                    </td>\n\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Cerumen I. Parcial\n                    </td>\n                    <td>\n                        {{otos.CerumenIP}}\n                    </td>\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Cerumen I. Total\n                    </td>\n                    <td>\n                        {{otos.CerumenIT}}\n                    </td>\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Extraccion\n                    </td>\n                    <td>\n                        {{otos.Extraccion}}\n                    </td>\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Membrana Timpanica\n                    </td>\n                    <td>\n                        {{otos.MembrNacaNor}}\n                    </td>\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Membrana Timpanica Perforada D.\n                    </td>\n                    <td>\n                        {{otos.MembrNacaPerD}}\n                    </td>\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Membrana Timpanica Perforada I.\n                    </td>\n                    <td>\n                        {{otos.MembrNacaPerI}}\n                    </td>\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Membrana Timpanica Retriada D.</td>\n                    <td>\n                        {{otos.MembrNacaRetD}}\n                    </td>\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Membrana Timpanica Retriada I.\n                    </td>\n                    <td>\n                        {{otos.MembrNacaRetI}}\n                    </td>\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Membrana Timpanica Monomerica D.\n                    </td>\n                    <td>\n                        {{otos.MembrNacaMonoD}}\n                    </td>\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Membrana Timpanica Monomerica D.\n                    </td>\n                    <td>\n                        {{otos.MembrNacaMonoI}}\n                    </td>\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Otorragia\n                    </td>\n                    <td>\n                        {{otos.Otorragia}}\n                    </td>\n                </tr>\n\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Otorrea\n                    </td>\n                    <td>\n                        {{otos.Otorrea}}\n                    </td>\n                </tr>\n                <tr *ngFor=\"let otos of otoscopa\">\n                    <td>\n                        Otitis 1/2 serosa\n                    </td>\n                    <td>\n                        {{otos.Otitis}}\n                    </td>\n                </tr>\n\n                <br>\n                <h4>AUDIOGRAMA</h4>\n                <tr *ngFor=\"let otos of audiogramas\">\n                    <td>\n                        Normal Derecho Con Perfil Plano\n                    </td>\n                    <td>\n                        {{otos.NDconperfilplano}}\n                    </td>\n\n                </tr>\n                <tr *ngFor=\"let otos of audiogramas\">\n                    <td>\n                        Normal Derecho Descendente\n                    </td>\n                    <td>\n                        {{otos.NDdescendente}}\n                    </td>\n\n                </tr>\n\n\n                <tr *ngFor=\"let otos of audiogramas\">\n                    <td>\n                        Normal Derecho Ascendente\n                    </td>\n                    <td>\n                        {{otos.NDascendente}}\n                    </td>\n\n                </tr>\n\n                <tr *ngFor=\"let otos of audiogramas\">\n                    <td>\n                        Normal Derecho Batea\n                    </td>\n                    <td>\n                        {{otos.NDbatea}}\n                    </td>\n\n                </tr>\n\n                <tr *ngFor=\"let otos of audiogramas\">\n                    <td>\n                        Normal Derecho Campana\n                    </td>\n                    <td>\n                        {{otos.NDcampana}}\n                    </td>\n\n                </tr>\n\n                <tr *ngFor=\"let otos of audiogramas\">\n                    <td>\n                        Normal Derecho Mixto\n                    </td>\n                    <td>\n                        {{otos.NDmixto}}\n                    </td>\n\n                </tr>\n\n                <tr *ngFor=\"let otos of audiogramas\">\n                    <td>\n                        Normal Izquierdo Con Perfil Plano\n                    </td>\n                    <td>\n                        {{otos.NIconperfilplano}}\n                    </td>\n\n\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Normal Izquierdo Descendente\n                        </td>\n                        <td>\n                            {{otos.NIdescendente}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Normal Izquierdo Ascendente\n                        </td>\n                        <td>\n                            {{otos.NIascendente}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Normal Izquierdo Batea\n                        </td>\n                        <td>\n                            {{otos.NIbatea}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Normal Izquierdo Campana\n\n                        </td>\n                        <td>\n                            {{otos.NIcampana}}\n                        </td>\n\n                    </tr>\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Normal Izquierdo Mixto\n\n                        </td>\n                        <td>\n                            {{otos.NImixto}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Superficial\n\n                        </td>\n                        <td>\n                            {{otos.PDsuperficial}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Moderada\n\n                        </td>\n                        <td>\n                            {{otos.PDmoderada}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Moderadas\n\n                        </td>\n                        <td>\n                            {{otos.PDmoderadas}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Severo\n                        </td>\n                        <td>\n                            {{otos.PDsevera}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Profundo\n\n                        </td>\n                        <td>\n                            {{otos.PDprofunda}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Perfil Parcial\n\n                        </td>\n                        <td>\n                            {{otos.PDperfilp}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Descendente\n                        </td>\n                        <td>\n                            {{otos.PDascendente}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Batea\n\n                        </td>\n                        <td>\n                            {{otos.PDbatea}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Campana\n\n                        </td>\n                        <td>\n                            {{otos.PDcampana}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Mixto\n                        </td>\n                        <td>\n                            {{otos.PDmixto}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Caracter C\n                        </td>\n                        <td>\n                            {{otos.PDcaracterC}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Sensorial\n\n                        </td>\n                        <td>\n                            {{otos.PDsensorial}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Derecho Mixto 2\n\n                        </td>\n                        <td>\n                            {{otos.PDmixto2}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Superficial\n\n                        </td>\n                        <td>\n                            {{otos.PIsuperficial}}\n                        </td>\n\n                    </tr>\n\n\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Moderada\n\n                        </td>\n                        <td>\n                            {{otos.PImoderada}}\n                        </td>\n\n                    </tr>\n\n\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Moderadas\n\n                        </td>\n                        <td>\n                            {{otos.PImoderadas}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Severa\n                        </td>\n                        <td>\n                            {{otos.PIsevera}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Profunda\n                        </td>\n                        <td>\n                            {{otos.PIprofunda}}\n                        </td>\n\n                    </tr>\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Perfil Plano\n                        </td>\n                        <td>\n                            {{otos.PIperfilp}}\n                        </td>\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Descendente\n\n                        </td>\n                        <td>\n                            {{otos.PIdescendente}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Ascendente\n\n                        </td>\n                        <td>\n                            {{otos.PIascendente}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Batea\n\n                        </td>\n                        <td>\n                            {{otos.PIbatea}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Campana\n\n                        </td>\n                        <td>\n                            {{otos.PIcampana}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Mixto\n\n                        </td>\n                        <td>\n                            {{otos.PImixto}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Carácter C\n\n                        </td>\n                        <td>\n                            {{otos.PIcaracterC}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Sensorial\n\n                        </td>\n                        <td>\n                            {{otos.PIsensorial}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of audiogramas\">\n                        <td>\n                            Parcial Izquierdo Mixto\n\n                        </td>\n                        <td>\n                            {{otos.PImixto2}}\n                        </td>\n\n                    </tr>\n\n                    <br>\n\n                    <h4>Ayer y Hoy</h4>\n\n                    <tr *ngFor=\"let otos of ayerhoy\">\n                        <td>\n                            Moto\n\n                        </td>\n                        <td>\n                            {{otos.Moto}}\n\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of ayerhoy\">\n                        <td>\n                            Bus\n\n                        </td>\n                        <td>\n                            {{otos.Bus}}\n                        </td>\n\n                    </tr>\n\n\n                    <tr *ngFor=\"let otos of ayerhoy\">\n                        <td>\n                            Gripe\n\n                        </td>\n                        <td>\n                            {{otos.Gripe}}\n                        </td>\n\n                    </tr>\n\n\n\n                    <tr *ngFor=\"let otos of ayerhoy\">\n                        <td>\n                            RF Sin Proteccion\n\n                        </td>\n                        <td>\n                            {{otos.RFSinProt}}\n                        </td>\n\n                    </tr>\n\n\n                    <tr *ngFor=\"let otos of ayerhoy\">\n                        <td>\n                            Fiesta\n\n                        </td>\n                        <td>\n                            {{otos.Fiesta}}\n                        </td>\n\n                    </tr>\n\n\n                    <tr *ngFor=\"let otos of ayerhoy\">\n                        <td>\n                            Otros\n\n                        </td>\n                        <td>\n                            {{otos.Otros}}\n                        </td>\n\n                    </tr>\n\n\n                    <br>\n                    <h4>Durante Vida</h4>\n\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Fiebre\n\n                        </td>\n                        <td>\n                            {{otos.Fiebre}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Consulto Oído\n                        </td>\n                        <td>\n                            {{otos.ConsultoO}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Operacion de Oído\n                        </td>\n                        <td>\n                            {{otos.OperacionO}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Perdida De la Conciencia\n\n                        </td>\n                        <td>\n                            {{otos.PerdidaC}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Paperas\n                        </td>\n                        <td>\n                            {{otos.Paperas}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Escarlatina\n\n                        </td>\n                        <td>\n                            {{otos.Escarlatina}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Sarampion\n\n                        </td>\n                        <td>\n                            {{otos.Sarampion}} }}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Meningitis\n                        </td>\n                        <td>\n                            {{otos.Meningitis}}\n                        </td>\n\n                    </tr>\n\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Diabetes\n\n                        </td>\n                        <td>\n                            {{otos.Diabetes}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Enfermedades Riñones\n                        </td>\n\n                        <td>\n                            {{otos.ERinones}}\n                        </td>\n\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Alergias\n                        </td>\n                        <td>\n                            {{otos.Alergias}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Instrumentos Musicales\n                        </td>\n                        <td>\n                            {{otos.InstrumentosM}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Sordera En su Familia\n                        </td>\n                        <td>\n                            {{otos.SFamilia}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Servicio Militar\n                        </td>\n                        <td>\n                            {{otos.ServicioM}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            En casa una Maquinas Ruidosas¿Cuantas horas? </td>\n                        <td>\n                            {{otos.MRCasaHoras}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Música Fuerte\n                        </td>\n                        <td>\n                            {{otos.MFuerte}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Pasatiempos ruidosos cacería\n                        </td>\n                        <td>\n                            {{otos.PasatiempoR}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            ¿ Quema cohetes otros?\n                        </td>\n                        <td>\n                            {{otos.Cohetes}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            ¿Usa o uso armas de fuego? ¿Años y Calibre? </td>\n                        <td>\n                            {{otos.ArmasF}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            ¿Ha usado gentamicina, Kanamicina?\n                        </td>\n                        <td>\n                            {{otos.Gentamicina}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            ¿ Ha usado quinina, estreptomicina?\n                        </td>\n                        <td>\n                            {{otos.Quinina}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Trabaja con quimicos o insecticidas. ¿Cuales?\n                        </td>\n                        <td>\n                            {{otos.Quimicos}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of durantev\">\n                        <td>\n                            Anotar trabajos anteriores si laboro\n                        </td>\n                        <td>\n                            {{otos.TrabajoAnt}}\n                        </td>\n                    </tr>\n\n\n                    <br>\n                    <h4>Ultimos Meses</h4>\n\n                    <tr *ngFor=\"let otos of ultimosm\">\n                        <td>\n                            Dolor de Oídos\n                        </td>\n                        <td>\n                            {{otos.DolorO}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of ultimosm\">\n                        <td>\n                            Supuracion o Sangrado\n                        </td>\n                        <td>\n                            {{otos.SupuracionS}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of ultimosm\">\n                        <td>\n                            Ruido, Tinitus o Zumbidos\n                        </td>\n                        <td>\n                            {{otos.RuidoTZ}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of ultimosm\">\n                        <td>\n                            Mareo/Vertigo\n                        </td>\n                        <td>\n                            {{otos.MareoV}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of ultimosm\">\n                        <td>\n                            Sordera Subita\n                        </td>\n                        <td>\n                            {{otos.SorderaS}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of ultimosm\">\n                        <td>\n                            Sordera Fluctuante\n                        </td>\n                        <td>\n                            {{otos.SorderaF}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of ultimosm\">\n                        <td>\n                            Tapados/Malestar/Llenura\n                        </td>\n                        <td>\n                            {{otos.TapadoML}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of ultimosm\">\n                        <td>\n                            Dolor o Molestia Al ruido D.I.A\n                        </td>\n                        <td>\n                            {{otos.DolorMR}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of ultimosm\">\n                        <td>\n                            Golpes Fuerte en la cabeza u Oido\n                        </td>\n                        <td>\n                            {{otos.GolpesCO}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of ultimosm\">\n                        <td>\n                            Presion arterial Alta\n                        </td>\n                        <td>\n                            {{otos.PAA}}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let otos of ultimosm\">\n                        <td>\n                            Medicinas Permanentes que usa\n                        </td>\n                        <td>\n                            {{otos.MedicamentosP}}\n                        </td>\n                    </tr>\n\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/reporteria/reporteria.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/reporteria/reporteria.component.ts ***!
  \**********************************************************/
/*! exports provided: ReporteriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteriaComponent", function() { return ReporteriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.index */ "./src/app/service/service.index.ts");



var ReporteriaComponent = /** @class */ (function () {
    function ReporteriaComponent(_otoscopia, _audioGrama, _ayerH, _durantevida, _ultimosMeses) {
        this._otoscopia = _otoscopia;
        this._audioGrama = _audioGrama;
        this._ayerH = _ayerH;
        this._durantevida = _durantevida;
        this._ultimosMeses = _ultimosMeses;
        this.otoscopa = [];
        this.audiogramas = [];
        this.ayerhoy = [];
        this.durantev = [];
        this.ultimosm = [];
    }
    ReporteriaComponent.prototype.ngOnInit = function () {
    };
    ReporteriaComponent.prototype.cargarOtoscopia = function (termino) {
        var _this = this;
        console.log(termino);
        if (termino.length <= 0) {
            return;
        }
        this._otoscopia.cargarOtoscopiaCedula(termino)
            .subscribe(function (resp) { return _this.otoscopa = resp; });
        console.log(this.otoscopa);
        this.cargarAudiograma(termino);
        this.cargarAyerH(termino);
        this.cargarDuranteVCedula(termino);
        this.cargarUltimosMeses(termino);
    };
    ReporteriaComponent.prototype.cargarAudiograma = function (termino) {
        var _this = this;
        console.log(termino);
        if (termino.length <= 0) {
            return;
        }
        this._audioGrama.cargarAudiogramaCedula(termino)
            .subscribe(function (audiograma) { return _this.audiogramas = audiograma; });
        console.log(this.audiogramas);
    };
    ReporteriaComponent.prototype.cargarAyerH = function (termino) {
        var _this = this;
        console.log(termino);
        if (termino.length <= 0) {
            return;
        }
        this._ayerH.cargarAyerhoyCedula(termino)
            .subscribe(function (ayerh) { return _this.ayerhoy = ayerh; });
        console.log(this.ayerhoy);
    };
    ReporteriaComponent.prototype.cargarDuranteVCedula = function (termino) {
        var _this = this;
        console.log(termino);
        if (termino.length <= 0) {
            return;
        }
        this._durantevida.cargarDuranteVCedula(termino)
            .subscribe(function (durantevid) { return _this.durantev = durantevid; });
        console.log(this.durantev);
    };
    ReporteriaComponent.prototype.cargarUltimosMeses = function (termino) {
        var _this = this;
        console.log(termino);
        if (termino.length <= 0) {
            return;
        }
        this._ultimosMeses.cargarUltimosMVCedula(termino)
            .subscribe(function (resp) { return _this.ultimosm = resp; });
        console.log(this.durantev);
    };
    ReporteriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reporteria',
            template: __webpack_require__(/*! ./reporteria.component.html */ "./src/app/pages/reporteria/reporteria.component.html"),
            styles: [__webpack_require__(/*! ./reporteria.component.css */ "./src/app/pages/reporteria/reporteria.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service_index__WEBPACK_IMPORTED_MODULE_2__["OtoscopiaService"], _service_service_index__WEBPACK_IMPORTED_MODULE_2__["AudiogramaService"], _service_service_index__WEBPACK_IMPORTED_MODULE_2__["AyerhService"],
            _service_service_index__WEBPACK_IMPORTED_MODULE_2__["DurantevidaService"], _service_service_index__WEBPACK_IMPORTED_MODULE_2__["UltimomesesService"]])
    ], ReporteriaComponent);
    return ReporteriaComponent;
}());



/***/ }),

/***/ "./src/app/pages/resulanalisis/resulanalisis.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/resulanalisis/resulanalisis.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resultado-vw {\r\n    display: inline-block;\r\n    width: 41rem;\r\n    margin-top: 1.5rem;\r\n}\r\n\r\n.form-imageUpload {\r\n    margin-top: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzdWxhbmFsaXNpcy9yZXN1bGFuYWxpc2lzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3VsYW5hbGlzaXMvcmVzdWxhbmFsaXNpcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdGFkby12dyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWltYWdlVXBsb2FkIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/resulanalisis/resulanalisis.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/resulanalisis/resulanalisis.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-login100 p-t-50 p-b-90 resultado-vw\">\n\n    <form ngNativeValidate #f=\"ngForm\" class=\"login100-form validate-form flex-sb flex-w\">\n\n        <!-- <div class=\"wrap-input100 validate-input m-b-16\">\n          <input [ngModel]=\"usuario.nombre\" name=\"nombre\" class=\"input100\" type=\"text\" required placeholder=\"Nombre del Usuario\">\n          <span class=\"focus-input100\"></span>\n      </div>\n\n\n      <div class=\"wrap-input100 validate-input m-b-16\">\n          <input [ngModel]=\"usuario.email\" name=\"email\" [disabled]=\"usuario.google\" class=\"input100\" type=\"text\" required placeholder=\"La Contraceña de Usuario\">\n          <span class=\"focus-input100\"></span>\n      </div>\n\n\n      <div class=\"container-login100-form-btn m-t-17\">\n          <button class=\"login100-form-btn\" type=\"submit\">\n          Salvar\n          </button>\n      </div> -->\n        <div class=\"form-group container\">\n            <label>Introdusca el Numero de Cedula</label>\n            <input #input type=\"text\" id=\"cedula\" class=\"form-control\" required>\n            <button (click)=\"buscarPacientes( input.value )\" class=\"btn btn-primary\">Buscar</button>\n        </div>\n        <tr *ngFor=\"let pacientes of paciente2\">\n\n            <div class=\"form-group\">\n                <label>Nombre del Paciente: </label>\n\n                <input [ngModel]=\"pacientes.Nombre\" name=\"Nombre\" type=\"text\" class=\"form-control\" required>\n            </div>\n\n            <!-- <td> {{ pacientes.Nombre }} </td> -->\n            <td>\n\n                <!-- <img [src]=\"pacientes.img | imagen\" class=\"w150\">\n                <img *ngIf=\"imagenTemp\" [src]=\"imagenTemp\" class=\"w150\"> -->\n            </td>\n\n\n        </tr>\n        <a href=\" imgresult \"> {{ imgresult }}</a>\n\n        <!-- <div class=\"form-group\">\n            <label>Nombre del Paciente: </label>\n           \n            <input name=\"Nombre\" type=\"text\" class=\"form-control\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Empresa</label>\n            <input name=\"empresa\" type=\"text\" class=\"form-control\" required>\n        </div> -->\n\n        <!-- <div class=\"container\">\n\n            <button (click)=\"buscarPacientes( input.value )\" class=\"btn btn-primary\">Buscar</button>\n\n        </div> -->\n\n    </form>\n</div>\n\n<div class=\"col-md-8 p-3 mb-2 bg-light text-dark form-imageUpload\" align=\"center\">\n\n    <br>\n    <img *ngIf=\"!imagenTemp\" [src]=\"imag | imagen\" class=\"w150\">\n    <img *ngIf=\"imagenTemp\" [src]=\"imagenTemp\" class=\"w150\">\n    <input type=\"file\" (change)=\"seleccionImage($event.target.files[0])\">\n\n    <br>\n    <p></p>\n\n    <div class=\"form-group row\">\n        <div class=\"col-sm-10 \">\n            <button [disabled]=\"!imagenSubir\" type=\"submit \" class=\"btn btn-primary \"> <i class=\"fa fa-save\"></i> Actualizar Foto</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/resulanalisis/resulanalisis.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/resulanalisis/resulanalisis.component.ts ***!
  \****************************************************************/
/*! exports provided: ResulanalisisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResulanalisisComponent", function() { return ResulanalisisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/pacientes/paciente.service */ "./src/app/service/pacientes/paciente.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");




var ResulanalisisComponent = /** @class */ (function () {
    function ResulanalisisComponent(_pacienteService) {
        this._pacienteService = _pacienteService;
        this.paciente = [];
    }
    ResulanalisisComponent.prototype.ngOnInit = function () {
    };
    ResulanalisisComponent.prototype.seleccionImage = function (archivo) {
        var _this = this;
        console.log(event);
        if (!archivo) {
            this.imagenSubir = null;
            return;
        }
        if (archivo.type.indexOf('imagen') < 0) {
            //  swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
            this.imagenSubir = null;
            return;
        }
        this.imagenSubir = archivo;
        // codigo javascript
        var reader = new FileReader();
        var urlImagenTemp = reader.readAsDataURL(archivo);
        reader.onloadend = function () { return _this.imagenTemp = reader.result; };
    };
    ResulanalisisComponent.prototype.retornarimg = function (img) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/imagenaudiometria/' + img;
        this.imgresult = url;
    };
    ResulanalisisComponent.prototype.buscarPacientes = function (termino) {
        var _this = this;
        console.log('Cedula Enviada: ' + termino);
        if (termino.length <= 0) {
            // this.cargarPaciente();
            return;
        }
        this._pacienteService.buscarPacientes(termino)
            .subscribe(function (resp) {
            _this.paciente = resp;
            console.log(_this.paciente[0].img);
            _this.imag = _this.paciente[0].img;
            _this.retornarimg(_this.paciente[0].img);
        });
        // console.log(this.paciente);
        //   console.log('Resultados: ' + this.paciente);   //  [routerLink]="['/otoscopia', pacientes.Cedula]"
        // });
    };
    ResulanalisisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resulanalisis',
            template: __webpack_require__(/*! ./resulanalisis.component.html */ "./src/app/pages/resulanalisis/resulanalisis.component.html"),
            styles: [__webpack_require__(/*! ./resulanalisis.component.css */ "./src/app/pages/resulanalisis/resulanalisis.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_2__["PacienteService"]])
    ], ResulanalisisComponent);
    return ResulanalisisComponent;
}());



/***/ }),

/***/ "./src/app/pages/salas/salacomputadoras.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/salas/salacomputadoras.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> SALA DE COMPUTADORAS</h1>\n<div class=\"row animated fadeIn\" *ngIf=\"cargando\">\n\n\n\n    <div class=\"col-sm-12\">\n\n        <div class=\"alert alert-warning text-center\">\n            <strong>Cargando</strong>\n            <br>\n            <i class=\"fa fa-refresh fa-spin fa-2x\"></i>\n            <br>\n            <span>Espere por favor</span>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row animated fadeIn\" *ngIf=\"!cargando\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n\n                \n\n\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Usuario</th>\n                            <th>Titulo::Detalle</th>\n                            <th></th>\n                            <th>Fecha</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n\n\n\n                    <tbody>\n                        <tr *ngFor=\"let foro of foros\">\n                            <td class=\"w70\">\n                                <img [src]=\" foro.usuario.img | imagen \" class=\"img-50 img-circle pointer\"> {{ foro.usuario.nombre }}\n                            </td>\n                            <td>\n                                {{ foro.titulo }} :: {{ foro.detalle }}\n                            </td>\n                            <td>\n\n                            </td>\n                            <td>\n                                {{ foro.fecha }}\n                            </td>\n\n                        </tr>\n\n                    </tbody>\n\n                </table>\n\n                <button (click)=\"cambiardesde(-5)\" class=\"btn btn-secondary\">\n                Atras\n              </button>\n\n                <button (click)=\"cambiardesde(5)\" class=\"btn btn-secondary\">\n                  Delante\n                  \n              </button>\n\n\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"wrap-login100 p-t-50 p-b-90\">\n\n    <form #f=\"ngForm\" class=\"login100-form validate-form flex-sb flex-w\" (ngSubmit)=\"guardarforo( f )\">\n\n        <div class=\"form-group\">\n            <label>Titulo</label>\n            <input [ngModel]=\"titulo\" name=\"titulo\" type=\"text\" class=\"form-control\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Detalle</label>\n            <textarea [ngModel]=\"detalle\" name=\"detalle\" class=\"form-control\" rows=\"8\"></textarea>\n        </div>\n\n\n        <div class=\"container\">\n\n            <button type=\"submit\" class=\"btn btn-primary\">Subir</button>\n\n        </div>\n\n\n\n    </form>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/salas/salacomputadoras.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/salas/salacomputadoras.component.ts ***!
  \***********************************************************/
/*! exports provided: SalacomputadorasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalacomputadorasComponent", function() { return SalacomputadorasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_salas_salas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/salas/salas.service */ "./src/app/service/salas/salas.service.ts");
/* harmony import */ var _models_foros_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/foros.model */ "./src/app/models/foros.model.ts");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/service.index */ "./src/app/service/service.index.ts");





var SalacomputadorasComponent = /** @class */ (function () {
    function SalacomputadorasComponent(_salaService, _usuarioService) {
        this._salaService = _salaService;
        this._usuarioService = _usuarioService;
        this.fecha = new Date();
        this.fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();
        this.categoria = '5bfd45e612228e2918cf60c7';
        this.foros = [];
        this.desde = 0;
        this.cargando = true;
        this.usuario = this._usuarioService.usuario;
    }
    SalacomputadorasComponent.prototype.ngOnInit = function () {
        // this.cargarForo();
    };
    SalacomputadorasComponent.prototype.guardarforo = function (forma) {
        var foro = new _models_foros_model__WEBPACK_IMPORTED_MODULE_3__["Foro"](forma.value.titulo, forma.value.detalle, this.fecha2.toString(), this.categoria); // , this.usuario._id
        console.log(foro);
        this._salaService.salvar(foro);
        //         .subscribe(resp => {
        //           console.log( resp );
        //         });
        // this.cargarForo();
    };
    SalacomputadorasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salacomputadoras',
            template: __webpack_require__(/*! ./salacomputadoras.component.html */ "./src/app/pages/salas/salacomputadoras.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_salas_salas_service__WEBPACK_IMPORTED_MODULE_2__["SalasService"], _service_service_index__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], SalacomputadorasComponent);
    return SalacomputadorasComponent;
}());



/***/ }),

/***/ "./src/app/pages/salas/salaimpresoras.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/salas/salaimpresoras.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn\" *ngIf=\"cargando\">\n\n    <div class=\"col-sm-12\">\n\n        <div class=\"alert alert-warning text-center\">\n            <strong>Cargando</strong>\n            <br>\n            <i class=\"fa fa-refresh fa-spin fa-2x\"></i>\n            <br>\n            <span>Espere por favor</span>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row animated fadeIn\" *ngIf=\"!cargando\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n\n                <h3 class=\"card-title\">Registros ( <small>  </small> )</h3>\n\n\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Usuario</th>\n                            <th>Titulo::Detalle</th>\n                            <th></th>\n                            <th>Fecha</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n\n\n\n                    <tbody>\n                        <tr *ngFor=\"let foro of foros\">\n                            <td class=\"w70\">\n                                <img [src]=\" foro.usuario.img | imagen \" class=\"img-50 img-circle pointer\"> {{ foro.usuario.nombre }}\n                            </td>\n                            <td>\n                                {{ foro.titulo }} :: {{ foro.detalle }}\n                            </td>\n                            <td>\n\n                            </td>\n                            <td>\n                                {{ foro.fecha }}\n                            </td>\n\n                        </tr>\n\n                    </tbody>\n\n                </table>\n\n                <button (click)=\"cambiardesde(-5)\" class=\"btn btn-secondary\">\n              Atras\n            </button>\n\n                <button (click)=\"cambiardesde(5)\" class=\"btn btn-secondary\">\n                Delante\n                \n            </button>\n\n\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"wrap-login100 p-t-50 p-b-90\">\n\n    <form #f=\"ngForm\" class=\"login100-form validate-form flex-sb flex-w\" (ngSubmit)=\"guardarforo( f )\">\n\n        <div class=\"form-group\">\n            <label>Titulo</label>\n            <input [ngModel]=\"titulo\" name=\"titulo\" type=\"text\" class=\"form-control\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Detalle</label>\n            <textarea [ngModel]=\"detalle\" name=\"detalle\" class=\"form-control\" rows=\"3\"></textarea>\n        </div>\n\n\n        <div class=\"container\">\n\n            <button type=\"submit\" class=\"btn btn-primary\">Subir</button>\n\n        </div>\n\n\n\n    </form>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/salas/salaimpresoras.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/salas/salaimpresoras.component.ts ***!
  \*********************************************************/
/*! exports provided: SalaimpresorasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaimpresorasComponent", function() { return SalaimpresorasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_salas_salas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/salas/salas.service */ "./src/app/service/salas/salas.service.ts");
/* harmony import */ var _models_foros_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/foros.model */ "./src/app/models/foros.model.ts");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/service.index */ "./src/app/service/service.index.ts");





var SalaimpresorasComponent = /** @class */ (function () {
    function SalaimpresorasComponent(_salaService, _usuarioService) {
        this._salaService = _salaService;
        this._usuarioService = _usuarioService;
        this.fecha = new Date();
        this.fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();
        this.categoria = '5c0133ab231a1a16dce73d5a';
        this.foros = [];
        this.desde = 0;
        this.cargando = true;
        this.usuario = this._usuarioService.usuario;
    }
    SalaimpresorasComponent.prototype.ngOnInit = function () {
        this.cargarForo();
    };
    SalaimpresorasComponent.prototype.guardarforo = function (forma) {
        var foro = new _models_foros_model__WEBPACK_IMPORTED_MODULE_3__["Foro"](forma.value.titulo, forma.value.detalle, this.fecha2.toString(), this.categoria, this.usuario._id);
        console.log(foro);
        // this._salaService.salvar( foro )
        //         .subscribe(resp => {
        //           console.log( resp );
        //         });
        // this.cargarForo();
    };
    SalaimpresorasComponent.prototype.cargarForo = function () {
        var _this = this;
        this.cargando = true;
        this._salaService.cargarForo(this.categoria, this.desde)
            .subscribe(function (resp) {
            console.log(resp);
            _this.foros = resp.foro;
            _this.cargando = false;
        });
    };
    SalaimpresorasComponent.prototype.cambiardesde = function (valor) {
        var desde = this.desde + valor;
        if (desde >= 100) {
            return;
        }
        if (desde < 0) {
            return;
        }
        this.desde += valor;
        this.cargarForo();
    };
    SalaimpresorasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salaimpresoras',
            template: __webpack_require__(/*! ./salaimpresoras.component.html */ "./src/app/pages/salas/salaimpresoras.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_salas_salas_service__WEBPACK_IMPORTED_MODULE_2__["SalasService"], _service_service_index__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], SalaimpresorasComponent);
    return SalaimpresorasComponent;
}());



/***/ }),

/***/ "./src/app/pages/salas/salalaptos.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/salas/salalaptos.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn\" *ngIf=\"cargando\">\n\n    <div class=\"col-sm-12\">\n\n        <div class=\"alert alert-warning text-center\">\n            <strong>Cargando</strong>\n            <br>\n            <i class=\"fa fa-refresh fa-spin fa-2x\"></i>\n            <br>\n            <span>Espere por favor</span>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row animated fadeIn\" *ngIf=\"!cargando\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n\n                <h3 class=\"card-title\">Registros ( <small>  </small> )</h3>\n\n\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Usuario</th>\n                            <th>Titulo::Detalle</th>\n                            <th></th>\n                            <th>Fecha</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n\n\n\n                    <tbody>\n                        <tr *ngFor=\"let foro of foros\">\n                            <td class=\"w70\">\n                                <img [src]=\" foro.usuario.img | imagen \" class=\"img-50 img-circle pointer\"> {{ foro.usuario.nombre }}\n                            </td>\n                            <td>\n                                {{ foro.titulo }} :: {{ foro.detalle }}\n                            </td>\n                            <td>\n\n                            </td>\n                            <td>\n                                {{ foro.fecha }}\n                            </td>\n\n                        </tr>\n\n                    </tbody>\n\n                </table>\n\n                <button (click)=\"cambiardesde(-5)\" class=\"btn btn-secondary\">\n              Atras\n            </button>\n\n                <button (click)=\"cambiardesde(5)\" class=\"btn btn-secondary\">\n                Delante\n                \n            </button>\n\n\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"wrap-login100 p-t-50 p-b-90\">\n\n    <form #f=\"ngForm\" class=\"login100-form validate-form flex-sb flex-w\" (ngSubmit)=\"guardarforo( f )\">\n\n        <div class=\"form-group\">\n            <label>Titulo</label>\n            <input [ngModel]=\"titulo\" name=\"titulo\" type=\"text\" class=\"form-control\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Detalle</label>\n            <textarea [ngModel]=\"detalle\" name=\"detalle\" rows=\"3\" cols=\"40\" class=\"form-control\"></textarea>\n        </div>\n\n\n        <div class=\"container\">\n\n            <button type=\"submit\" class=\"btn btn-primary\">Subir</button>\n\n        </div>\n\n\n\n    </form>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/salas/salalaptos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/salas/salalaptos.component.ts ***!
  \*****************************************************/
/*! exports provided: SalalaptosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalalaptosComponent", function() { return SalalaptosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_salas_salas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/salas/salas.service */ "./src/app/service/salas/salas.service.ts");
/* harmony import */ var _models_foros_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/foros.model */ "./src/app/models/foros.model.ts");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/service.index */ "./src/app/service/service.index.ts");





var SalalaptosComponent = /** @class */ (function () {
    function SalalaptosComponent(_salaService, _usuarioService) {
        this._salaService = _salaService;
        this._usuarioService = _usuarioService;
        this.fecha = new Date();
        this.fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();
        this.categoria = '5c0133bf231a1a16dce73d5b';
        this.foros = [];
        this.desde = 0;
        this.cargando = true;
        this.usuario = this._usuarioService.usuario;
    }
    SalalaptosComponent.prototype.ngOnInit = function () {
        this.cargarForo();
    };
    SalalaptosComponent.prototype.guardarforo = function (forma) {
        var foro = new _models_foros_model__WEBPACK_IMPORTED_MODULE_3__["Foro"](forma.value.titulo, forma.value.detalle, this.fecha2.toString(), this.categoria, this.usuario._id);
        console.log(foro);
        // this._salaService.salvar( foro )
        //         .subscribe(resp => {
        //           console.log( resp );
        //         });
        // this.cargarForo();
    };
    SalalaptosComponent.prototype.cargarForo = function () {
        var _this = this;
        this.cargando = true;
        this._salaService.cargarForo(this.categoria, this.desde)
            .subscribe(function (resp) {
            console.log(resp);
            _this.foros = resp.foro;
            _this.cargando = false;
        });
    };
    SalalaptosComponent.prototype.cambiardesde = function (valor) {
        var desde = this.desde + valor;
        if (desde >= 100) {
            return;
        }
        if (desde < 0) {
            return;
        }
        this.desde += valor;
        this.cargarForo();
    };
    SalalaptosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salalaptos',
            template: __webpack_require__(/*! ./salalaptos.component.html */ "./src/app/pages/salas/salalaptos.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_salas_salas_service__WEBPACK_IMPORTED_MODULE_2__["SalasService"], _service_service_index__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], SalalaptosComponent);
    return SalalaptosComponent;
}());



/***/ }),

/***/ "./src/app/pages/servicios/serviciopage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/servicios/serviciopage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-login100 p-t-50 p-b-90\">\n\n    <form ngNativeValidate #f=\"ngForm\" (ngSubmit)=\"guardarServicio( f.value )\" class=\"login100-form validate-form flex-sb flex-w\">\n\n        <!-- <div class=\"wrap-input100 validate-input m-b-16\">\n          <input [ngModel]=\"usuario.nombre\" name=\"nombre\" class=\"input100\" type=\"text\" required placeholder=\"Nombre del Usuario\">\n          <span class=\"focus-input100\"></span>\n      </div>\n\n\n      <div class=\"wrap-input100 validate-input m-b-16\">\n          <input [ngModel]=\"usuario.email\" name=\"email\" [disabled]=\"usuario.google\" class=\"input100\" type=\"text\" required placeholder=\"La Contraceña de Usuario\">\n          <span class=\"focus-input100\"></span>\n      </div>\n\n\n      <div class=\"container-login100-form-btn m-t-17\">\n          <button class=\"login100-form-btn\" type=\"submit\">\n          Salvar\n          </button>\n      </div> -->\n\n        <div class=\"form-group\">\n            <label>Asunto</label>\n            <input [ngModel]=\"asunto\" name=\"asunto\" type=\"text\" class=\"form-control\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Descriccion</label>\n            <textarea [ngModel]=\"detalle\" name=\"detalle\" class=\"form-control\" rows=\"8\"></textarea>\n        </div>\n\n        <div class=\"container\">\n\n            <button type=\"submit\" class=\"btn btn-primary\">Aceptar</button>\n\n        </div>\n\n    </form>\n</div>\n\n<div class=\"col-md-5 p-3 mb-2 bg-light text-dark \" align=\"center\">\n\n    <p></p>\n\n    <div class=\"form-group row\">\n        <div class=\"col-sm-10 \">\n            <button class=\"btn btn-primary \"> <i class=\"fa fa-save\"></i>Adjuntar Foto</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/servicios/serviciopage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/servicios/serviciopage.component.ts ***!
  \***********************************************************/
/*! exports provided: ServiciopageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciopageComponent", function() { return ServiciopageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_servicio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/servicio */ "./src/app/models/servicio.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/service.index */ "./src/app/service/service.index.ts");
/* harmony import */ var _service_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/servicio/servicio.service */ "./src/app/service/servicio/servicio.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);






var ServiciopageComponent = /** @class */ (function () {
    function ServiciopageComponent(_servicioService, _usuarioService) {
        this._servicioService = _servicioService;
        this._usuarioService = _usuarioService;
        this.fecha = new Date();
        this.fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();
        this.servicio = [];
        this.desde = 0;
        this.usuario = this._usuarioService.usuario;
    }
    ServiciopageComponent.prototype.ngOnInit = function () {
    };
    ServiciopageComponent.prototype.guardarServicio = function (forma) {
        var servicio = new _models_servicio__WEBPACK_IMPORTED_MODULE_1__["Servicio"](forma.value.asunto, forma.value.detalle, this.fecha2.toString(), this.usuario._id);
        console.log(servicio);
        this._servicioService.salvar(servicio)
            .subscribe(function (resp) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()('Exelente', 'Ya eres Premium!!', 'success');
            console.log(resp);
        });
    };
    ServiciopageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-serviciopage',
            template: __webpack_require__(/*! ./serviciopage.component.html */ "./src/app/pages/servicios/serviciopage.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_4__["ServicioService"], _service_service_index__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], ServiciopageComponent);
    return ServiciopageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tablas/tablas.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/tablas/tablas.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n    background-color: white;\r\n}\r\n\r\n.pacientesLista {\r\n    display: inline-block;\r\n    width: 41rem;\r\n}\r\n\r\nlabel,\r\ninput {\r\n    display: inline-block;\r\n}\r\n\r\n.date-input {\r\n    display: inline-block;\r\n}\r\n\r\n.date-label {\r\n    display: block !important;\r\n}\r\n\r\n.check-div {\r\n    display: inline-block;\r\n}\r\n\r\n.input-inline {\r\n    display: inline-block;\r\n}\r\n\r\n.form-group {\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 15px 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.radio-container {\r\n    display: inline-block;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGFzL3RhYmxhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7Q0FDaEI7O0FBRUQ7O0lBRUksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxhcy90YWJsYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBhY2llbnRlc0xpc3RhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA0MXJlbTtcclxufVxyXG5cclxubGFiZWwsXHJcbmlucHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRhdGUtaW5wdXQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZGF0ZS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hlY2stZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmlucHV0LWlubGluZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnJhZGlvLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tablas/tablas.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/tablas/tablas.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-vw\">\n    <div class=\"container form-container pacientesLista\">\n        <form [formGroup]=\"forma\" (ngSubmit)=\"GuardarUltimoMeses()\">\n            <div class=\"row justify-content-center container-row\">\n                <h3 class=\"\">Historia Clinica Otologica</h3>\n            </div>\n            <div class=\"table-responsive\" style=\"margin-top: 2rem\">\n                <label style=\"color:cadetblue\">D. I. A. = Derecha, Izquierda, Ambas</label>\n                <table class=\"table table-striped table-bordered\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">En los ultimos meses ha tenido</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Dolor de o&iacute;dos?\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"DolorO\" name=\"DolorO\" type=\"radio\" class=\"custom-control-input\" id=\"HCOdolorOidos-D\" value=\"D\">\n                                        <label class=\"custom-control-label\" for=\"HCOdolorOidos-D\">D</label>\n                                    </div>\n\n                                    <!-- Default inline 2-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"DolorO\" name=\"DolorO\" type=\"radio\" class=\"custom-control-input\" id=\"HCOdolorOidos-I\" value=\"I\">\n                                        <label class=\"custom-control-label\" for=\"HCOdolorOidos-I\">I</label>\n                                    </div>\n\n                                    <!-- Default inline 3-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"DolorO\" name=\"DolorO\" type=\"radio\" class=\"custom-control-input\" id=\"HCOdolorOidos-A\" value=\"A\">\n                                        <label class=\"custom-control-label\" for=\"HCOdolorOidos-A\">A</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Supuracion o sangrado?\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"SupuracionS\" name=\"SupuracionS\" type=\"radio\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsos-D\" value=\"D\">\n                                        <label class=\"custom-control-label\" for=\"HCOsos-D\">D</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"SupuracionS\" name=\"SupuracionS\" type=\"radio\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsos-I\" value=\"I\">\n                                        <label class=\"custom-control-label\" for=\"HCOsos-I\">I</label>\n                                    </div>\n\n                                    <!-- Default inline A-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"SupuracionS\" name=\"SupuracionS\" type=\"radio\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsos-A\" value=\"A\">\n                                        <label class=\"custom-control-label\" for=\"HCOsos-A\">A</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td>Ruido,tinitus o zumbidos\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"RuidoTZ\" name=\"RuidoTZ\" type=\"radio\" class=\"custom-control-input\" id=\"HCOrtz-D\" value=\"D\">\n                                        <label class=\"custom-control-label\" for=\"HCOrtz-D\">D</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"RuidoTZ\" name=\"RuidoTZ\" type=\"radio\" class=\"custom-control-input\" id=\"HCOrtz-I\" value=\"I\">\n                                        <label class=\"custom-control-label\" for=\"HCOrtz-I\">I</label>\n                                    </div>\n\n                                    <!-- Default inline A-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"RuidoTZ\" name=\"RuidoTZ\" type=\"radio\" class=\"custom-control-input\" id=\"HCOrtz-A\" value=\"A\">\n                                        <label class=\"custom-control-label\" for=\"HCOrtz-A\">A</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">4</th>\n                            <td>Mareo/Vertigo\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"MareoV\" name=\"MareoV\" type=\"radio\" class=\"custom-control-input\" id=\"HCOmareoVertigo-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOmareoVertigo-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"MareoV\" name=\"MareoV\" type=\"radio\" class=\"custom-control-input\" id=\"HCOmareoVertigo-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOmareoVertigo-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">5</th>\n                            <td>Sordera s&uacute;bita\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"SorderaS\" name=\"SorderaS\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsorderaSubita-D\" value=\"D\">\n                                        <label class=\"custom-control-label\" for=\"HCOsorderaSubita-D\">D</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"SorderaS\" name=\"SorderaS\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsorderaSubita-I\" value=\"I\">\n                                        <label class=\"custom-control-label\" for=\"HCOsorderaSubita-I\">I</label>\n                                    </div>\n\n                                    <!-- Default inline A-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"SorderaS\" name=\"SorderaS\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsorderaSubita-A\" value=\"A\">\n                                        <label class=\"custom-control-label\" for=\"HCOsorderaSubita-A\">A</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">6</th>\n                            <td>Sordera fluctuante\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"SorderaF\" name=\"SorderaF\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsorderaFluctuante-D\" value=\"D\">\n                                        <label class=\"custom-control-label\" for=\"HCOsorderaFluctuante-D\">D</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"SorderaF\" name=\"SorderaF\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsorderaFluctuante-I\" value=\"I\">\n                                        <label class=\"custom-control-label\" for=\"HCOsorderaFluctuante-I\">I</label>\n                                    </div>\n\n                                    <!-- Default inline A-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"SorderaF\" name=\"SorderaF\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsorderaFluctuante-A\" value=\"A\">\n                                        <label class=\"custom-control-label\" for=\"HCOsorderaFluctuante-A\">A</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">7</th>\n                            <td>Tapados/Malestar/Llenura\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"TapadoML\" name=\"TapadoML\" type=\"radio\" class=\"custom-control-input\" id=\"HCOtpl-D\" value=\"D\">\n                                        <label class=\"custom-control-label\" for=\"HCOtpl-D\">D</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"TapadoML\" name=\"TapadoML\" type=\"radio\" class=\"custom-control-input\" id=\"HCOtpl-I\" value=\"I\">\n                                        <label class=\"custom-control-label\" for=\"HCOtpl-I\">I</label>\n                                    </div>\n\n                                    <!-- Default inline A-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"TapadoML\" name=\"TapadoML\" type=\"radio\" class=\"custom-control-input\" id=\"HCOtpl-A\" value=\"A\">\n                                        <label class=\"custom-control-label\" for=\"HCOtpl-A\">A</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">8</th>\n                            <td>Dolor o molestia al ruido\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"DolorMR\" name=\"DolorMR\" type=\"radio\" class=\"custom-control-input\" id=\"HCOdolorMR-D\" value=\"D\">\n                                        <label class=\"custom-control-label\" for=\"HCOdolorMR-D\">D</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"DolorMR\" name=\"DolorMR\" type=\"radio\" class=\"custom-control-input\" id=\"HCOdolorMR-I\" value=\"I\">\n                                        <label class=\"custom-control-label\" for=\"HCOdolorMR-I\">I</label>\n                                    </div>\n\n                                    <!-- Default inline A-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"DolorMR\" name=\"DolorMR\" type=\"radio\" class=\"custom-control-input\" id=\"HCOdolorMR-A\" value=\"A\">\n                                        <label class=\"custom-control-label\" for=\"HCOdolorMR-A\">A</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">9</th>\n                            <td>Golpes fuertes en la cabeza u o&iacute;dos\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"GolpesCO\" name=\"GolpesCO\" type=\"radio\" class=\"custom-control-input\" id=\"HCOgolpesFuertesCO-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOgolpesFuertesCO-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"GolpesCO\" name=\"GolpesCO\" type=\"radio\" class=\"custom-control-input\" id=\"HCOgolpesFuertesCO-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOgolpesFuertesCO-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">10</th>\n                            <td>Presion arterial alta\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"PAA\" name=\"PAA\" type=\"radio\" class=\"custom-control-input\" id=\"HCOprAlta-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOprAlta-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"PAA\" name=\"PAA\" type=\"radio\" class=\"custom-control-input\" id=\"HCOprAlta-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOprAlta-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">11</th>\n                            <td>Medicinas permanentes que usa\n                                <input formControlName=\"MedicamentosP\" name=\"MedicamentosP\" type=\"text\" class=\"form-control\" id=\"HCOmedicinasP\" placeholder=\"Medicinas permanentes\">\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">Separe los nombres con una ,</small>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <table class=\"table table-striped table-bordered\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">Durante su vida</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">12</th>\n                            <td>Fiebre muy alta cuando ni&ntilde;o\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Fiebre\" name=\"Fiebre\" type=\"radio\" class=\"custom-control-input\" id=\"HCOfiebreAltaN-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOfiebreAltaN-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Fiebre\" name=\"Fiebre\" type=\"radio\" class=\"custom-control-input\" id=\"HCOfiebreAltaN-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOfiebreAltaN-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">13</th>\n                            <td>Consulto por oidos‎ ¿Porque?\n                                <input formControlName=\"ConsultoO\" name=\"ConsultoO\" type=\"text\" class=\"form-control\" id=\"HCOconsOidos\" placeholder=\"Consulto por oidos\">\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">14</th>\n                            <td>Operacion de o&iacute;dos ¿Cual?\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"OperacionO\" name=\"OperacionO\" type=\"radio\" class=\"custom-control-input\" id=\"HCOoprOidos-D\" value=\"D\">\n                                        <label class=\"custom-control-label\" for=\"HCOoprOidos-D\">D</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"OperacionO\" name=\"OperacionO\" type=\"radio\" class=\"custom-control-input\" id=\"HCOoprOidos-I\" value=\"I\">\n                                        <label class=\"custom-control-label\" for=\"HCOoprOidos-I\">I</label>\n                                    </div>\n\n                                    <!-- Default inline A-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"OperacionO\" name=\"OperacionO\" type=\"radio\" class=\"custom-control-input\" id=\"HCOoprOidos-A\" value=\"A\">\n                                        <label class=\"custom-control-label\" for=\"HCOoprOidos-A\">A</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">15</th>\n                            <td>Perdida de la conciencia\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"PerdidaC\" name=\"PerdidaC\" type=\"radio\" class=\"custom-control-input\" id=\"HCOperConciencia-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOperConciencia-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"PerdidaC\" name=\"PerdidaC\" type=\"radio\" class=\"custom-control-input\" id=\"HCOperConciencia-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOperConciencia-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">16</th>\n                            <td>Paperas\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Paperas\" name=\"Paperas\" type=\"radio\" class=\"custom-control-input\" id=\"HCOpaperas-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOpaperas-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Paperas\" name=\"Paperas\" type=\"radio\" class=\"custom-control-input\" id=\"HCOpaperas-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOpaperas-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">17</th>\n                            <td>Escarlatina\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Escarlatina\" name=\"Escarlatina\" type=\"radio\" class=\"custom-control-input\" id=\"HCOescarlatina-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOescarlatina-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Escarlatina\" name=\"Escarlatina\" type=\"radio\" class=\"custom-control-input\" id=\"HCOescarlatina-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOescarlatina-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">18</th>\n                            <td>Sarampi&oacute;n\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Sarampion\" name=\"Sarampion\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsarampion-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOsarampion-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Sarampion\" name=\"Sarampion\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsarampion-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOsarampion-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">19</th>\n                            <td>Meningitis\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Meningitis\" name=\"Meningitis\" type=\"radio\" class=\"custom-control-input\" id=\"HCOmeningitis-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOmeningitis-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Meningitis\" name=\"Meningitis\" type=\"radio\" class=\"custom-control-input\" id=\"HCOmeningitis-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOmeningitis-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">20</th>\n                            <td>Diabetes\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Diabetes\" name=\"Diabetes\" type=\"radio\" class=\"custom-control-input\" id=\"HCOdiabetes-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOdiabetes-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Diabetes\" name=\"Diabetes\" type=\"radio\" class=\"custom-control-input\" id=\"HCOdiabetes-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOdiabetes-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">21</th>\n                            <td>Enfermedad del ri&ntilde;on\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"ERinones\" name=\"ERinones\" type=\"radio\" class=\"custom-control-input\" id=\"HCOenfRinon-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOenfRinon-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"ERinones\" name=\"ERinones\" type=\"radio\" class=\"custom-control-input\" id=\"HCOenfRinon-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOenfRinon-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">22</th>\n                            <td>Alergias\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Alergias\" name=\"Alergias\" type=\"radio\" class=\"custom-control-input\" id=\"HCOalergias-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOalergias-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Alergias\" name=\"Alergias\" type=\"radio\" class=\"custom-control-input\" id=\"HCOalergias-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOalergias-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">23</th>\n                            <td>Ejecuta instrumentos de musica\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"InstrumentosM\" name=\"InstrumentosM\" type=\"radio\" class=\"custom-control-input\" id=\"HCOinsMusica-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOinsMusica-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"InstrumentosM\" name=\"InstrumentosM\" type=\"radio\" class=\"custom-control-input\" id=\"HCOinsMusica-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOinsMusica-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">24</th>\n                            <td>Sordera en su familia\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"SFamilia\" name=\"SFamilia\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsorFamilia-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOsorFamilia-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"SFamilia\" name=\"SFamilia\" type=\"radio\" class=\"custom-control-input\" id=\"HCOsorFamilia-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOsorFamilia-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">25</th>\n                            <td>Servicio militar\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"ServicioM\" name=\"ServicioM\" type=\"radio\" class=\"custom-control-input\" id=\"HCOserMilitar-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOserMilitar-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"ServicioM\" name=\"ServicioM\" type=\"radio\" class=\"custom-control-input\" id=\"HCOserMilitar-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOserMilitar-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">26</th>\n                            <td>En casa usa maquina ruidosa ¿Cuantas horas?\n                                <input formControlName=\"MRCasaHoras\" name=\"MRCasaHoras\" type=\"text\" class=\"form-control\" id=\"HCOmaqRuidosa\" placeholder=\"¿Cuantas horas?\">\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">Ponga el numero de horas.</small>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">27</th>\n                            <td>Musica fuerte/Audifonos ¿Cuantas horas?\n                                <input formControlName=\"MFuerte\" name=\"MFuerte\" type=\"text\" class=\"form-control\" id=\"HCOmusFuerte\" placeholder=\"Cuantas horas\">\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">Ponga el numero de horas.</small>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">28</th>\n                            <td>Pasatiempo ruidoso caceria\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"PasatiempoR\" name=\"PasatiempoR\" type=\"radio\" class=\"custom-control-input\" id=\"HCOpasRuidoso-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOpasRuidoso-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"PasatiempoR\" name=\"PasatiempoR\" type=\"radio\" class=\"custom-control-input\" id=\"HCOpasRuidoso-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOpasRuidoso-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">29</th>\n                            <td>Quema cohetes u otros?\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Cohetes\" name=\"Cohetes\" type=\"radio\" class=\"custom-control-input\" id=\"HCOqueCohetes-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOqueCohetes-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Cohetes\" name=\"Cohetes\" type=\"radio\" class=\"custom-control-input\" id=\"HCOqueCohetes-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOqueCohetes-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">30</th>\n                            <td>Usa o us&oacute; armas de fuego ¿Años y calibre?\n                                <input formControlName=\"ArmasF\" name=\"ArmasF\" type=\"text\" class=\"form-control\" id=\"HCOarmCalibre\" placeholder=\"Años y calibre\">\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">Separe los nombres con una ,</small>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">31</th>\n                            <td>Ha usado gentamicina kanamicina\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Gentamicina\" name=\"Gentamicina\" type=\"radio\" class=\"custom-control-input\" id=\"HCOgenKanamicina-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOgenKanamicina-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Gentamicina\" name=\"Gentamicina\" type=\"radio\" class=\"custom-control-input\" id=\"HCOgenKanamicina-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOgenKanamicina-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">32</th>\n                            <td>Ha usado quinina, estreptomicina\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Quinina\" name=\"Quinina\" type=\"radio\" class=\"custom-control-input\" id=\"HCOquinEstreptomicina-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOquinEstreptomicina-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Quinina\" name=\"Quinina\" type=\"radio\" class=\"custom-control-input\" id=\"HCOquinEstreptomicina-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOquinEstreptomicina-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">33</th>\n                            <td>Trabaja con qu&iacute;micos o insecticidas ¿Cuales?\n                                <input formControlName=\"Quimicos\" name=\"Quimicos\" type=\"text\" class=\"form-control\" id=\"HCOquiInsecticidas\" placeholder=\"¿Cuales?\">\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">Separe los nombres con una ,</small>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">34</th>\n                            <td>Anotar trabajos anteriores si labor&oacute; con ruido y/o qu&iacute;micos y cuantos a&ntilde;os\n                                <input formControlName=\"TrabajoAnt\" name=\"TrabajoAnt\" type=\"text\" class=\"form-control\" id=\"HCOtraAnteriores\" placeholder=\"Anotar trabajos anteriores y qumicos\">\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">Separe los nombres con una ,</small>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <table class=\"table table-striped table-bordered\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">Entre ayer y hoy</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">35</th>\n                            <td>Lleg&oacute; en motocicleta a su examen\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Moto\" name=\"Moto\" type=\"radio\" class=\"custom-control-input\" id=\"HCOmotExamen-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOmotExamen-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Moto\" name=\"Moto\" type=\"radio\" class=\"custom-control-input\" id=\"HCOmotExamen-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOmotExamen-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">36</th>\n                            <td>Lleg&oacute; en bus y sentado cerca del ruido del motor y por mas de 1 hora\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Bus\" name=\"Bus\" type=\"radio\" class=\"custom-control-input\" id=\"HCOruiMotor-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOruiMotor-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Bus\" name=\"Bus\" type=\"radio\" class=\"custom-control-input\" id=\"HCOruiMotor-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOruiMotor-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">37</th>\n                            <td>Sufre gripe/resfriado y oidos tapados\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Gripe\" name=\"Gripe\" type=\"radio\" class=\"custom-control-input\" id=\"HCOgriResfriado-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOgriResfriado-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Gripe\" name=\"Gripe\" type=\"radio\" class=\"custom-control-input\" id=\"HCOgriResfriado-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOgriResfriado-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">38</th>\n                            <td>Estuvo con ruido fuerte sin proteccion\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"RFSinProt\" name=\"RFSinProt\" type=\"radio\" class=\"custom-control-input\" id=\"HCOruiSinProteccion-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOruiSinProteccion-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"RFSinProt\" name=\"RFSinProt\" type=\"radio\" class=\"custom-control-input\" id=\"HCOruiSinProteccion-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOruiSinProteccion-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">39</th>\n                            <td>Asistio a una fiesta con musica fuerte\n                                <div class=\"radio-container\">\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Fiesta\" name=\"Fiesta\" type=\"radio\" class=\"custom-control-input\" id=\"HCOfieMusicaFuerte-Si\" value=\"Si\">\n                                        <label class=\"custom-control-label\" for=\"HCOfieMusicaFuerte-Si\">Si</label>\n                                    </div>\n\n                                    <!-- Default inline I-->\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\n                                        <input formControlName=\"Fiesta\" name=\"Fiesta\" type=\"radio\" class=\"custom-control-input\" id=\"HCOfieMusicaFuerte-No\" value=\"No\">\n                                        <label class=\"custom-control-label\" for=\"HCOfieMusicaFuerte-No\">No</label>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">40</th>\n                            <td>Otros datos complementarios\n                                <input formControlName=\"Otros\" name=\"Otros\" type=\"text\" class=\"form-control\" id=\"HCOdatosComplementarios\" placeholder=\"Datos complementarios\">\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">Escriba algun otro dato.</small>\n                            </td>\n                        </tr>\n\n\n                    </tbody>\n\n                </table>\n\n            </div>\n            <div class=\"container\">\n\n                <button type=\"submit\" class=\"btn btn-primary\">Subir</button>\n\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/tablas/tablas.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tablas/tablas.component.ts ***!
  \**************************************************/
/*! exports provided: TablasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablasComponent", function() { return TablasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_duranteV__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/duranteV */ "./src/app/models/duranteV.ts");
/* harmony import */ var _models_ayerH__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/ayerH */ "./src/app/models/ayerH.ts");
/* harmony import */ var _service_ayerhoy_ayerh_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/ayerhoy/ayerh.service */ "./src/app/service/ayerhoy/ayerh.service.ts");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/service.index */ "./src/app/service/service.index.ts");
/* harmony import */ var _models_ultimosM__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/ultimosM */ "./src/app/models/ultimosM.ts");










var TablasComponent = /** @class */ (function () {
    //  DolorO = 'A';
    //  SupuracionS = 'A';
    //  RuidoTZ = 'A';
    //  MareoV = 'A';
    //  SorderaS = 'A';
    //  SorderaF = 'A';
    //  TapadoML = 'A';
    //  DolorMR = 'A';
    //  GolpesCO = 'A';
    //  PAA = 'A';
    //  MedicamentosP = 'A';
    function TablasComponent(_ayerh, _duranteV, _ultimoM, activatedRoute) {
        var _this = this;
        this._ayerh = _ayerh;
        this._duranteV = _duranteV;
        this._ultimoM = _ultimoM;
        this.activatedRoute = activatedRoute;
        this.fecha = new Date();
        this.fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();
        activatedRoute.params.subscribe(function (params) {
            var cedula = params['Cedula'];
            _this.cedulas = cedula;
            if (cedula !== 'nuevo') {
                //   console.log('El Numero de Cedula es ');
            }
        });
    }
    TablasComponent.prototype.ngOnInit = function () {
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            DolorO: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            SupuracionS: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            RuidoTZ: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            MareoV: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            SorderaS: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            SorderaF: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            TapadoML: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            DolorMR: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            GolpesCO: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PAA: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            MedicamentosP: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Fiebre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ConsultoO: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            OperacionO: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PerdidaC: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Paperas: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Escarlatina: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Sarampion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Meningitis: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Diabetes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ERinones: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Alergias: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            InstrumentosM: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            SFamilia: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ServicioM: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            MRCasaHoras: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            MFuerte: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            PasatiempoR: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ArmasF: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Cohetes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Gentamicina: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Quinina: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Quimicos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            TrabajoAnt: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Moto: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Bus: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Gripe: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            RFSinProt: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Fiesta: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            Otros: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    TablasComponent.prototype.GuardarUltimoMeses = function () {
        var ultimomeses = new _models_ultimosM__WEBPACK_IMPORTED_MODULE_8__["UltimoMeses"](this.forma.value.DolorO, this.forma.value.SupuracionS, this.forma.value.RuidoTZ, this.forma.value.MareoV, this.forma.value.SorderaS, this.forma.value.SorderaF, this.forma.value.TapadoML, this.forma.value.DolorMR, this.forma.value.GolpesCO, this.forma.value.PAA, this.forma.value.MedicamentosP, this.cedulas);
        this._ultimoM.VerificarUltimosM(this.cedulas, ultimomeses)
            .subscribe(function (resp) { return console.log(resp); });
        // console.log(ultimomeses);
        this.GuardarDurantevida();
    };
    TablasComponent.prototype.GuardarDurantevida = function () {
        var durantevida = new _models_duranteV__WEBPACK_IMPORTED_MODULE_4__["DureanteVida"](this.forma.value.Fiebre, this.forma.value.ConsultoO, this.forma.value.OperacionO, this.forma.value.PerdidaC, this.forma.value.Paperas, this.forma.value.Escarlatina, this.forma.value.Sarampion, this.forma.value.Meningitis, this.forma.value.Diabetes, this.forma.value.ERinones, this.forma.value.Alergias, this.forma.value.InstrumentosM, this.forma.value.SFamilia, this.forma.value.ServicioM, this.forma.value.MRCasaHoras, this.forma.value.MFuerte, this.forma.value.PasatiempoR, this.forma.value.ArmasF, this.forma.value.Cohetes, this.forma.value.Gentamicina, this.forma.value.Quinina, this.forma.value.Quimicos, this.forma.value.TrabajoAnt, this.cedulas);
        this._duranteV.VerificarPaciente(this.cedulas, durantevida)
            .subscribe(function (resp) { return console.log(resp); });
        console.log(durantevida);
        this.GuardarAyerHoy();
    };
    TablasComponent.prototype.GuardarAyerHoy = function () {
        var ayerh = new _models_ayerH__WEBPACK_IMPORTED_MODULE_5__["AyerH"](this.forma.value.Moto, this.forma.value.Bus, this.forma.value.Gripe, this.forma.value.RFSinProt, this.forma.value.Fiesta, this.forma.value.Otros, this.cedulas);
        this._ayerh.VerificarAyerHoy(this.cedulas, ayerh)
            .subscribe(function (resp) { return console.log(resp); });
        console.log(ayerh);
    };
    TablasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tablas',
            template: __webpack_require__(/*! ./tablas.component.html */ "./src/app/pages/tablas/tablas.component.html"),
            styles: [__webpack_require__(/*! ./tablas.component.css */ "./src/app/pages/tablas/tablas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ayerhoy_ayerh_service__WEBPACK_IMPORTED_MODULE_6__["AyerhService"], _service_service_index__WEBPACK_IMPORTED_MODULE_7__["DurantevidaService"], _service_service_index__WEBPACK_IMPORTED_MODULE_7__["UltimomesesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TablasComponent);
    return TablasComponent;
}());



/***/ }),

/***/ "./src/app/pages/usuario/usuario.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/usuario/usuario.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated fadeIn\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n\n                <input #input (keyup)=\"buscarUsuario( input.value )\" type=\"text\" class=\"form-control\" placeholder=\"Buscar usuario...\">\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row animated fadeIn\" *ngIf=\"cargando\">\n\n    <div class=\"col-sm-12\">\n\n        <div class=\"alert alert-warning text-center\">\n            <strong>Cargando</strong>\n            <br>\n            <i class=\"fa fa-refresh fa-spin fa-2x\"></i>\n            <br>\n            <span>Espere por favor</span>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row animated fadeIn\" *ngIf=\"!cargando\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n\n                <h3 class=\"card-title\">Usuarios registrados ( <small> {{ totalRegistros }} </small> )</h3>\n\n\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Imagen</th>\n                            <th>Correo</th>\n                            <th>Nombre</th>\n                            <th>Role</th>\n\n                            <th>Auth</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr *ngFor=\"let usuario of usuarios\">\n                            <td class=\"w70\">\n                                <img (click)=\"mostrarModal(usuario._id)\" [src]=\" usuario.img | imagen \" class=\"img-50 img-circle pointer\">\n                            </td>\n                            <td>\n                                {{ usuario.email }}\n                            </td>\n                            <td> {{ usuario.nombre }} </td>\n                            <td>\n                                <select [(ngModel)]=\"usuario.role\" name=\"role\" class=\"form-control\">\n                                            <option value=\"ADMIN\">ADMIN</option>\n                                            <option value=\"USER\">USER</option>\n                                    </select>\n                            </td>\n\n                            <td>\n                                <label *ngIf=\"usuario.google\" class=\"label label-danger\">Google</label>\n                                <label *ngIf=\"!usuario.google\" class=\"label label-primary\">Normal</label>\n                            </td>\n                            <td>\n                                <button (click)=\"guardarUsuario(usuario)\" class=\"btn btn-primary\">\n                              <i class=\"fa fa-save\"></i>\n                            </button>\n\n                                <button (click)=\"borrarUsuario( usuario )\" class=\"btn btn-danger\">\n                                <i class=\"fa fa-trash-o\"></i>\n                              </button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n\n                </table>\n\n                <button (click)=\"cambiardesde(-5)\" class=\"btn btn-secondary\">\n                Atras\n              </button>\n\n                <button (click)=\"cambiardesde(5)\" class=\"btn btn-secondary\">\n                  Delante\n                  \n              </button>\n\n\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/usuario/usuario.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/usuario/usuario.component.ts ***!
  \****************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_modal_upload_modalupload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal-upload/modalupload.service */ "./src/app/components/modal-upload/modalupload.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/service.index */ "./src/app/service/service.index.ts");




var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(_usuarioService, _modalUploadService) {
        this._usuarioService = _usuarioService;
        this._modalUploadService = _modalUploadService;
        this.usuarios = [];
        this.desde = 0;
        this.cargando = true;
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        this.cargarUsuarios();
        // this._modalUploadService.notificacion
        //       .subscribe( resp => this.cargarUsuarios() );
    };
    UsuarioComponent.prototype.cargarUsuarios = function () {
        var _this = this;
        this.cargando = true;
        this._usuarioService.cargarUsuarios(this.desde)
            .subscribe(function (resp) {
            console.log(resp);
            _this.totalRegistros = resp.total;
            _this.usuarios = resp.usuarios;
            _this.cargando = false;
        });
    };
    UsuarioComponent.prototype.cambiardesde = function (valor) {
        var desde = this.desde + valor;
        if (desde >= this.totalRegistros) {
            return;
        }
        if (desde < 0) {
            return;
        }
        this.desde += valor;
        this.cargarUsuarios();
    };
    UsuarioComponent.prototype.buscarUsuario = function (termino) {
        var _this = this;
        if (termino.length <= 0) {
            this.cargarUsuarios();
            return;
        }
        this.cargando = true;
        this._usuarioService.buscarUsuarios(termino)
            .subscribe(function (usuarios) {
            _this.usuarios = usuarios;
            _this.cargando = false;
        });
    };
    UsuarioComponent.prototype.borrarUsuario = function (usuario) {
        var _this = this;
        if (usuario._id === this._usuarioService.usuario._id) {
            swal('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
            console.log('no se puede borar el mismo usuario');
            return;
        }
        // swal({
        //   title: '¿Esta seguro?',
        //   text: 'Esta a punto de borrar a ' + usuario.nombre,
        //   icon: 'warning',
        //   buttons: true,
        //   dangerMode: true,
        // })
        // .then( borrar => {
        // if (borrar) {
        this._usuarioService.borrarUsuario(usuario._id)
            .subscribe(function (borrado) {
            _this.cargarUsuarios();
        });
        // console.log( borrar );
        //   }
        // });
    };
    UsuarioComponent.prototype.guardarUsuario = function (usuario) {
        this._usuarioService.actualizarUsuario(usuario)
            .subscribe();
    };
    UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.component.html */ "./src/app/pages/usuario/usuario.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service_index__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _components_modal_upload_modalupload_service__WEBPACK_IMPORTED_MODULE_1__["ModaluploadService"]])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/pipes/imagen.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/imagen.pipe.ts ***!
  \**************************************/
/*! exports provided: ImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenPipe", function() { return ImagenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");



var ImagenPipe = /** @class */ (function () {
    function ImagenPipe() {
    }
    ImagenPipe.prototype.transform = function (img) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIO"] + '/imagenaudiometria/';
        console.log(img);
        if (!img) {
            return url + 'xxx';
        }
        if (img.indexOf('https') >= 0) {
            return img;
        }
        url += img;
        console.log(url);
        return;
        // switch ( tipo ) {
        //   case 'usuario':
        //     url += '/usuarios/' + img;
        //   break;
        //   default:
        //     console.log('tipo de imagen no existe, usuario');
        //     url += '/usuarios/xxx';
        // }
        // return url;
    };
    ImagenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'imagen'
        })
    ], ImagenPipe);
    return ImagenPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipe.module.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/pipe.module.ts ***!
  \**************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _imagen_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagen.pipe */ "./src/app/pipes/imagen.pipe.ts");



var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            declarations: [
                _imagen_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagenPipe"]
            ],
            exports: [
                _imagen_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagenPipe"]
            ]
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/service/audiograma/audiograma.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/audiograma/audiograma.service.ts ***!
  \**********************************************************/
/*! exports provided: AudiogramaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiogramaService", function() { return AudiogramaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");









var AudiogramaService = /** @class */ (function () {
    function AudiogramaService(http, router) {
        this.http = http;
        this.router = router;
    }
    AudiogramaService.prototype.crearAudiograma = function (audiograma) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/crear_audiograma';
        return this.http.post(url, audiograma)
            .map(function (resp) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Registro creado', 'success');
            // return resp.usuario;
        })
            .catch(function (err) {
            console.log(err.error.mensaje);
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(err.error.mensaje, err.error.errors.message, 'error');
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
        });
    };
    AudiogramaService.prototype.actualizarAudiograma = function (audiograma) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/editar_audiograma/' + audiograma.cedula;
        //  url += '?token=' + this.token;
        var verifica = Boolean;
        return this.http.put(url, audiograma)
            .map(function (resp) {
            verifica = resp.ok;
            if (verifica) {
                console.log('Registro Acualizado');
            }
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Registro actualizado', 'success');
        });
    };
    AudiogramaService.prototype.borrarAudiograma = function (id) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/borraraudiograma/' + id;
        //  url += '?token=' + this.token;
        return this.http.delete(url)
            .map(function (resp) {
            //   swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
            return true;
        });
    };
    AudiogramaService.prototype.cargarAudiogramaCedula = function (termino) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/buscaraudiograma/' + termino;
        return this.http.get(url)
            .map(function (resp) { return resp.audiograma; });
    };
    AudiogramaService.prototype.VerificarAudiograma = function (termino, audiograma) {
        var _this = this;
        var verificar;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/buscaraudiograma/' + termino;
        return this.http.get(url)
            .map(function (resp) {
            verificar = resp.ok;
            console.log(verificar);
            if (verificar) {
                console.log('Existe el Registro');
                _this.actualizarAudiograma(audiograma)
                    .subscribe();
                return false;
            }
            else {
                console.log('No existe');
                _this.crearAudiograma(audiograma).subscribe();
            }
        });
    };
    AudiogramaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AudiogramaService);
    return AudiogramaService;
}());



/***/ }),

/***/ "./src/app/service/ayerhoy/ayerh.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/ayerhoy/ayerh.service.ts ***!
  \**************************************************/
/*! exports provided: AyerhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyerhService", function() { return AyerhService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");









var AyerhService = /** @class */ (function () {
    function AyerhService(http, router) {
        this.http = http;
        this.router = router;
    }
    AyerhService.prototype.crearAyerH = function (ayerh) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/crear_ayerhoy';
        return this.http.post(url, ayerh)
            .map(function (resp) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Registro Creado', 'success');
            return resp;
        })
            .catch(function (err) {
            console.log(err.error.mensaje);
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(err.error.mensaje, err.error.errors.message, 'error');
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
        });
    };
    AyerhService.prototype.actualizarAyerH = function (ayerh) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/ayerh/' + ayerh.Cedula;
        var verifica = Boolean;
        return this.http.put(url, ayerh)
            .map(function (resp) {
            verifica = resp.ok;
            if (verifica) {
                console.log('Registro Acualizado');
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Registro actualizado', 'success');
            }
        });
    };
    AyerhService.prototype.cargarAyerH = function () {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/ayerhoy';
        return this.http.get(url);
    };
    AyerhService.prototype.borrarayerh = function (cedula) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/ayerhborrar/' + cedula;
        return this.http.delete(url)
            .map(function (resp) {
            return true;
        });
    };
    AyerhService.prototype.VerificarAyerHoy = function (termino, ayerh) {
        var _this = this;
        var verificar;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/BuscarayerHoy/' + termino;
        return this.http.get(url)
            .map(function (resp) {
            verificar = resp.ok;
            console.log(verificar);
            if (verificar) {
                console.log('Existe el Paciente');
                _this.actualizarAyerH(ayerh)
                    .subscribe();
                return false;
            }
            else {
                console.log('No existe');
                _this.crearAyerH(ayerh).subscribe();
            }
        });
    };
    AyerhService.prototype.cargarAyerhoyCedula = function (termino) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/BuscarayerHoy/' + termino;
        return this.http.get(url)
            .map(function (resp) { return resp.ayerh; });
    };
    AyerhService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AyerhService);
    return AyerhService;
}());



/***/ }),

/***/ "./src/app/service/durantevida/durantevida.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/durantevida/durantevida.service.ts ***!
  \************************************************************/
/*! exports provided: DurantevidaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurantevidaService", function() { return DurantevidaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");









var DurantevidaService = /** @class */ (function () {
    function DurantevidaService(http, router) {
        this.http = http;
        this.router = router;
    }
    DurantevidaService.prototype.crearDuranteV = function (durantevida) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/crear_durantevida';
        return this.http.post(url, durantevida)
            .map(function (resp) {
            // swal('Paciente Creado', otoscopia.Nombre, 'success');
            return resp;
        })
            .catch(function (err) {
            console.log(err.error.mensaje);
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(err.error.mensaje, err.error.errors.message, 'error');
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
        });
    };
    DurantevidaService.prototype.actualizarDuranteV = function (durantevida) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/durantevida/' + durantevida.Cedula;
        var verifica = Boolean;
        return this.http.put(url, durantevida)
            .map(function (resp) {
            verifica = resp.ok;
            if (verifica) {
                console.log('Registro Acualizado');
            }
            //  swal('Usuario actualizado', paciente.Nombre, 'success' );
        });
    };
    DurantevidaService.prototype.borrarDurantev = function (id) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/borrardurantev/' + id;
        return this.http.delete(url)
            .map(function (resp) {
            return true;
        });
    };
    DurantevidaService.prototype.VerificarPaciente = function (termino, durantev) {
        var _this = this;
        var verificar;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/Buscardurantevida/' + termino;
        return this.http.get(url)
            .map(function (resp) {
            verificar = resp.ok;
            console.log(verificar);
            if (verificar) {
                console.log('Existe el Paciente');
                _this.actualizarDuranteV(durantev)
                    .subscribe();
                return false;
            }
            else {
                console.log('No existe');
                _this.crearDuranteV(durantev).subscribe();
            }
        });
    };
    DurantevidaService.prototype.cargarDuranteVCedula = function (termino) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/Buscardurantevida/' + termino;
        return this.http.get(url)
            .map(function (resp) { return resp.durantev; });
    };
    DurantevidaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], DurantevidaService);
    return DurantevidaService;
}());



/***/ }),

/***/ "./src/app/service/empresa/empresas.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/empresa/empresas.service.ts ***!
  \*****************************************************/
/*! exports provided: EmpresasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasService", function() { return EmpresasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");







var EmpresasService = /** @class */ (function () {
    function EmpresasService(http, ruote) {
        this.http = http;
        this.ruote = ruote;
    }
    EmpresasService.prototype.salvar = function (empresa) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_5__["URL_SERVICIO"] + '/crear_empresa';
        // url += '?token=' + this._usuarioService.token;
        console.log('valor a Salvar ' + empresa.nombre);
        return this.http.post(url, empresa)
            .map(function (resp) {
            console.log(resp);
            return resp;
        })
            .catch(function (err) {
            console.log(err);
            // swal(err.error.mensaje, 'As');
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err);
        });
    };
    // cargarForo( categoria: string, desde: number= 0) {
    //   let url = URL_SERVICIO + '/busqueda/coleccion/foro/' + categoria  + '?desde=' + desde;
    //   return this.http.get( url );
    // }
    EmpresasService.prototype.borrar = function (id) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_5__["URL_SERVICIO"] + '/empresa/' + id;
        return this.http.delete(url)
            .map(function (resp) {
            //   swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
            return true;
        });
    };
    EmpresasService.prototype.cargarEmpresas = function () {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_5__["URL_SERVICIO"] + '/empresa';
        return this.http.get(url);
    };
    EmpresasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmpresasService);
    return EmpresasService;
}());



/***/ }),

/***/ "./src/app/service/examen/examen.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/examen/examen.service.ts ***!
  \**************************************************/
/*! exports provided: ExamenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenService", function() { return ExamenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ExamenService = /** @class */ (function () {
    function ExamenService(http, router) {
        this.http = http;
        this.router = router;
    }
    ExamenService.prototype.crearExamen = function (examen) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/crear_examen';
        return this.http.post(url, examen)
            .map(function (resp) {
            // swal('Paciente Creado', paciente.Nombre, 'success');
            return resp;
        });
        //  .catch( err => {
        //   console.log( err.error.mensaje );
        //   // swal(err.error.mensaje, err.error.errors.message, 'error');
        //    return Observable.throw( err );
        //  });
    };
    ExamenService.prototype.actualizarExamen = function (examen) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/editar_examen/' + examen.Cedula;
        var verifica = Boolean;
        return this.http.put(url, examen)
            .map(function (resp) {
            verifica = resp.ok;
            if (verifica) {
                console.log('Registro Acualizado');
            }
            //   swal('Usuario actualizado', paciente.Nombre, 'success' );
        });
    };
    ExamenService.prototype.cargarExamen = function (desde) {
        if (desde === void 0) { desde = 0; }
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/examen';
        return this.http.get(url);
    };
    ExamenService.prototype.VerificarExamen = function (termino, examen) {
        var _this = this;
        var verificar;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/emple/' + termino;
        return this.http.get(url)
            .map(function (resp) {
            verificar = resp.ok;
            console.log(verificar);
            if (verificar) {
                _this.actualizarExamen(examen)
                    .subscribe();
                return false;
            }
            else {
                console.log('No existe');
                _this.crearExamen(examen).subscribe();
            }
        });
    };
    ExamenService.prototype.buscarExamen = function (termino) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/buscarexamen/' + termino;
        return this.http.get(url)
            .map(function (resp) { return resp.examen; });
        //  this.guardarStorage( this.paciente.Cedula, this.paciente.Nombre, this.paciente.img);
        //   });
        // let pacientedb: Paciente = resp.paciente;
        //    this.guardarStorage( '251452001', 'Fausto', '15421421');
        //   });
    };
    ExamenService.prototype.borrarExamen = function (cedula) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/borrarexamen/' + cedula;
        return this.http.delete(url)
            .map(function (resp) {
            //   swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
            return true;
        });
    };
    ExamenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ExamenService);
    return ExamenService;
}());



/***/ }),

/***/ "./src/app/service/guards/admin-guard.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/guards/admin-guard.guard.ts ***!
  \*****************************************************/
/*! exports provided: AdminGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuardGuard", function() { return AdminGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario/usuario.service */ "./src/app/service/usuario/usuario.service.ts");




var AdminGuardGuard = /** @class */ (function () {
    function AdminGuardGuard(_usuarioService, router) {
        this._usuarioService = _usuarioService;
        this.router = router;
    }
    AdminGuardGuard.prototype.canActivate = function () {
        if (this._usuarioService.usuario.role === 'ADMIN') {
            return true;
        }
        else {
            console.log('Bloqueado por el ADMIN-Guards');
            this.router.navigate(['/dashboard']);
            return false;
        }
    };
    AdminGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminGuardGuard);
    return AdminGuardGuard;
}());



/***/ }),

/***/ "./src/app/service/guards/login-guard.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/guards/login-guard.guard.ts ***!
  \*****************************************************/
/*! exports provided: LoginGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function() { return LoginGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario/usuario.service */ "./src/app/service/usuario/usuario.service.ts");




var LoginGuardGuard = /** @class */ (function () {
    function LoginGuardGuard(_usuarioServise, router) {
        this._usuarioServise = _usuarioServise;
        this.router = router;
    }
    LoginGuardGuard.prototype.canActivate = function () {
        if (this._usuarioServise.estaLogeado()) {
            console.log('paso por el login Guards');
            return true;
        }
        else {
            console.log('Bloqueado por el Guard');
            this.router.navigate(['/login']);
            return false;
        }
        // console.log('El archivo paso por el Guards');
        // return true;
    };
    LoginGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginGuardGuard);
    return LoginGuardGuard;
}());



/***/ }),

/***/ "./src/app/service/otoscopia/otoscopia.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/otoscopia/otoscopia.service.ts ***!
  \********************************************************/
/*! exports provided: OtoscopiaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtoscopiaService", function() { return OtoscopiaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");









var OtoscopiaService = /** @class */ (function () {
    function OtoscopiaService(http, router) {
        this.http = http;
        this.router = router;
    }
    OtoscopiaService.prototype.crearOtoscopia = function (otoscopia) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/crear_otoscopia';
        return this.http.post(url, otoscopia)
            .map(function (resp) {
            // swal('Paciente Creado', otoscopia.Nombre, 'success');
            // return resp.usuario;
        })
            .catch(function (err) {
            console.log(err.error.mensaje);
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(err.error.mensaje, err.error.errors.message, 'error');
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
        });
    };
    OtoscopiaService.prototype.actualizarOtoscopia = function (otoscopia) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/editar_otoscopia/' + otoscopia.cedula;
        var verifica = Boolean;
        return this.http.put(url, otoscopia)
            .map(function (resp) {
            verifica = resp.ok;
            if (verifica) {
                console.log('Registro Acualizado');
            }
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Registro actualizado', 'success');
        });
    };
    OtoscopiaService.prototype.cargarOtoscopia = function () {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/empleado';
        return this.http.get(url);
    };
    OtoscopiaService.prototype.cargarOtoscopiaCedula = function (termino) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/Buscarotoscopia/' + termino;
        return this.http.get(url)
            .map(function (resp) { return resp.otoscopia; });
    };
    OtoscopiaService.prototype.VerificarOtoscopia = function (termino, otoscopia) {
        var _this = this;
        var verificar;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/Buscarotoscopia/' + termino;
        return this.http.get(url)
            .map(function (resp) {
            verificar = resp.ok;
            console.log(verificar);
            if (verificar) {
                console.log('Existe el Registro');
                _this.actualizarOtoscopia(otoscopia)
                    .subscribe();
                return false;
            }
            else {
                console.log('No existe');
                _this.crearOtoscopia(otoscopia).subscribe();
            }
        });
    };
    OtoscopiaService.prototype.borrarOtoscopia = function (cedula) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/borrarotoscopia/' + cedula;
        return this.http.delete(url)
            .map(function (resp) {
            //   swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
            return true;
        });
    };
    OtoscopiaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], OtoscopiaService);
    return OtoscopiaService;
}());



/***/ }),

/***/ "./src/app/service/pacientes/paciente.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/pacientes/paciente.service.ts ***!
  \*******************************************************/
/*! exports provided: PacienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteService", function() { return PacienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _subir_Archivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../subir-Archivo/subir-archivo.service */ "./src/app/service/subir-Archivo/subir-archivo.service.ts");










var PacienteService = /** @class */ (function () {
    function PacienteService(http, router, _subirArchivoService) {
        this.http = http;
        this.router = router;
        this._subirArchivoService = _subirArchivoService;
    }
    PacienteService.prototype.guardarStorage = function (Cedula, Nombre, imag) {
        localStorage.setItem('cedula', Cedula);
        localStorage.setItem('nombre', Nombre);
        localStorage.setItem('imagen', imag);
        // localStorage.setItem('Nombre', JSON.stringify(Nombre) );
        // this.paciente = paciente;
    };
    PacienteService.prototype.crearPaciente = function (paciente) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/crear_empleado';
        return this.http.post(url, paciente)
            .map(function (resp) {
            //   if (!resp) {
            //  //  this.actualizarPaciente( paciente );
            //    console.log('Paciente Modificado');
            //   }
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Paciente Creado', paciente.Nombre, 'success');
        })
            .catch(function (err) {
            console.log(err.error.mensaje);
            // swal(err.error.mensaje, err.error.errors.message, 'error');
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
        });
    };
    PacienteService.prototype.actualizarPaciente = function (paciente) {
        console.log(paciente.Cedula);
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/Actualizar_empleado/' + paciente.Cedula;
        var verifica = Boolean;
        return this.http.put(url, paciente)
            .map(function (resp) {
            verifica = resp.ok;
            if (verifica) {
                console.log('Registro Acualizado');
            }
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Usuario actualizado', paciente.Nombre, 'success');
        });
    };
    PacienteService.prototype.cambiarImagen = function (archivo, Cedula) {
        var _this = this;
        this._subirArchivoService.subirArchivo(archivo, Cedula)
            .then(function (resp) {
            _this.paciente.img = resp.paciente.img;
            //   swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );
            //  this.guardarStorage( id, this.token, this.usuario );
        })
            .catch(function (resp) {
            console.log(resp);
        });
    };
    PacienteService.prototype.probar = function () {
        console.log('Probado');
    };
    PacienteService.prototype.cargarPacientes = function (desde) {
        if (desde === void 0) { desde = 0; }
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/empleados';
        return this.http.get(url);
    };
    PacienteService.prototype.buscarPacientes = function (termino) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/emple/' + termino;
        return this.http.get(url)
            .map(function (resp) { return resp.paciente; });
        //  this.guardarStorage( this.paciente.Cedula, this.paciente.Nombre, this.paciente.img);
        //   });
        // let pacientedb: Paciente = resp.paciente;
        //    this.guardarStorage( '251452001', 'Fausto', '15421421');
        //   });
    };
    PacienteService.prototype.VerificarPaciente = function (termino, paciente) {
        var _this = this;
        var verificar;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/emple/' + termino;
        return this.http.get(url)
            .map(function (resp) {
            verificar = resp.ok;
            console.log(verificar);
            if (verificar) {
                console.log('Existe el Paciente');
                _this.actualizarPaciente(paciente)
                    .subscribe();
                return false;
            }
            else {
                console.log('No existe');
                _this.crearPaciente(paciente).subscribe();
            }
        });
    };
    PacienteService.prototype.borrarPacientes = function (id) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/borrarempleado/' + id;
        //  url += '?token=' + this.token;
        return this.http.delete(url)
            .map(function (resp) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Paciente borrado', 'El Paciente a sido eliminado correctamente', 'success');
            return true;
        });
    };
    PacienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _subir_Archivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_9__["SubirArchivoService"]])
    ], PacienteService);
    return PacienteService;
}());



/***/ }),

/***/ "./src/app/service/salas/salas.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/salas/salas.service.ts ***!
  \************************************************/
/*! exports provided: SalasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasService", function() { return SalasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../usuario/usuario.service */ "./src/app/service/usuario/usuario.service.ts");







var SalasService = /** @class */ (function () {
    function SalasService(http, ruote, _usuarioService) {
        this.http = http;
        this.ruote = ruote;
        this._usuarioService = _usuarioService;
    }
    SalasService.prototype.salvar = function (foro) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_5__["URL_SERVICIO"] + '/foro'; // + '?token=' + this._usuarioService.token;
        // url += '?token=' + this._usuarioService.token;
        console.log('Datos de Sala' + foro);
        // return this.http.post( url, foro )
        //     .map( (resp: any) => {
        //      return resp.foro;
        //     })
        //     .catch( err => {
        //       console.log( err.error.mensaje );
        //       swal(err.error.mensaje, 'Aste Premium');
        //        return Observable.throw( err );
        //      });
    };
    SalasService.prototype.cargarForo = function (categoria, desde) {
        if (desde === void 0) { desde = 0; }
        var url = _config_config__WEBPACK_IMPORTED_MODULE_5__["URL_SERVICIO"] + '/busqueda/coleccion/foro/' + categoria + '?desde=' + desde;
        return this.http.get(url);
    };
    SalasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]])
    ], SalasService);
    return SalasService;
}());



/***/ }),

/***/ "./src/app/service/service.index.ts":
/*!******************************************!*\
  !*** ./src/app/service/service.index.ts ***!
  \******************************************/
/*! exports provided: AyerhService, DurantevidaService, UltimomesesService, OtoscopiaService, AudiogramaService, ExamenService, EmpresasService, PacienteService, AdminGuardGuard, LoginGuardGuard, SidebardService, SubirArchivoService, UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ayerhoy_ayerh_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ayerhoy/ayerh.service */ "./src/app/service/ayerhoy/ayerh.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AyerhService", function() { return _ayerhoy_ayerh_service__WEBPACK_IMPORTED_MODULE_0__["AyerhService"]; });

/* harmony import */ var _durantevida_durantevida_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./durantevida/durantevida.service */ "./src/app/service/durantevida/durantevida.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurantevidaService", function() { return _durantevida_durantevida_service__WEBPACK_IMPORTED_MODULE_1__["DurantevidaService"]; });

/* harmony import */ var _ultimomeses_ultimomeses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ultimomeses/ultimomeses.service */ "./src/app/service/ultimomeses/ultimomeses.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UltimomesesService", function() { return _ultimomeses_ultimomeses_service__WEBPACK_IMPORTED_MODULE_2__["UltimomesesService"]; });

/* harmony import */ var _otoscopia_otoscopia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otoscopia/otoscopia.service */ "./src/app/service/otoscopia/otoscopia.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OtoscopiaService", function() { return _otoscopia_otoscopia_service__WEBPACK_IMPORTED_MODULE_3__["OtoscopiaService"]; });

/* harmony import */ var _audiograma_audiograma_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audiograma/audiograma.service */ "./src/app/service/audiograma/audiograma.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudiogramaService", function() { return _audiograma_audiograma_service__WEBPACK_IMPORTED_MODULE_4__["AudiogramaService"]; });

/* harmony import */ var _examen_examen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examen/examen.service */ "./src/app/service/examen/examen.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExamenService", function() { return _examen_examen_service__WEBPACK_IMPORTED_MODULE_5__["ExamenService"]; });

/* harmony import */ var _empresa_empresas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empresa/empresas.service */ "./src/app/service/empresa/empresas.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmpresasService", function() { return _empresa_empresas_service__WEBPACK_IMPORTED_MODULE_6__["EmpresasService"]; });

/* harmony import */ var _pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pacientes/paciente.service */ "./src/app/service/pacientes/paciente.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PacienteService", function() { return _pacientes_paciente_service__WEBPACK_IMPORTED_MODULE_7__["PacienteService"]; });

/* harmony import */ var _guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/admin-guard.guard */ "./src/app/service/guards/admin-guard.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminGuardGuard", function() { return _guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_8__["AdminGuardGuard"]; });

/* harmony import */ var _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/login-guard.guard */ "./src/app/service/guards/login-guard.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function() { return _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_9__["LoginGuardGuard"]; });

/* harmony import */ var _shared_sidebard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/sidebard.service */ "./src/app/service/shared/sidebard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebardService", function() { return _shared_sidebard_service__WEBPACK_IMPORTED_MODULE_10__["SidebardService"]; });

/* harmony import */ var _subir_Archivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subir-Archivo/subir-archivo.service */ "./src/app/service/subir-Archivo/subir-archivo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubirArchivoService", function() { return _subir_Archivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_11__["SubirArchivoService"]; });

/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./usuario/usuario.service */ "./src/app/service/usuario/usuario.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_12__["UsuarioService"]; });
















/***/ }),

/***/ "./src/app/service/service.module.ts":
/*!*******************************************!*\
  !*** ./src/app/service/service.module.ts ***!
  \*******************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service.index */ "./src/app/service/service.index.ts");
/* harmony import */ var _components_modal_upload_modalupload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modal-upload/modalupload.service */ "./src/app/components/modal-upload/modalupload.service.ts");




// tslint:disable-next-line:max-line-length


var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _service_index__WEBPACK_IMPORTED_MODULE_4__["SidebardService"],
                _service_index__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
                _service_index__WEBPACK_IMPORTED_MODULE_4__["SubirArchivoService"],
                _service_index__WEBPACK_IMPORTED_MODULE_4__["LoginGuardGuard"],
                _service_index__WEBPACK_IMPORTED_MODULE_4__["AdminGuardGuard"],
                _components_modal_upload_modalupload_service__WEBPACK_IMPORTED_MODULE_5__["ModaluploadService"],
                _service_index__WEBPACK_IMPORTED_MODULE_4__["PacienteService"],
                _service_index__WEBPACK_IMPORTED_MODULE_4__["EmpresasService"],
                _service_index__WEBPACK_IMPORTED_MODULE_4__["ExamenService"],
                _service_index__WEBPACK_IMPORTED_MODULE_4__["AudiogramaService"],
                _service_index__WEBPACK_IMPORTED_MODULE_4__["OtoscopiaService"],
                _service_index__WEBPACK_IMPORTED_MODULE_4__["UltimomesesService"],
                _service_index__WEBPACK_IMPORTED_MODULE_4__["DurantevidaService"],
                _service_index__WEBPACK_IMPORTED_MODULE_4__["AyerhService"]
            ],
            declarations: []
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ }),

/***/ "./src/app/service/servicio/servicio.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/servicio/servicio.service.ts ***!
  \******************************************************/
/*! exports provided: ServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioService", function() { return ServicioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../usuario/usuario.service */ "./src/app/service/usuario/usuario.service.ts");






var ServicioService = /** @class */ (function () {
    function ServicioService(http, ruote, _usuarioService) {
        this.http = http;
        this.ruote = ruote;
        this._usuarioService = _usuarioService;
    }
    ServicioService.prototype.salvar = function (servicio) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/servicio' + '?token=' + this._usuarioService.token;
        // url += '?token=' + this._usuarioService.token;
        return this.http.post(url, servicio)
            .map(function (resp) {
            return resp.servicio;
        });
    };
    ServicioService.prototype.cargarservicios = function (desde) {
        if (desde === void 0) { desde = 0; }
        var url = _config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIO"] + '/servicio' + '?desde=' + desde;
        return this.http.get(url);
    };
    ServicioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]])
    ], ServicioService);
    return ServicioService;
}());



/***/ }),

/***/ "./src/app/service/shared/sidebard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/shared/sidebard.service.ts ***!
  \****************************************************/
/*! exports provided: SidebardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebardService", function() { return SidebardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebardService = /** @class */ (function () {
    function SidebardService() {
        this.menu = [
            {
                titulo: 'Principal',
                icono: 'mdi mdi-gauge',
                submenu: [
                    { titulo: 'Setthings', url: '/account' },
                    { titulo: 'Contactos', url: '/contactos' },
                    { titulo: 'Home', url: '/dashboard' }
                ]
            }
        ];
    }
    SidebardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebardService);
    return SidebardService;
}());



/***/ }),

/***/ "./src/app/service/subir-Archivo/subir-archivo.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/subir-Archivo/subir-archivo.service.ts ***!
  \****************************************************************/
/*! exports provided: SubirArchivoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirArchivoService", function() { return SubirArchivoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");



var SubirArchivoService = /** @class */ (function () {
    function SubirArchivoService() {
    }
    SubirArchivoService.prototype.subirArchivo = function (archivo, Cedula) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append('imge', archivo, archivo.name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Imagen subida');
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        console.log('Fallo la subida');
                        reject(xhr.response);
                    }
                }
            };
            var url = _config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIO"] + '/imagenes/' + Cedula;
            xhr.open('PUT', url, true);
            xhr.send(formData);
        });
    };
    SubirArchivoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubirArchivoService);
    return SubirArchivoService;
}());



/***/ }),

/***/ "./src/app/service/ultimomeses/ultimomeses.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/ultimomeses/ultimomeses.service.ts ***!
  \************************************************************/
/*! exports provided: UltimomesesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimomesesService", function() { return UltimomesesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");









var UltimomesesService = /** @class */ (function () {
    function UltimomesesService(http, router) {
        this.http = http;
        this.router = router;
    }
    UltimomesesService.prototype.crearUltimom = function (ultimom) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/crear_ultimomeses';
        return this.http.post(url, ultimom)
            .map(function (resp) {
            //  swal('Paciente Creado', ultimomeses.IdUltimosM, 'success');
            return resp;
        })
            .catch(function (err) {
            console.log(err.error.mensaje);
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(err.error.mensaje, err.error.errors.message, 'error');
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].throw(err);
        });
    };
    UltimomesesService.prototype.actualizarUltimom = function (ultimom) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/ultimomeses/' + ultimom.Cedula;
        var verifica = Boolean;
        return this.http.put(url, ultimom)
            .map(function (resp) {
            verifica = resp.ok;
            if (verifica) {
                console.log('Registro Acualizado');
            }
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Registro actualizado', 'success');
        });
    };
    UltimomesesService.prototype.cargarUltimom = function () {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/ultimomeses';
        return this.http.get(url);
    };
    UltimomesesService.prototype.borrarultimosMeses = function (cedula) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/ultimomesesborrar/' + cedula;
        return this.http.delete(url)
            .map(function (resp) {
            return true;
        });
    };
    UltimomesesService.prototype.VerificarUltimosM = function (termino, ultimom) {
        var _this = this;
        var verificar;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/BuscarultimosM/' + termino;
        return this.http.get(url)
            .map(function (resp) {
            verificar = resp.ok;
            console.log(verificar);
            if (verificar) {
                console.log('Existe el Paciente');
                _this.actualizarUltimom(ultimom)
                    .subscribe();
                return false;
            }
            else {
                console.log('No existe');
                _this.crearUltimom(ultimom).subscribe();
            }
        });
    };
    UltimomesesService.prototype.cargarUltimosMVCedula = function (termino) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/BuscarultimosM/' + termino;
        return this.http.get(url)
            .map(function (resp) { return resp.ultimom; });
    };
    UltimomesesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], UltimomesesService);
    return UltimomesesService;
}());



/***/ }),

/***/ "./src/app/service/usuario/usuario.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/usuario/usuario.service.ts ***!
  \****************************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subir_Archivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../subir-Archivo/subir-archivo.service */ "./src/app/service/subir-Archivo/subir-archivo.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");










var UsuarioService = /** @class */ (function () {
    function UsuarioService(http, router, _subirArchivoService) {
        this.http = http;
        this.router = router;
        this._subirArchivoService = _subirArchivoService;
        this.cargarStorage();
        // console.log('Servicio del Usuario Listo');
    }
    UsuarioService.prototype.estaLogeado = function () {
        return (this.verificar) ? true : false;
    };
    UsuarioService.prototype.cargarStorage = function () {
        if (localStorage.getItem('ok')) {
            this.verificar = localStorage.getItem('ok');
            // this.usuario = JSON.parse(localStorage.getItem('usuario'));
        }
        else {
            this.verificar = '';
            //  this.usuario = null;
        }
    };
    UsuarioService.prototype.guardarStorage = function (ok) {
        localStorage.setItem('ok', ok);
        // localStorage.setItem('token', token);
        // localStorage.setItem('usuario', JSON.stringify(usuario) );
        // this.usuario = usuario;
        // this.token = token;
    };
    UsuarioService.prototype.logout = function () {
        // this.usuario = null;
        this.verificar = '';
        localStorage.removeItem('ok');
        // localStorage.removeItem('usuario');
        this.router.navigate(['/login']);
    };
    UsuarioService.prototype.login = function (usuario, recordar) {
        if (recordar === void 0) { recordar = false; }
        if (recordar) {
            localStorage.setItem('email', usuario.email);
        }
        else {
            localStorage.removeItem('email');
        }
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/login';
        return this.http.post(url, usuario)
            .map(function (resp) {
            console.log(resp);
            //    this.guardarStorage( resp.id, resp.token, resp.Usuario);
            return true;
        })
            .catch(function (err) {
            console.log(err.error.mensaje);
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Error en el Login', err.error.mensaje, 'error');
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_9__["Observable"].throw(err);
        });
    };
    UsuarioService.prototype.crearUsuario = function (usuario) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/usuario';
        return this.http.post(url, usuario)
            .map(function (resp) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Usuario Creado', usuario.email, 'success');
            return resp.usuario;
        })
            .catch(function (err) {
            console.log(err.error.mensaje);
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(err.error.mensaje, err.error.errors.message, 'error');
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_9__["Observable"].throw(err);
        });
    };
    UsuarioService.prototype.actualizarUsuario = function (usuario) {
        var _this = this;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/usuario/' + usuario._id;
        url += '?token=' + this.token;
        return this.http.put(url, usuario)
            .map(function (resp) {
            // this.usuario = resp.usuario;
            if (usuario._id === _this.usuario._id) {
                var usuarioDB = resp.usuario;
                //    this.guardarStorage( usuarioDB._id, this.token, usuarioDB );
            }
            //  swal('Usuario actualizado', usuario.nombre, 'success' );
            return true;
        });
    };
    UsuarioService.prototype.cambiarImagen = function (archivo, id) {
        var _this = this;
        this._subirArchivoService.subirArchivo(archivo, id)
            .then(function (resp) {
            _this.usuario.img = resp.usuario.img;
            //   swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );
            //  this.guardarStorage( id, this.token, this.usuario );
        })
            .catch(function (resp) {
            console.log(resp);
        });
    };
    UsuarioService.prototype.cargarUsuarios = function (desde) {
        if (desde === void 0) { desde = 0; }
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/usuario?desde=' + desde;
        return this.http.get(url);
    };
    UsuarioService.prototype.buscarUsuarios = function (termino) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/busqueda/coleccion/usuarios/' + termino;
        return this.http.get(url)
            .map(function (resp) { return resp.usuarios; });
    };
    UsuarioService.prototype.borrarUsuario = function (id) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/usuario/' + id;
        url += '?token=' + this.token;
        return this.http.delete(url)
            .map(function (resp) {
            //   swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
            return true;
        });
    };
    UsuarioService.prototype.VerifiUsuario = function (usuario) {
        var _this = this;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIO"] + '/log';
        return this.http.post(url, usuario)
            .map(function (resp) {
            _this.verificar = resp.ok;
            console.log(_this.verificar);
            if (_this.verificar) {
                console.log('Existe el Registro');
                _this.guardarStorage(resp.ok);
                return true;
            }
            else {
                console.log('No existe');
                return false;
            }
        });
    };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _subir_Archivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_8__["SubirArchivoService"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n    <p><a href=\"http://norfipc.com/\">Plantillas Gratis</a>.</p>\n</div>"

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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"fond\">\n    <div id=\"header\">\n    </div>\n\n    <div id=\"menu\">\n        <ul>\n            <li><a style=\"padding:5px\" routerLink=\"/dashboard\" routerLinkActive=\"active\" href=\"#\">Home</a></li>\n        </ul>\n    </div>\n\n\n\n\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.index */ "./src/app/service/service.index.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_usuarioServise) {
        this._usuarioServise = _usuarioServise;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service_index__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], HeaderComponent);
    return HeaderComponent;
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"]
            ],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\n    <div id=\"page-bgtop\">\n        <div id=\"page-bgbtm\">\n\n            <div id=\"sidebar\" class=\"mt-4\">\n                <ul>\n                    <li>\n                        <h6 style=\"margin: 2rem auto 1rem\" align=\"center\">Formularios</h6>\n                        <ul>\n                            <li><a routerLink=\"/resultados/\">Resultado de analisis</a></li>\n                            <li><a routerLink=\"/paciente\">Registro de paciente</a></li>\n                            <li><a routerLink=\"/pacientes\">Listar pacientes</a></li>\n                            <li><a routerLink=\"/verpaciente\">Datos del paciente</a></li>\n                            <li><a routerLink=\"/reportes\">Historial clinico</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.index */ "./src/app/service/service.index.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_usuarioService, _sidebar) {
        this._usuarioService = _usuarioService;
        this._sidebar = _sidebar;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.usuario = this._usuarioService.usuario;
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service_index__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _service_service_index__WEBPACK_IMPORTED_MODULE_2__["SidebardService"]])
    ], SidebarComponent);
    return SidebarComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jose\Desktop\AngularAvd\Proyecto de Clase2\projecclase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map