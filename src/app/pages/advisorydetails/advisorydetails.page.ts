import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { SubmitApprovalComponent } from '../../component/submit-approval/submit-approval.component';
import * as Constants from 'src/app/utils/constants.service';


@Component({
  selector: 'app-advisorydetails',
  templateUrl: './advisorydetails.page.html',
  styleUrls: ['./advisorydetails.page.scss'],
})
export class AdvisorydetailsPage implements OnInit {
  fromPage: string;
  loading;
  empId: string;
  type: string;
  id: string;
  subid: string;
  advisoryStatus: string;
  results: any;
  isForApproval: boolean;
  modalIsOpen: boolean;
  isSubAdvisory: boolean;
  isUserAdvisory: boolean;
  activityResult: boolean = false;
  advisory: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private httpApi: HTTP,
    private loginService: LoginService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private alertController: AlertController,
    private storage: Storage
  ) { }

  ngOnInit() {

    // this.activityResult = true;
  }

  ionViewWillEnter() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.subid = this.activatedRoute.snapshot.paramMap.get('subid');
    this.type = this.activatedRoute.snapshot.paramMap.get('details');
    this.advisoryStatus = this.activatedRoute.snapshot.paramMap.get('status');
    this.fromPage = this.activatedRoute.snapshot.paramMap.get('page');

    console.log(this.advisoryStatus);

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;
        if (this.type == "useradvisory") {
          this.isForApproval = false;
          this.isSubAdvisory = false;
          this.isUserAdvisory = true;

          this.getAdvisory();
        } else if (this.type == "subadvisory") {
          this.isSubAdvisory = true;
          this.isForApproval = true;
          this.isUserAdvisory = false;

          this.getSubProfile();

        } else {
          this.isForApproval = true;
          this.isSubAdvisory = false;
          this.isUserAdvisory = false;

          this.getAdvisoryForApproval();
        }
      });
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
        EMPNO: val[Constants.KEY_USER_ID],
        ID: this.id
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisory/GetAttendanceAdvisory`, request, {})
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
            this.results = jsonData['Value'];

            this.results.forEach(element => {
              if (String(element['ID']) == this.id) {
                this.advisoryStatus = element['STATUS'];
                this.loading.dismiss();
              }
            });
            this.loading.dismiss();

          })
          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            this.loading.dismiss();
          });
      });
    });

  }

  advisoryItem: any;

  setItem(advisory: any) {
    this.advisoryItem = advisory;
  }

  getAdvisoryForApproval() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let advisory = {
        User: Number(this.empId),
        STATUSCODE: Constants.LEAVE_STATUS_FOR_APPROVAL,
        SHOWALL: true,
        ID: this.id,
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION

      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {


        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisoryApproval/GetAllForApproval`, advisory, {})
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
              this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
              this.loading.dismiss();
              return;
            }

            this.results = jsonData['Value'];
            this.loading.dismiss();
          })
          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            this.loading.dismiss();
          });
      });
    });
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

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/GetSubordinates/GetDetails?UserID=${this.empId}&subordinateID=${this.subid}`, request, {})
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
              this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
              this.loading.dismiss();
              return;
            }

            this.results = jsonData['Value']['tblAttendanceAdvisory'];
            this.loading.dismiss();

          })

          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            this.loading.dismiss();
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
            if (this.fromPage != "subprofile")
              this.navCtrl.navigateBack(["/main//" + this.fromPage]);
            else
              this.navCtrl.back();
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  getDateMonth(datename: string, procedure: number, advisory: any): string {
    this.advisory = advisory;
    var date = new Date(datename.toString().substring(0, 10));
    var CurrntMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    if (procedure == 1)
      return CurrntMonth[date.getMonth()].toString().toUpperCase();
    else
      return CurrntMonth[date.getMonth()];
  }

  getDateDate(datename: string): string {
    var date = new Date(datename.toString().substring(0, 10));
    return date.getDate().toString();
  }

  getDateYear(datename: string): string {
    var date = new Date(datename.toString().substring(0, 10));
    return date.getFullYear().toString();
  }

  toTitleCase(txt: string): string {
    return txt.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  back() {
    this.navCtrl.back();
  }

  openModal() {
    if (!this.modalIsOpen)
      this.showModal();

  }

  async showModal() {
    this.modalIsOpen = true;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: SubmitApprovalComponent,
        cssClass: 'modalSubmitApproval',
        animated: true,
        backdropDismiss: false,
        componentProps: {
          data: "advisoryapproval"
        }
      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        if (detail.data['isDismissed'] == 0) {
          if (this.advisoryItem['REQUESTTYPECODE'] == Constants.ATD_TYPE_CODE_WFH) {
            this.processWfhApproval(detail);
            return;
          }

          this.processAtdApproval(detail);
        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

  processAtdApproval(detail: any) {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let advisoryForApproval = {
        ID: this.id,
        ApproverRemarks: detail.data['remarks'],
        ApprovalStatus: this.getStatusApproval(detail.data['status']),
        User: Number(this.empId),
        ShowAll: true,
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION

      };

      this.loadingCtrl.create({
        message: "Loading..."
      }).then((overlay) => {

        this.loading = overlay;
        this.loading.present();

        console.log("processAtdApproval " + advisoryForApproval)

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisoryApproval/ApprovalProcess`, advisoryForApproval, {})
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
              switch (detail.data['status']) {
                case "Approve": {
                  this.showDialog("DONE!", "You have approved this request", true, "Great!");
                  break;
                }
                case "Disapprove": {
                  this.showDialog("DONE!", "You have disapproved this request", true, "Okay");
                  break;
                }
                case "Cancel": {
                  this.showDialog("DONE!", "You have cancelled this request", true, "Okay");
                  break;
                }
                case "On Hold": {
                  this.showDialog("DONE!", "You have put on hold this request", true, "Okay");
                  break;
                }
                default: {
                  this.showDialog("DONE!", "You have processed this request", true, "Okay");
                  break;
                }
              }
            })
            .catch(error => {
              this.loading.dismiss();
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            });
        });
      });
    });
  }

  processWfhApproval(detail: any) {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let advisoryForApproval = {
        ID: this.id,
        ShowAll: true,
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,

        USER: Number(this.empId),
        SessionID: val[Constants.KEY_RECORD_ID],
        APPROVERREMARKS: detail.data['remarks'],
        APPROVALSTATUS: this.getStatusApproval(detail.data['status']),
      };

      this.loadingCtrl.create({
        message: "Loading..."
      }).then((overlay) => {

        this.loading = overlay;
        this.loading.present();


        console.log("processWfhApproval " + advisoryForApproval)


        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/ApprovalProcess`, advisoryForApproval, {})
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
              switch (detail.data['status']) {
                case "Approve": {
                  this.showDialog("DONE!", "You have approved this request", true, "Great!");
                  break;
                }
                case "Disapprove": {
                  this.showDialog("DONE!", "You have disapproved this request", true, "Okay");
                  break;
                }
                case "Cancel": {
                  this.showDialog("DONE!", "You have cancelled this request", true, "Okay");
                  break;
                }
                case "On Hold": {
                  this.showDialog("DONE!", "You have put on hold this request", true, "Okay");
                  break;
                }
                default: {
                  this.showDialog("DONE!", "You have processed this request", true, "Okay");
                  break;
                }
              }
            })
            .catch(error => {
              this.loading.dismiss();
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            });
        });
      });
    });
  }

  getStatusApproval(status: string): string {
    switch (status) {
      case "Approve": {
        return Constants.LEAVE_STATUS_APPROVED;
      }
      case "Disapprove": {
        return Constants.LEAVE_STATUS_DISAPPROVED;
      }
      case "Cancel": {
        return Constants.LEAVE_STATUS_CANCELLED;
      }
      case "On Hold": {
        return Constants.LEAVE_STATUS_ON_HOLD;
      }
    }
  }

  openEditAdvisory() {
    if (!this.isSubAdvisory) {
      this.router.navigate(['/advisoryadd',
        this.advisory['ID'] == null ? '' : this.advisory['ID'],
        this.advisory['REQUESTTYPECODE'] == null ? '' : this.advisory['REQUESTTYPECODE'],
        this.advisory['REQUESTDATE'] == null ? '' : this.advisory['REQUESTDATE'],
        this.advisory['REQTIME'] == null ? '' : this.advisory['REQTIME'],
        this.advisory['HRS'] == null ? '' : this.advisory['HRS'],
        this.advisory['DAYS'] == null ? '' : this.advisory['DAYS'],
        this.advisory['REASONCODE'] == null ? '' : this.advisory['REASONCODE'],
        this.advisory['REMARKS'] == null ? '' : this.advisory['REMARKS'],
        this.advisory['STARTTIME'] == null ? '' : this.advisory['STARTTIME'],
        this.advisory['DATEOFDUTY'] == null ? '' : this.advisory['DATEOFDUTY'],
        '',
        ''
      ]);
    }
    else {
      this.router.navigate(['/advisoryadd',
        this.advisory['ID'] == null ? '' : this.advisory['ID'],
        this.advisory['REQUESTTYPECODE'] == null ? '' : this.advisory['REQUESTTYPECODE'],
        this.advisory['REQUESTDATE'] == null ? '' : this.advisory['REQUESTDATE'],
        this.advisory['REQTIME'] == null ? '' : this.advisory['REQTIME'],
        this.advisory['HRS'] == null ? '' : this.advisory['HRS'],
        this.advisory['DAYS'] == null ? '' : this.advisory['DAYS'],
        this.advisory['REASONCODE'] == null ? '' : this.advisory['REASONCODE'],
        this.advisory['REMARKS'] == null ? '' : this.advisory['REMARKS'],
        this.advisory['STARTTIME'] == null ? '' : this.advisory['STARTTIME'],
        this.advisory['DATEOFDUTY'] == null ? '' : this.advisory['DATEOFDUTY'],
        this.subid,
        'fromSubsProfile'
      ]);
    }
  }

  async showDeleteDialog() {
    const alert = await this.alertController.create({
      header: 'Delete Attendance Advisory',
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

            this.deleteAdvisory(this.advisory);
          });
        }
      }]
    });

    await alert.present();
  }

  async showCancelDialog() {
    const alert = await this.alertController.create({
      header: 'Cancel Attendance Advisory',
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
            this.cancelAdvisory(this.advisory, data['remarks']);
          }
        }
      ]
    });

    await alert.present();
  }

  cancelAdvisory(advisory: any, remarks: string) {
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
          ID: String(advisory['ID']),
          CANCELREMARKS: remarks,
          USER: this.empId,
          RecordID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatForm: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION

        };

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisory/CancelAttendanceAdvisory`, postData, {})
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

              this.showDialog("DONE!", "Your changes have been saved for processing", true, "Great!");
              this.loading.dismiss();
            })
            .catch(error => {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              this.loading.dismiss();
            });
        });
      });
    });

  }

  deleteAdvisory(advisory: any) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        ID: String(advisory['ID']),
        EMPNO: Number(this.empId),
        USER: this.empId
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${Constants.API_ENDPOINT}/api/HRISAttendanceAdvisory/DeleteAttendanceAdvisory`, request, {})
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

            this.showDialog("DONE!", "You have deleted this request", true, "Okay");
            this.loading.dismiss();
          })
          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            this.loading.dismiss();
          });
      });
    });
  }

  goBack() { this.navCtrl.back(); }
}
