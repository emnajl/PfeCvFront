import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Manager } from '../Model/Manager';
import { UserService } from '../servicesA/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-managers',
  templateUrl: './new-managers.component.html',
  styleUrls: ['./new-managers.component.css']
})
export class NewManagersComponent implements OnInit{
  newManagerFormGroup!:FormGroup;


  constructor(private fb:FormBuilder,private userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.newManagerFormGroup=this.fb.group({
      name:this.fb.control(null,[Validators.required, Validators.minLength(4)]),
      email:this.fb.control(null,[Validators.required, Validators.email]),
    });
    
  }
  handelSaveManager(){
    let manager :Manager=this.newManagerFormGroup.value;
    let email: string = manager.email.toString();
    let name: string = manager.name.toString();
    this.userService.saveUser(manager).subscribe({
      next:data=>{
        alert("Manager has been  successfully saved ")
        // Envoyer un e-mail au nouveau manager
        this.userService.sendAccountDetailsEmail(email,name).subscribe({
          next: () => {
            console.log("Account details email sent successfully");
        
        this.router.navigateByUrl("/managers");
      },
      error: err => {
        console.error("Failed to send account details email:", err);
        // Gérer l'erreur, par exemple afficher un message à l'utilisateur
      }
    });
      },
      error :err=>{
        console.log(err);
      }
    });

  }

}
