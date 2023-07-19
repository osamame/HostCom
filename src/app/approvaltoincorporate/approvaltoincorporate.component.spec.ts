import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovaltoincorporateComponent } from './approvaltoincorporate.component';

describe('ApprovaltoincorporateComponent', () => {
  let component: ApprovaltoincorporateComponent;
  let fixture: ComponentFixture<ApprovaltoincorporateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovaltoincorporateComponent]
    });
    fixture = TestBed.createComponent(ApprovaltoincorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
