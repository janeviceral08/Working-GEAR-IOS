(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["overtime-overtime-module"],{

/***/ "./src/app/pages/overtime/overtime.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/overtime/overtime.module.ts ***!
  \***************************************************/
/*! exports provided: OvertimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimePageModule", function() { return OvertimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _overtime_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overtime.page */ "./src/app/pages/overtime/overtime.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _overtime_page__WEBPACK_IMPORTED_MODULE_6__["OvertimePage"]
    }
];
var OvertimePageModule = /** @class */ (function () {
    function OvertimePageModule() {
    }
    OvertimePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_overtime_page__WEBPACK_IMPORTED_MODULE_6__["OvertimePage"]]
        })
    ], OvertimePageModule);
    return OvertimePageModule;
}());



/***/ }),

/***/ "./src/app/pages/overtime/overtime.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/overtime/overtime.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n        <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=btnSearch slot=\"end\" [routerLink]=\"['/','overtimesearch']\">\n        <ion-icon color=\"light\" slot=\"icon-only\" name=\"search\" icon-sm></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title mode=\"md\" slot=\"start\">Overtime</ion-title>\n</ion-header>\n<ion-content class=\"classContent\" hide-header header=\"header\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh()\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card class=divCardSegment mode=\"md\">\n    <div *ngIf=\"noError; else error || OTTypeList.length <= 0; else error\">\n      <ion-segment class=\"sgmtOTType\" mode=\"md\" scrollable [(ngModel)]=\"OTType\">\n        <div *ngFor=\"let ot of OTTypeList\">\n          <div *ngIf=\"ot == 'FOR APPROVAL'; else otherOT\">\n            <ion-segment-button mode=\"md\" value={{ot}} checked>\n              {{ot}}\n            </ion-segment-button>\n          </div>\n          <ng-template #otherOT>\n            <ion-segment-button mode=\"md\" value={{ot}}>\n              {{ot}}\n            </ion-segment-button>\n          </ng-template>\n        </div>\n      </ion-segment>\n      <div [ngSwitch]=\"OTType\">\n        <div *ngIf=\"loadingDone; else shimmer\">\n          <div *ngFor=\"let ot of OTTypeList\">\n            <ion-list mode=\"md\" *ngSwitchCase=\"ot\">\n              <div *ngFor=\"let item of (results)\">\n                <div *ngIf=\"ot == item.STATUSDESC\">\n                  <ion-item button lines=\"full\" detail=\"false\" (click)=\"setOTDetails(item,'userot')\">\n                    <ion-avatar class=\"divOTFrom\">\n                      <div class=\"DateMonth\">\n                        {{getDateMonth(item.STARTDATE,1)}}\n                      </div>\n                      <div class=\"DateDate\">\n                        {{getDateDate(item.STARTDATE)}}\n                      </div>\n                    </ion-avatar>\n                    <ion-label text-wrap>\n                      <div class=\"divOTDesc\">\n                        <div class=\"divDateCreated\">{{ getLongDate(item.CREATEDDATE) }}</div>\n                        <div class=\"divOTTime\">{{ item.STARTTIME }} - {{item.ENDTIME}}</div>\n                        <div class=\"divRemarks\" *ngIf=\"item.REMARKS != ''\">{{ item.REMARKS }}</div>\n                        <div class=\"divRemarks\" *ngIf=\"item.REMARKS == ''\">-</div>\n                        <div *ngIf=\"item.PAIDHOURS != null\">\n                          <div class=\"divOTHours\" *ngIf=\"item.PAIDHOURS > 1 \">{{ item.PAIDHOURS }} hours</div>\n                          <div class=\"divOTHours\" *ngIf=\"item.PAIDHOURS <= 1 \">{{ item.PAIDHOURS }} hour</div>\n                        </div>\n                        <div *ngIf=\"item.PAIDHOURS == null\">\n                          <div class=\"divOTHours\" *ngIf=\"item.APPLIEDOTHOURS > 1 \">{{ item.APPLIEDOTHOURS }} hours</div>\n                          <div class=\"divOTHours\" *ngIf=\"item.APPLIEDOTHOURS <= 1 \">{{ item.APPLIEDOTHOURS }} hour</div>\n                        </div>\n                      </div>\n                    </ion-label>\n                  </ion-item>\n                </div>\n              </div>\n            </ion-list>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\">\n    <ion-fab-button (click)=\"openOTAdd()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n<ng-template #shimmer>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  <div id=\"lines7\" class=\"shine\"></div>\n  <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2]\">\n    <ion-avatar class=\"divOTFrom\">\n      <div class=\"DateMonth\"></div>\n      <div class=\"DateDate\"></div>\n    </ion-avatar>\n    <ion-label>\n      <div id=\"lines4\" class=\"shine\"></div><br>\n      <div id=\"lines3\" class=\"shine\"></div><br>\n      <div id=\"lines3\" class=\"shine\"></div>\n    </ion-label>\n  </ion-item>\n</ng-template>\n<ng-template #error>\n  <ion-item lines=\"none\">\n    <div class=\"errorbox\">\n      <ion-avatar class=\"center\">\n        <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n      <span class=\"errorMessage\">{{errorMessage}}</span>\n      <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n    </div>\n  </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/overtime/overtime.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/overtime/overtime.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: bottom;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\nion-icon {\n  font-size: 24px !important;\n}\n\nion-list {\n  padding-bottom: 0px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n  margin-bottom: 35px;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\nion-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.classContent {\n  --background: #F5F5F5;\n  --padding-top: 10px !important;\n}\n\n.sgmtOTType {\n  min-width: 70px;\n  background: white;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #cecccc;\n  font-family: \"RobotoRegular\";\n}\n\n.divOTFrom {\n  margin-top: -30px;\n}\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.lblDesc {\n  min-height: 60px;\n}\n\n.divOTDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px;\n}\n\n.divStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -8px;\n}\n\n.divDateCreated {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n}\n\n.divOTTime {\n  font-size: 14px;\n}\n\n.divRemarks {\n  color: #808080;\n  font-size: 11px;\n  margin-bottom: 12px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.divOTHours {\n  color: #808080;\n  font-size: 11px;\n}\n\n.list {\n  margin-bottom: -8px !important;\n}\n\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.header-items {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvb3ZlcnRpbWUvb3ZlcnRpbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vdmVydGltZS9vdmVydGltZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQ0FKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLGtDQUFBO0FDRko7O0FES0E7RUFDSSwwQkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSx3Q0FBQTtBQ0ZKOztBREtBO0VBQ0ksNEVBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksOEJBQUE7QUNGSjs7QURLQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3ZlcnRpbWUvb3ZlcnRpbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2Jhbm5lcl9kYXJrX2dyZWVuLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgLy8gaGVpZ2h0OiAxMDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmJ0bk1lbnUge1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNsYXNzQ29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgIC0tcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnNnbXRPVFR5cGUge1xuICAgIG1pbi13aWR0aDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NlY2NjYztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5kaXZPVEZyb20ge1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4uRGF0ZU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogMjBweFxufVxuXG4uRGF0ZURhdGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzVDNUM1QztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ubGJsRGVzYyB7XG4gICAgbWluLWhlaWdodDogNjBweDtcbn1cblxuLmRpdk9URGVzYyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWluLWhlaWdodDogNzBweDtcbn1cblxuLmRpdlN0YXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xufVxuXG4uZGl2RGF0ZUNyZWF0ZWQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5kaXZPVFRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdlJlbWFya3Mge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRpdk9USG91cnMge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IC04cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtbWQge1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5idG5NZW51IHtcbiAgcGFkZGluZzogMCAwIDAgNXB4O1xufVxuXG4uY2xhc3NDb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAtLXBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZ210T1RUeXBlIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NlY2NjYztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uZGl2T1RGcm9tIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5EYXRlTW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLkRhdGVEYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmxibERlc2Mge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuXG4uZGl2T1REZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuXG4uZGl2U3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi5kaXZEYXRlQ3JlYXRlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmRpdk9UVGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdlJlbWFya3Mge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRpdk9USG91cnMge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IC04cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtbWQge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/overtime/overtime.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/overtime/overtime.page.ts ***!
  \*************************************************/
