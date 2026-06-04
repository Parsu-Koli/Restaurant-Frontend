import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TableService } from '../../../Services/TableServices/table-service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-tables',
  imports: [CommonModule, RouterModule],
  templateUrl: './get-tables.html',
  styleUrl: './get-tables.css',
})
export class GetTables implements OnInit {

  tables: any[] = [];

  constructor(private tableService: TableService, private cdr: ChangeDetectorRef,private rout: Router) {
    this.tableService = tableService;
  }

  ngOnInit(): void {
    this.tableService.getAllTables().subscribe({
      next: (data: any[]) => {
        this.tables = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching tables:', error);
      }
    });
  }

  viewItem(id: number) {
    this.rout.navigate(['/getOrderbytable/', id]);
  }
}