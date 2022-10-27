import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import * as Constants from 'src/app/utils/constants.service';
import { MenuController, AlertController, NavController, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Alert } from 'selenium-webdriver';
import { Url } from 'url';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  CurrentVersion: string;
  aboutSummary;
  WhatsNextSummary;
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  lblAboutStatus = "LOADING ABOUT...";
  clickedAbout = false;
  lblWhatsNextStatus = "LOADING WHAT'S NEXT...";
  clickedWhatsNext = false;
  lblFeedbackStatus = "LOADING FEEDBACK...";
  clickedPrivacyPolicy = false;
  lblPrivacyPolicyStatus = "LOADING PRIVACY STATEMENT...";

  clickedFeedback = false;
  feedbackText: string;
  currentFeedbackLength = "0";
  empId: string;
  loading;

  constructor(private loginService: LoginService,
    private menuCtrl: MenuController,
    private storage: Storage,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
    private httpApi: HTTP) { }

  ngOnInit() {
    this.noError = true;
    this.feedbackText = "";
    this.lblAboutStatus = "LOADING ABOUT...";
    this.lblWhatsNextStatus = "LOADING WHATS NEXT...";
    this.lblFeedbackStatus = "LOADING FEEDBACK...";
    this.getAbout('');
    this.getWhatsNext('');
    this.getFeedback('');
    this.getPrivacyPolicy('');

    this.CurrentVersion = Constants.APP_VERSION;
    this.storage.get(Constants.KEY_EMPID).then(val => {
      this.empId = val;
    });
  }

  getAbout(employeeid: string) {

    this.noError = true;
    this.loadingDone = true;
    this.lblAboutStatus = "ABOUT";
  }

  getWhatsNext(employeeid: string) {

    this.noError = true;
    this.loadingDone = true;
    this.lblWhatsNextStatus = "WHATS NEXT";
  }

  getPrivacyPolicy(employeeid: string) {

    this.noError = true;
    this.loadingDone = true;
    this.lblPrivacyPolicyStatus = "PRIVACY STATEMENT";
  }


  getFeedback(employeeid: string) {

    this.noError = true;
    this.loadingDone = true;
    this.lblFeedbackStatus = "FEEDBACK";
  }

  feedbackLength() {
    this.currentFeedbackLength = this.feedbackText.length.toString();
  }

  feedbackSubmit() {

    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;

      if (this.feedbackText == "" || this.feedbackText == undefined || this.feedbackText == null) {
        alert("Feedback is empty");
        return;
      }

      this.loading.present();

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        var uri: string = `${value[Constants.SERVER_URL]}/api/Feedback/SubmitFeedBack?userid=${this.empId}&feedback=${this.feedbackText}&isAnonymous=false&appPlatform=${Constants.APP_PLATFORM}&appVersion=${Constants.VERSION}`;
        var url: string = encodeURI(uri);

        this.httpApi.post(url, {}, {})
          .then(data => {
            var jsonData = JSON.parse(data.data);

            console.log(jsonData);
            if (jsonData['Success'] == "Yes") {
              this.showDialog("DONE!", "Success. Thanks for sending your feedback!", "GREAT!", true);

            } else {
              this.showDialog("ERROR!", "Connection error. Please try again later.", "Okay", false);
            }

            if (this.loading) {
              this.loading.dismiss();
            }

          })
          .catch(error => {
            if (this.loading) {
              this.loading.dismiss();
            }
            this.showDialog("ERROR!", "Connection error. Please try again later.", "Okay", false);
          });
      });
    });
  }

  async showDialog(title: string, message: string, buttonText: string, isSuccess: boolean) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [{
        text: buttonText,
        handler: () => {
          alert.dismiss();
          if (isSuccess) {
            this.feedbackText = "";
          }
        }
      }]
    });
    await alert.present();
  }


  toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  removeExtraSpace(str: string) {
    return str.replace(/(\r\n|\n|\r)/gm, "");
  }

  toggleAboutSection() {
    this.clickedAbout = !this.clickedAbout;
  }

  toggleWhatsNextSection() {
    this.clickedWhatsNext = !this.clickedWhatsNext;
  }

  togglePrivacyPolicy() {
    this.clickedPrivacyPolicy = !this.clickedPrivacyPolicy;
  }

  toggleFeedbackSection() {
    this.clickedFeedback = !this.clickedFeedback;
  }

  toggleViewOnboarding() {
    this.router.navigate(['/onboarding'])
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  refresh() {
    this.ngOnInit();
  }

}
