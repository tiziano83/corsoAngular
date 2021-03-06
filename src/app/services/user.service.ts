import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";

export class IUser {
  logged: boolean;
  name: string;
  permissions: Array<string>
}

@Injectable()
export class UserService {
  user$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  user: IUser;

  constructor(private router: Router) {
    this.login();
   /* this.user ={  da verificare: commentare login e attivare questo
      logged: false,
      name: null,
      permissions: null
    }*/
  }


  async login() {
    let u = await this.doLogin();
    this.updateStatus(u);

    this.router.navigate([],{});
  }

  doLogin():Promise<IUser>{
    return new Promise(
      (ok,no)=>{
        setTimeout(()=>{
          ok ({
            logged: true,
            name: 'tiziano',
            permissions: ['owner', 'reader', 'writer']
          })
        },3000)
      }
    )
  }

  logout() {

    this.updateStatus({
      logged: false,
      name: 'tiziano',
      permissions: ['owner', 'reader', 'writer']
    })

    this.router.navigate(['home'],{queryParams:{logout:true}});
  }


  updateStatus(status:IUser){
    this.user = status;
    this.user$.next(status);
  }

  getUser(){
    return this.user;
  }

  getUser$(){
    return this.user$;
  }

  hasPermission(permission:string):boolean{
    return this.user.permissions.indexOf(permission)>=0;
  }
}
