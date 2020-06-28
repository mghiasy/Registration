import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
//insert httpClient with DI =>using constructor
  constructor(private _http:HttpClient ) { }
//returns observable of type "Any"
  public loginUserFromRemote(user:User) : Observable<any>{
    //call restfull endpoint here
    return this._http.post<any>("http://localhost:8090/loginUser",user);
  }
}
