import { Component, OnInit } from '@angular/core';
import { AllQuestionsBaseService } from '../../services/all-questions-base.service';
import { AllQuestionsBase } from '../../domain-model-classes/custom.classes';

@Component({
  selector: 'app-all-questions-base',
  templateUrl: './all-questions-base.component.html',
  styleUrls: ['./all-questions-base.component.css']
})
export class AllQuestionsBaseComponent implements OnInit {

  private start: number;
  private increases: number;
  private allQuestionsBaseData: AllQuestionsBase[];

  constructor(private allQuestionBaseService: AllQuestionsBaseService) { 

    this.start = 0;
    this.increases = 3;
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
