import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/model/user";
import {AuthService} from "../shared/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

user:User=new User()
  constructor(private authService: AuthService,private router:Router) {}

  onRegister(){
    this.authService.register(this.user).subscribe(res=>{
      console.log("welcome"+res)
    },error => {
      const errors = error.error.message;
      console.log(JSON.stringify(this.user));

      console.log("nope: "+errors)
    })
  }



}
