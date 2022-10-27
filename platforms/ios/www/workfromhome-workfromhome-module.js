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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button class=btnFilter slot=\"end\" color=\"light\" (click)=\"openModal()\">\n                <ion-icon slot=\"start\" name=\"search\" mode=\"md\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-title mode=\"md\" slot=\"start\">Work From Home</ion-title>\n</ion-header>\n<ion-content padding class=\"classContent\" hide-header header=\"header\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-card class=\"cardWhatsNextSmall\">\n        <ion-card-header class=\"divWhatsNextHeader\">\n            <ion-icon class=\"icnWhatsNext\" name=\"pin\"></ion-icon>\n            <ion-label class=\"lblTitleCard\">\n                 {{location}} </ion-label>\n            <ion-icon class=\"menuWhatsNextToggle\" *ngIf=\"noError\" name=\"refresh\" (click)=\"getLocation()\">\n            </ion-icon>\n        </ion-card-header>\n    </ion-card>\n    <ion-card class=divCardSegment mode=\"md\">\n        <div *ngIf=\"loadingDone; else shimmer\">\n            <div *ngIf=\"noError; else error\">\n                <ion-list mode=\"md\">\n                    <div *ngIf=\"!wfhIsEmpty; else error\">\n                        <div *ngFor=\"let wfh of WFHList\">\n\n                            <div *ngIf=\"wfh.IsForCheckIN == '0' || wfh.IsForCheckIN == '1'\">\n                                <ion-item class=\"itmClass\" button lines=\"none\" detail=\"false\">\n                                    <ion-avatar class=\"divDate\" (click)=\"setDTRDetails(wfh)\">\n                                        <div class=\"DateMonth\">\n                                            {{getDateMonth(wfh.AttendanceRequestDate,1)}}\n                                        </div>\n                                        <div class=\"DateDate\">\n                                            {{getDateDate(wfh.AttendanceRequestDate)}}\n                                        </div>\n                                    </ion-avatar>\n                                    <ion-label class=\"lblWFH\" text-wrap>\n                                        <div class=\"divWFHDesc\">\n                                            <div class=\"divWFH\" *ngIf=\"wfh.IsForCheckIN == '1'\">\n                                                <ion-button class=\"btnTimeInOut\" slot=\"end\" (click)=\"openTimeIn(wfh)\">\n                                                    Time In\n                                                </ion-button>\n                                            </div>\n                                            <div class=\"divWFH\" *ngIf=\"wfh.IsForCheckIN == '0'\">\n                                                <ion-button class=\"btnTimeInOut\" slot=\"end\" (click)=\"openTimeOut(wfh)\">\n                                                    Time Out\n                                                </ion-button>\n                                            </div>\n\n                                            <div class=\"divWFHStatus\" (click)=\"setDTRDetails(wfh)\">\n                                                <span class=\"RequestType\" [ngClass]=\"{'classForApprovalLabel': wfh.AttendanceStatus == 'FOR APPROVAL', \n                                                              'classApprovedLabel': wfh.AttendanceStatus == 'APPROVED',\n                                                              'classOnHoldLabel': wfh.AttendanceStatus == 'ON HOLD',\n                                                              'classPlannedLabel': wfh.AttendanceStatus == 'PLANNED',\n                                                              'classCancelledLabel': wfh.AttendanceStatus== 'CANCELLED',\n                                                              'classDisapprovedLabel': wfh.AttendanceStatus == 'DISAPPROVED',\n                                                              'classPostedLabel': wfh.AttendanceStatus == 'POSTED'}\">{{ toTitleCase(wfh.AttendanceStatus) }}</span>\n                                            </div>\n                                            <div class=\"divWFHTimeIn\" (click)=\"setDTRDetails(wfh)\">\n                                                <span>days</span>\n                                            </div>\n                                            <div class=\"divWFHTimeIn\" (click)=\"setDTRDetails(wfh)\">\n                                                <span>Time In :{{wfh.DateTimeIn}}</span>\n                                            </div>\n                                            <div class=\"divWFHTimeOut\" (click)=\"setDTRDetails(wfh)\">\n                                                <span>Time Out :{{wfh.DateTimeOut}}</span>\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-item>\n                                <ion-item class=\"itmClass\" button lines=\"full\" detail=\"false\" *ngIf=\"wfh.IsForCheckIN == '1'\" (click)=\"setDTRDetails(wfh)\">\n                                    <ion-label class=\"ionLabelWFH\">\n                                        <div class=\"divTaskLabel\">\n                                            <span>TASKS</span>\n                                        </div>\n                                        <div class=\"divTask\">\n                                            <span>{{wfh.AttendanceRemarks}}</span>\n                                        </div>\n                                    </ion-label>\n                                </ion-item>\n                                <ion-item class=\"itmClass\" button lines=\"full\" detail=\"false\" *ngIf=\"wfh.IsForCheckIN == '0'\">\n                                    <ion-label class=\"EntityName\" position=\"stacked\">ACCOMPLISHMENTS</ion-label>\n                                    <ion-textarea id=\"rounded\" class=\"txtArea\" rows=\"1\" maxlength=\"500\" [(ngModel)]=\"accomplishment\">\n                                    </ion-textarea>\n                                </ion-item>\n\n                            </div>\n\n                            <div *ngIf=\"wfh.IsForCheckIN != '0' && wfh.IsForCheckIN != '1'\">\n                                <ion-item class=\"itmClass\" button lines=\"full\" detail=\"false\" (click)=\"setDTRDetails(wfh)\">\n                                    <ion-avatar class=\"divDate\">\n                                        <div class=\"DateMonth\">\n                                            {{getDateMonth(wfh.AttendanceRequestDate,1)}}\n                                        </div>\n                                        <div class=\"DateDate\">\n                                            {{getDateDate(wfh.AttendanceRequestDate)}}\n                                        </div>\n                                    </ion-avatar>\n                                    <ion-label class=\"lblWFH\" text-wrap>\n                                        <div class=\"divWFHDesc\">\n                                            <div class=\"divWFHStatus\">\n                                                <span class=\"RequestType\" [ngClass]=\"{'classForApprovalLabel': wfh.AttendanceStatus == 'FOR APPROVAL', \n                                              'classApprovedLabel': wfh.AttendanceStatus == 'APPROVED',\n                                              'classOnHoldLabel': wfh.AttendanceStatus == 'ON HOLD',\n                                              'classPlannedLabel': wfh.AttendanceStatus == 'PLANNED',\n                                              'classCancelledLabel': wfh.AttendanceStatus== 'CANCELLED',\n                                              'classDisapprovedLabel': wfh.AttendanceStatus == 'DISAPPROVED',\n                                              'classPostedLabel': wfh.AttendanceStatus == 'POSTED'}\">{{ toTitleCase(wfh.AttendanceStatus) }}</span>\n                                            </div>\n                                            <div class=\"divWFHTimeIn\" (click)=\"setDTRDetails(wfh)\">\n                                                <span> {{ wfh.NOOFDAYS }} days</span>\n                                            </div>\n                                            <div class=\"divWFHTimeIn\">\n                                                <span>Time In :{{wfh.DateTimeIn}}</span>\n                                            </div>\n                                            <div class=\"divWFHTimeOut\">\n                                                <span>Time Out :{{wfh.DateTimeOut}}</span>\n                                            </div>\n                                        </div>\n                                    </ion-label>\n                                </ion-item>\n                            </div>\n\n                        </div>\n                    </div>\n                </ion-list>\n            </div>\n        </div>\n    </ion-card>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\">\n        <ion-fab-button (click)=\"openWFHAdd()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n<ng-template #shimmer>\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    <div id=\"lines7\" class=\"shine\"></div>\n    <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2]\">\n        <ion-avatar class=\"divDate\">\n            <div class=\"DateMonth\"></div>\n            <div class=\"DateDate\"></div>\n        </ion-avatar>\n        <ion-label>\n            <div id=\"lines4\" class=\"shine\"></div><br>\n            <div id=\"lines3\" class=\"shine\"></div><br>\n            <div id=\"lines3\" class=\"shine\"></div>\n        </ion-label>\n    </ion-item>\n</ng-template>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n              <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n              <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\"['/main/home']\">\n                  <ion-icon color=\"light\" name=\"home\"></ion-icon>\n              </ion-button>\n          </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/workfromhome/workfromhome.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/workfromhome/workfromhome.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: bottom;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\nion-fab {\n  margin-bottom: 40px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n}\n\nion-icon {\n  font-size: 24px !important;\n}\n\nion-list {\n  padding-bottom: 0px;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\nion-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.classContent {\n  --background: #F5F5F5;\n  --padding-top: 10px !important;\n}\n\n.divCardSegment {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: 0px;\n}\n\n.sgmtDTRType {\n  min-width: 70px;\n  background: white;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #cecccc;\n  font-family: \"RobotoRegular\";\n}\n\n.divDate {\n  margin-top: -30px;\n}\n\n.divWFHDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px;\n}\n\n.divDTRStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -8px;\n}\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.divWFHStatus {\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n  margin-bottom: 12px;\n}\n\n.divWFHTimeIn {\n  color: #808080;\n  font-size: 11px;\n}\n\n.divWFHTimeOut {\n  color: #808080;\n  font-size: 11px;\n}\n\n.lblWFH {\n  margin-right: 5px;\n}\n\n.divWFH {\n  width: 0;\n  height: 0;\n  font-size: 11px;\n  float: right;\n  text-align: center;\n}\n\n.imgLeaveIcon {\n  height: 30px;\n  width: 30px;\n  border-radius: 15px;\n}\n\n.divOBTime {\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.divOBRemarks {\n  color: #808080;\n  font-size: 11px;\n  white-space: normal;\n}\n\n.ionLabelWFH {\n  margin: 5px 0px;\n}\n\n.divTaskLabel {\n  color: #808080;\n  font-size: 11px;\n}\n\n.divTask {\n  font-size: 16px;\n  color: #2a2a2a;\n}\n\n.txtArea {\n  margin-bottom: 10px;\n  font-size: 15px;\n  --padding-top: 10px;\n  margin-right: 3px;\n  width: 99%;\n}\n\n.btnTimeInOut {\n  --background: linear-gradient(to bottom, #D3A828, #E0861F);\n  height: 30px;\n  width: 80px;\n  font-size: 11px;\n  float: right;\n  font-family: \"RobotoRegular\";\n  margin-top: 30px;\n}\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.EntityName {\n  font-size: 11px;\n  color: #676767;\n  margin-top: 0px;\n}\n\n.cardWhatsNextSmall {\n  margin: 10px 15px;\n  font-size: 12px;\n  font-weight: bold;\n  --background: rgba(255, 255, 255, 1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divWhatsNextHeader {\n  color: #514B4B;\n  --background: rgba(255, 255, 255, 1);\n}\n\n.headWhatsNext {\n  color: #2a2a2a;\n}\n\n.icnWhatsNext {\n  height: 20px;\n  width: 20px;\n}\n\n.lblWhatsNext {\n  vertical-align: super;\n}\n\n.lblTitleCard {\n  vertical-align: super;\n  font-size: 13px;\n  margin-left: 5px;\n  font-family: \"RobotoRegular\";\n}\n\n.menuWhatsNextToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #514B4B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvd29ya2Zyb21ob21lL3dvcmtmcm9taG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dvcmtmcm9taG9tZS93b3JrZnJvbWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxrQ0FBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksMEJBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0FDRko7O0FES0E7RUFDSSx3Q0FBQTtBQ0ZKOztBREtBO0VBQ0ksNEVBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7QUNGSjs7QURLQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDRko7O0FES0E7RUFDSSwwREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRko7O0FETUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEVBQUE7QUNISjs7QURNQTtFQUNJLGNBQUE7RUFFQSxvQ0FBQTtBQ0pKOztBRE9BO0VBQ0ksY0FBQTtBQ0pKOztBRFFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNMSjs7QURRQTtFQUNJLHFCQUFBO0FDTEo7O0FEUUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd29ya2Zyb21ob21lL3dvcmtmcm9taG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nJykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAvLyBoZWlnaHQ6IDEwMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvL21hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG59XG5cbmlvbi1mYWIge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmJ0bk1lbnUge1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNsYXNzQ29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgIC0tcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRpdkNhcmRTZWdtZW50IHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uc2dtdERUUlR5cGUge1xuICAgIG1pbi13aWR0aDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NlY2NjYztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5kaXZEYXRlIHtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLmRpdldGSERlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5kaXZEVFJTdGF0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbn1cblxuLkRhdGVNb250aCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDIwcHhcbn1cblxuLkRhdGVEYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmRpdldGSFN0YXR1cyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGl2V0ZIVGltZUluIHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5kaXZXRkhUaW1lT3V0IHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5sYmxXRkgge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZGl2V0ZIIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWdMZWF2ZUljb24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uZGl2T0JUaW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZGl2T0JSZW1hcmtzIHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmlvbkxhYmVsV0ZIIHtcbiAgICBtYXJnaW46IDVweCAwcHg7XG59XG5cbi5kaXZUYXNrTGFiZWwge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmRpdlRhc2sge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzJhMmEyYTtcbn1cblxuLnR4dEFyZWEge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDk5JTtcbn1cblxuLmJ0blRpbWVJbk91dCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRDNBODI4LCAjRTA4NjFGKTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuI3JvdW5kZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uRW50aXR5TmFtZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjNjc2NzY3O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cblxuXG4uY2FyZFdoYXRzTmV4dFNtYWxsIHtcbiAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZXaGF0c05leHRIZWFkZXIge1xuICAgIGNvbG9yOiAjNTE0QjRCO1xuICAgIC8vIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi5oZWFkV2hhdHNOZXh0IHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xufVxuXG4uaWNuV2hhdHNOZXh0IHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5sYmxXaGF0c05leHQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn1cblxuLmxibFRpdGxlQ2FyZCB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLm1lbnVXaGF0c05leHRUb2dnbGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzUxNEI0Qjtcbn1cblxuIiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWZhYiB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmJ0bk1lbnUge1xuICBwYWRkaW5nOiAwIDAgMCA1cHg7XG59XG5cbi5jbGFzc0NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIC0tcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRpdkNhcmRTZWdtZW50IHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uc2dtdERUUlR5cGUge1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjY2VjY2NjO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5kaXZEYXRlIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5kaXZXRkhEZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuXG4uZGl2RFRSU3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi5EYXRlTW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLkRhdGVEYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmRpdldGSFN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGl2V0ZIVGltZUluIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmRpdldGSFRpbWVPdXQge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ubGJsV0ZIIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kaXZXRkgge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nTGVhdmVJY29uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmRpdk9CVGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZGl2T0JSZW1hcmtzIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmlvbkxhYmVsV0ZIIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4uZGl2VGFza0xhYmVsIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmRpdlRhc2sge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMmEyYTJhO1xufVxuXG4udHh0QXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIHdpZHRoOiA5OSU7XG59XG5cbi5idG5UaW1lSW5PdXQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNEM0E4MjgsICNFMDg2MUYpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4jcm91bmRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5FbnRpdHlOYW1lIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzY3Njc2NztcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uY2FyZFdoYXRzTmV4dFNtYWxsIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmRpdldoYXRzTmV4dEhlYWRlciB7XG4gIGNvbG9yOiAjNTE0QjRCO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi5oZWFkV2hhdHNOZXh0IHtcbiAgY29sb3I6ICMyYTJhMmE7XG59XG5cbi5pY25XaGF0c05leHQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4ubGJsV2hhdHNOZXh0IHtcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xufVxuXG4ubGJsVGl0bGVDYXJkIHtcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLm1lbnVXaGF0c05leHRUb2dnbGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzUxNEI0Qjtcbn0iXX0= */"

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
    }
    WorkfromhomePage.prototype.ngOnInit = function () {
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