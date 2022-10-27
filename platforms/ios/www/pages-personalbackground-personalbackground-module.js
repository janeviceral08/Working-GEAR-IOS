(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-personalbackground-personalbackground-module"],{

/***/ "./src/app/pages/personalbackground/personalbackground.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/personalbackground/personalbackground.module.ts ***!
  \***********************************************************************/
/*! exports provided: PersonalbackgroundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalbackgroundPageModule", function() { return PersonalbackgroundPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _personalbackground_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personalbackground.page */ "./src/app/pages/personalbackground/personalbackground.page.ts");







var routes = [
    {
        path: '',
        component: _personalbackground_page__WEBPACK_IMPORTED_MODULE_6__["PersonalbackgroundPage"]
    }
];
var PersonalbackgroundPageModule = /** @class */ (function () {
    function PersonalbackgroundPageModule() {
    }
    PersonalbackgroundPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_personalbackground_page__WEBPACK_IMPORTED_MODULE_6__["PersonalbackgroundPage"]]
        })
    ], PersonalbackgroundPageModule);
    return PersonalbackgroundPageModule;
}());



/***/ }),

/***/ "./src/app/pages/personalbackground/personalbackground.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/personalbackground/personalbackground.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-title mode=\"md\" slot=\"start\"></ion-title>\n</ion-header>\n<ion-content>\n    <div *ngIf=\"showPage == 'Personal'\">\n        <div *ngIf=\"noError ; else error\">\n            <!--Personal Background-->\n            <!--Personal-->\n            <ion-card>\n                <ion-card-header (click)=\"togglePersonalSection()\">\n                    <ion-icon class=\"icnAbout\" name=\"person\" mode=\"md\"></ion-icon>\n                    <ion-label class=\"lblName\">PERSONAL BACKGROUND</ion-label>\n                    <ion-icon class=\"menuToggle\" name=\"{{clickedPersonal ? 'arrow-dropup': 'arrow-dropdown'}}\">\n                    </ion-icon>\n                </ion-card-header>\n                <ion-card-content *ngIf=\"clickedPersonal\">\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">LAST NAME</span>\n                            <span class=\"EntryValue\">{{ personalInfo.LNAME }}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">FIRST NAME</span>\n                            <span class=\"EntryValue\">{{personalInfo.FNAME}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">MIDDLE INITIAL</span>\n                            <span class=\"EntryValue\">{{personalInfo.MIDDLENAME}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">MIDDLE INITIAL BEFORE MARRIAGE</span>\n                            <span class=\"EntryValue\">{{personalInfo.MAIDENNAME}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">SUFFIX</span>\n                            <span class=\"EntryValue\">{{personalInfo.SUFFIX}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">TITLE</span>\n                            <span class=\"EntryValue\">{{personalInfo.TITLE}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">NICKNAME</span>\n                            <span class=\"EntryValue\">{{personalInfo.NICKNAME}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">BIRTHDAY</span>\n                            <span class=\"EntryValue\">{{personalInfo.BIRTHDAY2}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">AGE</span>\n                            <span class=\"EntryValue\">{{personalInfo.AGE}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">PLACE OF BIRTH</span>\n                            <span class=\"EntryValue\">{{personalInfo.PLACEOFBIRTH}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">COUNTRY OF BIRTH</span>\n                            <span class=\"EntryValue\">{{personalInfo.COUNTRYOFBIRTH}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">GENDER</span>\n                            <span class=\"EntryValue\">{{personalInfo.SEX}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">CIVIL STATUS</span>\n                            <span class=\"EntryValue\">{{personalInfo.CIVILSTATUS}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">SINCE WHEN</span>\n                            <span class=\"EntryValue\">{{personalInfo.DATEOFMARRIAGE}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">NATIONALITY</span>\n                            <span class=\"EntryValue\">{{personalInfo.NATIONALITY}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">RELIGION</span>\n                            <span class=\"EntryValue\">{{personalInfo.RELIGION}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">OTHERS</span>\n                            <span class=\"EntryValue\">{{personalInfo.RELIGIONOTHERS}}</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n\n            <!--Contact-->\n            <ion-card>\n                <ion-card-header (click)=\"toggleContactSection()\">\n                    <ion-icon class=\"icnAbout\" name=\"call\"></ion-icon>\n                    <ion-label class=\"lblName\">CONTACT DETAILS</ion-label>\n                    <ion-icon class=\"menuToggle\" name=\"{{clickedContact ? 'arrow-dropup': 'arrow-dropdown'}}\">\n                    </ion-icon>\n                </ion-card-header>\n                <ion-card-content *ngIf=\"clickedContact\">\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">LANDLINE</span>\n                            <span class=\"EntryValue\">{{personalInfo.TELNO1}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">MOBILE NUMBER</span>\n                            <span class=\"EntryValue\">{{mobileInfo.PREFIX_DESC}}{{mobileInfo.NUMBER}} ({{mobileInfo.PROVIDER_DESC}})</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">COMPANY EMAIL ADDRESS</span>\n                            <span class=\"EntryValue\">{{personalInfo.EMAILADD}}</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n\n            <!--Address-->\n            <ion-card>\n                <ion-card-header (click)=\"toggleAddressSection()\">\n                    <ion-icon class=\"icnAbout\" name=\"home\"></ion-icon>\n                    <ion-label class=\"lblName\">PERMANENT ADDRESS</ion-label>\n                    <ion-icon class=\"menuToggle\" name=\"{{clickedAddress ? 'arrow-dropup': 'arrow-dropdown'}}\">\n                    </ion-icon>\n                </ion-card-header>\n                <ion-card-content *ngIf=\"clickedAddress\">\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">NO. (INCLUDE BLDG./APT. NUMBER)</span>\n                            <span class=\"EntryValue\">{{personalInfo.HOUSENO1}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">STREET</span>\n                            <span class=\"EntryValue\">{{personalInfo.STREET1}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">BARANGAY</span>\n                            <span class=\"EntryValue\">{{personalInfo.BARANGAY1}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">MUNICIPALITY</span>\n                            <span class=\"EntryValue\">{{personalInfo.MUNICIPAL1}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">CITY</span>\n                            <span class=\"EntryValue\">{{personalInfo.CITY}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">ZIP CODE</span>\n                            <span class=\"EntryValue\">{{personalInfo.ZIP1}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">PROVINCE</span>\n                            <span class=\"EntryValue\">{{personalInfo.PROVINCE}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">COUNTRY</span>\n                            <span class=\"EntryValue\">{{personalInfo.COUNTRYCODE1}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">TELEPHONE NUMBER(S)</span>\n                            <span class=\"EntryValue\">{{personalInfo.TELNO1}}</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n    <div *ngIf=\"showPage == 'Family'\">\n        <div *ngIf=\"noError; else error\">\n            <!--Family-->\n            <ion-card *ngFor=\"let item of (familyInfo)\">\n                <ion-card-header class=\"cardFamily\" (click)=\"toggleFamilySection(item.ID)\">\n                    <ion-item lines=\"none\">\n                        <ion-avatar>\n                            <ion-icon class=\"icnFam\" name=\"person\"></ion-icon>\n                        </ion-avatar>\n                        <ion-label class=\"lblEntity\">\n                            <ion-icon *ngIf=\"item.CLICKED == '1'\" class=\"menuFamToggle\" name=\"arrow-dropup\">\n                            </ion-icon>\n                            <ion-icon *ngIf=\"item.CLICKED == '0'\" class=\"menuFamToggle\" name=\"arrow-dropdown\">\n                            </ion-icon>\n                            <span class=\"lblFamName\">{{item.FNAME}} {{item.LNAME}}</span>\n                            <br>\n                            <span class=\"lblFamRel\">{{item.RELATIONSHIP}}</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-header>\n                <ion-card-content *ngIf=\"item.CLICKED == '1'\">\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">GENDER</span>\n                            <span class=\"EntryValue\">{{item.GENDER}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">BIRTHDAY</span>\n                            <span class=\"EntryValue\">{{item.BIRTHDAY}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">AGE</span>\n                            <span class=\"EntryValue\">{{item.AGE}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">DEPENDENT</span>\n                            <span class=\"EntryValue\">{{item.DEPENDENT}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">STATUS</span>\n                            <span class=\"EntryValue\">{{item.STATUS}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">ADDRESS</span>\n                            <span class=\"EntryValue\">{{item.HOMEADDRESS}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">PLACE OF BIRTH</span>\n                            <span class=\"EntryValue\">{{item.PLACEOFBIRTH}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">COUNTRY OF BIRTH</span>\n                            <span class=\"EntryValue\">{{item.COUNTRYOFBIRTH}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">NATIONALITY</span>\n                            <span class=\"EntryValue\">{{item.NATIONALITY}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">CIVIL STATUS</span>\n                            <span class=\"EntryValue\">{{item.CIVILSTATUSCODE}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">LANDLINE</span>\n                            <span class=\"EntryValue\">{{item.CONTACT_NO}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">MOBILE NUMBER</span>\n                            <span class=\"EntryValue\">{{item.MOBILENO}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">EMAIL ADDRESS</span>\n                            <span class=\"EntryValue\">{{item.EMAIL}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">OCCUPATION</span>\n                            <span class=\"EntryValue\">{{item.OCCUPATION}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">POSITION</span>\n                            <span class=\"EntryValue\">{{item.POSITION}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">COMPANY</span>\n                            <span class=\"EntryValue\">{{item.COMPANY}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">SCHOOL</span>\n                            <span class=\"EntryValue\">{{item.SCHOOL}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">START DATE</span>\n                            <span class=\"EntryValue\">{{item.DATEFROM}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">END DATE</span>\n                            <span class=\"EntryValue\">{{item.DATETO}}</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n            <!--Case of Emergency-->\n            <ion-card>\n                <ion-card-header (click)=\"toggleEmergencySection()\">\n                    <ion-icon class=\"icnAbout\" name=\"call\"></ion-icon>\n                    <ion-label class=\"lblName\">CONTACT PERSON</ion-label>\n                    <ion-icon class=\"menuToggle\" name=\"{{clickedEmergency ? 'arrow-dropup': 'arrow-dropdown'}}\">\n                    </ion-icon>\n                </ion-card-header>\n                <ion-card-content *ngIf=\"clickedEmergency\">\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">NAME</span>\n                            <span class=\"EntryValue\">{{familyContactInfo.CNTACT_NAME}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">RELATIONSHIP</span>\n                            <span class=\"EntryValue\">{{familyContactInfo.CNTACT_RELATIONSHIP}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">ADDRESS</span>\n                            <span class=\"EntryValue\">{{familyContactInfo.CNTACT_ADD}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">TELEPHONE NO.</span>\n                            <span class=\"EntryValue\">{{familyContactInfo.CNTACT_TEL}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">CELLPHONE NO.</span>\n                            <span class=\"EntryValue\">{{familyContactInfo.CNTACT_CELL}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">EMAIL ADDRESS</span>\n                            <span class=\"EntryValue\">{{familyContactInfo.CNTACT_EMAIL}}</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n    <div *ngIf=\"showPage == 'Education'\">\n        <div *ngIf=\"noError; else error\">\n            <!--Education-->\n            <ion-card *ngFor=\"let item of (educationInfo)\">\n                <ion-card-header class=\"cardEducation\" (click)=\"toggleEducationSection(item.IDNO)\">\n                    <ion-item class=\"classEduc\" lines=\"none\">\n                        <ion-avatar>\n                            <ion-icon class=\"icnEduc\" name=\"school\"></ion-icon>\n                        </ion-avatar>\n                        <ion-label class=\"lblEducEntity\">\n                            <span class=\"lblEducSchool\">{{item.SCHOOL}}</span>\n                            <br>\n                            <ion-icon *ngIf=\"item.CLICKED == '1'\" class=\"menuEducToggle\" name=\"arrow-dropup\">\n                            </ion-icon>\n                            <ion-icon *ngIf=\"item.CLICKED == '0'\" class=\"menuEducToggle\" name=\"arrow-dropdown\">\n                            </ion-icon>\n                            <span class=\"lblEducYear\">{{item.YEARSTARTED}} - {{item.YEARGRAD}}</span>\n                            <br>\n                            <span class=\"lblEducLevel\">{{item.LEVEL}}</span>\n                            <br>\n                            <span class=\"lblEducCourse\" *ngIf=\"item.LEVEL != 'Elementary' || item.LEVEL != 'High School'\">{{item.COURSE}}</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-header>\n                <ion-card-content *ngIf=\"item.CLICKED == '1'\">\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">STATUS</span>\n                            <span class=\"EntryValue\">{{item.STATUS}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">UNFINISH LEVEL</span>\n                            <span class=\"EntryValue\">{{item.UNFINISHLEVEL}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">UNFINISH YEAR</span>\n                            <span class=\"EntryValue\">{{item.UNFINISHYEAR}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">BARANGAY</span>\n                            <span class=\"EntryValue\">{{item.BARANGAY}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">MUNICIPALITY</span>\n                            <span class=\"EntryValue\">{{item.MUNICIPALITY}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">CITY</span>\n                            <span class=\"EntryValue\">{{item.CITY}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">PROVINCE</span>\n                            <span class=\"EntryValue\">{{item.PROVINCE}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">COUNTRY</span>\n                            <span class=\"EntryValue\">{{item.COUNTRY}}</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n    <div *ngIf=\"showPage == 'IDBank'\">\n        <div *ngIf=\"noError; else error\">\n            <!--Government ID-->\n            <ion-card>\n                <ion-card-header (click)=\"toggleIDBankGovSection()\">\n                    <ion-icon class=\"icnAbout\" name=\"finger-print\"></ion-icon>\n                    <ion-label class=\"lblName\">GOVERNMENT I.D.</ion-label>\n                    <ion-icon class=\"menuToggle\" name=\"{{clickedIDBankGov ? 'arrow-dropup': 'arrow-dropdown'}}\">\n                    </ion-icon>\n                </ion-card-header>\n                <ion-card-content *ngIf=\"clickedIDBankGov\">\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">SSS NUMBER</span>\n                            <span class=\"EntryValue\">{{personalInfo.SSSNO}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">TIN NUMBER</span>\n                            <span class=\"EntryValue\">{{personalInfo.TINNO}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">PAGIBIG NUMBER</span>\n                            <span class=\"EntryValue\">{{personalInfo.PAGIBIGNO}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">PHILHEALTH NUMBER</span>\n                            <span class=\"EntryValue\">{{personalInfo.PHILHEALTHNO}}</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n            <!--Bank Information-->\n            <ion-card>\n                <ion-card-header (click)=\"toggleIDBankBankSection()\">\n                    <ion-icon class=\"icnAbout\" name=\"card\"></ion-icon>\n                    <ion-label class=\"lblName\">BANK INFORMATION</ion-label>\n                    <ion-icon class=\"menuToggle\" name=\"{{clickedIDBankBank ? 'arrow-dropup': 'arrow-dropdown'}}\">\n                    </ion-icon>\n                </ion-card-header>\n                <ion-card-content *ngIf=\"clickedIDBankBank\">\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">ACCOUNT NUMBER</span>\n                            <span class=\"EntryValue\">{{personalInfo.BPINO}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">NAME OF BANK</span>\n                            <span class=\"EntryValue\">Bank Of The Philippine Island</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">BRANCH</span>\n                            <span class=\"EntryValue\">Clover Leaf</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n            <!--Driver's License-->\n            <ion-card>\n                <ion-card-header (click)=\"toggleIDBankDriverSection()\">\n                    <ion-icon class=\"icnAbout\" name=\"car\"></ion-icon>\n                    <ion-label class=\"lblName\">DRIVER'S LICENSE</ion-label>\n                    <ion-icon class=\"menuToggle\" name=\"{{clickedIDBankDriver ? 'arrow-dropup': 'arrow-dropdown'}}\">\n                    </ion-icon>\n                </ion-card-header>\n                <ion-card-content *ngIf=\"clickedIDBankDriver\">\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">LICENSE TYPE</span>\n                            <span class=\"EntryValue\">{{personalInfo.LICENSE}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">LICENSE NUMBER</span>\n                            <span class=\"EntryValue\">{{personalInfo.LICENSENO}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">RESTRICTIONS</span>\n                            <span class=\"EntryValue\">{{personalInfo.LICENSERESTRICTION}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">EXPIRY DATE</span>\n                            <span class=\"EntryValue\">{{personalInfo.LICENSEEXPIRY}}</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n            <!--Passport Information-->\n            <ion-card>\n                <ion-card-header (click)=\"toggleIDBankPassportSection()\">\n                    <ion-icon class=\"icnAbout\" name=\"airplane\"></ion-icon>\n                    <ion-label class=\"lblName\">PASSPORT INFORMATION</ion-label>\n                    <ion-icon class=\"menuToggle\" name=\"{{clickedIDBankPassport ? 'arrow-dropup': 'arrow-dropdown'}}\">\n                    </ion-icon>\n                </ion-card-header>\n                <ion-card-content *ngIf=\"clickedIDBankPassport\">\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">PASSPORT NUMBER</span>\n                            <span class=\"EntryValue\">{{personalInfo.PASSPORTNO}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">COUNTRY OF ISSUE</span>\n                            <span class=\"EntryValue\">{{personalInfo.PASSPORTCOUNTRY}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">DATE ISSUED</span>\n                            <span class=\"EntryValue\">{{personalInfo.PASSPORTISSUED}}</span>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label text-wrap>\n                            <span class=\"EntryName\">EXPIRY DATE</span>\n                            <span class=\"EntryValue\">{{personalInfo.PASSPORTEXPIRY}}</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">REFRESH</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/personalbackground/personalbackground.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/personalbackground/personalbackground.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: center;\n  padding: 10px 0px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n}\n\nion-back-button {\n  color: white;\n  padding-top: 15px;\n}\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n}\n\nion-card {\n  margin-top: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-card-content {\n  padding: 0px 15px 0px 0px;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.classContent {\n  --background: #F3F3F3;\n  --padding-top: 10px !important;\n}\n\n.cardFamily {\n  padding: 10px;\n}\n\nion-item {\n  --padding-start: 10px;\n}\n\n.icnAbout {\n  height: 20px;\n  width: 20px;\n  padding-right: 10px;\n}\n\n.lblEntity {\n  vertical-align: super;\n  padding-left: 15px;\n}\n\n.lblName {\n  font-family: \"RobotoRegular\";\n  vertical-align: super;\n}\n\n.menuToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #514B4B;\n}\n\n.icnFam {\n  height: 40px;\n  width: 40px;\n  color: #656464;\n}\n\n.lblFamName {\n  font-size: 15px;\n  font-family: \"RobotoRegular\";\n}\n\n.lblFamRel {\n  font-size: 12px;\n}\n\n.menuFamToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 10px;\n  font-weight: bold;\n  color: #514B4B;\n}\n\n.classEduc {\n  --padding-start: 0px;\n}\n\n.cardEducation {\n  padding: 10px;\n}\n\n.lblEducEntity {\n  vertical-align: super;\n  padding-left: 35px;\n  margin-right: 0px;\n}\n\n.icnEduc {\n  margin-top: -10px;\n  height: 60px;\n  width: 60px;\n  color: #656464;\n}\n\n.lblEducSchool {\n  font-size: 14px;\n  font-family: \"RobotoMedium\";\n  white-space: normal;\n}\n\n.lblEducYear {\n  font-size: 12px;\n}\n\n.lblEducLevel {\n  font-size: 12px;\n}\n\n.lblEducCourse {\n  font-size: 12px;\n  white-space: normal;\n}\n\n.menuEducToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 0px;\n  font-weight: bold;\n  color: #514B4B;\n}\n\n.EntryName {\n  color: #676767;\n  font-size: 11px;\n  display: block;\n}\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvcGVyc29uYWxiYWNrZ3JvdW5kL3BlcnNvbmFsYmFja2dyb3VuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BlcnNvbmFsYmFja2dyb3VuZC9wZXJzb25hbGJhY2tncm91bmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLGtDQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEVBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSw4QkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLG9CQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZXJzb25hbGJhY2tncm91bmQvcGVyc29uYWxiYWNrZ3JvdW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmcnKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIC8vbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHggMTVweCAwcHggMHB4O1xufVxuXG4uYnRuTWVudSB7XG4gICAgcGFkZGluZzogMCAwIDAgNXB4O1xufVxuXG4uY2xhc3NDb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgLS1wYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZEZhbWlseSB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cblxuLmljbkFib3V0IHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmxibEVudGl0eSB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmxibE5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG59XG5cbi5tZW51VG9nZ2xlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5pY25GYW0ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBjb2xvcjogIzY1NjQ2NDtcbn1cblxuLmxibEZhbU5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5sYmxGYW1SZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1lbnVGYW1Ub2dnbGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5jbGFzc0VkdWMge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4uY2FyZEVkdWNhdGlvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmxibEVkdWNFbnRpdHkge1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5pY25FZHVjIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgY29sb3I6ICM2NTY0NjQ7XG59XG5cbi5sYmxFZHVjU2Nob29sIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmxibEVkdWNZZWFyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sYmxFZHVjTGV2ZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxibEVkdWNDb3Vyc2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4ubWVudUVkdWNUb2dnbGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzUxNEI0Qjtcbn1cblxuLkVudHJ5TmFtZSB7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uRW50cnlWYWx1ZSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHggMTVweCAwcHggMHB4O1xufVxuXG4uYnRuTWVudSB7XG4gIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNsYXNzQ29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0YzRjNGMztcbiAgLS1wYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZEZhbWlseSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuXG4uaWNuQWJvdXQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubGJsRW50aXR5IHtcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5sYmxOYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG59XG5cbi5tZW51VG9nZ2xlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5pY25GYW0ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjb2xvcjogIzY1NjQ2NDtcbn1cblxuLmxibEZhbU5hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmxibEZhbVJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1lbnVGYW1Ub2dnbGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5jbGFzc0VkdWMge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLmNhcmRFZHVjYXRpb24ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubGJsRWR1Y0VudGl0eSB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmljbkVkdWMge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgY29sb3I6ICM2NTY0NjQ7XG59XG5cbi5sYmxFZHVjU2Nob29sIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmxibEVkdWNZZWFyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGJsRWR1Y0xldmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGJsRWR1Y0NvdXJzZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLm1lbnVFZHVjVG9nZ2xlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5FbnRyeU5hbWUge1xuICBjb2xvcjogIzY3Njc2NztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkVudHJ5VmFsdWUge1xuICBjb2xvcjogIzJhMmEyYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/personalbackground/personalbackground.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/personalbackground/personalbackground.page.ts ***!
  \*********************************************************************/
/*! exports provided: PersonalbackgroundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalbackgroundPage", function() { return PersonalbackgroundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var PersonalbackgroundPage = /** @class */ (function () {
    function PersonalbackgroundPage(navCtrl, storage, activatedRoute, loginService, menuCtrl, httpApi) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.httpApi = httpApi;
        this.loadingDone = false;
        this.noError = true;
        this.clickedPIBG = false;
        this.clickedPersonal = false;
        this.clickedAddress = false;
        this.clickedContact = false;
        this.clickedEmergency = true;
        this.clickedIDBankGov = false;
        this.clickedIDBankBank = false;
        this.clickedIDBankDriver = false;
        this.clickedIDBankPassport = false;
    }
    PersonalbackgroundPage.prototype.ngOnInit = function () {
    };
    PersonalbackgroundPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDone = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.subId = _this.activatedRoute.snapshot.paramMap.get('id');
            _this.showPage = _this.activatedRoute.snapshot.paramMap.get('page');
            console.log(_this.subId);
            _this.getInfo();
        });
    };
    PersonalbackgroundPage.prototype.getInfo = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var postData = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EmployeeID: _this.subId,
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/BasicInfo/GetPersonalInformation", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
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
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    if (jsonData['Value']['tblPersonalInfo'] != null || jsonData['Value']['tblPersonalInfo'] != undefined) {
                        _this.personalInfo = jsonData['Value']['tblPersonalInfo']['0'];
                    }
                    if (jsonData['Value']['tblMobileInfo'] != null || jsonData['Value']['tblMobileInfo'] != undefined) {
                        _this.mobileInfo = jsonData['Value']['tblMobileInfo']['0'];
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
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    PersonalbackgroundPage.prototype.refresh = function () {
        this.ionViewWillEnter();
    };
    PersonalbackgroundPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    PersonalbackgroundPage.prototype.togglePersonalSection = function () {
        this.clickedPersonal = !this.clickedPersonal;
    };
    PersonalbackgroundPage.prototype.toggleAddressSection = function () {
        this.clickedAddress = !this.clickedAddress;
    };
    PersonalbackgroundPage.prototype.toggleContactSection = function () {
        this.clickedContact = !this.clickedContact;
    };
    PersonalbackgroundPage.prototype.toggleFamilySection = function (item) {
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
    PersonalbackgroundPage.prototype.toggleEmergencySection = function () {
        this.clickedEmergency = !this.clickedEmergency;
    };
    PersonalbackgroundPage.prototype.toggleEducationSection = function (item) {
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
    PersonalbackgroundPage.prototype.toggleIDBankGovSection = function () {
        this.clickedIDBankGov = !this.clickedIDBankGov;
    };
    PersonalbackgroundPage.prototype.toggleIDBankBankSection = function () {
        this.clickedIDBankBank = !this.clickedIDBankBank;
    };
    PersonalbackgroundPage.prototype.toggleIDBankDriverSection = function () {
        this.clickedIDBankDriver = !this.clickedIDBankDriver;
    };
    PersonalbackgroundPage.prototype.toggleIDBankPassportSection = function () {
        this.clickedIDBankPassport = !this.clickedIDBankPassport;
    };
    PersonalbackgroundPage.prototype.setLicenseType = function (item) {
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
    PersonalbackgroundPage.prototype.setProvinceType = function (item) {
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
    PersonalbackgroundPage.prototype.setRegionType = function (item) {
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
    PersonalbackgroundPage.prototype.setCityType = function (item) {
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
    PersonalbackgroundPage.prototype.setReligionType = function (item) {
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
    PersonalbackgroundPage.prototype.setRelationType = function (item) {
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
    PersonalbackgroundPage.prototype.goBack = function () { this.navCtrl.back(); };
    PersonalbackgroundPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personalbackground',
            template: __webpack_require__(/*! ./personalbackground.page.html */ "./src/app/pages/personalbackground/personalbackground.page.html"),
            styles: [__webpack_require__(/*! ./personalbackground.page.scss */ "./src/app/pages/personalbackground/personalbackground.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]])
    ], PersonalbackgroundPage);
    return PersonalbackgroundPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-personalbackground-personalbackground-module.js.map