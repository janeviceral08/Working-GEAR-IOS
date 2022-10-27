import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'leavelist/:type/:code',
    loadChildren: './pages/leavelist/leavelist.module#LeavelistPageModule'
  },
  {
    path: 'leavedetails/:leave/:page',
    loadChildren: './pages/leavedetails/leavedetails.module#LeavedetailsPageModule'
  },
  {
    path: 'leaveadd/:type/:duration/:datefrom/:time/:request/:remarks/:id/:subid',
    loadChildren: './pages/leaveadd/leaveadd.module#LeaveaddPageModule'
  },
  {
    path: 'leavesearch',
    loadChildren: './pages/leavesearch/leavesearch.module#LeavesearchPageModule'
  },
  {
    path: 'main',
    loadChildren: './pages/main/main.module#MainPageModule'
  },
  {
    path: 'advisorytypelist',
    loadChildren: './pages/advisorytypelist/advisorytypelist.module#AdvisorytypelistPageModule'
  },
  {
    path: 'advisorylist/:type',
    loadChildren: './pages/advisorylist/advisorylist.module#AdvisorylistPageModule'
  },
  {
    path: 'advisorydetails/:id/:details/:status/:subid/:page',
    loadChildren: './pages/advisorydetails/advisorydetails.module#AdvisorydetailsPageModule'
  },
  {
    path: 'advisoryadd/:id/:type/:date/:reqtime/:hrs/:days/:reason/:remarks/:starttime/:dateduty/:subid/:page',
    loadChildren: './pages/advisoryadd/advisoryadd.module#AdvisoryaddPageModule'
  },
  {
    path: 'advisorysearch',
    loadChildren: './pages/advisorysearch/advisorysearch.module#AdvisorysearchPageModule'
  },
  {
    path: 'subprofile/:subid/:name/:position/:department',
    loadChildren: './pages/subprofile/subprofile.module#SubprofilePageModule'
  },
  {
    path: 'onboarding',
    loadChildren: './pages/onboarding/onboarding.module#OnboardingPageModule'
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutPageModule'
  },
  {
    path: 'personalinformation/:page/:id/:name/:position',
    loadChildren: './pages/personalinformation/personalinformation.module#PersonalinformationPageModule'
  },
  {
    path: 'dailytimerecord',
    loadChildren: './pages/dailytimerecord/dailytimerecord.module#DailytimerecordPageModule'
  },
  {
    path: 'dailytimerecorddetails/:page',
    loadChildren: './pages/dailytimerecorddetails/dailytimerecorddetails.module#DailytimerecorddetailsPageModule'
  },
  {
    path: 'overtime',
    loadChildren: './pages/overtime/overtime.module#OvertimePageModule'
  },
  {
    path: 'overtimeadd/:id/:type/:startdate/:starttime/:enddate/:endtime/:remarks/:subid',
    loadChildren: './pages/overtimeadd/overtimeadd.module#OvertimeaddPageModule'
  },
  {
    path: 'overtimedetails/:page',
    loadChildren: './pages/overtimedetails/overtimedetails.module#OvertimedetailsPageModule'
  },
  {
    path: 'overtimeapproval',
    loadChildren: './pages/overtimeapproval/overtimeapproval.module#OvertimeapprovalPageModule'
  },
  {
    path: 'overtimesearch',
    loadChildren: './pages/overtimesearch/overtimesearch.module#OvertimesearchPageModule'
  },
  {
    path: 'personalbackground/:id/:page',
    loadChildren: './pages/personalbackground/personalbackground.module#PersonalbackgroundPageModule'
  },
  {
    path: 'getup',
    loadChildren: './pages/getup/getup.module#GetupPageModule'
  },
  {
    path: 'epayslip',
    loadChildren: './pages/epayslip/epayslip.module#EpayslipPageModule'
  },
  {
    path: 'events',
    loadChildren: './pages/events/events.module#EventsPageModule'
  },
  {
    path: 'eventsdetails/:event',
    loadChildren: './pages/eventsdetails/eventsdetails.module#EventsdetailsPageModule'
  },
  {
    path: 'loans',
    loadChildren: './pages/loans/loans.module#LoansPageModule'
  },
  {
    path: 'loansdetails',
    loadChildren: './pages/loansdetails/loansdetails.module#LoansdetailsPageModule'
  },
  {
    path: 'purchases',
    loadChildren: './pages/purchases/purchases.module#PurchasesPageModule'
  },
  {
    path: 'purchasedetails/:purchase',
    loadChildren: './pages/purchasedetails/purchasedetails.module#PurchasedetailsPageModule'
  },
  {
    path: 'workfromhome',
    loadChildren: './pages/workfromhome/workfromhome.module#WorkfromhomePageModule'
  },
  {
    path: 'workfromhomedetails/:page',
    loadChildren: './pages/workfromhomedetails/workfromhomedetails.module#WorkfromhomedetailsPageModule'
  },
  {
    path: 'workfromhomeadd/:id/:reqdate/:reqtime/:reason/:remark/:subid/:timefrom/:timeto',
    loadChildren: './pages/workfromhomeadd/workfromhomeadd.module#WorkfromhomeaddPageModule'
  },
  { 
    path: 'forms',
    loadChildren: './pages/forms/forms.module#FormsPageModule' 
  },
  { 
    path: 'wfhapproval', 
    loadChildren: './pages/wfhapproval/wfhapproval.module#WfhapprovalPageModule' 
  },
  { 
    path: 'forgotpass', 
    loadChildren: './pages/forgotpass/forgotpass.module#ForgotpassPageModule' 
  },
  { path: 'epayslipforgotpass', loadChildren: './pages/epayslipforgotpass/epayslipforgotpass.module#EpayslipforgotpassPageModule' },
  { path: 'healthtrack', loadChildren: './pages/healthtrack/healthtrack.module#HealthtrackPageModule' },
  { path: 'vaccinehistory', loadChildren: './pages/vaccinehistory/vaccinehistory.module#VaccinehistoryPageModule' },
  { path: 'antigentesthistory', loadChildren: './pages/antigentesthistory/antigentesthistory.module#AntigentesthistoryPageModule' },
  { path: 'antigentestdetails/:recordid', loadChildren: './pages/antigentestdetails/antigentestdetails.module#AntigentestdetailsPageModule' },
  { path: 'antigentestqa', loadChildren: './pages/antigentestqa/antigentestqa.module#AntigentestqaPageModule' },
  { path: 'antigentestresult', loadChildren: './pages/antigentestresult/antigentestresult.module#AntigentestresultPageModule' },
  { path: 'antigentestqaapproval', loadChildren: './pages/antigentestqaapproval/antigentestqaapproval.module#AntigentestqaapprovalPageModule' },
  { path: 'antigentestqadetails/:empid', loadChildren: './pages/antigentestqadetails/antigentestqadetails.module#AntigentestqadetailsPageModule' },
  { path: 'vaccineadd', loadChildren: './pages/vaccineadd/vaccineadd.module#VaccineaddPageModule' },
  { path: 'guesthealthtrack', loadChildren: './pages/guesthealthtrack/guesthealthtrack.module#GuesthealthtrackPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
