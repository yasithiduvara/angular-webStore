import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'./products-header.component.html',
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  ithemShowCount= 12;

  onSortUpdate(newSort:string):void {
    this.sort = newSort;
  }
  
  onItemsUpdated(count: number):void {
    this.ithemShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

}
