(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/component/server-settings/server-settings.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/server-settings/server-settings.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-list>\n    <ion-item class=\"itemFilter\" lines=\"full\">\n      <ion-label class=\"labelFilter\" slot=\"start\">Server Settings</ion-label>\n      <ion-icon class=\"buttonClose\" slot=\"end\" fill=\"clear\" (click)=\"myDismiss()\" color=\"medium\" name=\"close\">\n      </ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Server URL</ion-label>\n      <ion-item class=\"itemInput\" lines=\"none\">\n        <ion-input class=\"roundedItems\" [(ngModel)]=\"UrlInput\" [disabled]=\"devMode || domainMode\"></ion-input>\n      </ion-item>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Password</ion-label>\n      <ion-item class=\"itemInput\" lines=\"none\">\n        <ion-input class=\"roundedItems\" [(ngModel)]=\"PasswordInput\" type=\"password\" [disabled]=\"!devMode\"></ion-input>\n      </ion-item>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-checkbox class=\"chkShowSub\" [(ngModel)]=\"devMode\" (ionChange)=\"devModeCheck()\"></ion-checkbox>\n      <ion-label class=\"lblShowSub\"> Dev Mode</ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-checkbox class=\"chkShowSub\" [(ngModel)]=\"domainMode\" (ionChange)=\"domainModeCheck()\"></ion-checkbox>\n      <ion-label class=\"lblShowSub\"> Domain Mode</ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-checkbox class=\"chkShowSub\" [(ngModel)]=\"guestLogin\" (ionChange)=\"domainModeCheck()\"></ion-checkbox>\n      <ion-label class=\"lblShowSub\"> Guest</ion-label>\n    </ion-item>\n\n\n  </ion-list>\n</ion-content>\n<ion-footer no-shadow>\n  <ion-toolbar position=\"bottom\">\n    <ion-button class=\"buttonFilter\" (click)=\"save()\">SAVE</ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n\n"

/***/ }),

/***/ "./src/app/component/server-settings/server-settings.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/server-settings/server-settings.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin: 0 15px 0;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\nion-footer {\n  text-align: center;\n}\n\nion-datetime {\n  font-size: 14px;\n}\n\n.itemFilter {\n  margin: 10px;\n}\n\n.labelFilter {\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n}\n\n.buttonClose {\n  margin-right: 0px;\n  font-size: 30px;\n  color: #7A7A7A;\n}\n\n.labelEntityName {\n  font-size: 13px;\n}\n\n.itemInput {\n  font-size: 14px;\n  margin: 0px !important;\n  width: calc(100% - 5px);\n}\n\n.itemDatetime {\n  margin: 0px !important;\n}\n\n.selectItems {\n  margin-left: 5px;\n  font-size: 14px;\n  width: calc(100% - 5px);\n}\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.buttonClear {\n  --background: #D6D7D7;\n  width: 100%;\n  height: 35px;\n}\n\n.buttonFilter {\n  width: 95%;\n  height: 35px;\n}\n\n.chkShowSub {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n  margin-left: 5px;\n  height: 20px;\n  width: 20px;\n}\n\n.lblShowSub {\n  font-size: 12px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NlcnZlci1zZXR0aW5ncy9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUldvcmtpbmcyL3NyY1xcYXBwXFxjb21wb25lbnRcXHNlcnZlci1zZXR0aW5nc1xcc2VydmVyLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvc2VydmVyLXNldHRpbmdzL3NlcnZlci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREtBO0VBQ0ksZUFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLQTtFQUNJLHNCQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO1VBQUEsb0NBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3NlcnZlci1zZXR0aW5ncy9zZXJ2ZXItc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVtIHtcbiAgICBtYXJnaW46IDAgMTVweCAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLy9GaWx0ZXIgQXJlYVxuLml0ZW1GaWx0ZXIge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmxhYmVsRmlsdGVyIHtcbiAgICBmb250LXNpemU6IDE4cHg7ICAgIFxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uYnV0dG9uQ2xvc2Uge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzdBN0E3QVxufVxuXG4vL0ZpbHRlciBJdGVtc1xuLmxhYmVsRW50aXR5TmFtZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaXRlbUlucHV0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcbn1cblxuLml0ZW1EYXRldGltZSB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdEl0ZW1zIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcbn1cblxuLnJvdW5kZWRJdGVtcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25DbGVhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDZEN0Q3O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLmJ1dHRvbkZpbHRlciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5jaGtTaG93U3ViIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0QzQTgyODtcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjRDNBODI4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiBncmF5O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4ubGJsU2hvd1N1YiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSIsImlvbi1pdGVtIHtcbiAgbWFyZ2luOiAwIDE1cHggMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaXRlbUZpbHRlciB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmxhYmVsRmlsdGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLmJ1dHRvbkNsb3NlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM3QTdBN0E7XG59XG5cbi5sYWJlbEVudGl0eU5hbWUge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5pdGVtSW5wdXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1cHgpO1xufVxuXG4uaXRlbURhdGV0aW1lIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdEl0ZW1zIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcbn1cblxuLnJvdW5kZWRJdGVtcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQxZDE7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25DbGVhciB7XG4gIC0tYmFja2dyb3VuZDogI0Q2RDdENztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmJ1dHRvbkZpbHRlciB7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmNoa1Nob3dTdWIge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0QzQTgyODtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiBncmF5O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4ubGJsU2hvd1N1YiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/component/server-settings/server-settings.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/server-settings/server-settings.component.ts ***!
  \************************************************************************/
