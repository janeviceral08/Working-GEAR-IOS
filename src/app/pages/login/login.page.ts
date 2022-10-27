import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as Constants from 'src/app/utils/constants.service';

import { AppVersion } from '@ionic-native/app-version/ngx';
import { NotificationService } from 'src/app/services/notification.service';
// import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform, ModalController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ServerSettingsComponent } from '../../component/server-settings/server-settings.component';
import { OverlayEventDetail } from '@ionic/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  user_name: string;
  user_password: string;
  results: Observable<any>;
  version: any;
  options: any;
  showErrorClicked: number;
  IsGuest: boolean;
  user_type;
  /**
  * Constructor of our first page
  * @param loginService The Login Service to get authentication
  */
  constructor(
    private appVersion: AppVersion,
    private storage: Storage,
    private loginService: LoginService,
    private router: Router,
    // private firebase: Firebase,
    private alertController: AlertController,
    private platform: Platform,
    private notificationService: NotificationService,
    private modalController: ModalController,
  ) { }


  ngOnInit() {
    this.platform.ready().then(() => {
      //this.connect();
      this.showErrorClicked = 0;
      this.storage.remove(Constants.KEY_ERROR_MESSAGE);

      this.version = Constants.APP_VERSION;


      console.log(this.storage.get(Constants.KEY_ISFIRSTTIME))

      this.storage.get(Constants.KEY_ISFIRSTTIME).then((val) => {
        if (!val || val == null)
        {
          console.log("Set Default Server Settings")
          this.setDefaultServerSettings() 
        }
      });

      // this.firebase.onTokenRefresh()
      //   .subscribe((token: string) =>
      //     this.showAlert(token)
      //   );

      // this.firebase.getToken()
      //   .then(token =>
      //     this.showAlert(token)
      //   ) // save the token server-side and use it to push notifications to this device
      //   .catch(error => console.error('Error getting token', error));

    });

  }

  showAlert(message: string) {
    // console.log(`The token is ${message}`)
    // alert(message);
  }
 
  attemptlogin() {
    if (typeof (this.user_name) === "undefined" || this.user_name == "") {
      alert("Please enter your username!")
    }
    else if (typeof (this.user_password) === "undefined" || this.user_password == "") {
      alert("Please enter your password!")
    }
    else {
      this.user_type = (this.IsGuest ? "GUEST" : "GABC");
      
      this.loginService.attemptlogin(this.user_name, this.user_password, this.user_type);
    }
  }

  showErrorMessage() {
    // this.showErrorClicked = this.showErrorClicked + 1;
    // if (this.showErrorClicked == 5) {
    //   this.showErrorClicked = 0;

    //   this.showServerSettingsModal();
    //   this.storage.get(Constants.API_ENDPOINT).then((val) => {
    //     let currentServer: string;
    //     if (val == "http://146.88.74.66:20002"){
    //       currentServer = "Current Server: DEV";
    //     }
    //     else if (val == "http://210.5.69.249:29794"){
    //       currentServer = "Current Server: DEV";
    //     }
    //     else if (val == "http://146.88.74.69:9993"){
    //       currentServer = "Current Server: DEV";
    //     }
    //     else{
    //       currentServer = "Current Server: " + Constants.API_ENDPOINT;
    //     }
    //     this.showDialog("DEV OPTIONS", currentServer);
    //   });
    // }
  }

  async showDialog(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      inputs: [
        // {
        //   name: 'chkIsDev',
        //   type: 'checkbox',
        //   label: 'Dev Mode',
        //   value: '',
        //   checked: true
        // },
        {
          name: 'txtIsDev',
          type: 'text',
          placeholder: 'Username'
        },
        {
          name: 'txtPassword',
          type: 'password',
          placeholder: 'Password'
        },
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        }
      ],
      buttons: [
        {
          text: 'Show Last Error',
          cssClass: 'secondary',
          handler: () => {
            this.storage.get(Constants.KEY_ERROR_MESSAGE).then((val) => {
              if (val == "" || val == null || val == undefined){
                this.showDialogError("ERROR", "No Error");
              }
              else{
                this.showDialogError("ERROR", val);
              }
            });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        },
        {
          text: 'Ok',
          handler: data => {
            if (data.txtIsDev == "DEV" && data.txtPassword == "0729") {
                this.storage.set(Constants.API_ENDPOINT, Constants.API_ENDPOINT_DOMAIN_DEV);
            }
            else {
              this.storage.set(Constants.API_ENDPOINT, Constants.API_ENDPOINT_DOMAIN_DEV);
            }
          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

  async showDialogError(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [
        {
          text: 'Okay',
          handler: () => {

          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

  modalIsOpen = false;
  advisory:any;

  async showServerSettingsModal() {
    this.modalIsOpen = true;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ServerSettingsComponent,
        cssClass: 'modalServerSettings',
        animated: false,
        backdropDismiss: false,
        componentProps: {
          module: "WfhApproval",
          data: this.advisory
        }

      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        this.IsGuest = detail.data['is_guest_login'];
        console.log(this.IsGuest);
        if (detail.data['isDismissed'] == 0) {

        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }


  setDefaultServerSettings() {

    let server_settings = {

      is_server_domain: true,
      is_server_default: false,
      is_server_dev: false,
      is_server_set_url: false,
      server_url: Constants.API_ENDPOINT_DOMAIN,
      is_guest_login: false
    }

    console.log(server_settings);

    this.storage.set(Constants.KEY_SERVER_SETTINGS, server_settings).then(result => {
      console.log('Default Server Settings saved')
    }).catch(e => {
      console.log('Error saving default settings')
    });
  }

  openForgotPass(){
    this.router.navigate(['/forgotpass'])
  }
}
