import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from 'src/app/topnav/topnav.component';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';
import { ApprovalinprincipleComponent } from '../approvalinprinciple/approvalinprinciple.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AnnualauditedreportComponent } from '../annualauditedreport/annualauditedreport.component';
import { MidyearreportComponent } from '../midyearreport/midyearreport.component';
import { ProofofcontributiontothefundComponent } from '../proofofcontributiontothefund/proofofcontributiontothefund.component';
import { QuarterlyreturnsComponent } from '../quarterlyreturns/quarterlyreturns.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ArbitrationapplicationsComponent } from '../arbitrationapplications/arbitrationapplications.component';
import { CompliantsandpetitionsComponent } from '../compliantsandpetitions/compliantsandpetitions.component';
import { LigitationapplicationsComponent } from '../ligitationapplications/ligitationapplications.component';
import { MediationapplicationsComponent } from '../mediationapplications/mediationapplications.component';
import { IncidentreportingComponent } from '../incidentreporting/incidentreporting.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { FraudbreachesmalpracticesComponent } from '../fraudbreachesmalpractices/fraudbreachesmalpractices.component';
import { ApprovaltoincorporateComponent } from '../approvaltoincorporate/approvaltoincorporate.component';
import { HcdpComponent } from '../hcdp/hcdp.component';
import { FundaccountdetailsComponent } from '../fundaccountdetails/fundaccountdetails.component';
import { StaffrecordComponent } from '../staffrecord/staffrecord.component';
import { TrusteeComponent } from '../trustee/trustee.component';

const routes: Routes = [ 
  {
    path: '' ,
  component:AccountComponent, 
  children:[
    
    {path : "", redirectTo:'dashboard', pathMatch:'full'},
    {path : "dashboard", component: DashboardComponent},

    {path : "annualauditedreport", component: AnnualauditedreportComponent},
    {path : "midyearreport", component: MidyearreportComponent},
    {path : "proofofcontributiontothefund", component: ProofofcontributiontothefundComponent},
    {path : "quarterlyreturns", component: QuarterlyreturnsComponent},

    {path : "arbitrationapplications", component: ArbitrationapplicationsComponent},
    {path : "compliantsandpetitions", component: CompliantsandpetitionsComponent},
    {path : "ligitationapplications", component: LigitationapplicationsComponent},
    {path : "mediationapplications", component: MediationapplicationsComponent},

    {path : "incidentreporting", component: IncidentreportingComponent},

    {path : "notifications", component: NotificationsComponent},

    {path : "fraudbreachesmalpractices", component: FraudbreachesmalpracticesComponent},

    {path : "approvalinprinciple", component: ApprovalinprincipleComponent},
    {path : "approvaltoincorporate", component: ApprovaltoincorporateComponent},

    {path : "hcdp", component: HcdpComponent},


    {path : "fundaccountdetails", component: FundaccountdetailsComponent},
    {path : "staffrecord", component: StaffrecordComponent},
    {path : "trustee", component: TrusteeComponent},

  ]
    }
];

@NgModule({
  declarations: [
    AccountComponent,
    TopnavComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
