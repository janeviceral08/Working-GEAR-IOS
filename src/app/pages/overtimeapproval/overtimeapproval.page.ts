import { Component, OnInit } from '@angular/core';
import { FilterMenuComponent } from '../../component/filter-menu/filter-menu.component';
import { MenuController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import * as Constants from 'src/app/utils/constants.service';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-overtimeapproval',
  templateUrl: './overtimeapproval.page.html',
  styleUrls: ['./overtimeapproval.page.scss'],
})
export class OvertimeapprovalPage implements OnInit {
  modalIsOpen: boolean;
  noError: boolean = true;
  noErrorSub: boolean = true;
  otStatusApprovalList: String[] = ["Approved", "Disapproved"];
  errorMessage: string = Constants.MESSAGE_CON_ERROR;
  errorMessageSub: string = Constants.MESSAGE_CON_ERROR;
  loadingDone: boolean = false;
  loadingDoneSub: boolean = false;
  loading;
  loadingSub;
  empId;
  results: any;
  resultsSub: any;
  event;
  tempScheduleType: string = "All";
  OTType: String = "ForApprovals";
  OTTypeList: string[] = ["ForApprovals", "SubordinatesOvertime"];

  otModel = {
    SHOWALL: true
  };
  otModelSub = {
    SHOWALL: true
  };

