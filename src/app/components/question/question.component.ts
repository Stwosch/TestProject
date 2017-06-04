import { Component, OnInit, Input } from '@angular/core';
import { Question } from "../../domain-model-classes/custom.classes";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  
  @Input() question: Question;

  //dodac bindowanie tiles i skalowanie ich, narazie bez responsive

  constructor() { }

  ngOnInit() {
  }

}
