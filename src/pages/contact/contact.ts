import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Device } from '@ionic-native/device';
import {ServiceVideoProvider} from "../../providers/service-video/service-video";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private data: any;
  private videosCirculares: any;
  private videosLineales: any;

  constructor(public navCtrl: NavController, private youtube: YoutubeVideoPlayer, private device: Device, private serviceVideoProvider: ServiceVideoProvider) {

    this.serviceVideoProvider.getVideos().subscribe(
      (res) => {
        this.data = res;
        this.videosCirculares = this.data.video_circulares;
        this.videosLineales = this.data.video_lineales;
        /*console.log(this.videosLineales[0].id_video);*/
      }
    );
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

