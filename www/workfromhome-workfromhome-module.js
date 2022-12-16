(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workfromhome-workfromhome-module"],{

/***/ "./src/app/pages/workfromhome/workfromhome.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/workfromhome/workfromhome.module.ts ***!
  \***********************************************************/
/*! exports provided: WorkfromhomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkfromhomePageModule", function() { return WorkfromhomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _workfromhome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workfromhome.page */ "./src/app/pages/workfromhome/workfromhome.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");







// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
// import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
// import { Diagnostic } from '@ionic-native/diagnostic/ngx';

var routes = [
    {
        path: '',
        component: _workfromhome_page__WEBPACK_IMPORTED_MODULE_6__["WorkfromhomePage"]
    }
];
var WorkfromhomePageModule = /** @class */ (function () {
    function WorkfromhomePageModule() {
    }
    WorkfromhomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_workfromhome_page__WEBPACK_IMPORTED_MODULE_6__["WorkfromhomePage"]],
            providers: [
            // AndroidPermissions,
            // Geolocation,
            // LocationAccuracy,
            // NativeGeocoder,
            // Diagnostic
            ]
        })
    ], WorkfromhomePageModule);
    return WorkfromhomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/workfromhome/workfromhome.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/workfromhome/workfromhome.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button class=btnFilter slot=\"end\" color=\"light\" (click)=\"openModal()\">\n                <ion-icon slot=\"start\" name=\"search\" mode=\"md\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-title mode=\"md\" slot=\"start\">Work From Home</ion-title>\n    <ion-fab bottom horizontal=\"end\" edge>\n        <ion-fab-button (click)=\"openWFHAdd()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-header>\n<ion-card class=divCardHeader>\n    <ion-item lines=\"full\">\n        <ion-thumbnail class=\"imgType\" slot=\"start\">\n            <img src=\"{{ idSrc }}\" alt=\"\">\n        </ion-thumbnail>\n        <ion-label text-wrap>\n            <ion-grid class=\"leaveCreditsInfo\">\n                <ion-row>\n                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                        Balance :\n                    </ion-col>\n                    <ion-col size=\"2\">\n                        {{wfhBalance}}\n                    </ion-col>\n                    <ion-col class=\"leaveCreditsInfoNameSecondRow\">\n                        For Approval :\n                    </ion-col>\n                    <ion-col size=\"2\">\n                        {{wfhApproval}}\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                        Credit :\n                    </ion-col>\n                    <ion-col size=\"2\">\n                        {{wfhCredits}}\n                    </ion-col>\n                    <ion-col class=\"leaveCreditsInfoNameSecondRow\">\n                        Approved :\n                    </ion-col>\n                    <ion-col size=\"2\">\n                        {{wfhApproved}}\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                        Posted :\n                    </ion-col>\n                    <ion-col size=\"2\">\n                        {{wfhPosted}}\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-label>\n    </ion-item>\n</ion-card>\n    \n<ion-content padding class=\"classContent\" hide-header header=\"header\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-card class=\"cardWhatsNextSmall\">\n        <ion-card-header class=\"divWhatsNextHeader\">\n            <ion-icon class=\"icnWhatsNext\" name=\"pin\"></ion-icon>\n            <ion-label class=\"lblTitleCard\">\n                 {{location}} </ion-label>\n            <ion-icon class=\"menuWhatsNextToggle\" *ngIf=\"noError\" name=\"refresh\" (click)=\"getLocation()\">\n            </ion-icon>\n        </ion-card-header>\n    </ion-card>\n    <ion-card class=divCardSegment mode=\"md\">\n        <div *ngIf=\"loadingDone; else shimmer\">\n            <div *ngIf=\"noError; else error\">\n                <ion-list mode=\"md\">\n                    <div *ngIf=\"!wfhIsEmpty; else error\">\n                        <div *ngFor=\"let wfh of WFHList\">\n\n                            <div *ngIf=\"wfh.IsForCheckIN == '0' || wfh.IsForCheckIN == '1'\">\n                                <ion-item class=\"itmClass\" button lines=\"none\" detail=\"false\">\n                                    <ion-avatar class=\"divDate\" (click)=\"setDTRDetails(wfh)\">\n                                        <div class=\"DateMonth\">\n                                            {{getDateMonth(wfh.AttendanceRequestDate,1)}}\n                                        </div>\n                                        <div class=\"DateDate\">\n                                            {{getDateDate(wfh.AttendanceRequestDate)}}\n                                        </div>\n                                    </ion-avatar>\n                                    <ion-label class=\"lblWFH\" text-wrap>\n                                        <div class=\"divWFHDesc\">\n                                            <div class=\"divWFH\" *ngIf=\"wfh.IsForCheckIN == '1'\">\n                                                <ion-button class=\"btnTimeInOut\" slot=\"end\" (click)=\"openTimeIn(wfh)\">\n                                                    Time In\n                                                </ion-button>\n                                            </div>\n                                            <div class=\"divWFH\" *ngIf=\"wfh.IsForCheckIN == '0'\">\n                                                <ion-button class=\"btnTimeInOut\" slot=\"end\" (click)=\"openTimeOut(wfh)\">\n                                                    Time Out\n                                                </ion-button>\n                                            </div>\n\n                                            <div class=\"divWFHStatus\" (click)=\"setDTRDetails(wfh)\">\n                                                <span class=\"RequestType\" [ngClass]=\"{'classForApprovalLabel': wfh.AttendanceStatus == 'FOR APPROVAL', \n                                                              'classApprovedLabel': wfh.AttendanceStatus == 'APPROVED',\n                                                              'classOnHoldLabel': wfh.AttendanceStatus == 'ON HOLD',\n                                                              'classPlannedLabel': wfh.AttendanceStatus == 'PLANNED',\n                                                              'classCancelledLabel': wfh.AttendanceStatus== 'CANCELLED',\n                                                              'classDisapprovedLabel': wfh.AttendanceStatus == 'DISAPPROVED',\n                                                              'classPostedLabel': wfh.AttendanceStatus == 'POSTED'}\">{{ toTitleCase(wfh.AttendanceStatus) }}</span>\n                                            </div>\n                                            <div class=\"divWFHTimeIn\" (click)=\"setDTRDetails(wfh)\">\n                                                <span>days</span>\n                                            </div>\n                                            <div class=\"divWFHTimeIn\" (click)=\"setDTRDetails(wfh)\">\n                                                <span>Time In :{{wfh.DateTimeIn}}</span>\n                                            </div>\n                                            <div class=\"divWFHTimeOut\" (click)=\"setDTRDetails(wfh)\">\n                                                <span>Time Out :{{wfh.DateTimeOut}}</span>\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-item>\n                                <ion-item class=\"itmClass\" button lines=\"full\" detail=\"false\" *ngIf=\"wfh.IsForCheckIN == '1'\" (click)=\"setDTRDetails(wfh)\">\n                                    <ion-label class=\"ionLabelWFH\">\n                                        <div class=\"divTaskLabel\">\n                                            <span>TASKS</span>\n                                        </div>\n                                        <div class=\"divTask\">\n                                            <span>{{wfh.AttendanceRemarks}}</span>\n                                        </div>\n                                    </ion-label>\n                                </ion-item>\n                                <ion-item class=\"itmClass\" button lines=\"full\" detail=\"false\" *ngIf=\"wfh.IsForCheckIN == '0'\">\n                                    <ion-label class=\"EntityName\" position=\"stacked\">ACCOMPLISHMENTS</ion-label>\n                                    <ion-textarea id=\"rounded\" class=\"txtArea\" rows=\"1\" maxlength=\"500\" [(ngModel)]=\"accomplishment\">\n                                    </ion-textarea>\n                                </ion-item>\n\n                            </div>\n\n                            <div *ngIf=\"wfh.IsForCheckIN != '0' && wfh.IsForCheckIN != '1'\">\n                                <ion-item class=\"itmClass\" button lines=\"full\" detail=\"false\" (click)=\"setDTRDetails(wfh)\">\n                                    <ion-avatar class=\"divDate\">\n                                        <div class=\"DateMonth\">\n                                            {{getDateMonth(wfh.AttendanceRequestDate,1)}}\n                                        </div>\n                                        <div class=\"DateDate\">\n                                            {{getDateDate(wfh.AttendanceRequestDate)}}\n                                        </div>\n                                    </ion-avatar>\n                                    <ion-label class=\"lblWFH\" text-wrap>\n                                        <div class=\"divWFHDesc\">\n                                            <div class=\"divWFHStatus\">\n                                                <span class=\"RequestType\" [ngClass]=\"{'classForApprovalLabel': wfh.AttendanceStatus == 'FOR APPROVAL', \n                                              'classApprovedLabel': wfh.AttendanceStatus == 'APPROVED',\n                                              'classOnHoldLabel': wfh.AttendanceStatus == 'ON HOLD',\n                                              'classPlannedLabel': wfh.AttendanceStatus == 'PLANNED',\n                                              'classCancelledLabel': wfh.AttendanceStatus== 'CANCELLED',\n                                              'classDisapprovedLabel': wfh.AttendanceStatus == 'DISAPPROVED',\n                                              'classPostedLabel': wfh.AttendanceStatus == 'POSTED'}\">{{ toTitleCase(wfh.AttendanceStatus) }}</span>\n                                            </div>\n                                            <div class=\"divWFHTimeIn\" (click)=\"setDTRDetails(wfh)\">\n                                                <span> {{ wfh.NOOFDAYS }} days</span>\n                                            </div>\n                                            <div class=\"divWFHTimeIn\">\n                                                <span>Time In :{{wfh.DateTimeIn}}</span>\n                                            </div>\n                                            <div class=\"divWFHTimeOut\">\n                                                <span>Time Out :{{wfh.DateTimeOut}}</span>\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-item>\n                            </div>\n\n                        </div>\n                    </div>\n                </ion-list>\n            </div>\n        </div>\n    </ion-card>\n\n</ion-content>\n<ng-template #shimmer>\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    <div id=\"lines7\" class=\"shine\"></div>\n    <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2]\">\n        <ion-avatar class=\"divDate\">\n            <div class=\"DateMonth\"></div>\n            <div class=\"DateDate\"></div>\n        </ion-avatar>\n        <ion-label>\n            <div id=\"lines4\" class=\"shine\"></div><br>\n            <div id=\"lines3\" class=\"shine\"></div><br>\n            <div id=\"lines3\" class=\"shine\"></div>\n        </ion-label>\n    </ion-item>\n</ng-template>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n              <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n              <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\"['/main/home']\">\n                  <ion-icon color=\"light\" name=\"home\"></ion-icon>\n              </ion-button>\n          </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/workfromhome/workfromhome.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/workfromhome/workfromhome.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: bottom;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3607843137);\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n  margin-top: -20px;\n}\n\nion-icon {\n  font-size: 24px !important;\n}\n\nion-list {\n  padding-bottom: 0px;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\nion-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.classContent {\n  --background: #F5F5F5;\n  --padding-top: 10px !important;\n}\n\n.divCardSegment {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: 0px;\n}\n\n.sgmtDTRType {\n  min-width: 70px;\n  background: white;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #cecccc;\n  font-family: \"RobotoRegular\";\n}\n\n.divDate {\n  margin-top: -30px;\n}\n\n.divWFHDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px;\n}\n\n.divDTRStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -8px;\n}\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.divWFHStatus {\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n  margin-bottom: 12px;\n}\n\n.divWFHTimeIn {\n  color: #808080;\n  font-size: 11px;\n}\n\n.divWFHTimeOut {\n  color: #808080;\n  font-size: 11px;\n}\n\n.lblWFH {\n  margin-right: 5px;\n}\n\n.divWFH {\n  width: 0;\n  height: 0;\n  font-size: 11px;\n  float: right;\n  text-align: center;\n}\n\n.imgLeaveIcon {\n  height: 30px;\n  width: 30px;\n  border-radius: 15px;\n}\n\n.divOBTime {\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.divOBRemarks {\n  color: #808080;\n  font-size: 11px;\n  white-space: normal;\n}\n\n.ionLabelWFH {\n  margin: 5px 0px;\n}\n\n.divTaskLabel {\n  color: #808080;\n  font-size: 11px;\n}\n\n.divTask {\n  font-size: 16px;\n  color: #2a2a2a;\n}\n\n.txtArea {\n  margin-bottom: 10px;\n  font-size: 15px;\n  --padding-top: 10px;\n  margin-right: 3px;\n  width: 99%;\n}\n\n.btnTimeInOut {\n  --background: linear-gradient(to bottom, #D3A828, #E0861F);\n  height: 30px;\n  width: 80px;\n  font-size: 11px;\n  float: right;\n  font-family: \"RobotoRegular\";\n  margin-top: 30px;\n}\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.EntityName {\n  font-size: 11px;\n  color: #676767;\n  margin-top: 0px;\n}\n\n.cardWhatsNextSmall {\n  margin: 10px 15px;\n  font-size: 12px;\n  font-weight: bold;\n  --background: rgba(255, 255, 255, 1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divWhatsNextHeader {\n  color: #514B4B;\n  --background: rgba(255, 255, 255, 1);\n}\n\n.headWhatsNext {\n  color: #2a2a2a;\n}\n\n.icnWhatsNext {\n  height: 20px;\n  width: 20px;\n}\n\n.lblWhatsNext {\n  vertical-align: super;\n}\n\n.lblTitleCard {\n  vertical-align: super;\n  font-size: 13px;\n  margin-left: 5px;\n  font-family: \"RobotoRegular\";\n}\n\n.menuWhatsNextToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #514B4B;\n}\n\n.imgType {\n  width: 60px;\n  height: 60px;\n  margin-left: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\nion-col {\n  padding: 0px;\n}\n\nion-thumbnail {\n  height: 90px;\n  width: 90px;\n  margin: 10px;\n  margin-left: 15x;\n}\n\n.divCardHeader {\n  margin-top: 0px;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-bottom: 1px;\n}\n\n.leaveDesc {\n  color: #2a2a2a;\n  font-size: 18px;\n  margin-left: 10px;\n  margin-right: 70px;\n  display: block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  font-family: \"RobotoMedium\";\n}\n\n.leaveCreditsInfo {\n  font-size: 11px;\n  margin-left: 10px;\n  margin-top: -1px;\n  display: block;\n  color: #484848;\n}\n\n.leaveCreditsInfoNameFirstRow {\n  max-width: 75px;\n}\n\n.leaveCreditsInfoNameSecondRow {\n  max-width: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya2Zyb21ob21lL0M6XFxVc2Vyc1xcMDMxNzc1XFxHRUFSLXdvcmtpbmcgLSAoNCkvc3JjXFxhcHBcXHBhZ2VzXFx3b3JrZnJvbWhvbWVcXHdvcmtmcm9taG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dvcmtmcm9taG9tZS93b3JrZnJvbWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxvREFBQTtBQ0ZKOztBRE1BO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNJLDBCQUFBO0FDSEo7O0FETUE7RUFDSSxtQkFBQTtBQ0hKOztBRE1BO0VBQ0ksd0NBQUE7QUNISjs7QURNQTtFQUNJLDRFQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0kscUJBQUE7RUFDQSw4QkFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FDSEo7O0FETUE7RUFDSSxpQkFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNISjs7QURNQTtFQUNJLGlCQUFBO0FDSEo7O0FETUE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1BO0VBQ0ksMERBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO1VBQUEsb0NBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE9BO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRFQUFBO0FDSko7O0FET0E7RUFDSSxjQUFBO0VBRUEsb0NBQUE7QUNMSjs7QURRQTtFQUNJLGNBQUE7QUNMSjs7QURTQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDTko7O0FEU0E7RUFDSSxxQkFBQTtBQ05KOztBRFNBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ05KOztBRFNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNOSjs7QURTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEVUE7RUFDSSxZQUFBO0FDUEo7O0FEU0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ05KOztBRFVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRFdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDUko7O0FEV0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDUko7O0FEV0E7RUFDSSxlQUFBO0FDUko7O0FEV0E7RUFDSSxlQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93b3JrZnJvbWhvbWUvd29ya2Zyb21ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmcnKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIC8vIGhlaWdodDogMTAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIC8vbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5idG5NZW51IHtcbiAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XG59XG5cbi5jbGFzc0NvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXZDYXJkU2VnbWVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnNnbXREVFJUeXBlIHtcbiAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNjZWNjY2M7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uZGl2RGF0ZSB7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5kaXZXRkhEZXNjIHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuXG4uZGl2RFRSU3RhdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi5EYXRlTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyMHB4XG59XG5cbi5EYXRlRGF0ZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5kaXZXRkhTdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmRpdldGSFRpbWVJbiB7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZGl2V0ZIVGltZU91dCB7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ubGJsV0ZIIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRpdldGSCB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nTGVhdmVJY29uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmRpdk9CVGltZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmRpdk9CUmVtYXJrcyB7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5pb25MYWJlbFdGSCB7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4uZGl2VGFza0xhYmVsIHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5kaXZUYXNrIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMyYTJhMmE7XG59XG5cbi50eHRBcmVhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIHdpZHRoOiA5OSU7XG59XG5cbi5idG5UaW1lSW5PdXQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0QzQTgyOCwgI0UwODYxRik7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbiNyb3VuZGVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLkVudGl0eU5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzY3Njc2NztcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cblxuLmNhcmRXaGF0c05leHRTbWFsbCB7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uZGl2V2hhdHNOZXh0SGVhZGVyIHtcbiAgICBjb2xvcjogIzUxNEI0QjtcbiAgICAvLyBwYWRkaW5nOiAxNXB4IDE1cHggMHB4IDE1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xufVxuXG4uaGVhZFdoYXRzTmV4dCB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgLy8gcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcbn1cblxuLmljbldoYXRzTmV4dCB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4ubGJsV2hhdHNOZXh0IHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG59XG5cbi5sYmxUaXRsZUNhcmQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5tZW51V2hhdHNOZXh0VG9nZ2xlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5pbWdUeXBlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5cbmlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbmlvbi10aHVtYm5haWwge1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1eDtcbn1cblxuLy9DYXJkIEhlYWRlclxuLmRpdkNhcmRIZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cblxuLmxlYXZlRGVzYyB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm9OYW1lRmlyc3RSb3cge1xuICAgIG1heC13aWR0aDogNzVweDtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm9OYW1lU2Vjb25kUm93IHtcbiAgICBtYXgtd2lkdGg6IDc1cHg7XG59XG4iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM2MDc4NDMxMzcpO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uYnRuTWVudSB7XG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNsYXNzQ29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgLS1wYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2Q2FyZFNlZ21lbnQge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5zZ210RFRSVHlwZSB7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNjZWNjY2M7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmRpdkRhdGUge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLmRpdldGSERlc2Mge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5kaXZEVFJTdGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbn1cblxuLkRhdGVNb250aCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgY29sb3I6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uRGF0ZURhdGUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uZGl2V0ZIU3RhdHVzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kaXZXRkhUaW1lSW4ge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZGl2V0ZIVGltZU91dCB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5sYmxXRkgge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRpdldGSCB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWdMZWF2ZUljb24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uZGl2T0JUaW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5kaXZPQlJlbWFya3Mge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uaW9uTGFiZWxXRkgge1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5cbi5kaXZUYXNrTGFiZWwge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZGl2VGFzayB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyYTJhMmE7XG59XG5cbi50eHRBcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgd2lkdGg6IDk5JTtcbn1cblxuLmJ0blRpbWVJbk91dCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0QzQTgyOCwgI0UwODYxRik7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbiNyb3VuZGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLkVudGl0eU5hbWUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNjc2NzY3O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5jYXJkV2hhdHNOZXh0U21hbGwge1xuICBtYXJnaW46IDEwcHggMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uZGl2V2hhdHNOZXh0SGVhZGVyIHtcbiAgY29sb3I6ICM1MTRCNEI7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cblxuLmhlYWRXaGF0c05leHQge1xuICBjb2xvcjogIzJhMmEyYTtcbn1cblxuLmljbldoYXRzTmV4dCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5sYmxXaGF0c05leHQge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG59XG5cbi5sYmxUaXRsZUNhcmQge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4ubWVudVdoYXRzTmV4dFRvZ2dsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNTE0QjRCO1xufVxuXG4uaW1nVHlwZSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTV4O1xufVxuXG4uZGl2Q2FyZEhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5sZWF2ZURlc2Mge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mbyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm9OYW1lRmlyc3RSb3cge1xuICBtYXgtd2lkdGg6IDc1cHg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZVNlY29uZFJvdyB7XG4gIG1heC13aWR0aDogNzVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/workfromhome/workfromhome.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/workfromhome/workfromhome.page.ts ***!
  \*********************************************************/
