import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNev } from './Component/NevBar/side-nev/side-nev';
import { TopNev } from './Component/NevBar/top-nev/top-nev';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNev, TopNev],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RestaurantUI');

}