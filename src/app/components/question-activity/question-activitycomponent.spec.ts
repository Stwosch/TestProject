import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionActivitiesComponent } from './question-activities.component';

describe('QuestionActivitiesComponent', () => {
  let component: QuestionActivitiesComponent;
  let fixture: ComponentFixture<QuestionActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
