import { Injectable } from '@angular/core';

import { DropdownQuestion } from './../../../../lib/formbuilder/helper/question-dropdown';
import { QuestionBase } from './../../../../lib/formbuilder/helper/question-base';
import { TextboxQuestion } from './../../../../lib/formbuilder/helper/question-textbox';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BowlingService {

  constructor() { }

  getPlayerService() {

    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'name',
        label: 'Name',
        value: 'Player ',
        required: true,
        order: 1
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

  getBolingSettings(){
    
    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
    
  }

  
}
