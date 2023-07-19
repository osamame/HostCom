import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundaccountdetailsComponent } from './fundaccountdetails.component';

describe('FundaccountdetailsComponent', () => {
  let component: FundaccountdetailsComponent;
  let fixture: ComponentFixture<FundaccountdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundaccountdetailsComponent]
    });
    fixture = TestBed.createComponent(FundaccountdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
