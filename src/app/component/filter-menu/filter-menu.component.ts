import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import * as Constants from 'src/app/utils/constants.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss'],
})

export class FilterMenuComponent {
  leaveStatusApprovalList: String[] = ["Approve", "Disapprove", "On Hold", "Escalate"];
  advisoryStatusApprovalList: String[] = ["Approve", "Cancel", "Disapprove", "On Hold"];
  leaveTypeList: String[] = ["All"];
  requestTypeList: String[] = ["All", "With Pay", "With Pay - Without Pay", "Without Pay"]
  reasonList: String[] = ["All", "Personal", "Not feeling well"];
  statusList: String[] = ["All", "FOR APPROVAL", "APPROVED", "CANCELLED", "ON HOLD", "DISAPPROVED", "PLANNED", "POSTED"];
  advisoryTypeList: String[] = ["All", "Authorized Under Time", "Authorized Late", "Offset", "CTO", "Official Business", "Authorized Shifting"];
  advisoryReasonList: String[] = ["All", "Field", "Seminar", "Place of the store", "Personal", "Not feeling well", "Work beyond 10PM"];
  scheduleTypeList: String[] = ["All"];
  sectionList: String[] = ["All", "Sales", "Non-Sales"];
  canteenList: String[] = ["Unpaid", "Paid"];
  module: any;
  param: any;

  employeeName: any;
  employeeNumber: any;
  subordinates: any;

  leaveFrom: any;
  leaveTo: any;
  dateFiledFrom: any;
  dateFiledTo: any;

  leaveType: any = "All";
  requestType: any = "All";
  reason: any = "All";
  status: any = "All";
  advisoryType: any = "All";
  advisoryReason: any = "All";
  scheduleType: any = "All";
  sectionType: any = "All";
  scheduleTypeOTList: any;
  canteenStatus: any;

  showDirect: boolean = true;
  isAdvisory: boolean;

  dateText: string;
  dateText2: string;
  requestText: string;
  showAll: boolean = false;


  constructor(
    private modalController: ModalController,
    private storage: Storage,
    private datepipe: DatePipe,
    private navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.storage.get(`${Constants.KEY_LEAVETYPES}`).then((val) => {
      this.storage.get(`${Constants.KEY_OTTYPES}`).then((val2) => {
        this.param = this.navParams.get('data');
        this.module = this.navParams.get('module');

        this.isAdvisory = (this.module == "AdvisorySearch");

        val.forEach(element => {
          this.leaveTypeList.push(element['DESCRIPTION']);
        });

        this.scheduleTypeOTList = val2;
        val2.forEach(element => {
          this.scheduleTypeList.push(element['DESCRIPTION'])
        });
        this.setLayout();
      });
    });
  }

  setLayout() {
    switch (this.module) {
      case "AdvisorySearch": {
        this.dateText = "Inclusive Dates";
        this.requestText = "Request Type";
        this.setAdvisoryFilter(this.param);
        break;
      }
      case "LeaveSearch": {
        this.dateText = "Leave Date";
        this.dateText2 = "Date Filed";
        this.requestText = "Leave Type";
        this.setFilterValues(this.param);

        break;
      }
      case "Subordinates": {
        this.setFilterValues(this.param);
        break;
      }
      case "LeaveApproval": {
        this.dateText = "Leave Date";
        this.dateText2 = "Date Filed";
        this.requestText = "Leave Type";
        this.setFilterValues(this.param);

        break;
      }
      case "AdvisoryApproval": {
        this.dateText = "Inclusive Dates";
        this.requestText = "Request Type";
        this.setAdvisoryFilter(this.param);
        break;
      }

      case "WfhApproval": {
        this.dateText = "Inclusive Dates";
        this.setWfhApproval(this.param);
        break;
      }
      
      case "DailyTimeRecord": {
        this.dateText = "DTR Inclusive Dates";
        this.dateText2 = "OB Inclusive Dates";
        this.setFilterValues(this.param);
        break;
      }
      case "OTSearch": {
        this.dateText = "OT Date";
        this.setFilterValues(this.param);
        break;
      }
      case "OvertimeApproval": {
        this.dateText = "Inclusive Dates";
        this.setOTFilter(this.param);
        break;
      }
      case "PurchaseDetailsOnline": {
        this.dateText = "Inclusive Dates";
        this.setPurchaseDetailsOnlineFilter(this.param);
        break;
      }
      case "PurchaseDetailsCanteen": {
        this.dateText = "Inclusive Dates";
        this.setCanteenFilter(this.param);
        break;
      }
      case "WorkFromHome": {
        this.dateText = "Inclusive Dates";
        this.setWFHFilter(this.param);
        break;
      }
    }
  }

