(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-onboarding-module"],{

/***/ "./src/app/pages/onboarding/onboarding.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.module.ts ***!
  \*******************************************************/
/*! exports provided: OnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboarding.page */ "./src/app/pages/onboarding/onboarding.page.ts");







var routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]
    }
];
var OnboardingPageModule = /** @class */ (function () {
    function OnboardingPageModule() {
    }
    OnboardingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]]
        })
    ], OnboardingPageModule);
    return OnboardingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content center text-center fullscreen scroll-y=\"false\" class=\"classBg\">\n    <ion-button class=\"classSkip\" fill=\"clear\" (click)=\"skipPressed()\" *ngIf=\"!disableBtn\">\n        Skip\n    </ion-button>\n    <ion-button class=\"classNext\" fill=\"clear\" (click)=\"nextPressed()\" *ngIf=\"!disableBtn\">\n        Next\n    </ion-button>\n    <ion-slides padding pager=\"true\" [options]=\"slidesOpts\" (ionSlideWillChange)=\"doCheck()\">\n        <ion-slide class=\"classOnboardWelcome\">\n            <img src=\"/assets/img/onboard_welcome.png\" alt=\"\">\n            <h2>Welcome!</h2>\n            <p>Your Golden ABC Electronic Access and Resource Companion mobile app</p>\n        </ion-slide>\n        <ion-slide class=\"classOnboardPersonalBG\">\n            <img src=\"/assets/img/onboard_personalbg.png\" alt=\"\">\n            <h2>Personal Information</h2>\n            <p>View your personal details with ease</p>\n        </ion-slide>\n        <ion-slide class=\"classOnboardLeaveCredits\">\n            <img src=\"/assets/img/onboard_leavecredits.png\" alt=\"\">\n            <h2>Leave Credits</h2>\n            <p>Check your Leave Credits</p>\n        </ion-slide>\n        <ion-slide class=\"classOnboardLeaveAndAttendance\">\n            <img src=\"/assets/img/onboard_leaveandattendance.png\" alt=\"\">\n            <h2>Leave and Attendance Advisory</h2>\n            <p>Monitor your leaves and attendance advisories in a minute</p>\n        </ion-slide>\n        <!-- <ion-slide class=\"classOnboardFileLeave\">\n            <img src=\"/assets/img/onboard_fileleave.png\" alt=\"\">\n            <h2>File Leave and Attendance Advisory</h2>\n            <p>File all leaves & attendance advisories faster and more efficient</p>\n        </ion-slide> -->\n        <!-- <ion-slide class=\"classOnboardOvertime\">\n            <img src=\"/assets/img/onboard_overtime.png\" alt=\"\">\n            <h2>Overtime</h2>\n            <p>File extended work hours with ease in real time</p>\n        </ion-slide> -->\n        <ion-slide class=\"classOnboardEPayslip\">\n            <img src=\"/assets/img/onboard_epayslip.png\" alt=\"\">\n            <h2>E-Payslip</h2>\n            <p>View your e-payslip anywhere, anytime</p>\n        </ion-slide>\n        <ion-slide class=\"classOnboardDTR\">\n            <img src=\"/assets/img/onboard_dtr.png\" alt=\"\">\n            <h2>Daily Time Record</h2>\n            <p>Rushing to get that 8-5 shift? Check your time in and out here</p>\n        </ion-slide>\n        <ion-slide class=\"classOnboardLoans\">\n            <img src=\"/assets/img/onboard_loanspurchase.png\" alt=\"\">\n            <h2>Loans and Purchases</h2>\n            <p>Keep track of all your Loans and Purchases</p>\n        </ion-slide>\n        <ion-slide class=\"classOnboardEvent\">\n            <img src=\"/assets/img/onboard_event.png\" alt=\"\">\n            <h2>Events</h2>\n            <p>Be in the loop and stay updated on all company activities</p>\n        </ion-slide>\n        <ion-slide class=\"classOnboardCalendar\">\n            <img src=\"/assets/img/onboard_calendar.png\" alt=\"\">\n            <h2>Calendar</h2>\n            <p>A quick view of your day-to-day activities</p>\n            <ion-button *ngIf=\"!isManager\" class=\"classStart\" fill=\"solid\" (click)=\"skipPressed()\">\n                Get Started\n            </ion-button>\n        </ion-slide>\n        <ion-slide class=\"classOnboardSubordinates\" *ngIf=\"isManager\">\n            <img src=\"/assets/img/onboard_subordinates.png\" alt=\"\">\n            <h2>Subordinates</h2>\n            <p>View your team members’ names and profiles</p>\n        </ion-slide>\n        <ion-slide class=\"classOnboardApproval\" *ngIf=\"isManager\">\n            <img src=\"/assets/img/onboard_approval.png\" alt=\"\">\n            <h2>Approvals</h2>\n            <p>Get notifications & Approve your team members’ requests in real time</p>\n            <ion-button class=\"classStart\" fill=\"solid\" (click)=\"skipPressed()\">\n                Get Started\n            </ion-button>\n        </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.swiper-slide {\n  display: block;\n}\n\nion-slide {\n  margin: 10px 0px;\n}\n\nion-slides.slides {\n  height: 100%;\n}\n\nion-slide > h2 {\n  color: white;\n  font-size: 22px;\n  margin: 10px 15px 0;\n}\n\nion-slide > p {\n  color: white;\n  font-size: 14px;\n  margin: 10px 15px 0;\n}\n\nion-slide > img {\n  max-height: 80%;\n  max-width: 80%;\n}\n\n.classBg {\n  --background: url(\"/assets/img/onboard00.png\") no-repeat center center / cover;\n}\n\n.classOnboardWelcome {\n  padding-top: 25%;\n}\n\n.classOnboardLeaveCredits {\n  padding-top: 40%;\n}\n\n.classOnboardLeaveAndAttendance {\n  padding-top: 30%;\n}\n\n.classOnboardFileLeave {\n  padding-top: 20%;\n}\n\n.classOnboardDTR {\n  padding-top: 30%;\n}\n\n.classOnboardCalendar {\n  padding-top: 20%;\n}\n\n.classOnboardOvertime {\n  padding-top: 30%;\n}\n\n.classOnboardEPayslip {\n  padding-top: 45%;\n}\n\n.classOnboardLoans {\n  padding-top: 40%;\n}\n\n.classOnboardEvent {\n  padding-top: 40%;\n}\n\n.classOnboardSubordinates {\n  padding-top: 45%;\n}\n\n.classOnboardPersonalBG {\n  padding-top: 25%;\n}\n\n.classOnboardApproval {\n  padding-top: 30%;\n}\n\n.classSkip {\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.classNext {\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n\n.classStart {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUi13b3JraW5nL3NyY1xcYXBwXFxwYWdlc1xcb25ib2FyZGluZ1xcb25ib2FyZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvb25ib2FyZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLDhFQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tc2xpZGUge1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbmlvbi1zbGlkZXMuc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zbGlkZT5oMiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW46IDEwcHggMTVweCAwO1xufVxuXG5pb24tc2xpZGU+cCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDEwcHggMTVweCAwO1xufVxuXG5pb24tc2xpZGU+aW1nIHtcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5jbGFzc0JnIHtcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL29uYm9hcmQwMC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuLmNsYXNzT25ib2FyZFdlbGNvbWUge1xuICAgIHBhZGRpbmctdG9wOiAyNSU7XG59XG5cbi5jbGFzc09uYm9hcmRMZWF2ZUNyZWRpdHMge1xuICAgIHBhZGRpbmctdG9wOiA0MCU7XG59XG5cbi5jbGFzc09uYm9hcmRMZWF2ZUFuZEF0dGVuZGFuY2Uge1xuICAgIHBhZGRpbmctdG9wOiAzMCU7XG59XG5cbi5jbGFzc09uYm9hcmRGaWxlTGVhdmUge1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG59XG5cbi5jbGFzc09uYm9hcmREVFIge1xuICAgIHBhZGRpbmctdG9wOiAzMCU7XG59XG5cbi5jbGFzc09uYm9hcmRDYWxlbmRhciB7XG4gICAgcGFkZGluZy10b3A6IDIwJTtcbn1cblxuLmNsYXNzT25ib2FyZE92ZXJ0aW1lIHtcbiAgICBwYWRkaW5nLXRvcDogMzAlO1xufVxuXG4uY2xhc3NPbmJvYXJkRVBheXNsaXAge1xuICAgIHBhZGRpbmctdG9wOiA0NSU7XG59XG5cbi5jbGFzc09uYm9hcmRMb2FucyB7XG4gICAgcGFkZGluZy10b3A6IDQwJTtcbn1cblxuLmNsYXNzT25ib2FyZEV2ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNDAlO1xufVxuXG4uY2xhc3NPbmJvYXJkU3Vib3JkaW5hdGVzIHtcbiAgICBwYWRkaW5nLXRvcDogNDUlO1xufVxuXG4uY2xhc3NPbmJvYXJkUGVyc29uYWxCRyB7XG4gICAgcGFkZGluZy10b3A6IDI1JTtcbn1cblxuLmNsYXNzT25ib2FyZEFwcHJvdmFsIHtcbiAgICBwYWRkaW5nLXRvcDogMzAlO1xufVxuXG4uY2xhc3NTa2lwIHtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG59XG5cbi5jbGFzc05leHQge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5jbGFzc1N0YXJ0IHtcbiAgICBwYWRkaW5nLXRvcDogMTBweFxufSIsIjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tc2xpZGUge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG5pb24tc2xpZGVzLnNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlID4gaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAxMHB4IDE1cHggMDtcbn1cblxuaW9uLXNsaWRlID4gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHggMTVweCAwO1xufVxuXG5pb24tc2xpZGUgPiBpbWcge1xuICBtYXgtaGVpZ2h0OiA4MCU7XG4gIG1heC13aWR0aDogODAlO1xufVxuXG4uY2xhc3NCZyB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvb25ib2FyZDAwLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuXG4uY2xhc3NPbmJvYXJkV2VsY29tZSB7XG4gIHBhZGRpbmctdG9wOiAyNSU7XG59XG5cbi5jbGFzc09uYm9hcmRMZWF2ZUNyZWRpdHMge1xuICBwYWRkaW5nLXRvcDogNDAlO1xufVxuXG4uY2xhc3NPbmJvYXJkTGVhdmVBbmRBdHRlbmRhbmNlIHtcbiAgcGFkZGluZy10b3A6IDMwJTtcbn1cblxuLmNsYXNzT25ib2FyZEZpbGVMZWF2ZSB7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG59XG5cbi5jbGFzc09uYm9hcmREVFIge1xuICBwYWRkaW5nLXRvcDogMzAlO1xufVxuXG4uY2xhc3NPbmJvYXJkQ2FsZW5kYXIge1xuICBwYWRkaW5nLXRvcDogMjAlO1xufVxuXG4uY2xhc3NPbmJvYXJkT3ZlcnRpbWUge1xuICBwYWRkaW5nLXRvcDogMzAlO1xufVxuXG4uY2xhc3NPbmJvYXJkRVBheXNsaXAge1xuICBwYWRkaW5nLXRvcDogNDUlO1xufVxuXG4uY2xhc3NPbmJvYXJkTG9hbnMge1xuICBwYWRkaW5nLXRvcDogNDAlO1xufVxuXG4uY2xhc3NPbmJvYXJkRXZlbnQge1xuICBwYWRkaW5nLXRvcDogNDAlO1xufVxuXG4uY2xhc3NPbmJvYXJkU3Vib3JkaW5hdGVzIHtcbiAgcGFkZGluZy10b3A6IDQ1JTtcbn1cblxuLmNsYXNzT25ib2FyZFBlcnNvbmFsQkcge1xuICBwYWRkaW5nLXRvcDogMjUlO1xufVxuXG4uY2xhc3NPbmJvYXJkQXBwcm92YWwge1xuICBwYWRkaW5nLXRvcDogMzAlO1xufVxuXG4uY2xhc3NTa2lwIHtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uY2xhc3NOZXh0IHtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmNsYXNzU3RhcnQge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/onboarding/onboarding.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.page.ts ***!
  \*****************************************************/
