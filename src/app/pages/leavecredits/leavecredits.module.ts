import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LeavecreditsPage } from './leavecredits.page';

const routes: Routes = [
  {
    path: '',
    component: LeavecreditsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeavecreditsPage]
})

export class LeavecreditsPageModule {}
