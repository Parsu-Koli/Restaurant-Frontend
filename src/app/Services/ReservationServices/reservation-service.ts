import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseUrl:string =`${environment.apiUrl}/Reservation`;

  constructor(private http: HttpClient) {}

  getAllReservations() {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  createReservation(data:any){
  return this.http.post(`${this.baseUrl}`, data);
}
}
