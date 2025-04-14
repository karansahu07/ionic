import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular'; 


@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [IonicModule,
    CommonModule,
    FormsModule,
  RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  searchText: string = '';

  constructor() { }

  ngOnInit() {}

}