import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { MenuController, AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as Constants from 'src/app/utils/constants.service';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  welcomeArr: String[] = ["Hi,", "Hello,", "Welcome,", "Have a nice day,"];
  welcome: string;
  randomArr: String[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  name: string;
  department: string;
  isManager;
  alerts;
  announcement;
  events;
  subOnLeave;
  empID;
  loadingTimeIn: boolean = false;
  loadingAlert: boolean = false;
  loadingAnnouncement: boolean = false;
  loadingEvent: boolean = false;
  loadingSubordinate: boolean = false;
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  firstname;
  nickname = "ツ";
  today;
  day;
  hours;
  am_pm;
  minutes;
  clockedIn;
  classTimeIn = "btnTimeIn btnTimeInDefault";
  lblClockedInStatus = "LOADING CLOCK IN...";
  lblSubordinatesStatus = "LOADING SUBORDINATES...";
  lblAlertsStatus = "LOADING ALERTS...";
  lblAnnouncementsStatus = "LOADING ANNOUNCEMENTS...";
  lblEventsStatus = "LOADING EVENTS...";
  clickedClockedIn = true;
  clickedAlerts = true;
  clickedAnnounce = false;
  clickedSubordinate = false;
  clickedGabcPreview = false;
  clickedGabcMission = false;
  clickedGabcCreed = false;
  subIsEmpty = false;
  postRequest: any;


  slideOptsEvents = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: {
      disableOnInteraction: false
    },
    setWrapperSize: true,
    loop: true
  };


  slideOptsMany = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: {
      disableOnInteraction: false
    },
    loop: true,
    setWrapperSize: true
  };


  constructor(private loginService: LoginService,
    private menuCtrl: MenuController,
    private storage: Storage,
    private alertController: AlertController,
    private router: Router,
    private httpApi: HTTP) { }

  ngOnInit() {
    this.noError = true;
    this.loadingTimeIn = false;
    this.loadingAlert = false;
    this.loadingAnnouncement = false;
    this.loadingEvent = false;
    this.loadingSubordinate = false;
    this.loadingDone = false;

    if (new Date().getHours() <= 12)
      this.welcomeArr.push("Good Morning,");
    else if (new Date().getHours() >= 13 && new Date().getHours() <= 17)
      this.welcomeArr.push("Good Afternoon,");
    else
      this.welcomeArr.push("Good Evening,");

    this.welcome = this.welcomeArr[Math.floor(Math.random() * this.welcomeArr.length)].toString();

    this.lblClockedInStatus = "LOADING CLOCK IN...";
    this.lblSubordinatesStatus = "LOADING SUBORDINATES...";
    this.lblAlertsStatus = "LOADING ALERTS...";
    this.lblAnnouncementsStatus = "LOADING ANNOUNCEMENTS...";

    var CurrentMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    var CurrentDay: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    this.today = CurrentMonth[new Date().getMonth()] + " " + new Date().getDate();
    this.day = CurrentDay[new Date().getDay()] + ", " + this.today;

    this.storage.get(Constants.KEY_ISFIRSTTIME).then((val) => {
      console.log(val)

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((val) => {
        console.log(val)
        if (!val || val == null)
        {
          console.log("Set Default Server Settings")
          this.setDefaultServerSettings() 
        }
      });
    });

    this.storage.set(Constants.KEY_ISFIRSTTIME, false);

    this.storage.get(`${Constants.KEY_EMPDETAILS}`).then((val) => {
      console.log(val);
      this.name = val['0']['FULLNAME'];
      this.firstname = this.trimFirstName(val['0']['FULLNAME'].split(",")[1]);
      this.nickname = val['0']['NICKNAME'];
      this.department = val['0']['DEPARTMENT'];
      this.isManager = val['0']['ISMANAGER'];
    });

    this.storage.get(`${Constants.KEY_EMPID}`).then((val2) => {

      this.empID = val2;

      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

        this.postRequest = {
          SessionID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatForm: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION,
          UserID: this.empID
        }

        this.getDTR();
        this.getSubordinatesLeaves();
        this.getAlerts();
        this.getAnnouncement();
        this.getEvents();

        // this.lblEventsStatus = "NO EVENT";
        //this.loadingTimeIn = true;
        //this.lblClockedInStatus = "CLOCKED IN";
        //this.clockedIn = "09:46 AM"
      });
    });
  }

  setDefaultServerSettings() {

    let server_settings = {

      is_server_domain: true,
      is_server_default: false,
      is_server_dev: false,
      is_server_set_url: false,
      server_url: Constants.API_ENDPOINT_DOMAIN,
    }

    console.log(server_settings);

    this.storage.set(Constants.KEY_SERVER_SETTINGS, server_settings).then(result => {
      console.log('Default Server Settings saved')
    }).catch(e => {
      console.log('Error saving default settings')
    });
  }

  trimFirstName(fname: String): String {
    var capFirstname: String;
    var splitFname: String[] = fname.split(" ");

    for (var i: number = 0; i <= splitFname.length; i++) {

      if (splitFname[i] == "") {
        splitFname.splice(i, 1);
      }
    }

    if (splitFname.length >= 2) {
      capFirstname = splitFname[0] + " " + splitFname[1];
    } else {
      capFirstname = fname;
    }

    return capFirstname;
  }

  getDTR() {

    this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

      var uri: string = `${value[Constants.SERVER_URL]}/api/HRISHomePage/GetClockIn`;
      var url: string = encodeURI(uri);

      this.httpApi.post(url, this.postRequest, {})
        .then(data => {
          if (data.data == null || data.data == undefined) {
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingTimeIn = true;
            return;
          }

          var jsonData = JSON.parse(data.data);
          if (jsonData['Status'] != Constants.POST_SUCCESS) {
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingTimeIn = true;
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

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingTimeIn = true;
            return;
          }

          console.log(jsonData['Value']);
          if (jsonData['Value'].length != 0) {
            this.lblClockedInStatus = "YOU CLOCKED IN TODAY AT ";
            this.clockedIn = jsonData['Value']['0']['am_in'];
            var timein = this.clockedIn.substring(0, this.clockedIn.length - 2).split(':');
            var timeinAM = this.clockedIn.substring(this.clockedIn.length - 2, this.clockedIn.length);

            console.log(timein);
            console.log(timeinAM);

            if (timeinAM == "AM" && (parseInt(timein[0]) <= 7 || (parseInt(timein[0]) == 8 && parseInt(timein[1]) == 0))) {
              this.classTimeIn = "btnTimeIn btnTimeIn8";
            }
            else if (timeinAM == "AM" && ((parseInt(timein[0]) <= 8 && parseInt(timein[1]) < 60) || (parseInt(timein[0]) == 9 && parseInt(timein[1]) == 0))) {
              this.classTimeIn = "btnTimeIn btnTimeIn9";
            }
            else if (timeinAM == "AM" && ((parseInt(timein[0]) <= 9 && parseInt(timein[1]) < 60) || (parseInt(timein[0]) == 10 && parseInt(timein[1]) == 0))) {
              this.classTimeIn = "btnTimeIn btnTimeIn10";
            }
            else if (timeinAM == "AM" && ((parseInt(timein[0]) == 10 && parseInt(timein[1]) > 0) || (parseInt(timein[0]) == 11))) {
              this.classTimeIn = "btnTimeIn btnTimeInLate";
            }
            else {
              this.classTimeIn = "btnTimeIn btnTimeInDefault";
            }

          }
          else {
            this.lblClockedInStatus = "NO CLOCKED IN";
          }

          this.noError = true;
          this.loadingTimeIn = true;
        })

        .catch(error => {
          this.lblClockedInStatus = "NO CLOCKED IN";
          this.noError = false;
          this.errorMessage = Constants.MESSAGE_CON_ERROR;
          this.loadingTimeIn = true;
        });
    });

  }

  getAlerts() {
    this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
      this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISHomePage/GetAlerts`, this.postRequest, {})
        .then(data => {
          if (data.data == null || data.data == undefined) {
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingAlert = true;
            return;
          }

          var jsonData = JSON.parse(data.data);
          console.log(jsonData)
          if (jsonData['Status'] != Constants.POST_SUCCESS) {
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingAlert = true;
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

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingAlert = true;
            return;
          }

          this.alerts = jsonData['Value'];
          console.log(this.alerts);

          this.alerts.forEach(item => {

            if (item["POSITION"] == "4") {
              item["Icon"] = "/assets/icon/ic_al_lv.png";
              item["Mode"] = "md";
              item["RouterLink"] = "/main/leavecredits";
              item["Name"] = "Leave Request";
              item["Class"] = "alertLeave"
            }

            else if (item["POSITION"] == "5") {
              item["Icon"] = "/assets/icon/ic_al_lvap.png";
              item["Mode"] = "md";
              item["RouterLink"] = "/main/leaveapproval";
              item["Name"] = "Leave Approval";
              item["Class"] = "alertLeaveApproval"
            }

            else if (item["POSITION"] == "6") {
              item["Icon"] = "/assets/icon/ic_al_aa.png";
              item["Mode"] = "md";
              item["RouterLink"] = "/main/advisory";
              item["Name"] = "Advisory Request";
              item["Class"] = "alertAdvisory"
            }

            else if (item["POSITION"] == "7") {
              item["Icon"] = "/assets/icon/ic_al_aaap.png";
              item["Mode"] = "ios";
              item["RouterLink"] = "/main/advisoryapproval";
              item["Name"] = "Advisory Approval"
              item["Class"] = "alertAdvisoryApproval"
            }

            else if (item["POSITION"] == "16") {
              item["Icon"] = "/assets/icon/ic_alert_wfh_ap.png";
              item["Mode"] = "ios";
              item["RouterLink"] = "/main/wfhapproval";
              item["Name"] = "WFH Approval"
              item["Class"] = "alertWFHApproval"
            }

            else if (item["POSITION"] == "17") {
              item["Icon"] = "/assets/icon/ic_alert_wfh.png";
              item["Mode"] = "md";
              item["RouterLink"] = "/main/workfromhome";
              item["Name"] = "WFH Request"
              item["Class"] = "alertWFH"
            }

            else if (item["POSITION"] == "8") {
              item["Icon"] = "/assets/icon/ic_al_ot.png";
              item["Mode"] = "md";
              item["RouterLink"] = "/main/overtime";
              item["Name"] = "Overtime Request"
              item["Class"] = "alertOvertime"
            }

            else if (item["POSITION"] == "9") {
              item["Icon"] = "/assets/icon/ic_al_otap.png";
              item["Mode"] = "md";
              item["RouterLink"] = "/main/overtimeapproval";
              item["Name"] = "Overtime Approval"
              item["Class"] = "alertOvertimeApproval"
            }
          });

          console.log(this.alerts);
          if (this.alerts == undefined || this.alerts == null)
            this.lblAlertsStatus = "NO ALERTS";
          else {
            if (this.alerts.length == 0)
              this.lblAlertsStatus = "NO ALERTS";
            else
              this.lblAlertsStatus = "ALERTS";
          }

          this.noError = true;
          this.loadingAlert = true;
        })
        .catch(error => {
          this.lblAlertsStatus = "NO ALERTS";
          this.noError = false;
          this.errorMessage = Constants.MESSAGE_CON_ERROR;
          this.loadingAlert = true;
        });
    });
  }

  getAnnouncement() {
    this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
      this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISHomePage/GetAnnouncement`, this.postRequest, {})
        .then(data => {
          if (data.data == null || data.data == undefined) {
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingAnnouncement = true;
            return;
          }

          var jsonData = JSON.parse(data.data);
          if (jsonData['Status'] != Constants.POST_SUCCESS) {
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingAnnouncement = true;
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

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingAnnouncement = true;
            return;
          }

          if (jsonData['Value'].length > 0)
            this.lblAnnouncementsStatus = "ANNOUNCEMENTS";
          else
            this.lblAnnouncementsStatus = "NO ANNOUNCEMENTS";

          this.announcement = jsonData['Value'];
          this.announcement = this.announcement.filter(item => this.trimText(item["Title"]) != "Our Purpose" && this.trimText(item["Title"]) != "The GABC Creed");
          this.announcement.forEach(item => {
            if (this.randomArr.length <= 1) {
              this.randomArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
            }
            var num = Math.floor(Math.random() * this.randomArr.length);
            item["Number"] = this.randomArr[num];
            this.randomArr.splice(num, 1);
          });
          console.log(this.announcement);

          this.noError = true;
          this.loadingDone = true;
          this.loadingAnnouncement = true;
          this.clickedAnnounce = !this.clickedAnnounce;
        })
        .catch(error => {
          this.lblAnnouncementsStatus = "ANNOUNCEMENTS";
          this.noError = false;
          this.errorMessage = Constants.MESSAGE_CON_ERROR;
          this.loadingDone = true;
          this.loadingAnnouncement = true;
        });
    });
  }

  getSubordinatesLeaves() {
    this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

      this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISHomePage/GetSubordinatesOnLeave`, this.postRequest, {})
        .then(data => {
          if (data.data == null || data.data == undefined) {
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingSubordinate = true;
            return;
          }

          var jsonData = JSON.parse(data.data);
          console.log(jsonData);
          if (jsonData['Status'] != Constants.POST_SUCCESS) {
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingSubordinate = true;
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

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingSubordinate = true;
            return;
          }

          this.noError = true;
          this.subOnLeave = jsonData['Value'];
          this.loadingDone = true;
          this.loadingSubordinate = true;
          this.lblSubordinatesStatus = this.subOnLeave.length + " SUBORDINATES ON LEAVE TODAY";
          this.subIsEmpty = this.subOnLeave.length < 1;
        })
        .catch(error => {
          console.log(error);
          this.subIsEmpty = true;
          this.lblSubordinatesStatus = "0 SUBORDINATES ON LEAVE TODAY";
          this.noError = false;
          this.errorMessage = Constants.MESSAGE_CON_ERROR;
          this.loadingDone = true;
          this.loadingSubordinate = true;
        });
    });
  }

  getEvents() {
    this.postRequest["IsActive"] = 1;

    this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
      this.httpApi.post(`${value[Constants.SERVER_URL]}/api/event/GetEvents`, this.postRequest, {})
        .then(data => {
          if (data.data == null || data.data == undefined) {
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.lblEventsStatus = "NO EVENT";
            this.loadingDone = true;
            this.loadingEvent = true;
            return;
          }

          var jsonData = JSON.parse(data.data);
          console.log(jsonData);

          if (jsonData['Status'] != Constants.POST_SUCCESS) {
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
            this.loadingEvent = true;
            this.lblEventsStatus = "NO EVENT";
            return;
          }

          if (jsonData['Success'] != Constants.POST_YES) {

            switch (jsonData['Message']) {
              case Constants.OUTDATED_ERROR:
                this.loginService.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                this.loadingEvent = true;
                this.lblEventsStatus = "NO EVENT";
                return;
              case Constants.ERROR_OTHER_DEVICE:
                this.loginService.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                this.loadingEvent = true;
                this.lblEventsStatus = "NO EVENT";
                return;
              case Constants.ERROR_EXPIRED:
                this.loginService.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                this.loadingEvent = true;
                this.lblEventsStatus = "NO EVENT";
                return;
              case Constants.ERROR_REQUIRED:
                this.loginService.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                this.loadingEvent = true;
                this.lblEventsStatus = "NO EVENT";
                return;
            }

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
            this.loadingEvent = true;
            this.lblEventsStatus = "NO EVENT";
            return;
          }

          if (jsonData['Value']['tblEventList'] == null || jsonData['Value']['tblEventList'] == undefined) {
            this.noError = false;
            this.errorMessage = "EMPTY";
            this.lblEventsStatus = "NO EVENT";
            this.loadingDone = true;
            this.loadingEvent = true;
            return;
          }
          else if (jsonData['Value']['tblEventList'].length <= 0) {
            this.noError = false;
            this.errorMessage = "NO EVENTS";
            this.lblEventsStatus = "NO EVENT";
            this.loadingDone = true;
            this.loadingEvent = true;
            return;
          }

          this.noError = true;
          this.events = jsonData['Value']['tblEventList'];
          if (this.events.length > 1) {
            this.slideOptsEvents = {
              initialSlide: 0,
              slidesPerView: 1,
              autoplay: {
                disableOnInteraction: false
              },
              setWrapperSize: true,
              loop: true
            }
          }
          else {
            this.slideOptsEvents = {
              initialSlide: 0,
              slidesPerView: 1,
              autoplay: {
                disableOnInteraction: false
              },
              setWrapperSize: true,
              loop: false
            }
          }
          this.loadingDone = true;
          this.loadingEvent = true;
          this.lblEventsStatus = "UPCOMING EVENTS";

        })
        .catch(error => {
          this.noError = false;
          this.errorMessage = Constants.MESSAGE_CON_ERROR;
          this.loadingDone = true;
          this.lblEventsStatus = "NO EVENT";
          this.loadingEvent = true;
        });
    });
  }

  async showDialog(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      cssClass: "contentAnnounce",
      buttons: [{
        text: 'Okay',
        handler: () => {
        }
      }]
    });

    await alert.present();
  }

  toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  removeExtraSpace(str: string) {
    return str.replace(/(\r\n|\n|\r)/gm, "");
  }

  toggleClockedInSection() {
    this.clickedClockedIn = !this.clickedClockedIn;
  }

  toggleAlertsSection() {
    this.clickedAlerts = !this.clickedAlerts;
  }

  toggleAnnounceSection() {
    this.clickedAnnounce = !this.clickedAnnounce;
  }

  toggleSubordinateSection() {
    this.clickedSubordinate = !this.clickedSubordinate;
  }

  toggleGabcPreview() {
    this.clickedGabcPreview = !this.clickedGabcPreview;
  }

  toggleGabcMission() {
    this.clickedGabcMission = !this.clickedGabcMission;
  }

  toggleGabcCreed() {
    this.clickedGabcCreed = !this.clickedGabcCreed;
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  async showExitDialog() {
    const alert = await this.alertController.create({
      header: 'Exit HRIS',
      message: 'Are you sure you want to exit HRIS?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Exit',
        handler: () => {
          navigator['HRIS'].exitApp();
        }
      }]
    });
  }

  // refresh() {
  //   this.ngOnInit();
  // }

  ionViewWillLeave() {
    this.showExitDialog();
  }

  trimText(text: String): String {
    return text.trim();
  }

  toggleCard() {
    this.router.navigate(['/eventsdetails', 'natcon'])
  }

  togglePersonalInfo() {
    this.router.navigate(['/main/personalinformation'])
  }

  toggleCalendar() {
    this.router.navigate(['/main/calendar'])
  }

}
