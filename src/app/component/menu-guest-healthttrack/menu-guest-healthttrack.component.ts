import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as Constants from 'src/app/utils/constants.service';
import { LoginService } from 'src/app/services/login.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-guest-healthttrack',
  templateUrl: './menu-guest-healthttrack.component.html',
  styleUrls: ['./menu-guest-healthttrack.component.scss'],
})
export class MenuGuestHealthttrackComponent implements OnInit {

  constructor(private modalController: ModalController,
    private loginService: LoginService,
    private storage: Storage,
    private alertController: AlertController,
    private navParams: NavParams) { }

  guestId: string;
  guestName: string;
  guestEmail: string;


  ngOnInit() {



    this.storage.get(`${Constants.KEY_GUEST_DETAILS}`).then((val) => {
      this.guestId = val['GuestID'];
      this.guestName = val['FirstName'] + " " + val['LastName'];
      this.guestEmail = val['CompanyEmailAddress'];

      console.log(val)
    });
  }

  ionViewWillEnter() {
  }

  async myDismiss() {
    let result = {
      'isDismissed': 1
    };


    await this.modalController.dismiss(result);
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
          this.myDismiss();
          this.loginService.logout();
        }
      }]
    });

    await alert.present();
  }

}
