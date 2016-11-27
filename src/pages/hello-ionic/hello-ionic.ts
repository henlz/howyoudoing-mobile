import {Component} from '@angular/core';

import {SocialSharing} from 'ionic-native';

import {CantadaService} from '../../services/cantada.service';

@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  cantada: string;
  cantadasList: Array<{id: number, description: string}>;

  constructor(private cantadaSevice: CantadaService) {
    this.retrieveCantadas();
  }

  retrieveCantadas(){
    this.cantadaSevice.getList().subscribe(
      data => {
        this.cantadasList = data;
      },
      error => {
        console.error(error);
        this.cantadasList = [];
      }
    );
  }

  shareCantada(cantada: string) {
    SocialSharing.share(cantada.toString(), "How you doing?", null, null)
  }

  getCantada() {
    let randomIndex = Math.floor(Math.random() * (this.cantadasList.length)) + 0;
    this.cantada = this.cantadasList[randomIndex].description;
  }
}
