(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advisorytypelist-advisorytypelist-module"],{

/***/ "./src/app/pages/advisorytypelist/advisorytypelist.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/advisorytypelist/advisorytypelist.module.ts ***!
  \*******************************************************************/
/*! exports provided: AdvisorytypelistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorytypelistPageModule", function() { return AdvisorytypelistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _advisorytypelist_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./advisorytypelist.page */ "./src/app/pages/advisorytypelist/advisorytypelist.page.ts");








var routes = [
    {
        path: '',
        component: _advisorytypelist_page__WEBPACK_IMPORTED_MODULE_7__["AdvisorytypelistPage"]
    }
];
var AdvisorytypelistPageModule = /** @class */ (function () {
    function AdvisorytypelistPageModule() {
    }
    AdvisorytypelistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_advisorytypelist_page__WEBPACK_IMPORTED_MODULE_7__["AdvisorytypelistPage"]],
            providers: [
                _services_leave_service__WEBPACK_IMPORTED_MODULE_5__["LeaveService"]
            ],
        })
    ], AdvisorytypelistPageModule);
    return AdvisorytypelistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/advisorytypelist/advisorytypelist.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/advisorytypelist/advisorytypelist.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button class=btnSearch slot=\"end\" [routerLink]=\"['/','advisorysearch']\">\n                <ion-icon color=\"light\" slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-title mode=\"md\" slot=\"start\">Attendance Advisory</ion-title>\n</ion-header>\n<ion-content padding class=\"contentClass\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card>\n        <div *ngIf=\"noError; else error\">\n            <div *ngIf=\"loadingDone; else shimmer\">\n                <ion-list lines=\"full\" class=\"list\">\n                    <ion-item button lines=\"full\" detail=\"false\" *ngFor=\"let item of advisoryList;\" [routerLink]=\" ['/', 'advisorylist', item.SEQNO]\">\n                        <img class=\"imgLeave\" src={{getAdvisoryTypeSrc(item.SEQNO)}} alt=\"\">\n                        <ion-label text-wrap>\n                            <div class=\"leaveDetails\">\n                                <span class=\"leaveName\">{{ item.DESCRIPTION }}</span>\n                                <span class=\"leaveBalance\">Count : {{ item.COUNT }}</span>\n                            </div>\n                        </ion-label>\n                    </ion-item>\n                </ion-list>\n            </div>\n        </div>\n    </ion-card>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\">\n        <ion-fab-button (click)=\"openAddAdvisory()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n\n<ng-template #shimmer>\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2,3,4,5]\">\n        <div id=\"box\" class=\"shine\"></div>\n\n        <div class=\"divShimmer\">\n            <div id=\"lines1\" class=\"shine\"></div>\n            <div id=\"lines2\" class=\"shine\"></div>\n        </div>\n    </ion-item>\n</ng-template>\n\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/advisorytypelist/advisorytypelist.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/advisorytypelist/advisorytypelist.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: bottom;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\nion-icon {\n  font-size: 24px !important;\n}\n\nion-card {\n  margin-top: -5px;\n  margin-left: -5px;\n  margin-right: -5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-fab {\n  margin-bottom: 40px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n\n.sc-ion-back-button-md-h {\n  color: white;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.contentClass {\n  --background: #F5F5F5;\n}\n\n.imgLeave {\n  width: 50px;\n  height: 50px;\n  margin-right: 15px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.leaveDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.leaveName {\n  color: #2a2a2a;\n  font-size: 15px;\n  display: block;\n  margin-top: 5px;\n  font-family: \"RobotoMedium\";\n}\n\n.leaveBalance {\n  font-size: 12px;\n  margin-bottom: 5px;\n  color: #808080;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvYWR2aXNvcnl0eXBlbGlzdC9hZHZpc29yeXR5cGVsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWR2aXNvcnl0eXBlbGlzdC9hZHZpc29yeXR5cGVsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0VBQ0Esa0NBQUE7QUNGSjs7QURLQTtFQUNJLDBCQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fkdmlzb3J5dHlwZWxpc3QvYWR2aXNvcnl0eXBlbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nJykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAvLyBoZWlnaHQ6IDEwMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvL21hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1mYWIge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uc2MtaW9uLWJhY2stYnV0dG9uLW1kLWgge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bk1lbnUge1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNvbnRlbnRDbGFzcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xufVxuXG4uaW1nTGVhdmUge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGVhdmVEZXRhaWxzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sZWF2ZU5hbWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5sZWF2ZUJhbGFuY2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6ICM4MDgwODA7XG59IiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5pb24tZmFiIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZC1oIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuTWVudSB7XG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNvbnRlbnRDbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cblxuLmltZ0xlYXZlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGVhdmVEZXRhaWxzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sZWF2ZU5hbWUge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLmxlYXZlQmFsYW5jZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzgwODA4MDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/advisorytypelist/advisorytypelist.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/advisorytypelist/advisorytypelist.page.ts ***!
  \*****************************************************************/
