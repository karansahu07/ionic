// import {
//   Component,
//   CUSTOM_ELEMENTS_SCHEMA,
//   AfterViewInit,
//   ElementRef,
//   ViewChild,
//   Input
// } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
// import { register } from 'swiper/element/bundle';

// register();

// @Component({
//   selector: 'app-slider-soundbar',
//   standalone: true,
//   imports: [CommonModule, IonicModule],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
//   templateUrl: './slider-soundbar.component.html',
//   styleUrls: ['./slider-soundbar.component.scss']
// })
// export class SliderSoundbarComponent implements AfterViewInit {
//   @Input() slides: any[] = [];
//   @ViewChild('swiper') swiperRef!: ElementRef;

//   soundbars = [
//     {
//       type: 'product',
//       image: 'assets/public/A9000_Main.webp',
//       title: 'Sony | BRAVIA Theatre Bar 9 | Flagship Single Soundbar | 360 Spatial Sound Mapping Dolby Atmos®/DTS:X® I HT-A9000',
//       comparePrice: 'AED 5,999',
//       salePrice: 'AED 3,999',
//       rewardsNote: 'Earn 154 Rewards Points',
//       showTabby: true
//     },
//     {
//       type: 'product',
//       image: 'assets/public/A8000_Main-Large.webp',
//       title: 'Sony BRAVIA Theatre Bar 8 | Single Soundbar | 360 Spatial Sound Mapping | Dolby Atmos®/DTS:X® I HT-A8000',
//       comparePrice: 'AED 4,999',
//       salePrice: 'AED 2,799',
//       rewardsNote: 'Earn 166 Rewards Points',
//       showTabby: true
//     },
//     {
//       type: 'product',
//       image: 'assets/public/14_AE_set-Large.webp',
//       title: 'HT-A3000 | 3.1ch Dolby Atmos® Soundbar',
//       comparePrice: 'AED 3,999',
//       salePrice: 'AED 2,999',
//       rewardsNote: 'Earn 142 Rewards Points',
//       showWarranty: true
//     },
//     {
//       type: 'product',
//       image: 'assets/public/HT-S2000_main-Large.webp',
//       title: 'HT-S2000 | 3.1ch Dolby Atmos® Soundbar',
//       comparePrice: 'AED 1,599',
//       salePrice: 'AED 999',
//       rewardsNote: 'Earn 47 Rewards Points',
//       showTabby: true
//     }
//   ];
  

//   ngAfterViewInit() {
//     const wrapper = document.getElementById('pagination3');

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

//     // Update buttons initially
//     this.updateNavigationButtons(swiper, wrapper);

//     // Update on slide change
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
  selector: 'app-slider-soundbar',  // Replace with the actual selector
  standalone: true,
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider-soundbar.component.html',  // Replace with actual template path
  styleUrls: ['./slider-soundbar.component.scss']   // Replace with actual styles path
})
export class SliderSoundbarComponent implements OnInit, OnChanges, AfterViewInit {  // Replace class name
  @Input() slides: any[] = [];
  @ViewChild('swiper') swiperRef!: ElementRef;
  swiperInitialized = false;

  ngOnInit() {
    console.log('SliderSoundbarComponent initialized with slides:', this.slides);
  }
  
  ngAfterViewInit() {
    if (this.slides && this.slides.length > 0 && !this.swiperInitialized) {
      setTimeout(() => this.initializeSwiper(), 100);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('SliderSoundbarComponent changes:', changes);
    
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
    const navigationContainer = this.swiperRef.nativeElement.closest('.slider3-wrapper') 
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