/*! exports provided: ServerSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSettingsComponent", function() { return ServerSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");





var ServerSettingsComponent = /** @class */ (function () {
    function ServerSettingsComponent(modalController, storage, navParams) {
        this.modalController = modalController;
        this.storage = storage;
        this.navParams = navParams;
    }
    ServerSettingsComponent.prototype.ngOnInit = function () {
    };
    ServerSettingsComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (val) {
            console.log(val);
            _this.param = _this.navParams.get('data');
            _this.module = _this.navParams.get('module');
            _this.devMode = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["IS_SERVER_DEV"]];
            _this.domainMode = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["IS_SERVER_DOMAIN"]];
            _this.isServerSetUrl = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["IS_SERVER_SET_URL"]];
            _this.serverUrl = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]];
            _this.isServerDefault = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["IS_SERVER_DEFAULT"]];
            _this.guestLogin = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["IS_GUEST_LOGIN"]];
            if (_this.isServerSetUrl) {
                _this.UrlInput = _this.serverUrl;
            }
            if (_this.devMode) {
                _this.PasswordInput = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["DEV_PASSWORD"];
            }
        });
    };
    ServerSettingsComponent.prototype.devModeCheck = function () {
        if (!this.devMode) {
            this.PasswordInput = "";
            if (this.isServerSetUrl) {
                this.UrlInput = this.serverUrl;
            }
        }
        else {
            this.UrlInput = "";
        }
    };
    ServerSettingsComponent.prototype.domainModeCheck = function () {
        if (!this.domainMode) {
            this.UrlInput = "";
            if (this.isServerSetUrl) {
                this.UrlInput = this.serverUrl;
            }
        }
        else {
            this.UrlInput = "";
        }
    };
    ServerSettingsComponent.prototype.save = function () {
        var _this = this;
        var tempUrl = this.serverUrl;
        if (this.UrlInput) {
            this.isServerSetUrl = true;
            this.isServerDefault = false;
            tempUrl = this.UrlInput;
        }
        if (this.domainMode && !this.devMode) {
            tempUrl = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT_DOMAIN"];
            this.isServerDefault = false;
        }
        if (!this.domainMode && this.devMode) {
            if (!this.PasswordInput) {
                alert('Password is required');
                return;
            }
            if (this.PasswordInput != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["DEV_PASSWORD"]) {
                alert('Wrong password!');
                return;
            }
            tempUrl = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT_DEV"];
            this.isServerDefault = false;
        }
        if (this.domainMode && this.devMode) {
            if (!this.PasswordInput) {
                alert('Password is required');
                return;
            }
            if (this.PasswordInput != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["DEV_PASSWORD"]) {
                alert('Wrong password!');
                return;
            }
            tempUrl = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT_DOMAIN_DEV"];
            this.isServerDefault = false;
        }
        if (this.UrlInput == "" && !this.devMode && !this.domainMode) {
            this.isServerSetUrl = false;
            this.isServerDefault = true;
            tempUrl = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"];
        }
        var server_settings = {
            is_server_domain: this.domainMode,
            is_server_default: this.isServerDefault,
            is_server_dev: this.devMode,
            is_server_set_url: this.isServerSetUrl,
            is_guest_login: this.guestLogin,
            server_url: tempUrl,
        };
        console.log(server_settings);
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"], server_settings).then(function (result) {
            alert('Settings Saved!');
            _this.myDismiss();
        }).catch(function (e) {
            alert('Error saving settings. Please try again!');
            _this.myDismiss();
        });
    };
    ServerSettingsComponent.prototype.myDismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            'isDismissed': 1,
                            'is_guest_login': this.guestLogin
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server-settings',
            template: __webpack_require__(/*! ./server-settings.component.html */ "./src/app/component/server-settings/server-settings.component.html"),
            styles: [__webpack_require__(/*! ./server-settings.component.scss */ "./src/app/component/server-settings/server-settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], ServerSettingsComponent);
    return ServerSettingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _component_server_settings_server_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/server-settings/server-settings.component */ "./src/app/component/server-settings/server-settings.component.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"], _component_server_settings_server_settings_component__WEBPACK_IMPORTED_MODULE_7__["ServerSettingsComponent"]],
            entryComponents: [_component_server_settings_server_settings_component__WEBPACK_IMPORTED_MODULE_7__["ServerSettingsComponent"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n    <ion-header>\n    </ion-header>\n    <ion-content>\n        <div *ngIf=\"!IsGuest\" class=\"bgSizeCoverTop\"></div>\n        <div *ngIf=\"!IsGuest\" class=\"bgSizeCoverBottom\"></div>\n        <ion-grid>\n            <ion-row class=\"rowGear\">\n                <ion-col size=\"12\" class=\"colGEARIcon\">\n                    <img class=\"imgGEARicon\" *ngIf=\"IsGuest\" src=\"/assets/img/ic_big_icon_health.png\" alt=\"\">\n                    <img class=\"imgGEARicon\" *ngIf=\"!IsGuest\" src=\"/assets/img/icon.png\" alt=\"\">\n\n                        <!-- <img class=\"imgGEARtext\" src=\"/assets/img/gear_name.png\" alt=\"\"> -->\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"rowLogin\">\n                <ion-col size=\"12\">\n                    <div class=\"divLogin\">\n                        <div class=\"divimgGEARtext\">\n                            <img class=\"imgGEARtext\" src=\"/assets/img/gear_name.png\" alt=\"\">\n                        </div>\n                        <div class=\"divUsernamePassword\">\n                            <ion-item lines=\"inset\">\n                                <!-- <ion-icon class=\"linkIcon\" slot=\"start\" name=\"person\" mode=\"md\"></ion-icon> -->\n                                <ion-label class=\"EntityName\" position=\"stacked\">USERNAME</ion-label>\n                                <ion-input class=\"inputUsername\" type=\"number\" [(ngModel)]=\"user_name\"></ion-input>\n                            </ion-item>\n                            <ion-item lines=\"inset\">\n                                <!-- <ion-icon class=\"linkIcon\" slot=\"start\" name=\"key\"></ion-icon> -->\n                                <ion-label class=\"EntityName\" position=\"stacked\">PASSWORD</ion-label>\n                                <ion-input class=\"inputPassword\" type=\"password\" [(ngModel)]=\"user_password\" (keyup.enter)=\"attemptlogin()\"></ion-input>\n                            </ion-item>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"rowLoginButton\">\n                <ion-col size=\"12\">\n                    <ion-button block outline class=\"Login\" size=\"large\" (click)=\"attemptlogin()\" expand=\"block\">LOGIN\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <div class=\"forgotpass\" (click)=\"openForgotPass()\">Forgot Password?</div>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class=\"rowVersion\">\n                <ion-col size=\"5\">\n                    <ion-icon name=\"settings\" (click) = \"showServerSettingsModal()\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"7\">\n                        <div class=\"version\" >{{ version }}</div>\n                </ion-col>\n            </ion-row>\n        </ion-grid> \n    </ion-content>\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%;\n  width: 100%;\n  min-width: 320px;\n  z-index: 5;\n}\n\nion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: rgba(0, 0, 0, 0);\n  --border-color: darkgray;\n}\n\nion-button {\n  font-weight: 300;\n  width: 100%;\n  margin-top: 30px !important;\n}\n\nion-input {\n  width: 100%;\n  height: 40px;\n}\n\nion-card {\n  margin: 10px 0;\n  position: relative;\n  text-align: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-card-title {\n  text-align: center;\n  font-size: 16px;\n  font-weight: normal;\n}\n\nion-icon {\n  color: darkslategray;\n}\n\n.bgSizeCoverTop {\n  z-index: 0;\n  background-image: url(/assets/img/login_top_bg.png);\n  background-size: cover;\n  position: absolute;\n  width: 30vh;\n  height: 21vh;\n  left: 0;\n  top: -5px;\n  filter: drop-shadow(0.5px 0.5px 2px #808080);\n}\n\n.bgSizeCoverBottom {\n  z-index: 0;\n  background-image: url(\"/assets/img/login_bot_bg.png\");\n  background-size: cover;\n  position: absolute;\n  width: 70vw;\n  height: 40vh;\n  right: 0;\n  bottom: -5px;\n  filter: drop-shadow(0.5px 0.5px 2px #808080);\n}\n\n.rowGear {\n  height: 50%;\n  min-height: 300px;\n  align-content: center;\n  align-items: center;\n  place-content: center;\n  place-items: center;\n}\n\n.colGEARIcon {\n  text-align: center;\n}\n\n.rowLogin {\n  height: 45%;\n  min-height: 280px;\n}\n\n.rowLoginButton {\n  height: 5%;\n}\n\n.rowVersion {\n  height: 0%;\n  margin-top: -30px;\n}\n\n.linkIcon {\n  color: rgb(48, 48, 48);\n  margin-right: 10px;\n  margin-top: 35px;\n  margin-left: 10px;\n  height: 20px;\n}\n\n.divimgGEARtext {\n  text-align: center;\n}\n\n.inputUsername {\n  --padding-start: 5px;\n  font-size: 18px;\n  font-family: \"RobotoRegular\";\n}\n\n.inputPassword {\n  --padding-start: 5px;\n  font-size: 18px;\n  font-family: \"RobotoRegular\";\n}\n\n.version {\n  font-size: 11px;\n  color: white;\n  text-align: right;\n}\n\n.rounded {\n  border: 1px solid #D3A828;\n  width: 100%;\n  --padding-start: 15px;\n}\n\n.txtGEAR {\n  font-size: 32px;\n}\n\n.divLogin {\n  padding: 15px 15px 0px;\n  margin: -60px 20px 0 20px;\n  height: 100%;\n  min-height: 270px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background-color: rgb(255, 255, 255);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.divLogin .divUsernamePassword {\n  margin-top: 5%;\n}\n\n.missionClass {\n  padding-bottom: 10px;\n}\n\n.card-desc-cvr {\n  float: left;\n}\n\n.card-title {\n  color: #838383;\n  font-size: 13px;\n}\n\n.Login {\n  --background: linear-gradient(to bottom, #D3A828, #E0861F);\n  height: 50px !important;\n  width: 70%;\n  margin: auto;\n  margin-top: -95px !important;\n  --border-radius: 40px;\n  font-size: 14px;\n  font-family: \"RobotoMedium\";\n  --box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n}\n\n.EntityName {\n  color: #E0861F;\n  -webkit-padding-start: 5px;\n          padding-inline-start: 5px;\n  font-size: 12px;\n  font-family: \"RobotoBold\";\n}\n\n.crdTitle {\n  text-align: center;\n  font-size: 18px;\n}\n\n@media (max-width: 767px) {\n  ion-col {\n    border: none;\n  }\n  .imgGEARicon {\n    height: 200px;\n    margin-top: -20px;\n  }\n  .imgGEARtext {\n    height: 60px;\n  }\n}\n\n@media (min-width: 768px) {\n  .imgGEARicon {\n    height: 250px;\n    margin-top: -20px;\n  }\n  .imgGEARtext {\n    height: 80px;\n  }\n}\n\n.forgotpass {\n  margin-top: -50px;\n  float: right;\n  margin-right: 20px;\n  font-size: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFwwMzE3NzVcXEdFQVJXb3JraW5nMi9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRFQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7QUNDSjs7QURFQTtFQUVJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FES0E7RUFDSSxVQUFBO0FDRko7O0FES0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDRko7O0FES0E7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0kseUJBQUE7RUFLQSxXQUFBO0VBQ0EscUJBQUE7QUNOSjs7QURTQTtFQUNJLGVBQUE7QUNOSjs7QURTQTtFQU9JLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw0RUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDWko7O0FEYUk7RUFDSSxjQUFBO0FDWFI7O0FEZUE7RUFDSSxvQkFBQTtBQ1pKOztBRGVBO0VBQ0ksV0FBQTtBQ1pKOztBRGVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNaSjs7QURlQTtFQUtJLDBEQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw4RUFBQTtBQ2hCSjs7QURtQkE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2hCSjs7QURtQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNoQko7O0FEbUJBO0VBQ0k7SUFDSSxZQUFBO0VDaEJOO0VEa0JFO0lBQ0ksYUFBQTtJQUNBLGlCQUFBO0VDaEJOO0VEa0JFO0lBQ0ksWUFBQTtFQ2hCTjtBQUNGOztBRG1CQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLGlCQUFBO0VDakJOO0VEbUJFO0lBQ0ksWUFBQTtFQ2pCTjtBQUNGOztBRG9CQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ2xCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICB6LWluZGV4OiA1O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAtLWJvcmRlci1jb2xvcjogZGFya2dyYXk7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaW9uLWljb24ge1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xufVxuXG4uYmdTaXplQ292ZXJUb3Age1xuICAgIHotaW5kZXg6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2xvZ2luX3RvcF9iZy5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzMHZoO1xuICAgIGhlaWdodDogMjF2aDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogLTVweDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNXB4IDAuNXB4IDJweCAjODA4MDgwKTtcbn1cblxuLmJnU2l6ZUNvdmVyQm90dG9tIHtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2xvZ2luX2JvdF9iZy5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogLTVweDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNXB4IDAuNXB4IDJweCAjODA4MDgwKTtcbn1cblxuLnJvd0dlYXIge1xuICAgIC8vaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNzBweCk7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2xHRUFSSWNvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm93TG9naW4ge1xuICAgIGhlaWdodDogNDUlO1xuICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xuICAgIC8vYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gICAgLy9tYXJnaW4tdG9wOiAtNDBweDtcbn1cblxuLnJvd0xvZ2luQnV0dG9uIHtcbiAgICBoZWlnaHQ6IDUlO1xufVxuXG4ucm93VmVyc2lvbiB7XG4gICAgaGVpZ2h0OiAwJTtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLmxpbmtJY29uIHtcbiAgICBjb2xvcjogcmdiKDQ4LCA0OCwgNDgpO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLmRpdmltZ0dFQVJ0ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dFVzZXJuYW1lIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uaW5wdXRQYXNzd29yZCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLnZlcnNpb24ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5yb3VuZGVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDNBODI4O1xuICAgIC8vIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAvLyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICAvLyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcbn1cblxuLnR4dEdFQVIge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmRpdkxvZ2luIHtcbiAgICAvLyBwYWRkaW5nOiAwIDMwcHggMTBweCAxNXB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIC8vIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAvLyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICAvLyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAwcHg7XG4gICAgbWFyZ2luOiAtNjBweCAyMHB4IDAgMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMjcwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgLmRpdlVzZXJuYW1lUGFzc3dvcmQge1xuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB9XG59XG5cbi5taXNzaW9uQ2xhc3Mge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZC1kZXNjLWN2ciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogIzgzODM4MztcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5Mb2dpbiB7XG4gICAgLy8tLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gICAgLy8gaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRDNBODI4LCAjRTA4NjFGKTtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAtOTVweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG4gICAgLS1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uRW50aXR5TmFtZSB7XG4gICAgY29sb3I6ICNFMDg2MUY7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvQm9sZFwiO1xufVxuXG4uY3JkVGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGlvbi1jb2wge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIC5pbWdHRUFSaWNvbiB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIH1cbiAgICAuaW1nR0VBUnRleHQge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuaW1nR0VBUmljb24ge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICB9XG4gICAgLmltZ0dFQVJ0ZXh0IHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIH1cbn1cblxuLmZvcmdvdHBhc3Mge1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG59IiwiaW9uLWdyaWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICB6LWluZGV4OiA1O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLS1ib3JkZXItY29sb3I6IGRhcmtncmF5O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDEwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG59XG5cbi5iZ1NpemVDb3ZlclRvcCB7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9sb2dpbl90b3BfYmcucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzB2aDtcbiAgaGVpZ2h0OiAyMXZoO1xuICBsZWZ0OiAwO1xuICB0b3A6IC01cHg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC41cHggMC41cHggMnB4ICM4MDgwODApO1xufVxuXG4uYmdTaXplQ292ZXJCb3R0b20ge1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9sb2dpbl9ib3RfYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3MHZ3O1xuICBoZWlnaHQ6IDQwdmg7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC01cHg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC41cHggMC41cHggMnB4ICM4MDgwODApO1xufVxuXG4ucm93R2VhciB7XG4gIGhlaWdodDogNTAlO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb2xHRUFSSWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvd0xvZ2luIHtcbiAgaGVpZ2h0OiA0NSU7XG4gIG1pbi1oZWlnaHQ6IDI4MHB4O1xufVxuXG4ucm93TG9naW5CdXR0b24ge1xuICBoZWlnaHQ6IDUlO1xufVxuXG4ucm93VmVyc2lvbiB7XG4gIGhlaWdodDogMCU7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4ubGlua0ljb24ge1xuICBjb2xvcjogcmdiKDQ4LCA0OCwgNDgpO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5kaXZpbWdHRUFSdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0VXNlcm5hbWUge1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5pbnB1dFBhc3N3b3JkIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4udmVyc2lvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnJvdW5kZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDNBODI4O1xuICB3aWR0aDogMTAwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xufVxuXG4udHh0R0VBUiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmRpdkxvZ2luIHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDBweDtcbiAgbWFyZ2luOiAtNjBweCAyMHB4IDAgMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyNzBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbn1cbi5kaXZMb2dpbiAuZGl2VXNlcm5hbWVQYXNzd29yZCB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4ubWlzc2lvbkNsYXNzIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJkLWRlc2MtY3ZyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICM4MzgzODM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLkxvZ2luIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRDNBODI4LCAjRTA4NjFGKTtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogLTk1cHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xuICAtLWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5FbnRpdHlOYW1lIHtcbiAgY29sb3I6ICNFMDg2MUY7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvQm9sZFwiO1xufVxuXG4uY3JkVGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGlvbi1jb2wge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAuaW1nR0VBUmljb24ge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cbiAgLmltZ0dFQVJ0ZXh0IHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW1nR0VBUmljb24ge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cbiAgLmltZ0dFQVJ0ZXh0IHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbn1cbi5mb3Jnb3RwYXNzIHtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDkwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _component_server_settings_server_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/server-settings/server-settings.component */ "./src/app/component/server-settings/server-settings.component.ts");







// import { Firebase } from '@ionic-native/firebase/ngx';



var LoginPage = /** @class */ (function () {
    /**
    * Constructor of our first page
    * @param loginService The Login Service to get authentication
    */
    function LoginPage(appVersion, storage, loginService, router, 
    // private firebase: Firebase,
    alertController, platform, notificationService, modalController) {
        this.appVersion = appVersion;
        this.storage = storage;
        this.loginService = loginService;
        this.router = router;
        this.alertController = alertController;
        this.platform = platform;
        this.notificationService = notificationService;
        this.modalController = modalController;
        this.modalIsOpen = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //this.connect();
            _this.showErrorClicked = 0;
            _this.storage.remove(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_ERROR_MESSAGE"]);
            _this.version = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_VERSION"];
            console.log(_this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_ISFIRSTTIME"]));
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_ISFIRSTTIME"]).then(function (val) {
                if (!val || val == null) {
                    console.log("Set Default Server Settings");
                    _this.setDefaultServerSettings();
                }
            });
            // this.firebase.onTokenRefresh()
            //   .subscribe((token: string) =>
            //     this.showAlert(token)
            //   );
            // this.firebase.getToken()
            //   .then(token =>
            //     this.showAlert(token)
            //   ) // save the token server-side and use it to push notifications to this device
            //   .catch(error => console.error('Error getting token', error));
        });
    };
    LoginPage.prototype.showAlert = function (message) {
        // console.log(`The token is ${message}`)
        // alert(message);
    };
    LoginPage.prototype.attemptlogin = function () {
        if (typeof (this.user_name) === "undefined" || this.user_name == "") {
            alert("Please enter your username!");
        }
        else if (typeof (this.user_password) === "undefined" || this.user_password == "") {
            alert("Please enter your password!");
        }
        else {
            this.user_type = (this.IsGuest ? "GUEST" : "GABC");
            this.loginService.attemptlogin(this.user_name, this.user_password, this.user_type);
        }
    };
    LoginPage.prototype.showErrorMessage = function () {
        // this.showErrorClicked = this.showErrorClicked + 1;
        // if (this.showErrorClicked == 5) {
        //   this.showErrorClicked = 0;
        //   this.showServerSettingsModal();
        //   this.storage.get(Constants.API_ENDPOINT).then((val) => {
        //     let currentServer: string;
        //     if (val == "http://146.88.74.66:20002"){
        //       currentServer = "Current Server: DEV";
        //     }
        //     else if (val == "http://210.5.69.249:29794"){
        //       currentServer = "Current Server: DEV";
        //     }
        //     else if (val == "http://146.88.74.69:9993"){
        //       currentServer = "Current Server: DEV";
        //     }
        //     else{
        //       currentServer = "Current Server: " + Constants.API_ENDPOINT;
        //     }
        //     this.showDialog("DEV OPTIONS", currentServer);
        //   });
        // }
    };
    LoginPage.prototype.showDialog = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            inputs: [
                                // {
                                //   name: 'chkIsDev',
                                //   type: 'checkbox',
                                //   label: 'Dev Mode',
                                //   value: '',
                                //   checked: true
                                // },
                                {
                                    name: 'txtIsDev',
                                    type: 'text',
                                    placeholder: 'Username'
                                },
                                {
                                    name: 'txtPassword',
                                    type: 'password',
                                    placeholder: 'Password'
                                },
                                {
                                    name: 'checkbox1',
                                    type: 'checkbox',
                                    label: 'Checkbox 1',
                                    value: 'value1',
                                    checked: true
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Show Last Error',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_ERROR_MESSAGE"]).then(function (val) {
                                            if (val == "" || val == null || val == undefined) {
                                                _this.showDialogError("ERROR", "No Error");
                                            }
                                            else {
                                                _this.showDialogError("ERROR", val);
                                            }
                                        });
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        if (data.txtIsDev == "DEV" && data.txtPassword == "0729") {
                                            _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT_DOMAIN_DEV"]);
                                        }
                                        else {
                                            _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT_DOMAIN_DEV"]);
                                        }
                                    }
                                }
                            ],
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
    LoginPage.prototype.showDialogError = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            buttons: [
                                {
                                    text: 'Okay',
                                    handler: function () {
                                    }
                                }
                            ],
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
    LoginPage.prototype.showServerSettingsModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_server_settings_server_settings_component__WEBPACK_IMPORTED_MODULE_9__["ServerSettingsComponent"],
                                cssClass: 'modalServerSettings',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "WfhApproval",
                                    data: this.advisory
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                _this.IsGuest = detail.data['is_guest_login'];
                                console.log(_this.IsGuest);
                                if (detail.data['isDismissed'] == 0) {
                                }
                            }
                            _this.modalIsOpen = false;
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.setDefaultServerSettings = function () {
        var server_settings = {
            is_server_domain: true,
            is_server_default: false,
            is_server_dev: false,
            is_server_set_url: false,
            server_url: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT_DOMAIN"],
            is_guest_login: false
        };
        console.log(server_settings);
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"], server_settings).then(function (result) {
            console.log('Default Server Settings saved');
        }).catch(function (e) {
            console.log('Error saving default settings');
        });
    };
    LoginPage.prototype.openForgotPass = function () {
        this.router.navigate(['/forgotpass']);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__["AppVersion"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


// import { Firebase } from '@ionic-native/firebase/ngx';

var NotificationService = /** @class */ (function () {
    function NotificationService(
    // public firebaseNative: Firebase,
    platfrom) {
        this.platfrom = platfrom;
    }
    NotificationService.prototype.getToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var token;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // if( this.platfrom.is('ios')){
                // token = await this.firebaseNative.getToken();
                // const perm = await this.firebaseNative.grantPermission();
                // }
                return [2 /*return*/, token];
            });
        });
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map