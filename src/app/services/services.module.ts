import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestService} from "./guest.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[GuestService],
  declarations: []
})
export class ServicesModule { }
