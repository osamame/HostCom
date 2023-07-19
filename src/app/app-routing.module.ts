import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  {path : "", component: LoginComponent},
  {path:"login", component: LoginComponent},
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    runGuardsAndResolvers : "always"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
