import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTitleComponent } from './header-title.component';

describe('HeaderTitleComponent', () => {
  let component: HeaderTitleComponent;
  let fixture: ComponentFixture<HeaderTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
