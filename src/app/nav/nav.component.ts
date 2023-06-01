import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  menuItems: any;
  menuRouteItems : any;
  menuItems2: any;
  menuRouteItems2 : any;
  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private data: DataService) {
    
      this.menuItems = ['dashboard', 'Profile', 'Classes', 'Chat', 'Convocation'];
      this.menuRouteItems = ['dashboard-enseignant', 'profil-enseignant', 'classe-enseignant', 'customers', 'products'];
    
      this.menuItems2 = ['Mon assiduite', 'Profile', 'Convocation'];
      this.menuRouteItems2 = ['dashboard-etudiant', 'profil-etudiant', 'convo-etudiant'];
    
  }


  @ViewChild('drawer') drawer!: MatSidenav;
  isLoggedIn$!: Observable<boolean>;
  etisLoggedIn$!: Observable<boolean>;


  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.isLoggedIn$ = this.authService.isLoggedIn;
    } else {
      this.etisLoggedIn$ = this.authService.etisLoggedIn;
    }
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
