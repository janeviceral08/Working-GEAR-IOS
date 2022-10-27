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

module.exports = "ion-item {\n  margin: 0 15px 0;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\nion-footer {\n  text-align: center;\n}\n\nion-datetime {\n  font-size: 14px;\n}\n\n.profilePic {\n  max-width: 60%;\n  max-height: 60%;\n}\n\n.font13 {\n  font-size: 13px;\n}\n\n.font12 {\n  font-size: 12px;\n}\n\n.itemFilter {\n  margin: 10px;\n}\n\n.labelFilter {\n  font-size: 18px;\n  font-family: \"RobotoMedium\";\n}\n\n.buttonClose {\n  margin-right: 0px;\n  font-size: 30px;\n  color: #7A7A7A;\n}\n\n.labelEntityName {\n  font-size: 13px;\n}\n\n.itemInput {\n  font-size: 14px;\n  margin: 0px !important;\n  width: calc(100% - 5px);\n}\n\n.itemDatetime {\n  margin: 0px !important;\n}\n\n.selectItems {\n  margin-left: 5px;\n  font-size: 14px;\n  width: calc(100% - 5px);\n}\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.buttonClear {\n  --background: #D6D7D7;\n  width: 100%;\n  height: 35px;\n}\n\n.buttonFilter {\n  width: 95%;\n  height: 35px;\n}\n\n.chkShowSub {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n  margin-left: 5px;\n  height: 20px;\n  width: 20px;\n}\n\n.lblShowSub {\n  font-size: 12px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvY29tcG9uZW50L21lbnUtZ3Vlc3QtaGVhbHRodHRyYWNrL21lbnUtZ3Vlc3QtaGVhbHRodHRyYWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvbWVudS1ndWVzdC1oZWFsdGh0dHJhY2svbWVudS1ndWVzdC1oZWFsdGh0dHJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDREo7O0FES0E7RUFDSSxlQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtBO0VBQ0ksc0JBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtBQ0ZKOztBREtBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbWVudS1ndWVzdC1oZWFsdGh0dHJhY2svbWVudS1ndWVzdC1oZWFsdGh0dHJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVtIHtcbiAgICBtYXJnaW46IDAgMTVweCAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByb2ZpbGVQaWMge1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIG1heC1oZWlnaHQ6IDYwJTtcbn1cblxuLmZvbnQxM3tcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5mb250MTJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vL0ZpbHRlciBBcmVhXG4uaXRlbUZpbHRlciB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubGFiZWxGaWx0ZXIge1xuICAgIGZvbnQtc2l6ZTogMThweDsgICAgXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5idXR0b25DbG9zZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjN0E3QTdBXG59XG5cbi8vRmlsdGVyIEl0ZW1zXG4ubGFiZWxFbnRpdHlOYW1lIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5pdGVtSW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1cHgpO1xufVxuXG4uaXRlbURhdGV0aW1lIHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0SXRlbXMge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1cHgpO1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbkNsZWFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNENkQ3RDc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uYnV0dG9uRmlsdGVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLmNoa1Nob3dTdWIge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRDNBODI4O1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1ib3JkZXItY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5sYmxTaG93U3ViIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59IiwiaW9uLWl0ZW0ge1xuICBtYXJnaW46IDAgMTVweCAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9maWxlUGljIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIG1heC1oZWlnaHQ6IDYwJTtcbn1cblxuLmZvbnQxMyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZvbnQxMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLml0ZW1GaWx0ZXIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5sYWJlbEZpbHRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5idXR0b25DbG9zZSB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjN0E3QTdBO1xufVxuXG4ubGFiZWxFbnRpdHlOYW1lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaXRlbUlucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcbn1cblxuLml0ZW1EYXRldGltZSB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RJdGVtcyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XG59XG5cbi5yb3VuZGVkSXRlbXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uQ2xlYXIge1xuICAtLWJhY2tncm91bmQ6ICNENkQ3RDc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5idXR0b25GaWx0ZXIge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5jaGtTaG93U3ViIHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJvcmRlci1jb2xvcjogZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmxibFNob3dTdWIge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"

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

