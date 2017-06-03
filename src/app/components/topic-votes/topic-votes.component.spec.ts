import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicVotesComponent } from './topic-votes.component';

describe('TopicVotesComponent', () => {
  let component: TopicVotesComponent;
  let fixture: ComponentFixture<TopicVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
