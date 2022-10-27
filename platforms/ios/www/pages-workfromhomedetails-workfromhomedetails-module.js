(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workfromhomedetails-workfromhomedetails-module"],{

/***/ "./src/app/pages/workfromhomedetails/workfromhomedetails.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/workfromhomedetails/workfromhomedetails.module.ts ***!
  \*************************************************************************/
/*! exports provided: WorkfromhomedetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkfromhomedetailsPageModule", function() { return WorkfromhomedetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _workfromhomedetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workfromhomedetails.page */ "./src/app/pages/workfromhomedetails/workfromhomedetails.page.ts");







var routes = [
    {
        path: '',
        component: _workfromhomedetails_page__WEBPACK_IMPORTED_MODULE_6__["WorkfromhomedetailsPage"]
    }
];
var WorkfromhomedetailsPageModule = /** @class */ (function () {
    function WorkfromhomedetailsPageModule() {
    }
    WorkfromhomedetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_workfromhomedetails_page__WEBPACK_IMPORTED_MODULE_6__["WorkfromhomedetailsPage"]]
        })
    ], WorkfromhomedetailsPageModule);
    return WorkfromhomedetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/workfromhomedetails/workfromhomedetails.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/workfromhomedetails/workfromhomedetails.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons>\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        <ion-title mode=\"md\">Work From Home Details</ion-title>\n\n        <ion-button class=\"button-light actionButton\" title=\"EDIT\" slot=\"end\" *ngIf=\"attStatus == 'FOR APPROVAL'  && page != 'subsprofile'\" (click)=\"openEditAdvisory()\">\n            <ion-icon name=\"create\" mode=\"md\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"button-light actionButton\" title=\"DELETE\" slot=\"end\" *ngIf=\"attStatus == 'FOR APPROVAL'  && page != 'subsprofile'\" (click)=\"showDeleteDialog()\">\n            <ion-icon name=\"trash\" mode=\"md\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"button-light actionButton\" title=\"CANCEL\" slot=\"end\" *ngIf=\"attStatus == 'APPROVED' && page != 'subsprofile'\" (click)=\"showCancelDialog()\">\n            <ion-icon name=\"close-circle\" mode=\"md\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-header>\n<ion-content padding>\n    <ion-item class=\"classMainDetails\" lines=\"full\">\n        <ion-avatar class=\"divLeaveFrom\">\n            <div class=\"LeaveFromMonth\">\n                <!-- {{getDateMonth(requestedDate,1)}} -->\n                {{getDateDate(requestedDate)}}\n            </div>\n            <div class=\"LeaveFromDate\">\n                {{getDateDate(requestedDate)}}\n            </div>\n        </ion-avatar>\n        <ion-label text-wrap>\n            <div class=\"divLeaveDesc\">\n                <span class=\"RequestTitle\" [ngClass]=\"{'classForApprovalLabel': attStatus == 'FOR APPROVAL', \n                    'classApprovedLabel': attStatus == 'APPROVED',\n                    'classOnHoldLabel': attStatus == 'ON HOLD',\n                    'classPlannedLabel': attStatus == 'PLANNED',\n                    'classCancelledLabel': attStatus== 'CANCELLED',\n                    'classDisapprovedLabel': attStatus == 'DISAPPROVED',\n                    'classPostedLabel': attStatus == 'POSTED'}\">\n                    <!-- {{ toTitleCase(attStatus) }} -->\n                    {{ attStatus }}\n                </span>\n            </div>\n            <span class=\"RequestType\">{{ days }} days</span>\n            <br>\n            <span class=\"RequestType\">Time-in: {{ timeIn }}</span>\n            <br>\n            <span class=\"RequestType\">Time-out: {{ timeOut }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">REQUEST DATE</span>\n            <span class=\"EntryValue\" *ngIf=\"dateIn != null || dateIn != ''\">{{ requestedDate }}</span>\n            <span class=\"EntryValue\" *ngIf=\"dateIn == null || dateIn == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">DATE IN</span>\n            <span class=\"EntryValue\" *ngIf=\"dateIn != null || dateIn != ''\">{{ dateIn }}</span>\n            <span class=\"EntryValue\" *ngIf=\"dateIn == null || dateIn == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">DATE OUT</span>\n            <span class=\"EntryValue\" *ngIf=\"dateOut != null || dateOut != ''\">{{ dateOut }}</span>\n            <span class=\"EntryValue\" *ngIf=\"dateOut == null || dateOut == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">REQUEST TIME FROM</span>\n            <span class=\"EntryValue\" *ngIf=\"dateOut != null || dateOut != ''\">{{ timeFrom }}</span>\n            <span class=\"EntryValue\" *ngIf=\"dateOut == null || dateOut == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">REQUEST TIME TO</span>\n            <span class=\"EntryValue\" *ngIf=\"dateOut != null || dateOut != ''\">{{ timeTo }}</span>\n            <span class=\"EntryValue\" *ngIf=\"dateOut == null || dateOut == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">REASON</span>\n            <span class=\"EntryValue\" *ngIf=\"reason != null || reason != ''\">{{ reason }}</span>\n            <span class=\"EntryValue\" *ngIf=\"reason == null || reason == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">ACCOMPLISHMENT</span>\n            <span class=\"EntryValue\" *ngIf=\"accomplishment != null || accomplishment != ''\">{{ accomplishment }}</span>\n            <span class=\"EntryValue\" *ngIf=\"accomplishment == null || accomplishment == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">REMARKS</span>\n            <span class=\"EntryValue\" *ngIf=\"remark != null || remark != ''\">{{ remark }}</span>\n            <span class=\"EntryValue\" *ngIf=\"remark == null || remark == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">CREATED BY</span>\n            <span class=\"EntryValue\">{{ createdBy }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">CREATED DATE</span>\n            <span class=\"EntryValue\">{{ createdDate }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">PROCESSED BY</span>\n            <span class=\"EntryValue\" *ngIf=\"procBy != null || procBy != ''\">{{ procBy }}</span>\n            <span class=\"EntryValue\" *ngIf=\"procBy == null || procBy == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">PROCESSED DATE</span>\n            <span class=\"EntryValue\" *ngIf=\"procDate != null || procDate != ''\">{{ procDate }}</span>\n            <span class=\"EntryValue\" *ngIf=\"procDate == null || procDate == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/workfromhomedetails/workfromhomedetails.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/workfromhomedetails/workfromhomedetails.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  margin-left: -10px;\n}\n\nion-fab {\n  margin-bottom: 40px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n\n.sc-ion-buttons-md-h {\n  float: left;\n}\n\nion-item {\n  --padding-start: 0px !important;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\nion-label {\n  margin: 0px;\n}\n\n.actionButton {\n  color: white;\n  padding-right: 10px;\n}\n\n.classMainDetails {\n  --padding-bottom: 12px;\n}\n\n.divLeaveFrom {\n  margin-top: -60px;\n  width: 85px;\n}\n\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 5px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 15px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n  font-size: 20px;\n  margin-top: 14px;\n}\n\n.divLeaveDesc {\n  overflow: hidden;\n}\n\n.StatusDescAnimated {\n  white-space: nowrap;\n  transform: translateX(100%);\n  /* Apply animation to this element */\n  -webkit-animation: rightToLeft 15s linear infinite;\n  animation: rightToLeft 15s linear infinite;\n  color: #2a2a2a;\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n}\n\n.StatusDesc {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 17px;\n  font-family: \"RobotoMedium\";\n}\n\n.StatusDescHours {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 12px;\n  margin-bottom: 25px;\n}\n\n.RequestTitle {\n  font-size: 16px;\n}\n\n.RequestType {\n  font-size: 14px;\n}\n\n.LeaveDay {\n  color: #808080;\n  font-size: 14px;\n}\n\n.EntryName {\n  color: #676767;\n  font-size: 10px;\n  display: block;\n}\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n.EntryValueRed {\n  color: #F44336;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n@-webkit-keyframes rightToLeft {\n  0% {\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(-100%);\n  }\n}\n\n@keyframes rightToLeft {\n  0% {\n    /* Firefox bug fix */\n    /* Firefox bug fix */\n    transform: translateX(100%);\n  }\n  100% {\n    /* Firefox bug fix */\n    /* Firefox bug fix */\n    transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvd29ya2Zyb21ob21lZGV0YWlscy93b3JrZnJvbWhvbWVkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd29ya2Zyb21ob21lZGV0YWlscy93b3JrZnJvbWhvbWVkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUdBLDJCQUFBO0VBQ0Esb0NBQUE7RUFFQSxrREFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0NKOztBRFdBO0VBQ0k7SUFDSSxtQ0FBQTtFQ0FOO0VERUU7SUFDSSxvQ0FBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFDSTtJQUVJLG9CQUFBO0lBRUEsb0JBQUE7SUFDQSwyQkFBQTtFQ0ROO0VER0U7SUFFSSxvQkFBQTtJQUVBLG9CQUFBO0lBQ0EsNEJBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd29ya2Zyb21ob21lZGV0YWlscy93b3JrZnJvbWhvbWVkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NThCMkY7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG5pb24tZmFiIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5hY3Rpb25CdXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2xhc3NNYWluRGV0YWlscyB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuLmRpdkxlYXZlRnJvbSB7XG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XG4gICAgd2lkdGg6IDg1cHg7XG59XG5cbi5MZWF2ZUZyb21Nb250aCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLkxlYXZlRnJvbURhdGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzVDNUM1QztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uYnRuTWVudSB7XG4gICAgcGFkZGluZzogMCAwIDAgNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4uZGl2TGVhdmVEZXNjIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uU3RhdHVzRGVzY0FuaW1hdGVkIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAvKiBBcHBseSBhbmltYXRpb24gdG8gdGhpcyBlbGVtZW50ICovXG4gICAgLW1vei1hbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLlN0YXR1c0Rlc2Mge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5TdGF0dXNEZXNjSG91cnMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLlJlcXVlc3RUaXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uUmVxdWVzdFR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLkxlYXZlRGF5IHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5FbnRyeU5hbWUge1xuICAgIGNvbG9yOiAjNjc2NzY3O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkVudHJ5VmFsdWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5FbnRyeVZhbHVlUmVkIHtcbiAgICBjb2xvcjogI0Y0NDMzNjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAgIDAlIHtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJpZ2h0VG9MZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG5pb24tZmFiIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICBmbG9hdDogbGVmdDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFjdGlvbkJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsYXNzTWFpbkRldGFpbHMge1xuICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG4uZGl2TGVhdmVGcm9tIHtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG4gIHdpZHRoOiA4NXB4O1xufVxuXG4uTGVhdmVGcm9tTW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLkxlYXZlRnJvbURhdGUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uYnRuTWVudSB7XG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4uZGl2TGVhdmVEZXNjIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLlN0YXR1c0Rlc2NBbmltYXRlZCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAvKiBBcHBseSBhbmltYXRpb24gdG8gdGhpcyBlbGVtZW50ICovXG4gIC1tb3otYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLlN0YXR1c0Rlc2Mge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5TdGF0dXNEZXNjSG91cnMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLlJlcXVlc3RUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLlJlcXVlc3RUeXBlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uTGVhdmVEYXkge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uRW50cnlOYW1lIHtcbiAgY29sb3I6ICM2NzY3Njc7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5FbnRyeVZhbHVlIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uRW50cnlWYWx1ZVJlZCB7XG4gIGNvbG9yOiAjRjQ0MzM2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuQC1tb3ota2V5ZnJhbWVzIHJpZ2h0VG9MZWZ0IHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJpZ2h0VG9MZWZ0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/workfromhomedetails/workfromhomedetails.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/workfromhomedetails/workfromhomedetails.page.ts ***!
  \***********************************************************************/
