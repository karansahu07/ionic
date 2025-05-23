// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { IonicModule, AlertController } from '@ionic/angular';
// import { HeaderComponent } from '../components/header/header.component';
// import { FooterComponent } from '../components/footer/footer.component';
// import { SliderComponent } from '../components/slider/slider.component';
// import { SliderTvComponent } from '../components/slider-tv/slider-tv.component';
// import { SliderSoundbarComponent } from '../components/slider-soundbar/slider-soundbar.component';
// import { SliderHeadphonesComponent } from '../components/slider-headphones/slider-headphones.component';
// import { SliderSpeakersComponent } from '../components/slider-speakers/slider-speakers.component';
// import { SliderCamerasComponent } from '../components/slider-cameras/slider-cameras.component';
// import { SliderMoreFromSonyComponent } from '../components/slider-more-from-sony/slider-more-from-sony.component';
// import { RouterModule } from '@angular/router';
// import { FormsModule } from '@angular/forms'; // needed for ngModel
// import { ApiService } from '../services/api.service';

// import { register } from 'swiper/element/bundle';
// register();

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   templateUrl: './home.page.html',
//   styleUrls: ['./home.page.scss'],
//   imports: [
//     CommonModule,
//     FormsModule,
//     RouterModule,
//     IonicModule,
//     HeaderComponent,
//     FooterComponent,
//     SliderComponent,
//     SliderTvComponent,
//     SliderSoundbarComponent,
//     SliderHeadphonesComponent,
//     SliderSpeakersComponent,
//     SliderCamerasComponent,
//     SliderMoreFromSonyComponent,
//   ]
// })
// export class HomePage implements OnInit {
//   products: any[] = [];
//   showForm = false;
//   isEdit = false;
//   editIndex: number | null = null;

//   product = {
//     title: '',
//     body_html: '',
//     price: '',
//     sku: ''
//   };

//   constructor(private apiService: ApiService, private alertCtrl: AlertController) {}

//   ngOnInit() {
//     this.loadProducts();
//   }

//   loadProducts() {
//     this.apiService.getProducts().subscribe(
//       (data) => {
//         this.products = data;
//         console.log('Shopify products:', data);
//       },
//       (error) => {
//         console.error('Error fetching products:', error);
//       }
//     );
//   }

//   toggleForm() {
//     this.showForm = !this.showForm;

//     if (!this.showForm) {
//       this.resetForm();
//     }
//   }

//   editProduct(product: any, index: number) {
//     this.product = {
//       title: product.title,
//       body_html: product.body_html || '',
//       price: product.variants?.[0]?.price || '',
//       sku: product.variants?.[0]?.sku || ''
//     };
//     this.editIndex = index;
//     this.isEdit = true;
//     this.showForm = true;
//   }

//   async submitProduct() {
//     const productPayload = {
//       title: this.product.title,
//       body_html: this.product.body_html,
//       vendor: 'MyIonicApp',
//       product_type: 'Mobile',
//       variants: [
//         {
//           option1: 'Default',
//           price: this.product.price,
//           sku: this.product.sku
//         }
//       ]
//     };
  
//     if (this.isEdit && this.editIndex !== null) {
//       const productId = this.products[this.editIndex].id;
  
//       this.apiService.updateProduct(productId, productPayload).subscribe({
//         next: async (res) => {
//           const alert = await this.alertCtrl.create({
//             header: 'Updated',
//             message: 'Product updated successfully!',
//             buttons: ['OK']
//           });
//           await alert.present();
//           this.loadProducts();
//           this.resetForm();
//           this.showForm = false;
//         },
//         error: async (err) => {
//           const alert = await this.alertCtrl.create({
//             header: 'Error',
//             message: err.error?.error || 'Failed to update product',
//             buttons: ['OK']
//           });
//           await alert.present();
//         }
//       });
//     } else {
//       this.apiService.addProduct(productPayload).subscribe({
//         next: async (res) => {
//           const alert = await this.alertCtrl.create({
//             header: 'Success',
//             message: 'Product added successfully!',
//             buttons: ['OK']
//           });
//           await alert.present();
//           this.loadProducts();
//           this.resetForm();
//           this.showForm = false;
//         },
//         error: async (err) => {
//           const alert = await this.alertCtrl.create({
//             header: 'Error',
//             message: err.error?.error || 'Something went wrong',
//             buttons: ['OK']
//           });
//           await alert.present();
//         }
//       });
//     }
//   }
  
  

