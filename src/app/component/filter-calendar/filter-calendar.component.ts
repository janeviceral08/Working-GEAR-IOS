import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as Constants from 'src/app/utils/constants.service';

@Component({
  selector: 'app-filter-calendar',
  templateUrl: './filter-calendar.component.html',
  styleUrls: ['./filter-calendar.component.scss'],
})

export class FilterCalendarComponent {
  param: any;
  isLeaveForApprovalChecked: boolean;
  isLeavesChecked: boolean;
  isAdvisoryChecked: boolean;
  isHolidayChecked: boolean;
  isSubLeaveChecked: boolean;
  isSubAdvisoryChecked: boolean;
  isForApprovalChecked: boolean;
  isSubWfhChecked: boolean;
  isWfhChecked: boolean;
  showAll: boolean = true;
  
  isManager: boolean;
  isWorkFromHome: boolean;

  constructor(private modalController: ModalController,
    private storage: Storage,
    private navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.param = this.navParams.get('data');

    this.storage.get(Constants.KEY_CALFILTER_HOLIDAY).then((val) => {
      this.isHolidayChecked = (val != null ? val : true)   
     });

    this.storage.get(Constants.KEY_CALFILTER_LEAVES).then((val) => {
      this.isLeavesChecked = (val != null ? val : true)   
    });

    this.storage.get(Constants.KEY_CALFILTER_ADVISORY).then((val) => {
      this.isAdvisoryChecked = (val != null ? val : true)   
    });

    this.storage.get(Constants.KEY_CALFILTER_SUB_LEAVES).then((val) => {
      this.isSubLeaveChecked = (val != null ? val : false)   
    });

    this.storage.get(Constants.KEY_CALFILTER_SUB_ADVISORY).then((val) => {
      this.isSubAdvisoryChecked = (val != null ? val : false)   
    });

    this.storage.get(Constants.KEY_CALFILTER_SUB_WFH).then((val) => {
      this.isSubWfhChecked = (val != null ? val : false)   
    });


    this.storage.get(Constants.KEY_CALFILTER_FOR_APPROVAL).then((val) => {
      this.isForApprovalChecked = (val != null ? val : false)   
    });

    this.storage.get(Constants.KEY_CALFILTER_FORAPPROVAL_LEAVES).then((val) => {
      this.isLeaveForApprovalChecked = (val != null ? val : false)   
    });

    this.storage.get(Constants.KEY_CALFILTER_SHOW_ALL).then((val) => {
      this.showAll = (val != null ? val : false)   
    });

    this.storage.get(`${Constants.KEY_EMPDETAILS}`).then((val) => {
      this.isManager = val['0']['ISMANAGER'] == "1";
    });

    this.storage.get(Constants.KEY_CALFILTER_WFH).then((val) => {
      this.isWfhChecked = (val != null ? val : true)
    });


    this.storage.get(Constants.KEY_MENU).then((val) => {
      console.log(val);
      this.isWorkFromHome = val['0']['IsWorkFromHome'];
    });

  }

  async myDismiss() {

    let result = {
      'isDismissed': 1,
    };

    await this.modalController.dismiss(result);
  }

  async filterList() {
    this.storage.set(Constants.KEY_CALFILTER_HOLIDAY, this.isLeaveForApprovalChecked);
    this.storage.set(Constants.KEY_CALFILTER_LEAVES, this.isLeavesChecked);
    this.storage.set(Constants.KEY_CALFILTER_ADVISORY, this.isAdvisoryChecked);

    this.storage.set(Constants.KEY_CALFILTER_FORAPPROVAL_LEAVES, this.isLeaveForApprovalChecked);
    this.storage.set(Constants.KEY_CALFILTER_SUB_LEAVES, this.isSubLeaveChecked);
    this.storage.set(Constants.KEY_CALFILTER_SUB_ADVISORY, this.isSubAdvisoryChecked);
    this.storage.set(Constants.KEY_CALFILTER_FOR_APPROVAL, this.isForApprovalChecked);
    this.storage.set(Constants.KEY_CALFILTER_SUB_WFH, this.isSubWfhChecked);

    this.storage.set(Constants.KEY_CALFILTER_WFH, this.isWfhChecked);
    this.storage.set(Constants.KEY_CALFILTER_SHOW_ALL, this.showAll);

    let result = {
      'isDismissed' : 0,
      'leaveForApproval': this.isLeaveForApprovalChecked,
      'leave': this.isLeavesChecked,
      'holiday': this.isHolidayChecked,
      'advisory': this.isAdvisoryChecked,
      'subleave': this.isSubLeaveChecked,
      'subadvisory': this.isSubAdvisoryChecked,
      'forapproval': this.isForApprovalChecked,
      'subwfh': this.isSubWfhChecked,
      'wfh': this.isWfhChecked,
      'showall': this.showAll
    };

    await this.modalController.dismiss(result);
  }

}
