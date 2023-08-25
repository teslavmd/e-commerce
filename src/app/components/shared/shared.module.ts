import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//COREUI MODULES
import { CarouselModule } from '@coreui/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [
    CarouselModule
  ]
})
export class SharedModule { }
