import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FilterCalendarComponent} from './filter-calendar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
     declarations: [
      FilterCalendarComponent
     ],
     imports: [
       IonicModule,
       CommonModule,
       FormsModule
     ],
     entryComponents: [
      FilterCalendarComponent
     ]
})

export class FilterCalendarComponentModule {}