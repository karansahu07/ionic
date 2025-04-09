import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class LoginPage implements OnInit {

  email: string = '';
  newEmail: string = '';
  isFocused: boolean = false;
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  createAccount() {
    console.log('New account email:', this.newEmail);
    this.closeModal();
  }

  constructor(private modalController: ModalController) {}


  ngOnInit() {
  }

}
