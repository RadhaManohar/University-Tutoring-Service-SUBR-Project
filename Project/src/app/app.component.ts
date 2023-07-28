
import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  isMenuVisible = false;
  isadmin = false;
  isstudent = false;
  istutor = false;

  constructor(private route: Router) {
    this.checkUserRole();
  }

  ngDoCheck(): void {
    this.checkUserRole();
    this.checkMenuVisibility();
  }

  checkUserRole(): void {
    let role = sessionStorage.getItem('role');
    if (role === 'admin') {
      this.isadmin = true;
      this.isstudent = false;
    } else if (role === 'student') {
      this.isadmin = false;
      this.isstudent = true;
    } else if (role === 'tutor') {
      this.isadmin = false;
      this.isstudent = false;
      this.istutor = true;
    } else{
      this.isadmin = false;
      this.isstudent = false;
      this.istutor = false;
    }
  }

  checkMenuVisibility(): void {
    let currentRoute = this.route.url;
    if (currentRoute === '/login' || currentRoute === '/register') {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
  }
}

