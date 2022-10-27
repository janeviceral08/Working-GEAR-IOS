import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AntigentestqadetailsPage } from './antigentestqadetails.page';

const routes: Routes = [
  {
    path: '',
    component: AntigentestqadetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AntigentestqadetailsPage]
})
export class AntigentestqadetailsPageModule {}
