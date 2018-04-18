import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CommonsModule} from "./commons/commons.module";
import {ServicesModule} from "./services/services.module";
import {HttpClient} from "@angular/common/http";
import {PipesModule} from "./pipes/pipes.module";





@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    CommonsModule,
    ServicesModule,
    PipesModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
