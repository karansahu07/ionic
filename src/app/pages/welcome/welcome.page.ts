import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { SliderTvComponent } from '../../components/slider-tv/slider-tv.component';

import { register } from 'swiper/element/bundle';
import { SliderSoundbarComponent } from '../../components/slider-soundbar/slider-soundbar.component';
import { SliderHeadphonesComponent } from '../../components/slider-headphones/slider-headphones.component';
import { SliderSpeakersComponent } from '../../components/slider-speakers/slider-speakers.component';
import { SliderCamerasComponent } from '../../components/slider-cameras/slider-cameras.component';
import { SliderMoreFromSonyComponent } from '../../components/slider-more-from-sony/slider-more-from-sony.component';

register();

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  imports: [
    CommonModule,
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
export class WelcomePage implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }

}
