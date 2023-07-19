import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudbreachesmalpracticesComponent } from './fraudbreachesmalpractices.component';

describe('FraudbreachesmalpracticesComponent', () => {
  let component: FraudbreachesmalpracticesComponent;
  let fixture: ComponentFixture<FraudbreachesmalpracticesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraudbreachesmalpracticesComponent]
    });
    fixture = TestBed.createComponent(FraudbreachesmalpracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
