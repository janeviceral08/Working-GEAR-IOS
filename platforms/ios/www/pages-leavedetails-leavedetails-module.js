(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leavedetails-leavedetails-module"],{

/***/ "./src/app/pages/leavedetails/leavedetails.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/leavedetails/leavedetails.module.ts ***!
  \***********************************************************/
/*! exports provided: LeavedetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavedetailsPageModule", function() { return LeavedetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leavedetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leavedetails.page */ "./src/app/pages/leavedetails/leavedetails.page.ts");
/* harmony import */ var _component_submit_approval_submit_approval_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/submit-approval/submit-approval.module */ "./src/app/component/submit-approval/submit-approval.module.ts");








var routes = [
    {
        path: '',
        component: _leavedetails_page__WEBPACK_IMPORTED_MODULE_6__["LeavedetailsPage"]
    }
];
var LeavedetailsPageModule = /** @class */ (function () {
    function LeavedetailsPageModule() {
    }
    LeavedetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_submit_approval_submit_approval_module__WEBPACK_IMPORTED_MODULE_7__["SubmitApprovalComponentModule"]
            ],
            declarations: [_leavedetails_page__WEBPACK_IMPORTED_MODULE_6__["LeavedetailsPage"]]
        })
    ], LeavedetailsPageModule);
    return LeavedetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/leavedetails/leavedetails.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/leavedetails/leavedetails.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons>\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        <!-- <ion-button slot=\"start\" (click)=\"back()\" class=\"toolbarButtons\">\n      <ion-icon class=\"btnMenu\" color=\"light\" name=\"arrow-back\"></ion-icon>\n    </ion-button> -->\n        <ion-title mode=\"md\">Leave Details</ion-title>\n        <ion-button class=\"button-light actionButton\" title=\"SUBMIT\" slot=\"end\" *ngIf=\"leaveStatus == 'PLANNED'\" (click)=\"showSubmitDialog()\">\n            <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"button-light actionButton\" title=\"EDIT\" slot=\"end\" *ngIf=\"(leaveStatus == 'PLANNED' || leaveStatus == 'FOR APPROVAL') && !isForApproval\" (click)=\"openEditLeave()\">\n            <ion-icon name=\"create\" mode=\"md\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"button-light actionButton\" title=\"DELETE\" slot=\"end\" *ngIf=\"(leaveStatus == 'PLANNED' || leaveStatus == 'FOR APPROVAL') && !isForApproval\" (click)=\"showDeleteDialog()\">\n            <ion-icon name=\"trash\" mode=\"md\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"button-light actionButton\" title=\"CANCEL\" slot=\"end\" *ngIf=\"leaveStatus == 'APPROVED' && !isForApproval\" (click)=\"showCancelDialog()\">\n            <ion-icon name=\"close-circle\" mode=\"md\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-header>\n<ion-content padding>\n    <ion-item class=\"classMainDetails\" lines=\"full\">\n        <ion-avatar class=\"divLeaveFrom\">\n            <div class=\"LeaveFromMonth\">\n                {{leaveFromMonth}}\n            </div>\n            <div class=\"LeaveFromDate\">\n                {{leaveFromDate}}\n            </div>\n        </ion-avatar>\n        <ion-label text-wrap>\n            <div class=\"divLeaveDesc\">\n                <div class=\"StatusDesc\">\n                    <span *ngIf=\"type == 'userleave'\">{{ toTitleCase(leaveDesc) }}</span>\n                    <span *ngIf=\"isForApproval\">{{empName}}</span>\n                </div>\n                <span *ngIf=\"type == 'userleave'\" class=\"RequestType\" [ngClass]=\"{'classForApprovalLabel': leaveStatusDesc == 'FOR APPROVAL', \n                  'classApprovedLabel': leaveStatusDesc == 'APPROVED',\n                  'classOnHoldLabel': leaveStatusDesc == 'ON HOLD',\n                  'classPlannedLabel': leaveStatusDesc == 'PLANNED',\n                  'classCancelledLabel': leaveStatusDesc == 'CANCELLED',\n                  'classDisapprovedLabel': leaveStatusDesc == 'DISAPPROVED',\n                  'classPostedLabel': leaveStatusDesc == 'POSTED'}\">\n          {{ toTitleCase(leaveStatusDesc) }}</span>\n                <span *ngIf=\"isForApproval\" class=\"RequestType\">{{leaveDesc}}</span>\n                <br>\n                <span class=\"LeaveDay\" *ngIf=\"leaveDay > 1 \">{{ leaveDay }} days duration</span>\n                <span class=\"LeaveDay\" *ngIf=\"leaveDay <= 1 \">{{ leaveDay }} day duration</span>\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">LEAVE DATE</span>\n            <span class=\"EntryValue\">{{ leaveFrom }} {{leaveFromTime}} - {{leaveTo}} {{leaveToTime}}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">REQUEST TYPE</span>\n            <span [ngClass]=\"{'EntryValue': requestTypeDesc == 'WITH PAY', 'EntryValueRed' : requestTypeDesc != 'WITH PAY'}\">{{ requestTypeDesc }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">LEAVE TIME FROM</span>\n            <span class=\"EntryValue\">{{ leaveFromTime }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">LEAVE TIME TO</span>\n            <span class=\"EntryValue\">{{ leaveToTime }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">DATE FILED</span>\n            <span class=\"EntryValue\">{{ dateFile }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">DEPARTMENT</span>\n            <span class=\"EntryValue\">{{ deptDesc }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">REMARKS</span>\n            <span class=\"EntryValue\" *ngIf=\"leaveRemark != null || leaveRemark != ''\">{{ leaveRemark }}</span>\n            <span class=\"EntryValue\" *ngIf=\"leaveRemark == null || leaveRemark == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">CREATED BY</span>\n            <span class=\"EntryValue\">{{ createdBy }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">CREATED DATE</span>\n            <span class=\"EntryValue\" *ngIf=\"dateCreated != null || dateCreated != ''\">{{ dateCreated }}</span>\n            <span class=\"EntryValue\" *ngIf=\"dateCreated == null || dateCreated == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">PROCESSED BY</span>\n            <span class=\"EntryValue\" *ngIf=\"approver != null || approver != ''\">{{ approver }}</span>\n            <span class=\"EntryValue\" *ngIf=\"approver == null || approver == ''\">&nbsp;</span>\n            <ng-template #other_content>&nbsp;</ng-template>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">PROCESSED DATE</span>\n            <span class=\"EntryValue\" *ngIf=\"approvedDate != null || approvedDate != ''\">{{ approvedDate }}</span>\n            <span class=\"EntryValue\" *ngIf=\"approvedDate == null || approvedDate == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">PROCESSED REMARKS</span>\n            <span class=\"EntryValue\" *ngIf=\"approverREMARKS != null || approverREMARKS != ''\">{{ approverREMARKS }}</span>\n            <span class=\"EntryValue\" *ngIf=\"approverREMARKS == null || approverREMARKS == ''\">&nbsp;</span>\n            <ng-template #other_content>&nbsp;</ng-template>\n        </ion-label>\n    </ion-item>\n    <ion-fab *ngIf=\"isForApproval && !isSubLeave\" vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\">\n        <ion-fab-button (click)=\"openModal()\">\n            <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/leavedetails/leavedetails.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/leavedetails/leavedetails.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  margin-left: -10px;\n}\n\nion-fab {\n  margin-bottom: 40px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n\n.sc-ion-buttons-md-h {\n  float: left;\n}\n\nion-item {\n  --padding-start: 0px !important;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\nion-label {\n  margin: 0px;\n}\n\n.actionButton {\n  color: white;\n  padding-right: 10px;\n}\n\n.classMainDetails {\n  --padding-bottom: 12px;\n}\n\n.divLeaveFrom {\n  margin-top: -60px;\n  width: 85px;\n}\n\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 5px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 15px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n  font-size: 20px;\n  margin-top: 14px;\n}\n\n.divLeaveDesc {\n  overflow: hidden;\n}\n\n.StatusDescAnimated {\n  white-space: nowrap;\n  transform: translateX(100%);\n  /* Apply animation to this element */\n  -webkit-animation: rightToLeft 15s linear infinite;\n  animation: rightToLeft 15s linear infinite;\n  color: #2a2a2a;\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n}\n\n.StatusDesc {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 17px;\n  font-family: \"RobotoMedium\";\n}\n\n.RequestType {\n  font-size: 14px;\n}\n\n.LeaveDay {\n  color: #808080;\n  font-size: 14px;\n}\n\n.EntryName {\n  color: #676767;\n  font-size: 10px;\n  display: block;\n}\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n.EntryValueRed {\n  color: #F44336;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n@-webkit-keyframes rightToLeft {\n  0% {\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    -webkit-transform: translateX(-100%);\n  }\n}\n\n@keyframes rightToLeft {\n  0% {\n    /* Firefox bug fix */\n    /* Firefox bug fix */\n    transform: translateX(100%);\n  }\n  100% {\n    /* Firefox bug fix */\n    /* Firefox bug fix */\n    transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvbGVhdmVkZXRhaWxzL2xlYXZlZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYXZlZGV0YWlscy9sZWF2ZWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBR0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUVBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FEV0E7RUFDSTtJQUNJLG1DQUFBO0VDQU47RURFRTtJQUNJLG9DQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBRUksb0JBQUE7SUFFQSxvQkFBQTtJQUNBLDJCQUFBO0VDRE47RURHRTtJQUVJLG9CQUFBO0lBRUEsb0JBQUE7SUFDQSw0QkFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZWF2ZWRldGFpbHMvbGVhdmVkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NThCMkY7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG5pb24tZmFiIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5hY3Rpb25CdXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2xhc3NNYWluRGV0YWlscyB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuLmRpdkxlYXZlRnJvbSB7XG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XG4gICAgd2lkdGg6IDg1cHg7XG59XG5cbi5MZWF2ZUZyb21Nb250aCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLkxlYXZlRnJvbURhdGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzVDNUM1QztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uYnRuTWVudSB7XG4gICAgcGFkZGluZzogMCAwIDAgNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4uZGl2TGVhdmVEZXNjIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uU3RhdHVzRGVzY0FuaW1hdGVkIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAvKiBBcHBseSBhbmltYXRpb24gdG8gdGhpcyBlbGVtZW50ICovXG4gICAgLW1vei1hbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLlN0YXR1c0Rlc2Mge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5SZXF1ZXN0VHlwZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uTGVhdmVEYXkge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLkVudHJ5TmFtZSB7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uRW50cnlWYWx1ZSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLkVudHJ5VmFsdWVSZWQge1xuICAgIGNvbG9yOiAjRjQ0MzM2O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbkAtbW96LWtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gICAgMCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAgIDAlIHtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgLyogRmlyZWZveCBidWcgZml4ICovXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbmlvbi1mYWIge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtaCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYWN0aW9uQnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2xhc3NNYWluRGV0YWlscyB7XG4gIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5kaXZMZWF2ZUZyb20ge1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgd2lkdGg6IDg1cHg7XG59XG5cbi5MZWF2ZUZyb21Nb250aCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uTGVhdmVGcm9tRGF0ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICM1QzVDNUM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5idG5NZW51IHtcbiAgcGFkZGluZzogMCAwIDAgNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5kaXZMZWF2ZURlc2Mge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uU3RhdHVzRGVzY0FuaW1hdGVkIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIC8qIEFwcGx5IGFuaW1hdGlvbiB0byB0aGlzIGVsZW1lbnQgKi9cbiAgLW1vei1hbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHJpZ2h0VG9MZWZ0IDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uU3RhdHVzRGVzYyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLlJlcXVlc3RUeXBlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uTGVhdmVEYXkge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uRW50cnlOYW1lIHtcbiAgY29sb3I6ICM2NzY3Njc7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5FbnRyeVZhbHVlIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uRW50cnlWYWx1ZVJlZCB7XG4gIGNvbG9yOiAjRjQ0MzM2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuQC1tb3ota2V5ZnJhbWVzIHJpZ2h0VG9MZWZ0IHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJpZ2h0VG9MZWZ0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyByaWdodFRvTGVmdCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/leavedetails/leavedetails.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/leavedetails/leavedetails.page.ts ***!
  \*********************************************************/
