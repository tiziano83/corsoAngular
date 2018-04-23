import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {CommonsModule} from "../../commons/commons.module";
import {router} from "./home.routing";

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    router
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent]
})
export class HomeModule { }
