import {Component, OnInit} from '@angular/core';
import {User} from "../shared/model/user";
import {AuthService} from "../shared/services/auth.service";
import {Router} from '@angular/router';
import {AuthData} from "../shared/model/auth-data";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  user: User = new User()
  authData:AuthData=new AuthData();
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    const token=localStorage.getItem("token")
    if(token){
      this.router.navigate(["/home"]).then(r => {
      })

    }
    }
  onLogin(){
    this.authService.login(this.authData.email,this.authData.password)
  }
  onRegister() {
    this.user.role = "Student"
    this.authService.register(this.user).subscribe(res => {
      window.alert("Welcome New user :" + this.user.username);


    }, error => {
      const errors = error.error.message;
      window.alert("error:"+errors);


    })
  }


}
