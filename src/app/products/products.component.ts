import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private cartService : CartService) { }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
