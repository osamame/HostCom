import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovaltodeclinehiringafundmanagerComponent } from './approvaltodeclinehiringafundmanager.component';

describe('ApprovaltodeclinehiringafundmanagerComponent', () => {
  let component: ApprovaltodeclinehiringafundmanagerComponent;
  let fixture: ComponentFixture<ApprovaltodeclinehiringafundmanagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovaltodeclinehiringafundmanagerComponent]
    });
    fixture = TestBed.createComponent(ApprovaltodeclinehiringafundmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
