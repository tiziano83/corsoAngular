import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from "./page-not-found.component";
import {CommonsModule} from "../../commons/commons.module";

@NgModule({
  imports: [
    CommonModule,
    CommonsModule
  ],
  declarations: [PageNotFoundComponent],
  exports : [PageNotFoundComponent]
})
export class PageNotFoundModule { }
