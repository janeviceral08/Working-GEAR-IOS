(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leavelist-leavelist-module"],{

/***/ "./src/app/pages/leavelist/leavelist.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/leavelist/leavelist.module.ts ***!
  \*****************************************************/
/*! exports provided: LeavelistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavelistPageModule", function() { return LeavelistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leavelist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leavelist.page */ "./src/app/pages/leavelist/leavelist.page.ts");







var routes = [
    {
        path: '',
        component: _leavelist_page__WEBPACK_IMPORTED_MODULE_6__["LeavelistPage"]
    }
];
var LeavelistPageModule = /** @class */ (function () {
    function LeavelistPageModule() {
    }
    LeavelistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_leavelist_page__WEBPACK_IMPORTED_MODULE_6__["LeavelistPage"]]
        })
    ], LeavelistPageModule);
    return LeavelistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/leavelist/leavelist.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/leavelist/leavelist.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header #header>\n    <ion-buttons slot=\"start\">\n        <ion-back-button class=\"button-light\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n</ion-header>\n<ion-fab horizontal=\"end\">\n    <ion-fab-button (click)=\"openLeaveAdd()\">\n        <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n<ion-card class=divCardHeader>\n    <ion-item lines=\"full\">\n        <ion-thumbnail class=\"imgType\" slot=\"start\">\n            <img src=\"{{ idSrc }}\" alt=\"\">\n        </ion-thumbnail>\n        <ion-label text-wrap>\n            <span class=\"leaveDesc\">{{ idDesc }}</span>\n            <ion-grid class=\"leaveCreditsInfo\">\n                <ion-row>\n                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                        Balance :\n                    </ion-col>\n                    <ion-col size=\"2\">\n                        {{balance}}\n                    </ion-col>\n                    <ion-col class=\"leaveCreditsInfoNameSecondRow\">\n                        For Approval :\n                    </ion-col>\n                    <ion-col size=\"2\">\n                        {{forApproval}}\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                        Credit :\n                    </ion-col>\n                    <ion-col size=\"2\">\n                        {{credits}}\n                    </ion-col>\n                    <ion-col class=\"leaveCreditsInfoNameSecondRow\">\n                        Approved :\n                    </ion-col>\n                    <ion-col size=\"2\">\n                        {{approved}}\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                        Posted :\n                    </ion-col>\n                    <ion-col size=\"2\">\n                        {{posted}}\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-label>\n    </ion-item>\n</ion-card>\n<ion-content padding class=\"classContent\" hide-header header=\"header\">\n    <ion-card class=divCardSegment mode=\"md\">\n        <div *ngIf=\"noError; else error || leaveTypeList.length <= 0; else error\">\n            <ion-segment class=\"sgmtLeaveType\" mode=\"md\" scrollable [(ngModel)]=\"leaveType\">\n                <div *ngFor=\"let leave of leaveTypeList\">\n                    <div *ngIf=\"leave == 'FOR APPROVAL'; else otherLeave\">\n                        <ion-segment-button mode=\"md\" value={{leave}} checked>\n                            {{leave}}\n                        </ion-segment-button>\n                    </div>\n                    <ng-template #otherLeave>\n                        <ion-segment-button mode=\"md\" value={{leave}}>\n                            {{leave}}\n                        </ion-segment-button>\n                    </ng-template>\n                </div>\n            </ion-segment>\n            <div [ngSwitch]=\"leaveType\">\n                <div *ngIf=\"loadingDone; else shimmer\">\n                    <div *ngFor=\"let leaveList of leaveTypeList\">\n                        <ion-list mode=\"md\" *ngSwitchCase=\"leaveList\">\n                            <div *ngFor=\"let item of (results)\">\n                                <div *ngIf=\"code == item.LEAVETYPE && leaveList == item.LEAVESTATUSDESC\">\n                                    <ion-item button lines=\"full\" detail=\"false\" (click)=\"setLeaveDetails(item,'userleave')\">\n                                        <ion-avatar class=\"divLeaveFrom\">\n                                            <div class=\"LeaveFromMonth\">\n                                                {{getDateMonth(item.LEAVEFROM,1)}}\n                                            </div>\n                                            <div class=\"LeaveFromDate\">\n                                                {{getDateDate(item.LEAVEFROM)}}\n                                            </div>\n                                        </ion-avatar>\n                                        <ion-label text-wrap>\n                                            <div class=\"divLeaveDesc\">\n                                                <div class=\"divStat\">\n                                                    <div class=\"StatusDesc\">{{ item.LEAVEREASONDESC }}</div>\n                                                    <div class=\"DateFile\">{{ getLongDate(item.DATEFILE) }}</div>\n                                                </div>\n                                                <div [ngClass]=\"{'RequestType': item.REQUESTTYPEDESC == 'WITH PAY', 'RequestTypeRed' : item.REQUESTTYPEDESC != 'WITH PAY'}\" class=\"\">{{ item.REQUESTTYPEDESC }}</div>\n                                                <ion-item button class=\"buttonMoreOptions\" lines=\"none\" detail=\"false\" (click)=\"$event.stopPropagation();MoreOptions($event, item);\" *ngIf=\"leaveList == 'FOR APPROVAL' || leaveList == 'APPROVED' || leaveList == 'PLANNED'\">\n                                                    &#8942;</ion-item>\n                                                <ion-item button class=\"buttonMoreOptionsDetails\" lines=\"none\" detail=\"true\" *ngIf=\"leaveList != 'FOR APPROVAL' && leaveList != 'APPROVED' && leaveList != 'PLANNED'\">\n                                                </ion-item>\n                                                <br>\n                                                <span class=\"LeaveDay\" *ngIf=\"item.LEAVEDAY > 1 \">{{ item.LEAVEDAY }} days duration</span>\n                                                <span class=\"LeaveDay\" *ngIf=\"item.LEAVEDAY <= 1 \">{{ item.LEAVEDAY }} day duration</span>\n                                            </div>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                            </div>\n                        </ion-list>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ion-card>\n</ion-content>\n<ng-template #shimmer>\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    <div id=\"lines7\" class=\"shine\"></div>\n    <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2]\">\n        <ion-avatar class=\"divLeaveFrom\">\n            <div class=\"LeaveFromMonth\"></div>\n            <div class=\"LeaveFromDate\"></div>\n        </ion-avatar>\n        <ion-label>\n            <div id=\"lines4\" class=\"shine\"></div><br>\n            <div id=\"lines3\" class=\"shine\"></div><br>\n            <div id=\"lines3\" class=\"shine\"></div>\n        </ion-label>\n    </ion-item>\n</ng-template>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/leavelist/leavelist.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/leavelist/leavelist.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_large_dark_green.png') !important;\n  background-size: cover;\n  background-position: center;\n  height: 100px;\n  z-index: -1;\n}\n\nion-back-button {\n  color: white;\n  padding-top: 30px;\n  margin-left: -10px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n  margin-top: 70px;\n}\n\nion-item {\n  --inner-padding-end: 0px !important;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\nion-thumbnail {\n  height: 90px;\n  width: 90px;\n  margin: 10px;\n  margin-left: 15x;\n}\n\nion-col {\n  padding: 0px;\n}\n\n.sc-ion-buttons-md-h {\n  float: left;\n}\n\n.divCardHeader {\n  margin-top: 0px;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-bottom: 1px;\n}\n\n.imgType {\n  width: 60px;\n  height: 60px;\n  margin-left: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.leaveDesc {\n  color: #2a2a2a;\n  font-size: 18px;\n  margin-left: 10px;\n  margin-right: 70px;\n  display: block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  font-family: \"RobotoMedium\";\n}\n\n.leaveCreditsInfo {\n  font-size: 11px;\n  margin-left: 10px;\n  margin-top: -1px;\n  display: block;\n  color: #484848;\n}\n\n.leaveCreditsInfoNameFirstRow {\n  max-width: 55px;\n}\n\n.leaveCreditsInfoNameSecondRow {\n  max-width: 75px;\n}\n\n.sgmtLeaveType {\n  min-width: 70px;\n  background: white;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #cecccc;\n  font-family: \"RobotoRegular\";\n}\n\n.classContent {\n  --background: #F5F5F5;\n  --padding-top: 10px !important;\n}\n\n.divCardSegment {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divLeaveFrom {\n  margin-top: -30px;\n}\n\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.divLeaveDesc {\n  margin-left: 10px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.divStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -8px;\n}\n\n.StatusDesc {\n  color: #2a2a2a;\n  font-size: 14px;\n  padding-left: 30px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.DateFile {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n  padding-right: 5px;\n}\n\n.RequestType {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  display: inline-block;\n  color: #808080;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.RequestTypeRed {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  display: inline-block;\n  color: #F44336;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.buttonMoreOptions {\n  font-size: 30px;\n  float: right;\n  color: #808080;\n  padding: 5px 5px 0 0;\n}\n\n.buttonMoreOptionsDetails {\n  font-size: 30px;\n  float: right;\n  padding-right: 5px;\n}\n\n.LeaveDay {\n  font-size: 11px;\n  margin-left: 30px;\n  color: #808080;\n}\n\n.list {\n  margin-bottom: -8px !important;\n}\n\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.header-items {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvbGVhdmVsaXN0L2xlYXZlbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXZlbGlzdC9sZWF2ZWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0RBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUNBQUE7QUNDSjs7QURFQTtFQUNJLHdDQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEVBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksOEJBQUE7QUNESjs7QURJQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhdmVsaXN0L2xlYXZlbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2xhcmdlX2RhcmtfZ3JlZW4ucG5nJykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHhcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXg7XG59XG5cbmlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4vL0NhcmQgSGVhZGVyXG4uZGl2Q2FyZEhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLmltZ1R5cGUge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sZWF2ZURlc2Mge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mbyB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZUZpcnN0Um93IHtcbiAgICBtYXgtd2lkdGg6IDU1cHg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZVNlY29uZFJvdyB7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xufVxuXG4uc2dtdExlYXZlVHlwZSB7XG4gICAgbWluLXdpZHRoOiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjY2VjY2NjO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLy9JdGVtIERldGFpbHNcbi5jbGFzc0NvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXZDYXJkU2VnbWVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uZGl2TGVhdmVGcm9tIHtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogMjBweFxufVxuXG4uTGVhdmVGcm9tRGF0ZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5kaXZMZWF2ZURlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGl2U3RhdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLkRhdGVGaWxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLlJlcXVlc3RUeXBlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBtYXgtd2lkdGg6IDg1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5SZXF1ZXN0VHlwZVJlZCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICNGNDQzMzY7XG4gICAgbWF4LXdpZHRoOiA4NSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnV0dG9uTW9yZU9wdGlvbnMge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgcGFkZGluZzogNXB4IDVweCAwIDA7XG59XG5cbi5idXR0b25Nb3JlT3B0aW9uc0RldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uTGVhdmVEYXkge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IC04cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtbWQge1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfbGFyZ2VfZGFya19ncmVlbi5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB6LWluZGV4OiAtMTtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1eDtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmRpdkNhcmRIZWFkZXIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4uaW1nVHlwZSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubGVhdmVEZXNjIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm8ge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZUZpcnN0Um93IHtcbiAgbWF4LXdpZHRoOiA1NXB4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mb05hbWVTZWNvbmRSb3cge1xuICBtYXgtd2lkdGg6IDc1cHg7XG59XG5cbi5zZ210TGVhdmVUeXBlIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NlY2NjYztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uY2xhc3NDb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAtLXBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXZDYXJkU2VnbWVudCB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmRpdkxlYXZlRnJvbSB7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4uTGVhdmVGcm9tTW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLkxlYXZlRnJvbURhdGUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uZGl2TGVhdmVEZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGl2U3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLkRhdGVGaWxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5SZXF1ZXN0VHlwZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICM4MDgwODA7XG4gIG1heC13aWR0aDogODUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLlJlcXVlc3RUeXBlUmVkIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI0Y0NDMzNjtcbiAgbWF4LXdpZHRoOiA4NSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnV0dG9uTW9yZU9wdGlvbnMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIHBhZGRpbmc6IDVweCA1cHggMCAwO1xufVxuXG4uYnV0dG9uTW9yZU9wdGlvbnNEZXRhaWxzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLkxlYXZlRGF5IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogLThweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/leavelist/leavelist.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/leavelist/leavelist.page.ts ***!
  \***************************************************/
