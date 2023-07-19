import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofofcontributiontothefundComponent } from './proofofcontributiontothefund.component';

describe('ProofofcontributiontothefundComponent', () => {
  let component: ProofofcontributiontothefundComponent;
  let fixture: ComponentFixture<ProofofcontributiontothefundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProofofcontributiontothefundComponent]
    });
    fixture = TestBed.createComponent(ProofofcontributiontothefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
