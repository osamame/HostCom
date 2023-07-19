import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcdpComponent } from './hcdp.component';

describe('HcdpComponent', () => {
  let component: HcdpComponent;
  let fixture: ComponentFixture<HcdpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HcdpComponent]
    });
    fixture = TestBed.createComponent(HcdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
