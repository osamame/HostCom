import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidyearreportComponent } from './midyearreport.component';

describe('MidyearreportComponent', () => {
  let component: MidyearreportComponent;
  let fixture: ComponentFixture<MidyearreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MidyearreportComponent]
    });
    fixture = TestBed.createComponent(MidyearreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
