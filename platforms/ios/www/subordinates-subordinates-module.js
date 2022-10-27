(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subordinates-subordinates-module"],{

/***/ "./src/app/pages/subordinates/subordinates.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/subordinates/subordinates.module.ts ***!
  \***********************************************************/
/*! exports provided: SubordinatesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubordinatesPageModule", function() { return SubordinatesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subordinates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subordinates.page */ "./src/app/pages/subordinates/subordinates.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _subordinates_page__WEBPACK_IMPORTED_MODULE_6__["SubordinatesPage"]
    }
];
var SubordinatesPageModule = /** @class */ (function () {
    function SubordinatesPageModule() {
    }
    SubordinatesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_subordinates_page__WEBPACK_IMPORTED_MODULE_6__["SubordinatesPage"]]
        })
    ], SubordinatesPageModule);
    return SubordinatesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/subordinates/subordinates.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/subordinates/subordinates.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n        <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=btnFilter slot=\"end\" color=\"light\" (click)=\"openModal()\">\n        <ion-icon slot=\"start\" name=\"search\" mode=\"md\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title mode=\"md\" slot=\"start\">Subordinates</ion-title>\n</ion-header>\n<ion-content padding class=\"classContent\" hide-header header=\"header\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card class=divCardSegment mode=\"md\">\n    <div *ngIf=\"noError; else error || subordinatesList.length <= 0; else error\">\n      <div *ngIf=\"loadingDone; else shimmer\">\n        <ion-list class=\"listSub\" mode=\"md\" *ngFor=\"let item of (results)\">\n          <ion-item button lines=\"full\" detail=\"false\" (click)=\"showSubProfile(item)\">\n            <ion-avatar>\n              <ion-icon class=\"divPhoto\" name=\"person\" mode=\"md\"></ion-icon>\n            </ion-avatar>\n            <ion-label text-wrap>\n              <div class=\"divSubordinateDesc\">\n                <ion-item button class=\"buttonMoreOptions\" lines=\"none\" detail=\"false\"\n                  (click)=\"$event.stopPropagation();MoreOptions($event, item);\">\n                  &#8942;</ion-item>\n                <span class=\"spnSubName\">{{toTitleCase(item.EMPNAME)}}</span>\n                <br>\n                <span class=\"spnSubPosition\">{{ toTitleCase(item.POSITION) }}</span>\n                <br>\n                <span class=\"spnSubDepartment\">{{ item.DEPARTMENT }}</span>\n              </div>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n\n<ng-template #shimmer>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2,3,4,5]\">\n    <div id=\"box\" class=\"shine\"></div>\n    <div class=\"divShimmer\">\n      <div id=\"lines1\" class=\"shine\"></div>\n      <div id=\"lines2\" class=\"shine\"></div>\n      <div id=\"lines2\" class=\"shine\"></div>\n    </div>\n  </ion-item>\n</ng-template>\n\n<ng-template #error>\n  <ion-item lines=\"none\">\n    <div class=\"errorbox\">\n      <ion-avatar class=\"center\">\n        <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n      <span class=\"errorMessage\">{{errorMessage}}</span>\n      <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n    </div>\n  </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/subordinates/subordinates.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/subordinates/subordinates.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: bottom;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-content {\n  --background: #F3F3F3;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\nion-icon {\n  font-size: 24px !important;\n}\n\nion-card {\n  margin-top: -5px;\n  margin-left: -5px;\n  margin-right: -5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-item:last-child {\n  --border-width: 0px 0 0.1px 0 !important;\n}\n\n.sc-ion-back-button-md-h {\n  color: white;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.contentClass {\n  --background: #F5F5F5;\n}\n\n.listSub {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.divSubordinateDesc {\n  margin-left: 10px;\n  padding-bottom: 5px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.divPhoto {\n  padding-left: 10px;\n  margin-top: -5px;\n  height: 40px;\n  width: 40px;\n  color: #656464;\n}\n\n.spnSubName {\n  color: #2a2a2a;\n  font-size: 14px;\n  padding-left: 30px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 85%;\n  font-family: \"RobotoMedium\";\n}\n\n.spnSubPosition {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  color: #808080;\n}\n\n.spnSubDepartment {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  color: #808080;\n}\n\n.buttonMoreOptions {\n  font-size: 30px;\n  float: right;\n  color: #808080;\n  padding-top: 10px;\n  --padding-start: 0px !important;\n  --inner-padding-end: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvc3Vib3JkaW5hdGVzL3N1Ym9yZGluYXRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1Ym9yZGluYXRlcy9zdWJvcmRpbmF0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURJQTtFQUNJLHFCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxlQUFBO0VBQ0Esa0NBQUE7QUNGSjs7QURLQTtFQUNJLDBCQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtBQ0ZKOztBREtBO0VBQ0ksd0NBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSSxxQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3Vib3JkaW5hdGVzL3N1Ym9yZGluYXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nJykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAvLyBoZWlnaHQ6IDEwMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjNGM0YzO1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvL21hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggMCAwLjFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5zYy1pb24tYmFjay1idXR0b24tbWQtaCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuTWVudSB7XG4gICAgcGFkZGluZzogMCAwIDAgNXB4O1xufVxuXG4uY29udGVudENsYXNzIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGNUY1RjU7XG59XG5cbi5saXN0U3ViIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5kaXZTdWJvcmRpbmF0ZURlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGl2UGhvdG8ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBjb2xvcjogIzY1NjQ2NDtcbn1cblxuLnNwblN1Yk5hbWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5zcG5TdWJQb3NpdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjODA4MDgwO1xufVxuXG4uc3BuU3ViRGVwYXJ0bWVudCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjODA4MDgwO1xufVxuXG4uYnV0dG9uTW9yZU9wdGlvbnMge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGM0YzRjM7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAwIDAuMXB4IDAgIWltcG9ydGFudDtcbn1cblxuLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZC1oIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuTWVudSB7XG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNvbnRlbnRDbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cblxuLmxpc3RTdWIge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uZGl2U3Vib3JkaW5hdGVEZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGl2UGhvdG8ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGNvbG9yOiAjNjU2NDY0O1xufVxuXG4uc3BuU3ViTmFtZSB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA4NSU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uc3BuU3ViUG9zaXRpb24ge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5zcG5TdWJEZXBhcnRtZW50IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG4uYnV0dG9uTW9yZU9wdGlvbnMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/subordinates/subordinates.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/subordinates/subordinates.page.ts ***!
  \*********************************************************/
