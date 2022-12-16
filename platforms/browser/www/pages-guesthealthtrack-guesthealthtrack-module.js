(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-guesthealthtrack-guesthealthtrack-module"],{

/***/ "./src/app/component/menu-guest-healthttrack/menu-guest-healthttrack.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/component/menu-guest-healthttrack/menu-guest-healthttrack.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-list>\n    <ion-item lines=\"none\">\n      <img class=\"profilePic\" src=\"/assets/img/image_guest.png\">\n      <ion-icon class=\"buttonClose\" slot=\"end\" fill=\"clear\" (click)=\"myDismiss()\" color=\"medium\" name=\"close\">\n      </ion-icon>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label class=\"labelFilter\" slot=\"start\">{{guestId}}</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <h3 class=\"font13\">{{guestName}}</h3><br>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <p class=\"font12\">{{guestEmail}}</p>\n    </ion-item>\n\n\n  </ion-list>\n</ion-content>\n<ion-footer no-shadow>\n  <ion-item (click)=\"logout()\" lines=\"none\" detail=\"false\">\n    <ion-icon class=\"linkIcon\" slot=\"start\" name=\"log-out\" mode=\"ios\"></ion-icon>\n    <ion-label class=\"linkName\">\n      Log Out\n    </ion-label>\n  </ion-item>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/component/menu-guest-healthttrack/menu-guest-healthttrack.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/component/menu-guest-healthttrack/menu-guest-healthttrack.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin: 0 15px 0;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\nion-footer {\n  text-align: center;\n}\n\nion-datetime {\n  font-size: 14px;\n}\n\n.profilePic {\n  max-width: 60%;\n  max-height: 60%;\n}\n\n.font13 {\n  font-size: 13px;\n}\n\n.font12 {\n  font-size: 12px;\n}\n\n.itemFilter {\n  margin: 10px;\n}\n\n.labelFilter {\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n}\n\n.buttonClose {\n  margin-right: 0px;\n  font-size: 30px;\n  color: #7A7A7A;\n}\n\n.labelEntityName {\n  font-size: 13px;\n}\n\n.itemInput {\n  font-size: 14px;\n  margin: 0px !important;\n  width: calc(100% - 5px);\n}\n\n.itemDatetime {\n  margin: 0px !important;\n}\n\n.selectItems {\n  margin-left: 5px;\n  font-size: 14px;\n  width: calc(100% - 5px);\n}\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.buttonClear {\n  --background: #D6D7D7;\n  width: 100%;\n  height: 35px;\n}\n\n.buttonFilter {\n  width: 95%;\n  height: 35px;\n}\n\n.chkShowSub {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n  margin-left: 5px;\n  height: 20px;\n  width: 20px;\n}\n\n.lblShowSub {\n  font-size: 12px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21lbnUtZ3Vlc3QtaGVhbHRodHRyYWNrL0M6XFxVc2Vyc1xcMDMxNzc1XFxHRUFSLXdvcmtpbmcgLSAoNCkvc3JjXFxhcHBcXGNvbXBvbmVudFxcbWVudS1ndWVzdC1oZWFsdGh0dHJhY2tcXG1lbnUtZ3Vlc3QtaGVhbHRodHRyYWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvbWVudS1ndWVzdC1oZWFsdGh0dHJhY2svbWVudS1ndWVzdC1oZWFsdGh0dHJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDREo7O0FES0E7RUFDSSxlQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtBO0VBQ0ksc0JBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtBQ0ZKOztBREtBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbWVudS1ndWVzdC1oZWFsdGh0dHJhY2svbWVudS1ndWVzdC1oZWFsdGh0dHJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVtIHtcbiAgICBtYXJnaW46IDAgMTVweCAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByb2ZpbGVQaWMge1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIG1heC1oZWlnaHQ6IDYwJTtcbn1cblxuLmZvbnQxM3tcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5mb250MTJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vL0ZpbHRlciBBcmVhXG4uaXRlbUZpbHRlciB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubGFiZWxGaWx0ZXIge1xuICAgIGZvbnQtc2l6ZTogMThweDsgICAgXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5idXR0b25DbG9zZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjN0E3QTdBXG59XG5cbi8vRmlsdGVyIEl0ZW1zXG4ubGFiZWxFbnRpdHlOYW1lIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5pdGVtSW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1cHgpO1xufVxuXG4uaXRlbURhdGV0aW1lIHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0SXRlbXMge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1cHgpO1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbkNsZWFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNENkQ3RDc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uYnV0dG9uRmlsdGVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLmNoa1Nob3dTdWIge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRDNBODI4O1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1ib3JkZXItY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5sYmxTaG93U3ViIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59IiwiaW9uLWl0ZW0ge1xuICBtYXJnaW46IDAgMTVweCAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9maWxlUGljIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIG1heC1oZWlnaHQ6IDYwJTtcbn1cblxuLmZvbnQxMyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZvbnQxMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLml0ZW1GaWx0ZXIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5sYWJlbEZpbHRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5idXR0b25DbG9zZSB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjN0E3QTdBO1xufVxuXG4ubGFiZWxFbnRpdHlOYW1lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaXRlbUlucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcbn1cblxuLml0ZW1EYXRldGltZSB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RJdGVtcyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XG59XG5cbi5yb3VuZGVkSXRlbXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uQ2xlYXIge1xuICAtLWJhY2tncm91bmQ6ICNENkQ3RDc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5idXR0b25GaWx0ZXIge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5jaGtTaG93U3ViIHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJvcmRlci1jb2xvcjogZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmxibFNob3dTdWIge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/menu-guest-healthttrack/menu-guest-healthttrack.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/component/menu-guest-healthttrack/menu-guest-healthttrack.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MenuGuestHealthttrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGuestHealthttrackComponent", function() { return MenuGuestHealthttrackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");







var MenuGuestHealthttrackComponent = /** @class */ (function () {
    function MenuGuestHealthttrackComponent(modalController, loginService, storage, alertController, navParams) {
        this.modalController = modalController;
        this.loginService = loginService;
        this.storage = storage;
        this.alertController = alertController;
        this.navParams = navParams;
    }
    MenuGuestHealthttrackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_GUEST_DETAILS"]).then(function (val) {
            _this.guestId = val['GuestID'];
            _this.guestName = val['FirstName'] + " " + val['LastName'];
            _this.guestEmail = val['CompanyEmailAddress'];
            console.log(val);
        });
    };
    MenuGuestHealthttrackComponent.prototype.ionViewWillEnter = function () {
    };
    MenuGuestHealthttrackComponent.prototype.myDismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            'isDismissed': 1
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuGuestHealthttrackComponent.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Log Out',
                            message: 'Are you sure you want to log out?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Log Out',
                                    handler: function () {
                                        _this.myDismiss();
                                        _this.loginService.logout();
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
    MenuGuestHealthttrackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-guest-healthttrack',
            template: __webpack_require__(/*! ./menu-guest-healthttrack.component.html */ "./src/app/component/menu-guest-healthttrack/menu-guest-healthttrack.component.html"),
            styles: [__webpack_require__(/*! ./menu-guest-healthttrack.component.scss */ "./src/app/component/menu-guest-healthttrack/menu-guest-healthttrack.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], MenuGuestHealthttrackComponent);
    return MenuGuestHealthttrackComponent;
}());



/***/ }),

