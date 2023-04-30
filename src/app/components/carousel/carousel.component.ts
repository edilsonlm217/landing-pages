import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  slides = [
    { img: "../../../assets/mk-edge-screenshot-1.png" },
    { img: "../../../assets/mk-edge-screenshot-2.png" },
    { img: "../../../assets/mk-edge-screenshot-3.png" },
    { img: "../../../assets/mk-edge-screenshot-4.png" },
    { img: "../../../assets/mk-edge-screenshot-5.png" },
    { img: "../../../assets/mk-edge-screenshot-6.png" },
    { img: "../../../assets/mk-edge-screenshot-7.png" },
    { img: "../../../assets/mk-edge-screenshot-8.png" },
    { img: "../../../assets/mk-edge-screenshot-9.png" },
    { img: "../../../assets/mk-edge-screenshot-10.png" },
    { img: "../../../assets/mk-edge-screenshot-111.png" },
  ];

  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, infinite: false, };

  slickInit(e: any): void { console.log('slick initialized') }
  breakpoint(e: any): void { console.log('breakpoint') }
  afterChange(e: any): void { console.log('afterChange') }
  beforeChange(e: any): void { console.log('beforeChange') }
}