  async myDismiss() {
    let result = {
      'isDismissed': 1,
    };

    await this.modalController.dismiss(result);
  }

  async filterList() {

    if (this.module == "AdvisorySearch") {
      let result = {
        'isDismissed': 0,
        'advisoryFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
        'advisoryTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
        'advisoryType': this.getAdvisoryType(),
        'advisoryReason': this.getAdvisoryReason(),
        'status': this.getStatus(this.status),
      };

      await this.modalController.dismiss(result);

    } else if (this.module == "Subordinates") {
      let result = {
        'isDismissed': 0,
        'empName': (this.employeeName == undefined ? '' : this.employeeName),
        'empNumber': (this.employeeNumber == undefined ? '' : this.employeeNumber),
        'showAll': (this.showAll == undefined ? true : this.showAll)
      };

      await this.modalController.dismiss(result);

    } else if (this.module == "AdvisoryApproval") {
      let result = {
        'isDismissed': 0,
        'empName': this.employeeName,
        'empNumber': this.employeeNumber,
        'advisoryFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
        'advisoryTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
        'advisoryType': this.getAdvisoryType(),
        'advisoryReason': this.getAdvisoryReason(),
        'showDirect': (this.showDirect == undefined ? true : this.showDirect)
      };

      await this.modalController.dismiss(result);

    } else if (this.module == "WfhApproval") {
      let result = {
        'isDismissed': 0,
        'empName': this.employeeName,
        'empNumber': this.employeeNumber,
        'advisoryFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
        'advisoryTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
        'showDirect': (this.showDirect == undefined ? true : this.showDirect)
      };

      await this.modalController.dismiss(result);

    }else if (this.module == "OvertimeApproval") {
      let result = {
        'isDismissed': 0,
        'empName': this.employeeName,
        'empNumber': this.employeeNumber,
        'leaveFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
        'leaveTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
        'scheduleType': this.scheduleType, //this.getScheduleType(this.scheduleType),
        'sectionType': this.getSectionType(this.sectionType),
        'showDirect': (this.showDirect == undefined ? true : this.showDirect)
      };
      console.log(result);
      await this.modalController.dismiss(result);

    } else if (this.module == "PurchaseDetailsOnline") {
      let result = {
        'isDismissed': 0,
        'purchaseDateFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
        'purchaseDateTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy')
      };
      console.log(result);
      await this.modalController.dismiss(result);

    } else if (this.module == "PurchaseDetailsCanteen") {
      let result = {
        'isDismissed': 0,
        'purchaseDateFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
        'purchaseDateTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
        'canteenStatus': this.getCanteenType(this.canteenStatus)
      };
      console.log(result);
      await this.modalController.dismiss(result);

    } else if (this.module == "WorkFromHome") {
      let result = {
        'isDismissed': 0,
        'leaveFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
        'leaveTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
        'status': this.getStatus(this.status)
      };
      console.log(result);
      await this.modalController.dismiss(result);

    } else {
      let result = {
        'isDismissed': 0,
        'empName': (this.employeeName == undefined ? '' : this.employeeName),
        'empNumber': this.employeeNumber,
        'leaveFrom': this.datepipe.transform(this.leaveFrom, 'MM/dd/yyyy'),
        'leaveTo': this.datepipe.transform(this.leaveTo, 'MM/dd/yyyy'),
        'dateFiledFrom': this.datepipe.transform(this.dateFiledFrom, 'MM/dd/yyyy'),
        'dateFiledTo': this.datepipe.transform(this.dateFiledTo, 'MM/dd/yyyy'),
        'leaveType': this.getLeaveType(this.leaveType),
        'requestType': this.getRequestType(this.requestType),
        'reason': this.getReason(this.reason),
        'status': this.getStatus(this.status),
        'showDirect': (this.showDirect == undefined ? true : this.showDirect),
        'scheduleType': this.getScheduleType(this.scheduleType),
        'sectionType': this.getSectionType(this.sectionType),
        'canteenType': this.getCanteenType(this.canteenStatus)
      };
      await this.modalController.dismiss(result);

    }
  }

  clearItems() {
    this.employeeName = "";
    this.employeeNumber = "";
    this.leaveFrom = null;
    this.leaveTo = null;
    this.dateFiledFrom = null;
    this.dateFiledTo = null;
    this.leaveType = "All";
    this.requestType = "All";
    this.reason = "All";
    this.status = "All";
    this.showDirect = true;
    this.advisoryType = "All";
    this.advisoryReason = "All";
    this.sectionType = "All";
    this.scheduleType = "All";
    this.canteenStatus = "Unpaid";
    this.showAll = false;
  }

  setFilterValues(data: any) {
    this.employeeName = data['EmpName'];
    this.employeeNumber = (data['EmployeeId'] == 0 ? "" : data['EmployeeId']);
    this.leaveFrom = this.datepipe.transform(data['LeaveFrom'], 'yyyy-MM-dd');
    this.leaveTo = this.datepipe.transform(data['LeaveTo'], 'yyyy-MM-dd');
    this.dateFiledFrom = this.datepipe.transform(data['DateFrom'], 'yyyy-MM-dd');
    this.dateFiledTo = this.datepipe.transform(data['DateTo'], 'yyyy-MM-dd');

    this.leaveType = this.setLeaveType(data['LeaveType']);
    this.requestType = this.setRequestType(data['LeaveRequestType']);
    this.reason = this.setReason(data['LeaveReason']);
    this.status = this.setStatus(data['LeaveRequestStatus']);

    this.showDirect = data['ShowAll'];
    this.showAll = data['ShowAll'];
  }

  setAdvisoryFilter(data: any) {
    this.employeeName = data['EMPL_NAME'];
    this.employeeNumber = (data['EMPNO'] == 0 ? "" : data['EMPNO']);
    this.advisoryReason = this.setAdvisoryReason(data['REASONCODE']);
    this.advisoryType = this.setAdvisoryType(data['REQUESTTYPECODE']);

    this.leaveFrom = this.datepipe.transform(data['DATEFROM'], 'yyyy-MM-dd');
    this.leaveTo = this.datepipe.transform(data['DATETO'], 'yyyy-MM-dd');
    this.status = this.setStatus(data['STATUSCODE']);

    this.showDirect = data['SHOWALL'];
    this.showAll = data['SHOWALL'];
  }

  setWfhApproval(data: any) {
    this.employeeName = data['EMPL_NAME'];
    this.employeeNumber = (data['EMPNO'] == 0 ? "" : data['EMPNO']);
    this.advisoryReason = this.setAdvisoryReason(data['REASONCODE']);
    this.advisoryType = this.setAdvisoryType(data['REQUESTTYPECODE']);

    this.leaveFrom = this.datepipe.transform(data['DATEFROM'], 'yyyy-MM-dd');
    this.leaveTo = this.datepipe.transform(data['DATETO'], 'yyyy-MM-dd');
    this.status = this.setStatus(data['STATUSCODE']);

    this.showDirect = data['SHOWALL'];
    this.showAll = data['SHOWALL'];
  }

  setOTFilter(data: any) {
    this.employeeName = data['EMPNAME'];
    this.employeeNumber = (data['EMPNO'] == 0 ? "" : data['EmployeeId']);
    this.leaveFrom = this.datepipe.transform(data['STARTDATE'], 'yyyy-MM-dd');
    this.leaveTo = this.datepipe.transform(data['ENDDATE'], 'yyyy-MM-dd');

    this.scheduleType = data['SCHEDULEDTYPE']; //this.setScheduleType(data['SCHEDULEDTYPE']);
    this.sectionType = this.setSectionType(data['SECTION']);

    this.showDirect = data['SHOWALL'];
  }

  setPurchaseDetailsOnlineFilter(data: any) {
    this.leaveFrom = this.datepipe.transform(data['purchaseDateFrom'], 'yyyy-MM-dd');
    this.leaveTo = this.datepipe.transform(data['purchaseDateTo'], 'yyyy-MM-dd');
  }

  setCanteenFilter(data: any) {
    this.leaveFrom = this.datepipe.transform(data['purchaseDateFrom'], 'yyyy-MM-dd');
    this.leaveTo = this.datepipe.transform(data['purchaseDateTo'], 'yyyy-MM-dd');
    this.canteenStatus = this.setCanteenType(data['canteenStatus']);
  }

  setWFHFilter(data: any) {
    this.leaveFrom = this.datepipe.transform(data['LeaveFrom'], 'yyyy-MM-dd');
    this.leaveTo = this.datepipe.transform(data['LeaveTo'], 'yyyy-MM-dd');
    this.status = this.setStatus(data['Status']);
  }

  getLeaveType(type: string): string {
    switch (type) {
      case "Vacation Leave": {
        return "VL";
      }
      case "Emergency Leave": {
        return "EL";
      }
      case "Sick Leave": {
        return "SL";
      }
      case "Birthday Leave": {
        return "BL";
      }
      case "Paternity Leave": {
        return "PL";
      }
      case "Service Incentive Leaves": {
        return "IL";
      }
      case "Solo Parent Leave": {
        return "SP";
      }
      case "Magna Carta For Women": {
        return "MCW";
      }
      case "Sss Maternity Leave": {
        return "ML";
      }
      default: {
        return null;
      }
    }
  }

  getRequestType(type: string): string {
    switch (type) {
      case "With Pay": {
        return "WP";
      }
      case "With Pay - Without Pay": {
        return "WOPWP";
      }
      case "Without Pay": {
        return "WOP";
      }
      default: {
        return null;
      }
    }
  }

  getReason(reason: string): string {
    switch (reason) {
      case "Personal": {
        return Constants.REASON_CODE_PERSONAL;
      }
      case "Not feeling well": {
        return Constants.REASON_CODE_NOT_FEEL;
      }
      case "Filed via DTR": {
        return Constants.REASON_CODE_DTR;
      }
      case "Cancelled via DTR": {
        return Constants.REASON_CODE_CANCEL;
      }
      default: {
        return null;
      }
    }
  }

  getStatus(status: string): string {
    switch (status) {
      case "FOR APPROVAL": {
        return Constants.LEAVE_STATUS_FOR_APPROVAL;
      }
      case "APPROVED": {
        return Constants.LEAVE_STATUS_APPROVED;
      }
      case "CANCELLED": {
        return Constants.LEAVE_STATUS_CANCELLED;
      }
      case "ON HOLD": {
        return Constants.LEAVE_STATUS_ON_HOLD;
      }
      case "DISAPPROVED": {
        return Constants.LEAVE_STATUS_DISAPPROVED;
      }
      case "SUBMITTED": {
        return Constants.LEAVE_STATUS_SUBMITTED;
      }
      case "ADJUSTED": {
        return Constants.LEAVE_STATUS_ADJUSTED;
      }
      case "PLANNED": {
        return Constants.LEAVE_STATUS_PLANNED;
      }
      case "POSTED": {
        return Constants.LEAVE_STATUS_POSTED;
      }
      default: {
        return null;
      }
    }
  }

  setLeaveType(type: string): string {
    switch (type) {
      case "VL": {
        return "Vacation Leave";
      }
      case "EL": {
        return "Emergency Leave";
      }
      case "SL": {
        return "Sick Leave";
      }
      case "BL": {
        return "Birthday Leave";
      }
      case "PL": {
        return "Paternity Leave";
      }
      case "IL": {
        return "Service Incentive Leaves";
      }
      case "SP": {
        return "Solo Parent Leave";
      }
      case "MCW": {
        return "Magna Carta For Women";
      }
      case "ML": {
        return "Sss Maternity Leave";
      }
      default: {
        return "All";
      }
    }
  }

  setRequestType(type: string): string {
    switch (type) {
      case "WP": {
        return "With Pay";
      }
      case "WOPWP": {
        return "With Pay - Without Pay";
      }
      case "WOP": {
        return "Without Pay";
      }
      default: {
        return "All";
      }
    }
  }

  getScheduleType(type: string): string {
    this.storage.get(`${Constants.KEY_OTTYPES}`).then((val) => {
      val.forEach(element => {
        if (type == element['DESCRIPTION']) {
          return element['SEQCODE'];
        }
      });
    });
    return null;
  }

  setScheduleType(type: string): string {
    console.log(type);
    this.scheduleTypeOTList.forEach(element => {
      if (type == (element['SEQCODE'])) {
        return element['DESCRIPTION'];
      }
    });
    return "All";
  }

  getSectionType(type: string): string {
    switch (this.sectionType) {
      case "Sales": {
        return "S";
      }
      case "Non-Sales": {
        return "O";
      }
      default: {
        return "-";
      }
    }
  }

  setSectionType(type: string): string {
    switch (type) {
      case "S": {
        return "Sales";
      }
      case "O": {
        return "Non-Sales";
      }
      default: {
        return "All";
      }
    }
  }

  getCanteenType(type: string): string {
    switch (this.canteenStatus) {
      case "Unpaid": {
        return "U";
      }
      case "Paid": {
        return "P";
      }
    }
  }

  setCanteenType(type: string): string {
    switch (type) {
      case "P": {
        return "Paid";
      }
      case "U": {
        return "Unpaid";
      }
    }
  }

  setReason(reason: string): string {
    switch (reason) {
      case Constants.REASON_CODE_PERSONAL: {
        return "Personal";
      }
      case Constants.REASON_CODE_NOT_FEEL: {
        return "Not feeling well";
      }
      case Constants.REASON_CODE_DTR: {
        return "Filed via DTR";
      }
      case Constants.REASON_CODE_CANCEL: {
        return "Cancelled via DTR";
      }
      default: {
        return "All";
      }
    }
  }

  setStatus(status: string): string {
    switch (status) {
      case Constants.LEAVE_STATUS_FOR_APPROVAL: {
        return "FOR APPROVAL";
      }
      case Constants.LEAVE_STATUS_APPROVED: {
        return "APPROVED";
      }
      case Constants.LEAVE_STATUS_CANCELLED: {
        return "CANCELLED";
      }
      case Constants.LEAVE_STATUS_ON_HOLD: {
        return "ON HOLD";
      }
      case Constants.LEAVE_STATUS_DISAPPROVED: {
        return "DISAPPROVED";
      }
      case Constants.LEAVE_STATUS_SUBMITTED: {
        return "SUBMITTED";
      }
      case Constants.LEAVE_STATUS_ADJUSTED: {
        return "ADJUSTED";
      }
      case Constants.LEAVE_STATUS_PLANNED: {
        return "PLANNED";
      }
      case Constants.LEAVE_STATUS_POSTED: {
        return "POSTED";
      }
      default: {
        return "All";
      }
    }
  }

  getAdvisoryType(): string {
    switch (this.advisoryType) {
      case "Authorized Under Time": {
        return Constants.ATD_TYPE_CODE_AUT;
      }
      case "Authorized Late": {
        return Constants.ATD_TYPE_CODE_AL;
      }
      case "Offset": {
        return Constants.ATD_TYPE_CODE_OS;
      }
      case "CTO": {
        return Constants.ATD_TYPE_CODE_CTO;
      }
      case "Official Business": {
        return Constants.ATD_TYPE_CODE_OB;
      }
      case "Authorized Shifting": {
        return Constants.ATD_TYPE_CODE_AS;
      }
      default: {
        return null;
      }
    }
  }

  getAdvisoryReason(): string {
    switch (this.advisoryReason) {
      case "Field": {
        return Constants.ATD_REASON_CODE_FIELD;
      }
      case "Seminar": {
        return Constants.ATD_REASON_CODE_SEMINAR;
      }
      case "Place of the store": {
        return Constants.ATD_REASON_CODE_POS;
      }
      case "Personal": {
        return Constants.ATD_REASON_CODE_PERSONAL;
      }
      case "Not feeling well": {
        return Constants.ATD_REASON_CODE_NFW;
      }
      case "Work beyond 10PM": {
        return Constants.ATD_REASON_CODE_WBT;
      }
      default: {
        return null;
      }
    }
  }

  setAdvisoryType(type: string): string {
    switch (type) {
      case Constants.ATD_TYPE_CODE_AUT: {
        return "Authorized Under Time";
      }
      case Constants.ATD_TYPE_CODE_AL: {
        return "Authorized Late";
      }
      case Constants.ATD_TYPE_CODE_OS: {
        return "Offset";
      }
      case Constants.ATD_TYPE_CODE_CTO: {
        return "CTO";
      }
      case Constants.ATD_TYPE_CODE_OB: {
        return "Official Business";
      }
      case Constants.ATD_TYPE_CODE_AS: {
        return "Authorized Shifting";
      }
      default: {
        return "All";
      }
    }
  }

  setAdvisoryReason(reason: string): string {
    switch (reason) {
      case Constants.ATD_REASON_CODE_FIELD: {
        return "Field";
      }
      case Constants.ATD_REASON_CODE_SEMINAR: {
        return "Seminar";
      }
      case Constants.ATD_REASON_CODE_POS: {
        return "Place of the store";
      }
      case Constants.ATD_REASON_CODE_PERSONAL: {
        return "Personal";
      }
      case Constants.ATD_REASON_CODE_NFW: {
        return "Not feeling well";
      }
      case Constants.ATD_REASON_CODE_WBT: {
        return "Work beyond 10PM";
      }
      default: {
        return "All";
      }
    }
  }
}
