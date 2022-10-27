(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leavecredits-leavecredits-module"],{

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

module.exports = "<ion-header>\r\n  <!-- <ion-buttons slot=\"start\">\r\n    <ion-back-button class=\"button-light\"></ion-back-button>\r\n  </ion-buttons> -->\r\n  <ion-title>Credits</ion-title>\r\n</ion-header>\r\n<ion-content padding>\r\n  <ion-card>\r\n    <ion-list>\r\n      <ion-item button detail *ngFor=\"let item of (results | async);\"\r\n        [routerLink]=\" ['/', 'leavelist', item.LEAVECODE]\">\r\n        <ion-avatar slot=\"start\" *ngIf=\"item.LEAVECODE == 'BL'\" name=\"Birthday Leave\">\r\n          <img src=\"assets/icon/ic_bl.png\" alt=\"\"></ion-avatar>\r\n        <ion-avatar slot=\"start\" *ngIf=\"item.LEAVECODE == 'EL'\" name=\"Emergency Leave\">\r\n          <img src=\"assets/icon/ic_el.png\"></ion-avatar>\r\n        <ion-avatar slot=\"start\" *ngIf=\"item.LEAVECODE == 'IL'\" name=\"\">\r\n          <img src=\"assets/icon/ic_il.png\"></ion-avatar>\r\n        <ion-avatar slot=\"start\" *ngIf=\"item.LEAVECODE == 'MCW'\" name=\"\">\r\n          <img src=\"assets/icon/ic_mcw.png\"></ion-avatar>\r\n        <ion-avatar slot=\"start\" *ngIf=\"item.LEAVECODE == 'ML'\" name=\"\">\r\n          <img src=\"assets/icon/ic_ml.png\"></ion-avatar>\r\n        <ion-avatar slot=\"start\" *ngIf=\"item.LEAVECODE == 'PL'\" name=\"\">\r\n          <img src=\"assets/icon/ic_pl.png\"></ion-avatar>\r\n        <ion-avatar slot=\"start\" *ngIf=\"item.LEAVECODE == 'SL'\" name=\"Sick Leave\">\r\n          <img src=\"assets/icon/ic_sl.png\"></ion-avatar>\r\n        <ion-avatar slot=\"start\" *ngIf=\"item.LEAVECODE == 'SPL'\" name=\"\">\r\n          <img src=\"assets/icon/ic_spl.png\"></ion-avatar>\r\n        <ion-avatar slot=\"start\" *ngIf=\"item.LEAVECODE == 'VL'\" name=\"Vacation Leave\">\r\n          <img src=\"assets/icon/ic_vl.png\"></ion-avatar>\r\n\r\n        <ion-label text-wrap>\r\n          <div class=\"leaveDetails\">\r\n            <span class=\"leaveName\">{{ item.LEAVE_DESC }}</span>\r\n            <span class=\"leaveBalance\">Balance : {{ item.BALANCE }}</span>\r\n          </div>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\">\r\n  <ion-fab-button [routerLink]=\" ['/', 'leaveadd',  '']\">+</ion-fab-button>\r\n</ion-fab>"

/***/ }),

/***/ "./src/app/pages/leavecredits/leavecredits.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/leavecredits/leavecredits.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: center center;\n  height: 100px; }\n\nion-title {\n  color: white;\n  margin-top: 35px;\n  margin-left: 10px;\n  font-size: 45px; }\n\nion-card {\n  margin-top: -5px;\n  margin-left: -5px;\n  margin-right: -5px; }\n\nion-fab {\n  margin-bottom: 40px; }\n\n.sc-ion-back-button-md-h {\n  color: white; }\n\n.leaveName {\n  font-size: 20px;\n  display: block; }\n\n.leaveBalance {\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhdmVjcmVkaXRzL0U6XFxQcm9qZWN0c1xcSFJJU01vYmlsZUlvbmljL3NyY1xcYXBwXFxwYWdlc1xcbGVhdmVjcmVkaXRzXFxsZWF2ZWNyZWRpdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQTZFO0VBQzdFLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXZlY3JlZGl0cy9sZWF2ZWNyZWRpdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nJykgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG59XHJcblxyXG5pb24tZmFiIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5zYy1pb24tYmFjay1idXR0b24tbWQtaCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sZWF2ZU5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5sZWF2ZUJhbGFuY2Uge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59Il19 */"

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
/* harmony import */ var src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var LeavecreditsPage = /** @class */ (function () {
    function LeavecreditsPage(leaveService, storage) {
        this.leaveService = leaveService;
        this.storage = storage;
    }
    LeavecreditsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_EMPID"]).then(function (val) {
            _this.results = _this.leaveService.getLeaveCredits(val);
            console.log(_this.results);
        });
    };
    LeavecreditsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leavecredits',
            template: __webpack_require__(/*! ./leavecredits.page.html */ "./src/app/pages/leavecredits/leavecredits.page.html"),
            styles: [__webpack_require__(/*! ./leavecredits.page.scss */ "./src/app/pages/leavecredits/leavecredits.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], LeavecreditsPage);
    return LeavecreditsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-leavecredits-leavecredits-module.js.map