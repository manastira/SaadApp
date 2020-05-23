import { Injectable } from '@angular/core';
import { User } from '../Pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userInfo: User) {
    sessionStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn() {
    return sessionStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout() {
    sessionStorage.removeItem('ACCESS_TOKEN');
  }
}
