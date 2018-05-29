import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ConnectionsPage } from '../connections/connections';
import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';

@IonicPage()
@Component({
  selector: 'page-network',
  templateUrl: 'network.html',
})
export class NetworkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkPage');
  }

  openConnections() {
    let modal = this.modalCtrl.create(ConnectionsPage);
    modal.present();
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage, {})
      .then(() => {
        console.log('Welcome to profile');
      })
  }

  goToSearch() {
    this.navCtrl.push(SearchPage, {})
      .then(() => {
        console.log('Welcome to search');
      })
  }

}
