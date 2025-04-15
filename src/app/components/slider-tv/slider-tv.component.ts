import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-slider-tv',
  standalone: true,
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider-tv.component.html',
  styleUrls: ['./slider-tv.component.scss']
})
export class SliderTvComponent implements AfterViewInit {
  @ViewChild('swiper') swiperRef!: ElementRef;

  slides = [
    {
      type: 'product',
      data: {
        image: 'assets/public/brevia_8.webp',
        title: 'Sony | BRAVIA 8 | 77 Inch | XR-OLED | Exclusive features for PS5 gaming | 2024 Model',
        comparePrice: 'AED 16,499',
        salePrice: 'AED 12,499',
        discountNote: 'Get additional 10% discount at checkout',
        rewardsNote: 'Earn 595 Rewards Points'
      }
    },
    {
      type: 'promo',
      data: {
        image: 'assets/public/BRAVIA_8_-65.webp',  
        title: 'Sony | BRAVIA 8 | 77 Inch | XR-OLED | Exclusive features for PS5 gaming | 2024 Model',
        comparePrice: 'AED 16,499',
        salePrice: 'AED 12,499',
        discountNote: 'Get additional 10% discount at checkout',
        rewardsNote: 'Earn 595 Rewards Points'
      }
    },
    {
      type: 'product',
      data: {
        image: 'assets/public/brevia_8_55.webp',
        title: 'Sony | BRAVIA 8 | 77 Inch | XR-OLED | Exclusive features for PS5 gaming | 2024 Model',
        comparePrice: 'AED 16,499',
        salePrice: 'AED 12,499',
        discountNote: 'Get additional 10% discount at checkout',
        rewardsNote: 'Earn 595 Rewards Points'
      }
    },
    {
      type: 'product',
      data: {
        image: 'assets/public/brevia_3_85.webp',
        title: 'Sony | BRAVIA 8 | 77 Inch | XR-OLED | Exclusive features for PS5 gaming | 2024 Model',
        comparePrice: 'AED 16,499',
        salePrice: 'AED 12,499',
        discountNote: 'Get additional 10% discount at checkout',
        rewardsNote: 'Earn 595 Rewards Points'
      }
    }
  ];
  
  

  ngAfterViewInit() {
    const wrapper = document.getElementById('pagination2'); // Scoped to #pagination2

    const swiperParams = {
      slidesPerView: 1.1,
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

    Object.assign(this.swiperRef.nativeElement, swiperParams);
    this.swiperRef.nativeElement.initialize();

    const swiper = this.swiperRef.nativeElement.swiper;

    // Update buttons initially
    this.updateNavigationButtons(swiper, wrapper);

    // Update on slide change
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
