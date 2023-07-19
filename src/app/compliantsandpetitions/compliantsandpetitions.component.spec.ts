import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliantsandpetitionsComponent } from './compliantsandpetitions.component';

describe('CompliantsandpetitionsComponent', () => {
  let component: CompliantsandpetitionsComponent;
  let fixture: ComponentFixture<CompliantsandpetitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompliantsandpetitionsComponent]
    });
    fixture = TestBed.createComponent(CompliantsandpetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
