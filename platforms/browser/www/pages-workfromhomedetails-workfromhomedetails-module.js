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

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  margin-left: -10px;\n}\n\nion-fab {\n  margin-bottom: 40px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n\n.sc-ion-buttons-md-h {\n  float: left;\n}\n\nion-item {\n  --padding-start: 0px !important;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\nion-label {\n  margin: 0px;\n}\n\n.actionButton {\n  color: white;\n  padding-right: 10px;\n}\n\n.classMainDetails {\n  --padding-bottom: 12px;\n}\n\n.divLeaveFrom {\n  margin-top: -60px;\n  width: 85px;\n}\n\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 5px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 15px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n  font-size: 20px;\n  margin-top: 14px;\n}\n\n.divLeaveDesc {\n  overflow: hidden;\n}\n\n.StatusDescAnimated {\n  white-space: nowrap;\n  transform: translateX(100%);\n  /* Apply animation to this element */\n  animation: rightToLeft 15s linear infinite;\n  color: #2a2a2a;\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n}\n\n.StatusDesc {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 17px;\n  font-family: \"RobotoMedium\";\n}\n\n.StatusDescHours {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 12px;\n  margin-bottom: 25px;\n}\n\n.RequestTitle {\n  font-size: 16px;\n}\n\n.RequestType {\n  font-size: 14px;\n}\n\n.LeaveDay {\n  color: #808080;\n  font-size: 14px;\n}\n\n.EntryName {\n  color: #676767;\n  font-size: 10px;\n  display: block;\n}\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n.EntryValueRed {\n  color: #F44336;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n@keyframes rightToLeft {\n  0% {\n    /* Firefox bug fix */\n    /* Firefox bug fix */\n    transform: translateX(100%);\n  }\n  100% {\n    /* Firefox bug fix */\n    /* Firefox bug fix */\n    transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya2Zyb21ob21lZGV0YWlscy9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUldvcmtpbmcyL3NyY1xcYXBwXFxwYWdlc1xcd29ya2Zyb21ob21lZGV0YWlsc1xcd29ya2Zyb21ob21lZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dvcmtmcm9taG9tZWRldGFpbHMvd29ya2Zyb21ob21lZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFHQSwyQkFBQTtFQUNBLG9DQUFBO0VBR0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FEb0JBO0VBQ0k7SUFFSSxvQkFBQTtJQUVBLG9CQUFBO0lBQ0EsMkJBQUE7RUNETjtFREdFO0lBRUksb0JBQUE7SUFFQSxvQkFBQTtJQUNBLDRCQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmtmcm9taG9tZWRldGFpbHMvd29ya2Zyb21ob21lZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuaW9uLWZhYiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuXG5pb24tbGFiZWwge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4uYWN0aW9uQnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsYXNzTWFpbkRldGFpbHMge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5kaXZMZWF2ZUZyb20ge1xuICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgIHdpZHRoOiA4NXB4O1xufVxuXG4uTGVhdmVGcm9tTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmJ0bk1lbnUge1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLlN0YXR1c0Rlc2NBbmltYXRlZCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLyogQXBwbHkgYW5pbWF0aW9uIHRvIHRoaXMgZWxlbWVudCAqL1xuICAgIC1tb3otYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uU3RhdHVzRGVzY0hvdXJzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5SZXF1ZXN0VGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLlJlcXVlc3RUeXBlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5MZWF2ZURheSB7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uRW50cnlOYW1lIHtcbiAgICBjb2xvcjogIzY3Njc2NztcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5FbnRyeVZhbHVlIHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uRW50cnlWYWx1ZVJlZCB7XG4gICAgY29sb3I6ICNGNDQzMzY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuQC1tb3ota2V5ZnJhbWVzIHJpZ2h0VG9MZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJpZ2h0VG9MZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gICAgMCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG59IiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NThCMkY7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuaW9uLWZhYiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5hY3Rpb25CdXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jbGFzc01haW5EZXRhaWxzIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuLmRpdkxlYXZlRnJvbSB7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xuICB3aWR0aDogODVweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmJ0bk1lbnUge1xuICBwYWRkaW5nOiAwIDAgMCA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5TdGF0dXNEZXNjQW5pbWF0ZWQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgLyogQXBwbHkgYW5pbWF0aW9uIHRvIHRoaXMgZWxlbWVudCAqL1xuICAtbW96LWFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uU3RhdHVzRGVzY0hvdXJzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5SZXF1ZXN0VGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5SZXF1ZXN0VHlwZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLkxlYXZlRGF5IHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLkVudHJ5TmFtZSB7XG4gIGNvbG9yOiAjNjc2NzY3O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uRW50cnlWYWx1ZSB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLkVudHJ5VmFsdWVSZWQge1xuICBjb2xvcjogI0Y0NDMzNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbkAtbW96LWtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufSJdfQ== */"

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