import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class PubSubService {
  streams : Array<EventEmitter<any>> =[];

  constructor() { }

  subscribe(topic:string,handler:Function ){
    if(!this.streams[topic]){
      this.streams[topic] = new EventEmitter<any>();
    }
    return this.streams[topic].subscribe(handler);
  }

  notify(topic:string,message:any){
    if(!this.streams[topic]){
      this.streams[topic] = new EventEmitter<any>();
      console.log(`topic ${topic} does not exists, creating it.`);
    }
    this.streams[topic].next(message);
  }
}
