import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { OverlayEventDetail } from '@ionic/core';
import * as Constants from 'src/app/utils/constants.service';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginService } from 'src/app/services/login.service';
import { FilterMenuComponent } from '../../component/filter-menu/filter-menu.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
// import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
// import { Diagnostic } from '@ionic-native/diagnostic/ngx';

@Component({
  selector: 'app-workfromhome',
  templateUrl: './workfromhome.page.html',
  styleUrls: ['./workfromhome.page.scss'],
})
export class WorkfromhomePage implements OnInit {
  WFHList: any[] = [];
  loading;
  loadingDone: boolean = false;
  noError: boolean = true;
  id: any;
  empId;
  event;
  wfhIsEmpty: boolean;
  wfhCurrentDate: boolean;
  errorMessage: string;
  tempResult: any;
  results: any;
  modalIsOpen: boolean;
  wfhModal: string[] = [];
  wfhDateFrom: any;
  wfhDateTo: any;
  wfhStatus: any;
  empSection: any;
  xCoordinate: any;
  yCoordinate: any;
  location: any;
  accomplishment: any;
  geoLocator: any;
  isTimeInOut: string;
  apiResponse: any;
  locationCoords: any;

  constructor(
    private storage: Storage,
    private router: Router,
    private menuCtrl: MenuController,
    private httpApi: HTTP,
    private loginService: LoginService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    // private androidPermissions: AndroidPermissions,
    // private locationAccuracy: LocationAccuracy,
    // private diagnostic: Diagnostic,
    public plt: Platform) { } 


