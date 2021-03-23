(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["information-information-module"],{

/***/ "3tvi":
/*!***********************************************************!*\
  !*** ./src/app/information/information-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: InformationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageRoutingModule", function() { return InformationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./information.page */ "93tE");




const routes = [
    {
        path: '',
        component: _information_page__WEBPACK_IMPORTED_MODULE_3__["InformationPage"]
    }
];
let InformationPageRoutingModule = class InformationPageRoutingModule {
};
InformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InformationPageRoutingModule);



/***/ }),

/***/ "3waB":
/*!***************************************************!*\
  !*** ./src/app/information/information.module.ts ***!
  \***************************************************/
/*! exports provided: InformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageModule", function() { return InformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _information_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./information-routing.module */ "3tvi");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information.page */ "93tE");







let InformationPageModule = class InformationPageModule {
};
InformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _information_routing_module__WEBPACK_IMPORTED_MODULE_5__["InformationPageRoutingModule"]
        ],
        declarations: [_information_page__WEBPACK_IMPORTED_MODULE_6__["InformationPage"]]
    })
], InformationPageModule);



/***/ }),

/***/ "93tE":
/*!*************************************************!*\
  !*** ./src/app/information/information.page.ts ***!
  \*************************************************/
/*! exports provided: InformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPage", function() { return InformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_information_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./information.page.html */ "Lsuy");
/* harmony import */ var _information_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./information.page.scss */ "EZ+u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let InformationPage = class InformationPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.codigoprom = '';
        this.correoElectronico = '';
        this.nombreUsuario = '';
        this.apellidoUsuario = '';
        this.empresa = '';
        this.primeraDireccion = '';
        this.segundaDireccion = '';
        this.ciudad = '';
        this.cardNumber = '';
        this.holderName = '';
        this.expMonth = '';
        this.expYear = '';
        this.codigoPromocional = '';
        this.route.queryParams.subscribe(params => {
            if (params) {
                if (params && params.codigoprom) {
                    this.codigoprom = params.codigoprom;
                }
                if (params && params.correoElectronico) {
                    this.correoElectronico = params.correoElectronico;
                }
                if (params && params.nombreUsuario) {
                    this.nombreUsuario = params.nombreUsuario;
                }
                if (params && params.apellidoUsuario) {
                    this.apellidoUsuario = params.apellidoUsuario;
                }
                if (params && params.empresa) {
                    this.empresa = params.empresa;
                }
                if (params && params.primeraDireccion) {
                    this.primeraDireccion = params.primeraDireccion;
                }
                if (params && params.segundaDireccion) {
                    this.segundaDireccion = params.segundaDireccion;
                }
                if (params && params.ciudad) {
                    this.ciudad = params.ciudad;
                }
                if (params && params.codigoPostal) {
                    this.codigoPostal = params.codigoPostal;
                }
                if (params && params.telefono) {
                    this.telefono = params.telefono;
                }
                if (params && params.cardNumber) {
                    this.cardNumber = params.cardNumber;
                }
                if (params && params.holderName) {
                    this.holderName = params.holderName;
                }
                if (params && params.expMonth) {
                    this.expMonth = params.expMonth;
                }
                if (params && params.expYear) {
                    this.expYear = params.expYear;
                }
                if (params && params.codigoPromocional) {
                    this.codigoPromocional = params.codigoPromocional;
                }
                if (params && params.shipping_selected) {
                    this.shipping_selected = params.shipping_selected;
                }
                if (params && params.payment_selected) {
                    this.payment_selected = params.payment_selected;
                }
                if (params && params.province_selected) {
                    this.province_selected = params.province_selected;
                }
                if (params && params.selectCountry) {
                    this.selectCountry = params.selectCountry;
                }
                if (params && params.billing_direction) {
                    this.billing_direction = params.billing_direction;
                }
            }
        });
    }
    ngOnInit() {
    }
};
InformationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
InformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-information',
        template: _raw_loader_information_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_information_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InformationPage);



/***/ }),

