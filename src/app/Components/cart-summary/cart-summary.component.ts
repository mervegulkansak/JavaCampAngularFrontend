import { CartItems } from './../../Models/cartItems';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/Models/product';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../Models/cartItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];

  constructor(private cartService:CartService, 
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }

  increaseFromCart(product:Product){
    let item = CartItems.find(c=>c.product.id===product.id);
    if (item) {
      item.quantity+=1;
    } 
  }

  decreaseFromCart(product:Product){
    let item = CartItems.find(c=>c.product.id===product.id);
    if (item.quantity>1) {
      item.quantity-=1;
      
    } else {
      this.cartService.removeFromCart(product);
    }
  }
  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
    this.toastrService.error(product.productName + " sepetten silindi!"  ,"Silindi!")
  }
}
