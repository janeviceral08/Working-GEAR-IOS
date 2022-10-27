import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { LoginService } from 'src/app/services/login.service';
import { FilterMenuComponent } from '../../component/filter-menu/filter-menu.component';
import { MenuController, AlertController, LoadingController } from '@ionic/angular';
import * as Constants from 'src/app/utils/constants.service';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-wfhapproval',
  templateUrl: './wfhapproval.page.html',
  styleUrls: ['./wfhapproval.page.scss'],
})
export class WfhapprovalPage implements OnInit {

  modalIsOpen: boolean;
  advisoryStatusApprovalList: String[] = ["Approved", "Cancel", "Disapproved", "On Hold"];

  noError: boolean = true;
  errorMessage: string = Constants.MESSAGE_CON_ERROR;
  loadingDone: boolean = false;
  loading;
  empId;
  results: any;
  event;
  statusRequest;

  advisory = {
    SHOWALL: true,
    strSHOWALL: "1",
    REQUESTTYPECODE: Constants.ATD_TYPE_CODE_WFH
  };

  constructor(private storage: Storage,
    private menuCtrl: MenuController,
    private alertController: AlertController,
    private loginService: LoginService,
    private loadingCtrl: LoadingController,
    private modalController: ModalController,
    private httpApi: HTTP,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.modalIsOpen = false;
    this.noError = true;
    this.errorMessage = Constants.MESSAGE_CON_ERROR;
    this.loadingDone = false;
    this.results = [];

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.getAdvisoryForApproval();
    });
  }

  getAdvisoryForApproval() {
    this.advisory['User'] = Number(this.empId);
    this.advisory['STATUSCODE'] = Constants.LEAVE_STATUS_FOR_APPROVAL;

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      this.advisory['RecordID'] = val[Constants.KEY_RECORD_ID];
      this.advisory['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      this.advisory['Token'] = val[Constants.KEY_TOKEN];
      this.advisory['AppPlatForm'] = Constants.APP_PLATFORM;
      this.advisory['AppVersion'] = Constants.VERSION;

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {


        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisoryApproval/GetAllForApproval`, this.advisory, {})
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

  submitApproval(advisory: any) {
    console.log(advisory)

    if (advisory['REQUESTTYPECODE'] == Constants.ATD_TYPE_CODE_WFH) {
      this.submitWfhApproval(advisory);
      return;
    }

    this.submitAtdApproval(advisory);
  }

  submitAtdApproval(advisory: any) {

    var status = (<HTMLSelectElement>document.getElementById(`select${advisory['ID']}`)).value;
    var remarks = (<HTMLTextAreaElement>document.getElementById(`input${advisory['ID']}`)).value;

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let advisoryForApproval = {
        ID: advisory['ID'],
        ApproverRemarks: remarks,
        ApprovalStatus: this.getStatusApproval(status),
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
              switch (status) {
                case "Approved": {
                  this.showDialog("DONE!", "You have approved this request", true, "Great!");
                  break;
                }
                case "Disapproved": {
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
                  this.showDialog("DONE!", "You have processed this request", true, "Great!");
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

  submitWfhApproval(advisory: any) {

    var status = (<HTMLSelectElement>document.getElementById(`select${advisory['ID']}`)).value;
    var remarks = (<HTMLTextAreaElement>document.getElementById(`input${advisory['ID']}`)).value;

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let advisoryForApproval = {
        ID: advisory['ID'],
        // ApproverRemarks: remarks,
        // ApprovalStatus: this.getStatusApproval(status),
        // User: Number(this.empId),
        ShowAll: true,
        // RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,

        USER: Number(this.empId),
        SessionID: val[Constants.KEY_RECORD_ID],
        APPROVERREMARKS: remarks,
        APPROVALSTATUS: this.getStatusApproval(status),

      };

      this.loadingCtrl.create({
        message: "Loading..."
      }).then((overlay) => {

        this.loading = overlay;
        this.loading.present();

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
              switch (status) {
                case "Approved": {
                  this.showDialog("DONE!", "You have approved this request", true, "Great!");
                  break;
                }
                case "Disapproved": {
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
                  this.showDialog("DONE!", "You have processed this request", true, "Great!");
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
      }]
    });

    await alert.present();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  getStatusApproval(status: string): string {
    switch (status) {
      case "Approved": {
        return Constants.LEAVE_STATUS_APPROVED;
      }
      case "Disapproved": {
        return Constants.LEAVE_STATUS_DISAPPROVED;
      }
      case "Cancel": {
        return Constants.LEAVE_STATUS_CANCELLED;
      }
      case "On Hold": {
        return Constants.LEAVE_STATUS_ON_HOLD;
      }
      default: {
        return Constants.LEAVE_STATUS_APPROVED;
      }
    }
  }

  refresh(event) {
    this.event = event;
    this.ionViewWillEnter();
  }

  getDateMonth(datename: string, procedure: number): string {
    var reAm = / - MORNING/gi;
    // var rePm = / - AFTERNOON/gi; 

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

  openModal() {
    if (!this.modalIsOpen)
      this.showModal();
  }

  async showModal() {
    this.modalIsOpen = true;
    console.log(this.advisory);
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: FilterMenuComponent,
        cssClass: 'modalFilterMenu',
        animated: false,
        backdropDismiss: false,
        componentProps: {
          module: "WfhApproval",
          data: this.advisory
        }

      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {

        if (detail.data['isDismissed'] == 0) {

          this.advisory['EMPL_NAME'] = detail.data['empName'];
          this.advisory['EMPNO'] = detail.data['empNumber'];
          this.advisory['DATEFROM'] = detail.data['advisoryFrom'];
          this.advisory['DATETO'] = detail.data['advisoryTo'];
          this.advisory['SHOWALL'] = detail.data['showDirect'];
          this.advisory['strSHOWALL'] = detail.data['showDirect'] == true ? "1" : "0";

          this.getAdvisoryForApproval();
        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

}
