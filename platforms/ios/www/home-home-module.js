(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n<ion-content>\n    <div class=\"bgTop\">\n    </div>\n    <!-- <div class=\"bgBottom\"></div> -->\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-item class=\"divHello\" lines=\"none\">\n        <ion-label class=\"lblHello\">\n            <h2 class=\"lblWelcome\">{{welcome}}</h2>\n            <h2 class=\"lblName\" (click)=\"togglePersonalInfo()\">{{toTitleCase(nickname)}}</h2>\n            <h2 class=\"lblToday\" (click)=\"toggleCalendar()\">\n                <ion-icon class=\"icnToday\" name=\"calendar\" mode=\"md\" slot=\"start\"></ion-icon>{{day}}\n            </h2>\n        </ion-label>\n        <div *ngIf=\"loadingTimeIn; else shimmerTimeIn\">\n            <ion-card class=\"{{classTimeIn}}\" *ngIf=\"lblClockedInStatus != 'NO CLOCKED IN'\" [routerDirection]=\"forward\" [routerLink]=\"['/main/dailytimerecord']\">\n                <div class=\"divTimeIn\">\n                    <ion-label class=\"lblTimeIn\">\n                        <ion-icon class=\"icnClockedIn\" name=\"time\" mode=\"md\" slot=\"start\"></ion-icon>\n                        {{clockedIn}}\n                    </ion-label>\n                    <ion-label class=\"lblTimeInLbl\">\n                        TIME-IN\n                    </ion-label>\n                </div>\n            </ion-card>\n        </div>\n    </ion-item>\n\n    <div *ngIf=\"loadingAlert; else shimmerAlert\">\n        <div *ngIf=\"lblAlertsStatus != 'NO ALERTS'\">\n            <div class=\"divTitleItem\">\n                <ion-label class=\"lblTitleItem\">\n                    ALERTS\n                </ion-label>\n            </div>\n            <ion-segment class=\"sgmtAlerts\" mode=\"md\" scrollable [(ngModel)]=\"alerts\">\n                <div *ngFor=\"let item of alerts\">\n                    <div *ngIf=\"item.POSITION == '4' || item.POSITION == '5' || item.POSITION == '6' || item.POSITION == '7' || item.POSITION == '8' || item.POSITION == '9'\n                    || item.POSITION == '17' || item.POSITION == '16' \">\n                        <ion-card class=\"cardAlerts {{item.Class}}\" [routerDirection]=\"forward\" [routerLink]=\" [item.RouterLink]\">\n                            <div class=\"divAlertIcon\">\n                                <img class=\"imgAlertIcon\" src=\"{{item.Icon}}\" alt=\"\">\n                            </div>\n                            <ion-label>\n                                <h2 class=\"lblAlertCount\">{{item.COUNT}}</h2>\n                                <h2 class=\"lblAlertName\">{{item.Name}}</h2>\n                            </ion-label>\n                        </ion-card>\n                    </div>\n                </div>\n            </ion-segment>\n        </div>\n    </div>\n\n    <div *ngIf=\"isManager == 1\">\n        <div *ngIf=\"loadingSubordinate; else shimmerSubordinate\">\n            <div *ngIf=\"!subIsEmpty\">\n                <div class=\"divTitleItem\">\n                    <ion-label class=\"lblTitleItem\">\n                        ON LEAVE\n                    </ion-label>\n                </div>\n                <ion-card class=\"cardSubordinate\">\n                    <ion-list class=\"listSubordinate\">\n                        <ion-item class=\"itemSubordinate\" *ngFor=\"let item of subOnLeave\" lines=\"full\">\n                            <ion-icon class=\"icnSubordinate\" name=\"contact\" mode=\"md\"></ion-icon>\n                            <ion-label class=\"lblSubordinate\">\n                                <h2 class=\"lblSubordinateName\">{{toTitleCase(item.FNAME)}} {{toTitleCase(item.LNAME)}}\n                                </h2>\n                                <h2 class=\"lblSubordinatePosition\">{{toTitleCase(item.POSITION)}}</h2>\n                            </ion-label>\n                        </ion-item>\n                    </ion-list>\n                </ion-card>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"loadingEvent; else shimmerEvent\">\n        <div *ngIf=\"lblEventsStatus != 'NO EVENT'\">\n            <div class=\"divTitleItem\">\n                <ion-label class=\"lblTitleItem\">\n                    UPCOMING EVENTS\n                </ion-label>\n            </div>\n            <ion-slides [options]=\"slideOptsEvents\" pager=\"true\">\n                <ion-slide *ngFor=\"let item of events\" class=\"slideAnnounce\">\n\n                    <ion-card *ngIf=\"item.EventName == 'GREATAWARDS2020'\">\n                        <ion-card-header class=\"cardHeader\">\n                            <img class=\"eventImage\" src=\"../../../assets/img/event_great_awards.jpg\" />\n                        </ion-card-header>\n                        <ion-card-content class=\"cardContent\">\n                            <ion-item lines=\"none\">\n                                <ion-avatar class=\"divDate\">\n                                    <div class=\"DateMonth\">\n                                        MAR\n                                    </div>\n                                    <div class=\"DateDate\">\n                                        7\n                                    </div>\n                                </ion-avatar>\n                                <ion-label text-wrap class=\"lblEvents\">\n                                    <div class=\"EventsTitle\">17th Great Awards\n                                    </div>\n                                    <div class=\"EventsLoc\">SMX Convention Center, Pasay Halls 1 & 2\n                                    </div>\n                                </ion-label>\n                            </ion-item>\n                        </ion-card-content>\n                    </ion-card>\n\n                    <ion-card *ngIf=\"item.EventName == 'NATCON2020'\" (click)=\"toggleCard()\">\n                        <ion-card-header class=\"cardHeader\">\n                            <img class=\"eventImage\" src=\"../../../assets/img/event_natcon.jpg\" />\n                        </ion-card-header>\n                        <ion-card-content class=\"cardContent\">\n                            <ion-item lines=\"none\">\n                                <ion-avatar class=\"divDate\">\n                                    <div class=\"DateMonth\">\n                                        MAR\n                                    </div>\n                                    <div class=\"DateDate\">\n                                        5\n                                    </div>\n                                </ion-avatar>\n                                <ion-label text-wrap class=\"lblEvents\">\n                                    <div class=\"EventsTitle\">CX F.A.S.T. FORWARD: National Sales Conference 2020\n                                    </div>\n                                    <div class=\"EventsLoc\">GABC 1155 Quezon City\n                                    </div>\n                                </ion-label>\n                            </ion-item>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </div>\n\n    <div *ngIf=\"loadingAnnouncement; else shimmerAnnouncement\">\n        <div *ngIf=\"lblAnnouncementsStatus != 'NO ANNOUNCEMENTS'\">\n            <div class=\"divTitleItem\">\n                <ion-label class=\"lblTitleItem\">\n                    ANNOUNCEMENTS\n                </ion-label>\n            </div>\n            <ion-slides pager=\"true\" [options]=\"slideOptsMany\">\n                <ion-slide class=\"slideAnnounce\" *ngFor=\"let item of announcement\">\n                    <ion-card class=\"cardAnnounce\">\n                        <ion-card-header class=\"cardAnnounceHeader cardAnnounceHeader{{item.Number}}\">\n                            <div class=\"lblAnnouncementTitle\">\n                                {{ trimText(item.Title) }}</div>\n                        </ion-card-header>\n                        <ion-card-content class=\"contentAnnounce\">\n                            <div class=\"lblAnnouncementDetails\">{{ trimText(item.Details) }}</div>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </div>\n\n    <div>\n        <div class=\"divTitleItem divGABCItem\">\n            <ion-label class=\"lblTitleItem\">\n                GABC\n            </ion-label>\n        </div>\n        <ion-slides pager=\"true\" [options]=\"slideOptsMany\">\n            <ion-slide>\n                <ion-card class=\"cardGABC\">\n                    <img src=\"/assets/img/gabc_creed.png\" alt=\"\">\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card class=\"cardGABC\">\n                    <img src=\"/assets/img/gabc_fast.png\" alt=\"\">\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card class=\"cardGABC\">\n                    <img *ngIf=\"!clickedGabcCreed\" src=\"/assets/img/creed_preview.png\" alt=\"\" (click)=\"toggleGabcCreed()\">\n                    <img *ngIf=\"clickedGabcCreed\" src=\"/assets/img/creed_big.png\" alt=\"\" (click)=\"toggleGabcCreed()\">\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card class=\"cardGABC\">\n                    <img *ngIf=\"!clickedGabcMission\" src=\"/assets/img/missionvision_preview.png\" alt=\"\" (click)=\"toggleGabcMission()\">\n                    <img *ngIf=\"clickedGabcMission\" src=\"/assets/img/missionvision_preview.png\" alt=\"\" (click)=\"toggleGabcMission()\">\n                </ion-card>\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n    <!-- <ion-card class=\"cardClockedInSmall\" *ngIf=\"lblClockedInStatus != 'NO CLOCKED IN'\" [routerDirection]=\"forward\"\n    [routerLink]=\"['/main/dailytimerecord']\">\n    <ion-card-header class=\"divClockedInHeader\" (click)=\"toggleClockedInSection()\">\n      <ion-icon class=\"icnClockedIn\" name=\"timer\"></ion-icon>\n      <ion-label class=\"lblClockedInStatus\">\n        {{lblClockedInStatus}}</ion-label>\n      <ion-label class=\"lblClockedIn\">\n        {{clockedIn}}</ion-label>\n    </ion-card-header>\n    <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblClockedInStatus == 'LOADING CLOCK IN...'\">\n    </ion-progress-bar>\n  </ion-card>\n  <ion-card class=\"cardSubordinateSmall\" *ngIf=\"isManager == 1 && !subIsEmpty\" (click)=\"toggleSubordinateSection()\">\n    <ion-card-header class=\"divSubordinateHeader\">\n      <ion-icon class=\"icnSubordinate\" name=\"people\"></ion-icon>\n      <ion-label class=\"lblSubordinate\">\n        {{lblSubordinatesStatus}}</ion-label>\n      <ion-icon class=\"menuSubordinateToggle\" *ngIf=\"noError\"\n        name=\"{{clickedSubordinate ? 'arrow-dropup': 'arrow-dropdown'}}\">\n      </ion-icon>\n    </ion-card-header>\n    <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblSubordinatesStatus == 'LOADING SUBORDINATES...'\">\n    </ion-progress-bar>\n    <ion-card-content class=\"cardSubordinateContent\" [ngClass]=\"{'cardOff': !clickedSubordinate}\"\n      *ngIf=\"noError && lblSubordinatesStatus != 'LOADING SUBORDINATES...'\">\n      <ion-item class=\"cardSubordinate\" *ngFor=\"let item of subOnLeave\">\n        <ion-icon class=\"divPhoto\" name=\"person\" mode=\"md\"></ion-icon>\n        {{item.FNAME}} {{item.LNAME}}\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"cardAlertsSmall\" *ngIf=\"lblAlertsStatus != 'NO ALERTS'\" (click)=\"toggleAlertsSection()\">\n    <ion-card-header class=\"divAlertsHeader\">\n      <ion-icon class=\"icnAlerts\" name=\"notifications-outline\"></ion-icon>\n      <ion-label class=\"lblAnnounce\">\n        {{lblAlertsStatus}}</ion-label>\n      <ion-icon class=\"menuAlertsToggle\" *ngIf=\"noError && lblAlertsStatus != 'NO ALERTS'\"\n        name=\"{{clickedAlerts ? 'arrow-dropup': 'arrow-dropdown'}}\"></ion-icon>\n    </ion-card-header>\n    <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblAlertsStatus == 'LOADING ALERTS...'\"></ion-progress-bar>\n    <ion-card-content class=\"cardAlertsContent\" [ngClass]=\"{'cardOff': !clickedAlerts}\"\n      *ngIf=\"noError && lblAlertsStatus != 'NO ALERTS' && lblAlertsStatus != 'LOADING ALERTS...'\">\n      <div *ngFor=\"let item of alerts\">\n        <ion-item class=\"cardAlerts\" *ngIf=\"item.Name\" [routerDirection]=\"forward\" [routerLink]=\" [item.RouterLink]\">\n          <div class=\"divAlertsItem\">\n            <ion-icon class=\"icnAlerts\" name={{item.Icon}} mode={{item.Mode}}>\n            </ion-icon>\n            <ion-badge class=\"bdgAlerts\" color=\"accent\">{{ item.COUNT }}</ion-badge>\n          </div>\n          <ion-label class=\"lblAlerts\">\n            {{item.Name}}</ion-label>\n        </ion-item>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"cardAnnouncementSmall\">\n    <ion-card-header class=\"divAnnouncementHeader\" (click)=\"toggleAnnounceSection()\">\n      <ion-icon class=\"icnAnnounce\" name=\"chatboxes\"></ion-icon>\n      <ion-label class=\"lblAnnounce\">\n        {{lblAnnouncementsStatus}}</ion-label>\n      <ion-icon class=\"menuAnnouncementToggle\" *ngIf=\"noError && lblAnnouncementsStatus != 'NO ANNOUNCEMENTS'\"\n        name=\"{{clickedAnnounce ? 'arrow-dropup': 'arrow-dropdown'}}\">\n      </ion-icon>\n    </ion-card-header>\n    <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblAnnouncementsStatus == 'LOADING ANNOUNCEMENTS...'\">\n    </ion-progress-bar>\n    <ion-card-content\n      *ngIf=\"noError && lblAnnouncementsStatus != 'NO ANNOUNCEMENTS' && lblAnnouncementsStatus != 'LOADING ANNOUNCEMENTS...' && clickedAnnounce\">\n      <div *ngFor=\"let item of announcement;\">\n        <ion-card class=\"cardAnnouncement\"\n          *ngIf=\"trimText(item.Title) != 'Our Purpose' && trimText(item.Title) != 'The GABC Creed'\">\n          <ion-card-content class=\"contentAnnounce\">\n            <h1 class=\"lblTitle\">{{ trimText(item.Title) }}</h1>\n            <p class=\"lblDetails\">{{ trimText(item.Details) }}</p>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card (click)=\"viewPhoto(purpose_big)\">\n    <img src=\"/assets/img/purpose_preview.png\" alt=\"\">\n  </ion-card>\n  <ion-card (click)=\"viewPhoto(creed_big)\">\n    <img src=\"/assets/img/creed_preview.png\" alt=\"\">\n  </ion-card>\n  <ion-card (click)=\"viewPhoto(missionvision_big)\">\n    <img src=\"/assets/img/missionvision_preview.png\" alt=\"\">\n  </ion-card>\n  <div *ngIf=\"noError; else error\">\n  </div> -->\n    <div class=\"bgBottom\"></div>\n</ion-content>\n\n\n<ng-template #shimmerTimeIn>\n    <ion-card class=\"btnTimeInLoading\" *ngIf=\"lblClockedInStatus != 'NO CLOCKED IN'\">\n        <div class=\"divLoadingTimeIn shineClear\">\n            <ion-spinner name=\"crescent\" class=\"spinnerTimeIn\"></ion-spinner>\n            <h2 class=\"lblLoadingTimeIn\">LOADING TIME-IN</h2>\n        </div>\n    </ion-card>\n</ng-template>\n\n<ng-template #shimmerAlert>\n    <div class=\"divTitleItem\">\n        <ion-label class=\"lblTitleItem\">\n            ALERTS\n        </ion-label>\n    </div>\n    <!-- <ion-card class=\"cardProgressbar\">\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  </ion-card> -->\n    <ion-segment class=\"sgmtAlerts shimmeritem\" mode=\"md\" scrollable>\n        <div *ngFor=\"let number of [0,1,2,3,4,5]\">\n            <ion-card class=\"cardAlerts shineClear\">\n            </ion-card>\n        </div>\n    </ion-segment>\n</ng-template>\n\n<ng-template #shimmerSubordinate>\n    <div class=\"divTitleItem\">\n        <ion-label class=\"lblTitleItem\">\n            ON LEAVE\n        </ion-label>\n    </div>\n    <!-- <ion-card class=\"cardProgressbar\">\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  </ion-card> -->\n\n    <ion-card class=\"cardSubordinateLoading shineClear\">\n        <!-- <ion-list class=\"listSubordinate shineClear\">\n            <ion-item class=\"itemSubordinateLoading shineClear\" *ngFor=\"let number of [0,1]\" lines=\"full\">\n            </ion-item>\n        </ion-list> -->\n    </ion-card>\n</ng-template>\n\n<ng-template #shimmerEvent>\n    <div class=\"divTitleItem\">\n        <ion-label class=\"lblTitleItem\">\n            UPCOMING EVENTS\n        </ion-label>\n    </div>\n    <!-- <ion-card class=\"cardProgressbar\">\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  </ion-card> -->\n    <div class=\"divEvent divShimmer shineClear\">\n\n    </div>\n</ng-template>\n\n<ng-template #shimmerAnnouncement>\n    <div class=\"divTitleItem\">\n        <ion-label class=\"lblTitleItem\">\n            ANNOUNCEMENTS\n        </ion-label>\n    </div>\n    <!-- <ion-card class=\"cardProgressbar\">\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  </ion-card> -->\n    <div class=\"divEvent divShimmer shineClear\">\n\n    </div>\n</ng-template>\n\n<ng-template #error>\n    <ion-card lines=\"none\" class=\"errorbox2\">\n        <ion-avatar class=\"center\">\n            <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n        <span class=\"errorMessage\">{{errorMessage}}</span>\n        <br />\n        <span class=\"errorMessage\">\n            <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n            <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n                <ion-icon color=\"light\" name=\"home\"></ion-icon>\n            </ion-button>\n        </span>\n    </ion-card>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(to right bottom, #558B2F, #558B2F);\n}\n\nion-toolbar {\n  --background: transparent;\n  --min-height: 35px;\n  --padding: 0px;\n  margin-top: 30px;\n  top: 0%;\n}\n\nion-slide > :first-child {\n  width: 100%;\n  margin-top: 10px;\n}\n\nion-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n}\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 0px !important;\n  left: 0;\n  width: 100%;\n}\n\n.divHello {\n  --background: rgba(255, 255, 255, 0);\n  width: 100%;\n  color: white;\n}\n\n.lblWelcome {\n  font-size: 21px;\n  margin-bottom: 0px;\n}\n\n.lblName {\n  font-size: 30px;\n  font-family: \"RobotoRegular\";\n}\n\n.icnToday {\n  height: 20px;\n  width: 20px;\n  margin-left: -25px;\n  position: absolute;\n}\n\n.lblToday {\n  font-size: 17px;\n  margin-top: 15px;\n  margin-left: 25px;\n}\n\n.btnTimeIn {\n  width: 110px;\n  height: 45px;\n  color: white;\n  margin: 55px 10px 0px 0px;\n  --box-shadow: 1px 1px 10px gray;\n  border-radius: 35px;\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0);\n}\n\n.btnTimeIn8 {\n  background-image: linear-gradient(to left, #999900, #B3B300);\n}\n\n.btnTimeIn9 {\n  background-image: linear-gradient(to left, #1777B3, #1E96E1);\n}\n\n.btnTimeIn10 {\n  background-image: linear-gradient(to left, #B34D8A, #CC589D);\n}\n\n.btnTimeInLate {\n  background-image: linear-gradient(to left, #B34D4D, #D25A5A);\n}\n\n.btnTimeInDefault {\n  background-image: linear-gradient(to left, #808080, #999999);\n}\n\n.btnTimeInLoading {\n  width: 110px;\n  height: 45px;\n  color: white;\n  margin: 55px 10px 0px 0px;\n  --box-shadow: 1px 1px 10px gray;\n  border-radius: 35px;\n  background-image: linear-gradient(to left, #808080, #999999);\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0);\n}\n\n.divTimeIn {\n  margin-left: 25px;\n}\n\n.icnClockedIn {\n  height: 35px;\n  width: 35px;\n  position: absolute;\n  left: 7px;\n  top: 5px;\n}\n\n.lblTimeIn {\n  font-size: 15px;\n  text-align: right;\n  font-family: \"RobotoRegular\";\n  margin: 7px 13px 0px 0px;\n}\n\n.lblTimeInLbl {\n  font-size: 11px;\n  text-align: right;\n  margin: 0px 24px 0px 0px;\n}\n\n.divLoadingTimeIn {\n  display: flex;\n}\n\n.spinnerTimeIn {\n  margin-top: 0px;\n  margin-left: 7px;\n  color: white;\n  width: 45px;\n  height: 45px;\n}\n\n.lblLoadingTimeIn {\n  font-size: 11px;\n  color: white;\n  margin: 12px 0 0 9px;\n}\n\n.divTitleItem {\n  margin: 10px 0px 0px 16px;\n  position: relative;\n  z-index: 1;\n}\n\n.divGABCItem {\n  margin-top: 0px;\n}\n\n.lblTitleItem {\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n  color: white;\n}\n\n.sgmtAlerts {\n  margin-left: 10px;\n}\n\n.cardAlerts {\n  height: 120px;\n  width: 105px;\n  margin: 10px 5px 10px 5px;\n  color: white;\n}\n\n.alertLeave {\n  background-image: linear-gradient(to right bottom, #4568dc, #9C27B0);\n}\n\n.alertAdvisory {\n  background-image: linear-gradient(to right bottom, #AD5048, #91443D);\n}\n\n.alertOvertime {\n  background-image: linear-gradient(to right bottom, #EF4656, #D94734);\n}\n\n.alertWFH {\n  background-image: linear-gradient(to right bottom, #F44336, #F44336);\n}\n\n.alertWFHApproval {\n  background-image: linear-gradient(to right bottom, #D3A828, #D3A828);\n}\n\n.alertLeaveApproval {\n  background-image: linear-gradient(to right bottom, #E77C2A, #F53E20);\n}\n\n.alertAdvisoryApproval {\n  background-image: linear-gradient(to right bottom, #009688, #007A6E);\n}\n\n.alertOvertimeApproval {\n  background-image: linear-gradient(to right bottom, #25BFCD, #1FA2AD);\n}\n\n.divAlertIcon {\n  text-align: -webkit-center;\n  margin-top: 10px;\n}\n\n.imgAlertIcon {\n  height: 50px;\n  width: 50px;\n}\n\n.lblAlertCount {\n  margin-top: 10px;\n  font-size: 22px;\n  font-family: \"RobotoRegular\";\n}\n\n.lblAlertName {\n  font-size: 11px;\n  font-family: \"RobotoRegular\";\n}\n\n.cardSubordinate {\n  margin-top: 10px;\n  z-index: 1;\n}\n\n.cardSubordinateLoading {\n  margin-top: 10px;\n  height: 120px;\n  --background: rgba(255, 255, 255, 0);\n}\n\n.listSubordinate {\n  border-radius: 10px !important;\n}\n\n.itemSubordinate {\n  --padding-start: 10px;\n}\n\n.itemSubordinateLoading {\n  --padding-start: 10px;\n  --background: rgba(255, 255, 255, 0);\n}\n\n.icnSubordinate {\n  width: 40px;\n  height: 40px;\n  color: #61636B;\n}\n\n.lblSubordinate {\n  margin-left: 10px;\n  font-family: \"RobotoRegular\";\n}\n\n.lblSubordinateName {\n  font-size: 16px;\n}\n\n.lblSubordinatePosition {\n  font-size: 13px;\n  color: #61636B;\n}\n\n.eventImage {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.divEvent {\n  height: 150px;\n  margin: 0px 20px;\n  border-radius: 10px;\n  z-index: 1;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divDate {\n  height: 70px;\n}\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.EventsTitle {\n  font-size: 15px;\n  font-family: \"RobotoBold\";\n  color: black;\n}\n\n.EventsLoc {\n  font-size: 13px;\n  color: #5C5C5C;\n  font-family: \"RobotoRegular\";\n}\n\n.lblEvents {\n  margin: 0px 0px 0px 40px;\n}\n\n.cardHeader {\n  padding: 0px;\n}\n\n.cardContent {\n  padding: 10px 5px 10px 0px;\n  background-color: white;\n}\n\n.slideAnnounce {\n  margin-bottom: 10px;\n}\n\n.cardAnnounce {\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  background: white;\n}\n\n.cardAnnounceHeader {\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding: 15px;\n  min-height: 70px;\n  justify-content: center;\n  align-items: center;\n}\n\n.contentAnnounce {\n  color: white;\n  padding: 0px;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n}\n\n.lblAnnouncementTitle {\n  font-size: 15px;\n  font-family: \"RobotoMedium\";\n  color: white;\n  margin: 0px;\n}\n\n.lblAnnouncementDetails {\n  font-size: 13px;\n  background: white;\n  min-height: 100%;\n  color: black;\n  padding: 15px;\n  font-family: \"RobotoRegular\";\n}\n\n.cardProgressbar {\n  margin: 0px 20px;\n}\n\n.cardGABC {\n  margin-bottom: 30px;\n}\n\n.cardAnnounceHeader0 {\n  background-image: linear-gradient(to top right, #5433FF, #20BDFF);\n}\n\n.cardAnnounceHeader1 {\n  background-image: linear-gradient(to bottom left, #4568dc, #b06ab3);\n}\n\n.cardAnnounceHeader2 {\n  background-image: linear-gradient(to top right, #314755, #26a0da);\n}\n\n.cardAnnounceHeader3 {\n  background-image: linear-gradient(to bottom left, #cc2b5e, #753a88);\n}\n\n.cardAnnounceHeader4 {\n  background-image: linear-gradient(to bottom right, #108dc7, #ef8e38);\n}\n\n.cardAnnounceHeader5 {\n  background-image: linear-gradient(to top right, #67B26F, #4ca2cd);\n}\n\n.cardAnnounceHeader6 {\n  background-image: linear-gradient(to left bottom, #16bffd, #19547b);\n}\n\n.cardAnnounceHeader7 {\n  background-image: linear-gradient(to top left, #ff512f, #dd2476);\n}\n\n.cardAnnounceHeader8 {\n  background-image: linear-gradient(to left bottom, #f953c6, #b91d73);\n}\n\n.cardAnnounceHeader9 {\n  background-image: linear-gradient(to left top, #ff5f6d, #E8985A);\n}\n\n.cardAnnounceHeader10 {\n  background-image: linear-gradient(to right bottom, #e96443, #904e95);\n}\n\n.cardAnnounceHeader11 {\n  background-image: linear-gradient(to right bottom, #00D3EB, #02C977);\n}\n\n@media screen and (max-width: 374px) {\n  .bgTop {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    top: -130px;\n  }\n\n  .bgBottom {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    bottom: -30%;\n    left: -30%;\n    transform: scaleX(-1);\n  }\n}\n\n@media screen and (min-width: 375px) {\n  .bgTop {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    top: -23%;\n  }\n\n  .bgBottom {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    bottom: -30%;\n    left: -30%;\n    transform: scaleX(-1);\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .bgTop {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 125%;\n    height: 100%;\n    top: -40%;\n  }\n\n  .bgBottom {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    bottom: -30%;\n    left: -50%;\n    transform: scaleX(-1);\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .bgTop {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 75%;\n    top: -25%;\n  }\n\n  .bgBottom {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    bottom: -30%;\n    left: -50%;\n    transform: scaleX(-1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdFQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSw0RUFBQTtBQ0FKOztBREdBOzs7RUFHSSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0VBQUE7QUNBSjs7QURHQTtFQUNJLDREQUFBO0FDQUo7O0FESUE7RUFDSSw0REFBQTtBQ0RKOztBREtBO0VBQ0ksNERBQUE7QUNGSjs7QURNQTtFQUNJLDREQUFBO0FDSEo7O0FET0E7RUFDSSw0REFBQTtBQ0pKOztBRE9BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7RUFDQSxzRUFBQTtBQ0pKOztBRE9BO0VBQ0ksaUJBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNKSjs7QURPQTtFQUNJLGFBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0pKOztBRE9BO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUNJLGlCQUFBO0FDSko7O0FET0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRE9BO0VBRUksb0VBQUE7QUNMSjs7QURRQTtFQUVJLG9FQUFBO0FDTko7O0FEU0E7RUFFSSxvRUFBQTtBQ1BKOztBRFVBO0VBRUksb0VBQUE7QUNSSjs7QURXQTtFQUNJLG9FQUFBO0FDUko7O0FEV0E7RUFFSSxvRUFBQTtBQ1RKOztBRFlBO0VBRUksb0VBQUE7QUNWSjs7QURhQTtFQUVJLG9FQUFBO0FDWEo7O0FEY0E7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0FDWEo7O0FEY0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1hKOztBRGNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNYSjs7QURjQTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtBQ1hKOztBRGNBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FDWEo7O0FEY0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ1hKOztBRGNBO0VBQ0ksOEJBQUE7QUNYSjs7QURjQTtFQUNJLHFCQUFBO0FDWEo7O0FEY0E7RUFDSSxxQkFBQTtFQUNBLG9DQUFBO0FDWEo7O0FEY0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNYSjs7QURjQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7QUNYSjs7QURjQTtFQUNJLGVBQUE7QUNYSjs7QURjQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDWEo7O0FEY0E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1hKOztBRGNBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsNEVBQUE7QUNYSjs7QURjQTtFQUNJLFlBQUE7QUNYSjs7QURjQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNYSjs7QURjQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWEo7O0FEY0E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDWEo7O0FEY0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FDWEo7O0FEY0E7RUFDSSx3QkFBQTtBQ1hKOztBRGNBO0VBQ0ksWUFBQTtBQ1hKOztBRGNBO0VBQ0ksMEJBQUE7RUFDQSx1QkFBQTtBQ1hKOztBRGNBO0VBQ0ksbUJBQUE7QUNYSjs7QURjQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ1hKOztBRGNBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDWEo7O0FEY0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDWEo7O0FEY0E7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1hKOztBRGNBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FDWEo7O0FEY0E7RUFDSSxnQkFBQTtBQ1hKOztBRGNBO0VBQ0ksbUJBQUE7QUNYSjs7QURjQTtFQUNJLGlFQUFBO0FDWEo7O0FEY0E7RUFDSSxtRUFBQTtBQ1hKOztBRGNBO0VBQ0ksaUVBQUE7QUNYSjs7QURjQTtFQUNJLG1FQUFBO0FDWEo7O0FEY0E7RUFDSSxvRUFBQTtBQ1hKOztBRGNBO0VBQ0ksaUVBQUE7QUNYSjs7QURjQTtFQUNJLG1FQUFBO0FDWEo7O0FEY0E7RUFDSSxnRUFBQTtBQ1hKOztBRGNBO0VBQ0ksbUVBQUE7QUNYSjs7QURjQTtFQUNJLGdFQUFBO0FDWEo7O0FEY0E7RUFDSSxvRUFBQTtBQ1hKOztBRGNBO0VBQ0ksb0VBQUE7QUNYSjs7QURjQTtFQUNJO0lBQ0ksbURBQUE7SUFDQSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFQ1hOOztFRGFFO0lBQ0ksbURBQUE7SUFDQSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxxQkFBQTtFQ1ZOO0FBQ0Y7O0FEYUE7RUFDSTtJQUNJLG1EQUFBO0lBQ0EsVUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7RUNYTjs7RURhRTtJQUNJLG1EQUFBO0lBQ0EsVUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EscUJBQUE7RUNWTjtBQUNGOztBRGFBO0VBQ0k7SUFDSSxtREFBQTtJQUNBLFVBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0VDWE47O0VEYUU7SUFDSSxtREFBQTtJQUNBLFVBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLHFCQUFBO0VDVk47QUFDRjs7QURhQTtFQUNJO0lBQ0ksbURBQUE7SUFDQSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtFQ1hOOztFRGFFO0lBQ0ksbURBQUE7SUFDQSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxxQkFBQTtFQ1ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjNTU4QjJGO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzU1OEIyRiwgIzU1OEIyRik7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tbWluLWhlaWdodDogMzVweDtcbiAgICAtLXBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHRvcDogMCU7XG59XG5cbmlvbi1zbGlkZT46Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sXG4uc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gICAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2SGVsbG8ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5sYmxXZWxjb21lIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubGJsTmFtZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmljblRvZGF5IHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxibFRvZGF5IHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuLmJ0blRpbWVJbiB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiA1NXB4IDEwcHggMHB4IDBweDtcbiAgICAtLWJveC1zaGFkb3c6IDFweCAxcHggMTBweCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwKSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmJ0blRpbWVJbjgge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjOTk5OTAwLCAjQjNCMzAwKTtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgY2xvc2VzdC1zaWRlIGF0IDIyJSwgcmdiYSgyMjAsIDIyMCwgMCwgMC41KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpKTtcbn1cblxuLmJ0blRpbWVJbjkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTc3N0IzLCAjMUU5NkUxKTtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgY2xvc2VzdC1zaWRlIGF0IDIyJSwgIzFFOTZFMSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpKVxufVxuXG4uYnRuVGltZUluMTAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjQjM0RDhBLCAjQ0M1ODlEKTtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgY2xvc2VzdC1zaWRlIGF0IDIyJSwgcmdiYSgyMzIsIDEsIDEwMiwgMC41KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpKVxufVxuXG4uYnRuVGltZUluTGF0ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNCMzRENEQsICNEMjVBNUEpO1xuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBjbG9zZXN0LXNpZGUgYXQgMjIlLCAjRkYwMDAwLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkpXG59XG5cbi5idG5UaW1lSW5EZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzgwODA4MCwgIzk5OTk5OSk7XG59XG5cbi5idG5UaW1lSW5Mb2FkaW5nIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDU1cHggMTBweCAwcHggMHB4O1xuICAgIC0tYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzgwODA4MCwgIzk5OTk5OSk7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwKSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmRpdlRpbWVJbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5pY25DbG9ja2VkSW4ge1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogN3B4O1xuICAgIHRvcDogNXB4O1xufVxuXG4ubGJsVGltZUluIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICAgIG1hcmdpbjogN3B4IDEzcHggMHB4IDBweDtcbn1cblxuLmxibFRpbWVJbkxibCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjogMHB4IDI0cHggMHB4IDBweDtcbn1cblxuLmRpdkxvYWRpbmdUaW1lSW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zcGlubmVyVGltZUluIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ubGJsTG9hZGluZ1RpbWVJbiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDEycHggMCAwIDlweDtcbn1cblxuLmRpdlRpdGxlSXRlbSB7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmRpdkdBQkNJdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5sYmxUaXRsZUl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2dtdEFsZXJ0cyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jYXJkQWxlcnRzIHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiAxMDVweDtcbiAgICBtYXJnaW46IDEwcHggNXB4IDEwcHggNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFsZXJ0TGVhdmUge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzlDMjdCMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjNDU2OGRjLCAjOUMyN0IwKTtcbn1cblxuLmFsZXJ0QWR2aXNvcnkge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzE0NTU3MDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjQUQ1MDQ4LCAjOTE0NDNEKTtcbn1cblxuLmFsZXJ0T3ZlcnRpbWUge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI0VGNDY1NjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjRUY0NjU2LCAjRDk0NzM0KTtcbn1cblxuLmFsZXJ0V0ZIIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVCRkNEO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNGNDQzMzYsICNGNDQzMzYpO1xufVxuXG4uYWxlcnRXRkhBcHByb3ZhbCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI0QzQTgyOCwgI0QzQTgyOCk7XG59XG5cbi5hbGVydExlYXZlQXBwcm92YWwge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI0U3N0MyQTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjRTc3QzJBLCAjRjUzRTIwKTtcbn1cblxuLmFsZXJ0QWR2aXNvcnlBcHByb3ZhbCB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMwMDk2ODgsICMwMDdBNkUpO1xufVxuXG4uYWxlcnRPdmVydGltZUFwcHJvdmFsIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVCRkNEO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMyNUJGQ0QsICMxRkEyQUQpO1xufVxuXG4uZGl2QWxlcnRJY29uIHtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW1nQWxlcnRJY29uIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5sYmxBbGVydENvdW50IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5sYmxBbGVydE5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5jYXJkU3Vib3JkaW5hdGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmNhcmRTdWJvcmRpbmF0ZUxvYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi5saXN0U3Vib3JkaW5hdGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLml0ZW1TdWJvcmRpbmF0ZSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuXG4uaXRlbVN1Ym9yZGluYXRlTG9hZGluZyB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLmljblN1Ym9yZGluYXRlIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6ICM2MTYzNkI7XG59XG5cbi5sYmxTdWJvcmRpbmF0ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4ubGJsU3Vib3JkaW5hdGVOYW1lIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5sYmxTdWJvcmRpbmF0ZVBvc2l0aW9uIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM2MTYzNkI7XG59XG5cbi5ldmVudEltYWdlIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uZGl2RXZlbnQge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiAwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmRpdkRhdGUge1xuICAgIGhlaWdodDogNzBweDtcbn1cblxuLkRhdGVNb250aCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDIwcHhcbn1cblxuLkRhdGVEYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLkV2ZW50c1RpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvQm9sZFwiO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLkV2ZW50c0xvYyB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmxibEV2ZW50cyB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCA0MHB4O1xufVxuXG4uY2FyZEhlYWRlciB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uY2FyZENvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2xpZGVBbm5vdW5jZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmRBbm5vdW5jZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1iYXNpczogYXV0bztcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50QW5ub3VuY2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZmxleC1iYXNpczogYXV0bztcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZmxleC1zaHJpbms6IDE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5sYmxBbm5vdW5jZW1lbnRUaXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmxibEFubm91bmNlbWVudERldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmNhcmRQcm9ncmVzc2JhciB7XG4gICAgbWFyZ2luOiAwcHggMjBweDtcbn1cblxuLmNhcmRHQUJDIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyMCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzU0MzNGRiwgIzIwQkRGRik7IC8vU2V4eSBCbHVlXG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIxIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICM0NTY4ZGMsICNiMDZhYjMpOyAvL3RvbmlnaHRcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMzMTQ3NTUsICMyNmEwZGEpOyAvL01hdXZlXG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICNjYzJiNWUsICM3NTNhODgpOyAvL1B1cnBsZSBcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMxMDhkYzcsICNlZjhlMzgpOyAvL1RyYW5xdWlsIFxufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyNSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzY3QjI2RiwgIzRjYTJjZCk7IC8vQmVhY2hcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjYge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IGJvdHRvbSwgIzE2YmZmZCwgIzE5NTQ3Yik7IC8vUml2ZXJcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgI2ZmNTEyZiwgI2RkMjQ3Nik7IC8vQmxvb2R5IFxufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyOCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgYm90dG9tLCAjZjk1M2M2LCAjYjkxZDczKTsgLy9EdXNrXG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXI5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICNmZjVmNmQsICNFODk4NUEpOyAvL09yYW5nZSBcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjEwIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjZTk2NDQzLCAjOTA0ZTk1KTsgLy9QZWFjaFxufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyMTEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMwMEQzRUIsICMwMkM5NzcpOyAvL0RlY2VudCBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcbiAgICAuYmdUb3Age1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIHRvcDogLTEzMHB4O1xuICAgIH1cbiAgICAuYmdCb3R0b20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIGJvdHRvbTogLTMwJTtcbiAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcbiAgICAuYmdUb3Age1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIHRvcDogLTIzJTtcbiAgICB9XG4gICAgLmJnQm90dG9tIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICBib3R0b206IC0zMCU7XG4gICAgICAgIGxlZnQ6IC0zMCU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgLmJnVG9wIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEyNSU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdG9wOiAtNDAlO1xuICAgIH1cbiAgICAuYmdCb3R0b20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIGJvdHRvbTogLTMwJTtcbiAgICAgICAgbGVmdDogLTUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAuYmdUb3Age1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgIHRvcDogLTI1JTtcbiAgICB9XG4gICAgLmJnQm90dG9tIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICBib3R0b206IC0zMCU7XG4gICAgICAgIGxlZnQ6IC01MCU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICB9XG59XG5cbi8vIGlvbi1oZWFkZXIge1xuLy8gICAtLWJhY2tncm91bmQ6ICM1NThCMkY7XG4vLyB9XG4vLyBpb24tdG9vbGJhciB7XG4vLyAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgIC0tbWluLWhlaWdodDogMzVweDtcbi8vICAgLS1wYWRkaW5nOiAwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDMwcHg7XG4vLyB9XG4vLyBpb24tdGl0bGUge1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG4vLyB9XG4vLyBpb24tY29udGVudCB7XG4vLyAgIC0tYmFja2dyb3VuZDogIzU1OEIyRjtcbi8vIH1cbi8vIGlvbi1jYXJkLWNvbnRlbnQge1xuLy8gICBwYWRkaW5nOiAwcHggMHB4IDE1cHggMHB4O1xuLy8gICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDAuM3M7XG4vLyAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3M7XG4vLyAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4vLyB9XG4vLyAuY2FyZE9mZiB7XG4vLyAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0IDAuM3M7XG4vLyAgIGFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuLy8gICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuLy8gfVxuLy8gLmNhcmRPZmZBbm5vdW5jZSB7XG4vLyAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0IDAuM3M7XG4vLyAgIGFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuLy8gICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuLy8gfVxuLy8gLmJnVG9wIHtcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4vLyAgIHotaW5kZXg6IDA7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogNzAlO1xuLy8gICB0b3A6IC0xMzBweDtcbi8vIH1cbi8vIC5iZ0JvdHRvbSB7XG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuLy8gICB6LWluZGV4OiAwO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDcwJTtcbi8vICAgYm90dG9tOiAtMTAwcHg7XG4vLyAgIGxlZnQ6IC0xMDBweDtcbi8vICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuLy8gfVxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcbi8vICAgLmJnVG9wIHtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbi8vICAgICB6LWluZGV4OiAwO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogNzAlO1xuLy8gICAgIHRvcDogLTE2MHB4O1xuLy8gICB9XG4vLyB9XG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuLy8gICAuYmdUb3Age1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuLy8gICAgIHotaW5kZXg6IDA7XG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiA3MCU7XG4vLyAgICAgdG9wOiAtMTgwcHg7XG4vLyAgIH1cbi8vICAgLmJnQm90dG9tIHtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbi8vICAgICB6LWluZGV4OiAwO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiA3MCU7XG4vLyAgICAgYm90dG9tOiAtMTAwcHg7XG4vLyAgICAgbGVmdDogLTEwMHB4O1xuLy8gICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbi8vICAgfVxuLy8gfVxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbi8vICAgLmJnVG9wIHtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbi8vICAgICB6LWluZGV4OiAwO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogMTI1JTtcbi8vICAgICBoZWlnaHQ6IDkwJTtcbi8vICAgICB0b3A6IC0xNzBweDtcbi8vICAgICBtYXJnaW4tdG9wOiAtMTYwcHg7XG4vLyAgIH1cbi8vICAgLmJnQm90dG9tIHtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbi8vICAgICB6LWluZGV4OiAwO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiA3MCU7XG4vLyAgICAgYm90dG9tOiAtMTAwcHg7XG4vLyAgICAgbGVmdDogLTE1MHB4O1xuLy8gICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbi8vICAgfVxuLy8gfVxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbi8vICAgLmJnVG9wIHtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbi8vICAgICB6LWluZGV4OiAwO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogMTI1JTtcbi8vICAgICBoZWlnaHQ6IDcwJTtcbi8vICAgICB0b3A6IC0xNzBweDtcbi8vICAgICBtYXJnaW4tdG9wOiAtMTYwcHg7XG4vLyAgIH1cbi8vIH1cbi8vIC5idG5NZW51IHtcbi8vICAgLS1wYWRkaW5nOiAwcHg7XG4vLyB9XG4vLyAuZGl2SGVsbG8ge1xuLy8gICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4vLyB9XG4vLyAubGJsSGVsbG8ge1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIHRleHQtc2hhZG93OiAxcHggMnB4IGRhcmtzbGF0ZWdyZXk7XG4vLyB9XG4vLyAubGJsV2VsY29tZSB7XG4vLyAgIGZvbnQtc2l6ZTogMjRweDtcbi8vIH1cbi8vIC5sYmxOYW1lIHtcbi8vICAgZm9udC1zaXplOiAyNnB4O1xuLy8gfVxuLy8gLmxibFRvZGF5IHtcbi8vICAgZm9udC1zaXplOiAxOHB4O1xuLy8gfVxuLy8gLm1lbnVDbG9ja2VkSW5Ub2dnbGUge1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGhlaWdodDogMThweDtcbi8vICAgd2lkdGg6IDE4cHg7XG4vLyAgIHBhZGRpbmctdG9wOiAzcHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICBjb2xvcjogIzUxNEI0Qjtcbi8vIH1cbi8vIC5jYXJkQ2xvY2tlZEluU21hbGwge1xuLy8gICBtYXJnaW46IDEwcHggMTVweDtcbi8vICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjQTVBNUE1O1xuLy8gfVxuLy8gLmRpdkNsb2NrZWRJbkhlYWRlciB7XG4vLyAgIGNvbG9yOiAjNTE0QjRCO1xuLy8gICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweCAxNXB4O1xuLy8gICAtLWJhY2tncm91bmQ6ICNBNUE1QTU7XG4vLyB9XG4vLyAuaWNuQ2xvY2tlZEluIHtcbi8vICAgaGVpZ2h0OiAyMHB4O1xuLy8gICB3aWR0aDogMjBweDtcbi8vIH1cbi8vIC5sYmxDbG9ja2VkSW5TdGF0dXMge1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4vLyB9XG4vLyAubGJsQ2xvY2tlZEluIHtcbi8vICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cbi8vIC5tZW51U3Vib3JkaW5hdGVUb2dnbGUge1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGhlaWdodDogMThweDtcbi8vICAgd2lkdGg6IDE4cHg7XG4vLyAgIHBhZGRpbmctdG9wOiAzcHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICBjb2xvcjogIzUxNEI0Qjtcbi8vIH1cbi8vIC5jYXJkU3Vib3JkaW5hdGVTbWFsbCB7XG4vLyAgIG1hcmdpbjogMTBweCAxNXB4O1xuLy8gICBmb250LXNpemU6IDEycHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4vLyB9XG4vLyAuY2FyZFN1Ym9yZGluYXRlIHtcbi8vICAgY29sb3I6ICM1MTRCNEI7XG4vLyAgIGZvbnQtc2l6ZTogMTNweDtcbi8vICAgLS1ib3JkZXItY29sb3I6ICM1ZjVmNWY4Zjtcbi8vICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuLy8gfVxuLy8gLmNhcmRTdWJvcmRpbmF0ZUNvbnRlbnQge1xuLy8gICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbi8vIH1cbi8vIC5kaXZTdWJvcmRpbmF0ZUhlYWRlciB7XG4vLyAgIGNvbG9yOiAjNTE0QjRCO1xuLy8gICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweCAxNXB4O1xuLy8gICAtLWJhY2tncm91bmQ6ICM1ZjVmNWY4Zjtcbi8vIH1cbi8vIC5pY25TdWJvcmRpbmF0ZSB7XG4vLyAgIGhlaWdodDogMjBweDtcbi8vICAgd2lkdGg6IDIwcHg7XG4vLyB9XG4vLyAubGJsU3Vib3JkaW5hdGUge1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4vLyB9XG4vLyAuZGl2UGhvdG8ge1xuLy8gICBtYXJnaW4tcmlnaHQ6IDVweDtcbi8vICAgbWFyZ2luLWxlZnQ6IDVweDtcbi8vIH1cbi8vIC5tZW51QWxlcnRzVG9nZ2xlIHtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBoZWlnaHQ6IDE4cHg7XG4vLyAgIHdpZHRoOiAxOHB4O1xuLy8gICBwYWRkaW5nLXRvcDogM3B4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgY29sb3I6ICM1MTRCNEI7XG4vLyB9XG4vLyAuY2FyZEFsZXJ0cyB7XG4vLyAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgY29sb3I6ICM1MTRCNEI7XG4vLyAgIC0tYm9yZGVyLWNvbG9yOiAjNWY1ZjVmOGY7XG4vLyAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbi8vIH1cbi8vIC5jYXJkQWxlcnRzQ29udGVudCB7XG4vLyAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuLy8gfVxuLy8gLmNhcmRBbGVydHNTbWFsbCB7XG4vLyAgIG1hcmdpbjogMTBweCAxNXB4O1xuLy8gICBmb250LXNpemU6IDEycHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4vLyB9XG4vLyAuZGl2QWxlcnRzSGVhZGVyIHtcbi8vICAgY29sb3I6ICM1MTRCNEI7XG4vLyAgIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4IDE1cHg7XG4vLyAgIC0tYmFja2dyb3VuZDogIzVmNWY1ZjhmO1xuLy8gfVxuLy8gLmRpdkFsZXJ0c0l0ZW0ge1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIHdpZHRoOiAyOHB4O1xuLy8gICB0b3A6IDFweDtcbi8vICAgcmlnaHQ6IDFweDtcbi8vICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbi8vICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vIH1cbi8vIC5pdGVtQWxlcnQge1xuLy8gICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4vLyB9XG4vLyAuYmRnQWxlcnRzIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNjtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHRvcDogLTZweDtcbi8vICAgcmlnaHQ6IC0ycHg7XG4vLyAgIGZvbnQtc2l6ZTogOXB4O1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICBwYWRkaW5nOiA0cHggNnB4O1xuLy8gfVxuLy8gLmljbkFsZXJ0cyB7XG4vLyAgIGhlaWdodDogMjBweDtcbi8vICAgd2lkdGg6IDIwcHg7XG4vLyB9XG4vLyAubGJsQWxlcnRzIHtcbi8vICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuLy8gfVxuLy8gLm1lbnVBbm5vdW5jZW1lbnRUb2dnbGUge1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGhlaWdodDogMThweDtcbi8vICAgd2lkdGg6IDE4cHg7XG4vLyAgIHBhZGRpbmctdG9wOiAzcHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICBjb2xvcjogIzUxNEI0Qjtcbi8vIH1cbi8vIC5jYXJkQW5ub3VuY2VtZW50U21hbGwge1xuLy8gICBtYXJnaW46IDEwcHggMTVweDtcbi8vICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjQTVBNUE1O1xuLy8gfVxuLy8gLmNhcmRBbm5vdW5jZW1lbnQge1xuLy8gICBtYXJnaW46IDEwcHggMTVweDtcbi8vICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuLy8gfVxuLy8gLmRpdkFubm91bmNlbWVudEhlYWRlciB7XG4vLyAgIGNvbG9yOiAjNTE0QjRCO1xuLy8gICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweCAxNXB4O1xuLy8gICAtLWJhY2tncm91bmQ6ICNBNUE1QTU7XG4vLyB9XG4vLyAuaGVhZEFubm91bmNlIHtcbi8vICAgY29sb3I6ICMyYTJhMmE7XG4vLyAgIHBhZGRpbmc6IDEwcHggMTBweCAwIDEwcHg7XG4vLyB9XG4vLyAuaWNuQW5ub3VuY2Uge1xuLy8gICBoZWlnaHQ6IDIwcHg7XG4vLyAgIHdpZHRoOiAyMHB4O1xuLy8gfVxuLy8gLmxibEFubm91bmNlIHtcbi8vICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuLy8gfVxuLy8gLmNvbnRlbnRBbm5vdW5jZSB7XG4vLyAgIGNvbG9yOiAjMmEyYTJhO1xuLy8gICBwYWRkaW5nOiAxNXB4O1xuLy8gICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbi8vIH1cbi8vIC5sYmxUaXRsZSB7XG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG4vLyAubGJsRGV0YWlscyB7XG4vLyAgIGZvbnQtc2l6ZTogMTJweDtcbi8vIH1cbi8vIC5hbGVydE1lc3NhZ2Uge1xuLy8gICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbi8vIH1cbi8vIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0IHtcbi8vICAgMCUge1xuLy8gICAgIG9wYWNpdHk6IDE7XG4vLyAgIH1cbi8vICAgOTAlIHtcbi8vICAgICBvcGFjaXR5OiAwLjAyO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgfVxuLy8gICA5OSUge1xuLy8gICAgIG9wYWNpdHk6IDAuMDE7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiA1MCU7XG4vLyAgIH1cbi8vICAgMTAwJSB7XG4vLyAgICAgb3BhY2l0eTogMDtcbi8vICAgICB3aWR0aDogMDtcbi8vICAgICBoZWlnaHQ6IDA7XG4vLyAgIH1cbi8vIH1cbi8vIEBrZXlmcmFtZXMgZmFkZU91dCB7XG4vLyAgIDAlIHtcbi8vICAgICBvcGFjaXR5OiAxO1xuLy8gICB9XG4vLyAgIDkwJSB7XG4vLyAgICAgb3BhY2l0eTogMC4wMjtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgIH1cbi8vICAgOTklIHtcbi8vICAgICBvcGFjaXR5OiAwLjAxO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogNTAlO1xuLy8gICB9XG4vLyAgIDEwMCUge1xuLy8gICAgIG9wYWNpdHk6IDA7XG4vLyAgICAgd2lkdGg6IDA7XG4vLyAgICAgaGVpZ2h0OiAwO1xuLy8gICB9XG4vLyB9XG4vLyBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbi8vICAgMCUge1xuLy8gICAgIG9wYWNpdHk6IDA7XG4vLyAgIH1cbi8vICAgMTAwJSB7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgIH1cbi8vIH1cbi8vIEBrZXlmcmFtZXMgZmFkZUluIHtcbi8vICAgMCUge1xuLy8gICAgIG9wYWNpdHk6IDA7XG4vLyAgIH1cbi8vICAgMTAwJSB7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgIH1cbi8vIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzU1OEIyRiwgIzU1OEIyRik7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1taW4taGVpZ2h0OiAzNXB4O1xuICAtLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdG9wOiAwJTtcbn1cblxuaW9uLXNsaWRlID4gOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxuLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2SGVsbG8ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sYmxXZWxjb21lIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5sYmxOYW1lIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5pY25Ub2RheSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubGJsVG9kYXkge1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uYnRuVGltZUluIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA1NXB4IDEwcHggMHB4IDBweDtcbiAgLS1ib3gtc2hhZG93OiAxcHggMXB4IDEwcHggZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYm94LXNoYWRvdzogMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwKSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmJ0blRpbWVJbjgge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzk5OTkwMCwgI0IzQjMwMCk7XG59XG5cbi5idG5UaW1lSW45IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxNzc3QjMsICMxRTk2RTEpO1xufVxuXG4uYnRuVGltZUluMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0IzNEQ4QSwgI0NDNTg5RCk7XG59XG5cbi5idG5UaW1lSW5MYXRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNCMzRENEQsICNEMjVBNUEpO1xufVxuXG4uYnRuVGltZUluRGVmYXVsdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjODA4MDgwLCAjOTk5OTk5KTtcbn1cblxuLmJ0blRpbWVJbkxvYWRpbmcge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDU1cHggMTBweCAwcHggMHB4O1xuICAtLWJveC1zaGFkb3c6IDFweCAxcHggMTBweCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzgwODA4MCwgIzk5OTk5OSk7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMCksIDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5kaXZUaW1lSW4ge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuLmljbkNsb2NrZWRJbiB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogN3B4O1xuICB0b3A6IDVweDtcbn1cblxuLmxibFRpbWVJbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbiAgbWFyZ2luOiA3cHggMTNweCAwcHggMHB4O1xufVxuXG4ubGJsVGltZUluTGJsIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiAwcHggMjRweCAwcHggMHB4O1xufVxuXG4uZGl2TG9hZGluZ1RpbWVJbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zcGlubmVyVGltZUluIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5sYmxMb2FkaW5nVGltZUluIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMTJweCAwIDAgOXB4O1xufVxuXG4uZGl2VGl0bGVJdGVtIHtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZGl2R0FCQ0l0ZW0ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5sYmxUaXRsZUl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2dtdEFsZXJ0cyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2FyZEFsZXJ0cyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMDVweDtcbiAgbWFyZ2luOiAxMHB4IDVweCAxMHB4IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWxlcnRMZWF2ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICM0NTY4ZGMsICM5QzI3QjApO1xufVxuXG4uYWxlcnRBZHZpc29yeSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNBRDUwNDgsICM5MTQ0M0QpO1xufVxuXG4uYWxlcnRPdmVydGltZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNFRjQ2NTYsICNEOTQ3MzQpO1xufVxuXG4uYWxlcnRXRkgge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjRjQ0MzM2LCAjRjQ0MzM2KTtcbn1cblxuLmFsZXJ0V0ZIQXBwcm92YWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjRDNBODI4LCAjRDNBODI4KTtcbn1cblxuLmFsZXJ0TGVhdmVBcHByb3ZhbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNFNzdDMkEsICNGNTNFMjApO1xufVxuXG4uYWxlcnRBZHZpc29yeUFwcHJvdmFsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzAwOTY4OCwgIzAwN0E2RSk7XG59XG5cbi5hbGVydE92ZXJ0aW1lQXBwcm92YWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjMjVCRkNELCAjMUZBMkFEKTtcbn1cblxuLmRpdkFsZXJ0SWNvbiB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW1nQWxlcnRJY29uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmxibEFsZXJ0Q291bnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmxibEFsZXJ0TmFtZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uY2FyZFN1Ym9yZGluYXRlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNhcmRTdWJvcmRpbmF0ZUxvYWRpbmcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi5saXN0U3Vib3JkaW5hdGUge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtU3Vib3JkaW5hdGUge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG59XG5cbi5pdGVtU3Vib3JkaW5hdGVMb2FkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi5pY25TdWJvcmRpbmF0ZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjNjE2MzZCO1xufVxuXG4ubGJsU3Vib3JkaW5hdGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4ubGJsU3Vib3JkaW5hdGVOYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubGJsU3Vib3JkaW5hdGVQb3NpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2MTYzNkI7XG59XG5cbi5ldmVudEltYWdlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5kaXZFdmVudCB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZEYXRlIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uRGF0ZU1vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5EYXRlRGF0ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICM1QzVDNUM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5FdmVudHNUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvQm9sZFwiO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5FdmVudHNMb2Mge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5sYmxFdmVudHMge1xuICBtYXJnaW46IDBweCAwcHggMHB4IDQwcHg7XG59XG5cbi5jYXJkSGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uY2FyZENvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zbGlkZUFubm91bmNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmRBbm5vdW5jZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1iYXNpczogYXV0bztcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWluLWhlaWdodDogNzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50QW5ub3VuY2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweDtcbiAgZmxleC1iYXNpczogYXV0bztcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5sYmxBbm5vdW5jZW1lbnRUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5sYmxBbm5vdW5jZW1lbnREZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5jYXJkUHJvZ3Jlc3NiYXIge1xuICBtYXJnaW46IDBweCAyMHB4O1xufVxuXG4uY2FyZEdBQkMge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICM1NDMzRkYsICMyMEJERkYpO1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzQ1NjhkYywgI2IwNmFiMyk7XG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzMxNDc1NSwgIzI2YTBkYSk7XG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjY2MyYjVlLCAjNzUzYTg4KTtcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMTA4ZGM3LCAjZWY4ZTM4KTtcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjNjdCMjZGLCAjNGNhMmNkKTtcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sICMxNmJmZmQsICMxOTU0N2IpO1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyNyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgI2ZmNTEyZiwgI2RkMjQ3Nik7XG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXI4IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgYm90dG9tLCAjZjk1M2M2LCAjYjkxZDczKTtcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICNmZjVmNmQsICNFODk4NUEpO1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjZTk2NDQzLCAjOTA0ZTk1KTtcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjExIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzAwRDNFQiwgIzAyQzk3Nyk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NHB4KSB7XG4gIC5iZ1RvcCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmdcIikgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIHRvcDogLTEzMHB4O1xuICB9XG5cbiAgLmJnQm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZ1wiKSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDA7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgYm90dG9tOiAtMzAlO1xuICAgIGxlZnQ6IC0zMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xuICAuYmdUb3Age1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nXCIpICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICB0b3A6IC0yMyU7XG4gIH1cblxuICAuYmdCb3R0b20ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nXCIpICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBib3R0b206IC0zMCU7XG4gICAgbGVmdDogLTMwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5iZ1RvcCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmdcIikgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMjUlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IC00MCU7XG4gIH1cblxuICAuYmdCb3R0b20ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nXCIpICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBib3R0b206IC0zMCU7XG4gICAgbGVmdDogLTUwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5iZ1RvcCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmdcIikgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzUlO1xuICAgIHRvcDogLTI1JTtcbiAgfVxuXG4gIC5iZ0JvdHRvbSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmdcIikgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIGJvdHRvbTogLTMwJTtcbiAgICBsZWZ0OiAtNTAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");








