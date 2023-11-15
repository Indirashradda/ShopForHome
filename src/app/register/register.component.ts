import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  form = new User ("","","");
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
 
  constructor(private _auth: AuthService,private router:Router ) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    this._auth.register(this.form)
     .subscribe( data =>{
      console.log(data);
        this.isSuccessful = true;
         this.isSignUpFailed = false;
     localStorage.setItem('token',data.userName)
      this.router.navigate(['/login'])
     },
     err => {
           this.errorMessage = err.error.message;
           this.isSignUpFailed = true;
        }
    );

  }
}