import { Component, OnInit } from '@angular/core';
import {iGuest} from "../../models/iguest.interface";
import {GuestService} from "../../services/guest.service";

@Component({
  selector: 'app-guest-simple-list',
  templateUrl: './guest-simple-list.component.html',
  styleUrls: ['./guest-simple-list.component.scss']
})
export class GuestSimpleListComponent implements OnInit {
  guestList : iGuest[];

  constructor(private guestService :GuestService) { }

  ngOnInit() {
    this.getGuests();
  }

  async getGuests(){


    this.guestService.index().subscribe((res:iGuest[])=>this.guestList=res);

  }

}
