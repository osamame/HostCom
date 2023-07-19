import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffrecordComponent } from './staffrecord.component';

describe('StaffrecordComponent', () => {
  let component: StaffrecordComponent;
  let fixture: ComponentFixture<StaffrecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffrecordComponent]
    });
    fixture = TestBed.createComponent(StaffrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