  ngOnInit() {

  }
  ionViewWillEnter() {
    this.loadingDone = false;
    this.plt.ready().then(() => {
      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;
        this.getWFH();
        this.getLocation();
      });
    });
  }


  getWFH() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        User: this.empId,
        DateFrom: this.wfhDateFrom,
        DateTo: this.wfhDateTo,
        Status: this.wfhStatus
      }

      console.log(request);
      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/GetWorkFromHomeDetails`, request, {})
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

            this.tempResult = jsonData['Value']['tblWFHDetails'];
            if (this.tempResult.length == 0) {
              this.wfhIsEmpty = true;
              this.errorMessage = "EMPTY";
            }
            else {
              this.wfhIsEmpty = false;
              // var dates: Array<any> = jsonData['Value']['tblWFHDetails'];

              // dates.forEach(element => {
              //   if (this.getIfDateToday(element['AttendanceRequestDate'])) {
              //     if (element['AttendanceStatus'] == "APPROVED") {
              //       element['isDateToday'] = true;
              //     }
              //     else {
              //       element['isDateToday'] = false;
              //     }
              //   }
              //   else {
              //     element['isDateToday'] = false;
              //   }
              // });

              this.WFHList = jsonData['Value']['tblWFHDetails'];
              console.log(this.WFHList)
              this.noError = true;
            }

            this.loadingDone = true;
            console.log(this.WFHList);
          })

          .catch(error => {
            console.log(error);

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

  updateTimeInOut(wfh: any) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        User: this.empId,
        strIsCheckIn: this.isTimeInOut,
        Location: (this.location == "Loading . . ." || this.location == "Your location cannot be determined" ? this.location = "location cannot be determined" : this.location),
        XCoordinate: this.xCoordinate,
        YCoordinate: this.yCoordinate,
        Accomplishment: this.accomplishment,
        DateFrom: (this.isTimeInOut == '0' ? wfh['DateIn'] : ""),
        ID: this.id,
        RecordID: null
      }

      console.log(request);
      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/WorkFromHome/ProcessWorkFromHomeCheckInOut`, request, {})
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

            if (this.isTimeInOut == "1") {
              this.showDialog("DONE!", "Your time in has been saved", true, "Great!");
              this.getWFH();
            }
            else {
              this.showDialog("DONE!", "Your time out has been saved", true, "Great!");
              this.getWFH();
            }
          })
          .catch(error => {

            this.loading.dismiss();
            this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
          });
      });
    });
 
  }

  getDateMonth(datename: string, procedure: number): string {
    var date = new Date(datename);
    var CurrentMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    if (procedure == 1)
      return CurrentMonth[date.getMonth()].toUpperCase();
    else
      return CurrentMonth[date.getMonth()];
  }

  getDateDate(datename: string): string {
    var date = new Date(datename);
    return date.getDate().toString();
  }

  toTitleCase(txt: string): string {
    return txt.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  getIfDateToday(datename: string): boolean {
    var dateWFH = new Date(datename).setHours(0, 0, 0, 0);
    var dateToday = new Date().setHours(0, 0, 0, 0);

    if (dateToday < dateWFH) {
      return false;
    }
    else if (dateToday > dateWFH) {
      return false;
    }
    else {
      return true;
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
            this.navCtrl.pop();
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  openModal() {
    if (!this.modalIsOpen)
      this.showModal();
  }

  async showModal() {
    this.modalIsOpen = true;
    this.wfhModal["LeaveFrom"] = this.wfhDateFrom;
    this.wfhModal["LeaveTo"] = this.wfhDateTo;
    this.wfhModal["Status"] = this.wfhStatus;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: FilterMenuComponent,
        cssClass: 'modalFilterMenu',
        animated: false,
        backdropDismiss: false,
        componentProps: {
          module: "WorkFromHome",
          data: this.wfhModal
        }

      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        if (detail.data['isDismissed'] == 0) {

          this.wfhDateFrom = detail.data['leaveFrom'];
          this.wfhDateTo = detail.data['leaveTo'];
          this.wfhStatus = detail.data['status'];
          console.log(this.wfhDateFrom, this.wfhDateTo, this.wfhStatus);
          this.loadingDone = false;
          this.noError = true;
          this.wfhIsEmpty = false;

          this.getWFH();
        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }

  refresh(event) {
    this.event = event;
    this.ionViewWillEnter();
  }

  openWFHAdd() {
    this.router.navigate(['/workfromhomeadd',
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

  openTimeIn(wfh: any) {
    console.log(wfh)
    this.id = wfh['ID'];
    this.isTimeInOut = "1";

    // this.xCoordinate = "Not Applicable.";
    // this.yCoordinate = "Not Applicable.";
    // this.location = "Not Applicable.";

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();
      this.updateTimeInOut(wfh);
    });
    //this.getLocation();
    //this.checkLocationEnabled();
    //this.checkGPSPermission();
  }

  openTimeOut(wfh: any) {
    if (this.accomplishment == null || this.accomplishment == undefined || this.accomplishment == '') {
      alert("Please fill up accomplishment.");
      return;
    }

    this.id = wfh['ID'];
    this.isTimeInOut = "0";

    // this.xCoordinate = "Not Applicable.";
    // this.yCoordinate = "Not Applicable.";
    // this.location = "Not Applicable.";

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();
      this.updateTimeInOut(wfh);
    });

    //this.getLocation();
    //this.checkLocationEnabled();
    //this.checkGPSPermission();
  }

  getLocation() {
    console.log('getLocation')

    this.location = "Loading . . ."

    var options = {
      timeout: 5000
    };

    this.geolocation.getCurrentPosition(options).then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp);
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.xCoordinate = resp.coords.longitude;
      this.yCoordinate = resp.coords.latitude;
      // alert(this.xCoordinate + "----" + this.yCoordinate);

      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };

      this.nativeGeocoder.reverseGeocode(this.yCoordinate, this.xCoordinate, options)
        .then((result: NativeGeocoderResult[]) => {
          let loc = result[0];
          this.geoLocator = result[0];

          //.then((result: NativeGeocoderResult[]) => this.geoLocator = JSON.stringify(result[0]))
          console.log(JSON.stringify(result[0]));
          this.location =
            (this.geoLocator['subThoroughfare'] ? this.geoLocator['subThoroughfare'] + " " : "") +
            (this.geoLocator['thoroughfare'] ? this.geoLocator['thoroughfare'] + " " : "") +
            (this.geoLocator['subLocality'] ? this.geoLocator['subLocality'] + " " : "") +
            (this.geoLocator['locality'] ? this.geoLocator['locality'] + " " : "") +
            (this.geoLocator['subAdministrativeArea'] ? this.geoLocator['subAdministrativeArea'] + " " : "") +
            (this.geoLocator['administrativeArea'] ? this.geoLocator['administrativeArea'] + " " : "") +
            (this.geoLocator['countryName'] ? this.geoLocator['countryName'] + " " : "") +
            (this.geoLocator['postalCode'] ? this.geoLocator['postalCode'] + " " : "");

          // {"latitude":"37.785834",
          // "administrativeArea":"CA",
          // "countryCode":"US",
          // "thoroughfare":"Stockton St",
          // "countryName":"United States",
          // "subLocality":"Union Square",
          // "areasOfInterest":[],
          // "locality":"San Francisco",
          // "subThoroughfare":"1",
          // "longitude":"-122.406417",
          // "subAdministrativeArea":"San Francisco",
          // "postalCode":"94108"}

        }).catch((error: any) => {

          this.location = "Your location cannot be determined";
          // alert("Error in GeoLocator err: " + error);
          // alert("Error in GeoLocator err.data: " + error.data);
          // alert("Error in GeoLocator err.err: " + error.error);
          // alert("Error in GeoLocator err.message: " + error.message);
          console.log(error)
          console.log(error.message)
        });

    }).catch((error) => {
      // alert("Error in GeoLocation err: " + error);
      // alert("Error in GeoLocation err.data: " + error.data);
      // alert("Error in GeoLocation err.err: " + error.error);
      // alert("Error in GeoLocation err.message: " + error.message);
      console.log('Error getting location', error);
      console.log(error.message)

    });
  }

  // //Check if application having GPS access permission  
  // checkGPSPermission() {
  //   this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
  //     result => {
  //       if (result.hasPermission) {

  //         //If having permission show 'Turn On GPS' dialogue
  //         alert(result.hasPermission);
  //         this.askToTurnOnGPS();
  //       } else {

  //         //If not having permission ask for permission
  //         alert("RequestGPS");
  //         this.requestGPSPermission();
  //       }
  //     },
  //     err => {
  //       alert(err);
  //     }
  //   );
  // }

  // requestGPSPermission() {
  //   this.locationAccuracy.canRequest().then((canRequest: boolean) => {
  //     if (canRequest) {
  //       alert("LocationAccuracy CanRequest");
  //       console.log("4");
  //     } else {
  //       //Show 'GPS Permission Request' dialogue
  //       this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
  //         .then(
  //           () => {
  //             // call method to turn on GPS
  //             alert("askTurnOn");
  //             this.askToTurnOnGPS();
  //           },
  //           error => {
  //             //Show alert if user click on 'No Thanks'
  //             alert('requestPermission Error requesting location permissions ' + error)
  //           }
  //         );
  //     }
  //   });
  // }

  // askToTurnOnGPS() {
  //   this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
  //     () => {
  //       // When GPS Turned ON call method to get Accurate location coordinates
  //       this.getLocation();
  //     },
  //     error => alert('Error requesting location permissions ' + JSON.stringify(error))
  //   );
  // }

  setDTRDetails(item: any) {
    this.storage.set(Constants.KEY_WFHDETAILS, item);
    console.log(item);
    this.router.navigate(['/workfromhomedetails', 'user'])
  }

}
