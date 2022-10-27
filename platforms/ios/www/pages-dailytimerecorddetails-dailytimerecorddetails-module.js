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

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-top: 30px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  padding-top: 30px;\n  margin-left: -10px;\n}\n\nion-fab {\n  margin-bottom: 40px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n\n.sc-ion-buttons-md-h {\n  float: left;\n}\n\nion-item {\n  --padding-start: 0px !important;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\nion-label {\n  margin: 0px;\n}\n\n.actionButton {\n  color: white;\n  padding-top: 30px;\n  padding-right: 10px;\n}\n\n.classMainDetails {\n  --padding-bottom: 12px;\n}\n\n.divLeaveFrom {\n  margin-top: -60px;\n  width: 85px;\n}\n\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 5px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 15px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n  font-size: 20px;\n  margin-top: 14px;\n}\n\n.divLeaveDesc {\n  overflow: hidden;\n}\n\n.StatusDescAnimated {\n  white-space: nowrap;\n  transform: translateX(100%);\n  /* Apply animation to this element */\n  -webkit-animation: rightToLeft 15s linear infinite;\n  animation: rightToLeft 15s linear infinite;\n  color: #2a2a2a;\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n}\n\n.StatusDesc {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 17px;\n  font-family: \"RobotoMedium\";\n}\n\n.StatusDescHours {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 12px;\n  margin-bottom: 25px;\n}\n\n.RequestType {\n  font-size: 14px;\n}\n\n.LeaveDay {\n  color: #808080;\n  font-size: 14px;\n}\n\n.EntryName {\n  color: #676767;\n  font-size: 10px;\n  display: block;\n}\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n.EntryValueRed {\n  color: #F44336;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n@-webkit-keyframes rightToLeft {\n  0% {\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(-100%);\n  }\n}\n\n@keyframes rightToLeft {\n  0% {\n    /* Firefox bug fix */\n    /* Firefox bug fix */\n    transform: translateX(100%);\n  }\n  100% {\n    /* Firefox bug fix */\n    /* Firefox bug fix */\n    transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvZGFpbHl0aW1lcmVjb3JkZGV0YWlscy9kYWlseXRpbWVyZWNvcmRkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFpbHl0aW1lcmVjb3JkZGV0YWlscy9kYWlseXRpbWVyZWNvcmRkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFHQSwyQkFBQTtFQUNBLG9DQUFBO0VBRUEsa0RBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURXQTtFQUNJO0lBQ0ksbUNBQUE7RUNBTjtFREVFO0lBQ0ksb0NBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0k7SUFFSSxvQkFBQTtJQUVBLG9CQUFBO0lBQ0EsMkJBQUE7RUNETjtFREdFO0lBRUksb0JBQUE7SUFFQSxvQkFBQTtJQUNBLDRCQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhaWx5dGltZXJlY29yZGRldGFpbHMvZGFpbHl0aW1lcmVjb3JkZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuaW9uLWZhYiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG5pb24tbGFiZWwge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4uYWN0aW9uQnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsYXNzTWFpbkRldGFpbHMge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5kaXZMZWF2ZUZyb20ge1xuICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgIHdpZHRoOiA4NXB4O1xufVxuXG4uTGVhdmVGcm9tTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmJ0bk1lbnUge1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLlN0YXR1c0Rlc2NBbmltYXRlZCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLyogQXBwbHkgYW5pbWF0aW9uIHRvIHRoaXMgZWxlbWVudCAqL1xuICAgIC1tb3otYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uU3RhdHVzRGVzY0hvdXJzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5SZXF1ZXN0VHlwZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uTGVhdmVEYXkge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLkVudHJ5TmFtZSB7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uRW50cnlWYWx1ZSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLkVudHJ5VmFsdWVSZWQge1xuICAgIGNvbG9yOiAjRjQ0MzM2O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbkAtbW96LWtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gICAgMCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAgIDAlIHtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG5pb24tZmFiIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICBmbG9hdDogbGVmdDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFjdGlvbkJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jbGFzc01haW5EZXRhaWxzIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuLmRpdkxlYXZlRnJvbSB7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xuICB3aWR0aDogODVweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmJ0bk1lbnUge1xuICBwYWRkaW5nOiAwIDAgMCA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5TdGF0dXNEZXNjQW5pbWF0ZWQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgLyogQXBwbHkgYW5pbWF0aW9uIHRvIHRoaXMgZWxlbWVudCAqL1xuICAtbW96LWFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uU3RhdHVzRGVzY0hvdXJzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5SZXF1ZXN0VHlwZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLkxlYXZlRGF5IHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLkVudHJ5TmFtZSB7XG4gIGNvbG9yOiAjNjc2NzY3O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uRW50cnlWYWx1ZSB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLkVudHJ5VmFsdWVSZWQge1xuICBjb2xvcjogI0Y0NDMzNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbkAtbW96LWtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufSJdfQ== */"

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