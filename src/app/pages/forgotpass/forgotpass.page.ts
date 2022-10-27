import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import * as Constants from 'src/app/utils/constants.service';
import { LoginService } from 'src/app/services/login.service';
import { LoadingController, ModalController, AlertController, NavController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ForgotPasswordComponent } from '../../component/forgot-password/forgot-password.component';
import { OverlayEventDetail } from '@ionic/core';


@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  user_name: any;
  answer: any;
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  resultQuestion: any;
  resultAnswer: any;
  loading: any;
  firstName: any;
  middelName: any;
  lastName: any;
  email: any;
  currentLoginPass: any;
  filePassword: any;


  constructor(
    private httpApi: HTTP,
    private storage: Storage,
    private loginService: LoginService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private file: File,
    private fileOpener: FileOpener,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.checkLabelMessage();
  }

  goBack() {
    // this.router.navigate(['/advisorytypelist']);
    this.navCtrl.back();
  }

  checkUser() {
    if (!this.user_name) {
      alert("User name is required!");
      return;
    }

    if (this.user_name.trim() == "") {
      alert("User name is required!");
      return;
    }

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

        let postData = {
          RecordId: '',
          SecurityStamp: '',
          Token: '',
          AppPlatForm: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION,
          IsActive: true,
          UserID: this.user_name,
          AccountType: "login",
          ProcessType: "validate-employee-id"

        };

        console.log(postData);

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/account-management/login`, postData, {})
            .then(data => {
              this.loading.dismiss();

              if (data.data == null || data.data == undefined) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");

                this.noError = false;
                this.loadingDone = true;
                this.errorMessage = Constants.MESSAGE_CON_ERROR;
                return;
              }

              var jsonData = JSON.parse(data.data);
              console.log(jsonData);

              if (jsonData['Status'] != Constants.POST_SUCCESS) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");

                this.noError = false;
                this.loadingDone = true;
                this.errorMessage = Constants.MESSAGE_CON_ERROR;
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

                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");

                this.noError = false;
                this.loadingDone = true;
                this.errorMessage = Constants.MESSAGE_CON_ERROR;
                return;
              }

              if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");

                this.noError = false;
                this.errorMessage = Constants.MESSAGE_CON_ERROR;
                return;
              }

              this.resultQuestion = jsonData['Value']['SecretQuestionAnswer'][0]['SecretQuestion'];
              this.resultAnswer = jsonData['Value']['SecretQuestionAnswer'][0]['SecretAnswer'];
              this.currentLoginPass = jsonData['Value']['SecretQuestionAnswer'][0]['CurrentLoginPassword'];
              this.firstName = jsonData['Value']['EmployeeDetails'][0]['FNAME'];
              this.middelName = jsonData['Value']['EmployeeDetails'][0]['MNAME'];
              this.lastName = jsonData['Value']['EmployeeDetails'][0]['LNAME'];
              this.email = jsonData['Value']['EmployeeDetails'][0]['EMAIL'];
              this.filePassword = jsonData['Value']['EmployeeDetails'][0]['FILEPASSWORD'];


              this.noError = true;
              this.loadingDone = true;
            })
            .catch(error => {
              this.loading.dismiss();
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");

              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              this.loadingDone = true;
            });
        });
      });
    });
  }

  submit() {
    if (!this.answer) {
      alert("No answer has been entered!");
      return;
    }

    if (this.answer != this.resultAnswer) {
      alert("Please provide the correct answer!");
      return;
    }

    console.log("test");
    this.showForgotPassDialog();

    //this.downloadAssetForm();
  }

  getAssetForm() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {
      let postData = {
        UserID: 20866,
        EmployeeId: "20866",
        SessionID: 12138,
        SecurityStamp: "94338e33-fb7f-4ab6-a6cd-890f35e70d4d",
        Token: "/P02NiYY2EilwS5RGU9LSbpCHP1aEn5A",
        AppPlatform: "ANDROID",
        AppVersion: "1.10.0",
        SecretAnswer: "balunso",
        EmployeeSecretAnswer: "balunso",
        EmployeeFirstName: "Ginel",
        EmployeeMiddleName: "Balunso",
        EmployeeLastName: "Dizon",
        EmployeeEmail: "gine.dizon@goldenabc.com",
        CurrentLoginPassword: "12345"

      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.sendRequest(`${value[Constants.SERVER_URL]}/api/account-management/forgot-login-password`,
          {
            method: 'post',
            data: postData,
            responseType: 'blob'
          }
        )
          .then(response => {

            let filename: string = "forgot-pass-temp" + ".pdf";
            console.log(filename);

            let pdfBlob = new Blob([response.data], { type: 'application/pdf' });

            this.file.writeFile(this.file.dataDirectory, filename, pdfBlob, { replace: true }).then(c => {
              this.fileOpener.open(this.file.dataDirectory + filename, 'application/pdf')
                .then(() => console.log('File is opened'))
                .catch(e => console.log('Error opening file', e));
            });

            // //for desktop
            const fileURL = URL.createObjectURL(pdfBlob);
            window.open(fileURL);

          })
          .catch(response => {
            // prints 403
            console.log(response.status);

            // prints Permission denied
            console.log(response.error);
          });
      });
    });
  }


  downloadAssetForm() {

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {
        let postData = {

          UserID: this.user_name,
          EmployeeId: this.user_name,
          SessionID: "",
          SecurityStamp: "",
          Token: "",
          AppPlatform: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION,
          SecretAnswer: this.answer,
          EmployeeSecretAnswer: this.answer,
          EmployeeFirstName: this.firstName,
          EmployeeMiddleName: this.middelName,
          EmployeeLastName: this.lastName,
          EmployeeEmail: this.email,
          CurrentLoginPassword: this.currentLoginPass
        };

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {
          console.log(postData)

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/account-management/forgot-login-password`, postData, {})
            .then(data => {

              console.log(data)

              if (data.data == null || data.data == undefined || !data.data) {
                this.getAssetForm();
                this.loading.dismiss();

              } else {
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
              }
            })
            .catch(error => {
              this.getAssetForm();
              console.log(error);
              this.loading.dismiss();
              // this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
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
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  async showForgotPassDialog() {
    let data = {
      userId: this.user_name,
      resultQuestionthis: this.resultQuestion,
      resultAnswer: this.resultAnswer,
      currentLoginPass: this.currentLoginPass,
      firstName: this.firstName,
      middelName: this.middelName,
      lastName: this.lastName,
      email: this.email,
      filePassword: this.filePassword
    }

    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ForgotPasswordComponent,
        cssClass: 'modalForgotPassSettings',
        animated: true,
        backdropDismiss: true,
        componentProps: {
          module: "forgotpass",
          data: data
        }

      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {

        if (detail.data['isDismissed'] == 0) {
          this.navCtrl.back();
        }
      }
    });

    await modal.present();
  }

  statement:string = "If you've forgotten the password to your account, please enter your Username. If you are still having problems please contact the webmaster at HRIS-ESS-Webmaster@goldenabc.com"

  checkLabelMessage() {
    console.log("checkLabelMessage");

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();


      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

        let postData = {
          UserID: "24273",
          EmployeeId: "24273",
          SessionID: "",
          SecurityStamp: "",
          Token: "",
          AppPlatform: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION,
          AccountType:"login",
          ProcessType:"forgot-login-password-intructions"
        };

        console.log(postData);

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/account-management/login`, postData, {})
            .then(data => {

              console.log(data);
              if (data.data == null || data.data == undefined || !data.data) {
                this.loading.dismiss();
                return;
              }

              var jsonData = JSON.parse(data.data);
              console.log(jsonData);

              if (jsonData['Status'] != Constants.POST_SUCCESS) {
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

                return;
              }
              this.loading.dismiss();

              if(jsonData['Value']['0']['Statement']) {
                this.statement = jsonData['Value']['0']['Statement'];
              }
            })
            .catch(error => {
              console.log(error.error)

              this.loading.dismiss();
            });
        });
      });
    });
  }
}
