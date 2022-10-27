(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advisoryadd-advisoryadd-module"],{

/***/ "./src/app/pages/advisoryadd/advisoryadd.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/advisoryadd/advisoryadd.module.ts ***!
  \*********************************************************/
/*! exports provided: AdvisoryaddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisoryaddPageModule", function() { return AdvisoryaddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _advisoryadd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advisoryadd.page */ "./src/app/pages/advisoryadd/advisoryadd.page.ts");







var routes = [
    {
        path: '',
        component: _advisoryadd_page__WEBPACK_IMPORTED_MODULE_6__["AdvisoryaddPage"]
    }
];
var AdvisoryaddPageModule = /** @class */ (function () {
    function AdvisoryaddPageModule() {
    }
    AdvisoryaddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_advisoryadd_page__WEBPACK_IMPORTED_MODULE_6__["AdvisoryaddPage"]]
        })
    ], AdvisoryaddPageModule);
    return AdvisoryaddPageModule;
}());



/***/ }),

/***/ "./src/app/pages/advisoryadd/advisoryadd.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/advisoryadd/advisoryadd.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons class=\"buttonHeaderClass\" mode=\"md\">\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\" (click)=\"goBack()\"></ion-back-button>\n        <ion-title mode=\"md\">{{title}}</ion-title>\n        <ion-button class=\"btnSubmit\" slot=\"end\" (click)=\"sendAdvisory()\">\n            <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-header>\n<ion-content class=\"ContentClass\">\n    <ion-list lines=\"none\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != '' && !isSubDisabled\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">SUBORDINATE</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"subId\" (ionChange)=\"onSubordinateChange()\">\n                            <div *ngFor=\"let item of (subordinates)\">\n                                <ion-select-option value=\"{{ item.EMPLOYEEID }}\">{{ item.EMPNAME }}</ion-select-option>\n                            </div>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"12\" *ngIf=\"!isSubDisabled\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">REQUEST TYPE</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"selectedReqType\" (ionChange)=\"onRequestTypeChanged()\">\n                            <ion-select-option *ngFor=\"let type of atdRequestType; let i = index\" value={{type.SEQNO}} selected=\"i=0\">\n                                {{type.DESCRIPTION}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"8\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">REQUEST DATE</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"selectedDate\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" min=\"2016\" max=\"2099\">\n                            mm/dd/yyyy</ion-datetime>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"8\">\n                    <ion-item id=\"leavetype\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">REQUEST TIME</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"selectedReqTime\">\n                            <ion-select-option *ngFor=\"let type of atdTimeType; let i = index\" value={{type.SEQNO}} selected=\"i=0\">\n                                {{type.DESCRIPTION}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-item *ngIf=\"selectedReqTime == 'TME0002'\" class=\"duration\" [disabled]=\"isDurationDisabled\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">&nbsp;</ion-label>\n                        <ion-input id=\"rounded\" type=\"number\" [(ngModel)]=\"duration\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"8\" *ngIf=\"selectedReqType == 'ATD0003'\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">DATE OF DUTY</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"selectedDateOfDuty\">\n                            <ion-select-option *ngFor=\"let type of dateOfDuty; let i = index\" value={{type}} selected=\"i=0\">\n                                {{type}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"8\" *ngIf=\"selectedReqType == 'ATD0005'\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">OB START TIME</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"selectedTime\" display-format=\"hh:mm A\" picker-format=\"hh mm A\">\n                        </ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <!-- <ion-col size=\"4\">\n                    <ion-item>\n                      <ion-label class=\"EntityName\" position=\"stacked\">&nbsp;</ion-label>\n                      <ion-select [(ngModel)]=\"time\" id=\"rounded\">\n                        <ion-select-option value=\"AM\">AM</ion-select-option>\n                        <ion-select-option value=\"PM\">PM</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col> -->\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">REASON</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"selectedReason\">\n                            <ion-select-option *ngFor=\"let type of atdReason; let i = index\" value={{type.SEQNO}} selected=\"i=0\">\n                                {{type.DESCRIPTION}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <!-- <ion-item>\n                                <ion-label class=\"EntityName\" position=\"stacked\">REASON</ion-label>\n                                <ion-select [(ngModel)]=\"selectedReason\" id=\"rounded\" [disabled]=\"isReasonDisabled\">\n                                    <ion-select-option value=\"RSN0001\">Field</ion-select-option>\n                                    <ion-select-option value=\"RSN0002\">Seminar</ion-select-option>\n                                    <ion-select-option value=\"RSN0003\">Place of the store</ion-select-option>\n                                    <ion-select-option value=\"RSN0004\">Personal</ion-select-option>\n                                    <ion-select-option value=\"RSN0005\">Not feeling well</ion-select-option>\n                                    <ion-select-option value=\"RSN0006\">Work beyond 10 PM</ion-select-option>\n                                </ion-select>\n                            </ion-item> -->\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">REMARKS</ion-label>\n                        <ion-textarea id=\"rounded\" rows=\"3\" maxlength=\"500\" [(ngModel)]=\"remarks\"></ion-textarea>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"5\">\n                    <ion-item>\n                        <ion-button class=\"AttachButton\" shape=\"round\" (click)=\"attachFile()\">\n                            Attach File\n                            <ion-icon slot=\"start\" name=\"attach\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"7\">\n                    <ion-item class=\"FileName\">\n                        <ion-label>{{ fileName }}\n                        </ion-label>\n                        <ion-icon class=\"FileNameClose\" slot=\"end\" name=\"close-circle\" *ngIf=\"hasAttachment\" (click)=\"removeAttachment()\"></ion-icon>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n        </ion-grid>\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/advisoryadd/advisoryadd.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/advisoryadd/advisoryadd.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  margin-left: -10px;\n}\n\nion-select {\n  height: 40px !important;\n}\n\nion-input {\n  height: 40px !important;\n}\n\nion-datetime {\n  height: 40px !important;\n}\n\nion-checkbox {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n}\n\n.btnSubmit {\n  color: white;\n  padding-right: 5px;\n}\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\ninput {\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.EntityName {\n  font-size: 11px;\n  color: #676767;\n}\n\n.duration.ng-invalid {\n  border-bottom-color: transparent;\n}\n\n.duration.ng-valid {\n  border-bottom-color: transparent;\n}\n\n.calendarClass {\n  position: absolute;\n  right: 5px;\n  bottom: 4px;\n}\n\n.AttachButton {\n  font-size: inherit;\n  height: 90%;\n  width: 100%;\n  color: #484848;\n  --background: #D6D7D7;\n}\n\n.FileName {\n  --padding-start: 0;\n  font-size: 13px;\n}\n\n.FileNameClose {\n  height: 20px;\n  width: 20px;\n  color: #484848;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvYWR2aXNvcnlhZGQvYWR2aXNvcnlhZGQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZHZpc29yeWFkZC9hZHZpc29yeWFkZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO1VBQUEsb0NBQUE7QUNDSjs7QURFQTtFQUNJLHFDQUFBO1VBQUEsb0NBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZHZpc29yeWFkZC9hZHZpc29yeWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLWJvcmRlci1jb2xvcjogZ3JheTtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuI3JvdW5kZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dCB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uRW50aXR5TmFtZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjNjc2NzY3O1xufVxuXG4uZHVyYXRpb24ubmctaW52YWxpZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kdXJhdGlvbi5uZy12YWxpZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYWxlbmRhckNsYXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3R0b206IDRweDtcbn1cblxuLkF0dGFjaEJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgIC0tYmFja2dyb3VuZDogI0Q2RDdENztcbn1cblxuLkZpbGVOYW1lIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uRmlsZU5hbWVDbG9zZSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0QzQTgyODtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiBncmF5O1xufVxuXG4uYnRuU3VibWl0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbiNyb3VuZGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5FbnRpdHlOYW1lIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzY3Njc2Nztcbn1cblxuLmR1cmF0aW9uLm5nLWludmFsaWQge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmR1cmF0aW9uLm5nLXZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYWxlbmRhckNsYXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICBib3R0b206IDRweDtcbn1cblxuLkF0dGFjaEJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgLS1iYWNrZ3JvdW5kOiAjRDZEN0Q3O1xufVxuXG4uRmlsZU5hbWUge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLkZpbGVOYW1lQ2xvc2Uge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBjb2xvcjogIzQ4NDg0ODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/advisoryadd/advisoryadd.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/advisoryadd/advisoryadd.page.ts ***!
  \*******************************************************/
