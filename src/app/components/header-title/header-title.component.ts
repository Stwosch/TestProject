import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.css']
})
export class HeaderTitleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 

    if(this.route.snapshot.url[0]) {
      this.title = "question";
    } else {
      this.title = "questions";
    }
  }

  title: string;

  ngOnInit() {
    console.log()
  }

}
