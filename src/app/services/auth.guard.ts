import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {IUser, UserService} from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<any> {

  constructor(private userService: UserService) {


  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('next', next);
    console.log('state', state);

    return new Observable(
      (obs) => {
        let user = this.userService.getUser();
        let data = next.data;
        if (data.logged && data.logged == true && user.logged == false) {
          alert('devi essere loggato per accedere');
          obs.next(false);
          return;
        }
        if (data.permission && !this.userService.hasPermission(data.permission)) {
          alert('devi avere i permessi adeguati per accedere');
          obs.next(false);
          return;
        }
        obs.next(true);

      }

      //obs.next(this.userService.getUser().logged);

    )
    /*
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(true);
        },3000)
    })
    */
  }

  canDeactivate(component: any,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('component', component);
    return true;
  }


}
