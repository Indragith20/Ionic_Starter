import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';

@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobsPage');
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
