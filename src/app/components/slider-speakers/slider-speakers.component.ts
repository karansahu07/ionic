import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-slider-speakers',  // Replace with the actual selector
  standalone: true,
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider-speakers.component.html',  // Replace with actual template path
  styleUrls: ['./slider-speakers.component.scss']   // Replace with actual styles path
})
export class SliderSpeakersComponent implements OnInit, OnChanges, AfterViewInit {  // Replace class name
  @Input() slides: any[] = [];
  @ViewChild('swiper') swiperRef!: ElementRef;
  swiperInitialized = false;

  ngOnInit() {
    console.log('SliderSpeakersComponent initialized with slides:', this.slides);
  }
  
  ngAfterViewInit() {
    if (this.slides && this.slides.length > 0 && !this.swiperInitialized) {
      setTimeout(() => this.initializeSwiper(), 100);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('SliderSpeakersComponent changes:', changes);
    
    if (changes['slides'] && !changes['slides'].firstChange && 
        this.slides && this.slides.length > 0) {
      
      console.log('Slides updated, reinitializing swiper');
      
      setTimeout(() => {
        if (this.swiperRef && this.swiperRef.nativeElement) {
          if (this.swiperInitialized) {
            this.swiperRef.nativeElement.swiper.update();
          } else {
            this.initializeSwiper();
          }
        }
      }, 100);
    }
  }

  initializeSwiper() {
    if (!this.swiperRef || !this.swiperRef.nativeElement) {
      console.warn('Swiper element reference not available');
      return;
    }
    
    console.log('Initializing swiper with slides:', this.slides);
    
    // Update this ID to match the wrapper ID in your HTML, e.g., .slider4-wrapper for speakers
    const navigationContainer = this.swiperRef.nativeElement.closest('.slider5-wrapper') 
                               .querySelector('.navigation-container');
    
    const swiperParams = {
      slidesPerView: 1.1,
      centeredSlides: true,
      loop: false,
      pagination: {
        clickable: true,
        el: navigationContainer?.querySelector('.swiper-pagination'),
        type: 'fraction'
      },
      navigation: {
        nextEl: navigationContainer?.querySelector('.swiper-button-next'),
        prevEl: navigationContainer?.querySelector('.swiper-button-prev')
      }
    };

    Object.assign(this.swiperRef.nativeElement, swiperParams);
    this.swiperRef.nativeElement.initialize();
    this.swiperInitialized = true;

    const swiper = this.swiperRef.nativeElement.swiper;
    this.updateNavigationButtons(swiper, navigationContainer);

    swiper.on('slideChange', () => {
      this.updateNavigationButtons(swiper, navigationContainer);
    });
  }

  private updateNavigationButtons(swiper: any, wrapper: HTMLElement | null) {
    if (!wrapper) return;
    
    const prevButton = wrapper.querySelector('.swiper-button-prev');
    const nextButton = wrapper.querySelector('.swiper-button-next');

    if (prevButton) {
      prevButton.classList.toggle('swiper-button-disabled', swiper.isBeginning);
    }

    if (nextButton) {
      nextButton.classList.toggle('swiper-button-disabled', swiper.isEnd);
    }
  }
}