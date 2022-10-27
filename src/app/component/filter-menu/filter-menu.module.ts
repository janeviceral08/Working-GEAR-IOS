import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FilterMenuComponent} from './filter-menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
     declarations: [
      FilterMenuComponent
     ],
     imports: [
       IonicModule,
       CommonModule,
       FormsModule
     ],
     entryComponents: [
      FilterMenuComponent
     ]
})

export class FilterMenuComponentModule {}