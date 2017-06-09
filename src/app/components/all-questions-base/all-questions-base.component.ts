import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AllQuestionsBaseService } from '../../services/all-questions-base.service';
import { AllQuestionsBase } from '../../domain-model-classes/custom.classes';

@Component({
  selector: 'app-all-questions-base',
  templateUrl: './all-questions-base.component.html',
  styleUrls: ['./all-questions-base.component.css']
})
export class AllQuestionsBaseComponent implements OnInit {

  constructor(private allQuestionBaseService: AllQuestionsBaseService) { 

    this.start = 0;
    this.increases = 3;
    this.hideBtn = true;
    this.allQuestionsBaseData= [];
    this.disableBtn = false;
    this.actuallySort = 'recent';
  }

  start: number;
  increases: number;
  allQuestionsBaseData: AllQuestionsBase[];
  hideBtn: boolean;
  disableBtn: boolean;
  actuallySort: string;

  showLoadMoreQuestionsBtn() {
    this.hideBtn = false;
  }

  loadMoreData(start, increases) {
    this.allQuestionBaseService.getAllQuestionsBaseData(start, increases)
    .then((data: AllQuestionsBase[]) => {

      if(data.length < increases) {

        this.disableBtn = true;
      }

      this.start += this.increases; 

      data.forEach((val: AllQuestionsBase) => {
        this.allQuestionsBaseData.push(val);
      });

      if(this.actuallySort === 'recent') {
        this.sortRecent();
      } else {
        this.sortHot();
      }

    })
    .catch(err => console.error(err));
  }

  sortHot() {
    this.allQuestionsBaseData.sort((a: any, b: any) => {
      return b.activities.length - a.activities.length;
    });

    this.actuallySort = 'hot';
  }

  sortRecent() {
    this.allQuestionsBaseData.sort((a: any, b: any) => {
      return a.id - b.id;
    });

    this.actuallySort = 'recent';
  }

  showFoundQuestions(questions: AllQuestionsBase[]) {

    this.allQuestionsBaseData = questions;
    this.disableBtn = true;
  }


  ngOnInit() {

    this.loadMoreData(this.start, this.increases);
  }


}
