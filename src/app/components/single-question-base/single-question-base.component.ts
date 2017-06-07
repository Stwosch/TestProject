import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswersService } from '../../services/answers.service';
import { QuestionsService } from '../../services/questions.service';
import { SingleQuestionBaseService } from '../../services/single-question-base.service';
import { Question, Answer } from '../../domain-model-classes/custom.classes';

@Component({
  selector: 'app-single-question-base',
  templateUrl: './single-question-base.component.html',
  styleUrls: ['./single-question-base.component.css']
})
export class SingleQuestionBaseComponent implements OnInit {
  
  constructor(private activeRoute: ActivatedRoute,
              private answersService: AnswersService,
              private questionsService: QuestionsService,
              private singleQuestionBaseService: SingleQuestionBaseService) { }

  private question: Question;
  private answers: Answer[];
  private lastDay;
  private peersAnswers: number;

  private countPeersAnswers(): number {
    
    const peersIndexes: number[] = [];

    this.answers.forEach((answer: Answer) => {
      
      const result = peersIndexes.findIndex((index: number) => answer.usersId === index);
      
      if(result === -1) {
        peersIndexes.push(answer.usersId);
      }

    });

    return peersIndexes.length;
  }
  
  private getData(id) {

    this.questionsService.getQuestionById(id)
      .then(question => this.question = question)
      .catch(err => console.log(err));

    this.answersService.getAnswersByQuestionId(id)
      .then(answers => {
        this.answers = answers;
        this.peersAnswers = this.countPeersAnswers();
      })
      .catch(err => console.log(err));
  }

  ngOnInit() {

    const id: number = parseInt(this.activeRoute.snapshot.params['id']);

    this.getData(id);

    this.singleQuestionBaseService.lastDayActivity(id)
      .then(days => {

        if(days === 0) {
          this.lastDay = 'today';
        } else {
          this.lastDay = days;
        }  

      })
      .catch(err => console.log(err));
  }

}
