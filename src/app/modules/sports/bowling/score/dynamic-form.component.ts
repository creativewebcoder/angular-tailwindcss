import { Component, Input, Output, OnInit, EventEmitter, SimpleChange } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  @Input() formTitle = '';
  form: FormGroup | any;
  payLoad = '';

  @Output() returnData: EventEmitter<any> = new EventEmitter();


  constructor( private qcs: QuestionControlService) { 
   }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.returnData.emit(this.form.getRawValue());
  }
}