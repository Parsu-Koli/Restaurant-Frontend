import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DashboardService } from '../../Services/DashBoardServices/dashboard-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  totalTables: number = 0;
  OccupiedTables: number = 0;
  TodaysOrders: number = 0;
  TodaysRevenue: number = 0;
  TopSellingItems: any[] = [];
  searchTableId!: number;
  tableOrders: any[] = [];
  showPaymentForm: boolean = false;
  selectedOrder: any = null;
  paymentMethod: string = '';

  constructor(private dashboardService: DashboardService, private cdr: ChangeDetectorRef, private router: Router,) { }

  ngOnInit(): void {
    this.loadTotalTables();
    this.loadOccupiedTables();
    this.loadTodaysOrders();
    this.loadTodaysRevenue();
    this.loadTopSellingItems();

  }

  loadTotalTables() {
    this.dashboardService.getTotalTables().subscribe({
      next: (data) => {
        this.totalTables = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error fetching total tables', err)
    });
  }

  loadOccupiedTables() {
    this.dashboardService.getOccupiedTables().subscribe({
      next: (data) => {
        this.OccupiedTables = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error fetching occupied tables', err)
    });
  }

  loadTodaysOrders() {
    this.dashboardService.getTodaysOrders().subscribe({
      next: (data) => {
        this.TodaysOrders = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error fetching today\'s orders', err)
    });
  }


  loadTodaysRevenue() {
    this.dashboardService.getTodaysRevenue().subscribe({
      next: (data) => {
        this.TodaysRevenue = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error fetching today\'s revenue', err)
    });
  }

  loadTopSellingItems() {
    this.dashboardService.getTopSellingItems().subscribe({
      next: (data: any[]) => {
        this.TopSellingItems = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error fetching top selling items', err)
    });
  }

  searchTableOrders() {

    if (!this.searchTableId) {
      alert('Please enter table number');
      return;
    }

    this.dashboardService.getOrderbyTable(this.searchTableId).subscribe({
      next: (data: any) => {

        if (data) {
          this.tableOrders = [data];
          this.showPaymentForm = false;
        } else {
          this.tableOrders = [];
        }
        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error('Error fetching table orders', err);
        this.tableOrders = [];
      }
    });
  }

openPaymentForm(order: any) {
  this.selectedOrder = order;
  this.showPaymentForm = true;

  console.log('Selected Order:', this.selectedOrder);
}


// submitPayment() {

//   if (!this.paymentMethod) {
//     alert('Please select payment method');
//     return;
//   }

//   const paymentData = {
//     orderId: this.selectedOrder.id,
//     customerId: this.selectedOrder.customerId,
//     paymentMethod: this.paymentMethod
//   };

//   console.log('Payment Payload:', paymentData);  // 🔍 check here

//   this.dashboardService.createPayment(paymentData).subscribe({
//     next: (res) => {
//       alert('Payment Successful');
//       this.showPaymentForm = false;
//       this.tableOrders = [];
//     },
//     error: (err) => {
//       console.error('Payment Failed', err);
//     }
//   });
// }

submitPayment() {

  if (!this.paymentMethod) {
    alert('Please select payment method');
    return;
  }

  const paymentData = {
    orderId: this.selectedOrder.id,
    customerId: this.selectedOrder.customerId,
    paymentMethod: this.paymentMethod
  };

  this.dashboardService.createPayment(paymentData).subscribe({
    next: () => {

      alert('Payment Successful');

      // ✅ FULL RESET (IMPORTANT)
      this.showPaymentForm = false;
      this.selectedOrder = null;
      this.paymentMethod = '';
      this.tableOrders = [];
      this.searchTableId = 0;

      // ✅ FORCE UI UPDATE
      this.cdr.detectChanges();

    },
    error: (err) => {
      console.error('Payment Failed', err);
    }
  });
}

}
