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

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-top: 30px;\n  padding-left: 0px;\n}\n\nion-datetime {\n  height: 40px !important;\n  margin-right: 20px;\n  margin-left: 20px;\n  margin-bottom: 20px;\n}\n\n#rounded {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\nion-back-button {\n  color: white;\n  padding-top: 30px;\n  margin-left: -10px;\n}\n\n.submit-button {\n  padding-top: 30px;\n  margin-right: 10px;\n}\n\n.btnSubmit {\n  color: white;\n  padding-right: 5px;\n  margin-top: 30px;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-subtitle {\n  font-size: 1.3em;\n  position: absolute;\n  top: 52%;\n  color: #fff;\n  margin-left: 5%;\n}\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\nion-textarea {\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n  text-align: left;\n  color: #000;\n  margin-bottom: 5%;\n}\n\n.radio-item {\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.margin-bot {\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW50aWdlbnRlc3RxYS9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUi13b3JraW5nL3NyY1xcYXBwXFxwYWdlc1xcYW50aWdlbnRlc3RxYVxcYW50aWdlbnRlc3RxYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FudGlnZW50ZXN0cWEvYW50aWdlbnRlc3RxYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFFSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDREo7O0FES0E7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUNBQUE7VUFBQSxvQ0FBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRko7O0FETUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSEo7O0FET0E7RUFDSSxpQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYW50aWdlbnRlc3RxYS9hbnRpZ2VudGVzdHFhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NThCMkY7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI3JvdW5kZWQge1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG59XG5cbmlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUyJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG5cbn1cblxuLnJvdW5kZWRJdGVtcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuXG59XG5cbi5yYWRpby1pdGVtIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuXG59XG5cbi5tYXJnaW4tYm90e1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jcm91bmRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQxZDE7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYnRuU3VibWl0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUyJTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLnJvdW5kZWRJdGVtcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQxZDE7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4ucmFkaW8taXRlbSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLm1hcmdpbi1ib3Qge1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn0iXX0= */"

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