import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, LoadingController, Platform, AlertController, NavController, Events } from '@ionic/angular';
import { FilterMenuComponent } from '../../component/filter-menu/filter-menu.component';
import { OverlayEventDetail } from '@ionic/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as Constants from 'src/app/utils/constants.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-overtime',
  templateUrl: './overtime.page.html',
  styleUrls: ['./overtime.page.scss'],
})
export class OvertimePage implements OnInit {
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  modalIsOpen: boolean;
  event;
  empId: string;
  results: any;
  id: string;
  OTTypeList: string[] = [];
  OTArrange: string[] = [];
  OTType: string = "FIRST";

  constructor(
    private storage: Storage,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpApi: HTTP,
    private loginService: LoginService,
    private menuCtrl: MenuController,
    private modalController: ModalController,
    public events: Events) {
    this.listenEvents();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadingDone = false;
    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.getOTList();
    });
  }

  listenEvents() {
    console.log("listen");
    this.events.subscribe('reloadDetails', () => {
      this.ionViewWillEnter();
    });
  }

  getOTList() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        SessionID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        IsActive: true,
        UserID: this.empId,
        EMPNO: this.empId,
        STARTDATE: "",
        ENDDATE: "",
      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/OTRequest/GetOTFiled`, postData, {})
          .then(data => {

            if (data.data == null || data.data == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            var jsonData = JSON.parse(data.data);

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

            if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            this.noError = true;
            this.results = jsonData['Value'];
            this.loadingDone = true;

            console.log(this.results);
            this.showList();
          })
          .catch(error => {

            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }

  showList() {
    this.results.forEach(item => {

      if (this.OTArrange.find(e => e === item["STATUSDESC"])) {
      }
      else this.OTArrange.push(item["STATUSDESC"]);
    });
    console.log(this.OTArrange);

    this.OTTypeList = [];
    if (this.OTArrange.includes("FOR APPROVAL")) {
      this.OTTypeList.push("FOR APPROVAL")
      this.OTType = "FOR APPROVAL";
    };
    if (this.OTArrange.includes("APPROVED")) {
      this.OTTypeList.push("APPROVED")
      if (this.OTType == "FIRST") this.OTType = "APPROVED";
    };
    if (this.OTArrange.includes("POSTED")) {
      this.OTTypeList.push("POSTED")
      if (this.OTType == "FIRST") this.OTType = "POSTED";
    };
    this.OTArrange.forEach(item => {
      for (var ctr = 0; ctr < this.OTArrange.length; ctr++) {
        if (!this.OTTypeList.includes(item)) {
          this.OTTypeList.push(item);
          if (this.OTType == "FIRST") this.OTType = item;
        }
      }
    });

    if (this.OTTypeList.length <= 0) {
      this.noError = false;
      this.errorMessage = "EMPTY";
      return;
    }
  }

  setOTDetails(item: any) {
    item["PageType"] = "User";
    this.storage.set(Constants.KEY_OTDETAILS, item);

    this.router.navigate(['/overtimedetails', 'overtime'])
  }

  getDateMonth(datename: string, procedure: number): string {
    var date = new Date(datename);
    var CurrentMonth: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    if (procedure == 1)
      return CurrentMonth[date.getMonth()].toString().toUpperCase();
    else
      return CurrentMonth[date.getMonth()];
  }

  getDateDate(datename: string): string {
    var date = new Date(datename);
    return date.getDate().toString();
  }

  getDateYear(datename: string): string {
    var date = new Date(datename);
    return date.getFullYear().toString();
  }

  getLongDate(datename: string): string {
    var month = this.getDateMonth(datename, 2);
    var date = this.getDateDate(datename);
    var year = this.getDateYear(datename);
    var fulldate = month + " " + date + ", " + year;
    return fulldate;
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
  openOTAdd() {
    this.router.navigate(['/overtimeadd', '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ])
  }

  refresh() {
    this.ionViewWillEnter();
  }
}
