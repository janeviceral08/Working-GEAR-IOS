import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { LeaveTime, Reason } from 'src/app/services/leave.service';
import { DatePipe } from '@angular/common'
import { LoginService } from 'src/app/services/login.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController, AlertController, NavController, ActionSheetController } from '@ionic/angular';
import * as Constants from 'src/app/utils/constants.service';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FTP } from '@ionic-native/ftp/ngx';

export interface Leave {
  id: string;
  customerId: string;
  productId: string;
  quantity: number;
}

@Component({
  selector: 'app-leaveadd',
  templateUrl: './leaveadd.page.html',
  styleUrls: ['./leaveadd.page.scss'],
})
export class LeaveaddPage implements OnInit {
  results: Observable<any>;
  types: string[] = [];
  leaveList: any;
  type: string;
  timeFrom: LeaveTime = LeaveTime.AM;
  timeTo: LeaveTime = LeaveTime.AM;
  reason: Reason = Reason.personal;
  remarks: string;
  duration: string;
  selectedType: string;
  empId: string;
  dateFrom: any = new Date().toISOString();
  dateTo: any = new Date().toISOString();
  id: string;
  noError: boolean;
  loadingDone: boolean;
  errorMessage: string = "CONNECTION ERROR";
  currentDate = new Date().toISOString();
  isDurationDisabled: boolean = false;
  isReasonDisabled: boolean = false;
  isEdited: boolean;
  title: string;
  leaveId: string;
  subId: string;
  loading;
  subordinates;
  isPlanned: boolean = false;
  fileName: string = "No Attachment";
  uriName: string;
  hasAttachment: boolean = false;
  loadingGetLeaveFrom: any;
  uploadSuccess: boolean = false;

  constructor(private storage: Storage,
    private activatedRoute: ActivatedRoute,
    public datepipe: DatePipe,
    private navCtrl: NavController,
    private loginService: LoginService,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private loadingCtrl: LoadingController,
    private filePicker: IOSFilePicker,
    private camera: Camera,
    private fTP: FTP,
    private imagePicker: ImagePicker,
    private httpApi: HTTP) { }

  ngOnInit() {
    this.noError = true;
    this.loadingDone = false;

    this.id = this.activatedRoute.snapshot.paramMap.get('type');
    this.duration = this.activatedRoute.snapshot.paramMap.get('duration');
    this.currentDate = this.activatedRoute.snapshot.paramMap.get('datefrom');
    this.remarks = this.activatedRoute.snapshot.paramMap.get('remarks');
    this.leaveId = this.activatedRoute.snapshot.paramMap.get('id');
    this.subId = this.activatedRoute.snapshot.paramMap.get('subid');

    if (this.currentDate != '') {
      this.dateFrom = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
      this.dateTo = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
      this.isEdited = true;

      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;

        this.loadingCtrl.create({
          message: "Loading..."
        }).then((overlay) => {

          this.loading = overlay;
          this.getAddLeaveEndDate();
        });
      });

