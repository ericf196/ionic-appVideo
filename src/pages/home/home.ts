import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StreamingMedia, StreamingVideoOptions} from "@ionic-native/streaming-media";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  tabBarElement: any;

  constructor(private streamingMedia: StreamingMedia) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  startVideo() {

    let options: StreamingVideoOptions = {
      successCallback: () => {
        console.log('Video played')
      },
      errorCallback: () => {
        console.log('Error streaming')
      },
      orientation: 'landscape'
    }

    this.streamingMedia.playVideo('http://www.sample-videos.com/video/mp4/480/big_buck_bunny_480p_1mb.mp4', options);
  }

}
