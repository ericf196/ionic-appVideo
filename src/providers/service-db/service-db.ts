import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class ServiceDbProvider {

  db: SQLiteObject = null;

  constructor(public http: HttpClient) {
  }

  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }


  create(video: any) {
    let sql = 'INSERT INTO videos(title, sub_title, image, id_video, type_t, favorite, local_storage) VALUES(?,?,?,?,?,?,?)';

    return this.db.executeSql(sql, [video.title, video.sub_title, video.image, video.id_video, video.type_t, video.favorite, video.local_storage]);
  }

  createTable() {
    let sql = 'CREATE TABLE IF NOT EXISTS videos(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, sub_title TEXT, image TEXT, id_video TEXT, type_t TEXT, favorite TEXT, local_storage TEXT)';
    return this.db.executeSql(sql, []);
  }


  delete(video: any) {
    let sql = 'DELETE FROM videos WHERE id=?';

    return this.db.executeSql(sql, [video.id]);
  }

  getAll(){
    let sql = 'SELECT * FROM videos';
    return this.db.executeSql(sql, [])
      .then(response => {
        let videos = [];
        for (let index = 0; index < response.rows.length; index++) {
          videos.push( response.rows.item(index) );
        }
        return Promise.resolve( videos );
      })
      .catch(error => Promise.reject(error));
  }

  update(video: any) {
    let sql = 'UPDATE videos SET title=?, sub_title=?, image=?, id_video=?, type_t=?, favorite=?, local_storage=? WHERE id=?';
    return this.db.executeSql(sql, [video.title, video.sub_title, video.image, video.id_video, video.type_t, video.favorite, video.local_storage]);
  }



}
