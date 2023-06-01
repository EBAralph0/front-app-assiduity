import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Enseignant, Etudiant, Utilisateur } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private etloggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  get etisLoggedIn() {
    return this.etloggedIn.asObservable(); // {2}
  }
  
  constructor(private router: Router) {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const etloggedIn = localStorage.getItem('etisLoggedIn');
    if (loggedIn === 'true') {
      this.loggedIn.next(true);
    } else if(etloggedIn === 'true') {
      this.etloggedIn.next(true);
    }

  }

  /*login(login: string, password: string) {
    if (login !== '' && password !== '' ) { // {3}
      localStorage.setItem('isLoggedIn', 'true');
      this.loggedIn.next(true);
      this.router.navigateByUrl('/dashboard-enseignant');
    }
  }*/

  login(login_: string, password_: string) {
    // Récupérer la chaîne JSON du local storage
    const jsonData = localStorage.getItem('data');

  // Convertir la chaîne JSON en objet
  if (jsonData != null) {
    const data: { enseignants: Enseignant[] } = JSON.parse(jsonData);
    const data2: { etudiants: Etudiant[] } = JSON.parse(jsonData);

    const enseignant = data.enseignants.find(e => e.login == login_ && e.password == password_);
    const etudiant = data2.etudiants.find(e => e.login == login_ && e.password == password_);

    if (enseignant) {
      console.log("en");
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('etisLoggedIn', 'false');
      this.loggedIn.next(true);
      this.router.navigateByUrl('/dashboard-enseignant');
    }
    if(etudiant) {
      console.log("et");
      localStorage.setItem('etisLoggedIn', 'true');
      localStorage.setItem('isLoggedIn', 'false');
      this.etloggedIn.next(true);
      this.router.navigateByUrl('/dashboard-etudiant');
    }
  }

  }
 

  logout() {                            // {4}
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('etisLoggedIn', 'false');
    this.loggedIn.next(false);
    this.etloggedIn.next(false);
    this.router.navigate(['/']);
  }
}
