import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AllQuestionsBaseService } from '../../services/all-questions-base.service';
import { AllQuestionsBase } from '../../domain-model-classes/custom.classes';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css']
})
export class HeaderSearchComponent implements OnInit {

  constructor(private allQuestionsBaseService: AllQuestionsBaseService) {
    this.searchQuestions = new EventEmitter();
  }
  
  @Output() searchQuestions: EventEmitter<AllQuestionsBase[]>;

  onSubmit(searchText) {
    this.allQuestionsBaseService.getAllQuestionsBaseSearch(searchText.value)
      .then((data: AllQuestionsBase[]) => this.searchQuestions.emit(data))
      .catch(err => console.error(err));
  }

  ngOnInit() {
  }

}
