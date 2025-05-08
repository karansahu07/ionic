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
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-slider-headphones',
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider-headphones.component.html',
  styleUrls: ['./slider-headphones.component.scss']
})
export class SliderHeadphonesComponent {
  @ViewChild('swiper') swiperRef!: ElementRef;
  slides: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('SliderHeadphonesComponent initialized');

    const apiBase = (window as any).env?.API_BASE_URL || 'https://shopify-test-swart.vercel.app';

    this.http.get<any[]>(`${apiBase}/all-collections`).subscribe({
      next: collections => {
        console.log('Fetched collections:', collections);

        const headphonesCollection = collections.find(
          c =>
            c.title?.toLowerCase().includes('headphones') ||
            c.handle?.toLowerCase().includes('headphones')
        );

        console.log('Headphones collection:', headphonesCollection);

        if (headphonesCollection && headphonesCollection.products?.length > 0) {
          const activeProducts = headphonesCollection.products
            .filter((product: any) => product.status?.toLowerCase() === 'active')
            .slice(0, 4);

          this.slides = activeProducts.map((product: any) => {
            const rawSalePrice = Number(product.salePrice) / 100;
            const formattedSalePrice =
              rawSalePrice % 1 === 0 ? rawSalePrice.toString() : rawSalePrice.toFixed(2);

            const rawComparePrice = Number(product.comparePrice);
            const formattedComparePrice =
              rawComparePrice % 1 === 0 ? rawComparePrice.toString() : rawComparePrice.toFixed(2);

            const moneyPriceCalc = rawSalePrice / 1.05 * 0.05;
            const formattedMoneyPrice = Math.floor(moneyPriceCalc).toString();

            return {
              type: 'product',
              data: {
                image: product.image,
                title: product.title,
                comparePrice: product.comparePrice ? formattedComparePrice : '',
                salePrice: product.salePrice ? formattedSalePrice : '',
                moneyPrice: product.salePrice ? formattedMoneyPrice : '',
                discountNote: 'Get additional 10% discount at checkout',
                rewardsNote: product.rewardsNote || ''
              }
            };
          });

          setTimeout(() => this.initializeSwiper(), 100);
        } else {
          console.warn('No "headphones" collection found or it has no active products.');
        }
      },
      error: err => {
        console.error('HTTP error:', err);
      }
    });
  }

  initializeSwiper() {
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
