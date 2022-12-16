(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-overtimeadd-overtimeadd-module"],{

/***/ "./src/app/pages/overtimeadd/overtimeadd.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/overtimeadd/overtimeadd.module.ts ***!
  \*********************************************************/
/*! exports provided: OvertimeaddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimeaddPageModule", function() { return OvertimeaddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _overtimeadd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overtimeadd.page */ "./src/app/pages/overtimeadd/overtimeadd.page.ts");







var routes = [
    {
        path: '',
        component: _overtimeadd_page__WEBPACK_IMPORTED_MODULE_6__["OvertimeaddPage"]
    }
];
var OvertimeaddPageModule = /** @class */ (function () {
    function OvertimeaddPageModule() {
    }
    OvertimeaddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_overtimeadd_page__WEBPACK_IMPORTED_MODULE_6__["OvertimeaddPage"]]
        })
    ], OvertimeaddPageModule);
    return OvertimeaddPageModule;
}());



/***/ }),

/***/ "./src/app/pages/overtimeadd/overtimeadd.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/overtimeadd/overtimeadd.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons class=\"buttonHeaderClass\" mode=\"md\">\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        <ion-title mode=\"md\">{{title}}</ion-title>\n        <ion-button class=\"btnSubmit\" slot=\"end\" (click)=\"sendOTRequest()\">\n            <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-header>\n<ion-content class=\"ContentClass\">\n    <ion-list lines=\"none\">\n        <ion-grid>\n            <ion-row *ngIf=\"subId != ''\">\n                <ion-col size=\"12\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">SUBORDINATE</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"subId\" (ionChange)=\"onSubordinateChange()\">\n                            <div *ngFor=\"let item of (subordinates)\">\n                                <ion-select-option value=\"{{ item.EMPLOYEEID }}\">{{ item.EMPNAME }}</ion-select-option>\n                            </div>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">SCHEDULE TYPE</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"scheduleType\">\n                            <ion-select-option *ngFor=\"let item of (otOneType); let i = index\" selected=\"i=0\" value=\"{{ item.Value }}\">{{ item.Type }}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">START DATE</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"startDate\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\">\n                            mm/dd/yyyy</ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">START TIME</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"startTime\" display-format=\"hh:mm A\" picker-format=\"hh mm A\">\n                        </ion-datetime>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">END DATE</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"endDate\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\">\n                            mm/dd/yyyy</ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">END TIME</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"endTime\" display-format=\"hh:mm A\" picker-format=\"hh mm A\">\n                        </ion-datetime>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"5\">\n                    <ion-item *ngIf=\"subId != ''\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">APPROVED HOURS</ion-label>\n                        <ion-input class=\"input roundedItems\" id=\"rounded\" type=\"num\" [(ngModel)]=\"approvedHours\">\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">REMARKS</ion-label>\n                        <ion-textarea id=\"rounded\" rows=\"3\" maxlength=\"500\" [(ngModel)]=\"remarks\"></ion-textarea>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/overtimeadd/overtimeadd.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/overtimeadd/overtimeadd.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  margin-left: -10px;\n}\n\n.AttachButton {\n  font-size: inherit;\n  height: 90%;\n  width: 100%;\n  color: #484848;\n  --background: #D6D7D7;\n}\n\n.FileName {\n  --padding-start: 0;\n  font-size: 13px;\n}\n\n.FileNameClose {\n  height: 20px;\n  width: 20px;\n  color: #484848;\n}\n\nion-select {\n  height: 40px !important;\n}\n\nion-input {\n  height: 40px !important;\n}\n\nion-datetime {\n  height: 40px !important;\n}\n\nion-checkbox {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n}\n\n.btnSubmit {\n  color: white;\n  padding-right: 5px;\n}\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\ninput {\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.EntityName {\n  font-size: 11px;\n  color: #676767;\n}\n\n.duration.ng-invalid {\n  border-bottom-color: transparent;\n}\n\n.duration.ng-valid {\n  border-bottom-color: transparent;\n}\n\n.calendarClass {\n  position: absolute;\n  right: 5px;\n  bottom: 4px;\n}\n\n.lblTakeNote {\n  font-size: 11px;\n  font-style: italic;\n  padding-left: 20px;\n}\n\n.lblTakeNoteWithoutPay {\n  color: #F44336;\n}\n\n.AttachButton {\n  font-size: inherit;\n  height: 90%;\n  width: 100%;\n  color: #484848;\n  --background: #D6D7D7;\n}\n\n.FileName {\n  --padding-start: 0;\n  font-size: 13px;\n}\n\n.FileNameClose {\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3ZlcnRpbWVhZGQvQzpcXFVzZXJzXFwwMzE3NzVcXEdFQVItd29ya2luZyAtICg0KS9zcmNcXGFwcFxccGFnZXNcXG92ZXJ0aW1lYWRkXFxvdmVydGltZWFkZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL292ZXJ0aW1lYWRkL292ZXJ0aW1lYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO1VBQUEsb0NBQUE7QUNDSjs7QURFQTtFQUNJLHFDQUFBO1VBQUEsb0NBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdmVydGltZWFkZC9vdmVydGltZWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLkF0dGFjaEJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgIC0tYmFja2dyb3VuZDogI0Q2RDdENztcbn1cblxuLkZpbGVOYW1lIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uRmlsZU5hbWVDbG9zZSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0QzQTgyODtcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjRDNBODI4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiBncmF5O1xufVxuXG4uYnRuU3VibWl0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4jcm91bmRlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0IHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5FbnRpdHlOYW1lIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICM2NzY3Njc7XG59XG5cbi5kdXJhdGlvbi5uZy1pbnZhbGlkIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmR1cmF0aW9uLm5nLXZhbGlkIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNhbGVuZGFyQ2xhc3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIGJvdHRvbTogNHB4O1xufVxuXG4ubGJsVGFrZU5vdGUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ubGJsVGFrZU5vdGVXaXRob3V0UGF5IHtcbiAgICBjb2xvcjogI0Y0NDMzNjtcbn1cblxuLkF0dGFjaEJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgIC0tYmFja2dyb3VuZDogI0Q2RDdENztcbn1cblxuLkZpbGVOYW1lIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uRmlsZU5hbWVDbG9zZSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5BdHRhY2hCdXR0b24ge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIC0tYmFja2dyb3VuZDogI0Q2RDdENztcbn1cblxuLkZpbGVOYW1lIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5GaWxlTmFtZUNsb3NlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0QzQTgyODtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiBncmF5O1xufVxuXG4uYnRuU3VibWl0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbiNyb3VuZGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5FbnRpdHlOYW1lIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzY3Njc2Nztcbn1cblxuLmR1cmF0aW9uLm5nLWludmFsaWQge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmR1cmF0aW9uLm5nLXZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYWxlbmRhckNsYXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICBib3R0b206IDRweDtcbn1cblxuLmxibFRha2VOb3RlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmxibFRha2VOb3RlV2l0aG91dFBheSB7XG4gIGNvbG9yOiAjRjQ0MzM2O1xufVxuXG4uQXR0YWNoQnV0dG9uIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICAtLWJhY2tncm91bmQ6ICNENkQ3RDc7XG59XG5cbi5GaWxlTmFtZSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uRmlsZU5hbWVDbG9zZSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/overtimeadd/overtimeadd.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/overtimeadd/overtimeadd.page.ts ***!
  \*******************************************************/
