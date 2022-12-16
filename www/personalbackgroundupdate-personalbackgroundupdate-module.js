(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personalbackgroundupdate-personalbackgroundupdate-module"],{

/***/ "./src/app/pages/personalbackgroundupdate/personalbackgroundupdate.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/personalbackgroundupdate/personalbackgroundupdate.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PersonalbackgroundupdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalbackgroundupdatePageModule", function() { return PersonalbackgroundupdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _personalbackgroundupdate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personalbackgroundupdate.page */ "./src/app/pages/personalbackgroundupdate/personalbackgroundupdate.page.ts");







var routes = [
    {
        path: '',
        component: _personalbackgroundupdate_page__WEBPACK_IMPORTED_MODULE_6__["PersonalbackgroundupdatePage"]
    }
];
var PersonalbackgroundupdatePageModule = /** @class */ (function () {
    function PersonalbackgroundupdatePageModule() {
    }
    PersonalbackgroundupdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_personalbackgroundupdate_page__WEBPACK_IMPORTED_MODULE_6__["PersonalbackgroundupdatePage"]]
        })
    ], PersonalbackgroundupdatePageModule);
    return PersonalbackgroundupdatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/personalbackgroundupdate/personalbackgroundupdate.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/personalbackgroundupdate/personalbackgroundupdate.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons class=\"buttonHeaderClass\" mode=\"md\">\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        <ion-title mode=\"md\">Personal Background Update</ion-title>\n        <ion-button class=\"btnSubmit\" slot=\"end\" (click)=\"UpdatePersonalBackground()\">\n            <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-header>\n<ion-content class=\"ContentClass\">\n    <ion-list lines=\"none\">\n        <ion-grid>\n            <ion-card>\n                <ion-card-header (click)=\"togglePersonalSection()\">\n                    <ion-icon class=\"icnAbout\" name=\"person\" mode=\"md\"></ion-icon>\n                    <ion-label class=\"lblName\">PERSONAL BACKGROUND</ion-label>\n                  \n                    <ion-icon class=\"menuToggle\" name=\"{{clickedPersonal ? 'arrow-dropup': 'arrow-dropdown'}}\">\n                    </ion-icon>\n                </ion-card-header>\n                <ion-card-content *ngIf=\"clickedPersonal\">\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    \n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">LAST NAME </ion-label>\n                        <ion-input id=\"rounded\" type=\"text\"  [(ngModel)]=\"LastNAME\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">FIRST NAME</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"FNAME\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">MIDDLE INITIAL</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"MIDDLENAME\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">MIDDLE INITIAL BEFORE MARRIAGE</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"MAIDENNAME\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">SUFFIX</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"SUFFIX\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">TITLE</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"TITLE\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">NICKNAME</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"NICKNAME\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">BIRTHDAY</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"BIRTHDAY2\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\" (ionChange)=\"getAddLeaveEndDate()\">\n                            mm/dd/yyyy</ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-item class=\"duration\" [disabled]=\"isDurationDisabled\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">AGE</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"AGE\" (ionBlur)=\"onDurationChanged()\">\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">PLACE OF BIRTH</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"PLACEOFBIRTH\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">COUNTRY OF BIRTH</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"COUNTRYOFBIRTH\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">GENDER</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"SEX\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">CIVIL STATUS</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"CIVILSTATUS\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">SINCE WHEN</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"DATEOFMARRIAGE\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">NATIONALITY</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"NATIONALITY\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">RELIGION</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"RELIGION\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">OTHERS</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"RELIGIONOTHERS\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n\n\n    <ion-card>\n        <ion-card-header (click)=\"toggleContactSection()\">\n            <ion-icon class=\"icnAbout\" name=\"call\"></ion-icon>\n            <ion-label class=\"lblName\">CONTACT DETAILS</ion-label>\n            <ion-icon class=\"menuToggle\" name=\"{{clickedContact ? 'arrow-dropup': 'arrow-dropdown'}}\">\n            </ion-icon>\n        </ion-card-header>\n        <ion-card-content *ngIf=\"clickedContact\">\n\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">LANDLINE</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">MOBILE NUMBER</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"PhoneNUMBER\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">COMPANY EMAIL ADDRESS</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"EMAILADD\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n\n        </ion-card-content>\n    </ion-card>\n\n\n             <ion-card>\n                <ion-card-header (click)=\"toggleAddressSection()\">\n                    <ion-icon class=\"icnAbout\" name=\"home\"></ion-icon>\n                    <ion-label class=\"lblName\">PERMANENT ADDRESS</ion-label>\n                    <ion-icon class=\"menuToggle\" name=\"{{clickedAddress ? 'arrow-dropup': 'arrow-dropdown'}}\">\n                    </ion-icon>\n                </ion-card-header>\n                <ion-card-content *ngIf=\"clickedAddress\">\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">NO. (INCLUDE BLDG./APT. NUMBER)</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">STREET</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">BARANGAY</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">MUNICIPALITY</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">CITY</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">ZIP CODE</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">PROVINCE</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n           \n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">COUNTRY</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">TELEPHONE NUMBER(S)</ion-label>\n                        <ion-input id=\"rounded\" type=\"text\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\"></ion-input>\n                    </ion-item>\n                </ion-col>\n               \n            </ion-row>\n           \n        </ion-card-content>\n    </ion-card>\n\n            <ion-row>\n                <ion-col size=\"5\">\n                    <ion-item>\n                        <ion-button class=\"AttachButton\" shape=\"round\" (click)=\"attachFile()\">\n                            Attach File\n                            <ion-icon slot=\"start\" name=\"attach\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"7\">\n                    <ion-item class=\"FileName\">\n                        <ion-label>{{ fileName }}\n                        </ion-label>\n                        <ion-icon class=\"FileNameClose\" slot=\"end\" name=\"close-circle\" *ngIf=\"hasAttachment\" (click)=\"removeAttachment()\"></ion-icon>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n        </ion-grid>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/personalbackgroundupdate/personalbackgroundupdate.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/personalbackgroundupdate/personalbackgroundupdate.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px;\n}\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px;\n}\n\nion-back-button {\n  color: white;\n  margin-left: -10px;\n}\n\nion-select {\n  height: 40px !important;\n}\n\nion-input {\n  height: 40px !important;\n}\n\nion-datetime {\n  height: 40px !important;\n}\n\nion-checkbox {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n}\n\n.btnSubmit {\n  color: white;\n  padding-right: 5px;\n}\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\ninput {\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important;\n}\n\n.EntityName {\n  font-size: 11px;\n  color: #676767;\n}\n\n.duration.ng-invalid {\n  border-bottom-color: transparent;\n}\n\n.duration.ng-valid {\n  border-bottom-color: transparent;\n}\n\n.calendarClass {\n  position: absolute;\n  right: 5px;\n  bottom: 4px;\n}\n\n.AttachButton {\n  font-size: inherit;\n  height: 90%;\n  width: 100%;\n  color: #484848;\n  --background: #D6D7D7;\n}\n\n.FileName {\n  --padding-start: 0;\n  font-size: 13px;\n}\n\n.FileNameClose {\n  height: 20px;\n  width: 20px;\n  color: #484848;\n}\n\n.label {\n  color: #2a2a2a;\n  font-size: 12px;\n  font-family: \"RobotoLight\";\n}\n\n.menuToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #514B4B;\n}\n\n.icnAbout {\n  height: 20px;\n  width: 20px;\n  padding-right: 10px;\n}\n\n.lblEntity {\n  vertical-align: super;\n  padding-left: 15px;\n}\n\n.lblName {\n  font-family: \"RobotoRegular\";\n  vertical-align: super;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyc29uYWxiYWNrZ3JvdW5kdXBkYXRlL0M6XFxVc2Vyc1xcMDMxNzc1XFxHRUFSLXdvcmtpbmcgLSAoNCkvc3JjXFxhcHBcXHBhZ2VzXFxwZXJzb25hbGJhY2tncm91bmR1cGRhdGVcXHBlcnNvbmFsYmFja2dyb3VuZHVwZGF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BlcnNvbmFsYmFja2dyb3VuZHVwZGF0ZS9wZXJzb25hbGJhY2tncm91bmR1cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQ0FBQTtVQUFBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxxQ0FBQTtVQUFBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURBQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcnNvbmFsYmFja2dyb3VuZHVwZGF0ZS9wZXJzb25hbGJhY2tncm91bmR1cGRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2hlY2tib3gge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRDNBODI4O1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1ib3JkZXItY29sb3I6IGdyYXk7XG59XG5cbi5idG5TdWJtaXQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbiNyb3VuZGVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLkVudGl0eU5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzY3Njc2Nztcbn1cblxuLmR1cmF0aW9uLm5nLWludmFsaWQge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZHVyYXRpb24ubmctdmFsaWQge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY2FsZW5kYXJDbGFzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm90dG9tOiA0cHg7XG59XG5cbi5BdHRhY2hCdXR0b24ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbiAgICAtLWJhY2tncm91bmQ6ICNENkQ3RDc7XG59XG5cbi5GaWxlTmFtZSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLkZpbGVOYW1lQ2xvc2Uge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLmxhYmVsIHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTGlnaHRcIjtcbn1cbi5tZW51VG9nZ2xlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM1MTRCNEI7XG59XG4uaWNuQWJvdXQge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubGJsRW50aXR5IHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4ubGJsTmFtZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJvcmRlci1jb2xvcjogZ3JheTtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4jcm91bmRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uRW50aXR5TmFtZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM2NzY3Njc7XG59XG5cbi5kdXJhdGlvbi5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kdXJhdGlvbi5uZy12YWxpZCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY2FsZW5kYXJDbGFzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgYm90dG9tOiA0cHg7XG59XG5cbi5BdHRhY2hCdXR0b24ge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIC0tYmFja2dyb3VuZDogI0Q2RDdENztcbn1cblxuLkZpbGVOYW1lIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5GaWxlTmFtZUNsb3NlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbi5sYWJlbCB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b0xpZ2h0XCI7XG59XG5cbi5tZW51VG9nZ2xlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5pY25BYm91dCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5sYmxFbnRpdHkge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmxibE5hbWUge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/personalbackgroundupdate/personalbackgroundupdate.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/personalbackgroundupdate/personalbackgroundupdate.page.ts ***!
  \*********************************************************************************/
