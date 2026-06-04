import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OrderService } from '../../../Services/OrderServices/order-service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [CommonModule,RouterLink],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements OnInit {

  orders: any[] = [];

  constructor(private orderService: OrderService, private cdf: ChangeDetectorRef) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data.sort((a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
        this.cdf.detectChanges();  
        console.log('Orders fetched successfully:', this.orders);
      },
      error: (error) => {
        console.error('Error fetching orders:', error);
      }
    });
  }

}
