import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home-enseignant',
  templateUrl: './home-enseignant.component.html',
  styleUrls: ['./home-enseignant.component.css']
})
export class HomeEnseignantComponent {
  constructor(
    //private breakpointObserver: BreakpointObserver,
    private authService: AuthService) { }
  isLoggedIn$!: Observable<boolean>;                  // {1}
  

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }
}
