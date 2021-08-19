import { Component } from '@angular/core';
import { Masonry } from 'ng-masonry-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyProfile';
  count = 0;
  _masonry: Masonry;
  showMasonry = true;

  animOptions = { animationEffect: 'effect-1' };

  masonryItems: Array<any> = [];

  constructor() {


    const len = 10; // length of grid items

    for (let i = 0; i < len; i++) {
      this.masonryItems.push({ src: this.getSrc(), count: this.count++ });
    }
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * max + min);
  }

  getSrc() {
    // const width = this.getRandomInt( 300, 400 );
    // const height = this.getRandomInt( 300, 500 );
    // return 'http://lorempixel.com/'  + width + '/' + height + '/nature';

    return '../assets/images/' + this.getRandomInt(1, 15) + '.jpg';
  }

  onNgMasonryInit($event: Masonry) {
    console.log($event);
    this._masonry = $event;
  }

}
