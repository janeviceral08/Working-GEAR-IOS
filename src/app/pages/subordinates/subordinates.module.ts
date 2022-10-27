import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SubordinatesPage } from './subordinates.page';
import {FilterMenuComponentModule} from '../../component/filter-menu/filter-menu.module';

const routes: Routes = [
  {
    path: '',
    component: SubordinatesPage
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
  declarations: [SubordinatesPage]
})
export class SubordinatesPageModule {}
