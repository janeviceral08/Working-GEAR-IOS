(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-main-module"],{

/***/ "./src/app/pages/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/main/main.page.ts");







var routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"],
        children: [
            {
                path: 'home',
                loadChildren: '../home/home.module#HomePageModule'
            },
            {
                path: 'leavecredits',
                loadChildren: '../leavecredits/leavecredits.module#LeavecreditsPageModule'
            },
            {
                path: 'leaveapproval',
                loadChildren: '../leaveapproval/leaveapproval.module#LeaveapprovalPageModule'
            },
            {
                path: 'calendar',
                loadChildren: '../calendar/calendar.module#CalendarPageModule'
            },
            {
                path: 'advisory',
                loadChildren: '../advisorytypelist/advisorytypelist.module#AdvisorytypelistPageModule'
            },
            {
                path: 'advisoryapproval',
                loadChildren: '../advisoryapproval/advisoryapproval.module#AdvisoryapprovalPageModule'
            },
            {
                path: 'subordinates',
                loadChildren: '../subordinates/subordinates.module#SubordinatesPageModule'
            },
            {
                path: 'about',
                loadChildren: '../about/about.module#AboutPageModule'
            },
            {
                path: 'personalinformation',
                loadChildren: '../personalinformation/personalinformation.module#PersonalinformationPageModule'
            },
            {
                path: 'dailytimerecord',
                loadChildren: '../dailytimerecord/dailytimerecord.module#DailytimerecordPageModule'
            },
            {
                path: 'dailytimerecord',
                loadChildren: '../dailytimerecord/dailytimerecord.module#DailytimerecordPageModule'
            },
            {
                path: 'dailytimerecord',
                loadChildren: '../dailytimerecord/dailytimerecord.module#DailytimerecordPageModule'
            },
            {
                path: 'overtime',
                loadChildren: '../overtime/overtime.module#OvertimePageModule'
            },
            {
                path: 'overtimeapproval',
                loadChildren: '../overtimeapproval/overtimeapproval.module#OvertimeapprovalPageModule'
            },
            {
                path: 'getup',
                loadChildren: '../getup/getup.module#GetupPageModule'
            },
            {
                path: 'epayslip',
                loadChildren: '../epayslip/epayslip.module#EpayslipPageModule'
            },
            {
                path: 'events',
                loadChildren: '../events/events.module#EventsPageModule'
            },
            {
                path: 'loans',
                loadChildren: '../loans/loans.module#LoansPageModule'
            },
            {
                path: 'purchases',
                loadChildren: '../purchases/purchases.module#PurchasesPageModule'
            },
            {
                path: 'workfromhome',
                loadChildren: '../workfromhome/workfromhome.module#WorkfromhomePageModule'
            },
            {
                path: 'forms',
                loadChildren: '../forms/forms.module#FormsPageModule'
            },
            {
                path: 'wfhapproval',
                loadChildren: '../wfhapproval/wfhapproval.module#WfhapprovalPageModule'
            },
            { path: 'healthtrack', loadChildren: '../healthtrack/healthtrack.module#HealthtrackPageModule' }
        ]
    },
    {
        path: '',
        redirectTo: 'home'
    }
];
var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/pages/main/main.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n  <ion-menu>\n    <ion-header>\n      <ion-label class=\"labelName\">\n        {{name}}\n      </ion-label>\n      <ion-label class=\"labelDepartment\">\n        {{department}}\n      </ion-label>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\">\n          <div class=\"appTitle\">\n            <ion-label>User</ion-label>\n          </div>\n          <div *ngFor=\"let p of userPages\">\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\">\n\n              <ion-icon *ngIf=\"p.title != 'Get Up' && \n              p.title != 'Leave Application' && \n              p.title != 'Attendance Advisory' && \n              p.title != 'Overtime Application'\" class=\"linkIcon\" slot=\"start\" [name]=\"p.icon\" [mode]=\"p.mode\">\n              </ion-icon>\n\n              <ion-icon *ngIf=\"p.title == 'Get Up' || \n              p.title == 'Leave Application' || \n              p.title == 'Attendance Advisory' || \n              p.title == 'Overtime Application'\" class=\"linkIcon2\" slot=\"start\" src=\"{{p.icon}}\"></ion-icon>\n\n              <ion-label class=\"linkName\">\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </div>\n          <div class=\"appDivider\"></div>\n          <div class=\"appTitle\" *ngIf=\"isManager == 1\">\n            <ion-label>Manager</ion-label>\n          </div>\n          <div *ngIf=\"isManager == 1\">\n            <div *ngFor=\"let p of managerPages\">\n              <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\">\n\n                <ion-icon *ngIf=\"p.title != 'Leave Approval' && \n                p.title != 'Attendance Advisory Approval' && \n                p.title != 'Overtime Approval'\" class=\"linkIcon\" slot=\"start\" [name]=\"p.icon\" [mode]=\"p.mode\">\n                </ion-icon>\n\n                <ion-icon *ngIf=\"p.title == 'Leave Approval' || \n                p.title == 'Attendance Advisory Approval' || \n                p.title == 'Overtime Approval'\" class=\"linkIcon2\" slot=\"start\" src=\"{{p.icon}}\"></ion-icon>\n\n                <ion-label class=\"linkName\">\n                  {{p.title}}\n                </ion-label>\n              </ion-item>\n            </div>\n          </div>\n          <div class=\"appDivider\" *ngIf=\"isManager == 1\">\n          </div>\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"'/main//about'\" lines=\"none\" detail=\"false\">\n            <ion-icon class=\"linkIcon\" slot=\"start\" name=\"information-circle-outline\" mode=\"ios\"></ion-icon>\n            <ion-label class=\"linkName\">\n              About\n            </ion-label>\n          </ion-item>\n          <ion-item (click)=\"logout()\" lines=\"none\" detail=\"false\">\n            <ion-icon class=\"linkIcon\" slot=\"start\" name=\"log-out\" mode=\"ios\"></ion-icon>\n            <ion-label class=\"linkName\">\n              Log Out\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet main></ion-router-outlet>\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/pages/main/main.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('homepageHeader.png') !important;\n  background-size: cover;\n  background-position: center center;\n  height: 150px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --min-height: 32px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n}\n\n.labelName {\n  color: white;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  margin-bottom: 30px;\n  margin-left: 20px;\n  font-size: 14px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3607843137);\n  font-family: \"RobotoRegular\";\n}\n\n.version {\n  font-size: 13px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  color: grey;\n}\n\n.labelDepartment {\n  color: white;\n  position: absolute;\n  bottom: 0;\n  margin-bottom: 10px;\n  margin-left: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 85%;\n  font-size: 14px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3607843137);\n}\n\n.appTitle {\n  color: #706969;\n  font-size: 14px;\n  padding: 16px 0 10px 16px;\n  font-family: \"RobotoMedium\";\n}\n\n.linkName {\n  color: #2A2A2A;\n  font-size: 13px;\n  font-family: \"RobotoRegular\";\n}\n\n.linkIcon {\n  color: #706969;\n}\n\n.linkIcon2 {\n  stroke: none;\n  stroke-width: 0;\n  fill: #706969 !important;\n  height: 25px;\n}\n\n.appDivider {\n  margin-bottom: 10px;\n  border-style: solid;\n  border-width: 0.5px;\n  border-color: #707070;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUi13b3JraW5nL3NyY1xcYXBwXFxwYWdlc1xcbWFpblxcbWFpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9EQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esb0RBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluL21haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2hvbWVwYWdlSGVhZGVyLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tbWluLWhlaWdodDogMzJweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4ubGFiZWxOYW1lIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4udmVyc2lvbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLmxhYmVsRGVwYXJ0bWVudCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIC8vIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuLmFwcFRpdGxlIHtcbiAgICBjb2xvcjogIzcwNjk2OTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTZweCAwIDEwcHggMTZweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLmxpbmtOYW1lIHtcbiAgICBjb2xvcjogIzJBMkEyQTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4ubGlua0ljb24ge1xuICAgIGNvbG9yOiAjNzA2OTY5O1xufVxuXG4ubGlua0ljb24yIHtcbiAgICBzdHJva2U6IG5vbmU7XG4gICAgc3Ryb2tlLXdpZHRoOiAwO1xuICAgIGZpbGw6ICM3MDY5NjkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5hcHBEaXZpZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjVweDtcbiAgICBib3JkZXItY29sb3I6ICM3MDcwNzA7XG59IiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZXBhZ2VIZWFkZXIucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1taW4taGVpZ2h0OiAzMnB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmxhYmVsTmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzYwNzg0MzEzNyk7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLnZlcnNpb24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogZ3JleTtcbn1cblxuLmxhYmVsRGVwYXJ0bWVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDg1JTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM2MDc4NDMxMzcpO1xufVxuXG4uYXBwVGl0bGUge1xuICBjb2xvcjogIzcwNjk2OTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxNnB4IDAgMTBweCAxNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLmxpbmtOYW1lIHtcbiAgY29sb3I6ICMyQTJBMkE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4ubGlua0ljb24ge1xuICBjb2xvcjogIzcwNjk2OTtcbn1cblxuLmxpbmtJY29uMiB7XG4gIHN0cm9rZTogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiAwO1xuICBmaWxsOiAjNzA2OTY5ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmFwcERpdmlkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAuNXB4O1xuICBib3JkZXItY29sb3I6ICM3MDcwNzA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/main/main.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/main/main.page.ts ***!
  \*****************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");








