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

module.exports = "ion-header {\n  position: unset;\n}\n\nion-toolbar {\n  --border-width: 0px !important;\n  margin-top: 30px;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n}\n\n.divEvent {\n  height: 150px;\n  margin: 0px 20px;\n  border-radius: 10px;\n  z-index: 1;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card-vaccinated {\n  position: absolute;\n  width: 35%;\n  top: 17%;\n  margin-right: 5%;\n  right: 0%;\n}\n\n.card-title_1 {\n  position: absolute;\n  top: 18%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 5%;\n  text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;\n}\n\n.vaccine-shimmer {\n  position: absolute;\n}\n\n.card-title_2 {\n  position: absolute;\n  top: 35%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 5%;\n  text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;\n}\n\n.card-subtitle {\n  font-size: 1.3em;\n  position: absolute;\n  top: 52%;\n  color: #fff;\n  margin-left: 5%;\n}\n\n.card-button {\n  font-size: 1em;\n  position: absolute;\n  top: 64%;\n  width: 35%;\n  margin-left: 5%;\n}\n\n.divDate {\n  margin-left: 5%;\n  position: absolute;\n  top: 20%;\n}\n\n.DateMonth {\n  font-size: 19px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 83px;\n  height: 27px;\n}\n\n.DateDate {\n  font-size: 43px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 83px;\n  height: 55px;\n}\n\n.card-antigen-title {\n  position: absolute;\n  top: 18%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 39%;\n  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;\n}\n\n.card-antigen-result {\n  font-size: 1.8em;\n  position: absolute;\n  top: 40%;\n  color: #fff;\n  margin-left: 38%;\n}\n\n.card-antigen-next {\n  font-size: 1.1em;\n  position: absolute;\n  top: 65%;\n  color: #fff;\n  margin-left: 38%;\n}\n\n.card-antigen-warning {\n  position: absolute;\n  width: 26%;\n  top: 20%;\n  margin-left: 5%;\n  left: 0%;\n}\n\n.top-row {\n  margin-left: 3%;\n  margin-right: 3%;\n}\n\n.top-col {\n  padding: 2%;\n}\n\n.icon-user {\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.label-user {\n  font-size: 12px;\n  color: #D9A921;\n  font-weight: bold;\n  max-width: 100% !important;\n}\n\n.label-user-qa {\n  font-size: 12px;\n  color: #D9A921;\n  font-weight: bold;\n}\n\n.divider-label {\n  display: flex;\n  align-items: center;\n}\n\n.label-admin {\n  font-weight: bold;\n  color: #616161;\n  margin-top: 9px;\n  margin-left: -10px;\n}\n\n.EntryName {\n  color: #676767;\n  font-size: 11px;\n  display: block;\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\nhr.solid {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-top: 1px solid #c2a5a5;\n}\n\n.admin-label-row {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvaGVhbHRodHJhY2svaGVhbHRodHJhY2sucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oZWFsdGh0cmFjay9oZWFsdGh0cmFjay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw0RUFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEsK0VBQ0E7QUNGSjs7QURRQTtFQUNJLGtCQUFBO0FDTEo7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFFQSwrRUFDQTtBQ1JKOztBRGNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1hKOztBRGVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDWko7O0FEZUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDWko7O0FEZUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWko7O0FEZUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1pKOztBRGVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLCtFQUFBO0FDWko7O0FEZUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1pKOztBRGdCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDYko7O0FEaUJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FDZEo7O0FEaUJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDZEo7O0FEaUJBO0VBQ0ksV0FBQTtBQ2RKOztBRGlCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ2RKOztBRGdCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ2JKOztBRGdCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNiSjs7QURnQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNiSjs7QURpQkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNkSjs7QURpQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDZEo7O0FEaUJBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDZEo7O0FEaUJFO0VBQ0ksZ0JBQUE7QUNkTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlYWx0aHRyYWNrL2hlYWx0aHRyYWNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiB1bnNldDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5kaXZFdmVudCB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5cbi5jYXJkLXZhY2NpbmF0ZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzUlO1xuICAgIHRvcDogMTclO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgcmlnaHQ6IDAlO1xufVxuXG4uY2FyZC10aXRsZV8xIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxOCU7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0Y3OTMyMTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG5cbiAgICB0ZXh0LXNoYWRvdzpcbiAgICAtMXB4IC0xcHggMCAjRkZGLFxuICAgIDFweCAtMXB4IDAgI0ZGRixcbiAgICAtMXB4IDFweCAwICNGRkYsXG4gICAgMXB4IDFweCAwICNGRkY7ICBcbn1cblxuLnZhY2NpbmUtc2hpbW1lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5cbi5jYXJkLXRpdGxlXzIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM1JTtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjRjc5MzIxO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcblxuICAgIHRleHQtc2hhZG93OlxuICAgIC0xcHggLTFweCAwICNGRkYsXG4gICAgMXB4IC0xcHggMCAjRkZGLFxuICAgIC0xcHggMXB4IDAgI0ZGRixcbiAgICAxcHggMXB4IDAgI0ZGRjsgIFxufVxuXG4uY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MiU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuXG59XG5cbi5jYXJkLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2NCU7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5kaXZEYXRlIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjAlO1xufVxuXG4uRGF0ZU1vbnRoIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA4M3B4O1xuICAgIGhlaWdodDogMjdweDtcbn1cblxuLkRhdGVEYXRlIHtcbiAgICBmb250LXNpemU6IDQzcHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA4M3B4O1xuICAgIGhlaWdodDogNTVweDtcbn1cblxuLmNhcmQtYW50aWdlbi10aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTglO1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNGNzkzMjE7XG4gICAgbWFyZ2luLWxlZnQ6IDM5JTtcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgI2ZmZiwgMXB4IC0xcHggMCAjZmZmLCAtMXB4IDFweCAwICNmZmYsIDFweCAxcHggMCAjZmZmOyBcbn1cblxuLmNhcmQtYW50aWdlbi1yZXN1bHQge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAzOCU7XG5cbn1cblxuLmNhcmQtYW50aWdlbi1uZXh0IHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDY1JTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMzglO1xuXG59XG5cbi5jYXJkLWFudGlnZW4td2FybmluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNiU7XG4gICAgdG9wOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGxlZnQ6IDAlO1xufVxuXG4udG9wLXJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG59XG5cbi50b3AtY29sIHtcbiAgICBwYWRkaW5nOiAyJTtcbn1cblxuLmljb24tdXNlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG4ubGFiZWwtdXNlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjRDlBOTIxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwtdXNlci1xYSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjRDlBOTIxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2aWRlci1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5sYWJlbC1hZG1pbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM2MTYxNjE7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLkVudHJ5TmFtZSB7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmhyLnNvbGlkIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjMmE1YTU7XG4gIH1cblxuICAuYWRtaW4tbGFiZWwtcm93IHtcbiAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgfVxuICAiLCJpb24taGVhZGVyIHtcbiAgcG9zaXRpb246IHVuc2V0O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdkV2ZW50IHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmNhcmQtdmFjY2luYXRlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM1JTtcbiAgdG9wOiAxNyU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHJpZ2h0OiAwJTtcbn1cblxuLmNhcmQtdGl0bGVfMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOCU7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0Y3OTMyMTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgI0ZGRiwgMXB4IC0xcHggMCAjRkZGLCAtMXB4IDFweCAwICNGRkYsIDFweCAxcHggMCAjRkZGO1xufVxuXG4udmFjY2luZS1zaGltbWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY2FyZC10aXRsZV8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRjc5MzIxO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjRkZGLCAxcHggLTFweCAwICNGRkYsIC0xcHggMXB4IDAgI0ZGRiwgMXB4IDFweCAwICNGRkY7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUyJTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmNhcmQtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NCU7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmRpdkRhdGUge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG59XG5cbi5EYXRlTW9udGgge1xuICBmb250LXNpemU6IDE5cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDgzcHg7XG4gIGhlaWdodDogMjdweDtcbn1cblxuLkRhdGVEYXRlIHtcbiAgZm9udC1zaXplOiA0M3B4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDgzcHg7XG4gIGhlaWdodDogNTVweDtcbn1cblxuLmNhcmQtYW50aWdlbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOCU7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0Y3OTMyMTtcbiAgbWFyZ2luLWxlZnQ6IDM5JTtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICNmZmYsIDFweCAtMXB4IDAgI2ZmZiwgLTFweCAxcHggMCAjZmZmLCAxcHggMXB4IDAgI2ZmZjtcbn1cblxuLmNhcmQtYW50aWdlbi1yZXN1bHQge1xuICBmb250LXNpemU6IDEuOGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDM4JTtcbn1cblxuLmNhcmQtYW50aWdlbi1uZXh0IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY1JTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAzOCU7XG59XG5cbi5jYXJkLWFudGlnZW4td2FybmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI2JTtcbiAgdG9wOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbGVmdDogMCU7XG59XG5cbi50b3Atcm93IHtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xufVxuXG4udG9wLWNvbCB7XG4gIHBhZGRpbmc6IDIlO1xufVxuXG4uaWNvbi11c2VyIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4ubGFiZWwtdXNlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNEOUE5MjE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXVzZXItcWEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRDlBOTIxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdmlkZXItbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGFiZWwtYWRtaW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2MTYxNjE7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uRW50cnlOYW1lIHtcbiAgY29sb3I6ICM2NzY3Njc7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5oci5zb2xpZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzJhNWE1O1xufVxuXG4uYWRtaW4tbGFiZWwtcm93IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

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
                    if (employeeAccess) {
                        _this.accessAntigenQa = employeeAccess['AntigenQAProcess'];
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