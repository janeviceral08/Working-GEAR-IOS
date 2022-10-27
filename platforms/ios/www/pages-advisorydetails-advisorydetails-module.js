(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advisorydetails-advisorydetails-module"],{

/***/ "./src/app/pages/advisorydetails/advisorydetails.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/advisorydetails/advisorydetails.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdvisorydetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorydetailsPageModule", function() { return AdvisorydetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _advisorydetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advisorydetails.page */ "./src/app/pages/advisorydetails/advisorydetails.page.ts");
/* harmony import */ var _component_submit_approval_submit_approval_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/submit-approval/submit-approval.module */ "./src/app/component/submit-approval/submit-approval.module.ts");








var routes = [
    {
        path: '',
        component: _advisorydetails_page__WEBPACK_IMPORTED_MODULE_6__["AdvisorydetailsPage"]
    }
];
var AdvisorydetailsPageModule = /** @class */ (function () {
    function AdvisorydetailsPageModule() {
    }
    AdvisorydetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_submit_approval_submit_approval_module__WEBPACK_IMPORTED_MODULE_7__["SubmitApprovalComponentModule"]
            ],
            declarations: [_advisorydetails_page__WEBPACK_IMPORTED_MODULE_6__["AdvisorydetailsPage"]]
        })
    ], AdvisorydetailsPageModule);
    return AdvisorydetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/advisorydetails/advisorydetails.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/advisorydetails/advisorydetails.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons>\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        <!-- <ion-button slot=\"start\" (click)=\"back()\" class=\"toolbarButtons\">\n      <ion-icon class=\"btnMenu\" color=\"light\" name=\"arrow-back\"></ion-icon>\n    </ion-button> -->\n        <ion-title mode=\"md\">Advisory Details</ion-title>\n        <ion-button class=\"button-light actionButton\" title=\"SUBMIT\" slot=\"end\" *ngIf=\"leaveStatus == 'PLANNED'\" (click)=\"showSubmitDialog()\">\n            <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"button-light actionButton\" title=\"EDIT\" slot=\"end\" *ngIf=\"advisoryStatus == 'FOR APPROVAL' && isUserAdvisory\" (click)=\"openEditAdvisory()\">\n            <ion-icon name=\"create\" mode=\"md\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"button-light actionButton\" title=\"DELETE\" slot=\"end\" *ngIf=\"advisoryStatus == 'FOR APPROVAL' && isUserAdvisory\" (click)=\"showDeleteDialog()\">\n            <ion-icon name=\"trash\" mode=\"md\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"button-light actionButton\" title=\"CANCEL\" slot=\"end\" *ngIf=\"advisoryStatus == 'APPROVED' && isUserAdvisory\" (click)=\"showCancelDialog()\">\n            <ion-icon name=\"close-circle\" mode=\"md\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"button-light actionButton\" title=\"EDIT\" slot=\"end\" *ngIf=\"isSubAdvisory && advisoryStatus == '1'\" (click)=\"openEditAdvisory()\">\n            <ion-icon name=\"create\" mode=\"md\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"button-light actionButton\" title=\"CANCEL\" slot=\"end\" *ngIf=\"isSubAdvisory && advisoryStatus == '1'\" (click)=\"showCancelDialog()\">\n            <ion-icon name=\"close-circle\" mode=\"md\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-header>\n<ion-content padding>\n    <div *ngFor=\"let item of (results)\">\n        <div *ngIf=\"id == item.ID \" >\n            {{ setItem(item) }}\n            <ion-item class=\"classMainDetails\" lines=\"full\">\n                <ion-avatar class=\"divLeaveFrom\">\n                    <div class=\"LeaveFromMonth\">\n                        {{getDateMonth(item.REQUESTDATE,1, item)}}\n                    </div>\n                    <div class=\"LeaveFromDate\">\n                        {{getDateDate(item.REQUESTDATE)}}\n                    </div>\n                </ion-avatar>\n                <ion-label text-wrap>\n                    <div class=\"divLeaveDesc\">\n                        <div class=\"StatusDesc\">\n                            <span *ngIf=\"isUserAdvisory\">{{ toTitleCase(item.REQUESTTYPEDESC) }}</span>\n                            <span *ngIf=\"isForApproval\">{{ item.EMPL_NAME }}</span>\n                        </div>\n                        <!-- <div class=\"StatusDesc\" *ngIf=\"(type == 'userleave' && item.LEAVEDESC.toString().length < 16) || (type == 'forapproval' && item.EMPL_NAME.toString().length < 16)\">\n              <span *ngIf=\"type == 'userleave'\">{{ toTitleCase(item.LEAVEDESC) }}</span>\n              <span *ngIf=\"type == 'forapproval'\">{{ item.EMPL_NAME }}</span>\n            </div>\n            <div class=\"StatusDescAnimated\" *ngIf=\"(type == 'userleave' && item.LEAVEDESC.toString().length >= 16) || (type == 'forapproval' && item.EMPL_NAME.toString().length >= 16)\">\n              <span *ngIf=\"type == 'userleave'\">{{ toTitleCase(item.LEAVEDESC) }}</span>\n              <span *ngIf=\"type == 'forapproval'\">{{ item.EMPL_NAME.length }}</span>\n            </div> -->\n                        <span *ngIf=\"isUserAdvisory\" class=\"RequestType\" [ngClass]=\"{'classForApprovalLabel': item.STATUS == 'FOR APPROVAL', \n            'classApprovedLabel': item.STATUS == 'APPROVED',\n            'classOnHoldLabel': item.STATUS == 'ON HOLD',\n            'classPlannedLabel': item.STATUS == 'PLANNED',\n            'classCancelledLabel': item.STATUS == 'CANCELLED',\n            'classDisapprovedLabel': item.STATUS == 'DISAPPROVED',\n            'classPostedLabel': item.STATUS == 'POSTED'}\">{{ toTitleCase(item.STATUS) }}</span>\n                        <span *ngIf=\"isForApproval\" class=\"RequestType\">{{ item.REQUESTTYPEDESC }}</span>\n                        <br>\n                        <span class=\"LeaveDay\">{{ item.REQUESTTIME }}</span>\n                    </div>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"full\">\n                <ion-label text-wrap>\n                    <span class=\"EntryName\">REQUEST DATE</span>\n                    <span class=\"EntryValue\">{{ item.REQUESTDATE }}</span>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"full\">\n                <ion-label text-wrap>\n                    <span class=\"EntryName\">DATE OF DUTY</span>\n                    <span class=\"EntryValue\" *ngIf=\"item.DATEOFDUTY != null || item.DATEOFDUTY != ''\">{{ item.DATEOFDUTY }}</span>\n                    <span class=\"EntryValue\" *ngIf=\"item.DATEOFDUTY == null || item.DATEOFDUTY == ''\">&nbsp;</span>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"full\">\n                <ion-label text-wrap>\n                    <span class=\"EntryName\">OB START TIME</span>\n                    <span class=\"EntryValue\" *ngIf=\"item.STARTTIME != null || item.STARTTIME != ''\">{{ item.STARTTIME }}</span>\n                    <span class=\"EntryValue\" *ngIf=\"item.STARTTIME == null || item.STARTTIME == ''\">&nbsp;</span>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"full\">\n                <ion-label text-wrap>\n                    <span class=\"EntryName\">REASON</span>\n                    <span class=\"EntryValue\">{{ item.REASONDESC }}</span>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"full\">\n                <ion-label text-wrap>\n                    <span class=\"EntryName\">DEPARTMENT</span>\n                    <span class=\"EntryValue\">{{ item.DEPARTMENTDESC }}</span>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"full\">\n                <ion-label text-wrap>\n                    <span class=\"EntryName\">REMARKS</span>\n                    <span class=\"EntryValue\" *ngIf=\"item.LEAVEREMARK != null || item.LEAVEREMARK != ''\">{{ item.REMARKS }}</span>\n                    <span class=\"EntryValue\" *ngIf=\"item.REMARKS == null || item.REMARKS == ''\">&nbsp;</span>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"full\">\n                <ion-label text-wrap>\n                    <span class=\"EntryName\">PROCESSED BY</span>\n                    <span class=\"EntryValue\" *ngIf=\"item.APPROVER != null || item.APPROVER != ''\">{{ item.APPROVER }}</span>\n                    <span class=\"EntryValue\" *ngIf=\"item.APPROVER == null || item.APPROVER == ''\">&nbsp;</span>\n\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"full\">\n                <ion-label text-wrap>\n                    <span class=\"EntryName\">PROCESSED DATE</span>\n                    <span class=\"EntryValue\" *ngIf=\"item.APPROVEDDATE != null || item.APPROVEDDATE != ''\">{{ item.APPROVEDDATE }}</span>\n                    <span class=\"EntryValue\" *ngIf=\"item.APPROVEDDATE == null || item.APPROVEDDATE == ''\">&nbsp;</span>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"full\">\n                <ion-label text-wrap>\n                    <span class=\"EntryName\">PROCESSED REMARKS</span>\n                    <span class=\"EntryValue\" *ngIf=\"item.APPROVERREMARKS != null || item.APPROVERREMARKS != ''\">{{ item.APPROVERREMARKS }}</span>\n                    <span class=\"EntryValue\" *ngIf=\"item.APPROVERREMARKS == null || item.APPROVERREMARKS == ''\">&nbsp;</span>\n                    <ng-template #other_content>&nbsp;</ng-template>\n                </ion-label>\n            </ion-item>\n        </div>\n    </div>\n    <ion-fab *ngIf=\"isForApproval && !isSubAdvisory\" vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\">\n        <ion-fab-button (click)=\"openModal()\">\n            <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/advisorydetails/advisorydetails.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/advisorydetails/advisorydetails.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  margin-left: -10px;\n}\n\nion-fab {\n  margin-bottom: 40px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n\n.sc-ion-buttons-md-h {\n  float: left;\n}\n\nion-item {\n  --padding-start: 0px !important;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nion-label {\n  margin: 0px;\n}\n\n.actionButton {\n  color: white;\n  padding-right: 10px;\n}\n\n.classMainDetails {\n  --padding-bottom: 12px;\n}\n\n.divLeaveFrom {\n  margin-top: -65px;\n  width: 85px;\n}\n\n.LeaveFromMonth {\n  font-size: 16px;\n  padding-top: 5px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 15px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 70px;\n  height: 25px;\n}\n\n.LeaveFromDate {\n  font-size: 40px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 70px;\n  height: 45px;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n  font-size: 20px;\n  margin-top: 14px;\n}\n\n.divLeaveDesc {\n  overflow: hidden;\n}\n\n.StatusDescAnimated {\n  white-space: nowrap;\n  transform: translateX(100%);\n  /* Apply animation to this element */\n  -webkit-animation: rightToLeft 15s linear infinite;\n  animation: rightToLeft 15s linear infinite;\n  color: #2a2a2a;\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n}\n\n.StatusDesc {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n}\n\n.RequestType {\n  font-size: 15px;\n}\n\n.LeaveDay {\n  color: #808080;\n  font-size: 15px;\n}\n\n.EntryName {\n  color: #676767;\n  font-size: 11px;\n  display: block;\n}\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 16px;\n  font-family: \"RobotoRegular\";\n}\n\n@-webkit-keyframes rightToLeft {\n  0% {\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(-100%);\n  }\n}\n\n@keyframes rightToLeft {\n  0% {\n    /* Firefox bug fix */\n    /* Firefox bug fix */\n    transform: translateX(100%);\n  }\n  100% {\n    /* Firefox bug fix */\n    /* Firefox bug fix */\n    transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvYWR2aXNvcnlkZXRhaWxzL2Fkdmlzb3J5ZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fkdmlzb3J5ZGV0YWlscy9hZHZpc29yeWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBR0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUVBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FEV0E7RUFDSTtJQUNJLG1DQUFBO0VDQU47RURFRTtJQUNJLG9DQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBRUksb0JBQUE7SUFFQSxvQkFBQTtJQUNBLDJCQUFBO0VDRE47RURHRTtJQUVJLG9CQUFBO0lBRUEsb0JBQUE7SUFDQSw0QkFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZHZpc29yeWRldGFpbHMvYWR2aXNvcnlkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NThCMkY7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG5pb24tZmFiIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5hY3Rpb25CdXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2xhc3NNYWluRGV0YWlscyB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuLmRpdkxlYXZlRnJvbSB7XG4gICAgbWFyZ2luLXRvcDogLTY1cHg7XG4gICAgd2lkdGg6IDg1cHg7XG59XG5cbi5MZWF2ZUZyb21Nb250aCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLkxlYXZlRnJvbURhdGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogIzVDNUM1QztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uYnRuTWVudSB7XG4gICAgcGFkZGluZzogMCAwIDAgNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4uZGl2TGVhdmVEZXNjIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uU3RhdHVzRGVzY0FuaW1hdGVkIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAvKiBBcHBseSBhbmltYXRpb24gdG8gdGhpcyBlbGVtZW50ICovXG4gICAgLW1vei1hbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLlN0YXR1c0Rlc2Mge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5SZXF1ZXN0VHlwZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uTGVhdmVEYXkge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLkVudHJ5TmFtZSB7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uRW50cnlWYWx1ZSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuQC1tb3ota2V5ZnJhbWVzIHJpZ2h0VG9MZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJpZ2h0VG9MZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gICAgMCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG59IiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NThCMkY7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuaW9uLWZhYiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5hY3Rpb25CdXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jbGFzc01haW5EZXRhaWxzIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuLmRpdkxlYXZlRnJvbSB7XG4gIG1hcmdpbi10b3A6IC02NXB4O1xuICB3aWR0aDogODVweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmJ0bk1lbnUge1xuICBwYWRkaW5nOiAwIDAgMCA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5TdGF0dXNEZXNjQW5pbWF0ZWQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgLyogQXBwbHkgYW5pbWF0aW9uIHRvIHRoaXMgZWxlbWVudCAqL1xuICAtbW96LWFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uUmVxdWVzdFR5cGUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5MZWF2ZURheSB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5FbnRyeU5hbWUge1xuICBjb2xvcjogIzY3Njc2NztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkVudHJ5VmFsdWUge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbkAtbW96LWtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/advisorydetails/advisorydetails.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/advisorydetails/advisorydetails.page.ts ***!
  \***************************************************************/
