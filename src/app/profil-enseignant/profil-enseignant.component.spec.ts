import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEnseignantComponent } from './profil-enseignant.component';

describe('ProfilEnseignantComponent', () => {
  let component: ProfilEnseignantComponent;
  let fixture: ComponentFixture<ProfilEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilEnseignantComponent]
    });
    fixture = TestBed.createComponent(ProfilEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