//   resetForm() {
//     this.product = {
//       title: '',
//       body_html: '',
//       price: '',
//       sku: ''
//     };
//     this.isEdit = false;
//     this.editIndex = null;
//   }
// }




// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { IonicModule, AlertController } from '@ionic/angular';
// import { HeaderComponent } from '../components/header/header.component';
// import { FooterComponent } from '../components/footer/footer.component';
// import { SliderComponent } from '../components/slider/slider.component';
// import { SliderTvComponent } from '../components/slider-tv/slider-tv.component';
// import { SliderSoundbarComponent } from '../components/slider-soundbar/slider-soundbar.component';
// import { SliderHeadphonesComponent } from '../components/slider-headphones/slider-headphones.component';
// import { SliderSpeakersComponent } from '../components/slider-speakers/slider-speakers.component';
// import { SliderCamerasComponent } from '../components/slider-cameras/slider-cameras.component';
// import { SliderMoreFromSonyComponent } from '../components/slider-more-from-sony/slider-more-from-sony.component';
// import { RouterModule } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { ApiService } from '../services/api.service';

// import { register } from 'swiper/element/bundle';
// register();

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   templateUrl: './home.page.html',
//   styleUrls: ['./home.page.scss'],
//   imports: [
//     CommonModule,
//     FormsModule,
//     RouterModule,
//     IonicModule,
//     HeaderComponent,
//     FooterComponent,
//     SliderComponent,
//     SliderTvComponent,
//     SliderSoundbarComponent,
//     SliderHeadphonesComponent,
//     SliderSpeakersComponent,
//     SliderCamerasComponent,
//     SliderMoreFromSonyComponent,
//   ]
// })
// export class HomePage implements OnInit {
//   products: any[] = [];
//   collectionsMap: { [key: string]: any[] } = {};
//   isLoading = true;

//   showForm = false;
//   isEdit = false;
//   editIndex: number | null = null;

//   product = {
//     title: '',
//     body_html: '',
//     price: '',
//     sku: ''
//   };

//   constructor(private apiService: ApiService, private alertCtrl: AlertController) {}

//   ngOnInit() {
//     // this.loadProducts();
//     this.loadAllCollections();
//   }

//   // loadProducts() {
//   //   this.apiService.getProducts().subscribe(
//   //     (data) => {
//   //       this.products = data;
//   //       console.log('Shopify products:', data);
//   //     },
//   //     (error) => {
//   //       console.error('Error fetching products:', error);
//   //     }
//   //   );
//   // }

//   loadAllCollections() {
//   this.isLoading = true;
  
//   this.apiService.getAllCollections().subscribe({
//     next: (collections) => {
//       console.log('Received collections:', collections);
//       const collectionNames = ['television', 'headphones', 'soundbar', 'speakers', 'cameras'];

//       collectionNames.forEach(name => {
//         console.log(`Processing ${name} collection`);
        
//         const matched = collections.find(
//           (c: { title: string; handle: string; }) =>
//             c.title?.toLowerCase().includes(name) ||
//             c.handle?.toLowerCase().includes(name)
//         );

//         console.log(`Matched ${name} collection:`, matched);

//         if (matched && matched.products?.length) {
//           const activeProducts = matched.products
//             .filter((p: any) => p.status?.toLowerCase() === 'active')
//             .slice(0, 4);

//           console.log(`Found ${activeProducts.length} active products for ${name}`);

//           this.collectionsMap[name] = activeProducts.map((product: any) => {
//             console.log(`Processing product:`, product);
            
//             // Add safety checks for all price calculations
//             const rawSalePrice = product.salePrice ? Number(product.salePrice) / 100 : 0;
//             const formattedSalePrice = rawSalePrice % 1 === 0 ? 
//               rawSalePrice.toString() : rawSalePrice.toFixed(2);

//             const rawComparePrice = product.comparePrice ? Number(product.comparePrice) : 0;
//             const formattedComparePrice = rawComparePrice % 1 === 0 ? 
//               rawComparePrice.toString() : rawComparePrice.toFixed(2);

//             const moneyPriceCalc = rawSalePrice > 0 ? (rawSalePrice / 1.05) * 0.05 : 0;
//             const formattedMoneyPrice = Math.floor(moneyPriceCalc).toString();

