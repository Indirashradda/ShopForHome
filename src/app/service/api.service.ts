import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService 
{

  constructor(private http:HttpClient) { }
  getProduct()
  {
    return this.http.get<any>("https://localhost:8091/products/getallproduct") 
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
