import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Device } from '@ionic-native/device';
import {ServiceVideoProvider} from "../../providers/service-video/service-video";

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {StreamingMedia, StreamingVideoOptions} from "@ionic-native/streaming-media";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  private data: any;
  private test: any;
  private downloadv: any;
  private videosCirculares: any;
  private videosLineales: any;
  private fileTransfer: FileTransferObject = this.transfer.create();

  constructor(private youtube: YoutubeVideoPlayer, private streamingMedia: StreamingMedia,private screenOrientation: ScreenOrientation, public navCtrl: NavController, private device: Device, private serviceVideoProvider: ServiceVideoProvider, private transfer: FileTransfer, private file: File) {

    this.serviceVideoProvider.getVideos().subscribe(
      (res) => {
        this.data = res;
        this.videosCirculares = this.data.video_circulares;
        this.videosLineales = this.data.video_lineales;
        /*console.log(this.videosLineales[0].id_video);*/
        /*const fileTransfer: FileTransferObject = this.transfer.create();*/
      }
    );
  }


  /*startVideo(){
    this.youtube.openVideo('azxDhcKYku4');
  }*/

  uid(){
    console.log('Device UUID is: ' + this.device.uuid);
  }

  serial(){
    console.log('Device Serial is: ' + this.device.serial);
    window['plugins'].imei.get(
      function(imei) {
        console.log("got imei: " + imei);
      },
      function() {
        console.log("error loading imei");
      }
    );
  }

  download() {
    const url = 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4';
    this.fileTransfer.download(url, this.file.externalDataDirectory + 'big_buck_bunny_720p_1mb.mp4').then((entry) => {
      /*console.log('download complete: ' + entry.toURL());*/

      this.downloadv="" + this.file.externalDataDirectory;
    }, (error) => {
      this.downloadv=error;
    });
  }
  mydir() {
    this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => this.test='Directory exists').catch(err => this.test='Directory doesnt exist');
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

