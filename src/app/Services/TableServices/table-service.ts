import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { TableModel } from '../../Models/TableModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TableService {

  private baseurl: string = `${environment.apiUrl}/RestaurantTable`;
  private orderUrl: string = `${environment.apiUrl}/Order`;

  constructor(private http:HttpClient) { }

  getAllTables(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseurl}`);
  }

  CreateTable(Table: TableModel): Observable<TableModel> {
    return this.http.post<TableModel>(`${this.baseurl}`, Table);
  }

  getTableById(id: number): Observable<TableModel> {
    return this.http.get<TableModel>(`${this.baseurl}/${id}`);
  }

  getOrderByTableId(id: number): Observable<any> {
    return this.http.get<any>(`${this.orderUrl}/by-table/${id}`);
  }
}