import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-guest-button',
  templateUrl: './add-guest-button.component.html',
  styleUrls: ['./add-guest-button.component.scss']
})
export class AddGuestButtonComponent {

  @Output() add = new EventEmitter<any>();

  constructor() { }

  onClick(){
    this.add.emit('ciao');
  }
}
