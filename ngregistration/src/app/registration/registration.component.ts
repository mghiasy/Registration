import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user =new User();
  constructor(private _service : RegistrationService,private _router :Router){  }
 // constructor(private fb:FormBuilder) { }
  // registrationForm = this.fb.group({
  //   emailId : ['',[Validators.required]],//,Validators.pattern("^\w+@[a-zA-z_]+?\.[a-zA-z]{2,3}$")
  //   userName:['',Validators.required],
  //   password:['',Validators.required],
  //   confirmPassword:['',Validators.required]
  // })
  confirmPassword=""
  msg="";
  ngOnInit(): void {
  }
  registerUser(){
    console.log("reg");
    this._service.registeruserFormRemote(this.user).subscribe(
      data=>{
        console.log("sucess");
        this._router.navigate(["/registrationSuccess"])
      },
      error=>{
        console.log(error.error) ;
        this.msg=error.error;
        ;
      }
    )
  }
}
