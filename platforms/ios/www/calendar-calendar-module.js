(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "./node_modules/ionic2-calendar/calendar.js":
/*!**************************************************!*\
  !*** ./node_modules/ionic2-calendar/calendar.js ***!
  \**************************************************/
/*! exports provided: Step, CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");



var Step;
(function (Step) {
    Step[Step["QuarterHour"] = 15] = "QuarterHour";
    Step[Step["HalfHour"] = 30] = "HalfHour";
    Step[Step["Hour"] = 60] = "Hour";
})(Step || (Step = {}));
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calendarService, appLocale) {
        this.calendarService = calendarService;
        this.appLocale = appLocale;
        this.eventSource = [];
        this.calendarMode = 'month';
        this.formatDay = 'd';
        this.formatDayHeader = 'EEE';
        this.formatDayTitle = 'MMMM dd, yyyy';
        this.formatWeekTitle = 'MMMM yyyy, \'Week\' w';
        this.formatMonthTitle = 'MMMM yyyy';
        this.formatWeekViewDayHeader = 'EEE d';
        this.formatHourColumn = 'ha';
        this.showEventDetail = true;
        this.startingDayMonth = 0;
        this.startingDayWeek = 0;
        this.allDayLabel = 'all day';
        this.noEventsLabel = 'No Events';
        this.queryMode = 'local';
        this.step = Step.Hour;
        this.timeInterval = 60;
        this.autoSelect = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.preserveScrollPosition = false;
        this.lockSwipeToPrev = false;
        this.lockSwipes = false;
        this.locale = "";
        this.startHour = 0;
        this.endHour = 24;
        this.onCurrentDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hourParts = 1;
        this.hourSegments = 1;
        this.locale = appLocale;
    }
    Object.defineProperty(CalendarComponent.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        set: function (val) {
            if (!val) {
                val = new Date();
            }
            this._currentDate = val;
            this.calendarService.setCurrentDate(val, true);
            this.onCurrentDateChanged.emit(this._currentDate);
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.autoSelect) {
            if (this.autoSelect.toString() === 'false') {
                this.autoSelect = false;
            }
            else {
                this.autoSelect = true;
            }
        }
        this.hourSegments = 60 / this.timeInterval;
        this.hourParts = 60 / this.step;
        if (this.hourParts <= this.hourSegments) {
            this.hourParts = 1;
        }
        else {
            this.hourParts = this.hourParts / this.hourSegments;
        }
        this.startHour = parseInt(this.startHour.toString());
        this.endHour = parseInt(this.endHour.toString());
        this.calendarService.queryMode = this.queryMode;
        this.currentDateChangedFromChildrenSubscription = this.calendarService.currentDateChangedFromChildren$.subscribe(function (currentDate) {
            _this._currentDate = currentDate;
            _this.onCurrentDateChanged.emit(currentDate);
        });
    };
    CalendarComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromChildrenSubscription) {
            this.currentDateChangedFromChildrenSubscription.unsubscribe();
            this.currentDateChangedFromChildrenSubscription = null;
        }
    };
    CalendarComponent.prototype.rangeChanged = function (range) {
        this.onRangeChanged.emit(range);
    };
    CalendarComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    CalendarComponent.prototype.timeSelected = function (timeSelected) {
        this.onTimeSelected.emit(timeSelected);
    };
    CalendarComponent.prototype.titleChanged = function (title) {
        this.onTitleChanged.emit(title);
    };
    CalendarComponent.prototype.loadEvents = function () {
        this.calendarService.loadEvents();
    };
    CalendarComponent.prototype.slideNext = function () {
        this.calendarService.slide(1);
    };
    CalendarComponent.prototype.slidePrev = function () {
        this.calendarService.slide(-1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Date])
    ], CalendarComponent.prototype, "currentDate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CalendarComponent.prototype, "eventSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "calendarMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatDay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatDayHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatDayTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatWeekTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatMonthTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatWeekViewDayHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatHourColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "showEventDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "startingDayMonth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "startingDayWeek", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "allDayLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "noEventsLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "queryMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "step", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "timeInterval", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "autoSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], CalendarComponent.prototype, "markDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "monthviewDisplayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "monthviewInactiveDisplayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "monthviewEventDetailTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewHeaderTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewAllDayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewNormalEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewAllDayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewNormalEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewInactiveAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewInactiveNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewInactiveAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewInactiveNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "dateFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "scrollToHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "preserveScrollPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "lockSwipeToPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "lockSwipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "startHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "endHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "sliderOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onCurrentDateChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onRangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onEventSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onTimeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onTitleChanged", void 0);
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'calendar',
            template: "\n        <ng-template #monthviewDefaultDisplayEventTemplate let-view=\"view\" let-row=\"row\" let-col=\"col\">\n            {{view.dates[row*7+col].label}}\n        </ng-template>\n        <ng-template #monthviewDefaultEventDetailTemplate let-showEventDetail=\"showEventDetail\" let-selectedDate=\"selectedDate\" let-noEventsLabel=\"noEventsLabel\">\n            <ion-list class=\"event-detail-container\" has-bouncing=\"false\" *ngIf=\"showEventDetail\" overflow-scroll=\"false\">\n                <ion-item *ngFor=\"let event of selectedDate?.events\" (click)=\"eventSelected(event)\">\n                        <span *ngIf=\"!event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{event.startTime|date: 'HH:mm'}}\n                            -\n                            {{event.endTime|date: 'HH:mm'}}\n                        </span>\n                    <span *ngIf=\"event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{allDayLabel}}</span>\n                    <span class=\"event-detail\">  |  {{event.title}}</span>\n                </ion-item>\n                <ion-item *ngIf=\"selectedDate?.events.length==0\">\n                    <div class=\"no-events-label\">{{noEventsLabel}}</div>\n                </ion-item>\n            </ion-list>\n        </ng-template>\n        <ng-template #defaultWeekviewHeaderTemplate let-viewDate=\"viewDate\">\n            {{ viewDate.dayHeader }}\n        </ng-template>\n        <ng-template #defaultAllDayEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n        <ng-template #defaultNormalEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n        <ng-template #defaultWeekViewAllDayEventSectionTemplate let-day=\"day\" let-eventTemplate=\"eventTemplate\">\n            <div [ngClass]=\"{'calendar-event-wrap': day.events}\" *ngIf=\"day.events\"\n                 [ngStyle]=\"{height: 25*day.events.length+'px'}\">\n                <div *ngFor=\"let displayEvent of day.events\" class=\"calendar-event\" tappable\n                     (click)=\"eventSelected(displayEvent.event)\"\n                     [ngStyle]=\"{top: 25*displayEvent.position+'px', width: 100*(displayEvent.endIndex-displayEvent.startIndex)+'%', height: '25px'}\">\n                    <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                                 [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                    </ng-template>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #defaultDayViewAllDayEventSectionTemplate let-allDayEvents=\"allDayEvents\" let-eventTemplate=\"eventTemplate\">\n            <div *ngFor=\"let displayEvent of allDayEvents; let eventIndex=index\"\n                 class=\"calendar-event\" tappable\n                 (click)=\"eventSelected(displayEvent.event)\"\n                 [ngStyle]=\"{top: 25*eventIndex+'px',width: '100%',height:'25px'}\">\n                <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                             [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                </ng-template>\n            </div>\n        </ng-template>\n        <ng-template #defaultNormalEventSectionTemplate let-tm=\"tm\" let-hourParts=\"hourParts\" let-eventTemplate=\"eventTemplate\">\n            <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                <div *ngFor=\"let displayEvent of tm.events\" class=\"calendar-event\" tappable\n                     (click)=\"eventSelected(displayEvent.event)\"\n                     [ngStyle]=\"{top: (37*displayEvent.startOffset/hourParts)+'px',left: 100/displayEvent.overlapNumber*displayEvent.position+'%', width: 100/displayEvent.overlapNumber+'%', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+'px'}\">\n                    <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                                 [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                    </ng-template>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #defaultInactiveAllDayEventSectionTemplate>\n        </ng-template>\n        <ng-template #defaultInactiveNormalEventSectionTemplate>\n        </ng-template>\n\n        <div [ngSwitch]=\"calendarMode\" class=\"{{calendarMode}}view-container\">\n            <monthview *ngSwitchCase=\"'month'\"\n                [formatDay]=\"formatDay\"\n                [formatDayHeader]=\"formatDayHeader\"\n                [formatMonthTitle]=\"formatMonthTitle\"\n                [startingDayMonth]=\"startingDayMonth\"\n                [showEventDetail]=\"showEventDetail\"\n                [noEventsLabel]=\"noEventsLabel\"\n                [autoSelect]=\"autoSelect\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [monthviewDisplayEventTemplate]=\"monthviewDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewInactiveDisplayEventTemplate]=\"monthviewInactiveDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewEventDetailTemplate]=\"monthviewEventDetailTemplate||monthviewDefaultEventDetailTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [sliderOptions]=\"sliderOptions\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </monthview>\n            <weekview *ngSwitchCase=\"'week'\"\n                [formatWeekTitle]=\"formatWeekTitle\"\n                [formatWeekViewDayHeader]=\"formatWeekViewDayHeader\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [startingDayWeek]=\"startingDayWeek\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [autoSelect]=\"autoSelect\"\n                [hourSegments]=\"hourSegments\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [weekviewHeaderTemplate]=\"weekviewHeaderTemplate||defaultWeekviewHeaderTemplate\"\n                [weekviewAllDayEventTemplate]=\"weekviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [weekviewNormalEventTemplate]=\"weekviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [weekviewAllDayEventSectionTemplate]=\"weekviewAllDayEventSectionTemplate||defaultWeekViewAllDayEventSectionTemplate\"\n                [weekviewNormalEventSectionTemplate]=\"weekviewNormalEventSectionTemplate||defaultNormalEventSectionTemplate\"\n                [weekviewInactiveAllDayEventSectionTemplate]=\"weekviewInactiveAllDayEventSectionTemplate||defaultInactiveAllDayEventSectionTemplate\"\n                [weekviewInactiveNormalEventSectionTemplate]=\"weekviewInactiveNormalEventSectionTemplate||defaultInactiveNormalEventSectionTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [startHour]=\"startHour\"\n                [endHour]=\"endHour\"\n                [sliderOptions]=\"sliderOptions\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </weekview>\n            <dayview *ngSwitchCase=\"'day'\"\n                [formatDayTitle]=\"formatDayTitle\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [hourSegments]=\"hourSegments\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [dayviewAllDayEventTemplate]=\"dayviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [dayviewNormalEventTemplate]=\"dayviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [dayviewAllDayEventSectionTemplate]=\"dayviewAllDayEventSectionTemplate||defaultDayViewAllDayEventSectionTemplate\"\n                [dayviewNormalEventSectionTemplate]=\"dayviewNormalEventSectionTemplate||defaultNormalEventSectionTemplate\"\n                [dayviewInactiveAllDayEventSectionTemplate]=\"dayviewInactiveAllDayEventSectionTemplate||defaultInactiveAllDayEventSectionTemplate\"\n                [dayviewInactiveNormalEventSectionTemplate]=\"dayviewInactiveNormalEventSectionTemplate||defaultInactiveNormalEventSectionTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [startHour]=\"startHour\"\n                [endHour]=\"endHour\"\n                [sliderOptions]=\"sliderOptions\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </dayview>\n        </div>\n    ",
            styles: ["\n        :host > div { height: 100%; }\n\n        .event-detail-container {\n          border-top: 2px darkgrey solid;\n        }\n\n        .no-events-label {\n          font-weight: bold;\n          color: darkgrey;\n          text-align: center;\n        }\n\n        .event-detail {\n          cursor: pointer;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        .monthview-eventdetail-timecolumn {\n          width: 110px;\n          overflow: hidden;\n        }\n\n        .calendar-event-inner {\n          overflow: hidden;\n          background-color: #3a87ad;\n          color: white;\n          height: 100%;\n          width: 100%;\n          padding: 2px;\n          line-height: 15px;\n          text-align: initial;\n        }\n\n        @media (max-width: 750px) {\n          .calendar-event-inner {\n            font-size: 12px;\n          }\n        }\n    "],
            providers: [_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"], String])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/calendar.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/ionic2-calendar/calendar.module.js ***!
  \*********************************************************/
/*! exports provided: NgCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCalendarModule", function() { return NgCalendarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _monthview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monthview */ "./node_modules/ionic2-calendar/monthview.js");
/* harmony import */ var _weekview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weekview */ "./node_modules/ionic2-calendar/weekview.js");
/* harmony import */ var _dayview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dayview */ "./node_modules/ionic2-calendar/dayview.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _init_position_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./init-position-scroll */ "./node_modules/ionic2-calendar/init-position-scroll.js");









var NgCalendarModule = /** @class */ (function () {
    function NgCalendarModule() {
    }
    NgCalendarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _monthview__WEBPACK_IMPORTED_MODULE_4__["MonthViewComponent"], _weekview__WEBPACK_IMPORTED_MODULE_5__["WeekViewComponent"], _dayview__WEBPACK_IMPORTED_MODULE_6__["DayViewComponent"], _calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], _init_position_scroll__WEBPACK_IMPORTED_MODULE_8__["initPositionScrollComponent"]
            ],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"]],
            entryComponents: [_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"]]
        })
    ], NgCalendarModule);
    return NgCalendarModule;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/calendar.service.js":
