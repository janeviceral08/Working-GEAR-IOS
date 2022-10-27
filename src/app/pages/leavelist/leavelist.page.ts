import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaveService } from 'src/app/services/leave.service';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import * as Constants from 'src/app/utils/constants.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ActionSheetController, AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.page.html',
  styleUrls: ['./leavelist.page.scss'],
})

export class LeavelistPage implements OnInit {
  results: any;
  leaveTypeList: string[] = [];
  leaveArrange: string[] = [];
  leaveDateList: object;
  id: string;
  idDesc: string;
  idSrc: string;
  leaveType: string = "FIRST";
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  balance: number = 0.0;
  credits: number = 0.0;
  posted: number = 0.0;
  forApproval: number = 0.0;
  approved: number = 0.0;
  user: string;
  loading;
  activityResult: boolean = false;
  code: string;

  constructor(private httpApi: HTTP,
    private activatedRoute: ActivatedRoute,
    private leaveService: LeaveService,
    private storage: Storage,
    private router: Router,
    private loginService: LoginService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController) {
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

  ngOnInit() {
    this.loadingDone = false;
    this.noError = true;
    this.leaveArrange = [];
    this.leaveTypeList = [];
    this.leaveType = "FIRST";

    this.id = this.activatedRoute.snapshot.paramMap.get('type');
    this.code = this.activatedRoute.snapshot.paramMap.get('code');

    // if (this.id == "BL") {
    //   this.idDesc = "Birthday Leave";
    //   this.idSrc = "assets/icon/ic_bl.png";
    // }
    // else if (this.id == "EL") {
    //   this.idDesc = "Emergency Leave";
    //   this.idSrc = "assets/icon/ic_el.png";
    // }
    // else if (this.id == "IL") {
    //   this.idDesc = "Service Incentive Leave";
    //   this.idSrc = "assets/icon/ic_il.png";
    // }
    // else if (this.id == "MCW") {
    //   this.idDesc = "Magna Carta for Women";
    //   this.idSrc = "assets/icon/ic_mcw.png";
    // }
    // else if (this.id == "ML") {
    //   this.idDesc = "Maternity Leave";
    //   this.idSrc = "assets/icon/ic_ml.png";
    // }
    // else if (this.id == "PL") {
    //   this.idDesc = "Paternity Leave";
    //   this.idSrc = "assets/icon/ic_pl.png";
    // }
    // else if (this.id == "SL") {
    //   this.idDesc = "Sick Leave";
    //   this.idSrc = "assets/icon/ic_sl.png";
    // }
    // else if (this.id == "VL") {
    //   this.idDesc = "Vacation Leave";
    //   this.idSrc = "assets/icon/ic_vl.png";
    // }
    // else if (this.id == "XS") {
    //   this.idDesc = "Excess Sil";
    //   this.idSrc = "assets/icon/ic_xs.png";
    // }

    if (this.id == "Birthday Leave") {
      this.idSrc = "assets/icon/ic_bl.png";
    }
    else if (this.id == "Emergency Leave") {
      this.idSrc = "assets/icon/ic_el.png";
    }
    else if (this.id == "Service Incentive Leave") {
      this.idSrc = "assets/icon/ic_il.png";
    }
    else if (this.id == "Magna Carta for Women") {
      this.idSrc = "assets/icon/ic_mcw.png";
    }
    else if (this.id == "Maternity Leave") {
      this.idSrc = "assets/icon/ic_ml.png";
    }
    else if (this.id == "Paternity Leave") {
      this.idSrc = "assets/icon/ic_pl.png";
    }
    else if (this.id == "Sick Leave") {
      this.idSrc = "assets/icon/ic_sl.png";
    }
    else if (this.id == "Vacation Leave") {
      this.idSrc = "assets/icon/ic_vl.png";
    }
    else if (this.id == "Excess Sil") {
      this.idSrc = "assets/icon/ic_xs.png";
    }
    else {
      this.idSrc = "assets/icon/ic_xs.png";
    }

    this.idDesc = this.id;

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.getLeaveList(val);
      this.user = val;
    });

