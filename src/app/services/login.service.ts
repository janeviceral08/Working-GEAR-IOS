import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController, Platform, NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import * as Constants from 'src/app/utils/constants.service';
import { BehaviorSubject } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

// import { Firebase } from '@ionic-native/firebase/ngx';
import { fbind } from 'q';

import { FirebaseX } from "@ionic-native/firebase-x/ngx";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  authenticationState = new BehaviorSubject(false);

  urlHris = 'http://150.200.144.219:9857';
  private loading;
  itemsLeaveTypes: any = [];

  constructor
    (private http: HTTP,
      private loadingCtrl: LoadingController,
      private storage: Storage,
      private router: Router,
      private iab: InAppBrowser,
      private alertController: AlertController,
      private navCtrl: NavController,
      // private firebase: Firebase,
      private fcm: FirebaseX,
      private plt: Platform
    ) {

     this.isAlertOpen = false;

    this.plt.ready().then(() => {
      this.checkToken();
    })
  }

  attemptlogin(username: string, password: string, user_type: string) {

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();

      //TODO release check
      // this.fcm.hasPermission()
      //   .then((hasPermission) => {
      //     console.log("Firebase hasPermission " + hasPermission)

      //     if (hasPermission) {
      //       this.fcm.getToken().then(token => {
      //         console.log("FirebaseId: " + token);
      //         this.postLogin(username, password, token, user_type);
      //       });
      //     } else {
      //       this.fcm.grantPermission().then((hasPermission) => {
      //         this.fcm.getToken().then(token => {
                this.postLogin(username, password, 'token', user_type);
        //       });

        //     })
        //       .catch((error) => {
        //         alert("Please allow permission for notifications in your settings.");
        //         console.log("FirebaseId: error " + error);
        //         this.loading.dismiss();
        //       });
        //   }
        // })
        // .catch((error) => {
        //   alert("Connections Error please try again.");
        //   console.log("FirebaseId: error " + error);
        //   this.loading.dismiss();
        // });
    });
  }

  postLogin(username: string, password: string, fbId: string, usertype: string) {
    console.log("postLogin");

    this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

      var uri: string = `${value[Constants.SERVER_URL]}/api/Config/LogIn?employeeID=${encodeURIComponent(username)}&Password=${encodeURIComponent(password)}&AppPlatform=${Constants.APP_PLATFORM}&APIKey=${Constants.API_KEY}&AppVersion=${Constants.VERSION}&FBId=${encodeURI(fbId)}&UserType=${usertype}/`;
      var url: string = encodeURI(uri);

      console.log(uri);
      this.http.post(uri, {}, {})
        .then(data => {

          var jsonData = JSON.parse(data.data);

          if (jsonData['Success'] == "Yes") {

            let session = {
              recordid: jsonData['Value'][0]['RecordId'],
              security_stamp: jsonData['Value'][0]['SecurityStamp'],
              token: jsonData['Value'][0]['Token'],
              userid: jsonData['Value'][0]['UserID'],
              usertype: usertype
            }
            this.storage.set(Constants.KEY_SESSION, session)
              .then(data => this.getConfig(usertype));


          } else {
            alert(jsonData['Message']);
            if (this.loading) {
              this.loading.dismiss();
            }
          }
        })
        .catch(error => {
          alert("Connection failed. Please try again.");
          this.storage.set(Constants.KEY_ERROR_MESSAGE, "Post Login: " + error.error);
          if (this.loading) {
            this.loading.dismiss();
          }
        });
    });
  }

  getConfig(usertype: string){
    if(usertype == "GABC") {
      this.getConfigFiles();
    }else{
      this.getGuestConfigFiles();
    }
  }

  getConfigFiles() {
    console.log("getConfigFiles")
    console.log("this.storage: ", this.storage)
    console.log("Constants.KEY_SESSION: ", Constants.KEY_SESSION)
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        UserID: val[Constants.KEY_USER_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        UserType: 'GABC'
      }
      console.log(request)
      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.http.post(`${value[Constants.SERVER_URL]}/api/Config/GetConfigFiles`, request, {})
          .then(data => {
            var jsonData = JSON.parse(data.data);
            console.log(jsonData)


            if (jsonData['Success'] == "Yes") {
              this.storage.set(Constants.KEY_EMPID, val[Constants.KEY_USER_ID]);
              this.storage.set(Constants.KEY_LEAVETYPES, jsonData['Value']['tblLeaveTypeList']);
              this.storage.set(Constants.KEY_DATEOFDUTY, jsonData['Value']['tblDateOfDutyList']);
              this.storage.set(Constants.KEY_EMPDETAILS, jsonData['Value']['tblEmployeeDetails']);
              this.storage.set(Constants.KEY_HOLIDAYS, jsonData['Value']['tblHolidays']);
              this.storage.set(Constants.KEY_REQTYPE, jsonData['Value']['tblRequestType']);
              this.storage.set(Constants.KEY_MENU, jsonData['Value']['tblMenuItems']);
              this.storage.set(Constants.KEY_OTTYPES, jsonData['Value']['tblOTScheduledType']);
              this.storage.set(Constants.KEY_CHILDRENHOURRATE, jsonData['Value']['tblChildrenHourRate']);

              this.storage.set(Constants.KEY_CALFILTER_HOLIDAY, true);
              this.storage.set(Constants.KEY_CALFILTER_LEAVES, true);
              this.storage.set(Constants.KEY_CALFILTER_FORAPPROVAL_LEAVES, true);
              this.storage.set(Constants.KEY_CALFILTER_FORAPPROVAL_LEAVES, true);

              this.storage.set(Constants.KEY_USER_TYPE, "GABC");
              // this.authenticationState.next(true);
              //this.storage.set(Constants.KEY_ISFIRSTTIME, true);

              this.storage.get(Constants.KEY_ISFIRSTTIME).then((val) => {
                this.authenticationState.next(true);
                if (val || val == null) {
                  this.navCtrl.navigateRoot(['/onboarding']);
                }
                else {
                  this.navCtrl.navigateRoot(['/main/home']);
                }
              });

            } else {
              if (this.loading) {
                this.loading.dismiss();
              }

              switch (jsonData['Message']) {
                case Constants.OUTDATED_ERROR:
                  this.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                  return;
                case Constants.ERROR_OTHER_DEVICE:
                  this.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                  return;
                case Constants.ERROR_EXPIRED:
                  this.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                  return;
                case Constants.ERROR_REQUIRED:
                  this.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                  return;
              }

              alert("Connection failed. Please try again.");
              this.storage.set(Constants.KEY_ERROR_MESSAGE, "Response Message: " + jsonData['Message']);
            }
            if (this.loading) {
              this.loading.dismiss();
            }
          })
          .catch(error => {

            alert("Connection failed. Please try again.");
            this.storage.set(Constants.KEY_ERROR_MESSAGE, "Get Config Files: " + error.error);
            if (this.loading) {
              this.loading.dismiss();
            }
          });
      });

    });
  }

  getGuestConfigFiles() {
    console.log("getConfigFiles")

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        UserID: val[Constants.KEY_USER_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        UserType: 'GUEST'
      }
      console.log(request)
      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.http.post(`${value[Constants.SERVER_URL]}/api/Config/GetConfigFiles`, request, {})
          .then(data => {
            var jsonData = JSON.parse(data.data);
            console.log(jsonData)


            if (jsonData['Success'] == "Yes") {
              this.storage.set(Constants.KEY_EMPID, val[Constants.KEY_USER_ID]);

              this.storage.set(Constants.KEY_GUEST_MENU, jsonData['Value']['tblMenuItems'][0]);
              this.storage.set(Constants.KEY_GUEST_DETAILS, jsonData['Value']['tblEmployeeDetails'][0]);
              this.storage.set(Constants.KEY_USER_TYPE, "GUEST");

              // this.authenticationState.next(true);
              //this.storage.set(Constants.KEY_ISFIRSTTIME, true);

              this.authenticationState.next(true);
              this.navCtrl.navigateRoot(['/guesthealthtrack']);

            } else {
              if (this.loading) {
                this.loading.dismiss();
              }

              switch (jsonData['Message']) {
                case Constants.OUTDATED_ERROR:
                  this.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                  return;
                case Constants.ERROR_OTHER_DEVICE:
                  this.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                  return;
                case Constants.ERROR_EXPIRED:
                  this.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                  return;
                case Constants.ERROR_REQUIRED:
                  this.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                  return;
              }

              alert("Connection failed. Please try again.");
              this.storage.set(Constants.KEY_ERROR_MESSAGE, "Response Message: " + jsonData['Message']);
            }
            if (this.loading) {
              this.loading.dismiss();
            }
          })
          .catch(error => {

            alert("Connection failed. Please try again.");
            this.storage.set(Constants.KEY_ERROR_MESSAGE, "Get Config Files: " + error.error);
            if (this.loading) {
              this.loading.dismiss();
            }
          });
      });

    });
  }

  logout() {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        UserID: val[Constants.KEY_USER_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION
      }
      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.http.post(`${value[Constants.SERVER_URL]}/api/Config/LogOut`, request, {})
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          });
      });
    });

    this.navCtrl.navigateRoot(['/login']);
    // this.storage.clear();

    this.storage.remove(Constants.KEY_CALFILTER_FORAPPROVAL_LEAVES);
    this.storage.remove(Constants.KEY_CALFILTER_HOLIDAY);
    this.storage.remove(Constants.KEY_CALFILTER_LEAVES);
    this.storage.remove(Constants.KEY_DATEOFDUTY);
    this.storage.remove(Constants.KEY_EMPDETAILS);
    this.storage.remove(Constants.KEY_EMPID);
    this.storage.remove(Constants.KEY_HOLIDAYS);
    this.storage.remove(Constants.KEY_CHILDRENHOURRATE);
    this.storage.remove(Constants.KEY_LEAVETYPES);
    this.storage.remove(Constants.KEY_MENU);
    this.storage.remove(Constants.KEY_OTTYPES);
    this.storage.remove(Constants.KEY_REQTYPE);
    this.storage.remove(Constants.KEY_SESSION);

    this.storage.set(Constants.KEY_ISFIRSTTIME, false);
    return this.storage.remove(Constants.KEY_EMPID).then(res => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    return this.storage.get(Constants.KEY_EMPID).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }

  isAlertOpen: boolean;
  alert: any;
  async showSessionError(headerMsge: string, message: string) {
    console.log(!this.isAlertOpen)
    
    if(!this.isAlertOpen){
      this.alert = await this.alertController.create({
        header: headerMsge,
        message: message,
        backdropDismiss: false,
        buttons: [{
          text: 'Okay',
          handler: () => {
            this.isAlertOpen = false;
            // Opening a URL and returning an InAppBrowserObject
            // window.open('https://install.appcenter.ms/users/gabcgear-gmail.com/apps/gear-ios/distribution_groups/public', '_blank').focus();
            this.logout();

            const browser = this.iab.create('https://install.appcenter.ms/users/gabcgear-gmail.com/apps/gear-ios/distribution_groups/public', '_blank');
          }
        }]
      });
  
      await this.alert.present();

      this.isAlertOpen = true;
    }

  }

}
