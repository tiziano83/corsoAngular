import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CacheService {
  private cache: Array<any> =[];
  constructor(private httpClient:HttpClient) { }
  //se la chache è presente la restituisce, altrimenti esegue la chiamata
  //in caso di forceReload=true restitutiamo prima il valore in cache e poi si rifa la chiamata
  // il secondo parametro è opzionale
  getChache(url, forceReload = false): Observable<any> {
    return new Observable(
      (observer) => {
        if (this.cache[url] && forceReload == false) {
          console.log('prendo dalla cache');
          observer.next(this.cache[url]);
        } else if (this.cache[url]) {
          console.log('prendo dalla cache poi faccio la call');
          observer.next(this.cache[url]);
          this.httpClient.get(url).subscribe((r) => {
            this.setCache(url,r);
            observer.next(r);
          });
        } else {
          console.log('non è in cache prendo da http')
          this.httpClient.get(url).subscribe((r) => {
            this.setCache(url,r);
            observer.next(r);
          });
        }
      }
    )

  }

  setCache(url, payload) {
    this.cache[url] = payload;

  }
}