/*! exports provided: AdvisorydetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorydetailsPage", function() { return AdvisorydetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _component_submit_approval_submit_approval_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/submit-approval/submit-approval.component */ "./src/app/component/submit-approval/submit-approval.component.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");











var AdvisorydetailsPage = /** @class */ (function () {
    function AdvisorydetailsPage(router, activatedRoute, loadingCtrl, httpApi, loginService, modalController, navCtrl, alertController, storage) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingCtrl = loadingCtrl;
        this.httpApi = httpApi;
        this.loginService = loginService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.storage = storage;
        this.activityResult = false;
    }
    AdvisorydetailsPage.prototype.ngOnInit = function () {
        // this.activityResult = true;
    };
    AdvisorydetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.subid = this.activatedRoute.snapshot.paramMap.get('subid');
        this.type = this.activatedRoute.snapshot.paramMap.get('details');
        this.advisoryStatus = this.activatedRoute.snapshot.paramMap.get('status');
        this.fromPage = this.activatedRoute.snapshot.paramMap.get('page');
        console.log(this.advisoryStatus);
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
                if (_this.type == "useradvisory") {
                    _this.isForApproval = false;
                    _this.isSubAdvisory = false;
                    _this.isUserAdvisory = true;
                    _this.getAdvisory();
                }
                else if (_this.type == "subadvisory") {
                    _this.isSubAdvisory = true;
                    _this.isForApproval = true;
                    _this.isUserAdvisory = false;
                    _this.getSubProfile();
                }
                else {
                    _this.isForApproval = true;
                    _this.isSubAdvisory = false;
                    _this.isUserAdvisory = false;
                    _this.getAdvisoryForApproval();
                }
            });
        });
    };
    AdvisorydetailsPage.prototype.getAdvisory = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                USER: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                EMPNO: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]],
                ID: _this.id
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/GetAttendanceAdvisory", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
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
                        _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                        return;
                    }
                    _this.results = jsonData['Value'];
                    _this.results.forEach(function (element) {
                        if (String(element['ID']) == _this.id) {
                            _this.advisoryStatus = element['STATUS'];
                            _this.loading.dismiss();
                        }
                    });
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    AdvisorydetailsPage.prototype.setItem = function (advisory) {
        this.advisoryItem = advisory;
    };
    AdvisorydetailsPage.prototype.getAdvisoryForApproval = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var advisory = {
                User: Number(_this.empId),
                STATUSCODE: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_FOR_APPROVAL"],
                SHOWALL: true,
                ID: _this.id,
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/HRISAttendanceAdvisoryApproval/GetAllForApproval", advisory, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                        _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    _this.results = jsonData['Value'];
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    AdvisorydetailsPage.prototype.getSubProfile = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                UserID: _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/GetSubordinates/GetDetails?UserID=" + _this.empId + "&subordinateID=" + _this.subid, request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                        _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    _this.results = jsonData['Value']['tblAttendanceAdvisory'];
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    AdvisorydetailsPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
                                            if (_this.fromPage != "subprofile")
                                                _this.navCtrl.navigateBack(["/main//" + _this.fromPage]);
                                            else
                                                _this.navCtrl.back();
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
    AdvisorydetailsPage.prototype.getDateMonth = function (datename, procedure, advisory) {
        this.advisory = advisory;
        var date = new Date(datename.toString().substring(0, 10));
        var CurrntMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrntMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrntMonth[date.getMonth()];
    };
    AdvisorydetailsPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename.toString().substring(0, 10));
        return date.getDate().toString();
    };
    AdvisorydetailsPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename.toString().substring(0, 10));
        return date.getFullYear().toString();
    };
    AdvisorydetailsPage.prototype.toTitleCase = function (txt) {
        return txt.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    AdvisorydetailsPage.prototype.back = function () {
        this.navCtrl.back();
    };
    AdvisorydetailsPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    AdvisorydetailsPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_submit_approval_submit_approval_component__WEBPACK_IMPORTED_MODULE_7__["SubmitApprovalComponent"],
                                cssClass: 'modalSubmitApproval',
                                animated: true,
                                backdropDismiss: false,
                                componentProps: {
                                    data: "advisoryapproval"
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    if (_this.advisoryItem['REQUESTTYPECODE'] == src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_WFH"]) {
                                        _this.processWfhApproval(detail);
                                        return;
                                    }
                                    _this.processAtdApproval(detail);
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
    AdvisorydetailsPage.prototype.processAtdApproval = function (detail) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var advisoryForApproval = {
                ID: _this.id,
                ApproverRemarks: detail.data['remarks'],
                ApprovalStatus: _this.getStatusApproval(detail.data['status']),
                User: Number(_this.empId),
                ShowAll: true,
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"]
            };
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loading = overlay;
                _this.loading.present();
                console.log("processAtdApproval " + advisoryForApproval);
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/HRISAttendanceAdvisoryApproval/ApprovalProcess", advisoryForApproval, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
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
                            _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                            return;
                        }
                        _this.loading.dismiss();
                        switch (detail.data['status']) {
                            case "Approve": {
                                _this.showDialog("DONE!", "You have approved this request", true, "Great!");
                                break;
                            }
                            case "Disapprove": {
                                _this.showDialog("DONE!", "You have disapproved this request", true, "Okay");
                                break;
                            }
                            case "Cancel": {
                                _this.showDialog("DONE!", "You have cancelled this request", true, "Okay");
                                break;
                            }
                            case "On Hold": {
                                _this.showDialog("DONE!", "You have put on hold this request", true, "Okay");
                                break;
                            }
                            default: {
                                _this.showDialog("DONE!", "You have processed this request", true, "Okay");
                                break;
                            }
                        }
                    })
                        .catch(function (error) {
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    AdvisorydetailsPage.prototype.processWfhApproval = function (detail) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var advisoryForApproval = {
                ID: _this.id,
                ShowAll: true,
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                USER: Number(_this.empId),
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                APPROVERREMARKS: detail.data['remarks'],
                APPROVALSTATUS: _this.getStatusApproval(detail.data['status']),
            };
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loading = overlay;
                _this.loading.present();
                console.log("processWfhApproval " + advisoryForApproval);
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/WorkFromHome/ApprovalProcess", advisoryForApproval, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
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
                            _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                            return;
                        }
                        _this.loading.dismiss();
                        switch (detail.data['status']) {
                            case "Approve": {
                                _this.showDialog("DONE!", "You have approved this request", true, "Great!");
                                break;
                            }
                            case "Disapprove": {
                                _this.showDialog("DONE!", "You have disapproved this request", true, "Okay");
                                break;
                            }
                            case "Cancel": {
                                _this.showDialog("DONE!", "You have cancelled this request", true, "Okay");
                                break;
                            }
                            case "On Hold": {
                                _this.showDialog("DONE!", "You have put on hold this request", true, "Okay");
                                break;
                            }
                            default: {
                                _this.showDialog("DONE!", "You have processed this request", true, "Okay");
                                break;
                            }
                        }
                    })
                        .catch(function (error) {
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    AdvisorydetailsPage.prototype.getStatusApproval = function (status) {
        switch (status) {
            case "Approve": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_APPROVED"];
            }
            case "Disapprove": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_DISAPPROVED"];
            }
            case "Cancel": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_CANCELLED"];
            }
            case "On Hold": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_ON_HOLD"];
            }
        }
    };
    AdvisorydetailsPage.prototype.openEditAdvisory = function () {
        if (!this.isSubAdvisory) {
            this.router.navigate(['/advisoryadd',
                this.advisory['ID'] == null ? '' : this.advisory['ID'],
                this.advisory['REQUESTTYPECODE'] == null ? '' : this.advisory['REQUESTTYPECODE'],
                this.advisory['REQUESTDATE'] == null ? '' : this.advisory['REQUESTDATE'],
                this.advisory['REQTIME'] == null ? '' : this.advisory['REQTIME'],
                this.advisory['HRS'] == null ? '' : this.advisory['HRS'],
                this.advisory['DAYS'] == null ? '' : this.advisory['DAYS'],
                this.advisory['REASONCODE'] == null ? '' : this.advisory['REASONCODE'],
                this.advisory['REMARKS'] == null ? '' : this.advisory['REMARKS'],
                this.advisory['STARTTIME'] == null ? '' : this.advisory['STARTTIME'],
                this.advisory['DATEOFDUTY'] == null ? '' : this.advisory['DATEOFDUTY'],
                '',
                ''
            ]);
        }
        else {
            this.router.navigate(['/advisoryadd',
                this.advisory['ID'] == null ? '' : this.advisory['ID'],
                this.advisory['REQUESTTYPECODE'] == null ? '' : this.advisory['REQUESTTYPECODE'],
                this.advisory['REQUESTDATE'] == null ? '' : this.advisory['REQUESTDATE'],
                this.advisory['REQTIME'] == null ? '' : this.advisory['REQTIME'],
                this.advisory['HRS'] == null ? '' : this.advisory['HRS'],
                this.advisory['DAYS'] == null ? '' : this.advisory['DAYS'],
                this.advisory['REASONCODE'] == null ? '' : this.advisory['REASONCODE'],
                this.advisory['REMARKS'] == null ? '' : this.advisory['REMARKS'],
                this.advisory['STARTTIME'] == null ? '' : this.advisory['STARTTIME'],
                this.advisory['DATEOFDUTY'] == null ? '' : this.advisory['DATEOFDUTY'],
                this.subid,
                'fromSubsProfile'
            ]);
        }
    };
    AdvisorydetailsPage.prototype.showDeleteDialog = function () {
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
                                            _this.deleteAdvisory(_this.advisory);
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
    AdvisorydetailsPage.prototype.showCancelDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancel Attendance Advisory',
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
                                        _this.cancelAdvisory(_this.advisory, data['remarks']);
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
    AdvisorydetailsPage.prototype.cancelAdvisory = function (advisory, remarks) {
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
                    USER: _this.empId,
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
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
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
                            _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                            return;
                        }
                        _this.showDialog("DONE!", "Your changes have been saved for processing", true, "Great!");
                        _this.loading.dismiss();
                    })
                        .catch(function (error) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                    });
                });
            });
        });
    };
    AdvisorydetailsPage.prototype.deleteAdvisory = function (advisory) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                ID: String(advisory['ID']),
                EMPNO: Number(_this.empId),
                USER: _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["API_ENDPOINT"] + "/api/HRISAttendanceAdvisory/DeleteAttendanceAdvisory", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
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
                        _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                        return;
                    }
                    _this.showDialog("DONE!", "You have deleted this request", true, "Okay");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    AdvisorydetailsPage.prototype.goBack = function () { this.navCtrl.back(); };
    AdvisorydetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advisorydetails',
            template: __webpack_require__(/*! ./advisorydetails.page.html */ "./src/app/pages/advisorydetails/advisorydetails.page.html"),
            styles: [__webpack_require__(/*! ./advisorydetails.page.scss */ "./src/app/pages/advisorydetails/advisorydetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], AdvisorydetailsPage);
    return AdvisorydetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-advisorydetails-advisorydetails-module.js.map