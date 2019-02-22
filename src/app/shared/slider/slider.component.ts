import {Component} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  follow = true;
  enablePan = true;
  index = 8;
  speed = 3000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '123456789'.split('').map((x, i) => {
    const num = i;
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`,
    };
  });

  constructor() {}

  indexChanged(index) {
    console.log(index);
  }

  toggleDirection($event) {
    this.direction = this.directionToggle ? 'right' : 'left';
  }

  a(i) {
    // console.log(i);
  }
}