    this.activityResult = true;
  }

  showList() {
 
    this.results.forEach(item => {

      if (this.code == item["LEAVETYPE"]) {
        if (this.leaveArrange.find(e => e === item["LEAVESTATUSDESC"])) {
        }
        else this.leaveArrange.push(item["LEAVESTATUSDESC"]);
      }
    });

    this.leaveTypeList = [];
    if (this.leaveArrange.includes("FOR APPROVAL")) {
      this.leaveTypeList.push("FOR APPROVAL")
      this.leaveType = "FOR APPROVAL";
    };
    
    if (this.leaveArrange.includes("PLANNED")) {
      this.leaveTypeList.push("PLANNED")
      if (this.leaveType == "FIRST") this.leaveType = "PLANNED";
    };
    if (this.leaveArrange.includes("APPROVED")) {
      this.leaveTypeList.push("APPROVED")
      if (this.leaveType == "FIRST") this.leaveType = "APPROVED";
    };
    if (this.leaveArrange.includes("POSTED")) {
      this.leaveTypeList.push("POSTED")
      if (this.leaveType == "FIRST") this.leaveType = "POSTED";
    };
    this.leaveArrange.forEach(item => {
      for (var ctr = 0; ctr < this.leaveArrange.length; ctr++) {
        if (!this.leaveTypeList.includes(item)) {
          this.leaveTypeList.push(item);
          if (this.leaveType == "FIRST") this.leaveType = item;
        }
      }
    });
  
    if (this.leaveTypeList.length <= 0) {
      this.noError = false;
      this.errorMessage = "EMPTY";
      return;
    }
  }

  getLeaveList(employeeid: string) {
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

            var jsonData = JSON.parse(data.data);
            console.log('jsonData: ', jsonData);//mycomment
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

            if (jsonData['Value']['tblLeaveRequest'] == null || jsonData['Value']['tblLeaveRequest'] == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            this.noError = true;
            this.results = jsonData['Value']['tblLeaveRequest'];
            this.loadingDone = true;

            this.setCredits(jsonData);

            this.showList();
          })
          .catch(error => {

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }

  setCredits(jsonData: any) {
    jsonData['Value']['tblLeaveCredit'].forEach(item => {
      if (item['LEAVE_DESC'] == this.id) {
        this.balance = item['BALANCE'];
        this.credits = item['CREDITS'];
        this.forApproval = item['APPROVAL'];
        this.posted = item['AVAILED'];
        this.approved = item['APPROVED'];
      }
    });
  }

  openLeaveAdd() {
    this.router.navigate(['/leaveadd', this.code,
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ])
  }

  MoreOptions(event: Event, item: any) {
    event.stopPropagation();

    switch (item['LEAVESTATUSDESC']) {
      case "FOR APPROVAL": {
        this.showForApprovalActions(item);
        break;
      }

      case "APPROVED": {
        this.showApprovedActions(item);
        break;
      }

      case "PLANNED": {
        this.showPlannedActions(item);
        break;
      }
    }
  }

  async showForApprovalActions(leave: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Action',
      buttons: [{
        text: 'Edit Leave',
        icon: 'create',
        handler: () => {
          this.router.navigate(['/leaveadd',
            leave['LEAVETYPE'],
            leave['LEAVEDAY'],
            leave['LEAVEFROM'],
            leave['LeaveFromTime'],
            leave['LEAVEREASONDESC'],
            (this.isEmpty(leave['LEAVEREMARK']) ? '' : leave['LEAVEREMARK']),
            leave['ID'],
            ''
          ]);
        }
      }, {
        text: 'Delete Leave',
        icon: 'trash',
        handler: () => {
          this.showDeleteDialog(leave);
        }
      }, {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  async showApprovedActions(leave: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Action',
      buttons: [{
        text: 'Cancel Leave',
        icon: 'close-circle-outline',
        handler: () => {
          this.showCancelDialog(leave);
        }
      }, {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  async showPlannedActions(leave: any) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Action',
      buttons: [{
        text: 'Submit Leave',
        icon: 'send',
        handler: () => {
          this.showSubmitDialog(leave);
        }
      }, {
        text: 'Edit Leave',
        icon: 'create',
        handler: () => {
          this.router.navigate(['/leaveadd',
            leave['LEAVETYPE'],
            leave['LEAVEDAY'],
            leave['LEAVEFROM'],
            leave['LeaveFromTime'],
            leave['LEAVEREASONDESC'],
            (this.isEmpty(leave['LEAVEREMARK']) ? '' : leave['LEAVEREMARK']),
            leave['ID'],
            ''
          ]);
        }
      }, {
        text: 'Delete Leave',
        icon: 'trash',
        handler: () => {
          this.showDeleteDialog(leave);
        }
      }, {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  public isEmpty(text: string): boolean {
    return (text == "" || text == undefined || text == null)
  }

  async showCancelDialog(leave: any) {
    const alert = await this.alertController.create({
      header: 'Cancel Leave',
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
            this.loadingCtrl.create({
              message: "Loading..."
            }).then((overlay) => {

              this.loading = overlay;
              this.loading.present();

              this.cancelLeave(leave, data['remarks']);
            });

          }
        }
      ]
    });

    await alert.present();
  }

  deleteLeave(leave: any) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        ID: String(leave['ID']),
        USER: this.user,
        LeaveRequestStatus: leave['LEAVESTATUS'],
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION
      };


      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {


        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/LeaveRequest/DeleteLeaveRequest`, postData, {})
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

  submitLeave(leave: any) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        ID: String(leave['ID']),
        USER: this.user,
        EmployeeId: this.user,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION

      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/LeaveRequest/SubmitPlannedLeave`, postData, {})
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

            this.showDialog("DONE!", "You have processed this request", "Great!");
            this.loading.dismiss();
          })
          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, "Okay");
            this.loading.dismiss();
          });
      });
    });
  }

  cancelLeave(leave: any, cancelRemarks: string) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        ID: String(leave['ID']),
        USER: this.user,
        LeaveRequestStatus: leave['LEAVESTATUS'],
        CancelRemarks: cancelRemarks,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION
      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/LeaveRequest/CancelLeaveRequest`, postData, {})
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
  }

  setLeaveDetails(item: any, type: string) {
    this.storage.set(Constants.KEY_LEAVEDETAILS, item);

    this.router.navigate(['/leavedetails', type, 'leavelist'])
  }

  async showDialog(title: string, message: string, buttonText: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [{
        text: buttonText,
        handler: () => {
          // location.reload();
          this.ngOnInit();
        }
      }]
    });

    await alert.present();
  }

  async showDeleteDialog(leave: any) {
    const alert = await this.alertController.create({
      header: 'Delete Leave',
      message: 'Are you sure you want to delete leave?',
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

            this.deleteLeave(leave);
          });
        }
      }]
    });

    await alert.present();
  }

  async showSubmitDialog(leave: any) {
    const alert = await this.alertController.create({
      header: 'Submit Leave',
      message: 'Are you sure you want to submit planned leave?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary'
      }, {
        text: 'Submit',
        handler: () => {

          this.loadingCtrl.create({
            message: "Loading..."
          }).then((overlay) => {

            this.loading = overlay;
            this.loading.present();

            this.submitLeave(leave);
          });
        }
      }]
    });

    await alert.present();
  }

  refresh() {
    this.ngOnInit();
  }

  ionViewWillEnter() {
    if (this.activityResult) {
      this.ngOnInit();
    }
  }

  onBackPressed() {
    this.navCtrl.back();
  }

  goBack() { this.navCtrl.back(); }
}
