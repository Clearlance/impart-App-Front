import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Map } from '../map/map';
import { List } from '../list/list';

/**
 * Generated class for the HomeMap page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home-map',
  templateUrl: 'home-map.html',
})
export class HomeMap {
  
  tab1Root: any = Map;
  tab2Root: any = List;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeMap');
  }
  
}
