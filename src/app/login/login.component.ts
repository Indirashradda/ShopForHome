import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:any

  form = new User ("","","");
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

 

 
  constructor(private _auth: AuthService,private router:Router ) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.form.userEmail="";
    this._auth.login(this.form)
     .subscribe( data =>{
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        localStorage.setItem('token',data.userName)
        this.router.navigate(['/'])
     },
     err => {
           this.errorMessage = err.error.message;
           this.isSignUpFailed = true;
        }
    );

  }
}

