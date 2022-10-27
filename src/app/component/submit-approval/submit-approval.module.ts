import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SubmitApprovalComponent} from './submit-approval.component';
import { FormsModule } from '@angular/forms';

@NgModule({
     declarations: [
      SubmitApprovalComponent
     ],
     imports: [
       IonicModule,
       CommonModule,
       FormsModule
     ],
     entryComponents: [
      SubmitApprovalComponent
     ]
})

export class SubmitApprovalComponentModule {}