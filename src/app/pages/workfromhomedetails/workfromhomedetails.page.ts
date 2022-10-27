import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/utils/constants.service';
import { Storage } from '@ionic/storage';
import { LoadingController, AlertController, NavController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-workfromhomedetails',
  templateUrl: './workfromhomedetails.page.html',
  styleUrls: ['./workfromhomedetails.page.scss'],
})
export class WorkfromhomedetailsPage implements OnInit {
  loading;
  empId;
  id: any;
  requestedDate: any;
  attStatus: any;
  attStatusCode: any;
  dateIn: any;
  dateOut: any;
  timeIn: any;
  timeOut: any;
  reason: any;
  remark: any;
  reqTime: any;
  reasonCode: any;
  accomplishment: any;
  location: any;
  x: any;
  y: any;
  createdBy: any;
  createdDate: any;
  procBy: any;
  procDate: any;
  page: any;
  days: any;
  reqDateTo: any;
  timeTo: any;
  timeFrom: any;

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private httpApi: HTTP,
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.paramMap.get('page');

    this.storage.get(`${Constants.KEY_WFHDETAILS}`).then((val) => {
      this.id = val.ID;
      this.requestedDate = val.AttendanceRequestDate;
      this.attStatus = val.AttendanceStatus;
      this.attStatusCode = val.AttendanceStatusCode;
      this.dateIn = val.DateIn;
      this.dateOut = val.DateOut;
      this.timeIn = val.DateTimeIn;
      this.timeOut = val.DateTimeOut;
      this.reason = val.AttendanceReason;
      this.remark = val.AttendanceRemarks;
      this.accomplishment = val.Accomplishment;
      this.location = val.LocationDetails;
      this.x = val.XCoordinate;
      this.y = val.YCoordinate;
      this.reqTime = val.REQTIME;
      this.reasonCode = val.ReasonCode;
      this.createdBy = val.AttendanceCreatedBy;
      this.createdDate = val.AttendanceCreatedDate;
      this.procBy = val.ProcessedBy;
      this.procDate = val.ProcessedDate;
      this.days = val.NOOFDAYS;
      this.reqDateTo = val.REQUESTDATETO;
      this.timeTo = val.REQUESTTIMETO.trim();
      this.timeFrom = val.REQUESTTIMEFROM.trim();

    });

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
    });
  }

  getDateMonth(datename: string, procedure: number): string {
    var date = new Date(datename);
    var CurrentMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    if (procedure == 1)
      return this.toTitleCase(CurrentMonth[date.getMonth()]);
    else
      return CurrentMonth[date.getMonth()];
  }

  getDateDate(datename: string): string {
    var date = new Date(datename);
    return date.getDate().toString();
  }

  toTitleCase(txt: string): string {
    return txt.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  openEditAdvisory() {
    this.router.navigate(['/workfromhomeadd',
      this.id == null ? '' : this.id,
      this.requestedDate == null ? '' : this.requestedDate,
      this.days == null ? '' : this.days,
      this.reqDateTo == null ? '' : this.reqDateTo,
      this.remark == null ? '' : this.remark,
      '',
      this.timeFrom == null ? '' : this.timeFrom,
      this.timeTo == null ? '' : this.timeTo
    ]);

  }

  async showCancelDialog() {
    const alert = await this.alertController.create({
      header: 'Cancel Work From Home',
      inputs: [
        {
          name: 'remarks',
          type: 'text',
          placeholder: 'Cancel Remarks'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Ok',
          handler: (data) => {
            this.cancelAdvisory(data['remarks']);
          }
        }
      ]
    });

    await alert.present();
  }

  cancelAdvisory(remarks: string) {
    if (remarks == '' || remarks == null || remarks == undefined) {
      alert("Remarks is empty!");
      return;
    }

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

        let postData = {
          ID: this.id,
          CANCELREMARKS: remarks,
          USER: this.empId,
          RecordID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatForm: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION

        };

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/CancelAttendanceAdvisory`, postData, {})
            .then(data => {

              if (data.data == null || data.data == undefined || !data.data) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay", "");
                this.loading.dismiss();
                return;
              }

              var jsonData = JSON.parse(data.data);

              if (jsonData['Status'] != Constants.POST_SUCCESS) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay", "");
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

                this.showDialog("ERROR!", jsonData['Message'], false, "Okay", "");
                return;
              }

              this.showDialog("DONE!", "Your changes have been saved for processing", true, "Great!", "");
              this.loading.dismiss();
            })
            .catch(error => {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay", "");
              this.loading.dismiss();
            });
        });
      });
    });

  }

  async showDeleteDialog() {
    const alert = await this.alertController.create({
      header: 'Delete Work From Home',
      message: 'Are you sure you want to delete?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary'
      }, {
        text: 'Delete',
        handler: () => {

          this.loadingCtrl.create({
            message: "Loading..."
          }).then((overlay) => {

            this.loading = overlay;
            this.loading.present();

            this.deleteAdvisory();
          });
        }
      }]
    });

    await alert.present();
  }

  deleteAdvisory() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        ID: this.id,
        EMPNO: Number(this.empId),
        USER: this.empId
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/DeleteAttendanceAdvisory`, request, {})
          .then(data => {

            if (data.data == null || data.data == undefined || !data.data) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay", "");
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay", "");
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

              this.showDialog("ERROR!", jsonData['Message'], false, "Okay", "");
              return;
            }

            this.showDialog("DONE!", "You have deleted this request", true, "Okay", "DELETE");
            this.loading.dismiss();
          })
          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay", "");
            this.loading.dismiss();
          });
      });
    });
  }

  async showDialog(title: string, message: string, closePage: boolean, buttonText: string, fromFunction: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [{
        text: buttonText,
        handler: () => {
          if (closePage) {
            if (fromFunction == "DELETE") {
              this.router.navigate(['/main/workfromhome'])
            }
            else {
              this.navCtrl.back();
            }
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  goBack() { this.navCtrl.back(); }
}
