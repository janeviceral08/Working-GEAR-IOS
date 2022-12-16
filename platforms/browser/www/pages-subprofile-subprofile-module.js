(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-subprofile-subprofile-module"],{

/***/ "./src/app/pages/subprofile/subprofile.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/subprofile/subprofile.module.ts ***!
  \*******************************************************/
/*! exports provided: SubprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubprofilePageModule", function() { return SubprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subprofile.page */ "./src/app/pages/subprofile/subprofile.page.ts");







var routes = [
    {
        path: '',
        component: _subprofile_page__WEBPACK_IMPORTED_MODULE_6__["SubprofilePage"]
    }
];
var SubprofilePageModule = /** @class */ (function () {
    function SubprofilePageModule() {
    }
    SubprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_subprofile_page__WEBPACK_IMPORTED_MODULE_6__["SubprofilePage"]]
        })
    ], SubprofilePageModule);
    return SubprofilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/subprofile/subprofile.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/subprofile/subprofile.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header #header>\n    <ion-buttons slot=\"start\">\n        <ion-back-button class=\"button-light\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n</ion-header>\n<ion-fab horizontal=\"end\">\n    <ion-fab-button (click)=\"moreOptions()\">\n        <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n<ion-card class=divCardHeader>\n    <ion-item lines=\"full\">\n        <ion-avatar>\n            <ion-icon class=\"divPhoto\" name=\"person\" mode=\"md\"></ion-icon>\n        </ion-avatar>\n        <ion-label text-wrap>\n            <span class=\"leaveDesc\">{{ idDesc }}</span>\n            <ion-grid class=\"leaveCreditsNameInfo\" (click)=\"setViewProfile()\">\n                <ion-row class=\"leaveCreditsName\">\n                    {{name}}\n                </ion-row>\n                <ion-row>\n                </ion-row>\n                <ion-row class=\"subViewInfo\">\n                    View Personal Info\n                </ion-row>\n            </ion-grid>\n        </ion-label>\n    </ion-item>\n</ion-card>\n<ion-content padding>\n    <ion-card class=divCardSegment mode=\"md\">\n        <div *ngIf=\"loadingDone; else shimmer\">\n            <div *ngIf=\"noError; else error\">\n                <ion-segment class=\"sgmtLeaveType\" mode=\"md\" scrollable [(ngModel)]=\"listType\">\n                    <div *ngFor=\"let list of segments\">\n                        <ion-segment-button mode=\"md\" value={{list}}>\n                            {{list}}\n                        </ion-segment-button>\n                    </div>\n                </ion-segment>\n\n                <div [ngSwitch]=\"listType\">\n                    <div *ngFor=\"let list of segments\">\n                        <ion-list mode=\"md\" *ngSwitchCase=\"list\">\n                            <div *ngIf=\"list == 'Leave Credits'\">\n                                <div *ngIf=\"leaveCredits.length > 0; else empty\">\n                                    <ion-item button detail=\"false\" *ngFor=\"let item of (leaveCredits);\">\n                                        <img class=\"imgLeave\" src={{getLeaveTypeSrc(item.LEAVECODE)}} alt=\"\">\n                                        <ion-label text-wrap>\n                                            <div class=\"leaveDetails\">\n                                                <span class=\"leaveName\">{{ item.LEAVE_DESC }}</span>\n                                            </div>\n                                            <ion-grid class=\"leaveCreditsInfo\">\n                                                <ion-row>\n                                                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                                                        Balance :\n                                                    </ion-col>\n                                                    <ion-col size=\"2\">\n                                                        {{item.BALANCE}}\n                                                    </ion-col>\n                                                    <ion-col class=\"leaveCreditsInfoNameSecondRow\">\n                                                        For Approval :\n                                                    </ion-col>\n                                                    <ion-col size=\"2\">\n                                                        {{item.APPROVAL}}\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row>\n                                                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                                                        Credit :\n                                                    </ion-col>\n                                                    <ion-col size=\"2\">\n                                                        {{item.CREDITS}}\n                                                    </ion-col>\n                                                    <ion-col class=\"leaveCreditsInfoNameSecondRow\">\n                                                        Approved :\n                                                    </ion-col>\n                                                    <ion-col size=\"2\">\n                                                        {{item.APPROVED}}\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row>\n                                                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                                                        Posted :\n                                                    </ion-col>\n                                                    <ion-col size=\"2\">\n                                                        {{item.AVAILED}}\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-grid>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                            </div>\n                            <div *ngIf=\"list == 'Leaves'\">\n                                <div *ngIf=\"leaveList.length > 0; else empty\">\n                                    <div *ngFor=\"let item of (leaveList)\">\n                                        <ion-item button lines=\"full\" detail=\"false\"\n                                            (click)=\"setLeaveDetails(item,'subleave')\">\n                                            <ion-avatar class=\"divLeaveFrom\">\n                                                <div class=\"LeaveFromMonth\">\n                                                    {{getDateMonth(item.LEAVEFROM,1)}}\n                                                </div>\n                                                <div class=\"LeaveFromDate\">\n                                                    {{getDateDate(item.LEAVEFROM)}}\n                                                </div>\n                                            </ion-avatar>\n                                            <ion-label text-wrap>\n                                                <div class=\"divLeaveDesc\">\n                                                    <div class=\"divStat\">\n                                                        <div class=\"StatusDesc\">{{ item.LEAVEDESC }}</div>\n                                                        <div class=\"DateFile\">{{ getLongDate(item.DATEFILE) }}</div>\n                                                    </div>\n                                                    <span [ngClass]=\"{'classForApprovalLabel': item.LEAVESTATUSDESC == 'FOR APPROVAL', \n                          'classApprovedLabel': item.LEAVESTATUSDESC == 'APPROVED',\n                          'classOnHoldLabel': item.LEAVESTATUSDESC == 'ON HOLD',\n                          'classPlannedLabel': item.LEAVESTATUSDESC == 'PLANNED',\n                          'classCancelledLabel': item.LEAVESTATUSDESC == 'CANCELLED',\n                          'classDisapprovedLabel': item.LEAVESTATUSDESC == 'DISAPPROVED',\n                          'classPostedLabel': item.LEAVESTATUSDESC == 'POSTED'}\" class=\"RequestType\">\n                                                        {{ item.LEAVESTATUSDESC }}\n                                                    </span>\n                                                    <ion-item button class=\"buttonMoreOptions\" lines=\"none\"\n                                                        detail=\"false\"\n                                                        (click)=\"$event.stopPropagation();MoreOptions($event, item);\"\n                                                        *ngIf=\"leaveList == 'FOR APPROVAL' || leaveList == 'APPROVED' || leaveList == 'PLANNED'\">\n                                                        &#8942;\n                                                    </ion-item>\n                                                    <ion-item button class=\"buttonMoreOptionsDetails\" lines=\"none\"\n                                                        detail=\"true\"\n                                                        *ngIf=\"leaveList != 'FOR APPROVAL' && leaveList != 'APPROVED' && leaveList != 'PLANNED'\">\n                                                    </ion-item>\n                                                    <br>\n                                                    <span class=\"LeaveDay\"\n                                                        *ngIf=\"item.LEAVEDAY > 1 \">{{ item.LEAVEDAY }} days\n                                                        duration</span>\n                                                    <span class=\"LeaveDay\"\n                                                        *ngIf=\"item.LEAVEDAY <= 1 \">{{ item.LEAVEDAY }} day\n                                                        duration</span>\n                                                </div>\n                                            </ion-label>\n                                        </ion-item>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"list == 'Attendance Advisory'\">\n                                <div *ngIf=\"advisoryList.length > 0; else empty\">\n                                    <div *ngFor=\"let item of (advisoryList)\">\n                                        <ion-item button lines=\"full\" detail=\"false\"\n                                            (click)=\"setAdvisoryDetail(item, 'subadvisory')\">\n                                            <ion-avatar class=\"divLeaveFrom\">\n                                                <div class=\"LeaveFromMonth\">\n                                                    {{getDateMonth(item.REQUESTDATE,1)}}\n                                                </div>\n                                                <div class=\"LeaveFromDate\">\n                                                    {{getDateDate(item.REQUESTDATE)}}\n                                                </div>\n                                            </ion-avatar>\n                                            <ion-label text-wrap>\n                                                <div class=\"divLeaveDesc\">\n                                                    <div class=\"divStat\">\n                                                        <span class=\"StatusDesc\">{{ item.REQUESTTYPEDESC }}</span>\n                                                    </div>\n                                                    <span class=\"RequestType\" [ngClass]=\"{'classForApprovalLabel': item.STATUS == 'FOR APPROVAL', \n                          'classApprovedLabel': item.STATUS == 'APPROVED',\n                          'classOnHoldLabel': item.STATUS == 'ON HOLD',\n                          'classPlannedLabel': item.STATUS == 'PLANNED',\n                          'classCancelledLabel': item.STATUS == 'CANCELLED',\n                          'classDisapprovedLabel': item.STATUS == 'DISAPPROVED',\n                          'classPostedLabel': item.STATUS == 'POSTED'}\">{{ item.STATUS }}\n                                                    </span>\n                                                    <ion-item button class=\"buttonMoreOptions\" lines=\"none\"\n                                                        detail=\"false\"\n                                                        (click)=\"$event.stopPropagation();MoreOptions($event, item);\"\n                                                        *ngIf=\"advisoryList == 'FOR APPROVAL' || advisoryList == 'APPROVED' || advisoryList == 'PLANNED'\">\n                                                        &#8942;\n                                                    </ion-item>\n                                                    <ion-item button class=\"buttonMoreOptionsDetails\" lines=\"none\"\n                                                        detail=\"true\"\n                                                        *ngIf=\"advisoryList != 'FOR APPROVAL' && advisoryList != 'APPROVED' && advisoryList != 'PLANNED'\">\n                                                    </ion-item>\n                                                    <br>\n                                                    <span class=\"LeaveDay\">{{ item.REQUESTTIME }} </span>\n                                                </div>\n                                            </ion-label>\n                                        </ion-item>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"list == 'Overtime'\">\n                                <div *ngIf=\"OvertimeList.length > 0; else empty\">\n                                    <div *ngFor=\"let ot of OvertimeList\">\n                                        <ion-item button detail=\"false\" lines=\"full\" (click)=\"setOvertimeDetails(ot)\">\n                                            <ion-avatar class=\"divDate\">\n                                                <div class=\"DateMonth\">\n                                                    {{getDateMonth(ot.OvertimeDateFrom,1)}}\n                                                </div>\n                                                <div class=\"DateDate\">\n                                                    {{getDateDate(ot.OvertimeDateFrom)}}\n                                                </div>\n                                            </ion-avatar>\n                                            <ion-label text-wrap>\n                                                <div class=\"divLeaveDesc\">\n                                                    <div class=\"divStat\">\n                                                        <span class=\"StatusDesc\">{{ot.STARTTIME}} -\n                                                            {{ot.ENDTIME}}</span>\n                                                    </div>\n                                                    <span class=\"RequestType\" [ngClass]=\"{'classForApprovalLabel': ot.STATUSDESC == 'FOR APPROVAL', \n                          'classApprovedLabel': ot.STATUSDESC == 'APPROVED',\n                          'classOnHoldLabel': ot.STATUSDESC == 'ON HOLD',\n                          'classPlannedLabel': ot.STATUSDESC == 'PLANNED',\n                          'classCancelledLabel': ot.STATUSDESC == 'CANCELLED',\n                          'classDisapprovedLabel': ot.STATUSDESC == 'DISAPPROVED',\n                          'classPostedLabel': ot.STATUSDESC == 'POSTED'}\">{{ ot.STATUSDESC }}\n                                                    </span>\n                                                    <div *ngIf=\"ot.PAIDHOURS != null\">\n                                                        <div class=\"LeaveDay\" *ngIf=\"ot.PAIDHOURS > 1 \">\n                                                            {{ ot.PAIDHOURS }} hours</div>\n                                                        <div class=\"LeaveDay\" *ngIf=\"ot.PAIDHOURS <= 1 \">\n                                                            {{ ot.PAIDHOURS }} hour</div>\n                                                    </div>\n                                                    <div *ngIf=\"ot.PAIDHOURS == null\">\n                                                        <div class=\"LeaveDay\" *ngIf=\"ot.APPLIEDOTHOURS > 1 \">\n                                                            {{ ot.APPLIEDOTHOURS }} hours</div>\n                                                        <div class=\"LeaveDay\" *ngIf=\"ot.APPLIEDOTHOURS <= 1 \">\n                                                            {{ ot.APPLIEDOTHOURS }} hour</div>\n                                                    </div>\n                                                    <ion-item button class=\"buttonMoreOptionsDetails2\" lines=\"none\">\n                                                    </ion-item>\n                                                </div>\n                                            </ion-label>\n                                        </ion-item>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"list == 'Work From Home'\">\n                                <div *ngIf=\"WorkFromHome.length > 0; else empty\">\n                                    <div *ngFor=\"let wfh of WorkFromHome\">\n                                    <ion-item class=\"itmClass\" button lines=\"none\" detail=\"false\">\n                                        <ion-avatar class=\"divWfhDate\" (click)=\"setWfhDetails(wfh)\">\n                                            <div class=\"DateMonth\">\n                                                {{getDateMonth(wfh.AttendanceRequestDate,1)}}\n                                            </div>\n                                            <div class=\"DateDate\">\n                                                {{getDateDate(wfh.AttendanceRequestDate)}}\n                                            </div>\n                                        </ion-avatar>\n                                        <ion-label class=\"lblWFH\" text-wrap>\n                                            <div class=\"divWFHDesc\">\n                                                <div class=\"divWFHStatus\" (click)=\"setWfhDetails(wfh)\">\n                                                    <span class=\"RequestWfhType\"\n                                                        [ngClass]=\"{'classForApprovalLabel': wfh.AttendanceStatus == 'FOR APPROVAL', \n                                                              'classApprovedLabel': wfh.AttendanceStatus == 'APPROVED',\n                                                              'classOnHoldLabel': wfh.AttendanceStatus == 'ON HOLD',\n                                                              'classPlannedLabel': wfh.AttendanceStatus == 'PLANNED',\n                                                              'classCancelledLabel': wfh.AttendanceStatus== 'CANCELLED',\n                                                              'classDisapprovedLabel': wfh.AttendanceStatus == 'DISAPPROVED',\n                                                              'classPostedLabel': wfh.AttendanceStatus == 'POSTED'}\">{{ toTitleCase(wfh.AttendanceStatus) }}</span>\n                                                </div>\n                                                <div class=\"divWFHTimeIn\" (click)=\"setWfhDetails(wfh)\">\n                                                    <span> {{ wfh.NOOFDAYS }} days</span>\n                                                </div>\n                                                <div class=\"divWFHTimeIn\" (click)=\"setWfhDetails(wfh)\">\n                                                    <span>Time In :{{wfh.DateTimeIn}}</span>\n                                                </div>\n                                                <div class=\"divWFHTimeOut\" (click)=\"setWfhDetails(wfh)\">\n                                                    <span>Time Out :{{wfh.DateTimeOut}}</span>\n                                                </div>\n                                            </div>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"list == 'DTR'\">\n                                <div *ngIf=\"DTRList.length > 0; else empty\">\n                                    <div *ngFor=\"let dtr of DTRList\">\n                                        <ion-item button detail=\"false\" lines=\"full\" (click)=\"setDTRDetails(dtr)\">\n                                            <ion-avatar class=\"divDate\">\n                                                <div class=\"DateMonth\">\n                                                    {{getDateMonth(dtr.DTR_date,1)}}\n                                                </div>\n                                                <div class=\"DateDate\">\n                                                    {{getDateDate(dtr.DTR_date)}}\n                                                </div>\n                                            </ion-avatar>\n                                            <ion-label text-wrap>\n                                                <div class=\"divDTRDesc\">\n                                                    <span *ngIf=\"dtr.Leave_rem != ''\"\n                                                        class=\"divLeave\">{{dtr.Leave_rem}}</span>\n                                                    <div class=\"divDTRTime\">\n                                                        <span *ngIf=\"dtr.Am_In != ''\">{{dtr.Am_In}}</span>\n                                                        <span *ngIf=\"dtr.Am_In == ''\">-</span>\n                                                        <span *ngIf=\"dtr.Am_Out != ''\"> - {{dtr.Am_Out}}</span>\n                                                    </div>\n                                                    <div class=\"divDTRDay\">\n                                                        <span>{{dtr.Att_Code}}</span>\n                                                    </div>\n                                                    <div class=\"divDTRHours\">\n                                                        <span>Shift: {{dtr.ShiftSchedule}}</span>\n                                                    </div>\n                                                    <ion-item button class=\"buttonMoreOptionsDetails2\" lines=\"none\">\n                                                    </ion-item>\n                                                </div>\n                                            </ion-label>\n                                        </ion-item>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"list == 'OB'\">\n                                <div *ngIf=\"OBList.length > 0; else empty\">\n                                    <div *ngFor=\"let ob of OBList\">\n                                        <ion-item class=\"itmClass\" button lines=\"full\" detail=\"false\">\n                                            <ion-avatar class=\"divDate\">\n                                                <div class=\"DateMonth\">\n                                                    {{getDateMonth(ob.Log_Date,1)}}\n                                                </div>\n                                                <div class=\"DateDate\">\n                                                    {{getDateDate(ob.Log_Date)}}\n                                                </div>\n                                            </ion-avatar>\n                                            <ion-label text-wrap>\n                                                <div class=\"divDTRDesc\">\n                                                    <div class=\"divOBTime\">\n                                                        <span *ngIf=\"ob.Log_Time != ''\">{{ob.Log_Time}}</span>\n                                                        <span *ngIf=\"ob.Log_Time == ''\">-</span>\n                                                        <span *ngIf=\"ob.Log_Time_In != ''\"> - {{ob.Log_Time_In}}</span>\n                                                    </div>\n                                                    <div class=\"divOBRemarks\">\n                                                        <span *ngIf=\"ob.Remarks != ''\">{{ob.Log_Remark}}</span>\n                                                    </div>\n                                                </div>\n                                            </ion-label>\n                                        </ion-item>\n                                    </div>\n                                </div>\n                            </div>\n                        </ion-list>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ion-card>\n</ion-content>\n<ng-template #shimmer>\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    <ion-list>\n        <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2,3,4,5]\">\n            <div id=\"box\" class=\"shine\"></div>\n            <div class=\"divShimmer\">\n                <div id=\"lines1\" class=\"shine\"></div>\n                <div id=\"lines2\" class=\"shine\"></div>\n                <div id=\"lines2\" class=\"shine\"></div>\n                <div id=\"lines2\" class=\"shine\"></div>\n            </div>\n        </ion-item>\n    </ion-list>\n</ng-template>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n                <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n            </span>\n        </div>\n    </ion-item>\n</ng-template>\n<ng-template #empty>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">EMPTY</span>\n            <span class=\"errorMessage\">\n                <!-- <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button> -->\n            </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/subprofile/subprofile.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/subprofile/subprofile.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_large_dark_green.png') !important;\n  background-size: cover;\n  background-position: center;\n  height: 100px;\n  z-index: -1;\n}\n\nion-content {\n  --background: #F3F3F3;\n}\n\nion-back-button {\n  color: white;\n  padding-top: 30px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n  margin-top: 70px;\n}\n\nion-item {\n  --inner-padding-end: 0px !important;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\nion-thumbnail {\n  height: 90px;\n  width: 90px;\n  margin: 10px;\n  margin-left: 15x;\n}\n\nion-col {\n  padding: 0px;\n}\n\n.sc-ion-buttons-md-h {\n  float: left;\n}\n\n.divCardHeader {\n  margin-top: 0px;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-bottom: 1px;\n}\n\n.imgType {\n  width: 60px;\n  height: 60px;\n  margin-left: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.leaveDesc {\n  color: #2a2a2a;\n  font-size: 18px;\n  font-weight: bold;\n  margin-left: 10px;\n  margin-right: 70px;\n  display: block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.leaveCreditsInfo {\n  font-size: 11px;\n  margin-left: 10px;\n  margin-top: -1px;\n  display: block;\n  color: #484848;\n}\n\n.leaveCreditsNameInfo {\n  margin-left: 30px;\n  margin-top: -1px;\n  display: block;\n  color: #484848;\n}\n\n.leaveCreditsName {\n  font-size: 13px;\n  font-family: \"RobotoMedium\";\n}\n\n.subViewInfo {\n  color: #388AFF;\n}\n\n.leaveCreditsProfile {\n  font-size: 12px;\n}\n\n.leaveCreditsInfoNameFirstRow {\n  max-width: 55px;\n}\n\n.leaveCreditsInfoNameSecondRow {\n  max-width: 75px;\n}\n\n.sgmtLeaveType {\n  min-width: 70px;\n  background: white;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #cecccc;\n}\n\n.classContent {\n  --background: #F5F5F5;\n  --padding-top: 10px !important;\n}\n\n.divCardSegment {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divLeaveFrom {\n  margin-top: -30px;\n}\n\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.divLeaveDesc {\n  margin-left: 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.divStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -8px;\n}\n\n.StatusDesc {\n  color: #2a2a2a;\n  font-size: 14px;\n  padding-left: 30px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.DateFile {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n  padding-right: 5px;\n}\n\n.RequestType {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  display: inline-block;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.RequestWfhType {\n  font-size: 11px;\n  display: inline-block;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.RequestTypeRed {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  display: inline-block;\n  color: #F44336;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.buttonMoreOptions {\n  font-size: 30px;\n  float: right;\n  color: #808080;\n  padding: 5px 5px 0 0;\n}\n\n.buttonMoreOptionsDetails {\n  font-size: 30px;\n  float: right;\n  padding-right: 5px;\n}\n\n.buttonMoreOptionsDetails2 {\n  margin-top: -53px;\n  font-size: 30px;\n  float: right;\n  padding-right: 5px;\n}\n\n.LeaveDay {\n  font-size: 11px;\n  margin-left: 30px;\n  color: #808080;\n}\n\n.list {\n  margin-bottom: -8px !important;\n}\n\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.header-items {\n  display: flex;\n  align-items: center;\n}\n\n.divPhoto {\n  padding-left: 20px;\n  height: 40px;\n  width: 40px;\n  color: #656464;\n}\n\n.imgLeave {\n  width: 50px;\n  height: 50px;\n  margin: 10px 20px;\n  margin-left: 5px;\n}\n\n.leaveDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-family: \"RobotoRegular\";\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n  margin-top: 70px;\n}\n\n.leaveCreditsInfo {\n  font-size: 11px;\n  margin-top: -1px;\n  display: block;\n  color: #808080;\n  padding: 0px;\n}\n\n.leaveCreditsInfoNameFirstRow {\n  max-width: 56px;\n  color: #808080;\n}\n\n.leaveCreditsInfoNameSecondRow {\n  max-width: 80px;\n  color: #808080;\n}\n\n.divDTRDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px;\n}\n\n.divDate {\n  margin-top: -30px;\n}\n\n.divWfhDate {\n  margin-top: -18px;\n}\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.divLeave {\n  font-size: 11px;\n  float: right;\n}\n\n.divDTRTime {\n  font-size: 14px;\n}\n\n.divDTRDay {\n  color: #808080;\n  font-size: 11px;\n  margin-bottom: 12px;\n}\n\n.divDTRHours {\n  color: #808080;\n  font-size: 11px;\n}\n\n.divOBTime {\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.divOBRemarks {\n  color: #808080;\n  font-size: 11px;\n  white-space: normal;\n}\n\n.divWFHStatus {\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n.divWFHTimeIn {\n  color: #808080;\n  font-size: 11px;\n}\n\n.divWFHDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px;\n}\n\n.divDTRStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -8px;\n}\n\n.divWFHTimeOut {\n  color: #808080;\n  font-size: 11px;\n}\n\n.lblWFH {\n  margin-right: 5px;\n}\n\n.divWFH {\n  width: 0;\n  height: 0;\n  font-size: 11px;\n  float: right;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VicHJvZmlsZS9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUi13b3JraW5nIC0gKDQpL3NyY1xcYXBwXFxwYWdlc1xcc3VicHJvZmlsZVxcc3VicHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1YnByb2ZpbGUvc3VicHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrREFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1DQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEVBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBSUEscUJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTko7O0FEU0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTko7O0FEU0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ05KOztBRFNBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDTko7O0FEU0E7RUFDSSw4QkFBQTtBQ05KOztBRFNBO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBQ05KOztBRFNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ05KOztBRFNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTko7O0FEU0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQ05KOztBRFNBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURTQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNOSjs7QURTQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDTko7O0FEU0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURTQTtFQUNJLGlCQUFBO0FDTko7O0FEU0E7RUFDSSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNOSjs7QURTQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDTko7O0FEU0E7RUFDSSxlQUFBO0FDTko7O0FEU0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ05KOztBRFNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0E7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUNOSjs7QURTQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDTko7O0FEU0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURTQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ05KOztBRFNBO0VBQ0ksaUJBQUE7QUNOSjs7QURTQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VicHJvZmlsZS9zdWJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfbGFyZ2VfZGFya19ncmVlbi5wbmcnKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgei1pbmRleDogLTE7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGM0YzRjM7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1eDtcbn1cblxuaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtaCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi8vQ2FyZCBIZWFkZXJcbi5kaXZDYXJkSGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4uaW1nVHlwZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxlYXZlRGVzYyB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLmxlYXZlQ3JlZGl0c05hbWVJbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG4ubGVhdmVDcmVkaXRzTmFtZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uc3ViVmlld0luZm8ge1xuICAgIGNvbG9yOiAjMzg4QUZGO1xufVxuXG4ubGVhdmVDcmVkaXRzUHJvZmlsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mb05hbWVGaXJzdFJvdyB7XG4gICAgbWF4LXdpZHRoOiA1NXB4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mb05hbWVTZWNvbmRSb3cge1xuICAgIG1heC13aWR0aDogNzVweDtcbn1cblxuLnNnbXRMZWF2ZVR5cGUge1xuICAgIG1pbi13aWR0aDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NlY2NjYztcbn1cblxuLy9JdGVtIERldGFpbHNcbi5jbGFzc0NvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXZDYXJkU2VnbWVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uZGl2TGVhdmVGcm9tIHtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogMjBweFxufVxuXG4uTGVhdmVGcm9tRGF0ZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5kaXZMZWF2ZURlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRpdlN0YXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xufVxuXG4uU3RhdHVzRGVzYyB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5EYXRlRmlsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5SZXF1ZXN0VHlwZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLy8gY29sb3I6ICM4MDgwODA7XG4gICAgbWF4LXdpZHRoOiA4NSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uUmVxdWVzdFdmaFR5cGUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8vIGNvbG9yOiAjODA4MDgwO1xuICAgIG1heC13aWR0aDogODUlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLlJlcXVlc3RUeXBlUmVkIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogI0Y0NDMzNjtcbiAgICBtYXgtd2lkdGg6IDg1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5idXR0b25Nb3JlT3B0aW9ucyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDAgMDtcbn1cblxuLmJ1dHRvbk1vcmVPcHRpb25zRGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5idXR0b25Nb3JlT3B0aW9uc0RldGFpbHMyIHtcbiAgICBtYXJnaW4tdG9wOiAtNTNweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLkxlYXZlRGF5IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LW1kIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaXZQaG90byB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBjb2xvcjogIzY1NjQ2NDtcbn1cblxuLmltZ0xlYXZlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmxlYXZlRGV0YWlscyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm8ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm9OYW1lRmlyc3RSb3cge1xuICAgIG1heC13aWR0aDogNTZweDtcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm9OYW1lU2Vjb25kUm93IHtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5kaXZEVFJEZXNjIHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuXG4uZGl2RGF0ZSB7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5kaXZXZmhEYXRlIHtcbiAgICBtYXJnaW4tdG9wOiAtMThweDtcbn1cblxuLkRhdGVNb250aCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDIwcHhcbn1cblxuLkRhdGVEYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmRpdkxlYXZlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZGl2RFRSVGltZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZGl2RFRSRGF5IHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmRpdkRUUkhvdXJzIHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5kaXZPQlRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5kaXZPQlJlbWFya3Mge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uZGl2V0ZIU3RhdHVzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uZGl2V0ZIVGltZUluIHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5kaXZXRkhEZXNjIHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuXG4uZGl2RFRSU3RhdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi5kaXZXRkhUaW1lT3V0IHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5sYmxXRkgge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZGl2V0ZIIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuIiwiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2xhcmdlX2RhcmtfZ3JlZW4ucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgei1pbmRleDogLTE7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjNGM0YzO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1eDtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmRpdkNhcmRIZWFkZXIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4uaW1nVHlwZSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubGVhdmVEZXNjIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm8ge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbi5sZWF2ZUNyZWRpdHNOYW1lSW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbi5sZWF2ZUNyZWRpdHNOYW1lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLnN1YlZpZXdJbmZvIHtcbiAgY29sb3I6ICMzODhBRkY7XG59XG5cbi5sZWF2ZUNyZWRpdHNQcm9maWxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mb05hbWVGaXJzdFJvdyB7XG4gIG1heC13aWR0aDogNTVweDtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm9OYW1lU2Vjb25kUm93IHtcbiAgbWF4LXdpZHRoOiA3NXB4O1xufVxuXG4uc2dtdExlYXZlVHlwZSB7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNjZWNjY2M7XG59XG5cbi5jbGFzc0NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIC0tcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRpdkNhcmRTZWdtZW50IHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uZGl2TGVhdmVGcm9tIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5MZWF2ZUZyb21Nb250aCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgY29sb3I6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uTGVhdmVGcm9tRGF0ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICM1QzVDNUM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5kaXZMZWF2ZURlc2Mge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kaXZTdGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbn1cblxuLlN0YXR1c0Rlc2Mge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uRGF0ZUZpbGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLlJlcXVlc3RUeXBlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDg1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5SZXF1ZXN0V2ZoVHlwZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDg1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5SZXF1ZXN0VHlwZVJlZCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNGNDQzMzY7XG4gIG1heC13aWR0aDogODUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1dHRvbk1vcmVPcHRpb25zIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBwYWRkaW5nOiA1cHggNXB4IDAgMDtcbn1cblxuLmJ1dHRvbk1vcmVPcHRpb25zRGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5idXR0b25Nb3JlT3B0aW9uc0RldGFpbHMyIHtcbiAgbWFyZ2luLXRvcDogLTUzcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5MZWF2ZURheSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IC04cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtbWQge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaXZQaG90byB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgY29sb3I6ICM2NTY0NjQ7XG59XG5cbi5pbWdMZWF2ZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubGVhdmVEZXRhaWxzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm8ge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzgwODA4MDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mb05hbWVGaXJzdFJvdyB7XG4gIG1heC13aWR0aDogNTZweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZVNlY29uZFJvdyB7XG4gIG1heC13aWR0aDogODBweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5kaXZEVFJEZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuXG4uZGl2RGF0ZSB7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4uZGl2V2ZoRGF0ZSB7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xufVxuXG4uRGF0ZU1vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5EYXRlRGF0ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICM1QzVDNUM7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5kaXZMZWF2ZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZGl2RFRSVGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdkRUUkRheSB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kaXZEVFJIb3VycyB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5kaXZPQlRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmRpdk9CUmVtYXJrcyB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5kaXZXRkhTdGF0dXMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmRpdldGSFRpbWVJbiB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5kaXZXRkhEZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuXG4uZGl2RFRSU3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi5kaXZXRkhUaW1lT3V0IHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmxibFdGSCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZGl2V0ZIIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/subprofile/subprofile.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/subprofile/subprofile.page.ts ***!
  \*****************************************************/
