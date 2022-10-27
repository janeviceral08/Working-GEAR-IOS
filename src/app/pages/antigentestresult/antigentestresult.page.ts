import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/utils/constants.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-antigentestresult',
  templateUrl: './antigentestresult.page.html',
  styleUrls: ['./antigentestresult.page.scss'],
})
export class AntigentestresultPage implements OnInit {

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

  antigenTestResultList: String[] = ["Negative", "Positive"];
  loading;
  loadingDone: boolean = false;
  noError: boolean = true;
  empId;
  event;
  errorMessage: string;
  antigenTestList: any[] = [];
  tempAntigenList: any[] = [];
  searchInput: string;

  ngOnInit() {
    this.noError = true;
    this.errorMessage = Constants.MESSAGE_CON_ERROR;
    this.loadingDone = false;

    this.plt.ready().then(() => {

      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;
        this.getAntigenTestData();
      });
    });
  }


  getAntigenTestData() {
    console.log('getAntigenTestData');

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        UserID: this.empId,
        EmployeeId: "",
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatform: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        ProcessType: "employee-covid-antigen-history",
        TestResult: "F"

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

            this.antigenTestList = jsonData['Value']['Table'];
            this.tempAntigenList = jsonData['Value']['Table'];
            console.log(this.antigenTestList);


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

  insertAntigenResult(empId: any, result: string, remarks: string, recordID: string) {
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
          RecordID: recordID,
          ProcessType: "insert-employee-covid-antigen-result",
          TestBy: this.empId,
          TestResult: result,
          Remarks: remarks
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

  onInput() {
    console.log(this.searchInput)
    this.antigenTestList = [];

    if (this.searchInput == '' || !this.searchInput) {
      this.antigenTestList = this.tempAntigenList;
    } else {
      var input = this.searchInput.toLocaleUpperCase();

      this.tempAntigenList.forEach(element => {
        if (element['EmployeeFullName'].toLocaleUpperCase().includes(input) || element['EmployeeID'].toLocaleUpperCase().includes(input) || element['KitNumber'].toLocaleUpperCase().includes(input)) {
          this.antigenTestList.push(element);
        }
      });

    }

  }

  onCancel() {
    this.searchInput = '';
    this.antigenTestList = this.tempAntigenList;


    console.log(this.searchInput)
  }

  onSubmit(item: any) {
    console.log(item)
    if (!item) {
      alert("Error occurred, please try again later.");
      return;
    }

    var status = (<HTMLSelectElement>document.getElementById(`select${item['RecordID']}`)).value;
    var remarks = (<HTMLTextAreaElement>document.getElementById(`input${item['RecordID']}`)).value;

    var result = (status.toLocaleUpperCase() == "NEGATIVE" ? "N" : "P");

    this.insertAntigenResult(item['EmployeeID'], result, remarks, item['RecordID']);
  }

  refresh(event) {
    this.event = event;
    this.ngOnInit();
  }

  retry(){
    this.ngOnInit();
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
}
