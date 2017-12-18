import Dexie from 'dexie';

export class TransactionAppDB extends Dexie {
  public videos: Dexie.Table<IVideo, number>;

  constructor() {
    super("DataBase");
    this.version(1).stores({
      videos: '++id, title, subTitle, image , idVideo, type, urlLocal, urlStorage, favorite'
    });

    /*Dexie.exists("DataBase").then(function (exists) {
     if (exists) {
     console.log("Database exist");
     } else {
     console.log("Database Don't exist");

     }
     }).catch(function (error) {
     console.error("Oops, an error occurred when trying to check database existance");
     });*/
    /*console.log(this);*/

    /*console.log(this.table('videos').get(2));*/

    this.videos.mapToClass(Video);

  }
}

export interface IVideo {
  id?: number;
  title: string;
  subTitle: string;
  image: string;
  idVideo: string;
  type: string;
  urlLocal: string;
  urlStorage: string;
  favorite: boolean;
}


export class Video implements IVideo {

  id?: number;
  title: string;
  subTitle: string;
  image: string;
  idVideo: string;
  type: string;
  urlLocal: string;
  urlStorage: string;
  favorite: boolean;


  constructor(id?: number, title?: string, subTitle?: string, image?: string, idVideo?: string, type?: string, urlLocal?: string, urlStorage?: string, favorite?: boolean) {
    this.title = title;
    this.subTitle = subTitle;
    this.image = image;
    this.idVideo = idVideo;
    this.type = type;
    this.urlLocal = urlLocal;
    this.urlStorage = urlStorage;
    if (id)
      this.id = id;
    this.favorite = favorite;
  }

  save() {
    return db.videos.add(this);
  }

}

export let db = new TransactionAppDB();
