import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AdminTeplateComponent } from './admin-teplate/admin-teplate.component';
//import { AuthenticationGuard } from './guards/authentication.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerComponent } from './manager/manager.component';
import { NewManagersComponent } from './new-managers/new-managers.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : "login",component : LoginComponent},
  {path : "",redirectTo :"/login",pathMatch:'full'},
  {path : "new-manager",component : NewManagersComponent},
  {path : "dashbord",component : DashboardComponent},
  {path : "register",component : RegisterComponent},
  {path : "consultant",component : ConsultantComponent},
  {path : "manager",component : ManagerComponent},
  {path :"admin" , component: AdminTeplateComponent,canActivate:[AuthenticationGuard],
  children:[
    
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
