import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WfhapprovalPage } from './wfhapproval.page';
import {FilterMenuComponentModule} from '../../component/filter-menu/filter-menu.module';

const routes: Routes = [
  {
    path: '',
    component: WfhapprovalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FilterMenuComponentModule
  ],
  declarations: [WfhapprovalPage]
})
export class WfhapprovalPageModule {}
