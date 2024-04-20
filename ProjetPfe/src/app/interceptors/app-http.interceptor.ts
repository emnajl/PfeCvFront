import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthentifcationService } from '../services/authentifcation.service';
import { Router } from '@angular/router';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private authService : AuthentifcationService,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("******")
    console.log(request.url);
    // Vérifier si l'utilisateur est authentifié et si le jeton d'accès est disponible
    if(this.authService.isAuthenticated && this.authService.accessToken){
      // Cloner la requête et ajouter l'en-tête d'authentification
      let newRequest = request.clone({
        headers : request.headers.set('Authorization','Bearer '+this.authService.accessToken)
      });
      // Envoyer la nouvelle requête avec l'en-tête d'authentification
      return next.handle(newRequest).pipe(
        catchError(err=>{
          if(err.status==401){
            this.authService.logout(); 
          }
          return throwError(err.message)
        })

      );
    } else {
      // Si l'utilisateur n'est pas authentifié ou si le jeton d'accès est manquant, envoyer la requête d'origine sans en-tête d'authentification
      return next.handle(request);
    }
  }  
}
