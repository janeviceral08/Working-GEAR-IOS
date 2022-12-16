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

module.exports = "ion-header {\n  --background: #558B2F;\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: center;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3607843137);\n}\n\nion-icon {\n  font-size: 24px !important;\n  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3607843137);\n}\n\nion-card {\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-col {\n  padding: 0px;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.classContent {\n  --background: #F5F5F5;\n}\n\n.imgLoan {\n  width: 50px;\n  height: 50px;\n  margin: 10px 20px;\n  margin-left: 5px;\n}\n\n.loanDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.loanName {\n  color: #2a2a2a;\n  font-size: 15px;\n  display: block;\n  font-family: \"RobotoMedium\";\n  margin-bottom: 10px;\n}\n\n.loanInfo {\n  display: block;\n  color: #808080;\n  padding: 0px;\n}\n\n.rowLoanDetails {\n  font-size: 11px;\n}\n\n.rowLoanAmount {\n  color: #2a2a2a;\n  font-size: 15px;\n  font-family: \"RobotoMedium\";\n}\n\n.divZeroBalance {\n  margin-left: 15px;\n  font-size: 13px;\n}\n\n.chkZeroBalance {\n  --background: transparent;\n  height: 25px;\n  width: 25px;\n}\n\n.lblZeroBalance {\n  vertical-align: super;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9hbnMvQzpcXFVzZXJzXFwwMzE3NzVcXEdFQVItd29ya2luZyAtICg0KS9zcmNcXGFwcFxccGFnZXNcXGxvYW5zXFxsb2Fucy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvYW5zL2xvYW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxvREFBQTtBQ0ZKOztBREtBO0VBQ0ksMEJBQUE7RUFDQSx1REFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLDRFQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0kscUJBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9hbnMvbG9hbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNTU4QjJGO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmcnKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIC8vIGhlaWdodDogMTAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIC8vbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCAjMDAwMDAwNWM7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uYnRuTWVudSB7XG4gICAgcGFkZGluZzogMCAwIDAgNXB4O1xufVxuXG4uY2xhc3NDb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGNUY1RjU7XG59XG5cbi5pbWdMb2FuIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmxvYW5EZXRhaWxzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sb2FuTmFtZSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sb2FuSW5mbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ucm93TG9hbkRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnJvd0xvYW5BbW91bnQge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLmRpdlplcm9CYWxhbmNlIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jaGtaZXJvQmFsYW5jZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG59XG5cbi5sYmxaZXJvQmFsYW5jZSB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59IiwiaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzU1OEIyRjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM2MDc4NDMxMzcpO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjM2MDc4NDMxMzcpO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmJ0bk1lbnUge1xuICBwYWRkaW5nOiAwIDAgMCA1cHg7XG59XG5cbi5jbGFzc0NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGNUY1RjU7XG59XG5cbi5pbWdMb2FuIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5sb2FuRGV0YWlscyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubG9hbk5hbWUge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sb2FuSW5mbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzgwODA4MDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucm93TG9hbkRldGFpbHMge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5yb3dMb2FuQW1vdW50IHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5kaXZaZXJvQmFsYW5jZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jaGtaZXJvQmFsYW5jZSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5sYmxaZXJvQmFsYW5jZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iXX0= */"

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