//             const productData = {
//               type: 'product',
//               data: {
//                 image: product.image || 'assets/placeholder-product.jpg',
//                 title: product.title || 'Product Name',
//                 comparePrice: product.comparePrice ? formattedComparePrice : '',
//                 salePrice: product.salePrice ? formattedSalePrice : '0',
//                 moneyPrice: product.salePrice ? formattedMoneyPrice : '',
//                 discountNote: rawComparePrice > rawSalePrice ? 'Get additional 10% discount at checkout' : '',
//                 rewardsNote: product.rewardsNote || ''
//               }
//             };
            
//             console.log(`Processed product data:`, productData);
//             return productData;
//           });
//         } else {
//           console.log(`No products found for ${name} collection`);
//           this.collectionsMap[name] = [];
//         }
        
//         console.log(`Final ${name} collection products:`, this.collectionsMap[name]);
//       });

//       this.isLoading = false;
//     },
//     error: err => {
//       console.error('Error fetching collections', err);
//       this.isLoading = false;
//     }
//   });
// }

//   // toggleForm() {
//   //   this.showForm = !this.showForm;
//   //   if (!this.showForm) {
//   //     this.resetForm();
//   //   }
//   // }

//   // editProduct(product: any, index: number) {
//   //   this.product = {
//   //     title: product.title,
//   //     body_html: product.body_html || '',
//   //     price: product.variants?.[0]?.price || '',
//   //     sku: product.variants?.[0]?.sku || ''
//   //   };
//   //   this.editIndex = index;
//   //   this.isEdit = true;
//   //   this.showForm = true;
//   // }

//   // async submitProduct() {
//   //   const productPayload = {
//   //     title: this.product.title,
//   //     body_html: this.product.body_html,
//   //     vendor: 'MyIonicApp',
//   //     product_type: 'Mobile',
//   //     variants: [
//   //       {
//   //         option1: 'Default',
//   //         price: this.product.price,
//   //         sku: this.product.sku
//   //       }
//   //     ]
//   //   };

//   //   if (this.isEdit && this.editIndex !== null) {
//   //     const productId = this.products[this.editIndex].id;

//   //     this.apiService.updateProduct(productId, productPayload).subscribe({
//   //       next: async () => {
//   //         const alert = await this.alertCtrl.create({
//   //           header: 'Updated',
//   //           message: 'Product updated successfully!',
//   //           buttons: ['OK']
//   //         });
//   //         await alert.present();
//   //         this.loadProducts();
//   //         this.resetForm();
//   //         this.showForm = false;
//   //       },
//   //       error: async (err) => {
//   //         const alert = await this.alertCtrl.create({
//   //           header: 'Error',
//   //           message: err.error?.error || 'Failed to update product',
//   //           buttons: ['OK']
//   //         });
//   //         await alert.present();
//   //       }
//   //     });
//   //   } else {
//   //     this.apiService.addProduct(productPayload).subscribe({
//   //       next: async () => {
//   //         const alert = await this.alertCtrl.create({
//   //           header: 'Success',
//   //           message: 'Product added successfully!',
//   //           buttons: ['OK']
//   //         });
//   //         await alert.present();
//   //         this.loadProducts();
//   //         this.resetForm();
//   //         this.showForm = false;
//   //       },
//   //       error: async (err) => {
//   //         const alert = await this.alertCtrl.create({
//   //           header: 'Error',
//   //           message: err.error?.error || 'Something went wrong',
//   //           buttons: ['OK']
//   //         });
//   //         await alert.present();
//   //       }
//   //     });
//   //   }
//   // }

//   // resetForm() {
//   //   this.product = {
//   //     title: '',
//   //     body_html: '',
//   //     price: '',
//   //     sku: ''
//   //   };
//   //   this.isEdit = false;
//   //   this.editIndex = null;
//   // }
// }





// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
// import { RouterModule } from '@angular/router';

// import { HeaderComponent } from '../components/header/header.component';
// import { FooterComponent } from '../components/footer/footer.component';
// import { ApiService } from '../services/api.service';

