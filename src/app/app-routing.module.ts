import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lp1',
    pathMatch: 'full'
  },
  { path: 'lp1', loadChildren: () => import('./modules/lp1/lp1.module').then(m => m.Lp1Module) },
  { path: 'oferta', loadChildren: () => import('./modules/oferta/oferta.module').then(m => m.OfertaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
