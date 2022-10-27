import { Component, OnInit } from '@angular/core';
import * as Constants from 'src/app/utils/constants.service';
import { Storage } from '@ionic/storage';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-dailytimerecorddetails',
  templateUrl: './dailytimerecorddetails.page.html',
  styleUrls: ['./dailytimerecorddetails.page.scss'],
})
export class DailytimerecorddetailsPage implements OnInit {
  day: any;
  hours: any;
  dateIn: any;
  timeIn: any;
  dateOut: any;
  timeOut: any;
  lbIn: any;
  lbOut: any;
  cbIn: any;
  cbOut: any;
  shiftSchedule: any;
  attendanceCode: any;
  absentFlag: any;
  specialHoliday: any;
  oth: any;
  nth: any;
  onth: any;
  atd: any;
  ltm: any;
  uth: any;
  bltm: any;
  leaveType: any;
  advisoryType: any;
  otTime: any;
  approvedOT: any;
  appliedOT: any;
  remark: any;
  empSection: any;

  constructor(
    private navCtrl: NavController,
    private storage: Storage) { }

  ngOnInit() {
    this.storage.get(`${Constants.KEY_DTRDETAILS}`).then((val) => {
      this.dateIn= val.DTR_date;
      this.day = val.Att_Code;
      this.timeIn=  val.Am_In
      this.dateOut= val.DTR_date_Out
      this.timeOut= val.Am_Out
      this.lbIn=  val.BK_IN
      this.lbOut= val.BK_OUT
      this.cbIn=  val.CB_IN
      this.cbOut= val.CB_OUT
      this.hours = val.Rth;
      this.shiftSchedule= val.ShiftSchedule
      this.attendanceCode= val.AttendanceCode
      this.absentFlag= val.AbsentFlag
      this.specialHoliday= val.SpecialHolidayFlag
      this.oth= val.OTH
      this.nth= val.NTH
      this.onth= val.ONTH
      this.atd= val.ATD
      this.ltm= val.LTM
      this.uth= val.UTH
      this.bltm= val.BLTM
      this.leaveType= val.Leave_rem
      this.advisoryType= val.AttAdv_rem
      this.otTime= val.OT_rem
      this.approvedOT= val.ApprovedOTHours
      this.appliedOT= val.AppliedOTHours
      this.remark= val.AttendanceRemark
    });
    this.storage.get(`${Constants.KEY_EMPDETAILS}`).then((val) => {
      this.empSection = val['0']['Section'];
    });
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

  goBack() { this.navCtrl.back(); }
}
