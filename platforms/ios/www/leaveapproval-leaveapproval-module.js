(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leaveapproval-leaveapproval-module"],{

/***/ "./src/app/pages/leaveapproval/leaveapproval.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/leaveapproval/leaveapproval.module.ts ***!
  \*************************************************************/
/*! exports provided: LeaveapprovalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveapprovalPageModule", function() { return LeaveapprovalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leaveapproval_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaveapproval.page */ "./src/app/pages/leaveapproval/leaveapproval.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _leaveapproval_page__WEBPACK_IMPORTED_MODULE_6__["LeaveapprovalPage"]
    }
];
var LeaveapprovalPageModule = /** @class */ (function () {
    function LeaveapprovalPageModule() {
    }
    LeaveapprovalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_leaveapproval_page__WEBPACK_IMPORTED_MODULE_6__["LeaveapprovalPage"]]
        })
    ], LeaveapprovalPageModule);
    return LeaveapprovalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/leaveapproval/leaveapproval.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/leaveapproval/leaveapproval.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n        <ion-icon class=btnMenu color=\"light\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=btnFilter slot=\"end\" color=\"light\" (click)=\"openModal()\">\n        <ion-icon slot=\"start\" name=\"search\" mode=\"md\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title mode=\"md\" slot=\"start\">Leave Approval</ion-title>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf=\"noError; else error\">\n    <div *ngIf=\"loadingDone; else shimmer\">\n      <ion-card *ngFor=\"let item of (results)\">\n        <ion-card-header class=\"cardHeader\">\n          <ion-item lines=\"full\" class=\"lblHeader\">\n            <ion-label>\n              <div class=\"labelNameHeader\" text-wrap>\n                <div class=\"labelName\">{{item.EMPL_NAME}}</div>\n                <div class=\"labelDateFiled\">{{getLongDate(item.DATEFILE)}}</div>\n              </div>\n            </ion-label>\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <!-- <ion-item lines=\"full\" button detail=\"true\" [routerLink]=\" ['/', 'leavedetails', item.ID, 'forapproval','']\"> -->\n\n          <ion-item lines=\"full\" button detail=\"true\" (click)=\"setLeaveDetails(item,'forapproval')\">\n            <ion-avatar class=\"classLeaveFromDiv\">\n              <div class=\"avatarLeaveFromMonth\">\n                {{getDateMonth(item.LEAVEFROM,1)}}\n              </div>\n              <div class=\"avatarLeaveFromDate\">\n                {{getDateDate(item.LEAVEFROM)}}\n              </div>\n            </ion-avatar>\n            <ion-label class=\"labelLeaveDescDiv\" text-wrap>\n              <span class=\"labelStatusDesc\">{{ item.LEAVEDESC }}</span>\n              <span\n                [ngClass]=\"{'labelRequestType': item.REQUESTTYPEDESC == 'WITH PAY', 'labelRequestTypeRed' : item.REQUESTTYPEDESC != 'WITH PAY'}\">{{ item.REQUESTTYPEDESC }}</span>\n              <span class=\"labelLeaveDay\" *ngIf=\"item.LEAVEDAY > 1 \">{{ item.LEAVEDAY }} days duration</span>\n              <span class=\"labelLeaveDay\" *ngIf=\"item.LEAVEDAY <= 1 \">{{ item.LEAVEDAY }} day duration</span>\n              <!-- <span class=\"labelLeaveDay\" *ngIf=\"item.LEAVEDAY <= 1 \">{{ item.LEAVEDAY }} day duration</span> -->\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n        <ion-row class=\"cardFooter\">\n          <ion-col class=\"colSelect\">\n            <ion-select id=\"select{{item.ID}}\" class=\"selectItems roundedItems\" interface=\"popover\">\n              <ion-select-option *ngFor=\"let leave of leaveStatusApprovalList; let idx = index\" value={{leave}}\n                selected=\"{{idx==0}}\">{{leave}}</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col class=\"colRemarks\">\n            <ion-textarea id=\"input{{item.ID}}\" class=\"textRemarks roundedItems\" rows=\"1\" placeholder=\"Remarks\"\n              maxlength=\"500\">\n            </ion-textarea>\n          </ion-col>\n          <ion-col class=\"colSubmit\">\n            <ion-button class=\"button-light btnSend\" fill=\"clear\" size=\"small\" (click)=\"submitLeaveApproval(item)\">\n              <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n\n\n<ng-template #shimmer>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  <ion-card *ngFor=\"let number of [0,1,2,3,4,5]\">\n    <ion-card-header class=\"cardHeader\">\n      <ion-item button lines=\"full\">\n        <ion-label class=\"labelNameHeader\" text-wrap>\n          <div id=\"lines1\" class=\"shine\"></div>\n        </ion-label>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item button lines=\"full\" detail=\"true\">\n        <ion-avatar class=\"classLeaveFromDiv\">\n          <div class=\"avatarLeaveFromMonth\"></div>\n          <div class=\"avatarLeaveFromDate\"></div>\n        </ion-avatar>\n        <ion-label>\n          <div id=\"lines3\" class=\"shine\"></div><br>\n          <div id=\"lines3\" class=\"shine\"></div><br>\n          <div id=\"lines4\" class=\"shine\"></div>\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n    <ion-row class=\"cardFooter\">\n      <ion-col class=\"colSelect\">\n        <div id=\"lines5\" class=\"shine\"></div>\n      </ion-col>\n      <ion-col class=\"colRemarks\">\n        <div id=\"lines6\" class=\"shine\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ng-template>\n\n\n<ng-template #error>\n  <ion-item lines=\"none\">\n    <div class=\"errorbox\">\n      <ion-avatar class=\"center\">\n        <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n      <span class=\"errorMessage\">{{errorMessage}}</span>\n      <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">REFRESH</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n    </div>\n  </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/leaveapproval/leaveapproval.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/leaveapproval/leaveapproval.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: top;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n  margin-top: 20px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\nion-card {\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-card-header {\n  padding: 0px;\n}\n\nion-card-content {\n  padding: 0px;\n}\n\nion-icon {\n  font-size: 24px !important;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\n.btnMenu {\n  padding: 0px 0 0 5px;\n}\n\n.btnFilter {\n  margin-right: -5px;\n}\n\n.labelNameHeader {\n  padding-top: 0px;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.labelName {\n  font-size: 14px;\n  color: black;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.labelDateFiled {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n}\n\n.classLeaveFromDiv {\n  margin-top: -30px;\n}\n\n.labelLeaveDescDiv {\n  margin: 15px 0 15px 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.labelStatusDesc {\n  font-size: 14px;\n  padding-left: 30px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.labelRequestType {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-top: -3px;\n  margin-bottom: 10px;\n  display: block;\n  color: #808080;\n}\n\n.labelRequestTypeRed {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-top: -3px;\n  margin-bottom: 10px;\n  display: block;\n  color: #F44336;\n}\n\n.labelLeaveDay {\n  font-size: 11px;\n  margin-left: 30px;\n  color: #808080;\n}\n\n.avatarLeaveFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.avatarLeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.colSelect {\n  max-width: 120px;\n}\n\n.selectItems {\n  color: black;\n  margin-left: 5px;\n  font-size: 14px;\n  height: 39px;\n}\n\n.cardFooter {\n  margin-right: 10px;\n}\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.colSubmit {\n  max-width: 25px;\n}\n\n.btnSend {\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvbGVhdmVhcHByb3ZhbC9sZWF2ZWFwcHJvdmFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVhdmVhcHByb3ZhbC9sZWF2ZWFwcHJvdmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxrQ0FBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLDRFQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSwwQkFBQTtBQ0RKOztBRElBO0VBQ0ksd0NBQUE7QUNESjs7QURJQTtFQUNJLG9CQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQ0FBQTtVQUFBLG9DQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWF2ZWFwcHJvdmFsL2xlYXZlYXBwcm92YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2Jhbm5lcl9kYXJrX2dyZWVuLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgLy8gaGVpZ2h0OiAxMDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xufVxuXG5pb24tY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuLmJ0bk1lbnUge1xuICAgIHBhZGRpbmc6IDBweCAwIDAgNXB4O1xufVxuXG4uYnRuRmlsdGVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XG59XG5cbi5sYWJlbE5hbWVIZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGFiZWxOYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxhYmVsRGF0ZUZpbGVkIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjODA4MDgwO1xufVxuXG4uY2xhc3NMZWF2ZUZyb21EaXYge1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4ubGFiZWxMZWF2ZURlc2NEaXYge1xuICAgIG1hcmdpbjogMTVweCAwIDE1cHggMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbFN0YXR1c0Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGFiZWxSZXF1ZXN0VHlwZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5sYWJlbFJlcXVlc3RUeXBlUmVkIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI0Y0NDMzNjtcbn1cblxuLmxhYmVsTGVhdmVEYXkge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmF2YXRhckxlYXZlRnJvbU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogMjBweFxufVxuXG4uYXZhdGFyTGVhdmVGcm9tRGF0ZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5jb2xTZWxlY3Qge1xuICAgIG1heC13aWR0aDogMTIwcHg7XG59XG5cbi5zZWxlY3RJdGVtcyB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogMzlweDtcbn1cblxuLmNhcmRGb290ZXIge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnJvdW5kZWRJdGVtcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xTdWJtaXQge1xuICAgIG1heC13aWR0aDogMjVweDtcbn1cblxuLmJ0blNlbmQge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG5NZW51IHtcbiAgcGFkZGluZzogMHB4IDAgMCA1cHg7XG59XG5cbi5idG5GaWx0ZXIge1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG59XG5cbi5sYWJlbE5hbWVIZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGFiZWxOYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGFiZWxEYXRlRmlsZWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5jbGFzc0xlYXZlRnJvbURpdiB7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4ubGFiZWxMZWF2ZURlc2NEaXYge1xuICBtYXJnaW46IDE1cHggMCAxNXB4IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGFiZWxTdGF0dXNEZXNjIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGFiZWxSZXF1ZXN0VHlwZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5sYWJlbFJlcXVlc3RUeXBlUmVkIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI0Y0NDMzNjtcbn1cblxuLmxhYmVsTGVhdmVEYXkge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmF2YXRhckxlYXZlRnJvbU1vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5hdmF0YXJMZWF2ZUZyb21EYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmNvbFNlbGVjdCB7XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG5cbi5zZWxlY3RJdGVtcyB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDM5cHg7XG59XG5cbi5jYXJkRm9vdGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmNvbFN1Ym1pdCB7XG4gIG1heC13aWR0aDogMjVweDtcbn1cblxuLmJ0blNlbmQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/leaveapproval/leaveapproval.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/leaveapproval/leaveapproval.page.ts ***!
  \***********************************************************/
/*! exports provided: LeaveapprovalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveapprovalPage", function() { return LeaveapprovalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");









var LeaveapprovalPage = /** @class */ (function () {
    function LeaveapprovalPage(loginService, modalController, storage, router, menuCtrl, alertController, loadingCtrl, httpApi) {
        this.loginService = loginService;
        this.modalController = modalController;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.httpApi = httpApi;
        this.leaveStatusApprovalList = ["Approved", "Disapproved", "On Hold", "Escalate"];
        this.noError = true;
        this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
        this.loadingDone = false;
        this.leave = {
            ShowAll: true
        };
    }
    LeaveapprovalPage.prototype.ngOnInit = function () {
    };
    LeaveapprovalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.modalIsOpen = false;
        this.noError = true;
        this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
        this.loadingDone = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.getLeaveForApproval();
        });
    };
    LeaveapprovalPage.prototype.refresh = function (event) {
        this.event = event;
        this.ionViewWillEnter();
    };
    LeaveapprovalPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    LeaveapprovalPage.prototype.showExitDialog = function () {
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
    LeaveapprovalPage.prototype.ionViewWillLeave = function () {
        this.showExitDialog();
    };
    LeaveapprovalPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    LeaveapprovalPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_2__["FilterMenuComponent"],
                                cssClass: 'modalFilterMenu',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "LeaveApproval",
                                    data: this.leave
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.leave['EmployeeId'] = Number(_this.empId);
                                    _this.leave['EmpName'] = detail.data['empName'];
                                    _this.leave['LeaveType'] = detail.data['leaveType'];
                                    _this.leave['LeaveFrom'] = detail.data['leaveFrom'];
                                    _this.leave['LeaveReason'] = detail.data['reason'];
                                    _this.leave['DateFrom'] = detail.data['dateFiledFrom'];
                                    _this.leave['DateTo'] = (!detail.data['dateFiledTo'] ? detail.data['dateFiledFrom'] : detail.data['dateFiledTo']);
                                    _this.leave['User'] = _this.empId;
                                    _this.leave['LeaveTo'] = (!detail.data['leaveTo'] ? detail.data['leaveFrom'] : detail.data['leaveTo']);
                                    _this.leave['ShowAll'] = detail.data['showDirect'];
                                    if (!detail.data['empNumber']) {
                                        _this.leave['EmployeeId'] = 0;
                                    }
                                    else {
                                        _this.leave['EmployeeId'] = detail.data['empNumber'];
                                    }
                                    _this.loadingDone = false;
                                    _this.noError = true;
                                    _this.getLeaveForApproval();
                                }
                            }
                            _this.modalIsOpen = false;
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LeaveapprovalPage.prototype.getLeaveForApproval = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            _this.leave['User'] = _this.empId;
            _this.leave['LeaveRequestStatus'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_FOR_APPROVAL"];
            _this.leave['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]];
            _this.leave['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]];
            _this.leave['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]];
            _this.leave['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"];
            _this.leave['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/HRISApproval/GetForApproval", _this.leave, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
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
                        _this.errorMessage = jsonData['Message'];
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var resultTemp = jsonData['Value'];
                    if (resultTemp.length <= 0) {
                        _this.noError = false;
                        _this.errorMessage = "EMPTY";
                        return;
                    }
                    _this.noError = true;
                    _this.results = jsonData['Value'];
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
    LeaveapprovalPage.prototype.getDateMonth = function (datename, procedure) {
        if (datename.includes("MORNING")) {
            var reAm = / - MORNING/gi;
        }
        else if (datename.includes("AFTERNOON")) {
            var reAm = / - AFTERNOON/gi;
        }
        var newstr = datename.replace(reAm, "");
        var date = new Date(newstr);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    LeaveapprovalPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename.toString().substring(0, 10));
        return date.getDate().toString();
    };
    LeaveapprovalPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename.toString().substring(0, 10));
        return date.getFullYear().toString();
    };
    LeaveapprovalPage.prototype.getLongDate = function (datename) {
        var month = this.getDateMonth(datename, 2);
        var date = this.getDateDate(datename);
        var year = this.getDateYear(datename);
        var fulldate = month + " " + date + ", " + year;
        return fulldate;
    };
    LeaveapprovalPage.prototype.submitLeaveApproval = function (leave) {
        var _this = this;
        var status = document.getElementById("select" + leave['ID']).value;
        var remarks = document.getElementById("input" + leave['ID']).value;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var leaveForApproval = {
                ID: leave['ID'],
                ApproverRemarks: remarks,
                ApprovalStatus: _this.getStatusApproval(status),
                User: Number(_this.empId),
                ShowAll: true,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"]
            };
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loading = overlay;
                _this.loading.present();
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/HRISApproval/ApprovalProcess", leaveForApproval, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
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
                        _this.loading.dismiss();
                        switch (status) {
                            case "Approved": {
                                _this.showDialog("DONE!", "You have approved this request", true, "Great!");
                                break;
                            }
                            case "Disapproved": {
                                _this.showDialog("DONE!", "You have disapproved this request", true, "Okay");
                                break;
                            }
                            case "Escalate": {
                                _this.showDialog("DONE!", "You have escalated this request", true, "Okay");
                                break;
                            }
                            case "On Hold": {
                                _this.showDialog("DONE!", "You have put on hold this request", true, "Okay");
                                break;
                            }
                            default: {
                                _this.showDialog("DONE!", "You have processed this request", true, "Great!");
                                break;
                            }
                        }
                    })
                        .catch(function (error) {
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", error, true, "Okay");
                    });
                });
            });
        });
    };
    LeaveapprovalPage.prototype.getStatusApproval = function (status) {
        switch (status) {
            case "Approved": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_APPROVED"];
            }
            case "Disapproved": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_DISAPPROVED"];
            }
            case "Escalate": {
                return "ESCALATE";
            }
            case "On Hold": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_ON_HOLD"];
            }
            default:
                {
                    return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_APPROVED"];
                }
        }
    };
    LeaveapprovalPage.prototype.setLeaveDetails = function (item, type) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_LEAVEDETAILS"], item);
        this.router.navigate(['/leavedetails', type, 'leaveapproval']);
    };
    LeaveapprovalPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
    LeaveapprovalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaveapproval',
            template: __webpack_require__(/*! ./leaveapproval.page.html */ "./src/app/pages/leaveapproval/leaveapproval.page.html"),
            styles: [__webpack_require__(/*! ./leaveapproval.page.scss */ "./src/app/pages/leaveapproval/leaveapproval.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"]])
    ], LeaveapprovalPage);
    return LeaveapprovalPage;
}());



/***/ })

}]);
//# sourceMappingURL=leaveapproval-leaveapproval-module.js.map