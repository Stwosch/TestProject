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
    this.hideLoadMoreQuestionsBtn = true;
  }

  private start: number;
  private increases: number;
  private allQuestionsBaseData: AllQuestionsBase[];
  private hideLoadMoreQuestionsBtn: boolean;

  private showLoadMoreQuestionsBtn() {
    this.hideLoadMoreQuestionsBtn = false;
  }

  ngOnInit() {

    this.allQuestionBaseService.getAllQuestionsBaseData(this.start, this.increases)
    .then((data: AllQuestionsBase[]) => {

      this.start += this.increases; 
      this.allQuestionsBaseData = data;

    })
    .catch(err => console.log(err));
  }


}
