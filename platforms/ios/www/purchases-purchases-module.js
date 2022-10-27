(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchases-purchases-module"],{

/***/ "./src/app/pages/purchases/purchases.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/purchases/purchases.module.ts ***!
  \*****************************************************/
/*! exports provided: PurchasesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesPageModule", function() { return PurchasesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _purchases_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchases.page */ "./src/app/pages/purchases/purchases.page.ts");







var routes = [
    {
        path: '',
        component: _purchases_page__WEBPACK_IMPORTED_MODULE_6__["PurchasesPage"]
    }
];
var PurchasesPageModule = /** @class */ (function () {
    function PurchasesPageModule() {
    }
    PurchasesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_purchases_page__WEBPACK_IMPORTED_MODULE_6__["PurchasesPage"]]
        })
    ], PurchasesPageModule);
    return PurchasesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/purchases/purchases.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/purchases/purchases.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-title mode=\"md\" slot=\"start\">Purchases</ion-title>\n</ion-header>\n<ion-content class=\"classContent\" hide-header header=\"header\">\n    <ion-card>\n        <div *ngIf=\"noError; else error\">\n            <ion-list class=\"list\">\n                <div *ngIf=\"loadingDoneEmp; else shimmer\">\n                    <ion-item lines=\"full\">\n                        <img class=\"imgEmployee \" src=\"assets/icon/ic_purchase_emp.png\" alt=\" \">\n                        <ion-label class=\"EmpDetails \" text-wrap>\n                            <div class=\"EmpName \">\n                                Employee Purchases\n                            </div>\n                            <ion-grid class=\"EmpInfo \">\n                                <ion-row class=\"rowEmpDetails\">\n                                    <!-- <ion-col>\n                                            CAP:\n                                        </ion-col> -->\n                                    <ion-col>\n                                        USED:\n                                    </ion-col>\n                                    <ion-col>\n                                        BALANCE:\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row class=\"rowEmpAmount\">\n                                    <!-- <ion-col>\n                                            {{resultsEmployee[0].DiscountCap}}\n                                        </ion-col> -->\n                                    <ion-col>\n                                        {{resultsEmployee[0].Used}}\n                                    </ion-col>\n                                    <ion-col>\n                                        {{resultsEmployee[0].Balance}}\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-label>\n                    </ion-item>\n                </div>\n                <div *ngIf=\"loadingDoneOnline; else shimmer\">\n                    <ion-item lines=\"full\" button detail (click)=\"setPurchaseDetails(resultsOnline, 'Online')\">\n                        <img class=\"imgEmployee \" src=\"assets/icon/ic_purchase_online.png\" alt=\" \">\n                        <ion-label class=\"EmpDetails \" text-wrap>\n                            <div class=\"EmpName \">\n                                Online Purchases\n                            </div>\n                            <ion-grid class=\"EmpInfo \">\n                                <ion-row class=\"rowEmpDetails\">\n                                    <ion-col>\n                                        TOTAL AMOUNT:\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row class=\"rowEmpAmount\">\n                                    <ion-col *ngIf=\"resultsOnline[['Table2']].length > 0\">\n                                        {{resultsOnline['Table2'][0].TotalAmount}}\n                                    </ion-col>\n                                    <ion-col *ngIf=\"resultsOnline['Table2'].length == 0\">\n                                        0\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-label>\n                    </ion-item>\n                </div>\n                <div *ngIf=\"loadingDoneCanteen; else shimmer\">\n                    <ion-item lines=\"full\" button detail (click)=\"setPurchaseDetails(resultsCanteen,'Canteen')\">\n                        <img class=\"imgEmployee \" src=\"assets/icon/ic_purchase_canteen.png\" alt=\" \">\n                        <ion-label class=\"EmpDetails \" text-wrap>\n                            <div class=\"EmpName \">\n                                Canteen Credits\n                            </div>\n                            <ion-grid class=\"EmpInfo \">\n                                <ion-row class=\"rowEmpDetails\">\n                                    <ion-col>\n                                        GRAND TOTAL:\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row class=\"rowEmpAmount\">\n                                    <ion-col *ngIf=\"resultsCanteen['Table2'][0].Column1 != null\">\n                                        {{resultsCanteen['Table2'][0].Column1}}\n                                    </ion-col>\n                                    <ion-col *ngIf=\"resultsCanteen['Table2'][0].Column1 == null\">\n                                        0\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-label>\n                    </ion-item>\n                </div>\n            </ion-list>\n        </div>\n    </ion-card>\n</ion-content>\n<ng-template #shimmer>\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    <ion-list>\n        <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0]\">\n            <div id=\"box\" class=\"shine\"></div>\n            <div class=\"divShimmer\">\n                <div id=\"lines1\" class=\"shine\"></div>\n                <div id=\"lines1\" class=\"shine\"></div>\n                <div id=\"lines1\" class=\"shine\"></div>\n            </div>\n        </ion-item>\n    </ion-list>\n</ng-template>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n                <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n                <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n                    <ion-icon color=\"light\" name=\"home\"></ion-icon>\n                </ion-button>\n            </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/purchases/purchases.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/purchases/purchases.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --background: #558B2F;\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: center;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\nion-icon {\n  font-size: 24px !important;\n  text-shadow: 10px 10px 10px #0000005c;\n}\n\nion-card {\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-col {\n  padding: 0px;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.classContent {\n  --background: #F5F5F5;\n}\n\n.imgEmployee {\n  width: 50px;\n  height: 50px;\n  margin: 10px 20px;\n  margin-left: 5px;\n}\n\n.EmpDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.EmpName {\n  color: #2a2a2a;\n  font-size: 15px;\n  display: block;\n  font-family: \"RobotoMedium\";\n  margin-bottom: 10px;\n}\n\n.EmpInfo {\n  display: block;\n  color: #808080;\n  padding: 0px;\n}\n\n.rowEmpDetails {\n  font-size: 11px;\n}\n\n.rowEmpAmount {\n  color: #2a2a2a;\n  font-size: 15px;\n  font-family: \"RobotoMedium\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvcHVyY2hhc2VzL3B1cmNoYXNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3B1cmNoYXNlcy9wdXJjaGFzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQ0FKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLGtDQUFBO0FDRko7O0FES0E7RUFDSSwwQkFBQTtFQUNBLHFDQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0VBQ0EsNEVBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7QUNGSjs7QURLQTtFQUNJLHdDQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0kscUJBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1cmNoYXNlcy9wdXJjaGFzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNTU4QjJGO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmcnKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIC8vIGhlaWdodDogMTAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIC8vbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCAjMDAwMDAwNWM7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uYnRuTWVudSB7XG4gICAgcGFkZGluZzogMCAwIDAgNXB4O1xufVxuXG4uY2xhc3NDb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGNUY1RjU7XG59XG5cbi5pbWdFbXBsb3llZSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5FbXBEZXRhaWxzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5FbXBOYW1lIHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLkVtcEluZm8ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnJvd0VtcERldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnJvd0VtcEFtb3VudCB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufSIsImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICM1NThCMkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uYnRuTWVudSB7XG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNsYXNzQ29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cblxuLmltZ0VtcGxveWVlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5FbXBEZXRhaWxzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5FbXBOYW1lIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uRW1wSW5mbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzgwODA4MDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucm93RW1wRGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnJvd0VtcEFtb3VudCB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/purchases/purchases.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/purchases/purchases.page.ts ***!
  \***************************************************/
