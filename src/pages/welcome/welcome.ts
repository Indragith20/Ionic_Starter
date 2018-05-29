import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  changeBg: boolean = false;
  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goToLogin() {
    let modal = this.modalCtrl.create(LoginPage, {}, {cssClass: 'modal-gradient'});
    modal.present();
  }

  goToSignup() {
    let modal = this.modalCtrl.create(SignupPage, {}, {cssClass: 'modal-gradient'});
    modal.present();
  }

  slideChanged() {
    this.changeBg = this.slides.getActiveIndex() > 0;
  }

}