var HomePage = /** @class */ (function () {
    function HomePage(loginService, menuCtrl, storage, alertController, router, httpApi) {
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.alertController = alertController;
        this.router = router;
        this.httpApi = httpApi;
        this.welcomeArr = ["Hi,", "Hello,", "Welcome,", "Have a nice day,"];
        this.randomArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
        this.loadingTimeIn = false;
        this.loadingAlert = false;
        this.loadingAnnouncement = false;
        this.loadingEvent = false;
        this.loadingSubordinate = false;
        this.loadingDone = false;
        this.noError = true;
        this.nickname = "ツ";
        this.classTimeIn = "btnTimeIn btnTimeInDefault";
        this.lblClockedInStatus = "LOADING CLOCK IN...";
        this.lblSubordinatesStatus = "LOADING SUBORDINATES...";
        this.lblAlertsStatus = "LOADING ALERTS...";
        this.lblAnnouncementsStatus = "LOADING ANNOUNCEMENTS...";
        this.lblEventsStatus = "LOADING EVENTS...";
        this.clickedClockedIn = true;
        this.clickedAlerts = true;
        this.clickedAnnounce = false;
        this.clickedSubordinate = false;
        this.clickedGabcPreview = false;
        this.clickedGabcMission = false;
        this.clickedGabcCreed = false;
        this.subIsEmpty = false;
        this.slideOptsEvents = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: {
                disableOnInteraction: false
            },
            setWrapperSize: true,
            loop: true
        };
        this.slideOptsMany = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: {
                disableOnInteraction: false
            },
            loop: true,
            setWrapperSize: true
        };
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.noError = true;
        this.loadingTimeIn = false;
        this.loadingAlert = false;
        this.loadingAnnouncement = false;
        this.loadingEvent = false;
        this.loadingSubordinate = false;
        this.loadingDone = false;
        if (new Date().getHours() <= 12)
            this.welcomeArr.push("Good Morning,");
        else if (new Date().getHours() >= 13 && new Date().getHours() <= 17)
            this.welcomeArr.push("Good Afternoon,");
        else
            this.welcomeArr.push("Good Evening,");
        this.welcome = this.welcomeArr[Math.floor(Math.random() * this.welcomeArr.length)].toString();
        this.lblClockedInStatus = "LOADING CLOCK IN...";
        this.lblSubordinatesStatus = "LOADING SUBORDINATES...";
        this.lblAlertsStatus = "LOADING ALERTS...";
        this.lblAnnouncementsStatus = "LOADING ANNOUNCEMENTS...";
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        var CurrentDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.today = CurrentMonth[new Date().getMonth()] + " " + new Date().getDate();
        this.day = CurrentDay[new Date().getDay()] + ", " + this.today;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_ISFIRSTTIME"]).then(function (val) {
            console.log(val);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (val) {
                console.log(val);
                if (!val || val == null) {
                    console.log("Set Default Server Settings");
                    _this.setDefaultServerSettings();
                }
            });
        });
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_ISFIRSTTIME"], false);
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_EMPDETAILS"]).then(function (val) {
            console.log(val);
            _this.name = val['0']['FULLNAME'];
            _this.firstname = _this.trimFirstName(val['0']['FULLNAME'].split(",")[1]);
            _this.nickname = val['0']['NICKNAME'];
            _this.department = val['0']['DEPARTMENT'];
            _this.isManager = val['0']['ISMANAGER'];
        });
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_EMPID"]).then(function (val2) {
            _this.empID = val2;
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SESSION"]).then(function (val) {
                _this.postRequest = {
                    SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_TOKEN"]],
                    AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["VERSION"],
                    UserID: _this.empID
                };
                _this.getDTR();
                _this.getSubordinatesLeaves();
                _this.getAlerts();
                _this.getAnnouncement();
                _this.getEvents();
                // this.lblEventsStatus = "NO EVENT";
                //this.loadingTimeIn = true;
                //this.lblClockedInStatus = "CLOCKED IN";
                //this.clockedIn = "09:46 AM"
            });
        });
    };
    HomePage.prototype.setDefaultServerSettings = function () {
        var server_settings = {
            is_server_domain: true,
            is_server_default: false,
            is_server_dev: false,
            is_server_set_url: false,
            server_url: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["API_ENDPOINT_DOMAIN"],
        };
        console.log(server_settings);
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"], server_settings).then(function (result) {
            console.log('Default Server Settings saved');
        }).catch(function (e) {
            console.log('Error saving default settings');
        });
    };
    HomePage.prototype.trimFirstName = function (fname) {
        var capFirstname;
        var splitFname = fname.split(" ");
        for (var i = 0; i <= splitFname.length; i++) {
            if (splitFname[i] == "") {
                splitFname.splice(i, 1);
            }
        }
        if (splitFname.length >= 2) {
            capFirstname = splitFname[0] + " " + splitFname[1];
        }
        else {
            capFirstname = fname;
        }
        return capFirstname;
    };
    HomePage.prototype.getDTR = function () {
        var _this = this;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
            var uri = value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISHomePage/GetClockIn";
            var url = encodeURI(uri);
            _this.httpApi.post(url, _this.postRequest, {})
                .then(function (data) {
                if (data.data == null || data.data == undefined) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingTimeIn = true;
                    return;
                }
                var jsonData = JSON.parse(data.data);
                if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingTimeIn = true;
                    return;
                }
                if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                    switch (jsonData['Message']) {
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                            return;
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingTimeIn = true;
                    return;
                }
                console.log(jsonData['Value']);
                if (jsonData['Value'].length != 0) {
                    _this.lblClockedInStatus = "YOU CLOCKED IN TODAY AT ";
                    _this.clockedIn = jsonData['Value']['0']['am_in'];
                    var timein = _this.clockedIn.substring(0, _this.clockedIn.length - 2).split(':');
                    var timeinAM = _this.clockedIn.substring(_this.clockedIn.length - 2, _this.clockedIn.length);
                    console.log(timein);
                    console.log(timeinAM);
                    if (timeinAM == "AM" && (parseInt(timein[0]) <= 7 || (parseInt(timein[0]) == 8 && parseInt(timein[1]) == 0))) {
                        _this.classTimeIn = "btnTimeIn btnTimeIn8";
                    }
                    else if (timeinAM == "AM" && ((parseInt(timein[0]) <= 8 && parseInt(timein[1]) < 60) || (parseInt(timein[0]) == 9 && parseInt(timein[1]) == 0))) {
                        _this.classTimeIn = "btnTimeIn btnTimeIn9";
                    }
                    else if (timeinAM == "AM" && ((parseInt(timein[0]) <= 9 && parseInt(timein[1]) < 60) || (parseInt(timein[0]) == 10 && parseInt(timein[1]) == 0))) {
                        _this.classTimeIn = "btnTimeIn btnTimeIn10";
                    }
                    else if (timeinAM == "AM" && ((parseInt(timein[0]) == 10 && parseInt(timein[1]) > 0) || (parseInt(timein[0]) == 11))) {
                        _this.classTimeIn = "btnTimeIn btnTimeInLate";
                    }
                    else {
                        _this.classTimeIn = "btnTimeIn btnTimeInDefault";
                    }
                }
                else {
                    _this.lblClockedInStatus = "NO CLOCKED IN";
                }
                _this.noError = true;
                _this.loadingTimeIn = true;
            })
                .catch(function (error) {
                _this.lblClockedInStatus = "NO CLOCKED IN";
                _this.noError = false;
                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                _this.loadingTimeIn = true;
            });
        });
    };
    HomePage.prototype.getAlerts = function () {
        var _this = this;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
            _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISHomePage/GetAlerts", _this.postRequest, {})
                .then(function (data) {
                if (data.data == null || data.data == undefined) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingAlert = true;
                    return;
                }
                var jsonData = JSON.parse(data.data);
                console.log(jsonData);
                if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingAlert = true;
                    return;
                }
                if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                    switch (jsonData['Message']) {
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                            return;
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingAlert = true;
                    return;
                }
                _this.alerts = jsonData['Value'];
                console.log(_this.alerts);
                _this.alerts.forEach(function (item) {
                    if (item["POSITION"] == "4") {
                        item["Icon"] = "/assets/icon/ic_al_lv.png";
                        item["Mode"] = "md";
                        item["RouterLink"] = "/main/leavecredits";
                        item["Name"] = "Leave Request";
                        item["Class"] = "alertLeave";
                    }
                    else if (item["POSITION"] == "5") {
                        item["Icon"] = "/assets/icon/ic_al_lvap.png";
                        item["Mode"] = "md";
                        item["RouterLink"] = "/main/leaveapproval";
                        item["Name"] = "Leave Approval";
                        item["Class"] = "alertLeaveApproval";
                    }
                    else if (item["POSITION"] == "6") {
                        item["Icon"] = "/assets/icon/ic_al_aa.png";
                        item["Mode"] = "md";
                        item["RouterLink"] = "/main/advisory";
                        item["Name"] = "Advisory Request";
                        item["Class"] = "alertAdvisory";
                    }
                    else if (item["POSITION"] == "7") {
                        item["Icon"] = "/assets/icon/ic_al_aaap.png";
                        item["Mode"] = "ios";
                        item["RouterLink"] = "/main/advisoryapproval";
                        item["Name"] = "Advisory Approval";
                        item["Class"] = "alertAdvisoryApproval";
                    }
                    else if (item["POSITION"] == "16") {
                        item["Icon"] = "/assets/icon/ic_alert_wfh_ap.png";
                        item["Mode"] = "ios";
                        item["RouterLink"] = "/main/wfhapproval";
                        item["Name"] = "WFH Approval";
                        item["Class"] = "alertWFHApproval";
                    }
                    else if (item["POSITION"] == "17") {
                        item["Icon"] = "/assets/icon/ic_alert_wfh.png";
                        item["Mode"] = "md";
                        item["RouterLink"] = "/main/workfromhome";
                        item["Name"] = "WFH Request";
                        item["Class"] = "alertWFH";
                    }
                    else if (item["POSITION"] == "8") {
                        item["Icon"] = "/assets/icon/ic_al_ot.png";
                        item["Mode"] = "md";
                        item["RouterLink"] = "/main/overtime";
                        item["Name"] = "Overtime Request";
                        item["Class"] = "alertOvertime";
                    }
                    else if (item["POSITION"] == "9") {
                        item["Icon"] = "/assets/icon/ic_al_otap.png";
                        item["Mode"] = "md";
                        item["RouterLink"] = "/main/overtimeapproval";
                        item["Name"] = "Overtime Approval";
                        item["Class"] = "alertOvertimeApproval";
                    }
                });
                console.log(_this.alerts);
                if (_this.alerts == undefined || _this.alerts == null)
                    _this.lblAlertsStatus = "NO ALERTS";
                else {
                    if (_this.alerts.length == 0)
                        _this.lblAlertsStatus = "NO ALERTS";
                    else
                        _this.lblAlertsStatus = "ALERTS";
                }
                _this.noError = true;
                _this.loadingAlert = true;
            })
                .catch(function (error) {
                _this.lblAlertsStatus = "NO ALERTS";
                _this.noError = false;
                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                _this.loadingAlert = true;
            });
        });
    };
    HomePage.prototype.getAnnouncement = function () {
        var _this = this;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
            _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISHomePage/GetAnnouncement", _this.postRequest, {})
                .then(function (data) {
                if (data.data == null || data.data == undefined) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingAnnouncement = true;
                    return;
                }
                var jsonData = JSON.parse(data.data);
                if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingAnnouncement = true;
                    return;
                }
                if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                    switch (jsonData['Message']) {
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                            return;
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingAnnouncement = true;
                    return;
                }
                if (jsonData['Value'].length > 0)
                    _this.lblAnnouncementsStatus = "ANNOUNCEMENTS";
                else
                    _this.lblAnnouncementsStatus = "NO ANNOUNCEMENTS";
                _this.announcement = jsonData['Value'];
                _this.announcement = _this.announcement.filter(function (item) { return _this.trimText(item["Title"]) != "Our Purpose" && _this.trimText(item["Title"]) != "The GABC Creed"; });
                _this.announcement.forEach(function (item) {
                    if (_this.randomArr.length <= 1) {
                        _this.randomArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
                    }
                    var num = Math.floor(Math.random() * _this.randomArr.length);
                    item["Number"] = _this.randomArr[num];
                    _this.randomArr.splice(num, 1);
                });
                console.log(_this.announcement);
                _this.noError = true;
                _this.loadingDone = true;
                _this.loadingAnnouncement = true;
                _this.clickedAnnounce = !_this.clickedAnnounce;
            })
                .catch(function (error) {
                _this.lblAnnouncementsStatus = "ANNOUNCEMENTS";
                _this.noError = false;
                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                _this.loadingDone = true;
                _this.loadingAnnouncement = true;
            });
        });
    };
    HomePage.prototype.getSubordinatesLeaves = function () {
        var _this = this;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
            _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISHomePage/GetSubordinatesOnLeave", _this.postRequest, {})
                .then(function (data) {
                if (data.data == null || data.data == undefined) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingSubordinate = true;
                    return;
                }
                var jsonData = JSON.parse(data.data);
                console.log(jsonData);
                if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingSubordinate = true;
                    return;
                }
                if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                    switch (jsonData['Message']) {
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                            return;
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingSubordinate = true;
                    return;
                }
                _this.noError = true;
                _this.subOnLeave = jsonData['Value'];
                _this.loadingDone = true;
                _this.loadingSubordinate = true;
                _this.lblSubordinatesStatus = _this.subOnLeave.length + " SUBORDINATES ON LEAVE TODAY";
                _this.subIsEmpty = _this.subOnLeave.length < 1;
            })
                .catch(function (error) {
                console.log(error);
                _this.subIsEmpty = true;
                _this.lblSubordinatesStatus = "0 SUBORDINATES ON LEAVE TODAY";
                _this.noError = false;
                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                _this.loadingDone = true;
                _this.loadingSubordinate = true;
            });
        });
    };
    HomePage.prototype.getEvents = function () {
        var _this = this;
        this.postRequest["IsActive"] = 1;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
            _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/event/GetEvents", _this.postRequest, {})
                .then(function (data) {
                if (data.data == null || data.data == undefined) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.lblEventsStatus = "NO EVENT";
                    _this.loadingDone = true;
                    _this.loadingEvent = true;
                    return;
                }
                var jsonData = JSON.parse(data.data);
                console.log(jsonData);
                if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                    _this.loadingEvent = true;
                    _this.lblEventsStatus = "NO EVENT";
                    return;
                }
                if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                    switch (jsonData['Message']) {
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                            _this.loadingEvent = true;
                            _this.lblEventsStatus = "NO EVENT";
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                            _this.loadingEvent = true;
                            _this.lblEventsStatus = "NO EVENT";
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                            _this.loadingEvent = true;
                            _this.lblEventsStatus = "NO EVENT";
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                            _this.loadingEvent = true;
                            _this.lblEventsStatus = "NO EVENT";
                            return;
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                    _this.loadingEvent = true;
                    _this.lblEventsStatus = "NO EVENT";
                    return;
                }
                if (jsonData['Value']['tblEventList'] == null || jsonData['Value']['tblEventList'] == undefined) {
                    _this.noError = false;
                    _this.errorMessage = "EMPTY";
                    _this.lblEventsStatus = "NO EVENT";
                    _this.loadingDone = true;
                    _this.loadingEvent = true;
                    return;
                }
                else if (jsonData['Value']['tblEventList'].length <= 0) {
                    _this.noError = false;
                    _this.errorMessage = "NO EVENTS";
                    _this.lblEventsStatus = "NO EVENT";
                    _this.loadingDone = true;
                    _this.loadingEvent = true;
                    return;
                }
                _this.noError = true;
                _this.events = jsonData['Value']['tblEventList'];
                if (_this.events.length > 1) {
                    _this.slideOptsEvents = {
                        initialSlide: 0,
                        slidesPerView: 1,
                        autoplay: {
                            disableOnInteraction: false
                        },
                        setWrapperSize: true,
                        loop: true
                    };
                }
                else {
                    _this.slideOptsEvents = {
                        initialSlide: 0,
                        slidesPerView: 1,
                        autoplay: {
                            disableOnInteraction: false
                        },
                        setWrapperSize: true,
                        loop: false
                    };
                }
                _this.loadingDone = true;
                _this.loadingEvent = true;
                _this.lblEventsStatus = "UPCOMING EVENTS";
            })
                .catch(function (error) {
                _this.noError = false;
                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                _this.loadingDone = true;
                _this.lblEventsStatus = "NO EVENT";
                _this.loadingEvent = true;
            });
        });
    };
    HomePage.prototype.showDialog = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            cssClass: "contentAnnounce",
                            buttons: [{
                                    text: 'Okay',
                                    handler: function () {
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
    HomePage.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    HomePage.prototype.removeExtraSpace = function (str) {
        return str.replace(/(\r\n|\n|\r)/gm, "");
    };
    HomePage.prototype.toggleClockedInSection = function () {
        this.clickedClockedIn = !this.clickedClockedIn;
    };
    HomePage.prototype.toggleAlertsSection = function () {
        this.clickedAlerts = !this.clickedAlerts;
    };
    HomePage.prototype.toggleAnnounceSection = function () {
        this.clickedAnnounce = !this.clickedAnnounce;
    };
    HomePage.prototype.toggleSubordinateSection = function () {
        this.clickedSubordinate = !this.clickedSubordinate;
    };
    HomePage.prototype.toggleGabcPreview = function () {
        this.clickedGabcPreview = !this.clickedGabcPreview;
    };
    HomePage.prototype.toggleGabcMission = function () {
        this.clickedGabcMission = !this.clickedGabcMission;
    };
    HomePage.prototype.toggleGabcCreed = function () {
        this.clickedGabcCreed = !this.clickedGabcCreed;
    };
    HomePage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    HomePage.prototype.showExitDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Exit HRIS',
                            message: 'Are you sure you want to exit HRIS?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Exit',
                                    handler: function () {
                                        navigator['HRIS'].exitApp();
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // refresh() {
    //   this.ngOnInit();
    // }
    HomePage.prototype.ionViewWillLeave = function () {
        this.showExitDialog();
    };
    HomePage.prototype.trimText = function (text) {
        return text.trim();
    };
    HomePage.prototype.toggleCard = function () {
        this.router.navigate(['/eventsdetails', 'natcon']);
    };
    HomePage.prototype.togglePersonalInfo = function () {
        this.router.navigate(['/main/personalinformation']);
    };
    HomePage.prototype.toggleCalendar = function () {
        this.router.navigate(['/main/calendar']);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map