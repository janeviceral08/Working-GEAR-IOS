(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/pages/about/about.page.ts");







var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n<ion-content>\n    <div class=\"bgTop\">\n    </div>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <img class=\"imgGEARicon\" src=\"/assets/img/icon.png\" alt=\"\">\n    <img class=\"imgGEARtext\" src=\"/assets/img/gear_name.png\" alt=\"\">\n    <ion-label class=\"lblVersion\">\n        {{CurrentVersion}}\n    </ion-label>\n    <ion-card class=\"cardAboutSmall\">\n        <ion-card-header class=\"divAboutHeader\" (click)=\"toggleAboutSection()\">\n            <ion-icon class=\"icnAbout\" name=\"information-circle\"></ion-icon>\n            <ion-label class=\"lblTitleCard\">\n                {{lblAboutStatus}}</ion-label>\n            <ion-icon class=\"menuAboutToggle\" *ngIf=\"noError\" name=\"{{clickedAbout ? 'arrow-dropup': 'arrow-dropdown'}}\">\n            </ion-icon>\n        </ion-card-header>\n        <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblAboutStatus == 'LOADING ABOUT...'\">\n        </ion-progress-bar>\n        <ion-card-content class='cardOnDesc' *ngIf=\"clickedAbout\">\n            <p class=\"lblDetails\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GEAR – GOLDEN ABC Electronic Access and Resource is a tool for all GABC employees that provides a more interactive and efficient way of accessing employee benefits and services. In addition, this is focused\n                on providing better service to the employees in line with the organization’s digital transformation efforts.</p>\n            <br>\n            <p class=\"lblDetails\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GEAR currently allows all GABC employees to view and file their leaves and attendance advisories and view their daily time record via their mobile phones. In addition, all GEAR users will now be able to\n                view their epayslips, loans and employee purchases.\n            </p>\n            <br>\n            <p class=\"lblDetails lblViewOnboarding\" (click)=\"toggleViewOnboarding()\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; View Onboarding\n        </ion-card-content>\n    </ion-card>\n    <ion-card class=\"cardWhatsNextSmall\">\n        <ion-card-header class=\"divWhatsNextHeader\" (click)=\"toggleWhatsNextSection()\">\n            <ion-icon class=\"icnWhatsNext\" name=\"megaphone\"></ion-icon>\n            <ion-label class=\"lblTitleCard\">\n                {{lblWhatsNextStatus}}</ion-label>\n            <ion-icon class=\"menuWhatsNextToggle\" *ngIf=\"noError\" name=\"{{clickedWhatsNext ? 'arrow-dropup': 'arrow-dropdown'}}\">\n            </ion-icon>\n        </ion-card-header>\n        <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblWhatsNextStatus == 'LOADING WHATS NEXT...'\">\n        </ion-progress-bar>\n        <ion-card-content class='cardOnDesc' *ngIf=\"clickedWhatsNext\">\n            <div>\n                <p class=\"lblDetails\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GEAR will continuously be updated to completely mirror its web version through several phases.\n                </p>\n                <br>\n                <p class=\"lblDetails\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GEAR is now on its second phase with its new additional features. The commitment to continuously enhance its features is in full swing in the next phases. Exciting changes ahead for GEAR and GABC.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"cardPrivacyPolicy\">\n        <ion-card-header class=\"divPrivacyPolicy\" (click)=\"togglePrivacyPolicy()\">\n            <ion-icon class=\"icnPrivacyPolicy\" name=\"list-box\"></ion-icon>\n            <ion-label class=\"lblTitleCard\">\n                {{lblPrivacyPolicyStatus}}</ion-label>\n            <ion-icon class=\"menuPrivacyPolicy\" *ngIf=\"noError\" name=\"{{clickedPrivacyPolicy ? 'arrow-dropup': 'arrow-dropdown'}}\">\n            </ion-icon>\n        </ion-card-header>\n        <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblPrivacyPolicy == 'LOADING PRIVACY STATEMENT...'\">\n        </ion-progress-bar>\n        <ion-card-content class='cardOnDesc' *ngIf=\"clickedPrivacyPolicy\">\n            <div>\n                <p class=\"lblDetails\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This mobile app may be accessed and used only for official business purposes by authorized Con-way personnel. Unauthorized access or use of this mobile app may subject violators to disciplinary, and/or\n                    civil action or criminal prosecution.\n                </p>\n                <br>\n                <p class=\"lblDetails\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Any information on this mobile app may be intercepted, recorded, read, copied, and disclosed by and to authorized personnel for official purposes, including criminal investigations.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"cardFeedbackSmall\">\n        <ion-card-header class=\"divFeedbackHeader\" (click)=\"toggleFeedbackSection()\">\n            <ion-icon class=\"icnFeedback\" name=\"chatbubbles\"></ion-icon>\n            <ion-label class=\"lblTitleCard\">\n                {{lblFeedbackStatus}}</ion-label>\n            <ion-icon class=\"menuFeedbackToggle\" *ngIf=\"noError\" name=\"{{clickedFeedback ? 'arrow-dropup': 'arrow-dropdown'}}\">\n            </ion-icon>\n        </ion-card-header>\n        <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblFeedbackStatus == 'LOADING FEEDBACK...'\">\n        </ion-progress-bar>\n        <ion-card-content class='cardOnDesc' *ngIf=\"clickedFeedback\">\n            <ion-list>\n                <ion-item lines=\"none\">\n                    <ion-textarea class=\"txtFeedback\" id=\"rounded\" rows=\"1\" maxlength=\"200\" (ionChange)=\"feedbackLength()\" [(ngModel)]=\"feedbackText\"></ion-textarea>\n                </ion-item>\n                <ion-item lines=\"none\">\n                    <!-- <ion-label class=\"lblfeedbackLength\">{{currentFeedbackLength}}/200</ion-label> -->\n                    <ion-label></ion-label>\n                    <ion-button class=\"btnSubmit\" size=\"small\" (click)=\"feedbackSubmit()\">SUBMIT</ion-button>\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n    <div *ngIf=\"noError; else error\">\n    </div>\n</ion-content>\n<ng-template #error>\n    <ion-card lines=\"none\" class=\"errorbox2\">\n        <ion-avatar class=\"center\">\n            <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n        <span class=\"errorMessage\">{{errorMessage}}</span>\n        <br />\n        <span class=\"errorMessage\">\n      <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n      <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n        <ion-icon color=\"light\" name=\"home\"></ion-icon>\n      </ion-button>\n    </span>\n    </ion-card>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/about/about.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #F3F3F3;\n}\n\nion-toolbar {\n  --background: transparent;\n  --min-height: 35px;\n  --padding: 0px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 20px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3607843137);\n}\n\nion-card-content {\n  padding: 0px 0px 10px 0px;\n  animation: fadeIn 0.3s;\n  animation-fill-mode: both;\n}\n\n.bgTop {\n  background-image: url('homepageHeader.png') !important;\n  z-index: 0;\n  background-size: cover;\n  position: absolute;\n  height: 370px;\n  width: 100%;\n}\n\n.imgGEARicon {\n  height: 225px;\n  position: relative;\n  display: block;\n  margin: -20px auto;\n  z-index: 10;\n}\n\n.imgGEARtext {\n  height: 70px;\n  position: relative;\n  display: block;\n  margin: 25px auto;\n  z-index: 10;\n}\n\n.lblVersion {\n  text-align: center;\n  display: block;\n  padding-top: 5px;\n  color: #514B4B;\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.cardOnDesc {\n  color: #2a2a2a;\n  padding: 0px 15px 15px;\n  white-space: pre-line !important;\n}\n\n.cardOffAbout {\n  animation: fadeOut 0.3s;\n  animation-fill-mode: both;\n}\n\n.cardOffWhatsNext {\n  animation: fadeOut 0.3s;\n  animation-fill-mode: both;\n}\n\n.cardOffPrivacyPolicy {\n  animation: fadeOut 0.3s;\n  animation-fill-mode: both;\n}\n\n.cardOffFeedback {\n  animation: fadeOut 0.3s;\n  animation-fill-mode: both;\n}\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.btnMenu {\n  --padding: 0px;\n  margin-top: 30px;\n}\n\n.menuAboutToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #514B4B;\n}\n\n.cardAboutSmall {\n  margin: 10px 15px;\n  font-size: 12px;\n  font-weight: bold;\n  --background: rgba(255, 255, 255, 1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divAboutHeader {\n  color: #514B4B;\n  --background: rgba(255, 255, 255, 1);\n}\n\n.headAbout {\n  color: #2a2a2a;\n  padding: 10px 10px 0 10px;\n}\n\n.icnAbout {\n  height: 20px;\n  width: 20px;\n}\n\n.lblTitleCard {\n  vertical-align: super;\n  font-size: 13px;\n  margin-left: 5px;\n  font-family: \"RobotoRegular\";\n}\n\n.menuWhatsNextToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #514B4B;\n}\n\n.cardWhatsNextSmall {\n  margin: 10px 15px;\n  font-size: 12px;\n  font-weight: bold;\n  --background: rgba(255, 255, 255, 1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divWhatsNextHeader {\n  color: #514B4B;\n  --background: rgba(255, 255, 255, 1);\n}\n\n.headWhatsNext {\n  color: #2a2a2a;\n  padding: 10px 10px 0 10px;\n}\n\n.icnWhatsNext {\n  height: 20px;\n  width: 20px;\n}\n\n.lblWhatsNext {\n  vertical-align: super;\n}\n\n.cardPrivacyPolicy {\n  margin: 10px 15px;\n  font-size: 12px;\n  font-weight: bold;\n  --background: rgba(255, 255, 255, 1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divPrivacyPolicy {\n  color: #514B4B;\n  --background: rgba(255, 255, 255, 1);\n}\n\n.icnPrivacyPolicy {\n  height: 20px;\n  width: 20px;\n}\n\n.lblPrivacyPolicy {\n  vertical-align: super;\n}\n\n.menuPrivacyPolicy {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #514B4B;\n}\n\n.menuFeedbackToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #514B4B;\n}\n\n.cardFeedbackSmall {\n  margin: 10px 15px;\n  font-size: 12px;\n  font-weight: bold;\n  --background: rgba(255, 255, 255, 1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divFeedbackHeader {\n  color: #514B4B;\n  --background: rgba(255, 255, 255, 1);\n}\n\n.headFeedback {\n  color: #2a2a2a;\n  padding: 10px 10px 0 10px;\n}\n\n.icnFeedback {\n  height: 20px;\n  width: 20px;\n}\n\n.lblFeedback {\n  vertical-align: super;\n}\n\n.txtFeedback {\n  font-size: 12px;\n}\n\n.lblfeedbackLength {\n  margin-top: 0px !important;\n  font-size: 10px;\n}\n\n.btnSubmit {\n  --background: linear-gradient(to bottom, #D3A828, #E0861F);\n  height: 35px;\n  width: 100px;\n  font-size: 11px;\n  margin: 10px 0px 0px;\n  float: right;\n  font-family: \"RobotoRegular\";\n}\n\n.EntityName {\n  font-size: 11px;\n  color: #676767;\n}\n\n.lblTitle {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.lblDetails {\n  font-size: 12px;\n  white-space: pre-line !important;\n}\n\n.lblViewOnboarding {\n  color: #388AFF;\n}\n\n.alertMessage {\n  white-space: pre-line !important;\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 0.02;\n    width: 100%;\n    height: 100%;\n  }\n  99% {\n    opacity: 0.01;\n    width: 100%;\n    height: 50%;\n  }\n  100% {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvQzpcXFVzZXJzXFwwMzE3NzVcXEdFQVItd29ya2luZy9zcmNcXGFwcFxccGFnZXNcXGFib3V0XFxhYm91dC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9EQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLHNEQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUE7RUFFSSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFFSSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFFSSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFFSSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRFQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBRUEsb0NBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEVBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFFQSxvQ0FBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0RUFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUVBLG9DQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0kscUJBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRFQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBRUEsb0NBQUE7QUNISjs7QURNQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0hKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNISjs7QURNQTtFQUNJLHFCQUFBO0FDSEo7O0FETUE7RUFDSSxlQUFBO0FDSEo7O0FETUE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUNISjs7QURNQTtFQUNJLDBEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSEo7O0FETUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtBQ0hKOztBRE1BO0VBQ0ksZ0NBQUE7QUNISjs7QUQyQkE7RUFDSTtJQUNJLFVBQUE7RUNKTjtFRE1FO0lBQ0ksYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDSk47RURNRTtJQUNJLGFBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFQ0pOO0VETUU7SUFDSSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7RUNKTjtBQUNGOztBRGtCQTtFQUNJO0lBQ0ksVUFBQTtFQ05OO0VEUUU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNOTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0YzRjNGMztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1taW4taGVpZ2h0OiAzNXB4O1xuICAgIC0tcGFkZGluZzogMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDAuM3M7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uYmdUb3Age1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lcGFnZUhlYWRlci5wbmcnKSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDA7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmltZ0dFQVJpY29uIHtcbiAgICBoZWlnaHQ6IDIyNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IC0yMHB4IGF1dG87XG4gICAgei1pbmRleDogMTA7XG59XG5cbi5pbWdHRUFSdGV4dCB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLmxibFZlcnNpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGNvbG9yOiAjNTE0QjRCO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2FyZE9uRGVzYyB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgcGFkZGluZzogMHB4IDE1cHggMTVweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbn1cblxuLmNhcmRPZmZBYm91dCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXQgMC4zcztcbiAgICBhbmltYXRpb246IGZhZGVPdXQgMC4zcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uY2FyZE9mZldoYXRzTmV4dCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXQgMC4zcztcbiAgICBhbmltYXRpb246IGZhZGVPdXQgMC4zcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uY2FyZE9mZlByaXZhY3lQb2xpY3kge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0IDAuM3M7XG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuM3M7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmNhcmRPZmZGZWVkYmFjayB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXQgMC4zcztcbiAgICBhbmltYXRpb246IGZhZGVPdXQgMC4zcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4jcm91bmRlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5NZW51IHtcbiAgICAtLXBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubWVudUFib3V0VG9nZ2xlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5jYXJkQWJvdXRTbWFsbCB7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uZGl2QWJvdXRIZWFkZXIge1xuICAgIGNvbG9yOiAjNTE0QjRCO1xuICAgIC8vIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi5oZWFkQWJvdXQge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwIDEwcHg7XG59XG5cbi5pY25BYm91dCB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4ubGJsVGl0bGVDYXJkIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4ubWVudVdoYXRzTmV4dFRvZ2dsZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNTE0QjRCO1xufVxuXG4uY2FyZFdoYXRzTmV4dFNtYWxsIHtcbiAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZXaGF0c05leHRIZWFkZXIge1xuICAgIGNvbG9yOiAjNTE0QjRCO1xuICAgIC8vIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi5oZWFkV2hhdHNOZXh0IHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xufVxuXG4uaWNuV2hhdHNOZXh0IHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5sYmxXaGF0c05leHQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn1cblxuLmNhcmRQcml2YWN5UG9saWN5IHtcbiAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZQcml2YWN5UG9saWN5IHtcbiAgICBjb2xvcjogIzUxNEI0QjtcbiAgICAvLyBwYWRkaW5nOiAxNXB4IDE1cHggMHB4IDE1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xufVxuXG4uaWNuUHJpdmFjeVBvbGljeSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4ubGJsUHJpdmFjeVBvbGljeSB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xufVxuXG4ubWVudVByaXZhY3lQb2xpY3kge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzUxNEI0Qjtcbn1cblxuLm1lbnVGZWVkYmFja1RvZ2dsZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNTE0QjRCO1xufVxuXG4uY2FyZEZlZWRiYWNrU21hbGwge1xuICAgIG1hcmdpbjogMTBweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmRpdkZlZWRiYWNrSGVhZGVyIHtcbiAgICBjb2xvcjogIzUxNEI0QjtcbiAgICAvLyBwYWRkaW5nOiAxNXB4IDE1cHggMHB4IDE1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xufVxuXG4uaGVhZEZlZWRiYWNrIHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xufVxuXG4uaWNuRmVlZGJhY2sge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLmxibEZlZWRiYWNrIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG59XG5cbi50eHRGZWVkYmFjayB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGJsZmVlZGJhY2tMZW5ndGgge1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRDNBODI4LCAjRTA4NjFGKTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uRW50aXR5TmFtZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjNjc2NzY3O1xufVxuXG4ubGJsVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxibERldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbn1cblxuLmxibFZpZXdPbmJvYXJkaW5nIHtcbiAgICBjb2xvcjogIzM4OEFGRjtcbn1cblxuLmFsZXJ0TWVzc2FnZSB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIDk5JSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgICAgb3BhY2l0eTogMC4wMjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgOTklIHtcbiAgICAgICAgb3BhY2l0eTogMC4wMTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGM0YzRjM7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1taW4taGVpZ2h0OiAzNXB4O1xuICAtLXBhZGRpbmc6IDBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM2MDc4NDMxMzcpO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAwLjNzO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uYmdUb3Age1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2hvbWVwYWdlSGVhZGVyLnBuZ1wiKSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzcwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nR0VBUmljb24ge1xuICBoZWlnaHQ6IDIyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IC0yMHB4IGF1dG87XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uaW1nR0VBUnRleHQge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMjVweCBhdXRvO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmxibFZlcnNpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBjb2xvcjogIzUxNEI0QjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNhcmRPbkRlc2Mge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgcGFkZGluZzogMHB4IDE1cHggMTVweDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkT2ZmQWJvdXQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuICBhbmltYXRpb246IGZhZGVPdXQgMC4zcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmNhcmRPZmZXaGF0c05leHQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuICBhbmltYXRpb246IGZhZGVPdXQgMC4zcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmNhcmRPZmZQcml2YWN5UG9saWN5IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXQgMC4zcztcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuM3M7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5jYXJkT2ZmRmVlZGJhY2sge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuICBhbmltYXRpb246IGZhZGVPdXQgMC4zcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuI3JvdW5kZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuTWVudSB7XG4gIC0tcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubWVudUFib3V0VG9nZ2xlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5jYXJkQWJvdXRTbWFsbCB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZBYm91dEhlYWRlciB7XG4gIGNvbG9yOiAjNTE0QjRCO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi5oZWFkQWJvdXQge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcbn1cblxuLmljbkFib3V0IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmxibFRpdGxlQ2FyZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5tZW51V2hhdHNOZXh0VG9nZ2xlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5jYXJkV2hhdHNOZXh0U21hbGwge1xuICBtYXJnaW46IDEwcHggMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uZGl2V2hhdHNOZXh0SGVhZGVyIHtcbiAgY29sb3I6ICM1MTRCNEI7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cblxuLmhlYWRXaGF0c05leHQge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcbn1cblxuLmljbldoYXRzTmV4dCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5sYmxXaGF0c05leHQge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG59XG5cbi5jYXJkUHJpdmFjeVBvbGljeSB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZQcml2YWN5UG9saWN5IHtcbiAgY29sb3I6ICM1MTRCNEI7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cblxuLmljblByaXZhY3lQb2xpY3kge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4ubGJsUHJpdmFjeVBvbGljeSB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn1cblxuLm1lbnVQcml2YWN5UG9saWN5IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5tZW51RmVlZGJhY2tUb2dnbGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzUxNEI0Qjtcbn1cblxuLmNhcmRGZWVkYmFja1NtYWxsIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmRpdkZlZWRiYWNrSGVhZGVyIHtcbiAgY29sb3I6ICM1MTRCNEI7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cblxuLmhlYWRGZWVkYmFjayB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xufVxuXG4uaWNuRmVlZGJhY2sge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4ubGJsRmVlZGJhY2sge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG59XG5cbi50eHRGZWVkYmFjayB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxibGZlZWRiYWNrTGVuZ3RoIHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0QzQTgyOCwgI0UwODYxRik7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLkVudGl0eU5hbWUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNjc2NzY3O1xufVxuXG4ubGJsVGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGJsRGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cbi5sYmxWaWV3T25ib2FyZGluZyB7XG4gIGNvbG9yOiAjMzg4QUZGO1xufVxuXG4uYWxlcnRNZXNzYWdlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAwLjAyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICA5OSUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMC4wMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgOTklIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/about/about.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");








