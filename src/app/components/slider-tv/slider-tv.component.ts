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

// @Component({
//   selector: 'app-slider-tv',
//   standalone: true,
//   imports: [CommonModule, IonicModule],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
//   templateUrl: './slider-tv.component.html',
//   styleUrls: ['./slider-tv.component.scss']
// })
// export class SliderTvComponent implements AfterViewInit {
//   @ViewChild('swiper') swiperRef!: ElementRef;

//   slides = [
//     {
//       type: 'product',
//       data: {
//         image: 'assets/public/brevia_8.webp',
//         title: 'Sony | BRAVIA 8 | 77 Inch | XR-OLED | Exclusive features for PS5 gaming | 2024 Model',
//         comparePrice: 'AED 16,499',
//         salePrice: 'AED 12,499',
//         discountNote: 'Get additional 10% discount at checkout',
//         rewardsNote: 'Earn 595 Rewards Points'
//       }
//     },
//     {
//       type: 'promo',
//       data: {
//         image: 'assets/public/BRAVIA_8_-65.webp',  
//         title: 'Sony | BRAVIA 8 | 77 Inch | XR-OLED | Exclusive features for PS5 gaming | 2024 Model',
//         comparePrice: 'AED 16,499',
//         salePrice: 'AED 12,499',
//         discountNote: 'Get additional 10% discount at checkout',
//         rewardsNote: 'Earn 595 Rewards Points'
//       }
//     },
//     {
//       type: 'product',
//       data: {
//         image: 'assets/public/brevia_8_55.webp',
//         title: 'Sony | BRAVIA 8 | 77 Inch | XR-OLED | Exclusive features for PS5 gaming | 2024 Model',
//         comparePrice: 'AED 16,499',
//         salePrice: 'AED 12,499',
//         discountNote: 'Get additional 10% discount at checkout',
//         rewardsNote: 'Earn 595 Rewards Points'
//       }
//     },
//     {
//       type: 'product',
//       data: {
//         image: 'assets/public/brevia_3_85.webp',
//         title: 'Sony | BRAVIA 8 | 77 Inch | XR-OLED | Exclusive features for PS5 gaming | 2024 Model',
//         comparePrice: 'AED 16,499',
//         salePrice: 'AED 12,499',
//         discountNote: 'Get additional 10% discount at checkout',
//         rewardsNote: 'Earn 595 Rewards Points'
//       }
//     }
//   ];
  
  

//   ngAfterViewInit() {
//     const wrapper = document.getElementById('pagination2'); 

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


// import {
//   Component,
//   CUSTOM_ELEMENTS_SCHEMA,
//   ElementRef,
//   ViewChild
// } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { register } from 'swiper/element/bundle';

// register();

// @Component({
//   selector: 'app-slider-tv',
//   standalone: true,
//   imports: [CommonModule, IonicModule, HttpClientModule],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
//   templateUrl: './slider-tv.component.html',
//   styleUrls: ['./slider-tv.component.scss']
// })
// export class SliderTvComponent {
//   @ViewChild('swiper') swiperRef!: ElementRef;
//   slides: any[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     console.log('SliderTvComponent initialized');

//     this.http.get<any[]>('http://localhost:3000/all-collections')
//       .subscribe({
//         next: collections => {
//           console.log('Fetched collections:', collections);

//           const tvCollection = collections.find(
//             c =>
//               c.title?.toLowerCase().includes('television') ||
//               c.handle?.toLowerCase().includes('television')
//           );

//           console.log('Television collection:', tvCollection);

//           if (tvCollection && tvCollection.products?.length > 0) {
//             const activeProducts = tvCollection.products.filter(
//               (product: any) => product.status?.toLowerCase() === 'active'
//             );

//             this.slides = activeProducts.map((product: any) => ({
//               type: 'product',
//               data: {
//                 image: product.image,
//                 title: product.title,
//                 comparePrice: product.comparePrice || '',
//                 salePrice: product.salePrice || '',
//                 discountNote: 'Get additional 10% discount at checkout',
//                 rewardsNote: product.rewardsNote || ''
//               }
//             }));

//             setTimeout(() => this.initializeSwiper(), 100);
//           } else {
//             console.warn('No "television" collection found or it has no products.');
//           }
//         },
//         error: err => {
//           console.error('HTTP error:', err);
//         }
//       });
//   }

//   initializeSwiper() {
//     const wrapper = document.getElementById('pagination2');

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


// import {
//   Component,
//   CUSTOM_ELEMENTS_SCHEMA,
//   ElementRef,
//   ViewChild
// } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { register } from 'swiper/element/bundle';

// register();

// @Component({
//   selector: 'app-slider-tv',
//   standalone: true,
//   imports: [CommonModule, IonicModule, HttpClientModule],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
//   templateUrl: './slider-tv.component.html',
//   styleUrls: ['./slider-tv.component.scss']
// })
// export class SliderTvComponent {
//   @ViewChild('swiper') swiperRef!: ElementRef;
//   slides: any[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     console.log('SliderTvComponent initialized');

//     this.http.get<any[]>('http://localhost:3000/all-collections').subscribe({
//       next: collections => {
//         console.log('Fetched collections:', collections);

//         const tvCollection = collections.find(
//           c =>
//             c.title?.toLowerCase().includes('television') ||
//             c.handle?.toLowerCase().includes('television')
//         );

//         console.log('Television collection:', tvCollection);

//         if (tvCollection && tvCollection.products?.length > 0) {
//           const activeProducts = tvCollection.products
//             .filter((product: any) => product.status?.toLowerCase() === 'active')
//             .slice(0, 4);