/*! exports provided: LeavelistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavelistPage", function() { return LeavelistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");










var LeavelistPage = /** @class */ (function () {
    function LeavelistPage(httpApi, activatedRoute, leaveService, storage, router, loginService, actionSheetController, alertController, navCtrl, loadingCtrl) {
        this.httpApi = httpApi;
        this.activatedRoute = activatedRoute;
        this.leaveService = leaveService;
        this.storage = storage;
        this.router = router;
        this.loginService = loginService;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.leaveTypeList = [];
        this.leaveArrange = [];
        this.leaveType = "FIRST";
        this.loadingDone = false;
        this.noError = true;
        this.balance = 0.0;
        this.credits = 0.0;
        this.posted = 0.0;
        this.forApproval = 0.0;
        this.approved = 0.0;
        this.activityResult = false;
    }
    LeavelistPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    LeavelistPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    LeavelistPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename);
        return date.getFullYear().toString();
    };
    LeavelistPage.prototype.getLongDate = function (datename) {
        var month = this.getDateMonth(datename, 2);
        var date = this.getDateDate(datename);
        var year = this.getDateYear(datename);
        var fulldate = month + " " + date + ", " + year;
        return fulldate;
    };
    LeavelistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingDone = false;
        this.noError = true;
        this.leaveArrange = [];
        this.leaveTypeList = [];
        this.leaveType = "FIRST";
        this.id = this.activatedRoute.snapshot.paramMap.get('type');
        this.code = this.activatedRoute.snapshot.paramMap.get('code');
        // if (this.id == "BL") {
        //   this.idDesc = "Birthday Leave";
        //   this.idSrc = "assets/icon/ic_bl.png";
        // }
        // else if (this.id == "EL") {
        //   this.idDesc = "Emergency Leave";
        //   this.idSrc = "assets/icon/ic_el.png";
        // }
        // else if (this.id == "IL") {
        //   this.idDesc = "Service Incentive Leave";
        //   this.idSrc = "assets/icon/ic_il.png";
        // }
        // else if (this.id == "MCW") {
        //   this.idDesc = "Magna Carta for Women";
        //   this.idSrc = "assets/icon/ic_mcw.png";
        // }
        // else if (this.id == "ML") {
        //   this.idDesc = "Maternity Leave";
        //   this.idSrc = "assets/icon/ic_ml.png";
        // }
        // else if (this.id == "PL") {
        //   this.idDesc = "Paternity Leave";
        //   this.idSrc = "assets/icon/ic_pl.png";
        // }
        // else if (this.id == "SL") {
        //   this.idDesc = "Sick Leave";
        //   this.idSrc = "assets/icon/ic_sl.png";
        // }
        // else if (this.id == "VL") {
        //   this.idDesc = "Vacation Leave";
        //   this.idSrc = "assets/icon/ic_vl.png";
        // }
        // else if (this.id == "XS") {
        //   this.idDesc = "Excess Sil";
        //   this.idSrc = "assets/icon/ic_xs.png";
        // }
        if (this.id == "Birthday Leave") {
            this.idSrc = "assets/icon/ic_bl.png";
        }
        else if (this.id == "Emergency Leave") {
            this.idSrc = "assets/icon/ic_el.png";
        }
        else if (this.id == "Service Incentive Leave") {
            this.idSrc = "assets/icon/ic_il.png";
        }
        else if (this.id == "Magna Carta for Women") {
            this.idSrc = "assets/icon/ic_mcw.png";
        }
        else if (this.id == "Maternity Leave") {
            this.idSrc = "assets/icon/ic_ml.png";
        }
        else if (this.id == "Paternity Leave") {
            this.idSrc = "assets/icon/ic_pl.png";
        }
        else if (this.id == "Sick Leave") {
            this.idSrc = "assets/icon/ic_sl.png";
        }
        else if (this.id == "Vacation Leave") {
            this.idSrc = "assets/icon/ic_vl.png";
        }
        else if (this.id == "Excess Sil") {
            this.idSrc = "assets/icon/ic_xs.png";
        }
        else {
            this.idSrc = "assets/icon/ic_xs.png";
        }
        this.idDesc = this.id;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_EMPID"]).then(function (val) {
            _this.getLeaveList(val);
            _this.user = val;
        });
        this.activityResult = true;
    };
    LeavelistPage.prototype.showList = function () {
        var _this = this;
        this.results.forEach(function (item) {
            if (_this.code == item["LEAVETYPE"]) {
                if (_this.leaveArrange.find(function (e) { return e === item["LEAVESTATUSDESC"]; })) {
                }
                else
                    _this.leaveArrange.push(item["LEAVESTATUSDESC"]);
            }
        });
        this.leaveTypeList = [];
        if (this.leaveArrange.includes("FOR APPROVAL")) {
            this.leaveTypeList.push("FOR APPROVAL");
            this.leaveType = "FOR APPROVAL";
        }
        ;
        if (this.leaveArrange.includes("PLANNED")) {
            this.leaveTypeList.push("PLANNED");
            if (this.leaveType == "FIRST")
                this.leaveType = "PLANNED";
        }
        ;
        if (this.leaveArrange.includes("APPROVED")) {
            this.leaveTypeList.push("APPROVED");
            if (this.leaveType == "FIRST")
                this.leaveType = "APPROVED";
        }
        ;
        if (this.leaveArrange.includes("POSTED")) {
            this.leaveTypeList.push("POSTED");
            if (this.leaveType == "FIRST")
                this.leaveType = "POSTED";
        }
        ;
        this.leaveArrange.forEach(function (item) {
            for (var ctr = 0; ctr < _this.leaveArrange.length; ctr++) {
                if (!_this.leaveTypeList.includes(item)) {
                    _this.leaveTypeList.push(item);
                    if (_this.leaveType == "FIRST")
                        _this.leaveType = item;
                }
            }
        });
        if (this.leaveTypeList.length <= 0) {
            this.noError = false;
            this.errorMessage = "EMPTY";
            return;
        }
    };
    LeavelistPage.prototype.getLeaveList = function (employeeid) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SESSION"]).then(function (val) {
            var postData = {
                UserID: employeeid,
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/leaverequest/findall", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value']['tblLeaveRequest'] == null || jsonData['Value']['tblLeaveRequest'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.results = jsonData['Value']['tblLeaveRequest'];
                    _this.loadingDone = true;
                    _this.setCredits(jsonData);
                    _this.showList();
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    LeavelistPage.prototype.setCredits = function (jsonData) {
        var _this = this;
        jsonData['Value']['tblLeaveCredit'].forEach(function (item) {
            if (item['LEAVE_DESC'] == _this.id) {
                _this.balance = item['BALANCE'];
                _this.credits = item['CREDITS'];
                _this.forApproval = item['APPROVAL'];
                _this.posted = item['AVAILED'];
                _this.approved = item['APPROVED'];
            }
        });
    };
    LeavelistPage.prototype.openLeaveAdd = function () {
        this.router.navigate(['/leaveadd', this.code,
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ]);
    };
    LeavelistPage.prototype.MoreOptions = function (event, item) {
        event.stopPropagation();
        switch (item['LEAVESTATUSDESC']) {
            case "FOR APPROVAL": {
                this.showForApprovalActions(item);
                break;
            }
            case "APPROVED": {
                this.showApprovedActions(item);
                break;
            }
            case "PLANNED": {
                this.showPlannedActions(item);
                break;
            }
        }
    };
    LeavelistPage.prototype.showForApprovalActions = function (leave) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Action',
                            buttons: [{
                                    text: 'Edit Leave',
                                    icon: 'create',
                                    handler: function () {
                                        _this.router.navigate(['/leaveadd',
                                            leave['LEAVETYPE'],
                                            leave['LEAVEDAY'],
                                            leave['LEAVEFROM'],
                                            leave['LeaveFromTime'],
                                            leave['LEAVEREASONDESC'],
                                            (_this.isEmpty(leave['LEAVEREMARK']) ? '' : leave['LEAVEREMARK']),
                                            leave['ID'],
                                            ''
                                        ]);
                                    }
                                }, {
                                    text: 'Delete Leave',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.showDeleteDialog(leave);
                                    }
                                }, {
                                    text: 'Close',
                                    icon: 'close',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LeavelistPage.prototype.showApprovedActions = function (leave) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Action',
                            buttons: [{
                                    text: 'Cancel Leave',
                                    icon: 'close-circle-outline',
                                    handler: function () {
                                        _this.showCancelDialog(leave);
                                    }
                                }, {
                                    text: 'Close',
                                    icon: 'close',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LeavelistPage.prototype.showPlannedActions = function (leave) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Action',
                            buttons: [{
                                    text: 'Submit Leave',
                                    icon: 'send',
                                    handler: function () {
                                        _this.showSubmitDialog(leave);
                                    }
                                }, {
                                    text: 'Edit Leave',
                                    icon: 'create',
                                    handler: function () {
                                        _this.router.navigate(['/leaveadd',
                                            leave['LEAVETYPE'],
                                            leave['LEAVEDAY'],
                                            leave['LEAVEFROM'],
                                            leave['LeaveFromTime'],
                                            leave['LEAVEREASONDESC'],
                                            (_this.isEmpty(leave['LEAVEREMARK']) ? '' : leave['LEAVEREMARK']),
                                            leave['ID'],
                                            ''
                                        ]);
                                    }
                                }, {
                                    text: 'Delete Leave',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.showDeleteDialog(leave);
                                    }
                                }, {
                                    text: 'Close',
                                    icon: 'close',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LeavelistPage.prototype.isEmpty = function (text) {
        return (text == "" || text == undefined || text == null);
    };
    LeavelistPage.prototype.showCancelDialog = function (leave) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancel Leave',
                            inputs: [
                                {
                                    name: 'remarks',
                                    type: 'text',
                                    placeholder: 'Cancel Remarks'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        _this.loadingCtrl.create({
                                            message: "Loading..."
                                        }).then(function (overlay) {
                                            _this.loading = overlay;
                                            _this.loading.present();
                                            _this.cancelLeave(leave, data['remarks']);
                                        });
                                    }
                                }
                            ]
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
    LeavelistPage.prototype.deleteLeave = function (leave) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SESSION"]).then(function (val) {
            var postData = {
                ID: String(leave['ID']),
                USER: _this.user,
                LeaveRequestStatus: leave['LEAVESTATUS'],
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/LeaveRequest/DeleteLeaveRequest", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("ERROR!", jsonData['Message'], "Okay");
                        return;
                    }
                    _this.showDialog("DONE!", "You have deleted this request", "Okay");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    LeavelistPage.prototype.submitLeave = function (leave) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SESSION"]).then(function (val) {
            var postData = {
                ID: String(leave['ID']),
                USER: _this.user,
                EmployeeId: _this.user,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/LeaveRequest/SubmitPlannedLeave", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("ERROR!", jsonData['Message'], "Okay");
                        return;
                    }
                    _this.showDialog("DONE!", "You have processed this request", "Great!");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    LeavelistPage.prototype.cancelLeave = function (leave, cancelRemarks) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SESSION"]).then(function (val) {
            var postData = {
                ID: String(leave['ID']),
                USER: _this.user,
                LeaveRequestStatus: leave['LEAVESTATUS'],
                CancelRemarks: cancelRemarks,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/LeaveRequest/CancelLeaveRequest", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("ERROR!", jsonData['Message'], "Okay");
                        return;
                    }
                    _this.showDialog("DONE!", "You have cancelled this request", "Okay");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    LeavelistPage.prototype.setLeaveDetails = function (item, type) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_LEAVEDETAILS"], item);
        this.router.navigate(['/leavedetails', type, 'leavelist']);
    };
    LeavelistPage.prototype.showDialog = function (title, message, buttonText) {
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
                                        // location.reload();
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
    LeavelistPage.prototype.showDeleteDialog = function (leave) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete Leave',
                            message: 'Are you sure you want to delete leave?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }, {
                                    text: 'Delete',
                                    handler: function () {
                                        _this.loadingCtrl.create({
                                            message: "Loading..."
                                        }).then(function (overlay) {
                                            _this.loading = overlay;
                                            _this.loading.present();
                                            _this.deleteLeave(leave);
                                        });
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
    LeavelistPage.prototype.showSubmitDialog = function (leave) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Submit Leave',
                            message: 'Are you sure you want to submit planned leave?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }, {
                                    text: 'Submit',
                                    handler: function () {
                                        _this.loadingCtrl.create({
                                            message: "Loading..."
                                        }).then(function (overlay) {
                                            _this.loading = overlay;
                                            _this.loading.present();
                                            _this.submitLeave(leave);
                                        });
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
    LeavelistPage.prototype.refresh = function () {
        this.ngOnInit();
    };
    LeavelistPage.prototype.ionViewWillEnter = function () {
        if (this.activityResult) {
            this.ngOnInit();
        }
    };
    LeavelistPage.prototype.onBackPressed = function () {
        this.navCtrl.back();
    };
    LeavelistPage.prototype.goBack = function () { this.navCtrl.back(); };
    LeavelistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leavelist',
            template: __webpack_require__(/*! ./leavelist.page.html */ "./src/app/pages/leavelist/leavelist.page.html"),
            styles: [__webpack_require__(/*! ./leavelist.page.scss */ "./src/app/pages/leavelist/leavelist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]])
    ], LeavelistPage);
    return LeavelistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-leavelist-leavelist-module.js.map