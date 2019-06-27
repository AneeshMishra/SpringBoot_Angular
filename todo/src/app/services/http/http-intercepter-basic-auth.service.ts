import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicedAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  

  constructor(private basicedAuthenticationService: BasicedAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let basicAuthHeaderString= this.basicedAuthenticationService.getAuthenticatedToken();
   let username = this.basicedAuthenticationService.getAuthenticatedUser();
   if(basicAuthHeaderString && username){ req = req.clone({
      setHeaders:{
        Authorization: basicAuthHeaderString
      }
    });}
    return next.handle(req);
  }
}
