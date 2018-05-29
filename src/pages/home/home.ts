import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController} from 'ionic-angular';

import { PostPopoverComponent } from '../../components/post-popover/post-popover';
import { PostPage } from '../post/post';
import { NewPostPage } from '../new-post/new-post';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  presentPopover(event) {
    event.stopPropagation();

    let popover = this.popoverCtrl.create(PostPopoverComponent, {}, {
      cssClass: 'my-popover'
    });
    popover.present({
      ev: event
    });
  }

  goToPost(postId) {
    this.navCtrl.push(PostPage, {
      postId: postId
    })
      .then(() => {
        console.log('Welcome to post:', postId);
      });
  }

  newPost() {
    let modal = this.modalCtrl.create(NewPostPage);
    modal.present();
  }

  goToSearch() {
    this.navCtrl.push(SearchPage, {})
      .then(() => {
        console.log('Welcome to search');
      })
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage, {})
      .then(() => {
        console.log('Welcome to profile');
      })
  }
}
