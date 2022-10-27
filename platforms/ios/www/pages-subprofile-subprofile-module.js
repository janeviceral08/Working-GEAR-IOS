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

module.exports = "ion-header {\n  background-image: url('banner_large_dark_green.png') !important;\n  background-size: cover;\n  background-position: center;\n  height: 100px;\n  z-index: -1;\n}\n\nion-content {\n  --background: #F3F3F3;\n}\n\nion-back-button {\n  color: white;\n  padding-top: 30px;\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n  margin-top: 70px;\n}\n\nion-item {\n  --inner-padding-end: 0px !important;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\nion-thumbnail {\n  height: 90px;\n  width: 90px;\n  margin: 10px;\n  margin-left: 15x;\n}\n\nion-col {\n  padding: 0px;\n}\n\n.sc-ion-buttons-md-h {\n  float: left;\n}\n\n.divCardHeader {\n  margin-top: 0px;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-bottom: 1px;\n}\n\n.imgType {\n  width: 60px;\n  height: 60px;\n  margin-left: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.leaveDesc {\n  color: #2a2a2a;\n  font-size: 18px;\n  font-weight: bold;\n  margin-left: 10px;\n  margin-right: 70px;\n  display: block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.leaveCreditsInfo {\n  font-size: 11px;\n  margin-left: 10px;\n  margin-top: -1px;\n  display: block;\n  color: #484848;\n}\n\n.leaveCreditsNameInfo {\n  margin-left: 30px;\n  margin-top: -1px;\n  display: block;\n  color: #484848;\n}\n\n.leaveCreditsName {\n  font-size: 13px;\n  font-family: \"RobotoMedium\";\n}\n\n.subViewInfo {\n  color: #388AFF;\n}\n\n.leaveCreditsProfile {\n  font-size: 12px;\n}\n\n.leaveCreditsInfoNameFirstRow {\n  max-width: 55px;\n}\n\n.leaveCreditsInfoNameSecondRow {\n  max-width: 75px;\n}\n\n.sgmtLeaveType {\n  min-width: 70px;\n  background: white;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #cecccc;\n}\n\n.classContent {\n  --background: #F5F5F5;\n  --padding-top: 10px !important;\n}\n\n.divCardSegment {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divLeaveFrom {\n  margin-top: -30px;\n}\n\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.divLeaveDesc {\n  margin-left: 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.divStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -8px;\n}\n\n.StatusDesc {\n  color: #2a2a2a;\n  font-size: 14px;\n  padding-left: 30px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.DateFile {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n  padding-right: 5px;\n}\n\n.RequestType {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  display: inline-block;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.RequestWfhType {\n  font-size: 11px;\n  display: inline-block;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.RequestTypeRed {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  display: inline-block;\n  color: #F44336;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.buttonMoreOptions {\n  font-size: 30px;\n  float: right;\n  color: #808080;\n  padding: 5px 5px 0 0;\n}\n\n.buttonMoreOptionsDetails {\n  font-size: 30px;\n  float: right;\n  padding-right: 5px;\n}\n\n.buttonMoreOptionsDetails2 {\n  margin-top: -53px;\n  font-size: 30px;\n  float: right;\n  padding-right: 5px;\n}\n\n.LeaveDay {\n  font-size: 11px;\n  margin-left: 30px;\n  color: #808080;\n}\n\n.list {\n  margin-bottom: -8px !important;\n}\n\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.header-items {\n  display: flex;\n  align-items: center;\n}\n\n.divPhoto {\n  padding-left: 20px;\n  height: 40px;\n  width: 40px;\n  color: #656464;\n}\n\n.imgLeave {\n  width: 50px;\n  height: 50px;\n  margin: 10px 20px;\n  margin-left: 5px;\n}\n\n.leaveDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-family: \"RobotoRegular\";\n}\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n  margin-top: 70px;\n}\n\n.leaveCreditsInfo {\n  font-size: 11px;\n  margin-top: -1px;\n  display: block;\n  color: #808080;\n  padding: 0px;\n}\n\n.leaveCreditsInfoNameFirstRow {\n  max-width: 56px;\n  color: #808080;\n}\n\n.leaveCreditsInfoNameSecondRow {\n  max-width: 80px;\n  color: #808080;\n}\n\n.divDTRDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px;\n}\n\n.divDate {\n  margin-top: -30px;\n}\n\n.divWfhDate {\n  margin-top: -18px;\n}\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.divLeave {\n  font-size: 11px;\n  float: right;\n}\n\n.divDTRTime {\n  font-size: 14px;\n}\n\n.divDTRDay {\n  color: #808080;\n  font-size: 11px;\n  margin-bottom: 12px;\n}\n\n.divDTRHours {\n  color: #808080;\n  font-size: 11px;\n}\n\n.divOBTime {\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.divOBRemarks {\n  color: #808080;\n  font-size: 11px;\n  white-space: normal;\n}\n\n.divWFHStatus {\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n\n.divWFHTimeIn {\n  color: #808080;\n  font-size: 11px;\n}\n\n.divWFHDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px;\n}\n\n.divDTRStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -8px;\n}\n\n.divWFHTimeOut {\n  color: #808080;\n  font-size: 11px;\n}\n\n.lblWFH {\n  margin-right: 5px;\n}\n\n.divWFH {\n  width: 0;\n  height: 0;\n  font-size: 11px;\n  float: right;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvc3VicHJvZmlsZS9zdWJwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VicHJvZmlsZS9zdWJwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtEQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUNBQUE7QUNDSjs7QURFQTtFQUNJLHdDQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ0FKOztBRElBO0VBQ0kscUJBQUE7RUFDQSw4QkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0RUFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFJQSxxQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNOSjs7QURTQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNOSjs7QURTQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDTko7O0FEU0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNOSjs7QURTQTtFQUNJLDhCQUFBO0FDTko7O0FEU0E7RUFDSSwyQkFBQTtFQUNBLDhCQUFBO0FDTko7O0FEU0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTko7O0FEU0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURTQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FDTko7O0FEU0E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ05KOztBRFNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDTko7O0FEU0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ05KOztBRFNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNOSjs7QURTQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ05KOztBRFNBO0VBQ0ksaUJBQUE7QUNOSjs7QURTQTtFQUNJLGlCQUFBO0FDTko7O0FEU0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTko7O0FEU0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNOSjs7QURTQTtFQUNJLGVBQUE7QUNOSjs7QURTQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDTko7O0FEU0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTQTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtBQ05KOztBRFNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNOSjs7QURTQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ05KOztBRFNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDTko7O0FEU0E7RUFDSSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdWJwcm9maWxlL3N1YnByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2Jhbm5lcl9sYXJnZV9kYXJrX2dyZWVuLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0YzRjNGMztcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTV4O1xufVxuXG5pb24tY29sIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLy9DYXJkIEhlYWRlclxuLmRpdkNhcmRIZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5pbWdUeXBlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubGVhdmVEZXNjIHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm8ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG4ubGVhdmVDcmVkaXRzTmFtZUluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbi5sZWF2ZUNyZWRpdHNOYW1lIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5zdWJWaWV3SW5mbyB7XG4gICAgY29sb3I6ICMzODhBRkY7XG59XG5cbi5sZWF2ZUNyZWRpdHNQcm9maWxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZUZpcnN0Um93IHtcbiAgICBtYXgtd2lkdGg6IDU1cHg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZVNlY29uZFJvdyB7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xufVxuXG4uc2dtdExlYXZlVHlwZSB7XG4gICAgbWluLXdpZHRoOiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjY2VjY2NjO1xufVxuXG4vL0l0ZW0gRGV0YWlsc1xuLmNsYXNzQ29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgIC0tcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRpdkNhcmRTZWdtZW50IHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZMZWF2ZUZyb20ge1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4uTGVhdmVGcm9tTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyMHB4XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGl2U3RhdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLkRhdGVGaWxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLlJlcXVlc3RUeXBlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAvLyBjb2xvcjogIzgwODA4MDtcbiAgICBtYXgtd2lkdGg6IDg1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5SZXF1ZXN0V2ZoVHlwZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIC8vIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLy8gY29sb3I6ICM4MDgwODA7XG4gICAgbWF4LXdpZHRoOiA4NSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uUmVxdWVzdFR5cGVSZWQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjRjQ0MzM2O1xuICAgIG1heC13aWR0aDogODUlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1dHRvbk1vcmVPcHRpb25zIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIHBhZGRpbmc6IDVweCA1cHggMCAwO1xufVxuXG4uYnV0dG9uTW9yZU9wdGlvbnNEZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmJ1dHRvbk1vcmVPcHRpb25zRGV0YWlsczIge1xuICAgIG1hcmdpbi10b3A6IC01M3B4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uTGVhdmVEYXkge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IC04cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtbWQge1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRpdlBob3RvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGNvbG9yOiAjNjU2NDY0O1xufVxuXG4uaW1nTGVhdmUge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubGVhdmVEZXRhaWxzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mbyB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mb05hbWVGaXJzdFJvdyB7XG4gICAgbWF4LXdpZHRoOiA1NnB4O1xuICAgIGNvbG9yOiAjODA4MDgwO1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mb05hbWVTZWNvbmRSb3cge1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmRpdkRUUkRlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5kaXZEYXRlIHtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLmRpdldmaERhdGUge1xuICAgIG1hcmdpbi10b3A6IC0xOHB4O1xufVxuXG4uRGF0ZU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogMjBweFxufVxuXG4uRGF0ZURhdGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzVDNUM1QztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uZGl2TGVhdmUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5kaXZEVFJUaW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kaXZEVFJEYXkge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGl2RFRSSG91cnMge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmRpdk9CVGltZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmRpdk9CUmVtYXJrcyB7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5kaXZXRkhTdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5kaXZXRkhUaW1lSW4ge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmRpdldGSERlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5kaXZEVFJTdGF0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbn1cblxuLmRpdldGSFRpbWVPdXQge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmxibFdGSCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kaXZXRkgge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfbGFyZ2VfZGFya19ncmVlbi5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB6LWluZGV4OiAtMTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGM0YzRjM7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTV4O1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtaCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZGl2Q2FyZEhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5pbWdUeXBlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sZWF2ZURlc2Mge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mbyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLmxlYXZlQ3JlZGl0c05hbWVJbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLmxlYXZlQ3JlZGl0c05hbWUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uc3ViVmlld0luZm8ge1xuICBjb2xvcjogIzM4OEFGRjtcbn1cblxuLmxlYXZlQ3JlZGl0c1Byb2ZpbGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZUZpcnN0Um93IHtcbiAgbWF4LXdpZHRoOiA1NXB4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mb05hbWVTZWNvbmRSb3cge1xuICBtYXgtd2lkdGg6IDc1cHg7XG59XG5cbi5zZ210TGVhdmVUeXBlIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NlY2NjYztcbn1cblxuLmNsYXNzQ29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgLS1wYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2Q2FyZFNlZ21lbnQge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZMZWF2ZUZyb20ge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLkxlYXZlRnJvbU1vbnRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRpdlN0YXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xufVxuXG4uU3RhdHVzRGVzYyB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5EYXRlRmlsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzgwODA4MDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uUmVxdWVzdFR5cGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogODUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLlJlcXVlc3RXZmhUeXBlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogODUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLlJlcXVlc3RUeXBlUmVkIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI0Y0NDMzNjtcbiAgbWF4LXdpZHRoOiA4NSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYnV0dG9uTW9yZU9wdGlvbnMge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM4MDgwODA7XG4gIHBhZGRpbmc6IDVweCA1cHggMCAwO1xufVxuXG4uYnV0dG9uTW9yZU9wdGlvbnNEZXRhaWxzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmJ1dHRvbk1vcmVPcHRpb25zRGV0YWlsczIge1xuICBtYXJnaW4tdG9wOiAtNTNweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLkxlYXZlRGF5IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogLThweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRpdlBob3RvIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjb2xvcjogIzY1NjQ2NDtcbn1cblxuLmltZ0xlYXZlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5sZWF2ZURldGFpbHMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mbyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZUZpcnN0Um93IHtcbiAgbWF4LXdpZHRoOiA1NnB4O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm9OYW1lU2Vjb25kUm93IHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmRpdkRUUkRlc2Mge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5kaXZEYXRlIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5kaXZXZmhEYXRlIHtcbiAgbWFyZ2luLXRvcDogLTE4cHg7XG59XG5cbi5EYXRlTW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLkRhdGVEYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmRpdkxlYXZlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5kaXZEVFJUaW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZGl2RFRSRGF5IHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmRpdkRUUkhvdXJzIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmRpdk9CVGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZGl2T0JSZW1hcmtzIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmRpdldGSFN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uZGl2V0ZIVGltZUluIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmRpdldGSERlc2Mge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5kaXZEVFJTdGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbn1cblxuLmRpdldGSFRpbWVPdXQge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ubGJsV0ZIIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kaXZXRkgge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

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