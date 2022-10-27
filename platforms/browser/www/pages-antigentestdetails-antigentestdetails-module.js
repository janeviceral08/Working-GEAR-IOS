(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-antigentestdetails-antigentestdetails-module"],{

/***/ "./src/app/pages/antigentestdetails/antigentestdetails.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/antigentestdetails/antigentestdetails.module.ts ***!
  \***********************************************************************/
/*! exports provided: AntigentestdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntigentestdetailsPageModule", function() { return AntigentestdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _antigentestdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./antigentestdetails.page */ "./src/app/pages/antigentestdetails/antigentestdetails.page.ts");







var routes = [
    {
        path: '',
        component: _antigentestdetails_page__WEBPACK_IMPORTED_MODULE_6__["AntigentestdetailsPage"]
    }
];
var AntigentestdetailsPageModule = /** @class */ (function () {
    function AntigentestdetailsPageModule() {
    }
    AntigentestdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_antigentestdetails_page__WEBPACK_IMPORTED_MODULE_6__["AntigentestdetailsPage"]]
        })
    ], AntigentestdetailsPageModule);
    return AntigentestdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/antigentestdetails/antigentestdetails.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/antigentestdetails/antigentestdetails.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-buttons>\n    <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n    <ion-title mode=\"md\">Antigen Test Details</ion-title>\n  </ion-buttons>\n</ion-header>\n\n<ion-content padding>\n  <ion-item class=\"classMainDetails\" lines=\"full\">\n    <ion-avatar class=\"divLeaveFrom\">\n      <div class=\"LeaveFromMonth\">\n        {{getDateMonth(testDate,1)}}\n      </div>\n      <div class=\"LeaveFromDate\">\n        {{getDateDate(testDate)}}\n      </div>\n    </ion-avatar>\n    <ion-label text-wrap>\n      <div class=\"divLeaveDesc\">\n        <div class=\"StatusDesc\">\n          <span>{{ result }}</span>\n        </div>\n        <div class=\"StatusDescHours\">\n          <span>{{ name }}</span>\n        </div>\n      </div>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n      <span class=\"EntryName\">TEST RESULT</span>\n      <span class=\"EntryValue\">{{ result }}</span>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n      <span class=\"EntryName\">TEST DATE</span>\n      <span class=\"EntryValue\">{{ testDate }}</span>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n      <span class=\"EntryName\">TEST TIME</span>\n      <span class=\"EntryValue\">{{ testTime }}</span>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n      <span class=\"EntryName\">NEXT TEST DATE</span>\n      <span class=\"EntryValue\">{{ nextTestDate }}</span>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n      <span class=\"EntryName\">TEST BY</span>\n      <span class=\"EntryValue\">{{ testBy }}</span>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n      <span class=\"EntryName\">TEST KIT</span>\n      <span class=\"EntryValue\">{{ testKit }}</span>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-label text-wrap>\n      <span class=\"EntryName\">ANTIGEN SWAB TIME</span>\n      <span class=\"EntryValue\">{{ interviewTime }}</span>\n    </ion-label>\n  </ion-item>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/antigentestdetails/antigentestdetails.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/antigentestdetails/antigentestdetails.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-top: 30px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  padding-top: 30px;\n  margin-left: -10px;\n}\n\n.classMainDetails {\n  --padding-bottom: 12px;\n}\n\n.divLeaveFrom {\n  margin-top: -60px;\n  width: 85px;\n}\n\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 5px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 15px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.divLeaveDesc {\n  overflow: hidden;\n}\n\n.StatusDescAnimated {\n  white-space: nowrap;\n  transform: translateX(100%);\n  /* Apply animation to this element */\n  animation: rightToLeft 15s linear infinite;\n  color: #2a2a2a;\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n}\n\n.StatusDesc {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 17px;\n  font-family: \"RobotoMedium\";\n}\n\n.StatusDescHours {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 12px;\n  margin-bottom: 25px;\n}\n\nion-item {\n  --padding-start: 0px !important;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\nion-label {\n  margin: 0px;\n}\n\n.EntryName {\n  color: #676767;\n  font-size: 10px;\n  display: block;\n}\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n.EntryValueRed {\n  color: #F44336;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW50aWdlbnRlc3RkZXRhaWxzL0M6XFxVc2Vyc1xcMDMxNzc1XFxHRUFSLXdvcmtpbmcvc3JjXFxhcHBcXHBhZ2VzXFxhbnRpZ2VudGVzdGRldGFpbHNcXGFudGlnZW50ZXN0ZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FudGlnZW50ZXN0ZGV0YWlscy9hbnRpZ2VudGVzdGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBR0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUdBLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FudGlnZW50ZXN0ZGV0YWlscy9hbnRpZ2VudGVzdGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5jbGFzc01haW5EZXRhaWxzIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG4uZGl2TGVhdmVGcm9tIHtcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgICB3aWR0aDogODVweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uTGVhdmVGcm9tRGF0ZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5kaXZMZWF2ZURlc2Mge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5TdGF0dXNEZXNjQW5pbWF0ZWQge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIC8qIEFwcGx5IGFuaW1hdGlvbiB0byB0aGlzIGVsZW1lbnQgKi9cbiAgICAtbW96LWFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uU3RhdHVzRGVzYyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLlN0YXR1c0Rlc2NIb3VycyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5cbmlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLkVudHJ5TmFtZSB7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uRW50cnlWYWx1ZSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLkVudHJ5VmFsdWVSZWQge1xuICAgIGNvbG9yOiAjRjQ0MzM2O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59IiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NThCMkY7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5jbGFzc01haW5EZXRhaWxzIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuLmRpdkxlYXZlRnJvbSB7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xuICB3aWR0aDogODVweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5TdGF0dXNEZXNjQW5pbWF0ZWQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgLyogQXBwbHkgYW5pbWF0aW9uIHRvIHRoaXMgZWxlbWVudCAqL1xuICAtbW96LWFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uU3RhdHVzRGVzY0hvdXJzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5FbnRyeU5hbWUge1xuICBjb2xvcjogIzY3Njc2NztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkVudHJ5VmFsdWUge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5FbnRyeVZhbHVlUmVkIHtcbiAgY29sb3I6ICNGNDQzMzY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/antigentestdetails/antigentestdetails.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/antigentestdetails/antigentestdetails.page.ts ***!
  \*********************************************************************/
