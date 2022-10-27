import { Component, ViewChild } from '@angular/core';
import { ModalController, LoadingController, AlertController, } from '@ionic/angular';
import { MenuController, } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { FilterCalendarComponent } from '../../component/filter-calendar/filter-calendar.component';
import { CalendarComponent } from "ionic2-calendar/calendar";
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import * as Constants from 'src/app/utils/constants.service';
import { DatePipe } from '@angular/common';
import { LoginService } from 'src/app/services/login.service';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

export class CalendarEvent {
  ID;
  HolidayName;
  LEAVEDESC;
  LEAVESTATUSDESC;
  EMPL_NAME;
  Icon;
  Type;
  Item: any;
}

export class EventSource {
  title;
  startTime;
  endTime;
  type;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})

export class CalendarPage {
  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
  modalIsOpen: boolean;
  calendarEventList: CalendarEvent[] = [];
  eventSourceList: EventSource[] = [];
  eventSource = [
    // { title: "Test", startTime: this.dtstart, endTime: this.dtend, type: "Holiday" },
    // { title: "Test", startTime: this.dtstart2, endTime: this.dtend2, type: "Leave" },
    // { title: "Test", startTime: this.dtstart3, endTime: this.dtend3, type: "AttendanceAdvisory" },
    // { title: "Test2", startTime: this.dtstart4, endTime: this.dtend4, type: "Approval" }
  ];

  lblMonth;
  lblYear;
  currentDate;
  selectedDate;
  selectedDateHoliday;
  btnToday: boolean = false;
  calendarDates: string[];
  holidays: any;
  myLeaves: any;
  leavesForApproval: any;
  subLeaveList: any;
  subAdvisoryList: any;
  subWfhList: any;
  subLeaveForApproval: any;
  subAdvisoryForApproval: any;
  advisoryList: any;
  subMonth: string;
  subYear: string;
  wfhList: any;

  loading;
  labelSync: string = "Loading...";

  isCalendarDatesDownloaded: boolean;
  isMyLeavesDownloaded: boolean;
  isLeaveApprovalDownloaded: boolean;
  isHolidayDownloaded: boolean;
  isSubCalendarDatesDownloaded: boolean;
  isAdvisoryDownloaded: boolean;
  isWfhDownloaded: boolean;

  isHolidayChecked: boolean;
  isLeavesChecked: boolean;
  isLeaveForApprovalChecked: boolean;
  isAdvisoryChecked: boolean;
  isWfhChecked: boolean;
  isSubLeaveChecked: boolean;
  isSubAdvisoryChecked: boolean;
  isSubWfhChecked: boolean;
  isForApprovalChecked: boolean;
  showAll: boolean;
  strShowAll: string;


  noError: boolean;

  empId: string;

  errorMessage: string = Constants.MESSAGE_CON_ERROR;

  calendar = {
    mode: 'month',
    currentDate: new Date()

  };