/*! exports provided: PurchasesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesPage", function() { return PurchasesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");








var PurchasesPage = /** @class */ (function () {
    function PurchasesPage(storage, router, activatedRoute, httpApi, loginService, menuCtrl, modalController) {
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.httpApi = httpApi;
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.modalController = modalController;
        this.loadingDoneEmp = false;
        this.loadingDoneOnline = false;
        this.loadingDoneCanteen = false;
        this.noError = true;
        this.isFullyPaid = false;
    }
    PurchasesPage.prototype.ngOnInit = function () {
    };
    PurchasesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dateTo = (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear();
        this.dateFrom = (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + (new Date().getFullYear() - 1);
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.getEmployeePurchases();
            _this.getOnlinePurchases();
            _this.getCanteenCredits();
        });
    };
    PurchasesPage.prototype.getEmployeePurchases = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            _this.loadingDoneEmp = false;
            var postData = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EmployeeId: _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/EmployeePurchases/GetEmployeeStoreDiscountDetails", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.loadingDoneEmp = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.loadingDoneEmp = true;
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
                        _this.loadingDoneEmp = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.loadingDoneEmp = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.resultsEmployee = jsonData['Value']['Table'];
                    _this.loadingDoneEmp = true;
                    console.log(_this.resultsEmployee);
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                    _this.loadingDoneEmp = true;
                });
            });
        });
    };
    PurchasesPage.prototype.getOnlinePurchases = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            _this.loadingDoneOnline = false;
            var postData = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EmployeeId: _this.empId,
                DateFrom: _this.dateFrom,
                DateTo: _this.dateTo
            };
            console.log(postData);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/OnlinePurchases/GetOnlinePurchasesDetails", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.loadingDoneOnline = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.loadingDoneOnline = true;
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
                        _this.loadingDoneOnline = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.loadingDoneOnline = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.resultsOnline = jsonData['Value'];
                    _this.loadingDoneOnline = true;
                    console.log(_this.resultsOnline);
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                    _this.loadingDoneOnline = true;
                });
            });
        });
    };
    PurchasesPage.prototype.getCanteenCredits = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            _this.loadingDoneCanteen = false;
            var postData = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EmployeeId: _this.empId,
                DateFrom: _this.dateFrom,
                DateTo: _this.dateTo,
                Status: "U",
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/Canteen/GetCanteenDetails", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.loadingDoneCanteen = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.loadingDoneCanteen = true;
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
                        _this.loadingDoneCanteen = true;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.resultsCanteen = jsonData['Value'];
                    _this.loadingDoneCanteen = true;
                    console.log(_this.resultsCanteen);
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                    _this.loadingDoneCanteen = true;
                });
            });
        });
    };
    PurchasesPage.prototype.setPurchaseDetails = function (item, fromPage) {
        console.log(item);
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_PURCHASEDETAILS"], item);
        this.router.navigate(['/purchasedetails', fromPage]);
    };
    PurchasesPage.prototype.refresh = function () {
        this.ionViewWillEnter();
    };
    PurchasesPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    PurchasesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchases',
            template: __webpack_require__(/*! ./purchases.page.html */ "./src/app/pages/purchases/purchases.page.html"),
            styles: [__webpack_require__(/*! ./purchases.page.scss */ "./src/app/pages/purchases/purchases.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], PurchasesPage);
    return PurchasesPage;
}());



/***/ })

}]);
//# sourceMappingURL=purchases-purchases-module.js.map