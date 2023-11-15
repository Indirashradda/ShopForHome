import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent {
  constructor(private cartService : CartService) { }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
