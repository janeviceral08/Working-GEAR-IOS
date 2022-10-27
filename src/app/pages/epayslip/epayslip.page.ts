import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import * as Constants from 'src/app/utils/constants.service';
import { LoginService } from 'src/app/services/login.service';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { $$rxSubscriber } from 'rxjs/internal/symbol/rxSubscriber';

@Component({
  selector: 'app-epayslip',
  templateUrl: './epayslip.page.html',
  styleUrls: ['./epayslip.page.scss'],
})
export class EpayslipPage implements OnInit {
  isCorrectPassword: boolean = false;
  isAffirm: boolean = false;
  disableAgree: boolean = true;
  payrollSelected: boolean = false;
  password: string;
  affirm: string;
  takenote: string;
  agreeText: string = "AGREE & DOWNLOAD";
  empId: string;
  payroll: any;
  payrollPeriod: string;
  payrollSelectedPeriod: string;
  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(
    private loginService: LoginService,
    private router: Router,
    private storage: Storage,
    private menuCtrl: MenuController,
    private alertController: AlertController,
    private httpApi: HTTP,
    private file: File,
    private transfer: FileTransfer,
    private document: DocumentViewer,
    private fileOpener: FileOpener,
    private loadingCtrl: LoadingController,
    private http: HttpClient) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.takenote = "You are expected to treat all matters relative to compensation as confidential and refrain from discussing or divulging the same with anybody.";
      this.affirm = "I hereby affirm and acknowledge that I understand the entire data on this e-payslip";

      this.checkEpayslip();
    });
  }

  forgotPassword() {
    this.showDialog("", "For security purpose, If you forgot or want to update your password, please go to your account in HRIS-ESS website", false, "Okay");
  }

  submitPassword() {
    this.getPayslip("GetVerifyPassword2");
  }

  clickIsAffirm() {
    this.isAffirm = !this.isAffirm;
    if (this.isAffirm && this.payrollSelected) {
      this.disableAgree = false;
    }
    else {
      this.disableAgree = true;
    }
  }

  onPayrollChange() {
    if (this.payrollPeriod == null || this.payrollPeriod == undefined || this.payrollPeriod == "") {
      this.payrollSelected = false;
    }
    else {
      this.payrollSelected = true;
      if (this.isAffirm && this.payrollSelected) {
        this.disableAgree = false;
      }
      else {
        this.disableAgree = true;
      }
    }
  }

  submitAgree() {
    this.getPayslip("GetDownloadPayslip");
  }

  refresh() {
    this.ionViewWillEnter();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  getPayslip(connection: string) {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {
      let postData = {
        RecordID: val[Constants.KEY_RECORD_ID],
        UserID: this.empId,
        EmployeeID: this.empId,
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        IsActive: true,
        AppVersion: Constants.VERSION,
        PayPeriod: "0",
        Password: ""
      };

      if (connection == "GetVerifyPassword2") {
        postData["Password"] = this.password;
      }
      else if (connection == "GetDownloadPayslip") {

        this.payroll.forEach(element => {
          if (element['DESCRIPTION'] == this.payrollPeriod) {
            this.payrollSelectedPeriod = element['SEQNO'];
            postData["PayPeriod"] = element['SEQNO'];
          }
        });
        postData["Password"] = this.password;
      }

      console.log(postData);
      if (connection == "GetDownloadPayslip") {

        this.agreeText = "Downloading...";

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISEPayslip/${connection}`, postData, {})
            .then(data => {

              if (data.data == null || data.data == undefined) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                return;
              }

              try{
                var jsonData = JSON.parse(data.data);
                console.log(jsonData);
  
                if (jsonData['Status'] != Constants.POST_SUCCESS) {
                  this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                  return;
                }
  
                if (jsonData['Success'] != Constants.POST_YES) {
  
                  switch (jsonData['Message']) {
                    case Constants.OUTDATED_ERROR:
                      this.showDialog("ERROR", "", false, "Okay");
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
              } catch (e) {
                console.log(e);
                this.openFile(value, postData, connection);
              }

            });
        });
        this.agreeText = "AGREE & DOWNLOAD";

      }
      else {

        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISEPayslip/${connection}`, postData, {})
            .then(data => {
              console.log(data);
              if (data.data == null || data.data == undefined) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                return;
              }

              var jsonData = JSON.parse(data.data);
              console.log(jsonData);

              if (jsonData['Status'] != Constants.POST_SUCCESS) {
                this.showDialog("ERROR!", Constants.CONNECTION_ERROR, true, "Okay");
                return;
              }

              if (jsonData['Success'] != Constants.POST_YES) {

                switch (jsonData['Message']) {
                  case Constants.OUTDATED_ERROR:
                    this.showDialog("ERROR", "", false, "Okay");
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

              this.takenote = jsonData['Value']['Table']['1']['Details'];
              this.affirm = jsonData['Value']['Table']['0']['Details'];

              var resultTemp = jsonData['Value']['Table1'];

              if (resultTemp.length <= 0) {
                this.showDialog("EMPTY!", "Empty payroll period!", true, "Okay");
                return;
              }
              this.payroll = jsonData['Value']['Table1'];
              this.payrollPeriod = jsonData['Value']['Table1']['0']['DESCRIPTION'];

              this.payrollSelected = true;
              this.isCorrectPassword = true;

            })
            .catch(error => {
              this.showDialog("ERROR!", Constants.CONNECTION_ERROR_TRY_AGAIN, true, "Okay");
            });
        });
      }
    });
  }

  async showDialog(title: string, message: string, closePage: boolean, buttonText: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [{
        text: buttonText,
        handler: () => {
          if (closePage) {
            this.ionViewWillEnter();
          }
        }
      }],
      backdropDismiss: false
    });

    await alert.present();
  }

  openForgotPass() {
    this.router.navigate(['/epayslipforgotpass'])
  }

  openFile(value: any, postData: any, connection: any){
    this.httpApi.sendRequest(`${value[Constants.SERVER_URL]}/api/HRISEPayslip/${connection}`,
            {
              method: 'post',
              data: postData,
              responseType: 'blob'
            }
          )
            .then(response => {

              let fileEmpID: string = this.empId
              while (fileEmpID.length < 6) fileEmpID = "0" + fileEmpID;
              let filename: string = fileEmpID + this.payrollSelectedPeriod + ".pdf";
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
  }

  loading: any;
  checkEpayslip() {

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

          AccountType:"payslip",
          ProcessType:"check-for-payslip-update"
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

              if(jsonData['Value']['0']['Result'] == "true") {
                this.openForgotPass();
              }
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


}
