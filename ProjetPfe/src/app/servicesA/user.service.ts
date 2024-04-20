import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../Model/Manager';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  backendHost:String="http://localhost:8085";

  constructor(private http:HttpClient) { }
  public getuser():Observable<Array<Manager>>{
    return this.http.get<Array<Manager>>(this.backendHost+"/managers")
  }
  public searchuser(Keyword : string):Observable<Array<Manager>>{
    return this.http.get<Array<Manager>>(this.backendHost+"/managers/search?keyword="+Keyword)
  }
  public saveUser(manager: Manager):Observable<Manager>{
    return this.http.post<Manager>(this.backendHost+"/managers",manager);
  }
  sendAccountDetailsEmail(email: string, name: string): Observable<any> {
    const data = {
      email: email,
      name: name,

  };
  return this.http.post<any>(this.backendHost+"/email",data);
}
  public deleteUser(id: number){
    return this.http.delete(this.backendHost+"/managers/"+id);
  }
}