//           this.slides = activeProducts.map((product: any) => ({
//             type: 'product',
//             data: {
//               image: product.image,
//               title: product.title,
//               comparePrice: product.comparePrice || '',
//               salePrice: product.salePrice || '',
//               discountNote: 'Get additional 10% discount at checkout',
//               rewardsNote: product.rewardsNote || ''
//             }
//           }));

//           setTimeout(() => this.initializeSwiper(), 100);
//         } else {
//           console.warn('No "television" collection found or it has no active products.');
//         }
//       },
//       error: err => {
//         console.error('HTTP error:', err);
//       }
//     });
//   }

//   initializeSwiper() {
//     const wrapper = document.getElementById('pagination2');

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
  selector: 'app-slider-tv',
  standalone: true,
  imports: [CommonModule, IonicModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider-tv.component.html',
  styleUrls: ['./slider-tv.component.scss']
})
export class SliderTvComponent {
  @ViewChild('swiper') swiperRef!: ElementRef;
  slides: any[] = [];

  constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   console.log('SliderTvComponent initialized');

  //   const apiBase = (window as any).env?.API_BASE_URL || 'https://shopify-test-oyl8r7oxu-karanekarigar-gmailcoms-projects.vercel.app';

  //   this.http.get<any[]>(`${apiBase}/all-collections`).subscribe({
  //     next: collections => {
  //       console.log('Fetched collections:', collections);

  //       const tvCollection = collections.find(
  //         c =>
  //           c.title?.toLowerCase().includes('television') ||
  //           c.handle?.toLowerCase().includes('television')
  //       );

  //       console.log('Television collection:', tvCollection);

  //       if (tvCollection && tvCollection.products?.length > 0) {
  //         const activeProducts = tvCollection.products
  //           .filter((product: any) => product.status?.toLowerCase() === 'active')
  //           .slice(0, 4);

  //           this.slides = activeProducts.map((product: any) => {
            
  //             const rawSalePrice = Number(product.salePrice) / 100;
  //             const formattedSalePrice =
  //               rawSalePrice % 1 === 0 ? rawSalePrice.toString() : rawSalePrice.toFixed(2);
            
              
  //             const rawComparePrice = Number(product.comparePrice);
  //             const formattedComparePrice =
  //               rawComparePrice % 1 === 0 ? rawComparePrice.toString() : rawComparePrice.toFixed(2);
            
  //             return {
  //               type: 'product',
  //               data: {
  //                 image: product.image,
  //                 title: product.title,
  //                 comparePrice: product.comparePrice ? formattedComparePrice : '',
  //                 salePrice: product.salePrice ? formattedSalePrice : '',
  //                 discountNote: 'Get additional 10% discount at checkout',
  //                 rewardsNote: product.rewardsNote || ''
  //               }
  //             };
  //           });
            
            
            

  //         setTimeout(() => this.initializeSwiper(), 100);
  //       } else {
  //         console.warn('No "television" collection found or it has no active products.');
  //       }
  //     },
  //     error: err => {
  //       console.error('HTTP error:', err);
  //     }
  //   });
  // }

  ngOnInit() {
    console.log('SliderTvComponent initialized');

    const apiBase = (window as any).env?.API_BASE_URL || 'http://localhost:3000';

    this.http.get<any[]>(`${apiBase}/all-collections`).subscribe({
      next: collections => {
        console.log('Fetched collections:', collections);

        const tvCollection = collections.find(
          c =>
            c.title?.toLowerCase().includes('television') ||
            c.handle?.toLowerCase().includes('television')
        );

        console.log('Television collection:', tvCollection);

        if (tvCollection && tvCollection.products?.length > 0) {
          const activeProducts = tvCollection.products
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
          console.warn('No "television" collection found or it has no active products.');
        }
      },
      error: err => {
        console.error('HTTP error:', err);
      }
    });
  }

  // initializeSwiper() {
  //   const wrapper = document.getElementById('pagination2');

  //   const swiperParams = {
  //     slidesPerView: 1.1,
  //     centeredSlides: true,
  //     loop: false,
  //     pagination: {
  //       clickable: true,
  //       el: wrapper?.querySelector('.swiper-pagination'),
  //       type: 'fraction'
  //     },
  //     navigation: {
  //       nextEl: wrapper?.querySelector('.swiper-button-next'),
  //       prevEl: wrapper?.querySelector('.swiper-button-prev')
  //     }
  //   };

  //   Object.assign(this.swiperRef.nativeElement, swiperParams);
  //   this.swiperRef.nativeElement.initialize();

  //   const swiper = this.swiperRef.nativeElement.swiper;

  //   this.updateNavigationButtons(swiper, wrapper);

  //   swiper.on('slideChange', () => {
  //     this.updateNavigationButtons(swiper, wrapper);
  //   });
  // }

  // private updateNavigationButtons(swiper: any, wrapper: HTMLElement | null) {
  //   const prevButton = wrapper?.querySelector('.swiper-button-prev');
  //   const nextButton = wrapper?.querySelector('.swiper-button-next');

  //   if (prevButton) {
  //     prevButton.classList.toggle('swiper-button-disabled', swiper.isBeginning);
  //   }

  //   if (nextButton) {
  //     nextButton.classList.toggle('swiper-button-disabled', swiper.isEnd);
  //   }
  // }
  initializeSwiper() {
    const wrapper = document.getElementById('pagination2');
  
    if (!wrapper) return;
  
    const swiperParams = {
      slidesPerView: 1.1,
      centeredSlides: true,
      loop: false,
      pagination: {
        clickable: true,
        el: wrapper.querySelector('.swiper-pagination'),
        type: 'fraction'
      },
      navigation: {
        nextEl: wrapper.querySelector('.swiper-button-next'),
        prevEl: wrapper.querySelector('.swiper-button-prev')
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


