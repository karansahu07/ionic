import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
   
    if (this.platform.is('capacitor')) {
      await StatusBar.setBackgroundColor({ color: '#ffffff' });
 
      // await StatusBar.setStyle({ style: Style.Dark }); // For light text
      // await StatusBar.setStyle({ style: Style.Custom, color: '#333333' });
 
      await StatusBar.setStyle({ style: Style.Light });
 
      // / Set the status bar text color based on the platform
      // if (this.platform.is('ios')) {
      //   // On iOS, set the style to light content (dark text)
      //   await StatusBar.setStyle({ style: Style.Dark });
      // } else {
      //   // On Android, the text color will automatically adjust based on the background color
      // }
    }
  }
}
