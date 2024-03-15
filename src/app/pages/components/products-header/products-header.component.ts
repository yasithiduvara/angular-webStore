import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-products-header',
  templateUrl:'./products-header.component.html',
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  itemsShowCount = 12;
  sort = 'desc';
  ithemShowCount= 12;

  onSortUpdate(newSort:string):void {
    this.sort = newSort;
  }
  
  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

  onItemsUpdated(count: number): void {
    this.itemsCountChange.emit(count);
    this.itemsShowCount = count;
  }


}
