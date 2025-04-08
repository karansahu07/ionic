import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { register } from 'swiper/element/bundle';

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
  ]
})
export class WelcomePage implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // Initialization logic here if needed
  }

}
