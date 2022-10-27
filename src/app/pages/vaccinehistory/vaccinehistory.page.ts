import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/utils/constants.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-vaccinehistory',
  templateUrl: './vaccinehistory.page.html',
  styleUrls: ['./vaccinehistory.page.scss'],
})
export class VaccinehistoryPage implements OnInit {
  vaccinationList: any[] = [];

  vaccinated: any;
  loading;
  loadingDone: boolean = false;
  noError: boolean = true;
  empId;
  event;
  errorMessage: string;
  vaccineDate: any;


  constructor(    private storage: Storage,
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
    this.plt.ready().then(() => {
      console.log('plt');

      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;
        this.getVaccineData();
      });
    });  

  }

  getVaccineData() {
    console.log('getVaccineData');

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        UserID: this.empId,
        EmployeeId: this.empId,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatform: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        ProcessType: "employee-covid-vaccine-history"
      }
    
      console.log(request);
      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/health/covid/vaccine`, request, {})
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
              // this.loadingDone = true;
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {
              this.vaccinated = false;

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
  
              }              

              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              this.loadingDone = true;
              return;
            }

            var arr = jsonData['Value']['Table'];
            console.log(arr);

            var dateArray = arr.map(function(arr){
              return moment(arr.VaccineDate, 'MM/DD/YYYY')
            });
          
            console.log(moment.max(dateArray));

            this.vaccineDate = moment.max(dateArray).format('MMM DD.YYYY');
            this.vaccinated = true;

            this.vaccinationList = jsonData['Value']['Table'];
            console.log(this.vaccinationList)

            this.noError = true;
            this.loadingDone = true;
            
          })

          .catch(error => {
            console.log(error);

            if (this.event) {
              this.event.target.complete();
            }

            // this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            // this.loadingDone = true;
          });
      });
    });
  }

  getDateMonth(datename: string, procedure: number): string {
    var date = new Date(datename);
    var CurrentMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    if (procedure == 1)
      return CurrentMonth[date.getMonth()].toUpperCase();
    else
      return CurrentMonth[date.getMonth()];
  }

  getDateDate(datename: string): string {
    var date = new Date(datename);
    return date.getDate().toString();
  }

  toTitleCase(txt: string): string {    
    return txt.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  backButton(){
    this.navCtrl.back();
  }

  retry(){
    this.ngOnInit()
  }
}
