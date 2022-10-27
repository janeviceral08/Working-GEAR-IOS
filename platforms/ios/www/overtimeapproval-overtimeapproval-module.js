(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["overtimeapproval-overtimeapproval-module"],{

/***/ "./src/app/pages/overtimeapproval/overtimeapproval.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/overtimeapproval/overtimeapproval.module.ts ***!
  \*******************************************************************/
/*! exports provided: OvertimeapprovalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimeapprovalPageModule", function() { return OvertimeapprovalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _overtimeapproval_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overtimeapproval.page */ "./src/app/pages/overtimeapproval/overtimeapproval.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _overtimeapproval_page__WEBPACK_IMPORTED_MODULE_6__["OvertimeapprovalPage"]
    }
];
var OvertimeapprovalPageModule = /** @class */ (function () {
    function OvertimeapprovalPageModule() {
    }
    OvertimeapprovalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_overtimeapproval_page__WEBPACK_IMPORTED_MODULE_6__["OvertimeapprovalPage"]]
        })
    ], OvertimeapprovalPageModule);
    return OvertimeapprovalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/overtimeapproval/overtimeapproval.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/overtimeapproval/overtimeapproval.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n        <ion-icon class=btnMenu color=\"light\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=btnFilter slot=\"end\" color=\"light\" (click)=\"openModal()\">\n        <ion-icon slot=\"start\" name=\"search\" mode=\"md\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title mode=\"md\" slot=\"start\">Overtime Approval</ion-title>\n  <!-- <ion-segment class=\"\" mode=\"md\" scrollable [(ngModel)]=\"OTType\">\n    <ion-segment-button checked mode=\"md\" value=\"ForApprovals\">\n      For Approvals\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"SubordinatesOvertime\">\n      Subordinate's Overtime\n    </ion-segment-button>\n  </ion-segment> -->\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div [ngSwitch]=\"OTType\">\n    <div *ngFor=\"let ot of OTTypeList\">\n      <div *ngSwitchCase=\"ot\">\n        <div *ngIf=\"ot == 'ForApprovals'\">\n          <div *ngIf=\"loadingDone; else shimmer\">\n            <div *ngIf=\"noError; else error\">\n              <ion-card *ngFor=\"let item of (results)\">\n                <ion-card-header class=\"cardHeader\">\n                  <ion-item lines=\"full\" class=\"lblHeader\">\n                    <ion-label>\n                      <div class=\"labelNameHeader\" text-wrap>\n                        <div class=\"labelName\">{{item.EMPL_NAME}}</div>\n                        <div class=\"labelDateFiled\">{{getLongDate(item.CREATEDDATE)}}</div>\n                      </div>\n                    </ion-label>\n                  </ion-item>\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-item lines=\"full\" button detail=\"true\" (click)=\"setOTDetails(item,'forapproval')\">\n                    <ion-avatar class=\"divOTFrom\">\n                      <div class=\"DateMonth\">\n                        {{getDateMonth(item.STARTDATE,1)}}\n                      </div>\n                      <div class=\"DateDate\">\n                        {{getDateDate(item.STARTDATE)}}\n                      </div>\n                    </ion-avatar>\n                    <ion-label text-wrap>\n                      <div class=\"divOTDesc\">\n                        <div class=\"divOTTime\">{{ item.STARTTIME }} - {{item.ENDTIME}}</div>\n                        <div class=\"divRemarks\" *ngIf=\"item.REMARKS != ''\">{{ item.REMARKS }}</div>\n                        <div class=\"divRemarks\" *ngIf=\"item.REMARKS == ''\">-</div>\n                        <div class=\"divOTHours\" *ngIf=\"item.APPLIEDOTHOURS > 1 \">{{ item.APPLIEDOTHOURS }} Hours</div>\n                        <div class=\"divOTHours\" *ngIf=\"item.APPLIEDOTHOURS <= 1 \">{{ item.APPLIEDOTHOURS }} Hour</div>\n                      </div>\n                    </ion-label>\n                  </ion-item>\n                </ion-card-content>\n                <ion-row class=\"cardFooter\">\n                  <ion-col class=\"colSelect\">\n                    <ion-select id=\"select{{item.ID}}\" class=\"selectItems roundedItems\" interface=\"popover\"\n                      (ionChange)=\"onSelectChange(item)\">\n                      <ion-select-option *ngFor=\"let ot of otStatusApprovalList; let idx = index\" value={{ot}}\n                        selected=\"{{idx==0}}\">{{ot}}</ion-select-option>\n                    </ion-select>\n                  </ion-col>\n                  <ion-col class=\"colTextAppliedHours\" id=\"colApplied{{item.ID}}\">\n                    <ion-input class=\"roundedItems\" id=\"applied{{item.ID}}\" type=\"num\" placeholder=\"Hours\">\n                    </ion-input>\n                  </ion-col>\n                  <ion-col class=\"colRemarks\">\n                    <ion-textarea id=\"input{{item.ID}}\" class=\"textRemarks roundedItems\" rows=\"1\" placeholder=\"Remarks\"\n                      maxlength=\"500\">\n                    </ion-textarea>\n                  </ion-col>\n                  <ion-col class=\"colSubmit\">\n                    <ion-button class=\"button-light btnSend\" fill=\"clear\" size=\"small\" (click)=\"submitOTApproval(item)\">\n                      <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                </ion-row>\n              </ion-card>\n            </div>\n          </div>\n        </div>\n        <!-- <div *ngIf=\"ot == 'SubordinatesOvertime'\">\n          <div *ngIf=\"loadingDoneSub; else shimmer\">\n            <div *ngIf=\"noErrorSub; else error\">\n              <ion-card>\n                <ion-item *ngFor=\"let ot of resultsSub\" button lines=\"full\" detail=\"false\"\n                  (click)=\"setSubOTDetails(ot)\">\n                  <ion-avatar class=\"divOTFrom\">\n                    <div class=\"DateMonth\">\n                      {{getDateMonth(ot.OvertimeDateFrom,1)}}\n                    </div>\n                    <div class=\"DateDate\">\n                      {{getDateDate(ot.OvertimeDateFrom)}}\n                    </div>\n                  </ion-avatar>\n                  <ion-label text-wrap>\n                    <div class=\"divOTDesc\">\n                      <div *ngIf=\"ot.PAIDHOURS != null\">\n                        <span class=\"divSubHours\" *ngIf=\"ot.PAIDHOURS > 1 \">{{ ot.PAIDHOURS }} hours</span>\n                        <span class=\"divSubHours\" *ngIf=\"ot.PAIDHOURS <= 1 \">{{ ot.PAIDHOURS }} hour</span>\n                      </div>\n                      <div *ngIf=\"ot.PAIDHOURS == null\">\n                        <span class=\"divSubHours\" *ngIf=\"ot.APPLIEDOTHOURS > 1 \">{{ ot.APPLIEDOTHOURS }} hours</span>\n                        <span class=\"divSubHours\" *ngIf=\"ot.APPLIEDOTHOURS <= 1 \">{{ ot.APPLIEDOTHOURS }} hour</span>\n                      </div>\n                      <div class=\"divSubName\">{{ ot.FirstName}} {{ ot.LastName}}</div>\n                      <div class=\"divStatus\" [ngClass]=\"{'classForApprovalLabel': ot.STATUSDESC == 'FOR APPROVAL', \n                        'classApprovedLabel': ot.STATUSDESC == 'APPROVED',\n                        'classOnHoldLabel': ot.STATUSDESC == 'ON HOLD',\n                        'classPlannedLabel': ot.STATUSDESC == 'PLANNED',\n                        'classCancelledLabel': ot.STATUSDESC == 'CANCELLED',\n                        'classDisapprovedLabel': ot.STATUSDESC == 'DISAPPROVED',\n                        'classPostedLabel': ot.STATUSDESC == 'POSTED'}\">{{ ot.STATUSDESC }}\n                      </div>\n                      <div class=\"divSubTime\">{{ ot.STARTTIME }} - {{ot.ENDTIME}}</div>\n                      <ion-item button class=\"buttonMoreOptionsDetails2\" lines=\"none\" detail=\"false\"\n                      (click)=\"$event.stopPropagation();MoreOptions($event, item);\">\n                          &#8942;</ion-item>\n                    </div>\n                  </ion-label>\n                </ion-item>\n              </ion-card>\n            </div>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ng-template #shimmer>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  <ion-card *ngFor=\"let number of [0,1,2,3,4,5]\">\n    <ion-card-header class=\"cardHeader\">\n      <ion-item button lines=\"full\">\n        <ion-label class=\"labelNameHeader\" text-wrap>\n          <div id=\"lines1\" class=\"shine\"></div>\n        </ion-label>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item button lines=\"full\" detail=\"true\">\n        <ion-avatar class=\"classLeaveFromDiv\">\n          <div class=\"avatarLeaveFromMonth\"></div>\n          <div class=\"avatarLeaveFromDate\"></div>\n        </ion-avatar>\n        <ion-label>\n          <div id=\"lines3\" class=\"shine\"></div><br>\n          <div id=\"lines3\" class=\"shine\"></div><br>\n          <div id=\"lines4\" class=\"shine\"></div>\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n    <ion-row class=\"cardFooter\">\n      <ion-col class=\"colSelect\">\n        <div id=\"lines5\" class=\"shine\"></div>\n      </ion-col>\n      <ion-col class=\"colRemarks\">\n        <div id=\"lines6\" class=\"shine\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ng-template>\n\n\n<ng-template #error>\n  <ion-item lines=\"none\">\n    <div class=\"errorbox\">\n      <ion-avatar class=\"center\">\n        <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n      <span class=\"errorMessage\">{{errorMessage}}</span>\n      <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">REFRESH</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n    </div>\n  </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/overtimeapproval/overtimeapproval.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/overtimeapproval/overtimeapproval.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: top;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n  margin-top: 20px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n  margin-bottom: 10px;\n}\n\nion-card {\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-card-header {\n  padding: 0px;\n}\n\nion-card-content {\n  padding: 0px 10px 0px 0px;\n}\n\nion-icon {\n  font-size: 24px !important;\n}\n\nion-segment-button {\n  padding-left: 10px;\n  font-size: 12px;\n  color: white;\n  border: 0px;\n  border-radius: 0px;\n}\n\nion-item {\n  --inner-padding-end: 0px !important;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\n.segment-button-checked {\n  color: white;\n}\n\n.btnMenu {\n  padding: 0px 0 0 5px;\n}\n\n.btnFilter {\n  margin-right: -5px;\n}\n\n.labelNameHeader {\n  padding-top: 0px;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.labelName {\n  font-size: 14px;\n  color: black;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n  max-width: 70%;\n}\n\n.labelDateFiled {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n}\n\n.classOTFromDiv {\n  margin-top: -30px;\n}\n\n.labelOTDescDiv {\n  margin: 15px 0 15px 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.labelStatusDesc {\n  font-size: 14px;\n  padding-left: 30px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.labelRequestType {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-top: -3px;\n  margin-bottom: 10px;\n  display: block;\n  color: #808080;\n}\n\n.labelRequestTypeRed {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-top: -3px;\n  margin-bottom: 10px;\n  display: block;\n  color: #F44336;\n}\n\n.labelLeaveDay {\n  font-size: 11px;\n  margin-left: 30px;\n  color: #808080;\n}\n\n.divOTFrom {\n  margin-top: -30px;\n}\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.divOTDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px;\n}\n\n.divOTTime {\n  font-size: 14px;\n}\n\n.divSubName {\n  font-size: 14px;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.divSubHours {\n  font-size: 11px;\n  float: right;\n  padding-right: 5px;\n  color: #808080;\n}\n\n.divStatus {\n  font-size: 12px;\n  margin-bottom: 12px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.divRemarks {\n  color: #808080;\n  font-size: 11px;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.divOTHours,\n.divSubTime {\n  color: #808080;\n  font-size: 11px;\n}\n\n.selectItems {\n  color: black;\n  font-size: 14px;\n  height: 39px;\n}\n\n.buttonMoreOptionsDetails {\n  margin-top: -25px;\n  font-size: 30px;\n  float: right;\n}\n\n.buttonMoreOptionsDetails2 {\n  margin-top: -50px;\n  font-size: 30px;\n  float: right;\n}\n\n.colRemarks {\n  min-width: 40px !important;\n}\n\n.colTextAppliedHours {\n  max-width: 65px !important;\n}\n\n.cardFooter {\n  margin-right: 10px;\n}\n\n.colSubmit {\n  max-width: 30px !important;\n}\n\n.colSelect {\n  max-width: 120px !important;\n  min-width: 100px;\n}\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.btnSend {\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n\n@media (max-width: 350px) {\n  ion-segment {\n    width: auto !important;\n  }\n}\n\n@media (min-width: 351px) {\n  ion-segment {\n    width: -webkit-fit-content !important;\n    width: -moz-fit-content !important;\n    width: fit-content !important;\n  }\n}\n\n@media (max-width: 530px) {\n  ion-header {\n    background-size: 185%;\n    background-position-x: 85%;\n    background-position-y: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvb3ZlcnRpbWVhcHByb3ZhbC9vdmVydGltZWFwcHJvdmFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3ZlcnRpbWVhcHByb3ZhbC9vdmVydGltZWFwcHJvdmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsNEVBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0FDREo7O0FESUE7RUFDSSwwQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUNBQUE7QUNESjs7QURJQTtFQUNJLHdDQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7O0VBRUksY0FBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFHQSxlQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0ksMEJBQUE7QUNISjs7QURNQTtFQUNJLDBCQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0ksMEJBQUE7QUNISjs7QURNQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQ0FBQTtVQUFBLG9DQUFBO0FDSEo7O0FETUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUE7RUFDSTtJQUNJLHNCQUFBO0VDSE47QUFDRjs7QURNQTtFQUNJO0lBQ0kscUNBQUE7SUFBQSxrQ0FBQTtJQUFBLDZCQUFBO0VDSk47QUFDRjs7QURPQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSwwQkFBQTtJQUNBLDJCQUFBO0VDTE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL292ZXJ0aW1lYXBwcm92YWwvb3ZlcnRpbWVhcHByb3ZhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyX2RhcmtfZ3JlZW4ucG5nJykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAvLyBoZWlnaHQ6IDEwMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvL21hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDBweDtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuTWVudSB7XG4gICAgcGFkZGluZzogMHB4IDAgMCA1cHg7XG59XG5cbi5idG5GaWx0ZXIge1xuICAgIG1hcmdpbi1yaWdodDogLTVweDtcbn1cblxuLmxhYmVsTmFtZUhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbE5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLmxhYmVsRGF0ZUZpbGVkIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjODA4MDgwO1xufVxuXG4uY2xhc3NPVEZyb21EaXYge1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4ubGFiZWxPVERlc2NEaXYge1xuICAgIG1hcmdpbjogMTVweCAwIDE1cHggMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbFN0YXR1c0Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGFiZWxSZXF1ZXN0VHlwZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5sYWJlbFJlcXVlc3RUeXBlUmVkIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI0Y0NDMzNjtcbn1cblxuLmxhYmVsTGVhdmVEYXkge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmRpdk9URnJvbSB7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5EYXRlTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyMHB4XG59XG5cbi5EYXRlRGF0ZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5kaXZPVERlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5kaXZPVFRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdlN1Yk5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXgtd2lkdGg6IDg1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kaXZTdWJIb3VycyB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5kaXZTdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRpdlJlbWFya3Mge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXgtd2lkdGg6IDg1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kaXZPVEhvdXJzLFxuLmRpdlN1YlRpbWUge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnNlbGVjdEl0ZW1zIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAzOXB4O1xufVxuXG4uYnV0dG9uTW9yZU9wdGlvbnNEZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYnV0dG9uTW9yZU9wdGlvbnNEZXRhaWxzMiB7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmNvbFJlbWFya3Mge1xuICAgIG1pbi13aWR0aDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sVGV4dEFwcGxpZWRIb3VycyB7XG4gICAgbWF4LXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkRm9vdGVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jb2xTdWJtaXQge1xuICAgIG1heC13aWR0aDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sU2VsZWN0IHtcbiAgICBtYXgtd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLnJvdW5kZWRJdGVtcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5TZW5kIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xuICAgIGlvbi1zZWdtZW50IHtcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNTFweCkge1xuICAgIGlvbi1zZWdtZW50IHtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTMwcHgpIHtcbiAgICBpb24taGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxODUlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDg1JTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlO1xuICAgIH1cbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1YztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bk1lbnUge1xuICBwYWRkaW5nOiAwcHggMCAwIDVweDtcbn1cblxuLmJ0bkZpbHRlciB7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbn1cblxuLmxhYmVsTmFtZUhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbE5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiA3MCU7XG59XG5cbi5sYWJlbERhdGVGaWxlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmNsYXNzT1RGcm9tRGl2IHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5sYWJlbE9URGVzY0RpdiB7XG4gIG1hcmdpbjogMTVweCAwIDE1cHggMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbFN0YXR1c0Rlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sYWJlbFJlcXVlc3RUeXBlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmxhYmVsUmVxdWVzdFR5cGVSZWQge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjRjQ0MzM2O1xufVxuXG4ubGFiZWxMZWF2ZURheSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGNvbG9yOiAjODA4MDgwO1xufVxuXG4uZGl2T1RGcm9tIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5EYXRlTW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLkRhdGVEYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmRpdk9URGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWluLWhlaWdodDogNzBweDtcbn1cblxuLmRpdk9UVGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdlN1Yk5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1heC13aWR0aDogODUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRpdlN1YkhvdXJzIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5kaXZTdGF0dXMge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGl2UmVtYXJrcyB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1heC13aWR0aDogODUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRpdk9USG91cnMsXG4uZGl2U3ViVGltZSB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5zZWxlY3RJdGVtcyB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDM5cHg7XG59XG5cbi5idXR0b25Nb3JlT3B0aW9uc0RldGFpbHMge1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5idXR0b25Nb3JlT3B0aW9uc0RldGFpbHMyIHtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY29sUmVtYXJrcyB7XG4gIG1pbi13aWR0aDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sVGV4dEFwcGxpZWRIb3VycyB7XG4gIG1heC13aWR0aDogNjVweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZEZvb3RlciB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNvbFN1Ym1pdCB7XG4gIG1heC13aWR0aDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sU2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4ucm91bmRlZEl0ZW1zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmJ0blNlbmQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgaW9uLXNlZ21lbnQge1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNTFweCkge1xuICBpb24tc2VnbWVudCB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MzBweCkge1xuICBpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE4NSU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA4NSU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMDAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/overtimeapproval/overtimeapproval.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/overtimeapproval/overtimeapproval.page.ts ***!
  \*****************************************************************/
/*! exports provided: OvertimeapprovalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimeapprovalPage", function() { return OvertimeapprovalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");









var OvertimeapprovalPage = /** @class */ (function () {
    function OvertimeapprovalPage(loginService, modalController, storage, router, menuCtrl, alertController, loadingCtrl, httpApi) {
        this.loginService = loginService;
        this.modalController = modalController;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.httpApi = httpApi;
        this.noError = true;
        this.noErrorSub = true;
        this.otStatusApprovalList = ["Approved", "Disapproved"];
        this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
        this.errorMessageSub = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
        this.loadingDone = false;
        this.loadingDoneSub = false;
        this.tempScheduleType = "All";
        this.OTType = "ForApprovals";
        this.OTTypeList = ["ForApprovals", "SubordinatesOvertime"];
        this.otModel = {
            SHOWALL: true
        };
        this.otModelSub = {
            SHOWALL: true
        };
    }
    OvertimeapprovalPage.prototype.ngOnInit = function () {
    };
    OvertimeapprovalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('page enter');
        this.modalIsOpen = false;
        this.noError = true;
        this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
        this.loadingDone = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_OTTYPES"]).then(function (val2) {
                val2.forEach(function (element) {
                    console.log(val2);
                    if (val2[0]) {
                        _this.otModel["SCHEDULEDTYPE"] = val2[0]['DESCRIPTION'];
                    }
                    else {
                        _this.otModel["SCHEDULEDTYPE"] = _this.tempScheduleType;
                    }
                });
            });
            _this.otModel["EMPNAME"] = "";
            _this.otModel["EMPNO"] = "";
            _this.otModel["STARTDATE"] = "";
            _this.otModel["ENDDATE"] = "";
            _this.otModel["SECTION"] = "S";
            // this.otModel["SCHEDULEDTYPE"] = "";
            _this.getOTForApproval();
            // this.getSubordinatesOT();
        });
    };
    OvertimeapprovalPage.prototype.getOTForApproval = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            _this.otModel["SessionID"] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]];
            _this.otModel["SecurityStamp"] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]];
            _this.otModel["Token"] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]];
            _this.otModel["AppPlatForm"] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"];
            _this.otModel["AppVersion"] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"];
            _this.otModel["IsActive"] = true;
            _this.otModel["STATUS"] = "LVS00001";
            _this.otModel["CreatedDate"] = "";
            _this.otModel["UserID"] = _this.empId;
            var postData = {
                EMPNAME: _this.otModel["EMPNAME"],
                EMPNO: _this.otModel["EMPNO"],
                STARTDATE: _this.otModel["STARTDATE"],
                ENDDATE: _this.otModel["ENDDATE"],
                SECTION: _this.otModel["SECTION"],
                SCHEDULEDTYPE: _this.otModel["SCHEDULEDTYPE"],
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                STATUS: "LVS00001",
                CreatedDate: "",
                UserID: _this.empId,
                IsActive: true
            };
            console.log(postData);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                console.log(value);
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/OTApproval/GetForApproval", postData, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        _this.loadingDone = true;
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        _this.loadingDone = true;
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = jsonData['Message'];
                        _this.loadingDone = true;
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = "EMPTY";
                        _this.loadingDone = true;
                        return;
                    }
                    var resultTemp = jsonData['Value'];
                    if (resultTemp.length == 0) {
                        _this.noError = false;
                        _this.errorMessage = "EMPTY";
                        _this.loadingDone = true;
                        return;
                    }
                    _this.noError = true;
                    _this.results = jsonData['Value'];
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    OvertimeapprovalPage.prototype.getSubordinatesOT = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            _this.otModelSub["UserID"] = _this.empId;
            _this.otModelSub['EMPNO'] = "";
            _this.otModelSub['STARTDATE'] = "";
            _this.otModelSub['ENDDATE'] = "";
            _this.otModelSub['STATUS'] = "";
            _this.otModelSub["SessionID"] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]];
            _this.otModelSub['SCHEDULEDTYPE'] = "";
            _this.otModelSub["SecurityStamp"] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]];
            _this.otModelSub["Token"] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]];
            _this.otModelSub["AppPlatForm"] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"];
            _this.otModelSub["CreatedDate"] = "";
            _this.otModelSub["AppVersion"] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"];
            _this.otModelSub["IsActive"] = true;
            console.log(_this.otModelSub);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/OTApproval/GetSubordinatesOT", _this.otModelSub, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.noErrorSub = false;
                        _this.errorMessageSub = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                        _this.noErrorSub = false;
                        _this.errorMessageSub = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        _this.loadingDoneSub = true;
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noErrorSub = false;
                        _this.errorMessageSub = jsonData['Message'];
                        _this.loadingDoneSub = true;
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noErrorSub = false;
                        _this.errorMessageSub = "EMPTY";
                        _this.loadingDoneSub = true;
                        return;
                    }
                    var resultTemp = jsonData['Value'];
                    if (resultTemp.length <= 0) {
                        _this.noErrorSub = false;
                        _this.errorMessageSub = "EMPTY";
                        _this.loadingDoneSub = true;
                        return;
                    }
                    _this.noErrorSub = true;
                    _this.resultsSub = jsonData['Value'];
                    _this.loadingDoneSub = true;
                })
                    .catch(function (error) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    _this.noError = false;
                    _this.errorMessageSub = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                    _this.loadingDoneSub = true;
                });
            });
        });
    };
    OvertimeapprovalPage.prototype.onSelectChange = function (ot) {
        var status = document.getElementById("select" + ot['ID']).value;
        if (status == "Approved") {
            document.getElementById("applied" + ot['ID']).style.display = "block";
            document.getElementById("colApplied" + ot['ID']).style.display = "block";
        }
        else {
            document.getElementById("applied" + ot['ID']).style.display = "none";
            document.getElementById("colApplied" + ot['ID']).style.display = "none";
        }
    };
    OvertimeapprovalPage.prototype.submitOTApproval = function (ot) {
        var _this = this;
        var status = document.getElementById("select" + ot['ID']).value;
        var remarks = document.getElementById("input" + ot['ID']).value;
        var appliedHours = document.getElementById("applied" + ot['ID']).value;
        if (status == "Approved" && (appliedHours == "" || appliedHours == null)) {
            this.showDialog("ERROR!", "Please input Applied Hours", false, "Okay!");
            return;
        }
        // else if (status == "Approved" && (remarks == "" || remarks == null)) {
        //   this.showDialog("ERROR!", "Please input remarks", false, "Okay!");
        //   return
        // }
        else if (status == "Disapproved" && (remarks == "" || remarks == null)) {
            this.showDialog("ERROR!", "Please input remarks", false, "Okay!");
            return;
        }
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var otForApproval = {
                RecordID: ot['ID'],
                UserID: _this.empId,
                ApproverRemarks: remarks,
                ApprovalStatus: _this.getStatusApproval(status),
                AppliedHours: appliedHours,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                IsActive: true,
            };
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loading = overlay;
                _this.loading.present();
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/OTApproval/ApprovalProcess", otForApproval, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_YES"]) {
                            _this.loading.dismiss();
                            switch (jsonData['Message']) {
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_ERROR"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_MESSAGE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_EXPIRED"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_REQUIRED"]);
                                    return;
                            }
                            _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                            return;
                        }
                        _this.loading.dismiss();
                        switch (status) {
                            case "Approved": {
                                _this.showDialog("DONE!", "You have approved this request", true, "Great!");
                                break;
                            }
                            case "Disapproved": {
                                _this.showDialog("DONE!", "You have disapproved this request", true, "Okay");
                                break;
                            }
                            default: {
                                _this.showDialog("DONE!", "You have processed this request", true, "Great!");
                                break;
                            }
                        }
                    })
                        .catch(function (error) {
                        _this.loading.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    OvertimeapprovalPage.prototype.getStatusApproval = function (status) {
        switch (status) {
            case "Approved": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_APPROVED"];
            }
            case "Disapproved": {
                return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_DISAPPROVED"];
            }
            default:
                {
                    return src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["LEAVE_STATUS_APPROVED"];
                }
        }
    };
    OvertimeapprovalPage.prototype.setOTDetails = function (item) {
        item["PageType"] = "Approver";
        console.log(item["PageType"]);
        console.log(item);
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_OTDETAILS"], item);
        this.router.navigate(['/overtimedetails', 'overtimeapproval']);
    };
    OvertimeapprovalPage.prototype.setSubOTDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_OTDETAILS"], item);
        this.router.navigate(['/overtimedetails', 'overtimeapproval']);
    };
    OvertimeapprovalPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
                                        if (closePage) {
                                            _this.ionViewWillEnter();
                                        }
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
    OvertimeapprovalPage.prototype.showExitDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Exit HRIS',
                            message: 'Are you sure you want to exit HRIS?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Exit',
                                    handler: function () {
                                        navigator['HRIS'].exitApp();
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OvertimeapprovalPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    OvertimeapprovalPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_2__["FilterMenuComponent"],
                                cssClass: 'modalFilterMenu',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "OvertimeApproval",
                                    data: this.otModel
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_OTTYPES"]).then(function (val) {
                                if (detail !== null) {
                                    console.log(detail);
                                    if (detail.data['isDismissed'] == 0) {
                                        _this.otModel['EMPNAME'] = detail.data['empName'];
                                        _this.otModel['EMPNO'] = detail.data['empNumber'];
                                        if (detail.data['leaveFrom'] != null)
                                            _this.otModel['STARTDATE'] = detail.data['leaveFrom'];
                                        else
                                            _this.otModel['STARTDATE'] = "";
                                        if (detail.data['leaveTo'] != null)
                                            _this.otModel['ENDDATE'] = detail.data['leaveTo'];
                                        else
                                            _this.otModel['ENDDATE'] = "";
                                        if (detail.data['sectionType'] != null)
                                            _this.otModel['SECTION'] = detail.data['sectionType'];
                                        else
                                            _this.otModel['SECTION'] = "-";
                                        if (detail.data['scheduleType'] != null) {
                                            _this.tempScheduleType = detail.data['scheduleType'];
                                            if (detail.data['scheduleType'] == "All") {
                                                _this.otModel['SCHEDULEDTYPE'] = "";
                                            }
                                            else {
                                                val.forEach(function (element) {
                                                    if (detail.data['scheduleType'] == element['DESCRIPTION']) {
                                                        _this.otModel['SCHEDULEDTYPE'] = element['SEQCODE'];
                                                    }
                                                });
                                            }
                                        }
                                        else
                                            _this.otModel['SCHEDULEDTYPE'] = "";
                                        _this.otModel['SHOWALL'] = detail.data['showDirect'];
                                        _this.loadingDone = false;
                                        _this.noError = true;
                                        _this.getOTForApproval();
                                    }
                                }
                                _this.modalIsOpen = false;
                            });
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OvertimeapprovalPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    OvertimeapprovalPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    OvertimeapprovalPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename);
        return date.getFullYear().toString();
    };
    OvertimeapprovalPage.prototype.getLongDate = function (datename) {
        if (datename == null || datename == "") {
            return "";
        }
        else {
            var month = this.getDateMonth(datename, 2);
            var date = this.getDateDate(datename);
            var year = this.getDateYear(datename);
            var fulldate = month + " " + date + ", " + year;
            return fulldate;
        }
    };
    OvertimeapprovalPage.prototype.refresh = function (event) {
        this.event = event;
        this.ionViewWillEnter();
    };
    OvertimeapprovalPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    OvertimeapprovalPage.prototype.ionViewWillLeave = function () {
        this.showExitDialog();
    };
    OvertimeapprovalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overtimeapproval',
            template: __webpack_require__(/*! ./overtimeapproval.page.html */ "./src/app/pages/overtimeapproval/overtimeapproval.page.html"),
            styles: [__webpack_require__(/*! ./overtimeapproval.page.scss */ "./src/app/pages/overtimeapproval/overtimeapproval.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"]])
    ], OvertimeapprovalPage);
    return OvertimeapprovalPage;
}());



/***/ })

}]);
//# sourceMappingURL=overtimeapproval-overtimeapproval-module.js.map