import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MenuGuestHealthttrackComponent } from '../../component/menu-guest-healthttrack/menu-guest-healthttrack.component';

import { IonicModule } from '@ionic/angular';

import { GuesthealthtrackPage } from './guesthealthtrack.page';

const routes: Routes = [
  {
    path: '',
    component: GuesthealthtrackPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GuesthealthtrackPage,MenuGuestHealthttrackComponent],
  entryComponents: [MenuGuestHealthttrackComponent]
})
export class GuesthealthtrackPageModule {}
