import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentreportingComponent } from './incidentreporting.component';

describe('IncidentreportingComponent', () => {
  let component: IncidentreportingComponent;
  let fixture: ComponentFixture<IncidentreportingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentreportingComponent]
    });
    fixture = TestBed.createComponent(IncidentreportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
