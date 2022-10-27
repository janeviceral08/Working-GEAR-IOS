(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loans-loans-module"],{

/***/ "./src/app/pages/loans/loans.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/loans/loans.module.ts ***!
  \*********************************************/
/*! exports provided: LoansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansPageModule", function() { return LoansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loans.page */ "./src/app/pages/loans/loans.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _loans_page__WEBPACK_IMPORTED_MODULE_6__["LoansPage"]
    }
];
var LoansPageModule = /** @class */ (function () {
    function LoansPageModule() {
    }
    LoansPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_loans_page__WEBPACK_IMPORTED_MODULE_6__["LoansPage"]]
        })
    ], LoansPageModule);
    return LoansPageModule;
}());



/***/ }),

/***/ "./src/app/pages/loans/loans.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/loans/loans.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-title mode=\"md\" slot=\"start\">Loans</ion-title>\n</ion-header>\n<ion-content class=\"classContent\" hide-header header=\"header\">\n    <div *ngIf=\"noError; else error\">\n        <div *ngIf=\"loadingDone; else shimmer\">\n            <ion-card *ngIf=\"isFullyPaid;\">\n                <ion-list lines=\"full\" class=\"list\">\n                    <ion-item button detail *ngFor=\"let item of (results);\" (click)=\"setLoanDetails(item)\">\n                        <img class=\"imgLoan \" src=\"{{getLoansSrc(item.LoanName)}}\" alt=\" \">\n                        <ion-label class=\"loanDetails \" text-wrap>\n                            <div class=\"loanName \">\n                                {{ item.LoanName }}\n                            </div>\n                            <ion-grid class=\"loanInfo \">\n                                <ion-row class=\"rowLoanDetails\">\n                                    <ion-col>\n                                        LOAN AMOUNT:\n                                    </ion-col>\n                                    <ion-col>\n                                        LOAN BALANCE:\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row class=\"rowLoanAmount\">\n                                    <ion-col>\n                                        {{item.LoanAmount}}\n                                    </ion-col>\n                                    <ion-col>\n                                        {{item.LoanBalance}}\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-label>\n                    </ion-item>\n                </ion-list>\n            </ion-card>\n            <ion-card *ngIf=\"!isFullyPaid;\">\n                <ion-list lines=\"full\" class=\"list\">\n                    <ion-item button detail *ngFor=\"let item of (results2);\" (click)=\"setLoanDetails(item)\">\n                        <img class=\"imgLoan \" src=\"{{getLoansSrc(item.LoanName)}}\" alt=\" \">\n                        <ion-label class=\"loanDetails \" text-wrap>\n                            <div class=\"loanName \">\n                                {{ item.LoanName }}\n                            </div>\n                            <ion-grid class=\"loanInfo \">\n                                <ion-row class=\"rowLoanDetails\">\n                                    <ion-col>\n                                        LOAN AMOUNT:\n                                    </ion-col>\n                                    <ion-col>\n                                        LOAN BALANCE:\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row class=\"rowLoanAmount\">\n                                    <ion-col>\n                                        {{item.LoanAmount}}\n                                    </ion-col>\n                                    <ion-col>\n                                        {{item.LoanBalance}}\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-label>\n                    </ion-item>\n                </ion-list>\n            </ion-card>\n        </div>\n    </div>\n    <div class=\"divZeroBalance\" *ngIf=\"loadingDone\">\n        <ion-checkbox class=\"chkZeroBalance\" [(ngModel)]=\"isFullyPaid\" (ionChange)=\"ionViewWillEnter()\"></ion-checkbox>\n        <ion-label class=\"lblZeroBalance\" (click)=\"changeLoan()\"> With Zero Balance</ion-label>\n    </div>\n</ion-content>\n<ng-template #shimmer>\n    <ion-card>\n        <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n        <ion-list>\n            <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2]\">\n                <div id=\"box\" class=\"shine\"></div>\n                <div class=\"divShimmer\">\n                    <div id=\"lines1\" class=\"shine\"></div>\n                    <div id=\"lines1\" class=\"shine\"></div>\n                    <div id=\"lines1\" class=\"shine\"></div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n</ng-template>\n<ng-template #error>\n    <ion-card>\n        <ion-item lines=\"none\">\n            <div class=\"errorbox\">\n                <ion-avatar class=\"center\">\n                    <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n                <span class=\"errorMessage\">{{errorMessage}}</span>\n                <span class=\"errorMessage\">\n                        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n                        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n                            <ion-icon color=\"light\" name=\"home\"></ion-icon>\n                        </ion-button>\n                    </span>\n            </div>\n        </ion-item>\n    </ion-card>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/loans/loans.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/loans/loans.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --background: #558B2F;\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: center;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\nion-icon {\n  font-size: 24px !important;\n  text-shadow: 10px 10px 10px #0000005c;\n}\n\nion-card {\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-col {\n  padding: 0px;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.classContent {\n  --background: #F5F5F5;\n}\n\n.imgLoan {\n  width: 50px;\n  height: 50px;\n  margin: 10px 20px;\n  margin-left: 5px;\n}\n\n.loanDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.loanName {\n  color: #2a2a2a;\n  font-size: 15px;\n  display: block;\n  font-family: \"RobotoMedium\";\n  margin-bottom: 10px;\n}\n\n.loanInfo {\n  display: block;\n  color: #808080;\n  padding: 0px;\n}\n\n.rowLoanDetails {\n  font-size: 11px;\n}\n\n.rowLoanAmount {\n  color: #2a2a2a;\n  font-size: 15px;\n  font-family: \"RobotoMedium\";\n}\n\n.divZeroBalance {\n  margin-left: 15px;\n  font-size: 13px;\n}\n\n.chkZeroBalance {\n  --background: transparent;\n  height: 25px;\n  width: 25px;\n}\n\n.lblZeroBalance {\n  vertical-align: super;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvbG9hbnMvbG9hbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2Fucy9sb2Fucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0VBQ0Esa0NBQUE7QUNGSjs7QURLQTtFQUNJLDBCQUFBO0VBQ0EscUNBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7RUFDQSw0RUFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNGSjs7QURLQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvYW5zL2xvYW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogIzU1OEIyRjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nJykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAvLyBoZWlnaHQ6IDEwMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvL21hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggIzAwMDAwMDVjO1xufVxuXG5pb24tY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmJ0bk1lbnUge1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNsYXNzQ29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xufVxuXG4uaW1nTG9hbiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5sb2FuRGV0YWlscyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubG9hbk5hbWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubG9hbkluZm8ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnJvd0xvYW5EZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5yb3dMb2FuQW1vdW50IHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5kaXZaZXJvQmFsYW5jZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2hrWmVyb0JhbGFuY2Uge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xufVxuXG4ubGJsWmVyb0JhbGFuY2Uge1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufSIsImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICM1NThCMkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5idG5NZW51IHtcbiAgcGFkZGluZzogMCAwIDAgNXB4O1xufVxuXG4uY2xhc3NDb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xufVxuXG4uaW1nTG9hbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubG9hbkRldGFpbHMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmxvYW5OYW1lIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubG9hbkluZm8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM4MDgwODA7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnJvd0xvYW5EZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ucm93TG9hbkFtb3VudCB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uZGl2WmVyb0JhbGFuY2Uge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2hrWmVyb0JhbGFuY2Uge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4ubGJsWmVyb0JhbGFuY2Uge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/loans/loans.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/loans/loans.page.ts ***!
  \*******************************************/
