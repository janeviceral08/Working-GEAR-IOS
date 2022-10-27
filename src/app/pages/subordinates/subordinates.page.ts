import { Component, OnInit } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActionSheetController, MenuController, ModalController, Platform, AlertController } from '@ionic/angular';
import * as Constants from 'src/app/utils/constants.service';
import { LoginService } from 'src/app/services/login.service';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { FilterMenuComponent } from '../../component/filter-menu/filter-menu.component';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.page.html',
  styleUrls: ['./subordinates.page.scss'],
})
export class SubordinatesPage implements OnInit {
  results: any;
  tempResult: any;
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  modalIsOpen: boolean;
  empId;
  subordinateID = '';
  subordinateName = '';
  isAllEmployee = false;
  subordinatesList: string[] = [];
  subordinatesModal = { ShowAll: this.isAllEmployee };
  event;

  constructor(
    private storage: Storage,
    private menuCtrl: MenuController,
    private modalController: ModalController,
    private router: Router,
    private loginService: LoginService,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private platform: Platform,
    private httpApi: HTTP) { }

  ngOnInit() {
    this.loadingDone = false;
    this.noError = true;
    this.results = [];
    this.tempResult = [];

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.getSubordinatesAll();
      this.getSubordinates();
    });
  }

  getSubordinatesAll() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        UserID: this.empId
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/GetSubordinates/GetSubordinatesList?subordinateID=&subordinateName=&isAllEmployee=true`, request, {})
          .then(data => {
            var jsonData = JSON.parse(data.data);
            this.storage.set(Constants.KEY_SUBORDINATES, jsonData['Value']);
          });
        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/GetSubordinates/GetSubordinatesListForOT`, request, {})
          .then(data => {
            var jsonData = JSON.parse(data.data);
            this.storage.set(Constants.KEY_SUBORDINATESFOROT, jsonData['Value']);
          });
      });
    });
  }

  getSubordinates() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        UserID: this.empId
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        var uri: string = `${value[Constants.SERVER_URL]}/api/GetSubordinates/GetSubordinatesList?subordinateID=${this.subordinateID}&subordinateName=${this.subordinateName}&isAllEmployee=${this.isAllEmployee}`;
        var url: string = encodeURI(uri);

        this.httpApi.post(url, request, {})
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

            this.tempResult = jsonData['Value'];
            if (this.tempResult.length <= 0) {
              this.noError = false;
              this.errorMessage = "EMPTY";
              return;
            }

            this.noError = true;
            this.results = jsonData['Value'];
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

  toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  MoreOptions(event: Event, item: any) {
    event.stopPropagation();

    this.storage.get(`${Constants.KEY_SUBORDINATESFOROT}`).then((val) => {
      let foundOT: boolean = false;

      val.forEach(sub => {
        if (sub["EMPLOYEEID"] == item.EMPLOYEEID) {
          foundOT = true
        }
      });

      if (foundOT) {
        this.showActionsWithOT(item);
      }
      else {
        this.showActions(item);
      }

    });
  }

  async showActions(subordinate: any) {
    console.log(subordinate);
    const actionSheet = await this.actionSheetController.create({
      header: 'Options for ' + subordinate.EMPNAME + ' :',
      buttons: [{
        text: 'View Personal Info',
        icon: 'list-box',
        handler: () => {
          this.router.navigate(['/', 'personalinformation',
            'subordinate',
            subordinate.EMPLOYEEID,
            subordinate.EMPNAME,
            subordinate.POSITION]);
        }
      }, {
        text: 'Request Leave',
        icon: 'list-box',
        handler: () => {
          this.router.navigate(['/leaveadd',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            subordinate.EMPLOYEEID]);
        }
      }, {
        text: 'Request Attendance Advisory',
        icon: 'bookmarks',
        handler: () => {
          this.router.navigate(['/advisoryadd',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            subordinate.EMPLOYEEID,
            '']);
        }
      }, {
        text: 'Request Work From Home',
        icon: 'briefcase',
        handler: () => {
          this.router.navigate(['/workfromhomeadd',
            '',
            '',
            '',
            '',
            '',
            subordinate.EMPLOYEEID,
            '',
            '']);
        }
      }]
    });
    await actionSheet.present();
  }

  async showActionsWithOT(subordinate: any) {
    console.log(subordinate);
    const actionSheet = await this.actionSheetController.create({
      header: 'Options for ' + subordinate.EMPNAME + ' :',
      buttons: [{
        text: 'View Personal Info',
        icon: 'list-box',
        handler: () => {
          this.router.navigate(['/', 'personalinformation',
            'subordinate',
            subordinate.EMPLOYEEID,
            subordinate.EMPNAME,
            subordinate.POSITION]);
        }
      }, {
        text: 'Request Leave',
        icon: 'list-box',
        handler: () => {
          this.router.navigate(['/leaveadd',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            subordinate.EMPLOYEEID]);
        }
      }, {
        text: 'Request Attendance Advisory',
        icon: 'bookmarks',
        handler: () => {
          this.router.navigate(['/advisoryadd',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            subordinate.EMPLOYEEID,
            '']);
        }
      },
      {
        text: 'Request Overtime',
        icon: 'alarm',
        handler: () => {
          this.router.navigate(['/overtimeadd', '',
            '',
            '',
            '',
            '',
            '',
            '',
            subordinate.EMPLOYEEID
          ]);
        }
      },
      {
        text: 'Request Work From Home',
        icon: 'briefcase',
        handler: () => {
          this.router.navigate(['/workfromhomeadd',
            '',
            '',
            '',
            '',
            '',
            subordinate.EMPLOYEEID]);
        }
      },
      {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
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

  openModal() {
    if (!this.modalIsOpen)
      this.showModal();
  }

  async showModal() {
    this.modalIsOpen = true;
    this.subordinatesModal["EmployeeId"] = this.subordinateID;
    this.subordinatesModal["EmpName"] = this.subordinateName;
    this.subordinatesModal["ShowAll"] = this.isAllEmployee;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: FilterMenuComponent,
        cssClass: 'modalFilterMenu',
        animated: false,
        backdropDismiss: false,
        componentProps: {
          module: "Subordinates",
          data: this.subordinatesModal
        }

      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        if (detail.data['isDismissed'] == 0) {

          this.subordinateID = detail.data['empNumber'];
          this.subordinateName = detail.data['empName'];
          this.isAllEmployee = detail.data['showAll'];

          this.loadingDone = false;
          this.noError = true;

          this.getSubordinates();
        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

  refresh(event) {
    this.event = event;
    this.ngOnInit();
  }

  showSubProfile(item: any) {
    console.log(item);
    this.router.navigate(['/subprofile',
      item.EMPLOYEEID,
      item.EMPNAME,
      item.POSITION,
      item.DEPARTMENT]);
  }
}
