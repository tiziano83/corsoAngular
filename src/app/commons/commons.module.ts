import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestlistComponent } from './guestlist/guestlist.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SimpleGuestComponent } from './simple-guest/simple-guest.component';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule,
  MatSelectModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {DirectivesModule} from "../directives/directives.module";
import { AddGuestButtonComponent } from './add-guest-button/add-guest-button.component';
import { DeleteGuestButtonComponent } from './delete-guest-button/delete-guest-button.component';
import {PipesModule} from "../pipes/pipes.module";
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { TdGuestFormComponent } from './td-guest-form/td-guest-form.component';
import { DdGuestFormComponent } from './dd-guest-form/dd-guest-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { GuestSimpleListComponent } from './guest-simple-list/guest-simple-list.component';


const components = [
  GuestlistComponent,
  SimpleGuestComponent,
  AddGuestButtonComponent,
  SimpleDialogComponent,
  DeleteGuestButtonComponent,
  SimpleDialogComponent,
  TdGuestFormComponent,
  DdGuestFormComponent,
  HeaderComponent,
  FooterComponent,
  GuestSimpleListComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    DirectivesModule,
    MatButtonModule,
    PipesModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([])
  ],
  exports:[...components],
  declarations: [...components],
  entryComponents:[SimpleDialogComponent]
})
export class CommonsModule { }
