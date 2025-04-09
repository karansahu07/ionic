import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('swiper')
  swiperRef!: ElementRef;

  ngAfterViewInit() {
    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'fraction' 
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      loop: true
    };

    // Initialize with parameters
    Object.assign(this.swiperRef.nativeElement, swiperParams);
    
    // Initialize Swiper
    this.swiperRef.nativeElement.initialize();
  }
}