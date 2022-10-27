import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/utils/constants.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { DatePipe } from '@angular/common'
import * as moment from 'moment';

@Component({
  selector: 'app-antigentestqa',
  templateUrl: './antigentestqa.page.html',
  styleUrls: ['./antigentestqa.page.scss'],
})
export class AntigentestqaPage implements OnInit {
  loading;
  loadingDone: boolean = false;
  noError: boolean = true;
  empId;
  event;
  errorMessage: string;
  inputValue: string;

  questionAnswerList: any[] = [];

  antigenQuestionList: any[] = [];
  antigenAnswerList: any[] = [];

  constructor(
    private storage: Storage,
    private router: Router,
    private menuCtrl: MenuController,
    private httpApi: HTTP,
    public datepipe: DatePipe,
    private modalController: ModalController,
    private navCtrl: NavController,
    private loginService: LoginService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    public plt: Platform) { }

  ngOnInit() {

    this.loadingDone = false;

    this.plt.ready().then(() => {
      console.log('plt');

      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;
        this.getAntigenTestQaData();
      });
    });
  }


  getAntigenTestQaData() {
    console.log('getAntigenTestData');

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {

        UserID: this.empId,
        EmployeeId: this.empId,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatform: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        ProcessType: "covid-antigen-qa-details",
        UserType: val[Constants.KEY_USER_TYPE]
      }


      console.log(request);
      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/health/covid/antigen`, request, {})
          .then(data => {

            if (this.event) {
              this.event.target.complete();
            }

            if (data.data == null || data.data == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log(jsonData);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              this.loadingDone = true;
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {
              this.loadingDone = true;

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

                case "No Available Data.":
                  this.noError = false;
                  this.errorMessage = "EMPTY";
                  return;

                default:

                  this.noError = false;
                  this.errorMessage = Constants.MESSAGE_CON_ERROR;
                  return;
              }
            }
            console.log(jsonData);


            this.antigenQuestionList = jsonData['Value']['tblAntigenQuestionaire'];
            this.antigenAnswerList = jsonData['Value']['tblAntigenAnswer'];


            this.antigenQuestionList.forEach(question => {

              var answerList: any[] = [];

              let answerQuestion = {

                QuestionID: question.QuestionID,
                Description: question.Description,
                tblAntigenAnswer: answerList,
                AnswerID: '',
                AnswerText: '',
                AnswerType: ''
              }

              this.antigenAnswerList.forEach(answer => {
                if (question.QuestionID == answer.QuestionCode) {
                  answerQuestion.AnswerType = answer.Type
                  answerList.push(answer);
                }
              });

              answerQuestion.tblAntigenAnswer = answerList;
              this.questionAnswerList.push(answerQuestion);
            });

            console.log(this.questionAnswerList)

            this.loadingDone = true;

          })

          .catch(error => {
            console.log(error);

            if (this.event) {
              this.event.target.complete();
            }

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }

  reviewChange(id: string, answer: string) {

    this.questionAnswerList.forEach(element => {
      if (element.QuestionID == id) {
        element.AnswerID = answer;
      }
    });
  }

  radioChange(id: string, answer: string, answerid: string) {
    this.questionAnswerList.forEach(element => {
      if (element.QuestionID == id) {
        element.AnswerText = answer;
        element.AnswerID = answerid;
      }
    });

  }

  dateChange(id: string, answerid: string) {
    this.questionAnswerList.forEach(element => {
      if (element.QuestionID == id) {
        element.AnswerID = answerid;
        element.AnswerText = this.datepipe.transform((element.AnswerText), 'MM/dd/yyyy');
      }
    });

  }


  submit() {
    console.log(this.questionAnswerList)
    var keepGoing = true;
    this.questionAnswerList.forEach(element => {
      if (keepGoing) {
        if (!element.AnswerText || !element.QuestionID || !element.AnswerID) {
          alert("Please answer all questions.");
          keepGoing = false;
        }
      }
    });

    this.numberOfAnswers = 0;
    console.log('submit answers')


    this.loadingCtrl.create({
      message: "Loading..."
    }).then((overlay) => {

      this.loading = overlay;
      this.loading.present();
      this.questionAnswerList.forEach(element => {
        this.submitTextAnswer(element.QuestionID, element.AnswerID, element.AnswerText)
      });
    });

  }

  numberOfAnswers: any;


  checkAllAnswers() {
    this.numberOfAnswers++;
    console.log(this.numberOfAnswers)

    if (this.numberOfAnswers == this.questionAnswerList.length) {
      console.log("success")
      this.showDialog("Success!", "Your answers have been saved.", "Okay");

      if (this.loading) {
        this.loading.dismiss()
      }
    }
  }


  submitTextAnswer(questionid: string, andswerid: string, answertext: string) {

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {

        UserID: this.empId,
        EmployeeId: this.empId,
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatform: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        ProcessType: "insert-employee-covid-antigen-qa-details",
        UserType: val[Constants.KEY_USER_TYPE],
        QuestionID: questionid,
        AnswerID: andswerid,
        AnswerText: answertext
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/health/covid/antigen`, request, {})
          .then(data => {

            if (this.event) {
              this.event.target.complete();
            }

            if (data.data == null || data.data == undefined) {
              this.showDialog("ERROR!", Constants.SOMETHING_WENT_WRONG, "Okay");
              this.loading.dismiss();
              return;
            }

            var jsonData = JSON.parse(data.data);
            console.log(jsonData);

            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.showDialog("ERROR!", Constants.SOMETHING_WENT_WRONG, "Okay");
              this.loading.dismiss();
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {
              this.showDialog("ERROR!", Constants.SOMETHING_WENT_WRONG, "Okay");
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

                default:
                  return;
              }
            }
            this.checkAllAnswers()
          })

          .catch(error => {
            console.log(error);
          });
      });
    });
}

async showDialog(title: string, message: string, buttonText: string) {
  const alert = await this.alertController.create({
    header: title,
    message: message,
    buttons: [{
      text: buttonText,
      handler: () => {
        this.navCtrl.back();
      }
    }],
    backdropDismiss: false
  });
  await alert.present();
}
}
