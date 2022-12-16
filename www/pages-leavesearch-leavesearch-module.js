(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leavesearch-leavesearch-module"],{

/***/ "./src/app/pages/leavesearch/leavesearch.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/leavesearch/leavesearch.module.ts ***!
  \*********************************************************/
/*! exports provided: LeavesearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesearchPageModule", function() { return LeavesearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leavesearch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leavesearch.page */ "./src/app/pages/leavesearch/leavesearch.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _leavesearch_page__WEBPACK_IMPORTED_MODULE_6__["LeavesearchPage"]
    }
];
var LeavesearchPageModule = /** @class */ (function () {
    function LeavesearchPageModule() {
    }
    LeavesearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_leavesearch_page__WEBPACK_IMPORTED_MODULE_6__["LeavesearchPage"]]
        })
    ], LeavesearchPageModule);
    return LeavesearchPageModule;
}());



/***/ }),

/***/ "./src/app/pages/leavesearch/leavesearch.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/leavesearch/leavesearch.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n<div>\n  <ion-button class=\"backClass\" color=\"light\" slot=\"start\" (click)=\"backPressed()\">\n    <ion-icon name=\"arrow-back\"></ion-icon>\n  </ion-button>\n  <ion-button class=\"filterClass\" color=\"light\" slot=\"end\" (click)=\"openModal()\">\n    <ion-icon class=\"icnFilter\" slot=\"start\" name=\"funnel\" mode=\"md\"></ion-icon>Filter List\n  </ion-button>\n</div>\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card>\n    <div *ngIf=\"noError; else error\">\n      <div *ngIf=\"loadingDone; else shimmer\">\n        <ion-list>\n          <div *ngFor=\"let item of (results)\">\n            <ion-item button lines=\"full\" detail=\"false\" (click)=\"setLeaveDetails(item,'userleave')\">\n              <ion-avatar class=\"divLeaveFrom\">\n                <div class=\"LeaveFromMonth\">\n                  {{getDateMonth(item.LEAVEFROM,1)}}\n                </div>\n                <div class=\"LeaveFromDate\">\n                  {{getDateDate(item.LEAVEFROM)}}\n                </div>\n              </ion-avatar>\n              <ion-label text-wrap>\n                <div class=\"divLeaveDesc\">\n                  <div class=\"classStat\">\n                    <div class=\"StatusDesc\">{{ item.LEAVEDESC }}</div>\n                    <div class=\"DateFile\">{{ getLongDate(item.DATEFILE) }}</div>\n                  </div>\n                  <span [ngClass]=\"{'classForApprovalLabel': item.LEAVESTATUSDESC == 'FOR APPROVAL', \n                  'classApprovedLabel': item.LEAVESTATUSDESC == 'APPROVED',\n                  'classOnHoldLabel': item.LEAVESTATUSDESC == 'ON HOLD',\n                  'classPlannedLabel': item.LEAVESTATUSDESC == 'PLANNED',\n                  'classCancelledLabel': item.LEAVESTATUSDESC == 'CANCELLED',\n                  'classDisapprovedLabel': item.LEAVESTATUSDESC == 'DISAPPROVED',\n                  'classPostedLabel': item.LEAVESTATUSDESC == 'POSTED'}\" class=\"RequestType\">\n                    {{ item.LEAVESTATUSDESC }}</span>\n                  <ion-item button class=\"MoreOptions\" lines=\"none\" detail=\"false\"\n                    (click)=\"$event.stopPropagation();MoreOptions($event, item);\"\n                    *ngIf=\"item.LEAVESTATUSDESC == 'FOR APPROVAL' || item.LEAVESTATUSDESC == 'APPROVED' || item.LEAVESTATUSDESC == 'PLANNED'\">\n                    &#8942;\n                  </ion-item>\n                  <br>\n                  <span class=\"LeaveDay\" *ngIf=\"item.LEAVEDAY > 1 \">{{ item.LEAVEDAY }} days duration</span>\n                  <span class=\"LeaveDay\" *ngIf=\"item.LEAVEDAY <= 1 \">{{ item.LEAVEDAY }} day duration</span>\n                </div>\n              </ion-label>\n            </ion-item>\n          </div>\n        </ion-list>\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n<ng-template #shimmer>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2,3,4,5]\">\n    <div id=\"box\" class=\"shine\"></div>\n    <div class=\"divShimmer\">\n      <div id=\"lines1\" class=\"shine\"></div>\n      <div id=\"lines2\" class=\"shine\"></div>\n    </div>\n  </ion-item>\n</ng-template>\n<ng-template #error>\n  <ion-item lines=\"none\">\n    <div class=\"errorbox\">\n      <ion-avatar class=\"center\">\n        <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n      <span class=\"errorMessage\">{{errorMessage}}</span>\n      <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n    </div>\n  </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/leavesearch/leavesearch.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/leavesearch/leavesearch.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\n  ion-modal.show-page {\n    background-color: rgba(0, 0, 0, 0.431372549);\n    text-align: -webkit-center;\n  }\n  .modal-wrapper {\n    width: 90%;\n    border-radius: 5px;\n    height: 70%;\n    margin-top: 20%;\n  }\n}\nion-content {\n  --padding-top: 0;\n}\nion-back-button {\n  color: white;\n  padding-top: 15px;\n}\nion-card {\n  margin: 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\nion-item {\n  --inner-padding-end: 0px !important;\n}\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\nion-thumbnail {\n  height: 90px;\n  width: 90px;\n  margin: 10px;\n  margin-left: 15x;\n}\nion-segment-button {\n  min-width: 70px;\n}\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n.button-native {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.backClass {\n  --inner-padding-top: 5px;\n  --inner-padding-bottom: 5px;\n  margin: 16px 16px;\n  color: #2a2a2a;\n  height: 45px;\n  margin-top: 30px;\n}\n.filterClass {\n  float: right;\n  --border-radius: 5px;\n  --color: #6B6969 !important;\n  --inner-padding-top: 5px;\n  --inner-padding-bottom: 5px;\n  margin: 16px 16px;\n  font-size: 13px;\n  height: 45px;\n  margin-top: 30px;\n}\n.icnFilter {\n  color: #2a2a2a;\n}\n.divLeaveFrom {\n  margin-top: -30px;\n}\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n.divLeaveDesc {\n  margin-left: 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.classStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.StatusDesc {\n  color: #2a2a2a;\n  font-size: 14px;\n  padding-left: 30px;\n  margin-bottom: -10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.DateFile {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n  padding-right: 5px;\n}\n.RequestType {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n.MoreOptions {\n  font-size: 30px;\n  float: right;\n  color: #808080;\n  padding-right: 5px;\n}\n.LeaveDay {\n  font-size: 11px;\n  margin-left: 30px;\n  color: #808080;\n}\n.sc-ion-buttons-md-h {\n  float: left;\n}\n.list-md-lines-full .item,\n.list-md .item-lines-full {\n  --border-width: 1px 0 0 0 !important;\n}\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n.header-items {\n  display: flex;\n  align-items: center;\n}\n.typeImage {\n  width: 60px;\n  height: 60px;\n  margin-left: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhdmVzZWFyY2gvQzpcXFVzZXJzXFwwMzE3NzVcXEdFQVItd29ya2luZyAtICg0KS9zcmNcXGFwcFxccGFnZXNcXGxlYXZlc2VhcmNoXFxsZWF2ZXNlYXJjaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXZlc2VhcmNoL2xlYXZlc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsNENBQUE7SUFDQSwwQkFBQTtFQ0NGO0VERUE7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLGdCQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0RGO0FESUE7RUFDRSxXQUFBO0VBQ0EsNEVBQUE7QUNERjtBRElBO0VBQ0UsbUNBQUE7QUNERjtBRElBO0VBQ0Usd0NBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtBQ0RGO0FESUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUNERjtBRElBO0VBQ0UsNEVBQUE7QUNERjtBRElBO0VBQ0Usd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRElBO0VBQ0UsY0FBQTtBQ0RGO0FESUE7RUFDRSxpQkFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREY7QURJQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RGO0FESUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7QUNERjtBRElBOztFQUVFLG9DQUFBO0FDREY7QURJQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWF2ZXNlYXJjaC9sZWF2ZXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgaW9uLW1vZGFsLnNob3ctcGFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDZlO1xuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICB9XG5cbiAgLm1vZGFsLXdyYXBwZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNzAlO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgfVxufVxuXG5pb24tY29udGVudHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuaW9uLWNhcmR7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1eDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uYnV0dG9uLW5hdGl2ZXtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmJhY2tDbGFzcyB7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDVweDtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW46IDE2cHggMTZweDtcbiAgY29sb3I6IzJhMmEyYTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZmlsdGVyQ2xhc3Mge1xuICBmbG9hdDogcmlnaHQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWNvbG9yOiAjNkI2OTY5ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDVweDtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW46IDE2cHggMTZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5pY25GaWx0ZXJ7XG4gIGNvbG9yOiMyYTJhMmE7XG59XG5cbi5kaXZMZWF2ZUZyb20ge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDIwcHhcbn1cblxuLkxlYXZlRnJvbURhdGUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uZGl2TGVhdmVEZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uY2xhc3NTdGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLlN0YXR1c0Rlc2Mge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLkRhdGVGaWxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5SZXF1ZXN0VHlwZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5Nb3JlT3B0aW9ucyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzgwODA4MDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uTGVhdmVEYXkge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxpc3QtbWQtbGluZXMtZnVsbCAuaXRlbSxcbi5saXN0LW1kIC5pdGVtLWxpbmVzLWZ1bGwge1xuICAtLWJvcmRlci13aWR0aDogMXB4IDAgMCAwICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udHlwZUltYWdlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59IiwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGlvbi1tb2RhbC5zaG93LXBhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MzEzNzI1NDkpO1xuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICB9XG4gIC5tb2RhbC13cmFwcGVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNzBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmJ1dHRvbi1uYXRpdmUge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uYmFja0NsYXNzIHtcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogNXB4O1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG1hcmdpbjogMTZweCAxNnB4O1xuICBjb2xvcjogIzJhMmEyYTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZmlsdGVyQ2xhc3Mge1xuICBmbG9hdDogcmlnaHQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWNvbG9yOiAjNkI2OTY5ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDVweDtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW46IDE2cHggMTZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5pY25GaWx0ZXIge1xuICBjb2xvcjogIzJhMmEyYTtcbn1cblxuLmRpdkxlYXZlRnJvbSB7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4uTGVhdmVGcm9tTW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLkxlYXZlRnJvbURhdGUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uZGl2TGVhdmVEZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uY2xhc3NTdGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLlN0YXR1c0Rlc2Mge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLkRhdGVGaWxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5SZXF1ZXN0VHlwZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5Nb3JlT3B0aW9ucyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzgwODA4MDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uTGVhdmVEYXkge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxpc3QtbWQtbGluZXMtZnVsbCAuaXRlbSxcbi5saXN0LW1kIC5pdGVtLWxpbmVzLWZ1bGwge1xuICAtLWJvcmRlci13aWR0aDogMXB4IDAgMCAwICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udHlwZUltYWdlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/leavesearch/leavesearch.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/leavesearch/leavesearch.page.ts ***!
  \*******************************************************/
