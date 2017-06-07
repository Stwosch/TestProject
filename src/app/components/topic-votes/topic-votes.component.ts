import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic-votes',
  templateUrl: './topic-votes.component.html',
  styleUrls: ['./topic-votes.component.css']
})
export class TopicVotesComponent implements OnInit {
  
  @Input() votes: number;

  private votesNumber: number;
  private votesText: string; 

  private setVotes() {

    if(this.votes >= 0) {

      this.votesNumber = this.votes;
      this.votesText = "upvotes";

    } else {
      
      this.votesNumber = this.votes * (-1);
      this.votesText = "downvotes";
    }
  }

  private upVote() {
    this.votes += 1;
    this.setVotes();
  }

  private downVote() {
    this.votes -= 1;
    this.setVotes();
  }

  constructor() { }

  ngOnInit() {

    this.setVotes();
  }

}
