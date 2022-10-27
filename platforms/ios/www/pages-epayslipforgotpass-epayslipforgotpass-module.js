(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-epayslipforgotpass-epayslipforgotpass-module"],{

/***/ "./src/app/pages/epayslipforgotpass/epayslipforgotpass.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/epayslipforgotpass/epayslipforgotpass.module.ts ***!
  \***********************************************************************/
/*! exports provided: EpayslipforgotpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpayslipforgotpassPageModule", function() { return EpayslipforgotpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _epayslipforgotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./epayslipforgotpass.page */ "./src/app/pages/epayslipforgotpass/epayslipforgotpass.page.ts");







var routes = [
    {
        path: '',
        component: _epayslipforgotpass_page__WEBPACK_IMPORTED_MODULE_6__["EpayslipforgotpassPage"]
    }
];
var EpayslipforgotpassPageModule = /** @class */ (function () {
    function EpayslipforgotpassPageModule() {
    }
    EpayslipforgotpassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_epayslipforgotpass_page__WEBPACK_IMPORTED_MODULE_6__["EpayslipforgotpassPage"]]
        })
    ], EpayslipforgotpassPageModule);
    return EpayslipforgotpassPageModule;
}());



/***/ }),

/***/ "./src/app/pages/epayslipforgotpass/epayslipforgotpass.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/epayslipforgotpass/epayslipforgotpass.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-buttons class=\"buttonHeaderClass\" mode=\"md\">\n    <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\" (click)=\"goBack()\"></ion-back-button>\n    <ion-title mode=\"md\">EPayslip Password</ion-title>\n    <ion-button class=\"btnSubmit\" slot=\"end\" (click)=\"submit()\">\n        <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n    </ion-button>\n</ion-buttons>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines inset>\n          <ion-label class=\"EntityName\" position=\"stacked\">LOGIN PASSWORD</ion-label>\n          <ion-input [(ngModel)]=\"loginPass\" id=\"rounded\" rows=\"3\" maxlength=\"500\" type=\"password\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines inset>\n          <ion-label class=\"EntityName\" position=\"stacked\">NEW PAYSLIP PASSWORD</ion-label>\n          <ion-input [(ngModel)]=\"epayslipPass\" id=\"rounded\" rows=\"3\" maxlength=\"500\" type=\"password\"></ion-input>\n          <div class=\"passLabel\">(Password must be 8 to 20 characters long with number, lower case and upper case letters.</div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines inset>\n          <ion-label class=\"EntityName\" position=\"stacked\">CONFIRM NEW EPAYSLIP PASSWORD</ion-label>\n          <ion-input [(ngModel)]=\"confirmPass\" id=\"rounded\" rows=\"3\" maxlength=\"500\" type=\"password\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/epayslipforgotpass/epayslipforgotpass.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/epayslipforgotpass/epayslipforgotpass.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n\nion-back-button {\n  color: white;\n  margin-left: -10px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px;\n}\n\n.btnSubmit {\n  color: white;\n  padding-right: 5px;\n}\n\n.checkBtn {\n  --background: #D3A828;\n  height: 35px;\n  width: 100px;\n  font-size: 11px;\n  margin-left: 0px;\n  margin-top: 26px;\n}\n\nion-item {\n  --show-full-highlight: 0;\n}\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\nion-input {\n  height: 40px !important;\n}\n\n.passLabel {\n  font-size: 11px;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvZXBheXNsaXBmb3Jnb3RwYXNzL2VwYXlzbGlwZm9yZ290cGFzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VwYXlzbGlwZm9yZ290cGFzcy9lcGF5c2xpcGZvcmdvdHBhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO1VBQUEsb0NBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwYXlzbGlwZm9yZ290cGFzcy9lcGF5c2xpcGZvcmdvdHBhc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5idG5TdWJtaXQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5jaGVja0J0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjZweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMDtcbn1cblxuI3JvdW5kZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4ucGFzc0xhYmVsIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufSIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5idG5TdWJtaXQge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmNoZWNrQnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMDtcbn1cblxuI3JvdW5kZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLnBhc3NMYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/epayslipforgotpass/epayslipforgotpass.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/epayslipforgotpass/epayslipforgotpass.page.ts ***!
  \*********************************************************************/
/*! exports provided: EpayslipforgotpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpayslipforgotpassPage", function() { return EpayslipforgotpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");







var EpayslipforgotpassPage = /** @class */ (function () {
    function EpayslipforgotpassPage(navCtrl, httpApi, alertController, loadingCtrl, storage, loginService) {
        this.navCtrl = navCtrl;
        this.httpApi = httpApi;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.loginService = loginService;
    }
    EpayslipforgotpassPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
        });
    };
    EpayslipforgotpassPage.prototype.goBack = function () {
        // this.router.navigate(['/advisorytypelist']);
        this.navCtrl.back();
    };
    EpayslipforgotpassPage.prototype.submit = function () {
        var _this = this;
        if (!this.loginPass) {
            if (this.loginPass.trim() == "") {
                alert("Login Password is required");
                return;
            }
        }
        if (!this.epayslipPass) {
            if (this.epayslipPass.trim() == "") {
                alert("New Password is required");
                return;
            }
        }
        if (!this.confirmPass) {
            if (this.confirmPass.trim() == "") {
                alert("Please enter confirm password");
                return;
            }
            if (this.confirmPass.trim() != this.epayslipPass.trim()) {
                alert("Password does not match");
                return;
            }
        }
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
                var postData = {
                    UserID: _this.empId,
                    EmployeeId: _this.empId,
                    SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                    AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                    CurrentLoginPassword: _this.loginPass,
                    NewPayslipPassword: _this.epayslipPass,
                    ConfirmCurrentPayslipPassword: _this.confirmPass,
                    AccountType: "payslip",
                    ProcessType: "reset-payslip-password"
                };
                console.log(postData);
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/account-management/payslip", postData, {})
                        .then(function (data) {
                        console.log(data);
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        console.log(jsonData);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_YES"]) {
                            _this.loading.dismiss();
                            switch (jsonData['Message']) {
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["OUTDATED_ERROR"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["OUTDATED_MESSAGE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OTHER_DEVICE"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_EXPIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_EXPIRED"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_REQUIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_REQUIRED"]);
                                    return;
                            }
                            _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                            return;
                        }
                        _this.loading.dismiss();
                        _this.showDialog("DONE!", "Your request has been saved", true, "Great!");
                    })
                        .catch(function (error) {
                        console.log(error.error);
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    EpayslipforgotpassPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
    EpayslipforgotpassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-epayslipforgotpass',
            template: __webpack_require__(/*! ./epayslipforgotpass.page.html */ "./src/app/pages/epayslipforgotpass/epayslipforgotpass.page.html"),
            styles: [__webpack_require__(/*! ./epayslipforgotpass.page.scss */ "./src/app/pages/epayslipforgotpass/epayslipforgotpass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], EpayslipforgotpassPage);
    return EpayslipforgotpassPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-epayslipforgotpass-epayslipforgotpass-module.js.map