/***/ "./src/app/pages/guesthealthtrack/guesthealthtrack.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/guesthealthtrack/guesthealthtrack.module.ts ***!
  \*******************************************************************/
/*! exports provided: GuesthealthtrackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuesthealthtrackPageModule", function() { return GuesthealthtrackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_menu_guest_healthttrack_menu_guest_healthttrack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/menu-guest-healthttrack/menu-guest-healthttrack.component */ "./src/app/component/menu-guest-healthttrack/menu-guest-healthttrack.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _guesthealthtrack_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guesthealthtrack.page */ "./src/app/pages/guesthealthtrack/guesthealthtrack.page.ts");








var routes = [
    {
        path: '',
        component: _guesthealthtrack_page__WEBPACK_IMPORTED_MODULE_7__["GuesthealthtrackPage"]
    }
];
var GuesthealthtrackPageModule = /** @class */ (function () {
    function GuesthealthtrackPageModule() {
    }
    GuesthealthtrackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_guesthealthtrack_page__WEBPACK_IMPORTED_MODULE_7__["GuesthealthtrackPage"], _component_menu_guest_healthttrack_menu_guest_healthttrack_component__WEBPACK_IMPORTED_MODULE_5__["MenuGuestHealthttrackComponent"]],
            entryComponents: [_component_menu_guest_healthttrack_menu_guest_healthttrack_component__WEBPACK_IMPORTED_MODULE_5__["MenuGuestHealthttrackComponent"]]
        })
    ], GuesthealthtrackPageModule);
    return GuesthealthtrackPageModule;
}());



