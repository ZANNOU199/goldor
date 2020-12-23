import { NgModule } from '@angular/core';
import { Routes, RouterModule } from'@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import{DashboardComponent}from './dashboard/dashboard.component';
import {PerfectComponent}from './perfect/perfect.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'perfect',component:PerfectComponent},
   { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  }),
  HttpClientModule,


],
  exports: [RouterModule]
})
export class AppRoutingModule { }


