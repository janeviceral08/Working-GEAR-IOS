import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { DatePipe } from '@angular/common'
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController, NavController, ActionSheetController } from '@ionic/angular';
import * as Constants from 'src/app/utils/constants.service';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FTP } from '@ionic-native/ftp/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advisoryadd',
  templateUrl: './advisoryadd.page.html',
  styleUrls: ['./advisoryadd.page.scss'],
})
export class AdvisoryaddPage implements OnInit {

  requestType: string[] = [];
  dateOfDuty: string[] = [];
  selectedDateOfDuty: string;
  selectedReqType: string;
  selectedReqTime: string = "TME0002";
  selectedReason: string = "RSN0001";
  selectedDate: string;
  selectedTime: string;
  duration: string;
  isDurationDisabled: boolean;
  isSubDisabled: boolean;
  empId: string;
  remarks: string;
  subId: string;
  loading;
  title: string;
  fromPage: string;

  isRequestTimeDisabled: boolean;

  reqId: string;
  reqType: string;
  reqDate: string;
  reqTime: string;
  reqHrs: string;
  reqDays: string;
  reqReason: string;
  reqRemarks: string;
  reqStartTime: string;
  reqDateOfDuty: string;
  subordinates;
  fileName: string = "No Attachment";
  uriName: string;
  hasAttachment: boolean = false;

  activityResult: boolean = false;

  atdRequestType;
  atdTimeType;
  atdReason;
  fromSubsRequestType;

  constructor(
    private storage: Storage,
    private httpApi: HTTP,
    public datepipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private loadingCtrl: LoadingController,
    private filePicker: IOSFilePicker,
    private camera: Camera,
    private fTP: FTP,
    private imagePicker: ImagePicker,
    private router: Router
  ) { }

