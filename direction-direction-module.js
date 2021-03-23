(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["direction-direction-module"],{

/***/ "7EGb":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/direction/direction.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"main-header\">\n      <ion-title>\n        <ion-icon name=\"logo-google-playstore\"></ion-icon>\n        Ledger\n      </ion-title>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <span>-</span>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <span>-</span>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <span>-</span>\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h1>Direction</h1>\n  <div class=\"total\">\n    <h3>Total<ion-icon name=\"chevron-down-outline\"></ion-icon>\n    </h3>\n    <span>199,00€</span>\n  </div>\n  \n  \n\n  <h1 class=\"ion-padding\">Direccion de envío</h1>\n  <ion-input class=\"ion-padding\" value=\"navegando con ionic\" readonly></ion-input>\n  <p class=\"ion-margin\">calle, mi calle de Calles 12345, CAL, 123456789</p>\n  <ion-label class=\"ion-margin\" color=\"success\">Editar</ion-label>\n\n  <h1 class=\"ion-padding\">Métodos de envío</h1>\n  <ion-list class=\"ion-padding\">\n    <ion-radio-group [(ngModel)]=\"shipping_selected\">\n      <ion-item>\n        <ion-label>Tracked Shipping with DHL Economy(2-5 Business Days)</ion-label>\n        <ion-radio slot=\"start\" value=\"Tracked Shipping with DHL Economy(2-5 Business Days)\"></ion-radio>\n      </ion-item>\n      <div class=\"ion-padding\">\n        <ion-label color=\"warning\">Orders including a Nano X will be shipped in two weeks</ion-label>\n        <ion-input readonly color=\"success\" class=\"ship\">FREE SHIPPING</ion-input >\n      </div>\n      <ion-item>\n        <ion-label>Express Shipping with DHL Express(1-2 Business Days)</ion-label>\n        <ion-radio slot=\"start\" value=\"Express Shipping with DHL Express(1-2 Business Days)\"></ion-radio>\n      </ion-item>\n      <div class=\"ion-padding\">\n        <ion-label color=\"warning\">Orders including a Nano X will be shipped in two weeks</ion-label>\n        <ion-input readonly class=\"ship\">10,58€</ion-input >\n      </div>\n    </ion-radio-group>\n  </ion-list>\n\n  \n\n  <ion-button class=\"ion-margin\" color=\"success\" expand=\"block\" routerLink=\"/payment\" (click)=\"pasarDato()\">Continuar</ion-button>\n  <ion-button class=\"ion-margin\" color=\"medium\" expand=\"block\" routerLink=\"/home\">\n    <ion-icon name=\"chevron-back-outline\"></ion-icon>Back to the shipping information\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "Age9":
/*!*******************************************************!*\
  !*** ./src/app/direction/direction-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DirectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionPageRoutingModule", function() { return DirectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _direction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./direction.page */ "CbKl");




const routes = [
    {
        path: '',
        component: _direction_page__WEBPACK_IMPORTED_MODULE_3__["DirectionPage"]
    }
];
let DirectionPageRoutingModule = class DirectionPageRoutingModule {
};
DirectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DirectionPageRoutingModule);



/***/ }),

/***/ "CbKl":
/*!*********************************************!*\
  !*** ./src/app/direction/direction.page.ts ***!
  \*********************************************/
/*! exports provided: DirectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionPage", function() { return DirectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_direction_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./direction.page.html */ "7EGb");
/* harmony import */ var _direction_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./direction.page.scss */ "JSqt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






let DirectionPage = class DirectionPage {
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
                if (params && params.shipping_selected) {
                    this.shipping_selected = params.shipping_selected;
                }
                if (params && params.province_selected) {
                    this.province_selected = params.province_selected;
                }
                if (params && params.selectCountry) {
                    this.selectCountry = params.selectCountry;
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
                province_selected: this.province_selected,
                selectCountry: this.selectCountry,
            }
        };
        this.router.navigate(['payment'], navigationExtras);
    }
    ngOnInit() {
    }
};
DirectionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DirectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-direction',
        template: _raw_loader_direction_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_direction_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DirectionPage);



/***/ }),

/***/ "JSqt":
/*!***********************************************!*\
  !*** ./src/app/direction/direction.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".total {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: #333;\n  padding: 10px;\n  background-color: #f0efef;\n  border-bottom: 1px solid #d4d4d4;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.total span {\n  align-self: center;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.main-header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.main-header ion-icon {\n  font-size: 25px;\n}\n\n.main-header ion-icon:nth-child(4) {\n  border-radius: 50%;\n  border: 2px solid red;\n  color: #68c8b2;\n}\n\n.main-header ion-icon:nth-child(2) {\n  background-color: #68c8b2;\n  border-radius: 50%;\n}\n\n.main-header span {\n  margin: auto 1rem;\n}\n\n.ship {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpcmVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdJQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBRUo7O0FBREk7RUFDRSxlQUFBO0FBR047O0FBREk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUdSOztBQURJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUdSOztBQURJO0VBQ0UsaUJBQUE7QUFHTjs7QUFBRTtFQUNFLGdCQUFBO0FBR0oiLCJmaWxlIjoiZGlyZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3RhbHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzksIDIzOSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi50b3RhbCBzcGFue1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm1haW4taGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDFyZW0gMXJlbSAxcmVtIDA7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWljb246bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xyXG4gICAgICAgIGNvbG9yOiM2OGM4YjI7XHJcbiAgICAgfVxyXG4gICAgaW9uLWljb246bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzY4YzhiMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIH1cclxuICAgIHNwYW57XHJcbiAgICAgIG1hcmdpbjogYXV0byAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hpcHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "uIiz":
/*!***********************************************!*\
  !*** ./src/app/direction/direction.module.ts ***!
  \***********************************************/
/*! exports provided: DirectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionPageModule", function() { return DirectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _direction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./direction-routing.module */ "Age9");
/* harmony import */ var _direction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./direction.page */ "CbKl");







let DirectionPageModule = class DirectionPageModule {
};
DirectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _direction_routing_module__WEBPACK_IMPORTED_MODULE_5__["DirectionPageRoutingModule"]
        ],
        declarations: [_direction_page__WEBPACK_IMPORTED_MODULE_6__["DirectionPage"]]
    })
], DirectionPageModule);



/***/ })

}]);
//# sourceMappingURL=direction-direction-module.js.map