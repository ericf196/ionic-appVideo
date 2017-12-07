import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private youtube: YoutubeVideoPlayer, private device: Device) {
  }

  startVideo(){
    this.youtube.openVideo('azxDhcKYku4');
  }

  uid(){
    console.log('Device UUID is: ' + this.device.uuid);
  }

  serial(){
    console.log('Device Serial is: ' + this.device.serial);
  }
}

