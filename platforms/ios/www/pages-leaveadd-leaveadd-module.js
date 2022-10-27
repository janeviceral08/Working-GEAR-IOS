(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leaveadd-leaveadd-module"],{

/***/ "./src/app/pages/leaveadd/leaveadd.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/leaveadd/leaveadd.module.ts ***!
  \***************************************************/
/*! exports provided: LeaveaddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveaddPageModule", function() { return LeaveaddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leaveadd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaveadd.page */ "./src/app/pages/leaveadd/leaveadd.page.ts");







var routes = [
    {
        path: '',
        component: _leaveadd_page__WEBPACK_IMPORTED_MODULE_6__["LeaveaddPage"]
    }
];
var LeaveaddPageModule = /** @class */ (function () {
    function LeaveaddPageModule() {
    }
    LeaveaddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_leaveadd_page__WEBPACK_IMPORTED_MODULE_6__["LeaveaddPage"]]
        })
    ], LeaveaddPageModule);
    return LeaveaddPageModule;
}());



/***/ }),

/***/ "./src/app/pages/leaveadd/leaveadd.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/leaveadd/leaveadd.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons class=\"buttonHeaderClass\" mode=\"md\">\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        <ion-title mode=\"md\">{{title}}</ion-title>\n        <ion-button class=\"btnSubmit\" slot=\"end\" (click)=\"sendLeaveRequest()\">\n            <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-header>\n<ion-content class=\"ContentClass\">\n    <ion-list lines=\"none\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">SUBORDINATE</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"subId\" (ionChange)=\"onSubordinateChange()\">\n                            <div *ngFor=\"let item of (subordinates)\">\n                                <ion-select-option value=\"{{ item.EMPLOYEEID }}\">{{ item.EMPNAME }}</ion-select-option>\n                            </div>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"8\">\n                    <ion-item id=\"leavetype\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">LEAVE TYPE</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"type\" (ionChange)=\"onLeaveTypeChange()\">\n                            <div *ngFor=\"let item of (results)\">\n                                <ion-select-option value=\"{{ item.SEQNO }}\">{{ item.DESCRIPTION }}</ion-select-option>\n                            </div>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-item class=\"duration\" [disabled]=\"isDurationDisabled\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">DURATION</ion-label>\n                        <ion-input id=\"rounded\" type=\"num\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\">\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"8\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">LEAVE FROM</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"dateFrom\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\" (ionChange)=\"getAddLeaveEndDate()\">\n                            mm/dd/yyyy</ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">&nbsp;</ion-label>\n                        <ion-select [(ngModel)]=\"timeFrom\" id=\"rounded\" (ionChange)=\"getAddLeaveEndDate()\">\n                            <ion-select-option value=\"AM\">AM</ion-select-option>\n                            <ion-select-option value=\"PM\">PM</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size=\"8\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">LEAVE TO</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"dateTo\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" min=\"2016\" max=\"2099\" disabled>\n                            mm/dd/yyyy</ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">&nbsp;</ion-label>\n                        <ion-select [(ngModel)]=\"timeTo\" id=\"rounded\" disabled>\n                            <ion-select-option value=\"AM\">AM</ion-select-option>\n                            <ion-select-option value=\"PM\">PM</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">REASON</ion-label>\n                        <ion-select [(ngModel)]=\"reason\" id=\"rounded\" [disabled]=\"isReasonDisabled\">\n                            <ion-select-option value=\"LVR00001\">Personal</ion-select-option>\n                            <ion-select-option value=\"LVR00002\">Not feeling well</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">REMARKS</ion-label>\n                        <ion-textarea id=\"rounded\" rows=\"3\" maxlength=\"500\" [(ngModel)]=\"remarks\"></ion-textarea>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-item>\n                        <ion-button class=\"AttachButton\" shape=\"round\" (click)=\"attachFile()\">\n                            Attach File\n                            <ion-icon slot=\"start\" name=\"attach\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-item class=\"FileName\">\n                        <ion-label>{{ fileName }}\n                        </ion-label>\n                        <ion-icon class=\"FileNameClose\" slot=\"end\" name=\"close-circle\" *ngIf=\"hasAttachment\" (click)=\"removeAttachment()\"></ion-icon>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item [hidden]=\"isEdited\">\n                        <ion-checkbox [(ngModel)]=\"isPlanned\" (ionChange)=\"onPlannedChecked()\"></ion-checkbox>\n                        <ion-label> Leave Planning</ion-label>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-label class=\"lblTakeNote\">Please take note that once you have exceeded your available leave credits, it will automatically be tagged as\n                    <ion-label class=\"lblTakeNoteWithoutPay\">WITHOUT PAY</ion-label>.</ion-label>\n            </ion-row>\n        </ion-grid>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/leaveadd/leaveadd.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/leaveadd/leaveadd.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  margin-left: -10px;\n}\n\n.AttachButton {\n  font-size: inherit;\n  height: 90%;\n  width: 100%;\n  color: #484848;\n  --background: #D6D7D7;\n}\n\n.FileName {\n  --padding-start: 0;\n  font-size: 13px;\n}\n\n.FileNameClose {\n  height: 20px;\n  width: 20px;\n  color: #484848;\n}\n\nion-select {\n  height: 40px !important;\n}\n\nion-input {\n  height: 40px !important;\n}\n\nion-datetime {\n  height: 40px !important;\n}\n\nion-checkbox {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n}\n\n.btnSubmit {\n  color: white;\n  padding-right: 5px;\n}\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\ninput {\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.EntityName {\n  font-size: 11px;\n  color: #676767;\n}\n\n.duration.ng-invalid {\n  border-bottom-color: transparent;\n}\n\n.duration.ng-valid {\n  border-bottom-color: transparent;\n}\n\n.calendarClass {\n  position: absolute;\n  right: 5px;\n  bottom: 4px;\n}\n\n.lblTakeNote {\n  font-size: 11px;\n  font-style: italic;\n  padding-left: 20px;\n}\n\n.lblTakeNoteWithoutPay {\n  color: #F44336;\n}\n\n.AttachButton {\n  font-size: inherit;\n  height: 90%;\n  width: 100%;\n  color: #484848;\n  --background: #D6D7D7;\n}\n\n.FileName {\n  --padding-start: 0;\n  font-size: 13px;\n}\n\n.FileNameClose {\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvbGVhdmVhZGQvbGVhdmVhZGQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sZWF2ZWFkZC9sZWF2ZWFkZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQ0FBQTtVQUFBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxxQ0FBQTtVQUFBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVhdmVhZGQvbGVhdmVhZGQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5BdHRhY2hCdXR0b24ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbiAgICAtLWJhY2tncm91bmQ6ICNENkQ3RDc7XG59XG5cbi5GaWxlTmFtZSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLkZpbGVOYW1lQ2xvc2Uge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuaW9uLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLWJvcmRlci1jb2xvcjogZ3JheTtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuI3JvdW5kZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dCB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uRW50aXR5TmFtZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjNjc2NzY3O1xufVxuXG4uZHVyYXRpb24ubmctaW52YWxpZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kdXJhdGlvbi5uZy12YWxpZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYWxlbmRhckNsYXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3R0b206IDRweDtcbn1cblxuLmxibFRha2VOb3RlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmxibFRha2VOb3RlV2l0aG91dFBheSB7XG4gICAgY29sb3I6ICNGNDQzMzY7XG59XG5cbi5BdHRhY2hCdXR0b24ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbiAgICAtLWJhY2tncm91bmQ6ICNENkQ3RDc7XG59XG5cbi5GaWxlTmFtZSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLkZpbGVOYW1lQ2xvc2Uge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uQXR0YWNoQnV0dG9uIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICAtLWJhY2tncm91bmQ6ICNENkQ3RDc7XG59XG5cbi5GaWxlTmFtZSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uRmlsZU5hbWVDbG9zZSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJvcmRlci1jb2xvcjogZ3JheTtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4jcm91bmRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uRW50aXR5TmFtZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM2NzY3Njc7XG59XG5cbi5kdXJhdGlvbi5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kdXJhdGlvbi5uZy12YWxpZCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY2FsZW5kYXJDbGFzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgYm90dG9tOiA0cHg7XG59XG5cbi5sYmxUYWtlTm90ZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5sYmxUYWtlTm90ZVdpdGhvdXRQYXkge1xuICBjb2xvcjogI0Y0NDMzNjtcbn1cblxuLkF0dGFjaEJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgLS1iYWNrZ3JvdW5kOiAjRDZEN0Q3O1xufVxuXG4uRmlsZU5hbWUge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLkZpbGVOYW1lQ2xvc2Uge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/leaveadd/leaveadd.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/leaveadd/leaveadd.page.ts ***!
  \*************************************************/
