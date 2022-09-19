import {
  Component,
} from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images = [
    'https://picsum.photos/300/200?random=6',
    'https://picsum.photos/300/200?random=7',
    'https://picsum.photos/300/200?random=8',
    'https://picsum.photos/300/200?random=9',
    'https://picsum.photos/300/200?random=2',
    'https://picsum.photos/300/200?random=3',
    'https://picsum.photos/300/200?random=1',
  ];
  height=0;
  constructor() {}

}
