import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import * as Constants from 'src/app/utils/constants.service';

@Component({
  selector: 'app-submit-approval',
  templateUrl: './submit-approval.component.html',
  styleUrls: ['./submit-approval.component.scss'],
})
export class SubmitApprovalComponent implements OnInit {

  statusList: String[];

  status: string;
  remarks: string;
  appliedhours: string;
  param: string;

  constructor(private modalController: ModalController,
    private navParams: NavParams,
    private navCtrl: NavController,
    private alertController: AlertController, ) { }

  ngOnInit() {
    this.param = this.navParams.get('data');

    if (this.param == "advisoryapproval") {
      this.statusList = ["Approve", "Cancel", "Disapprove", "On Hold"];
    } else if (this.param == "otapproval") {
      this.statusList = ["Approve", "Disapprove"];
    } else {
      this.statusList = ["Approve", "Disapprove", "Escalate", "On Hold"];
    }

    this.status = "Approve";
  }

  async myDismiss() {
    let result = {
      'isDismissed': 1,
    };

    await this.modalController.dismiss(result);
  }

  async submitLeave() {

    let result = {
      'isDismissed': 0,
      'remarks': this.remarks
    };

    if (this.param == 'otapproval') {
      console.log(this.status);
      console.log(this.appliedhours);
      if (this.status == 'Approve' && (this.appliedhours == undefined || this.appliedhours == null )) {
        console.log(this.appliedhours);
        this.showDialog("ERROR!", "Please input approved hours", false, "Okay");
        return;
      }
      else {
        result['appliedhours'] = this.appliedhours;
        result['status'] = this.status;
        result['remarks'] = this.remarks;
      }
    }

    if (this.param == "advisoryapproval") {
      result['status'] = this.status;
    } else {
      result['status'] = this.getStatusApproval(this.status);
    }

    await this.modalController.dismiss(result);
  }

  async showDialog(title: string, message: string, closePage: boolean, buttonText: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [{
        text: buttonText,
        handler: () => {
          if (closePage) {
            this.navCtrl.back();
          }
        }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  getStatusApproval(status: string): string {
    switch (status) {
      case "Approve": {
        return Constants.LEAVE_STATUS_APPROVED;
      }
      case "Disapprove": {
        return Constants.LEAVE_STATUS_DISAPPROVED;
      }
      case "Escalate": {
        return "ESCALATE";
      }
      case "On Hold": {
        return Constants.LEAVE_STATUS_ON_HOLD;
      }
    }
  }

}
