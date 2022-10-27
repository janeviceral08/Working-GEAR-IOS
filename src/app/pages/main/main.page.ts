import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Router, RouterEvent } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
import { AlertController, NavController } from '@ionic/angular';
import * as Constants from 'src/app/utils/constants.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  name: string;
  department: string;
  isManager: string;
  isGetUp: any;
  isOTUser: any;
  isOTManager: any;
  isWorkFromHome: any;

  public userPages = [
    {
      title: 'Home',
      url: '/main/home',
      icon: 'home',
      mode: 'md'
    },
    {
      title: 'Personal Information',
      url: '/main//personalinformation',
      icon: 'contact',
      mode: 'ios'
    },
    {
      title: 'Leave Application',
      url: '/main/leavecredits',
      icon: '/assets/icon/ic_menu_leave.svg',
      mode: 'md'
    },
    {
      title: 'Attendance Advisory',
      url: '/main/advisory',
      icon: '/assets/icon/ic_menu_att.svg',
      mode: 'md'
    },
    // {
    //   title: 'Work From Home',
    //   url: '/main/workfromhome',
    //   icon: 'briefcase',
    //   mode: 'md'
    // },
    {
      title: 'Daily Time Record',
      url: '/main//dailytimerecord',
      icon: 'time',
      mode: 'ios'
    },
    {
      title: 'E-Payslip',
      url: '/main/epayslip',
      icon: 'today',
      mode: 'md'
    },
    {
      title: 'Health Track',
      url: '/main/healthtrack',
      icon: 'heart-half',
      mode: 'md'
    },

    {
      title: 'Events',
      url: '/main//events',
      icon: 'star',
      mode: 'md'
    },

    {
      title: 'Loans',
      url: '/main//loans',
      icon: 'cash',
      mode: 'ios'
    },
    {
      title: 'Purchases',
      url: '/main//purchases',
      icon: 'basket',
      mode: 'ios'
    },
    {
      title: 'Forms',
      url: '/main//forms',
      icon: 'folder',
      mode: 'md'
    },
    {
      title: 'Calendar',
      url: '/main//calendar',
      icon: 'calendar',
      mode: 'md'
    }
  ];
  public managerPages = [
  {
      title: 'Subordinates',
      url: '/main//subordinates',
      icon: 'people',
      mode: 'ios'
    },
    {
      title: 'Leave Approval',
      url: '/main//leaveapproval',
      icon: '/assets/icon/ic_menu_la.svg',
      mode: 'md'
    },
    {
      title: 'Work From Home Approval',
      url: '/main//wfhapproval',
      icon: 'briefcase',
      mode: 'ios'
    },
    {
      title: 'Attendance Advisory Approval',
      url: '/main/advisoryapproval',
      icon: '/assets/icon/ic_menu_aa.svg',
      mode: 'ios'
    }
  ];

  selectedPath = '';

  constructor(
    private http: HTTP,
    private router: Router,
    private loginService: LoginService,
    private storage: Storage,
    private alertController: AlertController,
    private navCtrl: NavController) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
  }

  ngOnInit() {
    this.getConfigFiles();

    this.storage.get(Constants.KEY_EMPDETAILS).then((val) => {
      this.name = val['0']['FULLNAME'];
      this.department = val['0']['DEPARTMENT'];
      this.isManager = val['0']['ISMANAGER'];
    });

    this.storage.get(Constants.KEY_MENU).then((val) => {
      console.log(val);
      this.isGetUp = val['0']['isGetUp'];
      this.isOTUser = val['0']['isOTUser'];
      this.isOTManager = val['0']['isOTManager'];
      this.isWorkFromHome = val['0']['IsWorkFromHome'];


      if (this.isGetUp == true) {
        var listAdd = {
          title: 'Get Up',
          url: '/main/getup',
          icon: '/assets/icon/ic_getup.svg',
          mode: 'md'
        };
        this.userPages.splice(5, 0, listAdd);
      }
      if (this.isWorkFromHome == true) {
        var listAdd = {
          title: 'Work From Home',
          url: '/main/workfromhome',
          icon: 'briefcase',
          mode: 'md'
        };
        this.userPages.splice(3, 0, listAdd);
      }

      if (this.isOTUser == true) {
        var listAdd = {
          title: 'Overtime Application',
          url: '/main/overtime',
          icon: '/assets/icon/ic_menu_ot.svg',
          mode: 'md'
        };
        this.userPages.splice(4, 0, listAdd);
      }
      if (this.isOTManager == true) {
        var listAdd = {
          title: 'Overtime Approval',
          url: '/main/overtimeapproval',
          icon: '/assets/icon/ic_menu_oa.svg',
          mode: 'md'
        };
        this.managerPages.splice(3, 0, listAdd);
      }
    });
    console.log(this.userPages);
  }


  async logout() {
    const alert = await this.alertController.create({
      header: 'Log Out',
      message: 'Are you sure you want to log out?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Log Out',
        handler: () => {
          this.loginService.logout();
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

  getConfigFiles() {
    console.log("getConfigFiles")

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        UserID: val[Constants.KEY_USER_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        UserType: "GABC"
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.http.post(`${value[Constants.SERVER_URL]}/api/Config/GetConfigFiles`, request, {})
          .then(data => {
            var jsonData = JSON.parse(data.data);
            console.log(jsonData)

            if (jsonData['Success'] == "Yes") {
              this.storage.set(Constants.KEY_EMPID, val[Constants.KEY_USER_ID]);
              this.storage.set(Constants.KEY_LEAVETYPES, jsonData['Value']['tblLeaveTypeList']);
              this.storage.set(Constants.KEY_DATEOFDUTY, jsonData['Value']['tblDateOfDutyList']);
              this.storage.set(Constants.KEY_EMPDETAILS, jsonData['Value']['tblEmployeeDetails']);
              this.storage.set(Constants.KEY_HOLIDAYS, jsonData['Value']['tblHolidays']);
              this.storage.set(Constants.KEY_REQTYPE, jsonData['Value']['tblRequestType']);
              this.storage.set(Constants.KEY_MENU, jsonData['Value']['tblMenuItems']);
              this.storage.set(Constants.KEY_OTTYPES, jsonData['Value']['tblOTScheduledType']);
              this.storage.set(Constants.KEY_CHILDRENHOURRATE, jsonData['Value']['tblChildrenHourRate']);

              this.storage.set(Constants.KEY_CALFILTER_HOLIDAY, true);
              this.storage.set(Constants.KEY_CALFILTER_LEAVES, true);
              this.storage.set(Constants.KEY_CALFILTER_FORAPPROVAL_LEAVES, true);

            } else {

              switch (jsonData['Message']) {
                case Constants.OUTDATED_ERROR:
                  this.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                  return;
                case Constants.ERROR_OTHER_DEVICE:
                  this.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                  return;
                case Constants.ERROR_EXPIRED:
                  this.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                  return;
                case Constants.ERROR_REQUIRED:
                  this.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                  return;
              }

              alert("Connection failed. Please try again.");
              this.storage.set(Constants.KEY_ERROR_MESSAGE, "Response Message: " + jsonData['Message']);
            }
          })
          .catch(error => {
            alert("Connection failed. Please try again.");
            this.storage.set(Constants.KEY_ERROR_MESSAGE, "Get Config Files: " + error.error);
          });
      });
    });
  }

  async showSessionError(headerMsge: string, message: string) {
    const alert = await this.alertController.create({
      header: headerMsge,
      message: message,
      backdropDismiss: false,
      buttons: [{
        text: 'Okay',
        handler: () => {
          this.logout();
        }
      }]
    });

    await alert.present();
  }


}
