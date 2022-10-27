import { Injectable } from '@angular/core';
// import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    // public firebaseNative: Firebase,
    public platfrom: Platform
  ) { }


  async getToken() {
    let token;

    // if( this.platfrom.is('ios')){
    // token = await this.firebaseNative.getToken();
    // const perm = await this.firebaseNative.grantPermission();

    // }
    return token;
  }
}
