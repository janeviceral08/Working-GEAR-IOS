import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import * as Constants from 'src/app/utils/constants.service';
import { ModalController, NavParams } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {


  securityKey: String;
  param: any;
  isShowPassword: any;
  newPassword: boolean = false;
  showPassword: any;
  showNewPassword: any;
  newPasswordKey: any;

  constructor(
    private modalController: ModalController,
    private httpApi: HTTP,
    private storage: Storage,
    private navParams: NavParams,
    private loginService: LoginService,
    private clipboard: Clipboard
  ) { }

  ngOnInit() {
    this.param = this.navParams.get('data');
    console.log(this.param);
  }

  submit(){
    if(!this.securityKey) {
      alert("Please enter Security Key");
      return;
    } 

    if(this.securityKey.trim() == "") {
      alert("Please enter Security Key");
      return;
    }

    this.getNewPassword();
  }

  getNewPassword(){
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
          UserID: this.param['userId'],
          EmployeeId: this.param['userId'],
          SessionID: undefined,
          SecurityStamp:  undefined,
          Token: undefined,
          AppPlatform: Constants.APP_PLATFORM,
          AppVersion: Constants.APP_VERSION,
          SecretAnswer: this.param['resultAnswer'],
          FilePassword: this.securityKey,
          EmployeeSecretAnswer: this.param['resultAnswer'],
          EmployeeFirstName: this.param['firstName'],
          EmployeeMiddleName: this.param['middelName'],
          EmployeeLastName: this.param['lastName'],
          EmployeeEmail: this.param['email'],
          CurrentLoginPassword: this.param['currentLoginPass'],
          AccountType: "login",
          ProcessType: "forgot-login-password"
     
      };

      console.log(postData);

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/account-management/login`, postData, {})
          .then(data => {

            if (data.data == null || data.data == undefined) {
              // this.noError = false;
              // this.loadingDone = true;
              // this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log(jsonData);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              // this.noError = false;
              // this.loadingDone = true;
              // this.errorMessage = Constants.MESSAGE_CON_ERROR;
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

              return;
            }

            this.newPasswordKey = jsonData['Message'];
            this.newPassword = true;
          })
          .catch(error => {

          });
      });
    });
  }

  togglePasswordText() {
    this.showPassword = !this.showPassword;
  }


  touchstart(event){
    this.showNewPassword = true;
  }

  touchend(event){
    this.showNewPassword = false;
  }

  copyPassword(){
    this.clipboard.copy(this.newPasswordKey);
  }

  done(){
    this.filterList();
  }

  async filterList() {
      let result = {
        'isDismissed': 0,
      };

      await this.modalController.dismiss(result);
  }

}
