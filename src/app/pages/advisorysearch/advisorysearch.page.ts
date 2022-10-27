import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FilterMenuComponent } from '../../component/filter-menu/filter-menu.component';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginService } from 'src/app/services/login.service';
import * as Constants from 'src/app/utils/constants.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-advisorysearch',
  templateUrl: './advisorysearch.page.html',
  styleUrls: ['./advisorysearch.page.scss'],
})
export class AdvisorysearchPage implements OnInit {
  modalIsOpen: boolean;
  results: any[];
  resultTemp: any[];

  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string = "CONNECTION ERROR";
  employeeId: string;
  loading;
  event;

  advisory = {
  }

  constructor(private httpApi: HTTP,
    private activatedRoute: ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private loginService: LoginService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private storage: Storage) { }

  ngOnInit() {
    this.loadingDone = false;
    this.noError = true;
    this.results = [];
    this.resultTemp = [];

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.employeeId = val;

      this.getAdvisoryList();
    });
  }

  getDateMonth(datename: string, procedure: number): string {
    var date = new Date(datename);
    var CurrntMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    if (procedure == 1)
      return CurrntMonth[date.getMonth()].toString().toUpperCase();
    else
      return CurrntMonth[date.getMonth()];
  }

  getDateDate(datename: string): string {
    var date = new Date(datename);
    return date.getDate().toString();
  }

  getDateYear(datename: string): string {
    var date = new Date(datename);
    return date.getFullYear().toString();
  }

  getLongDate(datename: string): string {
    var month = this.getDateMonth(datename, 2);
    var date = this.getDateDate(datename);
    var year = this.getDateYear(datename);
    var fulldate = month + " " + date + ", " + year;
    return fulldate;
  }

  backPressed() {
    this.navCtrl.pop();
  }

  getAdvisoryList() {
    this.advisory['USER'] = this.employeeId;
    this.advisory['EMPNO'] = Number(this.employeeId);

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      this.advisory['RecordID'] = val[Constants.KEY_RECORD_ID];
      this.advisory['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      this.advisory['Token'] = val[Constants.KEY_TOKEN];
      this.advisory['AppPlatForm'] = Constants.APP_PLATFORM;
      this.advisory['AppVersion'] = Constants.VERSION;

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisory/GetAttendanceAdvisory`, this.advisory, {})
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

            this.resultTemp = jsonData['Value'];
            console.log(this.resultTemp);

            if (this.resultTemp.length <= 0) {
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


  openModal() {
    if (!this.modalIsOpen)
      this.showModal();
  }

  async showModal() {
    this.modalIsOpen = true;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: FilterMenuComponent,
        cssClass: 'modalFilterMenu',
        animated: false,
        backdropDismiss: false,
        componentProps: {
          module: "AdvisorySearch",
          data: this.advisory
        }
      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {

        if (detail.data['isDismissed'] == 0) {

          this.advisory['EmployeeId'] = Number(this.employeeId);
          this.advisory['DATEFROM'] = detail.data['advisoryFrom'];
          this.advisory['DATETO'] = detail.data['advisoryTo'];
          this.advisory['REQUESTTYPECODE'] = detail.data['advisoryType'];
          this.advisory['REASONCODE'] = detail.data['advisoryReason'];
          this.advisory['STATUSCODE'] = detail.data['status'];

          this.getAdvisoryList();
        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

  MoreOptions(event: Event, item: any) {
    event.stopPropagation();

    switch (item['STATUS']) {
      case "FOR APPROVAL": {
        this.showForApprovalActions(item);
        break;
      }

      case "APPROVED": {
        this.showApprovedActions(item);
        break;
      }
    }
  }

  async showForApprovalActions(advisory: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Action',
      buttons: [{
        text: 'Edit Advisory',
        icon: 'create',
        handler: () => {
          this.router.navigate(['/advisoryadd',
            advisory['ID'] == null ? '' : advisory['ID'],
            advisory['REQUESTTYPECODE'] == null ? '' : advisory['REQUESTTYPECODE'],
            advisory['REQUESTDATE'] == null ? '' : advisory['REQUESTDATE'],
            advisory['REQTIME'] == null ? '' : advisory['REQTIME'],
            advisory['HRS'] == null ? '' : advisory['HRS'],
            advisory['DAYS'] == null ? '' : advisory['DAYS'],
            advisory['REASONCODE'] == null ? '' : advisory['REASONCODE'],
            advisory['REMARKS'] == null ? '' : advisory['REMARKS'],
            advisory['STARTTIME'] == null ? '' : advisory['STARTTIME'],
            advisory['DATEOFDUTY'] == null ? '' : advisory['DATEOFDUTY'],
            '',
            ''
          ]);
        }
      }, {
        text: 'Delete Advisory',
        icon: 'trash',
        handler: () => {
          this.showDeleteDialog(advisory);
        }
      }, {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  async showApprovedActions(advisory: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Action',
      buttons: [{
        text: 'Cancel Advisory',
        icon: 'close-circle-outline',
        handler: () => {
          this.showCancelDialog(advisory);
        }
      }, {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  async showDeleteDialog(advisory: any) {
    const alert = await this.alertController.create({
      header: 'Delete Attendance Advisory',
      message: 'Are you sure you want to delete?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary'
      }, {
        text: 'Delete',
        handler: () => {

          this.loadingCtrl.create({
            message: "Loading..."
          }).then((overlay) => {

            this.loading = overlay;
            this.loading.present();

            this.deleteAdvisory(advisory);
          });
        }
      }]
    });

    await alert.present();
  }

  async showCancelDialog(advisory: any) {
    const alert = await this.alertController.create({
      header: 'Cancel Advisory',
      inputs: [
        {
          name: 'remarks',
          type: 'text',
          placeholder: 'Cancel Remarks'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Ok',
          handler: (data) => {
            this.cancelAdvisory(advisory, data['remarks']);
          }
        }
      ]
    });

    await alert.present();
  }
  cancelAdvisory(advisory: any, remarks: string) {
    if (remarks == '' || remarks == null || remarks == undefined) {
      alert("Remarks is empty!");
      return;
    }

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

        let postData = {
          ID: String(advisory['ID']),
          CANCELREMARKS: remarks,
          USER: this.employeeId,
          RecordID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatForm: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION

        };

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisory/CancelAttendanceAdvisory`, postData, {})
            .then(data => {

              if (data.data == null || data.data == undefined || !data.data) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, "Okay");
                this.loading.dismiss();
                return;
              }

              var jsonData = JSON.parse(data.data);

              if (jsonData['Status'] != Constants.POST_SUCCESS) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, "Okay");
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

                this.showDialog("ERROR!", jsonData['Message'], "Okay");
                return;
              }

              this.showDialog("DONE!", "You have cancelled this request", "Okay");
              this.loading.dismiss();
            })
            .catch(error => {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, "Okay");
              this.loading.dismiss();
            });
        });
      });
    });

  }

  deleteAdvisory(advisory: any) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        ID: String(advisory['ID']),
        EMPNO: Number(this.employeeId),
        USER: this.employeeId
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisory/DeleteAttendanceAdvisory`, request, {})
          .then(data => {

            if (data.data == null || data.data == undefined || !data.data) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, "Okay");
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, "Okay");
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

              this.showDialog("ERROR!", jsonData['Message'], "Okay");
              return;
            }

            this.showDialog("DONE!", "You have deleted this request", "Okay");
            this.loading.dismiss();
          })
          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, "Okay");
            this.loading.dismiss();
          });
      });
    });
  }

  async showDialog(title: string, message: string, buttonText: string) {
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

  ionViewWillEnter() {
    this.ngOnInit();
  }

  refresh(event) {

    if (event) {
      this.event = event;
    }

    this.ngOnInit();
  }
}
