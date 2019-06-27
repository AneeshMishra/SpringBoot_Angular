import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from 'app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationBean{
  constructor(public token: string){}
}
export class BasicedAuthenticationService {

  constructor(private http: HttpClient) { }
 
 
  executeAuthenticationService(username,password){

    let basicAuthHeaderString ='Basic'+ window.btoa(username+':'+password);
    return this.http.get<AuthenticationBean>(`${API_URL}/auth/basicauth/`).pipe(
      map(
        data =>{
          sessionStorage.setItem('authenticatedUser',username);
          sessionStorage.setItem('token',basicAuthHeaderString);
          return data;
        }
      )
    );
  }
  executeJWTAuthenticationService(username,password){

   // let basicAuthHeaderString ='Basic'+ window.btoa(username+':'+password);
    return this.http.post<AuthenticationBean>(
      `${API_URL}/authenticate/`,
      {username,password})
      .pipe(
      map(
        data =>{
          sessionStorage.setItem('authenticatedUser',username);
          sessionStorage.setItem('token',`Bearer ${data.token}`);
          return data;
        }
      )
    );
  }
  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
  }
  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem('token');
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user ===null);
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}
