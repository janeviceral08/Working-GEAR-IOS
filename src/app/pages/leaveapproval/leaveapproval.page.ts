import { Component, OnInit } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { FilterMenuComponent } from '../../component/filter-menu/filter-menu.component';
import { MenuController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import * as Constants from 'src/app/utils/constants.service';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-leaveapproval',
  templateUrl: './leaveapproval.page.html',
  styleUrls: ['./leaveapproval.page.scss'],
})
export class LeaveapprovalPage implements OnInit {
  modalIsOpen: boolean;
  leaveStatusApprovalList: String[] = ["Approved", "Disapproved", "On Hold", "Escalate"];

  noError: boolean = true;
  errorMessage: string = Constants.MESSAGE_CON_ERROR;
  loadingDone: boolean = false;
  loading;
  empId;
  results: any;
  event;

  leave = {
    ShowAll: true
  };

  constructor(
    private loginService: LoginService,
    private modalController: ModalController,
    private storage: Storage,
    private router: Router,
    private menuCtrl: MenuController,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private httpApi: HTTP,
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.modalIsOpen = false;
    this.noError = true;
    this.errorMessage = Constants.MESSAGE_CON_ERROR;
    this.loadingDone = false;

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.getLeaveForApproval();
    });
  }

  refresh(event) {
    this.event = event;
    this.ionViewWillEnter();
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

  ionViewWillLeave() {
    this.showExitDialog();
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
          module: "LeaveApproval",
          data: this.leave
        }

      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {

        if (detail.data['isDismissed'] == 0) {

          this.leave['EmployeeId'] = Number(this.empId);
          this.leave['EmpName'] = detail.data['empName'];
          this.leave['LeaveType'] = detail.data['leaveType'];
          this.leave['LeaveFrom'] = detail.data['leaveFrom'];
          this.leave['LeaveReason'] = detail.data['reason'];
          this.leave['DateFrom'] = detail.data['dateFiledFrom'];
          this.leave['DateTo'] = (!detail.data['dateFiledTo'] ? detail.data['dateFiledFrom'] : detail.data['dateFiledTo']);
          this.leave['User'] = this.empId;
          this.leave['LeaveTo'] = (!detail.data['leaveTo'] ? detail.data['leaveFrom'] : detail.data['leaveTo']);
          this.leave['ShowAll'] = detail.data['showDirect'];

          if (!detail.data['empNumber']) {
            this.leave['EmployeeId'] = 0;
          } else {
            this.leave['EmployeeId'] = detail.data['empNumber'];
          }

          this.loadingDone = false;
          this.noError = true;

          this.getLeaveForApproval();
        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

  getLeaveForApproval() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      this.leave['User'] = this.empId;
      this.leave['LeaveRequestStatus'] = Constants.LEAVE_STATUS_FOR_APPROVAL;
      this.leave['SessionID'] = val[Constants.KEY_RECORD_ID];
      this.leave['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      this.leave['Token'] = val[Constants.KEY_TOKEN];
      this.leave['AppPlatForm'] = Constants.APP_PLATFORM;
      this.leave['AppVersion'] = Constants.VERSION;

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {


        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISApproval/GetForApproval`, this.leave, {})
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
              this.errorMessage = jsonData['Message'];
              return;
            }

            if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            var resultTemp = jsonData['Value'];

            if (resultTemp.length <= 0) {
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

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }

  getDateMonth(datename: string, procedure: number): string {

    if (datename.includes("MORNING")) {
      var reAm = / - MORNING/gi;
    } else if (datename.includes("AFTERNOON")) {
      var reAm = / - AFTERNOON/gi;
    }

    var newstr = datename.replace(reAm, "");

    var date = new Date(newstr);
    var CurrentMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];

    if (procedure == 1)
      return CurrentMonth[date.getMonth()].toString().toUpperCase();
    else
      return CurrentMonth[date.getMonth()];
  }

  getDateDate(datename: string): string {

    var date = new Date(datename.toString().substring(0, 10));

    return date.getDate().toString();
  }

  getDateYear(datename: string): string {

    var date = new Date(datename.toString().substring(0, 10));

    return date.getFullYear().toString();
  }

  getLongDate(datename: string): string {
    var month = this.getDateMonth(datename, 2);
    var date = this.getDateDate(datename);
    var year = this.getDateYear(datename);
    var fulldate = month + " " + date + ", " + year;
    return fulldate;
  }

  submitLeaveApproval(leave: any) {

    var status = (<HTMLSelectElement>document.getElementById(`select${leave['ID']}`)).value;
    var remarks = (<HTMLTextAreaElement>document.getElementById(`input${leave['ID']}`)).value;

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let leaveForApproval = {
        ID: leave['ID'],
        ApproverRemarks: remarks,
        ApprovalStatus: this.getStatusApproval(status),
        User: Number(this.empId),
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
              switch (status) {
                case "Approved": {
                  this.showDialog("DONE!", "You have approved this request", true, "Great!");
                  break;
                }
                case "Disapproved": {
                  this.showDialog("DONE!", "You have disapproved this request", true, "Okay");
                  break;
                }
                case "Escalate": {
                  this.showDialog("DONE!", "You have escalated this request", true, "Okay");
                  break;
                }
                case "On Hold": {
                  this.showDialog("DONE!", "You have put on hold this request", true, "Okay");
                  break;
                }
                default: {
                  this.showDialog("DONE!", "You have processed this request", true, "Great!");
                  break;
                }
              }
            })
            .catch(error => {
              this.loading.dismiss();
              this.showDialog("ERROR!", error, true, "Okay");
            });
        });
      });
    });
  }

  getStatusApproval(status: string): string {
    switch (status) {
      case "Approved": {
        return Constants.LEAVE_STATUS_APPROVED;
      }
      case "Disapproved": {
        return Constants.LEAVE_STATUS_DISAPPROVED;
      }
      case "Escalate": {
        return "ESCALATE";
      }
      case "On Hold": {
        return Constants.LEAVE_STATUS_ON_HOLD;
      }
      default:
        {
          return Constants.LEAVE_STATUS_APPROVED;
        }
    }
  }

  setLeaveDetails(item: any, type: string) {
    this.storage.set(Constants.KEY_LEAVEDETAILS, item);

    this.router.navigate(['/leavedetails', type, 'leaveapproval'])
  }

  async showDialog(title: string, message: string, closePage: boolean, buttonText: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [{
        text: buttonText,
        handler: () => {
          if (closePage) {
            this.ionViewWillEnter();
          }
        }
      }],
      backdropDismiss: false
    });

    await alert.present();
  }

}

