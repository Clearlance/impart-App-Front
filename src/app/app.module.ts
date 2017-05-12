import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { AppUser } from '../providers/app-user';
import { Posts } from '../providers/posts';

import { Landing } from '../pages/landing/landing';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';

import { HomeMap } from '../pages/home-map/home-map';
import { Map } from '../pages/map/map';
import { List } from '../pages/list/list';
import { PostPage } from '../pages/post-page/post-page';

import { GoogleMaps } from '../providers/google-maps';
import { Connectivity } from '../providers/connectivity';


let injections: any[] = [
    MyApp,
    Landing,
    Login,
    Register,
    HomeMap,
    Map,
    List,
    PostPage
  ]

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    AppUser,
    Posts,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, GoogleMaps, Connectivity
  ]
})
export class AppModule {}
