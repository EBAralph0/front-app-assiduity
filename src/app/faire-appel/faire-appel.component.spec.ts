import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireAppelComponent } from './faire-appel.component';

describe('FaireAppelComponent', () => {
  let component: FaireAppelComponent;
  let fixture: ComponentFixture<FaireAppelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaireAppelComponent]
    });
    fixture = TestBed.createComponent(FaireAppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