/*!**********************************************************!*\
  !*** ./node_modules/ionic2-calendar/calendar.service.js ***!
  \**********************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CalendarService = /** @class */ (function () {
    function CalendarService() {
        this.currentDateChangedFromParent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentDateChangedFromChildren = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.eventSourceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.slideChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentDateChangedFromParent$ = this.currentDateChangedFromParent.asObservable();
        this.currentDateChangedFromChildren$ = this.currentDateChangedFromChildren.asObservable();
        this.eventSourceChanged$ = this.eventSourceChanged.asObservable();
        this.slideChanged$ = this.slideChanged.asObservable();
    }
    CalendarService.prototype.setCurrentDate = function (val, fromParent) {
        if (fromParent === void 0) { fromParent = false; }
        this._currentDate = new Date(val);
        if (fromParent) {
            this.currentDateChangedFromParent.next(val);
        }
        else {
            this.currentDateChangedFromChildren.next(val);
        }
    };
    Object.defineProperty(CalendarService.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        enumerable: true,
        configurable: true
    });
    CalendarService.prototype.rangeChanged = function (component) {
        if (this.queryMode === 'local') {
            if (component.eventSource && component.onDataLoaded) {
                component.onDataLoaded();
            }
        }
        else if (this.queryMode === 'remote') {
            var rangeStart = new Date(component.range.startTime.getTime()), rangeEnd = new Date(component.range.endTime.getTime());
            rangeStart.setHours(0);
            if (rangeStart.getHours() === 23) {
                rangeStart.setTime(rangeStart.getTime() + 3600000);
            }
            rangeEnd.setHours(0);
            if (rangeEnd.getHours() === 23) {
                rangeEnd.setTime(rangeEnd.getTime() + 3600000);
            }
            component.onRangeChanged.emit({
                startTime: rangeStart,
                endTime: rangeEnd
            });
        }
    };
    CalendarService.prototype.getStep = function (mode) {
        switch (mode) {
            case 'month':
                return {
                    years: 0,
                    months: 1,
                    days: 0
                };
            case 'week':
                return {
                    years: 0,
                    months: 0,
                    days: 7
                };
            case 'day':
                return {
                    years: 0,
                    months: 0,
                    days: 1
                };
        }
    };
    CalendarService.prototype.getAdjacentCalendarDate = function (mode, direction) {
        var calculateCalendarDate = this.currentDate;
        var step = this.getStep(mode), year = calculateCalendarDate.getFullYear() + direction * step.years, month = calculateCalendarDate.getMonth() + direction * step.months, date = calculateCalendarDate.getDate() + direction * step.days;
        calculateCalendarDate = new Date(year, month, date, 12, 0, 0);
        if (mode === 'month') {
            var firstDayInNextMonth = new Date(year, month + 1, 1, 12, 0, 0);
            if (firstDayInNextMonth.getTime() <= calculateCalendarDate.getTime()) {
                calculateCalendarDate = new Date(firstDayInNextMonth.getTime() - 24 * 60 * 60 * 1000);
            }
        }
        return calculateCalendarDate;
    };
    CalendarService.prototype.getAdjacentViewStartTime = function (component, direction) {
        var adjacentCalendarDate = this.getAdjacentCalendarDate(component.mode, direction);
        return component.getRange(adjacentCalendarDate).startTime;
    };
    CalendarService.prototype.populateAdjacentViews = function (component) {
        var currentViewStartDate, currentViewData, toUpdateViewIndex, currentViewIndex = component.currentViewIndex;
        if (component.direction === 1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
            toUpdateViewIndex = (currentViewIndex + 1) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
        }
        else if (component.direction === -1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
            toUpdateViewIndex = (currentViewIndex + 2) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
        }
        else {
            if (!component.views) {
                currentViewData = [];
                currentViewStartDate = component.range.startTime;
                currentViewData.push(component.getViewData(currentViewStartDate));
                currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
                currentViewData.push(component.getViewData(currentViewStartDate));
                currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
                currentViewData.push(component.getViewData(currentViewStartDate));
                component.views = currentViewData;
            }
            else {
                currentViewStartDate = component.range.startTime;
                component.views[currentViewIndex] = component.getViewData(currentViewStartDate);
                currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
                toUpdateViewIndex = (currentViewIndex + 2) % 3;
                component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
                currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
                toUpdateViewIndex = (currentViewIndex + 1) % 3;
                component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
            }
        }
    };
    CalendarService.prototype.loadEvents = function () {
        this.eventSourceChanged.next();
    };
    CalendarService.prototype.slide = function (direction) {
        this.slideChanged.next(direction);
    };
    CalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/dayview.js":
/*!*************************************************!*\
  !*** ./node_modules/ionic2-calendar/dayview.js ***!
  \*************************************************/
/*! exports provided: DayViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewComponent", function() { return DayViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");





var DayViewComponent = /** @class */ (function () {
    function DayViewComponent(calendarService, elm) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.class = true;
        this.dir = '';
        this.scrollToHour = 0;
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'day';
        this.inited = false;
        this.callbackOnInit = true;
    }
    DayViewComponent_1 = DayViewComponent;
    DayViewComponent.createDateObjects = function (startTime, startHour, endHour, timeInterval) {
        var rows = [], currentHour = 0, currentDate = startTime.getDate();
        var time, hourStep, minStep;
        if (timeInterval < 1) {
            hourStep = Math.floor(1 / timeInterval);
            minStep = 60;
        }
        else {
            hourStep = 1;
            minStep = Math.floor(60 / timeInterval);
        }
        for (var hour = startHour; hour < endHour; hour += hourStep) {
            for (var interval = 0; interval < 60; interval += minStep) {
                time = new Date(startTime.getTime());
                time.setHours(currentHour + hour, interval);
                time.setDate(currentDate);
                rows.push({
                    time: time,
                    events: []
                });
            }
        }
        return rows;
    };
    DayViewComponent.compareEventByStartOffset = function (eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    };
    DayViewComponent.calculateWidth = function (orderedEvents, size, hourParts) {
        var totalSize = size * hourParts, cells = new Array(totalSize);
        // sort by position in descending order, the right most columns should be calculated first
        orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
        });
        for (var i_1 = 0; i_1 < totalSize; i_1 += 1) {
            cells[i_1] = {
                calculated: false,
                events: []
            };
        }
        var len = orderedEvents.length;
        for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_1 = orderedEvents[i_2];
            var index = event_1.startIndex * hourParts + event_1.startOffset;
            while (index < event_1.endIndex * hourParts - event_1.endOffset) {
                cells[index].events.push(event_1);
                index += 1;
            }
        }
        var i = 0;
        while (i < len) {
            var event_2 = orderedEvents[i];
            if (!event_2.overlapNumber) {
                var overlapNumber = event_2.position + 1;
                event_2.overlapNumber = overlapNumber;
                var eventQueue = [event_2];
                while (event_2 = eventQueue.shift()) {
                    var index = event_2.startIndex * hourParts + event_2.startOffset;
                    while (index < event_2.endIndex * hourParts - event_2.endOffset) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                var eventCountInCell = cells[index].events.length;
                                for (var j = 0; j < eventCountInCell; j += 1) {
                                    var currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    };
    DayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.sliderOptions) {
            this.sliderOptions = {};
        }
        this.sliderOptions.loop = true;
        this.hourRange = (this.endHour - this.startHour) * this.hourSegments;
        if (this.dateFormatter && this.dateFormatter.formatDayViewTitle) {
            this.formatTitle = this.dateFormatter.formatDayViewTitle;
        }
        else {
            var datePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe_1.transform(date, this.formatDayTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatDayViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatDayViewHourColumn;
        }
        else {
            var datePipe_2 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe_2.transform(date, this.formatHourColumn);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
        this.slideChangedSubscription = this.calendarService.slideChanged$.subscribe(function (direction) {
            if (direction === 1) {
                _this.slider.slideNext();
            }
            else if (direction === -1) {
                _this.slider.slidePrev();
            }
        });
    };
    DayViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
        if (this.scrollToHour > 0) {
            var hourColumns_1 = this.elm.nativeElement.querySelector('.dayview-normal-event-container').querySelectorAll('.calendar-hour-column');
            var me_1 = this;
            setTimeout(function () {
                me_1.initScrollPosition = hourColumns_1[me_1.scrollToHour - me_1.startHour].offsetTop;
            }, 50);
        }
    };
    DayViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited) {
            return;
        }
        var eventSourceChange = changes.eventSource;
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes.lockSwipeToPrev;
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes.lockSwipes;
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    DayViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
        if (this.slideChangedSubscription) {
            this.slideChangedSubscription.unsubscribe();
            this.slideChangedSubscription = null;
        }
    };
    DayViewComponent.prototype.onSlideChanged = function () {
        var _this = this;
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var direction = 0;
        var currentViewIndex = this.currentViewIndex;
        this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (isNaN(currentSlideIndex)) {
                currentSlideIndex = currentViewIndex;
            }
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                _this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                _this.slider.slideTo(3, 0, false);
            }
            _this.currentViewIndex = currentSlideIndex;
            _this.move(direction);
        });
    };
    DayViewComponent.prototype.move = function (direction) {
        if (direction === 0) {
            return;
        }
        this.direction = direction;
        var adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacentDate);
        this.refreshView();
        this.direction = 0;
    };
    DayViewComponent.prototype.getHourColumnLabels = function () {
        var hourColumnLabels = [];
        for (var hour = 0, length_1 = this.views[0].rows.length; hour < length_1; hour += 1) {
            // handle edge case for DST
            if (hour === 0 && this.views[0].rows[hour].time.getHours() !== this.startHour) {
                var time = new Date(this.views[0].rows[hour].time);
                time.setDate(time.getDate() + 1);
                time.setHours(this.startHour);
                hourColumnLabels.push(this.formatHourColumnLabel(time));
            }
            else {
                hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour].time));
            }
        }
        return hourColumnLabels;
    };
    DayViewComponent.prototype.getViewData = function (startTime) {
        return {
            rows: DayViewComponent_1.createDateObjects(startTime, this.startHour, this.endHour, this.hourSegments),
            allDayEvents: []
        };
    };
    DayViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), date = currentDate.getDate(), startTime = new Date(year, month, date, 12, 0, 0), endTime = new Date(year, month, date + 1, 12, 0, 0);
        return {
            startTime: startTime,
            endTime: endTime
        };
    };
    DayViewComponent.prototype.onDataLoaded = function () {
        var eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = this.range.startTime, endTime = this.range.endTime, utcStartTime = Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate()), utcEndTime = Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate()), currentViewIndex = this.currentViewIndex, rows = this.views[currentViewIndex].rows, allDayEvents = this.views[currentViewIndex].allDayEvents = [], oneHour = 3600000, eps = 0.016, rangeStartRowIndex = this.startHour * this.hourSegments, rangeEndRowIndex = this.endHour * this.hourSegments;
        var normalEventInRange = false;
        for (var hour = 0; hour < this.hourRange; hour += 1) {
            rows[hour].events = [];
        }
        for (var i = 0; i < len; i += 1) {
            var event_3 = eventSource[i];
            var eventStartTime = event_3.startTime;
            var eventEndTime = event_3.endTime;
            var eventUTCStartTime = void 0, eventUTCEndTime = void 0;
            if (event_3.allDay) {
                eventUTCStartTime = eventStartTime.getTime();
                eventUTCEndTime = eventEndTime.getTime();
            }
            else {
                eventUTCStartTime = Date.UTC(eventStartTime.getFullYear(), eventStartTime.getMonth(), eventStartTime.getDate());
                eventUTCEndTime = Date.UTC(eventEndTime.getFullYear(), eventEndTime.getMonth(), eventEndTime.getDate() + 1);
            }
            if (eventUTCEndTime <= utcStartTime || eventUTCStartTime >= utcEndTime || eventStartTime >= eventEndTime) {
                continue;
            }
            if (event_3.allDay) {
                allDayEvents.push({
                    event: event_3
                });
            }
            else {
                normalEventInRange = true;
                var timeDifferenceStart = void 0;
                if (eventUTCStartTime < utcStartTime) {
                    timeDifferenceStart = 0;
                }
                else {
                    timeDifferenceStart = (eventStartTime.getHours() + eventStartTime.getMinutes() / 60) * this.hourSegments;
                }
                var timeDifferenceEnd = void 0;
                if (eventUTCEndTime > utcEndTime) {
                    timeDifferenceEnd = (utcEndTime - utcStartTime) / oneHour * this.hourSegments;
                }
                else {
                    timeDifferenceEnd = (eventEndTime.getHours() + eventEndTime.getMinutes() / 60) * this.hourSegments;
                }
                var startIndex = Math.floor(timeDifferenceStart);
                var endIndex = Math.ceil(timeDifferenceEnd - eps);
                var startOffset = 0;
                var endOffset = 0;
                if (this.hourParts !== 1) {
                    if (startIndex < rangeStartRowIndex) {
                        startOffset = 0;
                    }
                    else {
                        startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                    }
                    if (endIndex > rangeEndRowIndex) {
                        endOffset = 0;
                    }
                    else {
                        endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                    }
                }
                if (startIndex < rangeStartRowIndex) {
                    startIndex = 0;
                }
                else {
                    startIndex -= rangeStartRowIndex;
                }
                if (endIndex > rangeEndRowIndex) {
                    endIndex = rangeEndRowIndex;
                }
                endIndex -= rangeStartRowIndex;
                if (startIndex < endIndex) {
                    var displayEvent = {
                        event: event_3,
                        startIndex: startIndex,
                        endIndex: endIndex,
                        startOffset: startOffset,
                        endOffset: endOffset
                    };
                    var eventSet = rows[startIndex].events;
                    if (eventSet) {
                        eventSet.push(displayEvent);
                    }
                    else {
                        eventSet = [];
                        eventSet.push(displayEvent);
                        rows[startIndex].events = eventSet;
                    }
                }
            }
        }
        if (normalEventInRange) {
            var orderedEvents = [];
            for (var hour = 0; hour < this.hourRange; hour += 1) {
                if (rows[hour].events) {
                    rows[hour].events.sort(DayViewComponent_1.compareEventByStartOffset);
                    orderedEvents = orderedEvents.concat(rows[hour].events);
                }
            }
            if (orderedEvents.length > 0) {
                this.placeEvents(orderedEvents);
            }
        }
    };
    DayViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.calendarService.rangeChanged(this);
    };
    DayViewComponent.prototype.getTitle = function () {
        var startingDate = new Date(this.range.startTime.getTime());
        startingDate.setHours(12, 0, 0, 0);
        return this.formatTitle(startingDate);
    };
    DayViewComponent.prototype.select = function (selectedTime, events) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        this.onTimeSelected.emit({
            selectedTime: selectedTime,
            events: events.map(function (e) { return e.event; }),
            disabled: disabled
        });
    };
    DayViewComponent.prototype.placeEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
        DayViewComponent_1.calculateWidth(orderedEvents, this.hourRange, this.hourParts);
    };
    DayViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
    };
    DayViewComponent.prototype.overlap = function (event1, event2) {
        var earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset >= this.hourParts);
        }
    };
    DayViewComponent.prototype.calculatePosition = function (events) {
        var len = events.length, isForbidden = new Array(len);
        var maxColumn = 0, col;
        for (var i = 0; i < len; i += 1) {
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (var j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    };
    DayViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    DayViewComponent.prototype.setScrollPosition = function (scrollPosition) {
        this.initScrollPosition = scrollPosition;
    };
    var DayViewComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('daySlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], DayViewComponent.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.dayview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewAllDayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewNormalEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewInactiveAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewInactiveNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "formatHourColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "formatDayTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "allDayLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "hourParts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DayViewComponent.prototype, "eventSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], DayViewComponent.prototype, "markDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "dateFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "scrollToHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DayViewComponent.prototype, "preserveScrollPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DayViewComponent.prototype, "lockSwipeToPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DayViewComponent.prototype, "lockSwipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "startHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "endHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "sliderOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "hourSegments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "onRangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "onEventSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "onTimeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "onTitleChanged", void 0);
    DayViewComponent = DayViewComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'dayview',
            template: "\n        <ion-slides #daySlider [options]=\"sliderOptions\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\" class=\"slides-container\">\n            <ion-slide class=\"slide-container\">\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <div class=\"dayview-allday-content-wrapper scroll-content\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[0].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[0].allDayEvents.length+'px'}\"\n                                    *ngIf=\"0===currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[0].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"0!==currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewInactiveAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[0].allDayEvents}\">\n                                    </ng-template>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <init-position-scroll *ngIf=\"0===currentViewIndex\" class=\"dayview-normal-event-container\"\n                                      [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\"\n                                      (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[0].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"0!==currentViewIndex\" class=\"dayview-normal-event-container\"\n                                      [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[0].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewInactiveNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <div class=\"dayview-allday-content-wrapper scroll-content\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[1].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[1].allDayEvents.length+'px'}\"\n                                    *ngIf=\"1===currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[1].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"1!==currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewInactiveAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[1].allDayEvents}\">\n                                    </ng-template>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <init-position-scroll *ngIf=\"1===currentViewIndex\" class=\"dayview-normal-event-container\"\n                                      [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\"\n                                      (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[1].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"1!==currentViewIndex\" class=\"dayview-normal-event-container\"\n                                      [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[1].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewInactiveNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <div class=\"dayview-allday-content-wrapper scroll-content\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[2].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[2].allDayEvents.length+'px'}\"\n                                    *ngIf=\"2===currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[2].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"2!==currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewInactiveAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[2].allDayEvents}\">\n                                    </ng-template>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <init-position-scroll *ngIf=\"2===currentViewIndex\" class=\"dayview-normal-event-container\"\n                                      [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\"\n                                      (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[2].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"2!==currentViewIndex\" class=\"dayview-normal-event-container\"\n                                      [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[2].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewInactiveNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n        </ion-slides>\n    ",
            styles: ["\n        .table-fixed {\n            table-layout: fixed;\n        }\n\n        .table {\n            width: 100%;\n            max-width: 100%;\n            background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n            padding: 8px;\n            line-height: 20px;\n            vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n            vertical-align: bottom;\n            border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n            border-top: 0\n        }\n\n        .table > tbody + tbody {\n            border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n            border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n            background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n            width: 50px;\n            white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n            position: relative;\n            width: 100%;\n            height: 100%;\n        }\n\n        .calendar-event {\n            position: absolute;\n            padding: 2px;\n            cursor: pointer;\n            z-index: 10000;\n        }\n\n        .slides-container {\n            height: 100%;\n        }\n\n        .slide-container {\n            display: block;\n        }\n\n        .calendar-cell {\n            padding: 0 !important;\n            height: 37px;\n        }\n\n        .dayview-allday-label {\n            float: left;\n            height: 100%;\n            line-height: 50px;\n            text-align: center;\n            width: 50px;\n            border-left: 1px solid #ddd;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-label {\n            border-right: 1px solid #ddd;\n            float: right;\n        }\n\n        .dayview-allday-content-wrapper {\n            margin-left: 50px;\n            overflow: hidden;\n            height: 51px;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 50px;\n        }\n\n        .dayview-allday-content-table {\n            min-height: 50px;\n        }\n\n        .dayview-allday-content-table td {\n            border-left: 1px solid #ddd;\n            border-right: 1px solid #ddd;\n        }\n\n        .dayview-allday-table {\n            height: 50px;\n            position: relative;\n            border-bottom: 1px solid #ddd;\n            font-size: 14px;\n        }\n\n        .dayview-normal-event-container {\n            margin-top: 50px;\n            overflow: hidden;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            position: absolute;\n            font-size: 14px;\n        }\n\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n            display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n            .dayview-allday-label, .calendar-hour-column {\n                width: 31px;\n                font-size: 12px;\n            }\n\n            .dayview-allday-label {\n                padding-top: 4px;\n            }\n\n            .table > tbody > tr > td.calendar-hour-column {\n                padding-left: 0;\n                padding-right: 0;\n                vertical-align: middle;\n                line-height: 12px;\n            }\n\n            .dayview-allday-label {\n                line-height: 20px;\n            }\n\n            .dayview-allday-content-wrapper {\n                margin-left: 31px;\n            }\n\n            [dir=\"rtl\"] .dayview-allday-content-wrapper {\n                margin-left: 0;\n                margin-right: 31px;\n            }\n        }\n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], DayViewComponent);
    return DayViewComponent;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ionic2-calendar/index.js ***!
  \***********************************************/
/*! exports provided: NgCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.module */ "./node_modules/ionic2-calendar/calendar.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgCalendarModule", function() { return _calendar_module__WEBPACK_IMPORTED_MODULE_0__["NgCalendarModule"]; });




