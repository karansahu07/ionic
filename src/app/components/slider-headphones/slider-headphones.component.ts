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

interface Product {
  title: string;
  comparePrice: string;
  salePrice: string;
  rewardsPoints: number;
  hasOptions: boolean;
  showTabby: boolean;
  selectedColor: string;
  colorImages: { [key: string]: string };
}

@Component({
  selector: 'app-slider-headphones',
  standalone: true,
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider-headphones.component.html',
  styleUrls: ['./slider-headphones.component.scss']
})
export class SliderHeadphonesComponent implements AfterViewInit {
  @ViewChild('swiper') swiperRef!: ElementRef;

  headphones: Product[] = [
    {
      title: 'Sony LinkBuds series | LinkBuds Fit Wireless Noise Canceling Earbuds',
      comparePrice: 'AED 899',
      salePrice: 'AED 799',
      rewardsPoints: 38,
      hasOptions: false,
      showTabby: true,
      selectedColor: 'black',
      colorImages: {
        black: 'assets/public/headphone1.webp',
      }
    },
    {
      title: 'Sony LinkBuds series | LinkBuds Fit Wireless Noise Canceling Earbuds',
      comparePrice: 'AED 899',
      salePrice: 'AED 799',
      rewardsPoints: 38,
      hasOptions: true,
      showTabby: true,
      selectedColor: 'black',
      colorImages: {
        black: 'assets/public/headphone2.webp',
        white: 'assets/public/white-headphone.webp',
        green: 'assets/public/green-headphone.webp'
      }
    },
    {
      title: 'Sony LinkBuds series | LinkBuds Fit Wireless Noise Canceling Earbuds',
      comparePrice: 'AED 899',
      salePrice: 'AED 799',
      rewardsPoints: 38,
      hasOptions: true,
      showTabby: true,
      selectedColor: 'black',
      colorImages: {
        black: 'assets/public/headphone3.webp',
        white: 'assets/public/white-headphone.webp',
        green: 'assets/public/green-headphone.webp'
      }
    },
    {
      title: 'Sony LinkBuds Fit x Olivia Rodrigo Wireless Noise Canceling Earbuds',
      comparePrice: 'AED 899',
      salePrice: 'AED 799',
      rewardsPoints: 38,
      hasOptions: false,
      showTabby: true,
      selectedColor: 'purple',
      colorImages: {
        purple: 'assets/public/headphone4.webp'
      }
    }
  ];

  getColorKeys(product: Product): string[] {
    return Object.keys(product.colorImages);
  }

  ngAfterViewInit() {
    const wrapper = document.getElementById('pagination4');

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

    this.updateNavigationButtons(swiper, wrapper);

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
