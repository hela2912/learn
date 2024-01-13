import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../model/user";
import {AuthData} from "../model/auth-data";
import {BehaviorSubject, Subject} from "rxjs";
import { Router } from '@angular/router';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUri=environment.baseUri+"/auth";
  private isAuthenticated = false;
  private token: any="";
  private tokenTimer: any;
  private userId: string="";
  private authStatusListener = new Subject<boolean>();
  public err = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient,private router:Router) { }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  register(user:User){
    return this.http.post(this.baseUri+"/register",user)
  }
  login(email:string,password:string){
    const authData:AuthData={email,password};
    this.http
      .post<{ token: string,id:string,username:string,role:string ,expiresIn:number}>(
        this.baseUri+"/login",
        authData
      )
      .subscribe(response=>{
        this.err.next(null)
        this.token=response.token
        if(this.token){
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userId = response.id;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration );
          this.saveAuthData(this.token, expirationDate, this.userId);
          this.router.navigate(["/home"])
        }
      },error => {
        console.log(error.error.message)
      })
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();

    if (!authInformation) {
      this.clearAuthData()
      return ;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if(expiresIn<0)
    {
      this.clearAuthData()
      return ;
    }
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
    return true;

  }
  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    }
  }
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/auth"]);
  }
  private setAuthTimer(duration: number) {

    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }
  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId", userId);
  }
  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
    localStorage.removeItem("uname");
  }
}
