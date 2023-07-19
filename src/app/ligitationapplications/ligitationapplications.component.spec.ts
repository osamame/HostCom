import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigitationapplicationsComponent } from './ligitationapplications.component';

describe('LigitationapplicationsComponent', () => {
  let component: LigitationapplicationsComponent;
  let fixture: ComponentFixture<LigitationapplicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LigitationapplicationsComponent]
    });
    fixture = TestBed.createComponent(LigitationapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
