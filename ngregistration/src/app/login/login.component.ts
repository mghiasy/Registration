import { Component, OnInit } from '@angular/core';
// uses ngForm => need to import ngForm in ts file => also add formModule to appModule
import{NgForm} from '@angular/forms'
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //map data for this object and data from UI with 2-way-binding (round bracket inside square bracket)
  user =new User();
  msg="";

  //inject service in component by constructor DI
  constructor(private _service:RegistrationService, private _router:  Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    //loginUserFromRemote will return responce in the form of observable 
    //=> to use this responce we should subscribe as 2 thing (data & error)
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        this._router.navigate(["/loginsucess"]);
        console.log("response received")
      },
      error => {
        console.log("exception occured");
        this.msg="Bad credential , please enter valid email and password"
      }

    )
  }
  registerUser(){
    this._router.navigate(["/registerUser"])
  }
}
