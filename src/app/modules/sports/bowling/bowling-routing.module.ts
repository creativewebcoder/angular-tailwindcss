import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { PlayComponent } from './play/play.component';

export const routes: Routes = [
  {
    path: 'score',
    component: ScoreComponent
  },
  
  {
    path: '',
    component: PlayComponent
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BowlingRoutingModule { }
