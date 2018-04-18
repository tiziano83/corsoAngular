import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {iGuest} from "../../models/iguest.interface";
import {FormGroup} from "@angular/forms";

const companies = [
  'pcsystem',
  'gluelabs'
]

@Component({
  selector: 'app-td-guest-form',
  templateUrl: './td-guest-form.component.html',
  styleUrls: ['./td-guest-form.component.scss']
})
export class TdGuestFormComponent implements OnInit {
  @Output() newGuest = new EventEmitter<iGuest>();

  readonly companies = companies;
  guest: iGuest = {
    firtsName : '',
    lastName : '',
    birthDate : new Date().toString(),
    company : ''

};

  constructor() { }

  ngOnInit() {
  }

  addGuest(form :FormGroup){
    if(form.valid){
      this.newGuest.emit({...form.value,birthDate:this.guest.birthDate});
      form.reset();
    } else {

    }
  }

}