/*! exports provided: WorkfromhomedetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkfromhomedetailsPage", function() { return WorkfromhomedetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");









var WorkfromhomedetailsPage = /** @class */ (function () {
    function WorkfromhomedetailsPage(navCtrl, storage, alertController, loadingCtrl, httpApi, loginService, router, activatedRoute) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.httpApi = httpApi;
        this.loginService = loginService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WorkfromhomedetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.page = this.activatedRoute.snapshot.paramMap.get('page');
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_WFHDETAILS"]).then(function (val) {
            _this.id = val.ID;
            _this.requestedDate = val.AttendanceRequestDate;
            _this.attStatus = val.AttendanceStatus;
            _this.attStatusCode = val.AttendanceStatusCode;
            _this.dateIn = val.DateIn;
            _this.dateOut = val.DateOut;
            _this.timeIn = val.DateTimeIn;
            _this.timeOut = val.DateTimeOut;
            _this.reason = val.AttendanceReason;
            _this.remark = val.AttendanceRemarks;
            _this.accomplishment = val.Accomplishment;
            _this.location = val.LocationDetails;
            _this.x = val.XCoordinate;
            _this.y = val.YCoordinate;
            _this.reqTime = val.REQTIME;
            _this.reasonCode = val.ReasonCode;
            _this.createdBy = val.AttendanceCreatedBy;
            _this.createdDate = val.AttendanceCreatedDate;
            _this.procBy = val.ProcessedBy;
            _this.procDate = val.ProcessedDate;
            _this.days = val.NOOFDAYS;
            _this.reqDateTo = val.REQUESTDATETO;
            _this.timeTo = val.REQUESTTIMETO.trim();
            _this.timeFrom = val.REQUESTTIMEFROM.trim();
        });
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
        });
    };
    WorkfromhomedetailsPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return this.toTitleCase(CurrentMonth[date.getMonth()]);
        else
            return CurrentMonth[date.getMonth()];
    };
    WorkfromhomedetailsPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    WorkfromhomedetailsPage.prototype.toTitleCase = function (txt) {
        return txt.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    WorkfromhomedetailsPage.prototype.openEditAdvisory = function () {
        this.router.navigate(['/workfromhomeadd',
            this.id == null ? '' : this.id,
            this.requestedDate == null ? '' : this.requestedDate,
            this.days == null ? '' : this.days,
            this.reqDateTo == null ? '' : this.reqDateTo,
            this.remark == null ? '' : this.remark,
            '',
            this.timeFrom == null ? '' : this.timeFrom,
            this.timeTo == null ? '' : this.timeTo
        ]);
    };
    WorkfromhomedetailsPage.prototype.showCancelDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancel Work From Home',
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
                                        _this.cancelAdvisory(data['remarks']);
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
    WorkfromhomedetailsPage.prototype.cancelAdvisory = function (remarks) {
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
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SESSION"]).then(function (val) {
                var postData = {
                    ID: _this.id,
                    CANCELREMARKS: remarks,
                    USER: _this.empId,
                    RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_TOKEN"]],
                    AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["VERSION"]
                };
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"]] + "/api/WorkFromHome/CancelAttendanceAdvisory", postData, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ERROR"], true, "Okay", "");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ERROR"], true, "Okay", "");
                            _this.loading.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_YES"]) {
                            _this.loading.dismiss();
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
                            }
                            _this.showDialog("ERROR!", jsonData['Message'], false, "Okay", "");
                            return;
                        }
                        _this.showDialog("DONE!", "Your changes have been saved for processing", true, "Great!", "");
                        _this.loading.dismiss();
                    })
                        .catch(function (error) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ERROR"], true, "Okay", "");
                        _this.loading.dismiss();
                    });
                });
            });
        });
    };
    WorkfromhomedetailsPage.prototype.showDeleteDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete Work From Home',
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
                                            _this.deleteAdvisory();
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
    WorkfromhomedetailsPage.prototype.deleteAdvisory = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["VERSION"],
                ID: _this.id,
                EMPNO: Number(_this.empId),
                USER: _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"]] + "/api/WorkFromHome/DeleteAttendanceAdvisory", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ERROR"], true, "Okay", "");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ERROR"], true, "Okay", "");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_YES"]) {
                        _this.loading.dismiss();
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
                        }
                        _this.showDialog("ERROR!", jsonData['Message'], false, "Okay", "");
                        return;
                    }
                    _this.showDialog("DONE!", "You have deleted this request", true, "Okay", "DELETE");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ERROR"], true, "Okay", "");
                    _this.loading.dismiss();
                });
            });
        });
    };
    WorkfromhomedetailsPage.prototype.showDialog = function (title, message, closePage, buttonText, fromFunction) {
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
                                        if (closePage) {
                                            if (fromFunction == "DELETE") {
                                                _this.router.navigate(['/main/workfromhome']);
                                            }
                                            else {
                                                _this.navCtrl.back();
                                            }
                                        }
                                    }
                                }],
                            backdropDismiss: false
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
    WorkfromhomedetailsPage.prototype.goBack = function () { this.navCtrl.back(); };
    WorkfromhomedetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workfromhomedetails',
            template: __webpack_require__(/*! ./workfromhomedetails.page.html */ "./src/app/pages/workfromhomedetails/workfromhomedetails.page.html"),
            styles: [__webpack_require__(/*! ./workfromhomedetails.page.scss */ "./src/app/pages/workfromhomedetails/workfromhomedetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], WorkfromhomedetailsPage);
    return WorkfromhomedetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-workfromhomedetails-workfromhomedetails-module.js.map