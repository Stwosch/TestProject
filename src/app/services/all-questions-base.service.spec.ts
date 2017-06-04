import { TestBed, inject } from '@angular/core/testing';

import { AllQuestionsBaseService } from './all-questions-base.service';

describe('AllQuestionsBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllQuestionsBaseService]
    });
  });

  it('should be created', inject([AllQuestionsBaseService], (service: AllQuestionsBaseService) => {
    expect(service).toBeTruthy();
  }));
});
