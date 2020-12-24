import { NgModule } from '@angular/core';
import { Routes, RouterModule } from'@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import{DashboardComponent}from './dashboard/dashboard.component';
import {App1SharedModule}  from '../../projects/app1/src/app/app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'app1', loadChildren: '../../projects/app1/src/app/app.module#App1SharedModule'},
  
   { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule,
  App1SharedModule.forRoot(),


],
  exports: [RouterModule]
})
export class AppRoutingModule { }


