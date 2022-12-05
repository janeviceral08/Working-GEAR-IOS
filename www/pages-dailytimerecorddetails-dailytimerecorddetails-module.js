(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dailytimerecorddetails-dailytimerecorddetails-module"],{

/***/ "./src/app/pages/dailytimerecorddetails/dailytimerecorddetails.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dailytimerecorddetails/dailytimerecorddetails.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DailytimerecorddetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailytimerecorddetailsPageModule", function() { return DailytimerecorddetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dailytimerecorddetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dailytimerecorddetails.page */ "./src/app/pages/dailytimerecorddetails/dailytimerecorddetails.page.ts");







var routes = [
    {
        path: '',
        component: _dailytimerecorddetails_page__WEBPACK_IMPORTED_MODULE_6__["DailytimerecorddetailsPage"]
    }
];
var DailytimerecorddetailsPageModule = /** @class */ (function () {
    function DailytimerecorddetailsPageModule() {
    }
    DailytimerecorddetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dailytimerecorddetails_page__WEBPACK_IMPORTED_MODULE_6__["DailytimerecorddetailsPage"]]
        })
    ], DailytimerecorddetailsPageModule);
    return DailytimerecorddetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dailytimerecorddetails/dailytimerecorddetails.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dailytimerecorddetails/dailytimerecorddetails.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons>\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        <ion-title mode=\"md\">Daily Time Record Details</ion-title>\n    </ion-buttons>\n</ion-header>\n<ion-content padding>\n    <ion-item class=\"classMainDetails\" lines=\"full\">\n        <ion-avatar class=\"divLeaveFrom\">\n            <div class=\"LeaveFromMonth\">\n                {{getDateMonth(dateIn,1)}}\n            </div>\n            <div class=\"LeaveFromDate\">\n                {{getDateDate(dateIn)}}\n            </div>\n        </ion-avatar>\n        <ion-label text-wrap>\n            <div class=\"divLeaveDesc\">\n                <div class=\"StatusDesc\">\n                    <span>{{day}}</span>\n                </div>\n                <div class=\"StatusDescHours\">\n                    <span *ngIf=\"hours != ''\">{{hours}} hour(s)</span>\n                    <span *ngIf=\"hours == ''\">0 Hour</span>\n                </div>\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">DATE IN</span>\n            <span class=\"EntryValue\">{{ dateIn }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">TIME IN</span>\n            <span class=\"EntryValue\">{{ timeIn }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">DATE OUT</span>\n            <span class=\"EntryValue\">{{ dateOut }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">TIME OUT</span>\n            <span class=\"EntryValue\">{{ timeOut }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">LB IN</span>\n            <span class=\"EntryValue\">{{ lbIn }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">LB OUT</span>\n            <span class=\"EntryValue\">{{ lbOut }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">CB IN</span>\n            <span class=\"EntryValue\">{{ cbIn }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">CB OUT</span>\n            <span class=\"EntryValue\">{{ cbOut }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">SHIFT SCHEDULE</span>\n            <span class=\"EntryValue\">{{ shiftSchedule }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">ATTENDANCE CODE</span>\n            <span class=\"EntryValue\">{{ attendanceCode }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">ABSENT</span>\n            <span class=\"EntryValue\">{{ absentFlag }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">SPECIAL HOLIDAY</span>\n            <span class=\"EntryValue\">{{ specialHoliday }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">OTH</span>\n            <span class=\"EntryValue\">{{ oth }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">NTH</span>\n            <span class=\"EntryValue\">{{ nth }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">ONTH</span>\n            <span class=\"EntryValue\">{{ onth }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">ATD</span>\n            <span class=\"EntryValue\">{{ atd }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">LTM</span>\n            <span class=\"EntryValue\">{{ ltm }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">UTH</span>\n            <span class=\"EntryValue\">{{ utm }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">BLTM</span>\n            <span class=\"EntryValue\">{{ bltm }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">LEAVE TYPE</span>\n            <span class=\"EntryValue\">{{ leaveType }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">ADVISORY TYPE</span>\n            <span class=\"EntryValue\">{{ advisoryType }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">OT TIME</span>\n            <span class=\"EntryValue\">{{ otTime }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">APPROVED OT HOURS</span>\n            <span class=\"EntryValue\">{{ approvedOT }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">APPLIED OT HOURS</span>\n            <span class=\"EntryValue\">{{ appliedOT }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"empSection != 'OFFC'\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">REMARK</span>\n            <span class=\"EntryValue\">{{ remark }}</span>\n        </ion-label>\n    </ion-item>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/dailytimerecorddetails/dailytimerecorddetails.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dailytimerecorddetails/dailytimerecorddetails.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-top: 30px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  padding-top: 30px;\n  margin-left: -10px;\n}\n\nion-fab {\n  margin-bottom: 40px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n\n.sc-ion-buttons-md-h {\n  float: left;\n}\n\nion-item {\n  --padding-start: 0px !important;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\nion-label {\n  margin: 0px;\n}\n\n.actionButton {\n  color: white;\n  padding-top: 30px;\n  padding-right: 10px;\n}\n\n.classMainDetails {\n  --padding-bottom: 12px;\n}\n\n.divLeaveFrom {\n  margin-top: -60px;\n  width: 85px;\n}\n\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 5px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 15px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n  font-size: 20px;\n  margin-top: 14px;\n}\n\n.divLeaveDesc {\n  overflow: hidden;\n}\n\n.StatusDescAnimated {\n  white-space: nowrap;\n  transform: translateX(100%);\n  /* Apply animation to this element */\n  animation: rightToLeft 15s linear infinite;\n  color: #2a2a2a;\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n}\n\n.StatusDesc {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 17px;\n  font-family: \"RobotoMedium\";\n}\n\n.StatusDescHours {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 12px;\n  margin-bottom: 25px;\n}\n\n.RequestType {\n  font-size: 14px;\n}\n\n.LeaveDay {\n  color: #808080;\n  font-size: 14px;\n}\n\n.EntryName {\n  color: #676767;\n  font-size: 10px;\n  display: block;\n}\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n.EntryValueRed {\n  color: #F44336;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n@keyframes rightToLeft {\n  0% {\n    /* Firefox bug fix */\n    /* Firefox bug fix */\n    transform: translateX(100%);\n  }\n  100% {\n    /* Firefox bug fix */\n    /* Firefox bug fix */\n    transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFpbHl0aW1lcmVjb3JkZGV0YWlscy9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUldvcmtpbmcyL3NyY1xcYXBwXFxwYWdlc1xcZGFpbHl0aW1lcmVjb3JkZGV0YWlsc1xcZGFpbHl0aW1lcmVjb3JkZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RhaWx5dGltZXJlY29yZGRldGFpbHMvZGFpbHl0aW1lcmVjb3JkZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBR0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUdBLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0NKOztBRG9CQTtFQUNJO0lBRUksb0JBQUE7SUFFQSxvQkFBQTtJQUNBLDJCQUFBO0VDRE47RURHRTtJQUVJLG9CQUFBO0lBRUEsb0JBQUE7SUFDQSw0QkFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYWlseXRpbWVyZWNvcmRkZXRhaWxzL2RhaWx5dGltZXJlY29yZGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbmlvbi1mYWIge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtaCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmFjdGlvbkJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jbGFzc01haW5EZXRhaWxzIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG4uZGl2TGVhdmVGcm9tIHtcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgICB3aWR0aDogODVweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uTGVhdmVGcm9tRGF0ZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5idG5NZW51IHtcbiAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5kaXZMZWF2ZURlc2Mge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5TdGF0dXNEZXNjQW5pbWF0ZWQge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIC8qIEFwcGx5IGFuaW1hdGlvbiB0byB0aGlzIGVsZW1lbnQgKi9cbiAgICAtbW96LWFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uU3RhdHVzRGVzYyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLlN0YXR1c0Rlc2NIb3VycyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uUmVxdWVzdFR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLkxlYXZlRGF5IHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5FbnRyeU5hbWUge1xuICAgIGNvbG9yOiAjNjc2NzY3O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkVudHJ5VmFsdWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5FbnRyeVZhbHVlUmVkIHtcbiAgICBjb2xvcjogI0Y0NDMzNjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAgIDAlIHtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJpZ2h0VG9MZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuaW9uLWZhYiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5hY3Rpb25CdXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2xhc3NNYWluRGV0YWlscyB7XG4gIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5kaXZMZWF2ZUZyb20ge1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgd2lkdGg6IDg1cHg7XG59XG5cbi5MZWF2ZUZyb21Nb250aCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uTGVhdmVGcm9tRGF0ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICM1QzVDNUM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5idG5NZW51IHtcbiAgcGFkZGluZzogMCAwIDAgNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5kaXZMZWF2ZURlc2Mge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uU3RhdHVzRGVzY0FuaW1hdGVkIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIC8qIEFwcGx5IGFuaW1hdGlvbiB0byB0aGlzIGVsZW1lbnQgKi9cbiAgLW1vei1hbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uU3RhdHVzRGVzYyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLlN0YXR1c0Rlc2NIb3VycyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uUmVxdWVzdFR5cGUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5MZWF2ZURheSB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5FbnRyeU5hbWUge1xuICBjb2xvcjogIzY3Njc2NztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkVudHJ5VmFsdWUge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5FbnRyeVZhbHVlUmVkIHtcbiAgY29sb3I6ICNGNDQzMzY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpZ2h0VG9MZWZ0IHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dailytimerecorddetails/dailytimerecorddetails.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dailytimerecorddetails/dailytimerecorddetails.page.ts ***!
  \*****************************************************************************/