/*! exports provided: WorkfromhomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkfromhomePage", function() { return WorkfromhomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");











// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
// import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
// import { Diagnostic } from '@ionic-native/diagnostic/ngx';
var WorkfromhomePage = /** @class */ (function () {
    function WorkfromhomePage(storage, router, menuCtrl, httpApi, loginService, modalController, navCtrl, alertController, loadingCtrl, geolocation, nativeGeocoder, 
    // private androidPermissions: AndroidPermissions,
    // private locationAccuracy: LocationAccuracy,
    // private diagnostic: Diagnostic,
    plt) {
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.httpApi = httpApi;
        this.loginService = loginService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.plt = plt;
        this.WFHList = [];
        this.loadingDone = false;
        this.noError = true;
        this.wfhModal = [];
        this.useCredits = 0;
    }
    WorkfromhomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.idSrc = "assets/icon/ic_wfh.png";
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
        });
        this.getWFHCredits();
    };
    WorkfromhomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDone = false;
        this.plt.ready().then(function () {
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
                _this.getWFH();
                _this.getLocation();
            });
        });
    };
    // Get WFH credits available
    WorkfromhomePage.prototype.getWFHCredits = function () {
        var _this = this;
        console.log("***** getWFHCredits() *****");
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var d = new Date();
            var datestring = d.getFullYear()
                + "-" + ("0" + (d.getMonth() + 1)).slice(-2)
                + "-" + ("0" + d.getDate()).slice(-2);
            var request = {
                USER: _this.empId,
                EMPNO: _this.empId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                REQUESTTYPECODE: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ATD_TYPE_CODE_WFH"],
                REQUESTDATE: datestring
            };
            console.log('request: ', request);
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loadingGetWFHCredits = overlay;
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/WorkFromHome/GetAttendanceAdvisoryCredits", request, {})
                        .then(function (data) {
                        console.log(data.data);
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR! [1]", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                            _this.loadingGetWFHCredits.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        console.log('Employee WFH summary logs', jsonData);
                        _this.loadingGetWFHCredits.dismiss();
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR! [2]", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                            _this.loadingGetWFHCredits.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_YES"]) {
                            _this.loadingGetWFHCredits.dismiss();
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
                            _this.showDialog("ERROR! [3]", jsonData['Message'], false, "Okay");
                            return;
                        }
                        _this.wfhCredits = jsonData['Value'][0]['CREDITS'];
                        _this.wfhBalance = jsonData['Value'][0]['BALANCE'];
                        _this.wfhPosted = jsonData['Value'][0]['AVAILED'];
                        _this.wfhApproval = jsonData['Value'][0]['APPROVAL'];
                        _this.wfhApproved = jsonData['Value'][0]['APPROVED'];
                        console.log("***** wfhCredits: " + _this.wfhCredits);
                        console.log("***** wfhBalance: " + _this.wfhBalance);
                        console.log("***** wfhPosted: " + _this.wfhPosted);
                        console.log("***** wfhApproval: " + _this.wfhApproval);
                        console.log("***** wfhApproved: " + _this.wfhApproved);
                        _this.loadingGetWFHCredits.dismiss();
                    })
                        .catch(function (error) {
                        console.log(error.error);
                        _this.loadingGetWFHCredits.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    WorkfromhomePage.prototype.getWFH = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var request = {
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                User: _this.empId,
                DateFrom: _this.wfhDateFrom,
                DateTo: _this.wfhDateTo,
                Status: _this.wfhStatus
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/WorkFromHome/GetWorkFromHomeDetails", request, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        _this.loadingDone = true;
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
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        _this.loadingDone = true;
                        return;
                    }
                    _this.tempResult = jsonData['Value']['tblWFHDetails'];
                    if (_this.tempResult.length == 0) {
                        _this.wfhIsEmpty = true;
                        _this.errorMessage = "EMPTY";
                    }
                    else {
                        _this.wfhIsEmpty = false;
                        // var dates: Array<any> = jsonData['Value']['tblWFHDetails'];
                        // dates.forEach(element => {
                        //   if (this.getIfDateToday(element['AttendanceRequestDate'])) {
                        //     if (element['AttendanceStatus'] == "APPROVED") {
                        //       element['isDateToday'] = true;
                        //     }
                        //     else {
                        //       element['isDateToday'] = false;
                        //     }
                        //   }
                        //   else {
                        //     element['isDateToday'] = false;
                        //   }
                        // });
                        _this.WFHList = jsonData['Value']['tblWFHDetails'];
                        console.log(_this.WFHList);
                        _this.noError = true;
                    }
                    _this.loadingDone = true;
                    console.log(_this.WFHList);
                })
                    .catch(function (error) {
                    console.log(error);
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    WorkfromhomePage.prototype.updateTimeInOut = function (wfh) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var request = {
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                User: _this.empId,
                strIsCheckIn: _this.isTimeInOut,
                Location: (_this.location == "Loading . . ." || _this.location == "Your location cannot be determined" ? _this.location = "location cannot be determined" : _this.location),
                XCoordinate: _this.xCoordinate,
                YCoordinate: _this.yCoordinate,
                Accomplishment: _this.accomplishment,
                DateFrom: (_this.isTimeInOut == '0' ? wfh['DateIn'] : ""),
                ID: _this.id,
                RecordID: null
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/WorkFromHome/ProcessWorkFromHomeCheckInOut", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
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
                    if (_this.isTimeInOut == "1") {
                        _this.showDialog("DONE!", "Your time in has been saved", true, "Great!");
                        _this.getWFH();
                    }
                    else {
                        _this.showDialog("DONE!", "Your time out has been saved", true, "Great!");
                        _this.getWFH();
                    }
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    WorkfromhomePage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    WorkfromhomePage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    WorkfromhomePage.prototype.toTitleCase = function (txt) {
        return txt.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    WorkfromhomePage.prototype.getIfDateToday = function (datename) {
        var dateWFH = new Date(datename).setHours(0, 0, 0, 0);
        var dateToday = new Date().setHours(0, 0, 0, 0);
        if (dateToday < dateWFH) {
            return false;
        }
        else if (dateToday > dateWFH) {
            return false;
        }
        else {
            return true;
        }
    };
    WorkfromhomePage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
    WorkfromhomePage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    WorkfromhomePage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    WorkfromhomePage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        this.wfhModal["LeaveFrom"] = this.wfhDateFrom;
                        this.wfhModal["LeaveTo"] = this.wfhDateTo;
                        this.wfhModal["Status"] = this.wfhStatus;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_8__["FilterMenuComponent"],
                                cssClass: 'modalFilterMenu',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "WorkFromHome",
                                    data: this.wfhModal
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.wfhDateFrom = detail.data['leaveFrom'];
                                    _this.wfhDateTo = detail.data['leaveTo'];
                                    _this.wfhStatus = detail.data['status'];
                                    console.log(_this.wfhDateFrom, _this.wfhDateTo, _this.wfhStatus);
                                    _this.loadingDone = false;
                                    _this.noError = true;
                                    _this.wfhIsEmpty = false;
                                    _this.getWFH();
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
    WorkfromhomePage.prototype.refresh = function (event) {
        this.event = event;
        this.ionViewWillEnter();
    };
    WorkfromhomePage.prototype.openWFHAdd = function () {
        this.router.navigate(['/workfromhomeadd',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ]);
    };
    WorkfromhomePage.prototype.openTimeIn = function (wfh) {
        var _this = this;
        console.log(wfh);
        this.id = wfh['ID'];
        this.isTimeInOut = "1";
        // this.xCoordinate = "Not Applicable.";
        // this.yCoordinate = "Not Applicable.";
        // this.location = "Not Applicable.";
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.updateTimeInOut(wfh);
        });
        //this.getLocation();
        //this.checkLocationEnabled();
        //this.checkGPSPermission();
    };
    WorkfromhomePage.prototype.openTimeOut = function (wfh) {
        var _this = this;
        if (this.accomplishment == null || this.accomplishment == undefined || this.accomplishment == '') {
            alert("Please fill up accomplishment.");
            return;
        }
        this.id = wfh['ID'];
        this.isTimeInOut = "0";
        // this.xCoordinate = "Not Applicable.";
        // this.yCoordinate = "Not Applicable.";
        // this.location = "Not Applicable.";
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.updateTimeInOut(wfh);
        });
        //this.getLocation();
        //this.checkLocationEnabled();
        //this.checkGPSPermission();
    };
    WorkfromhomePage.prototype.getLocation = function () {
        var _this = this;
        console.log('getLocation');
        this.location = "Loading . . .";
        var options = {
            timeout: 5000
        };
        this.geolocation.getCurrentPosition(options).then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log(resp);
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.xCoordinate = resp.coords.longitude;
            _this.yCoordinate = resp.coords.latitude;
            // alert(this.xCoordinate + "----" + this.yCoordinate);
            var options = {
                useLocale: true,
                maxResults: 5
            };
            _this.nativeGeocoder.reverseGeocode(_this.yCoordinate, _this.xCoordinate, options)
                .then(function (result) {
                var loc = result[0];
                _this.geoLocator = result[0];
                //.then((result: NativeGeocoderResult[]) => this.geoLocator = JSON.stringify(result[0]))
                console.log(JSON.stringify(result[0]));
                _this.location =
                    (_this.geoLocator['subThoroughfare'] ? _this.geoLocator['subThoroughfare'] + " " : "") +
                        (_this.geoLocator['thoroughfare'] ? _this.geoLocator['thoroughfare'] + " " : "") +
                        (_this.geoLocator['subLocality'] ? _this.geoLocator['subLocality'] + " " : "") +
                        (_this.geoLocator['locality'] ? _this.geoLocator['locality'] + " " : "") +
                        (_this.geoLocator['subAdministrativeArea'] ? _this.geoLocator['subAdministrativeArea'] + " " : "") +
                        (_this.geoLocator['administrativeArea'] ? _this.geoLocator['administrativeArea'] + " " : "") +
                        (_this.geoLocator['countryName'] ? _this.geoLocator['countryName'] + " " : "") +
                        (_this.geoLocator['postalCode'] ? _this.geoLocator['postalCode'] + " " : "");
                // {"latitude":"37.785834",
                // "administrativeArea":"CA",
                // "countryCode":"US",
                // "thoroughfare":"Stockton St",
                // "countryName":"United States",
                // "subLocality":"Union Square",
                // "areasOfInterest":[],
                // "locality":"San Francisco",
                // "subThoroughfare":"1",
                // "longitude":"-122.406417",
                // "subAdministrativeArea":"San Francisco",
                // "postalCode":"94108"}
            }).catch(function (error) {
                _this.location = "Your location cannot be determined";
                // alert("Error in GeoLocator err: " + error);
                // alert("Error in GeoLocator err.data: " + error.data);
                // alert("Error in GeoLocator err.err: " + error.error);
                // alert("Error in GeoLocator err.message: " + error.message);
                console.log(error);
                console.log(error.message);
            });
        }).catch(function (error) {
            // alert("Error in GeoLocation err: " + error);
            // alert("Error in GeoLocation err.data: " + error.data);
            // alert("Error in GeoLocation err.err: " + error.error);
            // alert("Error in GeoLocation err.message: " + error.message);
            console.log('Error getting location', error);
            console.log(error.message);
        });
    };
    // //Check if application having GPS access permission  
    // checkGPSPermission() {
    //   this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
    //     result => {
    //       if (result.hasPermission) {
    //         //If having permission show 'Turn On GPS' dialogue
    //         alert(result.hasPermission);
    //         this.askToTurnOnGPS();
    //       } else {
    //         //If not having permission ask for permission
    //         alert("RequestGPS");
    //         this.requestGPSPermission();
    //       }
    //     },
    //     err => {
    //       alert(err);
    //     }
    //   );
    // }
    // requestGPSPermission() {
    //   this.locationAccuracy.canRequest().then((canRequest: boolean) => {
    //     if (canRequest) {
    //       alert("LocationAccuracy CanRequest");
    //       console.log("4");
    //     } else {
    //       //Show 'GPS Permission Request' dialogue
    //       this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
    //         .then(
    //           () => {
    //             // call method to turn on GPS
    //             alert("askTurnOn");
    //             this.askToTurnOnGPS();
    //           },
    //           error => {
    //             //Show alert if user click on 'No Thanks'
    //             alert('requestPermission Error requesting location permissions ' + error)
    //           }
    //         );
    //     }
    //   });
    // }
    // askToTurnOnGPS() {
    //   this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
    //     () => {
    //       // When GPS Turned ON call method to get Accurate location coordinates
    //       this.getLocation();
    //     },
    //     error => alert('Error requesting location permissions ' + JSON.stringify(error))
    //   );
    // }
    WorkfromhomePage.prototype.setDTRDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_WFHDETAILS"], item);
        console.log(item);
        this.router.navigate(['/workfromhomedetails', 'user']);
    };
    WorkfromhomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workfromhome',
            template: __webpack_require__(/*! ./workfromhome.page.html */ "./src/app/pages/workfromhome/workfromhome.page.html"),
            styles: [__webpack_require__(/*! ./workfromhome.page.scss */ "./src/app/pages/workfromhome/workfromhome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeGeocoder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], WorkfromhomePage);
    return WorkfromhomePage;
}());



/***/ })

}]);
//# sourceMappingURL=workfromhome-workfromhome-module.js.map