/*! exports provided: OnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPage", function() { return OnboardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");





var OnboardingPage = /** @class */ (function () {
    function OnboardingPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.isManager = false;
        this.disableBtn = false;
        // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
        this.slidesOpts = {
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            centeredSlides: true,
            zoom: false
        };
    }
    OnboardingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPDETAILS"]).then(function (val) {
            _this.isManager = (val['0']['ISMANAGER'] == 1);
        });
    };
    OnboardingPage.prototype.skipPressed = function () {
        this.navCtrl.navigateRoot(['/main/home']);
    };
    OnboardingPage.prototype.nextPressed = function () {
        this.slides.slideNext();
    };
    OnboardingPage.prototype.doCheck = function () {
        var _this = this;
        var prom = this.slides.isEnd();
        Promise.all([prom]).then(function (data) {
            data[0] ? _this.disableBtn = true : _this.disableBtn = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], OnboardingPage.prototype, "slides", void 0);
    OnboardingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboarding',
            template: __webpack_require__(/*! ./onboarding.page.html */ "./src/app/pages/onboarding/onboarding.page.html"),
            styles: [__webpack_require__(/*! ./onboarding.page.scss */ "./src/app/pages/onboarding/onboarding.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], OnboardingPage);
    return OnboardingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-onboarding-onboarding-module.js.map