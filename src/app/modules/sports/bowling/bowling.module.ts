import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BowlingRoutingModule } from './bowling-routing.module';
import { ScoreComponent } from './score/score.component';

import { DynamicFormComponent } from './score/dynamic-form.component';
import { DynamicFormQuestionComponent } from './score/dynamic-form-question.component';


@NgModule({
  declarations: [ScoreComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BowlingRoutingModule
  ]
})
export class BowlingModule { }
