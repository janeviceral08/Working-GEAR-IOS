import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LeaveService } from '../../services/leave.service';

import { IonicModule } from '@ionic/angular';

import { AdvisorytypelistPage } from './advisorytypelist.page';

const routes: Routes = [
  {
    path: '',
    component: AdvisorytypelistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdvisorytypelistPage],
  providers: [
    LeaveService
  ],
})
export class AdvisorytypelistPageModule {}
