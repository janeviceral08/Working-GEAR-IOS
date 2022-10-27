import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LeavedetailsPage } from './leavedetails.page';
import {SubmitApprovalComponentModule} from '../../component/submit-approval/submit-approval.module';

const routes: Routes = [
  {
    path: '',
    component: LeavedetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SubmitApprovalComponentModule
  ],
  declarations: [LeavedetailsPage]
})

export class LeavedetailsPageModule {}
