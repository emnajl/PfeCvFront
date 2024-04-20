import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicesA/user.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Manager } from '../Model/Manager';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  consultants! : Observable<Array<Manager>>;
  errorMessage! : string ;
  searchformGroup:FormGroup |undefined;
  
  constructor(private userService :UserService,private fb:FormBuilder){}
  
  ngOnInit(): void {
    this.searchformGroup=this.fb.group({
      Keyword : this.fb.control("")
    });
    this.handelSearchManagers();
  }
  handelSearchManagers(){
    let kw=this.searchformGroup?.value.Keyword;
    this.consultants=this.userService.searchuser(kw).pipe(
      catchError( err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
     );
  }

  handeleDeleteManger(c:Manager){
    let conf=confirm("Are you sure")
    if(!conf)return;
    this.userService.deleteUser(c.id).subscribe({
      next:(resp)=>{
        this.consultants=this.consultants.pipe(
          map(data=>{
            let indexe=data.indexOf(c)
            data.slice(indexe,1);
            return data;
          })
        );
      },
      error:err=>{
        console.log(err);
      }
    });

  }
}
