import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GuestService} from "../../services/guest.service";
import {iGuest} from "../../models/iguest.interface";

import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id_user;
  guest : iGuest;

  observer :Observer<any>;

  constructor(
    private route : ActivatedRoute,
    private guestService : GuestService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params)=>{
      console.log(params);
      this.id_user = params.id_user;
       //chiamata a medotodo promise
      let p = this.getGuest(this.id_user);

      p.then((g:iGuest)=>{
        this.guest = g;
      });
      //la promise una volta instanziata torna sempre lo stesso risultato
      //l'observable può ritornare piu risultati a patto che io li intercetti
      setTimeout(()=>{
        p.then((g:iGuest)=>{
          console.log('richiamo la promise',g);
        })
      },3000)

      //chiamata a metodo observable
      this.getGuestObs(this.id_user).subscribe((user)=>{
        this.guest = user;
        //esempio di come si puo richiamare una promise all'interno di un observer
        p.then((g:iGuest)=>{
          this.guest = g;
        })
      })

    });



  }

  //ritorna una promise
  getGuest(id){
    return new Promise((resolve,reject)=>{
      this.guestService.get(id).subscribe((res : iGuest)=>
        resolve(res)

      );
    })

}
//ritorna un observable
  getGuestObs(id) : Observable<iGuest>{
    return new Observable(
      (observer)=>{
        //viene estratto per riutilizzo in altre eventi
      this.observer = observer;
      this.guestService.get(id).subscribe((res )=>
        observer.next(res))})


  }


}
