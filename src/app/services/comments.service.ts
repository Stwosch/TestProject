import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Comment } from "../domain-model-classes/custom.classes";

@Injectable()
export class CommentsService {

  constructor(private http: Http) { }

  getCommentsByQuestionId(id: number): Promise<Comment[]> {
    
    const url = 'http://localhost:3000/comments?questionId=' + id;

    return this.http.get(url)
      .map((response: Response) => {
        
        const data = response.json();
        
        const comments: Comment[] = [];

        data.forEach(val => {

          comments.push(new Comment(val.id, val.description, val.date, val.votes, val.usersId, val.answersId, val.questionId));
        });

        return comments;

      })
      .toPromise();

  }

}
