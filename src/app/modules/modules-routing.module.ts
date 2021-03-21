import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sports', loadChildren: () => import('./sports/sports.module').then(m => m.SportsModule) },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
