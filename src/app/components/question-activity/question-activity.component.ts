import { Component, OnInit, Input } from '@angular/core';
import { Comment, Answer, User } from '../../domain-model-classes/custom.classes';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-question-activity',
  templateUrl: './question-activity.component.html',
  styleUrls: ['./question-activity.component.css']
})
export class QuestionActivityComponent implements OnInit {
  
  @Input() tile;

  private actionType: string;
  private actionTypeClass: string;
  private user: Promise<User>;

  constructor(private usersService: UsersService) { 
    this.actionTypeClass = "user-activity-type";
  }

  setActionType() {
    
    if(this.tile instanceof Comment) {

      this.actionType = "commented";
      this.actionTypeClass += "-comment";

    } else {

      this.actionType = "answered";
      this.actionTypeClass += "-answer";

    }
  }

  ngOnInit() {
    this.setActionType();
    this.user = this.usersService.getUserById(this.tile.usersId);
  }

}
