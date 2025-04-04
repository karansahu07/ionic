import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class WelcomePage implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // Initialization logic here if needed
  }

}
