import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as Constants from 'src/app/utils/constants.service';

@Component({
  selector: 'app-loansdetails',
  templateUrl: './loansdetails.page.html',
  styleUrls: ['./loansdetails.page.scss'],
})
export class LoansdetailsPage implements OnInit {
  loading;
  empId: string;
  id: string;
  results: any;
  recordId: string;
  loanName: string;
  loanDate: string;
  loanAmount: string;
  loanInterest: string;
  beginningPayment: string;
  beginningPaymentDate: string;
  beginingPaymentRemark: string;
  loanTotalPayment: string;
  loanBalance1: string;
  paymentStart: string;
  payment: string;
  paymentCount: string;
  status: string;
  loanBalance: string;


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
    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.storage.get(`${Constants.KEY_LOANDETAILS}`).then((val) => {
        this.id = val.RecordId;
        this.empId = val.LkUpEmployeeName;
        this.loanName = val.LoanName;
        this.loanDate = val.LoanDate;
        this.loanAmount = val.LoanAmount;
        this.loanInterest = val.LoanInterest;
        this.beginningPayment = val.BeginningPayment;
        this.beginningPaymentDate = val.BeginningPaymentDate;
        this.beginingPaymentRemark = val.BeginingPaymentRemark;
        this.loanTotalPayment = val.LoanTotalPayment;
        this.loanBalance1 = val.LoanBalance1;
        this.paymentStart = val.PaymentStart;
        this.payment = val.Payment;
        this.paymentCount = val.PaymentCount;
        this.status = val.Status;
        this.loanBalance = val.LoanBalance;

        this.loading.dismiss();
        this.getLoanDetails();
      });
    });
  }
  getLoanDetails() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        USER: val[Constants.KEY_USER_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        EmployeeId: val[Constants.KEY_USER_ID],
        ReferenceNo: this.id
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/Loan/GetLoanDetails`, request, {})
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

            this.results = jsonData['Value']['Table'];
            console.log(this.results);
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
            this.navCtrl.back();
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  getLoansSrc(loanName: string): string {
    if (loanName.toUpperCase() == "SSS SALARY LOAN") {
      return "assets/icon/ic_loans_sss.png";
    } else if (loanName.toUpperCase() == "SSS CALAMITY LOANS") {
      return "assets/icon/ic_loans_sss.png";
    } else if (loanName.toUpperCase() == "GABC UKAY SALES") {
      return "assets/icon/ic_loans_gabc.png";
    } else if (loanName.toUpperCase() == "GABC IN-HOUSE SALES") {
      return "assets/icon/ic_loans_gabc.png";
    } else if (loanName.toUpperCase() == "GABC COMPANY STORE") {
      return "assets/icon/ic_loans_gabc.png";
    } else if (loanName.toUpperCase() == "GOLDEN ABC WAREHOUSE SALES") {
      return "assets/icon/ic_loans_gabc.png";
    } else if (loanName.toUpperCase() == "RL ONLINE ORDERING") {
      return "assets/icon/ic_loans_gabc.png";
    } else if (loanName.toUpperCase() == "FOR ME UKAY UKAY") {
      return "assets/icon/ic_loans_gabc.png";
    } else if (loanName.toUpperCase() == "PAGIBIG MULTIPURPOSE LOAN") {
      return "assets/icon/ic_loans_pagibig.png";
    } else if (loanName.toUpperCase() == "HDMF LOANS") {
      return "assets/icon/ic_loans_pagibig.png";
    } else if (loanName.toUpperCase() == "PHILCARE - HMO DEPENDENTS") {
      return "assets/icon/ic_loans_philcare.png";
    } else if (loanName.toUpperCase() == "SECURITY BANK LOAN") {
      return "assets/icon/ic_loans_bank.png";
    } else if (loanName.toUpperCase() == "EQUICOM LOAN") {
      return "assets/icon/ic_loans_bank.png";
    } else if (loanName.toUpperCase() == "CITIFINANCIAL SALARY LOAN") {
      return "assets/icon/ic_loans_bank.png";
    } else if (loanName.toUpperCase() == "ADVANCES") {
      return "assets/icon/ic_loans_advances.png";
    } else if (loanName.toUpperCase() == "TAX WITHHELD") {
      return "assets/icon/ic_loans_tax.png";
    } else if (loanName.toUpperCase() == "EYE GLASS LOAN") {
      return "assets/icon/ic_loans_eye.png";
    } else if (loanName.toUpperCase() == "CAR LOAN") {
      return "assets/icon/ic_loans_car.png";
    } else if (loanName.toUpperCase() == "VACCINATION") {
      return "assets/icon/ic_loans_vac.png";
    } else if (loanName.toUpperCase() == "UNIFORM") {
      return "assets/icon/ic_loans_uniform.png";
    } else if (loanName.toUpperCase() == "EMERGENCY LOAN") {
      return "assets/icon/ic_loans_emergency.png";
    } else if (loanName.toUpperCase() == "MISCELLANEOUS") {
      return "assets/icon/ic_loans_misc.png";
    } else if (loanName.toUpperCase() == "LIFE SCIENCE") {
      return "assets/icon/ic_loans_life.png";
    } else {
      return "assets/icon/ic_loans_tax.png";
    }
  }

  goBack() { this.navCtrl.back(); }
}
