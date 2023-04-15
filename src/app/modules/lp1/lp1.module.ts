import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lp1RoutingModule } from './lp1-routing.module';
import { Lp1Component } from './lp1.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    Lp1Component
  ],
  imports: [
    CommonModule,
    Lp1RoutingModule,
    SlickCarouselModule,
  ],
})
export class Lp1Module { }
