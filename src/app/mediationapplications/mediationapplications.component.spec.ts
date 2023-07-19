import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediationapplicationsComponent } from './mediationapplications.component';

describe('MediationapplicationsComponent', () => {
  let component: MediationapplicationsComponent;
  let fixture: ComponentFixture<MediationapplicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediationapplicationsComponent]
    });
    fixture = TestBed.createComponent(MediationapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
