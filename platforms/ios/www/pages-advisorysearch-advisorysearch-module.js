(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advisorysearch-advisorysearch-module"],{

/***/ "./src/app/pages/advisorysearch/advisorysearch.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/advisorysearch/advisorysearch.module.ts ***!
  \***************************************************************/
/*! exports provided: AdvisorysearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorysearchPageModule", function() { return AdvisorysearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _advisorysearch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advisorysearch.page */ "./src/app/pages/advisorysearch/advisorysearch.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _advisorysearch_page__WEBPACK_IMPORTED_MODULE_6__["AdvisorysearchPage"]
    }
];
var AdvisorysearchPageModule = /** @class */ (function () {
    function AdvisorysearchPageModule() {
    }
    AdvisorysearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_advisorysearch_page__WEBPACK_IMPORTED_MODULE_6__["AdvisorysearchPage"]]
        })
    ], AdvisorysearchPageModule);
    return AdvisorysearchPageModule;
}());



/***/ }),

/***/ "./src/app/pages/advisorysearch/advisorysearch.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/advisorysearch/advisorysearch.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n<div>\n  <ion-button class=\"backClass\" color=\"light\" slot=\"start\" (click)=\"backPressed()\">\n    <ion-icon name=\"arrow-back\"></ion-icon>\n  </ion-button>\n  <ion-button class=\"filterClass\" color=\"light\" slot=\"end\" (click)=\"openModal()\">\n    <ion-icon class=\"icnFilter\" slot=\"start\" name=\"funnel\" mode=\"md\"></ion-icon>Filter List\n  </ion-button>\n</div>\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card>\n    <div *ngIf=\"noError; else error\">\n      <div *ngIf=\"loadingDone; else shimmer\">\n        <ion-list>\n          <div *ngFor=\"let item of (results)\">\n            <div *ngIf=\"item.REQUESTTYPECODE != 'ATD0013'\">\n              <ion-item button lines=\"full\" detail=\"false\"\n                [routerLink]=\" ['/', 'advisorydetails', item.ID, 'useradvisory', item.STATUS,'','advisorysearch']\">\n                <ion-avatar class=\"divLeaveFrom\">\n                  <div class=\"LeaveFromMonth\">\n                    {{getDateMonth(item.REQUESTDATE,1)}}\n                  </div>\n                  <div class=\"LeaveFromDate\">\n                    {{getDateDate(item.REQUESTDATE)}}\n                  </div>\n                </ion-avatar>\n                <ion-label text-wrap>\n                  <div class=\"divLeaveDesc\">\n                    <div class=\"StatusDesc\">{{ item.REQUESTTYPEDESC }}</div>\n                    <span class=\"RequestType\" [ngClass]=\"{'classForApprovalLabel': item.STATUS == 'FOR APPROVAL', \n                        'classApprovedLabel': item.STATUS == 'APPROVED',\n                        'classOnHoldLabel': item.STATUS == 'ON HOLD',\n                        'classPlannedLabel': item.STATUS == 'PLANNED',\n                        'classCancelledLabel': item.STATUS == 'CANCELLED',\n                        'classDisapprovedLabel': item.STATUS == 'DISAPPROVED',\n                        'classPostedLabel': item.STATUS == 'POSTED'}\">{{ item.STATUS }}</span>\n                    <ion-item button lines=\"none\" class=\"MoreOptions\" detail=\"false\"\n                      (click)=\"$event.stopPropagation();MoreOptions($event, item);\"\n                      *ngIf=\"item.STATUS == 'FOR APPROVAL' || item.STATUS == 'APPROVED'\">&#8942;</ion-item>\n                    <br>\n                    <span class=\"LeaveDay\">{{ item.REQUESTTIME }}</span>\n                  </div>\n                </ion-label>\n              </ion-item>\n            </div>\n          </div>\n        </ion-list>\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n<ng-template #shimmer>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2,3,4,5]\">\n    <div id=\"box\" class=\"shine\"></div>\n    <div class=\"divShimmer\">\n      <div id=\"lines1\" class=\"shine\"></div>\n      <div id=\"lines2\" class=\"shine\"></div>\n    </div>\n  </ion-item>\n</ng-template>\n<ng-template #error>\n  <ion-item lines=\"none\">\n    <div class=\"errorbox\">\n      <ion-avatar class=\"center\">\n        <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n      <span class=\"errorMessage\">{{errorMessage}}</span>\n      <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n    </div>\n  </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/advisorysearch/advisorysearch.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/advisorysearch/advisorysearch.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\n  ion-modal.show-page {\n    background-color: #0000006e;\n    text-align: -webkit-center;\n  }\n\n  .modal-wrapper {\n    width: 90%;\n    border-radius: 5px;\n    height: 70%;\n    margin-top: 20%;\n  }\n}\nion-content {\n  --padding-top: 0;\n}\nion-back-button {\n  color: white;\n  padding-top: 15px;\n}\nion-card {\n  margin: 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\nion-item {\n  --inner-padding-end: 0px !important;\n}\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\nion-thumbnail {\n  height: 90px;\n  width: 90px;\n  margin: 10px;\n  margin-left: 15x;\n}\nion-segment-button {\n  min-width: 70px;\n}\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n.backClass {\n  --inner-padding-top: 5px;\n  --inner-padding-bottom: 5px;\n  margin: 16px 16px;\n  color: #2a2a2a;\n  height: 45px;\n  margin-top: 30px;\n}\n.filterClass {\n  float: right;\n  --border-radius: 5px;\n  --color: #6B6969 !important;\n  --inner-padding-top: 5px;\n  --inner-padding-bottom: 5px;\n  margin: 16px 16px;\n  font-size: 13px;\n  height: 45px;\n  margin-top: 30px;\n}\n.icnFilter {\n  color: #2a2a2a;\n}\n.divLeaveFrom {\n  margin-top: -30px;\n}\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n.divLeaveDesc {\n  margin-left: 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.classStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.StatusDesc {\n  color: #2a2a2a;\n  font-size: 14px;\n  padding-left: 30px;\n  margin-bottom: -10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.DateFile {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n  padding-right: 5px;\n}\n.RequestType {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n.MoreOptions {\n  font-size: 30px;\n  float: right;\n  color: #808080;\n  padding-right: 5px;\n}\n.LeaveDay {\n  font-size: 11px;\n  margin-left: 30px;\n  color: #808080;\n}\n.sc-ion-buttons-md-h {\n  float: left;\n}\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n.header-items {\n  display: flex;\n  align-items: center;\n}\n.typeImage {\n  width: 60px;\n  height: 60px;\n  margin-left: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvYWR2aXNvcnlzZWFyY2gvYWR2aXNvcnlzZWFyY2gucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZHZpc29yeXNlYXJjaC9hZHZpc29yeXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsMEJBQUE7RUNDRjs7RURFQTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDQ0Y7QUFDRjtBREVBO0VBQ0UsZ0JBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQUY7QURHQTtFQUNFLFdBQUE7RUFDQSw0RUFBQTtBQ0FGO0FER0E7RUFDRSxtQ0FBQTtBQ0FGO0FER0E7RUFDSSx3Q0FBQTtBQ0FKO0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7RUFDRSxlQUFBO0FDQUY7QURHQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0E7RUFDRSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0FDQUY7QURHQTtFQUNFLGlCQUFBO0FDQUY7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBRjtBREdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBRjtBREdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUY7QURHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FGO0FER0E7RUFDRSxXQUFBO0FDQUY7QURHQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUNBRjtBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZHZpc29yeXNlYXJjaC9hZHZpc29yeXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgaW9uLW1vZGFsLnNob3ctcGFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDZlO1xuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICB9XG5cbiAgLm1vZGFsLXdyYXBwZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNzAlO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgfVxufVxuXG5pb24tY29udGVudHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuaW9uLWNhcmR7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTV4O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBtaW4td2lkdGg6IDcwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5iYWNrQ2xhc3Mge1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiA1cHg7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luOiAxNnB4IDE2cHg7XG4gIGNvbG9yOiMyYTJhMmE7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmZpbHRlckNsYXNzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1jb2xvcjogIzZCNjk2OSAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiA1cHg7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luOiAxNnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uaWNuRmlsdGVye1xuICBjb2xvcjojMmEyYTJhO1xufVxuXG4uZGl2TGVhdmVGcm9tIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5MZWF2ZUZyb21Nb250aCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgY29sb3I6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAyMHB4XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNsYXNzU3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5EYXRlRmlsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzgwODA4MDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uUmVxdWVzdFR5cGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uTW9yZU9wdGlvbnMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLkxlYXZlRGF5IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5saXN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udHlwZUltYWdlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59IiwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGlvbi1tb2RhbC5zaG93LXBhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2ZTtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgfVxuXG4gIC5tb2RhbC13cmFwcGVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNzBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmJhY2tDbGFzcyB7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDVweDtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtYXJnaW46IDE2cHggMTZweDtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmZpbHRlckNsYXNzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1jb2xvcjogIzZCNjk2OSAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiA1cHg7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luOiAxNnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uaWNuRmlsdGVyIHtcbiAgY29sb3I6ICMyYTJhMmE7XG59XG5cbi5kaXZMZWF2ZUZyb20ge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNsYXNzU3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5EYXRlRmlsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzgwODA4MDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uUmVxdWVzdFR5cGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uTW9yZU9wdGlvbnMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLkxlYXZlRGF5IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5saXN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udHlwZUltYWdlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/advisorysearch/advisorysearch.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/advisorysearch/advisorysearch.page.ts ***!
  \*************************************************************/
