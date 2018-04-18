import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtendDataPipe } from './extend-data.pipe';

const pipes = [
  ExtendDataPipe
]

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[...pipes],
  declarations: [...pipes]
})
export class PipesModule { }
