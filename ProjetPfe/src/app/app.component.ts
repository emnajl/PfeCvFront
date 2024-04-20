import { Component, OnInit } from '@angular/core';
import { AuthentifcationService } from './services/authentifcation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'ProjetPfe';
  constructor( private authService : AuthentifcationService){

  }

  ngOnInit(): void {
    this.authService.loadJwtTokenFromLocalStorage();

    

  }
}
