import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestService} from "./guest.service";
import {HttpClientModule} from "@angular/common/http";
import {CacheService} from "./cache.service";
import {PubSubService} from "./pub-sub.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[GuestService,CacheService,PubSubService],
  declarations: []
})
export class ServicesModule { }
