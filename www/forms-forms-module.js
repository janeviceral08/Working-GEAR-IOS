(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./src/app/pages/forms/forms.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/forms/forms.module.ts ***!
  \*********************************************/
/*! exports provided: FormsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPageModule", function() { return FormsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms.page */ "./src/app/pages/forms/forms.page.ts");







var routes = [
    {
        path: '',
        component: _forms_page__WEBPACK_IMPORTED_MODULE_6__["FormsPage"]
    }
];
var FormsPageModule = /** @class */ (function () {
    function FormsPageModule() {
    }
    FormsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forms_page__WEBPACK_IMPORTED_MODULE_6__["FormsPage"]]
        })
    ], FormsPageModule);
    return FormsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/forms/forms.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/forms/forms.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"btnMenu\" ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n        <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title mode=\"md\" slot=\"start\">Forms</ion-title>\n</ion-header>\n<ion-content class=\"classContent\" hide-header header=\"header\">\n  <ion-card>\n    <ion-list class=\"list\">\n      <ion-item >\n        <!-- <img class=\"imgEmployee \" src=\"assets/icon/ic_purchase_emp.png\" alt=\" \"> -->\n        <ion-icon class=\"imgEmployee \" name=\"folder\"></ion-icon>\n        <ion-label class=\"EmpDetails \" text-wrap>\n          <div class=\"EmpName \">\n            Employee Asset Form\n          </div>\n        </ion-label>\n        <ion-icon class=\"imgEmployee colorGold\"  name=\"download\"  (click)=\"downloadAssetForm()\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/forms/forms.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/forms/forms.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --background: #558B2F;\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: center;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3607843137);\n}\n\nion-icon {\n  font-size: 24px !important;\n  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3607843137);\n}\n\nion-card {\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-col {\n  padding: 0px;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.classContent {\n  --background: #F5F5F5;\n}\n\n.imgEmployee {\n  width: 50px;\n  height: 50px;\n  margin: 10px 20px;\n  margin-left: 5px;\n}\n\n.EmpDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.EmpName {\n  color: #2a2a2a;\n  font-size: 15px;\n  display: block;\n  font-family: \"RobotoMedium\";\n  margin-bottom: 10px;\n}\n\n.EmpInfo {\n  display: block;\n  color: #808080;\n  padding: 0px;\n}\n\n.rowEmpDetails {\n  font-size: 11px;\n}\n\n.rowEmpAmount {\n  color: #2a2a2a;\n  font-size: 15px;\n  font-family: \"RobotoMedium\";\n}\n\n.colorGold {\n  color: #D3A828;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybXMvQzpcXFVzZXJzXFwwMzE3NzVcXEdFQVItd29ya2luZyAtICg0KS9zcmNcXGFwcFxccGFnZXNcXGZvcm1zXFxmb3Jtcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Zvcm1zL2Zvcm1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxvREFBQTtBQ0ZKOztBREtBO0VBQ0ksMEJBQUE7RUFDQSx1REFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtFQUNBLDRFQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0FDRko7O0FES0E7RUFDSSx3Q0FBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3Jtcy9mb3Jtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM1NThCMkY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2Jhbm5lcl9kYXJrX2dyZWVuLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgLy8gaGVpZ2h0OiAxMDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5pb24tY29sIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG5NZW51IHtcbiAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XG59XG5cbi5jbGFzc0NvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cblxuLmltZ0VtcGxveWVlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLkVtcERldGFpbHMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLkVtcE5hbWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uRW1wSW5mbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ucm93RW1wRGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ucm93RW1wQW1vdW50IHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5jb2xvckdvbGQge1xuICAgIGNvbG9yOiAjRDNBODI4O1xufSIsImlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICM1NThCMkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zNjA3ODQzMTM3KTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zNjA3ODQzMTM3KTtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uYnRuTWVudSB7XG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNsYXNzQ29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cblxuLmltZ0VtcGxveWVlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5FbXBEZXRhaWxzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5FbXBOYW1lIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uRW1wSW5mbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzgwODA4MDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucm93RW1wRGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnJvd0VtcEFtb3VudCB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uY29sb3JHb2xkIHtcbiAgY29sb3I6ICNEM0E4Mjg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/forms/forms.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/forms/forms.page.ts ***!
  \*******************************************/
/*! exports provided: FormsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPage", function() { return FormsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");









var FormsPage = /** @class */ (function () {
    function FormsPage(menuCtrl, storage, httpApi, file, fileOpener, loginService, alertController, loadingCtrl) {
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.httpApi = httpApi;
        this.file = file;
        this.fileOpener = fileOpener;
        this.loginService = loginService;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
    }
    FormsPage.prototype.ngOnInit = function () {
    };
    FormsPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    FormsPage.prototype.getAssetForm = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            _this.empId = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_USER_ID"]];
            var postData = {
                EmployeeId: _this.empId,
                UserID: _this.empId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.sendRequest(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/Download/GetDownloadAssetAccountabilityFile", {
                    method: 'post',
                    data: postData,
                    responseType: 'blob'
                })
                    .then(function (response) {
                    console.log(response);
                    var filename = "assetform-" + _this.empId + ".pdf";
                    console.log(filename);
                    var pdfBlob = new Blob([response.data], { type: 'application/pdf' });
                    _this.file.writeFile(_this.file.dataDirectory, filename, pdfBlob, { replace: true }).then(function (c) {
                        _this.fileOpener.open(_this.file.dataDirectory + filename, 'application/pdf')
                            .then(function () { return console.log('File is opened'); })
                            .catch(function (e) { return console.log('Error opening file', e); });
                    });
                })
                    .catch(function (response) {
                    // prints 403
                    console.log(response.status);
                    // prints Permission denied
                    console.log(response.error);
                });
            });
        });
    };
    FormsPage.prototype.downloadAssetForm = function () {
        var _this = this;
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
                _this.empId = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_USER_ID"]];
                var postData = {
                    EmployeeId: _this.empId,
                    UserID: _this.empId,
                    SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                    AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"]
                };
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/Download/GetDownloadAssetAccountabilityFile", postData, {})
                        .then(function (data) {
                        console.log(data);
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.getAssetForm();
                            _this.loading.dismiss();
                        }
                        else {
                            var jsonData = JSON.parse(data.data);
                            console.log(jsonData);
                            if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                                _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["CONNECTION_ERROR"], true, "Okay");
                                _this.loading.dismiss();
                                return;
                            }
                            if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_YES"]) {
                                _this.loading.dismiss();
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
                                }
                                _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                                return;
                            }
                            _this.loading.dismiss();
                        }
                    })
                        .catch(function (error) {
                        _this.getAssetForm();
                        console.log(error);
                        _this.loading.dismiss();
                        // this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                    });
                });
            });
        });
    };
    FormsPage.prototype.showDialog = function (title, message, closePage, buttonText) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            buttons: [{
                                    text: buttonText,
                                    handler: function () {
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
    FormsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.page.html */ "./src/app/pages/forms/forms.page.html"),
            styles: [__webpack_require__(/*! ./forms.page.scss */ "./src/app/pages/forms/forms.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], FormsPage);
    return FormsPage;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map