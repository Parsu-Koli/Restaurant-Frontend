import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor(private http:HttpClient){}

  private baseUrl : string = `${environment.apiUrl}/Customer`;
 
  AllCustomer(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
