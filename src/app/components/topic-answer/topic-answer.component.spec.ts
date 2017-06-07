import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAnswerComponent } from './topic-answer.component';

describe('TopicAnswerComponent', () => {
  let component: TopicAnswerComponent;
  let fixture: ComponentFixture<TopicAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
