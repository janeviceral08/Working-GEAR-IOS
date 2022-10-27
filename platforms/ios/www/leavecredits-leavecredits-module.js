(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leavecredits-leavecredits-module"],{

/***/ "./src/app/pages/leavecredits/leavecredits.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/leavecredits/leavecredits.module.ts ***!
  \***********************************************************/
/*! exports provided: LeavecreditsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavecreditsPageModule", function() { return LeavecreditsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leavecredits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leavecredits.page */ "./src/app/pages/leavecredits/leavecredits.page.ts");







var routes = [
    {
        path: '',
        component: _leavecredits_page__WEBPACK_IMPORTED_MODULE_6__["LeavecreditsPage"]
    }
];
var LeavecreditsPageModule = /** @class */ (function () {
    function LeavecreditsPageModule() {
    }
    LeavecreditsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_leavecredits_page__WEBPACK_IMPORTED_MODULE_6__["LeavecreditsPage"]]
        })
    ], LeavecreditsPageModule);
    return LeavecreditsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/leavecredits/leavecredits.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/leavecredits/leavecredits.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button class=btnSearch slot=\"end\" [routerLink]=\"['/','leavesearch']\">\n                <ion-icon color=\"light\" slot=\"icon-only\" name=\"search\" icon-sm></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-title mode=\"md\" slot=\"start\">Leave Credits</ion-title>\n</ion-header>\n<ion-content padding class=\"contentClass\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card>\n        <div *ngIf=\"noError; else error\">\n            <div *ngIf=\"loadingDone; else shimmer\">\n                <ion-list class=\"listLeaves\" lines=\"full\" class=\"list\">\n                    <ion-item button detail *ngFor=\"let item of (results );\" [routerLink]=\" ['/', 'leavelist', item.LEAVE_DESC, item.LEAVECODE]\">\n                        <img class=\"imgLeave\" src={{getLeaveTypeSrc(item.LEAVECODE)}} alt=\"\">\n                        <ion-label text-wrap>\n                            <div class=\"leaveDetails\">\n                                <span class=\"leaveName\">{{ item.LEAVE_DESC }}</span>\n                            </div>\n                            <ion-grid class=\"leaveCreditsInfo\">\n                                <ion-row>\n                                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                                        Balance :\n                                    </ion-col>\n                                    <ion-col size=\"2\">\n                                        {{item.BALANCE}}\n                                    </ion-col>\n                                    <ion-col class=\"leaveCreditsInfoNameSecondRow\">\n                                        For Approval :\n                                    </ion-col>\n                                    <ion-col size=\"2\">\n                                        {{item.APPROVAL}}\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                                        Credit :\n                                    </ion-col>\n                                    <ion-col size=\"2\">\n                                        {{item.CREDITS}}\n                                    </ion-col>\n                                    <ion-col class=\"leaveCreditsInfoNameSecondRow\">\n                                        Approved :\n                                    </ion-col>\n                                    <ion-col size=\"2\">\n                                        {{item.APPROVED}}\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                                        Posted :\n                                    </ion-col>\n                                    <ion-col size=\"2\">\n                                        {{item.AVAILED}}\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-label>\n                    </ion-item>\n                </ion-list>\n            </div>\n        </div>\n    </ion-card>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\">\n        <ion-fab-button (click)=\"openAddLeave()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n<ng-template #shimmer>\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    <ion-list>\n        <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2,3,4,5]\">\n            <div id=\"box\" class=\"shine\"></div>\n            <div class=\"divShimmer\">\n                <div id=\"lines1\" class=\"shine\"></div>\n                <div id=\"lines2\" class=\"shine\"></div>\n                <div id=\"lines2\" class=\"shine\"></div>\n                <div id=\"lines2\" class=\"shine\"></div>\n            </div>\n        </ion-item>\n    </ion-list>\n</ng-template>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/leavecredits/leavecredits.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/leavecredits/leavecredits.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --background: #558B2F;\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: bottom;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\nion-icon {\n  font-size: 24px !important;\n  text-shadow: 10px 10px 10px #0000005c;\n}\n\nion-card {\n  margin-top: -5px;\n  margin-left: -5px;\n  margin-right: -5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-col {\n  padding: 0px;\n}\n\nion-fab {\n  margin-bottom: 40px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n\n.sc-ion-back-button-md-h {\n  color: white;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.contentClass {\n  --background: #F5F5F5;\n}\n\n.imgLeave {\n  width: 50px;\n  height: 50px;\n  margin: 10px 20px;\n  margin-left: 5px;\n}\n\n.leaveDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.leaveName {\n  color: #2a2a2a;\n  font-size: 15px;\n  display: block;\n  font-family: \"RobotoMedium\";\n}\n\n.leaveCreditsInfo {\n  font-size: 11px;\n  margin-top: -1px;\n  display: block;\n  color: #808080;\n  padding: 0px;\n}\n\n.leaveCreditsInfoNameFirstRow {\n  max-width: 48px;\n  color: #808080;\n}\n\n.leaveCreditsInfoNameSecondRow {\n  max-width: 75px;\n  color: #808080;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvbGVhdmVjcmVkaXRzL2xlYXZlY3JlZGl0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXZlY3JlZGl0cy9sZWF2ZWNyZWRpdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQ0FKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLGtDQUFBO0FDRko7O0FES0E7RUFDSSwwQkFBQTtFQUNBLHFDQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWF2ZWNyZWRpdHMvbGVhdmVjcmVkaXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogIzU1OEIyRjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nJykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAvLyBoZWlnaHQ6IDEwMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvL21hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggIzAwMDAwMDVjO1xufVxuXG5pb24tY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tZmFiIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZC1oIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG5NZW51IHtcbiAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XG59XG5cbi5jb250ZW50Q2xhc3Mge1xuICAgIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cblxuLmltZ0xlYXZlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmxlYXZlRGV0YWlscyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGVhdmVOYW1lIHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZUZpcnN0Um93IHtcbiAgICBtYXgtd2lkdGg6IDQ4cHg7XG4gICAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZVNlY29uZFJvdyB7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xuICAgIGNvbG9yOiAjODA4MDgwO1xufSIsImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICM1NThCMkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tZmFiIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZC1oIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuTWVudSB7XG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNvbnRlbnRDbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cblxuLmltZ0xlYXZlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5sZWF2ZURldGFpbHMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmxlYXZlTmFtZSB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm8ge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzgwODA4MDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mb05hbWVGaXJzdFJvdyB7XG4gIG1heC13aWR0aDogNDhweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZVNlY29uZFJvdyB7XG4gIG1heC13aWR0aDogNzVweDtcbiAgY29sb3I6ICM4MDgwODA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/leavecredits/leavecredits.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/leavecredits/leavecredits.page.ts ***!
  \*********************************************************/
