import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForgotpassPage } from './forgotpass.page';
import { ForgotPasswordComponent } from '../../component/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: ForgotpassPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgotpassPage,ForgotPasswordComponent],
  entryComponents: [ForgotPasswordComponent]

})
export class ForgotpassPageModule {}
