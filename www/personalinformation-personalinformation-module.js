(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personalinformation-personalinformation-module"],{

/***/ "./src/app/pages/personalinformation/personalinformation.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/personalinformation/personalinformation.module.ts ***!
  \*************************************************************************/
/*! exports provided: PersonalinformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalinformationPageModule", function() { return PersonalinformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _personalinformation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personalinformation.page */ "./src/app/pages/personalinformation/personalinformation.page.ts");







var routes = [
    {
        path: '',
        component: _personalinformation_page__WEBPACK_IMPORTED_MODULE_6__["PersonalinformationPage"]
    }
];
var PersonalinformationPageModule = /** @class */ (function () {
    function PersonalinformationPageModule() {
    }
    PersonalinformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_personalinformation_page__WEBPACK_IMPORTED_MODULE_6__["PersonalinformationPage"]]
        })
    ], PersonalinformationPageModule);
    return PersonalinformationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/personalinformation/personalinformation.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/personalinformation/personalinformation.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button *ngIf=\"fromPage == 'subordinate'\" class=\"button-light\" slot=\"start\" mode=\"md\">\n            </ion-back-button>\n            <ion-button *ngIf=\"fromPage != 'subordinate'\" class=\"btnMenu\" ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <div class=\"divPhoto\">\n        <img class=\"imgPhoto\" src=\"assets/icon/ic_pi_dp.png\" alt=\"\">\n    </div>\n    <!-- <div class=\"divTitle\">Personal Information</div> -->\n    <ion-label text-wrap>\n        <div class=\"lblName\">\n            <span class=\"lblFullName\">{{name}}</span>\n            <span class=\"lblPosition\">{{idShow}}</span>\n            <span class=\"lblPosition\">{{position}}</span>\n        </div>\n    </ion-label>\n</ion-header>\n<ion-content class=\"classContent\" hide-header header=\"header\">\n    <ion-card class=\"crdContent\" *ngIf=\"noError; else error\">\n        <ion-list lines=\"full\" class=\"list\" (click)=\"pageInfo('Personal')\">\n            <ion-item button detail>\n                <img class=\"imgLeave\" src=\"assets/icon/ic_pi_pb.png\" alt=\"\">\n                <ion-label text-wrap>\n                    <div class=\"divDetails\">\n                        <span class=\"className\">Personal Background</span>\n                    </div>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n        <ion-list lines=\"full\" class=\"list\" (click)=\"pageInfo('Family')\">\n            <ion-item button detail>\n                <img class=\"imgLeave\" src=\"assets/icon/ic_pi_fm.png\" alt=\"\">\n                <ion-label text-wrap>\n                    <div class=\"divDetails\">\n                        <span class=\"className\">Family</span>\n                    </div>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n        <ion-list lines=\"full\" class=\"list\" (click)=\"pageInfo('Education')\">\n            <ion-item button detail>\n                <img class=\"imgLeave\" src=\"assets/icon/ic_pi_ed.png\" alt=\"\">\n                <ion-label text-wrap>\n                    <div class=\"divDetails\">\n                        <span class=\"className\">Education</span>\n                    </div>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n        <ion-list lines=\"full\" class=\"list\" (click)=\"pageInfo('IDBank')\">\n            <ion-item button detail>\n                <img class=\"imgLeave\" src=\"assets/icon/ic_pi_id.png\" alt=\"\">\n                <ion-label text-wrap>\n                    <div class=\"divDetails\">\n                        <span class=\"className\">ID / Bank Info</span>\n                    </div>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n</ion-content>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n                <ion-button class=\"errorButton\" (click)=\"refresh()\">REFRESH</ion-button>\n                <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n                    <ion-icon color=\"light\" name=\"home\"></ion-icon>\n                </ion-button>\n            </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/personalinformation/personalinformation.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/personalinformation/personalinformation.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('homepageHeader.png') !important;\n  background-size: cover;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n  --border-width: 0px !important;\n}\n\nion-back-button {\n  color: white;\n  padding-top: 15px;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\n.btnMenu {\n  --padding: 0px;\n  padding: 0 0 0 5px;\n  margin-top: 30px;\n}\n\n.divTitle {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3607843137);\n  text-align: center;\n  line-height: 80px;\n}\n\n.divPhoto {\n  margin-top: -20px;\n  z-index: 10;\n  color: #2a2a2a;\n  text-align: center;\n}\n\n.imgPhoto {\n  height: 140px;\n}\n\n.lblName {\n  color: white;\n  text-align: center;\n  font-size: 20px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3607843137);\n  padding: 10px 0px;\n}\n\n.lblFullName {\n  color: white;\n  font-size: 18px;\n  display: block;\n  margin-top: 5px;\n  font-family: \"RobotoMedium\";\n}\n\n.lblPosition {\n  display: block;\n  font-size: 12px;\n}\n\n.classContent {\n  --background: #F3F3F3;\n  --padding-top: 10px !important;\n}\n\n.crdContent {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.imgLeave {\n  width: 40px;\n  height: 40px;\n  margin-right: 15px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.className {\n  color: #2a2a2a;\n  font-size: 14px;\n  display: block;\n  font-weight: bold;\n  margin-top: 5px;\n}\n\n.cardEntry {\n  margin: 5px;\n}\n\n.cardContent {\n  padding: 0px 15px 0px 0px;\n}\n\n.EntryInfo {\n  vertical-align: top;\n  padding-left: 10px;\n  font-size: 13px;\n}\n\n.menuToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-left: 5px;\n  font-weight: bold;\n  color: #484848;\n}\n\n.EntryName {\n  color: #484848;\n  font-size: 10px;\n  display: block;\n}\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyc29uYWxpbmZvcm1hdGlvbi9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUi13b3JraW5nIC0gKDQpL3NyY1xcYXBwXFxwYWdlc1xccGVyc29uYWxpbmZvcm1hdGlvblxccGVyc29uYWxpbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BlcnNvbmFsaW5mb3JtYXRpb24vcGVyc29uYWxpbmZvcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzREFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FER0E7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksd0NBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvREFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEVBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcnNvbmFsaW5mb3JtYXRpb24vcGVyc29uYWxpbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZXBhZ2VIZWFkZXIucG5nJykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG5NZW51IHtcbiAgICAtLXBhZGRpbmc6IDBweDtcbiAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmRpdlRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogODBweDtcbn1cblxuLmRpdlBob3RvIHtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWdQaG90byB7XG4gICAgaGVpZ2h0OiAxNDBweDtcbn1cblxuLmxibE5hbWUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5sYmxGdWxsTmFtZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5sYmxQb3NpdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2xhc3NDb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgLS1wYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY3JkQ29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5pbWdMZWF2ZSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jbGFzc05hbWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jYXJkRW50cnkge1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4uY2FyZENvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweCAxNXB4IDBweCAwcHg7XG59XG5cbi5FbnRyeUluZm8ge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm1lbnVUb2dnbGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbi5FbnRyeU5hbWUge1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkVudHJ5VmFsdWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lcGFnZUhlYWRlci5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuLmJ0bk1lbnUge1xuICAtLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogMCAwIDAgNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZGl2VGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzYwNzg0MzEzNyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG59XG5cbi5kaXZQaG90byB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZ1Bob3RvIHtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cblxuLmxibE5hbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM2MDc4NDMxMzcpO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuLmxibEZ1bGxOYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4ubGJsUG9zaXRpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2xhc3NDb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAtLXBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jcmRDb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmltZ0xlYXZlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2xhc3NOYW1lIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jYXJkRW50cnkge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmNhcmRDb250ZW50IHtcbiAgcGFkZGluZzogMHB4IDE1cHggMHB4IDBweDtcbn1cblxuLkVudHJ5SW5mbyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubWVudVRvZ2dsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLkVudHJ5TmFtZSB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uRW50cnlWYWx1ZSB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/personalinformation/personalinformation.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/personalinformation/personalinformation.page.ts ***!
  \***********************************************************************/
