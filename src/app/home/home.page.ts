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




import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SliderComponent } from '../components/slider/slider.component';
import { SliderTvComponent } from '../components/slider-tv/slider-tv.component';
import { SliderSoundbarComponent } from '../components/slider-soundbar/slider-soundbar.component';
import { SliderHeadphonesComponent } from '../components/slider-headphones/slider-headphones.component';
import { SliderSpeakersComponent } from '../components/slider-speakers/slider-speakers.component';
import { SliderCamerasComponent } from '../components/slider-cameras/slider-cameras.component';
import { SliderMoreFromSonyComponent } from '../components/slider-more-from-sony/slider-more-from-sony.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SliderTvComponent,
    SliderSoundbarComponent,
    SliderHeadphonesComponent,
    SliderSpeakersComponent,
    SliderCamerasComponent,
    SliderMoreFromSonyComponent,
  ]
})
export class HomePage implements OnInit {
  products: any[] = [];
  collectionsMap: { [key: string]: any[] } = {};
  isLoading = true;

  showForm = false;
  isEdit = false;
  editIndex: number | null = null;

  product = {
    title: '',
    body_html: '',
    price: '',
    sku: ''
  };

  constructor(private apiService: ApiService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.loadProducts();
    this.loadAllCollections();
  }

  loadProducts() {
    this.apiService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log('Shopify products:', data);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  loadAllCollections() {
    this.apiService.getAllCollections().subscribe({
      next: (collections) => {
        const collectionNames = ['tv', 'headphones', 'soundbar', 'speakers', 'cameras', 'more from sony'];

        collectionNames.forEach(name => {
          const matched = collections.find(
            (            c: { title: string; handle: string; }) =>
              c.title?.toLowerCase().includes(name) ||
              c.handle?.toLowerCase().includes(name)
          );

          if (matched && matched.products?.length) {
            const activeProducts = matched.products
              .filter((p: any) => p.status?.toLowerCase() === 'active')
              .slice(0, 4);

            this.collectionsMap[name] = activeProducts;
          } else {
            this.collectionsMap[name] = [];
          }
        });

        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching collections', err);
        this.isLoading = false;
      }
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;

    if (!this.showForm) {
      this.resetForm();
    }
  }

  editProduct(product: any, index: number) {
    this.product = {
      title: product.title,
      body_html: product.body_html || '',
      price: product.variants?.[0]?.price || '',
      sku: product.variants?.[0]?.sku || ''
    };
    this.editIndex = index;
    this.isEdit = true;
    this.showForm = true;
  }

  async submitProduct() {
    const productPayload = {
      title: this.product.title,
      body_html: this.product.body_html,
      vendor: 'MyIonicApp',
      product_type: 'Mobile',
      variants: [
        {
          option1: 'Default',
          price: this.product.price,
          sku: this.product.sku
        }
      ]
    };

    if (this.isEdit && this.editIndex !== null) {
      const productId = this.products[this.editIndex].id;

      this.apiService.updateProduct(productId, productPayload).subscribe({
        next: async () => {
          const alert = await this.alertCtrl.create({
            header: 'Updated',
            message: 'Product updated successfully!',
            buttons: ['OK']
          });
          await alert.present();
          this.loadProducts();
          this.resetForm();
          this.showForm = false;
        },
        error: async (err) => {
          const alert = await this.alertCtrl.create({
            header: 'Error',
            message: err.error?.error || 'Failed to update product',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    } else {
      this.apiService.addProduct(productPayload).subscribe({
        next: async () => {
          const alert = await this.alertCtrl.create({
            header: 'Success',
            message: 'Product added successfully!',
            buttons: ['OK']
          });
          await alert.present();
          this.loadProducts();
          this.resetForm();
          this.showForm = false;
        },
        error: async (err) => {
          const alert = await this.alertCtrl.create({
            header: 'Error',
            message: err.error?.error || 'Something went wrong',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    }
  }

  resetForm() {
    this.product = {
      title: '',
      body_html: '',
      price: '',
      sku: ''
    };
    this.isEdit = false;
    this.editIndex = null;
  }
}
