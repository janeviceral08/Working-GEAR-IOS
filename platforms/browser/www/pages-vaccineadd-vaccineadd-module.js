(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vaccineadd-vaccineadd-module"],{

/***/ "./src/app/pages/vaccineadd/vaccineadd.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/vaccineadd/vaccineadd.module.ts ***!
  \*******************************************************/
/*! exports provided: VaccineaddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccineaddPageModule", function() { return VaccineaddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vaccineadd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaccineadd.page */ "./src/app/pages/vaccineadd/vaccineadd.page.ts");







var routes = [
    {
        path: '',
        component: _vaccineadd_page__WEBPACK_IMPORTED_MODULE_6__["VaccineaddPage"]
    }
];
var VaccineaddPageModule = /** @class */ (function () {
    function VaccineaddPageModule() {
    }
    VaccineaddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vaccineadd_page__WEBPACK_IMPORTED_MODULE_6__["VaccineaddPage"]]
        })
    ], VaccineaddPageModule);
    return VaccineaddPageModule;
}());



/***/ }),

/***/ "./src/app/pages/vaccineadd/vaccineadd.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/vaccineadd/vaccineadd.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-buttons class=\"buttonHeaderClass\" mode=\"md\">\n    <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n    <ion-title mode=\"md\">Vaccination Details</ion-title>\n    <ion-button class=\"btnSubmit\" slot=\"end\" (click)=\"sendRequest()\">\n      <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-header>\n\n<ion-content class=\"ContentClass\">\n\n  <ion-list lines=\"none\"> \n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label class=\"EntityName\" position=\"stacked\">EMPLOYEE ID</ion-label>\n            <ion-textarea inputmode=\"numeric\" id=\"rounded\" rows=\"1\" maxlength=\"500\" [(ngModel)]=\"employeeId\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label class=\"EntityName\" position=\"stacked\">VACCINE BRAND</ion-label>\n            <ion-select id=\"vaccineBrand\"  class=\"selectItems roundedItems\" interface=\"popover\">\n              <ion-select-option *ngFor=\"let result of vaccineBrands; let idx = index\" value={{result}}\n                selected=\"{{idx==0}}\">{{result}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label class=\"EntityName\" position=\"stacked\">VACCINE BATCH</ion-label>\n            <ion-textarea id=\"rounded\" rows=\"1\" maxlength=\"500\" [(ngModel)]=\"batch\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label class=\"EntityName\" position=\"stacked\">CATEGORY</ion-label>\n            <ion-textarea id=\"rounded\" rows=\"1\" maxlength=\"500\" [(ngModel)]=\"category\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label class=\"EntityName\" position=\"stacked\">LOT NO.</ion-label>\n            <ion-textarea id=\"rounded\" rows=\"1\" maxlength=\"500\" [(ngModel)]=\"lotNo\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label class=\"EntityName\" position=\"stacked\">REMARKS</ion-label>\n            <ion-textarea id=\"rounded\" rows=\"1\" maxlength=\"500\" [(ngModel)]=\"remarks\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/vaccineadd/vaccineadd.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/vaccineadd/vaccineadd.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  margin-left: -10px;\n}\n\nion-select {\n  height: 40px !important;\n}\n\nion-input {\n  height: 40px !important;\n}\n\nion-datetime {\n  height: 40px !important;\n}\n\nion-checkbox {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n}\n\n.btnSubmit {\n  color: white;\n  padding-right: 5px;\n}\n\n.selectItems {\n  color: black;\n  font-size: 14px;\n  height: 39px;\n}\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n  height: 40px !important;\n}\n\n.roundedItems {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\ninput {\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.EntityName {\n  font-size: 11px;\n  color: #676767;\n}\n\n.duration.ng-invalid {\n  border-bottom-color: transparent;\n}\n\n.duration.ng-valid {\n  border-bottom-color: transparent;\n}\n\n.calendarClass {\n  position: absolute;\n  right: 5px;\n  bottom: 4px;\n}\n\n.AttachButton {\n  font-size: inherit;\n  height: 90%;\n  width: 100%;\n  color: #484848;\n  --background: #D6D7D7;\n}\n\n.FileName {\n  --padding-start: 0;\n  font-size: 13px;\n}\n\n.FileNameClose {\n  height: 20px;\n  width: 20px;\n  color: #484848;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmFjY2luZWFkZC9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUi13b3JraW5nL3NyY1xcYXBwXFxwYWdlc1xcdmFjY2luZWFkZFxcdmFjY2luZWFkZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZhY2NpbmVhZGQvdmFjY2luZWFkZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0kscUNBQUE7VUFBQSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZhY2NpbmVhZGQvdmFjY2luZWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLWJvcmRlci1jb2xvcjogZ3JheTtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnNlbGVjdEl0ZW1zIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogMzlweDtcbn1cblxuI3JvdW5kZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLkVudGl0eU5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzY3Njc2Nztcbn1cblxuLmR1cmF0aW9uLm5nLWludmFsaWQge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZHVyYXRpb24ubmctdmFsaWQge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY2FsZW5kYXJDbGFzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm90dG9tOiA0cHg7XG59XG5cbi5BdHRhY2hCdXR0b24ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbiAgICAtLWJhY2tncm91bmQ6ICNENkQ3RDc7XG59XG5cbi5GaWxlTmFtZSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLkZpbGVOYW1lQ2xvc2Uge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJvcmRlci1jb2xvcjogZ3JheTtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uc2VsZWN0SXRlbXMge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAzOXB4O1xufVxuXG4jcm91bmRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5FbnRpdHlOYW1lIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzY3Njc2Nztcbn1cblxuLmR1cmF0aW9uLm5nLWludmFsaWQge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmR1cmF0aW9uLm5nLXZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYWxlbmRhckNsYXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICBib3R0b206IDRweDtcbn1cblxuLkF0dGFjaEJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgLS1iYWNrZ3JvdW5kOiAjRDZEN0Q3O1xufVxuXG4uRmlsZU5hbWUge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLkZpbGVOYW1lQ2xvc2Uge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBjb2xvcjogIzQ4NDg0ODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/vaccineadd/vaccineadd.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/vaccineadd/vaccineadd.page.ts ***!
  \*****************************************************/
