import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaveService } from 'src/app/services/leave.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { HTTP } from '@ionic-native/http/ngx';
import { ModalController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { SubmitApprovalComponent } from '../../component/submit-approval/submit-approval.component';
import * as Constants from 'src/app/utils/constants.service';

@Component({
  selector: 'app-leavedetails',
  templateUrl: './leavedetails.page.html',
  styleUrls: ['./leavedetails.page.scss'],
})

export class LeavedetailsPage implements OnInit {
  fromPage: string;
  id: string;
  leaveStatus: any;
  leaveType: any;
  results: Observable<any>;
  leaveFrom: any;
  leaveTo: any;
  leaveFromMonth: any;
  leaveFromDate: any;
  leaveFromTime: any;
  leaveToTime: any;
  leaveDesc: any;
  empName: any;
  leaveStatusDesc: any;
  leaveDay: any;
  leaveDates: any;
  requestTypeDesc: any;
  dateFile: any;
  deptDesc: any;
  leaveRemark: any;
  leaveReasonDesc: any;
  createdBy: any;
  dateCreated: any;
  approver: any;
  approvedDate: any;
  approverRemarks: any;
  leaveList: any;
  user: string;
  leave: any;
  item: any;
  type: string;
  loading;
  modalIsOpen: boolean;
  isForApproval: boolean;
  isUserLeave: boolean;
  isSubLeave: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private leaveService: LeaveService,
    private httpApi: HTTP,
    private router: Router,
    private navCtrl: NavController,
    private loginService: LoginService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private modalController: ModalController) { }

  ngOnInit() {
    this.fromPage = this.activatedRoute.snapshot.paramMap.get('page');
    this.storage.get(`${Constants.KEY_LEAVEDETAILS}`).then((val) => {
      this.id = val.ID;
      this.type = this.activatedRoute.snapshot.paramMap.get('leave');
      this.leaveStatus = val.LEAVESTATUSDESC;
      this.leaveType = val.LEAVETYPE;
      this.leaveFrom = val.LEAVEFROM;
      this.leaveFromTime = val.LeaveFromTime;
      this.leaveTo = val.LEAVETO;
      this.leaveToTime = val.LeaveToTime;
      this.leaveFromMonth = this.getDateMonth(val.LEAVEFROM, 1);
      this.leaveFromDate = this.getDateDate(val.LEAVEFROM);

      this.leaveDesc = val.LEAVEDESC;
      this.empName = val.EMPL_NAME;
      this.leaveStatusDesc = val.LEAVESTATUSDESC;
      this.leaveDay = val.LEAVEDAY;
      this.leaveDates = val.LEAVEDATES;
      this.requestTypeDesc = val.REQUESTTYPEDESC;
      this.dateFile = val.DATEFILE;
      this.deptDesc = val.DEPARTMENTDESC;
      this.leaveRemark = val.LEAVEREMARK;
      this.leaveReasonDesc = val.LEAVEREASONDESC;
      this.createdBy = val.CREATEDBY;
      this.dateCreated = val.DATECREATED;
      this.approver = val.APPROVER;
      this.approvedDate = val.APPROVEDDATE;
      this.approverRemarks = val.APPROVERREMARKS;

      console.log(val);

      this.loadingCtrl.create({
        message: "Loading..."
      }).then((overlay) => {

        this.loading = overlay;
        this.loading.present();

        this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
          this.user = val;
          if (this.type == "userleave") {
            this.isForApproval = false;
            this.isUserLeave = true;
            this.loading.dismiss();
          } else if (this.type == "subleave") {
            this.isSubLeave = true;
            this.isForApproval = true;
            this.isUserLeave = false;
            this.loading.dismiss();
          } else {
            let leave = {
              User: this.user,
              LeaveRequestStatus: Constants.LEAVE_STATUS_FOR_APPROVAL
            }
            this.isForApproval = true;
            this.isUserLeave = false;
            this.isSubLeave = false;
            this.loading.dismiss();
          }
        });
      });
    });
  }

  getDateMonth(datename: string, procedure: number): string {
    // this.loading.dismiss();
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

  deleteLeave() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        ID: String(this.id),
        USER: this.user,
        LeaveRequestStatus: this.leaveStatus,
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION
      };


      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/LeaveRequest/DeleteLeaveRequest`, postData, {})
          .then(data => {

            if (data.data == null || data.data == undefined || !data.data) {
              this.loading.dismiss();
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              return;
            }

            var jsonData = JSON.parse(data.data);
            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.loading.dismiss();
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
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

              this.showDialog("ERROR!", jsonData['Message'], true, "Okay");
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

  submitLeave() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        ID: String(this.id),
        USER: this.user,
        EmployeeId: this.user,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION
      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/LeaveRequest/SubmitPlannedLeave`, postData, {})
          .then(data => {

            if (data.data == null || data.data == undefined || !data.data) {
              this.loading.dismiss();
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              return;
            }
            var jsonData = JSON.parse(data.data);
            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.loading.dismiss();
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
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

              this.showDialog("ERROR!", jsonData['Message'], true, "Okay");
              return;
            }
            this.showDialog("DONE!", "Your leave has been saved", true, "Great!");
            this.loading.dismiss();
          })
          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            this.loading.dismiss();
          });
      });
    });
  }

  cancelLeave(cancelRemarks: string) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        ID: String(this.id),
        USER: this.user,
        LeaveRequestStatus: this.leaveStatus,
        CancelRemarks: cancelRemarks,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION
      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/LeaveRequest/CancelLeaveRequest`, postData, {})
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

              this.showDialog("ERROR!", jsonData['Message'], true, "Okay");
              return;
            }
            this.showDialog("DONE!", "You have cancelled this request", true, "Great!");
            this.loading.dismiss();
          })
          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            this.loading.dismiss();
          });
      });
    });
  }

  async showCancelDialog() {
    const alert = await this.alertController.create({
      header: 'Cancel Leave',
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
            this.loadingCtrl.create({
              message: "Loading..."
            }).then((overlay) => {

              this.loading = overlay;
              this.loading.present();
              this.cancelLeave(data['remarks']);
            });

          }
        }
      ]
    });

    await alert.present();
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

  async showDeleteDialog() {
    const alert = await this.alertController.create({
      header: 'Delete Leave',
      message: 'Are you sure you want to delete leave?',
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
            this.deleteLeave();
          });
        }
      }]
    });

    await alert.present();
  }

  public isEmpty(text: string): boolean {
    return (text == "" || text == undefined || text == null)
  }

  async showSubmitDialog() {
    const alert = await this.alertController.create({
      header: 'Submit Leave',
      message: 'Are you sure you want to submit planned leave?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary'
      }, {
        text: 'Submit',
        handler: () => {

          this.loadingCtrl.create({
            message: "Loading..."
          }).then((overlay) => {

            this.loading = overlay;
            this.loading.present();
            this.submitLeave();
          });
        }
      }]
    });

    await alert.present();
  }

  openEditLeave() {
    this.router.navigate(['/leaveadd',
      this.leaveType,
      this.leaveDay,
      this.leaveFrom,
      this.leaveFromTime,
      this.leaveReasonDesc,
      (this.isEmpty(this.leaveRemark) ? '' : this.leaveRemark),
      this.id,
      ''
    ]);
  }

  ngOnDestroy() {
    if (this.loading) {
      this.loading.dismiss();
    }
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
          data: ""
        }
      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {

        if (detail.data['isDismissed'] == 0) {

          this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

            let leaveForApproval = {
              ID: this.id,
              ApproverRemarks: (!detail.data['remarks'] ? "" : detail.data['remarks']),
              ApprovalStatus: detail.data['status'],
              User: Number(this.user),
              ShowAll: true,
              SessionID: val[Constants.KEY_RECORD_ID],
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


              this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

                this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISApproval/ApprovalProcess`, leaveForApproval, {})
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
                    this.showDialog("DONE!", "You have processed this request", true, "Great!");
                  })
                  .catch(error => {
                    this.loading.dismiss();
                    this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                  });
              });
            });
          });

        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

  back() {
    this.navCtrl.back();
  }

  goBack() { this.navCtrl.back(); }
}
