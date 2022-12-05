(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["healthtrack-healthtrack-module"],{

/***/ "./src/app/pages/healthtrack/healthtrack.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/healthtrack/healthtrack.module.ts ***!
  \*********************************************************/
/*! exports provided: HealthtrackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthtrackPageModule", function() { return HealthtrackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _healthtrack_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./healthtrack.page */ "./src/app/pages/healthtrack/healthtrack.page.ts");







var routes = [
    {
        path: '',
        component: _healthtrack_page__WEBPACK_IMPORTED_MODULE_6__["HealthtrackPage"]
    }
];
var HealthtrackPageModule = /** @class */ (function () {
    function HealthtrackPageModule() {
    }
    HealthtrackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_healthtrack_page__WEBPACK_IMPORTED_MODULE_6__["HealthtrackPage"]]
        })
    ], HealthtrackPageModule);
    return HealthtrackPageModule;
}());



/***/ }),

/***/ "./src/app/pages/healthtrack/healthtrack.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/healthtrack/healthtrack.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-button icon-only menuToggle fill=\"clear\" (click)=\"toggleMenu()\">\n            <ion-icon color=\"dark\" name=\"menu\"></ion-icon>\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"8\">\n          <img src=\"/assets/img/banner_heathtrack.png\" alt=\"\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf=\"loadingDone; else shimmerAnnouncement\">\n    <div *ngIf=\"firstVaccine;\">\n      <ion-card>\n        <img src=\"/assets/img/bg_vaccine_gold.png\">\n\n        <div class=\"card-title_1\">I GOT MY</div>\n        <div class=\"card-title_2\">FIRST DOSE</div>\n        <div class=\"card-subtitle\"> <b>{{vaccineDate}}</b></div>\n\n        <ion-button class=\"card-button\" expand=\"block\" shape=\"round\" color=\"primary\"\n          [routerLink]=\"['/','vaccinehistory']\"> Details</ion-button>\n\n        <img class=\"card-vaccinated\" src=\"/assets/img/icon_vaccinated_image.png\">\n\n      </ion-card>\n    </div>\n\n    <div *ngIf=\"fullVaccine;\">\n      <ion-card>\n        <img src=\"/assets/img/bg_vaccine_banner.png\">\n\n        <div class=\"card-title_1\">I'M FULLY</div>\n        <div class=\"card-title_2\">VACCINATED</div>\n        <div class=\"card-subtitle\"> <b>{{vaccineDate}}</b></div>\n\n        <ion-button class=\"card-button\" expand=\"block\" shape=\"round\" color=\"primary\"\n          [routerLink]=\"['/','vaccinehistory']\"> Details</ion-button>\n\n        <img class=\"card-vaccinated\" src=\"/assets/img/icon_vaccinated_image.png\">\n\n      </ion-card>\n    </div>\n\n\n    <div *ngIf=\"!vaccinated\">\n      <ion-card>\n        <img src=\"/assets/img/bg_banner_no_vaccine.png\">\n\n        <div class=\"card-title_1\">{{ vaccineTitle }}</div>\n        <div class=\"card-title_2\">{{ vaccineBody }}</div>\n\n        <img class=\"card-vaccinated\" src=\"/assets/img/image_no_vaccine.png\">\n\n      </ion-card>\n    </div>\n  </div>\n\n  <div *ngIf=\"antigenNegative;\">\n    <ion-card>\n      <img src=\"/assets/img/bg_antigen_badge.png\">\n\n      <ion-avatar class=\"divDate\">\n        <div class=\"DateMonth\">\n          {{getDateMonth(testDate,1)}}\n\n        </div>\n        <div class=\"DateDate\">\n          {{getDateDate(testDate)}}\n\n        </div>\n      </ion-avatar>\n\n      <div class=\"card-antigen-title\">ANTIGEN TEST</div>\n      <div class=\"card-antigen-result\"> <b>NEGATIVE</b></div>\n      <div class=\"card-antigen-next\">Next Test: {{ nextAntigenTest }}</div>\n\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"antigenPositive;\">\n    <ion-card>\n      <img src=\"/assets/img/bg_antigen_positive.png\">\n      <img class=\"card-antigen-warning\" src=\"/assets/img/image_need_test.png\">\n\n      <div class=\"card-antigen-title\">ANTIGEN TEST</div>\n      <div class=\"card-antigen-result\"> <b>POSITIVE</b></div>\n      <div class=\"card-antigen-next\">Last Test: {{ latestAntigenTest }}</div>\n\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"antigenNeedTest;\">\n    <ion-card>\n      <img src=\"/assets/img/bg_antigen_need_test.png\">\n      <img class=\"card-antigen-warning\" src=\"/assets/img/image_need_test.png\">\n\n      <div class=\"card-antigen-title\">{{ needTestTitle }}</div>\n      <div class=\"card-antigen-result\"> <b>{{ needTestBody }}</b></div>\n      <div class=\"card-antigen-next\">Last Test: {{ latestAntigenTest }}</div>\n\n    </ion-card>\n  </div>\n\n\n  <ion-grid>\n    <ion-row class=\"top-row\">\n      <ion-col class=\"top-col\" [routerLink]=\"['/','antigentesthistory']\" col-auto>\n        <img src=\"/assets/img/ic_label_antigen_history.png\">\n\n      </ion-col>\n      <ion-col class=\"top-col\" [routerLink]=\"['/','vaccinehistory']\" col-auto>\n        <img src=\"/assets/img/ic_label_vaccine_history.png\">\n\n\n      </ion-col>\n      <ion-col class=\"top-col\" [routerLink]=\"['/','antigentestqa']\" col-auto>\n\n        <img src=\"/assets/img/ic_label_antigen_qa.png\">\n      </ion-col>\n      <!-- <ion-col class=\"top-col\">\n        <div></div>\n      </ion-col> -->\n\n      <ion-col class=\"top-col\" col-auto>\n        <div></div>\n      </ion-col>\n\n      <ion-col class=\"top-col\" col-auto>\n        <div></div>\n      </ion-col>\n\n    </ion-row>\n\n    <div *ngIf=\"accessAdmin;\">\n      <ion-row class=\"top-row admin-label-row\">\n        <ion-col class=\"top-col divider-label \" size=\"2\">\n          <img src=\"/assets/img/icon_admin.png\">\n\n        </ion-col>\n        <ion-col size=\"10\">\n          <div class=\"label-admin\">\n            ADMIN'S MODULE\n          </div>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-label text-wrap>\n        <span class=\"EntryName\">ANTIGEN TEST</span>\n      </ion-label>\n      <hr class=\"solid\">\n\n      <ion-row class=\"top-row\">\n        <ion-col  *ngIf=\"accessAntigenResult;\" class=\"top-col\" [routerLink]=\"['/','antigentestresult']\" col-auto>\n          <img src=\"/assets/img/ic_label_antigen_result.png\">\n\n        </ion-col>\n\n        <ion-col  *ngIf=\"accessAntigenQa;\" class=\"top-col\" [routerLink]=\"['/','antigentestqaapproval']\" col-auto>\n          <img src=\"/assets/img/ic_label_qa_approval.png\">\n\n        </ion-col>\n\n        <ion-col   *ngIf=\"!accessAntigenResult;\" class=\"top-col\">\n          <div></div>\n        </ion-col>\n  \n        <ion-col   *ngIf=\"!accessAntigenQa;\" class=\"top-col\">\n          <div></div>\n        </ion-col>\n  \n\n        <ion-col class=\"top-col\" col-auto>\n          <div></div>\n        </ion-col>\n\n        <ion-col class=\"top-col\" col-auto>\n          <div></div>\n        </ion-col>\n\n        <ion-col class=\"top-col\" col-auto>\n          <div></div>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-label text-wrap>\n        <span class=\"EntryName\">VACCINE</span>\n      </ion-label>\n      <hr class=\"solid\">\n\n      <ion-row class=\"top-row\">\n        <ion-col  *ngIf=\"accessVaccineResult;\" class=\"top-col\" [routerLink]=\"['/','vaccineadd']\" col-auto>\n          <img src=\"/assets/img/ic_label_vaccine_result.png\">\n\n\n        </ion-col>\n\n        <ion-col class=\"top-col\" col-auto>\n          <div></div>\n        </ion-col>\n\n        <ion-col class=\"top-col\" col-auto>\n          <div></div>\n        </ion-col>\n\n        <ion-col class=\"top-col\" col-auto>\n          <div></div>\n        </ion-col>\n\n        <ion-col class=\"top-col\" col-auto>\n          <div></div>\n        </ion-col>\n\n      </ion-row>\n    </div>\n\n  </ion-grid>\n</ion-content>\n\n<ng-template #shimmerAnnouncement>\n  <div class=\"divEvent shine\">\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/healthtrack/healthtrack.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/healthtrack/healthtrack.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  position: unset;\n}\n\nion-toolbar {\n  --border-width: 0px !important;\n  margin-top: 30px;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n}\n\n.divEvent {\n  height: 150px;\n  margin: 0px 20px;\n  border-radius: 10px;\n  z-index: 1;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card-vaccinated {\n  position: absolute;\n  width: 35%;\n  top: 17%;\n  margin-right: 5%;\n  right: 0%;\n}\n\n.card-title_1 {\n  position: absolute;\n  top: 18%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 5%;\n  text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;\n}\n\n.vaccine-shimmer {\n  position: absolute;\n}\n\n.card-title_2 {\n  position: absolute;\n  top: 35%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 5%;\n  text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;\n}\n\n.card-subtitle {\n  font-size: 1.3em;\n  position: absolute;\n  top: 52%;\n  color: #fff;\n  margin-left: 5%;\n}\n\n.card-button {\n  font-size: 1em;\n  position: absolute;\n  top: 64%;\n  width: 35%;\n  margin-left: 5%;\n}\n\n.divDate {\n  margin-left: 5%;\n  position: absolute;\n  top: 20%;\n}\n\n.DateMonth {\n  font-size: 19px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 83px;\n  height: 27px;\n}\n\n.DateDate {\n  font-size: 43px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 83px;\n  height: 55px;\n}\n\n.card-antigen-title {\n  position: absolute;\n  top: 18%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 39%;\n  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;\n}\n\n.card-antigen-result {\n  font-size: 1.8em;\n  position: absolute;\n  top: 40%;\n  color: #fff;\n  margin-left: 38%;\n}\n\n.card-antigen-next {\n  font-size: 1.1em;\n  position: absolute;\n  top: 65%;\n  color: #fff;\n  margin-left: 38%;\n}\n\n.card-antigen-warning {\n  position: absolute;\n  width: 26%;\n  top: 20%;\n  margin-left: 5%;\n  left: 0%;\n}\n\n.top-row {\n  margin-left: 3%;\n  margin-right: 3%;\n}\n\n.top-col {\n  padding: 2%;\n}\n\n.icon-user {\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.label-user {\n  font-size: 12px;\n  color: #D9A921;\n  font-weight: bold;\n  max-width: 100% !important;\n}\n\n.label-user-qa {\n  font-size: 12px;\n  color: #D9A921;\n  font-weight: bold;\n}\n\n.divider-label {\n  display: flex;\n  align-items: center;\n}\n\n.label-admin {\n  font-weight: bold;\n  color: #616161;\n  margin-top: 9px;\n  margin-left: -10px;\n}\n\n.EntryName {\n  color: #676767;\n  font-size: 11px;\n  display: block;\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\nhr.solid {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-top: 1px solid #c2a5a5;\n}\n\n.admin-label-row {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhbHRodHJhY2svQzpcXFVzZXJzXFwwMzE3NzVcXEdFQVJXb3JraW5nMi9zcmNcXGFwcFxccGFnZXNcXGhlYWx0aHRyYWNrXFxoZWFsdGh0cmFjay5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hlYWx0aHRyYWNrL2hlYWx0aHRyYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUFBO0FDQ0o7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFFQSwrRUFDQTtBQ0ZKOztBRFFBO0VBQ0ksa0JBQUE7QUNMSjs7QURTQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLCtFQUNBO0FDUko7O0FEY0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDWEo7O0FEZUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNaSjs7QURlQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNaSjs7QURlQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNaSjs7QURlQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWko7O0FEZUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0VBQUE7QUNaSjs7QURlQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDWko7O0FEZ0JBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNiSjs7QURpQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUNkSjs7QURpQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURpQkE7RUFDSSxXQUFBO0FDZEo7O0FEaUJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDZEo7O0FEZ0JBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDYko7O0FEZ0JBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2JKOztBRGdCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2JKOztBRGlCQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2RKOztBRGlCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURpQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNkSjs7QURpQkU7RUFDSSxnQkFBQTtBQ2ROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVhbHRodHJhY2svaGVhbHRodHJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgcG9zaXRpb246IHVuc2V0O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmRpdkV2ZW50IHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbjogMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cblxuLmNhcmQtdmFjY2luYXRlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNSU7XG4gICAgdG9wOiAxNyU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICByaWdodDogMCU7XG59XG5cbi5jYXJkLXRpdGxlXzEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE4JTtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjRjc5MzIxO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcblxuICAgIHRleHQtc2hhZG93OlxuICAgIC0xcHggLTFweCAwICNGRkYsXG4gICAgMXB4IC0xcHggMCAjRkZGLFxuICAgIC0xcHggMXB4IDAgI0ZGRixcbiAgICAxcHggMXB4IDAgI0ZGRjsgIFxufVxuXG4udmFjY2luZS1zaGltbWVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cblxuLmNhcmQtdGl0bGVfMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzUlO1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNGNzkzMjE7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuXG4gICAgdGV4dC1zaGFkb3c6XG4gICAgLTFweCAtMXB4IDAgI0ZGRixcbiAgICAxcHggLTFweCAwICNGRkYsXG4gICAgLTFweCAxcHggMCAjRkZGLFxuICAgIDFweCAxcHggMCAjRkZGOyAgXG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUyJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG5cbn1cblxuLmNhcmQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDY0JTtcbiAgICB3aWR0aDogMzUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmRpdkRhdGUge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMCU7XG59XG5cbi5EYXRlTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDgzcHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xufVxuXG4uRGF0ZURhdGUge1xuICAgIGZvbnQtc2l6ZTogNDNweDtcbiAgICBjb2xvcjogIzVDNUM1QztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgd2lkdGg6IDgzcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xufVxuXG4uY2FyZC1hbnRpZ2VuLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxOCU7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0Y3OTMyMTtcbiAgICBtYXJnaW4tbGVmdDogMzklO1xuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjZmZmLCAxcHggLTFweCAwICNmZmYsIC0xcHggMXB4IDAgI2ZmZiwgMXB4IDFweCAwICNmZmY7IFxufVxuXG4uY2FyZC1hbnRpZ2VuLXJlc3VsdCB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDM4JTtcblxufVxuXG4uY2FyZC1hbnRpZ2VuLW5leHQge1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjUlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAzOCU7XG5cbn1cblxuLmNhcmQtYW50aWdlbi13YXJuaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI2JTtcbiAgICB0b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbGVmdDogMCU7XG59XG5cbi50b3Atcm93IHtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuLnRvcC1jb2wge1xuICAgIHBhZGRpbmc6IDIlO1xufVxuXG4uaWNvbi11c2VyIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cbi5sYWJlbC11c2VyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNEOUE5MjE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC11c2VyLXFhIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNEOUE5MjE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXZpZGVyLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmxhYmVsLWFkbWluIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzYxNjE2MTtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uRW50cnlOYW1lIHtcbiAgICBjb2xvcjogIzY3Njc2NztcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaHIuc29saWQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2MyYTVhNTtcbiAgfVxuXG4gIC5hZG1pbi1sYWJlbC1yb3cge1xuICAgICAgbWFyZ2luLXRvcDoyMHB4O1xuICB9XG4gICIsImlvbi1oZWFkZXIge1xuICBwb3NpdGlvbjogdW5zZXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGl2RXZlbnQge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uY2FyZC12YWNjaW5hdGVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzUlO1xuICB0b3A6IDE3JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgcmlnaHQ6IDAlO1xufVxuXG4uY2FyZC10aXRsZV8xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4JTtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRjc5MzIxO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjRkZGLCAxcHggLTFweCAwICNGRkYsIC0xcHggMXB4IDAgI0ZGRiwgMXB4IDFweCAwICNGRkY7XG59XG5cbi52YWNjaW5lLXNoaW1tZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkLXRpdGxlXzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUlO1xuICBmb250LXNpemU6IDEuOGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGNzkzMjE7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICNGRkYsIDFweCAtMXB4IDAgI0ZGRiwgLTFweCAxcHggMCAjRkZGLCAxcHggMXB4IDAgI0ZGRjtcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIlO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uY2FyZC1idXR0b24ge1xuICBmb250LXNpemU6IDFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY0JTtcbiAgd2lkdGg6IDM1JTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uZGl2RGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbn1cblxuLkRhdGVNb250aCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgY29sb3I6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICB3aWR0aDogODNweDtcbiAgaGVpZ2h0OiAyN3B4O1xufVxuXG4uRGF0ZURhdGUge1xuICBmb250LXNpemU6IDQzcHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICB3aWR0aDogODNweDtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4uY2FyZC1hbnRpZ2VuLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4JTtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRjc5MzIxO1xuICBtYXJnaW4tbGVmdDogMzklO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgI2ZmZiwgMXB4IC0xcHggMCAjZmZmLCAtMXB4IDFweCAwICNmZmYsIDFweCAxcHggMCAjZmZmO1xufVxuXG4uY2FyZC1hbnRpZ2VuLXJlc3VsdCB7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMzglO1xufVxuXG4uY2FyZC1hbnRpZ2VuLW5leHQge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjUlO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDM4JTtcbn1cblxuLmNhcmQtYW50aWdlbi13YXJuaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjYlO1xuICB0b3A6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBsZWZ0OiAwJTtcbn1cblxuLnRvcC1yb3cge1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG1hcmdpbi1yaWdodDogMyU7XG59XG5cbi50b3AtY29sIHtcbiAgcGFkZGluZzogMiU7XG59XG5cbi5pY29uLXVzZXIge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5sYWJlbC11c2VyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0Q5QTkyMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwtdXNlci1xYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNEOUE5MjE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2aWRlci1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sYWJlbC1hZG1pbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzYxNjE2MTtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5FbnRyeU5hbWUge1xuICBjb2xvcjogIzY3Njc2NztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmhyLnNvbGlkIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjMmE1YTU7XG59XG5cbi5hZG1pbi1sYWJlbC1yb3cge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/healthtrack/healthtrack.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/healthtrack/healthtrack.page.ts ***!
  \*******************************************************/