/*! exports provided: VaccineaddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccineaddPage", function() { return VaccineaddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");








var VaccineaddPage = /** @class */ (function () {
    function VaccineaddPage(storage, router, menuCtrl, httpApi, modalController, navCtrl, loginService, alertController, loadingCtrl, plt) {
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.httpApi = httpApi;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.vaccineBrands = ["Sinovac", "Astrazeneca", "Moderna", "Pfizer-BioNTech", "Sputnik", "Janssen", "Sinopharm", "Westvac"];
    }
    VaccineaddPage.prototype.ngOnInit = function () {
        var _this = this;
        this.plt.ready().then(function () {
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
                // this.getVaccineBrands();
            });
        });
    };
    VaccineaddPage.prototype.sendRequest = function () {
        console.log(this.getSelectedVaccineBrand());
        if (!this.employeeId) {
            alert("Please enter Employee ID.");
            return;
        }
        if (!this.batch) {
            alert("Please enter Batch.");
            return;
        }
        if (!this.lotNo) {
            alert("Please enter Lot No.");
            return;
        }
        if (!this.category) {
            alert("Please enter Category");
            return;
        }
        this.postRequest();
    };
    VaccineaddPage.prototype.getSelectedVaccineBrand = function () {
        var brand = document.getElementById('vaccineBrand').value;
        switch (brand) {
            case "Sinovac":
                return "VAC001";
            case "Astrazeneca":
                return "VAC002";
            case "Moderna":
                return "VAC003";
            case "Pfizer-BioNTech":
                return "VAC004";
            case "Sputnik":
                return "VAC005";
            case "Janssen":
                return "VAC006";
            case "Sinopharm":
                return "VAC007";
            case "Westvac":
                return "VAC008";
            default:
                return "NA";
        }
    };
    VaccineaddPage.prototype.postRequest = function () {
        var _this = this;
        console.log('getAntigenTestData');
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SESSION"]).then(function (val) {
                var request = {
                    UserID: _this.empId,
                    EmployeeId: _this.employeeId,
                    SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_TOKEN"]],
                    AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["VERSION"],
                    ProcessType: "insert-employee-covid-vaccine",
                    VaccineBrand: _this.getSelectedVaccineBrand(),
                    VaccineBatchNo: _this.vaccineBrands,
                    VaccineLotNo: _this.lotNo,
                    VaccineCategory: _this.category,
                    VaccinatedBy: _this.empId
                };
                console.log(request);
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"]] + "/api/health/covid/vaccine", request, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        console.log(jsonData);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ERROR"], true, "Okay");
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
                            _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                            return;
                        }
                        console.log(jsonData);
                        _this.loading.dismiss();
                        _this.showDialog("DONE!", "Request Sent!", true, "Great!");
                        _this.ngOnInit();
                    })
                        .catch(function (error) {
                        console.log(error);
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    VaccineaddPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
                                            _this.backButton();
                                        }
                                        _this.ngOnInit();
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
    VaccineaddPage.prototype.backButton = function () {
        this.navCtrl.back();
    };
    VaccineaddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vaccineadd',
            template: __webpack_require__(/*! ./vaccineadd.page.html */ "./src/app/pages/vaccineadd/vaccineadd.page.html"),
            styles: [__webpack_require__(/*! ./vaccineadd.page.scss */ "./src/app/pages/vaccineadd/vaccineadd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
    ], VaccineaddPage);
    return VaccineaddPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-vaccineadd-vaccineadd-module.js.map