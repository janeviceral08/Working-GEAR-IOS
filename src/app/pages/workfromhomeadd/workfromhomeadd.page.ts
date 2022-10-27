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
import { LeaveTime, Reason } from 'src/app/services/leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workfromhomeadd',
  templateUrl: './workfromhomeadd.page.html',
  styleUrls: ['./workfromhomeadd.page.scss'],
})
export class WorkfromhomeaddPage implements OnInit {
  requestType: string[] = [];
  dateOfDuty: string[] = [];
  selectedReqType: string = "Work From Home"
  selectedDateOfDuty: string;
  selectedDate: string;
  selectedTime: string;
  duration: string;
  isDurationDisabled: boolean;
  empId: string;
  remarks: string;
  subId: string;
  loading;
  title: string;
  requestTimeList: any;
  requestReasonList: any;
  fromPage: string;
  timeFrom: LeaveTime = LeaveTime.AM;
  timeTo: LeaveTime = LeaveTime.AM;
  isRequestTimeDisabled: boolean;
  dateTo;

  reqId: string;
  reqType: string;
  reqDate: string;
  reqDay: string;
  reqDateOut: string;
  reqRemarks: string;
  subordinates;
  fileName: string = "No Attachment";
  uriName: string;
  hasAttachment: boolean = false;
  loadingGetEndDate: any;
  reqTimeFrom: any;
  reqTimeTo: any;

  // WFH Credits
  loadingGetWFHCredits: any;
  wfhCredits: string;
  wfhBalance: string;
  wfhPosted: string;
  wfhApproved: string;
  wfhApproval: string;
  loadingGetWFHBalPerWk: any;
  wfhBalPerWk: string;
  useCredits: any = 0;

