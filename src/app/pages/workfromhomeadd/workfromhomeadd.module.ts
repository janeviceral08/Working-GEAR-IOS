import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkfromhomeaddPage } from './workfromhomeadd.page';

const routes: Routes = [
  {
    path: '',
    component: WorkfromhomeaddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkfromhomeaddPage]
})
export class WorkfromhomeaddPageModule {}
