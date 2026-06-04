import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../Models/CategoryModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryServices {

  private baseUrl: string = `${environment.apiUrl}/Category`;

  constructor(private http: HttpClient){}

  GetAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`${this.baseUrl}/${id}`);
  }

  updateCategory(id: number, category: CategoryModel): Observable<CategoryModel> {
    return this.http.put<CategoryModel>(`${this.baseUrl}/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  createcategory(data:any){
    return this.http.post(`${this.baseUrl}`,data);
  }

}
