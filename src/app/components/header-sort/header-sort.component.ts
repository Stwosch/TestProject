import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-sort',
  templateUrl: './header-sort.component.html',
  styleUrls: ['./header-sort.component.css']
})
export class HeaderSortComponent implements OnInit {

  constructor() {
    this.isActive = false;
    this.sortHotEvent = new EventEmitter();
    this.sortRecentEvent = new EventEmitter();
  }
  
  @Output() sortHotEvent: EventEmitter<any>;
  @Output() sortRecentEvent: EventEmitter<any>;
  isActive: boolean;

  sortHot() {
    this.isActive = true;
    this.sortHotEvent.emit();
  }

  sortRecent() {
    this.isActive = false;
    this.sortRecentEvent.emit();
  }

  ngOnInit() {
  }

}