/*! exports provided: HealthtrackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthtrackPage", function() { return HealthtrackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









var HealthtrackPage = /** @class */ (function () {
    function HealthtrackPage(storage, router, menuCtrl, httpApi, modalController, navCtrl, loginService, alertController, loadingCtrl, plt) {
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.httpApi = httpApi;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.loadingDone = false;
        this.noError = true;
        this.needTestTitle = "ANTIGEN TEST";
        this.needTestBody = "NEEDS TESTING";
        this.vaccineTitle = "NOT YET";
        this.vaccineBody = "VACCINATED";
        this.vaccineComplete = false;
        this.antigenComplete = false;
    }
    HealthtrackPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        this.loadingDone = false;
        this.antigenLoadingDone = false;
        this.antigenNeedTest = false;
        this.antigenNegative = false;
        this.antigenPositive = false;
        this.accessAntigenResult = false;
        this.accessVaccineResult = false;
        this.accessAdmin = false;
        this.plt.ready().then(function () {
            console.log('plt');
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
                _this.getVaccineData();
                // this.getAntigenTestData();
            });
        });
    };
    HealthtrackPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    HealthtrackPage.prototype.getVaccineData = function () {
        var _this = this;
        console.log('getVaccineData');
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            var request = {
                UserID: _this.empId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                UserType: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_USER_TYPE"]],
                ProcessType: "employee-health-summary",
                EmployeeID: _this.empId,
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/health/summary", request, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        _this.loadingDone = true;
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_YES"]) {
                        _this.vaccinated = false;
                        _this.loadingDone = true;
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
                            case "No Available Data.":
                                _this.vaccinated = false;
                                return;
                            default:
                                _this.vaccineTitle = "ERROR";
                                _this.vaccineBody = "OCCURRED";
                                _this.noError = false;
                                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                                return;
                        }
                    }
                    var employeeVaccine = jsonData['Value']['EmployeeVaccine'][0];
                    if (employeeVaccine) {
                        var vaccineStatus = jsonData['Value']['EmployeeVaccine'][0]['ResultStatus'];
                        switch (vaccineStatus) {
                            case "FV":
                                _this.vaccinated = true;
                                _this.firstVaccine = false;
                                _this.fullVaccine = true;
                                break;
                            case "1":
                                _this.vaccinated = true;
                                _this.firstVaccine = true;
                                _this.fullVaccine = false;
                                break;
                            case "2":
                                _this.vaccinated = true;
                                _this.firstVaccine = false;
                                _this.fullVaccine = true;
                                break;
                            case "E":
                                _this.vaccinated = false;
                                _this.firstVaccine = false;
                                _this.fullVaccine = false;
                                break;
                            default:
                                _this.vaccinated = false;
                                _this.firstVaccine = false;
                                _this.fullVaccine = false;
                                _this.vaccineTitle = "ERROR";
                                _this.vaccineBody = "OCCURRED";
                                break;
                        }
                        var vaccineDate = jsonData['Value']['EmployeeVaccine'][0]['LastVaccineDate'];
                        if (vaccineDate) {
                            _this.vaccineDate = moment__WEBPACK_IMPORTED_MODULE_8__(vaccineDate, "MM/DD/YYYY").format("MMM DD.YYYY");
                        }
                        else {
                            _this.vaccinated = false;
                            _this.firstVaccine = false;
                            _this.fullVaccine = false;
                            _this.vaccineTitle = "ERROR";
                            _this.vaccineBody = "OCCURRED";
                        }
                    }
                    else {
                        _this.vaccinated = false;
                        _this.firstVaccine = false;
                        _this.fullVaccine = false;
                        _this.vaccineTitle = "NOT YET";
                        _this.vaccineBody = "VACCINATED";
                    }
                    var antigenTest = jsonData['Value']['EmployeeAntigen'][0];
                    if (antigenTest) {
                        switch (antigenTest['ResultStatus']) {
                            case "F":
                                _this.antigenNeedTest = true;
                                _this.antigenNegative = false;
                                _this.antigenPositive = false;
                                _this.latestAntigenTest = moment__WEBPACK_IMPORTED_MODULE_8__(antigenTest['TestDate'], "MM/DD/YYYY").format("MMM DD.YYYY");
                                break;
                            case "N":
                                _this.antigenNeedTest = false;
                                _this.antigenNegative = true;
                                _this.antigenPositive = false;
                                _this.latestAntigenTest = moment__WEBPACK_IMPORTED_MODULE_8__(antigenTest['TestDate'], "MM/DD/YYYY").format("MMM DD.YYYY");
                                _this.nextAntigenTest = moment__WEBPACK_IMPORTED_MODULE_8__(antigenTest['NextTestDate'], "MM/DD/YYYY").format("MMM DD.YYYY");
                                _this.testDate = antigenTest['TestDate'];
                                break;
                            case "P":
                                _this.antigenNeedTest = false;
                                _this.antigenNegative = false;
                                _this.antigenPositive = true;
                                _this.latestAntigenTest = moment__WEBPACK_IMPORTED_MODULE_8__(antigenTest['TestDate'], "MM/DD/YYYY").format("MMM DD.YYYY");
                                _this.nextAntigenTest = moment__WEBPACK_IMPORTED_MODULE_8__(antigenTest['NextTestDate'], "MM/DD/YYYY").format("MMM DD.YYYY");
                                _this.testDate = antigenTest['TestDate'];
                                break;
                            default:
                                _this.antigenNeedTest = true;
                                _this.antigenNegative = false;
                                _this.antigenPositive = false;
                                _this.latestAntigenTest = "";
                                break;
                        }
                    }
                    else {
                        _this.antigenNeedTest = true;
                        _this.antigenNegative = false;
                        _this.antigenPositive = false;
                        _this.latestAntigenTest = "";
                    }
                    var employeeAccess = jsonData['Value']['EmployeeAccess'][0];
                    console.log('employeeAccess: ', employeeAccess); //mycomment;
                    if (employeeAccess) {
                        _this.accessAntigenQa = employeeAccess['AntigenProcess'];
                        _this.accessAntigenResult = employeeAccess['AntigenProcess'];
                        _this.accessVaccineResult = employeeAccess['VaccineProcess'];
                        _this.accessAdmin = true;
                    }
                    else {
                        _this.accessAdmin = false;
                    }
                    _this.loadingDone = true;
                    _this.noError = true;
                })
                    .catch(function (error) {
                    console.log(error);
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    _this.vaccinated = false;
                    _this.firstVaccine = false;
                    _this.fullVaccine = false;
                    _this.vaccineTitle = "ERROR";
                    _this.vaccineBody = "OCCURRED";
                    _this.antigenNeedTest = true;
                    _this.antigenNegative = false;
                    _this.antigenPositive = false;
                    _this.latestAntigenTest = "";
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    HealthtrackPage.prototype.getAntigenTestData = function () {
        var _this = this;
        console.log('getAntigenTestData');
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            var request = {
                UserID: _this.empId,
                EmployeeId: _this.empId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                ProcessType: "employee-covid-antigen-history",
                TestResult: ""
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/health/covid/antigen", request, {})
                    .then(function (data) {
                    _this.antigenComplete = true;
                    _this.eventComplete();
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        _this.antigenLoadingDone = true;
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_YES"]) {
                        _this.antigenLoadingDone = true;
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
                            case "No Available Data.":
                                _this.antigenNeedTest = true;
                                _this.antigenNegative = false;
                                _this.antigenPositive = false;
                                return;
                            default:
                                _this.antigenNeedTest = true;
                                _this.needTestTitle = "ERROR";
                                _this.needTestBody = "Try again later";
                                _this.noError = false;
                                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                                return;
                        }
                    }
                    _this.needTestTitle = "ANTIGEN TEST";
                    _this.needTestBody = "NEEDS TESTING";
                    console.log(jsonData);
                    var now = moment__WEBPACK_IMPORTED_MODULE_8__();
                    var arr = jsonData['Value']['Table'];
                    var nextTestDateArr = [];
                    var nextTestDate;
                    var latestAntigenData;
                    arr.forEach(function (element) {
                        if (element.NextTestDate) {
                            nextTestDateArr.push(moment__WEBPACK_IMPORTED_MODULE_8__(element.NextTestDate, "MM/DD/YYYY"));
                        }
                    });
                    if (nextTestDateArr.length > 0) {
                        nextTestDate = moment__WEBPACK_IMPORTED_MODULE_8__["max"](nextTestDateArr);
                        console.log(nextTestDate);
                        arr.forEach(function (element) {
                            if (element.NextTestDate) {
                                console.log(element);
                                if (moment__WEBPACK_IMPORTED_MODULE_8__(element.NextTestDate, "MM/DD/YYYY").isSame(nextTestDate)) {
                                    console.log(element);
                                    latestAntigenData = element;
                                    _this.latestAntigenTest = moment__WEBPACK_IMPORTED_MODULE_8__(element.TestDate, "MM/DD/YYYY").format("MMM DD.YYYY");
                                    _this.nextAntigenTest = nextTestDate.format("MMM DD.YYYY");
                                    _this.testDate = element.TestDate;
                                }
                            }
                        });
                        if (nextTestDate.isBefore(now)) {
                            _this.antigenNeedTest = true;
                            _this.antigenNegative = false;
                            _this.antigenPositive = false;
                        }
                        else {
                            _this.antigenNegative = (latestAntigenData.TestResult == "NEGATIVE");
                            _this.antigenPositive = (latestAntigenData.TestResult == "POSITIVE");
                            _this.antigenNeedTest = false;
                        }
                    }
                    else {
                        _this.antigenNeedTest = true;
                        _this.antigenNegative = false;
                        _this.antigenPositive = false;
                    }
                    _this.antigenLoadingDone = true;
                })
                    .catch(function (error) {
                    console.log(error);
                    _this.eventComplete();
                    _this.antigenComplete = true;
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                    _this.antigenLoadingDone = true;
                });
            });
        });
    };
    HealthtrackPage.prototype.formatDate = function (date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return new Date(day + '-' + month + '-' + year);
    };
    HealthtrackPage.prototype.openVaccineHistory = function () {
        this.router.navigate(['/vaccinehistory']);
    };
    HealthtrackPage.prototype.getDateMonth = function (datename, procedure) {
        if (!datename) {
            return '';
        }
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    HealthtrackPage.prototype.getDateDate = function (datename) {
        if (!datename) {
            return '';
        }
        var date = new Date(datename);
        return date.getDate().toString();
    };
    HealthtrackPage.prototype.toTitleCase = function (txt) {
        return txt.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    HealthtrackPage.prototype.refresh = function (event) {
        this.event = event;
        this.ngOnInit();
    };
    HealthtrackPage.prototype.eventComplete = function () {
        if (this.vaccineComplete && this.antigenComplete) {
            if (this.event) {
                this.event.target.complete();
            }
            this.vaccineComplete = false;
            this.antigenComplete = false;
        }
    };
    HealthtrackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-healthtrack',
            template: __webpack_require__(/*! ./healthtrack.page.html */ "./src/app/pages/healthtrack/healthtrack.page.html"),
            styles: [__webpack_require__(/*! ./healthtrack.page.scss */ "./src/app/pages/healthtrack/healthtrack.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
    ], HealthtrackPage);
    return HealthtrackPage;
}());



/***/ })

}]);
//# sourceMappingURL=healthtrack-healthtrack-module.js.map