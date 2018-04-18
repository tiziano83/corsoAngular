import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-delete-guest-button',
  templateUrl: './delete-guest-button.component.html',
  styleUrls: ['./delete-guest-button.component.scss']
})
export class DeleteGuestButtonComponent implements OnInit {

  @Output() delete = new EventEmitter<any>();



  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.delete.emit();
  }

}
