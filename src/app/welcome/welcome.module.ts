import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';
// import { SwiperModule } from 'swiper/angular'
// import { SharedModule } from '../../shared/shared.module';

// import { WelcomePage } from './welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule,
    // SwiperModule
  ],
  declarations: [],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class WelcomePageModule {}
