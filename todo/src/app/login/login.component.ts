import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';
import { BasicedAuthenticationService } from '../services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username='aneesh';
  password='mishra';
  errorMessage="Invalid Credentials";
  inValid: boolean = true;
  constructor(private router: Router, private basicAuthenticationService: BasicedAuthenticationService) { }

  ngOnInit() {
  }
  handelLogin(){
    this.errorMessage ='';
    this.basicAuthenticationService.executeAuthenticationService(this.username,this.password).subscribe(
     data => {
        this.inValid = true;
        this.router.navigate(['welcome/'+this.username]);
      } ,
      error =>{
        console.log(error);
        this.errorMessage = error;
        this.errorMessage ='Invalid Credentials';
        this.inValid = false;
      }
    );
    
  }
  handeJWTlLogin(){
    this.errorMessage ='';
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password).subscribe(
     data => {
        this.inValid = true;
        this.router.navigate(['welcome/'+this.username]);
      } ,
      error =>{
        console.log(error);
        this.errorMessage = error;
        this.errorMessage ='Invalid Credentials';
        this.inValid = false;
      }
    );
    
  }
}
