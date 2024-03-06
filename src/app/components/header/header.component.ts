import { Component, Input } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
})
export class HeaderComponent {
menu: MatMenuPanel<any> | null | undefined;

private _cart : Cart = { items: [] };
itemsQuantity = 0;

@Input()
get cart(): Cart{
  return this._cart;
}

set cart(cart: Cart) {
  this._cart = cart;
  this.itemsQuantity = cart.items
  .map((item) => item.quantity)
  .reduce((prev, current) => prev + current , 0);
}

constructor(private cartService: CartService){}


getTotal(items: Array<CartItem>): number {
  return this.cartService.getTotal(items);
}

onClickCart(){
  this.cartService.clearCart();
}

}
