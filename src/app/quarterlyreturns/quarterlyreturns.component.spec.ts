import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyreturnsComponent } from './quarterlyreturns.component';

describe('QuarterlyreturnsComponent', () => {
  let component: QuarterlyreturnsComponent;
  let fixture: ComponentFixture<QuarterlyreturnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuarterlyreturnsComponent]
    });
    fixture = TestBed.createComponent(QuarterlyreturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
