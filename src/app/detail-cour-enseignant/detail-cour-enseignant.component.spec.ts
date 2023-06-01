import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCourEnseignantComponent } from './detail-cour-enseignant.component';

describe('DetailCourEnseignantComponent', () => {
  let component: DetailCourEnseignantComponent;
  let fixture: ComponentFixture<DetailCourEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCourEnseignantComponent]
    });
    fixture = TestBed.createComponent(DetailCourEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
