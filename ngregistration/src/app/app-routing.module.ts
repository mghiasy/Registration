import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginSucessComponent } from './login-sucess/login-sucess.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'loginsucess',component:LoginSucessComponent},
  {path:'registerUser',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
