import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUser } from '../../providers/app-user';
import { HomeMap } from '../home-map/home-map';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  
  user: any = {}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }
  
  signupForm(form) {
    console.log(form);
    if(form.invalid) {
      return alert("Please fill in all the required fields.");
    }
    this.appUser.register(this.user)
    .map(res =>  res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userID', res.id);
      this.navCtrl.push(HomeMap);
      
    }, error => {
      switch(error.status) {
        case 404:
          alert("404: Page Not Found");
          break;
        case 422:
          alert("422: That e-mail is already taken");
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
