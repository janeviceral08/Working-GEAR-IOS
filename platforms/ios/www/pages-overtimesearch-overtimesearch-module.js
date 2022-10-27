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

module.exports = "@media (max-width: 767px) {\n  ion-modal.show-page {\n    background-color: #0000006e;\n    text-align: -webkit-center;\n  }\n\n  .modal-wrapper {\n    width: 90%;\n    border-radius: 5px;\n    height: 70%;\n    margin-top: 20%;\n  }\n}\nion-content {\n  --padding-top: 0;\n}\nion-back-button {\n  color: white;\n  padding-top: 15px;\n}\nion-card {\n  margin: 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\nion-item {\n  --inner-padding-end: 0px !important;\n}\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\nion-thumbnail {\n  height: 90px;\n  width: 90px;\n  margin: 10px;\n  margin-left: 15x;\n}\nion-segment-button {\n  min-width: 70px;\n}\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n.backClass {\n  --inner-padding-top: 5px;\n  --inner-padding-bottom: 5px;\n  margin: 16px 16px;\n  color: #2a2a2a;\n  height: 45px;\n  margin-top: 30px;\n}\n.filterClass {\n  float: right;\n  --border-radius: 5px;\n  --color: #6B6969 !important;\n  --inner-padding-top: 5px;\n  --inner-padding-bottom: 5px;\n  margin: 16px 16px;\n  font-size: 13px;\n  height: 45px;\n  margin-top: 30px;\n}\n.icnFilter {\n  color: #2a2a2a;\n}\n.divOTFrom {\n  margin-top: -20px;\n}\n.OTFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n.OTFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n.divOTDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px;\n}\n.divDateCreated {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n}\n.divOTTime {\n  font-size: 14px;\n}\n.divOTHours {\n  color: #808080;\n  font-size: 11px;\n}\n.RequestType {\n  font-size: 11px;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n.sc-ion-buttons-md-h {\n  float: left;\n}\n.list-md-lines-full .item,\n.list-md .item-lines-full {\n  --border-width: 1px 0 0 0 !important;\n}\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n.header-items {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvb3ZlcnRpbWVzZWFyY2gvb3ZlcnRpbWVzZWFyY2gucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vdmVydGltZXNlYXJjaC9vdmVydGltZXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNFLDJCQUFBO0lBQ0EsMEJBQUE7RUNDSjs7RURFRTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDQ0o7QUFDRjtBREVFO0VBQ0UsZ0JBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQUo7QURHRTtFQUNFLFdBQUE7RUFDQSw0RUFBQTtBQ0FKO0FER0U7RUFDRSxtQ0FBQTtBQ0FKO0FER0U7RUFDSSx3Q0FBQTtBQ0FOO0FER0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0FDQUo7QURHRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FER0U7RUFDRSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0U7RUFDRSxjQUFBO0FDQUo7QURHRTtFQUNFLGlCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjtBREdFO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQU47QURHRTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FOO0FER0U7RUFDSSxlQUFBO0FDQU47QURHRTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQU47QURHRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQUo7QURHRTtFQUNFLFdBQUE7QUNBSjtBREdFOztFQUVFLG9DQUFBO0FDQUo7QURHRTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdmVydGltZXNlYXJjaC9vdmVydGltZXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBpb24tbW9kYWwuc2hvdy1wYWdlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2ZTtcbiAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICAgIH1cbiAgXG4gICAgLm1vZGFsLXdyYXBwZXIge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGhlaWdodDogNzAlO1xuICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLWNvbnRlbnR7XG4gICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgfVxuICBcbiAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cbiAgXG4gIGlvbi1jYXJke1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIH1cbiAgXG4gIGlvbi1pdGVtIHtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgaW9uLXRodW1ibmFpbCB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTV4O1xuICB9XG4gIFxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIG1pbi13aWR0aDogNzBweDtcbiAgfVxuICBcbiAgaW9uLWZhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cbiAgXG4gIC5iYWNrQ2xhc3Mge1xuICAgIC0taW5uZXItcGFkZGluZy10b3A6IDVweDtcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luOiAxNnB4IDE2cHg7XG4gICAgY29sb3I6IzJhMmEyYTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICBcbiAgLmZpbHRlckNsYXNzIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1jb2xvcjogIzZCNjk2OSAhaW1wb3J0YW50O1xuICAgIC0taW5uZXItcGFkZGluZy10b3A6IDVweDtcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luOiAxNnB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIFxuICAuaWNuRmlsdGVye1xuICAgIGNvbG9yOiMyYTJhMmE7XG4gIH1cbiAgXG4gIC5kaXZPVEZyb20ge1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICB9XG4gIFxuICAuT1RGcm9tTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyMHB4XG4gIH1cbiAgXG4gIC5PVEZyb21EYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxuXG4gIC5kaXZPVERlc2Mge1xuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG4gIH1cblxuICAuZGl2RGF0ZUNyZWF0ZWQge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgY29sb3I6ICM4MDgwODA7XG4gIH1cbiAgXG4gIC5kaXZPVFRpbWUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmRpdk9USG91cnMge1xuICAgICAgY29sb3I6ICM4MDgwODA7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgXG4gIC5SZXF1ZXN0VHlwZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAuc2MtaW9uLWJ1dHRvbnMtbWQtaCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgXG4gIC5saXN0LW1kLWxpbmVzLWZ1bGwgLml0ZW0sXG4gIC5saXN0LW1kIC5pdGVtLWxpbmVzLWZ1bGwge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHggMCAwIDAgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmxpc3QtbWQge1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5oZWFkZXItaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfSIsIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBpb24tbW9kYWwuc2hvdy1wYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNmU7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIH1cblxuICAubW9kYWwtd3JhcHBlciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICB9XG59XG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDA7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTV4O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBtaW4td2lkdGg6IDcwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5iYWNrQ2xhc3Mge1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiA1cHg7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luOiAxNnB4IDE2cHg7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5maWx0ZXJDbGFzcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6ICM2QjY5NjkgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogNXB4O1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG1hcmdpbjogMTZweCAxNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmljbkZpbHRlciB7XG4gIGNvbG9yOiAjMmEyYTJhO1xufVxuXG4uZGl2T1RGcm9tIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5PVEZyb21Nb250aCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgY29sb3I6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uT1RGcm9tRGF0ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICM1QzVDNUM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5kaXZPVERlc2Mge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5kaXZEYXRlQ3JlYXRlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmRpdk9UVGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdk9USG91cnMge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uUmVxdWVzdFR5cGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxpc3QtbWQtbGluZXMtZnVsbCAuaXRlbSxcbi5saXN0LW1kIC5pdGVtLWxpbmVzLWZ1bGwge1xuICAtLWJvcmRlci13aWR0aDogMXB4IDAgMCAwICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

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