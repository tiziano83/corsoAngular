import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestlistComponent } from './guestlist/guestlist.component';
import {FormsModule} from "@angular/forms";
import { SimpleGuestComponent } from './simple-guest/simple-guest.component';
import {MatButtonModule, MatCardModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {DirectivesModule} from "../directives/directives.module";
import { AddGuestButtonComponent } from './add-guest-button/add-guest-button.component';
import { DeleteGuestButtonComponent } from './delete-guest-button/delete-guest-button.component';
import {PipesModule} from "../pipes/pipes.module";

const components = [
  GuestlistComponent,
  SimpleGuestComponent,
  AddGuestButtonComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    DirectivesModule,
    MatButtonModule,
    PipesModule
  ],
  exports:[...components],
  declarations: [...components, DeleteGuestButtonComponent]
})
export class CommonsModule { }
