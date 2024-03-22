import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-products-box',
  templateUrl: 'products-box.component.html',
})
export class ProductsBoxComponent {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined ;
  @Output() addToCart = new EventEmitter();
  @Output() cardClick = new EventEmitter<Product>();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  onCardClick(): void {
    this.cardClick.emit(this.product);
  }

}
