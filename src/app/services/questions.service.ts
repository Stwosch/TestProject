import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Question } from "../domain-model-classes/custom.classes";

@Injectable()
export class QuestionsService {

  constructor(private http: Http) { }
  
  getQuestions(start:number, quantity: number): Promise<Question[]> {
    
    const url: string = `http://localhost:3000/questions?_start=${start}&_limit=${quantity}`; 

    return this.http.get(url)
        .map((response: Response) => {
        
        const data = response.json();
        const questions: Question[] = [];

        data.forEach(val => {

          questions.push(new Question(val.id, val.title, val.description, val.votes, val.follow, val.usersId));

        });

        return questions;
    })
    .toPromise();

  }

}
