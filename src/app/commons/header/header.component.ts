import { Component, OnInit } from '@angular/core';
import {PubSubService} from "../../services/pub-sub.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private pubSub:PubSubService) { }

  ngOnInit() {
  }
  refresh(){
    this.pubSub.notify('refresh','refresh');

  }
}
