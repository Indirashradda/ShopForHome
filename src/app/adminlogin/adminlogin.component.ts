import { Component } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Admin } from '../user/admin';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  admin:any

  form = new Admin ("","");
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

 

 
  constructor(private _auth: AuthService,private router:Router ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this._auth.adminlogin(this.form)
     .subscribe( data =>{
      console.log("login");
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        localStorage.setItem('admin',data.adminEmail)
        this.router.navigate(['/admindashboard'])
     },
     err => {
           this.errorMessage = err.error.message;
           this.isSignUpFailed = true;
        }
    );

  }
}


