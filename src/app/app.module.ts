import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CommonsModule} from "./commons/commons.module";
import {ServicesModule} from "./services/services.module";
import {HttpClient} from "@angular/common/http";
import {PipesModule} from "./pipes/pipes.module";
import {MatDialogModule} from "@angular/material";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";





@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    CommonsModule,
    ServicesModule,
    PipesModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