// // Slider Components
// import { SliderTvComponent } from '../components/slider-tv/slider-tv.component';
// import { SliderSoundbarComponent } from '../components/slider-soundbar/slider-soundbar.component';
// import { SliderHeadphonesComponent } from '../components/slider-headphones/slider-headphones.component';
// import { SliderSpeakersComponent } from '../components/slider-speakers/slider-speakers.component';
// import { SliderCamerasComponent } from '../components/slider-cameras/slider-cameras.component';
// import { SliderMoreFromSonyComponent } from '../components/slider-more-from-sony/slider-more-from-sony.component';
// import { SliderComponent } from '../components/slider/slider.component';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   templateUrl: './home.page.html',
//   styleUrls: ['./home.page.scss'],
//   imports: [
//     CommonModule,
//     IonicModule,
//     RouterModule,
//     HeaderComponent,
//     FooterComponent,
//     SliderComponent,
//     SliderTvComponent,
//     SliderSoundbarComponent,
//     SliderHeadphonesComponent,
//     SliderSpeakersComponent,
//     SliderCamerasComponent,
//     SliderMoreFromSonyComponent,
//   ],
// })
// export class HomePage implements OnInit {
//   isLoading = true;
//   collectionsMap: { [key: string]: any[] } = {};

//   constructor(private apiService: ApiService) {}

//   ngOnInit() {
//     this.loadTargetedCollections();
//   }

//   loadTargetedCollections() {
//     this.apiService.getAllCollections().subscribe({
//       next: (collections) => {
//         const targetHandles = ['television', 'headphones', 'soundbar', 'speakers', 'cameras'];

//         targetHandles.forEach((key) => {
//           const match = collections.find((col: any) =>
//             col.handle.toLowerCase().includes(key) || col.title.toLowerCase().includes(key)
//           );

//           if (match) {
//             const activeProducts = match.products.slice(0, 4).map((product: any) => ({
//               data: {
//                 image: product.image || 'assets/placeholder-product.jpg',
//                 title: product.title,
//                 salePrice: product.salePrice || '0',
//                 comparePrice: product.comparePrice || '',
//                 moneyPrice: product.moneyPrice || '',
//                 rewardsNote: product.rewardsNote || '',
//                 discountNote:
//                   product.comparePrice && Number(product.comparePrice) > Number(product.salePrice)
//                     ? 'Get additional 10% discount at checkout'
//                     : '',
//               }
//             }));

//             this.collectionsMap[key] = activeProducts;
//           } else {
//             this.collectionsMap[key] = [];
//           }
//         });

//         this.isLoading = false;
//       },
//       error: (err) => {
//         console.error('Failed to load collections:', err);
//         this.isLoading = false;
//       },
//     });
//   }
// }



// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
// import { RouterModule } from '@angular/router';

// import { HeaderComponent } from '../components/header/header.component';
// import { FooterComponent } from '../components/footer/footer.component';
// import { ApiService } from '../services/api.service';

// // Slider Components
// import { SliderTvComponent } from '../components/slider-tv/slider-tv.component';
// import { SliderSoundbarComponent } from '../components/slider-soundbar/slider-soundbar.component';
// import { SliderHeadphonesComponent } from '../components/slider-headphones/slider-headphones.component';
// import { SliderSpeakersComponent } from '../components/slider-speakers/slider-speakers.component';
// import { SliderCamerasComponent } from '../components/slider-cameras/slider-cameras.component';
// import { SliderMoreFromSonyComponent } from '../components/slider-more-from-sony/slider-more-from-sony.component';
// import { SliderComponent } from '../components/slider/slider.component';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   templateUrl: './home.page.html',
//   styleUrls: ['./home.page.scss'],
//   imports: [
//     CommonModule,
//     IonicModule,
//     RouterModule,
//     HeaderComponent,
//     FooterComponent,
//     SliderComponent,
//     SliderTvComponent,
//     SliderSoundbarComponent,
//     SliderHeadphonesComponent,
//     SliderSpeakersComponent,
//     SliderCamerasComponent,
//     SliderMoreFromSonyComponent,
//   ],
// })
// export class HomePage implements OnInit {
//   isLoading = true;
//   collectionsMap: { [key: string]: any[] } = {};

//   constructor(private apiService: ApiService) {}

//   ngOnInit() {
//     this.loadAllCollections();
//   }

//   async loadAllCollections() {
//   let allCollections: any[] = [];
//   let cursor: string | undefined = undefined;
//   let hasNextPage = true;

//   while (hasNextPage) {
//     try {
//       const response: {
//         collections: any[];
//         pageInfo: { hasNextPage: boolean; endCursor: string };
//         lastCursor: string;
//       } = await this.apiService.getAllCollections(cursor).toPromise();

//       allCollections = [...allCollections, ...response.collections];
//       hasNextPage = response.pageInfo.hasNextPage;
//       cursor = response.lastCursor;
//     } catch (err) {
//       console.error('Failed to fetch collections:', err);
//       this.isLoading = false;
//       return;
//     }
//   }

