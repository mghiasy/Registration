import { Component, OnInit } from '@angular/core';
// uses ngForm => need to import ngForm in ts file => also add formModule to appModule
import{NgForm} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginUser(){
    
  }
}
