import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { FilterMenuComponent } from '../../component/filter-menu/filter-menu.component';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import * as Constants from 'src/app/utils/constants.service';

@Component({
  selector: 'app-leavesearch',
  templateUrl: './leavesearch.page.html',
  styleUrls: ['./leavesearch.page.scss'],
})
export class LeavesearchPage implements OnInit {
  modalIsOpen: boolean;
  results: any[];
  resultTemp: any[];

  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string = "CONNECTION ERROR";
  employeeId: string;

  activityResult: boolean = false;
  loading;
  event;

  leave = {
    ID: 0,
    EmployeeId: null,
    LeaveType: null,
    LeaveRequestType: null,
    LeaveNoOfDays: 0,
    LeaveFrom: null,
    LeaveFromTime: null,
    LeaveTo: null,
    LeaveToTime: null,
    LeaveReturn: null,
    LeaveRemark: null,
    LeaveReason: null,
    LeaveRequestStatus: null,
    Attachment: null,
    ApproverRemarks: null,
    CancelRemarks: null,
    ApprovalStatus: null,
    User: null,
    DateFrom: null,
    DateTo: null,
    EmpName: null,
    ShowAll: false
  };

  constructor(
    private modalController: ModalController,
    private httpApi: HTTP,
    private storage: Storage,
    private router: Router,
    private loginService: LoginService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {

    this.results = [];
    this.resultTemp = [];
    this.loadingDone = false;
    this.noError = true;

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.employeeId = val;

      this.leave['EmployeeId'] = Number(val);
      this.leave['User'] = val

      this.getLeaveList(this.leave);
    });

