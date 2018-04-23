import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GuestService} from "../../services/guest.service";
import {iGuest} from "../../models/iguest.interface";

import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {PubSubService} from "../../services/pub-sub.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id_user;
  guest : iGuest;
  urlVideo : SafeResourceUrl;
  observer :Observer<any>;

  constructor(
    private route : ActivatedRoute,
    private guestService : GuestService,
    private domSanitizer:DomSanitizer,
    private pubSub : PubSubService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params)=>{
      console.log(params);
      this.id_user = params.id_user;
       //chiamata a medotodo promise
      this.getGuest(this.id_user);


      //l'observable può ritornare piu risultati a patto che io li intercetti

/*
      //chiamata a metodo observable
      this.getGuestObs(this.id_user).subscribe((user)=>{
        this.guest = user;
        //esempio di come si puo richiamare una promise all'interno di un observer
        p.then((g:iGuest)=>{
          this.guest = g;
          this.urlVideo=this.domSanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${this.guest.urlVideo}`);
          console.log('urlVideo',this.urlVideo);
        })
      })


*/
     this.pubSub.subscribe('refresh',()=>{
       console.log('user detail reload');
       if(this.id_user)
         this.getGuest(this.id_user,true);
     })
    });



  }

  //ritorna una promise
  getGuest(id,reload=true){

      this.guestService.get(id,reload).subscribe((res : iGuest)=>{
        this.guest = res;
        this.urlVideo = this.domSanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${res.urlVideo}`
          )
      }

      );

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
