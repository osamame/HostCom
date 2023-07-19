import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitrationapplicationsComponent } from './arbitrationapplications.component';

describe('ArbitrationapplicationsComponent', () => {
  let component: ArbitrationapplicationsComponent;
  let fixture: ComponentFixture<ArbitrationapplicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArbitrationapplicationsComponent]
    });
    fixture = TestBed.createComponent(ArbitrationapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
