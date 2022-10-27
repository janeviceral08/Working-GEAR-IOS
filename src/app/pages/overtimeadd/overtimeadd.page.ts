import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HTTP } from '@ionic-native/http/ngx';
import { DatePipe } from '@angular/common'
import { LoadingController, AlertController, NavController, ActionSheetController, Events } from '@ionic/angular';
import * as Constants from 'src/app/utils/constants.service';

@Component({
  selector: 'app-overtimeadd',
  templateUrl: './overtimeadd.page.html',
  styleUrls: ['./overtimeadd.page.scss'],
})
export class OvertimeaddPage implements OnInit {
  otOneType: any;
  otType: string[] = [];
  scheduleType: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  remarks: string;
  id: string;
  subId: string;
  title: string;
  reqstartDate: string;
  reqstartTime: string;
  reqendDate: string;
  reqendTime: string;
  reqremarks: string;
  noError: boolean;
  loading;
  loadingDone: boolean;
  empId: string;
  timeStart: string;
  timeDay: string;
  approvedHours: string;
  subordinates;

  constructor(
    private storage: Storage,
    public datepipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loginService: LoginService,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private loadingCtrl: LoadingController,
    private httpApi: HTTP,
    public events: Events
  ) { }

  ngOnInit() {
    this.noError = true;
    this.loadingDone = false;

    this.otOneType = [{
      Type: 'Regular OT',
      Value: 'RD',
    }];
    this.noError = false;
    this.loadingDone = true;

    if (!this.empId) {
      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;
      });
    }

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.scheduleType = this.activatedRoute.snapshot.paramMap.get('type');
    this.reqstartDate = this.activatedRoute.snapshot.paramMap.get('startdate');
    this.reqstartTime = this.activatedRoute.snapshot.paramMap.get('starttime');
    this.reqendDate = this.activatedRoute.snapshot.paramMap.get('enddate');
    this.reqendTime = this.activatedRoute.snapshot.paramMap.get('endtime');
    this.reqremarks = this.activatedRoute.snapshot.paramMap.get('remarks');
    this.subId = this.activatedRoute.snapshot.paramMap.get('subid');

    if (this.subId != '') {
      this.storage.get(`${Constants.KEY_SUBORDINATESFOROT}`).then((val) => {
        this.subordinates = val;
      });
    }
    this.setTitle();
  }

  setTitle() {
    if (this.id == '') {
      this.title = "Add Overtime"
      this.scheduleType = "RD";
    } else {
      this.title = "Edit Overtime"
      this.startDate = this.datepipe.transform(new Date(this.reqstartDate).toString(), 'yyyy-MM-dd');
      this.endDate = this.datepipe.transform(new Date(this.reqendDate).toString(), 'yyyy-MM-dd');
      this.remarks = this.reqremarks;

      this.startTime = this.convert24Hours(this.reqstartTime.trim());
      this.endTime = this.convert24Hours(this.reqendTime.trim());
    }
  }

  sendOTRequest() {
    if (this.startDate == null || this.startDate == undefined || this.startDate == '') {
      alert("Start Date is empty");
      return;
    }
    if (this.startTime == null || this.startTime == undefined || this.startTime == '') {
      alert("Start Time is empty");
      return;
    }
    if (this.endDate == null || this.endDate == undefined || this.endDate == '') {
      alert("End Date is empty");
      return;
    }
    if (this.endTime == null || this.endTime == undefined || this.endTime == '') {
      alert("End Time is empty");
      return;
    }

    let selectedStartDate = this.datepipe.transform(this.startDate, 'MM/dd/yyyy')
    let selectedEndDate = this.datepipe.transform(this.endDate, 'MM/dd/yyyy')
    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
    });
    let ot = {
      UserID: this.empId,
      EMPNO: this.empId,
      STARTDATE: selectedStartDate,
      ENDDATE: selectedEndDate,
      STARTTIME: this.startTime,
      ENDTIME: this.endTime,
      REMARKS: this.remarks,
      STATUS: Constants.LEAVE_STATUS_FOR_APPROVAL,
      SCHEDULEDTYPE: this.scheduleType,
      CreatedDate: null,
      IsActive: true,
    };

    if (this.subId != '') {
      ot['EMPNO'] = this.subId;
      ot['ApprovedOTHrs'] = this.approvedHours;
    }

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      if (this.id == '') {
        if (this.subId != '') {
          this.requestOTForSubordinate(ot);
        }
        else {
          this.requestOT(ot);
        }
      }
      else {
        ot['RecordId'] = this.id;
        this.updateOT(ot);
        this.getOT();
      }
    });
  }

  requestOT(ot: any) {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      ot['SessionID'] = val[Constants.KEY_RECORD_ID];
      ot['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      ot['Token'] = val[Constants.KEY_TOKEN];
      ot['AppPlatForm'] = Constants.APP_PLATFORM;
      ot['AppVersion'] = Constants.VERSION;

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/OTRequest/OTFile`, ot, {})
          .then(data => {
            if (data.data == null || data.data == undefined || !data.data) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              this.loading.dismiss();
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {
              this.loading.dismiss();

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

              this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
              return;
            }
            this.loading.dismiss();
            this.showDialog("DONE!", "Your overtime has been saved", true, "Great!");
          })
          .catch(error => {
            this.loading.dismiss();
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
          });
      });
    });
  }

  updateOT(ot: any) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      ot['RecordID'] = val[Constants.KEY_RECORD_ID];
      ot['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      ot['Token'] = val[Constants.KEY_TOKEN];
      ot['AppPlatForm'] = Constants.APP_PLATFORM;
      ot['AppVersion'] = Constants.VERSION;

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/OTRequest/UpdateOT`, ot, {})
          .then(data => {
            if (data.data == null || data.data == undefined || !data.data) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              this.loading.dismiss();
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {

              this.loading.dismiss();

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

              this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
              this.loading.dismiss();
              return;
            }
            this.loading.dismiss();
            this.showDialog("DONE!", "Your overtime has been saved", true, "Great!");
          })
          .catch(error => {
            this.loading.dismiss();
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
          });
      });
    });
  }

  getOT() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        IsActive: true,
        UserID: this.empId,
        EMPNO: this.empId,
        STARTDATE: "",
        ENDDATE: "",
        RecordID: this.id
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/OTRequest/GetOTFiled`, request, {})
          .then(data => {
            if (data.data == null || data.data == undefined) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              this.loading.dismiss();
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {
              this.loading.dismiss();

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

              this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
              return;
            }
            this.storage.set(Constants.KEY_OTDETAILS, jsonData['Value']['0']);
            this.loading.dismiss();

          })
          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            this.loading.dismiss();
          });
      });

    });

  }

  requestOTForSubordinate(ot: any) {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      ot['SessionID'] = val[Constants.KEY_RECORD_ID];
      ot['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      ot['Token'] = val[Constants.KEY_TOKEN];
      ot['AppPlatForm'] = Constants.APP_PLATFORM;
      ot['AppVersion'] = Constants.VERSION;

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/GetSubordinates/OTFile`, ot, {})
          .then(data => {
            if (data.data == null || data.data == undefined || !data.data) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              this.loading.dismiss();
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {
              this.loading.dismiss();

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

              this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
              return;
            }
            this.loading.dismiss();
            this.showDialog("DONE!", "Requested overtime has been saved", true, "Great!");
          })
          .catch(error => {
            this.loading.dismiss();
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
          });
      });
    });
  }

  async showDialog(title: string, message: string, closePage: boolean, buttonText: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [{
        text: buttonText,
        handler: () => {
          if (closePage) {
            //his.events.publish('reloadDetails');
            this.navCtrl.pop();
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  convert24Hours(time: string): string {
    var timeSplit: string[] = time.split(':');
    var tempHour: string = timeSplit[0];
    var min: string = timeSplit[1].substring(0, 2);
    var amPm: string = time.substring(time.length - 2, time.length);
    var hour;

    if (amPm == "PM") {
      hour = Number(tempHour) + 12;
      return String(hour) + ':' + min;

    } else {
      return tempHour + ':' + min;
    }
  }

  goBack() { this.navCtrl.back(); }
}
