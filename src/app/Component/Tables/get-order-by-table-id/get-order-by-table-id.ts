import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TableService } from '../../../Services/TableServices/table-service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-order-by-table-id',
  imports: [CommonModule],
  templateUrl: './get-order-by-table-id.html',
  styleUrl: './get-order-by-table-id.css',
})


export class GetOrderByTableID implements OnInit {

  orders: any;

  constructor(
    private tableService: TableService,
    private route: ActivatedRoute,
    private cdf: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const tableId = Number(this.route.snapshot.paramMap.get('id'));

    if (!tableId) {
      console.error('Invalid Table ID');
      return;
    }

    this.tableService.getOrderByTableId(tableId).subscribe({
      next: (data) => {
        this.orders = data;
        console.log(this.orders);
        this.cdf.detectChanges();
      },
      error: (err) => console.error(err)
    });
  }
}