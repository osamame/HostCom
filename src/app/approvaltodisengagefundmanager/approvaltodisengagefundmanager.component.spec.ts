import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovaltodisengagefundmanagerComponent } from './approvaltodisengagefundmanager.component';

describe('ApprovaltodisengagefundmanagerComponent', () => {
  let component: ApprovaltodisengagefundmanagerComponent;
  let fixture: ComponentFixture<ApprovaltodisengagefundmanagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovaltodisengagefundmanagerComponent]
    });
    fixture = TestBed.createComponent(ApprovaltodisengagefundmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