/*! exports provided: PersonalinformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalinformationPage", function() { return PersonalinformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var PersonalinformationPage = /** @class */ (function () {
    function PersonalinformationPage(navCtrl, storage, activatedRoute, loginService, menuCtrl, httpApi, router) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.httpApi = httpApi;
        this.router = router;
        this.loadingDone = false;
        this.noError = true;
        this.clickedPIBG = false;
        this.clickedPersonal = false;
        this.clickedAddress = false;
        this.clickedContact = false;
    }
    PersonalinformationPage.prototype.ngOnInit = function () {
    };
    PersonalinformationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDone = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.fromPage = _this.activatedRoute.snapshot.paramMap.get('page');
            _this.getInfo();
            if (_this.fromPage == 'subordinate') {
                _this.subId = _this.activatedRoute.snapshot.paramMap.get('id');
                _this.name = _this.activatedRoute.snapshot.paramMap.get('name');
                _this.position = _this.activatedRoute.snapshot.paramMap.get('position');
                _this.idShow = _this.subId;
            }
            else {
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPDETAILS"]).then(function (val) {
                    _this.name = val['0']['FULLNAME'];
                    _this.position = val['0']['POSITIONDESC'];
                    _this.idShow = _this.empId;
                });
            }
        });
    };
    PersonalinformationPage.prototype.getInfo = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var postData = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EmployeeID: _this.fromPage == 'subordinate' ? _this.subId : _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/BasicInfo/GetPersonalInformation", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log('Personal Info: ', jsonData);
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
                    _this.noError = true;
                    _this.personalInfo = jsonData['Value']['tblPersonalInfo']['0'];
                    _this.mobileInfo = jsonData['Value']['tblMobileInfo'];
                    _this.familyInfo = jsonData['Value']['tblFamily'];
                    _this.familyContactInfo = jsonData['Value']['tblFamilyContactPerson'];
                    _this.educationInfo = jsonData['Value']['tblEducation'];
                    if ((_this.personalInfo == null || _this.personalInfo == undefined) &&
                        (_this.familyInfo.length == 0) &&
                        (_this.educationInfo.length == 0)) {
                        _this.noError = false;
                        _this.errorMessage = "EMPTY";
                    }
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    PersonalinformationPage.prototype.refresh = function () {
        this.ionViewWillEnter();
    };
    PersonalinformationPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    PersonalinformationPage.prototype.pageInfo = function (item) {
        if (this.fromPage == 'subordinate') {
            this.router.navigate(['/personalbackground',
                this.subId,
                item
            ]);
        }
        else {
            this.router.navigate(['/personalbackground',
                this.empId,
                item
            ]);
        }
    };
    PersonalinformationPage.prototype.goBack = function () { this.navCtrl.back(); };
    PersonalinformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personalinformation',
            template: __webpack_require__(/*! ./personalinformation.page.html */ "./src/app/pages/personalinformation/personalinformation.page.html"),
            styles: [__webpack_require__(/*! ./personalinformation.page.scss */ "./src/app/pages/personalinformation/personalinformation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], PersonalinformationPage);
    return PersonalinformationPage;
}());



/***/ })

}]);
//# sourceMappingURL=personalinformation-personalinformation-module.js.map