/*! exports provided: OvertimeaddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimeaddPage", function() { return OvertimeaddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");









var OvertimeaddPage = /** @class */ (function () {
    function OvertimeaddPage(storage, datepipe, activatedRoute, navCtrl, loginService, alertController, actionSheetController, loadingCtrl, httpApi, events) {
        this.storage = storage;
        this.datepipe = datepipe;
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.loadingCtrl = loadingCtrl;
        this.httpApi = httpApi;
        this.events = events;
        this.otType = [];
    }
    OvertimeaddPage.prototype.ngOnInit = function () {
        var _this = this;
        this.noError = true;
        this.loadingDone = false;
        this.otOneType = [{
                Type: 'Regular OT',
                Value: 'RD',
            }];
        this.noError = false;
        this.loadingDone = true;
        if (!this.empId) {
            this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
            });
        }
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.scheduleType = this.activatedRoute.snapshot.paramMap.get('type');
        this.reqstartDate = this.activatedRoute.snapshot.paramMap.get('startdate');
        this.reqstartTime = this.activatedRoute.snapshot.paramMap.get('starttime');
        this.reqendDate = this.activatedRoute.snapshot.paramMap.get('enddate');
        this.reqendTime = this.activatedRoute.snapshot.paramMap.get('endtime');
        this.reqremarks = this.activatedRoute.snapshot.paramMap.get('remarks');
        this.subId = this.activatedRoute.snapshot.paramMap.get('subid');
        if (this.subId != '') {
            this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SUBORDINATESFOROT"]).then(function (val) {
                _this.subordinates = val;
            });
        }
        this.setTitle();
    };
    OvertimeaddPage.prototype.setTitle = function () {
        if (this.id == '') {
            this.title = "Add Overtime";
            this.scheduleType = "RD";
        }
        else {
            this.title = "Edit Overtime";
            this.startDate = this.datepipe.transform(new Date(this.reqstartDate).toString(), 'yyyy-MM-dd');
            this.endDate = this.datepipe.transform(new Date(this.reqendDate).toString(), 'yyyy-MM-dd');
            this.remarks = this.reqremarks;
            this.startTime = this.convert24Hours(this.reqstartTime.trim());
            this.endTime = this.convert24Hours(this.reqendTime.trim());
        }
    };
    OvertimeaddPage.prototype.sendOTRequest = function () {
        var _this = this;
        if (this.startDate == null || this.startDate == undefined || this.startDate == '') {
            alert("Start Date is empty");
            return;
        }
        if (this.startTime == null || this.startTime == undefined || this.startTime == '') {
            alert("Start Time is empty");
            return;
        }
        if (this.endDate == null || this.endDate == undefined || this.endDate == '') {
            alert("End Date is empty");
            return;
        }
        if (this.endTime == null || this.endTime == undefined || this.endTime == '') {
            alert("End Time is empty");
            return;
        }
        var selectedStartDate = this.datepipe.transform(this.startDate, 'MM/dd/yyyy');
        var selectedEndDate = this.datepipe.transform(this.endDate, 'MM/dd/yyyy');
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
        });
        var ot = {
            UserID: this.empId,
            EMPNO: this.empId,
            STARTDATE: selectedStartDate,
            ENDDATE: selectedEndDate,
            STARTTIME: this.startTime,
            ENDTIME: this.endTime,
            REMARKS: this.remarks,
            STATUS: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_FOR_APPROVAL"],
            SCHEDULEDTYPE: this.scheduleType,
            CreatedDate: null,
            IsActive: true,
        };
        if (this.subId != '') {
            ot['EMPNO'] = this.subId;
            ot['ApprovedOTHrs'] = this.approvedHours;
        }
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            if (_this.id == '') {
                if (_this.subId != '') {
                    _this.requestOTForSubordinate(ot);
                }
                else {
                    _this.requestOT(ot);
                }
            }
            else {
                ot['RecordId'] = _this.id;
                _this.updateOT(ot);
                _this.getOT();
            }
        });
    };
    OvertimeaddPage.prototype.requestOT = function (ot) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            ot['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]];
            ot['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]];
            ot['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]];
            ot['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"];
            ot['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/OTRequest/OTFile", ot, {})
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
                    _this.showDialog("DONE!", "Your overtime has been saved", true, "Great!");
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    OvertimeaddPage.prototype.updateOT = function (ot) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            ot['RecordID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]];
            ot['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]];
            ot['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]];
            ot['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"];
            ot['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/OTRequest/UpdateOT", ot, {})
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
                    _this.showDialog("DONE!", "Your overtime has been saved", true, "Great!");
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    OvertimeaddPage.prototype.getOT = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EMPNO: _this.empId,
                STARTDATE: "",
                ENDDATE: "",
                RecordID: _this.id
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/OTRequest/GetOTFiled", request, {})
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
                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_OTDETAILS"], jsonData['Value']['0']);
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    OvertimeaddPage.prototype.requestOTForSubordinate = function (ot) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            ot['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]];
            ot['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]];
            ot['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]];
            ot['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"];
            ot['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/GetSubordinates/OTFile", ot, {})
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
                    _this.showDialog("DONE!", "Requested overtime has been saved", true, "Great!");
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    OvertimeaddPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
                                            //his.events.publish('reloadDetails');
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
    OvertimeaddPage.prototype.convert24Hours = function (time) {
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
    OvertimeaddPage.prototype.goBack = function () { this.navCtrl.back(); };
    OvertimeaddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overtimeadd',
            template: __webpack_require__(/*! ./overtimeadd.page.html */ "./src/app/pages/overtimeadd/overtimeadd.page.html"),
            styles: [__webpack_require__(/*! ./overtimeadd.page.scss */ "./src/app/pages/overtimeadd/overtimeadd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"]])
    ], OvertimeaddPage);
    return OvertimeaddPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-overtimeadd-overtimeadd-module.js.map