  activityResult: boolean = false;
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
    private router: Router) { }

  ngOnInit() {
    this.reqId = this.activatedRoute.snapshot.paramMap.get('id');
    this.reqType = "Work From Home";
    this.reqDate = this.activatedRoute.snapshot.paramMap.get('reqdate');
    this.reqDay = this.activatedRoute.snapshot.paramMap.get('reqtime');
    this.reqDateOut = this.activatedRoute.snapshot.paramMap.get('reason');
    this.reqRemarks = this.activatedRoute.snapshot.paramMap.get('remark');
    this.subId = this.activatedRoute.snapshot.paramMap.get('subid');
    this.reqTimeFrom = this.activatedRoute.snapshot.paramMap.get('timefrom');
    this.reqTimeTo = this.activatedRoute.snapshot.paramMap.get('timeto');
    this.useCredits = false;

    this.isRequestTimeDisabled = false;

    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
    });

    this.storage.get(`${Constants.KEY_REQTYPE}`).then((val) => {

      this.setTitle();
    });

    this.activityResult = true;

    this.storage.get(`${Constants.KEY_SUBORDINATES}`).then((val) => {
      this.subordinates = val;
    });

    this.getWFHCredits();

  }

  setTitle() {
    if (this.reqDate == '') {
      this.title = "Add Work From Home"
    } else {
      this.title = "Edit Work From Home"
      this.selectedDate = this.datepipe.transform(new Date(this.reqDate).toString(), 'yyyy-MM-dd');

      this.remarks = this.reqRemarks;
      this.duration = this.reqDay;
      this.dateTo = this.datepipe.transform(new Date(this.reqDateOut).toString(), 'yyyy-MM-dd');
      this.timeTo = this.reqTimeTo;
      this.timeFrom = this.reqTimeFrom;
    }
  }

  sendAdvisory() {

    if (this.selectedDate == null || this.selectedDate == undefined || this.selectedDate == '') {
      alert("Request Date is empty");
      return;
    }

    if (this.remarks == null || this.remarks == undefined || this.remarks == '') {
      alert("Task is empty");
      return;
    }
 
    if (this.isNotCurrentYear(this.selectedDate)) {
      this.showIsNotYearWarning();
      return;
    }
    // else {
    //   this.postRequest();
    // }

    // this.getWfhBalPerWk();

    // ***** WFH Credits Validation *****
    var WIO = 3; // 3 is Wednesday
    var WFHWeeklyBalance = parseInt(this.wfhBalPerWk);
    var WFHCredits = parseInt(this.wfhCredits);
    var wfhDuration = parseInt(this.duration);
    var date1 = new Date(this.datepipe.transform(this.selectedDate, 'MM/dd/yyyy'));
    var date2 = new Date(this.datepipe.transform(this.dateTo, 'MM/dd/yyyy'));

    if (date1 == null || date2 == null) {
      this.showDialog("ERROR!", "Dates cannot be empty!", true, "Okay");
      this.loading.dismiss();
      return;
    }

    // 0 - Sunday, 1 - Monday, ..., 6 - Saturday
    var day1 = date1.getDay();
    var day2 = date2.getDay();

    if (wfhDuration > 1) {
      // *** MULTIPLE WFH FILING ***
      // case 1: filed for more than 1 WFH and falls on a required WIO
      if (day1 == WIO || day2 == WIO || (day1 < WIO && day2 > WIO)) {
        this.showDialog("ERROR!", "One of your requested WFH dates fall on a mandated WIO. Please review the request.", true, "Okay");
        return;
      }
      // case 3: filed for more than 1 WFH and exceeded the 3 max WFH per week
      if (wfhDuration > WFHWeeklyBalance) {
        this.showDialog("ERROR!", "You have exceeded the number of allowable WFH for the week.", true, "Okay");
        return;
      } else {
        // uses has enough credits, proceed filing
        console.log("***** [MULTIPLE] No WFH Credits Applied *****");
        this.postRequest();
      }
    } else {
      // *** SINGLE WFH FILING ***
      // case 2: filed for 1 WFH and falls on a required WIO
      if (day1 == WIO) {
        // Check WFH credits available
        if (WFHCredits > 0) {
          // user has credits, confirm WFH Credits usage
          this.showConfrimWFHCase2();
        } else {
          this.showDialog("ERROR!", "No more WFH Credits available. Please review the request.", true, "Okay");
        }
        return;
      }
      // case 4: filed the max 3 WFH days for the week and wanted to file 1 more
      if (WFHWeeklyBalance == 0) {
        this.showConfrimWFHCase4();
        return;
      } else {
        // user has credits, proceed filing
        console.log("***** [SINGLE] No WFH Credits Applied *****");
        this.postRequest();
      }
    }
    

  }

  async showConfrimWFHCase2() {
    const alert = await this.alertController.create({
      header: "Warning",
      message: "Your WFH request is on a mandated WIO. Do you wish to use your WFH credits?",
      buttons: [{
        text: 'No',
        role: 'cancel'
      }, {
        text: "Yes",
        handler: () => {
          this.useCredits = true;
          this.postRequest();
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  async showConfrimWFHCase4() {
    const alert = await this.alertController.create({
      header: "Warning",
      message: "You have exceeded the number of allowable WFH for the week. Do you wish to use your WFH credits?",
      buttons: [{
        text: 'No',
        role: 'cancel'
      }, {
        text: "Yes",
        handler: () => {
          this.useCredits = true;
          this.postRequest();
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  postRequest() {

    let advisory = {
      USER: this.empId,
      EMPNO: Number(this.empId)
    }

    advisory['REMARKS'] = this.remarks;
    advisory['REQUESTTYPECODE'] = Constants.ATD_TYPE_CODE_WFH;
    advisory['REQUESTDATE'] = this.datepipe.transform(this.selectedDate, 'MM/dd/yyyy');
    advisory['REASONCODE'] = Constants.ATD_REASON_CODE_WFH;
    advisory['STATUSCODE'] = Constants.LEAVE_STATUS_FOR_APPROVAL;
    advisory['DAYS'] = this.duration;
    advisory['REQUESTTIMEFROM'] = this.timeFrom;
    advisory['REQUESTTIMETO'] = this.timeTo;
    advisory['willUseWFHCredits'] = this.useCredits;

    console.log("***** postRequest() *****");
    console.log("date: " + advisory['REQUESTDATE']);
    console.log("willUseWFHCredits: " + advisory['willUseWFHCredits']);
    
    if (this.subId != '') {
      advisory['EMPNO'] = Number(this.subId);
      advisory['USER'] = this.empId;
      advisory['STATUSCODE'] = Constants.LEAVE_STATUS_APPROVED;
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
        this.updateAdvisory(advisory);
      } else {
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

      advisory['SessionID'] = val[Constants.KEY_RECORD_ID];
      advisory['SecurityStamp'] = val[Constants.KEY_SECURITY_STAMP];
      advisory['Token'] = val[Constants.KEY_TOKEN];
      advisory['AppPlatForm'] = Constants.APP_PLATFORM;
      advisory['AppVersion'] = Constants.VERSION;

      console.log(advisory);

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/AddAttendanceAdvisory`, advisory, {})
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

            if (this.subId != '') {
              this.showDialog("DONE!", "Requested " + this.selectedReqType + " has been saved", true, "Great!");
            }
            else {
              this.showDialog("DONE!", "Your " + this.selectedReqType + " has been saved", true, "Great!");
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

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/UpdateAttendanceAdvisory`, advisory, {})
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
            this.fromPage = "EDIT";
            this.showDialog("DONE!", "Your " + this.selectedReqType + " has been saved", true, "Great!");
          })
          .catch(error => {
            this.loading.dismiss();
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
          });
      });
    });
  }

  isNotCurrentYear(date: any): boolean {
    var currentYear = new Date().getFullYear();
    var selectedYear = new Date(date).getFullYear();

    return currentYear != selectedYear;
  }

  async showIsNotYearWarning() {
    const alert = await this.alertController.create({
      header: "Warning",
      message: "The year you selected is not the current year. Would you like to proceed?",
      buttons: [{
        text: 'No',
        role: 'cancel'
      }, {
        text: "Yes",
        handler: () => {
          this.postRequest();
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  async showDialog(title: string, message: string, closePage: boolean, buttonText: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [{
        text: buttonText,
        handler: () => {
          if (closePage) {
            if (this.fromPage == "EDIT") {
              this.router.navigate(['/main/workfromhome'])
            }
            else {
              this.navCtrl.pop();
            }
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  onSubordinateChange() {
    console.log(this.subId);
    this.dateOfDuty = [];
    this.requestType = [];
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

  goBack() { this.navCtrl.back(); }

  getAddLeaveEndDate() {

    console.log(this.selectedDate + " " + this.duration)


    if (!this.duration) {
      return;
    }

    if (!this.datepipe.transform(this.selectedDate, 'MM/dd/yyyy')) {
      return;
    }

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {

        USER: this.empId,
        EMPNO: this.empId,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatform: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,

        ID: "",
        REQUESTTYPECODE: Constants.ATD_TYPE_CODE_WFH,
        REQUESTDATE: this.datepipe.transform(this.selectedDate, 'MM/dd/yyyy'),
        REQUESTDATETO: this.datepipe.transform(this.selectedDate, 'MM/dd/yyyy'),
        REMARKS: "",
        DAYS: this.duration,
        REASONCODE: "",
        STATUSCODE: "",
        REQUESTTIMEFROM: this.timeFrom,
        REQUESTTIMETO: ""
      }

      if (this.subId != '') {
        request['EmployeeId'] = this.subId;
      }

      this.loadingCtrl.create({
        message: "Loading..."
      }).then((overlay) => {

        this.loadingGetEndDate = overlay;

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/GetWorkFromHomeEndDateTime`, request, {})
            .then(data => {

              console.log(data.data)
              if (data.data == null || data.data == undefined || !data.data) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                this.loadingGetEndDate.dismiss();
                return;
              }

              var jsonData = JSON.parse(data.data);
              console.log(jsonData)
              this.loadingGetEndDate.dismiss();

              if (jsonData['Status'] != Constants.POST_SUCCESS) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                this.loadingGetEndDate.dismiss();
                return;
              }

              if (jsonData['Success'] != Constants.POST_YES) {
                this.loadingGetEndDate.dismiss();

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

              this.selectedDate = this.datepipe.transform(new Date(jsonData['Value'][0]['REQUEST_DATE_FROM']).toString(), 'yyyy-MM-dd');
              this.dateTo = this.datepipe.transform(new Date(jsonData['Value'][0]['REQUEST_DATE_TO']).toString(), 'yyyy-MM-dd');
              this.timeTo = jsonData['Value'][0]['REQUEST_TIME_TO'];

              this.loadingGetEndDate.dismiss();

              // date is now available, request WFH Weekly Balance for that week
              this.getWfhBalPerWk();

            })
            .catch(error => {
              console.log(error.error)
              this.loadingGetEndDate.dismiss();
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            });
        });
      });
    });
  }

  onDurationChanged() {
    if (!this.isDivisibleByDot5(Number(this.duration))) {
      alert("Duration should be divisible by 0.50");
      this.duration = "1";
      return;
    }

    this.getAddLeaveEndDate();
  }

  isDivisibleByDot5(number: number) {
    return number % .5 == 0;
  }

  // Get WFH credits available
  getWFHCredits() {

    console.log("***** getWFHCredits() *****");

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      var d = new Date();
      var datestring = d.getFullYear()
      + "-" + ("0" + (d.getMonth()+1)).slice(-2)
      + "-" + ("0" + d.getDate()).slice(-2) ;

      let request = {

        USER: this.empId,
        EMPNO: this.empId,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatform: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        REQUESTTYPECODE: Constants.ATD_TYPE_CODE_WFH,
        REQUESTDATE: datestring

      }

      this.loadingCtrl.create({
        message: "Loading..."
      }).then((overlay) => {

        this.loadingGetWFHCredits = overlay;

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/GetAttendanceAdvisoryCredits`, request, {})
            .then(data => {

              console.log(data.data)
              if (data.data == null || data.data == undefined || !data.data) {
                this.showDialog("ERROR! [1]", Constants.CONNECTION_ERROR, true, "Okay");
                this.loadingGetWFHCredits.dismiss();
                return;
              }

              var jsonData = JSON.parse(data.data);
              console.log(jsonData)
              this.loadingGetWFHCredits.dismiss();

              if (jsonData['Status'] != Constants.POST_SUCCESS) {
                this.showDialog("ERROR! [2]", Constants.CONNECTION_ERROR, true, "Okay");
                this.loadingGetWFHCredits.dismiss();
                return;
              }

              if (jsonData['Success'] != Constants.POST_YES) {
                this.loadingGetWFHCredits.dismiss();

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

                this.showDialog("ERROR! [3]", jsonData['Message'], false, "Okay");
                return;
              }

              this.wfhCredits = jsonData['Value'][0]['CREDITS'];
              this.wfhBalance = jsonData['Value'][0]['BALANCE'];
              this.wfhPosted = jsonData['Value'][0]['AVAILED'];
              this.wfhApproval = jsonData['Value'][0]['APPROVAL'];
              this.wfhApproved = jsonData['Value'][0]['APPROVED'];

              console.log("***** wfhCredits: " + this.wfhCredits);
              console.log("***** wfhBalance: " + this.wfhBalance);
              console.log("***** wfhPosted: " + this.wfhPosted);
              console.log("***** wfhApproval: " + this.wfhApproval);
              console.log("***** wfhApproved: " + this.wfhApproved);

              this.loadingGetWFHCredits.dismiss();
            })
            .catch(error => {
              console.log(error.error)
              this.loadingGetWFHCredits.dismiss();
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            });
        });
      });
    });
  }

  // Get weekly WFH balance for the week available
  getWfhBalPerWk() {

    console.log("***** getWfhBalPerWk() *****");

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      var d = new Date(this.datepipe.transform(this.selectedDate, 'MM/dd/yyyy'));
      var datestring = d.getFullYear()
      + "-" + ("0" + (d.getMonth()+1)).slice(-2)
      + "-" + ("0" + d.getDate()).slice(-2) ;

      let request = {

        USER: this.empId,
        EMPNO: this.empId,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatform: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        REQUESTTYPECODE: Constants.ATD_TYPE_CODE_WFH,
        REQUESTDATE: datestring

      }

      console.log("***** request:");
      console.log("USER: " + request.USER);
      console.log("SessionID: " + request.SessionID);
      console.log("SecurityStamp: " + request.SecurityStamp);
      console.log("Token: " + request.Token);
      console.log("AppPlatform: " + request.AppPlatform);
      console.log("AppVersion: " + request.AppVersion);
      console.log("REQUESTTYPECODE: " + request.REQUESTTYPECODE);
      console.log("REQUESTDATE: " + request.REQUESTDATE);

      this.loadingCtrl.create({
        message: "Loading..."
      }).then((overlay) => {

        this.loadingGetWFHBalPerWk = overlay;

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/GetEmployeeWFHBalancePerWeek`, request, {})
            .then(data => {

              console.log(data.data)
              if (data.data == null || data.data == undefined || !data.data) {
                this.showDialog("ERROR! [1]", Constants.CONNECTION_ERROR, true, "Okay");
                this.loadingGetWFHBalPerWk.dismiss();
                return;
              }

              var jsonData = JSON.parse(data.data);
              console.log(jsonData)
              this.loadingGetWFHBalPerWk.dismiss();

              if (jsonData['Status'] != Constants.POST_SUCCESS) {
                this.showDialog("ERROR! [2]", Constants.CONNECTION_ERROR, true, "Okay");
                this.loadingGetWFHBalPerWk.dismiss();
                return;
              }

              if (jsonData['Success'] != Constants.POST_YES) {
                this.loadingGetWFHBalPerWk.dismiss();

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

                this.showDialog("ERROR! [3]", jsonData['Message'], false, "Okay");
                return;
              }

              this.wfhBalPerWk = jsonData['Value'][0]['Column1']
              console.log("***** wfhBalPerWk: " + this.wfhBalPerWk);

              this.loadingGetWFHBalPerWk.dismiss();
            })
            .catch(error => {
              console.log(error.error)
              this.loadingGetWFHBalPerWk.dismiss();
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            });
        });
      });
    });
  }

}
