(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-antigentestqa-antigentestqa-module"],{

/***/ "./src/app/pages/antigentestqa/antigentestqa.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/antigentestqa/antigentestqa.module.ts ***!
  \*************************************************************/
/*! exports provided: AntigentestqaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntigentestqaPageModule", function() { return AntigentestqaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _antigentestqa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./antigentestqa.page */ "./src/app/pages/antigentestqa/antigentestqa.page.ts");







var routes = [
    {
        path: '',
        component: _antigentestqa_page__WEBPACK_IMPORTED_MODULE_6__["AntigentestqaPage"]
    }
];
var AntigentestqaPageModule = /** @class */ (function () {
    function AntigentestqaPageModule() {
    }
    AntigentestqaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_antigentestqa_page__WEBPACK_IMPORTED_MODULE_6__["AntigentestqaPage"]]
        })
    ], AntigentestqaPageModule);
    return AntigentestqaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/antigentestqa/antigentestqa.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/antigentestqa/antigentestqa.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-buttons>\n    <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n    <ion-title mode=\"md\">Antigen Test Questionnaire</ion-title>\n\n    <ion-button class=\"btnSubmit\" slot=\"end\" (click)=\"submit()\">\n      <ion-icon name=\"send\" mode=\"md\" color=\"light\"></ion-icon>\n  </ion-button>\n\n\n  </ion-buttons>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let question of questionAnswerList\">\n    <ion-card>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">\n          <h3>{{question.Description}}</h3>\n        </ion-label>\n      </ion-item>\n\n      <div class='margin-bot' *ngIf=\"question.AnswerType == 'RB'\">\n        <ion-radio-group mode=\"md\">\n          <div *ngFor=\"let answer of question.tblAntigenAnswer\">\n            <ion-item class=\"radio-item\" lines=\"none\"\n              (ionSelect)=\"radioChange(question.QuestionID, answer.Description, answer.AnswerID)\">\n              <ion-label>\n                <h3>{{answer.Description}}</h3>\n              </ion-label>\n              <ion-radio slot=\"start\" mode=\"md\"></ion-radio>\n            </ion-item>\n          </div>\n        </ion-radio-group>\n\n      </div>\n      <div *ngIf=\"question.AnswerType == 'TXT'\">\n        <div *ngFor=\"let answer of question.tblAntigenAnswer\">\n\n          <ion-textarea class=\"textRemarks roundedItems\" [(ngModel)]=\"question.AnswerText\"\n            (keyup)=\"reviewChange(question.QuestionID, answer.AnswerID)\" rows=\"1\" maxlength=\"500\">\n          </ion-textarea>\n\n        </div>\n\n      </div>\n\n      <div *ngIf=\"question.AnswerType == 'DTP'\">\n        <div *ngFor=\"let answer of question.tblAntigenAnswer\">\n\n        <ion-datetime id=\"rounded\" [(ngModel)]=\"question.AnswerText\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" (ionChange)=\"dateChange(question.QuestionID, answer.AnswerID)\" min=\"2016\" max=\"2099\">\n          mm/dd/yyyy</ion-datetime>\n        </div>\n\n      </div>\n\n\n    </ion-card>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/antigentestqa/antigentestqa.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/antigentestqa/antigentestqa.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-top: 30px;\n  padding-left: 0px;\n}\n\nion-datetime {\n  height: 40px !important;\n  margin-right: 20px;\n  margin-left: 20px;\n  margin-bottom: 20px;\n}\n\n#rounded {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\nion-back-button {\n  color: white;\n  padding-top: 30px;\n  margin-left: -10px;\n}\n\n.submit-button {\n  padding-top: 30px;\n  margin-right: 10px;\n}\n\n.btnSubmit {\n  color: white;\n  padding-right: 5px;\n  margin-top: 30px;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-subtitle {\n  font-size: 1.3em;\n  position: absolute;\n  top: 52%;\n  color: #fff;\n  margin-left: 5%;\n}\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\nion-textarea {\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n  text-align: left;\n  color: #000;\n  margin-bottom: 5%;\n}\n\n.radio-item {\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.margin-bot {\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvYW50aWdlbnRlc3RxYS9hbnRpZ2VudGVzdHFhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYW50aWdlbnRlc3RxYS9hbnRpZ2VudGVzdHFhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUVJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQ0FBQTtVQUFBLG9DQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNESjs7QURLQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQ0FBQTtVQUFBLG9DQUFBO0FDRko7O0FES0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURNQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURPQTtFQUNJLGlCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hbnRpZ2VudGVzdHFhL2FudGlnZW50ZXN0cWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jcm91bmRlZCB7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYnRuU3VibWl0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbn1cblxuaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuLmNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTIlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcblxufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG5cbn1cblxuLnJhZGlvLWl0ZW0ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG5cbn1cblxuLm1hcmdpbi1ib3R7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbiIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNyb3VuZGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5idG5TdWJtaXQge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIlO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5yYWRpby1pdGVtIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4ubWFyZ2luLWJvdCB7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/antigentestqa/antigentestqa.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/antigentestqa/antigentestqa.page.ts ***!
  \***********************************************************/
