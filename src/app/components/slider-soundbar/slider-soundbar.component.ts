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
  Input,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-slider-soundbar',
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider-soundbar.component.html',
  styleUrls: ['./slider-soundbar.component.scss']
})
export class SliderSoundbarComponent {
  @Input() slides: any[] = [];
  
  @ViewChild('swiper') swiperRef!: ElementRef;
  // slides: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('SliderSoundbarComponent initialized');

    const apiBase = (window as any).env?.API_BASE_URL || 'https://shopify-test-swart.vercel.app';

    this.http.get<any[]>(`${apiBase}/all-collections`).subscribe({
      next: collections => {
        console.log('Fetched collections:', collections);

        const soundbarCollection = collections.find(
          c =>
            c.title?.toLowerCase().includes('soundbar') ||
            c.handle?.toLowerCase().includes('soundbar')
        );

        console.log('Soundbar collection:', soundbarCollection);

        if (soundbarCollection && soundbarCollection.products?.length > 0) {
          const activeProducts = soundbarCollection.products
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
          console.warn('No "soundbar" collection found or it has no active products.');
        }
      },
      error: err => {
        console.error('HTTP error:', err);
      }
    });
  }

  initializeSwiper() {
    const wrapper = document.getElementById('pagination3');

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
