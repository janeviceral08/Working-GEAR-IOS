import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController } from '@ionic/angular';
import { FilterMenuComponent } from '../../component/filter-menu/filter-menu.component';
import { OverlayEventDetail } from '@ionic/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as Constants from 'src/app/utils/constants.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  empId: string;
  isFullyPaid: boolean = false;
  results: any;
  results2: any;

  constructor(private storage: Storage,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpApi: HTTP,
    private httpApi2: HTTP,
    private loginService: LoginService,
    private menuCtrl: MenuController,
    private modalController: ModalController,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadingDone = false;
    this.noError = true;
    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      if (this.isFullyPaid)
        this.getLoans();
      else
        this.getLoans2();
    });
  }

  getLoans() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        IsActive: true,
        UserID: this.empId,
        EmployeeId: this.empId,
        isFullyPaid: this.isFullyPaid,
        strIsFullyPaid: "1"
      };

      console.log(postData);

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/Loan/GetLoanHeader`, postData, {})
          .then(data => {

            if (data.data == null || data.data == undefined) {
              this.noError = false;
              this.loadingDone = true;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log(jsonData);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.noError = false;
              this.loadingDone = true;
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
              this.loadingDone = true;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }
            this.results = jsonData['Value']['Table'];

            if (this.results.length == 0) {
              this.noError = false;
              this.errorMessage = "EMPTY";
              this.loadingDone = true;
              return;
            }

            this.noError = true;
            this.loadingDone = true;

            console.log(this.results);
          })
          .catch(error => {

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }
  getLoans2() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        IsActive: true,
        UserID: this.empId,
        EmployeeId: this.empId,
        isFullyPaid: this.isFullyPaid,
        strIsFullyPaid: "0"
      };

      console.log(postData);

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi2.post(`${value[Constants.SERVER_URL]}/api/Loan/GetLoanHeader`, postData, {})
          .then(data => {

            if (data.data == null || data.data == undefined) {
              this.noError = false;
              this.loadingDone = true;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log(jsonData);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.noError = false;
              this.loadingDone = true;
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
              this.loadingDone = true;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }
            this.results2 = jsonData['Value']['Table'];

            if (this.results2.length == 0) {
              this.noError = false;
              this.errorMessage = "EMPTY";
              this.loadingDone = true;
              return;
            }

            this.noError = true;
            this.loadingDone = true;

            console.log(this.results2);
          })
          .catch(error => {

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }

  setLoanDetails(item: any) {
    item["PageType"] = "User";
    this.storage.set(Constants.KEY_LOANDETAILS, item);

    this.router.navigate(['/loansdetails'])
  }

  changeLoan() {
    this.isFullyPaid = !this.isFullyPaid;
    this.ionViewWillEnter();
  }

  refresh() {
    this.ionViewWillEnter();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
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
}







