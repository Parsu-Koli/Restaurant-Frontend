import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../../Services/Auth/auth';

@Component({
  selector: 'app-top-nev',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './top-nev.html',
  styleUrl: './top-nev.css'
})
export class TopNev implements OnInit {

  todayDate: Date = new Date();
  userName: string = 'Admin';
  notificationCount: number = 3;

  isLoggedIn = false;

  constructor(
    private router: Router,
    private authService: Auth
  ) {}

  ngOnInit(): void {

    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });

  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}