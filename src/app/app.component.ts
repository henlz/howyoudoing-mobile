import {Component, ViewChild} from '@angular/core';

import {Platform, MenuController, Nav} from 'ionic-angular';

import {StatusBar} from 'ionic-native';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {SettingsPage} from '../pages/settings/settings';

import {BackandService} from '../services/backandService';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public menu: MenuController,
              public backandService: BackandService) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      backandService.setIsMobile(platform.is('mobile'));
      backandService.setAppName('howyoudoin');
      backandService.setSignUpToken('5f681a82-92a2-4fed-9b09-62c941c56178');
      backandService.setAnonymousToken('d67f20ea-8dd8-4e18-b1b8-e969d1544a40');
    });

    // set our app's pages
    this.pages = [
      {title: 'Cantada', component: HelloIonicPage},
      {title: 'Settings', component: SettingsPage}
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
