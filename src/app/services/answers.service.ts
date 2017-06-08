import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Answer } from "../domain-model-classes/custom.classes";

@Injectable()
export class AnswersService {

  constructor(private http: Http) { }

  getAnswersByQuestionId(id: number): Promise<Answer[]> {
    
    const url = 'http://localhost:3000/answers?questionId=' + id;
      
    return this.http.get(url)
      .map((response: Response) => {
        
        const data = response.json();
        const answers: Answer[] = [];

        data.forEach(val => {

          answers.push(new Answer(val.id, val.description, val.date, val.votes, val.usersId, val.questionId));
        });

        return answers;

      })
      .toPromise();
  }

  getAllAnswers(): Promise<Answer[]> {

    const url = 'http://localhost:3000/answers';

    return this.http.get(url)
      .map((response: Response) => {
        
        const data = response.json();
        const answers: Answer[] = [];

        data.forEach(val => {

          answers.push(new Answer(val.id, val.description, val.date, val.votes, val.usersId, val.questionId));
        });

        return answers;

      })
      .toPromise();
  }

}
