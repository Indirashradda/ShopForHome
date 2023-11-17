import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) 
  { }
    public addNewProduct(product:Product)
  {
    return this.http.post<Product>("http://localhost:8091/products/addproduct",product);
  }

  public getAllProducts() {
    return this.http.get<Product[]>("http://localhost:8091/products/getallproduct");
  }
  
  public deleteProduct(productName: string)
  {
    return this.http.delete("http://localhost:8091/products/deleteproduct?appName="+productName);
  }
  }