/*! exports provided: AdvisorytypelistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorytypelistPage", function() { return AdvisorytypelistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");








var AdvisorytypelistPage = /** @class */ (function () {
    function AdvisorytypelistPage(storage, httpApi, loginService, menuCtrl, router) {
        this.storage = storage;
        this.httpApi = httpApi;
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.loadingDone = false;
        this.noError = true;
    }
    AdvisorytypelistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingDone = false;
        this.noError = true;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_REQTYPE"]).then(function (val) {
            _this.advisoryList = val;
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
                _this.getAdvisory();
            });
        });
    };
    AdvisorytypelistPage.prototype.getAdvisory = function () {
        var _this = this;
        var countAl = 0;
        var countAu = 0;
        var countOs = 0;
        var countCto = 0;
        var countOb = 0;
        var countAs = 0;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                USER: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_USER_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                EMPNO: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_USER_ID"]]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/GetAttendanceAdvisory", request, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                        _this.noError = false;
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
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.results = jsonData['Value'];
                    _this.results.forEach(function (element) {
                        switch (element['REQUESTTYPECODE']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_AUT"]:
                                countAu++;
                                break;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_AL"]:
                                countAl++;
                                break;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_OS"]:
                                countOs++;
                                break;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_CTO"]:
                                countCto++;
                                break;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_OB"]:
                                countOb++;
                                break;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_AS"]:
                                countAs++;
                                break;
                        }
                    });
                    _this.advisoryList.forEach(function (element) {
                        switch (element['SEQNO']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_AUT"]:
                                element['COUNT'] = countAu;
                                break;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_AL"]:
                                element['COUNT'] = countAl;
                                break;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_OS"]:
                                element['COUNT'] = countOs;
                                break;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_CTO"]:
                                element['COUNT'] = countCto;
                                break;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_OB"]:
                                element['COUNT'] = countOb;
                                break;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_AS"]:
                                element['COUNT'] = countAs;
                                break;
                        }
                    });
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    AdvisorytypelistPage.prototype.getAdvisoryTypeSrc = function (advisoryType) {
        switch (advisoryType) {
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_AUT"]:
                return "assets/icon/ic_au.png";
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_AL"]:
                return "assets/icon/ic_al.png";
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_OS"]:
                return "assets/icon/ic_os.png";
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_CTO"]:
                return "assets/icon/ic_cto.png";
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_OB"]:
                return "assets/icon/ic_ob.png";
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_AS"]:
                return "assets/icon/ic_as.png";
        }
    };
    AdvisorytypelistPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    AdvisorytypelistPage.prototype.openAddAdvisory = function () {
        this.router.navigate(['/advisoryadd',
            '',
            '',
            '',
            '',
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
    AdvisorytypelistPage.prototype.refresh = function (event) {
        this.event = event;
        this.ngOnInit();
    };
    AdvisorytypelistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advisorytypelist',
            template: __webpack_require__(/*! ./advisorytypelist.page.html */ "./src/app/pages/advisorytypelist/advisorytypelist.page.html"),
            styles: [__webpack_require__(/*! ./advisorytypelist.page.scss */ "./src/app/pages/advisorytypelist/advisorytypelist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdvisorytypelistPage);
    return AdvisorytypelistPage;
}());



/***/ })

}]);
//# sourceMappingURL=advisorytypelist-advisorytypelist-module.js.map