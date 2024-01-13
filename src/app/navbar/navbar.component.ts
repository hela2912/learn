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
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
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
