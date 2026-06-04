import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableService } from '../../../Services/TableServices/table-service';
import { TableModel } from '../../../Models/TableModel';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-table',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './add-table.html',
  styleUrl: './add-table.css',
})
export class AddTable {

  table: TableModel = {
    tableId: 0,
    tableNumber: 0,
    capacity: 0,
    locationZone: '',
    createdAt: new Date(),
    status: 'Available'
  };

  constructor(private service: TableService,private router: Router) {}

  saveTable() {

  this.table.createdAt = new Date();

  this.service.CreateTable(this.table).subscribe({
    next: (res) => {
      console.log('Table Created:', res);
      alert('Table Created Successfully');
      this.router.navigate(['/tables']);
    },
    error: (err) => {
      console.error(err);
      alert('Error creating table');
    }
  });
}

}