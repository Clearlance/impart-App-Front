import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { Posts } from '../../providers/posts';
import { HomeMap } from '../home-map/home-map';

@IonicPage()
@Component({
  selector: 'page-post-page',
  templateUrl: 'post-page.html',
})
export class PostPage {
  
  postData: any = {}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public posts: Posts,
    private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }
  
  postForms(form) {
    console.log(form);
    if(form.invalid) {
      return alert("Please fill in all the required fields.");
    }
    this.posts.postForms(this.postData)
    .map(res =>  res.json())
    .subscribe(res => {
      this.app.getRootNav().setRoot(HomeMap);
    }, error => {
      switch(error.status) {
        case 404:
          alert("404: Page Not Found");
          break;
        case 400:
          alert("400: Bad Request");
          break;
        case 500:
          alert("500: IT'S ALL OVER");
          break;
        case null:
          alert("User is offline");
          break;
        default:
          console.log("Not Working");
          break;
      }
    });
  }

}