/*! exports provided: OvertimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimePage", function() { return OvertimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");








var OvertimePage = /** @class */ (function () {
    function OvertimePage(storage, router, activatedRoute, httpApi, loginService, menuCtrl, modalController, events) {
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.httpApi = httpApi;
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.modalController = modalController;
        this.events = events;
        this.loadingDone = false;
        this.noError = true;
        this.OTTypeList = [];
        this.OTArrange = [];
        this.OTType = "FIRST";
        this.listenEvents();
    }
    OvertimePage.prototype.ngOnInit = function () {
    };
    OvertimePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDone = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.getOTList();
        });
    };
    OvertimePage.prototype.listenEvents = function () {
        var _this = this;
        console.log("listen");
        this.events.subscribe('reloadDetails', function () {
            _this.ionViewWillEnter();
        });
    };
    OvertimePage.prototype.getOTList = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            var postData = {
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EMPNO: _this.empId,
                STARTDATE: "",
                ENDDATE: "",
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/OTRequest/GetOTFiled", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
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
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.results = jsonData['Value'];
                    _this.loadingDone = true;
                    console.log(_this.results);
                    _this.showList();
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    OvertimePage.prototype.showList = function () {
        var _this = this;
        this.results.forEach(function (item) {
            if (_this.OTArrange.find(function (e) { return e === item["STATUSDESC"]; })) {
            }
            else
                _this.OTArrange.push(item["STATUSDESC"]);
        });
        console.log(this.OTArrange);
        this.OTTypeList = [];
        if (this.OTArrange.includes("FOR APPROVAL")) {
            this.OTTypeList.push("FOR APPROVAL");
            this.OTType = "FOR APPROVAL";
        }
        ;
        if (this.OTArrange.includes("APPROVED")) {
            this.OTTypeList.push("APPROVED");
            if (this.OTType == "FIRST")
                this.OTType = "APPROVED";
        }
        ;
        if (this.OTArrange.includes("POSTED")) {
            this.OTTypeList.push("POSTED");
            if (this.OTType == "FIRST")
                this.OTType = "POSTED";
        }
        ;
        this.OTArrange.forEach(function (item) {
            for (var ctr = 0; ctr < _this.OTArrange.length; ctr++) {
                if (!_this.OTTypeList.includes(item)) {
                    _this.OTTypeList.push(item);
                    if (_this.OTType == "FIRST")
                        _this.OTType = item;
                }
            }
        });
        if (this.OTTypeList.length <= 0) {
            this.noError = false;
            this.errorMessage = "EMPTY";
            return;
        }
    };
    OvertimePage.prototype.setOTDetails = function (item) {
        item["PageType"] = "User";
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_OTDETAILS"], item);
        this.router.navigate(['/overtimedetails', 'overtime']);
    };
    OvertimePage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    OvertimePage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    OvertimePage.prototype.getDateYear = function (datename) {
        var date = new Date(datename);
        return date.getFullYear().toString();
    };
    OvertimePage.prototype.getLongDate = function (datename) {
        var month = this.getDateMonth(datename, 2);
        var date = this.getDateDate(datename);
        var year = this.getDateYear(datename);
        var fulldate = month + " " + date + ", " + year;
        return fulldate;
    };
    OvertimePage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    OvertimePage.prototype.openOTAdd = function () {
        this.router.navigate(['/overtimeadd', '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ]);
    };
    OvertimePage.prototype.refresh = function () {
        this.ionViewWillEnter();
    };
    OvertimePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overtime',
            template: __webpack_require__(/*! ./overtime.page.html */ "./src/app/pages/overtime/overtime.page.html"),
            styles: [__webpack_require__(/*! ./overtime.page.scss */ "./src/app/pages/overtime/overtime.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], OvertimePage);
    return OvertimePage;
}());



/***/ })

}]);
//# sourceMappingURL=overtime-overtime-module.js.map