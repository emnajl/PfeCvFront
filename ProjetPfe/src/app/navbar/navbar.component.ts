import { Component, OnInit } from '@angular/core';
import { AuthentifcationService } from '../services/authentifcation.service';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'ProjetPfe';
  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
  data:any;

  constructor(public authService : AuthentifcationService ,private router:Router,private http: HttpClient){
    
  }




ngOnInit(): void {
  
}
handelLogout(){
  this.authService.logout();
 
}


}