/*! exports provided: AntigentestdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntigentestdetailsPage", function() { return AntigentestdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");









var AntigentestdetailsPage = /** @class */ (function () {
    function AntigentestdetailsPage(activatedRoute, storage, router, menuCtrl, httpApi, modalController, navCtrl, loginService, alertController, loadingCtrl, plt) {
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.httpApi = httpApi;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.loadingDone = false;
        this.noError = true;
    }
    AntigentestdetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.recordId = this.activatedRoute.snapshot.paramMap.get('recordid');
        this.loadingDone = false;
        this.plt.ready().then(function () {
            console.log('plt');
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
                _this.getAntigenTestData();
            });
        });
    };
    AntigentestdetailsPage.prototype.getAntigenTestData = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SESSION"]).then(function (val) {
            var request = {
                UserID: _this.empId,
                EmployeeId: _this.empId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["VERSION"],
                ProcessType: "employee-covid-antigen-history",
                TestResult: ""
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"]] + "/api/health/covid/antigen", request, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
                        _this.loadingDone = true;
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_YES"]) {
                        _this.loadingDone = true;
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                            case "No Available Data.":
                                _this.noError = false;
                                _this.errorMessage = "EMPTY";
                                return;
                            default:
                                _this.noError = false;
                                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
                                return;
                        }
                    }
                    console.log(jsonData);
                    var arr = jsonData['Value']['Table'];
                    arr.forEach(function (element) {
                        if (element.RecordID == _this.recordId) {
                            _this.recordId = element.RecordID;
                            _this.testDate = element.TestDate;
                            _this.result = element.TestResult;
                            _this.name = element.EmployeeFullName;
                            _this.testTime = element.TestTime;
                            _this.nextTestDate = element.NextTestDate;
                            _this.testBy = element.TestBy;
                            _this.testKit = element.KitNumber;
                            _this.interviewTime = element.InterviewTime;
                        }
                    });
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    console.log(error);
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    AntigentestdetailsPage.prototype.getDateMonth = function (datename, procedure) {
        if (!datename) {
            return '';
        }
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    AntigentestdetailsPage.prototype.getDateDate = function (datename) {
        if (!datename) {
            return '';
        }
        var date = new Date(datename);
        return date.getDate().toString();
    };
    AntigentestdetailsPage.prototype.toTitleCase = function (txt) {
        return txt.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    AntigentestdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-antigentestdetails',
            template: __webpack_require__(/*! ./antigentestdetails.page.html */ "./src/app/pages/antigentestdetails/antigentestdetails.page.html"),
            styles: [__webpack_require__(/*! ./antigentestdetails.page.scss */ "./src/app/pages/antigentestdetails/antigentestdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
    ], AntigentestdetailsPage);
    return AntigentestdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-antigentestdetails-antigentestdetails-module.js.map