(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"main-header\">\n      <ion-title>\n        <ion-icon name=\"logo-google-playstore\"></ion-icon>\n        Ledger\n      </ion-title>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <span>-</span>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <span>-</span>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <span>-</span>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <div class=\"total\">\n    <h3>Total<ion-icon name=\"chevron-down-outline\"></ion-icon>\n    </h3>\n    <span>199,00€</span>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-label position=\"stacked\">Código Promocional</ion-label>\n        <ion-input class=\"ion-padding\" placeholder=\"Introduce el código de promoción...(opcional)\" [(ngModel)]=\"codigoprom\"></ion-input>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button color=\"light\" class=\"ion-margin-vertical ion-padding\" expand=\"block\">Aplicar</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label position=\"stacked\">Información del Cliente</ion-label>\n        <ion-input type=\"email\" class=\"ion-padding\" placeholder=\"Correo electronico\" [(ngModel)]=\"correoElectronico\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=12>\n        <ion-label position=\"stacked\">Estoy comprando como</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-input type=\"text\" class=\"ion-padding\" placeholder=\"Primer nombre\" [(ngModel)]=\"nombreUsuario\"></ion-input>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-input type=\"text\" class=\"ion-padding\" placeholder=\"Apellido\" [(ngModel)]=\"apellidoUsuario\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input type=\"text\" class=\"ion-padding\" class=\"ion-margin-vertical\" placeholder=\"Empresa(Opcional)\" [(ngModel)]=\"empresa\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input type=\"text\" class=\"ion-padding\" class=\"ion-margin-vertical\" placeholder=\"Dirección Línea 1\" [(ngModel)]=\"primeraDireccion\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-input type=\"text\" class=\"ion-padding\" class=\"ion-margin-vertical\" placeholder=\"Dirección Línea 2\" [(ngModel)]=\"segundaDireccion\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item class=\"ion-margin-vertical\">\n          <ion-label>País</ion-label>\n          <ion-select placeholder=\"Espanya\" [(ngModel)]=\"selectCountry\">\n            <ion-select-option value=\"Espanya\">Espanya</ion-select-option>\n            <ion-select-option value=\"Usa\">USA</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-input type=\"text\" class=\"ion-padding\" placeholder=\"Ciudad\" [(ngModel)]=\"ciudad\"></ion-input>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Provincia</ion-label>\n          <ion-select placeholder=\"Provincia\" class=\"provinciaSelect\" [(ngModel)]=\"province_selected\">\n            <ion-select-option value=\"Vic\">Vic</ion-select-option>\n            <ion-select-option value=\"Mataro\">Mataró</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-input type=\"number\" class=\"ion-padding\" class=\"ion-margin-vertical\" placeholder=\"Código Postal\" [(ngModel)]=\"codigoPostal\">\n        </ion-input>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-input type=\"number\" class=\"ion-padding\" class=\"ion-margin-vertical\" placeholder=\"Teléfono\" [(ngModel)]=\"telefono\"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-button class=\"ion-margin\" color=\"success\" expand=\"block\" routerLink=\"/direction\" (click)=\"pasarDato()\">Continuar</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-input {\n  border: 1px solid #d4d4d4;\n  border-radius: 5px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\nion-label {\n  font-size: 20px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.total {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: #333;\n  padding: 10px;\n  background-color: #f0efef;\n  border-bottom: 1px solid #d4d4d4;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.total span {\n  align-self: center;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.provinciaSelect {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.main-header {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-end;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.main-header ion-icon {\n  font-size: 25px;\n}\n\n.main-header ion-icon:nth-child(2) {\n  border-radius: 50%;\n  border: 2px solid red;\n  color: #68c8b2;\n}\n\n.main-header span {\n  margin: auto 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSx3SUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3SUFBQTtBQURGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFFRjs7QUFERTtFQUNFLGVBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREU7RUFDRSxpQkFBQTtBQUdKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1pbnB1dHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5pb24tbGFiZWx7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuLnRvdGFse1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOjEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzOSwgMjM5KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cbi50b3RhbCBzcGFue1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5wcm92aW5jaWFTZWxlY3R7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubWFpbi1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gMDtcbiAgaW9uLWljb257XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG4gIGlvbi1pY29uOm50aC1jaGlsZCgyKXtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcbiAgICBjb2xvcjojNjhjOGIyO1xuICB9XG4gIHNwYW57XG4gICAgbWFyZ2luOiBhdXRvIDFyZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
        this.codigoprom = '';
        this.correoElectronico = '';
        this.nombreUsuario = '';
        this.apellidoUsuario = '';
        this.empresa = '';
        this.primeraDireccion = '';
        this.segundaDireccion = '';
        this.ciudad = '';
    }
    pasarDato() {
        let navigationExtras = {
            queryParams: {
                codigoprom: this.codigoprom,
                correoElectronico: this.correoElectronico,
                nombreUsuario: this.nombreUsuario,
                apellidoUsuario: this.apellidoUsuario,
                empresa: this.empresa,
                primeraDireccion: this.primeraDireccion,
                segundaDireccion: this.segundaDireccion,
                ciudad: this.ciudad,
                codigoPostal: this.codigoPostal,
                telefono: this.telefono,
                province_selected: this.province_selected,
                selectCountry: this.selectCountry,
            }
        };
        this.router.navigate(['direction'], navigationExtras);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map