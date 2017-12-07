import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StreamingMedia, StreamingVideoOptions} from "@ionic-native/streaming-media";
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';
import {ServiceVideoProvider} from "../../providers/service-video/service-video";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  tabBarElement: any;
  private data: any;
  private videosCirculares: any;
  private videosLineales: any;

  constructor(private youtube: YoutubeVideoPlayer, private streamingMedia: StreamingMedia, private serviceVideoProvider: ServiceVideoProvider) {
    this.tabBarElement = document.querySelector('.tabbar');

    this.serviceVideoProvider.getVideos().subscribe(
      (res) => {
        this.data = res;
        this.videosCirculares = this.data.video_circulares;
        this.videosLineales = this.data.video_lineales;
        console.log(this.data);
      }
    );
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  startVideo(video: any) {
    console.log("" + video);
    this.youtube.openVideo("" + video);
  }

  /*startVideo() {

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
  }*/

}
