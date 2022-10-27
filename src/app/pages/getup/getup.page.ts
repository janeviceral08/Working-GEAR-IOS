import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import * as Constants from 'src/app/utils/constants.service';
import { MenuController, AlertController, NavController, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Alert } from 'selenium-webdriver';
import { Url } from 'url';

@Component({
  selector: 'app-getup',
  templateUrl: './getup.page.html',
  styleUrls: ['./getup.page.scss'],
})
export class GetupPage implements OnInit {
  loading;
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  empDonation: any;
  empId: string;
  desc: string;
  rate: any;
  rdoSelected: any;
  donePledge: boolean = false;
  isPledge: boolean = false;
  isAuthorize: boolean = false;
  showOthersInput: boolean = true;
  otherAmount: string;
  donation: string;
  disableAgree: boolean = true;
  donatedValue: string;
  thanksMessage: string;

  constructor(private loginService: LoginService,
    private menuCtrl: MenuController,
    private storage: Storage,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
    private httpApi: HTTP) { }

  ngOnInit() {
    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.storage.get(Constants.KEY_CHILDRENHOURRATE).then((val) => {
        this.rate = val;
        this.rate.pop();

        this.getDonation();
      });
    });
    this.rdoSelected = "0";
  }

  getDonation() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {
      let postData = {
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        IsActive: true,
        UserID: this.empId
      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/ChildrenHour/GetEmployeeDonation`, postData, {})
          .then(data => {
            console.log(data.data);
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
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            this.noError = true;
            this.empDonation = jsonData['Value'];
            console.log(this.empDonation);
            if (this.empDonation == null || this.empDonation == undefined || this.empDonation.length == 0) {
              this.donePledge = false;
            }
            else {
              this.donePledge = true;
              if (this.empDonation['0']['CHamount'] == "0") {

                this.donatedValue = this.rate[this.empDonation['0']['CHdonation']]['Description'].substring(this.rate[this.empDonation['0']['CHdonation']]['Description'].indexOf("(") + 1, this.rate[this.empDonation['0']['CHdonation']]['Description'].indexOf(")"));
              }
              else {
                this.donatedValue = "P" + this.empDonation['0']['CHamount'];
              }
              this.thanksMessage = "You have pledged " + this.donatedValue;
            }
            this.loadingDone = true;

          })
          .catch(error => {
            console.log(this.errorMessage);
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  rateChange(seqNo: string) {
    if (seqNo == "Others") {
      this.showOthersInput = false
    }
    else {
      this.showOthersInput = true
    }
  }

  clickIsPledge() {
    this.isPledge = !this.isPledge;
    if (this.isPledge && this.isAuthorize) {
      this.disableAgree = false;
    }
    else {
      this.disableAgree = true;
    }
  }

  clickIsAuthorize() {
    this.isAuthorize = !this.isAuthorize;
    if (this.isPledge && this.isAuthorize) {
      this.disableAgree = false;
    }
    else {
      this.disableAgree = true;
    }
  }

  clickAgree() {
    if (this.rdoSelected == null || this.rdoSelected == undefined) {
      alert("Please select donation amount");
      return;
    }
    if (this.rdoSelected == 'Others') {
      if (this.otherAmount == null || this.otherAmount == undefined || this.otherAmount == "0" || this.otherAmount == "") {
        alert("Please input amount");
        return;
      }
      this.donation = (this.rate.length).toString();
    }
    else {
      this.donation = this.rdoSelected;
      this.otherAmount = "";
    }
    this.donateSubmit();
  }

  donateSubmit() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let donate = {
        UserID: this.empId,
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        CreatedDate: null,
        IsActive: true,
        Donation: this.donation,
        Amount: this.otherAmount,
        IsAgree: true,
        IsPledge: true,
        IsAccept: true,
        strIsAgree: "1",
        strIsPledge: "1",
        strIsAccept: "1",
      };
      console.log(donate);

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/ChildrenHour/ProcessDonation`, donate, {})
          .then(data => {
            if (data.data == null || data.data == undefined || !data.data) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, false, "Okay");
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log(jsonData);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, false, "Okay");
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
            this.showDialog("DONE!", "Your pledge has been submitted!", true, "Great!");
          })
          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, false, "Okay");
          });
      });
    });
  }

  async showDialog(title: string, message: string, refreshPage: boolean, buttonText: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [{
        text: buttonText,
        handler: () => {
          if (refreshPage) {
            this.ngOnInit();
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

}
