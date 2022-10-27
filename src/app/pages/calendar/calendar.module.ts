import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarPage } from './calendar.page';
import {FilterCalendarComponentModule} from '../../component/filter-calendar/filter-calendar.module';

const routes: Routes = [
  {
    path: '',
    component: CalendarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCalendarModule,
    FilterCalendarComponentModule
  ],
  declarations: [CalendarPage]
})

export class CalendarPageModule {}
