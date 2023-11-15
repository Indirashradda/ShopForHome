import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:8091/user/register";
  private _loginUrl = "http://localhost:8091/user/login";
  private _aloginUrl = "http://localhost:8091/admin/login";
  
  constructor(private http:HttpClient) { }

  register(user: any) {
    console.log(user)
    return this.http.post<any>(this._registerUrl, user)
  }

  login(user: any) {
    return this.http.post<any>(this._loginUrl,user)
  }
  adminlogin(user: any) {
    return this.http.post<any>(this._aloginUrl, user)
  }


   loggedIn() {
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token')
  }

  getUser() {
    return localStorage.getItem('token');
  }
}