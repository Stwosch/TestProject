import { TestBed, inject } from '@angular/core/testing';

import { SingleQuestionBaseService } from './single-question-base.service';

describe('SingleQuestionBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleQuestionBaseService]
    });
  });

  it('should be created', inject([SingleQuestionBaseService], (service: SingleQuestionBaseService) => {
    expect(service).toBeTruthy();
  }));
});
