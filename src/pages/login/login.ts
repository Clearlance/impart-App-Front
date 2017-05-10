import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUser } from '../../providers/app-user';
import { HomeMap } from '../home-map/home-map';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  
  user: any = {}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  
   loginForm(form) {
    console.log(form);
    if(form.invalid) {
      return alert("Please fill in all the required fields.");
    }
    this.appUser.login(this.user)
    .map(res =>  res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userID', res.userId);
      this.navCtrl.push(HomeMap);
      
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