/*! exports provided: SubprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubprofilePage", function() { return SubprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");









var SubprofilePage = /** @class */ (function () {
    function SubprofilePage(navCtrl, storage, activatedRoute, loginService, httpApi, router, actionSheetController) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.httpApi = httpApi;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.segments = ["Leave Credits", "Leaves", "Attendance Advisory", "Overtime", "Work From Home", "DTR", "OB"];
        this.listType = "Leave Credits";
        this.activityResult = false;
    }
    SubprofilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingDone = false;
        this.noError = true;
        this.subid = this.activatedRoute.snapshot.paramMap.get('subid');
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
        this.position = this.activatedRoute.snapshot.paramMap.get('position');
        this.department = this.activatedRoute.snapshot.paramMap.get('department');
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.getSubProfile();
            _this.getSubWfh();
        });
        this.activityResult = true;
    };
    SubprofilePage.prototype.getSubProfile = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["VERSION"],
                UserID: _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["SERVER_URL"]] + "/api/GetSubordinates/GetDetails?subordinateID=" + _this.subid + "&FromDateDTR=&ToDateDTR=&FromDate_OB=&ToDate_OB=&Remarks=", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.leaveCredits = jsonData['Value']['tblLeaveCredits'];
                    _this.leaveList = jsonData['Value']['tblLeaveDetails'];
                    _this.advisoryList = jsonData['Value']['tblAttendanceAdvisory'];
                    _this.DTRList = jsonData['Value']['tblDTR'];
                    _this.OBList = jsonData['Value']['tblOB'];
                    _this.OvertimeList = jsonData['Value']['tblOT'];
                    _this.leaveListIsEmpty = _this.leaveList.length <= 0;
                    _this.advisoryListIsEmpty = _this.advisoryList <= 0;
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    SubprofilePage.prototype.getSubWfh = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SESSION"]).then(function (val) {
            var request = {
                USER: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_USER_ID"]],
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["VERSION"],
                DateFrom: "",
                DateTo: "",
                Status: "",
                EmployeeID: _this.subid,
                EmployeeName: ""
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["SERVER_URL"]] + "/api/WorkFromHome/GetSubordinatesWorkFromHomeDetails", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.WorkFromHome = jsonData['Value']['tblWFHDetails'];
                    _this.noError = true;
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    SubprofilePage.prototype.getLeaveTypeSrc = function (leaveType) {
        if (leaveType == "BL") {
            return "assets/icon/ic_bl.png";
        }
        else if (leaveType == "EL") {
            return "assets/icon/ic_el.png";
        }
        else if (leaveType == "IL") {
            return "assets/icon/ic_il.png";
        }
        else if (leaveType == "MCW") {
            return "assets/icon/ic_mcw.png";
        }
        else if (leaveType == "ML") {
            return "assets/icon/ic_ml.png";
        }
        else if (leaveType == "PL") {
            return "assets/icon/ic_pl.png";
        }
        else if (leaveType == "SL") {
            return "assets/icon/ic_sl.png";
        }
        else if (leaveType == "SPL") {
            return "assets/icon/ic_spl.png";
        }
        else if (leaveType == "VL") {
            return "assets/icon/ic_vl.png";
        }
        else if (leaveType == "XS") {
            return "assets/icon/ic_xs.png";
        }
        else {
            return "assets/icon/ic_xs.png";
        }
    };
    SubprofilePage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    SubprofilePage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    SubprofilePage.prototype.getDateYear = function (datename) {
        var date = new Date(datename);
        return date.getFullYear().toString();
    };
    SubprofilePage.prototype.getLongDate = function (datename) {
        var month = this.getDateMonth(datename, 2);
        var date = this.getDateDate(datename);
        var year = this.getDateYear(datename);
        var fulldate = month + " " + date + ", " + year;
        return fulldate;
    };
    SubprofilePage.prototype.moreOptions = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SUBORDINATESFOROT"]).then(function (val) {
            var foundOT = false;
            val.forEach(function (sub) {
                console.log(sub["EMPLOYEEID"]);
                if (sub["EMPLOYEEID"] == _this.subid) {
                    foundOT = true;
                }
            });
            if (foundOT) {
                _this.showActionsWithOT();
            }
            else {
                _this.showActions();
            }
        });
    };
    SubprofilePage.prototype.showActions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'File for ' + this.name + ' :',
                            buttons: [{
                                    text: 'Request Leave',
                                    icon: 'list-box',
                                    handler: function () {
                                        _this.router.navigate(['/leaveadd',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid]);
                                    }
                                }, {
                                    text: 'Request Attendance Advisory',
                                    icon: 'bookmarks',
                                    handler: function () {
                                        _this.router.navigate(['/advisoryadd',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid,
                                            '']);
                                    }
                                }, {
                                    text: 'Request Work From Home',
                                    icon: 'briefcase',
                                    handler: function () {
                                        console.log('wfh');
                                        _this.router.navigate(['/workfromhomeadd',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid,
                                            '',
                                            '']);
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubprofilePage.prototype.showActionsWithOT = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'File for ' + this.name + ' :',
                            buttons: [{
                                    text: 'Request Leave',
                                    icon: 'list-box',
                                    handler: function () {
                                        _this.router.navigate(['/leaveadd',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid]);
                                    }
                                }, {
                                    text: 'Request Attendance Advisory',
                                    icon: 'bookmarks',
                                    handler: function () {
                                        _this.router.navigate(['/advisoryadd',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid,
                                            '']);
                                    }
                                },
                                {
                                    text: 'Request Overtime',
                                    icon: 'alarm',
                                    handler: function () {
                                        _this.router.navigate(['/overtimeadd', '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid
                                        ]);
                                    }
                                },
                                {
                                    text: 'Request Work From Home',
                                    icon: 'briefcase',
                                    handler: function () {
                                        _this.router.navigate(['/workfromhomeadd',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid,
                                            '',
                                            '']);
                                    }
                                },
                                {
                                    text: 'Close',
                                    icon: 'close',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubprofilePage.prototype.setLeaveDetails = function (item, type) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_LEAVEDETAILS"], item);
        var itemType = type;
        if (item['LEAVESTATUSDESC'] == 'FOR APPROVAL') {
            itemType = 'forapproval';
        }
        this.router.navigate(['/leavedetails', itemType, "subprofile"]);
    };
    SubprofilePage.prototype.setAdvisoryDetail = function (item, type) {
        var itemType = type;
        if (item['STATUS'] == 'FOR APPROVAL') {
            itemType = 'forapproval';
        }
        this.router.navigate(['/advisorydetails', item['ID'], itemType, item['ISCREATEDBYMANAGER'], item['EMPNO'], 'subprofile']);
    };
    SubprofilePage.prototype.setDTRDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_DTRDETAILS"], item);
        this.router.navigate(['/dailytimerecorddetails', 'subprofile']);
    };
    SubprofilePage.prototype.setOvertimeDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_OTDETAILS"], item);
        this.router.navigate(['/overtimedetails', 'subprofile']);
    };
    SubprofilePage.prototype.setViewProfile = function () {
        this.router.navigate(['/personalinformation',
            'subordinate',
            this.subid,
            this.name,
            this.position]);
    };
    SubprofilePage.prototype.ionViewWillEnter = function () {
        if (this.activityResult) {
            this.ngOnInit();
        }
    };
    SubprofilePage.prototype.goBack = function () { this.navCtrl.back(); };
    SubprofilePage.prototype.toTitleCase = function (txt) {
        return txt.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    SubprofilePage.prototype.setWfhDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_WFHDETAILS"], item);
        console.log(item);
        this.router.navigate(['/workfromhomedetails', 'subsprofile']);
    };
    SubprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subprofile',
            template: __webpack_require__(/*! ./subprofile.page.html */ "./src/app/pages/subprofile/subprofile.page.html"),
            styles: [__webpack_require__(/*! ./subprofile.page.scss */ "./src/app/pages/subprofile/subprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]])
    ], SubprofilePage);
    return SubprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-subprofile-subprofile-module.js.map