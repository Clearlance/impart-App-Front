import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NavController, Platform, App } from 'ionic-angular';
import { GoogleMaps } from '../../providers/google-maps';
// import { Locations } from '../../providers/locations';

import { Landing } from '../landing/landing';
import { PostPage } from '../post-page/post-page';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class Map {
  
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
  
  constructor(
    public navCtrl: NavController, 
    public maps: GoogleMaps, 
    public platform: Platform, 
    // public locations: Locations,
    private app:App
    ) {
}
  
  ionViewDidLoad() {
    
    this.platform.ready().then(() => {
      
      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
    
    }); 
  }
  
 logout(){
    //clear any cached data
    this.app.getRootNav().setRoot(Landing);
  }
  
  post() {
    this.navCtrl.push(PostPage)
  }
 
}
