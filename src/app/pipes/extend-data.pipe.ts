import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extendData'
})
export class ExtendDataPipe implements PipeTransform {

  transform(value: string, args?: 't' | 'd'): String {
    if(!value){
      return null;
    }
    switch (args) {
      case 't': default : {
        return new Date(value).toDateString();

    }
      case 'd' :{
        return new Date().toLocaleTimeString();
      }
    }

  }

}