/***/ }),

/***/ "./node_modules/ionic2-calendar/init-position-scroll.js":
/*!**************************************************************!*\
  !*** ./node_modules/ionic2-calendar/init-position-scroll.js ***!
  \**************************************************************/
/*! exports provided: initPositionScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPositionScrollComponent", function() { return initPositionScrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var initPositionScrollComponent = /** @class */ (function () {
    function initPositionScrollComponent(el) {
        this.onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listenerAttached = false;
        this.element = el;
    }
    initPositionScrollComponent.prototype.ngOnChanges = function (changes) {
        var initPosition = changes['initPosition'];
        if (initPosition && initPosition.currentValue !== undefined && this.scrollContent) {
            var me_1 = this;
            setTimeout(function () {
                me_1.scrollContent.scrollTop = initPosition.currentValue;
            }, 0);
        }
    };
    initPositionScrollComponent.prototype.ngAfterViewInit = function () {
        var scrollContent = this.scrollContent = this.element.nativeElement.querySelector('.scroll-content');
        if (this.initPosition !== undefined) {
            scrollContent.scrollTop = this.initPosition;
        }
        if (this.emitEvent && !this.listenerAttached) {
            var onScroll_1 = this.onScroll;
            this.handler = function () {
                onScroll_1.emit(scrollContent.scrollTop);
            };
            this.listenerAttached = true;
            scrollContent.addEventListener('scroll', this.handler);
        }
    };
    initPositionScrollComponent.prototype.ngOnDestroy = function () {
        if (this.listenerAttached) {
            this.scrollContent.removeEventListener('scroll', this.handler);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], initPositionScrollComponent.prototype, "initPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], initPositionScrollComponent.prototype, "emitEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], initPositionScrollComponent.prototype, "onScroll", void 0);
    initPositionScrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'init-position-scroll',
            template: "\n        <div class=\"scroll-content\" style=\"height:100%\">\n            <ng-content></ng-content>\n        </div>\n    ",
            styles: ["\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }        \n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], initPositionScrollComponent);
    return initPositionScrollComponent;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/monthview.js":
/*!***************************************************!*\
  !*** ./node_modules/ionic2-calendar/monthview.js ***!
  \***************************************************/
/*! exports provided: MonthViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthViewComponent", function() { return MonthViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");





var MonthViewComponent = /** @class */ (function () {
    function MonthViewComponent(calendarService) {
        this.calendarService = calendarService;
        this.autoSelect = true;
        this.dir = '';
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.mode = 'month';
        this.direction = 0;
        this.moveOnSelected = false;
        this.inited = false;
        this.callbackOnInit = true;
    }
    MonthViewComponent_1 = MonthViewComponent;
    ;
    MonthViewComponent.getDates = function (startDate, n) {
        var dates = new Array(n), current = new Date(startDate.getTime());
        var i = 0;
        while (i < n) {
            dates[i++] = new Date(current.getTime());
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };
    MonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.sliderOptions) {
            this.sliderOptions = {};
        }
        this.sliderOptions.loop = true;
        if (this.dateFormatter && this.dateFormatter.formatMonthViewDay) {
            this.formatDayLabel = this.dateFormatter.formatMonthViewDay;
        }
        else {
            var dayLabelDatePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US');
            this.formatDayLabel = function (date) {
                return dayLabelDatePipe_1.transform(date, this.formatDay);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatMonthViewDayHeader) {
            this.formatDayHeaderLabel = this.dateFormatter.formatMonthViewDayHeader;
        }
        else {
            var datePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.locale);
            this.formatDayHeaderLabel = function (date) {
                return datePipe_1.transform(date, this.formatDayHeader);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatMonthViewTitle) {
            this.formatTitle = this.dateFormatter.formatMonthViewTitle;
        }
        else {
            var datePipe_2 = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe_2.transform(date, this.formatMonthTitle);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
        this.slideChangedSubscription = this.calendarService.slideChanged$.subscribe(function (direction) {
            if (direction === 1) {
                _this.slider.slideNext();
            }
            else if (direction === -1) {
                _this.slider.slidePrev();
            }
        });
    };
    MonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
        if (this.slideChangedSubscription) {
            this.slideChangedSubscription.unsubscribe();
            this.slideChangedSubscription = null;
        }
    };
    MonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited) {
            return;
        }
        var eventSourceChange = changes.eventSource;
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes.lockSwipeToPrev;
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes.lockSwipes;
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    MonthViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
    };
    MonthViewComponent.prototype.onSlideChanged = function () {
        var _this = this;
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var direction = 0;
        var currentViewIndex = this.currentViewIndex;
        this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (isNaN(currentSlideIndex)) {
                currentSlideIndex = currentViewIndex;
            }
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                _this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                _this.slider.slideTo(3, 0, false);
            }
            _this.currentViewIndex = currentSlideIndex;
            _this.move(direction);
        });
    };
    MonthViewComponent.prototype.move = function (direction) {
        if (direction === 0) {
            return;
        }
        this.direction = direction;
        if (!this.moveOnSelected) {
            var adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
            this.calendarService.setCurrentDate(adjacentDate);
        }
        this.refreshView();
        this.direction = 0;
        this.moveOnSelected = false;
    };
    MonthViewComponent.prototype.createDateObject = function (date) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(date);
        }
        return {
            date: date,
            events: [],
            label: this.formatDayLabel(date),
            secondary: false,
            disabled: disabled
        };
    };
    MonthViewComponent.prototype.getViewData = function (startTime) {
        var startDate = startTime, date = startDate.getDate(), month = (startDate.getMonth() + (date !== 1 ? 1 : 0)) % 12;
        var dates = MonthViewComponent_1.getDates(startDate, 42);
        var days = [];
        for (var i = 0; i < 42; i++) {
            var dateObject = this.createDateObject(dates[i]);
            dateObject.secondary = dates[i].getMonth() !== month;
            days[i] = dateObject;
        }
        var dayHeaders = [];
        for (var i = 0; i < 7; i++) {
            dayHeaders.push(this.formatDayHeaderLabel(days[i].date));
        }
        return {
            dates: days,
            dayHeaders: dayHeaders
        };
    };
    MonthViewComponent.prototype.getHighlightClass = function (date) {
        var className = '';
        if (date.hasEvent) {
            if (date.secondary) {
                className = 'monthview-secondary-with-event';
            }
            else {
                className = 'monthview-primary-with-event';
            }
        }
        if (date.selected) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-selected';
        }
        if (date.current) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-current';
        }
        if (date.secondary) {
            if (className) {
                className += ' ';
            }
            className += 'text-muted';
        }
        if (date.disabled) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-disabled';
        }
        return className;
    };
    MonthViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), firstDayOfMonth = new Date(year, month, 1, 12, 0, 0), // set hour to 12 to avoid DST problem
        difference = this.startingDayMonth - firstDayOfMonth.getDay(), numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : -difference, startDate = new Date(firstDayOfMonth.getTime());
        if (numDisplayedFromPreviousMonth > 0) {
            startDate.setDate(-numDisplayedFromPreviousMonth + 1);
        }
        var endDate = new Date(startDate.getTime());
        endDate.setDate(endDate.getDate() + 42);
        return {
            startTime: startDate,
            endTime: endDate
        };
    };
    MonthViewComponent.prototype.onDataLoaded = function () {
        var range = this.range, eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = range.startTime, endTime = range.endTime, utcStartTime = Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate()), utcEndTime = Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate()), currentViewIndex = this.currentViewIndex, dates = this.views[currentViewIndex].dates, oneDay = 86400000, eps = 0.0006;
        for (var r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].hasEvent = false;
                dates[r].events = [];
            }
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i], eventStartTime = event_1.startTime, eventEndTime = event_1.endTime;
            var eventUTCStartTime = void 0, eventUTCEndTime = void 0;
            if (event_1.allDay) {
                eventUTCStartTime = eventStartTime.getTime();
                eventUTCEndTime = eventEndTime.getTime();
            }
            else {
                eventUTCStartTime = Date.UTC(eventStartTime.getFullYear(), eventStartTime.getMonth(), eventStartTime.getDate());
                eventUTCEndTime = Date.UTC(eventEndTime.getFullYear(), eventEndTime.getMonth(), eventEndTime.getDate() + 1);
            }
            if (eventUTCEndTime <= utcStartTime || eventUTCStartTime >= utcEndTime) {
                continue;
            }
            var timeDifferenceStart = void 0, timeDifferenceEnd = void 0;
            if (eventUTCStartTime < utcStartTime) {
                timeDifferenceStart = 0;
            }
            else {
                timeDifferenceStart = (eventUTCStartTime - utcStartTime) / oneDay;
            }
            if (eventUTCEndTime > utcEndTime) {
                timeDifferenceEnd = (utcEndTime - utcStartTime) / oneDay;
            }
            else {
                timeDifferenceEnd = (eventUTCEndTime - utcStartTime) / oneDay;
            }
            var index = Math.floor(timeDifferenceStart);
            var endIndex = Math.ceil(timeDifferenceEnd - eps);
            while (index < endIndex) {
                dates[index].hasEvent = true;
                var eventSet = dates[index].events;
                if (eventSet) {
                    eventSet.push(event_1);
                }
                else {
                    eventSet = [];
                    eventSet.push(event_1);
                    dates[index].events = eventSet;
                }
                index += 1;
            }
        }
        for (var r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].events.sort(this.compareEvent);
            }
        }
        if (this.autoSelect) {
            var findSelected = false;
            for (var r = 0; r < 42; r += 1) {
                if (dates[r].selected) {
                    this.selectedDate = dates[r];
                    findSelected = true;
                    break;
                }
            }
            if (findSelected) {
                this.onTimeSelected.emit({
                    selectedTime: this.selectedDate.date,
                    events: this.selectedDate.events,
                    disabled: this.selectedDate.disabled
                });
            }
        }
    };
    MonthViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
        this.calendarService.rangeChanged(this);
    };
    MonthViewComponent.prototype.getTitle = function () {
        var currentViewStartDate = this.range.startTime, date = currentViewStartDate.getDate(), month = (currentViewStartDate.getMonth() + (date !== 1 ? 1 : 0)) % 12, year = currentViewStartDate.getFullYear() + (date !== 1 && month === 0 ? 1 : 0), headerDate = new Date(year, month, 1, 12, 0, 0, 0);
        return this.formatTitle(headerDate);
    };
    MonthViewComponent.prototype.compareEvent = function (event1, event2) {
        if (event1.allDay) {
            return 1;
        }
        else if (event2.allDay) {
            return -1;
        }
        else {
            return (event1.startTime.getTime() - event2.startTime.getTime());
        }
    };
    MonthViewComponent.prototype.select = function (viewDate) {
        if (!this.views) {
            return;
        }
        var selectedDate = viewDate.date, events = viewDate.events;
        if (!viewDate.disabled) {
            var dates = this.views[this.currentViewIndex].dates, currentCalendarDate = this.calendarService.currentDate, currentMonth = currentCalendarDate.getMonth(), currentYear = currentCalendarDate.getFullYear(), selectedMonth = selectedDate.getMonth(), selectedYear = selectedDate.getFullYear();
            var direction = 0;
            if (currentYear === selectedYear) {
                if (currentMonth !== selectedMonth) {
                    direction = currentMonth < selectedMonth ? 1 : -1;
                }
            }
            else {
                direction = currentYear < selectedYear ? 1 : -1;
            }
            this.calendarService.setCurrentDate(selectedDate);
            if (direction === 0) {
                var currentViewStartDate = this.range.startTime, oneDay = 86400000, selectedDayDifference = Math.round((Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay);
                for (var r = 0; r < 42; r += 1) {
                    dates[r].selected = false;
                }
                if (selectedDayDifference >= 0 && selectedDayDifference < 42) {
                    dates[selectedDayDifference].selected = true;
                    this.selectedDate = dates[selectedDayDifference];
                }
            }
            else {
                this.moveOnSelected = true;
                this.slideView(direction);
            }
        }
        this.onTimeSelected.emit({ selectedTime: selectedDate, events: events, disabled: viewDate.disabled });
    };
    MonthViewComponent.prototype.slideView = function (direction) {
        if (direction === 1) {
            this.slider.slideNext();
        }
        else if (direction === -1) {
            this.slider.slidePrev();
        }
    };
    MonthViewComponent.prototype.updateCurrentView = function (currentViewStartDate, view) {
        var currentCalendarDate = this.calendarService.currentDate, today = new Date(), oneDay = 86400000, selectedDayDifference = Math.round((Date.UTC(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), currentCalendarDate.getDate()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay), currentDayDifference = Math.round((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay);
        for (var r = 0; r < 42; r += 1) {
            view.dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 42 && !view.dates[selectedDayDifference].disabled && (this.autoSelect || this.moveOnSelected)) {
            view.dates[selectedDayDifference].selected = true;
            this.selectedDate = view.dates[selectedDayDifference];
        }
        else {
            this.selectedDate = {
                date: null,
                events: [],
                label: null,
                secondary: null,
                disabled: false
            };
        }
        if (currentDayDifference >= 0 && currentDayDifference < 42) {
            view.dates[currentDayDifference].current = true;
        }
    };
    MonthViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    var MonthViewComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('monthSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], MonthViewComponent.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], MonthViewComponent.prototype, "monthviewDisplayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], MonthViewComponent.prototype, "monthviewInactiveDisplayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], MonthViewComponent.prototype, "monthviewEventDetailTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "formatDay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "formatDayHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "formatMonthTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MonthViewComponent.prototype, "eventSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MonthViewComponent.prototype, "startingDayMonth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MonthViewComponent.prototype, "showEventDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "noEventsLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "autoSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], MonthViewComponent.prototype, "markDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "dateFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MonthViewComponent.prototype, "lockSwipeToPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MonthViewComponent.prototype, "lockSwipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "sliderOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "onRangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "onEventSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "onTimeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "onTitleChanged", void 0);
    MonthViewComponent = MonthViewComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'monthview',
            template: "\n        <div>\n            <ion-slides #monthSlider [options]=\"sliderOptions\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\">\n                <ion-slide>\n                    <table *ngIf=\"0===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[0].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[0].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[0].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                             [ngTemplateOutletContext]=\"{view: views[0], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"0!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[0].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                             [ngTemplateOutletContext]=\"{view: views[0], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n                <ion-slide>\n                    <table *ngIf=\"1===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[1].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[1].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[1].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                             [ngTemplateOutletContext]=\"{view: views[1], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"1!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[1].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                             [ngTemplateOutletContext]=\"{view: views[1], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n                <ion-slide>\n                    <table *ngIf=\"2===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[2].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[2].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[2].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                             [ngTemplateOutletContext]=\"{view: views[2], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"2!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[2].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                             [ngTemplateOutletContext]=\"{view: views[2], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n            </ion-slides>\n            <ng-template [ngTemplateOutlet]=\"monthviewEventDetailTemplate\"\n                         [ngTemplateOutletContext]=\"{showEventDetail:showEventDetail, selectedDate: selectedDate, noEventsLabel: noEventsLabel}\">\n            </ng-template>\n        </div>\n    ",
            styles: ["\n        .text-muted {\n            color: #999;\n        }\n\n        .table-fixed {\n            table-layout: fixed;\n        }\n\n        .table {\n            width: 100%;\n            max-width: 100%;\n            background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n            padding: 8px;\n            line-height: 20px;\n            vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n            vertical-align: bottom;\n            border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n            border-top: 0\n        }\n\n        .table > tbody + tbody {\n            border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n            border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n            background-color: #f9f9f9\n        }\n\n        .monthview-primary-with-event {\n            background-color: #3a87ad;\n            color: white;\n        }\n\n        .monthview-current {\n            background-color: #f0f0f0;\n        }\n\n        .monthview-selected {\n            background-color: #009900;\n            color: white;\n        }\n\n        .monthview-datetable td.monthview-disabled {\n            color: lightgrey;\n            cursor: default;\n        }\n\n        .monthview-datetable th {\n            text-align: center;\n        }\n\n        .monthview-datetable td {\n            cursor: pointer;\n            text-align: center;\n        }\n\n        .monthview-secondary-with-event {\n            background-color: #d9edf7;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n            display: none;\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"]])
    ], MonthViewComponent);
    return MonthViewComponent;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/weekview.js":
/*!**************************************************!*\
  !*** ./node_modules/ionic2-calendar/weekview.js ***!
  \**************************************************/
