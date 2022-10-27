import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MenuController, Platform, AlertController } from '@ionic/angular';
import * as Constants from 'src/app/utils/constants.service';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-leavecredits',
  templateUrl: './leavecredits.page.html',
  styleUrls: ['./leavecredits.page.scss'],
})

export class LeavecreditsPage implements OnInit {
  results: Observable<any>;
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  employeeName: string;
  employeeDept: string;
  event;

  constructor(
    private storage: Storage,
    private menuCtrl: MenuController,
    private router: Router,
    private loginService: LoginService,
    private alertController: AlertController,
    private platform: Platform,
    private httpApi: HTTP) {

    this.platform.ready().then(() => {
      this.platform.backButton.subscribe(() => {
        this.showExitDialog();
      })
    });
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribe(() => {
        this.showExitDialog();
      })
    });

    this.loadingDone = false;
    this.noError = true;

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.getLeaveCredits(val);
    });
  }

  getLeaveCredits(employeeid: string) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        UserID: employeeid,
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION
      };


      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/leaverequest/findall`, postData, {})
          .then(data => {
            if (data.data == null || data.data == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            if (this.event) {
              this.event.target.complete();
            }

            var jsonData = JSON.parse(data.data);
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
            if (jsonData['Value']['tblLeaveCredit'] == null || jsonData['Value']['tblLeaveCredit'] == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }
            this.noError = true;
            this.results = jsonData['Value']['tblLeaveCredit'];
            this.loadingDone = true;
          })
          .catch(error => {
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

  getLeaveTypeSrc(leaveType: string): string {
    if (leaveType == "BL") {
      return "assets/icon/ic_bl.png";

    } else if (leaveType == "EL") {
      return "assets/icon/ic_el.png";

    } else if (leaveType == "IL") {
      return "assets/icon/ic_il.png";

    } else if (leaveType == "MCW") {
      return "assets/icon/ic_mcw.png";

    } else if (leaveType == "ML") {
      return "assets/icon/ic_ml.png";

    } else if (leaveType == "PL") {
      return "assets/icon/ic_pl.png";

    } else if (leaveType == "SL") {
      return "assets/icon/ic_sl.png";

    } else if (leaveType == "SPL") {
      return "assets/icon/ic_spl.png";

    } else if (leaveType == "VL") {
      return "assets/icon/ic_vl.png";

    } else if (leaveType == "XS") {
      return "assets/icon/ic_xs.png";

    } else {
      return "assets/icon/ic_xs.png";

    }
  }

  refresh(event) {
    this.event = event;
    this.ngOnInit();
  }

  openAddLeave() {
    this.router.navigate(['/leaveadd',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ]);
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  async showExitDialog() {
    const alert = await this.alertController.create({
      header: 'Exit HRIS',
      message: 'Are you sure you want to exit HRIS?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Exit',
        handler: () => {
          navigator['HRIS'].exitApp();
        }
      }]
    });
  }

  ionViewWillLeave() {
    this.showExitDialog();
  }
}
