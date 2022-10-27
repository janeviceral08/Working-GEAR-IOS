(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getup-getup-module"],{

/***/ "./src/app/pages/getup/getup.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/getup/getup.module.ts ***!
  \*********************************************/
/*! exports provided: GetupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetupPageModule", function() { return GetupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _getup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getup.page */ "./src/app/pages/getup/getup.page.ts");







var routes = [
    {
        path: '',
        component: _getup_page__WEBPACK_IMPORTED_MODULE_6__["GetupPage"]
    }
];
var GetupPageModule = /** @class */ (function () {
    function GetupPageModule() {
    }
    GetupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_getup_page__WEBPACK_IMPORTED_MODULE_6__["GetupPage"]]
        })
    ], GetupPageModule);
    return GetupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/getup/getup.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/getup/getup.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-buttons slot=\"start\">\n    <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n      <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n    </ion-button>\n    <ion-title mode=\"md\">Get Up</ion-title>\n  </ion-buttons>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"noError; else error\">\n    <ion-card>\n      <ion-card-header class=\"cardHeader\">\n        <img class=\"imgChildrensHour\" src=\"/assets/img/childrens_hour.png\" alt=\"\">\n      </ion-card-header>\n      <ion-card-content class=\"cardContent\" *ngIf=\"!donePledge\">\n        <ion-item lines=\"none\">\n          <ion-checkbox class=\"chkPledge\" checked=\"{{isPledge}}\" (ionChange)=\"clickIsPledge()\"></ion-checkbox>\n          <ion-label class=\"lblPledge\"> Yes, I pledge to support Children's Hour in its pursuit of\n            meaningful programs committed to the welfare and development of underprivileged Filipino\n            children.\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-radio-group mode=\"md\" [(ngModel)]=\"rdoSelected\">\n            <ion-item *ngFor=\"let hour of rate; let i = index;\">\n              <ion-label class=\"lblDesc\">{{hour.Description}}</ion-label>\n              <ion-radio slot=\"start\" value=\"{{hour.seqno}}\" [checked]=\"i==0\" mode=\"md\"\n                (ionSelect)=\"rateChange(hour.seqno)\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-radio slot=\"start\" value=\"Others\" mode=\"md\" (ionSelect)=\"rateChange('Others')\"></ion-radio>\n              <ion-label class=\"lblOthers\">Others: Please specify amount</ion-label>\n            </ion-item>\n          </ion-radio-group>\n        </ion-item>\n        <ion-item class=\"itemOthers\" lines=\"none\" disabled=\"{{showOthersInput}}\">\n          <ion-input class=\"txtOthers rounded\" type=\"number\" [(ngModel)]=\"otherAmount\">\n          </ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-checkbox class=\"chkAuthorize\" checked=\"{{isAuthorize}}\" (ionChange)=\"clickIsAuthorize()\"></ion-checkbox>\n          <ion-label class=\"lblAuthorize\"> I hereby authorize Golden ABC Inc. to deduct the said donation\n            from the DECEMBER 25 payroll.\n          </ion-label>\n        </ion-item>\n        <ion-button block outline class=\"btnAgree\" size=\"large\" (click)=\"clickAgree()\" disabled=\"{{disableAgree}}\"\n          expand=\"block\">Agree\n        </ion-button>\n      </ion-card-content>\n      <ion-card-content class=\"cardContentThanks\" *ngIf=\"donePledge\">\n        <div>\n          <img class=\"imgGetUp\" src=\"/assets/img/getup.png\" alt=\"\"></div>\n        <div class=\"lblThankYou\">\n          <ion-label >THANK YOU FOR YOUR SUPPORT!</ion-label>\n        </div>\n        <div class=\"lblThanksMessage\">\n          <ion-label >{{thanksMessage}}</ion-label>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n<ng-template #error>\n  <ion-card lines=\"none\" class=\"errorbox2\">\n    <ion-avatar class=\"center\">\n      <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n    <span class=\"errorMessage\">{{errorMessage}}</span>\n    <br />\n    <span class=\"errorMessage\">\n      <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n      <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n        <ion-icon color=\"light\" name=\"home\"></ion-icon>\n      </ion-button>\n    </span>\n  </ion-card>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/getup/getup.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/getup/getup.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #F3F3F3;\n}\n\nion-header {\n  background-color: #558B2F;\n  padding-bottom: 5px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n\nion-card {\n  margin: 10px;\n  background: white;\n}\n\n.imgChildrensHour {\n  position: relative;\n  display: block;\n}\n\n.imgGetUp {\n  position: relative;\n  display: block;\n  width: auto;\n  height: 250px;\n  margin: auto;\n  padding: 20px 0px;\n}\n\n.btnMenu {\n  --padding: 0px;\n  margin-top: 10px;\n  padding: 0 0 0 5px;\n}\n\n.cardHeader {\n  padding: 0px;\n  background: white;\n}\n\n.cardContent {\n  padding: 0px;\n  background: white;\n}\n\n.cardContentThanks {\n  padding: 0 0 30px 0;\n  background: white;\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n\n.chkPledge {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n  height: 20px;\n  width: 20px;\n}\n\n.chkAuthorize {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n  height: 20px;\n  width: 20px;\n}\n\n.lblPledge,\n.lblAuthorize {\n  padding: 10px;\n  font-weight: bold;\n  font-size: 12px;\n  color: #2a2a2a;\n  white-space: pre-line !important;\n}\n\n.lblDesc {\n  font-size: 12px;\n  overflow: visible;\n  white-space: normal;\n}\n\n.lblOthers {\n  font-size: 12px;\n}\n\n.itemOthers {\n  padding-left: 35px;\n  padding-right: 10px;\n}\n\n.txtOthers {\n  --padding-start: 5px !important;\n  font-size: 14px !important;\n}\n\n.btnAgree {\n  --background: #D3A828;\n  font-size: 14px;\n  padding: 0px 30%;\n  margin-bottom: 15px;\n}\n\n.lblThankYou {\n  color: #2a2a2a;\n  font-size: 20px;\n  overflow: visible;\n  white-space: normal;\n  text-align: center;\n  font-weight: bold;\n}\n\n.lblThanksMessage {\n  color: #2a2a2a;\n  font-size: 12px;\n  overflow: visible;\n  white-space: normal;\n  text-align: center;\n  padding-top: 5px;\n}\n\n.rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  --padding-start: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvZ2V0dXAvZ2V0dXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9nZXR1cC9nZXR1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO09BQUEsdUJBQUE7QUNBSjs7QURHQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTs7RUFFSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksK0JBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nZXR1cC9nZXR1cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjNGM0YzO1xufVxuXG5pb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmltZ0NoaWxkcmVuc0hvdXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmltZ0dldFVwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG59XG5cbi5idG5NZW51IHtcbiAgICAtLXBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNhcmRIZWFkZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNhcmRDb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jYXJkQ29udGVudFRoYW5rcyB7XG4gICAgcGFkZGluZzogMCAwIDMwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbn1cblxuLmNoa1BsZWRnZSB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLWJvcmRlci1jb2xvcjogZ3JheTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5jaGtBdXRob3JpemUge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRDNBODI4O1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1ib3JkZXItY29sb3I6IGdyYXk7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4ubGJsUGxlZGdlLFxuLmxibEF1dGhvcml6ZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cbi5sYmxEZXNjIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmxibE90aGVycyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaXRlbU90aGVycyB7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi50eHRPdGhlcnMge1xuICAgIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5BZ3JlZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAwcHggMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5sYmxUaGFua1lvdSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGJsVGhhbmtzTWVzc2FnZSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5yb3VuZGVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0YzRjNGMztcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NThCMkY7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmltZ0NoaWxkcmVuc0hvdXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW1nR2V0VXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAyNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cblxuLmJ0bk1lbnUge1xuICAtLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMCAwIDAgNXB4O1xufVxuXG4uY2FyZEhlYWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jYXJkQ29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jYXJkQ29udGVudFRoYW5rcyB7XG4gIHBhZGRpbmc6IDAgMCAzMHB4IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbn1cblxuLmNoa1BsZWRnZSB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRDNBODI4O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjRDNBODI4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1ib3JkZXItY29sb3I6IGdyYXk7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5jaGtBdXRob3JpemUge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0QzQTgyODtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiBncmF5O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4ubGJsUGxlZGdlLFxuLmxibEF1dGhvcml6ZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbn1cblxuLmxibERlc2Mge1xuICBmb250LXNpemU6IDEycHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4ubGJsT3RoZXJzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaXRlbU90aGVycyB7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnR4dE90aGVycyB7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuQWdyZWUge1xuICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMHB4IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmxibFRoYW5rWW91IHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sYmxUaGFua3NNZXNzYWdlIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnJvdW5kZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/getup/getup.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/getup/getup.page.ts ***!
  \*******************************************/
