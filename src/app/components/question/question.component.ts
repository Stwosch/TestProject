import { Component, OnInit, Input, Output, EventEmitter,  HostListener } from '@angular/core';
import { AllQuestionsBase } from "../../domain-model-classes/custom.classes";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  
  constructor() { 

    this.tilesSize = this.getWindowWidth();
  }

  @Input() question: AllQuestionsBase;
  @Output() loadMoreQuestionsBtn = new EventEmitter();

  @HostListener('window:resize', ['$event'])
  onResize(event: any) { 
    this.tilesSize = this.getWindowWidth(); 
    this.tiles = this.generateActivities();
  }

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

  getWindowWidth() {

    if(window.innerWidth > 1120) {
      return 3;
    } else if (window.innerWidth < 1120 && window.innerWidth > 940) {
      return 2;
    } else {
      return 1;
    }

  }

  ngOnInit() {
    this.tiles = this.generateActivities();
    this.loadMoreQuestionsBtn.emit();
  }

}
