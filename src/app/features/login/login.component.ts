import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private auth:AuthService, private router:Router) {
    this.loginForm = this.fb.group({
      usernameLogin: ['', Validators.required],
      passwordLogin: ['', Validators.required]
    });
  }

  onSubmit() {
    const { passwordLogin, usernameLogin } = this.loginForm.value
    const isAuth = this.auth.login(passwordLogin, usernameLogin);

    if (isAuth) {
      this.router.navigate(['/list'])
    } else {
      console.log('false')
    }
  }
}