/*! exports provided: AdvisorysearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorysearchPage", function() { return AdvisorysearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");










var AdvisorysearchPage = /** @class */ (function () {
    function AdvisorysearchPage(httpApi, activatedRoute, actionSheetController, alertController, loadingCtrl, router, loginService, modalController, navCtrl, storage) {
        this.httpApi = httpApi;
        this.activatedRoute = activatedRoute;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.loginService = loginService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingDone = false;
        this.noError = true;
        this.errorMessage = "CONNECTION ERROR";
        this.advisory = {};
    }
    AdvisorysearchPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingDone = false;
        this.noError = true;
        this.results = [];
        this.resultTemp = [];
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_EMPID"]).then(function (val) {
            _this.employeeId = val;
            _this.getAdvisoryList();
        });
    };
    AdvisorysearchPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrntMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrntMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrntMonth[date.getMonth()];
    };
    AdvisorysearchPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    AdvisorysearchPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename);
        return date.getFullYear().toString();
    };
    AdvisorysearchPage.prototype.getLongDate = function (datename) {
        var month = this.getDateMonth(datename, 2);
        var date = this.getDateDate(datename);
        var year = this.getDateYear(datename);
        var fulldate = month + " " + date + ", " + year;
        return fulldate;
    };
    AdvisorysearchPage.prototype.backPressed = function () {
        this.navCtrl.pop();
    };
    AdvisorysearchPage.prototype.getAdvisoryList = function () {
        var _this = this;
        this.advisory['USER'] = this.employeeId;
        this.advisory['EMPNO'] = Number(this.employeeId);
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            _this.advisory['RecordID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]];
            _this.advisory['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]];
            _this.advisory['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]];
            _this.advisory['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"];
            _this.advisory['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/GetAttendanceAdvisory", _this.advisory, {})
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
                    console.log(_this.resultTemp);
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
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    AdvisorysearchPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    AdvisorysearchPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__["FilterMenuComponent"],
                                cssClass: 'modalFilterMenu',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "AdvisorySearch",
                                    data: this.advisory
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.advisory['EmployeeId'] = Number(_this.employeeId);
                                    _this.advisory['DATEFROM'] = detail.data['advisoryFrom'];
                                    _this.advisory['DATETO'] = detail.data['advisoryTo'];
                                    _this.advisory['REQUESTTYPECODE'] = detail.data['advisoryType'];
                                    _this.advisory['REASONCODE'] = detail.data['advisoryReason'];
                                    _this.advisory['STATUSCODE'] = detail.data['status'];
                                    _this.getAdvisoryList();
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
    AdvisorysearchPage.prototype.MoreOptions = function (event, item) {
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
    AdvisorysearchPage.prototype.showForApprovalActions = function (advisory) {
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
    AdvisorysearchPage.prototype.showApprovedActions = function (advisory) {
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
    AdvisorysearchPage.prototype.showDeleteDialog = function (advisory) {
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
    AdvisorysearchPage.prototype.showCancelDialog = function (advisory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancel Advisory',
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
    AdvisorysearchPage.prototype.cancelAdvisory = function (advisory, remarks) {
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
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
                var postData = {
                    ID: String(advisory['ID']),
                    CANCELREMARKS: remarks,
                    USER: _this.employeeId,
                    RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                    AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"]
                };
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/CancelAttendanceAdvisory", postData, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], "Okay");
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
                            _this.showDialog("ERROR!", jsonData['Message'], "Okay");
                            return;
                        }
                        _this.showDialog("DONE!", "You have cancelled this request", "Okay");
                        _this.loading.dismiss();
                    })
                        .catch(function (error) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], "Okay");
                        _this.loading.dismiss();
                    });
                });
            });
        });
    };
    AdvisorysearchPage.prototype.deleteAdvisory = function (advisory) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                ID: String(advisory['ID']),
                EMPNO: Number(_this.employeeId),
                USER: _this.employeeId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/DeleteAttendanceAdvisory", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], "Okay");
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
                        _this.showDialog("ERROR!", jsonData['Message'], "Okay");
                        return;
                    }
                    _this.showDialog("DONE!", "You have deleted this request", "Okay");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    AdvisorysearchPage.prototype.showDialog = function (title, message, buttonText) {
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
    AdvisorysearchPage.prototype.ionViewWillEnter = function () {
        this.ngOnInit();
    };
    AdvisorysearchPage.prototype.refresh = function (event) {
        if (event) {
            this.event = event;
        }
        this.ngOnInit();
    };
    AdvisorysearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advisorysearch',
            template: __webpack_require__(/*! ./advisorysearch.page.html */ "./src/app/pages/advisorysearch/advisorysearch.page.html"),
            styles: [__webpack_require__(/*! ./advisorysearch.page.scss */ "./src/app/pages/advisorysearch/advisorysearch.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], AdvisorysearchPage);
    return AdvisorysearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-advisorysearch-advisorysearch-module.js.map