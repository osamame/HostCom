import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualauditedreportComponent } from './annualauditedreport.component';

describe('AnnualauditedreportComponent', () => {
  let component: AnnualauditedreportComponent;
  let fixture: ComponentFixture<AnnualauditedreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnualauditedreportComponent]
    });
    fixture = TestBed.createComponent(AnnualauditedreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
