import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AllQuestionsBase } from "../../domain-model-classes/custom.classes";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  
  constructor() { 

    this.tilesSize = 3;
  }

  @Input() question: AllQuestionsBase;
  @Output() loadMoreQuestionsBtn = new EventEmitter();

  showMore: boolean;
  tilesSize;
  tiles;

  generateActivities() {

    if(this.question.activities.length > this.tilesSize) {
      this.showMore = true;
    } else {
      this.showMore = false;
    }

    return this.question.activities.slice(0, this.tilesSize);
  }

  ngOnInit() {
    this.tiles = this.generateActivities();
    this.loadMoreQuestionsBtn.emit();
  }

}
