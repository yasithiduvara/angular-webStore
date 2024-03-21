import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-page',
  templateUrl:'./product-page.component.html',
  
})


export class ProductPageComponent {

  @Input() product: Product | undefined ;
  
}
