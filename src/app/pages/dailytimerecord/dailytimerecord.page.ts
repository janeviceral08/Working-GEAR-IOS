import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { OverlayEventDetail } from '@ionic/core';
import * as Constants from 'src/app/utils/constants.service';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginService } from 'src/app/services/login.service';
import { FilterMenuComponent } from '../../component/filter-menu/filter-menu.component';

@Component({
  selector: 'app-dailytimerecord',
  templateUrl: './dailytimerecord.page.html',
  styleUrls: ['./dailytimerecord.page.scss'],
})
export class DailytimerecordPage implements OnInit {
  DTRType: string = "DTR";
  DTRTypeList: string[] = ["DTR", "OFFICIAL BUSINESS"];
  DTRList: any[] = [];
  OBList: any[] = [];
  loadingDone: boolean = false;
  noError: boolean = true;
  empId;
  event;
  dtrIsEmpty: boolean;
  obIsEmpty: boolean;
  errorMessage: string;
  tempResult: any;
  results: any;
  modalIsOpen: boolean;
  dtrModal: string[] = [];
  dtrDateFrom: any;
  dtrDateTo: any;
  obDateFrom: any;
  obDateTo: any;
  empSection: any;

  constructor(
    private storage: Storage,
    private router: Router,
    private menuCtrl: MenuController,
    private httpApi: HTTP,
    private loginService: LoginService,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadingDone = false;
    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.getDTR();
    });
  }

  getDTR() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        UserID: this.empId,
        EmployeeId: this.empId,
        Remarks: "",
        DateFrom_DTR: this.dtrDateFrom,
        DateTo_DTR: this.dtrDateTo,
        DateFrom_OB: this.obDateFrom,
        DateTo_OB: this.obDateTo
      }


      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        var uri: string = `${value[Constants.SERVER_URL]}/api/DTROB/GetDTROB`;
        var url: string = encodeURI(uri);

        this.httpApi.post(url, request, {})
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
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              this.loadingDone = true;
              return;
            }

            this.tempResult = jsonData['Value']["tblDTR"];
            if (this.tempResult.length == 0) {
              this.dtrIsEmpty = true;
              this.errorMessage = "EMPTY";
            }
            this.tempResult = jsonData['Value']["tblOB"];
            if (this.tempResult.length == 0) {
              this.obIsEmpty = true;
              this.errorMessage = "EMPTY";
            }

            this.noError = true;
            this.DTRList = jsonData['Value']["tblDTR"];
            this.OBList = jsonData['Value']["tblOB"];
            this.loadingDone = true;
            console.log(this.DTRList);
          })

          .catch(error => {
            console.log(error);

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

  setDTRDetails(item: any) {
    this.storage.set(Constants.KEY_DTRDETAILS, item);

    this.router.navigate(['/dailytimerecorddetails', 'dailytimerecord'])
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

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  openModal() {
    if (!this.modalIsOpen)
      this.showModal();
  }

  async showModal() {
    this.modalIsOpen = true;
    this.dtrModal["LeaveFrom"] = this.dtrDateFrom;
    this.dtrModal["LeaveTo"] = this.dtrDateTo;
    this.dtrModal["DateFrom"] = this.obDateFrom;
    this.dtrModal["DateTo"] = this.obDateTo;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: FilterMenuComponent,
        cssClass: 'modalFilterMenu',
        animated: false,
        backdropDismiss: false,
        componentProps: {
          module: "DailyTimeRecord",
          data: this.dtrModal
        }

      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        if (detail.data['isDismissed'] == 0) {

          this.dtrDateFrom = detail.data['leaveFrom'];
          this.dtrDateTo = detail.data['leaveTo'];
          this.obDateFrom = detail.data['dateFiledFrom'];
          this.obDateTo = detail.data['dateFiledTo'];
          console.log(this.dtrDateFrom, this.dtrDateTo, this.obDateFrom, this.obDateTo);
          this.loadingDone = false;
          this.noError = true;
          this.dtrIsEmpty = false;
          this.obIsEmpty = false;

          this.getDTR();
        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

  refresh(event) {
    this.event = event;
    this.ionViewWillEnter();
  }

}
