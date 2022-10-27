(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workfromhomeadd-workfromhomeadd-module"],{

/***/ "./src/app/pages/workfromhomeadd/workfromhomeadd.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/workfromhomeadd/workfromhomeadd.module.ts ***!
  \*****************************************************************/
/*! exports provided: WorkfromhomeaddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkfromhomeaddPageModule", function() { return WorkfromhomeaddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _workfromhomeadd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workfromhomeadd.page */ "./src/app/pages/workfromhomeadd/workfromhomeadd.page.ts");







var routes = [
    {
        path: '',
        component: _workfromhomeadd_page__WEBPACK_IMPORTED_MODULE_6__["WorkfromhomeaddPage"]
    }
];
var WorkfromhomeaddPageModule = /** @class */ (function () {
    function WorkfromhomeaddPageModule() {
    }
    WorkfromhomeaddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_workfromhomeadd_page__WEBPACK_IMPORTED_MODULE_6__["WorkfromhomeaddPage"]]
        })
    ], WorkfromhomeaddPageModule);
    return WorkfromhomeaddPageModule;
}());



/***/ }),

/***/ "./src/app/pages/workfromhomeadd/workfromhomeadd.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/workfromhomeadd/workfromhomeadd.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons class=\"buttonHeaderClass\" mode=\"md\">\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        <ion-title mode=\"md\">{{title}}</ion-title>\n        <ion-button class=\"btnSubmit\" slot=\"end\" (click)=\"sendAdvisory()\">\n            <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-header>\n<ion-content class=\"ContentClass\">\n    <ion-list lines=\"none\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">SUBORDINATE</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"subId\" (ionChange)=\"onSubordinateChange()\">\n                            <div *ngFor=\"let item of (subordinates)\">\n                                <ion-select-option value=\"{{ item.EMPLOYEEID }}\">{{ item.EMPNAME }}</ion-select-option>\n                            </div>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n                <!-- <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">REQUEST TYPE</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"selectedReqType\">\n                            <ion-select-option>Work From Home</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col> -->\n            </ion-row>\n            <ion-row>\n                <!-- <ion-col size=\"8\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">REQUEST DATE</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"selectedDate\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" min=\"2016\" max=\"2099\">\n                            mm/dd/yyyy</ion-datetime>\n                    </ion-item>\n                </ion-col> -->\n                <ion-col size=\"4\">\n                    <ion-item class=\"duration\" [disabled]=\"isDurationDisabled\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">DURATION</ion-label>\n                        <ion-input id=\"rounded\" type=\"num\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\">\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"8\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">DATE FROM</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"selectedDate\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\" (ionChange)=\"getAddLeaveEndDate()\">\n                            mm/dd/yyyy</ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">&nbsp;</ion-label>\n                        <ion-select [(ngModel)]=\"timeFrom\" id=\"rounded\" (ionChange)=\"getAddLeaveEndDate()\">\n                            <ion-select-option value=\"AM\">AM</ion-select-option>\n                            <ion-select-option value=\"PM\">PM</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"8\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">DATE TO</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"dateTo\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" min=\"2016\" max=\"2099\" disabled>\n                            mm/dd/yyyy</ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">&nbsp;</ion-label>\n                        <ion-select [(ngModel)]=\"timeTo\" id=\"rounded\" disabled>\n                            <ion-select-option value=\"AM\">AM</ion-select-option>\n                            <ion-select-option value=\"PM\">PM</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <!-- <ion-row>\n                <ion-col size=\"8\">\n                    <ion-item id=\"leavetype\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">REQUEST TIME</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"selectedReqTime\">\n                            <ion-select-option *ngFor=\"let type of requestTimeList; let i = index\" value={{type.SEQNO}} selected=\"i=0\">\n                                {{type.DESCRIPTION}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-item *ngIf=\"selectedReqTime == 'TME0002'\" class=\"duration\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">&nbsp;</ion-label>\n                        <ion-input id=\"rounded\" type=\"number\" [(ngModel)]=\"duration\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row> -->\n            <!-- <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">REASON</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"selectedReason\">\n                            <div *ngFor=\"let item of requestReasonList\">\n                                <ion-select-option value=\"{{ item.SEQNO }}\">{{ item.DESCRIPTION }}</ion-select-option>\n                            </div>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row> -->\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">TASKS</ion-label>\n                        <ion-textarea id=\"rounded\" rows=\"3\" maxlength=\"500\" [(ngModel)]=\"remarks\"></ion-textarea>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row style=\"margin-left:20px\">\n                <ion-col size=\"12\">\n                    <ion-label class=\"label\">WFH Credits</ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row style=\"margin-left:20px\">\n                <ion-col size=\"4\">\n                    <ion-label class=\"label\">Balance : {{wfhBalance}}</ion-label>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-label class=\"label\">Credits : {{wfhCredits}}</ion-label>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-label class=\"label\">Posted : {{wfhPosted}}</ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row style=\"margin-left:20px\">\n                <ion-col size=\"4\">\n                    <ion-label class=\"label\">For Approval : {{wfhApproval}}</ion-label>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-label class=\"label\">Approved : {{wfhApproved}}</ion-label>\n                </ion-col>\n                <ion-col size=\"4\">\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"5\">\n                    <ion-item>\n                        <ion-button class=\"AttachButton\" shape=\"round\" (click)=\"attachFile()\">\n                            Attach File\n                            <ion-icon slot=\"start\" name=\"attach\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"7\">\n                    <ion-item class=\"FileName\">\n                        <ion-label>{{ fileName }}\n                        </ion-label>\n                        <ion-icon class=\"FileNameClose\" slot=\"end\" name=\"close-circle\" *ngIf=\"hasAttachment\" (click)=\"removeAttachment()\"></ion-icon>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n        </ion-grid>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/workfromhomeadd/workfromhomeadd.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/workfromhomeadd/workfromhomeadd.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  margin-left: -10px;\n}\n\nion-select {\n  height: 40px !important;\n}\n\nion-input {\n  height: 40px !important;\n}\n\nion-datetime {\n  height: 40px !important;\n}\n\nion-checkbox {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n}\n\n.btnSubmit {\n  color: white;\n  padding-right: 5px;\n}\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\ninput {\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.EntityName {\n  font-size: 11px;\n  color: #676767;\n}\n\n.duration.ng-invalid {\n  border-bottom-color: transparent;\n}\n\n.duration.ng-valid {\n  border-bottom-color: transparent;\n}\n\n.calendarClass {\n  position: absolute;\n  right: 5px;\n  bottom: 4px;\n}\n\n.AttachButton {\n  font-size: inherit;\n  height: 90%;\n  width: 100%;\n  color: #484848;\n  --background: #D6D7D7;\n}\n\n.FileName {\n  --padding-start: 0;\n  font-size: 13px;\n}\n\n.FileNameClose {\n  height: 20px;\n  width: 20px;\n  color: #484848;\n}\n\n.label {\n  color: #2a2a2a;\n  font-size: 12px;\n  font-family: \"RobotoLight\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvd29ya2Zyb21ob21lYWRkL3dvcmtmcm9taG9tZWFkZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dvcmtmcm9taG9tZWFkZC93b3JrZnJvbWhvbWVhZGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQ0FBQTtVQUFBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxxQ0FBQTtVQUFBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd29ya2Zyb21ob21lYWRkL3dvcmtmcm9taG9tZWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLWJvcmRlci1jb2xvcjogZ3JheTtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuI3JvdW5kZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dCB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uRW50aXR5TmFtZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjNjc2NzY3O1xufVxuXG4uZHVyYXRpb24ubmctaW52YWxpZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kdXJhdGlvbi5uZy12YWxpZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYWxlbmRhckNsYXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3R0b206IDRweDtcbn1cblxuLkF0dGFjaEJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgIC0tYmFja2dyb3VuZDogI0Q2RDdENztcbn1cblxuLkZpbGVOYW1lIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uRmlsZU5hbWVDbG9zZSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG4ubGFiZWwge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9MaWdodFwiO1xufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0QzQTgyODtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiBncmF5O1xufVxuXG4uYnRuU3VibWl0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbiNyb3VuZGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5FbnRpdHlOYW1lIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzY3Njc2Nztcbn1cblxuLmR1cmF0aW9uLm5nLWludmFsaWQge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmR1cmF0aW9uLm5nLXZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYWxlbmRhckNsYXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICBib3R0b206IDRweDtcbn1cblxuLkF0dGFjaEJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgLS1iYWNrZ3JvdW5kOiAjRDZEN0Q3O1xufVxuXG4uRmlsZU5hbWUge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLkZpbGVOYW1lQ2xvc2Uge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLmxhYmVsIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTGlnaHRcIjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/workfromhomeadd/workfromhomeadd.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/workfromhomeadd/workfromhomeadd.page.ts ***!
  \***************************************************************/
