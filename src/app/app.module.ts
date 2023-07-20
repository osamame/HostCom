import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AnnualauditedreportComponent } from './annualauditedreport/annualauditedreport.component';
import { MidyearreportComponent } from './midyearreport/midyearreport.component';
import { ProofofcontributiontothefundComponent } from './proofofcontributiontothefund/proofofcontributiontothefund.component';
import { QuarterlyreturnsComponent } from './quarterlyreturns/quarterlyreturns.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArbitrationapplicationsComponent } from './arbitrationapplications/arbitrationapplications.component';
import { CompliantsandpetitionsComponent } from './compliantsandpetitions/compliantsandpetitions.component';
import { LigitationapplicationsComponent } from './ligitationapplications/ligitationapplications.component';
import { MediationapplicationsComponent } from './mediationapplications/mediationapplications.component';
import { IncidentreportingComponent } from './incidentreporting/incidentreporting.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FraudbreachesmalpracticesComponent } from './fraudbreachesmalpractices/fraudbreachesmalpractices.component';
import { ApprovalinprincipleComponent } from './approvalinprinciple/approvalinprinciple.component';
import { ApprovaltoincorporateComponent } from './approvaltoincorporate/approvaltoincorporate.component';
import { HcdpComponent } from './hcdp/hcdp.component';
import { FundaccountdetailsComponent } from './fundaccountdetails/fundaccountdetails.component';
import { StaffrecordComponent } from './staffrecord/staffrecord.component';
import { TrusteeComponent } from './trustee/trustee.component';
import { ApprovaltodeclinehiringafundmanagerComponent } from './approvaltodeclinehiringafundmanager/approvaltodeclinehiringafundmanager.component';
import { ApprovaltodiscontinuecontributiontoreservefundComponent } from './approvaltodiscontinuecontributiontoreservefund/approvaltodiscontinuecontributiontoreservefund.component';
import { ApprovaltodisengagefundmanagerComponent } from './approvaltodisengagefundmanager/approvaltodisengagefundmanager.component';
import { ProjectcompletioncertifcateComponent } from './projectcompletioncertifcate/projectcompletioncertifcate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnnualauditedreportComponent,
    MidyearreportComponent,
    ProofofcontributiontothefundComponent,
    QuarterlyreturnsComponent,
    DashboardComponent,
    ArbitrationapplicationsComponent,
    CompliantsandpetitionsComponent,
    LigitationapplicationsComponent,
    MediationapplicationsComponent,
    IncidentreportingComponent,
    NotificationsComponent,
    FraudbreachesmalpracticesComponent,
    ApprovalinprincipleComponent,
    ApprovaltoincorporateComponent,
    HcdpComponent,
    FundaccountdetailsComponent,
    StaffrecordComponent,
    TrusteeComponent,
    ApprovaltodeclinehiringafundmanagerComponent,
    ApprovaltodiscontinuecontributiontoreservefundComponent,
    ApprovaltodisengagefundmanagerComponent,
    ProjectcompletioncertifcateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
