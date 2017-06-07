import { Injectable } from '@angular/core';
import { Question, SingleQuestionBase, Answer, Comment } from '../domain-model-classes/custom.classes';
import { QuestionsService } from './questions.service';
import { AnswersService } from './answers.service';
import { CommentsService } from './comments.service';

@Injectable()
export class SingleQuestionBaseService {

  constructor(private questionService: QuestionsService,
              private answersService: AnswersService,
              private commentsService: CommentsService) { }

  
  private getDays(date: string) {
    
    const newDate: number = new Date(date).getTime();
    const now: number = new Date().getTime();

   return Math.floor(Math.abs(now - newDate) / 86400000);

  }

  private findCandidates(arr) {

    if(arr.length === 0) {
      return "";
    }

    let candidate = arr[0].date;

    arr.forEach(val => {

      if(val.date > candidate) {
        candidate = val.date;
      }
    })

    return candidate;

  }

  private getAnswersComments(data) {
    
    const result = {
      answers: [],
      comments: []
    };

    data.forEach(val => {
                  
      if(val[0] instanceof Answer) {

        result.answers = val;

      } else if(val[0] instanceof Comment) {

        result.comments = val;

      }

    });

    return result;
  }

  lastDayActivity(id: number): Promise<number> {
    
    return new Promise((resolve, rejected) => {
      
        Promise.all([
          this.commentsService.getCommentsByQuestionId(id),
          this.answersService.getAnswersByQuestionId(id)
        ])
          .then(data => {

            const result = this.getAnswersComments(data);
            const answersCandidate = this.findCandidates(result.answers);
            const commentsCandidate = this.findCandidates(result.comments);

            if(answersCandidate === "" && commentsCandidate === "") {
              resolve(-1);
              return;
            }

            let days;

            if(answersCandidate > commentsCandidate) {
              days = this.getDays(answersCandidate);
            } else {
              days = this.getDays(commentsCandidate);
            }

            resolve(days);

          })
          .catch(err => console.log(err));
      });

  }
}
