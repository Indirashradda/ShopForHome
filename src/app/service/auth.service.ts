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
  private _aloginUrl = "http://localhost:8091/Admin/login";
  
  constructor(private http:HttpClient) { }

  register(user: any) {
    console.log(user)
    return this.http.post<any>(this._registerUrl, user)
  }

  login(user: any) {
    return this.http.post<any>(this._loginUrl,user)
  }
  adminlogin(admin: any) {
    return this.http.post<any>(this._aloginUrl, admin)
  }
  adminlogggedIn(){
    if(localStorage.getItem('admin')){
      return true;
    }
    return false;

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

  getAdmin(){
    return localStorage.getItem('admin');
  }

  getUser() {
    return localStorage.getItem('token');
  }
}