/*! exports provided: LoansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansPage", function() { return LoansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");








var LoansPage = /** @class */ (function () {
    function LoansPage(storage, router, activatedRoute, httpApi, httpApi2, loginService, menuCtrl, modalController) {
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.httpApi = httpApi;
        this.httpApi2 = httpApi2;
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.modalController = modalController;
        this.loadingDone = false;
        this.noError = true;
        this.isFullyPaid = false;
    }
    LoansPage.prototype.ngOnInit = function () {
    };
    LoansPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDone = false;
        this.noError = true;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            if (_this.isFullyPaid)
                _this.getLoans();
            else
                _this.getLoans2();
        });
    };
    LoansPage.prototype.getLoans = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            var postData = {
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EmployeeId: _this.empId,
                isFullyPaid: _this.isFullyPaid,
                strIsFullyPaid: "1"
            };
            console.log(postData);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/Loan/GetLoanHeader", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.loadingDone = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.loadingDone = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.loadingDone = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.results = jsonData['Value']['Table'];
                    if (_this.results.length == 0) {
                        _this.noError = false;
                        _this.errorMessage = "EMPTY";
                        _this.loadingDone = true;
                        return;
                    }
                    _this.noError = true;
                    _this.loadingDone = true;
                    console.log(_this.results);
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    LoansPage.prototype.getLoans2 = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            var postData = {
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EmployeeId: _this.empId,
                isFullyPaid: _this.isFullyPaid,
                strIsFullyPaid: "0"
            };
            console.log(postData);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi2.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/Loan/GetLoanHeader", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.loadingDone = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.loadingDone = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.loadingDone = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.results2 = jsonData['Value']['Table'];
                    if (_this.results2.length == 0) {
                        _this.noError = false;
                        _this.errorMessage = "EMPTY";
                        _this.loadingDone = true;
                        return;
                    }
                    _this.noError = true;
                    _this.loadingDone = true;
                    console.log(_this.results2);
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    LoansPage.prototype.setLoanDetails = function (item) {
        item["PageType"] = "User";
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_LOANDETAILS"], item);
        this.router.navigate(['/loansdetails']);
    };
    LoansPage.prototype.changeLoan = function () {
        this.isFullyPaid = !this.isFullyPaid;
        this.ionViewWillEnter();
    };
    LoansPage.prototype.refresh = function () {
        this.ionViewWillEnter();
    };
    LoansPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    LoansPage.prototype.getLoansSrc = function (loanName) {
        if (loanName.toUpperCase() == "SSS SALARY LOAN") {
            return "assets/icon/ic_loans_sss.png";
        }
        else if (loanName.toUpperCase() == "SSS CALAMITY LOANS") {
            return "assets/icon/ic_loans_sss.png";
        }
        else if (loanName.toUpperCase() == "GABC UKAY SALES") {
            return "assets/icon/ic_loans_gabc.png";
        }
        else if (loanName.toUpperCase() == "GABC IN-HOUSE SALES") {
            return "assets/icon/ic_loans_gabc.png";
        }
        else if (loanName.toUpperCase() == "GABC COMPANY STORE") {
            return "assets/icon/ic_loans_gabc.png";
        }
        else if (loanName.toUpperCase() == "GOLDEN ABC WAREHOUSE SALES") {
            return "assets/icon/ic_loans_gabc.png";
        }
        else if (loanName.toUpperCase() == "RL ONLINE ORDERING") {
            return "assets/icon/ic_loans_gabc.png";
        }
        else if (loanName.toUpperCase() == "FOR ME UKAY UKAY") {
            return "assets/icon/ic_loans_gabc.png";
        }
        else if (loanName.toUpperCase() == "PAGIBIG MULTIPURPOSE LOAN") {
            return "assets/icon/ic_loans_pagibig.png";
        }
        else if (loanName.toUpperCase() == "HDMF LOANS") {
            return "assets/icon/ic_loans_pagibig.png";
        }
        else if (loanName.toUpperCase() == "PHILCARE - HMO DEPENDENTS") {
            return "assets/icon/ic_loans_philcare.png";
        }
        else if (loanName.toUpperCase() == "SECURITY BANK LOAN") {
            return "assets/icon/ic_loans_bank.png";
        }
        else if (loanName.toUpperCase() == "EQUICOM LOAN") {
            return "assets/icon/ic_loans_bank.png";
        }
        else if (loanName.toUpperCase() == "CITIFINANCIAL SALARY LOAN") {
            return "assets/icon/ic_loans_bank.png";
        }
        else if (loanName.toUpperCase() == "ADVANCES") {
            return "assets/icon/ic_loans_advances.png";
        }
        else if (loanName.toUpperCase() == "TAX WITHHELD") {
            return "assets/icon/ic_loans_tax.png";
        }
        else if (loanName.toUpperCase() == "EYE GLASS LOAN") {
            return "assets/icon/ic_loans_eye.png";
        }
        else if (loanName.toUpperCase() == "CAR LOAN") {
            return "assets/icon/ic_loans_car.png";
        }
        else if (loanName.toUpperCase() == "VACCINATION") {
            return "assets/icon/ic_loans_vac.png";
        }
        else if (loanName.toUpperCase() == "UNIFORM") {
            return "assets/icon/ic_loans_uniform.png";
        }
        else if (loanName.toUpperCase() == "EMERGENCY LOAN") {
            return "assets/icon/ic_loans_emergency.png";
        }
        else if (loanName.toUpperCase() == "MISCELLANEOUS") {
            return "assets/icon/ic_loans_misc.png";
        }
        else if (loanName.toUpperCase() == "LIFE SCIENCE") {
            return "assets/icon/ic_loans_life.png";
        }
        else {
            return "assets/icon/ic_loans_tax.png";
        }
    };
    LoansPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loans',
            template: __webpack_require__(/*! ./loans.page.html */ "./src/app/pages/loans/loans.page.html"),
            styles: [__webpack_require__(/*! ./loans.page.scss */ "./src/app/pages/loans/loans.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], LoansPage);
    return LoansPage;
}());



/***/ })

}]);
//# sourceMappingURL=loans-loans-module.js.map