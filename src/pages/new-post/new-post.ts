import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {
  attachments: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public imagePicker: ImagePicker,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openPhotoPicker() {
    this.imagePicker.getPictures({})
      .then((results) => {
        this.attachments = results;
      }, (err) => { });
  }

  submit() {
    let toast = this.toastCtrl.create({
      message: 'Post has been added successfully',
      duration: 3000
    });
    toast.present();
    this.dismiss();
  }

}
