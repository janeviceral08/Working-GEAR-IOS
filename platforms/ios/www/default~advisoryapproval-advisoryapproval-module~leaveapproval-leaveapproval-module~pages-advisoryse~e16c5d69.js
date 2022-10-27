(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~advisoryapproval-advisoryapproval-module~leaveapproval-leaveapproval-module~pages-advisoryse~e16c5d69"],{

/***/ "./src/app/component/filter-menu/filter-menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/filter-menu/filter-menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-list>\r\n    <ion-item class=\"itemFilter\" lines=\"full\">\r\n      <ion-label class=\"labelFilter\" slot=\"start\">Filter</ion-label>\r\n      <ion-icon class=\"buttonClose\" slot=\"end\" fill=\"clear\" color=\"medium\" (click)=\"myDismiss()\" name=\"close\">\r\n      </ion-icon>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"module == 'LeaveApproval' || module == 'AdvisoryApproval' ||module == 'Subordinates'\">\r\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Employee Name</ion-label>\r\n      <ion-item class=\"itemInput\" lines=\"none\">\r\n        <ion-input class=\"roundedItems\" [(ngModel)]=\"employeeName\"></ion-input>\r\n      </ion-item>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"module == 'LeaveApproval' || module == 'AdvisoryApproval' || module == 'Subordinates'\">\r\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Employee Number</ion-label>\r\n      <ion-item class=\"itemInput\" lines=\"none\">\r\n        <ion-input class=\"roundedItems\" [(ngModel)]=\"employeeNumber\"></ion-input>\r\n      </ion-item>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"module == 'LeaveSearch' || module == 'LeaveApproval' || module == 'AdvisorySearch' || module == 'AdvisoryApproval' \">\r\n      <ion-label class=\"labelEntityName\" position=\"stacked\">{{dateText}}</ion-label>\r\n      <ion-item class=\"itemDatetime\" lines=\"none\">\r\n        <ion-datetime class=\"roundedItems\" [(ngModel)]=\"leaveFrom\" display-format=\"MM/DD/YYYY\"\r\n          picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\">\r\n          mm/dd/yyyy</ion-datetime>&nbsp;-&nbsp;\r\n        <ion-datetime class=\"roundedItems\" [(ngModel)]=\"leaveTo\" display-format=\"MM/DD/YYYY\"\r\n          picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\">\r\n          mm/dd/yyyy</ion-datetime>\r\n      </ion-item>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"module == 'LeaveSearch' || module == 'LeaveApproval'\">\r\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Date Filed</ion-label>\r\n      <ion-item class=\"itemDatetime\" lines=\"none\">\r\n        <ion-datetime class=\"roundedItems\" [(ngModel)]=\"dateFiledFrom\" display-format=\"MM/DD/YYYY\"\r\n          picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\">\r\n          mm/dd/yyyy</ion-datetime>&nbsp;-&nbsp;\r\n        <ion-datetime class=\"roundedItems\" [(ngModel)]=\"dateFiledTo\" display-format=\"MM/DD/YYYY\"\r\n          picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\">\r\n          mm/dd/yyyy</ion-datetime>\r\n      </ion-item>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"module == 'LeaveSearch' || module == 'LeaveApproval' \">\r\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Leave Type</ion-label>\r\n      <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"leaveType\" interface=\"popover\">\r\n        <ion-select-option *ngFor=\"let leave of leaveTypeList; let i = index\" value={{leave}} selected=\"{{i==0}}\">\r\n          {{leave}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"module == 'AdvisorySearch' || module == 'AdvisoryApproval' \">\r\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Request Type</ion-label>\r\n      <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"advisoryType\" interface=\"popover\">\r\n        <ion-select-option *ngFor=\"let leave of advisoryTypeList; let i = index\" value={{leave}} selected=\"{{i==0}}\">\r\n          {{leave}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"module == 'AdvisorySearch' || module == 'AdvisoryApproval' \">\r\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Reason</ion-label>\r\n      <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"advisoryReason\" interface=\"popover\">\r\n        <ion-select-option *ngFor=\"let reason of advisoryReasonList; let idx = index\" value={{reason}} selected=\"{{idx==0}}\">\r\n          {{reason}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"module == 'LeaveSearch'\">\r\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Request Type</ion-label>\r\n      <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"requestType\" interface=\"popover\">\r\n        <ion-select-option *ngFor=\"let request of requestTypeList; let i = index\" value={{request}} selected=\"{{i==0}}\">\r\n          {{request}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"module == 'LeaveSearch' || module == 'LeaveApproval'\">\r\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Reason for Leave</ion-label>\r\n      <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"reason\" interface=\"popover\">\r\n        <ion-select-option *ngFor=\"let reason of reasonList; let idx = index\" value={{reason}} selected=\"{{idx==0}}\">\r\n          {{reason}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"module == 'LeaveSearch' || module == 'AdvisorySearch'\">\r\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Status</ion-label>\r\n      <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"status\" interface=\"popover\">\r\n        <ion-select-option *ngFor=\"let status of statusList; let idx = index\" value={{status}} selected=\"{{idx==0}}\">\r\n          {{status}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" *ngIf=\"module == 'LeaveApproval' || module == 'Subordinates' || module == 'AdvisoryApproval' \">\r\n      <ion-checkbox class=\"chkShowSub\" [(ngModel)]=\"showDirect\" *ngIf=\"module == 'LeaveApproval' || module == 'AdvisoryApproval'\"></ion-checkbox>\r\n      <ion-checkbox class=\"chkShowSub\" [(ngModel)]=\"showAll\" *ngIf=\"module == 'Subordinates' \"></ion-checkbox>\r\n      <ion-label class=\"lblShowSub\" *ngIf=\"module == 'LeaveApproval' || module == 'AdvisoryApproval'\"> Show Direct Subordinates</ion-label>\r\n      <ion-label class=\"lblShowSub\" *ngIf=\"module == 'Subordinates'\"> Show All Employees</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-button class=\"buttonClear\" (click)=\"clearItems()\">Clear</ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer no-shadow>\r\n  <ion-toolbar position=\"bottom\">\r\n    <ion-button class=\"buttonFilter\" (click)=\"filterList()\">Filter</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/component/filter-menu/filter-menu.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/component/filter-menu/filter-menu.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list {\n  margin-top: 30px; }\n\nion-item {\n  margin: 0 15px 0;\n  --padding-start: 0px;\n  --inner-padding-end: 0px; }\n\nion-footer {\n  text-align: center; }\n\nion-datetime {\n  font-size: 14px; }\n\n.itemFilter {\n  margin: 10px; }\n\n.labelFilter {\n  font-size: 18px;\n  font-weight: bold; }\n\n.buttonClose {\n  margin-right: 0px;\n  font-size: 30px;\n  color: #7A7A7A; }\n\n.labelEntityName {\n  font-size: 13px; }\n\n.itemInput {\n  font-size: 14px;\n  margin: 0px !important;\n  width: calc(100% - 5px); }\n\n.itemDatetime {\n  margin: 0px !important; }\n\n.selectItems {\n  margin-left: 5px;\n  font-size: 14px;\n  width: calc(100% - 5px); }\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important; }\n\n.buttonClear {\n  --background: #D6D7D7;\n  width: 100%;\n  height: 35px; }\n\n.buttonFilter {\n  width: 95%;\n  height: 35px; }\n\n.chkShowSub {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n  margin-left: 5px;\n  height: 20px;\n  width: 20px; }\n\n.lblShowSub {\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ZpbHRlci1tZW51L0M6XFxVc2Vyc1xcMDI0MjczXFxJb25pY1Byb2plY3RzXFxIUklTXFxocmlzLWlvbmljL3NyY1xcYXBwXFxjb21wb25lbnRcXGZpbHRlci1tZW51XFxmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQjtFQUNoQixvQkFBZ0I7RUFDaEIsd0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZSxFQUFBOztBQUluQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUNKLEVBQUE7O0FBR0E7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IscUNBQW9DO1VBQXBDLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLHFCQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLDZCQUFxQjtFQUNyQiwrQkFBdUI7RUFDdkIsb0JBQWdCO0VBQ2hCLG9CQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZmlsdGVyLW1lbnUvZmlsdGVyLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBtYXJnaW46IDAgMTVweCAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tZGF0ZXRpbWUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4vL0ZpbHRlciBBcmVhXHJcbi5pdGVtRmlsdGVyIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmxhYmVsRmlsdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnV0dG9uQ2xvc2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzdBN0E3QVxyXG59XHJcblxyXG4vL0ZpbHRlciBJdGVtc1xyXG4ubGFiZWxFbnRpdHlOYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLml0ZW1JbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XHJcbn1cclxuXHJcbi5pdGVtRGF0ZXRpbWUge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVjdEl0ZW1zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcclxufVxyXG5cclxuLnJvdW5kZWRJdGVtcyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b25DbGVhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNENkQ3RDc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmJ1dHRvbkZpbHRlciB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4uY2hrU2hvd1N1YiB7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0QzQTgyODtcclxuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiBncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4ubGJsU2hvd1N1YiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */"

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
        this.leaveType = "All";
        this.requestType = "All";
        this.reason = "All";
        this.status = "All";
        this.advisoryType = "All";
        this.advisoryReason = "All";
        this.showDirect = true;
        this.showAll = false;
    }
    FilterMenuComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.param = this.navParams.get('data');
        this.module = this.navParams.get('module');
        this.isAdvisory = (this.module == "AdvisorySearch");
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_LEAVETYPES"]).then(function (val) {
            val.forEach(function (element) {
                _this.leaveTypeList.push(element['DESCRIPTION']);
            });
        });
        this.setLayout();
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
            var result, result, result, result;
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
                        return [3 /*break*/, 8];
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
                        return [3 /*break*/, 8];
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
                        return [3 /*break*/, 8];
                    case 6:
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
                            'showDirect': (this.showDirect == undefined ? true : this.showDirect)
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
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
//# sourceMappingURL=default~advisoryapproval-advisoryapproval-module~leaveapproval-leaveapproval-module~pages-advisoryse~e16c5d69.js.map