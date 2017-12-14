import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {SQLite} from "@ionic-native/sqlite";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public sqlite: SQLite) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.createDatabase();

    });
  }
 // muli regular

  private createDatabase(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // The location field is required
    })
      .then((db) => {
        console.log(db);
      })
      .catch(error =>{
        console.error(error);
      });
  }

}
