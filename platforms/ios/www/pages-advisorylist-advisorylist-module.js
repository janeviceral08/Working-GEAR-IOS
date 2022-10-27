(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advisorylist-advisorylist-module"],{

/***/ "./src/app/pages/advisorylist/advisorylist.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/advisorylist/advisorylist.module.ts ***!
  \***********************************************************/
/*! exports provided: AdvisorylistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorylistPageModule", function() { return AdvisorylistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _advisorylist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advisorylist.page */ "./src/app/pages/advisorylist/advisorylist.page.ts");







var routes = [
    {
        path: '',
        component: _advisorylist_page__WEBPACK_IMPORTED_MODULE_6__["AdvisorylistPage"]
    }
];
var AdvisorylistPageModule = /** @class */ (function () {
    function AdvisorylistPageModule() {
    }
    AdvisorylistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_advisorylist_page__WEBPACK_IMPORTED_MODULE_6__["AdvisorylistPage"]]
        })
    ], AdvisorylistPageModule);
    return AdvisorylistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/advisorylist/advisorylist.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/advisorylist/advisorylist.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header #header>\n    <ion-buttons slot=\"start\">\n        <ion-back-button class=\"button-light\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n</ion-header>\n<ion-fab horizontal=\"end\">\n    <ion-fab-button (click)=\"openAdvisoryAdd()\">\n        <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n<ion-card class=divCardHeader>\n    <ion-item lines=\"full\">\n        <ion-thumbnail class=\"imgType\" slot=\"start\">\n            <img src=\"{{ idSrc }}\" alt=\"\">\n        </ion-thumbnail>\n        <ion-label text-wrap>\n            <span class=\"leaveDesc\">{{ idDesc }}</span>\n        </ion-label>\n    </ion-item>\n</ion-card>\n<ion-content padding class=\"classContent\" hide-header header=\"header\">\n    <ion-card class=divCardSegment mode=\"md\">\n        <div *ngIf=\"noError; else error || advisoryTypeList.length <= 0; else error\">\n            <ion-segment class=\"sgmtAdvisoryType\" mode=\"md\" scrollable [(ngModel)]=\"advisoryType\">\n                <div *ngFor=\"let leave of advisoryTypeList\">\n                    <div *ngIf=\"leave == 'FOR APPROVAL'; else otherLeave\">\n                        <ion-segment-button mode=\"md\" value={{leave}} checked>\n                            {{leave}}\n                        </ion-segment-button>\n                    </div>\n                    <ng-template #otherLeave>\n                        <ion-segment-button mode=\"md\" value={{leave}}>\n                            {{leave}}\n                        </ion-segment-button>\n                    </ng-template>\n                </div>\n            </ion-segment>\n            <div [ngSwitch]=\"advisoryType\">\n                <div *ngIf=\"loadingDone; else shimmer\">\n                    <div *ngFor=\"let advisoryList of advisoryTypeList\">\n                        <ion-list mode=\"md\" *ngSwitchCase=\"advisoryList\">\n                            <div *ngFor=\"let item of (results)\" [routerLink]=\" ['/', 'advisorydetails', item.ID, 'useradvisory', item.STATUS,'','advisorylist']\">\n                                <div *ngIf=\"id == item.REQUESTTYPECODE && advisoryList == item.STATUS\">\n                                    <ion-item button lines=\"full\" detail=\"false\">\n                                        <ion-avatar class=\"divLeaveFrom\">\n                                            <div class=\"LeaveFromMonth\">\n                                                {{getDateMonth(item.REQUESTDATE,1)}}\n                                            </div>\n                                            <div class=\"LeaveFromDate\">\n                                                {{getDateDate(item.REQUESTDATE)}}\n                                            </div>\n                                        </ion-avatar>\n                                        <ion-label text-wrap>\n                                            <div class=\"divLeaveDesc\">\n                                                <ion-item button class=\"buttonMoreOptions\" lines=\"none\" detail=\"false\" (click)=\"$event.stopPropagation();MoreOptions($event, item);\" *ngIf=\"advisoryList == 'FOR APPROVAL' || advisoryList == 'APPROVED' || advisoryList == 'PLANNED'\">\n                                                    &#8942;</ion-item>\n                                                <ion-item button class=\"buttonMoreOptionsDetails\" lines=\"none\" detail=\"true\" *ngIf=\"advisoryList != 'FOR APPROVAL' && advisoryList != 'APPROVED' && advisoryList != 'PLANNED'\">\n                                                </ion-item>\n                                                <span class=\"StatusDesc\">{{ item.REASONDESC }}</span>\n                                                <br>\n                                                <span class=\"RequestType\">{{ item.REMARKS }}</span>\n                                                <br>\n                                                <span class=\"LeaveDay\">{{ item.REQUESTTIME }} </span>\n                                            </div>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                            </div>\n                        </ion-list>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ion-card>\n</ion-content>\n<ng-template #shimmer>\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    <div id=\"lines7\" class=\"shine\"></div>\n    <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2]\">\n        <ion-avatar class=\"divLeaveFrom\">\n            <div class=\"LeaveFromMonth\"></div>\n            <div class=\"LeaveFromDate\"></div>\n        </ion-avatar>\n        <ion-label>\n            <div id=\"lines3\" class=\"shine\"></div><br>\n            <div id=\"lines3\" class=\"shine\"></div><br>\n            <div id=\"lines4\" class=\"shine\"></div>\n        </ion-label>\n    </ion-item>\n</ng-template>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/advisorylist/advisorylist.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/advisorylist/advisorylist.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_large_dark_green.png') !important;\n  background-size: cover;\n  background-position: center;\n  height: 100px;\n  z-index: -1;\n}\n\nion-back-button {\n  color: white;\n  padding-top: 30px;\n  margin-left: -10px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n  margin-top: 70px;\n}\n\nion-item {\n  --inner-padding-end: 0px !important;\n}\n\nion-thumbnail {\n  height: 90px;\n  width: 90px;\n  margin: 10px;\n  margin-left: 15x;\n}\n\nion-col {\n  padding: 0px;\n}\n\n.sc-ion-buttons-md-h {\n  float: left;\n}\n\n.divCardHeader {\n  margin-top: 0px;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-bottom: 1px;\n}\n\n.imgType {\n  width: 60px;\n  height: 60px;\n  margin-left: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.leaveDesc {\n  color: #2a2a2a;\n  font-size: 18px;\n  margin-left: 10px;\n  margin-right: 70px;\n  display: block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  font-family: \"RobotoMedium\";\n}\n\n.leaveCreditsInfo {\n  font-size: 11px;\n  margin-left: 10px;\n  margin-top: -1px;\n  display: block;\n  color: #484848;\n}\n\n.leaveCreditsInfoNameFirstRow {\n  max-width: 55px;\n}\n\n.leaveCreditsInfoNameSecondRow {\n  max-width: 75px;\n}\n\n.sgmtAdvisoryType {\n  min-width: 70px;\n  background: white;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #cecccc;\n  font-family: \"RobotoRegular\";\n}\n\n.classContent {\n  --background: #F5F5F5;\n  --padding-top: 10px !important;\n}\n\n.divCardSegment {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divLeaveFrom {\n  margin-top: -30px;\n}\n\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.divLeaveDesc {\n  margin-left: 10px;\n}\n\n.divStat {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -8px;\n}\n\n.StatusDesc {\n  color: #2a2a2a;\n  font-size: 14px;\n  padding-left: 30px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.DateFile {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n  padding-right: 5px;\n}\n\n.RequestType {\n  font-size: 11px;\n  padding-left: 30px;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #808080;\n  max-width: 85%;\n}\n\n.buttonMoreOptions {\n  font-size: 30px;\n  float: right;\n  color: #808080;\n  padding: 5px 5px 0 0;\n  margin-top: 10px;\n}\n\n.buttonMoreOptionsDetails {\n  font-size: 30px;\n  float: right;\n  padding-right: 5px;\n  margin-top: 15px;\n}\n\n.LeaveDay {\n  font-size: 11px;\n  margin-left: 30px;\n  color: #808080;\n}\n\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.header-items {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvYWR2aXNvcnlsaXN0L2Fkdmlzb3J5bGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fkdmlzb3J5bGlzdC9hZHZpc29yeWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0RBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FER0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQ0FKOztBRElBO0VBQ0kscUJBQUE7RUFDQSw4QkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0RUFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWR2aXNvcnlsaXN0L2Fkdmlzb3J5bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2xhcmdlX2RhcmtfZ3JlZW4ucG5nJykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHhcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXg7XG59XG5cbmlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4vL0NhcmQgSGVhZGVyXG4uZGl2Q2FyZEhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLmltZ1R5cGUge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sZWF2ZURlc2Mge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mbyB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZUZpcnN0Um93IHtcbiAgICBtYXgtd2lkdGg6IDU1cHg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZVNlY29uZFJvdyB7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xufVxuXG4uc2dtdEFkdmlzb3J5VHlwZSB7XG4gICAgbWluLXdpZHRoOiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjY2VjY2NjO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLy9JdGVtIERldGFpbHNcbi5jbGFzc0NvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXZDYXJkU2VnbWVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uZGl2TGVhdmVGcm9tIHtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogMjBweFxufVxuXG4uTGVhdmVGcm9tRGF0ZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5kaXZMZWF2ZURlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGl2U3RhdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbn1cblxuLlN0YXR1c0Rlc2Mge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uRGF0ZUZpbGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uUmVxdWVzdFR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBtYXgtd2lkdGg6IDg1JTtcbn1cblxuLmJ1dHRvbk1vcmVPcHRpb25zIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIHBhZGRpbmc6IDVweCA1cHggMCAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idXR0b25Nb3JlT3B0aW9uc0RldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5MZWF2ZURheSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGNvbG9yOiAjODA4MDgwO1xufVxuXG4ubGlzdC1tZCB7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2Jhbm5lcl9sYXJnZV9kYXJrX2dyZWVuLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXg7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5kaXZDYXJkSGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLmltZ1R5cGUge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxlYXZlRGVzYyB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mb05hbWVGaXJzdFJvdyB7XG4gIG1heC13aWR0aDogNTVweDtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm9OYW1lU2Vjb25kUm93IHtcbiAgbWF4LXdpZHRoOiA3NXB4O1xufVxuXG4uc2dtdEFkdmlzb3J5VHlwZSB7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNjZWNjY2M7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmNsYXNzQ29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgLS1wYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2Q2FyZFNlZ21lbnQge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZMZWF2ZUZyb20ge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGl2U3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbn1cblxuLlN0YXR1c0Rlc2Mge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uRGF0ZUZpbGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLlJlcXVlc3RUeXBlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBtYXgtd2lkdGg6IDg1JTtcbn1cblxuLmJ1dHRvbk1vcmVPcHRpb25zIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBwYWRkaW5nOiA1cHggNXB4IDAgMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ1dHRvbk1vcmVPcHRpb25zRGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5MZWF2ZURheSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG4ubGlzdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/advisorylist/advisorylist.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/advisorylist/advisorylist.page.ts ***!
  \*********************************************************/
