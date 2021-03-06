import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Answer, User, Comment } from '../../domain-model-classes/custom.classes';
import { UsersService } from '../../services/users.service';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-topic-answer',
  templateUrl: './topic-answer.component.html',
  styleUrls: ['./topic-answer.component.css']
})
export class TopicAnswerComponent implements OnInit {

  constructor(private usersService: UsersService,
              private commentsService: CommentsService,
              private cdRef : ChangeDetectorRef) {

    this.hideBtn = false;
  }

  @Input() answer: Answer;
  user: Promise<User>;
  comments: Promise<Comment[]>;
  date: string;
  hideBtn: boolean;

  getUser() {
    this.user = this.usersService.getUserById(this.answer.usersId);
  }

  setDate() {
    
    const days = Math.floor(Math.abs(new Date(this.answer.date).getTime() - new Date().getTime()) / 86400000);
    
    if(days === 0) {
      this.date = 'today';
    } else if(days === 1) {
      this.date = 'yesterday';
    } else {
      this.date = days + ' days ago';
    }

  }

  getComments() {

    this.comments = this.commentsService.getCommentsByAnswersId(this.answer.id);
  }

  hideDefaultBtn() {
    this.hideBtn = true;
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.setDate();
    this.getUser();
    this.getComments();
  }

}
