import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/utils/constants.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-antigentestqaapproval',
  templateUrl: './antigentestqaapproval.page.html',
  styleUrls: ['./antigentestqaapproval.page.scss'],
})
export class AntigentestqaapprovalPage implements OnInit {

  constructor(private storage: Storage,
    private router: Router,
    private menuCtrl: MenuController,
    private httpApi: HTTP,
    private modalController: ModalController,
    private navCtrl: NavController,
    private loginService: LoginService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    public plt: Platform) { }


  antigenQaApproval: String[] = ["Approved", "Disapproved"];
  loading;
  loadingDone: boolean = false;
  noError: boolean = true;
  empId;
  event;
  errorMessage: string;  
  antigenTestQaList: any[] = [];
  tempAntigenQaList:  any[] = [];
  searchInput: string;

  ngOnInit() {
    this.noError = true;
    this.errorMessage = Constants.MESSAGE_CON_ERROR;
    this.loadingDone = false;

    this.plt.ready().then(() => {

      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;
        this.getAntigenQaApprovalData();
      });
    });
  }

  getAntigenQaApprovalData() {
    console.log('getAntigenQaApprovalData');

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        EmployeeId:"",
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatform: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        UserID:this.empId,
        UserType: val[Constants.KEY_USER_TYPE],
        ProcessType:"employee-covid-antigen-qa-details-for-approval",
        ApprovalStatus:""
      }

      console.log(request);
      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/health/covid/antigen`, request, {})
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
              this.loadingDone = true;
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {
              this.loadingDone = true;

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

                case "No Available Data.":
                  this.noError = false;
                  this.errorMessage = "EMPTY";
                  return;

                default:

                  this.noError = false;
                  this.errorMessage = Constants.MESSAGE_CON_ERROR;
                  return;
              }
            }

            console.log(jsonData);

            this.antigenTestQaList = jsonData['Value']['tblEmployeeAntigenQADetailsForApproval'];
            this.tempAntigenQaList = jsonData['Value']['tblEmployeeAntigenQADetailsForApproval'];

            this.loadingDone = true;

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

  onInput() {
    console.log(this.searchInput)
    this.antigenTestQaList = [];

    if (this.searchInput == '' || !this.searchInput) {
      this.antigenTestQaList = this.tempAntigenQaList;
    } else {
      var input = this.searchInput.toLocaleUpperCase();

      this.tempAntigenQaList.forEach(element => {
        if (element['FirstName'].toLocaleUpperCase().includes(input) || element['EmployeeID'].toString().toLocaleUpperCase().includes(input) || element['LastName'].toLocaleUpperCase().includes(input)) {
          this.antigenTestQaList.push(element);
        }
      });

    }

  }

  backButton(){
    this.navCtrl.back();
  }

  getDateMonth(datename: string, procedure: number): string {
    if(!datename) {
      return '';
    }

    var date = new Date(datename);
    var CurrentMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    if (procedure == 1)
      return CurrentMonth[date.getMonth()].toUpperCase();
    else
      return CurrentMonth[date.getMonth()];
  }

  getDateDate(datename: string): string {
    if(!datename) {
      return '';
    }

    var date = new Date(datename);
    return date.getDate().toString();
  }

  toTitleCase(txt: string): string {
    return txt.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }


  insertAntigenResult(empId: any, result: string, remarks: string) {
    console.log('getAntigenTestData');

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

        let request = {
          UserID: this.empId,
          EmployeeId: empId,
          SessionID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatform: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION,
          ProcessType:"update-employee-covid-antigen-qa-details-for-approval",
          ApproveStatus: result,
          KitNumber: remarks
        }

        console.log(request);
        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/health/covid/antigen`, request, {})
            .then(data => {

              if (data.data == null || data.data == undefined) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                this.loading.dismiss();
                return;

              }

              var jsonData = JSON.parse(data.data);
              console.log(jsonData);

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

              console.log(jsonData);

              this.loading.dismiss();
              this.showDialog("DONE!", "You have processed this request", true, "Great!");

              this.ngOnInit()

            })

            .catch(error => {
              console.log(error);
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
          this.ngOnInit();
        }
      }]
    });

    await alert.present();
  }

  onSubmit(item: any) {
    
    if (!item) {
      alert("Error occurred, please try again later.");
      return;
    }


    var status = (<HTMLSelectElement>document.getElementById(`select${item['EmployeeID']}`)).value;
    var remarks = (<HTMLTextAreaElement>document.getElementById(`input${item['EmployeeID']}`)).value;

    if (!remarks) {
      alert("Please enter Kit Number.");
      return;
    }


    var result = (status.toLocaleUpperCase() == "APPROVED" ? "A" : "D");
    console.log(item['EmployeeID'], result, remarks);

    this.insertAntigenResult(item['EmployeeID'], result, remarks);
  }

  refresh(event) {
    this.event = event;
    this.ngOnInit();
  }

  retry(){
    this.ngOnInit();
  }

}


