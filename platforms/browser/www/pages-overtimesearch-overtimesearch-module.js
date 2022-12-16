(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-overtimesearch-overtimesearch-module"],{

/***/ "./src/app/pages/overtimesearch/overtimesearch.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/overtimesearch/overtimesearch.module.ts ***!
  \***************************************************************/
/*! exports provided: OvertimesearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimesearchPageModule", function() { return OvertimesearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _overtimesearch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overtimesearch.page */ "./src/app/pages/overtimesearch/overtimesearch.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _overtimesearch_page__WEBPACK_IMPORTED_MODULE_6__["OvertimesearchPage"]
    }
];
var OvertimesearchPageModule = /** @class */ (function () {
    function OvertimesearchPageModule() {
    }
    OvertimesearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_overtimesearch_page__WEBPACK_IMPORTED_MODULE_6__["OvertimesearchPage"]]
        })
    ], OvertimesearchPageModule);
    return OvertimesearchPageModule;
}());



/***/ }),

/***/ "./src/app/pages/overtimesearch/overtimesearch.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/overtimesearch/overtimesearch.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n<div>\n  <ion-button class=\"backClass\" color=\"light\" slot=\"start\" (click)=\"backPressed()\">\n    <ion-icon name=\"arrow-back\"></ion-icon>\n  </ion-button>\n  <ion-button class=\"filterClass\" color=\"light\" slot=\"end\" (click)=\"openModal()\">\n    <ion-icon class=\"icnFilter\" slot=\"start\" name=\"funnel\" mode=\"md\"></ion-icon>Filter List\n  </ion-button>\n</div>\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card>\n    <div *ngIf=\"noError; else error\">\n      <div *ngIf=\"loadingDone; else shimmer\">\n        <ion-list>\n          <div *ngFor=\"let item of (results)\">\n            <ion-item button lines=\"full\" detail=\"false\" (click)=\"setOTDetails(item)\">\n              <ion-avatar class=\"divOTFrom\">\n                <div class=\"OTFromMonth\">\n                  {{getDateMonth(item.STARTDATE,1)}}\n                </div>\n                <div class=\"OTFromDate\">\n                  {{getDateDate(item.STARTDATE)}}\n                </div>\n              </ion-avatar>\n              <ion-label text-wrap>\n                <div class=\"divOTDesc\">\n                  <div class=\"divDateCreated\">{{ getLongDate(item.CREATEDDATE) }}</div>\n                  <div class=\"divOTTime\">{{ item.STARTTIME }} - {{item.ENDTIME}}</div>\n                  <span [ngClass]=\"{'classForApprovalLabel': item.STATUSDESC == 'FOR APPROVAL', \n                  'classApprovedLabel': item.STATUSDESC == 'APPROVED',\n                  'classOnHoldLabel': item.STATUSDESC == 'ON HOLD',\n                  'classPlannedLabel': item.STATUSDESC == 'PLANNED',\n                  'classCancelledLabel': item.STATUSDESC == 'CANCELLED',\n                  'classDisapprovedLabel': item.STATUSDESC == 'DISAPPROVED',\n                  'classPostedLabel': item.STATUSDESC == 'POSTED'}\" class=\"RequestType\">\n                    {{ item.STATUSDESC }}</span>\n                  <div class=\"divOTHours\" *ngIf=\"item.APPLIEDOTHOURS > 1 \">{{ item.APPLIEDOTHOURS }} Hours</div>\n                  <div class=\"divOTHours\" *ngIf=\"item.APPLIEDOTHOURS <= 1 \">{{ item.APPLIEDOTHOURS }} Hour</div>\n                </div>\n              </ion-label>\n            </ion-item>\n          </div>\n        </ion-list>\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n<ng-template #shimmer>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2,3,4,5]\">\n    <div id=\"box\" class=\"shine\"></div>\n    <div class=\"divShimmer\">\n      <div id=\"lines1\" class=\"shine\"></div>\n      <div id=\"lines2\" class=\"shine\"></div>\n    </div>\n  </ion-item>\n</ng-template>\n<ng-template #error>\n  <ion-item lines=\"none\">\n    <div class=\"errorbox\">\n      <ion-avatar class=\"center\">\n        <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n      <span class=\"errorMessage\">{{errorMessage}}</span>\n      <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n    </div>\n  </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/overtimesearch/overtimesearch.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/overtimesearch/overtimesearch.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\n  ion-modal.show-page {\n    background-color: rgba(0, 0, 0, 0.431372549);\n    text-align: -webkit-center;\n  }\n  .modal-wrapper {\n    width: 90%;\n    border-radius: 5px;\n    height: 70%;\n    margin-top: 20%;\n  }\n}\nion-content {\n  --padding-top: 0;\n}\nion-back-button {\n  color: white;\n  padding-top: 15px;\n}\nion-card {\n  margin: 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\nion-item {\n  --inner-padding-end: 0px !important;\n}\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\nion-thumbnail {\n  height: 90px;\n  width: 90px;\n  margin: 10px;\n  margin-left: 15x;\n}\nion-segment-button {\n  min-width: 70px;\n}\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n.backClass {\n  --inner-padding-top: 5px;\n  --inner-padding-bottom: 5px;\n  margin: 16px 16px;\n  color: #2a2a2a;\n  height: 45px;\n  margin-top: 30px;\n}\n.filterClass {\n  float: right;\n  --border-radius: 5px;\n  --color: #6B6969 !important;\n  --inner-padding-top: 5px;\n  --inner-padding-bottom: 5px;\n  margin: 16px 16px;\n  font-size: 13px;\n  height: 45px;\n  margin-top: 30px;\n}\n.icnFilter {\n  color: #2a2a2a;\n}\n.divOTFrom {\n  margin-top: -20px;\n}\n.OTFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n.OTFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n.divOTDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px;\n}\n.divDateCreated {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n}\n.divOTTime {\n  font-size: 14px;\n}\n.divOTHours {\n  color: #808080;\n  font-size: 11px;\n}\n.RequestType {\n  font-size: 11px;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n.sc-ion-buttons-md-h {\n  float: left;\n}\n.list-md-lines-full .item,\n.list-md .item-lines-full {\n  --border-width: 1px 0 0 0 !important;\n}\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n.header-items {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3ZlcnRpbWVzZWFyY2gvQzpcXFVzZXJzXFwwMzE3NzVcXEdFQVItd29ya2luZyAtICg0KS9zcmNcXGFwcFxccGFnZXNcXG92ZXJ0aW1lc2VhcmNoXFxvdmVydGltZXNlYXJjaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL292ZXJ0aW1lc2VhcmNoL292ZXJ0aW1lc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0UsNENBQUE7SUFDQSwwQkFBQTtFQ0NKO0VERUU7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ0FKO0FBQ0Y7QURHRTtFQUNFLGdCQUFBO0FDREo7QURJRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0RKO0FESUU7RUFDRSxXQUFBO0VBQ0EsNEVBQUE7QUNESjtBRElFO0VBQ0UsbUNBQUE7QUNESjtBRElFO0VBQ0ksd0NBQUE7QUNETjtBRElFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElFO0VBQ0UsZUFBQTtBQ0RKO0FESUU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUNESjtBRElFO0VBQ0Usd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtBQ0RKO0FESUU7RUFDRSxpQkFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7QURJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7QURJRTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0ROO0FESUU7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNETjtBRElFO0VBQ0ksZUFBQTtBQ0ROO0FESUU7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0ROO0FESUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0RKO0FESUU7RUFDRSxXQUFBO0FDREo7QURJRTs7RUFFRSxvQ0FBQTtBQ0RKO0FESUU7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FDREo7QURJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3ZlcnRpbWVzZWFyY2gvb3ZlcnRpbWVzZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgaW9uLW1vZGFsLnNob3ctcGFnZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNmU7XG4gICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICB9XG4gIFxuICAgIC5tb2RhbC13cmFwcGVyIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG4gIFxuICBpb24tY2FyZHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICB9XG4gIFxuICBpb24taXRlbSB7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGlvbi10aHVtYm5haWwge1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1eDtcbiAgfVxuICBcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDcwcHg7XG4gIH1cbiAgXG4gIGlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG4gIFxuICAuYmFja0NsYXNzIHtcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOiA1cHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbjogMTZweCAxNnB4O1xuICAgIGNvbG9yOiMyYTJhMmE7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgXG4gIC5maWx0ZXJDbGFzcyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC0tY29sb3I6ICM2QjY5NjkgIWltcG9ydGFudDtcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOiA1cHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbjogMTZweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICBcbiAgLmljbkZpbHRlcntcbiAgICBjb2xvcjojMmEyYTJhO1xuICB9XG4gIFxuICAuZGl2T1RGcm9tIHtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgfVxuICBcbiAgLk9URnJvbU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogMjBweFxuICB9XG4gIFxuICAuT1RGcm9tRGF0ZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gIH1cblxuICAuZGl2T1REZXNjIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICB9XG5cbiAgLmRpdkRhdGVDcmVhdGVkIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGNvbG9yOiAjODA4MDgwO1xuICB9XG4gIFxuICAuZGl2T1RUaW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5kaXZPVEhvdXJzIHtcbiAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG4gIFxuICAuUmVxdWVzdFR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIFxuICAubGlzdC1tZC1saW5lcy1mdWxsIC5pdGVtLFxuICAubGlzdC1tZCAuaXRlbS1saW5lcy1mdWxsIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5saXN0LW1kIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuaGVhZGVyLWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH0iLCJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgaW9uLW1vZGFsLnNob3ctcGFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQzMTM3MjU0OSk7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIH1cbiAgLm1vZGFsLXdyYXBwZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNzAlO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgfVxufVxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAwO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1eDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uYmFja0NsYXNzIHtcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogNXB4O1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG1hcmdpbjogMTZweCAxNnB4O1xuICBjb2xvcjogIzJhMmEyYTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZmlsdGVyQ2xhc3Mge1xuICBmbG9hdDogcmlnaHQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWNvbG9yOiAjNkI2OTY5ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDVweDtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW46IDE2cHggMTZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5pY25GaWx0ZXIge1xuICBjb2xvcjogIzJhMmEyYTtcbn1cblxuLmRpdk9URnJvbSB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uT1RGcm9tTW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLk9URnJvbURhdGUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uZGl2T1REZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuXG4uZGl2RGF0ZUNyZWF0ZWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5kaXZPVFRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kaXZPVEhvdXJzIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLlJlcXVlc3RUeXBlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5saXN0LW1kLWxpbmVzLWZ1bGwgLml0ZW0sXG4ubGlzdC1tZCAuaXRlbS1saW5lcy1mdWxsIHtcbiAgLS1ib3JkZXItd2lkdGg6IDFweCAwIDAgMCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/overtimesearch/overtimesearch.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/overtimesearch/overtimesearch.page.ts ***!
  \*************************************************************/
