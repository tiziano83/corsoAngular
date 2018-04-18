import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {iGuest} from "../../models/iguest.interface";




@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.scss']
})
export class GuestlistComponent implements OnInit {

  guest ='tiziano';

  @Input() guests : iGuest[];

  @Output() delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

    onClick(id :number){
      this.delete.emit(id);
    }



}
