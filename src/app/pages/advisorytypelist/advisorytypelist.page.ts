import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as Constants from 'src/app/utils/constants.service';
import { MenuController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-advisorytypelist',
  templateUrl: './advisorytypelist.page.html',
  styleUrls: ['./advisorytypelist.page.scss'],
})
export class AdvisorytypelistPage implements OnInit {
  results: Observable<any>;
  test: string;
  empId: string;
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  advisoryList: any;
  event;

  constructor(
    private storage: Storage,
    private httpApi: HTTP,
    private loginService: LoginService,
    private menuCtrl: MenuController,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loadingDone = false;
    this.noError = true;
    this.storage.get(`${Constants.KEY_REQTYPE}`).then((val) => {
      this.advisoryList = val;

      this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
        this.empId = val;
        this.getAdvisory();
      });
    });
  }

  getAdvisory() {

    var countAl = 0;
    var countAu = 0;
    var countOs = 0;
    var countCto = 0;
    var countOb = 0;
    var countAs = 0;

    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let request = {
        RecordID: val[Constants.KEY_RECORD_ID],
        USER: val[Constants.KEY_USER_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        EMPNO: val[Constants.KEY_USER_ID]
      }

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/HRISAttendanceAdvisory/GetAttendanceAdvisory`, request, {})
        .then(data => {

          if(this.event){
            this.event.target.complete();
          }

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

          this.results.forEach(element => {
            switch (element['REQUESTTYPECODE']) {
              case Constants.ATD_TYPE_CODE_AUT:
                countAu++;
                break;
              case Constants.ATD_TYPE_CODE_AL:
                countAl++;
                break;
              case Constants.ATD_TYPE_CODE_OS:
                countOs++;
                break;
              case Constants.ATD_TYPE_CODE_CTO:
                countCto++;
                break;
              case Constants.ATD_TYPE_CODE_OB:
                countOb++;
                break;
              case Constants.ATD_TYPE_CODE_AS:
                countAs++;
                break;
            }
          });

          this.advisoryList.forEach(element => {
            switch (element['SEQNO']) {
              case Constants.ATD_TYPE_CODE_AUT:
                element['COUNT'] = countAu;
                break;
              case Constants.ATD_TYPE_CODE_AL:
                element['COUNT'] = countAl;
                break;
              case Constants.ATD_TYPE_CODE_OS:
                element['COUNT'] = countOs;
                break;
              case Constants.ATD_TYPE_CODE_CTO:
                element['COUNT'] = countCto;
                break;
              case Constants.ATD_TYPE_CODE_OB:
                element['COUNT'] = countOb;
                break;
              case Constants.ATD_TYPE_CODE_AS:
                element['COUNT'] = countAs;
                break;
            }
          });

          this.loadingDone = true;
        })
        .catch(error => {
          if(this.event){
            this.event.target.complete();
          }
          
          this.noError = false;
          this.errorMessage = Constants.MESSAGE_CON_ERROR;
          this.loadingDone = true;
        });
      });
    });

  }

  getAdvisoryTypeSrc(advisoryType: string): string {

    switch (advisoryType) {
      case Constants.ATD_TYPE_CODE_AUT:
        return "assets/icon/ic_au.png";

      case Constants.ATD_TYPE_CODE_AL:
        return "assets/icon/ic_al.png";

      case Constants.ATD_TYPE_CODE_OS:
        return "assets/icon/ic_os.png";

      case Constants.ATD_TYPE_CODE_CTO:
        return "assets/icon/ic_cto.png";

      case Constants.ATD_TYPE_CODE_OB:
        return "assets/icon/ic_ob.png";

      case Constants.ATD_TYPE_CODE_AS:
        return "assets/icon/ic_as.png";
    }
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  openAddAdvisory() {
    this.router.navigate(['/advisoryadd',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ]);
  }

  refresh(event){
    this.event = event;
    this.ngOnInit();
  }
}