/*! exports provided: AdvisoryaddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisoryaddPage", function() { return AdvisoryaddPage; });
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














var AdvisoryaddPage = /** @class */ (function () {
    function AdvisoryaddPage(storage, httpApi, datepipe, activatedRoute, loginService, navCtrl, alertController, actionSheetController, loadingCtrl, filePicker, camera, fTP, imagePicker, router) {
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
        this.selectedReqTime = "TME0002";
        this.selectedReason = "RSN0001";
        this.fileName = "No Attachment";
        this.hasAttachment = false;
        this.activityResult = false;
    }
    AdvisoryaddPage.prototype.ngOnInit = function () {
        var _this = this;
        this.reqId = this.activatedRoute.snapshot.paramMap.get('id');
        this.reqType = this.activatedRoute.snapshot.paramMap.get('type');
        this.reqDate = this.activatedRoute.snapshot.paramMap.get('date');
        this.reqTime = this.activatedRoute.snapshot.paramMap.get('reqtime');
        this.reqHrs = this.activatedRoute.snapshot.paramMap.get('hrs');
        this.reqDays = this.activatedRoute.snapshot.paramMap.get('days');
        this.reqReason = this.activatedRoute.snapshot.paramMap.get('reason');
        this.reqRemarks = this.activatedRoute.snapshot.paramMap.get('remarks');
        this.reqStartTime = this.activatedRoute.snapshot.paramMap.get('starttime');
        this.reqDateOfDuty = this.activatedRoute.snapshot.paramMap.get('dateduty');
        this.subId = this.activatedRoute.snapshot.paramMap.get('subid');
        this.fromPage = this.activatedRoute.snapshot.paramMap.get('page');
        if (this.reqStartTime != '') {
            this.selectedTime = this.convert24Hours(this.reqStartTime.trim());
        }
        this.isRequestTimeDisabled = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
        });
        console.log(this.subId);
        if (this.subId != '') {
            this.getConfigFiles(this.subId);
            this.getReason();
            if (this.fromPage == 'fromSubsProfile') {
                this.isSubDisabled = true;
            }
            else {
                this.isSubDisabled = false;
            }
        }
        else {
            this.isSubDisabled = false;
            // this.storage.get(`${Constants.KEY_REQTYPE}`).then((val) => {
            //   val.forEach(element => {
            // this.requestType.push(element['DESCRIPTION']);
            // if (this.reqType != '') {
            //   this.selectedReqType = this.getRequestTypeDesc(this.reqType);
            // } else {
            //   this.selectedReqType = this.requestType[0];
            // }
            console.log('getRequestType');
            this.getRequestType();
            this.getReason();
            this.onRequestTypeChanged();
            // });
            this.setTitle();
            this.getDateOfDuty();
            // });
            console.log(this.selectedReqType);
            this.activityResult = true;
        }
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SUBORDINATES"]).then(function (val) {
            _this.subordinates = val;
        });
        // this.getDateOfDuty();
    };
    AdvisoryaddPage.prototype.setTitle = function () {
        if (this.reqDate == '') {
            this.title = "Add Attd. Advisory";
        }
        else {
            this.title = "Edit Attd. Advisory";
            this.selectedDate = this.datepipe.transform(new Date(this.reqDate).toString(), 'yyyy-MM-dd');
            this.selectedReqTime = this.reqTime;
            if (this.reqDateOfDuty != '') {
                this.selectedDateOfDuty = this.reqDateOfDuty;
            }
            // if (this.reqTime != '') {
            //   this.selectedTime = this.reqTime;
            // }
            if (this.reqReason != '') {
                this.selectedReason = this.reqReason;
            }
            this.setDuration();
            this.remarks = this.reqRemarks;
        }
    };
    AdvisoryaddPage.prototype.setDuration = function () {
        if (this.reqDays != '0') {
            this.duration = this.reqDays;
        }
        else if (this.reqHrs != '0') {
            this.duration = this.reqHrs;
        }
        else {
            this.duration = '0';
        }
    };
    AdvisoryaddPage.prototype.onRequestTypeChanged = function () {
        this.getTimeType();
        this.isRequestTimeDisabled = (this.selectedReqType == src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_CTO"]);
        this.isDurationDisabled = (this.selectedReqType == src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_CTO"]);
        switch (this.selectedReqType) {
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_OS"]: {
                this.isRequestTimeDisabled = true;
                this.isDurationDisabled = false;
                // this.selectedReqTime = "TME0004";
                break;
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_AL"]: {
                this.isRequestTimeDisabled = true;
                this.isDurationDisabled = false;
                // this.selectedReqTime = "TME0002";
                this.setDuration();
                break;
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_CTO"]: {
                // this.selectedReqTime = "TME0002";
                this.duration = "4";
                break;
            }
            default: {
                this.setDuration();
                break;
            }
        }
    };
    AdvisoryaddPage.prototype.sendAdvisory = function () {
        var _this = this;
        console.log("***** advisoryadd.page.ts :: sendAdvisory() *****");
        var advisory = {
            USER: this.empId,
            EMPNO: Number(this.empId)
        };
        if (this.selectedDate == null || this.selectedDate == undefined || this.selectedDate == '') {
            alert("Request Date is empty");
            return;
        }
        if (this.selectedReqTime == "TME0002") {
            if (this.duration == null || this.duration == undefined || this.duration == '') {
                alert("Request Time duratioin is empty");
                return;
            }
            advisory['HRS'] = String(this.duration);
        }
        if (this.selectedReqType == src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_OS"]) {
            if (this.selectedDateOfDuty == null || this.selectedDateOfDuty == undefined || this.selectedDateOfDuty == '') {
                alert("Date of duty is empty");
                return;
            }
            advisory['DATEOFDUTY'] = this.selectedDateOfDuty;
        }
        if (this.selectedReqType == src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_OB"]) {
            if (this.selectedTime == null || this.selectedTime == undefined || this.selectedTime == '') {
                alert("Start time is empty");
                return;
            }
            advisory['STARTTIME'] = this.datepipe.transform(this.selectedTime, 'hh:mm:ss');
        }
        if (this.remarks == null || this.remarks == undefined || this.remarks == '') {
            alert("Remarks is empty");
            return;
        }
        advisory['REMARKS'] = this.remarks;
        advisory['REQUESTTYPECODE'] = this.selectedReqType;
        advisory['REQUESTDATE'] = this.datepipe.transform(this.selectedDate, 'MM/dd/yyyy');
        advisory['REQTIME'] = this.selectedReqTime;
        advisory['REASONCODE'] = this.selectedReason;
        advisory['STATUSCODE'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_FOR_APPROVAL"];
        if (this.subId != '') {
            advisory['EMPNO'] = Number(this.subId);
            advisory['USER'] = this.empId;
            advisory['STATUSCODE'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_APPROVED"];
        }
        if (this.fromPage == 'fromSubsProfile') {
            advisory['ID'] = this.reqId;
            advisory['REQUESTTYPECODE'] = this.reqType;
            advisory['EMPNO'] = Number(this.subId);
            this.selectedReqType = this.reqType;
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
                console.log(advisory);
                _this.updateAdvisory(advisory);
            }
            else {
                console.log("***** advisory: %O", advisory);
                _this.requestAdvisory(advisory);
            }
        });
    };
    AdvisoryaddPage.prototype.onUploadFinish = function (advisory) {
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
    AdvisoryaddPage.prototype.requestAdvisory = function (advisory) {
        this.requestAttendanceAvisory(advisory);
    };
    AdvisoryaddPage.prototype.requestAttendanceAvisory = function (advisory) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            advisory['RecordID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]];
            advisory['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]];
            advisory['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]];
            advisory['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"];
            advisory['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
            advisory['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]];
            console.log(advisory);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                var url = value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/AddAttendanceAdvisory";
                console.log("***** url: " + url);
                _this.httpApi.post(url, advisory, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
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
                        _this.showDialog("DONE!", "Requested " + _this.getRequestTypeDesc(_this.selectedReqType) + " has been saved", true, "Great!");
                    }
                    else {
                        _this.showDialog("DONE!", "Your " + _this.getRequestTypeDesc(_this.selectedReqType) + " has been saved", true, "Great!");
                    }
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    AdvisoryaddPage.prototype.updateAdvisory = function (advisory) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            advisory['RecordID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]];
            advisory['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]];
            advisory['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]];
            advisory['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"];
            advisory['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
            advisory['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/UpdateAttendanceAdvisory", advisory, {})
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
                    _this.showDialog("DONE!", "Your " + _this.getRequestTypeDesc(_this.selectedReqType) + " has been saved", true, "Great!");
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    AdvisoryaddPage.prototype.getRequestType = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                DATEFROM: null,
                DATETO: null,
                EMPNO: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]],
                DEPARTMENTCODE: null,
                REASONCODE: null,
                STATUSCODE: null,
                ID: null,
                USER: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]],
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"]
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/WorkFromHome/GetAttendanceType", request, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Success'] == "Yes") {
                        _this.atdRequestType = jsonData['Value'];
                        console.log(_this.atdRequestType);
                        console.log(_this.reqType);
                        if (_this.reqType != '') {
                            _this.selectedReqType = _this.reqType;
                        }
                        else {
                            _this.selectedReqType = _this.atdRequestType[0]["SEQNO"];
                        }
                        _this.getTimeType();
                    }
                    else {
                        alert("Connection failed. Please try again.");
                    }
                })
                    .catch(function (error) {
                    alert("Connection failed. Please try again.");
                });
            });
        });
    };
    AdvisoryaddPage.prototype.getTimeType = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                DATEFROM: null,
                DATETO: null,
                EMPNO: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]],
                DEPARTMENTCODE: null,
                REASONCODE: null,
                STATUSCODE: null,
                ID: null,
                USER: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]],
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                REQUESTTYPECODE: _this.selectedReqType
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                console.log(request);
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/WorkFromHome/GetAttendanceTimeType", request, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Success'] == "Yes") {
                        _this.atdTimeType = jsonData['Value'];
                        if (_this.atdTimeType.length > 0) {
                            _this.selectedReqTime = _this.atdTimeType[0]["SEQNO"];
                        }
                    }
                    else {
                        alert("Connection failed. Please try again.");
                    }
                })
                    .catch(function (error) {
                    console.log(error.error);
                    alert("Connection failed. Please try again.");
                });
            });
        });
    };
    AdvisoryaddPage.prototype.getReason = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                DATEFROM: null,
                DATETO: null,
                EMPNO: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]],
                DEPARTMENTCODE: null,
                REASONCODE: null,
                STATUSCODE: null,
                ID: null,
                USER: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]],
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/WorkFromHome/GetAttendanceReasonType", request, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Success'] == "Yes") {
                        _this.atdReason = jsonData['Value'];
                        if (_this.atdReason.length > 0) {
                            _this.selectedReason = _this.atdReason[0]["SEQNO"];
                        }
                    }
                    else {
                        alert("Connection failed. Please try again.");
                    }
                })
                    .catch(function (error) {
                    console.log(error.error);
                    alert("Connection failed. Please try again.");
                });
            });
        });
    };
    AdvisoryaddPage.prototype.getDateOfDuty = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                UserID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                UserType: 'GABC',
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/Config/GetConfigFiles", request, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Success'] == "Yes") {
                        var dates = jsonData['Value']['tblDateOfDutyList'];
                        dates.forEach(function (element) {
                            _this.dateOfDuty.push(element['DESCRIPTION']);
                            _this.selectedDateOfDuty = _this.dateOfDuty[0];
                        });
                    }
                    else {
                        alert("Connection failed. Please try again.");
                    }
                })
                    .catch(function (error) {
                    alert("Connection failed. Please try again.");
                });
            });
        });
    };
    AdvisoryaddPage.prototype.getRequestTypeCode = function (type) {
        switch (type) {
            case "Authorized Under Time": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_AUT"];
            }
            case "Authorized Late": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_AL"];
            }
            case "CTO": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_CTO"];
            }
            case "Official Business": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_OB"];
            }
            case "Offset": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_OS"];
            }
            case "Authorized Shifting": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_AS"];
            }
            default: {
                return type;
            }
        }
    };
    AdvisoryaddPage.prototype.getRequestTypeDesc = function (type) {
        switch (type) {
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_AUT"]: {
                return "Authorized Under Time";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_AL"]: {
                return "Authorized Late";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_CTO"]: {
                return "CTO";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_OB"]: {
                return "Official Business";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_OS"]: {
                return "Offset";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_AS"]: {
                return "Authorized Shifting";
            }
            case 'ATD0013': {
                return "Work From Home";
            }
            default: {
                return type;
            }
        }
    };
    AdvisoryaddPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
                                            _this.router.navigate(['/advisorytypelist']);
                                            //this.navCtrl.pop();
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
    AdvisoryaddPage.prototype.getConfigFiles = function (employeeID) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                UserID: employeeID,
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                UserType: 'GABC',
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/Config/GetConfigFiles", request, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Success'] == "Yes") {
                        var types = jsonData['Value']['tblRequestType'];
                        var dates = jsonData['Value']['tblDateOfDutyList'];
                        _this.atdRequestType = types;
                        // types.forEach(element => {
                        //   this.requestType.push(element['DESCRIPTION']);
                        // });
                        _this.selectedReqType = _this.atdRequestType[0]['SEQNO'];
                        _this.onRequestTypeChanged();
                        _this.setTitle();
                        dates.forEach(function (element) {
                            _this.dateOfDuty.push(element['DESCRIPTION']);
                            _this.selectedDateOfDuty = _this.dateOfDuty[0];
                        });
                    }
                    else {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                    }
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    AdvisoryaddPage.prototype.onSubordinateChange = function () {
        console.log(this.subId);
        this.dateOfDuty = [];
        this.requestType = [];
        this.getConfigFiles(this.subId);
    };
    AdvisoryaddPage.prototype.convert24Hours = function (time) {
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
    AdvisoryaddPage.prototype.attachFile = function () {
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
    AdvisoryaddPage.prototype.connectToFtp = function (file, advisory) {
        var _this = this;
        this.fTP.connect(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["FTP_HOST"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["FTP_USERNAME"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["FTP_PASSWORD"])
            .then(function (res) { return _this.uploadFileToFtp(file, res, advisory); })
            .catch(function (error) { return _this.showUploadError(); });
    };
    AdvisoryaddPage.prototype.uploadFileToFtp = function (file, res, advisory) {
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
    AdvisoryaddPage.prototype.getFileName = function (name) {
        this.hasAttachment = true;
        this.uriName = name;
        var temp = name.split("/");
        var awe = temp[temp.length - 1];
        this.fileName = awe;
        return awe;
    };
    AdvisoryaddPage.prototype.getPaddedName = function (name) {
        var paddedName = "";
        if (name.length <= 9) {
            paddedName = ("000000000" + name).substring(name.length);
        }
        return paddedName;
    };
    AdvisoryaddPage.prototype.getExtension = function (name) {
        var temp = name.split(".");
        var awe = temp[temp.length - 1];
        return awe;
    };
    AdvisoryaddPage.prototype.getNewName = function () {
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
    AdvisoryaddPage.prototype.getCurrentDate = function () {
        return this.datepipe.transform(new Date().toString(), 'yyyyMMddHHmmss');
    };
    AdvisoryaddPage.prototype.removeAttachment = function () {
        this.fileName = "No Attachment";
        this.hasAttachment = false;
    };
    AdvisoryaddPage.prototype.showUploadError = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
        alert("Error uploading attached file. Please try again later.");
    };
    AdvisoryaddPage.prototype.goBack = function () {
        // this.router.navigate(['/advisorytypelist']);
        this.navCtrl.back();
    };
    AdvisoryaddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advisoryadd',
            template: __webpack_require__(/*! ./advisoryadd.page.html */ "./src/app/pages/advisoryadd/advisoryadd.page.html"),
            styles: [__webpack_require__(/*! ./advisoryadd.page.scss */ "./src/app/pages/advisoryadd/advisoryadd.page.scss")]
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
    ], AdvisoryaddPage);
    return AdvisoryaddPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-advisoryadd-advisoryadd-module.js.map