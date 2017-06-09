import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Question, User } from '../../domain-model-classes/custom.classes';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  @Input() question: Question;

  user: Promise<User>;
  follow: string;
  
  getUser() {
    this.user = this.usersService.getUserById(this.question.usersId);
  }

  setFollow() {

    if(this.question.follow) {
      this.follow = "follow";
    } else {
      this.follow ="unfollow";
    }
  }

  ngOnInit() {
    
    this.getUser();
    this.setFollow();
    
  }

}
