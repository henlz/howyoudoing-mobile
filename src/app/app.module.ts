import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {SettingsPage} from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    SettingsPage
  ],
  providers: []
})
export class AppModule {
}