/*! exports provided: AdvisorylistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorylistPage", function() { return AdvisorylistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var AdvisorylistPage = /** @class */ (function () {
    function AdvisorylistPage(httpApi, activatedRoute, actionSheetController, storage, loginService, alertController, navCtrl, loadingCtrl, router) {
        this.httpApi = httpApi;
        this.activatedRoute = activatedRoute;
        this.actionSheetController = actionSheetController;
        this.storage = storage;
        this.loginService = loginService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.loadingDone = false;
        this.noError = true;
        this.advisoryTypeList = [];
        this.advisoryArrange = [];
        this.advisoryType = "FIRST";
        this.activityResult = false;
    }
    AdvisorylistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingDone = false;
        this.noError = true;
        this.advisoryTypeList = [];
        this.advisoryArrange = [];
        this.advisoryType = "FIRST";
        this.id = this.activatedRoute.snapshot.paramMap.get('type');
        this.setImage(this.id);
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.getAdvisory();
        });
        this.activityResult = true;
    };
    AdvisorylistPage.prototype.getAdvisory = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_RECORD_ID"]],
                USER: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_USER_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["VERSION"],
                EMPNO: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_USER_ID"]]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/GetAttendanceAdvisory", request, {})
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
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.results = jsonData['Value'];
                    console.log(_this.results);
                    _this.showList();
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    AdvisorylistPage.prototype.showList = function () {
        var _this = this;
        this.results.forEach(function (item) {
            if (_this.id == item["REQUESTTYPECODE"]) {
                if (_this.advisoryArrange.find(function (e) { return e === item["STATUS"]; })) {
                }
                else
                    _this.advisoryArrange.push(item["STATUS"]);
            }
        });
        this.advisoryTypeList = [];
        if (this.advisoryArrange.includes("FOR APPROVAL")) {
            this.advisoryTypeList.push("FOR APPROVAL");
            this.advisoryType = "FOR APPROVAL";
        }
        ;
        if (this.advisoryArrange.includes("PLANNED")) {
            this.advisoryTypeList.push("PLANNED");
            if (this.advisoryType == "FIRST")
                this.advisoryType = "PLANNED";
        }
        ;
        if (this.advisoryArrange.includes("APPROVED")) {
            this.advisoryTypeList.push("APPROVED");
            if (this.advisoryType == "FIRST")
                this.advisoryType = "APPROVED";
        }
        ;
        if (this.advisoryArrange.includes("POSTED")) {
            this.advisoryTypeList.push("POSTED");
            if (this.advisoryType == "FIRST")
                this.advisoryType = "POSTED";
        }
        ;
        this.advisoryArrange.forEach(function (item) {
            for (var ctr = 0; ctr < _this.advisoryArrange.length; ctr++) {
                if (!_this.advisoryTypeList.includes(item)) {
                    _this.advisoryTypeList.push(item);
                    if (_this.advisoryType == "FIRST")
                        _this.advisoryType = item;
                }
            }
        });
        if (this.advisoryTypeList.length <= 0) {
            this.noError = false;
            this.errorMessage = "EMPTY";
            return;
        }
    };
    AdvisorylistPage.prototype.setImage = function (type) {
        switch (type) {
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ATD_TYPE_CODE_AUT"]:
                this.idDesc = "Authorized Under Time";
                this.idSrc = "assets/icon/ic_au.png";
                break;
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ATD_TYPE_CODE_AL"]:
                this.idDesc = "Authorized Late";
                this.idSrc = "assets/icon/ic_al.png";
                break;
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ATD_TYPE_CODE_OS"]:
                this.idDesc = "Offset";
                this.idSrc = "assets/icon/ic_os.png";
                break;
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ATD_TYPE_CODE_CTO"]:
                this.idDesc = "CTO";
                this.idSrc = "assets/icon/ic_cto.png";
                break;
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ATD_TYPE_CODE_OB"]:
                this.idDesc = "Official Business";
                this.idSrc = "assets/icon/ic_ob.png";
                break;
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ATD_TYPE_CODE_AS"]:
                this.idDesc = "Authorized Shift";
                this.idSrc = "assets/icon/ic_as.png";
                break;
        }
    };
    AdvisorylistPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    AdvisorylistPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    AdvisorylistPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename);
        return date.getFullYear().toString();
    };
    AdvisorylistPage.prototype.getLongDate = function (datename) {
        var month = this.getDateMonth(datename, 2);
        var date = this.getDateDate(datename);
        var year = this.getDateYear(datename);
        var fulldate = month + " " + date + ", " + year;
        return fulldate;
    };
    AdvisorylistPage.prototype.MoreOptions = function (event, item) {
        event.stopPropagation();
        switch (item['STATUS']) {
            case "FOR APPROVAL": {
                this.showForApprovalActions(item);
                break;
            }
            case "APPROVED": {
                this.showApprovedActions(item);
                break;
            }
        }
    };
    AdvisorylistPage.prototype.showForApprovalActions = function (advisory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Action',
                            buttons: [{
                                    text: 'Edit Advisory',
                                    icon: 'create',
                                    handler: function () {
                                        _this.router.navigate(['/advisoryadd',
                                            advisory['ID'] == null ? '' : advisory['ID'],
                                            advisory['REQUESTTYPECODE'] == null ? '' : advisory['REQUESTTYPECODE'],
                                            advisory['REQUESTDATE'] == null ? '' : advisory['REQUESTDATE'],
                                            advisory['REQTIME'] == null ? '' : advisory['REQTIME'],
                                            advisory['HRS'] == null ? '' : advisory['HRS'],
                                            advisory['DAYS'] == null ? '' : advisory['DAYS'],
                                            advisory['REASONCODE'] == null ? '' : advisory['REASONCODE'],
                                            advisory['REMARKS'] == null ? '' : advisory['REMARKS'],
                                            advisory['STARTTIME'] == null ? '' : advisory['STARTTIME'],
                                            advisory['DATEOFDUTY'] == null ? '' : advisory['DATEOFDUTY'],
                                            '',
                                            ''
                                        ]);
                                    }
                                }, {
                                    text: 'Delete Advisory',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.showDeleteDialog(advisory);
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
    AdvisorylistPage.prototype.showApprovedActions = function (advisory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Action',
                            buttons: [{
                                    text: 'Cancel Advisory',
                                    icon: 'close-circle-outline',
                                    handler: function () {
                                        _this.showCancelDialog(advisory);
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
    AdvisorylistPage.prototype.showDeleteDialog = function (advisory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete Attendance Advisory',
                            message: 'Are you sure you want to delete?',
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
                                            _this.deleteAdvisory(advisory);
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
    AdvisorylistPage.prototype.showCancelDialog = function (advisory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancel Attendance Advisory',
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
                                        _this.cancelAdvisory(advisory, data['remarks']);
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
    AdvisorylistPage.prototype.cancelAdvisory = function (advisory, remarks) {
        var _this = this;
        if (remarks == '' || remarks == null || remarks == undefined) {
            alert("Remarks is empty!");
            return;
        }
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SESSION"]).then(function (val) {
                var postData = {
                    ID: String(advisory['ID']),
                    CANCELREMARKS: remarks,
                    USER: _this.empId,
                    RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_TOKEN"]],
                    AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["VERSION"]
                };
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/CancelAttendanceAdvisory", postData, {})
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
        });
    };
    AdvisorylistPage.prototype.deleteAdvisory = function (advisory) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["VERSION"],
                ID: String(advisory['ID']),
                EMPNO: Number(_this.empId),
                USER: _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/DeleteAttendanceAdvisory", request, {})
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
    AdvisorylistPage.prototype.showDialog = function (title, message, buttonText) {
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
    AdvisorylistPage.prototype.openAdvisoryAdd = function () {
        this.router.navigate(['/advisoryadd',
            '',
            this.id,
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
    AdvisorylistPage.prototype.ionViewWillEnter = function () {
        if (this.activityResult) {
            this.ngOnInit();
        }
    };
    AdvisorylistPage.prototype.goBack = function () { this.navCtrl.back(); };
    AdvisorylistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advisorylist',
            template: __webpack_require__(/*! ./advisorylist.page.html */ "./src/app/pages/advisorylist/advisorylist.page.html"),
            styles: [__webpack_require__(/*! ./advisorylist.page.scss */ "./src/app/pages/advisorylist/advisorylist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdvisorylistPage);
    return AdvisorylistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-advisorylist-advisorylist-module.js.map