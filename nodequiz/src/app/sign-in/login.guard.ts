import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    const loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert('You are currently not logged in and will be redirected to Login page');
      this.router.navigate(['/login']);
    }

    return loggedIn;
  }
}
