import { Component } from '@angular/core';

import { Platform, ToastController, NavController, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

import { HTTP } from '@ionic-native/http/ngx';
import { Alert } from 'selenium-webdriver';
import * as Constants from 'src/app/utils/constants.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Leavecredits',
      url: '/leavecredits',
      icon: 'home'
    },
    {
      title: 'Search',
      url: '/leavesearch',
      icon: 'list'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'list'
    }
  ];

  loading;
  results: any;

  constructor(
    private platform: Platform,
    private httpApi: HTTP,
    private firebase: FirebaseX,
    private storage: Storage,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loadingCtrl: LoadingController,
    private loginService: LoginService,
    private router: Router,
    private navCtrl: NavController,
    public toastCtrl: ToastController
  ) {

    this.platform.ready().then(() => {
      this.initializeApp();

      try {
        this.initializeFirebase();
      } catch (error) {
        // this.firebase.logError(error);
      }
    });
  }

  initializeFirebase() {

    this.firebase.subscribe("all").then(msge =>
      console.log("subscribe1: " + msge)).catch(err =>
        console.log(err));

    this.initializeFirebaseIOS()
  }

  initializeFirebaseIOS() {

    this.firebase.grantPermission()
      .then(() => {

        this.firebase.getToken().then(token => {
          console.log("FirebaseId: " + token);
        });

        this.firebase.onTokenRefresh().subscribe(token => { })
        this.subscribeToPushNotifications();
      })
      .catch((error) => {
        this.firebase.logError(error);
      });
  }

  subscribeToPushNotifications() {
    this.firebase.onMessageReceived().subscribe(data => console.log(`FCM message: ${data}`));


    // this.firebase.onMessageReceived().subscribe((response) => {

    //   // if (response.tap) {

    //     this.loadingCtrl.create({
    //       message: "Loading..."
    //     }).then((overlay) => {
    //       this.loading = overlay;
    //       this.loading.present();

    //       this.loginService.authenticationState.subscribe(state => {

    //         if (state) {
    //           switch (response['type']) {
    //             case Constants.FCM_LEAVE:
    //               this.getLeaveList(response['id']);
    //               break;

    //             case Constants.FCM_LEAVE_APPROVAL:
    //               this.getLeaveForApproval(response['id']);
    //               break;

    //             case Constants.FCM_AA:
    //               console.log("Constants.AA");
    //               this.loading.dismiss();

    //               this.router.navigate([
    //                 '/advisorydetails',
    //                 response['id'],
    //                 'useradvisory',
    //                 'APPROVED',
    //                 '',
    //                 'home'
    //               ]);
    //               break;

    //             case Constants.FCM_AA_APPROVAL:
    //               console.log("Constants.FCM_AA_APPROVAL");
    //               this.loading.dismiss();

    //               this.router.navigate([
    //                 '/advisorydetails',
    //                 response['id'],
    //                 'forapproval',
    //                 'FOR APPROVAL',
    //                 '',
    //                 'home'
    //               ]);
    //               break;
    //             default:
    //               this.loading.dismiss();
    //               break;
    //           }
    //         }
    //       })
    //     });
    //   // } else {

    //   // }
    // });
  }

  initializeApp() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();

    //TODO release check
    // this.loginService.authenticationState.subscribe(state => {
    //     this.storage.get(`${Constants.KEY_USER_TYPE}`).then((empid) => {
    //       if (state) {
    //         if(empid == "GABC") {
    //           this.navCtrl.navigateRoot(['/main/home']);
    //           return;
    //         }
    //         this.navCtrl.navigateRoot(['/guesthealthtrack']);

    //       } else {
    //         this.navCtrl.navigateRoot(['login']);
    //       }
        // })     
    // })
  }

  getLeaveList(recordId: string) {
    this.storage.get(`${Constants.KEY_EMPID}`).then((empid) => {

      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

        let postData = {
          UserID: empid,
          RecordID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatForm: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION
        };

        this.httpApi.post(`${Constants.API_ENDPOINT}/api/leaverequest/findall`, postData, {})
          .then(data => {

            if (data.data == null || data.data == undefined) {
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.loading.dismiss();

              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {
              this.loading.dismiss();

              switch (jsonData['Message']) {
                case Constants.OUTDATED_ERROR:
                  this.loginService.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                  break;
                case Constants.ERROR_OTHER_DEVICE:
                  this.loginService.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                  break;
                case Constants.ERROR_EXPIRED:
                  this.loginService.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                  break;
                case Constants.ERROR_REQUIRED:
                  this.loginService.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                  break;
              }

              return;
            }

            if (jsonData['Value']['tblLeaveRequest'] == null || jsonData['Value']['tblLeaveRequest'] == undefined) {
              this.loading.dismiss();
              return;
            }

            this.results = jsonData['Value']['tblLeaveRequest'];

            this.results.forEach(element => {

              if (String(element['ID']) == recordId) {
                this.storage.set(Constants.KEY_LEAVEDETAILS, element);
                this.router.navigate(['/leavedetails', 'userleave', 'home']);
              }
            });

            this.loading.dismiss();
          })
          .catch(error => {
            this.loading.dismiss();
          });
      });
    })
  }

  getLeaveForApproval(recordId: String) {
    this.storage.get(`${Constants.KEY_EMPID}`).then((empid) => {

      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

        let leave = {
          User: empid,
          LeaveRequestStatus: Constants.LEAVE_STATUS_FOR_APPROVAL,
          SessionID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatForm: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION
        }

        this.httpApi.post(`${Constants.API_ENDPOINT}/api/HRISApproval/GetForApproval`, leave, {})
          .then(data => {

            if (data.data == null || data.data == undefined) {
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);
            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.loading.dismiss();
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {

              switch (jsonData['Message']) {
                case Constants.OUTDATED_ERROR:
                  this.loginService.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                  break;
                case Constants.ERROR_OTHER_DEVICE:
                  this.loginService.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                  break;
                case Constants.ERROR_EXPIRED:
                  this.loginService.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                  break;
                case Constants.ERROR_REQUIRED:
                  this.loginService.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                  break;
              }
              this.loading.dismiss();
              return;
            }

            if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
              this.loading.dismiss();
              return;
            }

            var resultTemp = jsonData['Value'];

            if (resultTemp.length <= 0) {
              this.loading.dismiss();
              return;
            }

            this.loading.dismiss();
            this.results = jsonData['Value'];

            this.results.forEach(element => {

              if (String(element['ID']) == recordId) {
                this.storage.set(Constants.KEY_LEAVEDETAILS, element);
                this.router.navigate(['/leavedetails', 'forapproval', 'home'])
              }
            });
          })
          .catch(error => {
            this.loading.dismiss();
          });
      });
    })
  }
}
