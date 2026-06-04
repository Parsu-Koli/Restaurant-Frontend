import { Component } from '@angular/core';
import { Auth } from '../../Services/Auth/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';
  errorMessage = '';

  constructor(private authService: Auth, private router: Router){}

  login(){

    const loginData = {
      email: this.email,
      password: this.password
    }

    this.authService.login(loginData).subscribe({
      next: (res)=>{

        this.authService.saveToken(res.token);

        console.log("Login success", res);

        this.router.navigate(['/dashboard']);
      },

      error: (err)=>{
        this.errorMessage = "Invalid email or password";
        console.log(err);
      }
    })

  }
}
