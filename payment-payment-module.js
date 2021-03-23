(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "6w7n":
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "SCHJ");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "NSaA":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "6w7n");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "SCHJ");







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "SCHJ":
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment.page.html */ "dXRR");
/* harmony import */ var _payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.page.scss */ "xeWX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






let PaymentPage = class PaymentPage {
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
                shipping_selected: this.shipping_selected,
                cardNumber: this.cardNumber,
                holderName: this.holderName,
                expMonth: this.expMonth,
                expYear: this.expYear,
                codigoPromocional: this.codigoPromocional,
                payment_selected: this.payment_selected,
                province_selected: this.province_selected,
                selectCountry: this.selectCountry,
                billing_direction: this.billing_direction,
            }
        };
        this.router.navigate(['information'], navigationExtras);
    }
    ngOnInit() {
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment',
        template: _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymentPage);



/***/ }),

/***/ "dXRR":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"main-header\">\n      <ion-title>\n        <ion-icon name=\"logo-google-playstore\"></ion-icon>\n        Ledger\n      </ion-title>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <span>-</span>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <span>-</span>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <span>-</span>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h1>Payment</h1>\n   <div class=\"total\">\n    <h3>Total<ion-icon name=\"chevron-down-outline\"></ion-icon>\n    </h3>\n    <span>199,00€</span>\n  </div>\n\n  \n\n  <div class=\"payment\">\n    <h1 class=\"ion-padding\">Métodos de pago </h1>\n    <div>\n      <ion-icon name=\"card-outline\"></ion-icon>\n      <ion-icon name=\"card-outline\"></ion-icon>\n      <ion-icon name=\"card-outline\"></ion-icon>\n    </div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-list class=\"ion-padding\">\n          <ion-radio-group [(ngModel)]=\"payment_selected\">\n            <ion-item>\n              <ion-icon name=\"card-outline\"></ion-icon>\n              <ion-label class=\"ion-padding\">Tarjeta de crédito</ion-label>\n              <ion-radio slot=\"start\" value=\"Tarjeta de crédito\"></ion-radio>\n            </ion-item>\n            <ion-item><ion-input class=\"ion-padding\" placeholder=\"Card Number\" [(ngModel)]=\"cardNumber\"></ion-input></ion-item>\n            <ion-item><ion-input class=\"ion-padding\" placeholder=\"Card Holder Name\" [(ngModel)]=\"holderName\"></ion-input></ion-item>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item><ion-input class=\"ion-padding\" placeholder=\"Exp. Month(MM)\" [(ngModel)]=\"expMonth\"></ion-input></ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item><ion-input class=\"ion-padding\" placeholder=\"Exp. Year(YYYY)\" [(ngModel)]=\"expYear\"></ion-input></ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-item><ion-input class=\"ion-padding\" placeholder=\"CVV\"></ion-input></ion-item>\n            <ion-item>\n              <ion-icon name=\"logo-paypal\"></ion-icon>\n              <ion-label class=\"ion-padding\">Paypal</ion-label>\n              <ion-radio slot=\"start\" value=\"Paypal\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <h1 class=\"ion-padding\">Codigo Promocional</h1>\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-item><ion-input class=\"ion-padding\" placeholder=\"Introduce el codigo de promocion...(Opcional)\" [(ngModel)]=\"codigoPromocional\"></ion-input></ion-item>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button color=\"medium\" expand=\"block\">Aplicar</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <h1 class=\"ion-padding\">Direccion de facturación</h1>\n    <ion-list class=\"ion-padding\">\n      <ion-radio-group [(ngModel)]=\"billing_direction\" >\n        <ion-item>\n          <ion-label>Igual que la direccion de envío</ion-label>\n          <ion-radio slot=\"start\" value=\"Igual que la direccion de envío\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Usar una direccion diferente</ion-label>\n          <ion-radio slot=\"start\" value=\"Usar una direccion diferente\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n  </ion-grid>\n  <div class=\"ion-padding condition\">\n    <ion-checkbox class=\"ion-margin-end\"></ion-checkbox>\n    <ion-label >I agree with the <span>Sales Terms and Conditions </span>and with the <span>Website Terms of use</span></ion-label>\n    <ion-input class=\"ion-margin-top\" readonly>El método de pago que seleccionó puede requerir una verificacion adicional. Es possible que se lo redireccione a un sitio de un tercero para completar la verificacion</ion-input>\n  </div>\n\n  <ion-button class=\"ion-margin\" color=\"success\" expand=\"block\" routerLink=\"/information\" (click)=\"pasarDato()\">Confirmar Compra</ion-button>\n  <ion-button class=\"ion-margin\" color=\"medium\" expand=\"block\" routerLink=\"/direction\"><ion-icon name=\"chevron-back-outline\"></ion-icon>Back to the direction information</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "xeWX":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".total {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: #333;\n  padding: 10px;\n  background-color: #f0efef;\n  border-bottom: 1px solid #d4d4d4;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.total span {\n  align-self: center;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.main-header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.main-header ion-icon {\n  font-size: 25px;\n}\n\n.main-header ion-icon:nth-child(6) {\n  border-radius: 50%;\n  border: 2px solid red;\n  color: #68c8b2;\n}\n\n.main-header ion-icon:nth-child(2) {\n  background-color: #68c8b2;\n  border-radius: 50%;\n}\n\n.main-header ion-icon:nth-child(4) {\n  background-color: #68c8b2;\n  border-radius: 50%;\n}\n\n.main-header span {\n  margin: auto 1rem;\n}\n\n.payment {\n  display: flex;\n}\n\n.payment h1 {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.payment div {\n  margin-right: 2rem;\n  margin-top: auto;\n  margin-bottom: auto;\n  left: 3rem;\n}\n\n.payment div ion-icon {\n  font-size: 2rem;\n}\n\n.condition span {\n  color: #42d77d;\n}\n\n.condition ion-input {\n  color: #1e2023;\n  background-color: #9d9fa6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3SUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQUVKOztBQURJO0VBQ0UsZUFBQTtBQUdOOztBQURJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFHUjs7QUFESztFQUNHLHlCQUFBO0VBQ0Esa0JBQUE7QUFHUjs7QUFESTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFHUjs7QUFESTtFQUNFLGlCQUFBO0FBR047O0FBQUU7RUFDRSxhQUFBO0FBR0o7O0FBREk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBR047O0FBREk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBR047O0FBRk07RUFDRSxlQUFBO0FBSVI7O0FBRUk7RUFDRSxjQUFBO0FBQ047O0FBQ0k7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFDTiIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3RhbHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzksIDIzOSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi50b3RhbCBzcGFue1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm1haW4taGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDFyZW0gMXJlbSAxcmVtIDA7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWljb246bnRoLWNoaWxkKDYpe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xyXG4gICAgICAgIGNvbG9yOiM2OGM4YjI7XHJcbiAgICAgfVxyXG4gICAgIGlvbi1pY29uOm50aC1jaGlsZCgyKXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2OGM4YjI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICB9XHJcbiAgICBpb24taWNvbjpudGgtY2hpbGQoNCl7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNjhjOGIyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgfVxyXG4gICAgc3BhbntcclxuICAgICAgbWFyZ2luOiBhdXRvIDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wYXltZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICBoMXtcclxuICAgICAgbWFyZ2luLXRvcDphdXRvO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgZGl2e1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6YXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgbGVmdDozcmVtO1xyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAvL21hcmdpbi1yaWdodDogMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY29uZGl0aW9ue1xyXG4gICAgc3BhbntcclxuICAgICAgY29sb3I6ICM0MmQ3N2Q7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgIGNvbG9yOiAjMWUyMDIzO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5ZDlmYTY7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=payment-payment-module.js.map