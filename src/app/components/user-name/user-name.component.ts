import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {

  constructor(private modalService: ModalService) { }
  
  @Input() user;

  private showModal() {
    event.stopPropagation();
    this.modalService.showModal(this.user.id);
  }

  ngOnInit() {
  }

}
