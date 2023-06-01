import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nav-etu',
  templateUrl: './nav-etu.component.html',
  styleUrls: ['./nav-etu.component.css']
})
export class NavEtuComponent {
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private data: DataService) { }
  menuItems = ['Mon assiduite', 'Profile', 'Convocation'];
  menuRouteItems = ['dashboard-etudiant', 'profil-etudiant', 'clas'];
 @ViewChild('drawer') drawer!:  MatSidenav;
  etisLoggedIn$!: Observable<boolean>;
  
    
  ngOnInit() {
    this.etisLoggedIn$ = this.authService.etisLoggedIn;
    this.data.getdata();
    
  }

  onLogout() {
    this.authService.logout();
  }

  shower() {
    if (this.drawer) {
      //console.log('rferg')
      this.drawer.toggle();
    }
  }
}
