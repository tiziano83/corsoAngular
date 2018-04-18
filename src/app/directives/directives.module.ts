import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseOnClickDirective } from './collapse-on-click.directive';
import { HighlightOnClickDirective } from './highlight-on-click.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CollapseOnClickDirective,
    HighlightOnClickDirective
  ],
  declarations: [CollapseOnClickDirective, HighlightOnClickDirective]
})
export class DirectivesModule { }
