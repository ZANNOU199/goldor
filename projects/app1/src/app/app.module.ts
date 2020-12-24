import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ModuleWithProviders } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';


@NgModule({
  declarations: [
    AppComponent,
    View1Component   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
@NgModule({})
export class App1SharedModule{
  static forRoot(): ModuleWithProviders<App1SharedModule> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}

