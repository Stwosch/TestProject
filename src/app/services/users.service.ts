import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from "../domain-model-classes/custom.classes";

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getAllUsers() {
    
    const url = "http://localhost:3000/users";

    return this.http.get(url)
     .map((response: Response) => {
        
        const data = response.json();
        const users: User[] = [];
        
        data.forEach(val => {
            
            users.push(new User(val.id, val.name, val.photo, val.member, val.peers, val.lastTimeOnline, val.findings, val.activityLevel, val.discussions));
        });
        
        return users;
      })
      .toPromise();
  }

  getUserById(id) {
    
    const url = "http://localhost:3000/users/" + id;

    return this.http.get(url)
      .map((response: Response) => {
        
        const data = response.json();
        return new User(data.id, data.name, data.photo, data.member, data.peers, data.lastTimeOnline, data.findings, data.activityLevel, data.discussions);
      })
      .toPromise();
  }

}
