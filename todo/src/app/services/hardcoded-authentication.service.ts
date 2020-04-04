import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authincate(username,password){
    if(username === password){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user ===null);
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}