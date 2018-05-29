import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { PostPopoverComponent } from '../../components/post-popover/post-popover';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  postId: number;
  postType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');

    this.postId = this.navParams.get('postId');
    this.postType = this.postId % 2 == 1 ? 'url' : 'image';
  }

  presentPopover(event) {
    let popover = this.popoverCtrl.create(PostPopoverComponent, {}, {
      cssClass: 'my-popover'
    });
    popover.present({
      ev: event
    });
  }

}