/***/ "EZ+u":
/*!***************************************************!*\
  !*** ./src/app/information/information.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".total {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: #333;\n  padding: 10px;\n  background-color: #f0efef;\n  border-bottom: 1px solid #d4d4d4;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.total span {\n  align-self: center;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.main-header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.main-header ion-icon:nth-child(1n+2) {\n  font-size: 25px;\n  background-color: #68c8b2;\n  border-radius: 50%;\n}\n\n.main-header ion-icon:nth-child(8) {\n  border-radius: 50%;\n}\n\n.main-header span {\n  margin: auto 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGluZm9ybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0lBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFHSjs7QUFGSTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSU47O0FBRkk7RUFDSSxrQkFBQTtBQUlSOztBQUZJO0VBQ0UsaUJBQUE7QUFJTiIsImZpbGUiOiJpbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG90YWx7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBjb2xvcjogIzMzMztcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM5LCAyMzkpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG4udG90YWwgc3BhbntcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLm1haW4taGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDFyZW0gMXJlbSAxcmVtIDA7XHJcbiAgICBpb24taWNvbjpudGgtY2hpbGQoMW4rMil7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojNjhjOGIyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIH1cclxuICAgIGlvbi1pY29uOm50aC1jaGlsZCg4KXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICBtYXJnaW46IGF1dG8gMXJlbTtcclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ "Lsuy":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/information/information.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"main-header\">\n      <ion-title>\n        <ion-icon name=\"logo-google-playstore\"></ion-icon>\n        Ledger\n      </ion-title>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <span>-</span>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <span>-</span>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <span>-</span>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <div class=\"ion-padding ion-item-center\" color=\"success\">\n    <ion-text color=\"success\">\n      <h1>Gracias por confiar con nosotros. A continuacion te facilitamos los detalles de tu pedido</h1>\n    </ion-text>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"codigoprom\">\n          <ion-label position=\"stacked\">Código Promocional</ion-label>\n          <ion-input readonly>{{ codigoprom }}</ion-input>\n        </ion-item >\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"correoElectronico\">\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input readonly>{{ correoElectronico }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item  *ngIf=\"nombreUsuario\">\n          <ion-label position=\"stacked\">Nombre</ion-label>\n          <ion-input readonly>{{ nombreUsuario }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item  *ngIf=\"apellidoUsuario\">\n          <ion-label position=\"stacked\">Apellido</ion-label>\n          <ion-input readonly>{{ apellidoUsuario }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"empresa\">\n          <ion-label position=\"stacked\">Empresa</ion-label>\n          <ion-input readonly>{{ empresa }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"primeraDireccion\">\n          <ion-label position=\"stacked\">Primera Direccion</ion-label>\n          <ion-input readonly>{{ primeraDireccion }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"segundaDireccion\">\n          <ion-label position=\"stacked\">Segunda Direccion</ion-label>\n          <ion-input readonly>{{ segundaDireccion }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"selectCountry\">\n          <ion-label position=\"stacked\">País</ion-label>\n          <ion-input readonly>{{ selectCountry }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item  *ngIf=\"ciudad\">\n          <ion-label position=\"stacked\">Ciudad</ion-label>\n          <ion-input readonly>{{ ciudad }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item  *ngIf=\"province_selected\">\n          <ion-label position=\"stacked\">Provincia</ion-label>\n          <ion-input readonly>{{ province_selected }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"codigoPostal\">\n          <ion-label position=\"stacked\">Codigo Postal</ion-label>\n          <ion-input readonly>{{ codigoPostal }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"telefono\">\n          <ion-label position=\"stacked\">Telefono</ion-label>\n          <ion-input readonly>{{ telefono }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"shipping_selected\">\n          <ion-label position=\"stacked\">Método de envio</ion-label>\n          <ion-input readonly>{{ shipping_selected }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"payment_selected\">\n          <ion-label position=\"stacked\">Método de Pago</ion-label>\n          <ion-input readonly>{{ payment_selected }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"cardNumber\">\n          <ion-label position=\"stacked\">Card Number</ion-label>\n          <ion-input readonly>{{ cardNumber }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"holderName\">\n          <ion-label position=\"stacked\">Card Holder Name</ion-label>\n          <ion-input readonly>{{ holderName }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item  *ngIf=\"expMonth\">\n          <ion-label position=\"stacked\">Exp.Month</ion-label>\n          <ion-input readonly>{{ expMonth }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item  *ngIf=\"expYear\">\n          <ion-label position=\"stacked\">Exp.Year</ion-label>\n          <ion-input readonly>{{ expYear }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"codigoPromocional\">\n          <ion-label position=\"stacked\">Código Promocional</ion-label>\n          <ion-input readonly>{{ codigoPromocional }}</ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item  *ngIf=\"billing_direction\">\n          <ion-label position=\"stacked\">Dirección de facturacion</ion-label>\n          <ion-input readonly>{{ billing_direction }}</ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-button class=\"ion-margin\" color=\"success\" expand=\"expand\" routerLink=\"/home\">OK\n  </ion-button>\n\n  <ion-button class=\"ion-margin\" color=\"success\" expand=\"block\" routerLink=\"/home\">\n    <ion-icon name=\"chevron-back-outline\"></ion-icon>Volver Al inicio\n  </ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=information-information-module.js.map