import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../../../Services/Auth/auth';

@Component({
  selector: 'app-side-nev',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './side-nev.html',
  styleUrl: './side-nev.css',
})
export class SideNev implements OnInit {

  isLoggedIn = false;

  constructor(private authService: Auth) {}

  ngOnInit(): void {

    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });

  }

}