import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = WelcomePage;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, keyboard: Keyboard) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      keyboard.disableScroll(true);
      keyboard.hideKeyboardAccessoryBar(true);
    });
  }
}
