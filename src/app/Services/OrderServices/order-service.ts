import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from '../../Models/OrderModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseurl: string = `${environment.apiUrl}/Order`;

  constructor(private http:HttpClient) {}

  getAllOrders() {
    return this.http.get<any[]>(`${this.baseurl}`);
  }
  
  createOrder(order:OrderModel) : Observable<OrderModel>{
    return this.http.post<OrderModel>(`${this.baseurl}`,order);
  }

  getorderById(id:number) : Observable<any>{
    return this.http.get<any>(`${this.baseurl}/${id}`);
  }

    updateOrder(order:any){
    return this.http.put(`${this.baseurl}/${order.orderId}`, order);
  }
}
