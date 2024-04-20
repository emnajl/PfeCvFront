import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthentifcationService } from '../services/authentifcation.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('pulse', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('pulse', style({
        transform: 'scale(1.1)'
      })),
      transition('normal => pulse', animate('500ms ease-in-out')),
      transition('pulse => normal', animate('500ms ease-in-out'))
    ])
  ]
})

export class LoginComponent implements OnInit{
  buttonState = 'normal';

  animateButton() {
    this.buttonState = 'pulse';
    setTimeout(() => {
      this.buttonState = 'normal';
    }, 500);
  }
  
  userFormGroup!: FormGroup;
  errorMessage : any;
  
  
  
  
  constructor(private fb: FormBuilder ,private authService : AuthentifcationService,private router:Router ){}


  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control("")
    });
  }

  handelelogin(){
    let username =this.userFormGroup.value.username;
    let pwd =this.userFormGroup.value.password;
    this.authService.login(username,pwd).subscribe({
      next : data=>{
        this.authService.loadProfile(data);
        this.router.navigateByUrl("/admin")
      },
      error:err=>{
        console.log(err);
      }
    });
  }
}
