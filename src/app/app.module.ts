import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  DynamicTitleStrategyService  } from  './dynamic-title-strategy.service';

import {  TitleStrategy } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: TitleStrategy, useClass: DynamicTitleStrategyService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
