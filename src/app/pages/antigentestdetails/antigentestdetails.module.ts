import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AntigentestdetailsPage } from './antigentestdetails.page';

const routes: Routes = [
  {
    path: '',
    component: AntigentestdetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AntigentestdetailsPage]
})
export class AntigentestdetailsPageModule {}
