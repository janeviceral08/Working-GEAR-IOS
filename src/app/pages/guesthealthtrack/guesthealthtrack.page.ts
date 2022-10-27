import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as Constants from 'src/app/utils/constants.service';
import { MenuGuestHealthttrackComponent } from '../../component/menu-guest-healthttrack/menu-guest-healthttrack.component';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-guesthealthtrack',
  templateUrl: './guesthealthtrack.page.html',
  styleUrls: ['./guesthealthtrack.page.scss'],
})
export class GuesthealthtrackPage implements OnInit {

  constructor(    private alertController: AlertController,
    private platform: Platform,
    private storage: Storage,
    private modalController: ModalController,) { }


    isAntigenResult;
    isAntigenQaApproval;
    isVaccineResult;

  ngOnInit() {
    this.storage.get(`${Constants.KEY_GUEST_MENU}`).then((val) => {
      
      this.isAntigenResult = val['AntigenProcess'];
      this.isAntigenQaApproval = val['AntigenQAProcess'];
      this.isVaccineResult = val['VaccineProcess'];

      console.log(val)
    });
  }


  modalIsOpen = false;
  advisory:any;

  async showServerSettingsModal() {
    this.modalIsOpen = true;
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: MenuGuestHealthttrackComponent,
        cssClass: 'modalGuestHealthTrack',
        animated: false,
        backdropDismiss: false,
        componentProps: {
          module: "WfhApproval",
          data: this.advisory
        }

      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        if (detail.data['isDismissed'] == 0) {

        }
      }
      this.modalIsOpen = false;
    });

    await modal.present();
  }



}
