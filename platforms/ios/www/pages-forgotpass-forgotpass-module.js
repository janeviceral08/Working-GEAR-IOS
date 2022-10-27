(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgotpass-forgotpass-module"],{

/***/ "./src/app/component/forgot-password/forgot-password.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/forgot-password/forgot-password.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <!-- <ion-item lines=\"none\" class=\"ion-text-wrap\">\n      <ion-label >Please enter the last 3 digits of your employee number + date of birth (m/d/yyyy)</ion-label>\n      <ion-label >Sample:</ion-label>\n      <ion-label >Employee Number: 012345</ion-label>\n      <ion-label >Birth Date: January 5, 1991</ion-label>\n      <ion-label >Security Key: 345151991</ion-label>  \n    </ion-item> -->\n  <ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" size-lg>\n          <ion-item lines=\"none\">\n            <ion-label class=\"labelFilter\"  *ngIf=\"!newPassword\">SECURITY KEY</ion-label>\n            <ion-label class=\"labelFilter\"  *ngIf=\"newPassword\">NEW PASSWORD</ion-label>\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col size=\"12\" size-sm *ngIf=\"!newPassword\">\n          <p class=\"lblDetails\">Please enter the last 3 digits of your employee number + date of birth (m/d/yyyy)\n          </p>\n          <br>\n          <p class=\"lblDetails\">Sample:\n          </p>\n          <br>\n          <p class=\"lbNegMargin\">Employee Number: 012345\n          </p>\n          <br>\n          <p class=\"lbNegMargin\">Birth Date: January 5, 1991\n          </p>\n          <br>\n          <p class=\"lbNegMargin\">Security Key: 345151991\n          </p>\n          <br>\n        </ion-col>\n\n        <ion-col size=\"12\" size-sm *ngIf=\"newPassword\">\n          <p class=\"lblDetails\">Hold-down the SHOW button to view your password.\n          </p>\n          <br>\n\n          <br>\n        </ion-col>\n\n\n        <ion-col size=\"12\" size-lg *ngIf=\"!newPassword\">\n          <!-- <ion-item class=\"itemInput\" lines=\"none\">\n            <ion-input class=\"roundedItems\" type=\"password\" [(ngModel)]=\"securityKey\"></ion-input>\n            <ion-icon slot=\"end\" color=\"medium\" name=\"eye-off\" (click)=\"togglePasswordText()\"></ion-icon>\n          </ion-item>     -->\n          <ion-item *ngIf=\"showPassword\" lines=\"none\">\n            <ion-input class=\"roundedItems\" type=\"text\" [(ngModel)]=\"securityKey\"></ion-input>\n            <ion-icon slot=\"end\" color=\"medium\" name=\"eye-off\" (click)=\"togglePasswordText()\"></ion-icon>\n          </ion-item>\n          <ion-item *ngIf=\"!showPassword\" lines=\"none\">\n            <ion-input class=\"roundedItems\" type=\"password\" [(ngModel)]=\"securityKey\"></ion-input>\n            <ion-icon slot=\"end\" color=\"medium\" name=\"eye-off\" (click)=\"togglePasswordText()\"></ion-icon>\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col size=\"12\" size-lg *ngIf=\"newPassword\">\n          <ion-item *ngIf=\"showNewPassword\" lines=\"none\">\n            <ion-input class=\"roundedItems\" readonly type=\"text\" [(ngModel)]=\"newPasswordKey\"></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"!showNewPassword\" lines=\"none\">\n            <ion-input class=\"roundedItems\" readonly type=\"password\" [(ngModel)]=\"newPasswordKey\"></ion-input>\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col size=\"6\" size-lg *ngIf=\"newPassword\">\n          <ion-item lines=\"none\">\n            <ion-button class=\"AttachButton\" shape=\"round\" (touchstart)=\"touchstart($event)\" (touchend)=\"touchend($event)\">\n              SHOW\n              <ion-icon slot=\"start\" name=\"eye\"></ion-icon>\n            </ion-button>\n          </ion-item>\n\n        </ion-col>\n        <ion-col size=\"6\" size-lg *ngIf=\"newPassword\">          \n          <ion-item lines=\"none\">\n            <ion-button class=\"AttachButton\" shape=\"round\" (click)=\"copyPassword()\">\n              COPY\n              <ion-icon slot=\"start\" name=\"copy\"></ion-icon>\n            </ion-button>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-list>\n</ion-content>\n<ion-footer no-shadow>\n  <ion-toolbar position=\"bottom\">\n    <ion-button *ngIf=\"!newPassword\" class=\"buttonFilter\" (click)=\"submit()\">SUBMIT</ion-button>\n    <ion-button *ngIf=\"newPassword\" class=\"buttonFilter\" (click)=\"done()\">DONE</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/component/forgot-password/forgot-password.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/forgot-password/forgot-password.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lblDetails {\n  font-size: 12px;\n  white-space: pre-line !important;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.labelFilter {\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n  text-align: center;\n}\n\n.AttachButton {\n  color: #484848;\n  --background: #D6D7D7;\n  height: 35px;\n  width: 100px;\n  font-size: 11px;\n  margin-left: 0px;\n  margin-top: 26px;\n}\n\n.buttonFilter {\n  width: 95%;\n  height: 35px;\n}\n\n.lbNegMargin {\n  font-size: 12px;\n  white-space: pre-line !important;\n  margin-top: -15px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-style: italic;\n}\n\n.itemInput {\n  font-size: 14px;\n  margin: 0px !important;\n  width: calc(100% - 5px);\n}\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvY29tcG9uZW50L2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1hKOztBRGVBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNaSjs7QURlQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNaSjs7QURlQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDWko7O0FEZUE7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDWko7O0FEZ0JBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNiSjs7QURnQkE7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtBQ2JKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGlvbi1pdGVtIHtcbi8vICAgICBtYXJnaW46IDAgMTVweCAwO1xuLy8gICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuLy8gICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbi8vIH1cblxuLy8gaW9uLWZvb3RlciB7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4vLyB9XG5cbi5sYmxEZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cblxuLmxhYmVsRmlsdGVyIHtcbiAgICBmb250LXNpemU6IDE4cHg7ICAgIFxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLkF0dGFjaEJ1dHRvbiB7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDZEN0Q3O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjZweDtcbn1cblxuLmJ1dHRvbkZpbHRlciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5sYk5lZ01hcmdpbntcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbn1cblxuLml0ZW1JbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XG59XG5cbi5yb3VuZGVkSXRlbXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWQxZDE7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufSIsIi5sYmxEZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5sYWJlbEZpbHRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLkF0dGFjaEJ1dHRvbiB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICAtLWJhY2tncm91bmQ6ICNENkQ3RDc7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG59XG5cbi5idXR0b25GaWx0ZXIge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5sYk5lZ01hcmdpbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLml0ZW1JbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XG59XG5cbi5yb3VuZGVkSXRlbXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/forgot-password/forgot-password.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/forgot-password/forgot-password.component.ts ***!
  \************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");








var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(modalController, httpApi, storage, navParams, loginService, clipboard) {
        this.modalController = modalController;
        this.httpApi = httpApi;
        this.storage = storage;
        this.navParams = navParams;
        this.loginService = loginService;
        this.clipboard = clipboard;
        this.newPassword = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.param = this.navParams.get('data');
        console.log(this.param);
    };
    ForgotPasswordComponent.prototype.submit = function () {
        if (!this.securityKey) {
            alert("Please enter Security Key");
            return;
        }
        if (this.securityKey.trim() == "") {
            alert("Please enter Security Key");
            return;
        }
        this.getNewPassword();
    };
    ForgotPasswordComponent.prototype.getNewPassword = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var postData = {
                UserID: _this.param['userId'],
                EmployeeId: _this.param['userId'],
                SessionID: undefined,
                SecurityStamp: undefined,
                Token: undefined,
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_VERSION"],
                SecretAnswer: _this.param['resultAnswer'],
                FilePassword: _this.securityKey,
                EmployeeSecretAnswer: _this.param['resultAnswer'],
                EmployeeFirstName: _this.param['firstName'],
                EmployeeMiddleName: _this.param['middelName'],
                EmployeeLastName: _this.param['lastName'],
                EmployeeEmail: _this.param['email'],
                CurrentLoginPassword: _this.param['currentLoginPass'],
                AccountType: "login",
                ProcessType: "forgot-login-password"
            };
            console.log(postData);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/account-management/login", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        // this.noError = false;
                        // this.loadingDone = true;
                        // this.errorMessage = Constants.MESSAGE_CON_ERROR;
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                        // this.noError = false;
                        // this.loadingDone = true;
                        // this.errorMessage = Constants.MESSAGE_CON_ERROR;
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        return;
                    }
                    _this.newPasswordKey = jsonData['Message'];
                    _this.newPassword = true;
                })
                    .catch(function (error) {
                });
            });
        });
    };
    ForgotPasswordComponent.prototype.togglePasswordText = function () {
        this.showPassword = !this.showPassword;
    };
    ForgotPasswordComponent.prototype.touchstart = function (event) {
        this.showNewPassword = true;
    };
    ForgotPasswordComponent.prototype.touchend = function (event) {
        this.showNewPassword = false;
    };
    ForgotPasswordComponent.prototype.copyPassword = function () {
        this.clipboard.copy(this.newPasswordKey);
    };
    ForgotPasswordComponent.prototype.done = function () {
        this.filterList();
    };
    ForgotPasswordComponent.prototype.filterList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            'isDismissed': 0,
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/component/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/component/forgot-password/forgot-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Clipboard"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/forgotpass/forgotpass.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.module.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageModule", function() { return ForgotpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/pages/forgotpass/forgotpass.page.ts");
/* harmony import */ var _component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/forgot-password/forgot-password.component */ "./src/app/component/forgot-password/forgot-password.component.ts");








var routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]
    }
];
var ForgotpassPageModule = /** @class */ (function () {
    function ForgotpassPageModule() {
    }
    ForgotpassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"], _component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]],
            entryComponents: [_component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]]
        })
    ], ForgotpassPageModule);
    return ForgotpassPageModule;
}());



/***/ }),

/***/ "./src/app/pages/forgotpass/forgotpass.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  \n</ion-header>\n<ion-content>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"backButton\" ion-button icon-only menuToggle slot=\"start\" (click)=\"goBack()\">\n        <ion-icon color=\"dark\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"title\">\n        <p>\n          <span class=\"titleSpan\">\n            Forgot\n          </span>\n          <span class=\"titleSpan\">\n            Password.\n          </span>\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"body\">\n          <p class=\"lblDetails\">{{statement}}\n          </p>\n          <!-- <p class=\"lblDetails\">\n          </p> -->\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-item no-lines inset>\n          <ion-label class=\"EntityName\" position=\"stacked\">USERNAME</ion-label>\n          <ion-textarea id=\"rounded\" rows=\"3\" maxlength=\"500\" [(ngModel)]=\"user_name\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-item no-lines lines=\"none\" inset>\n          <ion-button class=\"checkBtn\" slot=\"end\" fill=\"solid\" (click)=\"checkUser()\">\n            CHECK\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines inset>\n          <ion-label class=\"EntityName\" position=\"stacked\">SECURITY QUESTION</ion-label>\n          <ion-textarea id=\"rounded\" rows=\"1\" maxlength=\"500\" [(ngModel)]=\"resultQuestion\" readonly></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines inset>\n          <ion-label class=\"EntityName\" position=\"stacked\">ANSWER</ion-label>\n          <ion-input id=\"rounded\" rows=\"1\" maxlength=\"500\" [(ngModel)]=\"answer\" type=\"password\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines lines=\"none\" inset>\n          <ion-button class=\"checkBtn\" fill=\"solid\" (click)=\"submit()\">\n            SUBMIT\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/forgotpass/forgotpass.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titleSpan {\n  display: block;\n  font-size: 300%;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --min-height: 35px;\n  --padding: 0px;\n  margin-top: 30px;\n  top: 0%;\n}\n\n.title {\n  -webkit-margin-before: 30px;\n          margin-block-start: 30px;\n  margin-top: 0px;\n}\n\n.body {\n  -webkit-margin-before: 20px;\n          margin-block-start: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  display: block;\n}\n\n.EntityName {\n  font-size: 11px;\n  color: #676767;\n}\n\nion-content {\n  background-color: #F5F5F5;\n}\n\nion-textarea {\n  height: 40px !important;\n}\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.checkBtn {\n  --background: #D3A828;\n  height: 35px;\n  width: 100px;\n  font-size: 11px;\n  margin-left: 0px;\n  margin-top: 26px;\n}\n\nion-item {\n  --show-full-highlight: 0;\n}\n\n.lblDetails {\n  font-size: 12px;\n  white-space: pre-line !important;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvZm9yZ290cGFzcy9mb3Jnb3RwYXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9yZ290cGFzcy9mb3Jnb3RwYXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO1VBQUEsd0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FEU0E7RUFDSSwyQkFBQTtVQUFBLHdCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNQSjs7QURXQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDUko7O0FEV0E7RUFDSSx5QkFBQTtBQ1JKOztBRFdBO0VBQ0ksdUJBQUE7QUNSSjs7QURXQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQ0FBQTtVQUFBLG9DQUFBO0FDUko7O0FEV0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNSSjs7QURXQTtFQUNJLHdCQUFBO0FDUko7O0FEWUE7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDRCxrQkFBQTtBQ1RIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9yZ290cGFzcy9mb3Jnb3RwYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZVNwYW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAzMDAlO1xuXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLW1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgLS1wYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB0b3A6IDAlO1xufVxuXG4udGl0bGV7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcblxufVxuXG4uYmFja0J1dHRvbiB7XG4gICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XG5cbn1cblxuLmJvZHl7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAyMHB4O1xuXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG59XG5cbi5FbnRpdHlOYW1lIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICM2NzY3Njc7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4jcm91bmRlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja0J0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjZweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMDtcbn1cblxuXG4ubGJsRGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xuICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4iLCIudGl0bGVTcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMzAwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLW1pbi1oZWlnaHQ6IDM1cHg7XG4gIC0tcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0b3A6IDAlO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmJvZHkge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uRW50aXR5TmFtZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM2NzY3Njc7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNyb3VuZGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmNoZWNrQnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tc2hvdy1mdWxsLWhpZ2hsaWdodDogMDtcbn1cblxuLmxibERldGFpbHMge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/forgotpass/forgotpass.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.page.ts ***!
  \*****************************************************/
