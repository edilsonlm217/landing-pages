import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  slides = [
    { img: "../../../assets/Screenshot_20230415_165656_MK-Edge.jpg" },
    { img: "../../../assets/Screenshot_20230415_165740_MK-Edge.jpg" },
    { img: "../../../assets/Screenshot_20230415_165804_MK-Edge.jpg" },
    { img: "../../../assets/Screenshot_20230415_165820_MK-Edge.jpg" },
    { img: "../../../assets/Screenshot_20230415_165843_MK-Edge.jpg" },
    { img: "../../../assets/Screenshot_20230415_165903_MK-Edge.jpg" },
    { img: "../../../assets/Screenshot_20230415_165922_MK-Edge.jpg" },
    { img: "../../../assets/Screenshot_20230415_165944_MK-Edge.jpg" },
    { img: "../../../assets/Screenshot_20230415_170016_MK-Edge.jpg" },
    { img: "../../../assets/Screenshot_20230415_170022_MK-Edge.jpg" },
    { img: "../../../assets/Screenshot_20230415_170058_MK-Edge.jpg" },
    { img: "../../../assets/Screenshot_20230415_170109_MK-Edge.jpg" },
  ];

  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, infinite: false, };

  slickInit(e: any): void { console.log('slick initialized') }
  breakpoint(e: any): void { console.log('breakpoint') }
  afterChange(e: any): void { console.log('afterChange') }
  beforeChange(e: any): void { console.log('beforeChange') }
}
