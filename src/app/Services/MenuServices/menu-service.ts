import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { Menu } from '../../Models/menu';

@Injectable({
  providedIn: 'root',
})


export class MenuService { 
  
  private baseUrl: string = `${environment.apiUrl}/MenuItem`;

  constructor(private http: HttpClient) {}

  getAllMenuItems() : Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  CreateMenuItem(data: FormData) {
  return this.http.post(`${this.baseUrl}`, data);
}

  getMenuItemById(id: number): Observable<Menu> {
    return this.http.get<Menu>(`${this.baseUrl}/${id}`);
  }

  updateMenuItem(id: number, menu: Menu): Observable<Menu> {
    return this.http.put<Menu>(`${this.baseUrl}/${id}`, menu);
  }

  deleteMenuItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  searchMenuItems(term: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/search?term=${term}`);
}
}
