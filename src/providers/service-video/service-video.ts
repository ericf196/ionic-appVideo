import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

/*
  Generated class for the ServiceVideoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceVideoProvider {

  constructor(public http: HttpClient) {

  }

  getVideos(): Observable<any> {
    console.log('getVideos');
    return this.http.get('assets/test.json')
  }

}
