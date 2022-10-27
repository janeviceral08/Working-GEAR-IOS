(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wfhapproval-wfhapproval-module"],{

/***/ "./src/app/pages/wfhapproval/wfhapproval.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/wfhapproval/wfhapproval.module.ts ***!
  \*********************************************************/
/*! exports provided: WfhapprovalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfhapprovalPageModule", function() { return WfhapprovalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wfhapproval_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wfhapproval.page */ "./src/app/pages/wfhapproval/wfhapproval.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _wfhapproval_page__WEBPACK_IMPORTED_MODULE_6__["WfhapprovalPage"]
    }
];
var WfhapprovalPageModule = /** @class */ (function () {
    function WfhapprovalPageModule() {
    }
    WfhapprovalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_wfhapproval_page__WEBPACK_IMPORTED_MODULE_6__["WfhapprovalPage"]]
        })
    ], WfhapprovalPageModule);
    return WfhapprovalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/wfhapproval/wfhapproval.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/wfhapproval/wfhapproval.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n        <ion-icon class=btnMenu color=\"light\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=btnFilter slot=\"end\" color=\"light\" (click)=\"openModal()\">\n        <ion-icon slot=\"start\" name=\"search\" mode=\"md\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title mode=\"md\" slot=\"start\">Work From Home Approval</ion-title>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"bubbles\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"noError; else error\">\n    <div *ngIf=\"loadingDone; else shimmer\">\n      <ion-card *ngFor=\"let item of (results)\">\n        <ion-card-header class=\"cardHeader\">\n          <ion-item lines=\"full\" class=\"lblHeader\">\n            <ion-label>\n              <div class=\"labelNameHeader\" text-wrap>\n                <div class=\"labelName\">{{item.EMPL_NAME}}</div>\n              </div>\n            </ion-label>\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n\n          <ion-item lines=\"full\" button detail=\"true\"\n            [routerLink]=\" ['/', 'advisorydetails', item.ID, 'forapproval','item.STATUS','', 'home']\">\n\n            <!-- <ion-item lines=\"full\" button detail=\"true\" routerDirection=\"forward\"\n            href=\"/advisorydetails/{{item.ID}}/forapproval/item.STATUS/\"> -->\n            <ion-avatar class=\"classLeaveFromDiv\">\n              <div class=\"avatarLeaveFromMonth\">\n                {{getDateMonth(item.REQUESTDATE,1)}}\n              </div>\n              <div class=\"avatarLeaveFromDate\">\n                {{getDateDate(item.REQUESTDATE)}}\n              </div>\n            </ion-avatar>\n            <ion-label class=\"labelLeaveDescDiv\" text-wrap>\n              <span class=\"labelStatusDesc\">{{ item.REQUESTTYPEDESC }}</span>\n              <span class=\"labelRequestType\">{{ item.REASONDESC }}</span>\n              <span class=\"labelLeaveDay\">{{ item.DAYS }} days</span>\n              <!-- <span class=\"labelLeaveDay\" *ngIf=\"item.LEAVEDAY <= 1 \">{{ item.LEAVEDAY }} day duration</span> -->\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n        <ion-row class=\"cardFooter\">\n          <ion-col class=\"colSelect\">\n            <ion-select id=\"select{{item.ID}}\" class=\"selectItems roundedItems\" interface=\"popover\">\n              <ion-select-option *ngFor=\"let leave of advisoryStatusApprovalList; let idx = index\" value={{leave}}\n                selected=\"{{idx==0}}\">{{leave}}</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col class=\"colRemarks\">\n            <ion-textarea id=\"input{{item.ID}}\" class=\"textRemarks roundedItems\" rows=\"1\" placeholder=\"Remarks\"\n              maxlength=\"500\">\n            </ion-textarea>\n          </ion-col>\n          <ion-col class=\"colSubmit\">\n            <ion-button class=\"button-light btnSend\" fill=\"clear\" size=\"small\" (click)=\"submitApproval(item)\">\n              <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n<ng-template #shimmer>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  <ion-card *ngFor=\"let number of [0,1,2,3,4,5]\">\n    <ion-card-header class=\"cardHeader\">\n      <ion-item button lines=\"full\">\n        <ion-label class=\"labelNameHeader\" text-wrap>\n          <div id=\"lines1\" class=\"shine\"></div>\n        </ion-label>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item button lines=\"full\" detail=\"true\">\n        <ion-avatar class=\"classLeaveFromDiv\">\n          <div class=\"avatarLeaveFromMonth\"></div>\n          <div class=\"avatarLeaveFromDate\"></div>\n        </ion-avatar>\n        <ion-label>\n          <div id=\"lines3\" class=\"shine\"></div><br>\n          <div id=\"lines3\" class=\"shine\"></div><br>\n          <div id=\"lines4\" class=\"shine\"></div>\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n    <ion-row class=\"cardFooter\">\n      <ion-col class=\"colSelect\">\n        <div id=\"lines5\" class=\"shine\"></div>\n      </ion-col>\n      <ion-col class=\"colRemarks\">\n        <div id=\"lines6\" class=\"shine\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ng-template>\n\n\n<ng-template #error>\n  <ion-item lines=\"none\">\n    <div class=\"errorbox\">\n      <ion-avatar class=\"center\">\n        <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n      <span class=\"errorMessage\">{{errorMessage}}</span>\n      <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">REFRESH</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n    </div>\n  </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/wfhapproval/wfhapproval.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/wfhapproval/wfhapproval.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: bottom;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n  margin-top: 20px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 24px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\nion-card {\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-card-header {\n  padding: 0px;\n}\n\nion-card-content {\n  padding: 0px;\n}\n\nion-icon {\n  font-size: 24px !important;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\n.btnMenu {\n  padding: 0px 0 0 5px;\n}\n\n.btnFilter {\n  margin-right: -5px;\n}\n\n.labelNameHeader {\n  padding-top: 0px;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.labelName {\n  font-size: 14px;\n  color: black;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.labelDateFiled {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n}\n\n.classLeaveFromDiv {\n  margin-top: -30px;\n}\n\n.labelLeaveDescDiv {\n  margin: 15px 0 15px 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.labelStatusDesc {\n  font-size: 14px;\n  padding-left: 30px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.labelRequestType {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-top: -3px;\n  margin-bottom: 10px;\n  display: block;\n  color: #808080;\n}\n\n.labelLeaveDay {\n  font-size: 11px;\n  margin-left: 30px;\n  color: #808080;\n}\n\n.avatarLeaveFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.avatarLeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.colSelect {\n  max-width: 120px;\n}\n\n.selectItems {\n  color: black;\n  margin-left: 5px;\n  font-size: 14px;\n  height: 39px;\n}\n\n.cardFooter {\n  margin-right: 10px;\n}\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.colSubmit {\n  max-width: 25px;\n}\n\n.btnSend {\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvd2ZoYXBwcm92YWwvd2ZoYXBwcm92YWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy93ZmhhcHByb3ZhbC93ZmhhcHByb3ZhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0VBQ0Esa0NBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSw0RUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBRElBO0VBQ0ksMEJBQUE7QUNESjs7QURJQTtFQUNJLHdDQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO1VBQUEsb0NBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURJQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dmaGFwcHJvdmFsL3dmaGFwcHJvdmFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmcnKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIC8vIGhlaWdodDogMTAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIC8vbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG5NZW51IHtcbiAgICBwYWRkaW5nOiAwcHggMCAwIDVweDtcbn1cblxuLmJ0bkZpbHRlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xufVxuXG4ubGFiZWxOYW1lSGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmxhYmVsTmFtZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sYWJlbERhdGVGaWxlZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmNsYXNzTGVhdmVGcm9tRGl2IHtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLmxhYmVsTGVhdmVEZXNjRGl2IHtcbiAgICBtYXJnaW46IDE1cHggMCAxNXB4IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGFiZWxTdGF0dXNEZXNjIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmxhYmVsUmVxdWVzdFR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjODA4MDgwO1xufVxuXG4ubGFiZWxMZWF2ZURheSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGNvbG9yOiAjODA4MDgwO1xufVxuXG4uYXZhdGFyTGVhdmVGcm9tTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyMHB4XG59XG5cbi5hdmF0YXJMZWF2ZUZyb21EYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmNvbFNlbGVjdCB7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLnNlbGVjdEl0ZW1zIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAzOXB4O1xufVxuXG4uY2FyZEZvb3RlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmNvbFN1Ym1pdCB7XG4gICAgbWF4LXdpZHRoOiAyNXB4O1xufVxuXG4uYnRuU2VuZCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2Jhbm5lcl9kYXJrX2dyZWVuLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuLmJ0bk1lbnUge1xuICBwYWRkaW5nOiAwcHggMCAwIDVweDtcbn1cblxuLmJ0bkZpbHRlciB7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbn1cblxuLmxhYmVsTmFtZUhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbE5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sYWJlbERhdGVGaWxlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmNsYXNzTGVhdmVGcm9tRGl2IHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5sYWJlbExlYXZlRGVzY0RpdiB7XG4gIG1hcmdpbjogMTVweCAwIDE1cHggMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbFN0YXR1c0Rlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbFJlcXVlc3RUeXBlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmxhYmVsTGVhdmVEYXkge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmF2YXRhckxlYXZlRnJvbU1vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5hdmF0YXJMZWF2ZUZyb21EYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmNvbFNlbGVjdCB7XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG5cbi5zZWxlY3RJdGVtcyB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDM5cHg7XG59XG5cbi5jYXJkRm9vdGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmNvbFN1Ym1pdCB7XG4gIG1heC13aWR0aDogMjVweDtcbn1cblxuLmJ0blNlbmQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/wfhapproval/wfhapproval.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/wfhapproval/wfhapproval.page.ts ***!
  \*******************************************************/
/*! exports provided: WfhapprovalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfhapprovalPage", function() { return WfhapprovalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");









var WfhapprovalPage = /** @class */ (function () {
    function WfhapprovalPage(storage, menuCtrl, alertController, loginService, loadingCtrl, modalController, httpApi) {
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.alertController = alertController;
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        this.modalController = modalController;
        this.httpApi = httpApi;
        this.advisoryStatusApprovalList = ["Approved", "Cancel", "Disapproved", "On Hold"];
        this.noError = true;
        this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
        this.loadingDone = false;
        this.advisory = {
            SHOWALL: true,
            strSHOWALL: "1",
            REQUESTTYPECODE: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_WFH"]
        };
    }
    WfhapprovalPage.prototype.ngOnInit = function () {
    };
    WfhapprovalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.modalIsOpen = false;
        this.noError = true;
        this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
        this.loadingDone = false;
        this.results = [];
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.getAdvisoryForApproval();
        });
    };
    WfhapprovalPage.prototype.getAdvisoryForApproval = function () {
        var _this = this;
        this.advisory['User'] = Number(this.empId);
        this.advisory['STATUSCODE'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["LEAVE_STATUS_FOR_APPROVAL"];
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            _this.advisory['RecordID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]];
            _this.advisory['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]];
            _this.advisory['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]];
            _this.advisory['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"];
            _this.advisory['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/HRISAttendanceAdvisoryApproval/GetAllForApproval", _this.advisory, {})
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
                    console.log(jsonData);
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
                        _this.errorMessage = jsonData['Message'];
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
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
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    WfhapprovalPage.prototype.submitApproval = function (advisory) {
        console.log(advisory);
        if (advisory['REQUESTTYPECODE'] == src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ATD_TYPE_CODE_WFH"]) {
            this.submitWfhApproval(advisory);
            return;
        }
        this.submitAtdApproval(advisory);
    };
    WfhapprovalPage.prototype.submitAtdApproval = function (advisory) {
        var _this = this;
        var status = document.getElementById("select" + advisory['ID']).value;
        var remarks = document.getElementById("input" + advisory['ID']).value;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            var advisoryForApproval = {
                ID: advisory['ID'],
                ApproverRemarks: remarks,
                ApprovalStatus: _this.getStatusApproval(status),
                User: Number(_this.empId),
                ShowAll: true,
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"]
            };
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loading = overlay;
                _this.loading.present();
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/HRISAttendanceAdvisoryApproval/ApprovalProcess", advisoryForApproval, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_YES"]) {
                            _this.loading.dismiss();
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
                            case "Cancel": {
                                _this.showDialog("DONE!", "You have cancelled this request", true, "Okay");
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
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    WfhapprovalPage.prototype.submitWfhApproval = function (advisory) {
        var _this = this;
        var status = document.getElementById("select" + advisory['ID']).value;
        var remarks = document.getElementById("input" + advisory['ID']).value;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            var advisoryForApproval = {
                ID: advisory['ID'],
                // ApproverRemarks: remarks,
                // ApprovalStatus: this.getStatusApproval(status),
                // User: Number(this.empId),
                ShowAll: true,
                // RecordID: val[Constants.KEY_RECORD_ID],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                USER: Number(_this.empId),
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                APPROVERREMARKS: remarks,
                APPROVALSTATUS: _this.getStatusApproval(status),
            };
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loading = overlay;
                _this.loading.present();
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/WorkFromHome/ApprovalProcess", advisoryForApproval, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_YES"]) {
                            _this.loading.dismiss();
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
                            case "Cancel": {
                                _this.showDialog("DONE!", "You have cancelled this request", true, "Okay");
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
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    WfhapprovalPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
    WfhapprovalPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    WfhapprovalPage.prototype.getStatusApproval = function (status) {
        switch (status) {
            case "Approved": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["LEAVE_STATUS_APPROVED"];
            }
            case "Disapproved": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["LEAVE_STATUS_DISAPPROVED"];
            }
            case "Cancel": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["LEAVE_STATUS_CANCELLED"];
            }
            case "On Hold": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["LEAVE_STATUS_ON_HOLD"];
            }
            default: {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["LEAVE_STATUS_APPROVED"];
            }
        }
    };
    WfhapprovalPage.prototype.refresh = function (event) {
        this.event = event;
        this.ionViewWillEnter();
    };
    WfhapprovalPage.prototype.getDateMonth = function (datename, procedure) {
        var reAm = / - MORNING/gi;
        // var rePm = / - AFTERNOON/gi; 
        var newstr = datename.replace(reAm, "");
        var date = new Date(newstr);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    WfhapprovalPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename.toString().substring(0, 10));
        return date.getDate().toString();
    };
    WfhapprovalPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename.toString().substring(0, 10));
        return date.getFullYear().toString();
    };
    WfhapprovalPage.prototype.getLongDate = function (datename) {
        var month = this.getDateMonth(datename, 2);
        var date = this.getDateDate(datename);
        var year = this.getDateYear(datename);
        var fulldate = month + " " + date + ", " + year;
        return fulldate;
    };
    WfhapprovalPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    WfhapprovalPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        console.log(this.advisory);
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__["FilterMenuComponent"],
                                cssClass: 'modalFilterMenu',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "WfhApproval",
                                    data: this.advisory
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.advisory['EMPL_NAME'] = detail.data['empName'];
                                    _this.advisory['EMPNO'] = detail.data['empNumber'];
                                    _this.advisory['DATEFROM'] = detail.data['advisoryFrom'];
                                    _this.advisory['DATETO'] = detail.data['advisoryTo'];
                                    _this.advisory['SHOWALL'] = detail.data['showDirect'];
                                    _this.advisory['strSHOWALL'] = detail.data['showDirect'] == true ? "1" : "0";
                                    _this.getAdvisoryForApproval();
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
    WfhapprovalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wfhapproval',
            template: __webpack_require__(/*! ./wfhapproval.page.html */ "./src/app/pages/wfhapproval/wfhapproval.page.html"),
            styles: [__webpack_require__(/*! ./wfhapproval.page.scss */ "./src/app/pages/wfhapproval/wfhapproval.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]])
    ], WfhapprovalPage);
    return WfhapprovalPage;
}());



/***/ })

}]);
//# sourceMappingURL=wfhapproval-wfhapproval-module.js.map