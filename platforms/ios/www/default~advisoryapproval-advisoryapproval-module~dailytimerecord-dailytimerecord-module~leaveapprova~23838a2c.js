(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~advisoryapproval-advisoryapproval-module~dailytimerecord-dailytimerecord-module~leaveapprova~23838a2c"],{

/***/ "./src/app/component/filter-menu/filter-menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/filter-menu/filter-menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-list>\n        <ion-item class=\"itemFilter\" lines=\"full\">\n            <ion-label class=\"labelFilter\" slot=\"start\">Filter</ion-label>\n            <ion-icon class=\"buttonClose\" slot=\"end\" fill=\"clear\" color=\"medium\" (click)=\"myDismiss()\" name=\"close\">\n            </ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'LeaveApproval' || module == 'AdvisoryApproval' ||module == 'Subordinates' || module == 'OvertimeApproval' || module == 'WfhApproval'\">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">Employee Name</ion-label>\n            <ion-item class=\"itemInput\" lines=\"none\">\n                <ion-input class=\"roundedItems\" [(ngModel)]=\"employeeName\"></ion-input>\n            </ion-item>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'LeaveApproval' || module == 'AdvisoryApproval' || module == 'Subordinates' || module == 'OvertimeApproval' || module == 'WfhApproval'\">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">Employee Number</ion-label>\n            <ion-item class=\"itemInput\" lines=\"none\">\n                <ion-input class=\"roundedItems\" [(ngModel)]=\"employeeNumber\"></ion-input>\n            </ion-item>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'LeaveSearch' || module == 'LeaveApproval' || module == 'AdvisorySearch' || module == 'AdvisoryApproval' || module == 'DailyTimeRecord' || module == 'OTSearch' || module == 'OvertimeApproval'|| module == 'PurchaseDetailsOnline'|| module == 'PurchaseDetailsCanteen'|| module == 'WorkFromHome' || module == 'WfhApproval'\">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">{{dateText}}</ion-label>\n            <ion-item class=\"itemDatetime\" lines=\"none\">\n                <ion-datetime class=\"roundedItems\" [(ngModel)]=\"leaveFrom\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\">\n                    mm/dd/yyyy</ion-datetime>&nbsp;-&nbsp;\n                <ion-datetime class=\"roundedItems\" [(ngModel)]=\"leaveTo\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\">\n                    mm/dd/yyyy</ion-datetime>\n            </ion-item>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'LeaveSearch' || module == 'LeaveApproval' || module == 'DailyTimeRecord' \">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">{{dateText2}}</ion-label>\n            <ion-item class=\"itemDatetime\" lines=\"none\">\n                <ion-datetime class=\"roundedItems\" [(ngModel)]=\"dateFiledFrom\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\">\n                    mm/dd/yyyy</ion-datetime>&nbsp;-&nbsp;\n                <ion-datetime class=\"roundedItems\" [(ngModel)]=\"dateFiledTo\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\">\n                    mm/dd/yyyy</ion-datetime>\n            </ion-item>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'LeaveSearch' || module == 'LeaveApproval' \">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">Leave Type</ion-label>\n            <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"leaveType\" interface=\"popover\">\n                <ion-select-option *ngFor=\"let leave of leaveTypeList; let i = index\" value={{leave}} selected=\"{{i==0}}\">\n                    {{leave}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'AdvisorySearch' || module == 'AdvisoryApproval' \">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">Request Type</ion-label>\n            <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"advisoryType\" interface=\"popover\">\n                <ion-select-option *ngFor=\"let leave of advisoryTypeList; let i = index\" value={{leave}} selected=\"{{i==0}}\">\n                    {{leave}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'OvertimeApproval'\">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">Schedule Type</ion-label>\n            <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"scheduleType\" interface=\"popover\">\n                <ion-select-option *ngFor=\"let schedule of scheduleTypeList; let i = index\" value={{schedule}} selected=\"{{i==0}}\">\n                    {{schedule}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'OvertimeApproval'\">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">Section</ion-label>\n            <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"sectionType\" interface=\"popover\">\n                <ion-select-option *ngFor=\"let section of sectionList; let i = index\" value={{section}} selected=\"{{i==0}}\">\n                    {{section}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'PurchaseDetailsCanteen'\">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">Status</ion-label>\n            <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"canteenStatus\" interface=\"popover\">\n                <ion-select-option *ngFor=\"let canteen of canteenList; let i = index\" value={{canteen}} selected=\"{{i==0}}\">\n                    {{canteen}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'AdvisorySearch' || module == 'AdvisoryApproval' \">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">Reason</ion-label>\n            <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"advisoryReason\" interface=\"popover\">\n                <ion-select-option *ngFor=\"let reason of advisoryReasonList; let idx = index\" value={{reason}} selected=\"{{idx==0}}\">\n                    {{reason}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'LeaveSearch'\">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">Request Type</ion-label>\n            <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"requestType\" interface=\"popover\">\n                <ion-select-option *ngFor=\"let request of requestTypeList; let i = index\" value={{request}} selected=\"{{i==0}}\">\n                    {{request}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'LeaveSearch' || module == 'LeaveApproval'\">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">Reason for Leave</ion-label>\n            <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"reason\" interface=\"popover\">\n                <ion-select-option *ngFor=\"let reason of reasonList; let idx = index\" value={{reason}} selected=\"{{idx==0}}\">\n                    {{reason}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'LeaveSearch' || module == 'AdvisorySearch' || module == 'OTSearch' || module == 'WorkFromHome'\">\n            <ion-label class=\"labelEntityName\" position=\"stacked\">Status</ion-label>\n            <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"status\" interface=\"popover\">\n                <ion-select-option *ngFor=\"let status of statusList; let idx = index\" value={{status}} selected=\"{{idx==0}}\">\n                    {{status}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"module == 'LeaveApproval' || module == 'Subordinates' || module == 'AdvisoryApproval' || module == 'OvertimeApproval' || module == 'WfhApproval'\">\n            <ion-checkbox class=\"chkShowSub\" [(ngModel)]=\"showDirect\" *ngIf=\"module == 'LeaveApproval' || module == 'AdvisoryApproval' || module == 'OvertimeApproval'\"></ion-checkbox>\n            <ion-checkbox class=\"chkShowSub\" [(ngModel)]=\"showAll\" *ngIf=\"module == 'Subordinates' \"></ion-checkbox>\n            <ion-label class=\"lblShowSub\" *ngIf=\"module == 'LeaveApproval' || module == 'AdvisoryApproval' || module == 'OvertimeApproval'\"> Show Direct Subordinates</ion-label>\n            <ion-label class=\"lblShowSub\" *ngIf=\"module == 'Subordinates'\"> Show All Employees</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-button class=\"buttonClear\" (click)=\"clearItems()\">Clear</ion-button>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer no-shadow>\n    <ion-toolbar position=\"bottom\">\n        <ion-button class=\"buttonFilter\" (click)=\"filterList()\">Filter</ion-button>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/component/filter-menu/filter-menu.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/component/filter-menu/filter-menu.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list {\n  margin-top: 30px;\n}\n\nion-item {\n  margin: 0 15px 0;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\nion-footer {\n  text-align: center;\n}\n\nion-datetime {\n  font-size: 14px;\n}\n\n.itemFilter {\n  margin: 10px;\n}\n\n.labelFilter {\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n}\n\n.buttonClose {\n  margin-right: 0px;\n  font-size: 30px;\n  color: #7A7A7A;\n}\n\n.labelEntityName {\n  font-size: 13px;\n}\n\n.itemInput {\n  font-size: 14px;\n  margin: 0px !important;\n  width: calc(100% - 5px);\n}\n\n.itemDatetime {\n  margin: 0px !important;\n}\n\n.selectItems {\n  margin-left: 5px;\n  font-size: 14px;\n  width: calc(100% - 5px);\n}\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.buttonClear {\n  --background: #D6D7D7;\n  width: 100%;\n  height: 35px;\n}\n\n.buttonFilter {\n  width: 95%;\n  height: 35px;\n}\n\n.chkShowSub {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n  margin-left: 5px;\n  height: 20px;\n  width: 20px;\n}\n\n.lblShowSub {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvY29tcG9uZW50L2ZpbHRlci1tZW51L2ZpbHRlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvZmlsdGVyLW1lbnUvZmlsdGVyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQUo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksc0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2ZpbHRlci1tZW51L2ZpbHRlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgICBtYXJnaW46IDAgMTVweCAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLy9GaWx0ZXIgQXJlYVxuLml0ZW1GaWx0ZXIge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmxhYmVsRmlsdGVyIHtcbiAgICBmb250LXNpemU6IDE4cHg7ICAgIFxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uYnV0dG9uQ2xvc2Uge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzdBN0E3QVxufVxuXG4vL0ZpbHRlciBJdGVtc1xuLmxhYmVsRW50aXR5TmFtZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaXRlbUlucHV0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcbn1cblxuLml0ZW1EYXRldGltZSB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdEl0ZW1zIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcbn1cblxuLnJvdW5kZWRJdGVtcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25DbGVhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDZEN0Q3O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLmJ1dHRvbkZpbHRlciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5jaGtTaG93U3ViIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0QzQTgyODtcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjRDNBODI4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiBncmF5O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4ubGJsU2hvd1N1YiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSIsImlvbi1saXN0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDAgMTVweCAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pdGVtRmlsdGVyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubGFiZWxGaWx0ZXIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uYnV0dG9uQ2xvc2Uge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzdBN0E3QTtcbn1cblxuLmxhYmVsRW50aXR5TmFtZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLml0ZW1JbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XG59XG5cbi5pdGVtRGF0ZXRpbWUge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0SXRlbXMge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1cHgpO1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbkNsZWFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDZEN0Q3O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uYnV0dG9uRmlsdGVyIHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uY2hrU2hvd1N1YiB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRDNBODI4O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjRDNBODI4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1ib3JkZXItY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5sYmxTaG93U3ViIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/filter-menu/filter-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/filter-menu/filter-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: FilterMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMenuComponent", function() { return FilterMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var FilterMenuComponent = /** @class */ (function () {
    function FilterMenuComponent(modalController, storage, datepipe, navParams) {
        this.modalController = modalController;
        this.storage = storage;
        this.datepipe = datepipe;
        this.navParams = navParams;
        this.leaveStatusApprovalList = ["Approve", "Disapprove", "On Hold", "Escalate"];
        this.advisoryStatusApprovalList = ["Approve", "Cancel", "Disapprove", "On Hold"];
        this.leaveTypeList = ["All"];
        this.requestTypeList = ["All", "With Pay", "With Pay - Without Pay", "Without Pay"];
        this.reasonList = ["All", "Personal", "Not feeling well"];
        this.statusList = ["All", "FOR APPROVAL", "APPROVED", "CANCELLED", "ON HOLD", "DISAPPROVED", "PLANNED", "POSTED"];
        this.advisoryTypeList = ["All", "Authorized Under Time", "Authorized Late", "Offset", "CTO", "Official Business", "Authorized Shifting"];
        this.advisoryReasonList = ["All", "Field", "Seminar", "Place of the store", "Personal", "Not feeling well", "Work beyond 10PM"];
        this.scheduleTypeList = ["All"];
        this.sectionList = ["All", "Sales", "Non-Sales"];
        this.canteenList = ["Unpaid", "Paid"];
        this.leaveType = "All";
        this.requestType = "All";
        this.reason = "All";
        this.status = "All";
        this.advisoryType = "All";
        this.advisoryReason = "All";
        this.scheduleType = "All";
        this.sectionType = "All";
        this.showDirect = true;
        this.showAll = false;
    }
    FilterMenuComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_LEAVETYPES"]).then(function (val) {
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_OTTYPES"]).then(function (val2) {
                _this.param = _this.navParams.get('data');
                _this.module = _this.navParams.get('module');
                _this.isAdvisory = (_this.module == "AdvisorySearch");
                val.forEach(function (element) {
                    _this.leaveTypeList.push(element['DESCRIPTION']);
                });
                _this.scheduleTypeOTList = val2;
                val2.forEach(function (element) {
                    _this.scheduleTypeList.push(element['DESCRIPTION']);
                });
                _this.setLayout();
            });
        });
    };
    FilterMenuComponent.prototype.setLayout = function () {
        switch (this.module) {
            case "AdvisorySearch": {
                this.dateText = "Inclusive Dates";
                this.requestText = "Request Type";
                this.setAdvisoryFilter(this.param);
                break;
            }
            case "LeaveSearch": {
                this.dateText = "Leave Date";
                this.dateText2 = "Date Filed";
                this.requestText = "Leave Type";
                this.setFilterValues(this.param);
                break;
            }
            case "Subordinates": {
                this.setFilterValues(this.param);
                break;
            }
            case "LeaveApproval": {
                this.dateText = "Leave Date";
                this.dateText2 = "Date Filed";
                this.requestText = "Leave Type";
                this.setFilterValues(this.param);
                break;
            }
            case "AdvisoryApproval": {
                this.dateText = "Inclusive Dates";
                this.requestText = "Request Type";
                this.setAdvisoryFilter(this.param);
                break;
            }
            case "WfhApproval": {
                this.dateText = "Inclusive Dates";
                this.setWfhApproval(this.param);
                break;
            }
            case "DailyTimeRecord": {
                this.dateText = "DTR Inclusive Dates";
                this.dateText2 = "OB Inclusive Dates";
                this.setFilterValues(this.param);
                break;
            }
            case "OTSearch": {
                this.dateText = "OT Date";
                this.setFilterValues(this.param);
                break;
            }
            case "OvertimeApproval": {
                this.dateText = "Inclusive Dates";
                this.setOTFilter(this.param);
                break;
            }
            case "PurchaseDetailsOnline": {
                this.dateText = "Inclusive Dates";
                this.setPurchaseDetailsOnlineFilter(this.param);
                break;
            }
            case "PurchaseDetailsCanteen": {
                this.dateText = "Inclusive Dates";
                this.setCanteenFilter(this.param);
                break;
            }
            case "WorkFromHome": {
                this.dateText = "Inclusive Dates";
                this.setWFHFilter(this.param);
                break;
            }
        }
    };
    FilterMenuComponent.prototype.myDismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            'isDismissed': 1,
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FilterMenuComponent.prototype.filterList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, result, result, result, result, result, result, result, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.module == "AdvisorySearch")) return [3 /*break*/, 2];
                        result = {
                            'isDismissed': 0,
                            'advisoryFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
                            'advisoryTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
                            'advisoryType': this.getAdvisoryType(),
                            'advisoryReason': this.getAdvisoryReason(),
                            'status': this.getStatus(this.status),
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 18];
                    case 2:
                        if (!(this.module == "Subordinates")) return [3 /*break*/, 4];
                        result = {
                            'isDismissed': 0,
                            'empName': (this.employeeName == undefined ? '' : this.employeeName),
                            'empNumber': (this.employeeNumber == undefined ? '' : this.employeeNumber),
                            'showAll': (this.showAll == undefined ? true : this.showAll)
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 18];
                    case 4:
                        if (!(this.module == "AdvisoryApproval")) return [3 /*break*/, 6];
                        result = {
                            'isDismissed': 0,
                            'empName': this.employeeName,
                            'empNumber': this.employeeNumber,
                            'advisoryFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
                            'advisoryTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
                            'advisoryType': this.getAdvisoryType(),
                            'advisoryReason': this.getAdvisoryReason(),
                            'showDirect': (this.showDirect == undefined ? true : this.showDirect)
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 18];
                    case 6:
                        if (!(this.module == "WfhApproval")) return [3 /*break*/, 8];
                        result = {
                            'isDismissed': 0,
                            'empName': this.employeeName,
                            'empNumber': this.employeeNumber,
                            'advisoryFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
                            'advisoryTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
                            'showDirect': (this.showDirect == undefined ? true : this.showDirect)
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 18];
                    case 8:
                        if (!(this.module == "OvertimeApproval")) return [3 /*break*/, 10];
                        result = {
                            'isDismissed': 0,
                            'empName': this.employeeName,
                            'empNumber': this.employeeNumber,
                            'leaveFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
                            'leaveTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
                            'scheduleType': this.scheduleType,
                            'sectionType': this.getSectionType(this.sectionType),
                            'showDirect': (this.showDirect == undefined ? true : this.showDirect)
                        };
                        console.log(result);
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 18];
                    case 10:
                        if (!(this.module == "PurchaseDetailsOnline")) return [3 /*break*/, 12];
                        result = {
                            'isDismissed': 0,
                            'purchaseDateFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
                            'purchaseDateTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy')
                        };
                        console.log(result);
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 11:
                        _a.sent();
                        return [3 /*break*/, 18];
                    case 12:
                        if (!(this.module == "PurchaseDetailsCanteen")) return [3 /*break*/, 14];
                        result = {
                            'isDismissed': 0,
                            'purchaseDateFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
                            'purchaseDateTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
                            'canteenStatus': this.getCanteenType(this.canteenStatus)
                        };
                        console.log(result);
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 13:
                        _a.sent();
                        return [3 /*break*/, 18];
                    case 14:
                        if (!(this.module == "WorkFromHome")) return [3 /*break*/, 16];
                        result = {
                            'isDismissed': 0,
                            'leaveFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
                            'leaveTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
                            'status': this.getStatus(this.status)
                        };
                        console.log(result);
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 15:
                        _a.sent();
                        return [3 /*break*/, 18];
                    case 16:
                        result = {
                            'isDismissed': 0,
                            'empName': (this.employeeName == undefined ? '' : this.employeeName),
                            'empNumber': this.employeeNumber,
                            'leaveFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
                            'leaveTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
                            'dateFiledFrom': this.datepipe.transform(this.dateFiledFrom, 'MM/dd/yyyy'),
                            'dateFiledTo': this.datepipe.transform(this.dateFiledTo, 'MM/dd/yyyy'),
                            'leaveType': this.getLeaveType(this.leaveType),
                            'requestType': this.getRequestType(this.requestType),
                            'reason': this.getReason(this.reason),
                            'status': this.getStatus(this.status),
                            'showDirect': (this.showDirect == undefined ? true : this.showDirect),
                            'scheduleType': this.getScheduleType(this.scheduleType),
                            'sectionType': this.getSectionType(this.sectionType),
                            'canteenType': this.getCanteenType(this.canteenStatus)
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 17:
                        _a.sent();
                        _a.label = 18;
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    FilterMenuComponent.prototype.clearItems = function () {
        this.employeeName = "";
        this.employeeNumber = "";
        this.leaveFrom = null;
        this.leaveTo = null;
        this.dateFiledFrom = null;
        this.dateFiledTo = null;
        this.leaveType = "All";
        this.requestType = "All";
        this.reason = "All";
        this.status = "All";
        this.showDirect = true;
        this.advisoryType = "All";
        this.advisoryReason = "All";
        this.sectionType = "All";
        this.scheduleType = "All";
        this.canteenStatus = "Unpaid";
        this.showAll = false;
    };
    FilterMenuComponent.prototype.setFilterValues = function (data) {
        this.employeeName = data['EmpName'];
        this.employeeNumber = (data['EmployeeId'] == 0 ? "" : data['EmployeeId']);
        this.leaveFrom = this.datepipe.transform(data['LeaveFrom'], 'yyyy-MM-dd');
        this.leaveTo = this.datepipe.transform(data['LeaveTo'], 'yyyy-MM-dd');
        this.dateFiledFrom = this.datepipe.transform(data['DateFrom'], 'yyyy-MM-dd');
        this.dateFiledTo = this.datepipe.transform(data['DateTo'], 'yyyy-MM-dd');
        this.leaveType = this.setLeaveType(data['LeaveType']);
        this.requestType = this.setRequestType(data['LeaveRequestType']);
        this.reason = this.setReason(data['LeaveReason']);
        this.status = this.setStatus(data['LeaveRequestStatus']);
        this.showDirect = data['ShowAll'];
        this.showAll = data['ShowAll'];
    };
    FilterMenuComponent.prototype.setAdvisoryFilter = function (data) {
        this.employeeName = data['EMPL_NAME'];
        this.employeeNumber = (data['EMPNO'] == 0 ? "" : data['EMPNO']);
        this.advisoryReason = this.setAdvisoryReason(data['REASONCODE']);
        this.advisoryType = this.setAdvisoryType(data['REQUESTTYPECODE']);
        this.leaveFrom = this.datepipe.transform(data['DATEFROM'], 'yyyy-MM-dd');
        this.leaveTo = this.datepipe.transform(data['DATETO'], 'yyyy-MM-dd');
        this.status = this.setStatus(data['STATUSCODE']);
        this.showDirect = data['SHOWALL'];
        this.showAll = data['SHOWALL'];
    };
    FilterMenuComponent.prototype.setWfhApproval = function (data) {
        this.employeeName = data['EMPL_NAME'];
        this.employeeNumber = (data['EMPNO'] == 0 ? "" : data['EMPNO']);
        this.advisoryReason = this.setAdvisoryReason(data['REASONCODE']);
        this.advisoryType = this.setAdvisoryType(data['REQUESTTYPECODE']);
        this.leaveFrom = this.datepipe.transform(data['DATEFROM'], 'yyyy-MM-dd');
        this.leaveTo = this.datepipe.transform(data['DATETO'], 'yyyy-MM-dd');
        this.status = this.setStatus(data['STATUSCODE']);
        this.showDirect = data['SHOWALL'];
        this.showAll = data['SHOWALL'];
    };
    FilterMenuComponent.prototype.setOTFilter = function (data) {
        this.employeeName = data['EMPNAME'];
        this.employeeNumber = (data['EMPNO'] == 0 ? "" : data['EmployeeId']);
        this.leaveFrom = this.datepipe.transform(data['STARTDATE'], 'yyyy-MM-dd');
        this.leaveTo = this.datepipe.transform(data['ENDDATE'], 'yyyy-MM-dd');
        this.scheduleType = data['SCHEDULEDTYPE']; //this.setScheduleType(data['SCHEDULEDTYPE']);
        this.sectionType = this.setSectionType(data['SECTION']);
        this.showDirect = data['SHOWALL'];
    };
    FilterMenuComponent.prototype.setPurchaseDetailsOnlineFilter = function (data) {
        this.leaveFrom = this.datepipe.transform(data['purchaseDateFrom'], 'yyyy-MM-dd');
        this.leaveTo = this.datepipe.transform(data['purchaseDateTo'], 'yyyy-MM-dd');
    };
    FilterMenuComponent.prototype.setCanteenFilter = function (data) {
        this.leaveFrom = this.datepipe.transform(data['purchaseDateFrom'], 'yyyy-MM-dd');
        this.leaveTo = this.datepipe.transform(data['purchaseDateTo'], 'yyyy-MM-dd');
        this.canteenStatus = this.setCanteenType(data['canteenStatus']);
    };
    FilterMenuComponent.prototype.setWFHFilter = function (data) {
        this.leaveFrom = this.datepipe.transform(data['LeaveFrom'], 'yyyy-MM-dd');
        this.leaveTo = this.datepipe.transform(data['LeaveTo'], 'yyyy-MM-dd');
        this.status = this.setStatus(data['Status']);
    };
    FilterMenuComponent.prototype.getLeaveType = function (type) {
        switch (type) {
            case "Vacation Leave": {
                return "VL";
            }
            case "Emergency Leave": {
                return "EL";
            }
            case "Sick Leave": {
                return "SL";
            }
            case "Birthday Leave": {
                return "BL";
            }
            case "Paternity Leave": {
                return "PL";
            }
            case "Service Incentive Leaves": {
                return "IL";
            }
            case "Solo Parent Leave": {
                return "SP";
            }
            case "Magna Carta For Women": {
                return "MCW";
            }
            case "Sss Maternity Leave": {
                return "ML";
            }
            default: {
                return null;
            }
        }
    };
    FilterMenuComponent.prototype.getRequestType = function (type) {
        switch (type) {
            case "With Pay": {
                return "WP";
            }
            case "With Pay - Without Pay": {
                return "WOPWP";
            }
            case "Without Pay": {
                return "WOP";
            }
            default: {
                return null;
            }
        }
    };
    FilterMenuComponent.prototype.getReason = function (reason) {
        switch (reason) {
            case "Personal": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["REASON_CODE_PERSONAL"];
            }
            case "Not feeling well": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["REASON_CODE_NOT_FEEL"];
            }
            case "Filed via DTR": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["REASON_CODE_DTR"];
            }
            case "Cancelled via DTR": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["REASON_CODE_CANCEL"];
            }
            default: {
                return null;
            }
        }
    };
    FilterMenuComponent.prototype.getStatus = function (status) {
        switch (status) {
            case "FOR APPROVAL": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_FOR_APPROVAL"];
            }
            case "APPROVED": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_APPROVED"];
            }
            case "CANCELLED": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_CANCELLED"];
            }
            case "ON HOLD": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_ON_HOLD"];
            }
            case "DISAPPROVED": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_DISAPPROVED"];
            }
            case "SUBMITTED": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_SUBMITTED"];
            }
            case "ADJUSTED": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_ADJUSTED"];
            }
            case "PLANNED": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_PLANNED"];
            }
            case "POSTED": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_POSTED"];
            }
            default: {
                return null;
            }
        }
    };
    FilterMenuComponent.prototype.setLeaveType = function (type) {
        switch (type) {
            case "VL": {
                return "Vacation Leave";
            }
            case "EL": {
                return "Emergency Leave";
            }
            case "SL": {
                return "Sick Leave";
            }
            case "BL": {
                return "Birthday Leave";
            }
            case "PL": {
                return "Paternity Leave";
            }
            case "IL": {
                return "Service Incentive Leaves";
            }
            case "SP": {
                return "Solo Parent Leave";
            }
            case "MCW": {
                return "Magna Carta For Women";
            }
            case "ML": {
                return "Sss Maternity Leave";
            }
            default: {
                return "All";
            }
        }
    };
    FilterMenuComponent.prototype.setRequestType = function (type) {
        switch (type) {
            case "WP": {
                return "With Pay";
            }
            case "WOPWP": {
                return "With Pay - Without Pay";
            }
            case "WOP": {
                return "Without Pay";
            }
            default: {
                return "All";
            }
        }
    };
    FilterMenuComponent.prototype.getScheduleType = function (type) {
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_OTTYPES"]).then(function (val) {
            val.forEach(function (element) {
                if (type == element['DESCRIPTION']) {
                    return element['SEQCODE'];
                }
            });
        });
        return null;
    };
    FilterMenuComponent.prototype.setScheduleType = function (type) {
        console.log(type);
        this.scheduleTypeOTList.forEach(function (element) {
            if (type == (element['SEQCODE'])) {
                return element['DESCRIPTION'];
            }
        });
        return "All";
    };
    FilterMenuComponent.prototype.getSectionType = function (type) {
        switch (this.sectionType) {
            case "Sales": {
                return "S";
            }
            case "Non-Sales": {
                return "O";
            }
            default: {
                return "-";
            }
        }
    };
    FilterMenuComponent.prototype.setSectionType = function (type) {
        switch (type) {
            case "S": {
                return "Sales";
            }
            case "O": {
                return "Non-Sales";
            }
            default: {
                return "All";
            }
        }
    };
    FilterMenuComponent.prototype.getCanteenType = function (type) {
        switch (this.canteenStatus) {
            case "Unpaid": {
                return "U";
            }
            case "Paid": {
                return "P";
            }
        }
    };
    FilterMenuComponent.prototype.setCanteenType = function (type) {
        switch (type) {
            case "P": {
                return "Paid";
            }
            case "U": {
                return "Unpaid";
            }
        }
    };
    FilterMenuComponent.prototype.setReason = function (reason) {
        switch (reason) {
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["REASON_CODE_PERSONAL"]: {
                return "Personal";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["REASON_CODE_NOT_FEEL"]: {
                return "Not feeling well";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["REASON_CODE_DTR"]: {
                return "Filed via DTR";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["REASON_CODE_CANCEL"]: {
                return "Cancelled via DTR";
            }
            default: {
                return "All";
            }
        }
    };
    FilterMenuComponent.prototype.setStatus = function (status) {
        switch (status) {
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_FOR_APPROVAL"]: {
                return "FOR APPROVAL";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_APPROVED"]: {
                return "APPROVED";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_CANCELLED"]: {
                return "CANCELLED";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_ON_HOLD"]: {
                return "ON HOLD";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_DISAPPROVED"]: {
                return "DISAPPROVED";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_SUBMITTED"]: {
                return "SUBMITTED";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_ADJUSTED"]: {
                return "ADJUSTED";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_PLANNED"]: {
                return "PLANNED";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_POSTED"]: {
                return "POSTED";
            }
            default: {
                return "All";
            }
        }
    };
    FilterMenuComponent.prototype.getAdvisoryType = function () {
        switch (this.advisoryType) {
            case "Authorized Under Time": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_AUT"];
            }
            case "Authorized Late": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_AL"];
            }
            case "Offset": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_OS"];
            }
            case "CTO": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_CTO"];
            }
            case "Official Business": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_OB"];
            }
            case "Authorized Shifting": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_AS"];
            }
            default: {
                return null;
            }
        }
    };
    FilterMenuComponent.prototype.getAdvisoryReason = function () {
        switch (this.advisoryReason) {
            case "Field": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_REASON_CODE_FIELD"];
            }
            case "Seminar": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_REASON_CODE_SEMINAR"];
            }
            case "Place of the store": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_REASON_CODE_POS"];
            }
            case "Personal": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_REASON_CODE_PERSONAL"];
            }
            case "Not feeling well": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_REASON_CODE_NFW"];
            }
            case "Work beyond 10PM": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_REASON_CODE_WBT"];
            }
            default: {
                return null;
            }
        }
    };
    FilterMenuComponent.prototype.setAdvisoryType = function (type) {
        switch (type) {
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_AUT"]: {
                return "Authorized Under Time";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_AL"]: {
                return "Authorized Late";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_OS"]: {
                return "Offset";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_CTO"]: {
                return "CTO";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_OB"]: {
                return "Official Business";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_AS"]: {
                return "Authorized Shifting";
            }
            default: {
                return "All";
            }
        }
    };
    FilterMenuComponent.prototype.setAdvisoryReason = function (reason) {
        switch (reason) {
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_REASON_CODE_FIELD"]: {
                return "Field";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_REASON_CODE_SEMINAR"]: {
                return "Seminar";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_REASON_CODE_POS"]: {
                return "Place of the store";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_REASON_CODE_PERSONAL"]: {
                return "Personal";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_REASON_CODE_NFW"]: {
                return "Not feeling well";
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_REASON_CODE_WBT"]: {
                return "Work beyond 10PM";
            }
            default: {
                return "All";
            }
        }
    };
    FilterMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter-menu',
            template: __webpack_require__(/*! ./filter-menu.component.html */ "./src/app/component/filter-menu/filter-menu.component.html"),
            styles: [__webpack_require__(/*! ./filter-menu.component.scss */ "./src/app/component/filter-menu/filter-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], FilterMenuComponent);
    return FilterMenuComponent;
}());



/***/ }),

/***/ "./src/app/component/filter-menu/filter-menu.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/filter-menu/filter-menu.module.ts ***!
  \*************************************************************/
/*! exports provided: FilterMenuComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMenuComponentModule", function() { return FilterMenuComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _filter_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var FilterMenuComponentModule = /** @class */ (function () {
    function FilterMenuComponentModule() {
    }
    FilterMenuComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _filter_menu_component__WEBPACK_IMPORTED_MODULE_4__["FilterMenuComponent"]
            ],
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            entryComponents: [
                _filter_menu_component__WEBPACK_IMPORTED_MODULE_4__["FilterMenuComponent"]
            ]
        })
    ], FilterMenuComponentModule);
    return FilterMenuComponentModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~advisoryapproval-advisoryapproval-module~dailytimerecord-dailytimerecord-module~leaveapprova~23838a2c.js.map