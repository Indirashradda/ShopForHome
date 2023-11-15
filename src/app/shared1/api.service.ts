import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ProductModel } from '../admindashboard.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  putproduct(productObj: ProductModel, id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) { }

// POST GET PUT DELETE Method
postProduct(data:any){
  return this._http.post<any>("http://localhost:3000/posts", data).pipe(
    map(
      (res => {
        return res;
      })))
}

getProduct(){
  return this._http.get<any>("http://localhost:3000/posts").pipe(
    map(
      (res => {
        return res;
      })))
}

putProduct(data:any,id:number){
  return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(
    map(
      (res => {
        return res;
      })))
}

deleteProduct(id:number){
  return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(
    map(
      (res => {
        return res;
      })))
}

}
