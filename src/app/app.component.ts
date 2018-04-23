import {Component} from '@angular/core';
import {reject} from "q";
import {iGuest} from "./models/iguest.interface";
import {GuestService} from "./services/guest.service";
import 'rxjs/add/operator/do';
import {SimpleDialogComponent} from "./commons/simple-dialog/simple-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
