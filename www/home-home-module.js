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

module.exports = "ion-content {\n  --background: linear-gradient(to right bottom, #558B2F, #558B2F);\n}\n\nion-toolbar {\n  --background: transparent;\n  --min-height: 35px;\n  --padding: 0px;\n  margin-top: 30px;\n  top: 0%;\n}\n\nion-slide > :first-child {\n  width: 100%;\n  margin-top: 10px;\n}\n\nion-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n}\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 0px !important;\n  left: 0;\n  width: 100%;\n}\n\n.divHello {\n  --background: rgba(255, 255, 255, 0);\n  width: 100%;\n  color: white;\n}\n\n.lblWelcome {\n  font-size: 21px;\n  margin-bottom: 0px;\n}\n\n.lblName {\n  font-size: 30px;\n  font-family: \"RobotoRegular\";\n}\n\n.icnToday {\n  height: 20px;\n  width: 20px;\n  margin-left: -25px;\n  position: absolute;\n}\n\n.lblToday {\n  font-size: 17px;\n  margin-top: 15px;\n  margin-left: 25px;\n}\n\n.btnTimeIn {\n  width: 110px;\n  height: 45px;\n  color: white;\n  margin: 55px 10px 0px 0px;\n  --box-shadow: 1px 1px 10px gray;\n  border-radius: 35px;\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0);\n}\n\n.btnTimeIn8 {\n  background-image: linear-gradient(to left, #999900, #B3B300);\n}\n\n.btnTimeIn9 {\n  background-image: linear-gradient(to left, #1777B3, #1E96E1);\n}\n\n.btnTimeIn10 {\n  background-image: linear-gradient(to left, #B34D8A, #CC589D);\n}\n\n.btnTimeInLate {\n  background-image: linear-gradient(to left, #B34D4D, #D25A5A);\n}\n\n.btnTimeInDefault {\n  background-image: linear-gradient(to left, #808080, #999999);\n}\n\n.btnTimeInLoading {\n  width: 110px;\n  height: 45px;\n  color: white;\n  margin: 55px 10px 0px 0px;\n  --box-shadow: 1px 1px 10px gray;\n  border-radius: 35px;\n  background-image: linear-gradient(to left, #808080, #999999);\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0);\n}\n\n.divTimeIn {\n  margin-left: 25px;\n}\n\n.icnClockedIn {\n  height: 35px;\n  width: 35px;\n  position: absolute;\n  left: 7px;\n  top: 5px;\n}\n\n.lblTimeIn {\n  font-size: 15px;\n  text-align: right;\n  font-family: \"RobotoRegular\";\n  margin: 7px 13px 0px 0px;\n}\n\n.lblTimeInLbl {\n  font-size: 11px;\n  text-align: right;\n  margin: 0px 24px 0px 0px;\n}\n\n.divLoadingTimeIn {\n  display: flex;\n}\n\n.spinnerTimeIn {\n  margin-top: 0px;\n  margin-left: 7px;\n  color: white;\n  width: 45px;\n  height: 45px;\n}\n\n.lblLoadingTimeIn {\n  font-size: 11px;\n  color: white;\n  margin: 12px 0 0 9px;\n}\n\n.divTitleItem {\n  margin: 10px 0px 0px 16px;\n  position: relative;\n  z-index: 1;\n}\n\n.divGABCItem {\n  margin-top: 0px;\n}\n\n.lblTitleItem {\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n  color: white;\n}\n\n.sgmtAlerts {\n  margin-left: 10px;\n}\n\n.cardAlerts {\n  height: 120px;\n  width: 105px;\n  margin: 10px 5px 10px 5px;\n  color: white;\n}\n\n.alertLeave {\n  background-image: linear-gradient(to right bottom, #4568dc, #9C27B0);\n}\n\n.alertAdvisory {\n  background-image: linear-gradient(to right bottom, #AD5048, #91443D);\n}\n\n.alertOvertime {\n  background-image: linear-gradient(to right bottom, #EF4656, #D94734);\n}\n\n.alertWFH {\n  background-image: linear-gradient(to right bottom, #F44336, #F44336);\n}\n\n.alertWFHApproval {\n  background-image: linear-gradient(to right bottom, #D3A828, #D3A828);\n}\n\n.alertLeaveApproval {\n  background-image: linear-gradient(to right bottom, #E77C2A, #F53E20);\n}\n\n.alertAdvisoryApproval {\n  background-image: linear-gradient(to right bottom, #009688, #007A6E);\n}\n\n.alertOvertimeApproval {\n  background-image: linear-gradient(to right bottom, #25BFCD, #1FA2AD);\n}\n\n.divAlertIcon {\n  text-align: -webkit-center;\n  margin-top: 10px;\n}\n\n.imgAlertIcon {\n  height: 50px;\n  width: 50px;\n}\n\n.lblAlertCount {\n  margin-top: 10px;\n  font-size: 22px;\n  font-family: \"RobotoRegular\";\n}\n\n.lblAlertName {\n  font-size: 11px;\n  font-family: \"RobotoRegular\";\n}\n\n.cardSubordinate {\n  margin-top: 10px;\n  z-index: 1;\n}\n\n.cardSubordinateLoading {\n  margin-top: 10px;\n  height: 120px;\n  --background: rgba(255, 255, 255, 0);\n}\n\n.listSubordinate {\n  border-radius: 10px !important;\n}\n\n.itemSubordinate {\n  --padding-start: 10px;\n}\n\n.itemSubordinateLoading {\n  --padding-start: 10px;\n  --background: rgba(255, 255, 255, 0);\n}\n\n.icnSubordinate {\n  width: 40px;\n  height: 40px;\n  color: #61636B;\n}\n\n.lblSubordinate {\n  margin-left: 10px;\n  font-family: \"RobotoRegular\";\n}\n\n.lblSubordinateName {\n  font-size: 16px;\n}\n\n.lblSubordinatePosition {\n  font-size: 13px;\n  color: #61636B;\n}\n\n.eventImage {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.divEvent {\n  height: 150px;\n  margin: 0px 20px;\n  border-radius: 10px;\n  z-index: 1;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divDate {\n  height: 70px;\n}\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.EventsTitle {\n  font-size: 15px;\n  font-family: \"RobotoBold\";\n  color: black;\n}\n\n.EventsLoc {\n  font-size: 13px;\n  color: #5C5C5C;\n  font-family: \"RobotoRegular\";\n}\n\n.lblEvents {\n  margin: 0px 0px 0px 40px;\n}\n\n.cardHeader {\n  padding: 0px;\n}\n\n.cardContent {\n  padding: 10px 5px 10px 0px;\n  background-color: white;\n}\n\n.slideAnnounce {\n  margin-bottom: 10px;\n}\n\n.cardAnnounce {\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  background: white;\n}\n\n.cardAnnounceHeader {\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding: 15px;\n  min-height: 70px;\n  justify-content: center;\n  align-items: center;\n}\n\n.contentAnnounce {\n  color: white;\n  padding: 0px;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n}\n\n.lblAnnouncementTitle {\n  font-size: 15px;\n  font-family: \"RobotoMedium\";\n  color: white;\n  margin: 0px;\n}\n\n.lblAnnouncementDetails {\n  font-size: 13px;\n  background: white;\n  min-height: 100%;\n  color: black;\n  padding: 15px;\n  font-family: \"RobotoRegular\";\n}\n\n.cardProgressbar {\n  margin: 0px 20px;\n}\n\n.cardGABC {\n  margin-bottom: 30px;\n}\n\n.cardAnnounceHeader0 {\n  background-image: linear-gradient(to top right, #5433FF, #20BDFF);\n}\n\n.cardAnnounceHeader1 {\n  background-image: linear-gradient(to bottom left, #4568dc, #b06ab3);\n}\n\n.cardAnnounceHeader2 {\n  background-image: linear-gradient(to top right, #314755, #26a0da);\n}\n\n.cardAnnounceHeader3 {\n  background-image: linear-gradient(to bottom left, #cc2b5e, #753a88);\n}\n\n.cardAnnounceHeader4 {\n  background-image: linear-gradient(to bottom right, #108dc7, #ef8e38);\n}\n\n.cardAnnounceHeader5 {\n  background-image: linear-gradient(to top right, #67B26F, #4ca2cd);\n}\n\n.cardAnnounceHeader6 {\n  background-image: linear-gradient(to left bottom, #16bffd, #19547b);\n}\n\n.cardAnnounceHeader7 {\n  background-image: linear-gradient(to top left, #ff512f, #dd2476);\n}\n\n.cardAnnounceHeader8 {\n  background-image: linear-gradient(to left bottom, #f953c6, #b91d73);\n}\n\n.cardAnnounceHeader9 {\n  background-image: linear-gradient(to left top, #ff5f6d, #E8985A);\n}\n\n.cardAnnounceHeader10 {\n  background-image: linear-gradient(to right bottom, #e96443, #904e95);\n}\n\n.cardAnnounceHeader11 {\n  background-image: linear-gradient(to right bottom, #00D3EB, #02C977);\n}\n\n@media screen and (max-width: 374px) {\n  .bgTop {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    top: -130px;\n  }\n  .bgBottom {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    bottom: -30%;\n    left: -30%;\n    transform: scaleX(-1);\n  }\n}\n\n@media screen and (min-width: 375px) {\n  .bgTop {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    top: -23%;\n  }\n  .bgBottom {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    bottom: -30%;\n    left: -30%;\n    transform: scaleX(-1);\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .bgTop {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 125%;\n    height: 100%;\n    top: -40%;\n  }\n  .bgBottom {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    bottom: -30%;\n    left: -50%;\n    transform: scaleX(-1);\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .bgTop {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 75%;\n    top: -25%;\n  }\n  .bgBottom {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    bottom: -30%;\n    left: -50%;\n    transform: scaleX(-1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUldvcmtpbmcyL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnRUFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksNEVBQUE7QUNBSjs7QURHQTs7O0VBR0ksc0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNFQUFBO0FDQUo7O0FER0E7RUFDSSw0REFBQTtBQ0FKOztBRElBO0VBQ0ksNERBQUE7QUNESjs7QURLQTtFQUNJLDREQUFBO0FDRko7O0FETUE7RUFDSSw0REFBQTtBQ0hKOztBRE9BO0VBQ0ksNERBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0VBQ0Esc0VBQUE7QUNKSjs7QURPQTtFQUNJLGlCQUFBO0FDSko7O0FET0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDSko7O0FET0E7RUFDSSxhQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNKSjs7QURPQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDSko7O0FET0E7RUFDSSxpQkFBQTtBQ0pKOztBRE9BO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUVJLG9FQUFBO0FDTEo7O0FEUUE7RUFFSSxvRUFBQTtBQ05KOztBRFNBO0VBRUksb0VBQUE7QUNQSjs7QURVQTtFQUVJLG9FQUFBO0FDUko7O0FEV0E7RUFDSSxvRUFBQTtBQ1JKOztBRFdBO0VBRUksb0VBQUE7QUNUSjs7QURZQTtFQUVJLG9FQUFBO0FDVko7O0FEYUE7RUFFSSxvRUFBQTtBQ1hKOztBRGNBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtBQ1hKOztBRGNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNYSjs7QURjQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDWEo7O0FEY0E7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUNYSjs7QURjQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ1hKOztBRGNBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUNYSjs7QURjQTtFQUNJLDhCQUFBO0FDWEo7O0FEY0E7RUFDSSxxQkFBQTtBQ1hKOztBRGNBO0VBQ0kscUJBQUE7RUFDQSxvQ0FBQTtBQ1hKOztBRGNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDWEo7O0FEY0E7RUFDSSxpQkFBQTtFQUNBLDRCQUFBO0FDWEo7O0FEY0E7RUFDSSxlQUFBO0FDWEo7O0FEY0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1hKOztBRGNBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNYSjs7QURjQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0FDWEo7O0FEY0E7RUFDSSxZQUFBO0FDWEo7O0FEY0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWEo7O0FEY0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1hKOztBRGNBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1hKOztBRGNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ1hKOztBRGNBO0VBQ0ksd0JBQUE7QUNYSjs7QURjQTtFQUNJLFlBQUE7QUNYSjs7QURjQTtFQUNJLDBCQUFBO0VBQ0EsdUJBQUE7QUNYSjs7QURjQTtFQUNJLG1CQUFBO0FDWEo7O0FEY0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNYSjs7QURjQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1hKOztBRGNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ1hKOztBRGNBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNYSjs7QURjQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQ1hKOztBRGNBO0VBQ0ksZ0JBQUE7QUNYSjs7QURjQTtFQUNJLG1CQUFBO0FDWEo7O0FEY0E7RUFDSSxpRUFBQTtBQ1hKOztBRGNBO0VBQ0ksbUVBQUE7QUNYSjs7QURjQTtFQUNJLGlFQUFBO0FDWEo7O0FEY0E7RUFDSSxtRUFBQTtBQ1hKOztBRGNBO0VBQ0ksb0VBQUE7QUNYSjs7QURjQTtFQUNJLGlFQUFBO0FDWEo7O0FEY0E7RUFDSSxtRUFBQTtBQ1hKOztBRGNBO0VBQ0ksZ0VBQUE7QUNYSjs7QURjQTtFQUNJLG1FQUFBO0FDWEo7O0FEY0E7RUFDSSxnRUFBQTtBQ1hKOztBRGNBO0VBQ0ksb0VBQUE7QUNYSjs7QURjQTtFQUNJLG9FQUFBO0FDWEo7O0FEY0E7RUFDSTtJQUNJLG1EQUFBO0lBQ0EsVUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUNYTjtFRGFFO0lBQ0ksbURBQUE7SUFDQSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxxQkFBQTtFQ1hOO0FBQ0Y7O0FEY0E7RUFDSTtJQUNJLG1EQUFBO0lBQ0EsVUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7RUNaTjtFRGNFO0lBQ0ksbURBQUE7SUFDQSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxxQkFBQTtFQ1pOO0FBQ0Y7O0FEZUE7RUFDSTtJQUNJLG1EQUFBO0lBQ0EsVUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7RUNiTjtFRGVFO0lBQ0ksbURBQUE7SUFDQSxVQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxxQkFBQTtFQ2JOO0FBQ0Y7O0FEZ0JBO0VBQ0k7SUFDSSxtREFBQTtJQUNBLFVBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0VDZE47RURnQkU7SUFDSSxtREFBQTtJQUNBLFVBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLHFCQUFBO0VDZE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLy8tLWJhY2tncm91bmQ6ICM1NThCMkY7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjNTU4QjJGLCAjNTU4QjJGKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1taW4taGVpZ2h0OiAzNXB4O1xuICAgIC0tcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgdG9wOiAwJTtcbn1cblxuaW9uLXNsaWRlPjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbixcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgICBib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXZIZWxsbyB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxibFdlbGNvbWUge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5sYmxOYW1lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uaWNuVG9kYXkge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubGJsVG9kYXkge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uYnRuVGltZUluIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDU1cHggMTBweCAwcHggMHB4O1xuICAgIC0tYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBib3gtc2hhZG93OiAwIDBweCAwcHggMCByZ2JhKDAsIDAsIDAsIDApLCAwIDBweCAwcHggMCByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uYnRuVGltZUluOCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM5OTk5MDAsICNCM0IzMDApO1xuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBjbG9zZXN0LXNpZGUgYXQgMjIlLCByZ2JhKDIyMCwgMjIwLCAwLCAwLjUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkpO1xufVxuXG4uYnRuVGltZUluOSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxNzc3QjMsICMxRTk2RTEpO1xuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBjbG9zZXN0LXNpZGUgYXQgMjIlLCAjMUU5NkUxLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkpXG59XG5cbi5idG5UaW1lSW4xMCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNCMzREOEEsICNDQzU4OUQpO1xuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBjbG9zZXN0LXNpZGUgYXQgMjIlLCByZ2JhKDIzMiwgMSwgMTAyLCAwLjUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkpXG59XG5cbi5idG5UaW1lSW5MYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0IzNEQ0RCwgI0QyNUE1QSk7XG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGNsb3Nlc3Qtc2lkZSBhdCAyMiUsICNGRjAwMDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSlcbn1cblxuLmJ0blRpbWVJbkRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjODA4MDgwLCAjOTk5OTk5KTtcbn1cblxuLmJ0blRpbWVJbkxvYWRpbmcge1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogNTVweCAxMHB4IDBweCAwcHg7XG4gICAgLS1ib3gtc2hhZG93OiAxcHggMXB4IDEwcHggZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjODA4MDgwLCAjOTk5OTk5KTtcbiAgICBib3gtc2hhZG93OiAwIDBweCAwcHggMCByZ2JhKDAsIDAsIDAsIDApLCAwIDBweCAwcHggMCByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uZGl2VGltZUluIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuLmljbkNsb2NrZWRJbiB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA3cHg7XG4gICAgdG9wOiA1cHg7XG59XG5cbi5sYmxUaW1lSW4ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG4gICAgbWFyZ2luOiA3cHggMTNweCAwcHggMHB4O1xufVxuXG4ubGJsVGltZUluTGJsIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luOiAwcHggMjRweCAwcHggMHB4O1xufVxuXG4uZGl2TG9hZGluZ1RpbWVJbiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnNwaW5uZXJUaW1lSW4ge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5sYmxMb2FkaW5nVGltZUluIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMTJweCAwIDAgOXB4O1xufVxuXG4uZGl2VGl0bGVJdGVtIHtcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAxNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uZGl2R0FCQ0l0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmxibFRpdGxlSXRlbSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZ210QWxlcnRzIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNhcmRBbGVydHMge1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDEwNXB4O1xuICAgIG1hcmdpbjogMTBweCA1cHggMTBweCA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWxlcnRMZWF2ZSB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjOUMyN0IwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICM0NTY4ZGMsICM5QzI3QjApO1xufVxuXG4uYWxlcnRBZHZpc29yeSB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMTQ1NTcwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNBRDUwNDgsICM5MTQ0M0QpO1xufVxuXG4uYWxlcnRPdmVydGltZSB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjRUY0NjU2O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNFRjQ2NTYsICNEOTQ3MzQpO1xufVxuXG4uYWxlcnRXRkgge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyNUJGQ0Q7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI0Y0NDMzNiwgI0Y0NDMzNik7XG59XG5cbi5hbGVydFdGSEFwcHJvdmFsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjRDNBODI4LCAjRDNBODI4KTtcbn1cblxuLmFsZXJ0TGVhdmVBcHByb3ZhbCB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjRTc3QzJBO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNFNzdDMkEsICNGNTNFMjApO1xufVxuXG4uYWxlcnRBZHZpc29yeUFwcHJvdmFsIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzAwOTY4OCwgIzAwN0E2RSk7XG59XG5cbi5hbGVydE92ZXJ0aW1lQXBwcm92YWwge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyNUJGQ0Q7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzI1QkZDRCwgIzFGQTJBRCk7XG59XG5cbi5kaXZBbGVydEljb24ge1xuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pbWdBbGVydEljb24ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuLmxibEFsZXJ0Q291bnQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmxibEFsZXJ0TmFtZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmNhcmRTdWJvcmRpbmF0ZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uY2FyZFN1Ym9yZGluYXRlTG9hZGluZyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLmxpc3RTdWJvcmRpbmF0ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbVN1Ym9yZGluYXRlIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG59XG5cbi5pdGVtU3Vib3JkaW5hdGVMb2FkaW5nIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG4uaWNuU3Vib3JkaW5hdGUge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjb2xvcjogIzYxNjM2Qjtcbn1cblxuLmxibFN1Ym9yZGluYXRlIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5sYmxTdWJvcmRpbmF0ZU5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxibFN1Ym9yZGluYXRlUG9zaXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzYxNjM2Qjtcbn1cblxuLmV2ZW50SW1hZ2Uge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5kaXZFdmVudCB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uZGl2RGF0ZSB7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uRGF0ZU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogMjBweFxufVxuXG4uRGF0ZURhdGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzVDNUM1QztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uRXZlbnRzVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9Cb2xkXCI7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uRXZlbnRzTG9jIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4ubGJsRXZlbnRzIHtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDQwcHg7XG59XG5cbi5jYXJkSGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jYXJkQ29udGVudCB7XG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zbGlkZUFubm91bmNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZEFubm91bmNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRBbm5vdW5jZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmxibEFubm91bmNlbWVudFRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ubGJsQW5ub3VuY2VtZW50RGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uY2FyZFByb2dyZXNzYmFyIHtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xufVxuXG4uY2FyZEdBQkMge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIwIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjNTQzM0ZGLCAjMjBCREZGKTsgLy9TZXh5IEJsdWVcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzQ1NjhkYywgI2IwNmFiMyk7IC8vdG9uaWdodFxufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyMiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzMxNDc1NSwgIzI2YTBkYSk7IC8vTWF1dmVcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgI2NjMmI1ZSwgIzc1M2E4OCk7IC8vUHVycGxlIFxufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyNCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzEwOGRjNywgI2VmOGUzOCk7IC8vVHJhbnF1aWwgXG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXI1IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjNjdCMjZGLCAjNGNhMmNkKTsgLy9CZWFjaFxufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyNiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgYm90dG9tLCAjMTZiZmZkLCAjMTk1NDdiKTsgLy9SaXZlclxufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyNyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCAjZmY1MTJmLCAjZGQyNDc2KTsgLy9CbG9vZHkgXG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXI4IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sICNmOTUzYzYsICNiOTFkNzMpOyAvL0R1c2tcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgI2ZmNWY2ZCwgI0U4OTg1QSk7IC8vT3JhbmdlIFxufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyMTAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNlOTY0NDMsICM5MDRlOTUpOyAvL1BlYWNoXG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIxMSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzAwRDNFQiwgIzAyQzk3Nyk7IC8vRGVjZW50IFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCkge1xuICAgIC5iZ1RvcCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgdG9wOiAtMTMwcHg7XG4gICAgfVxuICAgIC5iZ0JvdHRvbSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgYm90dG9tOiAtMzAlO1xuICAgICAgICBsZWZ0OiAtMzAlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xuICAgIC5iZ1RvcCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgdG9wOiAtMjMlO1xuICAgIH1cbiAgICAuYmdCb3R0b20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIGJvdHRvbTogLTMwJTtcbiAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAuYmdUb3Age1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTI1JTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IC00MCU7XG4gICAgfVxuICAgIC5iZ0JvdHRvbSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgYm90dG9tOiAtMzAlO1xuICAgICAgICBsZWZ0OiAtNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgIC5iZ1RvcCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDc1JTtcbiAgICAgICAgdG9wOiAtMjUlO1xuICAgIH1cbiAgICAuYmdCb3R0b20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIGJvdHRvbTogLTMwJTtcbiAgICAgICAgbGVmdDogLTUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIH1cbn1cblxuLy8gaW9uLWhlYWRlciB7XG4vLyAgIC0tYmFja2dyb3VuZDogIzU1OEIyRjtcbi8vIH1cbi8vIGlvbi10b29sYmFyIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgLS1taW4taGVpZ2h0OiAzNXB4O1xuLy8gICAtLXBhZGRpbmc6IDBweDtcbi8vICAgbWFyZ2luLXRvcDogMzBweDtcbi8vIH1cbi8vIGlvbi10aXRsZSB7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbi8vIH1cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjNTU4QjJGO1xuLy8gfVxuLy8gaW9uLWNhcmQtY29udGVudCB7XG4vLyAgIHBhZGRpbmc6IDBweCAwcHggMTVweCAwcHg7XG4vLyAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMC4zcztcbi8vICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcztcbi8vICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbi8vIH1cbi8vIC5jYXJkT2ZmIHtcbi8vICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXQgMC4zcztcbi8vICAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuM3M7XG4vLyAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4vLyB9XG4vLyAuY2FyZE9mZkFubm91bmNlIHtcbi8vICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXQgMC4zcztcbi8vICAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuM3M7XG4vLyAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4vLyB9XG4vLyAuYmdUb3Age1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbi8vICAgei1pbmRleDogMDtcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiA3MCU7XG4vLyAgIHRvcDogLTEzMHB4O1xuLy8gfVxuLy8gLmJnQm90dG9tIHtcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4vLyAgIHotaW5kZXg6IDA7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogNzAlO1xuLy8gICBib3R0b206IC0xMDBweDtcbi8vICAgbGVmdDogLTEwMHB4O1xuLy8gICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4vLyB9XG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xuLy8gICAuYmdUb3Age1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuLy8gICAgIHotaW5kZXg6IDA7XG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiA3MCU7XG4vLyAgICAgdG9wOiAtMTYwcHg7XG4vLyAgIH1cbi8vIH1cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4vLyAgIC5iZ1RvcCB7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4vLyAgICAgei1pbmRleDogMDtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDcwJTtcbi8vICAgICB0b3A6IC0xODBweDtcbi8vICAgfVxuLy8gICAuYmdCb3R0b20ge1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuLy8gICAgIHotaW5kZXg6IDA7XG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDcwJTtcbi8vICAgICBib3R0b206IC0xMDBweDtcbi8vICAgICBsZWZ0OiAtMTAwcHg7XG4vLyAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuLy8gICB9XG4vLyB9XG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuLy8gICAuYmdUb3Age1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuLy8gICAgIHotaW5kZXg6IDA7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAxMjUlO1xuLy8gICAgIGhlaWdodDogOTAlO1xuLy8gICAgIHRvcDogLTE3MHB4O1xuLy8gICAgIG1hcmdpbi10b3A6IC0xNjBweDtcbi8vICAgfVxuLy8gICAuYmdCb3R0b20ge1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuLy8gICAgIHotaW5kZXg6IDA7XG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDcwJTtcbi8vICAgICBib3R0b206IC0xMDBweDtcbi8vICAgICBsZWZ0OiAtMTUwcHg7XG4vLyAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuLy8gICB9XG4vLyB9XG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuLy8gICAuYmdUb3Age1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuLy8gICAgIHotaW5kZXg6IDA7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAxMjUlO1xuLy8gICAgIGhlaWdodDogNzAlO1xuLy8gICAgIHRvcDogLTE3MHB4O1xuLy8gICAgIG1hcmdpbi10b3A6IC0xNjBweDtcbi8vICAgfVxuLy8gfVxuLy8gLmJ0bk1lbnUge1xuLy8gICAtLXBhZGRpbmc6IDBweDtcbi8vIH1cbi8vIC5kaXZIZWxsbyB7XG4vLyAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbi8vIH1cbi8vIC5sYmxIZWxsbyB7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgdGV4dC1zaGFkb3c6IDFweCAycHggZGFya3NsYXRlZ3JleTtcbi8vIH1cbi8vIC5sYmxXZWxjb21lIHtcbi8vICAgZm9udC1zaXplOiAyNHB4O1xuLy8gfVxuLy8gLmxibE5hbWUge1xuLy8gICBmb250LXNpemU6IDI2cHg7XG4vLyB9XG4vLyAubGJsVG9kYXkge1xuLy8gICBmb250LXNpemU6IDE4cHg7XG4vLyB9XG4vLyAubWVudUNsb2NrZWRJblRvZ2dsZSB7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgaGVpZ2h0OiAxOHB4O1xuLy8gICB3aWR0aDogMThweDtcbi8vICAgcGFkZGluZy10b3A6IDNweDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIGNvbG9yOiAjNTE0QjRCO1xuLy8gfVxuLy8gLmNhcmRDbG9ja2VkSW5TbWFsbCB7XG4vLyAgIG1hcmdpbjogMTBweCAxNXB4O1xuLy8gICBmb250LXNpemU6IDEycHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAtLWJhY2tncm91bmQ6ICNBNUE1QTU7XG4vLyB9XG4vLyAuZGl2Q2xvY2tlZEluSGVhZGVyIHtcbi8vICAgY29sb3I6ICM1MTRCNEI7XG4vLyAgIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4IDE1cHg7XG4vLyAgIC0tYmFja2dyb3VuZDogI0E1QTVBNTtcbi8vIH1cbi8vIC5pY25DbG9ja2VkSW4ge1xuLy8gICBoZWlnaHQ6IDIwcHg7XG4vLyAgIHdpZHRoOiAyMHB4O1xuLy8gfVxuLy8gLmxibENsb2NrZWRJblN0YXR1cyB7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbi8vIH1cbi8vIC5sYmxDbG9ja2VkSW4ge1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuLy8gLm1lbnVTdWJvcmRpbmF0ZVRvZ2dsZSB7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgaGVpZ2h0OiAxOHB4O1xuLy8gICB3aWR0aDogMThweDtcbi8vICAgcGFkZGluZy10b3A6IDNweDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIGNvbG9yOiAjNTE0QjRCO1xuLy8gfVxuLy8gLmNhcmRTdWJvcmRpbmF0ZVNtYWxsIHtcbi8vICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4vLyAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbi8vIH1cbi8vIC5jYXJkU3Vib3JkaW5hdGUge1xuLy8gICBjb2xvcjogIzUxNEI0Qjtcbi8vICAgZm9udC1zaXplOiAxM3B4O1xuLy8gICAtLWJvcmRlci1jb2xvcjogIzVmNWY1ZjhmO1xuLy8gICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4vLyB9XG4vLyAuY2FyZFN1Ym9yZGluYXRlQ29udGVudCB7XG4vLyAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuLy8gfVxuLy8gLmRpdlN1Ym9yZGluYXRlSGVhZGVyIHtcbi8vICAgY29sb3I6ICM1MTRCNEI7XG4vLyAgIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4IDE1cHg7XG4vLyAgIC0tYmFja2dyb3VuZDogIzVmNWY1ZjhmO1xuLy8gfVxuLy8gLmljblN1Ym9yZGluYXRlIHtcbi8vICAgaGVpZ2h0OiAyMHB4O1xuLy8gICB3aWR0aDogMjBweDtcbi8vIH1cbi8vIC5sYmxTdWJvcmRpbmF0ZSB7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbi8vIH1cbi8vIC5kaXZQaG90byB7XG4vLyAgIG1hcmdpbi1yaWdodDogNXB4O1xuLy8gICBtYXJnaW4tbGVmdDogNXB4O1xuLy8gfVxuLy8gLm1lbnVBbGVydHNUb2dnbGUge1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGhlaWdodDogMThweDtcbi8vICAgd2lkdGg6IDE4cHg7XG4vLyAgIHBhZGRpbmctdG9wOiAzcHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICBjb2xvcjogIzUxNEI0Qjtcbi8vIH1cbi8vIC5jYXJkQWxlcnRzIHtcbi8vICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICBjb2xvcjogIzUxNEI0Qjtcbi8vICAgLS1ib3JkZXItY29sb3I6ICM1ZjVmNWY4Zjtcbi8vICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuLy8gfVxuLy8gLmNhcmRBbGVydHNDb250ZW50IHtcbi8vICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAuY2FyZEFsZXJ0c1NtYWxsIHtcbi8vICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4vLyAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbi8vIH1cbi8vIC5kaXZBbGVydHNIZWFkZXIge1xuLy8gICBjb2xvcjogIzUxNEI0Qjtcbi8vICAgcGFkZGluZzogMTVweCAxNXB4IDEwcHggMTVweDtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjNWY1ZjVmOGY7XG4vLyB9XG4vLyAuZGl2QWxlcnRzSXRlbSB7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgd2lkdGg6IDI4cHg7XG4vLyAgIHRvcDogMXB4O1xuLy8gICByaWdodDogMXB4O1xuLy8gICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDVweDtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gfVxuLy8gLml0ZW1BbGVydCB7XG4vLyAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbi8vIH1cbi8vIC5iZGdBbGVydHMge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ0MzM2O1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgdG9wOiAtNnB4O1xuLy8gICByaWdodDogLTJweDtcbi8vICAgZm9udC1zaXplOiA5cHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgIHBhZGRpbmc6IDRweCA2cHg7XG4vLyB9XG4vLyAuaWNuQWxlcnRzIHtcbi8vICAgaGVpZ2h0OiAyMHB4O1xuLy8gICB3aWR0aDogMjBweDtcbi8vIH1cbi8vIC5sYmxBbGVydHMge1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4vLyB9XG4vLyAubWVudUFubm91bmNlbWVudFRvZ2dsZSB7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgaGVpZ2h0OiAxOHB4O1xuLy8gICB3aWR0aDogMThweDtcbi8vICAgcGFkZGluZy10b3A6IDNweDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIGNvbG9yOiAjNTE0QjRCO1xuLy8gfVxuLy8gLmNhcmRBbm5vdW5jZW1lbnRTbWFsbCB7XG4vLyAgIG1hcmdpbjogMTBweCAxNXB4O1xuLy8gICBmb250LXNpemU6IDEycHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAtLWJhY2tncm91bmQ6ICNBNUE1QTU7XG4vLyB9XG4vLyAuY2FyZEFubm91bmNlbWVudCB7XG4vLyAgIG1hcmdpbjogMTBweCAxNXB4O1xuLy8gICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4vLyB9XG4vLyAuZGl2QW5ub3VuY2VtZW50SGVhZGVyIHtcbi8vICAgY29sb3I6ICM1MTRCNEI7XG4vLyAgIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4IDE1cHg7XG4vLyAgIC0tYmFja2dyb3VuZDogI0E1QTVBNTtcbi8vIH1cbi8vIC5oZWFkQW5ub3VuY2Uge1xuLy8gICBjb2xvcjogIzJhMmEyYTtcbi8vICAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcbi8vIH1cbi8vIC5pY25Bbm5vdW5jZSB7XG4vLyAgIGhlaWdodDogMjBweDtcbi8vICAgd2lkdGg6IDIwcHg7XG4vLyB9XG4vLyAubGJsQW5ub3VuY2Uge1xuLy8gICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4vLyB9XG4vLyAuY29udGVudEFubm91bmNlIHtcbi8vICAgY29sb3I6ICMyYTJhMmE7XG4vLyAgIHBhZGRpbmc6IDE1cHg7XG4vLyAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xuLy8gfVxuLy8gLmxibFRpdGxlIHtcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cbi8vIC5sYmxEZXRhaWxzIHtcbi8vICAgZm9udC1zaXplOiAxMnB4O1xuLy8gfVxuLy8gLmFsZXJ0TWVzc2FnZSB7XG4vLyAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xuLy8gfVxuLy8gQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXQge1xuLy8gICAwJSB7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vICAgfVxuLy8gICA5MCUge1xuLy8gICAgIG9wYWNpdHk6IDAuMDI7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICB9XG4vLyAgIDk5JSB7XG4vLyAgICAgb3BhY2l0eTogMC4wMTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDUwJTtcbi8vICAgfVxuLy8gICAxMDAlIHtcbi8vICAgICBvcGFjaXR5OiAwO1xuLy8gICAgIHdpZHRoOiAwO1xuLy8gICAgIGhlaWdodDogMDtcbi8vICAgfVxuLy8gfVxuLy8gQGtleWZyYW1lcyBmYWRlT3V0IHtcbi8vICAgMCUge1xuLy8gICAgIG9wYWNpdHk6IDE7XG4vLyAgIH1cbi8vICAgOTAlIHtcbi8vICAgICBvcGFjaXR5OiAwLjAyO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgfVxuLy8gICA5OSUge1xuLy8gICAgIG9wYWNpdHk6IDAuMDE7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiA1MCU7XG4vLyAgIH1cbi8vICAgMTAwJSB7XG4vLyAgICAgb3BhY2l0eTogMDtcbi8vICAgICB3aWR0aDogMDtcbi8vICAgICBoZWlnaHQ6IDA7XG4vLyAgIH1cbi8vIH1cbi8vIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuLy8gICAwJSB7XG4vLyAgICAgb3BhY2l0eTogMDtcbi8vICAgfVxuLy8gICAxMDAlIHtcbi8vICAgICBvcGFjaXR5OiAxO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgfVxuLy8gfVxuLy8gQGtleWZyYW1lcyBmYWRlSW4ge1xuLy8gICAwJSB7XG4vLyAgICAgb3BhY2l0eTogMDtcbi8vICAgfVxuLy8gICAxMDAlIHtcbi8vICAgICBvcGFjaXR5OiAxO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgfVxuLy8gfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjNTU4QjJGLCAjNTU4QjJGKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLW1pbi1oZWlnaHQ6IDM1cHg7XG4gIC0tcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0b3A6IDAlO1xufVxuXG5pb24tc2xpZGUgPiA6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sXG4uc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXZIZWxsbyB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxibFdlbGNvbWUge1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmxibE5hbWUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmljblRvZGF5IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5sYmxUb2RheSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5idG5UaW1lSW4ge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDU1cHggMTBweCAwcHggMHB4O1xuICAtLWJveC1zaGFkb3c6IDFweCAxcHggMTBweCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBib3gtc2hhZG93OiAwIDBweCAwcHggMCByZ2JhKDAsIDAsIDAsIDApLCAwIDBweCAwcHggMCByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uYnRuVGltZUluOCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjOTk5OTAwLCAjQjNCMzAwKTtcbn1cblxuLmJ0blRpbWVJbjkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzE3NzdCMywgIzFFOTZFMSk7XG59XG5cbi5idG5UaW1lSW4xMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjQjM0RDhBLCAjQ0M1ODlEKTtcbn1cblxuLmJ0blRpbWVJbkxhdGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0IzNEQ0RCwgI0QyNUE1QSk7XG59XG5cbi5idG5UaW1lSW5EZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4MDgwODAsICM5OTk5OTkpO1xufVxuXG4uYnRuVGltZUluTG9hZGluZyB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogNTVweCAxMHB4IDBweCAwcHg7XG4gIC0tYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjODA4MDgwLCAjOTk5OTk5KTtcbiAgYm94LXNoYWRvdzogMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwKSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmRpdlRpbWVJbiB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uaWNuQ2xvY2tlZEluIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA3cHg7XG4gIHRvcDogNXB4O1xufVxuXG4ubGJsVGltZUluIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICBtYXJnaW46IDdweCAxM3B4IDBweCAwcHg7XG59XG5cbi5sYmxUaW1lSW5MYmwge1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDBweCAyNHB4IDBweCAwcHg7XG59XG5cbi5kaXZMb2FkaW5nVGltZUluIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNwaW5uZXJUaW1lSW4ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmxibExvYWRpbmdUaW1lSW4ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMnB4IDAgMCA5cHg7XG59XG5cbi5kaXZUaXRsZUl0ZW0ge1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kaXZHQUJDSXRlbSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmxibFRpdGxlSXRlbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZ210QWxlcnRzIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jYXJkQWxlcnRzIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEwNXB4O1xuICBtYXJnaW46IDEwcHggNXB4IDEwcHggNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hbGVydExlYXZlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzQ1NjhkYywgIzlDMjdCMCk7XG59XG5cbi5hbGVydEFkdmlzb3J5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI0FENTA0OCwgIzkxNDQzRCk7XG59XG5cbi5hbGVydE92ZXJ0aW1lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI0VGNDY1NiwgI0Q5NDczNCk7XG59XG5cbi5hbGVydFdGSCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNGNDQzMzYsICNGNDQzMzYpO1xufVxuXG4uYWxlcnRXRkhBcHByb3ZhbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNEM0E4MjgsICNEM0E4MjgpO1xufVxuXG4uYWxlcnRMZWF2ZUFwcHJvdmFsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI0U3N0MyQSwgI0Y1M0UyMCk7XG59XG5cbi5hbGVydEFkdmlzb3J5QXBwcm92YWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjMDA5Njg4LCAjMDA3QTZFKTtcbn1cblxuLmFsZXJ0T3ZlcnRpbWVBcHByb3ZhbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICMyNUJGQ0QsICMxRkEyQUQpO1xufVxuXG4uZGl2QWxlcnRJY29uIHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pbWdBbGVydEljb24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ubGJsQWxlcnRDb3VudCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4ubGJsQWxlcnROYW1lIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5jYXJkU3Vib3JkaW5hdGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2FyZFN1Ym9yZGluYXRlTG9hZGluZyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLmxpc3RTdWJvcmRpbmF0ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLml0ZW1TdWJvcmRpbmF0ZSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cblxuLml0ZW1TdWJvcmRpbmF0ZUxvYWRpbmcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLmljblN1Ym9yZGluYXRlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICM2MTYzNkI7XG59XG5cbi5sYmxTdWJvcmRpbmF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5sYmxTdWJvcmRpbmF0ZU5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5sYmxTdWJvcmRpbmF0ZVBvc2l0aW9uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzYxNjM2Qjtcbn1cblxuLmV2ZW50SW1hZ2Uge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmRpdkV2ZW50IHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmRpdkRhdGUge1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5EYXRlTW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLkRhdGVEYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLkV2ZW50c1RpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9Cb2xkXCI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLkV2ZW50c0xvYyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM1QzVDNUM7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmxibEV2ZW50cyB7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNDBweDtcbn1cblxuLmNhcmRIZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jYXJkQ29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNsaWRlQW5ub3VuY2Uge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZEFubm91bmNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtaW4taGVpZ2h0OiA3MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRBbm5vdW5jZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMHB4O1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmxibEFubm91bmNlbWVudFRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmxibEFubm91bmNlbWVudERldGFpbHMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmNhcmRQcm9ncmVzc2JhciB7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG59XG5cbi5jYXJkR0FCQyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzU0MzNGRiwgIzIwQkRGRik7XG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjNDU2OGRjLCAjYjA2YWIzKTtcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjMzE0NzU1LCAjMjZhMGRhKTtcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICNjYzJiNWUsICM3NTNhODgpO1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMxMDhkYzcsICNlZjhlMzgpO1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICM2N0IyNkYsICM0Y2EyY2QpO1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyNiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IGJvdHRvbSwgIzE2YmZmZCwgIzE5NTQ3Yik7XG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXI3IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCAjZmY1MTJmLCAjZGQyNDc2KTtcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjgge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sICNmOTUzYzYsICNiOTFkNzMpO1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyOSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgI2ZmNWY2ZCwgI0U4OTg1QSk7XG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIxMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNlOTY0NDMsICM5MDRlOTUpO1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyMTEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjMDBEM0VCLCAjMDJDOTc3KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcbiAgLmJnVG9wIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZ1wiKSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDA7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgdG9wOiAtMTMwcHg7XG4gIH1cbiAgLmJnQm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZ1wiKSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDA7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgYm90dG9tOiAtMzAlO1xuICAgIGxlZnQ6IC0zMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xuICAuYmdUb3Age1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nXCIpICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICB0b3A6IC0yMyU7XG4gIH1cbiAgLmJnQm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZ1wiKSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDA7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgYm90dG9tOiAtMzAlO1xuICAgIGxlZnQ6IC0zMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuYmdUb3Age1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nXCIpICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTI1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAtNDAlO1xuICB9XG4gIC5iZ0JvdHRvbSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmdcIikgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIGJvdHRvbTogLTMwJTtcbiAgICBsZWZ0OiAtNTAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmJnVG9wIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZ1wiKSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDA7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgdG9wOiAtMjUlO1xuICB9XG4gIC5iZ0JvdHRvbSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmdcIikgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIGJvdHRvbTogLTMwJTtcbiAgICBsZWZ0OiAtNTAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgfVxufSJdfQ== */"

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
                console.log('getAlerts: ', jsonData); //mycomment
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