  constructor(
    private loginService: LoginService,
    private modalController: ModalController,
    private storage: Storage,
    private router: Router,
    private menuCtrl: MenuController,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private httpApi: HTTP,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log('page enter');
    this.modalIsOpen = false;
    this.noError = true;
    this.errorMessage = Constants.MESSAGE_CON_ERROR;
    this.loadingDone = false;

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;

      this.storage.get(`${Constants.KEY_OTTYPES}`).then((val2) => {
        val2.forEach(element => {
          console.log(val2)
          if(val2[0]) {
            this.otModel["SCHEDULEDTYPE"] = val2[0]['DESCRIPTION'];
          }else{
            this.otModel["SCHEDULEDTYPE"] = this.tempScheduleType;
          }
        });
      });


      this.otModel["EMPNAME"] = "";
      this.otModel["EMPNO"] = "";
      this.otModel["STARTDATE"] = "";
      this.otModel["ENDDATE"] = "";
      this.otModel["SECTION"] = "S";
      // this.otModel["SCHEDULEDTYPE"] = "";

      this.getOTForApproval();
      // this.getSubordinatesOT();
    });
  }

  getOTForApproval() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      this.otModel["SessionID"] = val[Constants.KEY_RECORD_ID];
      this.otModel["SecurityStamp"] = val[Constants.KEY_SECURITY_STAMP];
      this.otModel["Token"] = val[Constants.KEY_TOKEN];
      this.otModel["AppPlatForm"] = Constants.APP_PLATFORM;
      this.otModel["AppVersion"] = Constants.VERSION;
      this.otModel["IsActive"] = true;
      this.otModel["STATUS"] = "LVS00001";
      this.otModel["CreatedDate"] = "";
      this.otModel["UserID"] = this.empId;

      let postData = {
        EMPNAME: this.otModel["EMPNAME"],
        EMPNO: this.otModel["EMPNO"],
        STARTDATE: this.otModel["STARTDATE"],
        ENDDATE: this.otModel["ENDDATE"],
        SECTION: this.otModel["SECTION"],
        SCHEDULEDTYPE: this.otModel["SCHEDULEDTYPE"],
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatform: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        STATUS: "LVS00001",
        CreatedDate: "",
        UserID: this.empId,
        IsActive: true
      };


      console.log(postData);
      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        console.log(value)
        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/OTApproval/GetForApproval`, postData, {})
          .then(data => {

            if (this.event) {
              this.event.target.complete();
            }

            if (data.data == null || data.data == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              this.loadingDone = true;
              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log(jsonData);
            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              this.loadingDone = true;
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
              this.loadingDone = true;
              return;
            }

            if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
              this.noError = false;
              this.errorMessage = "EMPTY";
              this.loadingDone = true;
              return;
            }

            var resultTemp = jsonData['Value'];

            if (resultTemp.length == 0) {
              this.noError = false;
              this.errorMessage = "EMPTY";
              this.loadingDone = true;
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

  getSubordinatesOT() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      this.otModelSub["UserID"] = this.empId;
      this.otModelSub['EMPNO'] = "";
      this.otModelSub['STARTDATE'] = "";
      this.otModelSub['ENDDATE'] = "";
      this.otModelSub['STATUS'] = "";
      this.otModelSub["SessionID"] = val[Constants.KEY_RECORD_ID];
      this.otModelSub['SCHEDULEDTYPE'] = "";
      this.otModelSub["SecurityStamp"] = val[Constants.KEY_SECURITY_STAMP];
      this.otModelSub["Token"] = val[Constants.KEY_TOKEN];
      this.otModelSub["AppPlatForm"] = Constants.APP_PLATFORM;
      this.otModelSub["CreatedDate"] = "";
      this.otModelSub["AppVersion"] = Constants.VERSION;
      this.otModelSub["IsActive"] = true;

      console.log(this.otModelSub);

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/OTApproval/GetSubordinatesOT`, this.otModelSub, {})
          .then(data => {

            if (this.event) {
              this.event.target.complete();
            }

            if (data.data == null || data.data == undefined) {
              this.noErrorSub = false;
              this.errorMessageSub = Constants.MESSAGE_CON_ERROR;
              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log(jsonData);
            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.noErrorSub = false;
              this.errorMessageSub = Constants.MESSAGE_CON_ERROR;
              this.loadingDoneSub = true;
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

              this.noErrorSub = false;
              this.errorMessageSub = jsonData['Message'];
              this.loadingDoneSub = true;
              return;
            }

            if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
              this.noErrorSub = false;
              this.errorMessageSub = "EMPTY";
              this.loadingDoneSub = true;
              return;
            }

            var resultTemp = jsonData['Value'];

            if (resultTemp.length <= 0) {
              this.noErrorSub = false;
              this.errorMessageSub = "EMPTY";
              this.loadingDoneSub = true;
              return;
            }

            this.noErrorSub = true;
            this.resultsSub = jsonData['Value'];
            this.loadingDoneSub = true;
          })
          .catch(error => {
            if (this.event) {
              this.event.target.complete();
            }

            this.noError = false;
            this.errorMessageSub = Constants.MESSAGE_CON_ERROR;
            this.loadingDoneSub = true;
          });
      });
    });
  }

  onSelectChange(ot: any) {
    var status = (<HTMLSelectElement>document.getElementById(`select${ot['ID']}`)).value;
    if (status == "Approved") {
      (<HTMLInputElement>document.getElementById(`applied${ot['ID']}`)).style.display = "block";
      (<HTMLInputElement>document.getElementById(`colApplied${ot['ID']}`)).style.display = "block";
    }
    else {
      (<HTMLInputElement>document.getElementById(`applied${ot['ID']}`)).style.display = "none";
      (<HTMLInputElement>document.getElementById(`colApplied${ot['ID']}`)).style.display = "none";
    }
  }

  submitOTApproval(ot: any) {

    var status = (<HTMLSelectElement>document.getElementById(`select${ot['ID']}`)).value;
    var remarks = (<HTMLTextAreaElement>document.getElementById(`input${ot['ID']}`)).value;
    var appliedHours = (<HTMLInputElement>document.getElementById(`applied${ot['ID']}`)).value;

    if (status == "Approved" && (appliedHours == "" || appliedHours == null)) {
      this.showDialog("ERROR!", "Please input Applied Hours", false, "Okay!");
      return
    }
    // else if (status == "Approved" && (remarks == "" || remarks == null)) {
    //   this.showDialog("ERROR!", "Please input remarks", false, "Okay!");
    //   return
    // }
    else if (status == "Disapproved" && (remarks == "" || remarks == null)) {
      this.showDialog("ERROR!", "Please input remarks", false, "Okay!");
      return
    }

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let otForApproval = {
        RecordID: ot['ID'],
        UserID: this.empId,
        ApproverRemarks: remarks,
        ApprovalStatus: this.getStatusApproval(status),
        AppliedHours: appliedHours,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        IsActive: true,
      };

      this.loadingCtrl.create({
        message: "Loading..."
      }).then((overlay) => {

        this.loading = overlay;
        this.loading.present();

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/OTApproval/ApprovalProcess`, otForApproval, {})
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

  getStatusApproval(status: string): string {
    switch (status) {
      case "Approved": {
        return Constants.LEAVE_STATUS_APPROVED;
      }
      case "Disapproved": {
        return Constants.LEAVE_STATUS_DISAPPROVED;
      }
      default:
        {
          return Constants.LEAVE_STATUS_APPROVED;
        }
    }
  }

  setOTDetails(item: any) {
    item["PageType"] = "Approver";
    console.log(item["PageType"]);
    console.log(item);
    this.storage.set(Constants.KEY_OTDETAILS, item);

    this.router.navigate(['/overtimedetails', 'overtimeapproval'])
  }

  setSubOTDetails(item: any) {
    this.storage.set(Constants.KEY_OTDETAILS, item);

    this.router.navigate(['/overtimedetails', 'overtimeapproval'])
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

  openModal() {
    if (!this.modalIsOpen)
      this.showModal();

  }

  async showModal() {
    this.modalIsOpen = true;
    //this.otModel["SCHEDULEDTYPE"] = this.tempScheduleType;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: FilterMenuComponent,
        cssClass: 'modalFilterMenu',
        animated: false,
        backdropDismiss: false,
        componentProps: {
          module: "OvertimeApproval",
          data: this.otModel
        }

      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      this.storage.get(`${Constants.KEY_OTTYPES}`).then((val) => {
        if (detail !== null) {
          console.log(detail);
          if (detail.data['isDismissed'] == 0) {

            this.otModel['EMPNAME'] = detail.data['empName'];
            this.otModel['EMPNO'] = detail.data['empNumber'];
            if (detail.data['leaveFrom'] != null)
              this.otModel['STARTDATE'] = detail.data['leaveFrom'];
            else
              this.otModel['STARTDATE'] = "";
            if (detail.data['leaveTo'] != null)
              this.otModel['ENDDATE'] = detail.data['leaveTo'];
            else
              this.otModel['ENDDATE'] = "";
            if (detail.data['sectionType'] != null)
              this.otModel['SECTION'] = detail.data['sectionType'];
            else
              this.otModel['SECTION'] = "-";

            if (detail.data['scheduleType'] != null) {
              this.tempScheduleType = detail.data['scheduleType'];
              if (detail.data['scheduleType'] == "All") {
                this.otModel['SCHEDULEDTYPE'] = "";
              }
              else {
                val.forEach(element => {
                  if (detail.data['scheduleType'] == element['DESCRIPTION']) {
                    this.otModel['SCHEDULEDTYPE'] = element['SEQCODE'];
                  }
                });
              }
            }
            else
              this.otModel['SCHEDULEDTYPE'] = "";

            this.otModel['SHOWALL'] = detail.data['showDirect'];

            this.loadingDone = false;
            this.noError = true;

            this.getOTForApproval();
          }
        }
        this.modalIsOpen = false;
      });
    });

    await modal.present();
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
    if (datename == null || datename == "") {
      return "";
    }
    else {
      var month = this.getDateMonth(datename, 2);
      var date = this.getDateDate(datename);
      var year = this.getDateYear(datename);
      var fulldate = month + " " + date + ", " + year;
      return fulldate;
    }
  }

  refresh(event) {
    this.event = event;
    this.ionViewWillEnter();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  ionViewWillLeave() {
    this.showExitDialog();
  }
}
