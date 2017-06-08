import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private modalService: ModalService) { 
    this.activityLevel = [];
  }

  @Output() closeModal = new EventEmitter();
  @Output() showModal = new EventEmitter();

  data: {user, questionsNum, question, whoJoined, hottestDiscussionQuestion, hottestDiscussionUser};
  activityLevel: Array<boolean>;
  
  close() {
    
    this.closeModal.emit();
  }

  show() {
    this.showModal.emit();
  }

  setData(data) {
    this.data = data;
    this.activityLevel = [];

    for(let i = 0; i < 3; i++) {
      
        if(i < data.user.activityLevel) {
          this.activityLevel.push(true);
        } else {
          this.activityLevel.push(false);
        }

    }
  }

  ngOnInit() {
    this.modalService.getModalStream()
      .subscribe(data => {

        this.setData(data);
        this.show();
        console.log(data.hottestDiscussionUser);
        console.log(data.hottestDiscussionQuestion)
      });
  }

}
