import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdvisorysearchPage } from './advisorysearch.page';
import {FilterMenuComponentModule} from '../../component/filter-menu/filter-menu.module';

const routes: Routes = [
  {
    path: '',
    component: AdvisorysearchPage
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
  declarations: [AdvisorysearchPage]
})
export class AdvisorysearchPageModule {}
