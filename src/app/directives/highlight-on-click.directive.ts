import {Directive, HostBinding, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlightOnClick]'
})
export class HighlightOnClickDirective implements OnChanges{


  @Input() highlight : false;
  @HostBinding('style.backgroundColor') high;

  @HostListener('click') onClick(){
    console.log('click on directive element');
  }

  constructor() { }

  ngOnChanges(changes : SimpleChanges){
    console.log('changes',changes);
    if(changes.highlight && changes.highlight.currentValue){
      this.high='green';
    } else {
      this.high='white';
    }
  }

}
