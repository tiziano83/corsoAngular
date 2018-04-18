import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {iGuest} from "../../models/iguest.interface";



@Component({
  selector: 'app-simple-guest',
  templateUrl: './simple-guest.component.html',
  styleUrls: ['./simple-guest.component.scss']
})
export class SimpleGuestComponent implements OnInit {

  @Input() guest:iGuest;
  @Input() index : number;
  showDetails=false;
  @Output() delete  = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  toggleDetails(){
    this.showDetails=!this.showDetails;
  }

  onClick(){
    this.delete.emit(this.guest.id);
  }

}
