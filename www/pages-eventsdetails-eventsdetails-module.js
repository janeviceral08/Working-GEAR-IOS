(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-eventsdetails-eventsdetails-module"],{

/***/ "./src/app/pages/eventsdetails/eventsdetails.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/eventsdetails/eventsdetails.module.ts ***!
  \*************************************************************/
/*! exports provided: EventsdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsdetailsPageModule", function() { return EventsdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _eventsdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventsdetails.page */ "./src/app/pages/eventsdetails/eventsdetails.page.ts");







var routes = [
    {
        path: '',
        component: _eventsdetails_page__WEBPACK_IMPORTED_MODULE_6__["EventsdetailsPage"]
    }
];
var EventsdetailsPageModule = /** @class */ (function () {
    function EventsdetailsPageModule() {
    }
    EventsdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_eventsdetails_page__WEBPACK_IMPORTED_MODULE_6__["EventsdetailsPage"]]
        })
    ], EventsdetailsPageModule);
    return EventsdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/eventsdetails/eventsdetails.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/eventsdetails/eventsdetails.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <!-- <ion-back-button class=\"imgBackButton button-light\" slot=\"start\" mode=\"md\"></ion-back-button> -->\n</ion-header>\n<ion-content>\n    <ion-button class=\"backIcon\" fill=\"clear\" (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n    <img src=\"../../../assets/img/event_natcon.jpg\" />\n    <ion-item lines=\"full\">\n        <ion-avatar class=\"divDate\">\n            <div class=\"DateMonth\">\n                MAR\n            </div>\n            <div class=\"DateDate\">\n                5\n            </div>\n        </ion-avatar>\n        <ion-label text-wrap class=\"lblEvents\">\n            <div class=\"EventsTitle\">CX F.A.S.T. FORWARD: National Sales Conference 2020\n            </div>\n            <div class=\"EventsDetails\">GABC 1155 Quezon City\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-icon name=\"time\" slot=\"start\" mode=\"md\"></ion-icon>\n        <ion-label text-wrap>\n            <div class=\"EventsTitle\">\n                March 5, 2020 - March 6, 2020\n            </div>\n            <div class=\"EventsDetails\">\n                9:00AM to 6:00PM\n            </div>\n            <div class=\"EventsDetails\">\n                Thursday - Friday\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-icon name=\"pin\" slot=\"start\" mode=\"md\"></ion-icon>\n        <ion-label text-wrap>\n            <div class=\"EventsTitle\">\n                GABC 1155 Building\n            </div>\n            <div class=\"EventsDetails\">\n                5/F Multipurpose Hall, GABC 1155 North EDSA, Quezon City\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsDetailsTitle\">\n                DETAILS\n            </div>\n            <div class=\"EventsDescription\">\n                <p>We are gearing up for the future of retail by focusing on the role of Customer Experience (CX), guided by the F.A.S.T. mindset.</p> <br />\n\n                <p>In the National Sales Conference 2020 with the theme “CX F.A.S.T. Forward,” you will learn the following:\n                </p>\n                <p class=\"pBullet\">• Better understand customer expectations, their role in creating positive, successful customer experiences, </p>\n                <p class=\"pBullet\">• Decide better and faster to address work challenges and customer concerns, </p>\n                <p class=\"pBullet\">• Develop and communicate their key messages and regularly reinforce them, and </p>\n                <p class=\"pBullet\">• Link their actions that reflect an F.A.S.T. and growth mindset.</p>\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsDetailsTitle\">\n                SCHEDULE\n            </div>\n            <div class=\"EventsDescription\">\n                Day 01 - March 5, 2020\n            </div>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        07:30 am – 08:45 am\n                    </ion-col>\n                    <ion-col>\n                        Arrival and Registration\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        09:00 am – 10:00 am\n                    </ion-col>\n                    <ion-col>\n                        Eucharistic Celebration\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        10:00 am – 10:30 am\n                    </ion-col>\n                    <ion-col>\n                        Mobilization to Multipurpose Hall\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        10:30 am – 11:20 am\n                    </ion-col>\n                    <ion-col>\n                        Conference Introduction\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        11:25 am – 12:15 pm\n                    </ion-col>\n                    <ion-col>\n                        Future of Retail\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        12:16 pm – 01:30 pm\n                    </ion-col>\n                    <ion-col>\n                        Lunch\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        01:30 pm – 02:00 pm\n                    </ion-col>\n                    <ion-col>\n                        Plenary 1\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        02:00 pm – 02:15 pm\n                    </ion-col>\n                    <ion-col>\n                        Mobilization to Concurrent Sessions\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        02:15 pm – 05:30 pm\n                    </ion-col>\n                    <ion-col>\n                        Concurrent Session 1\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <div class=\"EventsDescription\">\n                Day 02 - March 6, 2020\n            </div>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        07:30 am – 08:30 am\n                    </ion-col>\n                    <ion-col>\n                        Registration\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        09:00 am – 09:15 am\n                    </ion-col>\n                    <ion-col>\n                        Recap of Day 1\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        09:15 am – 09:30 am\n                    </ion-col>\n                    <ion-col>\n                        Mobilization to Concurrent Session\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        09:30 am – 12:30 pm\n                    </ion-col>\n                    <ion-col>\n                        Concurrent Session 2\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        12:30 pm – 01:30 pm\n                    </ion-col>\n                    <ion-col>\n                        Lunch\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        01:45 pm – 04:45 pm\n                    </ion-col>\n                    <ion-col>\n                        Concurrent Session 3\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        04:45pm – 05:00 pm\n                    </ion-col>\n                    <ion-col>\n                        Mobilization to Multipurpose Hall\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        05:00 pm – 05:30 pm\n                    </ion-col>\n                    <ion-col>\n                        <p>Processing </p>\n                        <p>Conference Closing </p>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        06:30 pm – 09:00 pm\n                    </ion-col>\n                    <ion-col>\n                        Brands Session and Dinner\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsDetailsTitle\">\n                CONCURRENT SESSION\n            </div>\n            <!-- <div class=\"EventsSpeakerLocation\">\n                        PLENARY ONE\n                    </div> -->\n            <div class=\"EventsTopic\">\n                CUSTOMER EXPERIENCE\n            </div>\n            <div class=\"EventsTopic\">\n                Strengthening Customer Connections\n            </div>\n            <div class=\"EventsSpeaker\">\n                Mach Penarada\n            </div>\n            <div class=\"EventsSpeaker\">\n                Social Hall - Ground Floor\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                Strengthening Customer Connections will help you drive more positive, successful customer experiences. The workshop covers the following topics: Value of customer experience, Positive defining moments, Four customer expectations, Four respect responses,\n                Two customer needs.\n            </div>\n\n            <!-- <div class=\"EventsSpeakerLocation\">\n                        PLENARY TWO\n                    </div> -->\n            <div class=\"EventsTopic\">\n                OPERATIONAL EXCELLENCE\n            </div>\n            <div class=\"EventsTopic\">\n                Resolving Problems Better\n            </div>\n            <div class=\"EventsSpeaker\">\n                Paula Peralta\n            </div>\n            <div class=\"EventsSpeaker\">\n                Multipurpose Hall - 5th Floor\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                Resolving Problems Better will help you decide better and faster to address work challenges and customer concerns. You will learn techniques such as defusing tension, resolving customer issues, handling problems, and driving continuous improvement.\n            </div>\n\n            <!-- <div class=\"EventsSpeakerLocation\">\n                        PLENARY THREE\n                    </div> -->\n            <div class=\"EventsTopic\">\n                LEADERSHIP\n            </div>\n            <div class=\"EventsTopic\">\n                Communicating Compellingly and Convincingly\n            </div>\n            <div class=\"EventsSpeaker\">\n                Flip Corpus\n            </div>\n            <div class=\"EventsSpeaker\">\n                Training Hall\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                Communicating Compellingly and Convincingly will help you motivate and engage your sales team towards better customer experiences. You will learn techniques such as clarifying the strategy, connecting with your audience, and communicating in a compelling\n                and convincing way.\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsDetailsTitle\">\n                CONCURRENT SESSION GROUPINGS\n            </div>\n            <div class=\"EventsTopic\">\n                GROUP 1\n            </div>\n            <div class=\"EventsSpeaker EventsGroupings\">\n                Area 5 to 12; International Sales; Modern Trade; Region 2; RSM; NSM\n            </div>\n\n            <div class=\"EventsTopic\">\n                GROUP 2\n            </div>\n            <div class=\"EventsSpeaker EventsGroupings\">\n                Area 1 to 4; Area 21 to 25; Region 1 RSM; Region 5 RSM\n            </div>\n\n            <div class=\"EventsTopic\">\n                GROUP 3\n            </div>\n            <div class=\"EventsSpeaker EventsGroupings\">\n                Area 13 to 15; Area 16 to 20; Region 3 RSM; Region 4 RSM\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsDetailsTitle\">\n                CONCURRENT SESSION SCHEDULE\n            </div>\n\n            <div class=\"EventsTopic EventsBold\">\n                DAY 1 AFTERNOON\n            </div>\n            <div class=\"EventsSpeaker\">\n                02:15 PM to 05:30 PM\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 1\n            </div>\n            <div class=\"EventsTopic\">\n                Resolving Issues Better\n            </div>\n            <div class=\"EventsSpeaker\">\n                5/F Multipurpose Hall\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 2\n            </div>\n            <div class=\"EventsTopic\">\n                Communicating Convincingly & Compellingly\n            </div>\n            <div class=\"EventsSpeaker\">\n                5/F Training Hall\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 3\n            </div>\n            <div class=\"EventsTopic\">\n                Strengthening Customer Connections\n            </div>\n            <div class=\"EventsSpeaker\">\n                G/F Social Hall\n            </div>\n        </ion-label>\n    </ion-item>\n\n\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsTopic EventsBold EventsGroupSession\">\n                DAY 2 MORNING\n            </div>\n            <div class=\"EventsSpeaker\">\n                09:30 AM to 12:30 PM\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 1\n            </div>\n            <div class=\"EventsTopic\">\n                Communicating Convincingly & Compellingly\n            </div>\n            <div class=\"EventsSpeaker\">\n                5/F Training Hall\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 2\n            </div>\n            <div class=\"EventsTopic\">\n                Strengthening Customer Connections\n            </div>\n            <div class=\"EventsSpeaker\">\n                G/F Social Hall\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 3\n            </div>\n            <div class=\"EventsTopic\">\n                Resolving Issues Better\n            </div>\n            <div class=\"EventsSpeaker\">\n                5/F Multipurpose Hall\n            </div>\n        </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsTopic EventsBold EventsGroupSession\">\n                DAY 2 AFTERNOON\n            </div>\n            <div class=\"EventsSpeaker\">\n                01:30 PM to 04:30 PM\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 1\n            </div>\n            <div class=\"EventsTopic\">\n                Strengthening Customer Connections\n            </div>\n            <div class=\"EventsSpeaker\">\n                G/F Social Hall\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 2\n            </div>\n            <div class=\"EventsTopic\">\n                Resolving Issues Better\n            </div>\n            <div class=\"EventsSpeaker\">\n                5/F Multipurpose Hall\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 3\n            </div>\n            <div class=\"EventsTopic\">\n                Communicating Convincingly & Compellingly\n            </div>\n            <div class=\"EventsSpeaker\">\n                5/F Training Hall\n            </div>\n        </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsDetailsTitle\">GUIDELINES\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• We strongly recommend you to bring a backpack or small luggage. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• There will be an imposed curfew of 12AM for all checked-in participants. This is to ensure your safety and participation. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Available hotel facilities and amenities may be utilized by checked-in participants during their free time.Any additional charges incurred for the use and/or consumption of hotel facilities and amenities shall be charged accordingly.\n                </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Hang the make-up room sign on your doorknob should you require housekeeping services between 11:00AM to 2:00PM. Make-up room service shall be available from 2:00PM to 6:00PM.For housekeeping service requests beyond this time, corresponding\n                    charges will be applied and is charged to the employee. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Complimentary breakfast is provided and will be served as early as 4:45AM by batch. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Smoking in room is strictly prohibited inside the hotel premises. Violations for smoking inside the room will carry a penalty of Php 1,000.00 (One Thousand Pesos) for every infraction. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Key cards will be provided for checked-in participant. Lost key cards will be charged to the participant’s personal account upon checkout. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Avoid unnecessary noise and keep television volumes at a reasonable level as a courtesy to the other guests. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Visitors may only be entertained in the hotel lobby. </p>\n            </div>\n        </ion-label>\n    </ion-item>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/eventsdetails/eventsdetails.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/eventsdetails/eventsdetails.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --padding-end: 16px;\n}\n\nion-grid {\n  padding: 0px;\n}\n\nion-row {\n  padding: 3px 0px 0px;\n}\n\nion-col {\n  padding: 0px;\n}\n\n.backIcon {\n  color: white;\n  position: absolute;\n  margin-top: 30px;\n  margin-left: -5px;\n}\n\n.imgBackButton {\n  --min-height: 45px;\n  color: white;\n}\n\n.divDate {\n  height: 90px;\n  padding: 10px 0px;\n}\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px;\n}\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px;\n}\n\n.pBullet {\n  margin-left: 15px;\n}\n\n.lblEvents {\n  margin: 0px 0px 0px 40px;\n}\n\n.EventsTitle {\n  font-size: 15px;\n  color: black;\n  font-family: \"RobotoBold\";\n}\n\n.EventsDetails {\n  font-size: 13px;\n  color: #5C5C5C;\n  font-family: \"RobotoRegular\";\n}\n\n.EventsDetailsTitle {\n  font-size: 13px;\n  color: #5C5C5C;\n  margin-bottom: 10px;\n  font-family: \"RobotoRegular\";\n}\n\n.EventsDescription {\n  font-size: 15px;\n  color: black;\n  font-family: \"RobotoRegular\";\n  margin-top: 5px;\n}\n\n.EventsBold {\n  font-family: \"RobotoBold\" !important;\n}\n\n.EventsTopic {\n  font-size: 15px;\n  font-family: \"RobotoMedium\";\n  color: black;\n}\n\n.EventsSpeaker {\n  font-size: 14px;\n  color: #5C5C5C;\n  font-family: \"RobotoRegular\";\n}\n\n.EventsGroupings {\n  margin-bottom: 10px;\n}\n\n.EventsGroupSession {\n  margin-top: 10px;\n}\n\n.EventsSpeakerLocation {\n  font-size: 14px;\n  color: #5C5C5C;\n  margin-top: 10px;\n  font-family: \"RobotoRegular\";\n}\n\n.EventsSpeakerDesc {\n  font-size: 15px;\n  color: black;\n  font-family: \"RobotoRegular\";\n  margin: 5px 0px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzZGV0YWlscy9DOlxcVXNlcnNcXDAzMTc3NVxcR0VBUi13b3JraW5nL3NyY1xcYXBwXFxwYWdlc1xcZXZlbnRzZGV0YWlsc1xcZXZlbnRzZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2V2ZW50c2RldGFpbHMvZXZlbnRzZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxtQkFBQTtBQ0NSOztBREVJO0VBQ0ksWUFBQTtBQ0NSOztBREVJO0VBQ0ksb0JBQUE7QUNDUjs7QURFSTtFQUNJLFlBQUE7QUNDUjs7QURFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDUjs7QURFSTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtBQ0FSOztBREdJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQVI7O0FER0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQVI7O0FER0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FSOztBREdJO0VBQ0ksaUJBQUE7QUNBUjs7QURHSTtFQUNJLHdCQUFBO0FDQVI7O0FER0k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQVI7O0FER0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FDQVI7O0FER0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNBUjs7QURHSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDQVI7O0FER0k7RUFDSSxvQ0FBQTtBQ0FSOztBREdJO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ0FSOztBREdJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0FSOztBREdJO0VBQ0ksbUJBQUE7QUNBUjs7QURHSTtFQUNJLGdCQUFBO0FDQVI7O0FER0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNBUjs7QURHSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXZlbnRzZGV0YWlscy9ldmVudHNkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICBcbiAgICBpb24tcm93IHtcbiAgICAgICAgcGFkZGluZzogM3B4IDBweCAwcHg7XG4gICAgfVxuICAgIFxuICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5iYWNrSWNvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICB9XG4gICAgXG4gICAgLmltZ0JhY2tCdXR0b24ge1xuICAgICAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLS1taW4taGVpZ2h0OiA0NXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgIC5kaXZEYXRlIHtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICB9XG4gICAgXG4gICAgLkRhdGVNb250aCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4XG4gICAgfVxuICAgIFxuICAgIC5EYXRlRGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgY29sb3I6ICM1QzVDNUM7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgfVxuICAgIFxuICAgIC5wQnVsbGV0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuICAgIFxuICAgIC5sYmxFdmVudHMge1xuICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDQwcHg7XG4gICAgfVxuICAgIFxuICAgIC5FdmVudHNUaXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9Cb2xkXCI7XG4gICAgfVxuICAgIFxuICAgIC5FdmVudHNEZXRhaWxzIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzVDNUM1QztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICAgIH1cbiAgICBcbiAgICAuRXZlbnRzRGV0YWlsc1RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzVDNUM1QztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICAgIH1cbiAgICBcbiAgICAuRXZlbnRzRGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICAgIFxuICAgIC5FdmVudHNCb2xkIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvQm9sZFwiICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5FdmVudHNUb3BpYyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgXG4gICAgLkV2ZW50c1NwZWFrZXIge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG4gICAgfVxuICAgIFxuICAgIC5FdmVudHNHcm91cGluZ3Mge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuRXZlbnRzR3JvdXBTZXNzaW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLkV2ZW50c1NwZWFrZXJMb2NhdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM1QzVDNUM7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbiAgICB9XG4gICAgXG4gICAgLkV2ZW50c1NwZWFrZXJEZXNjIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4IDI1cHg7XG4gICAgfSIsImlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1yb3cge1xuICBwYWRkaW5nOiAzcHggMHB4IDBweDtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmJhY2tJY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuXG4uaW1nQmFja0J1dHRvbiB7XG4gIC0tbWluLWhlaWdodDogNDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGl2RGF0ZSB7XG4gIGhlaWdodDogOTBweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5EYXRlTW9udGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLkRhdGVEYXRlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLnBCdWxsZXQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmxibEV2ZW50cyB7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNDBweDtcbn1cblxuLkV2ZW50c1RpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b0JvbGRcIjtcbn1cblxuLkV2ZW50c0RldGFpbHMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5FdmVudHNEZXRhaWxzVGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5FdmVudHNEZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLkV2ZW50c0JvbGQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9Cb2xkXCIgIWltcG9ydGFudDtcbn1cblxuLkV2ZW50c1RvcGljIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uRXZlbnRzU3BlYWtlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1QzVDNUM7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLkV2ZW50c0dyb3VwaW5ncyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5FdmVudHNHcm91cFNlc3Npb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uRXZlbnRzU3BlYWtlckxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uRXZlbnRzU3BlYWtlckRlc2Mge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICBtYXJnaW46IDVweCAwcHggMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/eventsdetails/eventsdetails.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/eventsdetails/eventsdetails.page.ts ***!
  \***********************************************************/
/*! exports provided: EventsdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsdetailsPage", function() { return EventsdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var EventsdetailsPage = /** @class */ (function () {
    function EventsdetailsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventsdetailsPage.prototype.ngOnInit = function () {
    };
    EventsdetailsPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    EventsdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventsdetails',
            template: __webpack_require__(/*! ./eventsdetails.page.html */ "./src/app/pages/eventsdetails/eventsdetails.page.html"),
            styles: [__webpack_require__(/*! ./eventsdetails.page.scss */ "./src/app/pages/eventsdetails/eventsdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], EventsdetailsPage);
    return EventsdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-eventsdetails-eventsdetails-module.js.map