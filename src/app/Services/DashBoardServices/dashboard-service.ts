import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { PaymentModel } from '../../Models/PaymentModel';
import { PaymentResponseModel } from '../../Models/PaymentResponseModel';
import { Observable } from 'rxjs/internal/Observable';
 

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  
  private baseUrl: string = `${environment.apiUrl}`;

  constructor(private http: HttpClient){}

  getTotalTables(){
    return this.http.get<number>(`${this.baseUrl}/Dashboard/Total-tables`);
  }

  getOccupiedTables(){
    return this.http.get<number>(`${this.baseUrl}/Dashboard/Occupied-tables`);
  }

  getTodaysOrders(){
    return this.http.get<number>(`${this.baseUrl}/Dashboard/Todays-Order`);
  }

  getTodaysRevenue(){
    return this.http.get<number>(`${this.baseUrl}/Dashboard/Todays-Revenue`);
  }

  getTopSellingItems(){
    return this.http.get<any[]>(`${this.baseUrl}/RestaurantTable/top-6-items`);
  }

  getOrderbyTable(tableId: number){
    return this.http.get<any[]>(`${this.baseUrl}/Order/by-table/${tableId}`);
  }

  createPayment(payment: PaymentModel): Observable<PaymentResponseModel> {
    return this.http.post<PaymentResponseModel>(`${this.baseUrl}/Payment`, payment);
  }
}