/*! exports provided: WeekViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekViewComponent", function() { return WeekViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");





var WeekViewComponent = /** @class */ (function () {
    function WeekViewComponent(calendarService, elm) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.class = true;
        this.autoSelect = true;
        this.dir = '';
        this.scrollToHour = 0;
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'week';
        this.inited = false;
        this.callbackOnInit = true;
    }
    WeekViewComponent_1 = WeekViewComponent;
    WeekViewComponent.createDateObjects = function (startTime, startHour, endHour, timeInterval) {
        var times = [], currentHour = 0, currentDate = startTime.getDate();
        var hourStep, minStep;
        if (timeInterval < 1) {
            hourStep = Math.floor(1 / timeInterval);
            minStep = 60;
        }
        else {
            hourStep = 1;
            minStep = Math.floor(60 / timeInterval);
        }
        for (var hour = startHour; hour < endHour; hour += hourStep) {
            for (var interval = 0; interval < 60; interval += minStep) {
                var row = [];
                for (var day = 0; day < 7; day += 1) {
                    var time = new Date(startTime.getTime());
                    time.setHours(currentHour + hour, interval);
                    time.setDate(currentDate + day);
                    row.push({
                        events: [],
                        time: time
                    });
                }
                times.push(row);
            }
        }
        return times;
    };
    WeekViewComponent.getDates = function (startTime, n) {
        var dates = new Array(n), current = new Date(startTime.getTime());
        var i = 0;
        while (i < n) {
            dates[i++] = {
                date: new Date(current.getTime()),
                events: [],
                dayHeader: ''
            };
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };
    WeekViewComponent.compareEventByStartOffset = function (eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    };
    WeekViewComponent.calculateWidth = function (orderedEvents, size, hourParts) {
        var totalSize = size * hourParts, cells = new Array(totalSize);
        // sort by position in descending order, the right most columns should be calculated first
        orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
        });
        for (var i_1 = 0; i_1 < totalSize; i_1 += 1) {
            cells[i_1] = {
                calculated: false,
                events: []
            };
        }
        var len = orderedEvents.length;
        for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_1 = orderedEvents[i_2];
            var index = event_1.startIndex * hourParts + event_1.startOffset;
            while (index < event_1.endIndex * hourParts - event_1.endOffset) {
                cells[index].events.push(event_1);
                index += 1;
            }
        }
        var i = 0;
        while (i < len) {
            var event_2 = orderedEvents[i];
            if (!event_2.overlapNumber) {
                var overlapNumber = event_2.position + 1;
                event_2.overlapNumber = overlapNumber;
                var eventQueue = [event_2];
                while (event_2 = eventQueue.shift()) {
                    var index = event_2.startIndex * hourParts + event_2.startOffset;
                    while (index < event_2.endIndex * hourParts - event_2.endOffset) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                var eventCountInCell = cells[index].events.length;
                                for (var j = 0; j < eventCountInCell; j += 1) {
                                    var currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    };
    WeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.sliderOptions) {
            this.sliderOptions = {};
        }
        this.sliderOptions.loop = true;
        this.hourRange = (this.endHour - this.startHour) * this.hourSegments;
        if (this.dateFormatter && this.dateFormatter.formatWeekViewDayHeader) {
            this.formatDayHeader = this.dateFormatter.formatWeekViewDayHeader;
        }
        else {
            var datePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatDayHeader = function (date) {
                return datePipe_1.transform(date, this.formatWeekViewDayHeader);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewTitle) {
            this.formatTitle = this.dateFormatter.formatWeekViewTitle;
        }
        else {
            var datePipe_2 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe_2.transform(date, this.formatWeekTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatWeekViewHourColumn;
        }
        else {
            var datePipe_3 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe_3.transform(date, this.formatHourColumn);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
        this.slideChangedSubscription = this.calendarService.slideChanged$.subscribe(function (direction) {
            if (direction === 1) {
                _this.slider.slideNext();
            }
            else if (direction === -1) {
                _this.slider.slidePrev();
            }
        });
    };
    WeekViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
        if (this.scrollToHour > 0) {
            var hourColumns_1 = this.elm.nativeElement.querySelector('.weekview-normal-event-container').querySelectorAll('.calendar-hour-column');
            var me_1 = this;
            setTimeout(function () {
                me_1.initScrollPosition = hourColumns_1[me_1.scrollToHour - me_1.startHour].offsetTop;
            }, 50);
        }
    };
    WeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited) {
            return;
        }
        var eventSourceChange = changes.eventSource;
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes.lockSwipeToPrev;
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes.lockSwipes;
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    WeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
        if (this.slideChangedSubscription) {
            this.slideChangedSubscription.unsubscribe();
            this.slideChangedSubscription = null;
        }
    };
    WeekViewComponent.prototype.onSlideChanged = function () {
        var _this = this;
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var currentViewIndex = this.currentViewIndex;
        var direction = 0;
        this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (isNaN(currentSlideIndex)) {
                currentSlideIndex = currentViewIndex;
            }
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                _this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                _this.slider.slideTo(3, 0, false);
            }
            _this.currentViewIndex = currentSlideIndex;
            _this.move(direction);
        });
    };
    WeekViewComponent.prototype.move = function (direction) {
        if (direction === 0) {
            return;
        }
        this.direction = direction;
        var adjacent = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacent);
        this.refreshView();
        this.direction = 0;
    };
    WeekViewComponent.prototype.getHourColumnLabels = function () {
        var hourColumnLabels = [];
        for (var hour = 0, length_1 = this.views[0].rows.length; hour < length_1; hour += 1) {
            // handle edge case for DST
            if (hour === 0 && this.views[0].rows[hour][0].time.getHours() !== this.startHour) {
                var time = new Date(this.views[0].rows[hour][0].time);
                time.setDate(time.getDate() + 1);
                time.setHours(this.startHour);
                hourColumnLabels.push(this.formatHourColumnLabel(time));
            }
            else {
                hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour][0].time));
            }
        }
        return hourColumnLabels;
    };
    WeekViewComponent.prototype.getViewData = function (startTime) {
        var dates = WeekViewComponent_1.getDates(startTime, 7);
        for (var i = 0; i < 7; i++) {
            dates[i].dayHeader = this.formatDayHeader(dates[i].date);
        }
        return {
            rows: WeekViewComponent_1.createDateObjects(startTime, this.startHour, this.endHour, this.hourSegments),
            dates: dates
        };
    };
    WeekViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), date = currentDate.getDate(), day = currentDate.getDay();
        var difference = day - this.startingDayWeek;
        if (difference < 0) {
            difference += 7;
        }
        // set hour to 12 to avoid DST problem
        var firstDayOfWeek = new Date(year, month, date - difference, 12, 0, 0), endTime = new Date(year, month, date - difference + 7, 12, 0, 0);
        return {
            startTime: firstDayOfWeek,
            endTime: endTime
        };
    };
    WeekViewComponent.prototype.onDataLoaded = function () {
        var eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = this.range.startTime, endTime = this.range.endTime, utcStartTime = Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate()), utcEndTime = Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate()), currentViewIndex = this.currentViewIndex, rows = this.views[currentViewIndex].rows, dates = this.views[currentViewIndex].dates, oneHour = 3600000, oneDay = 86400000, 
        // add allday eps
        eps = 0.016, rangeStartRowIndex = this.startHour * this.hourSegments, rangeEndRowIndex = this.endHour * this.hourSegments, allRows = 24 * this.hourSegments;
        var allDayEventInRange = false, normalEventInRange = false;
        for (var i = 0; i < 7; i += 1) {
            dates[i].events = [];
            dates[i].hasEvent = false;
        }
        for (var day = 0; day < 7; day += 1) {
            for (var hour = 0; hour < this.hourRange; hour += 1) {
                rows[hour][day].events = [];
            }
        }
        for (var i = 0; i < len; i += 1) {
            var event_3 = eventSource[i];
            var eventStartTime = event_3.startTime;
            var eventEndTime = event_3.endTime;
            var eventUTCStartTime = void 0, eventUTCEndTime = void 0;
            if (event_3.allDay) {
                eventUTCStartTime = eventStartTime.getTime();
                eventUTCEndTime = eventEndTime.getTime();
            }
            else {
                eventUTCStartTime = Date.UTC(eventStartTime.getFullYear(), eventStartTime.getMonth(), eventStartTime.getDate());
                eventUTCEndTime = Date.UTC(eventEndTime.getFullYear(), eventEndTime.getMonth(), eventEndTime.getDate() + 1);
            }
            if (eventUTCEndTime <= utcStartTime || eventUTCStartTime >= utcEndTime || eventStartTime >= eventEndTime) {
                continue;
            }
            if (event_3.allDay) {
                allDayEventInRange = true;
                var allDayStartIndex = void 0;
                if (eventUTCStartTime <= utcStartTime) {
                    allDayStartIndex = 0;
                }
                else {
                    allDayStartIndex = Math.round((eventUTCStartTime - utcStartTime) / oneDay);
                }
                var allDayEndIndex = void 0;
                if (eventUTCEndTime >= utcEndTime) {
                    allDayEndIndex = Math.round((utcEndTime - utcStartTime) / oneDay);
                }
                else {
                    allDayEndIndex = Math.round((eventUTCEndTime - utcStartTime) / oneDay);
                }
                var displayAllDayEvent = {
                    event: event_3,
                    startIndex: allDayStartIndex,
                    endIndex: allDayEndIndex
                };
                var eventSet = dates[allDayStartIndex].events;
                if (eventSet) {
                    eventSet.push(displayAllDayEvent);
                }
                else {
                    eventSet = [];
                    eventSet.push(displayAllDayEvent);
                    dates[allDayStartIndex].events = eventSet;
                }
                dates[allDayStartIndex].hasEvent = true;
            }
            else {
                normalEventInRange = true;
                var timeDifferenceStart = void 0;
                if (eventUTCStartTime < utcStartTime) {
                    timeDifferenceStart = 0;
                }
                else {
                    timeDifferenceStart = (eventUTCStartTime - utcStartTime) / oneHour * this.hourSegments + (eventStartTime.getHours() + eventStartTime.getMinutes() / 60) * this.hourSegments;
                }
                var timeDifferenceEnd = void 0;
                if (eventUTCEndTime > utcEndTime) {
                    timeDifferenceEnd = (utcEndTime - utcStartTime) / oneHour * this.hourSegments;
                }
                else {
                    timeDifferenceEnd = (eventUTCEndTime - oneDay - utcStartTime) / oneHour * this.hourSegments + (eventEndTime.getHours() + eventEndTime.getMinutes() / 60) * this.hourSegments;
                }
                var startIndex = Math.floor(timeDifferenceStart), endIndex = Math.ceil(timeDifferenceEnd - eps);
                var startRowIndex = startIndex % allRows, dayIndex = Math.floor(startIndex / allRows), endOfDay = dayIndex * allRows, startOffset = 0, endOffset = 0;
                if (this.hourParts !== 1) {
                    if (startRowIndex < rangeStartRowIndex) {
                        startOffset = 0;
                    }
                    else {
                        startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                    }
                }
                do {
                    endOfDay += allRows;
                    var endRowIndex = void 0;
                    if (endOfDay < endIndex) {
                        endRowIndex = allRows;
                    }
                    else {
                        if (endOfDay === endIndex) {
                            endRowIndex = allRows;
                        }
                        else {
                            endRowIndex = endIndex % allRows;
                        }
                        if (this.hourParts !== 1) {
                            if (endRowIndex > rangeEndRowIndex) {
                                endOffset = 0;
                            }
                            else {
                                endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                            }
                        }
                    }
                    if (startRowIndex < rangeStartRowIndex) {
                        startRowIndex = 0;
                    }
                    else {
                        startRowIndex -= rangeStartRowIndex;
                    }
                    if (endRowIndex > rangeEndRowIndex) {
                        endRowIndex = rangeEndRowIndex;
                    }
                    endRowIndex -= rangeStartRowIndex;
                    if (startRowIndex < endRowIndex) {
                        var displayEvent = {
                            event: event_3,
                            startIndex: startRowIndex,
                            endIndex: endRowIndex,
                            startOffset: startOffset,
                            endOffset: endOffset
                        };
                        var eventSet = rows[startRowIndex][dayIndex].events;
                        if (eventSet) {
                            eventSet.push(displayEvent);
                        }
                        else {
                            eventSet = [];
                            eventSet.push(displayEvent);
                            rows[startRowIndex][dayIndex].events = eventSet;
                        }
                        dates[dayIndex].hasEvent = true;
                    }
                    startRowIndex = 0;
                    startOffset = 0;
                    dayIndex += 1;
                } while (endOfDay < endIndex);
            }
        }
        if (normalEventInRange) {
            for (var day = 0; day < 7; day += 1) {
                var orderedEvents = [];
                for (var hour = 0; hour < this.hourRange; hour += 1) {
                    if (rows[hour][day].events) {
                        rows[hour][day].events.sort(WeekViewComponent_1.compareEventByStartOffset);
                        orderedEvents = orderedEvents.concat(rows[hour][day].events);
                    }
                }
                if (orderedEvents.length > 0) {
                    this.placeEvents(orderedEvents);
                }
            }
        }
        if (allDayEventInRange) {
            var orderedAllDayEvents = [];
            for (var day = 0; day < 7; day += 1) {
                if (dates[day].events) {
                    orderedAllDayEvents = orderedAllDayEvents.concat(dates[day].events);
                }
            }
            if (orderedAllDayEvents.length > 0) {
                this.placeAllDayEvents(orderedAllDayEvents);
            }
        }
        if (this.autoSelect) {
            var findSelected = false;
            var selectedDate = void 0;
            for (var r = 0; r < 7; r += 1) {
                if (dates[r].selected) {
                    selectedDate = dates[r];
                    findSelected = true;
                    break;
                }
            }
            if (findSelected) {
                var disabled = false;
                if (this.markDisabled) {
                    disabled = this.markDisabled(selectedDate.date);
                }
                this.onTimeSelected.emit({
                    selectedTime: selectedDate.date,
                    events: selectedDate.events.map(function (e) { return e.event; }),
                    disabled: disabled
                });
            }
        }
    };
    WeekViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
        this.calendarService.rangeChanged(this);
    };
    WeekViewComponent.prototype.getTitle = function () {
        var firstDayOfWeek = new Date(this.range.startTime.getTime());
        firstDayOfWeek.setHours(12, 0, 0, 0);
        return this.formatTitle(firstDayOfWeek);
    };
    WeekViewComponent.prototype.getHighlightClass = function (date) {
        var className = '';
        if (date.hasEvent) {
            if (className) {
                className += ' ';
            }
            className = 'weekview-with-event';
        }
        if (date.selected) {
            if (className) {
                className += ' ';
            }
            className += 'weekview-selected';
        }
        if (date.current) {
            if (className) {
                className += ' ';
            }
            className += 'weekview-current';
        }
        return className;
    };
    WeekViewComponent.prototype.select = function (selectedTime, events) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        this.onTimeSelected.emit({
            selectedTime: selectedTime,
            events: events.map(function (e) { return e.event; }),
            disabled: disabled
        });
    };
    WeekViewComponent.prototype.placeEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
        WeekViewComponent_1.calculateWidth(orderedEvents, this.hourRange, this.hourParts);
    };
    WeekViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
    };
    WeekViewComponent.prototype.overlap = function (event1, event2) {
        var earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset >= this.hourParts);
        }
    };
    WeekViewComponent.prototype.calculatePosition = function (events) {
        var len = events.length, isForbidden = new Array(len);
        var maxColumn = 0;
        for (var i = 0; i < len; i += 1) {
            var col = void 0;
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (var j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    };
    WeekViewComponent.prototype.updateCurrentView = function (currentViewStartDate, view) {
        var currentCalendarDate = this.calendarService.currentDate, today = new Date(), oneDay = 86400000, selectedDayDifference = Math.round((Date.UTC(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), currentCalendarDate.getDate()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay), currentDayDifference = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getTime()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay);
        for (var r = 0; r < 7; r += 1) {
            view.dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 7 && this.autoSelect) {
            view.dates[selectedDayDifference].selected = true;
        }
        if (currentDayDifference >= 0 && currentDayDifference < 7) {
            view.dates[currentDayDifference].current = true;
        }
    };
    WeekViewComponent.prototype.daySelected = function (viewDate) {
        var selectedDate = viewDate.date, dates = this.views[this.currentViewIndex].dates, currentViewStartDate = this.range.startTime, oneDay = 86400000, selectedDayDifference = Math.round((Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()) - Date.UTC(currentViewStartDate.getFullYear(), currentViewStartDate.getMonth(), currentViewStartDate.getDate())) / oneDay);
        this.calendarService.setCurrentDate(selectedDate);
        for (var r = 0; r < 7; r += 1) {
            dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 7) {
            dates[selectedDayDifference].selected = true;
        }
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedDate);
        }
        this.onTimeSelected.emit({ selectedTime: selectedDate, events: viewDate.events.map(function (e) { return e.event; }), disabled: disabled });
    };
    WeekViewComponent.prototype.setScrollPosition = function (scrollPosition) {
        this.initScrollPosition = scrollPosition;
    };
    var WeekViewComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('weekSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], WeekViewComponent.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.weekview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewHeaderTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewAllDayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewNormalEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewInactiveAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewInactiveNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "formatWeekTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "formatWeekViewDayHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "formatHourColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "startingDayWeek", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "allDayLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "hourParts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WeekViewComponent.prototype, "eventSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "autoSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], WeekViewComponent.prototype, "markDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "dateFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "scrollToHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WeekViewComponent.prototype, "preserveScrollPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WeekViewComponent.prototype, "lockSwipeToPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WeekViewComponent.prototype, "lockSwipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "startHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "endHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "sliderOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "hourSegments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "onRangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "onEventSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "onTimeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "onTitleChanged", void 0);
    WeekViewComponent = WeekViewComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'weekview',
            template: "\n        <ion-slides #weekSlider [options]=\"sliderOptions\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\"\n                    class=\"slides-container\">\n            <ion-slide class=\"slide-container\">\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let date of views[0].dates\"\n                            [ngClass]=\"getHighlightClass(date)\"\n                            (click)=\"daySelected(date)\">\n                            <ng-template [ngTemplateOutlet]=\"weekviewHeaderTemplate\"\n                                         [ngTemplateOutletContext]=\"{viewDate:date}\">\n                            </ng-template>\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"0===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[0].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day, eventTemplate:weekviewAllDayEventTemplate}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\"\n                                          [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[0].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable\n                                    (click)=\"select(tm.time, tm.events)\">\n                                    <ng-template [ngTemplateOutlet]=\"weekviewNormalEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"0!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[0].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewInactiveAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[0].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                    <ng-template [ngTemplateOutlet]=\"weekviewInactiveNormalEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts}\">\n                                    </ng-template>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let date of views[1].dates\"\n                            [ngClass]=\"getHighlightClass(date)\"\n                            (click)=\"daySelected(date)\">\n                            <ng-template [ngTemplateOutlet]=\"weekviewHeaderTemplate\"\n                                         [ngTemplateOutletContext]=\"{viewDate:date}\">\n                            </ng-template>\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"1===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[1].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day, eventTemplate:weekviewAllDayEventTemplate}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\"\n                                          [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[1].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable\n                                    (click)=\"select(tm.time, tm.events)\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewNormalEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"1!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[1].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewInactiveAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[1].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewInactiveNormalEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let date of views[2].dates\"\n                            [ngClass]=\"getHighlightClass(date)\"\n                            (click)=\"daySelected(date)\">\n                            <ng-template [ngTemplateOutlet]=\"weekviewHeaderTemplate\"\n                                         [ngTemplateOutletContext]=\"{viewDate:date}\">\n                            </ng-template>\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"2===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[2].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day, eventTemplate:weekviewAllDayEventTemplate}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\"\n                                          [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[2].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable\n                                    (click)=\"select(tm.time, tm.events)\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewNormalEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"2!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[2].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewInactiveAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[2].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewInactiveNormalEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    ",
            styles: ["\n        .table-fixed {\n            table-layout: fixed;\n        }\n\n        .table {\n            width: 100%;\n            max-width: 100%;\n            background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n            padding: 8px;\n            line-height: 20px;\n            vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n            vertical-align: bottom;\n            border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n            border-top: 0\n        }\n\n        .table > tbody + tbody {\n            border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n            border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n            border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n            background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n            width: 50px;\n            white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n            position: relative;\n            width: 100%;\n            height: 100%;\n        }\n\n        .calendar-event {\n            position: absolute;\n            padding: 2px;\n            cursor: pointer;\n            z-index: 10000;\n        }\n\n        .calendar-cell {\n            padding: 0 !important;\n            height: 37px;\n        }\n\n        .slides-container {\n            height: 100%;\n        }\n\n        .slide-container {\n            display: block;\n        }\n\n        .weekview-allday-label {\n            float: left;\n            height: 100%;\n            line-height: 50px;\n            text-align: center;\n            width: 50px;\n            border-left: 1px solid #ddd;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-label {\n            float: right;\n            border-right: 1px solid #ddd;\n        }\n\n        .weekview-allday-content-wrapper {\n            margin-left: 50px;\n            overflow: hidden;\n            height: 51px;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 50px;\n        }\n\n        .weekview-allday-content-table {\n            min-height: 50px;\n        }\n\n        .weekview-allday-content-table td {\n            border-left: 1px solid #ddd;\n            border-right: 1px solid #ddd;\n        }\n\n        .weekview-header th {\n            overflow: hidden;\n            white-space: nowrap;\n            font-size: 14px;\n        }\n\n        .weekview-allday-table {\n            height: 50px;\n            position: relative;\n            border-bottom: 1px solid #ddd;\n            font-size: 14px;\n        }\n\n        .weekview-normal-event-container {\n            margin-top: 87px;\n            overflow: hidden;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            position: absolute;\n            font-size: 14px;\n        }\n\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n            display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n            .weekview-allday-label, .calendar-hour-column {\n                width: 31px;\n                font-size: 12px;\n            }\n\n            .weekview-allday-label {\n                padding-top: 4px;\n            }\n\n            .table > tbody > tr > td.calendar-hour-column {\n                padding-left: 0;\n                padding-right: 0;\n                vertical-align: middle;\n                line-height: 12px;\n            }\n\n            .table > thead > tr > th.weekview-header {\n                padding-left: 0;\n                padding-right: 0;\n                font-size: 12px;\n            }\n\n            .weekview-allday-label {\n                line-height: 20px;\n            }\n\n            .weekview-allday-content-wrapper {\n                margin-left: 31px;\n            }\n\n            [dir=\"rtl\"] .weekview-allday-content-wrapper {\n                margin-left: 0;\n                margin-right: 31px;\n            }\n        }\n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], WeekViewComponent);
    return WeekViewComponent;
}());



