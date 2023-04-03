import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lp1RoutingModule } from './lp1-routing.module';
import { Lp1Component } from './lp1.component';


@NgModule({
  declarations: [
    Lp1Component
  ],
  imports: [
    CommonModule,
    Lp1RoutingModule
  ]
})
export class Lp1Module { }
