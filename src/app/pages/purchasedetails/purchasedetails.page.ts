import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as Constants from 'src/app/utils/constants.service';
import { OverlayEventDetail } from '@ionic/core';
import { FilterMenuComponent } from '../../component/filter-menu/filter-menu.component';

@Component({
  selector: 'app-purchasedetails',
  templateUrl: './purchasedetails.page.html',
  styleUrls: ['./purchasedetails.page.scss'],
})
export class PurchasedetailsPage implements OnInit {
  noError: boolean = true;
  errorMessage: string;
  loading;
  fromPage: string = "Online";
  empId: string;
  id: string;
  results: any;
  dateFrom: any;
  dateTo: any;
  canteenStatus: any = "U";
  purchaseModal: string[] = [];
  modalIsOpen: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private httpApi: HTTP,
    private loginService: LoginService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private alertController: AlertController,
    private storage: Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.fromPage = this.activatedRoute.snapshot.paramMap.get('purchase');
    this.dateTo = (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear();
    this.dateFrom = (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + (new Date().getFullYear() - 1);

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;

        this.storage.get(`${Constants.KEY_PURCHASEDETAILS}`).then((val) => {
          this.results = val;
          console.log(this.results);
          this.loading.dismiss();
        });
      });
    });

  }


  getOnlinePurchases() {

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

        let postData = {
          RecordID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatForm: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION,
          IsActive: true,
          UserID: this.empId,
          EmployeeId: this.empId,
          DateFrom: this.dateFrom,
          DateTo: this.dateTo
        };
        console.log(postData);
        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/OnlinePurchases/GetOnlinePurchasesDetails`, postData, {})
            .then(data => {

              if (data.data == null || data.data == undefined) {
                this.noError = false;
                this.errorMessage = Constants.MESSAGE_CON_ERROR;
                this.loading.dismiss();
                return;
              }

              var jsonData = JSON.parse(data.data);

              if (jsonData['Status'] != Constants.POST_SUCCESS) {
                this.noError = false;
                this.errorMessage = Constants.MESSAGE_CON_ERROR;
                this.loading.dismiss();
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
                this.loading.dismiss();
                return;
              }

              if (jsonData['Value']['Table'][0]['rwcount'] == "0") {
                this.noError = false;
                this.errorMessage = "EMPTY";
                this.loading.dismiss();
                return;
              }

              this.noError = true;
              this.results = jsonData['Value'];
              this.loading.dismiss();

              console.log(this.results);
            })
            .catch(error => {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              this.loading.dismiss();
            });
        });
      });
    });
  }

  getCanteenCredits() {
    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

        let postData = {
          RecordID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatForm: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION,
          IsActive: true,
          UserID: this.empId,
          EmployeeId: this.empId,
          DateFrom: this.dateFrom,
          DateTo: this.dateTo,
          Status: this.canteenStatus,
        };

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/Canteen/GetCanteenDetails`, postData, {})
            .then(data => {

              if (data.data == null || data.data == undefined) {
                this.noError = false;
                this.errorMessage = Constants.MESSAGE_CON_ERROR;
                this.loading.dismiss();
                return;
              }

              var jsonData = JSON.parse(data.data);

              if (jsonData['Status'] != Constants.POST_SUCCESS) {
                this.noError = false;
                this.errorMessage = Constants.MESSAGE_CON_ERROR;
                this.loading.dismiss();
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
                this.loading.dismiss();
                return;
              }

              if (jsonData['Value']['Table'][0]['Column1'] == "0") {
                this.noError = false;
                this.errorMessage = "EMPTY";
                this.loading.dismiss();
                return;
              }

              this.noError = true;
              this.results = jsonData['Value'];
              this.loading.dismiss();

              console.log(this.results);
            })
            .catch(error => {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              this.loading.dismiss();
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
            this.navCtrl.back();
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  openModal() {
    if (!this.modalIsOpen)
      this.showModal();
  }

  async showModal() {
    this.modalIsOpen = true;
    this.purchaseModal["purchaseDateFrom"] = this.dateFrom;
    this.purchaseModal["purchaseDateTo"] = this.dateTo;
    this.purchaseModal["canteenStatus"] = this.canteenStatus;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: FilterMenuComponent,
        cssClass: 'modalFilterMenu',
        animated: false,
        backdropDismiss: false,
        componentProps: {
          module: "PurchaseDetails" + this.fromPage,
          data: this.purchaseModal
        }

      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        if (detail.data['isDismissed'] == 0) {

          this.dateFrom = detail.data['purchaseDateFrom'];
          this.dateTo = detail.data['purchaseDateTo'];
          this.canteenStatus = detail.data['canteenStatus'];

          if (this.dateTo == undefined || this.dateTo == null) {

            this.dateTo = (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear();
          }

          if (this.fromPage == "Online")
            this.getOnlinePurchases();
          else
            this.getCanteenCredits();

        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

  goBack() { this.navCtrl.back(); }
}
