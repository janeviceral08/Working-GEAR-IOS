import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as Constants from 'src/app/utils/constants.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  noError: boolean = true;
  errorMessage: string;
  loadingDone: boolean = false;
  results: any;
  empId: string;

  constructor(
    private httpApi: HTTP,
    private loginService: LoginService,
    private storage: Storage,
    private router: Router,
    private menuCtrl: MenuController,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadingDone = false;
    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.getEvents();
    });
  }

  getEvents() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        IsActive: 1,
        UserID: this.empId
      };

      console.log(postData);

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/event/GetEvents`, postData, {})
          .then(data => {
            console.log(data);
            if (data.data == null || data.data == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              this.loadingDone = true;
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
              this.loadingDone = true;
              return;
            }

            if (jsonData['Value']['tblEventList'] == null || jsonData['Value']['tblEventList'] == undefined) {
              this.noError = false;
              this.errorMessage = "EMPTY";
              this.loadingDone = true;
              return;
            }
            else if (jsonData['Value']['tblEventList'].length <= 0) {
              this.noError = false;
              this.errorMessage = "NO EVENTS";
              this.loadingDone = true;
              return;
            }

            this.noError = true;
            this.results = jsonData['Value']['tblEventList'];
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

  refresh() {
    this.ionViewWillEnter();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  toggleCard() {
    this.router.navigate(['/eventsdetails', 'natcon'])
  }
}
