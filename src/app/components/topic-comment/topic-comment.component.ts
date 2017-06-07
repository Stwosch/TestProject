import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment, User } from '../../domain-model-classes/custom.classes';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-topic-comment',
  templateUrl: './topic-comment.component.html',
  styleUrls: ['./topic-comment.component.css']
})
export class TopicCommentComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  
  @Input() comment: Comment;
  @Output() commentCreated = new EventEmitter();
  private user: Promise<User>;
  private date: string;

  private getUser() {
    this.user = this.usersService.getUserById(this.comment.usersId);
  }

  private setDate() {
    
    const days = Math.floor(Math.abs(new Date(this.comment.date).getTime() - new Date().getTime()) / 86400000);
    
    if(days === 0) {
      this.date = 'today';
    } else if(days === 1) {
      this.date = 'yesterday';
    } else {
      this.date = days + ' days ago';
    }

  }

  ngOnInit() {
    this.setDate();
    this.getUser();
    this.commentCreated.emit();
  }

}