/*! exports provided: OvertimesearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimesearchPage", function() { return OvertimesearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var OvertimesearchPage = /** @class */ (function () {
    function OvertimesearchPage(modalController, httpApi, storage, router, loginService, actionSheetController, alertController, navCtrl, loadingCtrl) {
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
    }
    OvertimesearchPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingDone = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.status = "";
            _this.startDate = "";
            _this.endDate = "";
            _this.getOTList();
        });
    };
    OvertimesearchPage.prototype.getOTList = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SESSION"]).then(function (val) {
            var postData = {
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EMPNO: _this.empId,
                STARTDATE: _this.startDate,
                ENDDATE: _this.endDate,
                STATUS: _this.status
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["SERVER_URL"]] + "/api/OTRequest/GetOTFiled", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.results = jsonData['Value'];
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    OvertimesearchPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrntMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrntMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrntMonth[date.getMonth()];
    };
    OvertimesearchPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    OvertimesearchPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename);
        return date.getFullYear().toString();
    };
    OvertimesearchPage.prototype.getLongDate = function (datename) {
        var month = this.getDateMonth(datename, 2);
        var date = this.getDateDate(datename);
        var year = this.getDateYear(datename);
        var fulldate = month + " " + date + ", " + year;
        return fulldate;
    };
    OvertimesearchPage.prototype.setOTDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_OTDETAILS"], item);
        this.router.navigate(['/overtimedetails', 'overtimesearch']);
    };
    OvertimesearchPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    OvertimesearchPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        data = [];
                        data["LeaveFrom"] = this.startDate;
                        data["LeaveTo"] = this.endDate;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_2__["FilterMenuComponent"],
                                cssClass: 'modalFilterMenu',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "OTSearch",
                                    data: data
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.status = detail.data['status'];
                                    _this.startDate = detail.data['leaveFrom'];
                                    _this.endDate = detail.data['leaveTo'];
                                    _this.getOTList();
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
    OvertimesearchPage.prototype.backPressed = function () {
        this.navCtrl.pop();
    };
    OvertimesearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overtimesearch',
            template: __webpack_require__(/*! ./overtimesearch.page.html */ "./src/app/pages/overtimesearch/overtimesearch.page.html"),
            styles: [__webpack_require__(/*! ./overtimesearch.page.scss */ "./src/app/pages/overtimesearch/overtimesearch.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]])
    ], OvertimesearchPage);
    return OvertimesearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-overtimesearch-overtimesearch-module.js.map