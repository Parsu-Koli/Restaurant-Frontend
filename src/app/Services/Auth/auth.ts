import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private apiUrl = 'https://restaurant-api-bk12.onrender.com/api/User';
  private TOKEN_KEY = 'token';

  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  saveToken(token: string) {
  sessionStorage.setItem(this.TOKEN_KEY, token);
  this.loggedIn.next(true);
}

logout() {
  sessionStorage.removeItem(this.TOKEN_KEY);
  this.loggedIn.next(false);
}

getToken() {
  return sessionStorage.getItem(this.TOKEN_KEY);
}

private hasToken(): boolean {
  return !!sessionStorage.getItem(this.TOKEN_KEY);
}
}