  ngOnInit() {
    this.reqId = this.activatedRoute.snapshot.paramMap.get('id');
    this.reqType = this.activatedRoute.snapshot.paramMap.get('type');
    this.reqDate = this.activatedRoute.snapshot.paramMap.get('date');
    this.reqTime = this.activatedRoute.snapshot.paramMap.get('reqtime');
    this.reqHrs = this.activatedRoute.snapshot.paramMap.get('hrs');
    this.reqDays = this.activatedRoute.snapshot.paramMap.get('days');
    this.reqReason = this.activatedRoute.snapshot.paramMap.get('reason');
    this.reqRemarks = this.activatedRoute.snapshot.paramMap.get('remarks');
    this.reqStartTime = this.activatedRoute.snapshot.paramMap.get('starttime');
    this.reqDateOfDuty = this.activatedRoute.snapshot.paramMap.get('dateduty');
    this.subId = this.activatedRoute.snapshot.paramMap.get('subid');
    this.fromPage = this.activatedRoute.snapshot.paramMap.get('page');

    if (this.reqStartTime != '') {
      this.selectedTime = this.convert24Hours(this.reqStartTime.trim());
    }

    this.isRequestTimeDisabled = false;

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
    });

    console.log(this.subId);
    if (this.subId != '') {
      this.getConfigFiles(this.subId);
      this.getReason();
      if (this.fromPage == 'fromSubsProfile') {

        this.isSubDisabled = true;
      }
      else {
        this.isSubDisabled = false;
      }
    } else {
      this.isSubDisabled = false;
      // this.storage.get(`${Constants.KEY_REQTYPE}`).then((val) => {
      //   val.forEach(element => {
      // this.requestType.push(element['DESCRIPTION']);
      // if (this.reqType != '') {
      //   this.selectedReqType = this.getRequestTypeDesc(this.reqType);
      // } else {
      //   this.selectedReqType = this.requestType[0];
      // }

      console.log('getRequestType');
      this.getRequestType();
      this.getReason();

      this.onRequestTypeChanged();
      // });

      this.setTitle();

      this.getDateOfDuty();

      // });
      console.log(this.selectedReqType);
      this.activityResult = true;
    }

    this.storage.get(`${Constants.KEY_SUBORDINATES}`).then((val) => {
      this.subordinates = val;
    });

    // this.getDateOfDuty();
  }

  setTitle() {
    if (this.reqDate == '') {
      this.title = "Add Attd. Advisory"
    } else {
      this.title = "Edit Attd. Advisory"
      this.selectedDate = this.datepipe.transform(new Date(this.reqDate).toString(), 'yyyy-MM-dd');
      this.selectedReqTime = this.reqTime;

      if (this.reqDateOfDuty != '') {
        this.selectedDateOfDuty = this.reqDateOfDuty;
      }

      // if (this.reqTime != '') {
      //   this.selectedTime = this.reqTime;
      // }

      if (this.reqReason != '') {
        this.selectedReason = this.reqReason;
      }

      this.setDuration();

      this.remarks = this.reqRemarks;
    }
  }

  setDuration() {
    if (this.reqDays != '0') {
      this.duration = this.reqDays;
    } else if (this.reqHrs != '0') {
      this.duration = this.reqHrs;
    } else {
      this.duration = '0';
    }
  }

  onRequestTypeChanged() {
    this.getTimeType();

    this.isRequestTimeDisabled = (this.selectedReqType == Constants.ATD_TYPE_CODE_CTO);
    this.isDurationDisabled = (this.selectedReqType == Constants.ATD_TYPE_CODE_CTO);

    switch (this.selectedReqType) {
      case Constants.ATD_TYPE_CODE_OS: {
        this.isRequestTimeDisabled = true;
        this.isDurationDisabled = false;
        // this.selectedReqTime = "TME0004";
        break;
      }
      case Constants.ATD_TYPE_CODE_AL: {
        this.isRequestTimeDisabled = true;
        this.isDurationDisabled = false;
        // this.selectedReqTime = "TME0002";
        this.setDuration();
        break;
      }
      case Constants.ATD_TYPE_CODE_CTO: {
        // this.selectedReqTime = "TME0002";
        this.duration = "4";
        break;
      }
      default: {
        this.setDuration();
        break;
      }
    }
  }

  sendAdvisory() {

    console.log("***** advisoryadd.page.ts :: sendAdvisory() *****");
    console.log('this.selectedDate: ',this.selectedDate);//mycomment
    console.log('this.selectedTime: ',this.selectedTime);//mycomment
    let advisory = {
      USER: this.empId,
      EMPNO: Number(this.empId)
    }

    if (this.selectedDate == null || this.selectedDate == undefined || this.selectedDate == '') {
      alert("Request Date is empty");
      return;
    }

    if (this.selectedReqTime == "TME0002") {

      if (this.duration == null || this.duration == undefined || this.duration == '') {
        alert("Request Time duratioin is empty");
        return;
      }

      advisory['HRS'] = String(this.duration);
    }


    if (this.selectedReqType == Constants.ATD_TYPE_CODE_OS) {
      if (this.selectedDateOfDuty == null || this.selectedDateOfDuty == undefined || this.selectedDateOfDuty == '') {
        alert("Date of duty is empty");
        return;
      }

      advisory['DATEOFDUTY'] = this.selectedDateOfDuty;
    }

    if (this.selectedReqType == Constants.ATD_TYPE_CODE_OB) {
      if (this.selectedTime == null || this.selectedTime == undefined || this.selectedTime == '') {
        alert("Start time is empty");
        return;
      }
      advisory['STARTTIME'] = this.datepipe.transform(this.selectedTime, 'hh:mm:ss');
    }

    if (this.remarks == null || this.remarks == undefined || this.remarks == '') {
      alert("Remarks is empty");
      return;
    }

    advisory['REMARKS'] = this.remarks;
    advisory['REQUESTTYPECODE'] = this.selectedReqType;
    advisory['REQUESTDATE'] = this.datepipe.transform(this.selectedDate, 'MM/dd/yyyy');
    advisory['REQTIME'] = this.selectedReqTime;
    advisory['REASONCODE'] = this.selectedReason;
    advisory['STATUSCODE'] = Constants.LEAVE_STATUS_FOR_APPROVAL;

    if (this.subId != '') {
      advisory['EMPNO'] = Number(this.subId);
      advisory['USER'] = this.empId;
      advisory['STATUSCODE'] = Constants.LEAVE_STATUS_APPROVED;
    }

    if (this.fromPage == 'fromSubsProfile') {
      advisory['ID'] = this.reqId;
      advisory['REQUESTTYPECODE'] = this.reqType;
      advisory['EMPNO'] = Number(this.subId);
      this.selectedReqType = this.reqType;
    }

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      if (this.hasAttachment) {
        advisory['ATTACHMENT'] = this.getNewName();
        this.connectToFtp(this.uriName, advisory);
        return;
      }

      if (this.reqDate != '') {
        advisory['ID'] = this.reqId;
        advisory['ISCANCEL'] = 0;
        advisory['SHOWALL'] = false;
        console.log(advisory)
        this.updateAdvisory(advisory);
      } else {
        console.log("***** advisory: %O", advisory);
        this.requestAdvisory(advisory);
      }
    });
  }

  onUploadFinish(advisory) {

    if (this.reqDate != '') {
      advisory['ID'] = this.reqId;
      advisory['ISCANCEL'] = 0;
      advisory['SHOWALL'] = false;
      this.updateAdvisory(advisory);
    } else {
      this.requestAdvisory(advisory);
    }
  }


  requestAdvisory(advisory: any) {
    this.requestAttendanceAvisory(advisory);
  }

  requestAttendanceAvisory(advisory: any) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      advisory['RecordID'] = val[Constants.KEY_RECORD_ID];
      advisory['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      advisory['Token'] = val[Constants.KEY_TOKEN];
      advisory['AppPlatForm'] = Constants.APP_PLATFORM;
      advisory['AppVersion'] = Constants.VERSION;
      advisory['SessionID'] = val[Constants.KEY_RECORD_ID];

      console.log(advisory);

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
        var url = `${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisory/AddAttendanceAdvisory`;
        console.log("***** url: " + url);
        this.httpApi.post(url, advisory, {})
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

              this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
              return;
            }
            this.loading.dismiss();

            if (this.subId != '') {
              this.showDialog("DONE!", "Requested " + this.getRequestTypeDesc(this.selectedReqType) + " has been saved", true, "Great!");
            }
            else {
              this.showDialog("DONE!", "Your " + this.getRequestTypeDesc(this.selectedReqType) + " has been saved", true, "Great!");
            }
          })
          .catch(error => {

            this.loading.dismiss();
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
          });
      });
    });

  }

  updateAdvisory(advisory: any) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      advisory['RecordID'] = val[Constants.KEY_RECORD_ID];
      advisory['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      advisory['Token'] = val[Constants.KEY_TOKEN];
      advisory['AppPlatForm'] = Constants.APP_PLATFORM;
      advisory['AppVersion'] = Constants.VERSION;
      advisory['SessionID'] = val[Constants.KEY_RECORD_ID];

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisory/UpdateAttendanceAdvisory`, advisory, {})
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
              this.loading.dismiss();
              return;
            }
            this.loading.dismiss();

            this.showDialog("DONE!", "Your " + this.getRequestTypeDesc(this.selectedReqType) + " has been saved", true, "Great!");
          })
          .catch(error => {
            this.loading.dismiss();
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
          });
      });
    });
  }

  getRequestType() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        DATEFROM: null,
        DATETO: null,
        EMPNO: val[Constants.KEY_USER_ID],
        DEPARTMENTCODE: null,
        REASONCODE: null,
        STATUSCODE: null,
        ID: null,
        USER: val[Constants.KEY_USER_ID],
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION
      }

      console.log(request);

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/GetAttendanceType`, request, {})
          .then(data => {
            var jsonData = JSON.parse(data.data);

            if (jsonData['Success'] == "Yes") {

              this.atdRequestType = jsonData['Value'];
              console.log(this.atdRequestType);
              console.log(this.reqType);

              if (this.reqType != '') {
                this.selectedReqType = this.reqType;
              } else {
                this.selectedReqType = this.atdRequestType[0]["SEQNO"];
              }

              this.getTimeType();

            } else {
              alert("Connection failed. Please try again.");
            }
          })
          .catch(error => {
            alert("Connection failed. Please try again.");
          });
      });
    });
  }

  getTimeType() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {
      let request = {
        DATEFROM: null,
        DATETO: null,
        EMPNO: val[Constants.KEY_USER_ID],
        DEPARTMENTCODE: null,
        REASONCODE: null,
        STATUSCODE: null,
        ID: null,
        USER: val[Constants.KEY_USER_ID],
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        REQUESTTYPECODE: this.selectedReqType
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
        console.log(request);
        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/GetAttendanceTimeType`, request, {})
          .then(data => {
            var jsonData = JSON.parse(data.data);

            console.log(jsonData);

            if (jsonData['Success'] == "Yes") {

              this.atdTimeType = jsonData['Value'];

              if (this.atdTimeType.length > 0) {
                this.selectedReqTime = this.atdTimeType[0]["SEQNO"];
              }

            } else {
              alert("Connection failed. Please try again.");
            }
          })
          .catch(error => {
            console.log(error.error)

            alert("Connection failed. Please try again.");
          });
      });
    });
  }

  getReason() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        DATEFROM: null,
        DATETO: null,
        EMPNO: val[Constants.KEY_USER_ID],
        DEPARTMENTCODE: null,
        REASONCODE: null,
        STATUSCODE: null,
        ID: null,
        USER: val[Constants.KEY_USER_ID],
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/GetAttendanceReasonType`, request, {})
          .then(data => {
            var jsonData = JSON.parse(data.data);

            console.log(jsonData);

            if (jsonData['Success'] == "Yes") {

              this.atdReason = jsonData['Value'];

              if (this.atdReason.length > 0) {
                this.selectedReason = this.atdReason[0]["SEQNO"];
              }

            } else {
              alert("Connection failed. Please try again.");
            }
          })
          .catch(error => {
            console.log(error.error)

            alert("Connection failed. Please try again.");
          });
      });
    });
  }

  getDateOfDuty() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        UserID: val[Constants.KEY_USER_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        UserType: 'GABC',
        SessionID: val[Constants.KEY_RECORD_ID]
      }


      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/Config/GetConfigFiles`, request, {})
          .then(data => {
            var jsonData = JSON.parse(data.data);

            if (jsonData['Success'] == "Yes") {
              var dates: Array<any> = jsonData['Value']['tblDateOfDutyList'];

              dates.forEach(element => {
                this.dateOfDuty.push(element['DESCRIPTION']);
                this.selectedDateOfDuty = this.dateOfDuty[0];
              });

            } else {

              alert("Connection failed. Please try again.");
            }
          })
          .catch(error => {

            alert("Connection failed. Please try again.");
          });
      });
    });
  }

  getRequestTypeCode(type: string): string {
    switch (type) {
      case "Authorized Under Time": {
        return Constants.ATD_TYPE_CODE_AUT;
      }
      case "Authorized Late": {
        return Constants.ATD_TYPE_CODE_AL;
      }
      case "CTO": {
        return Constants.ATD_TYPE_CODE_CTO;
      }
      case "Official Business": {
        return Constants.ATD_TYPE_CODE_OB;
      }
      case "Offset": {
        return Constants.ATD_TYPE_CODE_OS;
      }
      case "Authorized Shifting": {
        return Constants.ATD_TYPE_CODE_AS;
      }
      default: {
        return type;
      }
    }
  }

  getRequestTypeDesc(type: string): string {
    switch (type) {
      case Constants.ATD_TYPE_CODE_AUT: {
        return "Authorized Under Time";
      }
      case Constants.ATD_TYPE_CODE_AL: {
        return "Authorized Late";
      }
      case Constants.ATD_TYPE_CODE_CTO: {
        return "CTO";
      }
      case Constants.ATD_TYPE_CODE_OB: {
        return "Official Business";
      }
      case Constants.ATD_TYPE_CODE_OS: {
        return "Offset";
      }
      case Constants.ATD_TYPE_CODE_AS: {
        return "Authorized Shifting";
      }
      case 'ATD0013': {
        return "Work From Home";
      }
      default: {
        return type;
      }
    }
  }


  async showDialog(title: string, message: string, closePage: boolean, buttonText: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [{
        text: buttonText,
        handler: () => {
          if (closePage) {
            this.router.navigate(['/advisorytypelist']);

            //this.navCtrl.pop();
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
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
        UserType: 'GABC',
        SessionID: val[Constants.KEY_RECORD_ID]
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/Config/GetConfigFiles`, request, {})
          .then(data => {
            var jsonData = JSON.parse(data.data);
            console.log(jsonData)

            if (jsonData['Success'] == "Yes") {

              var types: any = jsonData['Value']['tblRequestType'];

              var dates: any = jsonData['Value']['tblDateOfDutyList'];

              this.atdRequestType = types;

              // types.forEach(element => {
              //   this.requestType.push(element['DESCRIPTION']);
              // });

              this.selectedReqType = this.atdRequestType[0]['SEQNO'];
              this.onRequestTypeChanged();
              this.setTitle();

              dates.forEach(element => {
                this.dateOfDuty.push(element['DESCRIPTION']);
                this.selectedDateOfDuty = this.dateOfDuty[0];
              });


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
    console.log(this.subId);
    this.dateOfDuty = [];
    this.requestType = [];
    this.getConfigFiles(this.subId);
  }

  convert24Hours(time: string): string {
    var timeSplit: string[] = time.split(':');
    var tempHour: string = timeSplit[0];
    var min: string = timeSplit[1].substring(0, 2);
    var amPm: string = time.substring(time.length - 2, time.length);
    var hour;

    if (amPm == "PM") {
      hour = Number(tempHour) + 12;
      return String(hour) + ':' + min;

    } else {
      return tempHour + ':' + min;
    }
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
            .catch(err => console.log('Error :', err));
        }
      }, {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  connectToFtp(file: string, advisory) {

    this.fTP.connect(Constants.FTP_HOST, Constants.FTP_USERNAME, Constants.FTP_PASSWORD)
      .then((res: any) => this.uploadFileToFtp(file, res, advisory))
      .catch((error: any) => this.showUploadError());

  }

  uploadFileToFtp(file: string, res: string, advisory) {

    this.fTP.upload(file, "/AttendanceAdvisory/Year/" + this.getNewName())
      .toPromise()
      .then((res) => {
        if (res == 1) {
          this.onUploadFinish(advisory);
          this.fTP.disconnect();
        }
      })
      .catch(err => { this.showUploadError(); });
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
    this.fileName = "No Attachment";
    this.hasAttachment = false;
  }

  showUploadError() {
    if (this.loading) {
      this.loading.dismiss();
    }
    alert("Error uploading attached file. Please try again later.")
  }

  goBack() {
    // this.router.navigate(['/advisorytypelist']);
    this.navCtrl.back();
  }
}
