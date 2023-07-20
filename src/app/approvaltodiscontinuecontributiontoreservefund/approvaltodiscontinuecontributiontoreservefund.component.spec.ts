import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovaltodiscontinuecontributiontoreservefundComponent } from './approvaltodiscontinuecontributiontoreservefund.component';

describe('ApprovaltodiscontinuecontributiontoreservefundComponent', () => {
  let component: ApprovaltodiscontinuecontributiontoreservefundComponent;
  let fixture: ComponentFixture<ApprovaltodiscontinuecontributiontoreservefundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovaltodiscontinuecontributiontoreservefundComponent]
    });
    fixture = TestBed.createComponent(ApprovaltodiscontinuecontributiontoreservefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
