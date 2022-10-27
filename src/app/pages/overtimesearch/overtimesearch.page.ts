import { Component, OnInit } from '@angular/core';
import { FilterMenuComponent } from '../../component/filter-menu/filter-menu.component';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as Constants from 'src/app/utils/constants.service';
import { OverlayEventDetail } from '@ionic/core';
import { ModalController, ActionSheetController, AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-overtimesearch',
  templateUrl: './overtimesearch.page.html',
  styleUrls: ['./overtimesearch.page.scss'],
})
export class OvertimesearchPage implements OnInit {
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  modalIsOpen: boolean;
  event;
  empId: string;
  results: any;
  id: string;
  status: string;
  startDate: string;
  endDate: string;

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
    this.loadingDone = false;
    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.status = "";
      this.startDate = "";
      this.endDate = "";
      this.getOTList();
    });
  }

  getOTList() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        IsActive: true,
        UserID: this.empId,
        EMPNO: this.empId,
        STARTDATE: this.startDate,
        ENDDATE: this.endDate,
        STATUS: this.status
      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/OTRequest/GetOTFiled`, postData, {})
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

            if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            this.noError = true;
            this.results = jsonData['Value'];
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

  setOTDetails(item: any) {
    this.storage.set(Constants.KEY_OTDETAILS, item);

    this.router.navigate(['/overtimedetails', 'overtimesearch'])
  }

  openModal() {
    if (!this.modalIsOpen)
      this.showModal();
  }

  async showModal() {
    this.modalIsOpen = true;
    var data: string[] = [];
    data["LeaveFrom"] = this.startDate;
    data["LeaveTo"] = this.endDate;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: FilterMenuComponent,
        cssClass: 'modalFilterMenu',
        animated: false,
        backdropDismiss: false,
        componentProps: {
          module: "OTSearch",
          data: data
        }
      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {

        if (detail.data['isDismissed'] == 0) {

          this.status = detail.data['status'];
          this.startDate = detail.data['leaveFrom'];
          this.endDate = detail.data['leaveTo'];

          this.getOTList();
        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

  backPressed() {

    this.navCtrl.pop();
  }
}
