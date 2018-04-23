import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CommonsModule} from "./commons/commons.module";
import {ServicesModule} from "./services/services.module";
import {PipesModule} from "./pipes/pipes.module";
import {MatDialogModule} from "@angular/material";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

import {router} from "./app.routing";
import {PageNotFoundModule} from "./pages/page-not-found/page-not-found.module";
import {UserDetailsModule} from "./pages/user-details/user-details.module";
import {HomeModule} from "./pages/home/home.module";





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
    NoopAnimationsModule,
    PageNotFoundModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
