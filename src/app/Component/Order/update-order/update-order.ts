import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../../Services/OrderServices/order-service';

@Component({
  selector: 'app-update-order',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-order.html',
  styleUrl: './update-order.css',
})
export class UpdateOrder implements OnInit {

  orderId!: number;

  menuItemId: number = 0;
  quantity: number = 0;

  order: any = {
    orderId: 0,
    tableId: 0,
    status: '',
    orderItems: []
  };

  constructor(
    private service: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private cdf: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.orderId = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getorderById(this.orderId).subscribe((res: any) => {

      this.order = {
        orderId: res.id,
        tableId: res.tableId ?? res.restaurantTable?.id ?? 0,
        status: res.status,
        orderItems: (res.items || res.orderItems || []).map((i: any) => ({
          menuItemId: i.menuItemId,
          quantity: i.quantity
        }))
      };

      this.cdf.detectChanges();
    });
  }

  increaseQty(index: number) {
    this.order.orderItems[index].quantity++;
  }

  decreaseQty(index: number) {

    if (this.order.orderItems[index].quantity > 1) {
      this.order.orderItems[index].quantity--;
    }
    else {
      // If quantity becomes 0 remove item
      this.removeItem(index);
    }

  }

  addItem() {

    if (!this.menuItemId || !this.quantity) {
      alert('Enter valid menu item and quantity');
      return;
    }

    this.order.orderItems.push({
      menuItemId: this.menuItemId,
      quantity: this.quantity
    });

    this.menuItemId = 0;
    this.quantity = 0;
  }

  removeItem(index: number) {
    this.order.orderItems.splice(index, 1);
  }

  updateOrder() {

    if (this.order.orderItems.length === 0) {
      alert("Order must contain items");
      return;
    }

    this.service.updateOrder(this.order).subscribe({
      next: (res) => {
        alert("Order Updated Successfully");
        this.router.navigate(['/orders']);
      },
      error: (err) => {
        console.error(err);
        alert("Update failed");
      }
    });

  }
}