/***/ }),

/***/ "./src/app/pages/guesthealthtrack/guesthealthtrack.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/guesthealthtrack/guesthealthtrack.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-button icon-only menuToggle fill=\"clear\" (click)=\"showServerSettingsModal()\">\n            <ion-icon color=\"dark\" name=\"menu\"></ion-icon>\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"8\">\n          <img src=\"/assets/img/banner_heathtrack.png\" alt=\"\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n\n    <ion-label text-wrap>\n      <span class=\"EntryName\">ANTIGEN TEST</span>\n    </ion-label>\n    <hr class=\"solid\">\n\n    <ion-row class=\"top-row\">\n      <ion-col *ngIf=\"isAntigenResult;\" class=\"top-col\" [routerLink]=\"['/','antigentestresult']\">\n        <img src=\"/assets/img/ic_label_antigen_result.png\">\n\n      </ion-col>\n\n      <ion-col *ngIf=\"isAntigenQaApproval;\" class=\"top-col\" [routerLink]=\"['/','antigentestqaapproval']\">\n        <img src=\"/assets/img/ic_label_qa_approval.png\">\n\n      </ion-col>\n      \n      <ion-col   *ngIf=\"!isAntigenResult;\" class=\"top-col\">\n        <div></div>\n      </ion-col>\n\n      <ion-col   *ngIf=\"!isAntigenQaApproval;\" class=\"top-col\">\n        <div></div>\n      </ion-col>\n\n      <ion-col class=\"top-col\">\n        <div></div>\n      </ion-col>\n\n      <ion-col class=\"top-col\">\n        <div></div>\n      </ion-col>\n\n\n      <ion-col class=\"top-col\">\n        <div></div>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-label text-wrap>\n      <span class=\"EntryName\">VACCINE</span>\n    </ion-label>\n    <hr class=\"solid\">\n\n    <ion-row class=\"top-row\">\n      <ion-col class=\"top-col\" [routerLink]=\"['/','vaccineadd']\">\n        <img src=\"/assets/img/ic_label_vaccine_result.png\">\n\n      </ion-col>\n\n      <ion-col class=\"top-col\">\n        <div></div>\n      </ion-col>\n\n      <ion-col class=\"top-col\">\n        <div></div>\n      </ion-col>\n\n      <ion-col class=\"top-col\">\n        <div></div>\n      </ion-col>\n\n      <ion-col class=\"top-col\">\n        <div></div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/guesthealthtrack/guesthealthtrack.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/guesthealthtrack/guesthealthtrack.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  position: unset;\n}\n\nion-toolbar {\n  --border-width: 0px !important;\n  margin-top: 30px;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n}\n\n.divEvent {\n  height: 150px;\n  margin: 0px 20px;\n  border-radius: 10px;\n  z-index: 1;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card-vaccinated {\n  position: absolute;\n  width: 35%;\n  top: 17%;\n  margin-right: 5%;\n  right: 0%;\n}\n\n.card-title_1 {\n  position: absolute;\n  top: 18%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 5%;\n  text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;\n}\n\n.vaccine-shimmer {\n  position: absolute;\n}\n\n.card-title_2 {\n  position: absolute;\n  top: 35%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 5%;\n  text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;\n}\n\n.card-subtitle {\n  font-size: 1.3em;\n  position: absolute;\n  top: 52%;\n  color: #fff;\n  margin-left: 5%;\n}\n\n.card-button {\n  font-size: 1em;\n  position: absolute;\n  top: 64%;\n  width: 35%;\n  margin-left: 5%;\n}\n\n.divDate {\n  margin-left: 5%;\n  position: absolute;\n  top: 20%;\n}\n\n.DateMonth {\n  font-size: 19px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 83px;\n  height: 27px;\n}\n\n.DateDate {\n  font-size: 43px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 83px;\n  height: 55px;\n}\n\n.card-antigen-title {\n  position: absolute;\n  top: 18%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 39%;\n  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;\n}\n\n.card-antigen-result {\n  font-size: 1.8em;\n  position: absolute;\n  top: 40%;\n  color: #fff;\n  margin-left: 38%;\n}\n\n.card-antigen-next {\n  font-size: 1.1em;\n  position: absolute;\n  top: 65%;\n  color: #fff;\n  margin-left: 38%;\n}\n\n.card-antigen-warning {\n  position: absolute;\n  width: 26%;\n  top: 20%;\n  margin-left: 5%;\n  left: 0%;\n}\n\n.top-row {\n  margin-left: 3%;\n  margin-right: 3%;\n}\n\n.top-col {\n  padding: 2%;\n}\n\n.icon-user {\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.label-user {\n  font-size: 12px;\n  color: #D9A921;\n  font-weight: bold;\n  max-width: 80px !important;\n}\n\n.label-user-qa {\n  font-size: 12px;\n  color: #D9A921;\n  font-weight: bold;\n}\n\n.divider-label {\n  display: flex;\n  align-items: center;\n}\n\n.label-admin {\n  font-weight: bold;\n  color: #616161;\n  margin-top: 9px;\n  margin-left: -10px;\n}\n\n.EntryName {\n  color: #676767;\n  font-size: 11px;\n  display: block;\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\nhr.solid {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-top: 1px solid #c2a5a5;\n}\n\n.admin-label-row {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3Vlc3RoZWFsdGh0cmFjay9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUi13b3JraW5nIC0gKDQpL3NyY1xcYXBwXFxwYWdlc1xcZ3Vlc3RoZWFsdGh0cmFja1xcZ3Vlc3RoZWFsdGh0cmFjay5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2d1ZXN0aGVhbHRodHJhY2svZ3Vlc3RoZWFsdGh0cmFjay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw0RUFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEsK0VBQ0E7QUNGSjs7QURRQTtFQUNJLGtCQUFBO0FDTEo7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFFQSwrRUFDQTtBQ1JKOztBRGNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1hKOztBRGVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDWko7O0FEZUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDWko7O0FEZUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWko7O0FEZUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1pKOztBRGVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLCtFQUFBO0FDWko7O0FEZUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1pKOztBRGdCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDYko7O0FEaUJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FDZEo7O0FEaUJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDZEo7O0FEaUJBO0VBQ0ksV0FBQTtBQ2RKOztBRGlCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ2RKOztBRGdCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ2JKOztBRGdCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNiSjs7QURnQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNiSjs7QURpQkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNkSjs7QURpQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDZEo7O0FEaUJBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDZEo7O0FEaUJFO0VBQ0ksZ0JBQUE7QUNkTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2d1ZXN0aGVhbHRodHJhY2svZ3Vlc3RoZWFsdGh0cmFjay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBwb3NpdGlvbjogdW5zZXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZGl2RXZlbnQge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiAwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuXG4uY2FyZC12YWNjaW5hdGVkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1JTtcbiAgICB0b3A6IDE3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIHJpZ2h0OiAwJTtcbn1cblxuLmNhcmQtdGl0bGVfMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTglO1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNGNzkzMjE7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuXG4gICAgdGV4dC1zaGFkb3c6XG4gICAgLTFweCAtMXB4IDAgI0ZGRixcbiAgICAxcHggLTFweCAwICNGRkYsXG4gICAgLTFweCAxcHggMCAjRkZGLFxuICAgIDFweCAxcHggMCAjRkZGOyAgXG59XG5cbi52YWNjaW5lLXNoaW1tZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuXG4uY2FyZC10aXRsZV8yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNSU7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0Y3OTMyMTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG5cbiAgICB0ZXh0LXNoYWRvdzpcbiAgICAtMXB4IC0xcHggMCAjRkZGLFxuICAgIDFweCAtMXB4IDAgI0ZGRixcbiAgICAtMXB4IDFweCAwICNGRkYsXG4gICAgMXB4IDFweCAwICNGRkY7ICBcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTIlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcblxufVxuXG4uY2FyZC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjQlO1xuICAgIHdpZHRoOiAzNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uZGl2RGF0ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwJTtcbn1cblxuLkRhdGVNb250aCB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgICB3aWR0aDogODNweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG59XG5cbi5EYXRlRGF0ZSB7XG4gICAgZm9udC1zaXplOiA0M3B4O1xuICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICB3aWR0aDogODNweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5jYXJkLWFudGlnZW4tdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE4JTtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjRjc5MzIxO1xuICAgIG1hcmdpbi1sZWZ0OiAzOSU7XG4gICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICNmZmYsIDFweCAtMXB4IDAgI2ZmZiwgLTFweCAxcHggMCAjZmZmLCAxcHggMXB4IDAgI2ZmZjsgXG59XG5cbi5jYXJkLWFudGlnZW4tcmVzdWx0IHtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMzglO1xuXG59XG5cbi5jYXJkLWFudGlnZW4tbmV4dCB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2NSU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDM4JTtcblxufVxuXG4uY2FyZC1hbnRpZ2VuLXdhcm5pbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjYlO1xuICAgIHRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBsZWZ0OiAwJTtcbn1cblxuLnRvcC1yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xufVxuXG4udG9wLWNvbCB7XG4gICAgcGFkZGluZzogMiU7XG59XG5cbi5pY29uLXVzZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuLmxhYmVsLXVzZXIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI0Q5QTkyMTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXVzZXItcWEge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI0Q5QTkyMTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdmlkZXItbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4ubGFiZWwtYWRtaW4ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNjE2MTYxO1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5FbnRyeU5hbWUge1xuICAgIGNvbG9yOiAjNjc2NzY3O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5oci5zb2xpZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzJhNWE1O1xuICB9XG5cbiAgLmFkbWluLWxhYmVsLXJvdyB7XG4gICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gIH1cbiAgIiwiaW9uLWhlYWRlciB7XG4gIHBvc2l0aW9uOiB1bnNldDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXZFdmVudCB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5jYXJkLXZhY2NpbmF0ZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNSU7XG4gIHRvcDogMTclO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICByaWdodDogMCU7XG59XG5cbi5jYXJkLXRpdGxlXzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTglO1xuICBmb250LXNpemU6IDEuOGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGNzkzMjE7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICNGRkYsIDFweCAtMXB4IDAgI0ZGRiwgLTFweCAxcHggMCAjRkZGLCAxcHggMXB4IDAgI0ZGRjtcbn1cblxuLnZhY2NpbmUtc2hpbW1lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcmQtdGl0bGVfMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0Y3OTMyMTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgI0ZGRiwgMXB4IC0xcHggMCAjRkZGLCAtMXB4IDFweCAwICNGRkYsIDFweCAxcHggMCAjRkZGO1xufVxuXG4uY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MiU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5jYXJkLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjQlO1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5kaXZEYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xufVxuXG4uRGF0ZU1vbnRoIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA4M3B4O1xuICBoZWlnaHQ6IDI3cHg7XG59XG5cbi5EYXRlRGF0ZSB7XG4gIGZvbnQtc2l6ZTogNDNweDtcbiAgY29sb3I6ICM1QzVDNUM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gIHdpZHRoOiA4M3B4O1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5jYXJkLWFudGlnZW4tdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTglO1xuICBmb250LXNpemU6IDEuOGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGNzkzMjE7XG4gIG1hcmdpbi1sZWZ0OiAzOSU7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjZmZmLCAxcHggLTFweCAwICNmZmYsIC0xcHggMXB4IDAgI2ZmZiwgMXB4IDFweCAwICNmZmY7XG59XG5cbi5jYXJkLWFudGlnZW4tcmVzdWx0IHtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAzOCU7XG59XG5cbi5jYXJkLWFudGlnZW4tbmV4dCB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NSU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMzglO1xufVxuXG4uY2FyZC1hbnRpZ2VuLXdhcm5pbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNiU7XG4gIHRvcDogMjAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGxlZnQ6IDAlO1xufVxuXG4udG9wLXJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuLnRvcC1jb2wge1xuICBwYWRkaW5nOiAyJTtcbn1cblxuLmljb24tdXNlciB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLmxhYmVsLXVzZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRDlBOTIxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC11c2VyLXFhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0Q5QTkyMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXZpZGVyLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxhYmVsLWFkbWluIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLkVudHJ5TmFtZSB7XG4gIGNvbG9yOiAjNjc2NzY3O1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaHIuc29saWQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2MyYTVhNTtcbn1cblxuLmFkbWluLWxhYmVsLXJvdyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/guesthealthtrack/guesthealthtrack.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/guesthealthtrack/guesthealthtrack.page.ts ***!
  \*****************************************************************/
