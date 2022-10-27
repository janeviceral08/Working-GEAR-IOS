import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdvisorydetailsPage } from './advisorydetails.page';
import {SubmitApprovalComponentModule} from '../../component/submit-approval/submit-approval.module';


const routes: Routes = [
  {
    path: '',
    component: AdvisorydetailsPage
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
  declarations: [AdvisorydetailsPage]
})
export class AdvisorydetailsPageModule {}
