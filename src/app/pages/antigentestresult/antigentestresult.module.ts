import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AntigentestresultPage } from './antigentestresult.page';

const routes: Routes = [
  {
    path: '',
    component: AntigentestresultPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AntigentestresultPage]
})
export class AntigentestresultPageModule {}
