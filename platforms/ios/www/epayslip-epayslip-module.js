(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["epayslip-epayslip-module"],{

/***/ "./src/app/pages/epayslip/epayslip.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/epayslip/epayslip.module.ts ***!
  \***************************************************/
/*! exports provided: EpayslipPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpayslipPageModule", function() { return EpayslipPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _epayslip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./epayslip.page */ "./src/app/pages/epayslip/epayslip.page.ts");







var routes = [
    {
        path: '',
        component: _epayslip_page__WEBPACK_IMPORTED_MODULE_6__["EpayslipPage"]
    }
];
var EpayslipPageModule = /** @class */ (function () {
    function EpayslipPageModule() {
    }
    EpayslipPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_epayslip_page__WEBPACK_IMPORTED_MODULE_6__["EpayslipPage"]]
        })
    ], EpayslipPageModule);
    return EpayslipPageModule;
}());



/***/ }),

/***/ "./src/app/pages/epayslip/epayslip.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/epayslip/epayslip.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n        <ion-icon class=btnMenu color=\"light\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title mode=\"md\" slot=\"start\">E-Payslip</ion-title>\n</ion-header>\n<ion-content>\n  <ion-card *ngIf=\"!isCorrectPassword\">\n    <ion-item lines=\"none\">\n      <ion-label class=\"EntityName\" position=\"stacked\">E-Payslip Password:\n      </ion-label>\n      <ion-icon class=\"icnInfo\" name=\"alert\" (click)=\"forgotPassword()\"></ion-icon>\n      <ion-input class=\"inputPassword\" id=\"rounded\" type=\"password\" [(ngModel)]=\"password\" (keyup.enter)=\"submitPassword()\">\n      </ion-input>\n    </ion-item>\n    <ion-button class=\"submitClass\" slot=\"end\" fill=\"solid\" (click)=\"submitPassword()\">\n      SUBMIT\n    </ion-button>\n  </ion-card>\n\n  <div *ngIf=\"!isCorrectPassword\" class=\"forgotPass\" (click)=\"openForgotPass()\">Forgot Password?</div>\n\n  <ion-card *ngIf=\"isCorrectPassword\">\n    <ion-item lines=\"none\">\n      <ion-label class=\"EntityName\" position=\"stacked\">PAYROLL PERIOD</ion-label>\n      <ion-select id=\"rounded\" [(ngModel)]=\"payrollPeriod\" [selectedText]=\"payrollPeriod\" (ionChange)=\"onPayrollChange()\">\n        <div *ngFor=\"let item of (payroll); let i = index\">\n          <ion-select-option value=\"{{ item.DESCRIPTION }}\" selected=\"{{i===0}}\">{{ item.DESCRIPTION }}</ion-select-option>\n        </div>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label class=\"lblTakeNote\"> {{takenote}}\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-checkbox class=\"chkAffirm\" checked=\"{{isAffirm}}\" (ionChange)=\"clickIsAffirm()\" ></ion-checkbox>\n      <ion-label class=\"lblAffirm\"> {{affirm}}\n      </ion-label>\n    </ion-item>\n    <ion-button class=\"submitAgreeClass\" slot=\"end\" fill=\"solid\" (click)=\"submitAgree()\" disabled=\"{{disableAgree}}\">\n      {{agreeText}}\n    </ion-button>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/epayslip/epayslip.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/epayslip/epayslip.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: center;\n  padding-bottom: 10px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\nion-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.icnInfo {\n  position: absolute;\n  right: 7px;\n  height: 25px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #676767;\n}\n\n.EntityName {\n  color: #676767;\n  font-size: 12px;\n  -webkit-padding-start: 5px;\n          padding-inline-start: 5px;\n}\n\n.inputPassword {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  font-size: 27px;\n}\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 10px !important;\n          padding-inline-start: 10px !important;\n}\n\n.submitClass {\n  --background: linear-gradient(to bottom, #D3A828, #E0861F);\n  height: 35px;\n  width: 100px;\n  font-size: 11px;\n  margin: 10px;\n  float: right;\n  font-family: \"RobotoRegular\";\n}\n\n.submitAgreeClass {\n  --background: linear-gradient(to bottom, #D3A828, #E0861F);\n  height: 40px;\n  width: 130px;\n  font-size: 11px;\n  margin: 20px 10px 10px;\n  float: right;\n  font-family: \"RobotoRegular\";\n}\n\n.forgotClass {\n  --background: darkgray;\n  height: 35px;\n  font-size: 11px;\n  float: right;\n  width: 30;\n  margin-top: 10px;\n}\n\n.chkAffirm {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n  height: 20px;\n  width: 20px;\n}\n\n.lblAffirm,\n.lblTakeNote {\n  padding-top: 10px;\n  margin-bottom: 0px;\n  line-height: 17px;\n  font-family: \"RobotoMedium\";\n  font-size: 12px;\n  color: #2a2a2a;\n  white-space: pre-line !important;\n}\n\n.forgotPass {\n  float: right;\n  margin-right: 20px;\n  font-size: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvZXBheXNsaXAvZXBheXNsaXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lcGF5c2xpcC9lcGF5c2xpcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLGtDQUFBO0FDQUo7O0FER0E7RUFDSSw0RUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO1VBQUEscUNBQUE7QUNBSjs7QURHQTtFQUNJLDBEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0FKOztBREdBO0VBQ0ksMERBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTs7RUFFSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwYXlzbGlwL2VwYXlzbGlwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmcnKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xufVxuXG5pb24tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmljbkluZm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogN3B4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNjc2NzY3O1xufVxuXG4uRW50aXR5TmFtZSB7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHg7XG59XG5cbi5pbnB1dFBhc3N3b3JkIHtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuI3JvdW5kZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnN1Ym1pdENsYXNzIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNEM0E4MjgsICNFMDg2MUYpO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uc3VibWl0QWdyZWVDbGFzcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRDNBODI4LCAjRTA4NjFGKTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW46IDIwcHggMTBweCAxMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5mb3Jnb3RDbGFzcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiBkYXJrZ3JheTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMzA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNoa0FmZmlybSB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLWJvcmRlci1jb2xvcjogZ3JheTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5sYmxBZmZpcm0sXG4ubGJsVGFrZU5vdGUge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cbi5mb3Jnb3RQYXNze1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG59IiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmljbkluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA3cHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzY3Njc2Nztcbn1cblxuLkVudGl0eU5hbWUge1xuICBjb2xvcjogIzY3Njc2NztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4O1xufVxuXG4uaW5wdXRQYXNzd29yZCB7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbiNyb3VuZGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJtaXRDbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0QzQTgyOCwgI0UwODYxRik7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5zdWJtaXRBZ3JlZUNsYXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRDNBODI4LCAjRTA4NjFGKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luOiAyMHB4IDEwcHggMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5mb3Jnb3RDbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogZGFya2dyYXk7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAzMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNoa0FmZmlybSB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRDNBODI4O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjRDNBODI4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1ib3JkZXItY29sb3I6IGdyYXk7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5sYmxBZmZpcm0sXG4ubGJsVGFrZU5vdGUge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufVxuXG4uZm9yZ290UGFzcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDkwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/epayslip/epayslip.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/epayslip/epayslip.page.ts ***!
  \*************************************************/
