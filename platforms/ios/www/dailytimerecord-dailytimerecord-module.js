(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dailytimerecord-dailytimerecord-module"],{

/***/ "./src/app/pages/dailytimerecord/dailytimerecord.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dailytimerecord/dailytimerecord.module.ts ***!
  \*****************************************************************/
/*! exports provided: DailytimerecordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailytimerecordPageModule", function() { return DailytimerecordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dailytimerecord_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dailytimerecord.page */ "./src/app/pages/dailytimerecord/dailytimerecord.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _dailytimerecord_page__WEBPACK_IMPORTED_MODULE_6__["DailytimerecordPage"]
    }
];
var DailytimerecordPageModule = /** @class */ (function () {
    function DailytimerecordPageModule() {
    }
    DailytimerecordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_dailytimerecord_page__WEBPACK_IMPORTED_MODULE_6__["DailytimerecordPage"]]
        })
    ], DailytimerecordPageModule);
    return DailytimerecordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dailytimerecord/dailytimerecord.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dailytimerecord/dailytimerecord.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n        <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=btnFilter slot=\"end\" color=\"light\" (click)=\"openModal()\">\n        <ion-icon slot=\"start\" name=\"search\" mode=\"md\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title mode=\"md\" slot=\"start\">Daily Time Record</ion-title>\n</ion-header>\n<ion-content padding class=\"classContent\" hide-header header=\"header\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card class=divCardSegment mode=\"md\">\n    <div *ngIf=\"loadingDone; else shimmer\">\n      <div *ngIf=\"noError; else error\">\n        <ion-segment class=\"sgmtDTRType\" mode=\"md\" scrollable [(ngModel)]=\"DTRType\">\n          <div *ngFor=\"let type of DTRTypeList\">\n            <div *ngIf=\"type == 'DTR'; else otherType\">\n              <ion-segment-button mode=\"md\" value={{type}} checked>\n                {{type}}\n              </ion-segment-button>\n            </div>\n            <ng-template #otherType>\n              <ion-segment-button mode=\"md\" value={{type}}>\n                {{type}}\n              </ion-segment-button>\n            </ng-template>\n          </div>\n        </ion-segment>\n        <div [ngSwitch]=\"DTRType\">\n          <div *ngFor=\"let type of DTRTypeList\">\n            <ion-list mode=\"md\" *ngSwitchCase=\"type\">\n              <div *ngIf=\"type == 'DTR'\">\n                <div *ngIf=\"!dtrIsEmpty; else error\">\n                  <div *ngFor=\"let dtr of DTRList\">\n                    <ion-item class=\"itmClass\" button lines=\"full\" detail=\"false\" (click)=\"setDTRDetails(dtr)\">\n                      <ion-avatar class=\"divDate\">\n                        <div class=\"DateMonth\">\n                          {{getDateMonth(dtr.DTR_date,1)}}\n                        </div>\n                        <div class=\"DateDate\">\n                          {{getDateDate(dtr.DTR_date)}}\n                        </div>\n                      </ion-avatar>\n                      <ion-label class=\"lblDTR\" text-wrap>\n                        <div class=\"divDTRDesc\">\n                          <span *ngIf=\"dtr.Leave_rem != ''\" class=\"divLeave\">\n                            <img *ngIf=\"dtr.Leave_rem == 'BL'\" src=\"assets/icon/ic_bl.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'EL'\" src=\"assets/icon/ic_el.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'IL'\" src=\"assets/icon/ic_il.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'MCW'\" src=\"assets/icon/ic_mcw.png\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'ML'\" src=\"assets/icon/ic_ml.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'PL'\" src=\"assets/icon/ic_pl.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'SL'\" src=\"assets/icon/ic_sl.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'VL'\" src=\"assets/icon/ic_vl.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'XS'\" src=\"assets/icon/ic_xs.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <!-- {{dtr.Leave_rem}} -->\n                          </span>\n                          <span *ngIf=\"dtr.AttAdv_rem != ''\" class=\"divLeave\">\n                            <img *ngIf=\"dtr.AttAdv_rem == 'AUTHORIZED UNDER TIME '\" src=\"assets/icon/ic_au.png\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.AttAdv_rem == 'AUTHORIZED LATE '\" src=\"assets/icon/ic_el.al\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.AttAdv_rem == 'OFFSET '\" src=\"assets/icon/ic_os.png\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.AttAdv_rem == 'CTO '\" src=\"assets/icon/ic_cto.png\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.AttAdv_rem == 'OFFICIAL BUSINESS '\" src=\"assets/icon/ic_ob.png\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.AttAdv_rem == 'AUTHORIZED SHIFT '\" src=\"assets/icon/ic_as.png\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <!-- {{dtr.AttAdv_rem}} -->\n                          </span>\n                          <div class=\"divDTRTime\">\n                            <span *ngIf=\"dtr.Am_In != ''\">{{dtr.Am_In}}</span>\n                            <span *ngIf=\"dtr.Am_In == ''\">-</span>\n                            <span *ngIf=\"dtr.Am_Out != ''\"> - {{dtr.Am_Out}}</span>\n                          </div>\n                          <div class=\"divDTRDay\">\n                            <span>{{dtr.Att_Code}}</span>\n                          </div>\n                          <div class=\"divDTRHours\">\n                            <span>Shift: {{dtr.ShiftSchedule}}</span>\n                          </div>\n                        </div>\n                      </ion-label>\n                    </ion-item>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"type == 'OFFICIAL BUSINESS'\">\n                <div *ngIf=\"!obIsEmpty; else error\">\n                  <div *ngFor=\"let ob of OBList\">\n                    <ion-item class=\"itmClass\" button lines=\"full\" detail=\"false\">\n                      <ion-avatar class=\"divDate\">\n                        <div class=\"DateMonth\">\n                          {{getDateMonth(ob.Log_Date,1)}}\n                        </div>\n                        <div class=\"DateDate\">\n                          {{getDateDate(ob.Log_Date)}}\n                        </div>\n                      </ion-avatar>\n                      <ion-label text-wrap>\n                        <div class=\"divDTRDesc\">\n                          <div class=\"divOBTime\">\n                            <span *ngIf=\"ob.Log_Time != ''\">{{ob.Log_Time}}</span>\n                            <span *ngIf=\"ob.Log_Time == ''\">-</span>\n                            <span *ngIf=\"ob.Log_Time_In != ''\"> - {{ob.Log_Time_In}}</span>\n                          </div>\n                          <div class=\"divOBRemarks\">\n                            <span *ngIf=\"ob.Remarks != ''\">{{ob.Log_Remark}}</span>\n                          </div>\n                        </div>\n                      </ion-label>\n                    </ion-item>\n                  </div>\n                </div>\n              </div>\n            </ion-list>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n<ng-template #shimmer>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  <div id=\"lines7\" class=\"shine\"></div>\n  <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2]\">\n    <ion-avatar class=\"divDate\">\n      <div class=\"DateMonth\"></div>\n      <div class=\"DateDate\"></div>\n    </ion-avatar>\n    <ion-label>\n      <div id=\"lines4\" class=\"shine\"></div><br>\n      <div id=\"lines3\" class=\"shine\"></div><br>\n      <div id=\"lines3\" class=\"shine\"></div>\n    </ion-label>\n  </ion-item>\n</ng-template>\n<ng-template #error>\n  <ion-item lines=\"none\">\n    <div class=\"errorbox\">\n      <ion-avatar class=\"center\">\n        <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n      <span class=\"errorMessage\">{{errorMessage}}</span>\n      <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n    </div>\n  </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/dailytimerecord/dailytimerecord.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dailytimerecord/dailytimerecord.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: bottom;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\nion-icon {\n  font-size: 24px !important;\n}\n\nion-list {\n  padding-bottom: 0px;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\nion-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.classContent {\n  --background: #F5F5F5;\n  --padding-top: 10px !important;\n}\n\n.divCardSegment {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: 0px;\n}\n\n.sgmtDTRType {\n  min-width: 70px;\n  background: white;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #cecccc;\n  font-family: \"RobotoRegular\";\n}\n\n.divDate {\n  margin-top: -30px;\n}\n\n.divDTRDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px;\n}\n\n.divDTRStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -8px;\n}\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.divDTRTime {\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n.divDTRDay {\n  color: #808080;\n  font-size: 11px;\n  margin-bottom: 12px;\n}\n\n.divDTRHours {\n  color: #808080;\n  font-size: 11px;\n}\n\n.lblDTR {\n  margin-right: 5px;\n}\n\n.divLeave {\n  font-size: 11px;\n  float: right;\n  text-align: center;\n}\n\n.imgLeaveIcon {\n  height: 30px;\n  width: 30px;\n  border-radius: 15px;\n}\n\n.divOBTime {\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.divOBRemarks {\n  color: #808080;\n  font-size: 11px;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvZGFpbHl0aW1lcmVjb3JkL2RhaWx5dGltZXJlY29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RhaWx5dGltZXJlY29yZC9kYWlseXRpbWVyZWNvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxrQ0FBQTtBQ0ZKOztBREtBO0VBQ0ksMEJBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0FDRko7O0FES0E7RUFDSSx3Q0FBQTtBQ0ZKOztBREtBO0VBQ0ksNEVBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLDRCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFpbHl0aW1lcmVjb3JkL2RhaWx5dGltZXJlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nJykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAvLyBoZWlnaHQ6IDEwMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvL21hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3Qge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uYnRuTWVudSB7XG4gICAgcGFkZGluZzogMCAwIDAgNXB4O1xufVxuXG4uY2xhc3NDb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGNUY1RjU7XG4gICAgLS1wYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2Q2FyZFNlZ21lbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTVweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5zZ210RFRSVHlwZSB7XG4gICAgbWluLXdpZHRoOiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjY2VjY2NjO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmRpdkRhdGUge1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4uZGl2RFRSRGVzYyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWluLWhlaWdodDogNzBweDtcbn1cblxuLmRpdkRUUlN0YXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xufVxuXG4uRGF0ZU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogMjBweFxufVxuXG4uRGF0ZURhdGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzVDNUM1QztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uZGl2RFRSVGltZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmRpdkRUUkRheSB7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kaXZEVFJIb3VycyB7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ubGJsRFRSIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRpdkxlYXZlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZ0xlYXZlSWNvbiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5kaXZPQlRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5kaXZPQlJlbWFya3Mge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2Jhbm5lcl9kYXJrX2dyZWVuLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmJ0bk1lbnUge1xuICBwYWRkaW5nOiAwIDAgMCA1cHg7XG59XG5cbi5jbGFzc0NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIC0tcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRpdkNhcmRTZWdtZW50IHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uc2dtdERUUlR5cGUge1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjY2VjY2NjO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5kaXZEYXRlIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5kaXZEVFJEZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuXG4uZGl2RFRSU3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi5EYXRlTW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLkRhdGVEYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmRpdkRUUlRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmRpdkRUUkRheSB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kaXZEVFJIb3VycyB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5sYmxEVFIge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRpdkxlYXZlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZ0xlYXZlSWNvbiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5kaXZPQlRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmRpdk9CUmVtYXJrcyB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/dailytimerecord/dailytimerecord.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/dailytimerecord/dailytimerecord.page.ts ***!
  \***************************************************************/