//   this.filterTargetCollections(allCollections);
// }

//   filterTargetCollections(collections: any[]) {
//     const targetHandles = ['television', 'headphones', 'soundbar', 'speakers', 'cameras'];

//     targetHandles.forEach((key) => {
//       const match = collections.find((col: any) =>
//         col.handle.toLowerCase().includes(key) || col.title.toLowerCase().includes(key)
//       );

//       if (match) {
//         const activeProducts = match.products.slice(0, 4).map((product: any) => ({
//           data: {
//             image: product.images?.[0]?.url || 'assets/placeholder-product.jpg',
//             title: product.title,
//             salePrice: product.variants?.[0]?.price?.amount || '0',
//             comparePrice: '', // Adjust if needed
//             moneyPrice: '', // Optional
//             rewardsNote: '',
//             discountNote:
//               '' // You can compute this based on comparePrice if available
//           }
//         }));

//         this.collectionsMap[key] = activeProducts;
//       } else {
//         this.collectionsMap[key] = [];
//       }
//     });

//     this.isLoading = false;
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
// import { RouterModule } from '@angular/router';

// import { HeaderComponent } from '../components/header/header.component';
// import { FooterComponent } from '../components/footer/footer.component';
// import { ApiService } from '../services/api.service';

// // Slider Components
// import { SliderTvComponent } from '../components/slider-tv/slider-tv.component';
// import { SliderSoundbarComponent } from '../components/slider-soundbar/slider-soundbar.component';
// import { SliderHeadphonesComponent } from '../components/slider-headphones/slider-headphones.component';
// import { SliderSpeakersComponent } from '../components/slider-speakers/slider-speakers.component';
// import { SliderCamerasComponent } from '../components/slider-cameras/slider-cameras.component';
// import { SliderMoreFromSonyComponent } from '../components/slider-more-from-sony/slider-more-from-sony.component';
// import { SliderComponent } from '../components/slider/slider.component';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   templateUrl: './home.page.html',
//   styleUrls: ['./home.page.scss'],
//   imports: [
//     CommonModule,
//     IonicModule,
//     RouterModule,
//     HeaderComponent,
//     FooterComponent,
//     SliderComponent,
//     SliderTvComponent,
//     SliderSoundbarComponent,
//     SliderHeadphonesComponent,
//     SliderSpeakersComponent,
//     SliderCamerasComponent,
//     SliderMoreFromSonyComponent,
//   ],
// })
// export class HomePage implements OnInit {
//   isLoading = true;
//   collectionsMap: { [key: string]: any[] } = {};

//   constructor(private apiService: ApiService) {}

//   ngOnInit() {
//     this.loadAllCollections();
//   }

//   async loadAllCollections() {
//     let allCollections: any[] = [];
//     let cursor: string | undefined = undefined;
//     let hasNextPage = true;

//     while (hasNextPage) {
//       try {
//         const response: {
//           collections: any[];
//           pageInfo: { hasNextPage: boolean; endCursor: string };
//           lastCursor: string;
//         } = await this.apiService.getAllCollections(cursor).toPromise();

//         allCollections = [...allCollections, ...response.collections];
//         hasNextPage = response.pageInfo.hasNextPage;
//         cursor = response.lastCursor;
//       } catch (err) {
//         console.error('Failed to fetch collections:', err);
//         this.isLoading = false;
//         return;
//       }
//     }

//     this.filterTargetCollections(allCollections);
//   }

//   filterTargetCollections(collections: any[]) {
//     const targetHandles = ['television', 'headphones', 'soundbar', 'speakers', 'interchangeable-lens-camera'];

//     targetHandles.forEach((key) => {
//       const match = collections.find((col: any) =>
//         col.handle.toLowerCase().includes(key) || col.title.toLowerCase().includes(key)
//       );

//       if (match) {
//         const activeProducts = match.products.slice(0, 4).map((product: any) => {
//           const salePrice = parseFloat(product.salePrice || '0');
//           const comparePrice = parseFloat(product.comparePrice || '0');
//           let discountNote = '';

//           if (comparePrice > salePrice && comparePrice > 0) {
//             const discount = Math.round(((comparePrice - salePrice) / comparePrice) * 100);
//             discountNote = `${discount}% OFF`;
//           }

