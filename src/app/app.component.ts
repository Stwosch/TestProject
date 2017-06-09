import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor() {

      this.hideModal = true;
      this.body = document.getElementsByTagName('body')[0];
    }

    hideModal: boolean;
    body;

    showModal() {

      this.body.style.overflow = 'hidden';
      this.hideModal = false;
    }

    closeModal() {

      this.body.style.overflow = 'auto';
      this.hideModal = true;
    }

    ngOnInit() {
    }

}