  constructor(
    private httpApi: HTTP,
    private storage: Storage,
    private router: Router,
    private datepipe: DatePipe,
    private loginService: LoginService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private modalController: ModalController,
    private menuCtrl: MenuController) { }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  today() {
    let ev = {
      selectedTime: new Date(),
      events: []
    };
    this.onTimeSelected(ev);
    this.calendar.currentDate = new Date();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
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

    this.storage.get(`${Constants.KEY_CALFILTER_HOLIDAY}`).then((val) => {
      this.isHolidayChecked = (val != null ? val : true)
    });

    this.storage.get(`${Constants.KEY_CALFILTER_LEAVES}`).then((val) => {
      this.isLeavesChecked = (val != null ? val : true)
    });

    this.storage.get(`${Constants.KEY_CALFILTER_FORAPPROVAL_LEAVES}`).then((val) => {
      this.isLeaveForApprovalChecked = (val != null ? val : false)
    });

    this.storage.get(Constants.KEY_CALFILTER_ADVISORY).then((val) => {
      this.isAdvisoryChecked = (val != null ? val : true)
    });

    this.storage.get(Constants.KEY_CALFILTER_WFH).then((val) => {
      this.isWfhChecked = (val != null ? val : true)
    });


    this.storage.get(Constants.KEY_CALFILTER_SUB_LEAVES).then((val) => {
      this.isSubLeaveChecked = (val != null ? val : false)
    });

    this.storage.get(Constants.KEY_CALFILTER_SUB_ADVISORY).then((val) => {
      this.isSubAdvisoryChecked = (val != null ? val : false)
    });

    this.storage.get(Constants.KEY_CALFILTER_SUB_WFH).then((val) => {
      this.isSubWfhChecked = (val != null ? val : false)
    });

    this.storage.get(Constants.KEY_CALFILTER_FOR_APPROVAL).then((val) => {
      this.isForApprovalChecked = (val != null ? val : false)
    });


    this.storage.get(Constants.KEY_CALFILTER_SHOW_ALL).then((val) => {
      this.showAll = (val != null ? val : false)
      this.strShowAll = (val != null ? "1" : "0")
    });

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;

      this.loadingCtrl.create({
        message: "Loading..."
      }).then((overlay) => {
        this.loading = overlay;
        //this.download();
      });
    });
    this.today();
  }

  refresh() {
    this.ionViewWillEnter();
  }

  onEventSelected() { }

  onViewTitleChanged(title) {
    console.log('month');
    let x = title.split(" ");
    if (x[0] == "January") x[0] = "Jan", this.subMonth = "1";
    if (x[0] == "February") x[0] = "Feb", this.subMonth = "2";
    if (x[0] == "March") x[0] = "Mar", this.subMonth = "3";
    if (x[0] == "April") x[0] = "Apr", this.subMonth = "4";
    if (x[0] == "May") x[0] = "May", this.subMonth = "5";
    if (x[0] == "June") x[0] = "Jun", this.subMonth = "6";
    if (x[0] == "July") x[0] = "Jul", this.subMonth = "7";
    if (x[0] == "August") x[0] = "Aug", this.subMonth = "8";
    if (x[0] == "September") x[0] = "Sep", this.subMonth = "9";
    if (x[0] == "October") x[0] = "Oct", this.subMonth = "10";
    if (x[0] == "November") x[0] = "Nov", this.subMonth = "11";
    if (x[0] == "December") x[0] = "Dec", this.subMonth = "12";
    this.lblMonth = x[0];
    this.lblYear = x[1];
    this.subYear = x[1];

    this.isSubCalendarDatesDownloaded = false;
    this.download();
  }
  onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {

    this.calendarEventList = [];

    this.currentDate = ("0" + (this.calendar.currentDate.getMonth() + 1)).slice(-2).toString() + "/" +
      ("0" + this.calendar.currentDate.getDate()).slice(-2).toString() + "/" +
      this.calendar.currentDate.getFullYear().toString();

    this.selectedDateHoliday = (ev.selectedTime.getMonth() + 1).toString() + "/" +
      ev.selectedTime.getDate().toString() + "/" +
      ev.selectedTime.getFullYear().toString();

    this.selectedDate = ("0" + (ev.selectedTime.getMonth() + 1)).slice(-2).toString() + "/" +
      ("0" + ev.selectedTime.getDate()).slice(-2).toString() + "/" +
      ev.selectedTime.getFullYear().toString();

    if (this.currentDate != this.selectedDate) {
      this.btnToday = true;
    } else {
      this.btnToday = false;
    }

    if (this.isHolidayChecked) {
      if (this.calendarDates.indexOf(this.selectedDateHoliday) > -1) {

        let holidayEvent = this.holidays.filter(e => e.CALDATE == this.selectedDate);
        holidayEvent.forEach(value => {
          let newEvent = new CalendarEvent;
          newEvent["HolidayName"] = value.CALDESCRIPTION;
          newEvent["Icon"] = this.getLeaveTypeSrc("H");
          newEvent["Type"] = 0
          this.calendarEventList.push(newEvent);
        })
      }
    }

    if (this.isLeavesChecked) {
      let myLeavesEvent = this.myLeaves.filter(item => {
        return (new Date(this.selectedDate) >= new Date(item.LEAVEFROM)
          && new Date(this.selectedDate) <= new Date(item.LEAVETO)
          && item.LEAVESTATUSDESC != "CANCELLED")
      });

      myLeavesEvent.forEach(value => {
        let newEvent = new CalendarEvent;
        newEvent["ID"] = value.ID;
        newEvent["LEAVEDAY"] = value.LEAVEDAY;
        newEvent["LEAVESTATUSDESC"] = value.LEAVESTATUSDESC;
        newEvent["Icon"] = this.getLeaveTypeSrc(value.LEAVETYPE);
        newEvent["Type"] = 1;
        newEvent["Item"] = value;
        this.calendarEventList.push(newEvent);
      });
    }

    if (this.isSubAdvisoryChecked || this.isForApprovalChecked) {
      let SubAdvisoryForApprovalEvent = this.subAdvisoryList.filter(item => {
        return item.REQUESTDATE == this.selectedDate;
      });

      SubAdvisoryForApprovalEvent.forEach(value => {
        if (value.STATUSCODE == Constants.LEAVE_STATUS_FOR_APPROVAL) {
          if (this.isForApprovalChecked) {
            let newEvent = new CalendarEvent;
            newEvent["ID"] = value.ID;
            newEvent["STATUS"] = value.STATUS;
            newEvent["EMPNO"] = value.EMPNO;
            newEvent["EMPL_NAME"] = value.EMPL_NAME;
            newEvent["Icon"] = this.getAdvisoryImage(value.REQUESTTYPECODE);
            newEvent["Type"] = 5;
            newEvent["Item"] = value;
            this.calendarEventList.push(newEvent);
          }
        } else {
          if (this.isSubAdvisoryChecked) {
            let newEvent = new CalendarEvent;
            newEvent["ID"] = value.ID;
            newEvent["STATUS"] = value.STATUS;
            newEvent["EMPL_NAME"] = value.EMPL_NAME;
            newEvent["EMPNO"] = value.EMPNO;
            newEvent["Icon"] = this.getAdvisoryImage(value.REQUESTTYPECODE);
            newEvent["Type"] = 4;
            newEvent["Item"] = value;
            this.calendarEventList.push(newEvent);
          }
        }
      });
    }


    if (this.isAdvisoryChecked) {
      let AdvisoryEvent = this.advisoryList.filter(item => {
        return this.datepipe.transform(item.REQUESTDATE, 'M/d/yyyy') == this.datepipe.transform(this.selectedDate, 'M/d/yyyy');
      });

      AdvisoryEvent.forEach(value => {
        let newEvent = new CalendarEvent;
        newEvent["ID"] = value.ID;
        newEvent["STATUS"] = value.STATUS;
        newEvent["REQUESTTIME"] = value.REQUESTTIME;
        newEvent["Icon"] = this.getAdvisoryImage(value.REQUESTTYPECODE);
        newEvent["Type"] = 6;
        newEvent["Item"] = value;
        this.calendarEventList.push(newEvent);
      });
    }

    if (this.isSubLeaveChecked || this.isForApprovalChecked) {
      let SubLeavesForApprovalEvent = this.subLeaveList.filter(item => {
        return item.EACHDATES == this.selectedDate;
      });

      SubLeavesForApprovalEvent.forEach(value => {

        if (value.LEAVESTATUS == Constants.LEAVE_STATUS_FOR_APPROVAL) {
          if (this.isForApprovalChecked) {
            let newEvent = new CalendarEvent;
            newEvent["ID"] = value.ID;
            newEvent["STATUS"] = value.LEAVESTATUSDESC;
            newEvent["EMPL_NAME"] = value.EMPL_NAME;
            newEvent["Icon"] = this.getLeaveTypeSrc(value.LEAVETYPE);
            newEvent["Type"] = 2;
            newEvent["Item"] = value;
            this.calendarEventList.push(newEvent);

          }
        } else {

          if (this.isSubLeaveChecked) {
            let newEvent = new CalendarEvent;
            newEvent["ID"] = value.ID;
            newEvent["STATUS"] = value.LEAVESTATUSDESC;
            newEvent["EMPL_NAME"] = value.EMPL_NAME;
            newEvent["Icon"] = this.getLeaveTypeSrc(value.LEAVETYPE);
            newEvent["Type"] = 3;
            newEvent["Item"] = value;
            this.calendarEventList.push(newEvent);
          }
        }
      });

    }

    if (this.isWfhChecked) {
      let WfhEvent = this.wfhList.filter(item => {
        return this.datepipe.transform(item.AttendanceRequestDate, 'M/d/yyyy') == this.datepipe.transform(this.selectedDate, 'M/d/yyyy');
      });

      WfhEvent.forEach(value => {
        let newEvent = new CalendarEvent;
        newEvent["ID"] = value.ID;
        newEvent["STATUS"] = "Work From Home";
        newEvent["REQUESTTIME"] = value.DateTimeIn  + " - " + value.DateTimeOut ;
        newEvent["Icon"] = "assets/icon/ic_wfh.png";
        newEvent["Type"] = 7;
        newEvent["Item"] = value;
        this.calendarEventList.push(newEvent);
      });
    }

    if (this.isSubWfhChecked) {
      let subWfhEvent = this.subWfhList.filter(item => {
        return this.datepipe.transform(item.AttendanceRequestDate, 'M/d/yyyy') == this.datepipe.transform(this.selectedDate, 'M/d/yyyy');
      });

      subWfhEvent.forEach(value => {
        let newEvent = new CalendarEvent;
        newEvent["ID"] = value.ID;
        newEvent["STATUS"] = value.EmployeeName;
        newEvent["REQUESTTIME"] = value.DateTimeIn  + " - " + value.DateTimeOut ;
        newEvent["Icon"] = "assets/icon/ic_wfh_sub.png";
        newEvent["Type"] = 8;
        newEvent["Item"] = value;
        this.calendarEventList.push(newEvent);
      });
    }


  };

  getAdvisoryImage(type: string): string {
    switch (type) {
      case Constants.ATD_TYPE_CODE_AUT:
        return "assets/icon/ic_au.png";

      case Constants.ATD_TYPE_CODE_AL:
        return "assets/icon/ic_al.png";

      case Constants.ATD_TYPE_CODE_OS:
        return "assets/icon/ic_os.png";

      case Constants.ATD_TYPE_CODE_CTO:
        return "assets/icon/ic_cto.png";

      case Constants.ATD_TYPE_CODE_OB:
        return "assets/icon/ic_ob.png";

      case Constants.ATD_TYPE_CODE_AS:
        return "assets/icon/ic_as.png";
    }
  }


  getLeaveTypeSrc(leaveType: string): string {
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
  }

  onCurrentDateChanged(event) {

  }

  openModal() {
    if (!this.modalIsOpen)
      this.showModal();
  }

  async showModal() {
    this.modalIsOpen = true;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: FilterCalendarComponent,
        cssClass: 'modalFilterCalendar',
        animated: false,
        backdropDismiss: false,
        componentProps: {
          data: ""
        }
      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {

        if (detail.data['isDismissed'] == 0) {
          this.storage.set(Constants.KEY_CALFILTER_HOLIDAY, detail.data['holiday']);
          this.storage.set(Constants.KEY_CALFILTER_LEAVES, detail.data['leave']);
          this.storage.set(Constants.KEY_CALFILTER_FORAPPROVAL_LEAVES, detail.data['leaveForApproval']);
          this.storage.set(Constants.KEY_CALFILTER_ADVISORY, detail.data['advisory']);
          this.storage.set(Constants.KEY_CALFILTER_SUB_LEAVES, detail.data['subleave']);
          this.storage.set(Constants.KEY_CALFILTER_SUB_ADVISORY, detail.data['subadvisory']);
          this.storage.set(Constants.KEY_CALFILTER_SUB_WFH, detail.data['subwfh']);
          this.storage.set(Constants.KEY_CALFILTER_FOR_APPROVAL, detail.data['forapproval']);
          this.storage.set(Constants.KEY_CALFILTER_WFH, detail.data['wfh']);
          this.storage.set(Constants.KEY_CALFILTER_SHOW_ALL, detail.data['showall']);

          this.ionViewWillEnter();
        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

  getCalendarDays() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        UserID: val[Constants.KEY_USER_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/Config/GetCalendarDates`, request, {})
          .then(data => {

            if (data.data == null || data.data == undefined) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';

              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log(jsonData);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';

              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {

              switch (jsonData['Message']) {
                case Constants.OUTDATED_ERROR:
                  this.loginService.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                  return;
                case Constants.ERROR_OTHER_DEVICE:
                  this.loginService.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                  return;
                case Constants.ERROR_EXPIRED:
                  this.loginService.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                  return;
                case Constants.ERROR_REQUIRED:
                  this.loginService.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                  return;
              }

              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';

              return;
            }

            if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';

              return;
            }

            this.calendarDates = jsonData['Value'];
            this.isCalendarDatesDownloaded = true;

            this.download();
          })
          .catch(error => {
            this.showDialog('ERROR!', 'Unable to connect to the server');
            this.labelSync = '';

            this.noError = false;
          })
      });
    });
  }

  getHolidays() {
    this.storage.get(`${Constants.KEY_HOLIDAYS}`).then((val) => {

      this.holidays = val;
      this.isHolidayDownloaded = true;
      this.setHolidaysEvents();
      this.download();
    });
  }

  setHolidaysEvents() {
    this.holidays.forEach(element => {
      let eventSource = {
        title: element['CALDESCRIPTION'],
        startTime: new Date(element['CALDATE'] + " 8:00"),
        endTime: new Date(element['CALDATE'] + " 8:00"),
        type: "Holiday"
      }

      loadEvents: {
        this.eventSourceList.push(eventSource);
        this.myCalendar.loadEvents();
      }
    });
  }

  getLeaveForApproval() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let leave = {
        User: Number(this.empId),
        LeaveRequestStatus: Constants.LEAVE_STATUS_FOR_APPROVAL,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,

      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISApproval/GetForApproval`, leave, {})
          .then(data => {

            if (data.data == null || data.data == undefined) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';

              return;
            }

            var jsonData = JSON.parse(data.data);
            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';

              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {

              switch (jsonData['Message']) {
                case Constants.OUTDATED_ERROR:
                  this.loginService.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                  return;
                case Constants.ERROR_OTHER_DEVICE:
                  this.loginService.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                  return;
                case Constants.ERROR_EXPIRED:
                  this.loginService.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                  return;
                case Constants.ERROR_REQUIRED:
                  this.loginService.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                  return;
              }

              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';

              return;
            }

            if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';

              return;
            }

            this.leavesForApproval = jsonData['Value'];
            this.isLeaveApprovalDownloaded = true;
            this.setLeavesEvents(this.leavesForApproval, "Approval");
            this.download();
          })
          .catch(error => {
            this.showDialog('ERROR!', 'Unable to connect to the server');
            this.labelSync = '';

            this.noError = false;
          });
      });
    });
  }

  setLeavesEvents(array: any, typeEvent: string) {
    array.forEach(leave => {
      this.getDatesBetween(new Date(leave['LEAVEFROM'].substring(0, 10) + " 8:00"), new Date(leave['LEAVETO'].substring(0, 10))).forEach(element => {
        if (typeEvent == "Approval") {
          let eventSource = {
            title: '',
            startTime: new Date(element),
            endTime: new Date(element),
            type: typeEvent
          }
          loadEvents: {
            this.eventSourceList.push(eventSource);
            this.myCalendar.loadEvents();
          }


          return;
        }

        if (this.calendarDates.includes(this.datepipe.transform(element, 'M/d/yyyy'))) {

          let eventSource = {
            title: '',
            startTime: new Date(element),
            endTime: new Date(element),
            type: typeEvent
          }
          loadEvents: {
            this.eventSourceList.push(eventSource);
            this.myCalendar.loadEvents();
          }
        }
      });
    });
  }

  getDatesBetween(from: Date, to: Date): Date[] {
    let year = from.getFullYear();
    let month = from.getMonth();
    let day = from.getDate();
    let dates = [from];
    while (dates[dates.length - 1] < to) {
      dates.push(new Date(year, month, ++day, 8));
    }
    return dates;
  }

  getLeaveList() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        UserID: this.empId,
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION
      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/leaverequest/findall`, postData, {})
          .then(data => {

            if (data.data == null || data.data == undefined) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';

              return;
            }

            var jsonData = JSON.parse(data.data);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {

              switch (jsonData['Message']) {
                case Constants.OUTDATED_ERROR:
                  this.loginService.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                  return;
                case Constants.ERROR_OTHER_DEVICE:
                  this.loginService.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                  return;
                case Constants.ERROR_EXPIRED:
                  this.loginService.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                  return;
                case Constants.ERROR_REQUIRED:
                  this.loginService.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                  return;
              }

              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';
            }
            if (jsonData['Value']['tblLeaveRequest'] == null || jsonData['Value']['tblLeaveRequest'] == undefined) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';

              return;
            }

            this.myLeaves = jsonData['Value']['tblLeaveRequest'];
            this.isMyLeavesDownloaded = true;
            this.setLeavesEvents(this.myLeaves, "Leave");
            this.download();
          })
          .catch(error => {
            this.showDialog('ERROR!', 'Unable to connect to the server');
            this.labelSync = '';
            this.noError = false;
          });
      });
    });
  }

  getSubCalendarDates(month: string, year: string) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {
      this.storage.get(`${Constants.KEY_CALFILTER_SHOW_ALL}`).then((valShowAll) => {
        let request = {
          RecordID: val[Constants.KEY_RECORD_ID],
          UserID: val[Constants.KEY_USER_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatForm: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION,
          ShowAll: !valShowAll,
          strShowAll: !valShowAll == false ? "0" : "1",
          Month: month,
          Year: year
        }
        console.log(request);

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/Config/GetCalendarDatesForSubordinates`, request, {})
            .then(data => {

              if (data.data == null || data.data == undefined) {
                this.showDialog('ERROR!', 'Unable to connect to the server');
                this.noError = false;
                this.labelSync = '';
                return;
              }

              var jsonData = JSON.parse(data.data);
              console.log(jsonData);
              if (jsonData['Status'] != Constants.POST_SUCCESS) {
                this.showDialog('ERROR!', 'Unable to connect to the server');
                this.noError = false;
                this.labelSync = '';
                return;
              }

              if (jsonData['Success'] != Constants.POST_YES) {

                switch (jsonData['Message']) {
                  case Constants.OUTDATED_ERROR:
                    this.loginService.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                    return;
                  case Constants.ERROR_OTHER_DEVICE:
                    this.loginService.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                    return;
                  case Constants.ERROR_EXPIRED:
                    this.loginService.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                    return;
                  case Constants.ERROR_REQUIRED:
                    this.loginService.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                    return;
                }

                this.showDialog('ERROR!', 'Unable to connect to the server');
                this.noError = false;
                this.labelSync = '';
              }

              this.subLeaveList = jsonData['Value']['tblSubordinatesLeave'];
              this.subAdvisoryList = jsonData['Value']['tblSubordinatesAttendanceAdvisory'];
              this.subWfhList = jsonData['Value']['tblSubordinatesWorkFromHome'];
              if (this.isForApprovalChecked) {
                this.setSubsForApproval();
              }

              if (this.isSubLeaveChecked) {
                this.setSubsLeaveCalendarEvents();
              }

              if (this.isSubAdvisoryChecked) {
                this.setSubsAdvisoryCalendarEvents();
              }

              if (this.isSubWfhChecked) {
                this.setSubsWfhCalendarEvents();
              }


              this.isSubCalendarDatesDownloaded = true;

              this.download();
            })
            .catch(error => {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.labelSync = '';
              this.noError = false;
            })
        });
      });

    });
  }

  setSubsForApproval() {
    this.subLeaveList.forEach(element => {
      if (element['LEAVESTATUS'] == Constants.LEAVE_STATUS_FOR_APPROVAL) {
        let eventSource = {
          title: '',
          startTime: new Date(element['EACHDATES'] + " 8:00"),
          endTime: new Date(element['EACHDATES'] + " 8:00"),
          type: "Approval"
        }

        loadEvents: {
          this.eventSourceList.push(eventSource);
          this.myCalendar.loadEvents();
        }
      }
    });

    this.subAdvisoryList.forEach(element => {
      if (element['STATUSCODE'] == Constants.LEAVE_STATUS_FOR_APPROVAL) {
        let Source = {
          title: '',
          startTime: new Date(element['REQUESTDATE'] + " 8:00"),
          endTime: new Date(element['REQUESTDATE'] + " 8:00"),
          type: "Approval"
        }

        loadEvents: {
          this.eventSourceList.push(Source);
          this.myCalendar.loadEvents();
        }
      }
    });
  }

  setSubsLeaveCalendarEvents() {

    this.subLeaveList.forEach(element => {
      if (element['LEAVESTATUS'] != Constants.LEAVE_STATUS_FOR_APPROVAL) {

        let eventSource = {
          title: '',
          startTime: new Date(element['EACHDATES'] + " 8:00"),
          endTime: new Date(element['EACHDATES'] + " 8:00"),
          type: "SubLeave"
        }

        loadEvents: {
          this.eventSourceList.push(eventSource);
          this.myCalendar.loadEvents();
        }

      }
    });
  }

  setSubsAdvisoryCalendarEvents() {
    this.subAdvisoryList.forEach(element => {

      if (element['STATUSCODE'] != Constants.LEAVE_STATUS_FOR_APPROVAL) {

        let eventSource = {
          title: '',
          startTime: new Date(element['REQUESTDATE'] + " 8:00"),
          endTime: new Date(element['REQUESTDATE'] + " 8:00"),
          type: "SubAdvisory"
        }

        loadEvents: {
          this.eventSourceList.push(eventSource);
          this.myCalendar.loadEvents();
        }
      }
    });
  }

  setSubsWfhCalendarEvents() {

    this.subWfhList.forEach(element => {
      if (element['AttendanceStatusCode'] != Constants.LEAVE_STATUS_CANCELLED) {

        let eventSource = {
          title: '',
          startTime: new Date(element['AttendanceRequestDate'] + " 8:00"),
          endTime: new Date(element['AttendanceRequestDate'] + " 8:00"),
          type: "SubWfh"
        }

        loadEvents: {
          this.eventSourceList.push(eventSource);
          this.myCalendar.loadEvents();
        }
      }
    });
  }


  getAdvisory() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        USER: val[Constants.KEY_USER_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        EMPNO: val[Constants.KEY_USER_ID]
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {


        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisory/GetAttendanceAdvisory`, request, {})
          .then(data => {

            if (data.data == null || data.data == undefined) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';
              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log(jsonData);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {

              switch (jsonData['Message']) {
                case Constants.OUTDATED_ERROR:
                  this.loginService.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                  return;
                case Constants.ERROR_OTHER_DEVICE:
                  this.loginService.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                  return;
                case Constants.ERROR_EXPIRED:
                  this.loginService.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                  return;
                case Constants.ERROR_REQUIRED:
                  this.loginService.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                  return;
              }

              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';
            }

            let tempList = jsonData['Value'];
            // if(this.advisoryList){
            //   this.advisoryList.forEach((element,index) => {
            //     if(element['REASONCODE'] == "RSN0007") {
            //       this.advisoryList.splice(index,1);
            //     }
            //   });
            // }

            this.advisoryList = tempList.filter(item => {
              console.log(item.REQUESTTYPECODE)
              console.log(item.REQUESTTYPECODE !== "ATD0013")
              return item.REQUESTTYPECODE !== "ATD0013";
            });

            console.log(this.advisoryList)

            this.setAdvisoryCalendarEvents();

            this.isAdvisoryDownloaded = true;
            this.download();
          })
          .catch(error => {
            console.log(error)
            this.showDialog('ERROR!', 'Unable to connect to the server');
            this.labelSync = '';
            this.noError = false;
          });
      });
    });
  }

  setAdvisoryCalendarEvents() {
    this.advisoryList.forEach(element => {

      let eventSource = {
        title: '',
        startTime: new Date(element['REQUESTDATE'] + " 8:00"),
        endTime: new Date(element['REQUESTDATE'] + " 8:00"),
        type: "AttendanceAdvisory"
      }

      loadEvents: {
        this.eventSourceList.push(eventSource);
        this.myCalendar.loadEvents();
      }
    });
  }

  setWfhCalendarEvents() {
    this.wfhList.forEach(element => {

      let eventSource = {
        title: '',
        startTime: new Date(element['AttendanceRequestDate'] + " 8:00"),
        endTime: new Date(element['REQUESTDATETO'] + " 8:00"),
        type: "Wfh"
      }

      loadEvents: {
        this.eventSourceList.push(eventSource);
        this.myCalendar.loadEvents();
      }
    });
  }


  download() {
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

    if (this.isSubAdvisoryChecked || this.isSubLeaveChecked || this.isForApprovalChecked || this.isSubWfhChecked ) {
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
  }

  setLeaveDetails(item: any, type: string) {
    this.storage.set(Constants.KEY_LEAVEDETAILS, item);

    this.router.navigate(['/leavedetails', type, 'calendar'])
  }

  async showDialog(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [{
        text: 'Okay',
        handler: () => {

        }
      }]
    });

    await alert.present();
  }

  getWFH() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        User: this.empId,
        DateFrom: undefined,
        DateTo: undefined,
        Status: undefined
      }

      console.log(request);
      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/GetWorkFromHomeDetails`, request, {})
          .then(data => {


            if (data.data == null || data.data == undefined) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';
              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log(jsonData);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {

              switch (jsonData['Message']) {
                case Constants.OUTDATED_ERROR:
                  this.loginService.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                  return;
                case Constants.ERROR_OTHER_DEVICE:
                  this.loginService.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                  return;
                case Constants.ERROR_EXPIRED:
                  this.loginService.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                  return;
                case Constants.ERROR_REQUIRED:
                  this.loginService.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                  return;
              }

              this.showDialog('ERROR!', 'Unable to connect to the server');
              this.noError = false;
              this.labelSync = '';

              return;
            }

            this.wfhList = jsonData['Value']['tblWFHDetails'];
            this.setWfhCalendarEvents();

            this.isWfhDownloaded = true;
            this.download();
          })

          .catch(error => {
            this.showDialog('ERROR!', 'Unable to connect to the server');
            this.labelSync = '';
            this.noError = false;
          });
      });
    });
  }

  openWfhDetails(item: any) {
    this.storage.set(Constants.KEY_WFHDETAILS, item["Item"]);
    console.log(item["Item"]);
    this.router.navigate(['/workfromhomedetails', 'user'])
  }

  openWfhSubDetails(item: any) {
    this.storage.set(Constants.KEY_WFHDETAILS, item["Item"]);

    this.router.navigate(['/workfromhomedetails', 'subsprofile'])
  }


}
