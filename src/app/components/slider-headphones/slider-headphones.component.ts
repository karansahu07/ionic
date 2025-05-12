// import {
//   Component,
//   CUSTOM_ELEMENTS_SCHEMA,
//   AfterViewInit,
//   ElementRef,
//   ViewChild
// } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
// import { register } from 'swiper/element/bundle';

// register();

// interface Product {
//   title: string;
//   comparePrice: string;
//   salePrice: string;
//   rewardsPoints: number;
//   hasOptions: boolean;
//   showTabby: boolean;
//   selectedColor: string;
//   colorImages: { [key: string]: string };
// }

// @Component({
//   selector: 'app-slider-headphones',
//   standalone: true,
//   imports: [CommonModule, IonicModule],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
//   templateUrl: './slider-headphones.component.html',
//   styleUrls: ['./slider-headphones.component.scss']
// })
// export class SliderHeadphonesComponent implements AfterViewInit {
//   @ViewChild('swiper') swiperRef!: ElementRef;

//   headphones: Product[] = [
//     {
//       title: 'Sony LinkBuds series | LinkBuds Fit Wireless Noise Canceling Earbuds',
//       comparePrice: 'AED 899',
//       salePrice: 'AED 799',
//       rewardsPoints: 38,
//       hasOptions: false,
//       showTabby: true,
//       selectedColor: 'black',
//       colorImages: {
//         black: 'assets/public/headphone1.webp',
//       }
//     },
//     {
//       title: 'Sony LinkBuds series | LinkBuds Fit Wireless Noise Canceling Earbuds',
//       comparePrice: 'AED 899',
//       salePrice: 'AED 799',
//       rewardsPoints: 38,
//       hasOptions: true,
//       showTabby: true,
//       selectedColor: 'black',
//       colorImages: {
//         black: 'assets/public/headphone2.webp',
//         white: 'assets/public/white-headphone.webp',
//         green: 'assets/public/green-headphone.webp'
//       }
//     },
//     {
//       title: 'Sony LinkBuds series | LinkBuds Fit Wireless Noise Canceling Earbuds',
//       comparePrice: 'AED 899',
//       salePrice: 'AED 799',
//       rewardsPoints: 38,
//       hasOptions: true,
//       showTabby: true,
//       selectedColor: 'black',
//       colorImages: {
//         black: 'assets/public/headphone3.webp',
//         white: 'assets/public/white-headphone.webp',
//         green: 'assets/public/green-headphone.webp'
//       }
//     },
//     {
//       title: 'Sony LinkBuds Fit x Olivia Rodrigo Wireless Noise Canceling Earbuds',
//       comparePrice: 'AED 899',
//       salePrice: 'AED 799',
//       rewardsPoints: 38,
//       hasOptions: false,
//       showTabby: true,
//       selectedColor: 'purple',
//       colorImages: {
//         purple: 'assets/public/headphone4.webp'
//       }
//     }
//   ];

//   getColorKeys(product: Product): string[] {
//     return Object.keys(product.colorImages);
//   }

//   ngAfterViewInit() {
//     const wrapper = document.getElementById('pagination4');

//     const swiperParams = {
//       slidesPerView: 1.1,
//       centeredSlides: true,
//       loop: false,
//       pagination: {
//         clickable: true,
//         el: wrapper?.querySelector('.swiper-pagination'),
//         type: 'fraction'
//       },
//       navigation: {
//         nextEl: wrapper?.querySelector('.swiper-button-next'),
//         prevEl: wrapper?.querySelector('.swiper-button-prev')
//       }
//     };

//     Object.assign(this.swiperRef.nativeElement, swiperParams);
//     this.swiperRef.nativeElement.initialize();

//     const swiper = this.swiperRef.nativeElement.swiper;

//     this.updateNavigationButtons(swiper, wrapper);

//     swiper.on('slideChange', () => {
//       this.updateNavigationButtons(swiper, wrapper);
//     });
//   }

//   private updateNavigationButtons(swiper: any, wrapper: HTMLElement | null) {
//     const prevButton = wrapper?.querySelector('.swiper-button-prev');
//     const nextButton = wrapper?.querySelector('.swiper-button-next');

//     if (prevButton) {
//       prevButton.classList.toggle('swiper-button-disabled', swiper.isBeginning);
//     }

//     if (nextButton) {
//       nextButton.classList.toggle('swiper-button-disabled', swiper.isEnd);
//     }
//   }
// }


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
  selector: 'app-slider-headphones',
  standalone: true,
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider-headphones.component.html',
  styleUrls: ['./slider-headphones.component.scss']
})
export class SliderHeadphonesComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() slides: any[] = [];
  @ViewChild('swiper') swiperRef!: ElementRef;
  swiperInitialized = false;

  ngOnInit() {
    console.log('SliderHeadphonesComponent initialized with slides:', this.slides);
  }
  
  ngAfterViewInit() {
    // Attempt to initialize if we already have slides
    if (this.slides && this.slides.length > 0 && !this.swiperInitialized) {
      setTimeout(() => this.initializeSwiper(), 100);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('SliderHeadphonesComponent changes:', changes);
    
    // Only reinitialize if slides have changed and we have slides data
    if (changes['slides'] && !changes['slides'].firstChange && 
        this.slides && this.slides.length > 0) {
      
      console.log('Slides updated, reinitializing swiper');
      
      // Wait for DOM update before initializing swiper
      setTimeout(() => {
        if (this.swiperRef && this.swiperRef.nativeElement) {
          if (this.swiperInitialized) {
            // If already initialized, update swiper
            this.swiperRef.nativeElement.swiper.update();
          } else {
            // Initialize for the first time
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
    
    // Get the parent navigation container from parent component
    const navigationContainer = this.swiperRef.nativeElement.closest('.slider4-wrapper')
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