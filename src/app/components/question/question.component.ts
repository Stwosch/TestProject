import { Component, OnInit, Input } from '@angular/core';
import { AllQuestionsBase } from "../../domain-model-classes/custom.classes";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  
  @Input() question: AllQuestionsBase;

  private showMore: boolean;
  private tilesSize;
  private tiles;

  //dodac bindowanie tiles i skalowanie ich, narazie bez responsive

  constructor() { 

    this.tilesSize = 3;
  }

  private generateActivities() {

    if(this.question.activities.length > this.tilesSize) {
      this.showMore = true;
    } else {
      this.showMore = false;
    }

    return this.question.activities.slice(0, this.tilesSize);
  }

  ngOnInit() {

    this.tiles = this.generateActivities();
  }

}
