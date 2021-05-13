import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:3000';

  getUsers() {
    return this.http.get(this.rootURL + '/user');
  }

  addUser(user: User) {
    console.log(user);
    return this.http.post(this.rootURL + '/user/create', user);
  }

  login(user: User) {
    return this.http.post(this.rootURL + '/user/login', user);
  }
}
