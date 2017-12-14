import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {StreamingMedia, StreamingVideoOptions} from "@ionic-native/streaming-media";
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';
import {ServiceVideoProvider} from "../../providers/service-video/service-video";
import { ScreenOrientation } from '@ionic-native/screen-orientation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  splash = true;
  tabBarElement: any;
  private data: any;
  private videosCirculares: any;
  private videosLineales: any;

  constructor(private youtube: YoutubeVideoPlayer, private streamingMedia: StreamingMedia, private serviceVideoProvider: ServiceVideoProvider,private screenOrientation: ScreenOrientation) {

  }
  test(){

  }


  ionViewDidLoad() {
    /*this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);*/
  }

  startVideo(video: any) {
    console.log("" + video);
    this.youtube.openVideo("" + video);
  }

  startVideo1() {

    let options: StreamingVideoOptions = {
      successCallback: () => {
        console.log('Video played')
      },
      errorCallback: () => {
        console.log('Error streaming')
      },
      orientation: 'landscape'
    }

    this.streamingMedia.playVideo('file:///storage/emulated/0/Android/data/io.ionic.starter/files/big_buck_bunny_240p_30mb.mp4', options);
  }

}
