import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

import { BowlingService } from './bowling.service';
import { QuestionBase } from './../../../../lib/formbuilder/helper/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  providers:  [BowlingService],
})
export class PlayComponent implements OnInit {

  players$: Observable<QuestionBase<any>[] | any>;

  public playerList:any = {};
  public playerLength = 0;


  constructor(service: BowlingService) {
    this.players$ = service.getPlayerService();
  }

  ngOnInit(): void {
  }

  addPlayer(data={name:''}){
    console.log(data);
    let name = data.name || '';
    if(name){
      // this.playerList.push(name);
      this.playerLength++;
      this.playerList[this.playerLength]={id:this.playerLength,name:name,score:0};
    }

    console.table(this.playerList)
  }

  getValue(data:any={},index=''){
    console.log(typeof data)
    console.log(data)
    if(index in data){
      console.log(data[index])
      return data[index];
    }

  }

  isEmpty(objList={}){
    console.log(JSON.stringify(objList) === '{}')
    return JSON.stringify(objList) === '{}';
  }

  pr(data:any){
    console.log(data);
  }

  onSubmit(data:object={}){
    console.log(data);
  }


}

