import {AfterViewInit, Directive, HostBinding, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appCollapseOnClick]'
})
export class CollapseOnClickDirective implements OnChanges,AfterViewInit {

  showDescriptionContent = false;

  @Input() index ;

  @HostBinding('style.display') display;

  @HostListener('click') onClick(){
    console.log('click on directive element');
    this.showDescriptionContent = !this.showDescriptionContent;
    this.setContentDescription(this.showDescriptionContent);
  }


  constructor() {
    console.log('direttiva');


  }

  ngOnChanges(changes : SimpleChanges){
    /*
    console.log('changes',changes);
    if(changes.show && changes.show.currentValue){
      this.display='block';
    } else {
      this.display='none';
    }*/
  }

  setContentDescription(showDescription : boolean){
    const descriptionContent = document.getElementById(`guest-description-${this.index}`);
    descriptionContent.style.display = showDescription?'block':'none';
  }

  ngAfterViewInit(){
    this.setContentDescription(false);
  }
}
