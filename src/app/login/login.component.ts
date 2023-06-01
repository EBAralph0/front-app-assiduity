import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitedLogin!: string;
  submitedPassword!: string;
  formSubmitAttempt!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    //private apiService: DataService,
    private router: Router,
    private authService: AuthService
    ) { }

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
      });
    }


    login(){
      if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.login,this.loginForm.value.password); // {7}
    }
    this.formSubmitAttempt = true;      
      
    }
}