//           return {
//             data: {
//               image: product.image || 'assets/placeholder-product.jpg',
//               title: product.title,
//               salePrice: salePrice.toFixed(2),
//               comparePrice: comparePrice > 0 ? comparePrice.toFixed(2) : '',
//               moneyPrice: product.moneyPrice || '',
//               rewardsNote: '',
//               discountNote: discountNote,
//             }
//           };
//         });

//         this.collectionsMap[key] = activeProducts;
//       } else {
//         this.collectionsMap[key] = [];
//       }
//     });

//     this.isLoading = false;
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ApiService } from '../services/api.service';

// Slider Components
import { SliderTvComponent } from '../components/slider-tv/slider-tv.component';
import { SliderSoundbarComponent } from '../components/slider-soundbar/slider-soundbar.component';
import { SliderHeadphonesComponent } from '../components/slider-headphones/slider-headphones.component';
import { SliderSpeakersComponent } from '../components/slider-speakers/slider-speakers.component';
import { SliderCamerasComponent } from '../components/slider-cameras/slider-cameras.component';
import { SliderMoreFromSonyComponent } from '../components/slider-more-from-sony/slider-more-from-sony.component';
import { SliderComponent } from '../components/slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SliderTvComponent,
    SliderSoundbarComponent,
    SliderHeadphonesComponent,
    SliderSpeakersComponent,
    SliderCamerasComponent,
    SliderMoreFromSonyComponent,
  ],
})
export class HomePage implements OnInit {
  isLoading = true;
  collectionsMap: { [key: string]: any[] } = {};

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadAllCollections();
  }

  async loadAllCollections() {
    let allCollections: any[] = [];
    let cursor: string | undefined = undefined;
    let hasNextPage = true;

    while (hasNextPage) {
      try {
        const response: {
          collections: any[];
          pageInfo: { hasNextPage: boolean; endCursor: string };
          lastCursor: string;
        } = await this.apiService.getAllCollections(cursor).toPromise();

        allCollections = [...allCollections, ...response.collections];
        hasNextPage = response.pageInfo.hasNextPage;
        cursor = response.lastCursor;
      } catch (err) {
        console.error('Failed to fetch collections:', err);
        this.isLoading = false;
        return;
      }
    }

    this.filterTargetCollections(allCollections);
  }

  filterTargetCollections(collections: any[]) {
    const targetHandles = ['television', 'headphones', 'soundbar', 'speakers', 'interchangeable-lens-camera'];

    targetHandles.forEach((key) => {
      const match = collections.find((col: any) =>
        col.handle.toLowerCase().includes(key) || col.title.toLowerCase().includes(key)
      );

      if (match) {
        const activeProducts = match.products.slice(0, 4).map((product: any) => {
          const rawSalePrice = product.salePrice ? parseFloat(product.salePrice) : 0;
          const rawComparePrice = product.comparePrice ? parseFloat(product.comparePrice) : 0;

          const formattedSalePrice = rawSalePrice % 1 === 0 ? rawSalePrice.toFixed(0) : rawSalePrice.toFixed(2);
          const formattedComparePrice = rawComparePrice % 1 === 0 ? rawComparePrice.toFixed(0) : rawComparePrice.toFixed(2);

          // Calculate discount
          let discountNote = '';
          if (rawComparePrice > rawSalePrice && rawComparePrice > 0) {
            const discount = Math.round(((rawComparePrice - rawSalePrice) / rawComparePrice) * 100);
            discountNote = `${discount}% OFF`;
          }

          // Calculate moneyPrice (5% reward from price before tax)
          const moneyPriceCalc = rawSalePrice > 0 ? (rawSalePrice / 1.05) * 0.05 : 0;
          const formattedMoneyPrice = Math.floor(moneyPriceCalc).toString();

          // Rewards note logic
          // const rewardsNote = moneyPriceCalc > 0 ? `Earn ₹${formattedMoneyPrice} in rewards` : '';

          return {
            data: {
              image: product.image || 'assets/placeholder-product.jpg',
              title: product.title || 'Product Name',
              salePrice: formattedSalePrice,
              comparePrice: rawComparePrice > 0 ? formattedComparePrice : '',
              moneyPrice: formattedMoneyPrice,
              // rewardsNote: rewardsNote,
              discountNote: discountNote,
            }
          };
        });

        this.collectionsMap[key] = activeProducts;
      } else {
        this.collectionsMap[key] = [];
      }
    });

    this.isLoading = false;
  }
}
