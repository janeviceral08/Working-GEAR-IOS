import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkfromhomedetailsPage } from './workfromhomedetails.page';

const routes: Routes = [
  {
    path: '',
    component: WorkfromhomedetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkfromhomedetailsPage]
})
export class WorkfromhomedetailsPageModule {}