var AboutPage = /** @class */ (function () {
    function AboutPage(loginService, menuCtrl, storage, router, loadingCtrl, alertController, httpApi) {
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.httpApi = httpApi;
        this.loadingDone = false;
        this.noError = true;
        this.lblAboutStatus = "LOADING ABOUT...";
        this.clickedAbout = false;
        this.lblWhatsNextStatus = "LOADING WHAT'S NEXT...";
        this.clickedWhatsNext = false;
        this.lblFeedbackStatus = "LOADING FEEDBACK...";
        this.clickedPrivacyPolicy = false;
        this.lblPrivacyPolicyStatus = "LOADING PRIVACY STATEMENT...";
        this.clickedFeedback = false;
        this.currentFeedbackLength = "0";
    }
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.noError = true;
        this.feedbackText = "";
        this.lblAboutStatus = "LOADING ABOUT...";
        this.lblWhatsNextStatus = "LOADING WHATS NEXT...";
        this.lblFeedbackStatus = "LOADING FEEDBACK...";
        this.getAbout('');
        this.getWhatsNext('');
        this.getFeedback('');
        this.getPrivacyPolicy('');
        this.CurrentVersion = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_VERSION"];
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
        });
    };
    AboutPage.prototype.getAbout = function (employeeid) {
        this.noError = true;
        this.loadingDone = true;
        this.lblAboutStatus = "ABOUT";
    };
    AboutPage.prototype.getWhatsNext = function (employeeid) {
        this.noError = true;
        this.loadingDone = true;
        this.lblWhatsNextStatus = "WHATS NEXT";
    };
    AboutPage.prototype.getPrivacyPolicy = function (employeeid) {
        this.noError = true;
        this.loadingDone = true;
        this.lblPrivacyPolicyStatus = "PRIVACY STATEMENT";
    };
    AboutPage.prototype.getFeedback = function (employeeid) {
        this.noError = true;
        this.loadingDone = true;
        this.lblFeedbackStatus = "FEEDBACK";
    };
    AboutPage.prototype.feedbackLength = function () {
        this.currentFeedbackLength = this.feedbackText.length.toString();
    };
    AboutPage.prototype.feedbackSubmit = function () {
        var _this = this;
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            if (_this.feedbackText == "" || _this.feedbackText == undefined || _this.feedbackText == null) {
                alert("Feedback is empty");
                return;
            }
            _this.loading.present();
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                var uri = value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/Feedback/SubmitFeedBack?userid=" + _this.empId + "&feedback=" + _this.feedbackText + "&isAnonymous=false&appPlatform=" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"] + "&appVersion=" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"];
                var url = encodeURI(uri);
                _this.httpApi.post(url, {}, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Success'] == "Yes") {
                        _this.showDialog("DONE!", "Success. Thanks for sending your feedback!", "GREAT!", true);
                    }
                    else {
                        _this.showDialog("ERROR!", "Connection error. Please try again later.", "Okay", false);
                    }
                    if (_this.loading) {
                        _this.loading.dismiss();
                    }
                })
                    .catch(function (error) {
                    if (_this.loading) {
                        _this.loading.dismiss();
                    }
                    _this.showDialog("ERROR!", "Connection error. Please try again later.", "Okay", false);
                });
            });
        });
    };
    AboutPage.prototype.showDialog = function (title, message, buttonText, isSuccess) {
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
                                        alert.dismiss();
                                        if (isSuccess) {
                                            _this.feedbackText = "";
                                        }
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
    AboutPage.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    AboutPage.prototype.removeExtraSpace = function (str) {
        return str.replace(/(\r\n|\n|\r)/gm, "");
    };
    AboutPage.prototype.toggleAboutSection = function () {
        this.clickedAbout = !this.clickedAbout;
    };
    AboutPage.prototype.toggleWhatsNextSection = function () {
        this.clickedWhatsNext = !this.clickedWhatsNext;
    };
    AboutPage.prototype.togglePrivacyPolicy = function () {
        this.clickedPrivacyPolicy = !this.clickedPrivacyPolicy;
    };
    AboutPage.prototype.toggleFeedbackSection = function () {
        this.clickedFeedback = !this.clickedFeedback;
    };
    AboutPage.prototype.toggleViewOnboarding = function () {
        this.router.navigate(['/onboarding']);
    };
    AboutPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    AboutPage.prototype.refresh = function () {
        this.ngOnInit();
    };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/pages/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/pages/about/about.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map