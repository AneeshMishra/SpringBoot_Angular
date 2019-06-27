import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
name= '';
message: string ;
errorMessage: string;
  constructor(
    private welcomeService: WelcomeDataService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    
    this.name= this.router.snapshot.params['name'];
  }
  getWelcomeMessage(){
    this.welcomeService.executeHellowBeanService(this.name).subscribe(
      response => this.handleSuccessfullResponse(response),
      
    error => this.handleErrorResponse(error)
    );
  }
handleSuccessfullResponse(response){
this.message= response.message;
}
handleErrorResponse(error){

this.errorMessage = error.error.message;
}
}
