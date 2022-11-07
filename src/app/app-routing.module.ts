import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { Authorize } from './Shared/authorize.model';
import { AccessLevel } from './Models/Enums/access-level.enum';
import { IndexComponent } from './Components/Ticket/index/index.component';
import { CreateComponent } from './Components/Ticket/create/create.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'login', component: LoginComponent, canActivate: [Authorize],
    data: { accessType: AccessLevel.Public }
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [Authorize],
    data: { accessType: AccessLevel.Registered }
  },
  {
    path: 'home', component: HomeComponent, canActivate: [Authorize],
    data: { accessType: AccessLevel.Public }
  },
  {
    path: 'register', component: RegisterComponent, canActivate: [Authorize],
    data: { accessType: AccessLevel.Public }
  },


  {
    path: 'ticket', component: IndexComponent, canActivate: [Authorize],
    data: { accessType: AccessLevel.Registered },
  },
  {
    path: 'ticket/index', component: IndexComponent, canActivate: [Authorize],
    data: { accessType: AccessLevel.Registered },
  },
  {
    path: 'ticket/create', component: CreateComponent, canActivate: [Authorize],
    data: { accessType: AccessLevel.Registered }
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
