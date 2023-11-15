import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private _registerUrl = "http://localhost:8091/user/register";
  private _loginUrl = "http://localhost:8091/user/login";
  
  constructor(private http:HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }
  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  getToken() {
    return localStorage.getItem('token')
  }


}
