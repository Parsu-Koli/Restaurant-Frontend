import { ChangeDetectorRef, Component } from '@angular/core';
import { OrderService } from '../../../Services/OrderServices/order-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-order-by-id',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './get-order-by-id.html',
  styleUrl: './get-order-by-id.css',
})
export class GetOrderById {

  order : any;

  constructor(private service: OrderService, private cdf:ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ){}
 
   ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.service.getorderById(id).subscribe({
        next: (data) => {
          this.order = data;
          console.log('Order fetched:', this.order);
          this.cdf.detectChanges();
        },
        error: (error) => {
          console.error('Error fetching order:', error);
        }
      });
    }
  }
}
