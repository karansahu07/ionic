import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular'; 


@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [IonicModule,
    CommonModule,
  RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
