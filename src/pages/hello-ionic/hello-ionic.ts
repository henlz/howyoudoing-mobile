import {Component} from '@angular/core';
import {Http} from "@angular/http";

import {SocialSharing} from 'ionic-native';

@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  cantada: string;
  cantadasList: Array<string>;

  cantadasUrl: string = 'https://raw.githubusercontent.com/leportella/howyoudoin/master/cantadas.json';

  constructor(private http: Http) {
    http.get(this.cantadasUrl)
      .forEach(res => this.cantadasList = JSON.parse(res.text()));
  }

  shareCantada(cantada: string) {
    SocialSharing.share(cantada.toString(), "How you doing?"/*Subject*/, null/*File*/, null)
  }

  getCantada() {
    let randomIndex = Math.floor(Math.random() * (this.cantadasList.length)) + 0;
    this.cantada = this.cantadasList[randomIndex];
  }
}
