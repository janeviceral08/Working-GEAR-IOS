(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-antigentestqaapproval-antigentestqaapproval-module"],{

/***/ "./src/app/pages/antigentestqaapproval/antigentestqaapproval.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/antigentestqaapproval/antigentestqaapproval.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AntigentestqaapprovalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntigentestqaapprovalPageModule", function() { return AntigentestqaapprovalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _antigentestqaapproval_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./antigentestqaapproval.page */ "./src/app/pages/antigentestqaapproval/antigentestqaapproval.page.ts");







var routes = [
    {
        path: '',
        component: _antigentestqaapproval_page__WEBPACK_IMPORTED_MODULE_6__["AntigentestqaapprovalPage"]
    }
];
var AntigentestqaapprovalPageModule = /** @class */ (function () {
    function AntigentestqaapprovalPageModule() {
    }
    AntigentestqaapprovalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_antigentestqaapproval_page__WEBPACK_IMPORTED_MODULE_6__["AntigentestqaapprovalPage"]]
        })
    ], AntigentestqaapprovalPageModule);
    return AntigentestqaapprovalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/antigentestqaapproval/antigentestqaapproval.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/antigentestqaapproval/antigentestqaapproval.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"backButton()\">\n        <ion-icon color=\"light\" name=\"ios-arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title mode=\"md\" slot=\"start\">Antigen QA Approval</ion-title>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]=\"searchInput\" (ionChange)=\"onInput($event)\" (ionCancel)=\"onCancel($event)\"></ion-searchbar>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"bubbles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf=\"loadingDone; else shimmer\">\n    <div *ngIf=\"noError; else error\">\n      <div *ngFor=\"let antigen of antigenTestQaList\">\n        <ion-card >\n          <ion-card-content>\n            <ion-item class=\"item\" lines=\"full\" button detail=\"true\" [routerLink]=\" ['/', 'antigentestqadetails', antigen.EmployeeID]\">\n              <ion-avatar class=\"classLeaveFromDiv\">\n                <div class=\"avatarLeaveFromMonth\">\n                  {{getDateMonth(antigen.CreatedDate,1)}}\n                </div>\n                <div class=\"avatarLeaveFromDate\">\n                  {{getDateDate(antigen.CreatedDate)}}\n                </div>\n              </ion-avatar>\n              <ion-label class=\"labelLeaveDescDiv\" text-wrap>\n                <span class=\"labelStatusDesc\">{{antigen.FirstName + \" \" + antigen.LastName}}</span>\n                <span class=\"labelRequestType\">{{antigen.EmployeeID}}</span>\n              </ion-label>\n            </ion-item>\n          </ion-card-content>\n          <ion-row class=\"cardFooter\">\n            <ion-col class=\"colSelect\">\n              <ion-select id=\"select{{antigen.EmployeeID}}\"  class=\"selectItems roundedItems\" interface=\"popover\">\n                <ion-select-option *ngFor=\"let result of antigenQaApproval; let idx = index\" value={{result}}\n                  selected=\"{{idx==0}}\">{{result}}</ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col class=\"colRemarks\">\n              <ion-textarea id=\"input{{antigen.EmployeeID}}\"  class=\"textRemarks roundedItems\" rows=\"1\" placeholder=\"Kit Number\" maxlength=\"500\">\n              </ion-textarea>\n            </ion-col>\n            <ion-col class=\"colSubmit\">\n              <ion-button class=\"button-light btnSend\" fill=\"clear\" size=\"small\" (click)=\"onSubmit(antigen)\">\n                <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>\n\n<ng-template #shimmer>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  <div id=\"lines7\" class=\"shine\"></div>\n  <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2]\">\n    <ion-avatar class=\"divDate\">\n      <div class=\"DateMonth\"></div>\n      <div class=\"DateDate\"></div>\n    </ion-avatar>\n    <ion-label>\n      <div id=\"lines4\" class=\"shine\"></div><br>\n      <div id=\"lines3\" class=\"shine\"></div><br>\n      <div id=\"lines3\" class=\"shine\"></div>\n    </ion-label>\n  </ion-item>\n</ng-template>\n<ng-template #error>\n  <ion-item lines=\"none\">\n    <div class=\"errorbox\">\n      <ion-avatar class=\"center\">\n        <img src=\"assets/img/logo_gabc_gray.png\">\n      </ion-avatar>\n      <span class=\"errorMessage\">{{errorMessage}}</span>\n      <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"retry()\">REFRESH</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\"['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n    </div>\n  </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/antigentestqaapproval/antigentestqaapproval.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/antigentestqaapproval/antigentestqaapproval.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: bottom;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\n.item {\n  margin-top: 14px;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\nion-card {\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-card-header {\n  padding: 0px;\n}\n\nion-card-content {\n  padding: 0px;\n}\n\nion-icon {\n  font-size: 24px !important;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\n.btnMenu {\n  padding: 0px 0 0 5px;\n}\n\n.btnFilter {\n  margin-right: -5px;\n}\n\n.labelNameHeader {\n  padding-top: 0px;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.labelName {\n  font-size: 14px;\n  color: black;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.labelDateFiled {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n}\n\n.classLeaveFromDiv {\n  margin-top: -30px;\n}\n\n.labelLeaveDescDiv {\n  margin: 15px 0 15px 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.labelStatusDesc {\n  font-size: 14px;\n  padding-left: 30px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.labelRequestType {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-top: -3px;\n  margin-bottom: 10px;\n  display: block;\n  color: #808080;\n}\n\n.labelRequestTypeRed {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-top: -3px;\n  margin-bottom: 10px;\n  display: block;\n  color: #F44336;\n}\n\n.labelLeaveDay {\n  font-size: 11px;\n  margin-left: 30px;\n  color: #808080;\n}\n\n.avatarLeaveFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.avatarLeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.colSelect {\n  max-width: 120px;\n}\n\n.selectItems {\n  color: black;\n  margin-left: 5px;\n  font-size: 14px;\n  height: 39px;\n}\n\n.cardFooter {\n  margin-right: 10px;\n}\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.colSubmit {\n  max-width: 25px;\n}\n\n.btnSend {\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvYW50aWdlbnRlc3RxYWFwcHJvdmFsL2FudGlnZW50ZXN0cWFhcHByb3ZhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FudGlnZW50ZXN0cWFhcHByb3ZhbC9hbnRpZ2VudGVzdHFhYXBwcm92YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxrQ0FBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FETUE7RUFDSSxlQUFBO0FDSEo7O0FET0E7RUFDSSxZQUFBO0VBQ0EsNEVBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7QUNKSjs7QURPQTtFQUNJLDBCQUFBO0FDSko7O0FET0E7RUFDSSx3Q0FBQTtBQ0pKOztBRE9BO0VBQ0ksb0JBQUE7QUNKSjs7QURPQTtFQUNJLGtCQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE9BO0VBQ0ksaUJBQUE7QUNKSjs7QURPQTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRE9BO0VBQ0ksZ0JBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDSko7O0FET0E7RUFDSSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO1VBQUEsb0NBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7QUNKSjs7QURPQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FudGlnZW50ZXN0cWFhcHByb3ZhbC9hbnRpZ2VudGVzdHFhYXBwcm92YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2Jhbm5lcl9kYXJrX2dyZWVuLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgLy8gaGVpZ2h0OiAxMDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xufVxuXG4uaXRlbSB7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLmJ0bk1lbnUge1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uYnRuTWVudSB7XG4gICAgcGFkZGluZzogMHB4IDAgMCA1cHg7XG59XG5cbi5idG5GaWx0ZXIge1xuICAgIG1hcmdpbi1yaWdodDogLTVweDtcbn1cblxuLmxhYmVsTmFtZUhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbE5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGFiZWxEYXRlRmlsZWQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5jbGFzc0xlYXZlRnJvbURpdiB7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5sYWJlbExlYXZlRGVzY0RpdiB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMTVweCAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmxhYmVsU3RhdHVzRGVzYyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbFJlcXVlc3RUeXBlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmxhYmVsUmVxdWVzdFR5cGVSZWQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjRjQ0MzM2O1xufVxuXG4ubGFiZWxMZWF2ZURheSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGNvbG9yOiAjODA4MDgwO1xufVxuXG4uYXZhdGFyTGVhdmVGcm9tTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyMHB4XG59XG5cbi5hdmF0YXJMZWF2ZUZyb21EYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmNvbFNlbGVjdCB7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLnNlbGVjdEl0ZW1zIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAzOXB4O1xufVxuXG4uY2FyZEZvb3RlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmNvbFN1Ym1pdCB7XG4gICAgbWF4LXdpZHRoOiAyNXB4O1xufVxuXG4uYnRuU2VuZCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2Jhbm5lcl9kYXJrX2dyZWVuLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG59XG5cbi5pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLmJ0bk1lbnUge1xuICBwYWRkaW5nOiAwIDAgMCA1cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuLmJ0bk1lbnUge1xuICBwYWRkaW5nOiAwcHggMCAwIDVweDtcbn1cblxuLmJ0bkZpbHRlciB7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbn1cblxuLmxhYmVsTmFtZUhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbE5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sYWJlbERhdGVGaWxlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmNsYXNzTGVhdmVGcm9tRGl2IHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5sYWJlbExlYXZlRGVzY0RpdiB7XG4gIG1hcmdpbjogMTVweCAwIDE1cHggMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbFN0YXR1c0Rlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbFJlcXVlc3RUeXBlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmxhYmVsUmVxdWVzdFR5cGVSZWQge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjRjQ0MzM2O1xufVxuXG4ubGFiZWxMZWF2ZURheSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG4uYXZhdGFyTGVhdmVGcm9tTW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmF2YXRhckxlYXZlRnJvbURhdGUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uY29sU2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLnNlbGVjdEl0ZW1zIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMzlweDtcbn1cblxuLmNhcmRGb290ZXIge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yb3VuZGVkSXRlbXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uY29sU3VibWl0IHtcbiAgbWF4LXdpZHRoOiAyNXB4O1xufVxuXG4uYnRuU2VuZCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/antigentestqaapproval/antigentestqaapproval.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/antigentestqaapproval/antigentestqaapproval.page.ts ***!
  \***************************************************************************/
