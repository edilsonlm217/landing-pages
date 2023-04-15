import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lp1RoutingModule } from './lp1-routing.module';
import { Lp1Component } from './lp1.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';


@NgModule({
  declarations: [
    Lp1Component,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    Lp1RoutingModule,
    SlickCarouselModule,
  ],
})
export class Lp1Module { }
