import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from '../shared1/api.service';
import { ProductModel } from '../admindashboard.model';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  search: any;


  onSubmitUpdate() {
    const data = {
      productId: this.productId,
      productName:this.productName,
      productCategory:this. productCategory,
      productDescription: this.productDescription,
      productPrice: this.productPrice,
      productUrl:this.productUrl
      
    };
  this.apiServ.putProduct(data,this.productId).subscribe(data=>{console.log(data);
  this.result=data;
  console.log(this.result);
  return this.result;
  },
  err => {
    this.content = JSON.parse(err.error).message;
  }
  )
  
}

  form:any={productId:null,productName:null,productCategory:null,productDescription:null,productPrice:null,productUrl:null
    
  }
  result:any;
  content?: string;
  message?:string;
  now: any;

  productId?:any;
  productName: any;
  productCategory: any;
  productDescription: any;
  productPrice: any;
  productUrl:any;
  showSection2:boolean=false;
  
  
  

  constructor(private apiServ: ApiService,private router:Router) { }



  ngOnInit(): void {
   
  }

  clickFunction():void{
    alert(" Please fill the details!")
    {}
  }

  onSubmitAdd(){
    
      const data = {
        productId: this.productId,
        productName:this.productName,
        productCategory:this. productCategory,
        productDescription: this.productDescription,
        productPrice: this.productPrice,
        productUrl:this.productUrl
        
      };
    this.apiServ.postProduct(data).subscribe(data=>{console.log(data);
    this.result=data;
    console.log(this.result);
    return this.result;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
    )
    

  }

   
 onSubmitDelete(){
  this.showSection2 = false;

  
  const data = {
    productId: this.productId,
    productName:this.productName,
    productCategory:this. productCategory,
    productDescription: this.productDescription,
    productPrice: this.productPrice,
    productUrl:this.productUrl
  };
      console.log(data)
    this.apiServ.deleteProduct(data,this.productId).subscribe(data=>{console.log(data);
    this.result=data;
    console.log(this.result);
    return this.result;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
    )
    
   }

   onSubmitView(){
    const data = {
      productId: this.productId,
      productName:this.productName,
      productCategory:this. productCategory,
      productDescription: this.productDescription,
      productPrice: this.productPrice,
      productUrl:this.productUrl
      
    };
  this.apiServ.getProduct().subscribe(data=>{console.log(data);
  this.result=data;
  console.log(this.result);
  return this.result;
  },
  err => {
    this.content = JSON.parse(err.error).message;
  }
  )
  
   
 }

  reloadPage(): void {
    window.location.reload();
  }
 
  
  }

