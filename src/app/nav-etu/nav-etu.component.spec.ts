import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEtuComponent } from './nav-etu.component';

describe('NavEtuComponent', () => {
  let component: NavEtuComponent;
  let fixture: ComponentFixture<NavEtuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavEtuComponent]
    });
    fixture = TestBed.createComponent(NavEtuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
