import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AntigentestqaPage } from './antigentestqa.page';

const routes: Routes = [
  {
    path: '',
    component: AntigentestqaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AntigentestqaPage]
})
export class AntigentestqaPageModule {}