/*! exports provided: WorkfromhomeaddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkfromhomeaddPage", function() { return WorkfromhomeaddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-picker/ngx */ "./node_modules/@ionic-native/file-picker/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ftp_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/ftp/ngx */ "./node_modules/@ionic-native/ftp/ngx/index.js");
/* harmony import */ var src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/leave.service */ "./src/app/services/leave.service.ts");















var WorkfromhomeaddPage = /** @class */ (function () {
    function WorkfromhomeaddPage(storage, httpApi, datepipe, activatedRoute, loginService, navCtrl, alertController, actionSheetController, loadingCtrl, filePicker, camera, fTP, imagePicker, router) {
        this.storage = storage;
        this.httpApi = httpApi;
        this.datepipe = datepipe;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.loadingCtrl = loadingCtrl;
        this.filePicker = filePicker;
        this.camera = camera;
        this.fTP = fTP;
        this.imagePicker = imagePicker;
        this.router = router;
        this.requestType = [];
        this.dateOfDuty = [];
        this.selectedReqType = "Work From Home";
        this.timeFrom = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_13__["LeaveTime"].AM;
        this.timeTo = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_13__["LeaveTime"].AM;
        this.fileName = "No Attachment";
        this.hasAttachment = false;
        this.useCredits = 0;
        this.activityResult = false;
    }
    WorkfromhomeaddPage.prototype.ngOnInit = function () {
        var _this = this;
        this.reqId = this.activatedRoute.snapshot.paramMap.get('id');
        this.reqType = "Work From Home";
        this.reqDate = this.activatedRoute.snapshot.paramMap.get('reqdate');
        this.reqDay = this.activatedRoute.snapshot.paramMap.get('reqtime');
        this.reqDateOut = this.activatedRoute.snapshot.paramMap.get('reason');
        this.reqRemarks = this.activatedRoute.snapshot.paramMap.get('remark');
        this.subId = this.activatedRoute.snapshot.paramMap.get('subid');
        this.reqTimeFrom = this.activatedRoute.snapshot.paramMap.get('timefrom');
        this.reqTimeTo = this.activatedRoute.snapshot.paramMap.get('timeto');
        this.useCredits = false;
        this.isRequestTimeDisabled = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
        });
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_REQTYPE"]).then(function (val) {
            _this.setTitle();
        });
        this.activityResult = true;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SUBORDINATES"]).then(function (val) {
            _this.subordinates = val;
        });
        this.getWFHCredits();
    };
    WorkfromhomeaddPage.prototype.setTitle = function () {
        if (this.reqDate == '') {
            this.title = "Add Work From Home";
        }
        else {
            this.title = "Edit Work From Home";
            this.selectedDate = this.datepipe.transform(new Date(this.reqDate).toString(), 'yyyy-MM-dd');
            this.remarks = this.reqRemarks;
            this.duration = this.reqDay;
            this.dateTo = this.datepipe.transform(new Date(this.reqDateOut).toString(), 'yyyy-MM-dd');
            this.timeTo = this.reqTimeTo;
            this.timeFrom = this.reqTimeFrom;
        }
    };
    WorkfromhomeaddPage.prototype.sendAdvisory = function () {
        if (this.selectedDate == null || this.selectedDate == undefined || this.selectedDate == '') {
            alert("Request Date is empty");
            return;
        }
        if (this.remarks == null || this.remarks == undefined || this.remarks == '') {
            alert("Task is empty");
            return;
        }
        if (this.isNotCurrentYear(this.selectedDate)) {
            this.showIsNotYearWarning();
            return;
        }
        // else {
        //   this.postRequest();
        // }
        // this.getWfhBalPerWk();
        // ***** WFH Credits Validation *****
        var WIO = 3; // 3 is Wednesday
        var WFHWeeklyBalance = parseInt(this.wfhBalPerWk);
        var WFHCredits = parseInt(this.wfhCredits);
        var wfhDuration = parseInt(this.duration);
        var date1 = new Date(this.datepipe.transform(this.selectedDate, 'MM/dd/yyyy'));
        var date2 = new Date(this.datepipe.transform(this.dateTo, 'MM/dd/yyyy'));
        if (date1 == null || date2 == null) {
            this.showDialog("ERROR!", "Dates cannot be empty!", true, "Okay");
            this.loading.dismiss();
            return;
        }
        // 0 - Sunday, 1 - Monday, ..., 6 - Saturday
        var day1 = date1.getDay();
        var day2 = date2.getDay();
        if (wfhDuration > 1) {
            // *** MULTIPLE WFH FILING ***
            // case 1: filed for more than 1 WFH and falls on a required WIO
            if (day1 == WIO || day2 == WIO || (day1 < WIO && day2 > WIO)) {
                this.showDialog("ERROR!", "One of your requested WFH dates fall on a mandated WIO. Please review the request.", true, "Okay");
                return;
            }
            // case 3: filed for more than 1 WFH and exceeded the 3 max WFH per week
            if (wfhDuration > WFHWeeklyBalance) {
                this.showDialog("ERROR!", "You have exceeded the number of allowable WFH for the week.", true, "Okay");
                return;
            }
            else {
                // uses has enough credits, proceed filing
                console.log("***** [MULTIPLE] No WFH Credits Applied *****");
                this.postRequest();
            }
        }
        else {
            // *** SINGLE WFH FILING ***
            // case 2: filed for 1 WFH and falls on a required WIO
            if (day1 == WIO) {
                // Check WFH credits available
                if (WFHCredits > 0) {
                    // user has credits, confirm WFH Credits usage
                    this.showConfrimWFHCase2();
                }
                else {
                    this.showDialog("ERROR!", "No more WFH Credits available. Please review the request.", true, "Okay");
                }
                return;
            }
            // case 4: filed the max 3 WFH days for the week and wanted to file 1 more
            if (WFHWeeklyBalance == 0) {
                this.showConfrimWFHCase4();
                return;
            }
            else {
                // user has credits, proceed filing
                console.log("***** [SINGLE] No WFH Credits Applied *****");
                this.postRequest();
            }
        }
    };
    WorkfromhomeaddPage.prototype.showConfrimWFHCase2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Warning",
                            message: "Your WFH request is on a mandated WIO. Do you wish to use your WFH credits?",
                            buttons: [{
                                    text: 'No',
                                    role: 'cancel'
                                }, {
                                    text: "Yes",
                                    handler: function () {
                                        _this.useCredits = true;
                                        _this.postRequest();
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
    WorkfromhomeaddPage.prototype.showConfrimWFHCase4 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Warning",
                            message: "You have exceeded the number of allowable WFH for the week. Do you wish to use your WFH credits?",
                            buttons: [{
                                    text: 'No',
                                    role: 'cancel'
                                }, {
                                    text: "Yes",
                                    handler: function () {
                                        _this.useCredits = true;
                                        _this.postRequest();
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
    WorkfromhomeaddPage.prototype.postRequest = function () {
        var _this = this;
        var advisory = {
            USER: this.empId,
            EMPNO: Number(this.empId)
        };
        advisory['REMARKS'] = this.remarks;
        advisory['REQUESTTYPECODE'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_WFH"];
        advisory['REQUESTDATE'] = this.datepipe.transform(this.selectedDate, 'MM/dd/yyyy');
        advisory['REASONCODE'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_REASON_CODE_WFH"];
        advisory['STATUSCODE'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_FOR_APPROVAL"];
        advisory['DAYS'] = this.duration;
        advisory['REQUESTTIMEFROM'] = this.timeFrom;
        advisory['REQUESTTIMETO'] = this.timeTo;
        advisory['willUseWFHCredits'] = this.useCredits;
        console.log("***** postRequest() *****");
        console.log("date: " + advisory['REQUESTDATE']);
        console.log("willUseWFHCredits: " + advisory['willUseWFHCredits']);
        if (this.subId != '') {
            advisory['EMPNO'] = Number(this.subId);
            advisory['USER'] = this.empId;
            advisory['STATUSCODE'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_APPROVED"];
        }
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            if (_this.hasAttachment) {
                advisory['ATTACHMENT'] = _this.getNewName();
                _this.connectToFtp(_this.uriName, advisory);
                return;
            }
            if (_this.reqDate != '') {
                advisory['ID'] = _this.reqId;
                advisory['ISCANCEL'] = 0;
                advisory['SHOWALL'] = false;
                _this.updateAdvisory(advisory);
            }
            else {
                _this.requestAdvisory(advisory);
            }
        });
    };
    WorkfromhomeaddPage.prototype.onUploadFinish = function (advisory) {
        if (this.reqDate != '') {
            advisory['ID'] = this.reqId;
            advisory['ISCANCEL'] = 0;
            advisory['SHOWALL'] = false;
            this.updateAdvisory(advisory);
        }
        else {
            this.requestAdvisory(advisory);
        }
    };
    WorkfromhomeaddPage.prototype.requestAdvisory = function (advisory) {
        this.requestAttendanceAvisory(advisory);
    };
    WorkfromhomeaddPage.prototype.requestAttendanceAvisory = function (advisory) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            advisory['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]];
            advisory['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]];
            advisory['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]];
            advisory['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"];
            advisory['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
            console.log(advisory);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/WorkFromHome/AddAttendanceAdvisory", advisory, {})
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
                    if (_this.subId != '') {
                        _this.showDialog("DONE!", "Requested " + _this.selectedReqType + " has been saved", true, "Great!");
                    }
                    else {
                        _this.showDialog("DONE!", "Your " + _this.selectedReqType + " has been saved", true, "Great!");
                    }
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    WorkfromhomeaddPage.prototype.updateAdvisory = function (advisory) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            advisory['RecordID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]];
            advisory['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]];
            advisory['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]];
            advisory['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"];
            advisory['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/WorkFromHome/UpdateAttendanceAdvisory", advisory, {})
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
                        _this.loading.dismiss();
                        return;
                    }
                    _this.loading.dismiss();
                    _this.fromPage = "EDIT";
                    _this.showDialog("DONE!", "Your " + _this.selectedReqType + " has been saved", true, "Great!");
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    WorkfromhomeaddPage.prototype.isNotCurrentYear = function (date) {
        var currentYear = new Date().getFullYear();
        var selectedYear = new Date(date).getFullYear();
        return currentYear != selectedYear;
    };
    WorkfromhomeaddPage.prototype.showIsNotYearWarning = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Warning",
                            message: "The year you selected is not the current year. Would you like to proceed?",
                            buttons: [{
                                    text: 'No',
                                    role: 'cancel'
                                }, {
                                    text: "Yes",
                                    handler: function () {
                                        _this.postRequest();
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
    WorkfromhomeaddPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
                                            if (_this.fromPage == "EDIT") {
                                                _this.router.navigate(['/main/workfromhome']);
                                            }
                                            else {
                                                _this.navCtrl.pop();
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
    WorkfromhomeaddPage.prototype.onSubordinateChange = function () {
        console.log(this.subId);
        this.dateOfDuty = [];
        this.requestType = [];
    };
    WorkfromhomeaddPage.prototype.convert24Hours = function (time) {
        var timeSplit = time.split(':');
        var tempHour = timeSplit[0];
        var min = timeSplit[1].substring(0, 2);
        var amPm = time.substring(time.length - 2, time.length);
        var hour;
        if (amPm == "PM") {
            hour = Number(tempHour) + 12;
            return String(hour) + ':' + min;
        }
        else {
            return tempHour + ':' + min;
        }
    };
    WorkfromhomeaddPage.prototype.attachFile = function () {
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
                                                .catch(function (err) { return console.log('Error :', err); });
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
    WorkfromhomeaddPage.prototype.connectToFtp = function (file, advisory) {
        var _this = this;
        this.fTP.connect(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["FTP_HOST"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["FTP_USERNAME"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["FTP_PASSWORD"])
            .then(function (res) { return _this.uploadFileToFtp(file, res, advisory); })
            .catch(function (error) { return _this.showUploadError(); });
    };
    WorkfromhomeaddPage.prototype.uploadFileToFtp = function (file, res, advisory) {
        var _this = this;
        this.fTP.upload(file, "/AttendanceAdvisory/Year/" + this.getNewName())
            .toPromise()
            .then(function (res) {
            if (res == 1) {
                _this.onUploadFinish(advisory);
                _this.fTP.disconnect();
            }
        })
            .catch(function (err) { _this.showUploadError(); });
    };
    WorkfromhomeaddPage.prototype.getFileName = function (name) {
        this.hasAttachment = true;
        this.uriName = name;
        var temp = name.split("/");
        var awe = temp[temp.length - 1];
        this.fileName = awe;
        return awe;
    };
    WorkfromhomeaddPage.prototype.getPaddedName = function (name) {
        var paddedName = "";
        if (name.length <= 9) {
            paddedName = ("000000000" + name).substring(name.length);
        }
        return paddedName;
    };
    WorkfromhomeaddPage.prototype.getExtension = function (name) {
        var temp = name.split(".");
        var awe = temp[temp.length - 1];
        return awe;
    };
    WorkfromhomeaddPage.prototype.getNewName = function () {
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
    WorkfromhomeaddPage.prototype.getCurrentDate = function () {
        return this.datepipe.transform(new Date().toString(), 'yyyyMMddHHmmss');
    };
    WorkfromhomeaddPage.prototype.removeAttachment = function () {
        this.fileName = "No Attachment";
        this.hasAttachment = false;
    };
    WorkfromhomeaddPage.prototype.showUploadError = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
        alert("Error uploading attached file. Please try again later.");
    };
    WorkfromhomeaddPage.prototype.goBack = function () { this.navCtrl.back(); };
    WorkfromhomeaddPage.prototype.getAddLeaveEndDate = function () {
        var _this = this;
        console.log(this.selectedDate + " " + this.duration);
        if (!this.duration) {
            return;
        }
        if (!this.datepipe.transform(this.selectedDate, 'MM/dd/yyyy')) {
            return;
        }
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                USER: _this.empId,
                EMPNO: _this.empId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                ID: "",
                REQUESTTYPECODE: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_WFH"],
                REQUESTDATE: _this.datepipe.transform(_this.selectedDate, 'MM/dd/yyyy'),
                REQUESTDATETO: _this.datepipe.transform(_this.selectedDate, 'MM/dd/yyyy'),
                REMARKS: "",
                DAYS: _this.duration,
                REASONCODE: "",
                STATUSCODE: "",
                REQUESTTIMEFROM: _this.timeFrom,
                REQUESTTIMETO: ""
            };
            if (_this.subId != '') {
                request['EmployeeId'] = _this.subId;
            }
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loadingGetEndDate = overlay;
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/WorkFromHome/GetWorkFromHomeEndDateTime", request, {})
                        .then(function (data) {
                        console.log(data.data);
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                            _this.loadingGetEndDate.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        console.log(jsonData);
                        _this.loadingGetEndDate.dismiss();
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                            _this.loadingGetEndDate.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                            _this.loadingGetEndDate.dismiss();
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
                        _this.selectedDate = _this.datepipe.transform(new Date(jsonData['Value'][0]['REQUEST_DATE_FROM']).toString(), 'yyyy-MM-dd');
                        _this.dateTo = _this.datepipe.transform(new Date(jsonData['Value'][0]['REQUEST_DATE_TO']).toString(), 'yyyy-MM-dd');
                        _this.timeTo = jsonData['Value'][0]['REQUEST_TIME_TO'];
                        _this.loadingGetEndDate.dismiss();
                        // date is now available, request WFH Weekly Balance for that week
                        _this.getWfhBalPerWk();
                    })
                        .catch(function (error) {
                        console.log(error.error);
                        _this.loadingGetEndDate.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    WorkfromhomeaddPage.prototype.onDurationChanged = function () {
        if (!this.isDivisibleByDot5(Number(this.duration))) {
            alert("Duration should be divisible by 0.50");
            this.duration = "1";
            return;
        }
        this.getAddLeaveEndDate();
    };
    WorkfromhomeaddPage.prototype.isDivisibleByDot5 = function (number) {
        return number % .5 == 0;
    };
    // Get WFH credits available
    WorkfromhomeaddPage.prototype.getWFHCredits = function () {
        var _this = this;
        console.log("***** getWFHCredits() *****");
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var d = new Date();
            var datestring = d.getFullYear()
                + "-" + ("0" + (d.getMonth() + 1)).slice(-2)
                + "-" + ("0" + d.getDate()).slice(-2);
            var request = {
                USER: _this.empId,
                EMPNO: _this.empId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                REQUESTTYPECODE: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_WFH"],
                REQUESTDATE: datestring
            };
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loadingGetWFHCredits = overlay;
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/WorkFromHome/GetAttendanceAdvisoryCredits", request, {})
                        .then(function (data) {
                        console.log(data.data);
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR! [1]", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                            _this.loadingGetWFHCredits.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        console.log(jsonData);
                        _this.loadingGetWFHCredits.dismiss();
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR! [2]", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                            _this.loadingGetWFHCredits.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                            _this.loadingGetWFHCredits.dismiss();
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
                            _this.showDialog("ERROR! [3]", jsonData['Message'], false, "Okay");
                            return;
                        }
                        _this.wfhCredits = jsonData['Value'][0]['CREDITS'];
                        _this.wfhBalance = jsonData['Value'][0]['BALANCE'];
                        _this.wfhPosted = jsonData['Value'][0]['AVAILED'];
                        _this.wfhApproval = jsonData['Value'][0]['APPROVAL'];
                        _this.wfhApproved = jsonData['Value'][0]['APPROVED'];
                        console.log("***** wfhCredits: " + _this.wfhCredits);
                        console.log("***** wfhBalance: " + _this.wfhBalance);
                        console.log("***** wfhPosted: " + _this.wfhPosted);
                        console.log("***** wfhApproval: " + _this.wfhApproval);
                        console.log("***** wfhApproved: " + _this.wfhApproved);
                        _this.loadingGetWFHCredits.dismiss();
                    })
                        .catch(function (error) {
                        console.log(error.error);
                        _this.loadingGetWFHCredits.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    // Get weekly WFH balance for the week available
    WorkfromhomeaddPage.prototype.getWfhBalPerWk = function () {
        var _this = this;
        console.log("***** getWfhBalPerWk() *****");
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var d = new Date(_this.datepipe.transform(_this.selectedDate, 'MM/dd/yyyy'));
            var datestring = d.getFullYear()
                + "-" + ("0" + (d.getMonth() + 1)).slice(-2)
                + "-" + ("0" + d.getDate()).slice(-2);
            var request = {
                USER: _this.empId,
                EMPNO: _this.empId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                REQUESTTYPECODE: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_WFH"],
                REQUESTDATE: datestring
            };
            console.log("***** request:");
            console.log("USER: " + request.USER);
            console.log("SessionID: " + request.SessionID);
            console.log("SecurityStamp: " + request.SecurityStamp);
            console.log("Token: " + request.Token);
            console.log("AppPlatform: " + request.AppPlatform);
            console.log("AppVersion: " + request.AppVersion);
            console.log("REQUESTTYPECODE: " + request.REQUESTTYPECODE);
            console.log("REQUESTDATE: " + request.REQUESTDATE);
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loadingGetWFHBalPerWk = overlay;
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/WorkFromHome/GetEmployeeWFHBalancePerWeek", request, {})
                        .then(function (data) {
                        console.log(data.data);
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR! [1]", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                            _this.loadingGetWFHBalPerWk.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        console.log(jsonData);
                        _this.loadingGetWFHBalPerWk.dismiss();
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR! [2]", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                            _this.loadingGetWFHBalPerWk.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                            _this.loadingGetWFHBalPerWk.dismiss();
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
                            _this.showDialog("ERROR! [3]", jsonData['Message'], false, "Okay");
                            return;
                        }
                        _this.wfhBalPerWk = jsonData['Value'][0]['Column1'];
                        console.log("***** wfhBalPerWk: " + _this.wfhBalPerWk);
                        _this.loadingGetWFHBalPerWk.dismiss();
                    })
                        .catch(function (error) {
                        console.log(error.error);
                        _this.loadingGetWFHBalPerWk.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    WorkfromhomeaddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workfromhomeadd',
            template: __webpack_require__(/*! ./workfromhomeadd.page.html */ "./src/app/pages/workfromhomeadd/workfromhomeadd.page.html"),
            styles: [__webpack_require__(/*! ./workfromhomeadd.page.scss */ "./src/app/pages/workfromhomeadd/workfromhomeadd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["IOSFilePicker"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"],
            _ionic_native_ftp_ngx__WEBPACK_IMPORTED_MODULE_12__["FTP"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__["ImagePicker"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], WorkfromhomeaddPage);
    return WorkfromhomeaddPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-workfromhomeadd-workfromhomeadd-module.js.map