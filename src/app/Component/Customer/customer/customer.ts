import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../Services/CustomerServices/customer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [CommonModule,FormsModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer implements OnInit {

  constructor(private service: CustomerService, private cdf : ChangeDetectorRef) { }

  customers: any[] = [];

  ngOnInit(): void {
    this.service.AllCustomer().subscribe({
      next: (data: any[]) => {
        this.customers = data;
        this.cdf.detectChanges();
      },
      error: (error: any) => {
        console.error('Error fetching menu items:', error);
      }
    });
  }
}

