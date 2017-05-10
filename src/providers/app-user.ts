import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AppUser {

  constructor(public http: Http) {
    console.log('Hello AppUser Provider');
  }
  
  baseUrl: string = "https://gerardo-final-jbrownssf.c9users.io:8080/api"
  path: string = "/AppUsers"
  
  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
    );
  }
  
  login(userData) {
    return this.http.post(
      this.baseUrl + this.path + '/login',
      userData
    );
  }

  // logoutMongo(token) {
  //   return this.http.post(
  //     this.baseUrl + this.path + '/logout' + '?access_token=' + token,
  //       {}
  //     );
  // }

}
