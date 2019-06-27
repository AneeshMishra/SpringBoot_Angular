import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor( private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    
  }

}
