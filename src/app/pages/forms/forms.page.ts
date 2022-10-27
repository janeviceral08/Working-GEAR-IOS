import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import * as Constants from 'src/app/utils/constants.service';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {
  empId;
  loading;


  constructor(
    private menuCtrl: MenuController,
    private storage: Storage,
    private httpApi: HTTP,
    private file: File,
    private fileOpener: FileOpener,
    private loginService: LoginService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,

  ) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  getAssetForm() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {
      this.empId = val[Constants.KEY_USER_ID];
      let postData = {
        EmployeeId: this.empId,
        UserID: this.empId,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION
      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.sendRequest(`${value[Constants.SERVER_URL]}/api/Download/GetDownloadAssetAccountabilityFile`,
          {
            method: 'post',
            data: postData,
            responseType: 'blob'
          }
        )
          .then(response => {
            console.log(response);

            let filename: string = "assetform-" + this.empId + ".pdf";
            console.log(filename);

            let pdfBlob = new Blob([response.data], { type: 'application/pdf' });

            this.file.writeFile(this.file.dataDirectory, filename, pdfBlob, { replace: true }).then(c => {
              this.fileOpener.open(this.file.dataDirectory + filename, 'application/pdf')
                .then(() => console.log('File is opened'))
                .catch(e => console.log('Error opening file', e));
            });
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
        this.empId = val[Constants.KEY_USER_ID];
        let postData = {
          EmployeeId: this.empId,
          UserID: this.empId,
          SessionID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatForm: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION
        };

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/Download/GetDownloadAssetAccountabilityFile`, postData, {})
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


}
