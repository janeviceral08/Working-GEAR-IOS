import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';


import * as Constants from 'src/app/utils/constants.service';

export enum LeaveType {
  all = ''
}

export enum LeaveTime {
  AM = 'AM',
  PM = 'PM'
}

export enum Reason {
  personal = 'LVR00001',
  notwell = 'LVR00002'
}

@Injectable({
  providedIn: 'root'
})

export class LeaveService {
  results: any;
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  testString: string;
  sidebarVisibilityChange: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient, 
    private storage: Storage,
    private httpApi: HTTP) { 
      this.sidebarVisibilityChange.subscribe((value) => {
        this.testString = value
    });

    }

  getLeaveCredits(){
    
    // return this.http.get(`${Constants.API_ENDPOINT}/api/leaverequest/findall?employeeid=${employeeid}`).pipe(
    //   map(results => 
    //     results['Value']['tblLeaveCredit']
    //   )
    // );
    this.results = this.http.get(`${Constants.API_ENDPOINT}/api/leaverequest/findall?employeeid=10145`).pipe(
      map(results => 
        results['Value']['tblLeaveCredit']
      )
    );

  }

  getLeaveList(employeeid:string): Observable<any>{

    return this.http.get(`${Constants.API_ENDPOINT}/api/leaverequest/findall?employeeid=${employeeid}`).pipe(
      map(results =>
        results['Value']['tblLeaveRequest']
      )
    );
  }

  requestLeave(){
    this.httpApi.get(`${Constants.API_ENDPOINT}/api/leaverequest/findall?employeeid=10145` ,'', {})
    .then(data => {
      // var jsonData = JSON.parse(data.data);

      // if(jsonData['Success'] == "Yes"){
      //   this.storage.set(`${Constants.KEY_EMPID}`, `${employeeID}`);
      //   this.storage.set(`${Constants.KEY_LEAVETYPES}`, jsonData['Value']['tblLeaveTypeList']);
      //   this.storage.set(`${Constants.KEY_DATEOFDUTY}`, jsonData['Value']['tblDateOfDutyList']);
      //   this.storage.set(`${Constants.KEY_EMPDETAILS}`, jsonData['Value']['tblEmployeeDetails']);
      //   this.storage.set(`${Constants.KEY_HOLIDAYS}`, jsonData['Value']['tblHolidays']);
      //   this.storage.set(`${Constants.KEY_REQTYPE}`, jsonData['Value']['tblRequestType']);

      //   this.router.navigate(['/leavecredits'])
      // }else{
      //   alert("Connection failed. Please try again.");
      // }

      // this.loading.dismiss();
      var jsonData = JSON.parse(data.data);
      this.results = jsonData['Value']['tblLeaveRequest'];
      this.sidebarVisibilityChange.next("test test");
    })
    .catch(error => {

      console.log(error);
      console.log(error.error);
      console.log(error.data);
      // alert("Connection failed. Please try again.");

      // console.log(error.error);

      // this.loading.dismiss();
    });

  }

  // getLeaveList(employeeid: string) {

  //   this.httpApi.get(`${Constants.API_ENDPOINT}/api/leaverequest/findall?employeeid=${employeeid}`, {}, {})
  //     .then(data => {

  //       console.log(data.data);

  //        if (data.data == null || data.data == undefined) {
  //         this.noError = false;
  //         this.errorMessage = Constants.MESSAGE_CON_ERROR;
  //         return;
  //       }

  //       var jsonData = JSON.parse(data.data);

  //       if (jsonData['Status'] != Constants.POST_SUCCESS) {
  //         this.noError = false;
  //         this.errorMessage = Constants.MESSAGE_CON_ERROR;
  //         return;
  //       }

  //       if (jsonData['Success'] != Constants.POST_YES) {
  //         this.noError = false;
  //         this.errorMessage = Constants.MESSAGE_CON_ERROR;
  //         return;
  //       }

  //       if (jsonData['Value']['tblLeaveCredit'] == null || jsonData['Value']['tblLeaveCredit'] == undefined) {
  //         this.noError = false;
  //         this.errorMessage = Constants.MESSAGE_CON_ERROR;
  //         return;
  //       }

  //       this.noError = true;
  //       this.results = jsonData['Value']['tblLeaveCredit'];
  //       this.loadingDone = true;
  //     })
  //     .catch(error => {

  //       console.log(error);

  //       this.noError = false;
  //       this.errorMessage = Constants.MESSAGE_CON_ERROR;
  //       this.loadingDone = true;
  //     })
  // }
}