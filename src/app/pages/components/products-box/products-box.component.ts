import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-products-box',
  templateUrl: 'products-box.component.html',
})
export class ProductsBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Sniker',
    price: 150,
    category: 'shoes',
    description: 'Description',
    image: 'https://placehold.co/150.png',
  };
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
