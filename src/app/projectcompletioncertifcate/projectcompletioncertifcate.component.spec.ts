import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcompletioncertifcateComponent } from './projectcompletioncertifcate.component';

describe('ProjectcompletioncertifcateComponent', () => {
  let component: ProjectcompletioncertifcateComponent;
  let fixture: ComponentFixture<ProjectcompletioncertifcateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectcompletioncertifcateComponent]
    });
    fixture = TestBed.createComponent(ProjectcompletioncertifcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
