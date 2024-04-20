import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentifcationService } from '../services/authentifcation.service';
@Injectable({
providedIn:'root'
})
export class AuthenticationGuard implements CanActivate{
  constructor(private authService :AuthentifcationService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  if(this.authService.isAuthenticated==true){
    return true;
 }
 else{
  this.router.navigateByUrl("/login")
  return false;
 }
}
}
