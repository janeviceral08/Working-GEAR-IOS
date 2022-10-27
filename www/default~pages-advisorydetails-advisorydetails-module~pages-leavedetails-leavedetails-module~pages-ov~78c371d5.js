(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-advisorydetails-advisorydetails-module~pages-leavedetails-leavedetails-module~pages-ov~78c371d5"],{

/***/ "./src/app/component/submit-approval/submit-approval.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/submit-approval/submit-approval.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n  <ion-row>\n    <ion-col size=\"7\">\n      <ion-item lines=\"none\">\n        <ion-label class=\"labelEntityName\" position=\"stacked\">STATUS</ion-label>\n        <ion-select class=\"selectItems roundedItems\" [(ngModel)]=\"status\">\n          <ion-select-option *ngFor=\"let status of statusList; let i = index\" value={{status}} selected=\"{{i==0}}\">\n            {{status}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"5\">\n      <ion-item lines=\"none\" *ngIf=\"status == 'Approve' && param == 'otapproval'\">\n        <ion-label class=\"labelEntityName\" position=\"stacked\">APPROVED HOURS</ion-label>\n        <ion-input class=\"input roundedItems\" id=\"rounded\" type=\"num\" [(ngModel)]=\"appliedhours\">\n        </ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item lines=\"none\" class=\"areaRemarks\">\n        <ion-label class=\"labelEntityName\" position=\"stacked\">REMARKS</ion-label>\n        <ion-textarea class=\"textArea roundedItems\" rows=\"1\" maxlength=\"500\" [(ngModel)]=\"remarks\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item lines=\"none\">\n        <ion-button class=\"closeClass\" slot=\"end\" fill=\"clear\" (click)=\"myDismiss()\">\n          CANCEL\n        </ion-button>\n        <ion-button class=\"submitClass\" slot=\"end\" fill=\"solid\" (click)=\"submitLeave()\">\n          SUBMIT\n        </ion-button>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./src/app/component/submit-approval/submit-approval.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/submit-approval/submit-approval.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  padding: 0px !important;\n}\n\n.labelEntityName {\n  font-size: 11px;\n  color: #808080;\n  max-height: 15px;\n  padding-bottom: 3px;\n}\n\n.selectItems {\n  font-size: 12px;\n  width: 180px;\n  height: 30px;\n}\n\n.input {\n  flex: 0;\n  font-size: 12px;\n}\n\n.textArea {\n  flex: 0;\n  font-size: 12px;\n}\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.closeClass {\n  color: #808080;\n  height: 35px;\n  width: 100px;\n  font-size: 11px;\n}\n\n.submitClass {\n  --background: #D3A828;\n  height: 35px;\n  width: 100px;\n  font-size: 11px;\n  margin-left: 0px;\n}\n\n.areaRemarks {\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3N1Ym1pdC1hcHByb3ZhbC9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUi13b3JraW5nL3NyY1xcYXBwXFxjb21wb25lbnRcXHN1Ym1pdC1hcHByb3ZhbFxcc3VibWl0LWFwcHJvdmFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvc3VibWl0LWFwcHJvdmFsL3N1Ym1pdC1hcHByb3ZhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0o7O0FER0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksT0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLE9BQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zdWJtaXQtYXBwcm92YWwvc3VibWl0LWFwcHJvdmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLy9GaWx0ZXIgSXRlbXNcbi5sYWJlbEVudGl0eU5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBtYXgtaGVpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbi5zZWxlY3RJdGVtcyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5pbnB1dCB7XG4gICAgZmxleDowO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRleHRBcmVhIHtcbiAgICBmbGV4OjA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmNsb3NlQ2xhc3Mge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uc3VibWl0Q2xhc3Mge1xuICAgIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uYXJlYVJlbWFya3Mge1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xufSIsImlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmxhYmVsRW50aXR5TmFtZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIG1heC1oZWlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbi5zZWxlY3RJdGVtcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5pbnB1dCB7XG4gIGZsZXg6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRleHRBcmVhIHtcbiAgZmxleDogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmNsb3NlQ2xhc3Mge1xuICBjb2xvcjogIzgwODA4MDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnN1Ym1pdENsYXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uYXJlYVJlbWFya3Mge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/submit-approval/submit-approval.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/submit-approval/submit-approval.component.ts ***!
  \************************************************************************/
/*! exports provided: SubmitApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitApprovalComponent", function() { return SubmitApprovalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");




var SubmitApprovalComponent = /** @class */ (function () {
    function SubmitApprovalComponent(modalController, navParams, navCtrl, alertController) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
    }
    SubmitApprovalComponent.prototype.ngOnInit = function () {
        this.param = this.navParams.get('data');
        if (this.param == "advisoryapproval") {
            this.statusList = ["Approve", "Cancel", "Disapprove", "On Hold"];
        }
        else if (this.param == "otapproval") {
            this.statusList = ["Approve", "Disapprove"];
        }
        else {
            this.statusList = ["Approve", "Disapprove", "Escalate", "On Hold"];
        }
        this.status = "Approve";
    };
    SubmitApprovalComponent.prototype.myDismiss = function () {
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
    SubmitApprovalComponent.prototype.submitLeave = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            'isDismissed': 0,
                            'remarks': this.remarks
                        };
                        if (this.param == 'otapproval') {
                            console.log(this.status);
                            console.log(this.appliedhours);
                            if (this.status == 'Approve' && (this.appliedhours == undefined || this.appliedhours == null)) {
                                console.log(this.appliedhours);
                                this.showDialog("ERROR!", "Please input approved hours", false, "Okay");
                                return [2 /*return*/];
                            }
                            else {
                                result['appliedhours'] = this.appliedhours;
                                result['status'] = this.status;
                                result['remarks'] = this.remarks;
                            }
                        }
                        if (this.param == "advisoryapproval") {
                            result['status'] = this.status;
                        }
                        else {
                            result['status'] = this.getStatusApproval(this.status);
                        }
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubmitApprovalComponent.prototype.showDialog = function (title, message, closePage, buttonText) {
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
    SubmitApprovalComponent.prototype.getStatusApproval = function (status) {
        switch (status) {
            case "Approve": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["LEAVE_STATUS_APPROVED"];
            }
            case "Disapprove": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["LEAVE_STATUS_DISAPPROVED"];
            }
            case "Escalate": {
                return "ESCALATE";
            }
            case "On Hold": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["LEAVE_STATUS_ON_HOLD"];
            }
        }
    };
    SubmitApprovalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submit-approval',
            template: __webpack_require__(/*! ./submit-approval.component.html */ "./src/app/component/submit-approval/submit-approval.component.html"),
            styles: [__webpack_require__(/*! ./submit-approval.component.scss */ "./src/app/component/submit-approval/submit-approval.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SubmitApprovalComponent);
    return SubmitApprovalComponent;
}());



/***/ }),

/***/ "./src/app/component/submit-approval/submit-approval.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/submit-approval/submit-approval.module.ts ***!
  \*********************************************************************/
/*! exports provided: SubmitApprovalComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitApprovalComponentModule", function() { return SubmitApprovalComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _submit_approval_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submit-approval.component */ "./src/app/component/submit-approval/submit-approval.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var SubmitApprovalComponentModule = /** @class */ (function () {
    function SubmitApprovalComponentModule() {
    }
    SubmitApprovalComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _submit_approval_component__WEBPACK_IMPORTED_MODULE_4__["SubmitApprovalComponent"]
            ],
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            entryComponents: [
                _submit_approval_component__WEBPACK_IMPORTED_MODULE_4__["SubmitApprovalComponent"]
            ]
        })
    ], SubmitApprovalComponentModule);
    return SubmitApprovalComponentModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-advisorydetails-advisorydetails-module~pages-leavedetails-leavedetails-module~pages-ov~78c371d5.js.map