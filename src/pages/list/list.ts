import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Posts } from '../../providers/posts';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class List {
  
  postItems: any = []

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public posts: Posts) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad List');
    console.log(this.getPost());
  }
  
  getPost() {
    return this.posts.getPosts(this.postItems)
    .map(res =>  res.json())
    .subscribe(postItems => {
      this.postItems = postItems;
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
