import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../Models/OrderModel';
import { OrderService } from '../../../Services/OrderServices/order-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenuService } from '../../../Services/MenuServices/menu-service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

interface SelectedItem {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.html',
  styleUrl: './create-order.css',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class CreateOrder implements OnInit {

  quantity: number = 1;

  order: OrderModel = {
    tableId: 0,
    orderItems: [],
    customerDto: {
      fullName: '',
      email: '',
      phoneNumber: '',
      address: ''
    }
  };

  // 🔍 Search
  searchTerm: string = '';
  searchResults: SelectedItem[] = [];
  selectedItem: SelectedItem | null = null;
  searchSubject = new Subject<string>();
  isLoading: boolean = false;

  constructor(
    private orderService: OrderService,
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit() {
  this.searchSubject.pipe(
    debounceTime(300),              // ⏳ wait typing
    distinctUntilChanged(),         // 🚫 avoid duplicate calls
    switchMap(term => {
      this.isLoading = true;

      return this.menuService.searchMenuItems(term);
    })
  ).subscribe({
    next: (res: any) => {

      console.log("API Response:", res); // 🔍 debug

      if (!res || res.length === 0) {
        this.searchResults = [];
        this.isLoading = false;
        return;
      }

      // ✅ Normalize API
      this.searchResults = res.map((item: any) => ({
        id: item.menuItemId || item.id,
        name: item.menuItemName || item.name,
        price: item.price || 0
      }));

      this.isLoading = false;
    },
    error: (err) => {
      console.error(err);
      this.searchResults = [];
      this.isLoading = false;
    }
  });
}

  // 🔍 Trigger search
  onSearchChange() {
  this.selectedItem = null;

  const term = this.searchTerm.trim();

  // ❌ Avoid unnecessary API calls
  if (term.length < 2) {
    this.searchResults = [];
    return;
  }

  this.searchSubject.next(term);
}

  // ✅ Select item (single click)
  selectItem(item: SelectedItem) {
    this.selectedItem = item;
    this.searchTerm = item.name;
    this.searchResults = [];
  }

  // ✅ Add item
  addItem() {
    if (!this.selectedItem) {
      alert('Please select item');
      return;
    }

    if (this.quantity <= 0) {
      alert('Quantity must be greater than 0');
      return;
    }

    const existingItem = this.order.orderItems.find(
      x => x.menuItemId === this.selectedItem!.id
    );

    if (existingItem) {
      existingItem.quantity += this.quantity;
    } else {
      this.order.orderItems.push({
        menuItemId: this.selectedItem.id,
        quantity: this.quantity,
        menuItemName: this.selectedItem.name // UI only
      });
    }

    this.resetItemSelection();
  }

  // 🔁 Reset selection
  resetItemSelection() {
    this.selectedItem = null;
    this.searchTerm = '';
    this.quantity = 1;
    this.searchResults = [];
  }

  // ➕ Increase
  increaseQty(item: any) {
    item.quantity++;
  }

  // ➖ Decrease
  decreaseQty(index: number) {
    const item = this.order.orderItems[index];
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItem(index);
    }
  }

  // ❌ Remove
  removeItem(index: number) {
    this.order.orderItems.splice(index, 1);
  }

  // ✅ Submit Order
  submitOrder() {
    if (!this.order.customerDto.fullName.trim()) {
      alert('Customer name is required');
      return;
    }

    if (this.order.orderItems.length === 0) {
      alert('Add at least one item');
      return;
    }

    const payload = {
      tableId: this.order.tableId,
      customerDto: this.order.customerDto,
      orderItems: this.order.orderItems.map(item => ({
        menuItemId: item.menuItemId,
        quantity: item.quantity
      }))
    };

    this.orderService.createOrder(payload).subscribe({
      next: () => {
        alert('Order Created Successfully');
        this.resetOrder();
        this.router.navigate(['/orders']);
      },
      error: (err) => {
        console.error(err);
        alert('Order creation failed');
      }
    });
  }

  // 🔄 Reset full form
  resetOrder() {
    this.order = {
      tableId: 0,
      orderItems: [],
      customerDto: {
        fullName: '',
        email: '',
        phoneNumber: '',
        address: ''
      }
    };
    this.resetItemSelection();
  }
}