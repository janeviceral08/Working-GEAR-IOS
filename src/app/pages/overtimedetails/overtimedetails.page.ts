import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { HTTP } from '@ionic-native/http/ngx';
import { ModalController, LoadingController, AlertController, NavController, Events } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { SubmitApprovalComponent } from '../../component/submit-approval/submit-approval.component';
import * as Constants from 'src/app/utils/constants.service';

@Component({
  selector: 'app-overtimedetails',
  templateUrl: './overtimedetails.page.html',
  styleUrls: ['./overtimedetails.page.scss'],
})
export class OvertimedetailsPage implements OnInit {
  fromPage: string;
  noError: boolean = true;
  errorMessage: string;
  results: any;
  scheduledType: string;
  rowNumber: string;
  empName: string;
  empNo: string;
  pageType: string;
  id: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  remarks: string;
  createdBy: string;
  createdDate: string;
  status: string;
  statusDesc: string;
  empID: string;
  corp: string;
  groupCode: string;
  deptCode: string;
  secCode: string;
  divCode: string;
  region: string;
  district: string;
  departmentCode: string;
  departmentDesc: string;
  paidHours: string;
  approvedRemarks: string;
  approvedBy: string;
  approvedDate: string;
  rth: string;
  attendanceCode: string;
  attendanceDesc: string;
  appliedOTHours: string;
  existsFlag: string;
  workSchedule: string;
  isActive: string;
  overtimeDateFrom: string;
  overtimeDateTo: string;
  lastName: string;
  firstName: string;
  otEmployeeID: string;
  createdID: string;
  isCancel: string;
  referenceID: string;
  postedDate: string;
  areaDesc: string;
  loading;
  modalIsOpen: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpApi: HTTP,
    private router: Router,
    private navCtrl: NavController,
    private loginService: LoginService,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
    private storage: Storage,
    private modalController: ModalController,
    public events: Events) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.fromPage = this.activatedRoute.snapshot.paramMap.get('page');

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.storage.get(`${Constants.KEY_OTDETAILS}`).then((val) => {
        console.log(val.PageType);
        this.pageType = val.PageType;
        this.id = val.ID;
        this.startDate = val.STARTDATE;
        this.endDate = val.ENDDATE;
        this.startTime = val.STARTTIME;
        this.endTime = val.ENDTIME;
        this.remarks = val.REMARKS;
        this.createdBy = val.CREATEDBY;
        this.createdDate = val.CREATEDDATE;
        this.status = val.STATUS;
        this.statusDesc = val.STATUSDESC;
        this.empID = val.EmployeeId;
        this.corp = val.CORP;
        this.groupCode = val.GROUPCODE;
        this.deptCode = val.DEPTCODE;
        this.secCode = val.SECCODE;
        this.divCode = val.DIVCODE;
        this.region = val.REGION;
        this.district = val.District;
        this.departmentCode = val.DEPARTMENTCODE;
        this.departmentDesc = val.DEPARTMENTDESC;
        this.paidHours = val.PAIDHOURS;
        this.approvedRemarks = val.APPROVERREMARKS;
        this.approvedBy = val.APPROVEDBY;
        this.approvedDate = val.APPROVEDDATE;
        this.rth = val.RTH;
        this.attendanceCode = val.ATTENDANCECODE;
        this.attendanceDesc = val.ATTENDANCEDESC;
        this.appliedOTHours = val.APPLIEDOTHOURS;
        this.existsFlag = val.EXISTS_FLAG;
        this.workSchedule = val.WORKSCHEDULE;
        this.isActive = val.IsActive;
        this.overtimeDateFrom = val.OvertimeDateFrom;
        this.overtimeDateTo = val.OvertimeDateTo;
        this.lastName = val.LastName;
        this.firstName = val.FirstName;
        this.otEmployeeID = val.OTEmployeeId;
        this.createdID = val.CreatedId;
        this.isCancel = val.ISCANCEL;
        this.referenceID = val.REFERENCEID;
        this.postedDate = val.POSTEDDATE;
        this.areaDesc = val.AREADESC;

        this.loading.dismiss();
      });
    });
  }

  openEditOT() {
    this.router.navigate(['/overtimeadd',
      this.id == null ? '' : this.id,
      this.scheduledType == null ? 'RD' : this.scheduledType,
      this.startDate == null ? '' : this.startDate,
      this.startTime == null ? '' : this.startTime,
      this.endDate == null ? '' : this.endDate,
      this.endTime == null ? '' : this.endTime,
      this.remarks == null ? '' : this.remarks,
      ''
    ]);
  }

  async showDeleteDialog() {
    const alert = await this.alertController.create({
      header: 'Delete Overtime',
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

            this.deleteOT();
          });
        }
      }]
    });

    await alert.present();
  }

  async showCancelDialog() {
    const alert = await this.alertController.create({
      header: 'Cancel Overtime',
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
            this.cancelOT(data['remarks']);
          }
        }
      ]
    });

    await alert.present();
  }

  cancelOT(remarks: string) {
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
          UserID: this.empID,
          RecordID: this.id,
          CancelRemarks: remarks,
          SessionID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatForm: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION,
          CreatedDate: '',
          IsActive: true
        };

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/OTRequest/CancelOT`, postData, {})
            .then(data => {

              if (data.data == null || data.data == undefined || !data.data) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                this.loading.dismiss();
                return;
              }

              var jsonData = JSON.parse(data.data);

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

                this.showDialog("ERROR!", jsonData['Message'], true, "Okay");
                return;
              }

              this.showDialog("DONE!", "Your changes have been saved for processing", true, "Great!");
              this.loading.dismiss();
            })
            .catch(error => {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              this.loading.dismiss();
            });
        });
      });
    });

  }

  deleteOT() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {
      let request = {
        UserID: this.empID,
        EMPNO: this.empID,
        RecordID: this.id,
        STATUS: this.status,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        CreatedDate: '',
        IsActive: true
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/OTRequest/DeleteOT`, request, {})
          .then(data => {

            if (data.data == null || data.data == undefined || !data.data) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);

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

              this.showDialog("ERROR!", jsonData['Message'], true, "Okay");
              return;
            }

            this.showDialog("DONE!", "You have deleted this request", true, "Okay");
            this.loading.dismiss();
          })
          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            this.loading.dismiss();
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
          if (closePage) {
            this.events.publish('reloadDetails');
            if (this.fromPage != "subprofile")
              this.navCtrl.navigateBack(["/main//" + this.fromPage]);
            else
              this.navCtrl.back();
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }


  openModal() {
    if (!this.modalIsOpen)
      this.showModal();
  }

  async showModal() {
    this.modalIsOpen = true;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: SubmitApprovalComponent,
        cssClass: 'modalSubmitApproval',
        animated: true,
        backdropDismiss: false,
        componentProps: {
          data: "otapproval"
        }
      });



    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {

        if (detail.data['isDismissed'] == 0) {

          this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {
            this.storage.get(`${Constants.KEY_EMPID}`).then((eID) => {
              let otForApproval = {
                RecordID: this.id,
                UserID: eID,
                ApproverRemarks: (!detail.data['remarks'] ? "" : detail.data['remarks']),
                ApprovalStatus: detail.data['status'],
                AppliedHours: detail.data['appliedhours'],
                SessionID: val[Constants.KEY_RECORD_ID],
                SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
                Token: val[Constants.KEY_TOKEN],
                AppPlatForm: Constants.APP_PLATFORM,
                AppVersion: Constants.VERSION,
                IsActive: true,
              };

              this.loadingCtrl.create({
                message: "Loading..."
              }).then((overlay) => {

                console.log(otForApproval);
                this.loading = overlay;
                this.loading.present();

                this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

                  this.httpApi.post(`${value[Constants.SERVER_URL]}/api/OTApproval/ApprovalProcess`, otForApproval, {})
                    .then(data => {
                      if (data.data == null || data.data == undefined || !data.data) {
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

                        this.showDialog("ERROR!", jsonData['Message'], true, "Okay");
                        return;
                      }
                      this.loading.dismiss();
                      this.showDialog("DONE!", "You have processed this request", true, "Great!");
                    })
                    .catch(error => {
                      this.loading.dismiss();
                      this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                    });
                });
              });

            });
          });

        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

  getDateMonth(datename: string, procedure: number): string {
    var date = new Date(datename.toString().substring(0, 10));
    var CurrntMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    if (procedure == 1)
      return CurrntMonth[date.getMonth()].toString().toUpperCase();
    else
      return CurrntMonth[date.getMonth()];
  }

  getDateDate(datename: string): string {
    var date = new Date(datename.toString().substring(0, 10));
    return date.getDate().toString();
  }

  getDateYear(datename: string): string {
    var date = new Date(datename.toString().substring(0, 10));
    return date.getFullYear().toString();
  }

  toTitleCase(txt: string): string {
    return txt.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  ngOnDestroy() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }

  back() {
    this.navCtrl.back();
  }

  goBack() { this.navCtrl.back(); }
}