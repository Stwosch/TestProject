import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.css']
})
export class UserPhotoComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  @Input() user;

  showModal() {
    this.modalService.showModal(this.user.id);
    event.stopPropagation();
  }

  ngOnInit() {
  }

}
