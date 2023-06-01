import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvoEtudiantComponent } from './convo-etudiant.component';

describe('ConvoEtudiantComponent', () => {
  let component: ConvoEtudiantComponent;
  let fixture: ComponentFixture<ConvoEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvoEtudiantComponent]
    });
    fixture = TestBed.createComponent(ConvoEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
