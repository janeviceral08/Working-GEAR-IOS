import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import * as Constants from 'src/app/utils/constants.service';
import { ActionSheetController, AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-advisorylist',
  templateUrl: './advisorylist.page.html',
  styleUrls: ['./advisorylist.page.scss'],
})
export class AdvisorylistPage implements OnInit {
  id: string;
  idDesc: string;
  idSrc: string;
  empId: string;
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  results: any;
  advisoryTypeList: string[] = [];
  advisoryArrange: string[] = [];
  advisoryType: string = "FIRST";
  loading;
  activityResult: boolean = false;

  constructor(
    private httpApi: HTTP,
    private activatedRoute: ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private storage: Storage,
    private loginService: LoginService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private router: Router,

  ) { }

  ngOnInit() {
    this.loadingDone = false;
    this.noError = true;
    this.advisoryTypeList = [];
    this.advisoryArrange = [];
    this.advisoryType = "FIRST";

    this.id = this.activatedRoute.snapshot.paramMap.get('type');
    this.setImage(this.id);

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.getAdvisory();
    });

    this.activityResult = true;
  }

  getAdvisory() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        USER: val[Constants.KEY_USER_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        EMPNO: val[Constants.KEY_USER_ID]
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisory/GetAttendanceAdvisory`, request, {})
          .then(data => {
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
            if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }
            this.noError = true;

            this.results = jsonData['Value'];
            console.log(this.results);
            this.showList();
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

  showList() {
    this.results.forEach(item => {

      if (this.id == item["REQUESTTYPECODE"]) {
        if (this.advisoryArrange.find(e => e === item["STATUS"])) {
        }
        else this.advisoryArrange.push(item["STATUS"]);
      }
    });

    this.advisoryTypeList = [];
    if (this.advisoryArrange.includes("FOR APPROVAL")) {
      this.advisoryTypeList.push("FOR APPROVAL")
      this.advisoryType = "FOR APPROVAL";
    };
    if (this.advisoryArrange.includes("PLANNED")) {
      this.advisoryTypeList.push("PLANNED")
      if (this.advisoryType == "FIRST") this.advisoryType = "PLANNED";
    };
    if (this.advisoryArrange.includes("APPROVED")) {
      this.advisoryTypeList.push("APPROVED")
      if (this.advisoryType == "FIRST") this.advisoryType = "APPROVED";
    };
    if (this.advisoryArrange.includes("POSTED")) {
      this.advisoryTypeList.push("POSTED")
      if (this.advisoryType == "FIRST") this.advisoryType = "POSTED";
    };
    this.advisoryArrange.forEach(item => {
      for (var ctr = 0; ctr < this.advisoryArrange.length; ctr++) {
        if (!this.advisoryTypeList.includes(item)) {
          this.advisoryTypeList.push(item);
          if (this.advisoryType == "FIRST") this.advisoryType = item;
        }
      }
    });

    if (this.advisoryTypeList.length <= 0) {
      this.noError = false;
      this.errorMessage = "EMPTY";
      return;
    }
  }

  setImage(type: string) {
    switch (type) {
      case Constants.ATD_TYPE_CODE_AUT:
        this.idDesc = "Authorized Under Time";
        this.idSrc = "assets/icon/ic_au.png";
        break;

      case Constants.ATD_TYPE_CODE_AL:
        this.idDesc = "Authorized Late";
        this.idSrc = "assets/icon/ic_al.png";
        break;

      case Constants.ATD_TYPE_CODE_OS:
        this.idDesc = "Offset";
        this.idSrc = "assets/icon/ic_os.png";
        break;

      case Constants.ATD_TYPE_CODE_CTO:
        this.idDesc = "CTO";
        this.idSrc = "assets/icon/ic_cto.png";
        break;

      case Constants.ATD_TYPE_CODE_OB:
        this.idDesc = "Official Business";
        this.idSrc = "assets/icon/ic_ob.png";
        break;

      case Constants.ATD_TYPE_CODE_AS:
        this.idDesc = "Authorized Shift";
        this.idSrc = "assets/icon/ic_as.png";
        break;
    }
  }

  getDateMonth(datename: string, procedure: number): string {
    var date = new Date(datename);
    var CurrentMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    if (procedure == 1)
      return CurrentMonth[date.getMonth()].toString().toUpperCase();
    else
      return CurrentMonth[date.getMonth()];
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
      header: 'Cancel Attendance Advisory',
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
          USER: this.empId,
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
        EMPNO: Number(this.empId),
        USER: this.empId
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

  openAdvisoryAdd() {
    this.router.navigate(['/advisoryadd',
      '',
      this.id,
      '',
      '',
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

  ionViewWillEnter() {
    if (this.activityResult) {
      this.ngOnInit();
    }
  }

  goBack() { this.navCtrl.back(); }
}