/*! exports provided: GetupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetupPage", function() { return GetupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");







var GetupPage = /** @class */ (function () {
    function GetupPage(loginService, menuCtrl, storage, navCtrl, loadingCtrl, alertController, httpApi) {
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.httpApi = httpApi;
        this.loadingDone = false;
        this.noError = true;
        this.donePledge = false;
        this.isPledge = false;
        this.isAuthorize = false;
        this.showOthersInput = true;
        this.disableAgree = true;
    }
    GetupPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CHILDRENHOURRATE"]).then(function (val) {
                _this.rate = val;
                _this.rate.pop();
                _this.getDonation();
            });
        });
        this.rdoSelected = "0";
    };
    GetupPage.prototype.getDonation = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var postData = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                IsActive: true,
                UserID: _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/ChildrenHour/GetEmployeeDonation", postData, {})
                    .then(function (data) {
                    console.log(data.data);
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
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
                    _this.empDonation = jsonData['Value'];
                    console.log(_this.empDonation);
                    if (_this.empDonation == null || _this.empDonation == undefined || _this.empDonation.length == 0) {
                        _this.donePledge = false;
                    }
                    else {
                        _this.donePledge = true;
                        if (_this.empDonation['0']['CHamount'] == "0") {
                            _this.donatedValue = _this.rate[_this.empDonation['0']['CHdonation']]['Description'].substring(_this.rate[_this.empDonation['0']['CHdonation']]['Description'].indexOf("(") + 1, _this.rate[_this.empDonation['0']['CHdonation']]['Description'].indexOf(")"));
                        }
                        else {
                            _this.donatedValue = "P" + _this.empDonation['0']['CHamount'];
                        }
                        _this.thanksMessage = "You have pledged " + _this.donatedValue;
                    }
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    console.log(_this.errorMessage);
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    GetupPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    GetupPage.prototype.rateChange = function (seqNo) {
        if (seqNo == "Others") {
            this.showOthersInput = false;
        }
        else {
            this.showOthersInput = true;
        }
    };
    GetupPage.prototype.clickIsPledge = function () {
        this.isPledge = !this.isPledge;
        if (this.isPledge && this.isAuthorize) {
            this.disableAgree = false;
        }
        else {
            this.disableAgree = true;
        }
    };
    GetupPage.prototype.clickIsAuthorize = function () {
        this.isAuthorize = !this.isAuthorize;
        if (this.isPledge && this.isAuthorize) {
            this.disableAgree = false;
        }
        else {
            this.disableAgree = true;
        }
    };
    GetupPage.prototype.clickAgree = function () {
        if (this.rdoSelected == null || this.rdoSelected == undefined) {
            alert("Please select donation amount");
            return;
        }
        if (this.rdoSelected == 'Others') {
            if (this.otherAmount == null || this.otherAmount == undefined || this.otherAmount == "0" || this.otherAmount == "") {
                alert("Please input amount");
                return;
            }
            this.donation = (this.rate.length).toString();
        }
        else {
            this.donation = this.rdoSelected;
            this.otherAmount = "";
        }
        this.donateSubmit();
    };
    GetupPage.prototype.donateSubmit = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var donate = {
                UserID: _this.empId,
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                CreatedDate: null,
                IsActive: true,
                Donation: _this.donation,
                Amount: _this.otherAmount,
                IsAgree: true,
                IsPledge: true,
                IsAccept: true,
                strIsAgree: "1",
                strIsPledge: "1",
                strIsAccept: "1",
            };
            console.log(donate);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/ChildrenHour/ProcessDonation", donate, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], false, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], false, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_YES"]) {
                        _this.loading.dismiss();
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
                        _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                        return;
                    }
                    _this.showDialog("DONE!", "Your pledge has been submitted!", true, "Great!");
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], false, "Okay");
                });
            });
        });
    };
    GetupPage.prototype.showDialog = function (title, message, refreshPage, buttonText) {
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
                                        if (refreshPage) {
                                            _this.ngOnInit();
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
    GetupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getup',
            template: __webpack_require__(/*! ./getup.page.html */ "./src/app/pages/getup/getup.page.html"),
            styles: [__webpack_require__(/*! ./getup.page.scss */ "./src/app/pages/getup/getup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]])
    ], GetupPage);
    return GetupPage;
}());



/***/ })

}]);
//# sourceMappingURL=getup-getup-module.js.map