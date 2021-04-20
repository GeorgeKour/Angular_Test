import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Ass3DirectivesComponent } from './ass3-directives/ass3-directives.component';
import { Ass4DirectivesComponent } from './ass4-directives/ass4-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment2Component,
    Ass3DirectivesComponent,
    Ass4DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