/*! exports provided: LeavecreditsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavecreditsPage", function() { return LeavecreditsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");








var LeavecreditsPage = /** @class */ (function () {
    function LeavecreditsPage(storage, menuCtrl, router, loginService, alertController, platform, httpApi) {
        var _this = this;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.loginService = loginService;
        this.alertController = alertController;
        this.platform = platform;
        this.httpApi = httpApi;
        this.loadingDone = false;
        this.noError = true;
        this.platform.ready().then(function () {
            _this.platform.backButton.subscribe(function () {
                _this.showExitDialog();
            });
        });
    }
    LeavecreditsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.platform.backButton.subscribe(function () {
                _this.showExitDialog();
            });
        });
        this.loadingDone = false;
        this.noError = true;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.getLeaveCredits(val);
        });
    };
    LeavecreditsPage.prototype.getLeaveCredits = function (employeeid) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var postData = {
                UserID: employeeid,
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/leaverequest/findall", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value']['tblLeaveCredit'] == null || jsonData['Value']['tblLeaveCredit'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.results = jsonData['Value']['tblLeaveCredit'];
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    LeavecreditsPage.prototype.getLeaveTypeSrc = function (leaveType) {
        if (leaveType == "BL") {
            return "assets/icon/ic_bl.png";
        }
        else if (leaveType == "EL") {
            return "assets/icon/ic_el.png";
        }
        else if (leaveType == "IL") {
            return "assets/icon/ic_il.png";
        }
        else if (leaveType == "MCW") {
            return "assets/icon/ic_mcw.png";
        }
        else if (leaveType == "ML") {
            return "assets/icon/ic_ml.png";
        }
        else if (leaveType == "PL") {
            return "assets/icon/ic_pl.png";
        }
        else if (leaveType == "SL") {
            return "assets/icon/ic_sl.png";
        }
        else if (leaveType == "SPL") {
            return "assets/icon/ic_spl.png";
        }
        else if (leaveType == "VL") {
            return "assets/icon/ic_vl.png";
        }
        else if (leaveType == "XS") {
            return "assets/icon/ic_xs.png";
        }
        else {
            return "assets/icon/ic_xs.png";
        }
    };
    LeavecreditsPage.prototype.refresh = function (event) {
        this.event = event;
        this.ngOnInit();
    };
    LeavecreditsPage.prototype.openAddLeave = function () {
        this.router.navigate(['/leaveadd',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ]);
    };
    LeavecreditsPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    LeavecreditsPage.prototype.showExitDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Exit HRIS',
                            message: 'Are you sure you want to exit HRIS?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Exit',
                                    handler: function () {
                                        navigator['HRIS'].exitApp();
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LeavecreditsPage.prototype.ionViewWillLeave = function () {
        this.showExitDialog();
    };
    LeavecreditsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leavecredits',
            template: __webpack_require__(/*! ./leavecredits.page.html */ "./src/app/pages/leavecredits/leavecredits.page.html"),
            styles: [__webpack_require__(/*! ./leavecredits.page.scss */ "./src/app/pages/leavecredits/leavecredits.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]])
    ], LeavecreditsPage);
    return LeavecreditsPage;
}());



/***/ })

}]);
//# sourceMappingURL=leavecredits-leavecredits-module.js.map