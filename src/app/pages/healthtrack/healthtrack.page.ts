import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import * as Constants from 'src/app/utils/constants.service';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import * as moment from 'moment';


@Component({
  selector: 'app-healthtrack',
  templateUrl: './healthtrack.page.html',
  styleUrls: ['./healthtrack.page.scss'],
})
export class HealthtrackPage implements OnInit {

  vaccinated: any;
  firstVaccine: boolean;
  fullVaccine: boolean;
  loading;
  loadingDone: boolean = false;
  antigenLoadingDone: boolean;
  noError: boolean = true;
  empId;
  event;
  errorMessage: string;
  vaccineDate: any;
  latestAntigenTest: any;
  nextAntigenTest: any;
  needTestTitle: string = "ANTIGEN TEST";
  needTestBody: string = "NEEDS TESTING";
  testDate: any;

  vaccineTitle: string = "NOT YET";
  vaccineBody: string = "VACCINATED";

  antigenPositive: boolean;
  antigenNegative: boolean;
  antigenNeedTest: boolean;
  vaccineComplete: boolean = false;
  antigenComplete: boolean = false;

  accessAntigenResult: boolean;
  accessVaccineResult: boolean;
  accessAntigenQa: boolean;
  accessAdmin: boolean;

  constructor(
    private storage: Storage,
    private router: Router,
    private menuCtrl: MenuController,
    private httpApi: HTTP,
    private modalController: ModalController,
    private navCtrl: NavController,
    private loginService: LoginService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    public plt: Platform
  ) { }