/*! exports provided: EpayslipPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpayslipPage", function() { return EpayslipPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");













var EpayslipPage = /** @class */ (function () {
    function EpayslipPage(loginService, router, storage, menuCtrl, alertController, httpApi, file, transfer, document, fileOpener, loadingCtrl, http) {
        this.loginService = loginService;
        this.router = router;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.alertController = alertController;
        this.httpApi = httpApi;
        this.file = file;
        this.transfer = transfer;
        this.document = document;
        this.fileOpener = fileOpener;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.isCorrectPassword = false;
        this.isAffirm = false;
        this.disableAgree = true;
        this.payrollSelected = false;
        this.agreeText = "AGREE & DOWNLOAD";
        this.fileTransfer = this.transfer.create();
    }
    EpayslipPage.prototype.ngOnInit = function () {
    };
    EpayslipPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.takenote = "You are expected to treat all matters relative to compensation as confidential and refrain from discussing or divulging the same with anybody.";
            _this.affirm = "I hereby affirm and acknowledge that I understand the entire data on this e-payslip";
            _this.checkEpayslip();
        });
    };
    EpayslipPage.prototype.forgotPassword = function () {
        this.showDialog("", "For security purpose, If you forgot or want to update your password, please go to your account in HRIS-ESS website", false, "Okay");
    };
    EpayslipPage.prototype.submitPassword = function () {
        this.getPayslip("GetVerifyPassword2");
    };
    EpayslipPage.prototype.clickIsAffirm = function () {
        this.isAffirm = !this.isAffirm;
        if (this.isAffirm && this.payrollSelected) {
            this.disableAgree = false;
        }
        else {
            this.disableAgree = true;
        }
    };
    EpayslipPage.prototype.onPayrollChange = function () {
        if (this.payrollPeriod == null || this.payrollPeriod == undefined || this.payrollPeriod == "") {
            this.payrollSelected = false;
        }
        else {
            this.payrollSelected = true;
            if (this.isAffirm && this.payrollSelected) {
                this.disableAgree = false;
            }
            else {
                this.disableAgree = true;
            }
        }
    };
    EpayslipPage.prototype.submitAgree = function () {
        this.getPayslip("GetDownloadPayslip");
    };
    EpayslipPage.prototype.refresh = function () {
        this.ionViewWillEnter();
    };
    EpayslipPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    EpayslipPage.prototype.getPayslip = function (connection) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SESSION"]).then(function (val) {
            var postData = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_RECORD_ID"]],
                UserID: _this.empId,
                EmployeeID: _this.empId,
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["APP_PLATFORM"],
                IsActive: true,
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["VERSION"],
                PayPeriod: "0",
                Password: ""
            };
            if (connection == "GetVerifyPassword2") {
                postData["Password"] = _this.password;
            }
            else if (connection == "GetDownloadPayslip") {
                _this.payroll.forEach(function (element) {
                    if (element['DESCRIPTION'] == _this.payrollPeriod) {
                        _this.payrollSelectedPeriod = element['SEQNO'];
                        postData["PayPeriod"] = element['SEQNO'];
                    }
                });
                postData["Password"] = _this.password;
            }
            console.log(postData);
            if (connection == "GetDownloadPayslip") {
                _this.agreeText = "Downloading...";
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["SERVER_URL"]] + "/api/HRISEPayslip/" + connection, postData, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["CONNECTION_ERROR"], true, "Okay");
                            return;
                        }
                        try {
                            var jsonData = JSON.parse(data.data);
                            console.log(jsonData);
                            if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_SUCCESS"]) {
                                _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["CONNECTION_ERROR"], true, "Okay");
                                return;
                            }
                            if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_YES"]) {
                                switch (jsonData['Message']) {
                                    case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_ERROR"]:
                                        _this.showDialog("ERROR", "", false, "Okay");
                                        _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_MESSAGE"]);
                                        return;
                                    case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE"]:
                                        _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                        return;
                                    case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED"]:
                                        _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_EXPIRED"]);
                                        return;
                                    case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED"]:
                                        _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_REQUIRED"]);
                                        return;
                                }
                                _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                                return;
                            }
                        }
                        catch (e) {
                            console.log(e);
                            _this.openFile(value, postData, connection);
                        }
                    });
                });
                _this.agreeText = "AGREE & DOWNLOAD";
            }
            else {
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["SERVER_URL"]] + "/api/HRISEPayslip/" + connection, postData, {})
                        .then(function (data) {
                        console.log(data);
                        if (data.data == null || data.data == undefined) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["CONNECTION_ERROR"], true, "Okay");
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        console.log(jsonData);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["CONNECTION_ERROR"], true, "Okay");
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_YES"]) {
                            switch (jsonData['Message']) {
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_ERROR"]:
                                    _this.showDialog("ERROR", "", false, "Okay");
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_MESSAGE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_EXPIRED"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_REQUIRED"]);
                                    return;
                            }
                            _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                            return;
                        }
                        _this.takenote = jsonData['Value']['Table']['1']['Details'];
                        _this.affirm = jsonData['Value']['Table']['0']['Details'];
                        var resultTemp = jsonData['Value']['Table1'];
                        if (resultTemp.length <= 0) {
                            _this.showDialog("EMPTY!", "Empty payroll period!", true, "Okay");
                            return;
                        }
                        _this.payroll = jsonData['Value']['Table1'];
                        _this.payrollPeriod = jsonData['Value']['Table1']['0']['DESCRIPTION'];
                        _this.payrollSelected = true;
                        _this.isCorrectPassword = true;
                    })
                        .catch(function (error) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["CONNECTION_ERROR_TRY_AGAIN"], true, "Okay");
                    });
                });
            }
        });
    };
    EpayslipPage.prototype.showDialog = function (title, message, closePage, buttonText) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            buttons: [{
                                    text: buttonText,
                                    handler: function () {
                                        if (closePage) {
                                            _this.ionViewWillEnter();
                                        }
                                    }
                                }],
                            backdropDismiss: false
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EpayslipPage.prototype.openForgotPass = function () {
        this.router.navigate(['/epayslipforgotpass']);
    };
    EpayslipPage.prototype.openFile = function (value, postData, connection) {
        var _this = this;
        this.httpApi.sendRequest(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["SERVER_URL"]] + "/api/HRISEPayslip/" + connection, {
            method: 'post',
            data: postData,
            responseType: 'blob'
        })
            .then(function (response) {
            var fileEmpID = _this.empId;
            while (fileEmpID.length < 6)
                fileEmpID = "0" + fileEmpID;
            var filename = fileEmpID + _this.payrollSelectedPeriod + ".pdf";
            console.log(filename);
            var pdfBlob = new Blob([response.data], { type: 'application/pdf' });
            _this.file.writeFile(_this.file.dataDirectory, filename, pdfBlob, { replace: true }).then(function (c) {
                _this.fileOpener.open(_this.file.dataDirectory + filename, 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error opening file', e); });
            });
            // //for desktop
            var fileURL = URL.createObjectURL(pdfBlob);
            window.open(fileURL);
        })
            .catch(function (response) {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response.error);
        });
    };
    EpayslipPage.prototype.checkEpayslip = function () {
        var _this = this;
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SESSION"]).then(function (val) {
                var postData = {
                    UserID: _this.empId,
                    EmployeeId: _this.empId,
                    SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_TOKEN"]],
                    AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["VERSION"],
                    AccountType: "payslip",
                    ProcessType: "check-for-payslip-update"
                };
                console.log(postData);
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["SERVER_URL"]] + "/api/account-management/payslip", postData, {})
                        .then(function (data) {
                        console.log(data);
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        console.log(jsonData);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_YES"]) {
                            _this.loading.dismiss();
                            switch (jsonData['Message']) {
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_ERROR"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_MESSAGE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_EXPIRED"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_REQUIRED"]);
                                    return;
                            }
                            _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                            return;
                        }
                        _this.loading.dismiss();
                        if (jsonData['Value']['0']['Result'] == "true") {
                            _this.openForgotPass();
                        }
                    })
                        .catch(function (error) {
                        console.log(error.error);
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    EpayslipPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-epayslip',
            template: __webpack_require__(/*! ./epayslip.page.html */ "./src/app/pages/epayslip/epayslip.page.html"),
            styles: [__webpack_require__(/*! ./epayslip.page.scss */ "./src/app/pages/epayslip/epayslip.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__["DocumentViewer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__["FileOpener"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], EpayslipPage);
    return EpayslipPage;
}());



/***/ })

}]);
//# sourceMappingURL=epayslip-epayslip-module.js.map