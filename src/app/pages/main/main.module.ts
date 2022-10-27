import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'leavecredits',
        loadChildren: '../leavecredits/leavecredits.module#LeavecreditsPageModule'
      },
      {
        path: 'leaveapproval',
        loadChildren: '../leaveapproval/leaveapproval.module#LeaveapprovalPageModule'
      },
      {
        path: 'calendar',
        loadChildren: '../calendar/calendar.module#CalendarPageModule'
      },
      {
        path: 'advisory',
        loadChildren: '../advisorytypelist/advisorytypelist.module#AdvisorytypelistPageModule'
      },
      {
        path: 'advisoryapproval',
        loadChildren: '../advisoryapproval/advisoryapproval.module#AdvisoryapprovalPageModule'
      },
      {
        path: 'subordinates',
        loadChildren: '../subordinates/subordinates.module#SubordinatesPageModule'
      },
      {
        path: 'about',
        loadChildren: '../about/about.module#AboutPageModule'
      },
      {
        path: 'personalinformation',
        loadChildren: '../personalinformation/personalinformation.module#PersonalinformationPageModule'
      },
      {
        path: 'dailytimerecord',
        loadChildren: '../dailytimerecord/dailytimerecord.module#DailytimerecordPageModule'
      },
      {
        path: 'dailytimerecord',
        loadChildren: '../dailytimerecord/dailytimerecord.module#DailytimerecordPageModule'
      },
      {
        path: 'dailytimerecord',
        loadChildren: '../dailytimerecord/dailytimerecord.module#DailytimerecordPageModule'
      },
      {
        path: 'overtime',
        loadChildren: '../overtime/overtime.module#OvertimePageModule'
      },
      {
        path: 'overtimeapproval',
        loadChildren: '../overtimeapproval/overtimeapproval.module#OvertimeapprovalPageModule'
      },
      {
        path: 'getup',
        loadChildren: '../getup/getup.module#GetupPageModule'
      },
      {
        path: 'epayslip',
        loadChildren: '../epayslip/epayslip.module#EpayslipPageModule'
      },
      { 
        path: 'events', 
        loadChildren: '../events/events.module#EventsPageModule' 
      },
      { 
        path: 'loans', 
        loadChildren: '../loans/loans.module#LoansPageModule' 
      },
      { 
        path: 'purchases', 
        loadChildren: '../purchases/purchases.module#PurchasesPageModule' 
      },
      { 
        path: 'workfromhome', 
        loadChildren: '../workfromhome/workfromhome.module#WorkfromhomePageModule'
      },
      { 
        path: 'forms',
        loadChildren: '../forms/forms.module#FormsPageModule' 
      }
      ,
      { 
        path: 'wfhapproval',
        loadChildren: '../wfhapproval/wfhapproval.module#WfhapprovalPageModule' 
      },
      { path: 'healthtrack', loadChildren: '../healthtrack/healthtrack.module#HealthtrackPageModule' }


    ]
  },
  {
    path: '',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage]
})
export class MainPageModule { }
