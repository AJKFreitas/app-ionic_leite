import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AnalisePage } from '../pages/analise/analise';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrincipalPage } from "../pages/principal/principal";
import { ParametrosPage } from "../pages/parametros/parametros";
import { ConversaPage } from "../pages/conversa/conversa";

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    ParametrosPage,
    ConversaPage,
    HomePage,
    AnalisePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    ParametrosPage,
    ConversaPage,
    HomePage,
    AnalisePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
