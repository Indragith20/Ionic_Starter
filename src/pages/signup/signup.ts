import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  goToHome() {
    this.dismiss();
    this.app.getRootNav().setRoot(TabsPage)
      .then(() => {
        console.log('Welcome to your News Feed!');
      })
  }

  goToLogin() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(LoginPage, {}, {cssClass: 'modal-gradient'});
    modal.present();
  }

}