/*! exports provided: LeaveaddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveaddPage", function() { return LeaveaddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-picker/ngx */ "./node_modules/@ionic-native/file-picker/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ftp_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ftp/ngx */ "./node_modules/@ionic-native/ftp/ngx/index.js");














var LeaveaddPage = /** @class */ (function () {
    function LeaveaddPage(storage, activatedRoute, datepipe, navCtrl, loginService, alertController, actionSheetController, loadingCtrl, filePicker, camera, fTP, imagePicker, httpApi) {
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.datepipe = datepipe;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.loadingCtrl = loadingCtrl;
        this.filePicker = filePicker;
        this.camera = camera;
        this.fTP = fTP;
        this.imagePicker = imagePicker;
        this.httpApi = httpApi;
        this.types = [];
        this.timeFrom = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveTime"].AM;
        this.timeTo = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveTime"].AM;
        this.reason = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["Reason"].personal;
        this.dateFrom = new Date().toISOString();
        this.dateTo = new Date().toISOString();
        this.errorMessage = "CONNECTION ERROR";
        this.currentDate = new Date().toISOString();
        this.isDurationDisabled = false;
        this.isReasonDisabled = false;
        this.isPlanned = false;
        this.fileName = "No Attachment";
        this.hasAttachment = false;
        this.uploadSuccess = false;
    }
    LeaveaddPage.prototype.ngOnInit = function () {
        var _this = this;
        this.noError = true;
        this.loadingDone = false;
        this.id = this.activatedRoute.snapshot.paramMap.get('type');
        this.duration = this.activatedRoute.snapshot.paramMap.get('duration');
        this.currentDate = this.activatedRoute.snapshot.paramMap.get('datefrom');
        this.remarks = this.activatedRoute.snapshot.paramMap.get('remarks');
        this.leaveId = this.activatedRoute.snapshot.paramMap.get('id');
        this.subId = this.activatedRoute.snapshot.paramMap.get('subid');
        if (this.currentDate != '') {
            this.dateFrom = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
            this.dateTo = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
            this.isEdited = true;
            this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
                _this.loadingCtrl.create({
                    message: "Loading..."
                }).then(function (overlay) {
                    _this.loading = overlay;
                    _this.getAddLeaveEndDate();
                });
            });
            this.title = "Edit Leave";
        }
        else if (this.subId != '') {
            this.dateFrom = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
            this.dateTo = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
            this.isEdited = true;
            this.title = "Post Leave";
            this.getConfigFiles(this.subId);
        }
        else {
            this.dateFrom = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
            this.dateTo = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
            this.isEdited = false;
            this.title = "Post Leave";
        }
        if (this.duration == '' || !this.duration || this.duration == null || this.duration == undefined) {
            this.duration = '1';
        }
        switch (this.activatedRoute.snapshot.paramMap.get('time')) {
            case "AM": {
                this.timeFrom = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveTime"].AM;
                break;
            }
            case "PM": {
                this.timeFrom = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveTime"].PM;
                break;
            }
            default: {
                this.timeFrom = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveTime"].AM;
                break;
            }
        }
        switch (this.activatedRoute.snapshot.paramMap.get('request')) {
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["REASON_CODE_PERSONAL"]: {
                this.reason = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["Reason"].personal;
                break;
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["REASON_CODE_NOT_FEEL"]: {
                this.reason = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["Reason"].notwell;
                break;
            }
        }
        if (!this.subId || this.subId != '') {
            this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_LEAVETYPES"]).then(function (val) {
                _this.results = val;
                if (_this.id == undefined || _this.id == null || _this.id == "") {
                    _this.type = val['0']['SEQNO'];
                    if (_this.type == "BL") {
                        _this.isDurationDisabled = true;
                        _this.isReasonDisabled = true;
                    }
                }
                else {
                    val.forEach(function (element) {
                        if (element['SEQNO'] == _this.id) {
                            _this.type = element['SEQNO'];
                            if (_this.type == "BL") {
                                _this.isDurationDisabled = true;
                                _this.isReasonDisabled = true;
                            }
                        }
                    });
                    if (!_this.type) {
                        _this.type = val['0']['SEQNO'];
                        if (_this.type == "BL") {
                            _this.isDurationDisabled = true;
                            _this.isReasonDisabled = true;
                        }
                    }
                }
            });
        }
        if (!this.empId) {
            this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
            });
        }
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SUBORDINATES"]).then(function (val) {
            _this.subordinates = val;
        });
    };
    LeaveaddPage.prototype.getAddLeaveEndDate = function () {
        var _this = this;
        if (!this.duration) {
            return;
        }
        if (!this.datepipe.transform(this.dateFrom, 'MM/dd/yyyy')) {
            return;
        }
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            var leave = {
                LeaveFrom: _this.datepipe.transform(_this.dateFrom, 'MM/dd/yyyy'),
                LeaveFromTime: _this.timeFrom,
                LeaveNoOfDays: _this.duration,
                EmployeeId: _this.empId,
                LeaveRequestType: _this.type,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"],
                User: _this.empId
            };
            if (_this.subId != '') {
                leave['EmployeeId'] = _this.subId;
            }
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loadingGetLeaveFrom = overlay;
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/LeaveRequest/GetAddLeaveEndDate", leave, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                            _this.loadingGetLeaveFrom.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                            _this.loadingGetLeaveFrom.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_YES"]) {
                            _this.loadingGetLeaveFrom.dismiss();
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
                        _this.dateFrom = _this.datepipe.transform(new Date(jsonData['Value'][0]['LEAVEFROM']).toString(), 'yyyy-MM-dd');
                        _this.dateTo = _this.datepipe.transform(new Date(jsonData['Value'][0]['LEAVETO']).toString(), 'yyyy-MM-dd');
                        _this.timeTo = jsonData['Value'][0]['LeaveToTime'];
                        _this.loadingGetLeaveFrom.dismiss();
                    })
                        .catch(function (error) {
                        _this.loadingGetLeaveFrom.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    LeaveaddPage.prototype.sendLeaveRequest = function () {
        var _this = this;
        if (this.duration == "" || this.duration == undefined) {
            alert('Duration is empty!');
            return;
        }
        if (this.dateFrom == null || this.dateFrom == undefined || this.dateFrom == '') {
            alert("Leave Date is empty");
            return;
        }
        var selectedDate = this.datepipe.transform(this.dateFrom, 'MM/dd/yyyy');
        var leave = {
            ID: 0,
            EmployeeId: Number(this.empId),
            LeaveType: this.type,
            LeaveRequestType: null,
            LeaveNoOfDays: this.duration,
            LeaveFrom: selectedDate,
            LeaveFromTime: this.timeFrom,
            LeaveTo: selectedDate,
            LeaveToTime: "PM",
            LeaveReturn: selectedDate,
            LeaveRemark: this.remarks,
            LeaveReason: this.reason,
            LeaveRequestStatus: this.getStatus(),
            Attachment: null,
            ApproverRemarks: null,
            CancelRemarks: null,
            ApprovalStatus: null,
            User: this.empId,
            DateFrom: null,
            DateTo: null,
            EmpName: null,
            ShowAll: false
        };
        if (this.subId != '') {
            leave['EmployeeId'] = Number(this.subId);
            leave['User'] = this.empId;
        }
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            console.log("Load");
            if (_this.hasAttachment) {
                leave['Attachment'] = _this.getNewName();
                console.log("Will connect to ftp");
                _this.connectToFtp(_this.uriName, leave);
                return;
            }
            if (_this.currentDate != '') {
                leave['ID'] = Number(_this.leaveId);
                _this.updateLeave(leave);
            }
            else {
                if (_this.subId != '') {
                    _this.requestLeaveForSubordinate(leave);
                }
                else {
                    _this.requestLeave(leave);
                }
            }
        });
    };
    LeaveaddPage.prototype.onUploadFinish = function (leave) {
        console.log("onUploadFinish");
        if (this.currentDate != '') {
            leave['ID'] = Number(this.leaveId);
            this.updateLeave(leave);
        }
        else {
            if (this.subId != '') {
                this.requestLeaveForSubordinate(leave);
            }
            else {
                this.requestLeave(leave);
            }
        }
    };
    LeaveaddPage.prototype.requestLeave = function (leave) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            console.log("requestLeave");
            leave['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]];
            leave['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]];
            leave['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]];
            leave['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"];
            leave['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/LeaveRequest/LeaveRequest", leave, {})
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
                    _this.showDialog("DONE!", "Your leave has been saved", true, "Great!");
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    LeaveaddPage.prototype.requestLeaveForSubordinate = function (leave) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            leave['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]];
            leave['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]];
            leave['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]];
            leave['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"];
            leave['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/GetSubordinates/LeaveRequest", leave, {})
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
                    _this.showDialog("DONE!", "Requested leave has been saved", true, "Great!");
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    LeaveaddPage.prototype.updateLeave = function (leave) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            leave['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]];
            leave['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]];
            leave['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]];
            leave['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"];
            leave['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/LeaveRequest/UpdateLeaveRequest", leave, {})
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
                    _this.showDialog("DONE!", "Your leave has been saved", true, "Great!");
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    LeaveaddPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
                                            _this.navCtrl.pop();
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
    LeaveaddPage.prototype.onLeaveTypeChange = function () {
        this.getAddLeaveEndDate();
        if (this.type == "BL") {
            this.isDurationDisabled = true;
            this.isReasonDisabled = true;
            this.duration = "1";
            this.reason = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["Reason"].personal;
        }
        else {
            this.isDurationDisabled = false;
            this.isReasonDisabled = false;
        }
    };
    LeaveaddPage.prototype.getStatus = function () {
        return (this.isPlanned ? src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["LEAVE_STATUS_PLANNED"] : src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["LEAVE_STATUS_FOR_APPROVAL"]);
    };
    LeaveaddPage.prototype.getConfigFiles = function (employeeID) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]],
                UserID: employeeID,
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"],
                UserType: 'GABC'
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/Config/GetConfigFiles", request, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Success'] == "Yes") {
                        _this.results = jsonData['Value']['tblLeaveTypeList'];
                        if (!_this.type) {
                            _this.type = _this.results['0']['SEQNO'];
                        }
                        if (_this.subId != '') {
                            _this.type = _this.results['0']['SEQNO'];
                        }
                    }
                    else {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                    }
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    LeaveaddPage.prototype.onSubordinateChange = function () {
        this.getConfigFiles(this.subId);
    };
    LeaveaddPage.prototype.attachFile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 100,
                            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                            saveToPhotoAlbum: false,
                            correctOrientation: true
                        };
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Select Action',
                                buttons: [{
                                        text: 'Photos',
                                        icon: 'image',
                                        handler: function () {
                                            _this.imagePicker.getPictures(options).then(function (results) {
                                                if (results.length > 1) {
                                                    alert("Please select only 1 image/file");
                                                    return;
                                                }
                                                _this.getFileName(String(results[0]));
                                            }, function (err) {
                                                alert("Error attaching file. Please try again.");
                                            });
                                        }
                                    }, {
                                        text: 'Files/iCloud',
                                        icon: 'folder',
                                        handler: function () {
                                            _this.filePicker.pickFile()
                                                .then(function (uri) {
                                                return _this.getFileName(String(uri));
                                            })
                                                .catch(function (err) { return alert("Error attaching file. Please try again."); });
                                        }
                                    }, {
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
    LeaveaddPage.prototype.showUploadFailDialog = function (error) {
        console.log("showUploadFailDialog");
        console.log(error);
        if (this.loading) {
            this.loading.dismiss();
        }
        this.uploadSuccess = false;
        alert("Error attaching file. Please try again.");
    };
    LeaveaddPage.prototype.connectToFtp = function (file, leave) {
        var _this = this;
        console.log("connectToFtp");
        this.fTP.connect(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["FTP_HOST"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["FTP_USERNAME"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["FTP_PASSWORD"])
            .then(function (res) { return _this.uploadFileToFtp(file, res, leave); })
            .catch(function (error) { return _this.showUploadFailDialog(error); });
    };
    LeaveaddPage.prototype.uploadFileToFtp = function (file, res, leave) {
        var _this = this;
        console.log("uploadFileToFtp");
        this.fTP.upload(file, "/Leave/" + this.getNewName())
            .subscribe(function (res) {
            if (res == 1) {
                _this.onUploadFinish(leave);
                _this.fTP.disconnect();
                _this.uploadSuccess = true;
            }
            else {
                console.log("Not Res 1");
                console.log(res);
            }
        }, function (error) {
            _this.showUploadFailDialog(error);
        });
        // .toPromise()
        // .then((res) => {
        //   if (res == 1) {
        //     this.onUploadFinish(leave);
        //     this.fTP.disconnect();
        //     this.uploadSuccess = true;
        //   }
        //   else{
        //     console.log("Not Res 1");
        //     console.log(res);
        //   }
        // })
        // .catch(err => { this.showUploadFailDialog(err) });
    };
    LeaveaddPage.prototype.getFileName = function (name) {
        this.hasAttachment = true;
        this.uriName = name;
        var temp = name.split("/");
        var awe = temp[temp.length - 1];
        this.fileName = awe;
        return awe;
    };
    LeaveaddPage.prototype.getPaddedName = function (name) {
        var paddedName = "";
        if (name.length <= 9) {
            paddedName = ("000000000" + name).substring(name.length);
        }
        return paddedName;
    };
    LeaveaddPage.prototype.getExtension = function (name) {
        var temp = name.split(".");
        var awe = temp[temp.length - 1];
        return awe;
    };
    LeaveaddPage.prototype.getNewName = function () {
        var newFileName = this.getFileName(this.uriName);
        newFileName = newFileName.replace(this.getExtension(this.uriName), "");
        newFileName = newFileName.replace(".", "");
        newFileName = newFileName.replace(" ", "");
        newFileName = newFileName.replace("  ", "");
        newFileName = newFileName.replace("/", "");
        newFileName = newFileName.replace("-", "");
        newFileName = newFileName.replace("'", "");
        newFileName = this.getPaddedName(String(this.empId)) + newFileName + this.getCurrentDate() + "." + this.getExtension(this.uriName);
        return newFileName;
    };
    LeaveaddPage.prototype.getCurrentDate = function () {
        return this.datepipe.transform(new Date().toString(), 'yyyyMMddHHmmss');
    };
    LeaveaddPage.prototype.removeAttachment = function () {
        this.fileName = "No ";
        this.hasAttachment = false;
    };
    LeaveaddPage.prototype.onPlannedChecked = function () {
        if (this.isPlanned) {
            this.reason = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["Reason"].personal;
            this.isReasonDisabled = true;
        }
        else if (this.type == "BL") {
            this.isReasonDisabled = true;
            this.reason = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["Reason"].personal;
        }
        else if (!this.isPlanned && this.type != "BL") {
            this.isReasonDisabled = false;
        }
    };
    LeaveaddPage.prototype.isDivisibleByDot5 = function (number) {
        return number % .5 == 0;
    };
    LeaveaddPage.prototype.onDurationChanged = function () {
        if (!this.isDivisibleByDot5(Number(this.duration))) {
            alert("Leave Duration should be divisible by 0.50");
            this.duration = "1";
            return;
        }
        this.getAddLeaveEndDate();
    };
    LeaveaddPage.prototype.goBack = function () { this.navCtrl.back(); };
    LeaveaddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaveadd',
            template: __webpack_require__(/*! ./leaveadd.page.html */ "./src/app/pages/leaveadd/leaveadd.page.html"),
            styles: [__webpack_require__(/*! ./leaveadd.page.scss */ "./src/app/pages/leaveadd/leaveadd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"],
            _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_10__["IOSFilePicker"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"],
            _ionic_native_ftp_ngx__WEBPACK_IMPORTED_MODULE_13__["FTP"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]])
    ], LeaveaddPage);
    return LeaveaddPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-leaveadd-leaveadd-module.js.map