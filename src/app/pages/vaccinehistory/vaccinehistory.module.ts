import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VaccinehistoryPage } from './vaccinehistory.page';

const routes: Routes = [
  {
    path: '',
    component: VaccinehistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VaccinehistoryPage]
})
export class VaccinehistoryPageModule {}
