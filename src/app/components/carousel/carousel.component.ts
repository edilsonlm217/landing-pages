import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  slides = [
    { img: "http://mk-edge.com.br/images/Screenshot_20230310_144646_MK-Edge.jpg" },
    { img: "http://mk-edge.com.br/images/Screenshot_20230310_144706_MK-Edge.jpg" },
    { img: "http://mk-edge.com.br/images/Screenshot_20230310_144646_MK-Edge.jpg" },
    { img: "http://mk-edge.com.br/images/Screenshot_20230310_144706_MK-Edge.jpg" }
  ];

  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, infinite: false, };

  slickInit(e: any): void { console.log('slick initialized') }
  breakpoint(e: any): void { console.log('breakpoint') }
  afterChange(e: any): void { console.log('afterChange') }
  beforeChange(e: any): void { console.log('beforeChange') }
}