/***/ }),

/***/ "./src/app/component/filter-calendar/filter-calendar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/filter-calendar/filter-calendar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-list>\n    <ion-item lines=\"full\" class=\"itemFilter\">\n      <ion-label class=\"labelFilter\" slot=\"start\">Filter</ion-label>\n      <ion-icon class=\"buttonClose\" slot=\"end\" fill=\"clear\" color=\"medium\" (click)=\"myDismiss()\" name=\"close\">\n      </ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-checkbox [(ngModel)]=\"isHolidayChecked\"></ion-checkbox>\n      <ion-label class=\"labelEntityName\">Holidays</ion-label>\n      <div class=\"legendColorHolidays\"></div>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-checkbox [(ngModel)]=\"isLeavesChecked\"></ion-checkbox>\n      <ion-label class=\"labelEntityName\">Leaves</ion-label>\n      <div class=\"legendColorLeaves\"></div>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-checkbox [(ngModel)]=\"isAdvisoryChecked\"></ion-checkbox>\n      <ion-label class=\"labelEntityName\">Attendance Advisory</ion-label>\n      <div class=\"legendColorAttendanceAdvisories\"></div>\n    </ion-item>\n\n    <ion-item lines=\"none\" *ngIf=\"isWorkFromHome\">\n      <ion-checkbox [(ngModel)]=\"isWfhChecked\"></ion-checkbox>\n      <ion-label class=\"labelEntityName\">Work From Home</ion-label>\n      <div class=\"legendColorWfh\"></div>\n    </ion-item>\n\n\n\n    <!-- <ion-item lines=\"none\">\n      <ion-checkbox  [(ngModel)]= \"isHolidayChecked\"></ion-checkbox>\n      <ion-label class=\"labelEntityName\">Attendance Advisories</ion-label>\n      <div class=\"legendColorAttendanceAdvisories\"></div>\n    </ion-item> -->\n    <ion-item lines=\"none\" *ngIf=\"isManager\">\n      <ion-checkbox [(ngModel)]=\"isSubLeaveChecked\"></ion-checkbox>\n      <ion-label class=\"labelEntityName\">Subordinate's Leave</ion-label>\n      <div class=\"legendColorSubordinateLeave\"></div>\n    </ion-item>\n\n    <ion-item lines=\"none\" *ngIf=\"isManager\">\n      <ion-checkbox [(ngModel)]=\"isSubAdvisoryChecked\"></ion-checkbox>\n      <ion-label class=\"labelEntityName\">Subordinate's Advisory</ion-label>\n      <div class=\"legendColorSubordinateAdvisory\"></div>\n    </ion-item>\n\n    <ion-item lines=\"none\" *ngIf=\"isManager\">\n      <ion-checkbox [(ngModel)]=\"isSubWfhChecked\"></ion-checkbox>\n      <ion-label class=\"labelEntityName\">Subordinate's Work From Home</ion-label>\n      <div class=\"legendColorWfh\"></div>\n    </ion-item>\n\n\n    <ion-item lines=\"none\" *ngIf=\"isManager\">\n      <ion-checkbox [(ngModel)]=\"isForApprovalChecked\"></ion-checkbox>\n      <ion-label class=\"labelEntityName\">For Approvals</ion-label>\n      <div class=\"legendColorLeavesForApproval\"></div>\n    </ion-item>\n\n\n    <ion-item lines=\"none\" *ngIf=\"isManager\">\n      <ion-checkbox [(ngModel)]=\"showAll\"></ion-checkbox>\n      <ion-label class=\"labelEntityName\"> Show Direct Subordinates</ion-label>\n    </ion-item>\n\n\n    \n\n    <!-- <ion-item lines=\"none\">\n      <ion-checkbox  [(ngModel)]= \"isHolidayChecked\"></ion-checkbox>\n      <ion-label class=\"labelEntityName\">Advisory For Approval</ion-label>\n      <div class=\"legendColorAdvisoryForApproval\"></div>\n    </ion-item> -->\n  </ion-list>\n</ion-content>\n<ion-footer no-shadow>\n  <ion-toolbar position=\"bottom\">\n    <ion-button class=\"buttonFilter\" (click)=\"filterList()\">Filter</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/component/filter-calendar/filter-calendar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/filter-calendar/filter-calendar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list {\n  margin-top: 30px;\n}\n\nion-item {\n  margin: 0 0 0 15px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\nion-footer {\n  text-align: center;\n}\n\nion-checkbox {\n  width: 15px;\n  height: 15px;\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n}\n\n.itemFilter {\n  margin: 10px;\n}\n\n.labelFilter {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.buttonClose {\n  font-size: 30px;\n  color: #7A7A7A;\n}\n\n.labelEntityName {\n  font-size: 12px;\n  padding-left: 5px;\n}\n\n.buttonFilter {\n  width: 95%;\n  height: 35px;\n}\n\n.legendColorHolidays {\n  height: 50px;\n  width: 50px;\n  background: radial-gradient(closest-side at 50% 50%, #0288D1 20%, transparent 25%);\n}\n\n.legendColorLeaves {\n  height: 50px;\n  width: 50px;\n  background: radial-gradient(closest-side at 50% 50%, #558B2F 20%, transparent 25%);\n}\n\n.legendColorAttendanceAdvisories {\n  height: 50px;\n  width: 50px;\n  background: radial-gradient(closest-side at 50% 50%, #FFB300 20%, transparent 25%);\n}\n\n.legendColorLeavesForApproval {\n  height: 50px;\n  width: 50px;\n  background: radial-gradient(closest-side at 50% 50%, #F44336 20%, transparent 25%);\n}\n\n.legendColorAdvisoryForApproval {\n  height: 50px;\n  width: 50px;\n  background: radial-gradient(closest-side at 50% 50%, #F44336 20%, transparent 25%);\n}\n\n.legendColorSubordinateLeave {\n  height: 50px;\n  width: 50px;\n  background: radial-gradient(closest-side at 50% 50%, #004D40 20%, transparent 25%);\n}\n\n.legendColorSubordinateAdvisory {\n  height: 50px;\n  width: 50px;\n  background: radial-gradient(closest-side at 50% 50%, #9C27B0 20%, transparent 25%);\n}\n\n.legendColorWfh {\n  height: 50px;\n  width: 50px;\n  background: radial-gradient(closest-side at 50% 50%, #5552B7 20%, transparent 25%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvY29tcG9uZW50L2ZpbHRlci1jYWxlbmRhci9maWx0ZXItY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9maWx0ZXItY2FsZW5kYXIvZmlsdGVyLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNBSjs7QURJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9maWx0ZXItY2FsZW5kYXIvZmlsdGVyLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgICBtYXJnaW46IDAgMCAwIDE1cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRDNBODI4O1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1ib3JkZXItY29sb3I6IGdyYXk7XG59XG5cbi8vRmlsdGVyIEFyZWFcbi5pdGVtRmlsdGVyIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5sYWJlbEZpbHRlciB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uQ2xvc2Uge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzdBN0E3QVxufVxuXG4vL0ZpbHRlciBJdGVtc1xuLmxhYmVsRW50aXR5TmFtZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctbGVmdDo1cHg7XG59XG5cbi5idXR0b25GaWx0ZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubGVnZW5kQ29sb3JIb2xpZGF5cyB7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgd2lkdGg6NTBweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2xvc2VzdC1zaWRlIGF0IDUwJSA1MCUsICMwMjg4RDEgMjAlLCB0cmFuc3BhcmVudCAyNSUpO1xufVxuXG4ubGVnZW5kQ29sb3JMZWF2ZXMge1xuICAgIGhlaWdodDo1MHB4O1xuICAgIHdpZHRoOjUwcHg7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNsb3Nlc3Qtc2lkZSBhdCA1MCUgNTAlLCAjNTU4QjJGIDIwJSwgdHJhbnNwYXJlbnQgMjUlKTtcbn1cblxuLmxlZ2VuZENvbG9yQXR0ZW5kYW5jZUFkdmlzb3JpZXMge1xuICAgIGhlaWdodDo1MHB4O1xuICAgIHdpZHRoOjUwcHg7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNsb3Nlc3Qtc2lkZSBhdCA1MCUgNTAlLCAjRkZCMzAwIDIwJSwgdHJhbnNwYXJlbnQgMjUlKTtcbn1cblxuLmxlZ2VuZENvbG9yTGVhdmVzRm9yQXBwcm92YWwge1xuICAgIGhlaWdodDo1MHB4O1xuICAgIHdpZHRoOjUwcHg7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNsb3Nlc3Qtc2lkZSBhdCA1MCUgNTAlLCAjRjQ0MzM2IDIwJSwgdHJhbnNwYXJlbnQgMjUlKTtcbn1cblxuLmxlZ2VuZENvbG9yQWR2aXNvcnlGb3JBcHByb3ZhbCB7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgd2lkdGg6NTBweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2xvc2VzdC1zaWRlIGF0IDUwJSA1MCUsICNGNDQzMzYgMjAlLCB0cmFuc3BhcmVudCAyNSUpO1xufVxuXG4ubGVnZW5kQ29sb3JTdWJvcmRpbmF0ZUxlYXZlIHtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICB3aWR0aDo1MHB4O1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjbG9zZXN0LXNpZGUgYXQgNTAlIDUwJSwgIzAwNEQ0MCAyMCUsIHRyYW5zcGFyZW50IDI1JSk7XG59XG5cbi5sZWdlbmRDb2xvclN1Ym9yZGluYXRlQWR2aXNvcnkge1xuICAgIGhlaWdodDo1MHB4O1xuICAgIHdpZHRoOjUwcHg7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNsb3Nlc3Qtc2lkZSBhdCA1MCUgNTAlLCAjOUMyN0IwIDIwJSwgdHJhbnNwYXJlbnQgMjUlKTtcbn1cblxuLmxlZ2VuZENvbG9yV2ZoIHtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICB3aWR0aDo1MHB4O1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjbG9zZXN0LXNpZGUgYXQgNTAlIDUwJSwgIzU1NTJCNyAyMCUsIHRyYW5zcGFyZW50IDI1JSk7XG59XG4iLCJpb24tbGlzdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luOiAwIDAgMCAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0QzQTgyODtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiBncmF5O1xufVxuXG4uaXRlbUZpbHRlciB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmxhYmVsRmlsdGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbkNsb3NlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzdBN0E3QTtcbn1cblxuLmxhYmVsRW50aXR5TmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5idXR0b25GaWx0ZXIge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5sZWdlbmRDb2xvckhvbGlkYXlzIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNsb3Nlc3Qtc2lkZSBhdCA1MCUgNTAlLCAjMDI4OEQxIDIwJSwgdHJhbnNwYXJlbnQgMjUlKTtcbn1cblxuLmxlZ2VuZENvbG9yTGVhdmVzIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNsb3Nlc3Qtc2lkZSBhdCA1MCUgNTAlLCAjNTU4QjJGIDIwJSwgdHJhbnNwYXJlbnQgMjUlKTtcbn1cblxuLmxlZ2VuZENvbG9yQXR0ZW5kYW5jZUFkdmlzb3JpZXMge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2xvc2VzdC1zaWRlIGF0IDUwJSA1MCUsICNGRkIzMDAgMjAlLCB0cmFuc3BhcmVudCAyNSUpO1xufVxuXG4ubGVnZW5kQ29sb3JMZWF2ZXNGb3JBcHByb3ZhbCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjbG9zZXN0LXNpZGUgYXQgNTAlIDUwJSwgI0Y0NDMzNiAyMCUsIHRyYW5zcGFyZW50IDI1JSk7XG59XG5cbi5sZWdlbmRDb2xvckFkdmlzb3J5Rm9yQXBwcm92YWwge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2xvc2VzdC1zaWRlIGF0IDUwJSA1MCUsICNGNDQzMzYgMjAlLCB0cmFuc3BhcmVudCAyNSUpO1xufVxuXG4ubGVnZW5kQ29sb3JTdWJvcmRpbmF0ZUxlYXZlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNsb3Nlc3Qtc2lkZSBhdCA1MCUgNTAlLCAjMDA0RDQwIDIwJSwgdHJhbnNwYXJlbnQgMjUlKTtcbn1cblxuLmxlZ2VuZENvbG9yU3Vib3JkaW5hdGVBZHZpc29yeSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjbG9zZXN0LXNpZGUgYXQgNTAlIDUwJSwgIzlDMjdCMCAyMCUsIHRyYW5zcGFyZW50IDI1JSk7XG59XG5cbi5sZWdlbmRDb2xvcldmaCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjbG9zZXN0LXNpZGUgYXQgNTAlIDUwJSwgIzU1NTJCNyAyMCUsIHRyYW5zcGFyZW50IDI1JSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/component/filter-calendar/filter-calendar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/filter-calendar/filter-calendar.component.ts ***!
  \************************************************************************/
