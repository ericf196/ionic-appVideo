import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {StreamingMedia, StreamingVideoOptions} from "@ionic-native/streaming-media";
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';
import {ServiceVideoProvider} from "../../providers/service-video/service-video";
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {Video, db} from '../../database';
import Dexie from 'dexie';
import {TransactionAppDB} from '../../database'

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

  constructor(private youtube: YoutubeVideoPlayer, private streamingMedia: StreamingMedia, private serviceVideoProvider: ServiceVideoProvider, private screenOrientation: ScreenOrientation, private transactionAppDB: TransactionAppDB) {
var p=this.transactionAppDB;
    this.transactionAppDB.table('videos').count().then(function (count) {
      if (!count) {
        p.table('videos').add({
          title: 'Prueba Title',
          subTitle: 'Prueba Sub Title',
          image: 'url/image',
          idVideo: 'IdVideo',
          type: 'Type',
          urlLocal: 'url/local',
          urlStorage: 'url/storage',
          favorite: false
        });
        p.table('videos').add({
          title: 'Prueba Title1',
          subTitle: 'Prueba Sub Title1',
          image: 'url/image1',
          idVideo: 'IdVideo1',
          type: 'Type1',
          urlLocal: 'url/local1',
          urlStorage: 'url/storage1',
          favorite: false
        });
        p.table('videos').add({
          title: 'Prueba Title2',
          subTitle: 'Prueba Sub Title2',
          image: 'url/image2',
          idVideo: 'IdVideo2',
          type: 'Type2',
          urlLocal: 'url/local2',
          urlStorage: 'url/storage2',
          favorite: false
        });
      }
    });
  }

  ionViewDidLoad() {
    /*this.tabBarElement.style.display = 'none';
     setTimeout(() => {
     this.splash = false;
     this.tabBarElement.style.display = 'flex';
     }, 4000);*/
    console.log(this.transactionAppDB);
    /*this.transactionAppDB.table("videos")*/
    /*Dexie.exists("DataBase").then(function (exists) {
     if (exists) {
     console.log("Database exist");
     } else {
     console.log("Database Don't exist");
     }
     }).catch(function (error) {
     console.error("Oops, an error occurred when trying to check database existance");
     });*/


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
