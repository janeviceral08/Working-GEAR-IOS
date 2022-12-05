import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonalbackgroundupdatePage } from './personalbackgroundupdate.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalbackgroundupdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PersonalbackgroundupdatePage]
})
export class PersonalbackgroundupdatePageModule {}
