import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    // component: BlankComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule) }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
