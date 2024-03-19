import { Component, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  img : string;
  
}

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
})


export class HeroComponent {

  @Output() tileClick: EventEmitter<void> = new EventEmitter<void>();

  tiles: Tile[] = [
    { text: 'Women', cols: 3, rows: 1, color: 'lightblue', img: 'https://i.pinimg.com/originals/d7/5f/61/d75f619e75130a7b98d559fdab4a911e.png' },
    { text: 'Men', cols: 1, rows: 2, color: 'lightgreen', img: 'https://i.pinimg.com/564x/7b/f5/dc/7bf5dccec17effffea69b9a8ff238349.jpg' },
    { text: ' Jewellery', cols: 1, rows: 1, color: 'lightpink', img: 'https://i.pinimg.com/564x/63/3e/3f/633e3fd88334f883e89b56149acdc0e8.jpg' },
    { text: 'accesorios', cols: 2, rows: 1, color: '#DDBDF1', img: 'https://i.pinimg.com/564x/50/fa/79/50fa79a13294a9060378e2d8330dc471.jpg' }
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  getBackgroundImage(tile: Tile,): any {
   return{
      'background': `url('${tile.img}')`,
      'background-size': 'cover',

       
   }
  }

  tileClicked(): void {
    this.tileClick.emit();
  }
  
}