/*! exports provided: AntigentestqaapprovalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntigentestqaapprovalPage", function() { return AntigentestqaapprovalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");








var AntigentestqaapprovalPage = /** @class */ (function () {
    function AntigentestqaapprovalPage(storage, router, menuCtrl, httpApi, modalController, navCtrl, loginService, alertController, loadingCtrl, plt) {
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.httpApi = httpApi;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.antigenQaApproval = ["Approved", "Disapproved"];
        this.loadingDone = false;
        this.noError = true;
        this.antigenTestQaList = [];
        this.tempAntigenQaList = [];
    }
    AntigentestqaapprovalPage.prototype.ngOnInit = function () {
        var _this = this;
        this.noError = true;
        this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
        this.loadingDone = false;
        this.plt.ready().then(function () {
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
                _this.getAntigenQaApprovalData();
            });
        });
    };
    AntigentestqaapprovalPage.prototype.getAntigenQaApprovalData = function () {
        var _this = this;
        console.log('getAntigenQaApprovalData');
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SESSION"]).then(function (val) {
            var request = {
                EmployeeId: "",
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["VERSION"],
                UserID: _this.empId,
                UserType: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_USER_TYPE"]],
                ProcessType: "employee-covid-antigen-qa-details-for-approval",
                ApprovalStatus: ""
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"]] + "/api/health/covid/antigen", request, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
                        _this.loadingDone = true;
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_YES"]) {
                        _this.loadingDone = true;
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                            case "No Available Data.":
                                _this.noError = false;
                                _this.errorMessage = "EMPTY";
                                return;
                            default:
                                _this.noError = false;
                                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
                                return;
                        }
                    }
                    console.log(jsonData);
                    _this.antigenTestQaList = jsonData['Value']['tblEmployeeAntigenQADetailsForApproval'];
                    _this.tempAntigenQaList = jsonData['Value']['tblEmployeeAntigenQADetailsForApproval'];
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    console.log(error);
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    AntigentestqaapprovalPage.prototype.onInput = function () {
        var _this = this;
        console.log(this.searchInput);
        this.antigenTestQaList = [];
        if (this.searchInput == '' || !this.searchInput) {
            this.antigenTestQaList = this.tempAntigenQaList;
        }
        else {
            var input = this.searchInput.toLocaleUpperCase();
            this.tempAntigenQaList.forEach(function (element) {
                if (element['FirstName'].toLocaleUpperCase().includes(input) || element['EmployeeID'].toString().toLocaleUpperCase().includes(input) || element['LastName'].toLocaleUpperCase().includes(input)) {
                    _this.antigenTestQaList.push(element);
                }
            });
        }
    };
    AntigentestqaapprovalPage.prototype.backButton = function () {
        this.navCtrl.back();
    };
    AntigentestqaapprovalPage.prototype.getDateMonth = function (datename, procedure) {
        if (!datename) {
            return '';
        }
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    AntigentestqaapprovalPage.prototype.getDateDate = function (datename) {
        if (!datename) {
            return '';
        }
        var date = new Date(datename);
        return date.getDate().toString();
    };
    AntigentestqaapprovalPage.prototype.toTitleCase = function (txt) {
        return txt.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    AntigentestqaapprovalPage.prototype.insertAntigenResult = function (empId, result, remarks) {
        var _this = this;
        console.log('getAntigenTestData');
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SESSION"]).then(function (val) {
                var request = {
                    UserID: _this.empId,
                    EmployeeId: empId,
                    SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_TOKEN"]],
                    AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["VERSION"],
                    ProcessType: "update-employee-covid-antigen-qa-details-for-approval",
                    ApproveStatus: result,
                    KitNumber: remarks
                };
                console.log(request);
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"]] + "/api/health/covid/antigen", request, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        console.log(jsonData);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_YES"]) {
                            _this.loading.dismiss();
                            switch (jsonData['Message']) {
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["OUTDATED_ERROR"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["OUTDATED_MESSAGE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OTHER_DEVICE"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_EXPIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_EXPIRED"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_REQUIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_REQUIRED"]);
                                    return;
                            }
                            _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                            return;
                        }
                        console.log(jsonData);
                        _this.loading.dismiss();
                        _this.showDialog("DONE!", "You have processed this request", true, "Great!");
                        _this.ngOnInit();
                    })
                        .catch(function (error) {
                        console.log(error);
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    AntigentestqaapprovalPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
                                        _this.ngOnInit();
                                    }
                                }]
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
    AntigentestqaapprovalPage.prototype.onSubmit = function (item) {
        if (!item) {
            alert("Error occurred, please try again later.");
            return;
        }
        var status = document.getElementById("select" + item['EmployeeID']).value;
        var remarks = document.getElementById("input" + item['EmployeeID']).value;
        if (!remarks) {
            alert("Please enter Kit Number.");
            return;
        }
        var result = (status.toLocaleUpperCase() == "APPROVED" ? "A" : "D");
        console.log(item['EmployeeID'], result, remarks);
        this.insertAntigenResult(item['EmployeeID'], result, remarks);
    };
    AntigentestqaapprovalPage.prototype.refresh = function (event) {
        this.event = event;
        this.ngOnInit();
    };
    AntigentestqaapprovalPage.prototype.retry = function () {
        this.ngOnInit();
    };
    AntigentestqaapprovalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-antigentestqaapproval',
            template: __webpack_require__(/*! ./antigentestqaapproval.page.html */ "./src/app/pages/antigentestqaapproval/antigentestqaapproval.page.html"),
            styles: [__webpack_require__(/*! ./antigentestqaapproval.page.scss */ "./src/app/pages/antigentestqaapproval/antigentestqaapproval.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
    ], AntigentestqaapprovalPage);
    return AntigentestqaapprovalPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-antigentestqaapproval-antigentestqaapproval-module.js.map