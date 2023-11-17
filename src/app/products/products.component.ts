import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ApiService } from '../shared1/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private cartService : CartService,private apiServ: ApiService) { }
  ngOnInit(): void {
    this.onSubmitView();
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
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
}