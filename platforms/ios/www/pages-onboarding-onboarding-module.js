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

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.swiper-slide {\n  display: block;\n}\n\nion-slide {\n  margin: 10px 0px;\n}\n\nion-slides.slides {\n  height: 100%;\n}\n\nion-slide > h2 {\n  color: white;\n  font-size: 22px;\n  margin: 10px 15px 0;\n}\n\nion-slide > p {\n  color: white;\n  font-size: 14px;\n  margin: 10px 15px 0;\n}\n\nion-slide > img {\n  max-height: 80%;\n  max-width: 80%;\n}\n\n.classBg {\n  --background: url(\"/assets/img/onboard00.png\") no-repeat center center / cover;\n}\n\n.classOnboardWelcome {\n  padding-top: 25%;\n}\n\n.classOnboardLeaveCredits {\n  padding-top: 40%;\n}\n\n.classOnboardLeaveAndAttendance {\n  padding-top: 30%;\n}\n\n.classOnboardFileLeave {\n  padding-top: 20%;\n}\n\n.classOnboardDTR {\n  padding-top: 30%;\n}\n\n.classOnboardCalendar {\n  padding-top: 20%;\n}\n\n.classOnboardOvertime {\n  padding-top: 30%;\n}\n\n.classOnboardEPayslip {\n  padding-top: 45%;\n}\n\n.classOnboardLoans {\n  padding-top: 40%;\n}\n\n.classOnboardEvent {\n  padding-top: 40%;\n}\n\n.classOnboardSubordinates {\n  padding-top: 45%;\n}\n\n.classOnboardPersonalBG {\n  padding-top: 25%;\n}\n\n.classOnboardApproval {\n  padding-top: 30%;\n}\n\n.classSkip {\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.classNext {\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n\n.classStart {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksOEVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1zbGlkZSB7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuaW9uLXNsaWRlcy5zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlPmgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbjogMTBweCAxNXB4IDA7XG59XG5cbmlvbi1zbGlkZT5wIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMTBweCAxNXB4IDA7XG59XG5cbmlvbi1zbGlkZT5pbWcge1xuICAgIG1heC1oZWlnaHQ6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbn1cblxuLmNsYXNzQmcge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvb25ib2FyZDAwLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuXG4uY2xhc3NPbmJvYXJkV2VsY29tZSB7XG4gICAgcGFkZGluZy10b3A6IDI1JTtcbn1cblxuLmNsYXNzT25ib2FyZExlYXZlQ3JlZGl0cyB7XG4gICAgcGFkZGluZy10b3A6IDQwJTtcbn1cblxuLmNsYXNzT25ib2FyZExlYXZlQW5kQXR0ZW5kYW5jZSB7XG4gICAgcGFkZGluZy10b3A6IDMwJTtcbn1cblxuLmNsYXNzT25ib2FyZEZpbGVMZWF2ZSB7XG4gICAgcGFkZGluZy10b3A6IDIwJTtcbn1cblxuLmNsYXNzT25ib2FyZERUUiB7XG4gICAgcGFkZGluZy10b3A6IDMwJTtcbn1cblxuLmNsYXNzT25ib2FyZENhbGVuZGFyIHtcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xufVxuXG4uY2xhc3NPbmJvYXJkT3ZlcnRpbWUge1xuICAgIHBhZGRpbmctdG9wOiAzMCU7XG59XG5cbi5jbGFzc09uYm9hcmRFUGF5c2xpcCB7XG4gICAgcGFkZGluZy10b3A6IDQ1JTtcbn1cblxuLmNsYXNzT25ib2FyZExvYW5zIHtcbiAgICBwYWRkaW5nLXRvcDogNDAlO1xufVxuXG4uY2xhc3NPbmJvYXJkRXZlbnQge1xuICAgIHBhZGRpbmctdG9wOiA0MCU7XG59XG5cbi5jbGFzc09uYm9hcmRTdWJvcmRpbmF0ZXMge1xuICAgIHBhZGRpbmctdG9wOiA0NSU7XG59XG5cbi5jbGFzc09uYm9hcmRQZXJzb25hbEJHIHtcbiAgICBwYWRkaW5nLXRvcDogMjUlO1xufVxuXG4uY2xhc3NPbmJvYXJkQXBwcm92YWwge1xuICAgIHBhZGRpbmctdG9wOiAzMCU7XG59XG5cbi5jbGFzc1NraXAge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLmNsYXNzTmV4dCB7XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbn1cblxuLmNsYXNzU3RhcnQge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4XG59IiwiOnJvb3Qge1xuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1zbGlkZSB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbmlvbi1zbGlkZXMuc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tc2xpZGUgPiBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW46IDEwcHggMTVweCAwO1xufVxuXG5pb24tc2xpZGUgPiBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMTBweCAxNXB4IDA7XG59XG5cbmlvbi1zbGlkZSA+IGltZyB7XG4gIG1heC1oZWlnaHQ6IDgwJTtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5jbGFzc0JnIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9vbmJvYXJkMDAucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbi5jbGFzc09uYm9hcmRXZWxjb21lIHtcbiAgcGFkZGluZy10b3A6IDI1JTtcbn1cblxuLmNsYXNzT25ib2FyZExlYXZlQ3JlZGl0cyB7XG4gIHBhZGRpbmctdG9wOiA0MCU7XG59XG5cbi5jbGFzc09uYm9hcmRMZWF2ZUFuZEF0dGVuZGFuY2Uge1xuICBwYWRkaW5nLXRvcDogMzAlO1xufVxuXG4uY2xhc3NPbmJvYXJkRmlsZUxlYXZlIHtcbiAgcGFkZGluZy10b3A6IDIwJTtcbn1cblxuLmNsYXNzT25ib2FyZERUUiB7XG4gIHBhZGRpbmctdG9wOiAzMCU7XG59XG5cbi5jbGFzc09uYm9hcmRDYWxlbmRhciB7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG59XG5cbi5jbGFzc09uYm9hcmRPdmVydGltZSB7XG4gIHBhZGRpbmctdG9wOiAzMCU7XG59XG5cbi5jbGFzc09uYm9hcmRFUGF5c2xpcCB7XG4gIHBhZGRpbmctdG9wOiA0NSU7XG59XG5cbi5jbGFzc09uYm9hcmRMb2FucyB7XG4gIHBhZGRpbmctdG9wOiA0MCU7XG59XG5cbi5jbGFzc09uYm9hcmRFdmVudCB7XG4gIHBhZGRpbmctdG9wOiA0MCU7XG59XG5cbi5jbGFzc09uYm9hcmRTdWJvcmRpbmF0ZXMge1xuICBwYWRkaW5nLXRvcDogNDUlO1xufVxuXG4uY2xhc3NPbmJvYXJkUGVyc29uYWxCRyB7XG4gIHBhZGRpbmctdG9wOiAyNSU7XG59XG5cbi5jbGFzc09uYm9hcmRBcHByb3ZhbCB7XG4gIHBhZGRpbmctdG9wOiAzMCU7XG59XG5cbi5jbGFzc1NraXAge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5jbGFzc05leHQge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY2xhc3NTdGFydCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */"

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