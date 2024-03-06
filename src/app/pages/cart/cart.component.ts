import { Component, OnInit } from '@angular/core';
import { Cart, CartItem} from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html'
})
export class CartComponent {
  cart: Cart = { items: [{
  product: 'https://placehold.co/150.png',
  name: 'Yasith',
  price: 150,
  quantity: 1,
  id: 1,
  }]}

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuntity(item: CartItem): void{
    this.cartService.addToCart(item);
  }

  onRemoveQuntity(item: CartItem): void{
    this.cartService.removeQuantity(item);
  }



}