/*! exports provided: LeavesearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavesearchPage", function() { return LeavesearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");









var LeavesearchPage = /** @class */ (function () {
    function LeavesearchPage(modalController, httpApi, storage, router, loginService, actionSheetController, alertController, navCtrl, loadingCtrl) {
        this.modalController = modalController;
        this.httpApi = httpApi;
        this.storage = storage;
        this.router = router;
        this.loginService = loginService;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loadingDone = false;
        this.noError = true;
        this.errorMessage = "CONNECTION ERROR";
        this.activityResult = false;
        this.leave = {
            ID: 0,
            EmployeeId: null,
            LeaveType: null,
            LeaveRequestType: null,
            LeaveNoOfDays: 0,
            LeaveFrom: null,
            LeaveFromTime: null,
            LeaveTo: null,
            LeaveToTime: null,
            LeaveReturn: null,
            LeaveRemark: null,
            LeaveReason: null,
            LeaveRequestStatus: null,
            Attachment: null,
            ApproverRemarks: null,
            CancelRemarks: null,
            ApprovalStatus: null,
            User: null,
            DateFrom: null,
            DateTo: null,
            EmpName: null,
            ShowAll: false
        };
    }
    LeavesearchPage.prototype.ngOnInit = function () {
        var _this = this;
        this.results = [];
        this.resultTemp = [];
        this.loadingDone = false;
        this.noError = true;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_EMPID"]).then(function (val) {
            _this.employeeId = val;
            _this.leave['EmployeeId'] = Number(val);
            _this.leave['User'] = val;
            _this.getLeaveList(_this.leave);
        });
        this.activityResult = true;
    };
    LeavesearchPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrntMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrntMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrntMonth[date.getMonth()];
    };
    LeavesearchPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    LeavesearchPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename);
        return date.getFullYear().toString();
    };
    LeavesearchPage.prototype.getLongDate = function (datename) {
        var month = this.getDateMonth(datename, 2);
        var date = this.getDateDate(datename);
        var year = this.getDateYear(datename);
        var fulldate = month + " " + date + ", " + year;
        return fulldate;
    };
    LeavesearchPage.prototype.getLeaveList = function (leave) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            leave['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]];
            leave['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]];
            leave['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]];
            leave['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"];
            leave['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
            console.log(leave);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/LeaveRequest/GetLeaveRequestDetails", leave, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.resultTemp = jsonData['Value'];
                    if (_this.resultTemp.length <= 0) {
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
                    console.log(error);
                    console.log(error.error);
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    LeavesearchPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    LeavesearchPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__["FilterMenuComponent"],
                                cssClass: 'modalFilterMenu',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "LeaveSearch",
                                    data: this.leave
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.leave['EmployeeId'] = Number(_this.employeeId);
                                    _this.leave['LeaveType'] = detail.data['leaveType'];
                                    _this.leave['LeaveRequestType'] = detail.data['requestType'];
                                    _this.leave['LeaveFrom'] = detail.data['leaveFrom'];
                                    _this.leave['LeaveReason'] = detail.data['reason'];
                                    _this.leave['LeaveRequestStatus'] = detail.data['status'];
                                    _this.leave['DateFrom'] = detail.data['dateFiledFrom'];
                                    _this.leave['DateTo'] = (!detail.data['dateFiledTo'] ? detail.data['dateFiledFrom'] : detail.data['dateFiledTo']);
                                    _this.leave['User'] = _this.employeeId;
                                    _this.leave['LeaveTo'] = (!detail.data['leaveTo'] ? detail.data['leaveFrom'] : detail.data['leaveTo']);
                                    _this.getLeaveList(_this.leave);
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
    LeavesearchPage.prototype.MoreOptions = function (event, item) {
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
    LeavesearchPage.prototype.showForApprovalActions = function (leave) {
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
    LeavesearchPage.prototype.showApprovedActions = function (leave) {
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
    LeavesearchPage.prototype.showPlannedActions = function (leave) {
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
    LeavesearchPage.prototype.isEmpty = function (text) {
        return (text == "" || text == undefined || text == null);
    };
    LeavesearchPage.prototype.showCancelDialog = function (leave) {
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
    LeavesearchPage.prototype.deleteLeave = function (leave) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var postData = {
                ID: String(leave['ID']),
                USER: _this.employeeId,
                LeaveRequestStatus: leave['LEAVESTATUS'],
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/LeaveRequest/DeleteLeaveRequest", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("Error", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"]);
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog("Error", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"]);
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("Error", jsonData['Message']);
                        return;
                    }
                    _this.showDialog("Success", "Done");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("Error", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"]);
                    _this.loading.dismiss();
                });
            });
        });
    };
    LeavesearchPage.prototype.submitLeave = function (leave) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var postData = {
                ID: String(leave['ID']),
                USER: _this.employeeId,
                EmployeeId: _this.employeeId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: "1"
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/LeaveRequest/SubmitPlannedLeave", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("Error", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"]);
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog("Error", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"]);
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("Error", jsonData['Message']);
                        return;
                    }
                    _this.showDialog("Success", "Your changes have been saved for processing");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("Error", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"]);
                    _this.loading.dismiss();
                });
            });
        });
    };
    LeavesearchPage.prototype.cancelLeave = function (leave, cancelRemarks) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var postData = {
                ID: String(leave['ID']),
                USER: _this.employeeId,
                LeaveRequestStatus: leave['LEAVESTATUS'],
                CancelRemarks: cancelRemarks,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/LeaveRequest/CancelLeaveRequest", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("Error", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"]);
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog("Error", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"]);
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("Error", jsonData['Message']);
                        return;
                    }
                    _this.showDialog("Success", "Your changes have been saved for processing");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("Error", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"]);
                    _this.loading.dismiss();
                });
            });
        });
    };
    LeavesearchPage.prototype.setLeaveDetails = function (item, type) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_LEAVEDETAILS"], item);
        this.router.navigate(['/leavedetails', type, 'leavesearch']);
    };
    LeavesearchPage.prototype.showDialog = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            buttons: [{
                                    text: 'Okay',
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
    LeavesearchPage.prototype.showDeleteDialog = function (leave) {
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
    LeavesearchPage.prototype.showSubmitDialog = function (leave) {
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
    LeavesearchPage.prototype.ionViewWillEnter = function () {
        if (this.activityResult) {
            this.ngOnInit();
        }
    };
    LeavesearchPage.prototype.refresh = function (event) {
        if (event) {
            this.event = event;
        }
        this.ngOnInit();
    };
    LeavesearchPage.prototype.backPressed = function () {
        this.navCtrl.pop();
    };
    LeavesearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leavesearch',
            template: __webpack_require__(/*! ./leavesearch.page.html */ "./src/app/pages/leavesearch/leavesearch.page.html"),
            styles: [__webpack_require__(/*! ./leavesearch.page.scss */ "./src/app/pages/leavesearch/leavesearch.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], LeavesearchPage);
    return LeavesearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-leavesearch-leavesearch-module.js.map