/*! exports provided: PersonalbackgroundupdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalbackgroundupdatePage", function() { return PersonalbackgroundupdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-picker/ngx */ "./node_modules/@ionic-native/file-picker/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ftp_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/ftp/ngx */ "./node_modules/@ionic-native/ftp/ngx/index.js");













var PersonalbackgroundupdatePage = /** @class */ (function () {
    function PersonalbackgroundupdatePage(storage, httpApi, datepipe, activatedRoute, loginService, navCtrl, alertController, actionSheetController, loadingCtrl, filePicker, camera, fTP, imagePicker, router) {
        this.storage = storage;
        this.httpApi = httpApi;
        this.datepipe = datepipe;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.loadingCtrl = loadingCtrl;
        this.filePicker = filePicker;
        this.camera = camera;
        this.fTP = fTP;
        this.imagePicker = imagePicker;
        this.router = router;
        this.fileName = "No Attachment";
        this.hasAttachment = false;
        this.clickedPersonal = false;
        this.clickedAddress = false;
        this.clickedContact = false;
        this.loadingDone = false;
        this.noError = true;
        this.activityResult = false;
    }
    PersonalbackgroundupdatePage.prototype.ngOnInit = function () {
        this.subId = this.activatedRoute.snapshot.paramMap.get('id');
    };
    PersonalbackgroundupdatePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDone = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.subId = _this.activatedRoute.snapshot.paramMap.get('id');
            _this.showPage = _this.activatedRoute.snapshot.paramMap.get('page');
            console.log(_this.subId);
            _this.getInfo();
        });
    };
    PersonalbackgroundupdatePage.prototype.getInfo = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var postData = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EmployeeID: _this.subId,
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                console.log('httpApi Update: ', value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/BasicInfo/GetPersonalInformation", postData, {});
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/BasicInfo/GetPersonalInformation", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log('GetPersonalInformation: ', jsonData); //mycomment
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    if (jsonData['Value']['tblPersonalInfo'] != null || jsonData['Value']['tblPersonalInfo'] != undefined) {
                        _this.personalInfo = jsonData['Value']['tblPersonalInfo']['0'];
                        _this.LastNAME = jsonData['Value']['tblPersonalInfo']['0'].LNAME;
                        _this.FNAME = jsonData['Value']['tblPersonalInfo']['0'].FNAME;
                        _this.MIDDLENAME = jsonData['Value']['tblPersonalInfo']['0'].MNAME;
                        _this.MAIDENNAME = jsonData['Value']['tblPersonalInfo']['0'].MAIDENNAME;
                        _this.SUFFIX = jsonData['Value']['tblPersonalInfo']['0'].SUFFIX;
                        _this.TITLE = jsonData['Value']['tblPersonalInfo']['0'].TITLE;
                        _this.NICKNAME = jsonData['Value']['tblPersonalInfo']['0'].NICKNAME;
                        _this.BIRTHDAY2 = jsonData['Value']['tblPersonalInfo']['0'].BIRTHDAY2;
                        _this.AGE = jsonData['Value']['tblPersonalInfo']['0'].AGE;
                        _this.PLACEOFBIRTH = jsonData['Value']['tblPersonalInfo']['0'].PLACEOFBIRTH;
                        _this.COUNTRYOFBIRTH = jsonData['Value']['tblPersonalInfo']['0'].COUNTRYOFBIRTH;
                        _this.SEX = jsonData['Value']['tblPersonalInfo']['0'].SEX;
                        _this.CIVILSTATUS = jsonData['Value']['tblPersonalInfo']['0'].CIVILSTATUS;
                        _this.DATEOFMARRIAGE = jsonData['Value']['tblPersonalInfo']['0'].DATEOFMARRIAGE;
                        _this.NATIONALITY = jsonData['Value']['tblPersonalInfo']['0'].NATIONALITY;
                        _this.RELIGION = jsonData['Value']['tblPersonalInfo']['0'].RELIGION;
                        _this.RELIGIONOTHERS = jsonData['Value']['tblPersonalInfo']['0'].RELIGIONOTHERS;
                        _this.EMAILADD = jsonData['Value']['tblPersonalInfo']['0'].EMAILADD;
                    }
                    if (jsonData['Value']['tblMobileInfo'] != null || jsonData['Value']['tblMobileInfo'] != undefined) {
                        _this.mobileInfo = jsonData['Value']['tblMobileInfo']['0'];
                        _this.PhoneNUMBER = jsonData['Value']['tblMobileInfo']['0'].NUMBER;
                        console.log('this.mobileInfo: ', _this.mobileInfo);
                    }
                    if (jsonData['Value']['tblFamily'] != null || jsonData['Value']['tblFamily'] != undefined) {
                        _this.familyInfo = jsonData['Value']['tblFamily'];
                    }
                    if (jsonData['Value']['tblFamilyContactPerson'] != null || jsonData['Value']['tblFamilyContactPerson'] != undefined) {
                        _this.familyContactInfo = jsonData['Value']['tblFamilyContactPerson']['0'];
                    }
                    if (jsonData['Value']['tblEducation'] != null || jsonData['Value']['tblEducation'] != undefined) {
                        _this.educationInfo = jsonData['Value']['tblEducation'];
                    }
                    if (_this.showPage == 'Personal') {
                        if (_this.personalInfo != null || _this.personalInfo != undefined) {
                            _this.personalInfo["RELIGION"] = _this.setReligionType(_this.personalInfo["RELIGION"] != null ? _this.personalInfo["RELIGION"].trim() : "");
                            _this.personalInfo["RELIGIONOTHERS"] = _this.setReligionType(_this.personalInfo["RELIGIONOTHERS"]);
                            _this.personalInfo["PROVINCE"] = _this.setProvinceType(_this.personalInfo["PROVINCECODE1"] != null ? _this.personalInfo["PROVINCECODE1"].trim() : "");
                            _this.personalInfo["LICENSE"] = _this.setLicenseType(_this.personalInfo["LICENSECODE"] != null ? _this.personalInfo["LICENSECODE"].trim() : "");
                            _this.personalInfo["CITY"] = _this.setCityType(_this.personalInfo["CITYCODE1"] != null ? _this.personalInfo["CITYCODE1"].trim() : "");
                            _this.personalInfo["MIDDLENAME"] = _this.personalInfo["MNAME"] != null ? _this.personalInfo["MNAME"].substring(0, 1) + "." : "";
                            _this.personalInfo["MAIDENNAME"] = _this.personalInfo["MAIDENNAME"] != null ? _this.personalInfo["MAIDENNAME"].substring(0, 1) + "." : "";
                            var bday = _this.personalInfo["BIRTHDAY"].split('/');
                            _this.personalInfo["BIRTHDAY2"] = _this.personalInfo["BIRTHDAY"] != null ? bday[0] + "/" + bday[2] : "";
                        }
                        else {
                            _this.noError = false;
                            _this.errorMessage = "EMPTY";
                        }
                    }
                    else if (_this.showPage == 'Family') {
                        if (_this.familyInfo == null || _this.familyInfo == undefined || _this.familyInfo.length == 0) {
                            if (_this.familyContactInfo == null || _this.familyContactInfo == undefined) {
                                _this.noError = false;
                                _this.errorMessage = "EMPTY";
                            }
                        }
                        else {
                            _this.familyInfo.forEach(function (element) {
                                element["CLICKED"] = "0";
                            });
                        }
                        if (_this.familyContactInfo != null || _this.familyContactInfo != undefined) {
                            _this.familyContactInfo["CNTACT_RELATIONSHIP"] = _this.setRelationType(_this.familyContactInfo["CNTACT_RELATIONSHIP"] != null ? _this.personalInfo["CNTACT_RELATIONSHIP"].trim() : "");
                        }
                    }
                    else if (_this.showPage == 'Education') {
                        if (_this.educationInfo == null || _this.educationInfo == undefined || _this.educationInfo.length == 0) {
                            _this.noError = false;
                            _this.errorMessage = "EMPTY";
                        }
                        else {
                            _this.educationInfo.forEach(function (element) {
                                element["CLICKED"] = "0";
                            });
                        }
                    }
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    console.log(error);
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    PersonalbackgroundupdatePage.prototype.refresh = function () {
        this.ionViewWillEnter();
    };
    PersonalbackgroundupdatePage.prototype.togglePersonalSection = function () {
        this.clickedPersonal = !this.clickedPersonal;
    };
    PersonalbackgroundupdatePage.prototype.toggleAddressSection = function () {
        this.clickedAddress = !this.clickedAddress;
    };
    PersonalbackgroundupdatePage.prototype.toggleContactSection = function () {
        this.clickedContact = !this.clickedContact;
    };
    PersonalbackgroundupdatePage.prototype.toggleFamilySection = function (item) {
        console.log('clicked');
        if (this.familyInfo != null || this.familyInfo == undefined) {
            this.familyInfo.forEach(function (element) {
                if (element["ID"] == item) {
                    console.log('found');
                    if (element["CLICKED"] == "0") {
                        console.log('1');
                        element["CLICKED"] = "1";
                    }
                    else {
                        console.log('0');
                        element["CLICKED"] = "0";
                    }
                }
            });
        }
    };
    PersonalbackgroundupdatePage.prototype.toggleEducationSection = function (item) {
        console.log('clicked');
        if (this.educationInfo != null || this.educationInfo == undefined) {
            this.educationInfo.forEach(function (element) {
                if (element["IDNO"] == item) {
                    console.log('found');
                    if (element["CLICKED"] == "0") {
                        console.log('1');
                        element["CLICKED"] = "1";
                    }
                    else {
                        console.log('0');
                        element["CLICKED"] = "0";
                    }
                }
            });
        }
    };
    PersonalbackgroundupdatePage.prototype.setLicenseType = function (item) {
        switch (item) {
            case "DLC001": {
                return "Professional";
            }
            case "DLC002": {
                return "Non-Professional";
            }
            case "DLC003": {
                return "Student";
            }
            default: {
                return item;
            }
        }
    };
    PersonalbackgroundupdatePage.prototype.setProvinceType = function (item) {
        switch (item) {
            case "ABR": {
                return "Abra";
            }
            case "AGN": {
                return "Agusan del Norte";
            }
            case "AGS": {
                return "Agusan del Sur";
            }
            case "AKL": {
                return "Aklan";
            }
            case "ALB": {
                return "Albay";
            }
            case "ANT": {
                return "Antique";
            }
            case "APA": {
                return "Apayao";
            }
            case "AUR": {
                return "Aurora";
            }
            case "BAN": {
                return "Bataan";
            }
            case "BAS": {
                return "Basilan";
            }
            case "BEN": {
                return "Benguet";
            }
            case "BIL": {
                return "Biliran";
            }
            case "BOH": {
                return "Bohol";
            }
            case "BTG": {
                return "Batangas";
            }
            case "BTN": {
                return "Batanes";
            }
            case "BUK": {
                return "Bukidnon";
            }
            case "BUL": {
                return "Bulacan";
            }
            case "CAG": {
                return "Cagayan";
            }
            case "CAM": {
                return "Camiguin";
            }
            case "CAN": {
                return "Camarines Norte";
            }
            case "CAP": {
                return "Capiz";
            }
            case "CAS": {
                return "Camarines Sur";
            }
            case "CAT": {
                return "Catanduanes";
            }
            case "CAV": {
                return "Cavite";
            }
            case "CEB": {
                return "Cebu";
            }
            case "COM": {
                return "Compostela Valley";
            }
            case "DAO": {
                return "Davao Oriental";
            }
            case "DAS": {
                return "Davao del Sur";
            }
            case "DAV": {
                return "Davao del Norte";
            }
            case "DIN": {
                return "Dinagat Islands";
            }
            case "EAS": {
                return "Eastern Samar";
            }
            case "GUI": {
                return "Guimaras";
            }
            case "IFU": {
                return "Ifugao";
            }
            case "ILI": {
                return "Iloilo";
            }
            case "ILN": {
                return "Ilocos Norte";
            }
            case "ILS": {
                return "Ilocos Sur";
            }
            case "ISA": {
                return "Isabela";
            }
            case "KAL": {
                return "Kalinga";
            }
            case "LAG": {
                return "Laguna";
            }
            case "LAN": {
                return "Lanao del Norte";
            }
            case "LAS": {
                return "Lanao del Sur";
            }
            case "LEY": {
                return "Leyte";
            }
            case "LUN": {
                return "La Union";
            }
            case "MAD": {
                return "Marinduque";
            }
            case "MAG": {
                return "Maguindanao";
            }
            case "MAS": {
                return "Masbate";
            }
            case "MDC": {
                return "Occidental Mindoro";
            }
            case "MDR": {
                return "Oriental Mindoro";
            }
            case "MNL": {
                return "Metropolitan Manila";
            }
            case "MOU": {
                return "Mountain";
            }
            case "MSC": {
                return "Misamis Occidental";
            }
            case "MSR": {
                return "Misamis Oriental";
            }
            case "NCO": {
                return "Cotabato";
            }
            case "NEC": {
                return "Negros Occidental";
            }
            case "NER": {
                return "Negros Oriental";
            }
            case "NSA": {
                return "Northern Samar";
            }
            case "NUE": {
                return "Nueva Ecija";
            }
            case "NUV": {
                return "Nueva Vizcaya";
            }
            case "PAM": {
                return "Pampanga";
            }
            case "PAN": {
                return "Pangasinan";
            }
            case "PLW": {
                return "Palawan";
            }
            case "QUE": {
                return "Quezon";
            }
            case "QUI": {
                return "Quirino";
            }
            case "RIZ": {
                return "Rizal";
            }
            case "ROM": {
                return "Romblon";
            }
            case "SAM": {
                return "Samar";
            }
            case "SAR": {
                return "Sarangani";
            }
            case "SCO": {
                return "South Cotabato";
            }
            case "SHF": {
                return "Shariff Kabunsuan";
            }
            case "SIG": {
                return "Siquijor";
            }
            case "SLE": {
                return "Southern Leyte";
            }
            case "SLU": {
                return "Sulu";
            }
            case "SOR": {
                return "Sorsogon";
            }
            case "SUK": {
                return "Sultan Kudarat";
            }
            case "SUN": {
                return "Surigao del Norte";
            }
            case "SUR": {
                return "Surigao del Sur";
            }
            case "TAR": {
                return "Tarlac";
            }
            case "TAW": {
                return "Tawi-Tawi";
            }
            case "ZAN": {
                return "Zamboanga del Norte";
            }
            case "ZAS": {
                return "Zamboanga del Sur";
            }
            case "ZMB": {
                return "Zambales";
            }
            case "ZSI": {
                return "Zamboanga-Sibugay";
            }
            default: {
                return item;
            }
        }
    };
    PersonalbackgroundupdatePage.prototype.setRegionType = function (item) {
        switch (item) {
            case "R1": return "Region I";
            case "R10": return "Region IX";
            case "R11": return "Region X";
            case "R12": return "Region XI";
            case "R13": return "Region XII";
            case "R14": return "Region XIII";
            case "R15": return "NCR";
            case "R16": return "CAR";
            case "R2": return "Region II";
            case "R3": return "Region III";
            case "R4": return "Region IV-A";
            case "R5": return "Region IV-B";
            case "R6": return "Region V";
            case "R7": return "Region VI";
            case "R8": return "Region VII";
            case "R9": return "Region VIII";
            default: {
                return item;
            }
        }
    };
    PersonalbackgroundupdatePage.prototype.setCityType = function (item) {
        switch (item) {
            case "CIT00001": {
                return "Alaminos";
            }
            case "CIT00002": {
                return "Angeles";
            }
            case "CIT00003": {
                return "Antipolo";
            }
            case "CIT00004": {
                return "Bacolod";
            }
            case "CIT00005": {
                return "Bago";
            }
            case "CIT00006": {
                return "Baguio";
            }
            case "CIT00007": {
                return "Balanga";
            }
            case "CIT00008": {
                return "Bais";
            }
            case "CIT00009": {
                return "Basilan";
            }
            case "CIT00010": {
                return "Batangas";
            }
            case "CIT00011": {
                return "Bayawan";
            }
            case "CIT00012": {
                return "Bislig";
            }
            case "CIT00013": {
                return "Biñan (Laguna)";
            }
            case "CIT00014": {
                return "Butuan";
            }
            case "CIT00015": {
                return "Cabanatuan";
            }
            case "CIT00016": {
                return "Cadiz";
            }
            case "CIT00017": {
                return "Cagayan de Oro";
            }
            case "CIT00018": {
                return "Calamba";
            }
            case "CIT00019": {
                return "Calapan";
            }
            case "CIT00020": {
                return "Calbayog";
            }
            case "CIT00021": {
                return "Caloocan";
            }
            case "CIT00022": {
                return "Candon";
            }
            case "CIT00023": {
                return "Canlaon";
            }
            case "CIT00024": {
                return "Catbalogan";
            }
            case "CIT00025": {
                return "Cauayan";
            }
            case "CIT00026": {
                return "Cavite";
            }
            case "CIT00027": {
                return "Cebu";
            }
            case "CIT00028": {
                return "Cotabato";
            }
            case "CIT00029": {
                return "Dagupan";
            }
            case "CIT00030": {
                return "Danao";
            }
            case "CIT00031": {
                return "Dapitan";
            }
            case "CIT00032": {
                return "Davao";
            }
            case "CIT00033": {
                return "Digos";
            }
            case "CIT00034": {
                return "Dipolog";
            }
            case "CIT00035": {
                return "Dumaguete";
            }
            case "CIT00036": {
                return "Escalante";
            }
            case "CIT00037": {
                return "Gapan";
            }
            case "CIT00038": {
                return "General Santos";
            }
            case "CIT00039": {
                return "Gingoog";
            }
            case "CIT00040": {
                return "Himamaylan";
            }
            case "CIT00041": {
                return "Iligan";
            }
            case "CIT00042": {
                return "Iloilo";
            }
            case "CIT00043": {
                return "Iriga";
            }
            case "CIT00044": {
                return "Isabela";
            }
            case "CIT00045": {
                return "Kabankalan";
            }
            case "CIT00046": {
                return "Kidapawan";
            }
            case "CIT00047": {
                return "Koronadal";
            }
            case "CIT00048": {
                return "La Carlota";
            }
            case "CIT00049": {
                return "Laoag";
            }
            case "CIT00050": {
                return "Lapu-Lapu";
            }
            case "CIT00051": {
                return "Las Piñas";
            }
            case "CIT00052": {
                return "Legaspi";
            }
            case "CIT00053": {
                return "Ligao";
            }
            case "CIT00054": {
                return "Lipa";
            }
            case "CIT00055": {
                return "Lucena";
            }
            case "CIT00056": {
                return "Maasin";
            }
            case "CIT00057": {
                return "Makati";
            }
            case "CIT00058": {
                return "Malabon";
            }
            case "CIT00059": {
                return "Malaybalay";
            }
            case "CIT00060": {
                return "Malolos";
            }
            case "CIT00061": {
                return "Mandaluyong";
            }
            case "CIT00062": {
                return "Mandaue";
            }
            case "CIT00063": {
                return "Marawi";
            }
            case "CIT00064": {
                return "Marikina";
            }
            case "CIT00065": {
                return "Masbate";
            }
            case "CIT00066": {
                return "Meycauayan";
            }
            case "CIT00067": {
                return "Science City of Muñoz";
            }
            case "CIT00068": {
                return "Muntinlupa";
            }
            case "CIT00069": {
                return "Naga";
            }
            case "CIT00070": {
                return "Olongapo";
            }
            case "CIT00071": {
                return "Ormoc";
            }
            case "CIT00072": {
                return "Oroquieta";
            }
            case "CIT00073": {
                return "Ozamis";
            }
            case "CIT00074": {
                return "Pagadian";
            }
            case "CIT00075": {
                return "Palayan";
            }
            case "CIT00076": {
                return "Panabo";
            }
            case "CIT00077": {
                return "Parañaque";
            }
            case "CIT00078": {
                return "Pasay";
            }
            case "CIT00079": {
                return "Pasig";
            }
            case "CIT00080": {
                return "Passi";
            }
            case "CIT00081": {
                return "Puerto Princesa";
            }
            case "CIT00082": {
                return "Quezon City";
            }
            case "CIT00083": {
                return "Roxas";
            }
            case "CIT00084": {
                return "Sagay";
            }
            case "CIT00085": {
                return "Island Garden City of Samal";
            }
            case "CIT00086": {
                return "San Carlos (Negros Occidental)";
            }
            case "CIT00087": {
                return "San Carlos (Pangasinan)";
            }
            case "CIT00088": {
                return "San Fernando (Pampanga)";
            }
            case "CIT00089": {
                return "San Fernando (La Union)";
            }
            case "CIT00090": {
                return "San Jose (Nueva Ecija)";
            }
            case "CIT00091": {
                return "San Jose del Monte";
            }
            case "CIT00092": {
                return "San Pablo";
            }
            case "CIT00093": {
                return "Santa Rosa";
            }
            case "CIT00094": {
                return "Santiago";
            }
            case "CIT00095": {
                return "Silay";
            }
            case "CIT00096": {
                return "Sipalay";
            }
            case "CIT00097": {
                return "Sorsogon";
            }
            case "CIT00098": {
                return "Surigao";
            }
            case "CIT00099": {
                return "Tabaco";
            }
            case "CIT00100": {
                return "Tacloban";
            }
            case "CIT00101": {
                return "Tacurong";
            }
            case "CIT00102": {
                return "Tagaytay";
            }
            case "CIT00103": {
                return "Tagbilaran";
            }
            case "CIT00104": {
                return "Taguig";
            }
            case "CIT00105": {
                return "Tagum";
            }
            case "CIT00106": {
                return "Talisay (Cebu)";
            }
            case "CIT00107": {
                return "Talisay (Negros Occidental)";
            }
            case "CIT00108": {
                return "Tanauan";
            }
            case "CIT00109": {
                return "Tangub";
            }
            case "CIT00110": {
                return "Tanjay";
            }
            case "CIT00111": {
                return "Tarlac";
            }
            case "CIT00112": {
                return "Toledo";
            }
            case "CIT00113": {
                return "Trece Martires";
            }
            case "CIT00114": {
                return "Tuguegarao";
            }
            case "CIT00115": {
                return "Urdaneta";
            }
            case "CIT00116": {
                return "Valencia";
            }
            case "CIT00117": {
                return "Valenzuela";
            }
            case "CIT00118": {
                return "Victorias";
            }
            case "CIT00119": {
                return "Vigan";
            }
            case "CIT00120": {
                return "Zamboanga";
            }
            case "CIT00121": {
                return "Manila";
            }
            case "CIT99999": {
                return "Other Cities";
            }
            default: {
                return item;
            }
        }
    };
    PersonalbackgroundupdatePage.prototype.setReligionType = function (item) {
        switch (item) {
            case "38": {
                return "LATTER DAY SAINTS";
            }
            case "INC": {
                return "Iglesia Ni Cristo";
            }
            case "RLG001": {
                return "Aglipayan (Philippine Independence Church)";
            }
            case "RLG002": {
                return "Ang Dating Daan";
            }
            case "RLG003": {
                return "Assemblies of God (Ilocos Norte)";
            }
            case "RLG004": {
                return "Baptist World Alliance";
            }
            case "RLG005": {
                return "Born Again";
            }
            case "RLG006": {
                return "Buddhists";
            }
            case "RLG007": {
                return "Chinese";
            }
            case "RLG008": {
                return "Christian";
            }
            case "RLG009": {
                return "Church of Jesus Christ and the Latter Day Saints";
            }
            case "RLG010": {
                return "Church of the Nazarene";
            }
            case "RLG011": {
                return "Come To Jesus Fellowship International";
            }
            case "RLG012": {
                return "El Shaddai";
            }
            case "RLG013": {
                return "Evangelical";
            }
            case "RLG014": {
                return "God World Missions Church";
            }
            case "RLG015": {
                return "Hindu";
            }
            case "RLG016": {
                return "Iglesia ni Cristo (Church of Christ)";
            }
            case "RLG017": {
                return "Indigenous Religion";
            }
            case "RLG018": {
                return "Jehovah's Witnesses";
            }
            case "RLG019": {
                return "Jesus Is Lord";
            }
            case "RLG020": {
                return "Judaism";
            }
            case "RLG021": {
                return "Lutheran Church in the Philippines";
            }
            case "RLG022": {
                return "Mennonites";
            }
            case "RLG023": {
                return "Methodist";
            }
            case "RLG024": {
                return "Mormon";
            }
            case "RLG025": {
                return "Mount Banahaw Holy Confederation";
            }
            case "RLG026": {
                return "Muslim/Islamic";
            }
            case "RLG028": {
                return "Philippine Episcopal Church";
            }
            case "RLG029": {
                return "Presbyterian";
            }
            case "RLG030": {
                return "Protestants";
            }
            case "RLG031": {
                return "Rizalistas";
            }
            case "RLG032": {
                return "Roman Catholic";
            }
            case "RLG033": {
                return "Seventh-Day Adventists (Central Phil. Union Conf.)";
            }
            case "RLG034": {
                return "Unitarian";
            }
            case "RLG035": {
                return "United Church of Christ in the Philippines (UCCP)";
            }
            case "RLG036": {
                return "Worldwide Church of God";
            }
            case "RLG037": {
                return "PICC";
            }
            case "RLG038": {
                return "One Way Outreach";
            }
            case "RLG039": {
                return "Iglesia Filipina Independiente";
            }
            case "RLG999": {
                return "Others (please specify Complete Name)";
            }
            default: {
                return item;
            }
        }
    };
    PersonalbackgroundupdatePage.prototype.setRelationType = function (item) {
        switch (item) {
            case "REL001": return "Auntie";
            case "REL002": return "Brother";
            case "REL003": return "Brother In-Law";
            case "REL004": return "Common Law Partner";
            case "REL005": return "Daughter";
            case "REL006": return "Daughter In-Law";
            case "REL007": return "Father";
            case "REL008": return "Father In-Law";
            case "REL009": return "First Degree Cousin";
            case "REL010": return "Friend";
            case "REL011": return "Grand Father";
            case "REL012": return "Grand Mother";
            case "REL013": return "Grand Daughter";
            case "REL014": return "Grand Son";
            case "REL015": return "Guardian";
            case "REL016": return "Husband";
            case "REL017": return "Mother";
            case "REL018": return "Mother In-Law";
            case "REL019": return "Mistress";
            case "REL020": return "Nephew";
            case "REL021": return "Niece";
            case "REL022": return "Second Degree Cousin";
            case "REL023": return "Sister";
            case "REL024": return "Sister In-Law";
            case "REL025": return "Son";
            case "REL026": return "Son in-Law";
            case "REL027": return "Step Father";
            case "REL028": return "Step Mother";
            case "REL029": return "Third Degree Cousin";
            case "REL030": return "Uncle";
            case "REL031": return "Wife";
            case "REL999": return "Others";
            default: {
                return item;
            }
        }
    };
    PersonalbackgroundupdatePage.prototype.UpdatePersonalBackground = function () {
        console.log('UpdatePersonalBackground');
    };
    PersonalbackgroundupdatePage.prototype.openpersonalbackgroundupdate = function () {
        this.router.navigate(['/main/personalbackgroundupdate']);
    };
    PersonalbackgroundupdatePage.prototype.goBack = function () { this.navCtrl.back(); };
    PersonalbackgroundupdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personalbackgroundupdate',
            template: __webpack_require__(/*! ./personalbackgroundupdate.page.html */ "./src/app/pages/personalbackgroundupdate/personalbackgroundupdate.page.html"),
            styles: [__webpack_require__(/*! ./personalbackgroundupdate.page.scss */ "./src/app/pages/personalbackgroundupdate/personalbackgroundupdate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["IOSFilePicker"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"],
            _ionic_native_ftp_ngx__WEBPACK_IMPORTED_MODULE_12__["FTP"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__["ImagePicker"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], PersonalbackgroundupdatePage);
    return PersonalbackgroundupdatePage;
}());



/***/ })

}]);
//# sourceMappingURL=personalbackgroundupdate-personalbackgroundupdate-module.js.map