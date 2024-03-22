import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-page',
  templateUrl:'./product-page.component.html',
  
})


export class ProductPageComponent  implements OnInit {
  product!: Product;

constructor(private router: Router){
  const navigation = this.router.getCurrentNavigation();
  if (navigation && navigation.extras.state) {
    this.product = navigation.extras.state['product'] as Product;
  }
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
