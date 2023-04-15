import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertaRoutingModule } from './oferta-routing.module';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { OfertaComponent } from './oferta.component';


@NgModule({
  declarations: [
    OfertaComponent,
  ],
  imports: [
    CommonModule,
    OfertaRoutingModule,
    CdkAccordionModule,
  ]
})
export class OfertaModule { }