      this.title = "Edit Leave"
    } else if (this.subId != '') {
      this.dateFrom = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
      this.dateTo = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
      this.isEdited = true;
      this.title = "Post Leave"
      this.getConfigFiles(this.subId);
    } else {
      this.dateFrom = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
      this.dateTo = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
      this.isEdited = false;
      this.title = "Post Leave"
    }

    if (this.duration == '' || !this.duration || this.duration == null || this.duration == undefined) {
      this.duration = '1';
    }

    switch (this.activatedRoute.snapshot.paramMap.get('time')) {
      case "AM": {
        this.timeFrom = LeaveTime.AM;
        break;
      }
      case "PM": {
        this.timeFrom = LeaveTime.PM;
        break;
      }
      default: {
        this.timeFrom = LeaveTime.AM;
        break;
      }
    }

    switch (this.activatedRoute.snapshot.paramMap.get('request')) {
      case Constants.REASON_CODE_PERSONAL: {
        this.reason = Reason.personal;
        break;
      }
      case Constants.REASON_CODE_NOT_FEEL: {
        this.reason = Reason.notwell;
        break;
      }
    }

    if (!this.subId || this.subId != '') {
      this.storage.get(`${Constants.KEY_LEAVETYPES}`).then((val) => {
        this.results = val;

        if (this.id == undefined || this.id == null || this.id == "") {
          this.type = val['0']['SEQNO'];

          if (this.type == "BL") {
            this.isDurationDisabled = true;
            this.isReasonDisabled = true;
          }

        } else {

          val.forEach(element => {
            if (element['SEQNO'] == this.id) {
              this.type = element['SEQNO'];
              if (this.type == "BL") {
                this.isDurationDisabled = true;
                this.isReasonDisabled = true;
              }
            }
          });

          if (!this.type) {
            this.type = val['0']['SEQNO'];
            if (this.type == "BL") {
              this.isDurationDisabled = true;
              this.isReasonDisabled = true;
            }
          }
        }
      });
    }

    if (!this.empId) {
      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;
      });
    }

    this.storage.get(`${Constants.KEY_SUBORDINATES}`).then((val) => {
      this.subordinates = val;
    });


  }

  getAddLeaveEndDate() {

    if (!this.duration) {
      return;
    }

    if (!this.datepipe.transform(this.dateFrom, 'MM/dd/yyyy')) {
      return;
    }

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let leave = {
        LeaveFrom: this.datepipe.transform(this.dateFrom, 'MM/dd/yyyy'),
        LeaveFromTime: this.timeFrom,
        LeaveNoOfDays: this.duration,
        EmployeeId: this.empId,
        LeaveRequestType: this.type,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        User: this.empId
      }

      if (this.subId != '') {
        leave['EmployeeId'] = this.subId;
      }

      this.loadingCtrl.create({
        message: "Loading..."
      }).then((overlay) => {

        this.loadingGetLeaveFrom = overlay;

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/LeaveRequest/GetAddLeaveEndDate`, leave, {})
            .then(data => {
              if (data.data == null || data.data == undefined || !data.data) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                this.loadingGetLeaveFrom.dismiss();
                return;
              }

              var jsonData = JSON.parse(data.data);

              if (jsonData['Status'] != Constants.POST_SUCCESS) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                this.loadingGetLeaveFrom.dismiss();
                return;
              }

              if (jsonData['Success'] != Constants.POST_YES) {
                this.loadingGetLeaveFrom.dismiss();

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

                this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                return;
              }
              this.dateFrom = this.datepipe.transform(new Date(jsonData['Value'][0]['LEAVEFROM']).toString(), 'yyyy-MM-dd');
              this.dateTo = this.datepipe.transform(new Date(jsonData['Value'][0]['LEAVETO']).toString(), 'yyyy-MM-dd');
              this.timeTo = jsonData['Value'][0]['LeaveToTime'];
              this.loadingGetLeaveFrom.dismiss();
            })
            .catch(error => {
              this.loadingGetLeaveFrom.dismiss();
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            });
        });
      });
    });
  }

  sendLeaveRequest() {

    if (this.duration == "" || this.duration == undefined) {
      alert('Duration is empty!');
      return;
    }

    if (this.dateFrom == null || this.dateFrom == undefined || this.dateFrom == '') {
      alert("Leave Date is empty");
      return;
    }

    let selectedDate = this.datepipe.transform(this.dateFrom, 'MM/dd/yyyy')
    let leave = {
      ID: 0,
      EmployeeId: Number(this.empId),
      LeaveType: this.type,
      LeaveRequestType: null,
      LeaveNoOfDays: this.duration,
      LeaveFrom: selectedDate,
      LeaveFromTime: this.timeFrom,
      LeaveTo: selectedDate,
      LeaveToTime: "PM",
      LeaveReturn: selectedDate,
      LeaveRemark: this.remarks,
      LeaveReason: this.reason,
      LeaveRequestStatus: this.getStatus(),
      Attachment: null,
      ApproverRemarks: null,
      CancelRemarks: null,
      ApprovalStatus: null,
      User: this.empId,
      DateFrom: null,
      DateTo: null,
      EmpName: null,
      ShowAll: false
    };

    if (this.subId != '') {
      leave['EmployeeId'] = Number(this.subId);
      leave['User'] = this.empId;
    }

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();
      console.log("Load");

      if (this.hasAttachment) {
        leave['Attachment'] = this.getNewName();
        console.log("Will connect to ftp");
        this.connectToFtp(this.uriName, leave);
        return;
      }

      if (this.currentDate != '') {

        leave['ID'] = Number(this.leaveId);
        this.updateLeave(leave);
      } else {

        if (this.subId != '') {
          this.requestLeaveForSubordinate(leave);
        } else {
          this.requestLeave(leave);
        }
      }
    });
  }

  onUploadFinish(leave) {
    console.log("onUploadFinish");
    if (this.currentDate != '') {

      leave['ID'] = Number(this.leaveId);
      this.updateLeave(leave);
    } else {

      if (this.subId != '') {
        this.requestLeaveForSubordinate(leave);
      } else {
        this.requestLeave(leave);
      }
    }
  }

  requestLeave(leave: any) {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      console.log("requestLeave");

      leave['SessionID'] = val[Constants.KEY_RECORD_ID];
      leave['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      leave['Token'] = val[Constants.KEY_TOKEN];
      leave['AppPlatForm'] = Constants.APP_PLATFORM;
      leave['AppVersion'] = Constants.VERSION;


      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/LeaveRequest/LeaveRequest`, leave, {})
          .then(data => {
            if (data.data == null || data.data == undefined || !data.data) {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log('requestLeave leave data: ', leave);//mycomment

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

              this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
              return;
            }
            this.loading.dismiss();
            this.showDialog("DONE!", "Your leave has been saved", true, "Great!");
          })
          .catch(error => {
            this.loading.dismiss();
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
          });
      });
    });
  }

  requestLeaveForSubordinate(leave: any) {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      leave['SessionID'] = val[Constants.KEY_RECORD_ID];
      leave['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      leave['Token'] = val[Constants.KEY_TOKEN];
      leave['AppPlatForm'] = Constants.APP_PLATFORM;
      leave['AppVersion'] = Constants.VERSION;


      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/GetSubordinates/LeaveRequest`, leave, {})
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

              this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
              return;
            }
            this.loading.dismiss();
            this.showDialog("DONE!", "Requested leave has been saved", true, "Great!");
          })
          .catch(error => {
            this.loading.dismiss();
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
          });
      });
    });
  }

  updateLeave(leave: any) {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      leave['SessionID'] = val[Constants.KEY_RECORD_ID];
      leave['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      leave['Token'] = val[Constants.KEY_TOKEN];
      leave['AppPlatForm'] = Constants.APP_PLATFORM;
      leave['AppVersion'] = Constants.VERSION;

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/LeaveRequest/UpdateLeaveRequest`, leave, {})
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

              this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
              return;
            }

            this.loading.dismiss();
            this.showDialog("DONE!", "Your leave has been saved", true, "Great!");

          })
          .catch(error => {
            this.loading.dismiss();
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
          if (closePage) {
            this.navCtrl.pop();
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  onLeaveTypeChange() {
    this.getAddLeaveEndDate();
    if (this.type == "BL") {
      this.isDurationDisabled = true;
      this.isReasonDisabled = true;
      this.duration = "1";
      this.reason = Reason.personal;
    } else {
      this.isDurationDisabled = false;
      this.isReasonDisabled = false;
    }
  }

  getStatus(): string {
    return (this.isPlanned ? Constants.LEAVE_STATUS_PLANNED : Constants.LEAVE_STATUS_FOR_APPROVAL);
  }

  getConfigFiles(employeeID: string) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        UserID: employeeID,
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        UserType: 'GABC'
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/Config/GetConfigFiles`, request, {})
          .then(data => {
            var jsonData = JSON.parse(data.data);

            if (jsonData['Success'] == "Yes") {

              this.results = jsonData['Value']['tblLeaveTypeList'];

              if (!this.type) {
                this.type = this.results['0']['SEQNO'];
              }

              if (this.subId != '') {
                this.type = this.results['0']['SEQNO'];
              }

            } else {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            }
          })
          .catch(error => {
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
          });
      });
    });
  }

  onSubordinateChange() {
    this.getConfigFiles(this.subId);
  }

  async attachFile() {

    var options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    const actionSheet = await this.actionSheetController.create({
      header: 'Select Action',
      buttons: [{
        text: 'Photos',
        icon: 'image',
        handler: () => {
          this.imagePicker.getPictures(options).then((results) => {

            if (results.length > 1) {
              alert("Please select only 1 image/file");
              return;
            }
            this.getFileName(String(results[0]));

          }, (err) => {
            alert("Error attaching file. Please try again.");
          });
        }
      }, {
        text: 'Files/iCloud',
        icon: 'folder',
        handler: () => {

          this.filePicker.pickFile()
            .then(uri =>
              this.getFileName(String(uri))
            )
            .catch(err => alert("Error attaching file. Please try again."));
        }
      }, {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  showUploadFailDialog(error) {
    console.log("showUploadFailDialog")
    console.log(error)
    if (this.loading) {
      this.loading.dismiss();
    }

    this.uploadSuccess = false;
    alert("Error attaching file. Please try again.");
  }

  connectToFtp(file: string, leave) {
    console.log("connectToFtp");
    this.fTP.connect(Constants.FTP_HOST, Constants.FTP_USERNAME, Constants.FTP_PASSWORD)
      .then((res: any) => this.uploadFileToFtp(file, res, leave))
      .catch((error: any) => this.showUploadFailDialog(error));
  }

  uploadFileToFtp(file: string, res: string, leave) {
    console.log("uploadFileToFtp");
    this.fTP.upload(file, "/Leave/" + this.getNewName())
      .subscribe(
        (res) => {
          if (res == 1) {
            this.onUploadFinish(leave);
            this.fTP.disconnect();
            this.uploadSuccess = true;
          }
          else {
            console.log("Not Res 1");
            console.log(res);
          }
        }, (error) => {
          this.showUploadFailDialog(error)
        });

    // .toPromise()
    // .then((res) => {
    //   if (res == 1) {
    //     this.onUploadFinish(leave);
    //     this.fTP.disconnect();
    //     this.uploadSuccess = true;
    //   }
    //   else{
    //     console.log("Not Res 1");
    //     console.log(res);
    //   }
    // })
    // .catch(err => { this.showUploadFailDialog(err) });
  }

  getFileName(name: string) {
    this.hasAttachment = true;
    this.uriName = name;

    var temp: string[] = name.split("/");
    var awe: string = temp[temp.length - 1];

    this.fileName = awe;

    return awe;
  }

  getPaddedName(name: string) {
    var paddedName: string = "";

    if (name.length <= 9) {
      paddedName = ("000000000" + name).substring(name.length);
    }

    return paddedName;
  }

  getExtension(name: string) {
    var temp: string[] = name.split(".");
    var awe: string = temp[temp.length - 1];

    return awe;
  }

  getNewName() {
    var newFileName: string = this.getFileName(this.uriName);

    newFileName = newFileName.replace(this.getExtension(this.uriName), "");
    newFileName = newFileName.replace(".", "");
    newFileName = newFileName.replace(" ", "");
    newFileName = newFileName.replace("  ", "");
    newFileName = newFileName.replace("/", "");
    newFileName = newFileName.replace("-", "");
    newFileName = newFileName.replace("'", "");

    newFileName = this.getPaddedName(String(this.empId)) + newFileName + this.getCurrentDate() + "." + this.getExtension(this.uriName);

    return newFileName;
  }

  getCurrentDate(): string {
    return this.datepipe.transform(new Date().toString(), 'yyyyMMddHHmmss');
  }

  removeAttachment() {
    this.fileName = "No ";
    this.hasAttachment = false;
  }

  onPlannedChecked() {

    if (this.isPlanned) {
      this.reason = Reason.personal;
      this.isReasonDisabled = true;
    } else if (this.type == "BL") {
      this.isReasonDisabled = true;
      this.reason = Reason.personal;
    } else if (!this.isPlanned && this.type != "BL") {
      this.isReasonDisabled = false;
    }
  }

  isDivisibleByDot5(number: number) {
    return number % .5 == 0;
  }

  onDurationChanged() {
    if (!this.isDivisibleByDot5(Number(this.duration))) {
      alert("Leave Duration should be divisible by 0.50");
      this.duration = "1";
      return;
    }

    this.getAddLeaveEndDate();
  }

  goBack() { this.navCtrl.back(); }
}
