import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  about() {
    this.router.navigate(['/about']); // Replace 'target-page' with the actual route/path of your destination page
  }
}