/*! exports provided: FilterCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCalendarComponent", function() { return FilterCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");





var FilterCalendarComponent = /** @class */ (function () {
    function FilterCalendarComponent(modalController, storage, navParams) {
        this.modalController = modalController;
        this.storage = storage;
        this.navParams = navParams;
        this.showAll = true;
    }
    FilterCalendarComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.param = this.navParams.get('data');
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_HOLIDAY"]).then(function (val) {
            _this.isHolidayChecked = (val != null ? val : true);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_LEAVES"]).then(function (val) {
            _this.isLeavesChecked = (val != null ? val : true);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_ADVISORY"]).then(function (val) {
            _this.isAdvisoryChecked = (val != null ? val : true);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_SUB_LEAVES"]).then(function (val) {
            _this.isSubLeaveChecked = (val != null ? val : false);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_SUB_ADVISORY"]).then(function (val) {
            _this.isSubAdvisoryChecked = (val != null ? val : false);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_SUB_WFH"]).then(function (val) {
            _this.isSubWfhChecked = (val != null ? val : false);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_FOR_APPROVAL"]).then(function (val) {
            _this.isForApprovalChecked = (val != null ? val : false);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_FORAPPROVAL_LEAVES"]).then(function (val) {
            _this.isLeaveForApprovalChecked = (val != null ? val : false);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_SHOW_ALL"]).then(function (val) {
            _this.showAll = (val != null ? val : false);
        });
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPDETAILS"]).then(function (val) {
            _this.isManager = val['0']['ISMANAGER'] == "1";
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_WFH"]).then(function (val) {
            _this.isWfhChecked = (val != null ? val : true);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_MENU"]).then(function (val) {
            console.log(val);
            _this.isWorkFromHome = val['0']['IsWorkFromHome'];
        });
    };
    FilterCalendarComponent.prototype.myDismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            'isDismissed': 1,
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FilterCalendarComponent.prototype.filterList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_HOLIDAY"], this.isLeaveForApprovalChecked);
                        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_LEAVES"], this.isLeavesChecked);
                        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_ADVISORY"], this.isAdvisoryChecked);
                        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_FORAPPROVAL_LEAVES"], this.isLeaveForApprovalChecked);
                        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_SUB_LEAVES"], this.isSubLeaveChecked);
                        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_SUB_ADVISORY"], this.isSubAdvisoryChecked);
                        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_FOR_APPROVAL"], this.isForApprovalChecked);
                        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_SUB_WFH"], this.isSubWfhChecked);
                        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_WFH"], this.isWfhChecked);
                        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CALFILTER_SHOW_ALL"], this.showAll);
                        result = {
                            'isDismissed': 0,
                            'leaveForApproval': this.isLeaveForApprovalChecked,
                            'leave': this.isLeavesChecked,
                            'holiday': this.isHolidayChecked,
                            'advisory': this.isAdvisoryChecked,
                            'subleave': this.isSubLeaveChecked,
                            'subadvisory': this.isSubAdvisoryChecked,
                            'forapproval': this.isForApprovalChecked,
                            'subwfh': this.isSubWfhChecked,
                            'wfh': this.isWfhChecked,
                            'showall': this.showAll
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FilterCalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter-calendar',
            template: __webpack_require__(/*! ./filter-calendar.component.html */ "./src/app/component/filter-calendar/filter-calendar.component.html"),
            styles: [__webpack_require__(/*! ./filter-calendar.component.scss */ "./src/app/component/filter-calendar/filter-calendar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], FilterCalendarComponent);
    return FilterCalendarComponent;
}());



/***/ }),

/***/ "./src/app/component/filter-calendar/filter-calendar.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/filter-calendar/filter-calendar.module.ts ***!
  \*********************************************************************/
/*! exports provided: FilterCalendarComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCalendarComponentModule", function() { return FilterCalendarComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _filter_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-calendar.component */ "./src/app/component/filter-calendar/filter-calendar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var FilterCalendarComponentModule = /** @class */ (function () {
    function FilterCalendarComponentModule() {
    }
    FilterCalendarComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _filter_calendar_component__WEBPACK_IMPORTED_MODULE_4__["FilterCalendarComponent"]
            ],
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            entryComponents: [
                _filter_calendar_component__WEBPACK_IMPORTED_MODULE_4__["FilterCalendarComponent"]
            ]
        })
    ], FilterCalendarComponentModule);
    return FilterCalendarComponentModule;
}());



/***/ }),

/***/ "./src/app/pages/calendar/calendar.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.module.ts ***!
  \***************************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar.page */ "./src/app/pages/calendar/calendar.page.ts");
/* harmony import */ var _component_filter_calendar_filter_calendar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/filter-calendar/filter-calendar.module */ "./src/app/component/filter-calendar/filter-calendar.module.ts");









var routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_7__["CalendarPage"]
    }
];
var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__["NgCalendarModule"],
                _component_filter_calendar_filter_calendar_module__WEBPACK_IMPORTED_MODULE_8__["FilterCalendarComponentModule"]
            ],
            declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_7__["CalendarPage"]]
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/calendar/calendar.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=\"btnMenu\" icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"dark\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-grid>\n            <ion-row>\n                <ion-col class=\"lblMonth\" size=\"auto\">\n                    {{lblMonth}}\n                </ion-col>\n                <ion-col class=\"lblYear\" size=\"auto\" align-self-center>\n                    {{lblYear}}\n                </ion-col>\n                <ion-col class=\"classToday\" align-self-center>\n                    <ion-button class=\"btnToday\" fill=\"outline\" size=\"small\" (click)=\"today()\" *ngIf=\"btnToday == true\">Today\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"btnFilter\" slot=\"end\" color=\"dark\" (click)=\"openModal()\">\n                <ion-icon slot=\"start\" name=\"funnel\" mode=\"md\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <calendar [calendarMode]=\"calendar.mode\" [eventSource]=\"eventSourceList\" [markDisabled]=\"markDisabled\" [currentDate]=\"calendar.currentDate\" [showEventDetail]=\"false\" (onCurrentDateChanged)=\"onCurrentDateChanged($event)\" (onRangeChanged)=\"reloadSource(startTime, endTime)\"\n        (onTitleChanged)=\"onViewTitleChanged($event)\" (onTimeSelected)=\"onTimeSelected($event)\" step=\"30\">\n    </calendar>\n    <ion-progress-bar type=\"indeterminate\" *ngIf=\"labelSync != ''\"></ion-progress-bar>\n    <ion-item class=\"itmSync\" lines=\"none\" *ngIf=\"labelSync != ''\">\n        <!-- <ion-spinner name=\"lines-small\"></ion-spinner> -->\n        <ion-label class=\"lblSync\">{{labelSync}}</ion-label>\n    </ion-item>\n    <div *ngIf=\"noError; else error\">\n        <ion-card class=\"cardClass\" mode=\"ios\">\n            <ion-list lines=\"full\">\n                <div *ngFor=\"let item of calendarEventList;\">\n                    <ion-item button detail=\"false\" *ngIf=\"item.Type == 0\" class=\"itmTypeHoliday\">\n                        <img class=\"leaveimg\" src={{item.Icon}} alt=\"\">\n                        <ion-label text-wrap>\n                            <div class=\"leaveDetails\">\n                                <span class=\"leaveNameHoliday\">{{item.HolidayName}}</span>\n                            </div>\n                        </ion-label>\n                    </ion-item>\n\n                    <ion-item button detail *ngIf=\"item.Type == 1\" class=\"itmTypeLeave\" (click)=\"setLeaveDetails(item.Item,'userleave')\">\n                        <img class=\"leaveimg\" src={{item.Icon}} alt=\"\">\n                        <ion-label text-wrap>\n                            <div class=\"leaveDetails\">\n                                <span class=\"leaveName\">{{item.LEAVESTATUSDESC}}</span>\n                                <span class=\"leaveStatus\" [ngClass]=\"leaveStatus\">\n                  {{item.LEAVEDAY}} DAY(S)</span>\n                            </div>\n                        </ion-label>\n                    </ion-item>\n\n                    <ion-item button detail *ngIf=\"item.Type == 6\" class=\"itmTypeAdvisory\" [routerLink]=\" ['/', 'advisorydetails', item.ID, 'useradvisory', item.STATUS,'', 'calendar']\">\n                        <img class=\"leaveimg\" src={{item.Icon}} alt=\"\">\n                        <ion-label text-wrap>\n                            <div class=\"leaveDetails\">\n                                <span class=\"leaveName\">{{item.STATUS}}</span>\n                                <span class=\"leaveStatus\">\n                  {{item.REQUESTTIME}}</span>\n                            </div>\n                        </ion-label>\n                    </ion-item>\n\n                    <ion-item button detail *ngIf=\"item.Type == 2\" class=\"itmTypeLeaveForApproval\" (click)=\"setLeaveDetails(item.Item,'forapproval')\">\n                        <img class=\"leaveimg\" src={{item.Icon}} alt=\"\">\n                        <ion-label text-wrap>\n                            <div class=\"leaveDetails\">\n                                <span class=\"leaveName\">{{item.EMPL_NAME}}</span>\n                                <span class=\"leaveStatus\">{{item.STATUS}}</span>\n                            </div>\n                        </ion-label>\n                    </ion-item>\n\n                    <ion-item button detail *ngIf=\"item.Type == 3\" class=\"itmTypeLeaveSub\" (click)=\"setLeaveDetails(item.Item,'subleave')\">\n                        <img class=\"leaveimg\" src={{item.Icon}} alt=\"\">\n                        <ion-label text-wrap>\n                            <div class=\"leaveDetails\">\n                                <span class=\"leaveName\">{{item.EMPL_NAME}}</span>\n                                <span class=\"leaveStatus\">{{item.STATUS}}</span>\n                            </div>\n                        </ion-label>\n                    </ion-item>\n\n                    <ion-item button detail *ngIf=\"item.Type == 4\" class=\"itmTypeAdvisorySub\" [routerLink]=\" ['/', 'advisorydetails', item.ID, 'subadvisory', item.STATUS, item.EMPNO, 'calendar']\">\n                        <img class=\"leaveimg\" src={{item.Icon}} alt=\"\">\n                        <ion-label text-wrap>\n                            <div class=\"leaveDetails\">\n                                <span class=\"leaveName\">{{item.EMPL_NAME}}</span>\n                                <span class=\"leaveStatus\">{{item.STATUS}}</span>\n                            </div>\n                        </ion-label>\n                    </ion-item>\n\n                    <ion-item button detail *ngIf=\"item.Type == 5\" class=\"itmTypeLeaveForApproval\" [routerLink]=\" ['/', 'advisorydetails', item.ID, 'forapproval', item.STATUS, '', 'calendar']\">\n                        <img class=\"leaveimg\" src={{item.Icon}} alt=\"\">\n                        <ion-label text-wrap>\n                            <div class=\"leaveDetails\">\n                                <span class=\"leaveName\">{{item.EMPL_NAME}}</span>\n                                <span class=\"leaveStatus\">{{item.STATUS}}</span>\n                            </div>\n                        </ion-label>\n                    </ion-item>\n\n                    <ion-item button detail *ngIf=\"item.Type == 7\" class=\"itmTypeWfh\" (click) = \"openWfhDetails(item)\">\n                        <img class=\"leaveimg\" src={{item.Icon}} alt=\"\">\n                        <ion-label text-wrap>\n                            <div class=\"leaveDetails\">\n                                <span class=\"leaveName\">{{item.STATUS}}</span>\n                                <span class=\"leaveStatus\">\n                  {{item.REQUESTTIME}}</span>\n                            </div>\n                        </ion-label>\n                    </ion-item>\n\n                    <ion-item button detail *ngIf=\"item.Type == 8\" class=\"itmTypeWfh\" (click) = \"openWfhSubDetails(item)\">\n                        <img class=\"leaveimg\" src={{item.Icon}} alt=\"\">\n                        <ion-label text-wrap>\n                            <div class=\"leaveDetails\">\n                                <span class=\"leaveName\">{{item.STATUS}}</span>\n                                <span class=\"leaveStatus\">\n                  {{item.REQUESTTIME}}</span>\n                            </div>\n                        </ion-label>\n                    </ion-item>\n\n\n\n                </div>\n            </ion-list>\n        </ion-card>\n    </div>\n</ion-content>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/calendar/calendar.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  position: unset;\n}\n\nion-toolbar {\n  --border-width: 0px !important;\n}\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important;\n}\n\n.btnMenu {\n  padding: 0 0 0 5px;\n}\n\n.btnToday {\n  transition: visibility 0s, opacity 0.5s linear;\n  font-size: 13px;\n}\n\n.btnFilter {\n  margin-top: -5px;\n}\n\n.lblMonth {\n  font-size: 30px;\n  height: 46px;\n}\n\n.lblYear {\n  font-size: 12px;\n  color: #666666;\n  padding-top: 14px;\n}\n\n.classToday {\n  margin: 0px;\n  text-align: right;\n}\n\n.itmSync {\n  text-align: center;\n}\n\n.lblSync {\n  font-size: 12px;\n  color: #666666;\n}\n\n.itmTypeHoliday {\n  border-left: 15px solid #0288D1;\n}\n\n.itmTypeLeave {\n  border-left: 15px solid #558B2F;\n}\n\n.itmTypeLeaveForApproval {\n  border-left: 15px solid #F44336;\n}\n\n.itmTypeAdvisory {\n  border-left: 15px solid #FFB300;\n}\n\n.itmTypeLeaveSub {\n  border-left: 15px solid #004D40;\n}\n\n.itmTypeAdvisorySub {\n  border-left: 15px solid #9C27B0;\n}\n\n.itmTypeWfh {\n  border-left: 15px solid #5552B7;\n}\n\n.leaveimg {\n  width: 40px;\n  height: 40px;\n  margin-right: 15px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.leaveDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  height: 50px;\n}\n\n.classForApprovalLabel {\n  font-size: 11px !important;\n}\n\n.leaveNameHoliday {\n  display: block;\n  margin-top: 15px;\n  font-size: 15px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.leaveName {\n  display: block;\n  margin-top: 5px;\n  font-size: 15px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.leaveStatus {\n  font-size: 11px;\n  margin-bottom: 5px;\n  color: #808080;\n  vertical-align: top;\n}\n\n@media screen and (max-height: 649px) {\n  .cardClass {\n    overflow-y: auto;\n    max-height: 20%;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n}\n\n@media screen and (min-height: 650px) {\n  .cardClass {\n    overflow-y: auto;\n    max-height: 30%;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n}\n\n@media screen and (min-height: 750px) {\n  .cardClass {\n    overflow-y: auto;\n    max-height: 40%;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWFjYWJhbC9Xb3Jrc3BhY2UvZ2l0L2dlYXItaW9zL3NyYy9hcHAvcGFnZXMvY2FsZW5kYXIvY2FsZW5kYXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYWxlbmRhci9jYWxlbmRhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksd0NBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSw4Q0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNBSjs7QURJQTtFQUNJLCtCQUFBO0FDREo7O0FESUE7RUFDSSwrQkFBQTtBQ0RKOztBRElBO0VBQ0ksK0JBQUE7QUNESjs7QURJQTtFQUNJLCtCQUFBO0FDREo7O0FESUE7RUFDSSwrQkFBQTtBQ0RKOztBRElBO0VBQ0ksK0JBQUE7QUNESjs7QURJQTtFQUNJLCtCQUFBO0FDREo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtBO0VBQ0ksMEJBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLDRFQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsNEVBQUE7RUNITjtBQUNGOztBRE1BO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSw0RUFBQTtFQ0pOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWxlbmRhci9jYWxlbmRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBwb3NpdGlvbjogdW5zZXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG5NZW51IHtcbiAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XG59XG5cbi5idG5Ub2RheSB7XG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5idG5GaWx0ZXIge1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi8vQ2FsZW5kYXIgQXJlYVxuLmxibE1vbnRoIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgaGVpZ2h0OiA0NnB4O1xufVxuXG4ubGJsWWVhciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuXG4uY2xhc3NUb2RheSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pdG1TeW5jIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYmxTeW5jIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2NjY2NjY7XG59XG5cbi8vRXZlbnQgSXRlbXNcbi5pdG1UeXBlSG9saWRheSB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgIzAyODhEMTtcbn1cblxuLml0bVR5cGVMZWF2ZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgIzU1OEIyRjtcbn1cblxuLml0bVR5cGVMZWF2ZUZvckFwcHJvdmFsIHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjRjQ0MzM2O1xufVxuXG4uaXRtVHlwZUFkdmlzb3J5IHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjRkZCMzAwO1xufVxuXG4uaXRtVHlwZUxlYXZlU3ViIHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjMDA0RDQwO1xufVxuXG4uaXRtVHlwZUFkdmlzb3J5U3ViIHtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjOUMyN0IwO1xufVxuXG4uaXRtVHlwZVdmaCB7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgIzU1NTJCNztcbn1cblxuXG4ubGVhdmVpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGVhdmVEZXRhaWxzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uY2xhc3NGb3JBcHByb3ZhbExhYmVsIHtcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbn1cblxuLmxlYXZlTmFtZUhvbGlkYXkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmxlYXZlTmFtZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sZWF2ZVN0YXR1cyB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjQ5cHgpIHtcbiAgICAuY2FyZENsYXNzIHtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogMjAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA2NTBweCkge1xuICAgIC5jYXJkQ2xhc3Mge1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDc1MHB4KSB7XG4gICAgLmNhcmRDbGFzcyB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgfVxufSIsImlvbi1oZWFkZXIge1xuICBwb3NpdGlvbjogdW5zZXQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuLmJ0bk1lbnUge1xuICBwYWRkaW5nOiAwIDAgMCA1cHg7XG59XG5cbi5idG5Ub2RheSB7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmJ0bkZpbHRlciB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5sYmxNb250aCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgaGVpZ2h0OiA0NnB4O1xufVxuXG4ubGJsWWVhciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuXG4uY2xhc3NUb2RheSB7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLml0bVN5bmMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYmxTeW5jIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2NjY2Njtcbn1cblxuLml0bVR5cGVIb2xpZGF5IHtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgIzAyODhEMTtcbn1cblxuLml0bVR5cGVMZWF2ZSB7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICM1NThCMkY7XG59XG5cbi5pdG1UeXBlTGVhdmVGb3JBcHByb3ZhbCB7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNGNDQzMzY7XG59XG5cbi5pdG1UeXBlQWR2aXNvcnkge1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjRkZCMzAwO1xufVxuXG4uaXRtVHlwZUxlYXZlU3ViIHtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgIzAwNEQ0MDtcbn1cblxuLml0bVR5cGVBZHZpc29yeVN1YiB7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICM5QzI3QjA7XG59XG5cbi5pdG1UeXBlV2ZoIHtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgIzU1NTJCNztcbn1cblxuLmxlYXZlaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGVhdmVEZXRhaWxzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNsYXNzRm9yQXBwcm92YWxMYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xufVxuXG4ubGVhdmVOYW1lSG9saWRheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGVhdmVOYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmxlYXZlU3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjODA4MDgwO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjQ5cHgpIHtcbiAgLmNhcmRDbGFzcyB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAyMCU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNjUwcHgpIHtcbiAgLmNhcmRDbGFzcyB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAzMCU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNzUwcHgpIHtcbiAgLmNhcmRDbGFzcyB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA0MCU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/calendar/calendar.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/calendar/calendar.page.ts ***!
  \*************************************************/
