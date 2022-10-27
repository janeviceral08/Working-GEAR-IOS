import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as Constants from 'src/app/utils/constants.service';
import { LoginService } from 'src/app/services/login.service';
import { HTTP } from '@ionic-native/http/ngx';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.page.html',
  styleUrls: ['./personalinformation.page.scss'],
})

export class PersonalinformationPage implements OnInit {
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  empId: string;
  subId: string;
  showPage: string;
  fromPage: string;
  personalInfo: any;
  mobileInfo: any;
  familyInfo: any;
  familyContactInfo: any;
  educationInfo: any;
  idbankInfo: any;
  name: string;
  idShow: string;
  position: string;
  clickedPIBG = false;
  clickedPersonal = false;
  clickedAddress = false;
  clickedContact = false;

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private menuCtrl: MenuController,
    private httpApi: HTTP,
    private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadingDone = false;
    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.fromPage = this.activatedRoute.snapshot.paramMap.get('page');
      this.getInfo();

      if (this.fromPage == 'subordinate') {
        this.subId = this.activatedRoute.snapshot.paramMap.get('id');
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
        this.position = this.activatedRoute.snapshot.paramMap.get('position');
        this.idShow = this.subId;
      }
      else {
        this.storage.get(Constants.KEY_EMPDETAILS).then((val) => {
          this.name = val['0']['FULLNAME'];
          this.position = val['0']['POSITIONDESC'];
          this.idShow = this.empId;
        });
      }
    });
  }

  getInfo() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {
      let postData = {
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        IsActive: true,
        UserID: this.empId,
        EmployeeID: this.fromPage == 'subordinate' ? this.subId : this.empId
      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/BasicInfo/GetPersonalInformation`, postData, {})
          .then(data => {

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

              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            this.noError = true;
            this.personalInfo = jsonData['Value']['tblPersonalInfo']['0'];
            this.mobileInfo = jsonData['Value']['tblMobileInfo'];
            this.familyInfo = jsonData['Value']['tblFamily'];
            this.familyContactInfo = jsonData['Value']['tblFamilyContactPerson'];
            this.educationInfo = jsonData['Value']['tblEducation'];

            if ((this.personalInfo == null || this.personalInfo == undefined) &&
              (this.familyInfo.length == 0) &&
              (this.educationInfo.length == 0)) {
              this.noError = false;
              this.errorMessage = "EMPTY";
            }
            this.loadingDone = true;

          })
          .catch(error => {

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }

  refresh() {
    this.ionViewWillEnter();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  pageInfo(item: string) {
    if (this.fromPage == 'subordinate') {
      this.router.navigate(['/personalbackground',
        this.subId,
        item
      ]);
    }
    else {
      this.router.navigate(['/personalbackground',
        this.empId,
        item
      ]);
    }
  }

  goBack() { this.navCtrl.back(); }
}