/*! exports provided: GuesthealthtrackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuesthealthtrackPage", function() { return GuesthealthtrackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _component_menu_guest_healthttrack_menu_guest_healthttrack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/menu-guest-healthttrack/menu-guest-healthttrack.component */ "./src/app/component/menu-guest-healthttrack/menu-guest-healthttrack.component.ts");






var GuesthealthtrackPage = /** @class */ (function () {
    function GuesthealthtrackPage(alertController, platform, storage, modalController) {
        this.alertController = alertController;
        this.platform = platform;
        this.storage = storage;
        this.modalController = modalController;
        this.modalIsOpen = false;
    }
    GuesthealthtrackPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_GUEST_MENU"]).then(function (val) {
            _this.isAntigenResult = val['AntigenProcess'];
            _this.isAntigenQaApproval = val['AntigenQAProcess'];
            _this.isVaccineResult = val['VaccineProcess'];
            console.log(val);
        });
    };
    GuesthealthtrackPage.prototype.showServerSettingsModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_menu_guest_healthttrack_menu_guest_healthttrack_component__WEBPACK_IMPORTED_MODULE_5__["MenuGuestHealthttrackComponent"],
                                cssClass: 'modalGuestHealthTrack',
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
    GuesthealthtrackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guesthealthtrack',
            template: __webpack_require__(/*! ./guesthealthtrack.page.html */ "./src/app/pages/guesthealthtrack/guesthealthtrack.page.html"),
            styles: [__webpack_require__(/*! ./guesthealthtrack.page.scss */ "./src/app/pages/guesthealthtrack/guesthealthtrack.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], GuesthealthtrackPage);
    return GuesthealthtrackPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-guesthealthtrack-guesthealthtrack-module.js.map