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
    const wrapper = document.getElementById('pagination1'); 

    const swiperParams = {
      slidesPerView: 1.09,
      centeredSlides: true,
      loop: false,
      pagination: {
        clickable: true,
        el: wrapper?.querySelector('.swiper-pagination'),
        type: 'fraction'
      },
      navigation: {
        nextEl: wrapper?.querySelector('.swiper-button-next'),
        prevEl: wrapper?.querySelector('.swiper-button-prev')
      }
    };

    // Initialize Swiper with config
    Object.assign(this.swiperRef.nativeElement, swiperParams);
    this.swiperRef.nativeElement.initialize();

    const swiper = this.swiperRef.nativeElement.swiper;

    // Update navigation button state
    this.updateNavigationButtons(swiper, wrapper);

    // Listen for changes
    swiper.on('slideChange', () => {
      this.updateNavigationButtons(swiper, wrapper);
    });
  }

  private updateNavigationButtons(swiper: any, wrapper: HTMLElement | null) {
    const prevButton = wrapper?.querySelector('.swiper-button-prev');
    const nextButton = wrapper?.querySelector('.swiper-button-next');

    if (prevButton) {
      prevButton.classList.toggle('swiper-button-disabled', swiper.isBeginning);
    }

    if (nextButton) {
      nextButton.classList.toggle('swiper-button-disabled', swiper.isEnd);
    }
  }
}