/*! exports provided: CalendarEvent, EventSource, CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEvent", function() { return CalendarEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSource", function() { return EventSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPage", function() { return CalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_filter_calendar_filter_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/filter-calendar/filter-calendar.component */ "./src/app/component/filter-calendar/filter-calendar.component.ts");
/* harmony import */ var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic2-calendar/calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");












var CalendarEvent = /** @class */ (function () {
    function CalendarEvent() {
    }
    return CalendarEvent;
}());

var EventSource = /** @class */ (function () {
    function EventSource() {
    }
    return EventSource;
}());

var CalendarPage = /** @class */ (function () {
    function CalendarPage(httpApi, storage, router, datepipe, loginService, alertController, loadingCtrl, modalController, menuCtrl) {
        var _this = this;
        this.httpApi = httpApi;
        this.storage = storage;
        this.router = router;
        this.datepipe = datepipe;
        this.loginService = loginService;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.modalController = modalController;
        this.menuCtrl = menuCtrl;
        this.calendarEventList = [];
        this.eventSourceList = [];
        this.eventSource = [
        // { title: "Test", startTime: this.dtstart, endTime: this.dtend, type: "Holiday" },
        // { title: "Test", startTime: this.dtstart2, endTime: this.dtend2, type: "Leave" },
        // { title: "Test", startTime: this.dtstart3, endTime: this.dtend3, type: "AttendanceAdvisory" },
        // { title: "Test2", startTime: this.dtstart4, endTime: this.dtend4, type: "Approval" }
        ];
        this.btnToday = false;
        this.labelSync = "Loading...";
        this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["MESSAGE_CON_ERROR"];
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.onTimeSelected = function (ev) {
            _this.calendarEventList = [];
            _this.currentDate = ("0" + (_this.calendar.currentDate.getMonth() + 1)).slice(-2).toString() + "/" +
                ("0" + _this.calendar.currentDate.getDate()).slice(-2).toString() + "/" +
                _this.calendar.currentDate.getFullYear().toString();
            _this.selectedDateHoliday = (ev.selectedTime.getMonth() + 1).toString() + "/" +
                ev.selectedTime.getDate().toString() + "/" +
                ev.selectedTime.getFullYear().toString();
            _this.selectedDate = ("0" + (ev.selectedTime.getMonth() + 1)).slice(-2).toString() + "/" +
                ("0" + ev.selectedTime.getDate()).slice(-2).toString() + "/" +
                ev.selectedTime.getFullYear().toString();
            if (_this.currentDate != _this.selectedDate) {
                _this.btnToday = true;
            }
            else {
                _this.btnToday = false;
            }
            if (_this.isHolidayChecked) {
                if (_this.calendarDates.indexOf(_this.selectedDateHoliday) > -1) {
                    var holidayEvent = _this.holidays.filter(function (e) { return e.CALDATE == _this.selectedDate; });
                    holidayEvent.forEach(function (value) {
                        var newEvent = new CalendarEvent;
                        newEvent["HolidayName"] = value.CALDESCRIPTION;
                        newEvent["Icon"] = _this.getLeaveTypeSrc("H");
                        newEvent["Type"] = 0;
                        _this.calendarEventList.push(newEvent);
                    });
                }
            }
            if (_this.isLeavesChecked) {
                var myLeavesEvent = _this.myLeaves.filter(function (item) {
                    return (new Date(_this.selectedDate) >= new Date(item.LEAVEFROM)
                        && new Date(_this.selectedDate) <= new Date(item.LEAVETO)
                        && item.LEAVESTATUSDESC != "CANCELLED");
                });
                myLeavesEvent.forEach(function (value) {
                    var newEvent = new CalendarEvent;
                    newEvent["ID"] = value.ID;
                    newEvent["LEAVEDAY"] = value.LEAVEDAY;
                    newEvent["LEAVESTATUSDESC"] = value.LEAVESTATUSDESC;
                    newEvent["Icon"] = _this.getLeaveTypeSrc(value.LEAVETYPE);
                    newEvent["Type"] = 1;
                    newEvent["Item"] = value;
                    _this.calendarEventList.push(newEvent);
                });
            }
            if (_this.isSubAdvisoryChecked || _this.isForApprovalChecked) {
                var SubAdvisoryForApprovalEvent = _this.subAdvisoryList.filter(function (item) {
                    return item.REQUESTDATE == _this.selectedDate;
                });
                SubAdvisoryForApprovalEvent.forEach(function (value) {
                    if (value.STATUSCODE == src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_FOR_APPROVAL"]) {
                        if (_this.isForApprovalChecked) {
                            var newEvent = new CalendarEvent;
                            newEvent["ID"] = value.ID;
                            newEvent["STATUS"] = value.STATUS;
                            newEvent["EMPNO"] = value.EMPNO;
                            newEvent["EMPL_NAME"] = value.EMPL_NAME;
                            newEvent["Icon"] = _this.getAdvisoryImage(value.REQUESTTYPECODE);
                            newEvent["Type"] = 5;
                            newEvent["Item"] = value;
                            _this.calendarEventList.push(newEvent);
                        }
                    }
                    else {
                        if (_this.isSubAdvisoryChecked) {
                            var newEvent = new CalendarEvent;
                            newEvent["ID"] = value.ID;
                            newEvent["STATUS"] = value.STATUS;
                            newEvent["EMPL_NAME"] = value.EMPL_NAME;
                            newEvent["EMPNO"] = value.EMPNO;
                            newEvent["Icon"] = _this.getAdvisoryImage(value.REQUESTTYPECODE);
                            newEvent["Type"] = 4;
                            newEvent["Item"] = value;
                            _this.calendarEventList.push(newEvent);
                        }
                    }
                });
            }
            if (_this.isAdvisoryChecked) {
                var AdvisoryEvent = _this.advisoryList.filter(function (item) {
                    return _this.datepipe.transform(item.REQUESTDATE, 'M/d/yyyy') == _this.datepipe.transform(_this.selectedDate, 'M/d/yyyy');
                });
                AdvisoryEvent.forEach(function (value) {
                    var newEvent = new CalendarEvent;
                    newEvent["ID"] = value.ID;
                    newEvent["STATUS"] = value.STATUS;
                    newEvent["REQUESTTIME"] = value.REQUESTTIME;
                    newEvent["Icon"] = _this.getAdvisoryImage(value.REQUESTTYPECODE);
                    newEvent["Type"] = 6;
                    newEvent["Item"] = value;
                    _this.calendarEventList.push(newEvent);
                });
            }
            if (_this.isSubLeaveChecked || _this.isForApprovalChecked) {
                var SubLeavesForApprovalEvent = _this.subLeaveList.filter(function (item) {
                    return item.EACHDATES == _this.selectedDate;
                });
                SubLeavesForApprovalEvent.forEach(function (value) {
                    if (value.LEAVESTATUS == src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_FOR_APPROVAL"]) {
                        if (_this.isForApprovalChecked) {
                            var newEvent = new CalendarEvent;
                            newEvent["ID"] = value.ID;
                            newEvent["STATUS"] = value.LEAVESTATUSDESC;
                            newEvent["EMPL_NAME"] = value.EMPL_NAME;
                            newEvent["Icon"] = _this.getLeaveTypeSrc(value.LEAVETYPE);
                            newEvent["Type"] = 2;
                            newEvent["Item"] = value;
                            _this.calendarEventList.push(newEvent);
                        }
                    }
                    else {
                        if (_this.isSubLeaveChecked) {
                            var newEvent = new CalendarEvent;
                            newEvent["ID"] = value.ID;
                            newEvent["STATUS"] = value.LEAVESTATUSDESC;
                            newEvent["EMPL_NAME"] = value.EMPL_NAME;
                            newEvent["Icon"] = _this.getLeaveTypeSrc(value.LEAVETYPE);
                            newEvent["Type"] = 3;
                            newEvent["Item"] = value;
                            _this.calendarEventList.push(newEvent);
                        }
                    }
                });
            }
            if (_this.isWfhChecked) {
                var WfhEvent = _this.wfhList.filter(function (item) {
                    return _this.datepipe.transform(item.AttendanceRequestDate, 'M/d/yyyy') == _this.datepipe.transform(_this.selectedDate, 'M/d/yyyy');
                });
                WfhEvent.forEach(function (value) {
                    var newEvent = new CalendarEvent;
                    newEvent["ID"] = value.ID;
                    newEvent["STATUS"] = "Work From Home";
                    newEvent["REQUESTTIME"] = value.DateTimeIn + " - " + value.DateTimeOut;
                    newEvent["Icon"] = "assets/icon/ic_wfh.png";
                    newEvent["Type"] = 7;
                    newEvent["Item"] = value;
                    _this.calendarEventList.push(newEvent);
                });
            }
            if (_this.isSubWfhChecked) {
                var subWfhEvent = _this.subWfhList.filter(function (item) {
                    return _this.datepipe.transform(item.AttendanceRequestDate, 'M/d/yyyy') == _this.datepipe.transform(_this.selectedDate, 'M/d/yyyy');
                });
                subWfhEvent.forEach(function (value) {
                    var newEvent = new CalendarEvent;
                    newEvent["ID"] = value.ID;
                    newEvent["STATUS"] = value.EmployeeName;
                    newEvent["REQUESTTIME"] = value.DateTimeIn + " - " + value.DateTimeOut;
                    newEvent["Icon"] = "assets/icon/ic_wfh_sub.png";
                    newEvent["Type"] = 8;
                    newEvent["Item"] = value;
                    _this.calendarEventList.push(newEvent);
                });
            }
        };
    }
    CalendarPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    CalendarPage.prototype.today = function () {
        var ev = {
            selectedTime: new Date(),
            events: []
        };
        this.onTimeSelected(ev);
        this.calendar.currentDate = new Date();
    };
    CalendarPage.prototype.ngOnInit = function () {
    };
    CalendarPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isCalendarDatesDownloaded = false;
        this.isMyLeavesDownloaded = false;
        this.isLeaveApprovalDownloaded = false;
        this.isHolidayDownloaded = false;
        this.isSubCalendarDatesDownloaded = false;
        this.isAdvisoryDownloaded = false;
        this.isWfhDownloaded = false;
        this.showAll = true;
        this.strShowAll = "1";
        this.noError = true;
        this.eventSourceList = [];
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_HOLIDAY"]).then(function (val) {
            _this.isHolidayChecked = (val != null ? val : true);
        });
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_LEAVES"]).then(function (val) {
            _this.isLeavesChecked = (val != null ? val : true);
        });
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_FORAPPROVAL_LEAVES"]).then(function (val) {
            _this.isLeaveForApprovalChecked = (val != null ? val : false);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_ADVISORY"]).then(function (val) {
            _this.isAdvisoryChecked = (val != null ? val : true);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_WFH"]).then(function (val) {
            _this.isWfhChecked = (val != null ? val : true);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_SUB_LEAVES"]).then(function (val) {
            _this.isSubLeaveChecked = (val != null ? val : false);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_SUB_ADVISORY"]).then(function (val) {
            _this.isSubAdvisoryChecked = (val != null ? val : false);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_SUB_WFH"]).then(function (val) {
            _this.isSubWfhChecked = (val != null ? val : false);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_FOR_APPROVAL"]).then(function (val) {
            _this.isForApprovalChecked = (val != null ? val : false);
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_SHOW_ALL"]).then(function (val) {
            _this.showAll = (val != null ? val : false);
            _this.strShowAll = (val != null ? "1" : "0");
        });
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loading = overlay;
                //this.download();
            });
        });
        this.today();
    };
    CalendarPage.prototype.refresh = function () {
        this.ionViewWillEnter();
    };
    CalendarPage.prototype.onEventSelected = function () { };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        console.log('month');
        var x = title.split(" ");
        if (x[0] == "January")
            x[0] = "Jan", this.subMonth = "1";
        if (x[0] == "February")
            x[0] = "Feb", this.subMonth = "2";
        if (x[0] == "March")
            x[0] = "Mar", this.subMonth = "3";
        if (x[0] == "April")
            x[0] = "Apr", this.subMonth = "4";
        if (x[0] == "May")
            x[0] = "May", this.subMonth = "5";
        if (x[0] == "June")
            x[0] = "Jun", this.subMonth = "6";
        if (x[0] == "July")
            x[0] = "Jul", this.subMonth = "7";
        if (x[0] == "August")
            x[0] = "Aug", this.subMonth = "8";
        if (x[0] == "September")
            x[0] = "Sep", this.subMonth = "9";
        if (x[0] == "October")
            x[0] = "Oct", this.subMonth = "10";
        if (x[0] == "November")
            x[0] = "Nov", this.subMonth = "11";
        if (x[0] == "December")
            x[0] = "Dec", this.subMonth = "12";
        this.lblMonth = x[0];
        this.lblYear = x[1];
        this.subYear = x[1];
        this.isSubCalendarDatesDownloaded = false;
        this.download();
    };
    CalendarPage.prototype.getAdvisoryImage = function (type) {
        switch (type) {
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_AUT"]:
                return "assets/icon/ic_au.png";
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_AL"]:
                return "assets/icon/ic_al.png";
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_OS"]:
                return "assets/icon/ic_os.png";
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_CTO"]:
                return "assets/icon/ic_cto.png";
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_OB"]:
                return "assets/icon/ic_ob.png";
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ATD_TYPE_CODE_AS"]:
                return "assets/icon/ic_as.png";
        }
    };
    CalendarPage.prototype.getLeaveTypeSrc = function (leaveType) {
        if (leaveType == "BL")
            return "../../../assets/icon/ic_bl.png";
        else if (leaveType == "EL")
            return "../../../assets/icon/ic_el.png";
        else if (leaveType == "IL")
            return "../../../assets/icon/ic_il.png";
        else if (leaveType == "MCW")
            return "../../../assets/icon/ic_mcw.png";
        else if (leaveType == "ML")
            return "../../../assets/icon/ic_ml.png";
        else if (leaveType == "PL")
            return "../../../assets/icon/ic_pl.png";
        else if (leaveType == "SL")
            return "../../../assets/icon/ic_sl.png";
        else if (leaveType == "SPL")
            return "../../../assets/icon/ic_spl.png";
        else if (leaveType == "VL")
            return "../../../assets/icon/ic_vl.png";
        else if (leaveType == "H")
            return "../../../assets/icon/ic_h.png";
    };
    CalendarPage.prototype.onCurrentDateChanged = function (event) {
    };
    CalendarPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    CalendarPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_calendar_filter_calendar_component__WEBPACK_IMPORTED_MODULE_3__["FilterCalendarComponent"],
                                cssClass: 'modalFilterCalendar',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    data: ""
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_HOLIDAY"], detail.data['holiday']);
                                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_LEAVES"], detail.data['leave']);
                                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_FORAPPROVAL_LEAVES"], detail.data['leaveForApproval']);
                                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_ADVISORY"], detail.data['advisory']);
                                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_SUB_LEAVES"], detail.data['subleave']);
                                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_SUB_ADVISORY"], detail.data['subadvisory']);
                                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_SUB_WFH"], detail.data['subwfh']);
                                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_FOR_APPROVAL"], detail.data['forapproval']);
                                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_WFH"], detail.data['wfh']);
                                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_SHOW_ALL"], detail.data['showall']);
                                    _this.ionViewWillEnter();
                                }
                            }
                            _this.modalIsOpen = false;
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CalendarPage.prototype.getCalendarDays = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                UserID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/Config/GetCalendarDates", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
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
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                        return;
                    }
                    _this.calendarDates = jsonData['Value'];
                    _this.isCalendarDatesDownloaded = true;
                    _this.download();
                })
                    .catch(function (error) {
                    _this.showDialog('ERROR!', 'Unable to connect to the server');
                    _this.labelSync = '';
                    _this.noError = false;
                });
            });
        });
    };
    CalendarPage.prototype.getHolidays = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_HOLIDAYS"]).then(function (val) {
            _this.holidays = val;
            _this.isHolidayDownloaded = true;
            _this.setHolidaysEvents();
            _this.download();
        });
    };
    CalendarPage.prototype.setHolidaysEvents = function () {
        var _this = this;
        this.holidays.forEach(function (element) {
            var eventSource = {
                title: element['CALDESCRIPTION'],
                startTime: new Date(element['CALDATE'] + " 8:00"),
                endTime: new Date(element['CALDATE'] + " 8:00"),
                type: "Holiday"
            };
            loadEvents: {
                _this.eventSourceList.push(eventSource);
                _this.myCalendar.loadEvents();
            }
        });
    };
    CalendarPage.prototype.getLeaveForApproval = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var leave = {
                User: Number(_this.empId),
                LeaveRequestStatus: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_FOR_APPROVAL"],
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/HRISApproval/GetForApproval", leave, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
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
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                        return;
                    }
                    _this.leavesForApproval = jsonData['Value'];
                    _this.isLeaveApprovalDownloaded = true;
                    _this.setLeavesEvents(_this.leavesForApproval, "Approval");
                    _this.download();
                })
                    .catch(function (error) {
                    _this.showDialog('ERROR!', 'Unable to connect to the server');
                    _this.labelSync = '';
                    _this.noError = false;
                });
            });
        });
    };
    CalendarPage.prototype.setLeavesEvents = function (array, typeEvent) {
        var _this = this;
        array.forEach(function (leave) {
            _this.getDatesBetween(new Date(leave['LEAVEFROM'].substring(0, 10) + " 8:00"), new Date(leave['LEAVETO'].substring(0, 10))).forEach(function (element) {
                if (typeEvent == "Approval") {
                    var eventSource = {
                        title: '',
                        startTime: new Date(element),
                        endTime: new Date(element),
                        type: typeEvent
                    };
                    loadEvents: {
                        _this.eventSourceList.push(eventSource);
                        _this.myCalendar.loadEvents();
                    }
                    return;
                }
                if (_this.calendarDates.includes(_this.datepipe.transform(element, 'M/d/yyyy'))) {
                    var eventSource = {
                        title: '',
                        startTime: new Date(element),
                        endTime: new Date(element),
                        type: typeEvent
                    };
                    loadEvents: {
                        _this.eventSourceList.push(eventSource);
                        _this.myCalendar.loadEvents();
                    }
                }
            });
        });
    };
    CalendarPage.prototype.getDatesBetween = function (from, to) {
        var year = from.getFullYear();
        var month = from.getMonth();
        var day = from.getDate();
        var dates = [from];
        while (dates[dates.length - 1] < to) {
            dates.push(new Date(year, month, ++day, 8));
        }
        return dates;
    };
    CalendarPage.prototype.getLeaveList = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var postData = {
                UserID: _this.empId,
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/leaverequest/findall", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
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
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                    }
                    if (jsonData['Value']['tblLeaveRequest'] == null || jsonData['Value']['tblLeaveRequest'] == undefined) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                        return;
                    }
                    _this.myLeaves = jsonData['Value']['tblLeaveRequest'];
                    _this.isMyLeavesDownloaded = true;
                    _this.setLeavesEvents(_this.myLeaves, "Leave");
                    _this.download();
                })
                    .catch(function (error) {
                    _this.showDialog('ERROR!', 'Unable to connect to the server');
                    _this.labelSync = '';
                    _this.noError = false;
                });
            });
        });
    };
    CalendarPage.prototype.getSubCalendarDates = function (month, year) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_CALFILTER_SHOW_ALL"]).then(function (valShowAll) {
                var request = {
                    RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                    UserID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                    AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                    ShowAll: !valShowAll,
                    strShowAll: !valShowAll == false ? "0" : "1",
                    Month: month,
                    Year: year
                };
                console.log(request);
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/Config/GetCalendarDatesForSubordinates", request, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined) {
                            _this.showDialog('ERROR!', 'Unable to connect to the server');
                            _this.noError = false;
                            _this.labelSync = '';
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        console.log(jsonData);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                            _this.showDialog('ERROR!', 'Unable to connect to the server');
                            _this.noError = false;
                            _this.labelSync = '';
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
                            _this.showDialog('ERROR!', 'Unable to connect to the server');
                            _this.noError = false;
                            _this.labelSync = '';
                        }
                        _this.subLeaveList = jsonData['Value']['tblSubordinatesLeave'];
                        _this.subAdvisoryList = jsonData['Value']['tblSubordinatesAttendanceAdvisory'];
                        _this.subWfhList = jsonData['Value']['tblSubordinatesWorkFromHome'];
                        if (_this.isForApprovalChecked) {
                            _this.setSubsForApproval();
                        }
                        if (_this.isSubLeaveChecked) {
                            _this.setSubsLeaveCalendarEvents();
                        }
                        if (_this.isSubAdvisoryChecked) {
                            _this.setSubsAdvisoryCalendarEvents();
                        }
                        if (_this.isSubWfhChecked) {
                            _this.setSubsWfhCalendarEvents();
                        }
                        _this.isSubCalendarDatesDownloaded = true;
                        _this.download();
                    })
                        .catch(function (error) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.labelSync = '';
                        _this.noError = false;
                    });
                });
            });
        });
    };
    CalendarPage.prototype.setSubsForApproval = function () {
        var _this = this;
        this.subLeaveList.forEach(function (element) {
            if (element['LEAVESTATUS'] == src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_FOR_APPROVAL"]) {
                var eventSource = {
                    title: '',
                    startTime: new Date(element['EACHDATES'] + " 8:00"),
                    endTime: new Date(element['EACHDATES'] + " 8:00"),
                    type: "Approval"
                };
                loadEvents: {
                    _this.eventSourceList.push(eventSource);
                    _this.myCalendar.loadEvents();
                }
            }
        });
        this.subAdvisoryList.forEach(function (element) {
            if (element['STATUSCODE'] == src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_FOR_APPROVAL"]) {
                var Source = {
                    title: '',
                    startTime: new Date(element['REQUESTDATE'] + " 8:00"),
                    endTime: new Date(element['REQUESTDATE'] + " 8:00"),
                    type: "Approval"
                };
                loadEvents: {
                    _this.eventSourceList.push(Source);
                    _this.myCalendar.loadEvents();
                }
            }
        });
    };
    CalendarPage.prototype.setSubsLeaveCalendarEvents = function () {
        var _this = this;
        this.subLeaveList.forEach(function (element) {
            if (element['LEAVESTATUS'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_FOR_APPROVAL"]) {
                var eventSource = {
                    title: '',
                    startTime: new Date(element['EACHDATES'] + " 8:00"),
                    endTime: new Date(element['EACHDATES'] + " 8:00"),
                    type: "SubLeave"
                };
                loadEvents: {
                    _this.eventSourceList.push(eventSource);
                    _this.myCalendar.loadEvents();
                }
            }
        });
    };
    CalendarPage.prototype.setSubsAdvisoryCalendarEvents = function () {
        var _this = this;
        this.subAdvisoryList.forEach(function (element) {
            if (element['STATUSCODE'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_FOR_APPROVAL"]) {
                var eventSource = {
                    title: '',
                    startTime: new Date(element['REQUESTDATE'] + " 8:00"),
                    endTime: new Date(element['REQUESTDATE'] + " 8:00"),
                    type: "SubAdvisory"
                };
                loadEvents: {
                    _this.eventSourceList.push(eventSource);
                    _this.myCalendar.loadEvents();
                }
            }
        });
    };
    CalendarPage.prototype.setSubsWfhCalendarEvents = function () {
        var _this = this;
        this.subWfhList.forEach(function (element) {
            if (element['AttendanceStatusCode'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["LEAVE_STATUS_CANCELLED"]) {
                var eventSource = {
                    title: '',
                    startTime: new Date(element['AttendanceRequestDate'] + " 8:00"),
                    endTime: new Date(element['AttendanceRequestDate'] + " 8:00"),
                    type: "SubWfh"
                };
                loadEvents: {
                    _this.eventSourceList.push(eventSource);
                    _this.myCalendar.loadEvents();
                }
            }
        });
    };
    CalendarPage.prototype.getAdvisory = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                USER: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                EMPNO: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_USER_ID"]]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/GetAttendanceAdvisory", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
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
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                    }
                    var tempList = jsonData['Value'];
                    // if(this.advisoryList){
                    //   this.advisoryList.forEach((element,index) => {
                    //     if(element['REASONCODE'] == "RSN0007") {
                    //       this.advisoryList.splice(index,1);
                    //     }
                    //   });
                    // }
                    _this.advisoryList = tempList.filter(function (item) {
                        console.log(item.REQUESTTYPECODE);
                        console.log(item.REQUESTTYPECODE !== "ATD0013");
                        return item.REQUESTTYPECODE !== "ATD0013";
                    });
                    console.log(_this.advisoryList);
                    _this.setAdvisoryCalendarEvents();
                    _this.isAdvisoryDownloaded = true;
                    _this.download();
                })
                    .catch(function (error) {
                    console.log(error);
                    _this.showDialog('ERROR!', 'Unable to connect to the server');
                    _this.labelSync = '';
                    _this.noError = false;
                });
            });
        });
    };
    CalendarPage.prototype.setAdvisoryCalendarEvents = function () {
        var _this = this;
        this.advisoryList.forEach(function (element) {
            var eventSource = {
                title: '',
                startTime: new Date(element['REQUESTDATE'] + " 8:00"),
                endTime: new Date(element['REQUESTDATE'] + " 8:00"),
                type: "AttendanceAdvisory"
            };
            loadEvents: {
                _this.eventSourceList.push(eventSource);
                _this.myCalendar.loadEvents();
            }
        });
    };
    CalendarPage.prototype.setWfhCalendarEvents = function () {
        var _this = this;
        this.wfhList.forEach(function (element) {
            var eventSource = {
                title: '',
                startTime: new Date(element['AttendanceRequestDate'] + " 8:00"),
                endTime: new Date(element['REQUESTDATETO'] + " 8:00"),
                type: "Wfh"
            };
            loadEvents: {
                _this.eventSourceList.push(eventSource);
                _this.myCalendar.loadEvents();
            }
        });
    };
    CalendarPage.prototype.download = function () {
        this.labelSync = "Loading...";
        if (!this.isCalendarDatesDownloaded) {
            this.labelSync = "Loading Calendar...";
            this.getCalendarDays();
            return;
        }
        if (this.isHolidayChecked) {
            if (!this.isHolidayDownloaded) {
                this.labelSync = "Syncing Holidays...";
                this.getHolidays();
                return;
            }
        }
        if (this.isSubAdvisoryChecked || this.isSubLeaveChecked || this.isForApprovalChecked || this.isSubWfhChecked) {
            if (!this.isSubCalendarDatesDownloaded) {
                this.labelSync = "Syncing Subordinates Leaves...";
                this.getSubCalendarDates(this.subMonth, this.subYear);
                return;
            }
        }
        if (this.isLeavesChecked) {
            if (!this.isMyLeavesDownloaded) {
                this.labelSync = "Syncing Leaves...";
                this.getLeaveList();
                return;
            }
        }
        if (this.isAdvisoryChecked) {
            if (!this.isAdvisoryDownloaded) {
                this.labelSync = "Syncing Attendance Advisory...";
                this.getAdvisory();
                return;
            }
        }
        if (this.isWfhChecked) {
            if (!this.isWfhDownloaded) {
                this.labelSync = "Syncing Work From Home...";
                this.getWFH();
                return;
            }
        }
        this.labelSync = '';
        // this.isCalendarDatesDownloaded = false;
        // this.isMyLeavesDownloaded = false;
        // this.isLeaveApprovalDownloaded = false;
        // this.isHolidayDownloaded = false;
        // this.isSubCalendarDatesDownloaded = false;
        // this.isAdvisoryDownloaded = false;
        this.showAll = false;
        this.strShowAll = "0";
    };
    CalendarPage.prototype.setLeaveDetails = function (item, type) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_LEAVEDETAILS"], item);
        this.router.navigate(['/leavedetails', type, 'calendar']);
    };
    CalendarPage.prototype.showDialog = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            buttons: [{
                                    text: 'Okay',
                                    handler: function () {
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
    CalendarPage.prototype.getWFH = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                User: _this.empId,
                DateFrom: undefined,
                DateTo: undefined,
                Status: undefined
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/WorkFromHome/GetWorkFromHomeDetails", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
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
                        _this.showDialog('ERROR!', 'Unable to connect to the server');
                        _this.noError = false;
                        _this.labelSync = '';
                        return;
                    }
                    _this.wfhList = jsonData['Value']['tblWFHDetails'];
                    _this.setWfhCalendarEvents();
                    _this.isWfhDownloaded = true;
                    _this.download();
                })
                    .catch(function (error) {
                    _this.showDialog('ERROR!', 'Unable to connect to the server');
                    _this.labelSync = '';
                    _this.noError = false;
                });
            });
        });
    };
    CalendarPage.prototype.openWfhDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_WFHDETAILS"], item["Item"]);
        console.log(item["Item"]);
        this.router.navigate(['/workfromhomedetails', 'user']);
    };
    CalendarPage.prototype.openWfhSubDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_WFHDETAILS"], item["Item"]);
        this.router.navigate(['/workfromhomedetails', 'subsprofile']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"])
    ], CalendarPage.prototype, "myCalendar", void 0);
    CalendarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.page.html */ "./src/app/pages/calendar/calendar.page.html"),
            styles: [__webpack_require__(/*! ./calendar.page.scss */ "./src/app/pages/calendar/calendar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], CalendarPage);
    return CalendarPage;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.js.map