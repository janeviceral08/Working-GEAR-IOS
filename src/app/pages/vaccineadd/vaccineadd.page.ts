import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/utils/constants.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-vaccineadd',
  templateUrl: './vaccineadd.page.html',
  styleUrls: ['./vaccineadd.page.scss'],
})
export class VaccineaddPage implements OnInit {

  constructor(private storage: Storage,
    private router: Router,
    private menuCtrl: MenuController,
    private httpApi: HTTP,
    private modalController: ModalController,
    private navCtrl: NavController,
    private loginService: LoginService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    public plt: Platform) { }

  empId;

  vaccineBrands: String[] = ["Sinovac", "Astrazeneca", "Moderna", "Pfizer-BioNTech", "Sputnik", "Janssen", "Sinopharm", "Westvac"];
  employeeId;
  batch;
  category;
  lotNo;
  remarks;
  loading: any;


  ngOnInit() {
    this.plt.ready().then(() => {

      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;
        // this.getVaccineBrands();
      });
    });
  }

  sendRequest() {

    console.log(this.getSelectedVaccineBrand())

    if (!this.employeeId) {
      alert("Please enter Employee ID.");
      return;
    }

    if (!this.batch) {
      alert("Please enter Batch.");
      return;
    }

    if (!this.lotNo) {
      alert("Please enter Lot No.");
      return;
    }

    if (!this.category) {
      alert("Please enter Category");
      return;
    }

    this.postRequest();
  }

  getSelectedVaccineBrand(): string {

    var brand = (<HTMLTextAreaElement>document.getElementById('vaccineBrand')).value;

    switch (brand) {
      case "Sinovac":
        return "VAC001";

      case "Astrazeneca":
        return "VAC002";

      case "Moderna":
        return "VAC003";

      case "Pfizer-BioNTech":
        return "VAC004";

      case "Sputnik":
        return "VAC005";

      case "Janssen":
        return "VAC006";

      case "Sinopharm":
        return "VAC007";

      case "Westvac":
        return "VAC008";

        default:
          return "NA";
    }

  }


  postRequest() {
    console.log('getAntigenTestData');

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();

      this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

        let request = {
          UserID: this.empId,
          EmployeeId: this.employeeId,
          SessionID: val[Constants.KEY_RECORD_ID],
          SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
          Token: val[Constants.KEY_TOKEN],
          AppPlatform: Constants.APP_PLATFORM,
          AppVersion: Constants.VERSION,
          ProcessType: "insert-employee-covid-vaccine",
          VaccineBrand: this.getSelectedVaccineBrand(),
          VaccineBatchNo: this.vaccineBrands,
          VaccineLotNo: this.lotNo,
          VaccineCategory: this.category,
          VaccinatedBy: this.empId
        }

        console.log(request);
        this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

          this.httpApi.post(`${value[Constants.SERVER_URL]}/api/health/covid/vaccine`, request, {})
            .then(data => {

              if (data.data == null || data.data == undefined) {
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

              console.log(jsonData);

              this.loading.dismiss();
              this.showDialog("DONE!", "Request Sent!", true, "Great!");

              this.ngOnInit()

            })

            .catch(error => {
              console.log(error);
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
          if (closePage) {
            this.backButton();
          }

          this.ngOnInit();
        }
      }]
    });

    await alert.present();
  }

  backButton() {
    this.navCtrl.back();
  }

}
