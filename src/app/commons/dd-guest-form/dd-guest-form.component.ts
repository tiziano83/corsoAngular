import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {iGuest} from "../../models/iguest.interface";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

const companies = [
  'pcsystem',
  'gluelabs'
]

@Component({
  selector: 'app-dd-guest-form',
  templateUrl: './dd-guest-form.component.html',
  styleUrls: ['./dd-guest-form.component.scss']
})
export class DdGuestFormComponent implements OnInit {

  @Output() newGuest = new EventEmitter<iGuest>();

  guestForm : FormGroup;

  companies = companies;

  constructor(
    private readonly formBuilder : FormBuilder)
  {
    this.guestForm = this.formBuilder.group({
      firtsName:['',Validators.required],
      lastName:['',Validators.required],
      company:['',Validators.nullValidator],
      birthDate : [new Date().toString(),Validators.nullValidator]
    });
}

  ngOnInit() {
  }

  addGuest(form :FormGroup){

    if(form.valid){
      this.newGuest.emit(form.value);
      form.reset();
    } else {

    }
  }

}
