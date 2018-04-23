import { Injectable } from '@angular/core';
import {iGuest} from "../models/iguest.interface";
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";


@Injectable()
export class GuestService {

  guests :iGuest[];
  readonly url = `${environment.apiUrl}/corso`;


  constructor(private readonly httpClient : HttpClient) {
  }


  post(guest : iGuest){
    return this.httpClient.post(this.url,guest).map((res:iGuest)=>{
      this.guests.push(res);
      return this.guests;
    });

  }

  get(guestId){
    return this.httpClient.get(`${this.url}/${guestId}`).map((res:iGuest)=>res);
  }

  index():Observable<iGuest[]>{


    return this.httpClient.get(this.url).map((res:iGuest[])=>{
      this.guests = res;
      return res });
  }

  deleteById(guestid : string){
    return this.httpClient.delete(`${this.url}/${guestid}`).map((res)=>{
      this.guests = this.guests.filter(({id})=> id !== guestid);
      return this.guests;
    });

    /**
     * il doppio uguale serve per avere un controllo piu accurato
      * qui sotto la versione su una riga specificando il nome del campo direttamente
     *
     *  se invece la filter era su piu righe ci voleva la return(vedi sotto)
     */
  // this.guests = this.guests.filter(({id})=> id !== guestid)

/**  versione della filter su piu righe
    this.guests = this.guests.filter((guest)=>{
      return guest.id !== guestid
    }
    )
    */
   //return this.guests;

  }


}
