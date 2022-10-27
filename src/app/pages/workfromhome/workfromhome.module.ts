import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkfromhomePage } from './workfromhome.page';


// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
// import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
// import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import {FilterMenuComponentModule} from '../../component/filter-menu/filter-menu.module';

const routes: Routes = [
  {
    path: '',
    component: WorkfromhomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FilterMenuComponentModule
  ],
  declarations: [WorkfromhomePage],
  providers: [
    // AndroidPermissions,
    // Geolocation,
    // LocationAccuracy,
    // NativeGeocoder,
    // Diagnostic
  ]
})
export class WorkfromhomePageModule {}
