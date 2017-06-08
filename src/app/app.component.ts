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

    private hideModal: boolean;
    private body;

    private showModal() {

      this.body.style.overflow = 'hidden';
      this.hideModal = false;
    }

    private closeModal() {

      this.body.style.overflow = 'auto';
      this.hideModal = true;
    }

    ngOnInit() {
    }

}
