import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserDetailsComponent} from "./user-details.component";
import {CommonsModule} from "../../commons/commons.module";
import {router} from "./user-details.routing";
import { UserInfoComponent } from './user-info/user-info.component';
import { UserContactComponent } from './user-contact/user-contact.component';

@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    router
  ],
  declarations: [UserDetailsComponent, UserInfoComponent, UserContactComponent],
  exports:[UserDetailsComponent,UserInfoComponent, UserContactComponent]
})
export class UserDetailsModule { }
