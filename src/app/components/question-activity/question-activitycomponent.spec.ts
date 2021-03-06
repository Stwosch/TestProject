import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionActivityComponent } from './question-activity.component';

describe('QuestionActivitiesComponent', () => {
  let component: QuestionActivityComponent;
  let fixture: ComponentFixture<QuestionActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
