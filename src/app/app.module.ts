import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";

import{StreamingMedia} from '@ionic-native/streaming-media';
import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";
import { ServiceVideoProvider } from '../providers/service-video/service-video';

import { Device } from '@ionic-native/device';
import { ScreenOrientation } from '@ionic-native/screen-orientation'
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { ServiceDbProvider } from '../providers/service-db/service-db';
import {SQLite} from "@ionic-native/sqlite";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreamingMedia,
    YoutubeVideoPlayer,
    ServiceVideoProvider,
    Device,
    ScreenOrientation,
    FileTransfer,
    File,
    ServiceDbProvider,
    SQLite

  ]
})
export class AppModule {}
