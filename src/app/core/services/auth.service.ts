import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth: boolean = false;
  constructor(private router: Router){}

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.isAuth = true;
      return true
    } else {
      return false
    }
  }

  logout () {
    this.isAuth = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuth;
  }

}