    this.activityResult = true;
  }

  getDateMonth(datename: string, procedure: number): string {
    var date = new Date(datename);
    var CurrntMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    if (procedure == 1)
      return CurrntMonth[date.getMonth()].toString().toUpperCase();
    else
      return CurrntMonth[date.getMonth()];
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

  getLeaveList(leave: any) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      leave['SessionID'] = val[Constants.KEY_RECORD_ID];
      leave['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      leave['Token'] = val[Constants.KEY_TOKEN];
      leave['AppPlatForm'] = Constants.APP_PLATFORM;
      leave['AppVersion'] = Constants.VERSION;

      console.log(leave)


      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {


        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/LeaveRequest/GetLeaveRequestDetails`, leave, {})
          .then(data => {

            if (this.event) {
              this.event.target.complete();
            }

            if (data.data == null || data.data == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            var jsonData = JSON.parse(data.data);

            console.log(jsonData)

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

            this.resultTemp = jsonData['Value'];

            if (this.resultTemp.length <= 0) {
              this.noError = false;
              this.errorMessage = "EMPTY";
              return;
            }

            this.noError = true;
            this.results = jsonData['Value'];
            this.loadingDone = true;
          })
          .catch(error => {
            if (this.event) {
              this.event.target.complete();
            }

            console.log(error)
            console.log(error.error)


            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }

  openModal() {
    if (!this.modalIsOpen)
      this.showModal();
  }

  async showModal() {
    this.modalIsOpen = true;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: FilterMenuComponent,
        cssClass: 'modalFilterMenu',
        animated: false,
        backdropDismiss: false,
        componentProps: {
          module: "LeaveSearch",
          data: this.leave
        }
      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {

        if (detail.data['isDismissed'] == 0) {

          this.leave['EmployeeId'] = Number(this.employeeId);
          this.leave['LeaveType'] = detail.data['leaveType'];
          this.leave['LeaveRequestType'] = detail.data['requestType'];
          this.leave['LeaveFrom'] = detail.data['leaveFrom'];
          this.leave['LeaveReason'] = detail.data['reason'];
          this.leave['LeaveRequestStatus'] = detail.data['status'];
          this.leave['DateFrom'] = detail.data['dateFiledFrom'];
          this.leave['DateTo'] = (!detail.data['dateFiledTo'] ? detail.data['dateFiledFrom'] : detail.data['dateFiledTo']);
          this.leave['User'] = this.employeeId;
          this.leave['LeaveTo'] = (!detail.data['leaveTo'] ? detail.data['leaveFrom'] : detail.data['leaveTo']);

          this.getLeaveList(this.leave);
        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

  MoreOptions(event: Event, item: any) {
    event.stopPropagation();

    switch (item['LEAVESTATUSDESC']) {
      case "FOR APPROVAL": {
        this.showForApprovalActions(item);
        break;
      }

      case "APPROVED": {
        this.showApprovedActions(item);
        break;
      }

      case "PLANNED": {
        this.showPlannedActions(item);
        break;
      }
    }
  }

  async showForApprovalActions(leave: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Action',
      buttons: [{
        text: 'Edit Leave',
        icon: 'create',
        handler: () => {
          this.router.navigate(['/leaveadd',
            leave['LEAVETYPE'],
            leave['LEAVEDAY'],
            leave['LEAVEFROM'],
            leave['LeaveFromTime'],
            leave['LEAVEREASONDESC'],
            (this.isEmpty(leave['LEAVEREMARK']) ? '' : leave['LEAVEREMARK']),
            leave['ID'],
            ''
          ]);
        }
      }, {
        text: 'Delete Leave',
        icon: 'trash',
        handler: () => {
          this.showDeleteDialog(leave);
        }
      }, {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  async showApprovedActions(leave: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Action',
      buttons: [{
        text: 'Cancel Leave',
        icon: 'close-circle-outline',
        handler: () => {
          this.showCancelDialog(leave);
        }
      }, {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  async showPlannedActions(leave: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Action',
      buttons: [{
        text: 'Submit Leave',
        icon: 'send',
        handler: () => {
          this.showSubmitDialog(leave);
        }
      }, {
        text: 'Edit Leave',
        icon: 'create',
        handler: () => {
          this.router.navigate(['/leaveadd',
            leave['LEAVETYPE'],
            leave['LEAVEDAY'],
            leave['LEAVEFROM'],
            leave['LeaveFromTime'],
            leave['LEAVEREASONDESC'],
            (this.isEmpty(leave['LEAVEREMARK']) ? '' : leave['LEAVEREMARK']),
            leave['ID'],
            ''
          ]);
        }
      }, {
        text: 'Delete Leave',
        icon: 'trash',
        handler: () => {
          this.showDeleteDialog(leave);
        }
      }, {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  public isEmpty(text: string): boolean {
    return (text == "" || text == undefined || text == null)
  }

  async showCancelDialog(leave: any) {
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

              this.cancelLeave(leave, data['remarks']);
            });

          }
        }
      ]
    });

    await alert.present();
  }

  deleteLeave(leave: any) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        ID: String(leave['ID']),
        USER: this.employeeId,
        LeaveRequestStatus: leave['LEAVESTATUS'],
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
              this.showDialog("Error", Constants.CONNECTION_ERROR);
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog("Error", Constants.CONNECTION_ERROR);
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

              this.showDialog("Error", jsonData['Message']);
              return;
            }

            this.showDialog("Success", "Done");
            this.loading.dismiss();
          })
          .catch(error => {
            this.showDialog("Error", Constants.CONNECTION_ERROR);
            this.loading.dismiss();
          });
      });
    });
  }

  submitLeave(leave: any) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        ID: String(leave['ID']),
        USER: this.employeeId,
        EmployeeId: this.employeeId,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: "1"
      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/LeaveRequest/SubmitPlannedLeave`, postData, {})
          .then(data => {

            if (data.data == null || data.data == undefined || !data.data) {
              this.showDialog("Error", Constants.CONNECTION_ERROR);
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog("Error", Constants.CONNECTION_ERROR);
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

              this.showDialog("Error", jsonData['Message']);
              return;
            }

            this.showDialog("Success", "Your changes have been saved for processing");
            this.loading.dismiss();
          })
          .catch(error => {
            this.showDialog("Error", Constants.CONNECTION_ERROR);
            this.loading.dismiss();
          });
      });
    });
  }

  cancelLeave(leave: any, cancelRemarks: string) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        ID: String(leave['ID']),
        USER: this.employeeId,
        LeaveRequestStatus: leave['LEAVESTATUS'],
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
              this.showDialog("Error", Constants.CONNECTION_ERROR);
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog("Error", Constants.CONNECTION_ERROR);
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

              this.showDialog("Error", jsonData['Message']);
              return;
            }

            this.showDialog("Success", "Your changes have been saved for processing");
            this.loading.dismiss();
          })
          .catch(error => {
            this.showDialog("Error", Constants.CONNECTION_ERROR);
            this.loading.dismiss();
          });
      });
    });
  }

  setLeaveDetails(item: any, type: string) {
    this.storage.set(Constants.KEY_LEAVEDETAILS, item);

    this.router.navigate(['/leavedetails', type, 'leavesearch'])
  }

  async showDialog(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [{
        text: 'Okay',
        handler: () => {
          this.ngOnInit();
        }
      }]
    });

    await alert.present();
  }

  async showDeleteDialog(leave: any) {
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

            this.deleteLeave(leave);
          });
        }
      }]
    });

    await alert.present();
  }

  async showSubmitDialog(leave: any) {
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

            this.submitLeave(leave);
          });
        }
      }]
    });

    await alert.present();
  }

  ionViewWillEnter() {
    if (this.activityResult) {
      this.ngOnInit();
    }
  }

  refresh(event) {
    if (event) {
      this.event = event;
    }

    this.ngOnInit();
  }

  backPressed() {

    this.navCtrl.pop();
  }
}