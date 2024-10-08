import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule,SlickCarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  images = [
    '/images/slider/image-1.png',
    '/images/slider/image-1.png',
    '/images/slider/image-1.png',
    '/images/slider/image-1.png',
    '/images/slider/image-1.png',
    '/images/slider/image-1.png',
    '/images/slider/image-1.png',
    '/images/slider/image-1.png',
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    arrows: false,
    vertical: true // لجعل الانتقال من الأسفل للأعلى
  };
}