/*! exports provided: DailytimerecorddetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailytimerecorddetailsPage", function() { return DailytimerecorddetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var DailytimerecorddetailsPage = /** @class */ (function () {
    function DailytimerecorddetailsPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    DailytimerecorddetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_DTRDETAILS"]).then(function (val) {
            _this.dateIn = val.DTR_date;
            _this.day = val.Att_Code;
            _this.timeIn = val.Am_In;
            _this.dateOut = val.DTR_date_Out;
            _this.timeOut = val.Am_Out;
            _this.lbIn = val.BK_IN;
            _this.lbOut = val.BK_OUT;
            _this.cbIn = val.CB_IN;
            _this.cbOut = val.CB_OUT;
            _this.hours = val.Rth;
            _this.shiftSchedule = val.ShiftSchedule;
            _this.attendanceCode = val.AttendanceCode;
            _this.absentFlag = val.AbsentFlag;
            _this.specialHoliday = val.SpecialHolidayFlag;
            _this.oth = val.OTH;
            _this.nth = val.NTH;
            _this.onth = val.ONTH;
            _this.atd = val.ATD;
            _this.ltm = val.LTM;
            _this.uth = val.UTH;
            _this.bltm = val.BLTM;
            _this.leaveType = val.Leave_rem;
            _this.advisoryType = val.AttAdv_rem;
            _this.otTime = val.OT_rem;
            _this.approvedOT = val.ApprovedOTHours;
            _this.appliedOT = val.AppliedOTHours;
            _this.remark = val.AttendanceRemark;
        });
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_EMPDETAILS"]).then(function (val) {
            _this.empSection = val['0']['Section'];
        });
    };
    DailytimerecorddetailsPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    DailytimerecorddetailsPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    DailytimerecorddetailsPage.prototype.goBack = function () { this.navCtrl.back(); };
    DailytimerecorddetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dailytimerecorddetails',
            template: __webpack_require__(/*! ./dailytimerecorddetails.page.html */ "./src/app/pages/dailytimerecorddetails/dailytimerecorddetails.page.html"),
            styles: [__webpack_require__(/*! ./dailytimerecorddetails.page.scss */ "./src/app/pages/dailytimerecorddetails/dailytimerecorddetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], DailytimerecorddetailsPage);
    return DailytimerecorddetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dailytimerecorddetails-dailytimerecorddetails-module.js.map