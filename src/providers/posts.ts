import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Posts {

  constructor(public http: Http) {
    console.log('Hello Posts Provider');
  }
  
  baseUrl: string = "https://gerardo-final-jbrownssf.c9users.io:8080/api"
  path: string = "/Posts"
  
  postForms(postData) {
    return this.http.post(
      this.baseUrl + this.path,
      postData
    );
  }
  
  getPosts(postData) {
    return this.http.get(
      this.baseUrl + this.path,
      postData
    );
  }

}
