import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdvisorylistPage } from './advisorylist.page';

const routes: Routes = [
  {
    path: '',
    component: AdvisorylistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdvisorylistPage]
})
export class AdvisorylistPageModule {}
