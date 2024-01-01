import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../shared/services/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy{
  userIsAuthenticated?:Boolean;
  authListenerSubs?: Subscription;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.authService.autoAuthUser()
    this.userIsAuthenticated = this.authService.getIsAuth();
    console.log(this.userIsAuthenticated)
    if (this.userIsAuthenticated) {
      console.log("user authenticated 1")
    }

    else {
      console.log("user mouch auth")
    }
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        if (this.userIsAuthenticated) {
          console.log("use mar7be")
        }
      });
  }

  ngOnDestroy(): void {
    // @ts-ignore
    this.authListenerSubs.unsubscribe();
    }

  onLogout() {
    this.authService.logout();
  }
}
