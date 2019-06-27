import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { API_URL } from 'app.constants';

@Injectable({
  providedIn: 'root'
})
export class HellowWorldBean{
  constructor(public message: string){}
}

export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHellowBeanService(name : string){

    return this.http.get<HellowWorldBean>(`${API_URL}/hello-world-bean/${name}`);
  }
  
}
