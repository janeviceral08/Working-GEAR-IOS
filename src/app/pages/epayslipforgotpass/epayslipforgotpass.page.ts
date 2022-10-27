import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import * as Constants from 'src/app/utils/constants.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-epayslipforgotpass',
  templateUrl: './epayslipforgotpass.page.html',
  styleUrls: ['./epayslipforgotpass.page.scss'],
})
export class EpayslipforgotpassPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private httpApi: HTTP,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {

      this.empId = val;
    });

  }

  loading: any;
  empId: any;
  loginPass: any;
  epayslipPass: any;
  confirmPass: any;


  goBack() {
    // this.router.navigate(['/advisorytypelist']);
    this.navCtrl.back();
  }

  submit() {

    if (!this.loginPass) {
      if (this.loginPass.trim() == "") {
        alert("Login Password is required")
        return;
      }
    }

    if (!this.epayslipPass) {
      if (this.epayslipPass.trim() == "") {
        alert("New Password is required")
        return;
      }
    }

    if (!this.confirmPass) {
      if (this.confirmPass.trim() == "") {
        alert("Please enter confirm password")
        return;
      }

      if (this.confirmPass.trim()  != this.epayslipPass.trim() ) {
        alert("Password does not match")
        return;
      }
    }


    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();


      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

        let postData = {
          UserID: this.empId,
          EmployeeId: this.empId,
          SessionID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatform: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION,

          CurrentLoginPassword: this.loginPass,
          NewPayslipPassword: this.epayslipPass,
          ConfirmCurrentPayslipPassword: this.confirmPass,

          AccountType:"payslip",
          ProcessType:"reset-payslip-password"
        };

        console.log(postData);

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/account-management/payslip`, postData, {})
            .then(data => {

              console.log(data);
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

              this.showDialog("DONE!", "Your request has been saved", true, "Great!");
            })
            .catch(error => {
              console.log(error.error)

              this.loading.dismiss();
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
            });
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
          if(closePage) {
            this.navCtrl.back();
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

}
