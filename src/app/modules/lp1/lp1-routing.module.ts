import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lp1Component } from './lp1.component';

const routes: Routes = [{ path: '', component: Lp1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lp1RoutingModule { }
