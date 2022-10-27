import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Constants from 'src/app/utils/constants.service';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-subprofile',
  templateUrl: './subprofile.page.html',
  styleUrls: ['./subprofile.page.scss'],
})
export class SubprofilePage implements OnInit {

  subid: string;
  segments: string[] = ["Leave Credits", "Leaves", "Attendance Advisory", "Overtime", "Work From Home", "DTR", "OB"];
  name: string;
  position: string;
  department: string;
  listType: string = "Leave Credits";

  empId: string;
  noError: boolean;
  errorMessage: string;
  loadingDone: boolean;

  leaveCredits: any;
  leaveList: any;
  advisoryList: any;
  DTRList: any;
  OBList: any;
  OvertimeList: any;
  WorkFromHome: any;

  leaveListIsEmpty: boolean;
  advisoryListIsEmpty: boolean;

  activityResult: boolean = false;

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private httpApi: HTTP,
    private router: Router,
    private actionSheetController: ActionSheetController,

  ) {

  }

  ngOnInit() {
    this.loadingDone = false;
    this.noError = true;

    this.subid = this.activatedRoute.snapshot.paramMap.get('subid');
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.position = this.activatedRoute.snapshot.paramMap.get('position');
    this.department = this.activatedRoute.snapshot.paramMap.get('department');

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.getSubProfile()
      this.getSubWfh()
    });

    this.activityResult = true;
  }

  getSubProfile() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        UserID: this.empId
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/GetSubordinates/GetDetails?subordinateID=${this.subid}&FromDateDTR=&ToDateDTR=&FromDate_OB=&ToDate_OB=&Remarks=`, request, {})
          .then(data => {
            if (data.data == null || data.data == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }
            var jsonData = JSON.parse(data.data);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
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
              return;
            }

            this.noError = true;
            this.leaveCredits = jsonData['Value']['tblLeaveCredits'];
            this.leaveList = jsonData['Value']['tblLeaveDetails'];
            this.advisoryList = jsonData['Value']['tblAttendanceAdvisory'];
            this.DTRList = jsonData['Value']['tblDTR'];
            this.OBList = jsonData['Value']['tblOB'];
            this.OvertimeList = jsonData['Value']['tblOT'];

            this.leaveListIsEmpty = this.leaveList.length <= 0;
            this.advisoryListIsEmpty = this.advisoryList <= 0;

            this.loadingDone = true;
          })

          .catch(error => {
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }

  getSubWfh() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {

        USER: val[Constants.KEY_USER_ID],
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatform: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        DateFrom: "",
        DateTo: "",
        Status: "",
        EmployeeID: this.subid,
        EmployeeName: ""
      }

      console.log(request)

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/GetSubordinatesWorkFromHomeDetails`, request, {})
          .then(data => {
            if (data.data == null || data.data == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }
            var jsonData = JSON.parse(data.data);
            console.log(jsonData);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
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
              return;
            }

            this.WorkFromHome = jsonData['Value']['tblWFHDetails'];

            this.noError = true;

            this.loadingDone = true;
          })

          .catch(error => {
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }


  getLeaveTypeSrc(leaveType: string): string {
    if (leaveType == "BL") {
      return "assets/icon/ic_bl.png";

    } else if (leaveType == "EL") {
      return "assets/icon/ic_el.png";

    } else if (leaveType == "IL") {
      return "assets/icon/ic_il.png";

    } else if (leaveType == "MCW") {
      return "assets/icon/ic_mcw.png";

    } else if (leaveType == "ML") {
      return "assets/icon/ic_ml.png";

    } else if (leaveType == "PL") {
      return "assets/icon/ic_pl.png";

    } else if (leaveType == "SL") {
      return "assets/icon/ic_sl.png";

    } else if (leaveType == "SPL") {
      return "assets/icon/ic_spl.png";

    } else if (leaveType == "VL") {
      return "assets/icon/ic_vl.png";

    } else if (leaveType == "XS") {
      return "assets/icon/ic_xs.png";

    } else {
      return "assets/icon/ic_xs.png";
    }
  }

  getDateMonth(datename: string, procedure: number): string {
    var date = new Date(datename);
    var CurrentMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    if (procedure == 1)
      return CurrentMonth[date.getMonth()].toString().toUpperCase();
    else
      return CurrentMonth[date.getMonth()];
  }

  getDateDate(datename: string): string {
    var date = new Date(datename);
    return date.getDate().toString();
  }

  getDateYear(datename: string): string {
    var date = new Date(datename);
    return date.getFullYear().toString();
  }

  getLongDate(datename: string): string {
    var month = this.getDateMonth(datename, 2);
    var date = this.getDateDate(datename);
    var year = this.getDateYear(datename);
    var fulldate = month + " " + date + ", " + year;
    return fulldate;
  }

  moreOptions() {

    this.storage.get(`${Constants.KEY_SUBORDINATESFOROT}`).then((val) => {
      let foundOT: boolean = false;

      val.forEach(sub => {
        console.log(sub["EMPLOYEEID"]);
        if (sub["EMPLOYEEID"] == this.subid) {
          foundOT = true
        }
      });

      if (foundOT) {
        this.showActionsWithOT();
      }
      else {
        this.showActions();
      }
    });
  }

  async showActions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'File for ' + this.name + ' :',
      buttons: [{
        text: 'Request Leave',
        icon: 'list-box',
        handler: () => {
          this.router.navigate(['/leaveadd',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            this.subid]);
        }
      }, {
        text: 'Request Attendance Advisory',
        icon: 'bookmarks',
        handler: () => {
          this.router.navigate(['/advisoryadd',
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
            this.subid,
            '']);
        }
      }, {
        text: 'Request Work From Home',
        icon: 'briefcase',
        handler: () => {
          console.log('wfh')
          this.router.navigate(['/workfromhomeadd',
            '',
            '',
            '',
            '',
            '',
            this.subid,
            '',
            '']);
        }
      }]
    });
    await actionSheet.present();
  }

  async showActionsWithOT() {
    const actionSheet = await this.actionSheetController.create({
      header: 'File for ' + this.name + ' :',
      buttons: [{
        text: 'Request Leave',
        icon: 'list-box',
        handler: () => {
          this.router.navigate(['/leaveadd',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            this.subid]);
        }
      }, {
        text: 'Request Attendance Advisory',
        icon: 'bookmarks',
        handler: () => {
          this.router.navigate(['/advisoryadd',
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
            this.subid,
            '']);
        }
      },
      {
        text: 'Request Overtime',
        icon: 'alarm',
        handler: () => {
          this.router.navigate(['/overtimeadd', '',
            '',
            '',
            '',
            '',
            '',
            '',
            this.subid
          ]);
        }
      },
      {
        text: 'Request Work From Home',
        icon: 'briefcase',
        handler: () => {
          this.router.navigate(['/workfromhomeadd',
            '',
            '',
            '',
            '',
            '',
            this.subid,
            '',
            '']);
        }
      },
      {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  setLeaveDetails(item: any, type: string) {
    this.storage.set(Constants.KEY_LEAVEDETAILS, item);

    var itemType: string = type;

    if (item['LEAVESTATUSDESC'] == 'FOR APPROVAL') {
      itemType = 'forapproval'
    }

    this.router.navigate(['/leavedetails', itemType, "subprofile"])
  }

  setAdvisoryDetail(item: any, type: string) {
    var itemType: string = type;

    if (item['STATUS'] == 'FOR APPROVAL') {
      itemType = 'forapproval';
    }

    this.router.navigate(['/advisorydetails', item['ID'], itemType, item['ISCREATEDBYMANAGER'], item['EMPNO'], 'subprofile']);
  }

  setDTRDetails(item: any) {
    this.storage.set(Constants.KEY_DTRDETAILS, item);

    this.router.navigate(['/dailytimerecorddetails', 'subprofile'])
  }

  setOvertimeDetails(item: any) {
    this.storage.set(Constants.KEY_OTDETAILS, item);

    this.router.navigate(['/overtimedetails', 'subprofile'])
  }

  setViewProfile() {
    this.router.navigate(['/personalinformation',
      'subordinate',
      this.subid,
      this.name,
      this.position])
  }

  ionViewWillEnter() {
    if (this.activityResult) {
      this.ngOnInit();
    }
  }

  goBack() { this.navCtrl.back(); }

  toTitleCase(txt: string): string {
    return txt.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  setWfhDetails(item: any) {
    this.storage.set(Constants.KEY_WFHDETAILS, item);
    console.log(item);

    this.router.navigate(['/workfromhomedetails', 'subsprofile'])
  }
}