/*! exports provided: DailytimerecordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailytimerecordPage", function() { return DailytimerecordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");









var DailytimerecordPage = /** @class */ (function () {
    function DailytimerecordPage(storage, router, menuCtrl, httpApi, loginService, modalController) {
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.httpApi = httpApi;
        this.loginService = loginService;
        this.modalController = modalController;
        this.DTRType = "DTR";
        this.DTRTypeList = ["DTR", "OFFICIAL BUSINESS"];
        this.DTRList = [];
        this.OBList = [];
        this.loadingDone = false;
        this.noError = true;
        this.dtrModal = [];
    }
    DailytimerecordPage.prototype.ngOnInit = function () {
    };
    DailytimerecordPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDone = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.getDTR();
        });
    };
    DailytimerecordPage.prototype.getDTR = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var request = {
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                UserID: _this.empId,
                EmployeeId: _this.empId,
                Remarks: "",
                DateFrom_DTR: _this.dtrDateFrom,
                DateTo_DTR: _this.dtrDateTo,
                DateFrom_OB: _this.obDateFrom,
                DateTo_OB: _this.obDateTo
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                var uri = value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/DTROB/GetDTROB";
                var url = encodeURI(uri);
                _this.httpApi.post(url, request, {})
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
                        _this.loadingDone = true;
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
                        _this.loadingDone = true;
                        return;
                    }
                    _this.tempResult = jsonData['Value']["tblDTR"];
                    if (_this.tempResult.length == 0) {
                        _this.dtrIsEmpty = true;
                        _this.errorMessage = "EMPTY";
                    }
                    _this.tempResult = jsonData['Value']["tblOB"];
                    if (_this.tempResult.length == 0) {
                        _this.obIsEmpty = true;
                        _this.errorMessage = "EMPTY";
                    }
                    _this.noError = true;
                    _this.DTRList = jsonData['Value']["tblDTR"];
                    _this.OBList = jsonData['Value']["tblOB"];
                    _this.loadingDone = true;
                    console.log(_this.DTRList);
                })
                    .catch(function (error) {
                    console.log(error);
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
    DailytimerecordPage.prototype.setDTRDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_DTRDETAILS"], item);
        this.router.navigate(['/dailytimerecorddetails', 'dailytimerecord']);
    };
    DailytimerecordPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    DailytimerecordPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    DailytimerecordPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    DailytimerecordPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    DailytimerecordPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        this.dtrModal["LeaveFrom"] = this.dtrDateFrom;
                        this.dtrModal["LeaveTo"] = this.dtrDateTo;
                        this.dtrModal["DateFrom"] = this.obDateFrom;
                        this.dtrModal["DateTo"] = this.obDateTo;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_8__["FilterMenuComponent"],
                                cssClass: 'modalFilterMenu',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "DailyTimeRecord",
                                    data: this.dtrModal
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.dtrDateFrom = detail.data['leaveFrom'];
                                    _this.dtrDateTo = detail.data['leaveTo'];
                                    _this.obDateFrom = detail.data['dateFiledFrom'];
                                    _this.obDateTo = detail.data['dateFiledTo'];
                                    console.log(_this.dtrDateFrom, _this.dtrDateTo, _this.obDateFrom, _this.obDateTo);
                                    _this.loadingDone = false;
                                    _this.noError = true;
                                    _this.dtrIsEmpty = false;
                                    _this.obIsEmpty = false;
                                    _this.getDTR();
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
    DailytimerecordPage.prototype.refresh = function (event) {
        this.event = event;
        this.ionViewWillEnter();
    };
    DailytimerecordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dailytimerecord',
            template: __webpack_require__(/*! ./dailytimerecord.page.html */ "./src/app/pages/dailytimerecord/dailytimerecord.page.html"),
            styles: [__webpack_require__(/*! ./dailytimerecord.page.scss */ "./src/app/pages/dailytimerecord/dailytimerecord.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], DailytimerecordPage);
    return DailytimerecordPage;
}());



/***/ })

}]);
//# sourceMappingURL=dailytimerecord-dailytimerecord-module.js.map