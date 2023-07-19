import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalinprincipleComponent } from './approvalinprinciple.component';

describe('ApprovalinprincipleComponent', () => {
  let component: ApprovalinprincipleComponent;
  let fixture: ComponentFixture<ApprovalinprincipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovalinprincipleComponent]
    });
    fixture = TestBed.createComponent(ApprovalinprincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
