import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  providers:  [QuestionService],
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[] | any>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
  }

  onSubmit(data:object={}){
    console.log(data);
  }


}
