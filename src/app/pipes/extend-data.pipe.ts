import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extendData'
})
export class ExtendDataPipe implements PipeTransform {

  transform(value: string, args?: any): Date {
    if(!value){
      return null;
    }
    return new Date(value);
  }

}
