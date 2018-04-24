import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestService} from "./guest.service";
import {HttpClientModule} from "@angular/common/http";
import {CacheService} from "./cache.service";
import {PubSubService} from "./pub-sub.service";
import {AuthGuard} from "./auth.guard";
import {UserService} from "./user.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    GuestService,
    CacheService,
    PubSubService,
    AuthGuard,
    UserService
  ],
  declarations: []
})
export class ServicesModule { }
