import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LeavesearchPage } from './leavesearch.page';
import {FilterMenuComponentModule} from '../../component/filter-menu/filter-menu.module';
import { FilterMenuComponent } from 'src/app/component/filter-menu/filter-menu.component';

const routes: Routes = [
  {
    path: '',
    component: LeavesearchPage
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
  declarations: [LeavesearchPage]
})

export class LeavesearchPageModule {}
