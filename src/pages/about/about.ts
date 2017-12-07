import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ServiceVideoProvider} from "../../providers/service-video/service-video";
import {StreamingMedia, StreamingVideoOptions} from "@ionic-native/streaming-media";
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private data: any;
  private videosCirculares: any;
  private videosLineales: any;


  constructor(public navCtrl: NavController, private youtube: YoutubeVideoPlayer, private serviceVideoProvider: ServiceVideoProvider, private streamingMedia: StreamingMedia) {
    this.serviceVideoProvider.getVideos().subscribe(
      (res) => {
        this.data = res;
        this.videosCirculares = this.data.video_circulares;
        this.videosLineales = this.data.video_lineales;
        console.log(this.data);
      }
    );
  }

  startVideo(video: any) {
    console.log("" + video);
    this.youtube.openVideo("" + video);
  }


  /*startVideo(video: any) {
   let options: StreamingVideoOptions = {
   successCallback: () => {
   console.log('Video played')
   },
   errorCallback: () => {
   console.log('Error streaming')
   },
   orientation: 'landscape'
   }

   this.streamingMedia.playVideo(video, options);
   }*/

}