/*! exports provided: AntigentestqaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntigentestqaPage", function() { return AntigentestqaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var AntigentestqaPage = /** @class */ (function () {
    function AntigentestqaPage(storage, router, menuCtrl, httpApi, datepipe, modalController, navCtrl, loginService, alertController, loadingCtrl, plt) {
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.httpApi = httpApi;
        this.datepipe = datepipe;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.loadingDone = false;
        this.noError = true;
        this.questionAnswerList = [];
        this.antigenQuestionList = [];
        this.antigenAnswerList = [];
    }
    AntigentestqaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingDone = false;
        this.plt.ready().then(function () {
            console.log('plt');
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
                _this.getAntigenTestQaData();
            });
        });
    };
    AntigentestqaPage.prototype.getAntigenTestQaData = function () {
        var _this = this;
        console.log('getAntigenTestData');
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SESSION"]).then(function (val) {
            var request = {
                UserID: _this.empId,
                EmployeeId: _this.empId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["VERSION"],
                ProcessType: "covid-antigen-qa-details",
                UserType: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_USER_TYPE"]]
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"]] + "/api/health/covid/antigen", request, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
                        _this.loadingDone = true;
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_YES"]) {
                        _this.loadingDone = true;
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                            case "No Available Data.":
                                _this.noError = false;
                                _this.errorMessage = "EMPTY";
                                return;
                            default:
                                _this.noError = false;
                                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
                                return;
                        }
                    }
                    console.log(jsonData);
                    _this.antigenQuestionList = jsonData['Value']['tblAntigenQuestionaire'];
                    _this.antigenAnswerList = jsonData['Value']['tblAntigenAnswer'];
                    _this.antigenQuestionList.forEach(function (question) {
                        var answerList = [];
                        var answerQuestion = {
                            QuestionID: question.QuestionID,
                            Description: question.Description,
                            tblAntigenAnswer: answerList,
                            AnswerID: '',
                            AnswerText: '',
                            AnswerType: ''
                        };
                        _this.antigenAnswerList.forEach(function (answer) {
                            if (question.QuestionID == answer.QuestionCode) {
                                answerQuestion.AnswerType = answer.Type;
                                answerList.push(answer);
                            }
                        });
                        answerQuestion.tblAntigenAnswer = answerList;
                        _this.questionAnswerList.push(answerQuestion);
                    });
                    console.log(_this.questionAnswerList);
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    console.log(error);
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    AntigentestqaPage.prototype.reviewChange = function (id, answer) {
        this.questionAnswerList.forEach(function (element) {
            if (element.QuestionID == id) {
                element.AnswerID = answer;
            }
        });
    };
    AntigentestqaPage.prototype.radioChange = function (id, answer, answerid) {
        this.questionAnswerList.forEach(function (element) {
            if (element.QuestionID == id) {
                element.AnswerText = answer;
                element.AnswerID = answerid;
            }
        });
    };
    AntigentestqaPage.prototype.dateChange = function (id, answerid) {
        var _this = this;
        this.questionAnswerList.forEach(function (element) {
            if (element.QuestionID == id) {
                element.AnswerID = answerid;
                element.AnswerText = _this.datepipe.transform((element.AnswerText), 'MM/dd/yyyy');
            }
        });
    };
    AntigentestqaPage.prototype.submit = function () {
        var _this = this;
        console.log(this.questionAnswerList);
        var keepGoing = true;
        this.questionAnswerList.forEach(function (element) {
            if (keepGoing) {
                if (!element.AnswerText || !element.QuestionID || !element.AnswerID) {
                    alert("Please answer all questions.");
                    keepGoing = false;
                }
            }
        });
        this.numberOfAnswers = 0;
        console.log('submit answers');
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.questionAnswerList.forEach(function (element) {
                _this.submitTextAnswer(element.QuestionID, element.AnswerID, element.AnswerText);
            });
        });
    };
    AntigentestqaPage.prototype.checkAllAnswers = function () {
        this.numberOfAnswers++;
        console.log(this.numberOfAnswers);
        if (this.numberOfAnswers == this.questionAnswerList.length) {
            console.log("success");
            this.showDialog("Success!", "Your answers have been saved.", "Okay");
            if (this.loading) {
                this.loading.dismiss();
            }
        }
    };
    AntigentestqaPage.prototype.submitTextAnswer = function (questionid, andswerid, answertext) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SESSION"]).then(function (val) {
            var request = {
                UserID: _this.empId,
                EmployeeId: _this.empId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["VERSION"],
                ProcessType: "insert-employee-covid-antigen-qa-details",
                UserType: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_USER_TYPE"]],
                QuestionID: questionid,
                AnswerID: andswerid,
                AnswerText: answertext
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"]] + "/api/health/covid/antigen", request, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["SOMETHING_WENT_WRONG"], "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["SOMETHING_WENT_WRONG"], "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["POST_YES"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["SOMETHING_WENT_WRONG"], "Okay");
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_2__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                            default:
                                return;
                        }
                    }
                    _this.checkAllAnswers();
                })
                    .catch(function (error) {
                    console.log(error);
                });
            });
        });
    };
    AntigentestqaPage.prototype.showDialog = function (title, message, buttonText) {
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
                                        _this.navCtrl.back();
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
    AntigentestqaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-antigentestqa',
            template: __webpack_require__(/*! ./antigentestqa.page.html */ "./src/app/pages/antigentestqa/antigentestqa.page.html"),
            styles: [__webpack_require__(/*! ./antigentestqa.page.scss */ "./src/app/pages/antigentestqa/antigentestqa.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
    ], AntigentestqaPage);
    return AntigentestqaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-antigentestqa-antigentestqa-module.js.map