import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';


const ROWS_HEIGHT: {[id:number]: number} = {1: 400, 3: 335, 4: 350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('drawerContainer') drawerContainer!: ElementRef;

  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort = 'dasc';
  count = '12';
  productSubcription: Subscription | undefined;


  // constructor(private cartService: CartService, private storeService: StoreService) {}
  constructor(private cartService: CartService, private storeService: StoreService, private router: Router) {}


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productSubcription = this.storeService.getAllProducts(this.count, this.sort, this.category).subscribe((_product) =>{
      this.products = _product;
    })
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onShowCategory(newCategory: string): void{
    this.category = newCategory;
    this.getProducts();
  }

  onItemsCountChange(count: number): void {
    this.count = count.toString();
    this.getProducts();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }


  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  ngOnDestroy(): void {
    if (this.productSubcription) {
      this.productSubcription.unsubscribe();
    }
  }

  scrollToDrawer(): void {
    if (this.drawerContainer) {
      const yOffset = this.drawerContainer.nativeElement.offsetTop;
      window.scrollTo({
        top: yOffset,
        behavior: 'smooth',
      });
    }
  }

  onCardClick(product: Product): void {
    this.router.navigate(['/product'], { state: { product } });
  }

}