var MainPage = /** @class */ (function () {
    function MainPage(http, router, loginService, storage, alertController, navCtrl) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.loginService = loginService;
        this.storage = storage;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.userPages = [
            {
                title: 'Home',
                url: '/main/home',
                icon: 'home',
                mode: 'md'
            },
            {
                title: 'Personal Information',
                url: '/main//personalinformation',
                icon: 'contact',
                mode: 'ios'
            },
            {
                title: 'Leave Application',
                url: '/main/leavecredits',
                icon: '/assets/icon/ic_menu_leave.svg',
                mode: 'md'
            },
            {
                title: 'Attendance Advisory',
                url: '/main/advisory',
                icon: '/assets/icon/ic_menu_att.svg',
                mode: 'md'
            },
            // {
            //   title: 'Work From Home',
            //   url: '/main/workfromhome',
            //   icon: 'briefcase',
            //   mode: 'md'
            // },
            {
                title: 'Daily Time Record',
                url: '/main//dailytimerecord',
                icon: 'time',
                mode: 'ios'
            },
            {
                title: 'E-Payslip',
                url: '/main/epayslip',
                icon: 'today',
                mode: 'md'
            },
            {
                title: 'Health Track',
                url: '/main/healthtrack',
                icon: 'heart-half',
                mode: 'md'
            },
            {
                title: 'Events',
                url: '/main//events',
                icon: 'star',
                mode: 'md'
            },
            {
                title: 'Loans',
                url: '/main//loans',
                icon: 'cash',
                mode: 'ios'
            },
            {
                title: 'Purchases',
                url: '/main//purchases',
                icon: 'basket',
                mode: 'ios'
            },
            {
                title: 'Forms',
                url: '/main//forms',
                icon: 'folder',
                mode: 'md'
            },
            {
                title: 'Calendar',
                url: '/main//calendar',
                icon: 'calendar',
                mode: 'md'
            }
        ];
        this.managerPages = [
            {
                title: 'Subordinates',
                url: '/main//subordinates',
                icon: 'people',
                mode: 'ios'
            },
            {
                title: 'Leave Approval',
                url: '/main//leaveapproval',
                icon: '/assets/icon/ic_menu_la.svg',
                mode: 'md'
            },
            {
                title: 'Work From Home Approval',
                url: '/main//wfhapproval',
                icon: 'briefcase',
                mode: 'ios'
            },
            {
                title: 'Attendance Advisory Approval',
                url: '/main/advisoryapproval',
                icon: '/assets/icon/ic_menu_aa.svg',
                mode: 'ios'
            }
        ];
        this.selectedPath = '';
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    MainPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getConfigFiles();
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_EMPDETAILS"]).then(function (val) {
            _this.name = val['0']['FULLNAME'];
            _this.department = val['0']['DEPARTMENT'];
            _this.isManager = val['0']['ISMANAGER'];
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_MENU"]).then(function (val) {
            console.log(val);
            _this.isGetUp = val['0']['isGetUp'];
            _this.isOTUser = val['0']['isOTUser'];
            _this.isOTManager = val['0']['isOTManager'];
            _this.isWorkFromHome = val['0']['IsWorkFromHome'];
            if (_this.isGetUp == true) {
                var listAdd = {
                    title: 'Get Up',
                    url: '/main/getup',
                    icon: '/assets/icon/ic_getup.svg',
                    mode: 'md'
                };
                _this.userPages.splice(5, 0, listAdd);
            }
            if (_this.isWorkFromHome == true) {
                var listAdd = {
                    title: 'Work From Home',
                    url: '/main/workfromhome',
                    icon: 'briefcase',
                    mode: 'md'
                };
                _this.userPages.splice(3, 0, listAdd);
            }
            if (_this.isOTUser == true) {
                var listAdd = {
                    title: 'Overtime Application',
                    url: '/main/overtime',
                    icon: '/assets/icon/ic_menu_ot.svg',
                    mode: 'md'
                };
                _this.userPages.splice(4, 0, listAdd);
            }
            if (_this.isOTManager == true) {
                var listAdd = {
                    title: 'Overtime Approval',
                    url: '/main/overtimeapproval',
                    icon: '/assets/icon/ic_menu_oa.svg',
                    mode: 'md'
                };
                _this.managerPages.splice(3, 0, listAdd);
            }
        });
        console.log(this.userPages);
    };
    MainPage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Log Out',
                            message: 'Are you sure you want to log out?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Log Out',
                                    handler: function () {
                                        _this.loginService.logout();
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
    MainPage.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    MainPage.prototype.getConfigFiles = function () {
        var _this = this;
        console.log("getConfigFiles");
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_RECORD_ID"]],
                UserID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_USER_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["VERSION"],
                UserType: "GABC"
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.http.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["SERVER_URL"]] + "/api/Config/GetConfigFiles", request, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Success'] == "Yes") {
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_EMPID"], val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_USER_ID"]]);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_LEAVETYPES"], jsonData['Value']['tblLeaveTypeList']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_DATEOFDUTY"], jsonData['Value']['tblDateOfDutyList']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_EMPDETAILS"], jsonData['Value']['tblEmployeeDetails']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_HOLIDAYS"], jsonData['Value']['tblHolidays']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_REQTYPE"], jsonData['Value']['tblRequestType']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_MENU"], jsonData['Value']['tblMenuItems']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_OTTYPES"], jsonData['Value']['tblOTScheduledType']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_CHILDRENHOURRATE"], jsonData['Value']['tblChildrenHourRate']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_CALFILTER_HOLIDAY"], true);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_CALFILTER_LEAVES"], true);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_CALFILTER_FORAPPROVAL_LEAVES"], true);
                    }
                    else {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_ERROR"]:
                                _this.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE"]:
                                _this.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED"]:
                                _this.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED"]:
                                _this.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        alert("Connection failed. Please try again.");
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_ERROR_MESSAGE"], "Response Message: " + jsonData['Message']);
                    }
                })
                    .catch(function (error) {
                    alert("Connection failed. Please try again.");
                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_ERROR_MESSAGE"], "Get Config Files: " + error.error);
                });
            });
        });
    };
    MainPage.prototype.showSessionError = function (headerMsge, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: headerMsge,
                            message: message,
                            backdropDismiss: false,
                            buttons: [{
                                    text: 'Okay',
                                    handler: function () {
                                        _this.logout();
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
    MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.page.html */ "./src/app/pages/main/main.page.html"),
            styles: [__webpack_require__(/*! ./main.page.scss */ "./src/app/pages/main/main.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-main-main-module.js.map