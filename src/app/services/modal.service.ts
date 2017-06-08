import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UsersService } from './users.service';
import { QuestionsService } from './questions.service';
import { AnswersService } from './answers.service';
import { CommentsService } from './comments.service';
import { AllQuestionsBaseService } from './all-questions-base.service';
import { Answer, Comment, Question, User, AllQuestionsBase } from '../domain-model-classes/custom.classes';

@Injectable()
export class ModalService {
  
  constructor(private usersService: UsersService,
              private questionsService: QuestionsService,
              private answersService: AnswersService,
              private commentsService: CommentsService,
              private AllQuestionsBaseService: AllQuestionsBaseService) {
    
    this.modalStream = new Subject();
  }

  modalStream: Subject<{user, questionsNum, question, whoJoined, hottestDiscussionQuestion, hottestDiscussionUser}>;

  getModalStream() {
    return Observable
      .from(this.modalStream);
  }
  
  private _getWhoJoined(arr: User[], user: User): User[] {

    const whoJoined: User[] = [];

    arr.forEach(val => {
        
        if(val.member === user.member && val.id !== user.id) {
          whoJoined.push(val);
        }

    });
    
    return whoJoined;
  }

  private _countUserQuestions(arr, id): number {
      
      let userQuestionsNumber: number = 0;

      arr.forEach(val => {
        
        if(val.usersId === id) {
          userQuestionsNumber++;
        }

      });

      return userQuestionsNumber;
  }

  private _countMode(questionId, answers, comments): number {

    let count: number = 0;

    answers.forEach((answer: Answer) => {

      if(answer.questionsId === questionId) {
        count++;
      }

    });

    comments.forEach((comment: Comment) => {
      
      if(comment.questionsId === questionId) {
        count++;
      }

    });

    return count;
  }

  private _mode(questions, answers, comments): Question {
    
    const counted: Array<{id, num}> = [];
    let max: {id, num};
    
    questions.forEach((question: Question) => {
      
      counted.push({
        id: question.id,
        num: this._countMode(question.id, answers, comments)
      });

    });

    max = counted[0];

    counted.forEach((val: {id, num}) => {
      
      if(val.num > max.num) {
        max = val;
      }

    });

    return questions.find(question => question.id === max.id);
  }


  showModal(id: number) {
    
    Promise.all([
      this.usersService.getAllUsers(),  // data[0]
      this.questionsService.getAllQuestions(), // data[1] ...
      this.answersService.getAllAnswers(),
      this.commentsService.getAllComments()
    ])
    .then(data => {
      
      const user = data[0].find((val: User) => val.id === id);
      const question = this._mode(data[1], data[2], data[3]);

      this.modalStream.next({
        user,
        question,
        questionsNum: this._countUserQuestions(data[1], id),
        whoJoined: this._getWhoJoined(data[0], user),
        hottestDiscussionQuestion: this.AllQuestionsBaseService.createAllQuestionsBase(question, data[2], data[3], data[0]),
        hottestDiscussionUser: data[0].find(user => user.id === question.usersId)
      });

    })
    .catch(err => console.error(err));
  }
}
