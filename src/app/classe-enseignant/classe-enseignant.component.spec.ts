import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseEnseignantComponent } from './classe-enseignant.component';

describe('ClasseEnseignantComponent', () => {
  let component: ClasseEnseignantComponent;
  let fixture: ComponentFixture<ClasseEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasseEnseignantComponent]
    });
    fixture = TestBed.createComponent(ClasseEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
