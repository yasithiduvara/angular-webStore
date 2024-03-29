import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-page',
  templateUrl:'./product-page.component.html',
  
})


export class ProductPageComponent  implements OnInit {
  @Output() addToCart = new EventEmitter();

  product!: Product;

constructor(private router: Router){
  const navigation = this.router.getCurrentNavigation();
  if (navigation && navigation.extras.state) {
    this.product = navigation.extras.state['product'] as Product;
  }
}

onAddtoCart(): void {
  // this.addToCart.emit(this.product);
 this.addToCart.emit(this.product);
}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  onPushtoCard(): void {
    this.addToCart.emit(this.product)

  }

}