/*! exports provided: LeavedetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavedetailsPage", function() { return LeavedetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_submit_approval_submit_approval_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/submit-approval/submit-approval.component */ "./src/app/component/submit-approval/submit-approval.component.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");











var LeavedetailsPage = /** @class */ (function () {
    function LeavedetailsPage(activatedRoute, leaveService, httpApi, router, navCtrl, loginService, alertController, loadingCtrl, storage, modalController) {
        this.activatedRoute = activatedRoute;
        this.leaveService = leaveService;
        this.httpApi = httpApi;
        this.router = router;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalController = modalController;
    }
    LeavedetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fromPage = this.activatedRoute.snapshot.paramMap.get('page');
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_LEAVEDETAILS"]).then(function (val) {
            _this.id = val.ID;
            _this.type = _this.activatedRoute.snapshot.paramMap.get('leave');
            _this.leaveStatus = val.LEAVESTATUSDESC;
            _this.leaveType = val.LEAVETYPE;
            _this.leaveFrom = val.LEAVEFROM;
            _this.leaveFromTime = val.LeaveFromTime;
            _this.leaveTo = val.LEAVETO;
            _this.leaveToTime = val.LeaveToTime;
            _this.leaveFromMonth = _this.getDateMonth(val.LEAVEFROM, 1);
            _this.leaveFromDate = _this.getDateDate(val.LEAVEFROM);
            _this.leaveDesc = val.LEAVEDESC;
            _this.empName = val.EMPL_NAME;
            _this.leaveStatusDesc = val.LEAVESTATUSDESC;
            _this.leaveDay = val.LEAVEDAY;
            _this.leaveDates = val.LEAVEDATES;
            _this.requestTypeDesc = val.REQUESTTYPEDESC;
            _this.dateFile = val.DATEFILE;
            _this.deptDesc = val.DEPARTMENTDESC;
            _this.leaveRemark = val.LEAVEREMARK;
            _this.leaveReasonDesc = val.LEAVEREASONDESC;
            _this.createdBy = val.CREATEDBY;
            _this.dateCreated = val.DATECREATED;
            _this.approver = val.APPROVER;
            _this.approvedDate = val.APPROVEDDATE;
            _this.approverRemarks = val.APPROVERREMARKS;
            console.log(val);
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loading = overlay;
                _this.loading.present();
                _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_EMPID"]).then(function (val) {
                    _this.user = val;
                    if (_this.type == "userleave") {
                        _this.isForApproval = false;
                        _this.isUserLeave = true;
                        _this.loading.dismiss();
                    }
                    else if (_this.type == "subleave") {
                        _this.isSubLeave = true;
                        _this.isForApproval = true;
                        _this.isUserLeave = false;
                        _this.loading.dismiss();
                    }
                    else {
                        var leave = {
                            User: _this.user,
                            LeaveRequestStatus: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["LEAVE_STATUS_FOR_APPROVAL"]
                        };
                        _this.isForApproval = true;
                        _this.isUserLeave = false;
                        _this.isSubLeave = false;
                        _this.loading.dismiss();
                    }
                });
            });
        });
    };
    LeavedetailsPage.prototype.getDateMonth = function (datename, procedure) {
        // this.loading.dismiss();
        var date = new Date(datename.toString().substring(0, 10));
        var CurrntMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrntMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrntMonth[date.getMonth()];
    };
    LeavedetailsPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename.toString().substring(0, 10));
        return date.getDate().toString();
    };
    LeavedetailsPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename.toString().substring(0, 10));
        return date.getFullYear().toString();
    };
    LeavedetailsPage.prototype.toTitleCase = function (txt) {
        return txt.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    LeavedetailsPage.prototype.deleteLeave = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            var postData = {
                ID: String(_this.id),
                USER: _this.user,
                LeaveRequestStatus: _this.leaveStatus,
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/LeaveRequest/DeleteLeaveRequest", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_SUCCESS"]) {
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("ERROR!", jsonData['Message'], true, "Okay");
                        return;
                    }
                    _this.showDialog("DONE!", "You have deleted this request", true, "Okay");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    LeavedetailsPage.prototype.submitLeave = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            var postData = {
                ID: String(_this.id),
                USER: _this.user,
                EmployeeId: _this.user,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/LeaveRequest/SubmitPlannedLeave", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_SUCCESS"]) {
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("ERROR!", jsonData['Message'], true, "Okay");
                        return;
                    }
                    _this.showDialog("DONE!", "Your leave has been saved", true, "Great!");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    LeavedetailsPage.prototype.cancelLeave = function (cancelRemarks) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            var postData = {
                ID: String(_this.id),
                USER: _this.user,
                LeaveRequestStatus: _this.leaveStatus,
                CancelRemarks: cancelRemarks,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/LeaveRequest/CancelLeaveRequest", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("ERROR!", jsonData['Message'], true, "Okay");
                        return;
                    }
                    _this.showDialog("DONE!", "You have cancelled this request", true, "Great!");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    LeavedetailsPage.prototype.showCancelDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancel Leave',
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
                                        _this.loadingCtrl.create({
                                            message: "Loading..."
                                        }).then(function (overlay) {
                                            _this.loading = overlay;
                                            _this.loading.present();
                                            _this.cancelLeave(data['remarks']);
                                        });
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
    LeavedetailsPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
    LeavedetailsPage.prototype.showDeleteDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete Leave',
                            message: 'Are you sure you want to delete leave?',
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
                                            _this.deleteLeave();
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
    LeavedetailsPage.prototype.isEmpty = function (text) {
        return (text == "" || text == undefined || text == null);
    };
    LeavedetailsPage.prototype.showSubmitDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Submit Leave',
                            message: 'Are you sure you want to submit planned leave?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }, {
                                    text: 'Submit',
                                    handler: function () {
                                        _this.loadingCtrl.create({
                                            message: "Loading..."
                                        }).then(function (overlay) {
                                            _this.loading = overlay;
                                            _this.loading.present();
                                            _this.submitLeave();
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
    LeavedetailsPage.prototype.openEditLeave = function () {
        this.router.navigate(['/leaveadd',
            this.leaveType,
            this.leaveDay,
            this.leaveFrom,
            this.leaveFromTime,
            this.leaveReasonDesc,
            (this.isEmpty(this.leaveRemark) ? '' : this.leaveRemark),
            this.id,
            ''
        ]);
    };
    LeavedetailsPage.prototype.ngOnDestroy = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
    };
    LeavedetailsPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    LeavedetailsPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_submit_approval_submit_approval_component__WEBPACK_IMPORTED_MODULE_8__["SubmitApprovalComponent"],
                                cssClass: 'modalSubmitApproval',
                                animated: true,
                                backdropDismiss: false,
                                componentProps: {
                                    data: ""
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
                                        var leaveForApproval = {
                                            ID: _this.id,
                                            ApproverRemarks: (!detail.data['remarks'] ? "" : detail.data['remarks']),
                                            ApprovalStatus: detail.data['status'],
                                            User: Number(_this.user),
                                            ShowAll: true,
                                            SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]],
                                            SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]],
                                            Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]],
                                            AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"],
                                            AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"]
                                        };
                                        _this.loadingCtrl.create({
                                            message: "Loading..."
                                        }).then(function (overlay) {
                                            _this.loading = overlay;
                                            _this.loading.present();
                                            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                                                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/HRISApproval/ApprovalProcess", leaveForApproval, {})
                                                    .then(function (data) {
                                                    if (data.data == null || data.data == undefined || !data.data) {
                                                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                                                        _this.loading.dismiss();
                                                        return;
                                                    }
                                                    var jsonData = JSON.parse(data.data);
                                                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_SUCCESS"]) {
                                                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                                                        _this.loading.dismiss();
                                                        return;
                                                    }
                                                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_YES"]) {
                                                        _this.loading.dismiss();
                                                        switch (jsonData['Message']) {
                                                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_ERROR"]:
                                                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_MESSAGE"]);
                                                                return;
                                                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE"]:
                                                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                                                return;
                                                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED"]:
                                                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_EXPIRED"]);
                                                                return;
                                                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED"]:
                                                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_REQUIRED"]);
                                                                return;
                                                        }
                                                        _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                                                        return;
                                                    }
                                                    _this.loading.dismiss();
                                                    _this.showDialog("DONE!", "You have processed this request", true, "Great!");
                                                })
                                                    .catch(function (error) {
                                                    _this.loading.dismiss();
                                                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                                                });
                                            });
                                        });
                                    });
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
    LeavedetailsPage.prototype.back = function () {
        this.navCtrl.back();
    };
    LeavedetailsPage.prototype.goBack = function () { this.navCtrl.back(); };
    LeavedetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leavedetails',
            template: __webpack_require__(/*! ./leavedetails.page.html */ "./src/app/pages/leavedetails/leavedetails.page.html"),
            styles: [__webpack_require__(/*! ./leavedetails.page.scss */ "./src/app/pages/leavedetails/leavedetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])
    ], LeavedetailsPage);
    return LeavedetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-leavedetails-leavedetails-module.js.map