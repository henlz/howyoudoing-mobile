import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {BackandService} from '../services/backandService';
import {CantadaService} from '../services/cantada.service';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {SettingsPage} from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    SettingsPage
  ],
  providers: [
    BackandService,
    CantadaService
  ]
})
export class AppModule {
}
