import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSortComponent } from './header-sort.component';

describe('HeaderSortComponent', () => {
  let component: HeaderSortComponent;
  let fixture: ComponentFixture<HeaderSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
