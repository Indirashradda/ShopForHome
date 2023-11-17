import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import { ProductModel } from '../admindashboard.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService 
{

  getallProduct(data: { productId: any; productName: any; productCategory: any; productDescription: any; productPrice: any; }) {
    throw new Error('Method not implemented.');
  }
  putproduct(productObj: ProductModel, id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) { }

// POST GET PUT DELETE Method
postProduct(data:any){
  return this._http.post<any>("http://localhost:8091/products/addproduct", data);
}

getProduct(){
  return this._http.get<any>("http://localhost:8091/products/getallproduct");
   }

putProduct(data:any,id:number){
  return this._http.put<any>("http://localhost:8091/products/updateproduct/"+id,data)
}

deleteProduct(data:any,id:number){
  return this._http.delete<any>("http://localhost:8091/products/deleteproduct/"+id,data)
    
}

}
