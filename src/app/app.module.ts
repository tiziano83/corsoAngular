import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CommonsModule} from "./commons/commons.module";
import {ServicesModule} from "./services/services.module";
import {PipesModule} from "./pipes/pipes.module";
import {MatDialogModule} from "@angular/material";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {router} from "./app.routing";





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    CommonsModule,
    ServicesModule,
    PipesModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
