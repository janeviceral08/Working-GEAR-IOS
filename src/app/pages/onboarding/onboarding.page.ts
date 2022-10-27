import { Component, OnInit, ViewChild  } from '@angular/core';
import {  NavController, IonSlides} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as Constants from 'src/app/utils/constants.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  currentIndex : any;
  isManager : boolean = false;
  disableBtn = false;

  constructor(
    private navCtrl: NavController,
    private storage: Storage) {}

  ngOnInit() {
    this.storage.get(Constants.KEY_EMPDETAILS).then((val) => {
      this.isManager = (val['0']['ISMANAGER'] == 1);
    });
  }

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slidesOpts = {
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    centeredSlides: true,
    zoom: false
  }

  skipPressed(){
      this.navCtrl.navigateRoot(['/main/home']);
  }
  nextPressed(){
     this.slides.slideNext();
  }

  doCheck() {
    let prom = this.slides.isEnd();
  
    Promise.all([prom]).then((data) => {
      data[0] ? this.disableBtn = true : this.disableBtn = false;
    });
  }
}