/*! exports provided: ForgotpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPage", function() { return ForgotpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/forgot-password/forgot-password.component */ "./src/app/component/forgot-password/forgot-password.component.ts");










var ForgotpassPage = /** @class */ (function () {
    function ForgotpassPage(httpApi, storage, loginService, navCtrl, alertController, loadingCtrl, file, fileOpener, modalController) {
        this.httpApi = httpApi;
        this.storage = storage;
        this.loginService = loginService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.file = file;
        this.fileOpener = fileOpener;
        this.modalController = modalController;
        this.loadingDone = false;
        this.noError = true;
        this.statement = "If you've forgotten the password to your account, please enter your Username. If you are still having problems please contact the webmaster at HRIS-ESS-Webmaster@goldenabc.com";
    }
    ForgotpassPage.prototype.ngOnInit = function () {
        this.checkLabelMessage();
    };
    ForgotpassPage.prototype.goBack = function () {
        // this.router.navigate(['/advisorytypelist']);
        this.navCtrl.back();
    };
    ForgotpassPage.prototype.checkUser = function () {
        var _this = this;
        if (!this.user_name) {
            alert("User name is required!");
            return;
        }
        if (this.user_name.trim() == "") {
            alert("User name is required!");
            return;
        }
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
                var postData = {
                    RecordId: '',
                    SecurityStamp: '',
                    Token: '',
                    AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                    IsActive: true,
                    UserID: _this.user_name,
                    AccountType: "login",
                    ProcessType: "validate-employee-id"
                };
                console.log(postData);
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/account-management/login", postData, {})
                        .then(function (data) {
                        _this.loading.dismiss();
                        if (data.data == null || data.data == undefined) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                            _this.noError = false;
                            _this.loadingDone = true;
                            _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        console.log(jsonData);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                            _this.noError = false;
                            _this.loadingDone = true;
                            _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_YES"]) {
                            switch (jsonData['Message']) {
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_ERROR"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_MESSAGE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_EXPIRED"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_REQUIRED"]);
                                    return;
                            }
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                            _this.noError = false;
                            _this.loadingDone = true;
                            _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                            return;
                        }
                        if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                            _this.noError = false;
                            _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                            return;
                        }
                        _this.resultQuestion = jsonData['Value']['SecretQuestionAnswer'][0]['SecretQuestion'];
                        _this.resultAnswer = jsonData['Value']['SecretQuestionAnswer'][0]['SecretAnswer'];
                        _this.currentLoginPass = jsonData['Value']['SecretQuestionAnswer'][0]['CurrentLoginPassword'];
                        _this.firstName = jsonData['Value']['EmployeeDetails'][0]['FNAME'];
                        _this.middelName = jsonData['Value']['EmployeeDetails'][0]['MNAME'];
                        _this.lastName = jsonData['Value']['EmployeeDetails'][0]['LNAME'];
                        _this.email = jsonData['Value']['EmployeeDetails'][0]['EMAIL'];
                        _this.filePassword = jsonData['Value']['EmployeeDetails'][0]['FILEPASSWORD'];
                        _this.noError = true;
                        _this.loadingDone = true;
                    })
                        .catch(function (error) {
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        _this.loadingDone = true;
                    });
                });
            });
        });
    };
    ForgotpassPage.prototype.submit = function () {
        if (!this.answer) {
            alert("No answer has been entered!");
            return;
        }
        if (this.answer != this.resultAnswer) {
            alert("Please provide the correct answer!");
            return;
        }
        console.log("test");
        this.showForgotPassDialog();
        //this.downloadAssetForm();
    };
    ForgotpassPage.prototype.getAssetForm = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var postData = {
                UserID: 20866,
                EmployeeId: "20866",
                SessionID: 12138,
                SecurityStamp: "94338e33-fb7f-4ab6-a6cd-890f35e70d4d",
                Token: "/P02NiYY2EilwS5RGU9LSbpCHP1aEn5A",
                AppPlatform: "ANDROID",
                AppVersion: "1.10.0",
                SecretAnswer: "balunso",
                EmployeeSecretAnswer: "balunso",
                EmployeeFirstName: "Ginel",
                EmployeeMiddleName: "Balunso",
                EmployeeLastName: "Dizon",
                EmployeeEmail: "gine.dizon@goldenabc.com",
                CurrentLoginPassword: "12345"
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.sendRequest(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/account-management/forgot-login-password", {
                    method: 'post',
                    data: postData,
                    responseType: 'blob'
                })
                    .then(function (response) {
                    var filename = "forgot-pass-temp" + ".pdf";
                    console.log(filename);
                    var pdfBlob = new Blob([response.data], { type: 'application/pdf' });
                    _this.file.writeFile(_this.file.dataDirectory, filename, pdfBlob, { replace: true }).then(function (c) {
                        _this.fileOpener.open(_this.file.dataDirectory + filename, 'application/pdf')
                            .then(function () { return console.log('File is opened'); })
                            .catch(function (e) { return console.log('Error opening file', e); });
                    });
                    // //for desktop
                    var fileURL = URL.createObjectURL(pdfBlob);
                    window.open(fileURL);
                })
                    .catch(function (response) {
                    // prints 403
                    console.log(response.status);
                    // prints Permission denied
                    console.log(response.error);
                });
            });
        });
    };
    ForgotpassPage.prototype.downloadAssetForm = function () {
        var _this = this;
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
                var postData = {
                    UserID: _this.user_name,
                    EmployeeId: _this.user_name,
                    SessionID: "",
                    SecurityStamp: "",
                    Token: "",
                    AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                    SecretAnswer: _this.answer,
                    EmployeeSecretAnswer: _this.answer,
                    EmployeeFirstName: _this.firstName,
                    EmployeeMiddleName: _this.middelName,
                    EmployeeLastName: _this.lastName,
                    EmployeeEmail: _this.email,
                    CurrentLoginPassword: _this.currentLoginPass
                };
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    console.log(postData);
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/account-management/forgot-login-password", postData, {})
                        .then(function (data) {
                        console.log(data);
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.getAssetForm();
                            _this.loading.dismiss();
                        }
                        else {
                            var jsonData = JSON.parse(data.data);
                            console.log(jsonData);
                            if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                                _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                                _this.loading.dismiss();
                                return;
                            }
                            if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_YES"]) {
                                _this.loading.dismiss();
                                switch (jsonData['Message']) {
                                    case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_ERROR"]:
                                        _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_MESSAGE"]);
                                        return;
                                    case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE"]:
                                        _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                        return;
                                    case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED"]:
                                        _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_EXPIRED"]);
                                        return;
                                    case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED"]:
                                        _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_REQUIRED"]);
                                        return;
                                }
                                _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                                return;
                            }
                            _this.loading.dismiss();
                        }
                    })
                        .catch(function (error) {
                        _this.getAssetForm();
                        console.log(error);
                        _this.loading.dismiss();
                        // this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                    });
                });
            });
        });
    };
    ForgotpassPage.prototype.showDialog = function (title, message, closePage, buttonText) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            buttons: [{
                                    text: buttonText,
                                    handler: function () {
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
    ForgotpassPage.prototype.showForgotPassDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            userId: this.user_name,
                            resultQuestionthis: this.resultQuestion,
                            resultAnswer: this.resultAnswer,
                            currentLoginPass: this.currentLoginPass,
                            firstName: this.firstName,
                            middelName: this.middelName,
                            lastName: this.lastName,
                            email: this.email,
                            filePassword: this.filePassword
                        };
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"],
                                cssClass: 'modalForgotPassSettings',
                                animated: true,
                                backdropDismiss: true,
                                componentProps: {
                                    module: "forgotpass",
                                    data: data
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.navCtrl.back();
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotpassPage.prototype.checkLabelMessage = function () {
        var _this = this;
        console.log("checkLabelMessage");
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
                var postData = {
                    UserID: "24273",
                    EmployeeId: "24273",
                    SessionID: "",
                    SecurityStamp: "",
                    Token: "",
                    AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                    AccountType: "login",
                    ProcessType: "forgot-login-password-intructions"
                };
                console.log(postData);
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/account-management/login", postData, {})
                        .then(function (data) {
                        console.log(data);
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        console.log(jsonData);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                            _this.loading.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_YES"]) {
                            _this.loading.dismiss();
                            switch (jsonData['Message']) {
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_ERROR"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_MESSAGE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_EXPIRED"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_REQUIRED"]);
                                    return;
                            }
                            return;
                        }
                        _this.loading.dismiss();
                        if (jsonData['Value']['0']['Statement']) {
                            _this.statement = jsonData['Value']['0']['Statement'];
                        }
                    })
                        .catch(function (error) {
                        console.log(error.error);
                        _this.loading.dismiss();
                    });
                });
            });
        });
    };
    ForgotpassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpass',
            template: __webpack_require__(/*! ./forgotpass.page.html */ "./src/app/pages/forgotpass/forgotpass.page.html"),
            styles: [__webpack_require__(/*! ./forgotpass.page.scss */ "./src/app/pages/forgotpass/forgotpass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
    ], ForgotpassPage);
    return ForgotpassPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-forgotpass-forgotpass-module.js.map