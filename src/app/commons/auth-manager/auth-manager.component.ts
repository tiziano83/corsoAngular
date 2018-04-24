import { Component, OnInit } from '@angular/core';
import {IUser, UserService} from "../../services/user.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-auth-manager',
  templateUrl: './auth-manager.component.html',
  styleUrls: ['./auth-manager.component.scss']
})
export class AuthManagerComponent implements OnInit {
  user$ :BehaviorSubject<IUser>;
  user : IUser;
  constructor(
    public userService : UserService
  )
  {
    this.user$=this.userService.getUser$();
    this.user$.subscribe((r)=>{
      this.user=r;
    })
  }

  ngOnInit() {
  }

  login(){
    this.userService.login();
  }
  logout(){
    this.userService.logout();
  }

}