module.exports = "ion-header {\n  position: unset;\n}\n\nion-toolbar {\n  --border-width: 0px !important;\n  margin-top: 30px;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n}\n\n.divEvent {\n  height: 150px;\n  margin: 0px 20px;\n  border-radius: 10px;\n  z-index: 1;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card-vaccinated {\n  position: absolute;\n  width: 35%;\n  top: 17%;\n  margin-right: 5%;\n  right: 0%;\n}\n\n.card-title_1 {\n  position: absolute;\n  top: 18%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 5%;\n  text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;\n}\n\n.vaccine-shimmer {\n  position: absolute;\n}\n\n.card-title_2 {\n  position: absolute;\n  top: 35%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 5%;\n  text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;\n}\n\n.card-subtitle {\n  font-size: 1.3em;\n  position: absolute;\n  top: 52%;\n  color: #fff;\n  margin-left: 5%;\n}\n\n.card-button {\n  font-size: 1em;\n  position: absolute;\n  top: 64%;\n  width: 35%;\n  margin-left: 5%;\n}\n\n.divDate {\n  margin-left: 5%;\n  position: absolute;\n  top: 20%;\n}\n\n.DateMonth {\n  font-size: 19px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 83px;\n  height: 27px;\n}\n\n.DateDate {\n  font-size: 43px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 83px;\n  height: 55px;\n}\n\n.card-antigen-title {\n  position: absolute;\n  top: 18%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 39%;\n  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;\n}\n\n.card-antigen-result {\n  font-size: 1.8em;\n  position: absolute;\n  top: 40%;\n  color: #fff;\n  margin-left: 38%;\n}\n\n.card-antigen-next {\n  font-size: 1.1em;\n  position: absolute;\n  top: 65%;\n  color: #fff;\n  margin-left: 38%;\n}\n\n.card-antigen-warning {\n  position: absolute;\n  width: 26%;\n  top: 20%;\n  margin-left: 5%;\n  left: 0%;\n}\n\n.top-row {\n  margin-left: 3%;\n  margin-right: 3%;\n}\n\n.top-col {\n  padding: 2%;\n}\n\n.icon-user {\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.label-user {\n  font-size: 12px;\n  color: #D9A921;\n  font-weight: bold;\n  max-width: 80px !important;\n}\n\n.label-user-qa {\n  font-size: 12px;\n  color: #D9A921;\n  font-weight: bold;\n}\n\n.divider-label {\n  display: flex;\n  align-items: center;\n}\n\n.label-admin {\n  font-weight: bold;\n  color: #616161;\n  margin-top: 9px;\n  margin-left: -10px;\n}\n\n.EntryName {\n  color: #676767;\n  font-size: 11px;\n  display: block;\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\nhr.solid {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-top: 1px solid #c2a5a5;\n}\n\n.admin-label-row {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvZ3Vlc3RoZWFsdGh0cmFjay9ndWVzdGhlYWx0aHRyYWNrLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3Vlc3RoZWFsdGh0cmFjay9ndWVzdGhlYWx0aHRyYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0FDQ0o7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFFQSwrRUFDQTtBQ0ZKOztBRFFBO0VBQ0ksa0JBQUE7QUNMSjs7QURTQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLCtFQUNBO0FDUko7O0FEY0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDWEo7O0FEZUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNaSjs7QURlQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNaSjs7QURlQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNaSjs7QURlQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWko7O0FEZUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0VBQUE7QUNaSjs7QURlQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDWko7O0FEZ0JBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNiSjs7QURpQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUNkSjs7QURpQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURpQkE7RUFDSSxXQUFBO0FDZEo7O0FEaUJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDZEo7O0FEZ0JBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDYko7O0FEZ0JBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2JKOztBRGdCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2JKOztBRGlCQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2RKOztBRGlCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURpQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNkSjs7QURpQkU7RUFDSSxnQkFBQTtBQ2ROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3Vlc3RoZWFsdGh0cmFjay9ndWVzdGhlYWx0aHRyYWNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiB1bnNldDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5kaXZFdmVudCB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5cbi5jYXJkLXZhY2NpbmF0ZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzUlO1xuICAgIHRvcDogMTclO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgcmlnaHQ6IDAlO1xufVxuXG4uY2FyZC10aXRsZV8xIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxOCU7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0Y3OTMyMTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG5cbiAgICB0ZXh0LXNoYWRvdzpcbiAgICAtMXB4IC0xcHggMCAjRkZGLFxuICAgIDFweCAtMXB4IDAgI0ZGRixcbiAgICAtMXB4IDFweCAwICNGRkYsXG4gICAgMXB4IDFweCAwICNGRkY7ICBcbn1cblxuLnZhY2NpbmUtc2hpbW1lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5cbi5jYXJkLXRpdGxlXzIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM1JTtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjRjc5MzIxO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcblxuICAgIHRleHQtc2hhZG93OlxuICAgIC0xcHggLTFweCAwICNGRkYsXG4gICAgMXB4IC0xcHggMCAjRkZGLFxuICAgIC0xcHggMXB4IDAgI0ZGRixcbiAgICAxcHggMXB4IDAgI0ZGRjsgIFxufVxuXG4uY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MiU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuXG59XG5cbi5jYXJkLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2NCU7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5kaXZEYXRlIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjAlO1xufVxuXG4uRGF0ZU1vbnRoIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA4M3B4O1xuICAgIGhlaWdodDogMjdweDtcbn1cblxuLkRhdGVEYXRlIHtcbiAgICBmb250LXNpemU6IDQzcHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA4M3B4O1xuICAgIGhlaWdodDogNTVweDtcbn1cblxuLmNhcmQtYW50aWdlbi10aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTglO1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNGNzkzMjE7XG4gICAgbWFyZ2luLWxlZnQ6IDM5JTtcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgI2ZmZiwgMXB4IC0xcHggMCAjZmZmLCAtMXB4IDFweCAwICNmZmYsIDFweCAxcHggMCAjZmZmOyBcbn1cblxuLmNhcmQtYW50aWdlbi1yZXN1bHQge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAzOCU7XG5cbn1cblxuLmNhcmQtYW50aWdlbi1uZXh0IHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDY1JTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMzglO1xuXG59XG5cbi5jYXJkLWFudGlnZW4td2FybmluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNiU7XG4gICAgdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGxlZnQ6IDAlO1xufVxuXG4udG9wLXJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG59XG5cbi50b3AtY29sIHtcbiAgICBwYWRkaW5nOiAyJTtcbn1cblxuLmljb24tdXNlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG4ubGFiZWwtdXNlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjRDlBOTIxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1heC13aWR0aDogODBweCAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwtdXNlci1xYSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjRDlBOTIxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2aWRlci1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5sYWJlbC1hZG1pbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM2MTYxNjE7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLkVudHJ5TmFtZSB7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmhyLnNvbGlkIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjMmE1YTU7XG4gIH1cblxuICAuYWRtaW4tbGFiZWwtcm93IHtcbiAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgfVxuICAiLCJpb24taGVhZGVyIHtcbiAgcG9zaXRpb246IHVuc2V0O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdkV2ZW50IHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmNhcmQtdmFjY2luYXRlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM1JTtcbiAgdG9wOiAxNyU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHJpZ2h0OiAwJTtcbn1cblxuLmNhcmQtdGl0bGVfMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOCU7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0Y3OTMyMTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgI0ZGRiwgMXB4IC0xcHggMCAjRkZGLCAtMXB4IDFweCAwICNGRkYsIDFweCAxcHggMCAjRkZGO1xufVxuXG4udmFjY2luZS1zaGltbWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FyZC10aXRsZV8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRjc5MzIxO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjRkZGLCAxcHggLTFweCAwICNGRkYsIC0xcHggMXB4IDAgI0ZGRiwgMXB4IDFweCAwICNGRkY7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUyJTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmNhcmQtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NCU7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmRpdkRhdGUge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG59XG5cbi5EYXRlTW9udGgge1xuICBmb250LXNpemU6IDE5cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDgzcHg7XG4gIGhlaWdodDogMjdweDtcbn1cblxuLkRhdGVEYXRlIHtcbiAgZm9udC1zaXplOiA0M3B4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDgzcHg7XG4gIGhlaWdodDogNTVweDtcbn1cblxuLmNhcmQtYW50aWdlbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOCU7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0Y3OTMyMTtcbiAgbWFyZ2luLWxlZnQ6IDM5JTtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICNmZmYsIDFweCAtMXB4IDAgI2ZmZiwgLTFweCAxcHggMCAjZmZmLCAxcHggMXB4IDAgI2ZmZjtcbn1cblxuLmNhcmQtYW50aWdlbi1yZXN1bHQge1xuICBmb250LXNpemU6IDEuOGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDM4JTtcbn1cblxuLmNhcmQtYW50aWdlbi1uZXh0IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY1JTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAzOCU7XG59XG5cbi5jYXJkLWFudGlnZW4td2FybmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI2JTtcbiAgdG9wOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbGVmdDogMCU7XG59XG5cbi50b3Atcm93IHtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xufVxuXG4udG9wLWNvbCB7XG4gIHBhZGRpbmc6IDIlO1xufVxuXG4uaWNvbi11c2VyIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4ubGFiZWwtdXNlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNEOUE5MjE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXVzZXItcWEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRDlBOTIxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdmlkZXItbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGFiZWwtYWRtaW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2MTYxNjE7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uRW50cnlOYW1lIHtcbiAgY29sb3I6ICM2NzY3Njc7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5oci5zb2xpZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzJhNWE1O1xufVxuXG4uYWRtaW4tbGFiZWwtcm93IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

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