/*! exports provided: SubordinatesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubordinatesPage", function() { return SubordinatesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");









var SubordinatesPage = /** @class */ (function () {
    function SubordinatesPage(storage, menuCtrl, modalController, router, loginService, alertController, actionSheetController, platform, httpApi) {
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.modalController = modalController;
        this.router = router;
        this.loginService = loginService;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.httpApi = httpApi;
        this.loadingDone = false;
        this.noError = true;
        this.subordinateID = '';
        this.subordinateName = '';
        this.isAllEmployee = false;
        this.subordinatesList = [];
        this.subordinatesModal = { ShowAll: this.isAllEmployee };
    }
    SubordinatesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingDone = false;
        this.noError = true;
        this.results = [];
        this.tempResult = [];
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.getSubordinatesAll();
            _this.getSubordinates();
        });
    };
    SubordinatesPage.prototype.getSubordinatesAll = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                UserID: _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/GetSubordinates/GetSubordinatesList?subordinateID=&subordinateName=&isAllEmployee=true", request, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SUBORDINATES"], jsonData['Value']);
                });
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/GetSubordinates/GetSubordinatesListForOT", request, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SUBORDINATESFOROT"], jsonData['Value']);
                });
            });
        });
    };
    SubordinatesPage.prototype.getSubordinates = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                UserID: _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                var uri = value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/GetSubordinates/GetSubordinatesList?subordinateID=" + _this.subordinateID + "&subordinateName=" + _this.subordinateName + "&isAllEmployee=" + _this.isAllEmployee;
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
                        return;
                    }
                    _this.tempResult = jsonData['Value'];
                    if (_this.tempResult.length <= 0) {
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
    SubordinatesPage.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    SubordinatesPage.prototype.MoreOptions = function (event, item) {
        var _this = this;
        event.stopPropagation();
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SUBORDINATESFOROT"]).then(function (val) {
            var foundOT = false;
            val.forEach(function (sub) {
                if (sub["EMPLOYEEID"] == item.EMPLOYEEID) {
                    foundOT = true;
                }
            });
            if (foundOT) {
                _this.showActionsWithOT(item);
            }
            else {
                _this.showActions(item);
            }
        });
    };
    SubordinatesPage.prototype.showActions = function (subordinate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(subordinate);
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Options for ' + subordinate.EMPNAME + ' :',
                                buttons: [{
                                        text: 'View Personal Info',
                                        icon: 'list-box',
                                        handler: function () {
                                            _this.router.navigate(['/', 'personalinformation',
                                                'subordinate',
                                                subordinate.EMPLOYEEID,
                                                subordinate.EMPNAME,
                                                subordinate.POSITION]);
                                        }
                                    }, {
                                        text: 'Request Leave',
                                        icon: 'list-box',
                                        handler: function () {
                                            _this.router.navigate(['/leaveadd',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                subordinate.EMPLOYEEID]);
                                        }
                                    }, {
                                        text: 'Request Attendance Advisory',
                                        icon: 'bookmarks',
                                        handler: function () {
                                            _this.router.navigate(['/advisoryadd',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                subordinate.EMPLOYEEID,
                                                '']);
                                        }
                                    }, {
                                        text: 'Request Work From Home',
                                        icon: 'briefcase',
                                        handler: function () {
                                            _this.router.navigate(['/workfromhomeadd',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                subordinate.EMPLOYEEID,
                                                '',
                                                '']);
                                        }
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
    SubordinatesPage.prototype.showActionsWithOT = function (subordinate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(subordinate);
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Options for ' + subordinate.EMPNAME + ' :',
                                buttons: [{
                                        text: 'View Personal Info',
                                        icon: 'list-box',
                                        handler: function () {
                                            _this.router.navigate(['/', 'personalinformation',
                                                'subordinate',
                                                subordinate.EMPLOYEEID,
                                                subordinate.EMPNAME,
                                                subordinate.POSITION]);
                                        }
                                    }, {
                                        text: 'Request Leave',
                                        icon: 'list-box',
                                        handler: function () {
                                            _this.router.navigate(['/leaveadd',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                subordinate.EMPLOYEEID]);
                                        }
                                    }, {
                                        text: 'Request Attendance Advisory',
                                        icon: 'bookmarks',
                                        handler: function () {
                                            _this.router.navigate(['/advisoryadd',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                subordinate.EMPLOYEEID,
                                                '']);
                                        }
                                    },
                                    {
                                        text: 'Request Overtime',
                                        icon: 'alarm',
                                        handler: function () {
                                            _this.router.navigate(['/overtimeadd', '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                subordinate.EMPLOYEEID
                                            ]);
                                        }
                                    },
                                    {
                                        text: 'Request Work From Home',
                                        icon: 'briefcase',
                                        handler: function () {
                                            _this.router.navigate(['/workfromhomeadd',
                                                '',
                                                '',
                                                '',
                                                '',
                                                '',
                                                subordinate.EMPLOYEEID]);
                                        }
                                    },
                                    {
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
    SubordinatesPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    SubordinatesPage.prototype.showExitDialog = function () {
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
    SubordinatesPage.prototype.ionViewWillLeave = function () {
        this.showExitDialog();
    };
    SubordinatesPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    SubordinatesPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        this.subordinatesModal["EmployeeId"] = this.subordinateID;
                        this.subordinatesModal["EmpName"] = this.subordinateName;
                        this.subordinatesModal["ShowAll"] = this.isAllEmployee;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_8__["FilterMenuComponent"],
                                cssClass: 'modalFilterMenu',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "Subordinates",
                                    data: this.subordinatesModal
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.subordinateID = detail.data['empNumber'];
                                    _this.subordinateName = detail.data['empName'];
                                    _this.isAllEmployee = detail.data['showAll'];
                                    _this.loadingDone = false;
                                    _this.noError = true;
                                    _this.getSubordinates();
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
    SubordinatesPage.prototype.refresh = function (event) {
        this.event = event;
        this.ngOnInit();
    };
    SubordinatesPage.prototype.showSubProfile = function (item) {
        console.log(item);
        this.router.navigate(['/subprofile',
            item.EMPLOYEEID,
            item.EMPNAME,
            item.POSITION,
            item.DEPARTMENT]);
    };
    SubordinatesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subordinates',
            template: __webpack_require__(/*! ./subordinates.page.html */ "./src/app/pages/subordinates/subordinates.page.html"),
            styles: [__webpack_require__(/*! ./subordinates.page.scss */ "./src/app/pages/subordinates/subordinates.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]])
    ], SubordinatesPage);
    return SubordinatesPage;
}());



/***/ })

}]);
//# sourceMappingURL=subordinates-subordinates-module.js.map