  ngOnInit() {
    console.log('ngOnInit');

    this.loadingDone = false;
    this.antigenLoadingDone = false;

    this.antigenNeedTest = false;
    this.antigenNegative = false;
    this.antigenPositive = false;

    this.accessAntigenResult = false;
    this.accessVaccineResult = false;
    this.accessAdmin = false;

    this.plt.ready().then(() => {
      console.log('plt');

      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;
        this.getVaccineData();
        // this.getAntigenTestData();
      });
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  getVaccineData() {
    console.log('getVaccineData');

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        UserID: this.empId,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatform: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        UserType: val[Constants.KEY_USER_TYPE],
        ProcessType: "employee-health-summary",
        EmployeeID: this.empId,

      }

      console.log(request);
      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/health/summary`, request, {})
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
              this.vaccinated = false;
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
                  this.vaccinated = false;
                  return;

                default:
                  this.vaccineTitle = "ERROR";
                  this.vaccineBody = "OCCURRED";

                  this.noError = false;
                  this.errorMessage = Constants.MESSAGE_CON_ERROR;
                  return;
              }
            }
            var employeeVaccine = jsonData['Value']['EmployeeVaccine'][0];

            if(employeeVaccine) {
              var vaccineStatus = jsonData['Value']['EmployeeVaccine'][0]['ResultStatus'];
  
              switch (vaccineStatus) {
                case "FV":
                  this.vaccinated = true;
                  this.firstVaccine = false;
                  this.fullVaccine = true;
                  break;
  
                case "1":
                  this.vaccinated = true;
                  this.firstVaccine = true;
                  this.fullVaccine = false;
                  break;
  
                case "2":
                  this.vaccinated = true;
                  this.firstVaccine = false;
                  this.fullVaccine = true;
                  break;
  
                case "E":
                  this.vaccinated = false;
                  this.firstVaccine = false;
                  this.fullVaccine = false;
                  break;
  
                default:
                  this.vaccinated = false;
                  this.firstVaccine = false;
                  this.fullVaccine = false;
  
                  this.vaccineTitle = "ERROR";
                  this.vaccineBody = "OCCURRED";
                  break;
              }
  
              var vaccineDate = jsonData['Value']['EmployeeVaccine'][0]['LastVaccineDate'];
  
              if (vaccineDate) {
                this.vaccineDate = moment(vaccineDate, "MM/DD/YYYY").format("MMM DD.YYYY");
  
              } else {
                this.vaccinated = false;
                this.firstVaccine = false;
                this.fullVaccine = false;
  
                this.vaccineTitle = "ERROR";
                this.vaccineBody = "OCCURRED";
              }
            } else {
              this.vaccinated = false;
                this.firstVaccine = false;
                this.fullVaccine = false;
  
                this.vaccineTitle = "NOT YET";
                this.vaccineBody = "VACCINATED";
            }

            var antigenTest = jsonData['Value']['EmployeeAntigen'][0];

            if (antigenTest) {
              switch (antigenTest['ResultStatus']) {
                case "F":
                  this.antigenNeedTest = true;
                  this.antigenNegative = false;
                  this.antigenPositive = false;

                  this.latestAntigenTest = moment(antigenTest['TestDate'], "MM/DD/YYYY").format("MMM DD.YYYY");

                  break;

                case "N":
                  this.antigenNeedTest = false;
                  this.antigenNegative = true;
                  this.antigenPositive = false;

                  this.latestAntigenTest = moment(antigenTest['TestDate'], "MM/DD/YYYY").format("MMM DD.YYYY");
                  this.nextAntigenTest = moment(antigenTest['NextTestDate'], "MM/DD/YYYY").format("MMM DD.YYYY");

                  this.testDate = antigenTest['TestDate']

                  break;

                case "P":
                  this.antigenNeedTest = false;
                  this.antigenNegative = false;
                  this.antigenPositive = true;

                  this.latestAntigenTest = moment(antigenTest['TestDate'], "MM/DD/YYYY").format("MMM DD.YYYY");
                  this.nextAntigenTest = moment(antigenTest['NextTestDate'], "MM/DD/YYYY").format("MMM DD.YYYY");

                  this.testDate = antigenTest['TestDate']

                  break;


                default:
                  this.antigenNeedTest = true;
                  this.antigenNegative = false;
                  this.antigenPositive = false;

                  this.latestAntigenTest = "";

                  break;

              }
            } else {
              this.antigenNeedTest = true;
              this.antigenNegative = false;
              this.antigenPositive = false;

              this.latestAntigenTest = "";
            }

            var employeeAccess = jsonData['Value']['EmployeeAccess'][0];

            if(employeeAccess) {
              
                this.accessAntigenQa = employeeAccess['AntigenQAProcess'];
                this.accessAntigenResult = employeeAccess['AntigenProcess'];
                this.accessVaccineResult = employeeAccess['VaccineProcess'];
                this.accessAdmin = true;
            }else{
              this.accessAdmin = false;
            }

            this.loadingDone = true;
            this.noError = true;

          })

          .catch(error => {
            console.log(error);

            if (this.event) {
              this.event.target.complete();
            }

            this.vaccinated = false;
            this.firstVaccine = false;
            this.fullVaccine = false;

            this.vaccineTitle = "ERROR";
            this.vaccineBody = "OCCURRED";


            this.antigenNeedTest = true;
            this.antigenNegative = false;
            this.antigenPositive = false;

            this.latestAntigenTest = "";

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }

  getAntigenTestData() {
    console.log('getAntigenTestData');

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        UserID: this.empId,
        EmployeeId: this.empId,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatform: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        ProcessType: "employee-covid-antigen-history",
        TestResult: ""
      }


      console.log(request);
      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/health/covid/antigen`, request, {})
          .then(data => {

            this.antigenComplete = true;
            this.eventComplete();

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
              this.antigenLoadingDone = true;
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {
              this.antigenLoadingDone = true;

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
                  this.antigenNeedTest = true;

                  this.antigenNegative = false;
                  this.antigenPositive = false;

                  return;

                default:
                  this.antigenNeedTest = true;
                  this.needTestTitle = "ERROR";
                  this.needTestBody = "Try again later";

                  this.noError = false;
                  this.errorMessage = Constants.MESSAGE_CON_ERROR;
                  return;
              }
            }
            this.needTestTitle = "ANTIGEN TEST";
            this.needTestBody = "NEEDS TESTING";

            console.log(jsonData);
            var now = moment();

            var arr = jsonData['Value']['Table'];

            var nextTestDateArr = [];

            var nextTestDate;

            var latestAntigenData;

            arr.forEach(element => {
              if (element.NextTestDate) {
                nextTestDateArr.push(moment(element.NextTestDate, "MM/DD/YYYY"));
              }
            });

            if (nextTestDateArr.length > 0) {
              nextTestDate = moment.max(nextTestDateArr);
              console.log(nextTestDate)

              arr.forEach(element => {
                if (element.NextTestDate) {
                  console.log(element)

                  if (moment(element.NextTestDate, "MM/DD/YYYY").isSame(nextTestDate)) {
                    console.log(element)
                    latestAntigenData = element;

                    this.latestAntigenTest = moment(element.TestDate, "MM/DD/YYYY").format("MMM DD.YYYY");
                    this.nextAntigenTest = nextTestDate.format("MMM DD.YYYY");

                    this.testDate = element.TestDate

                  }
                }
              });

              if (nextTestDate.isBefore(now)) {
                this.antigenNeedTest = true;
                this.antigenNegative = false;
                this.antigenPositive = false;

              } else {

                this.antigenNegative = (latestAntigenData.TestResult == "NEGATIVE");
                this.antigenPositive = (latestAntigenData.TestResult == "POSITIVE");

                this.antigenNeedTest = false;
              }
            } else {
              this.antigenNeedTest = true;
              this.antigenNegative = false;
              this.antigenPositive = false;
            }

            this.antigenLoadingDone = true;

          })

          .catch(error => {
            console.log(error);
            this.eventComplete();
            this.antigenComplete = true;

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.antigenLoadingDone = true;
          });
      });
    });
  }

  formatDate(date) {

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return new Date(day + '-' + month + '-' + year);
  }

  openVaccineHistory() {
    this.router.navigate(['/vaccinehistory']);
  }

  getDateMonth(datename: string, procedure: number): string {
    if (!datename) {
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
    if (!datename) {
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

  refresh(event) {
    this.event = event;
    this.ngOnInit();
  }

  eventComplete() {
    if (this.vaccineComplete && this.antigenComplete) {
      if (this.event) {
        this.event.target.complete();
      }
      this.vaccineComplete = false;
      this.antigenComplete = false;
    }
  }


}
