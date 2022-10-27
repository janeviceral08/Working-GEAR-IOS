import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/utils/constants.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-antigentestqadetails',
  templateUrl: './antigentestqadetails.page.html',
  styleUrls: ['./antigentestqadetails.page.scss'],
})
export class AntigentestqadetailsPage implements OnInit {

  constructor(private storage: Storage,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menuCtrl: MenuController,
    private httpApi: HTTP,
    private modalController: ModalController,
    private navCtrl: NavController,
    private loginService: LoginService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    public plt: Platform) { }

  empId;
  antigenQaDetails: any;
  antigenTestQaList: any[] = [];
  recordId;

  month:any;
  day:any;
  name:any;

  ngOnInit() {
    this.recordId = this.activatedRoute.snapshot.paramMap.get('empid');
    console.log(this.recordId);
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
        EmployeeId: this.recordId,
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

            if (data.data == null || data.data == undefined) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log(jsonData);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
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

                default:

                  this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                  return;
              }
            }

            console.log(jsonData);

            this.antigenQaDetails = jsonData['Value']['tblEmployeeAntigenQADetailsForApproval'][0];
            this.antigenTestQaList = jsonData['Value']['Table1'];

            this.month = this.getDateMonth(this.antigenQaDetails['CreatedDate'],1);
            this.day = this.getDateDate(this.antigenQaDetails['CreatedDate']);
            this.name = this.antigenQaDetails['FirstName'] + " " + this.antigenQaDetails['LastName'];

            console.log(this.antigenQaDetails);
          })
          .catch(error => {
            console.log(error);

            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
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
          this.back();
        }
      }]
    });

    await alert.present();
  }

  back() {
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


}
